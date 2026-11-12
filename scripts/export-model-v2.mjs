import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { buildLandscapeV2 } from '../src/landscape-v2.js';
import { applyBakedLighting } from '../src/baked-light-v2.js';

if (!globalThis.FileReader) globalThis.FileReader = class NodeFileReader {
  async readAsArrayBuffer(blob) {
    try { this.result = await blob.arrayBuffer(); this.onload?.({ target: this }); }
    catch (error) { this.error = error; this.onerror?.({ target: this }); }
    finally { this.onloadend?.({ target: this }); }
  }
  async readAsDataURL(blob) {
    try {
      this.result = `data:${blob.type || 'application/octet-stream'};base64,${Buffer.from(await blob.arrayBuffer()).toString('base64')}`;
      this.onload?.({ target: this });
    } catch (error) { this.error = error; this.onerror?.({ target: this }); }
    finally { this.onloadend?.({ target: this }); }
  }
};
if (!globalThis.ProgressEvent) globalThis.ProgressEvent = class ProgressEvent extends Event {
  constructor(type, init = {}) { super(type); Object.assign(this, init); }
};

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const destination = path.join(root, 'dist/assets/jiuzhai-paper-model.glb');
const reportPath = path.join(root, 'docs/model-validation-v4-water-light.json');
const world = buildLandscapeV2();
const lightingBytes = await fs.readFile(path.join(root, 'dist/assets/paper-light-v4-water-light.bin'));
const lighting = applyBakedLighting(world.group, lightingBytes, { software: false, aoStrength: .27, minimumBrightness: .66, waterWeight: .12, throwOnMismatch: true });
world.group.userData.title = '九寨 · 水行记 / Jiuzhai · A Walk Through Water';
world.group.userData.provenance = 'Hand-constructed procedural Three.js paper geometry guided by generated concept art and the owner-provided paper colour reference. Not a neural image-to-3D conversion.';
world.group.userData.lighting = {
  ambientVisibility: 'Twelve-ray local BVH visibility, multiplied into original linear vertex colors.',
  bakedSunShadow: false,
  sceneFingerprint: lighting.sceneHash,
};
world.group.userData.scenicTopology = 'Artistic compression of the three Jiuzhaigou valleys; Changhai has no surface-water outlet.';

function inspect(object) {
  object.updateMatrixWorld(true);
  let meshes = 0, vertices = 0, triangles = 0, invalidValues = 0, coloredVertices = 0;
  let minimumColor = Infinity, maximumColor = -Infinity;
  object.traverse(node => {
    if (!node.isMesh) return;
    meshes++;
    const position = node.geometry.getAttribute('position');
    if (!position) return;
    vertices += position.count;
    triangles += (node.geometry.index?.count || position.count) / 3;
    for (let i = 0; i < position.count; i++) {
      if (![position.getX(i), position.getY(i), position.getZ(i)].every(Number.isFinite)) invalidValues++;
    }
    const color = node.geometry.getAttribute('color');
    if (color) {
      coloredVertices += color.count;
      for (let i = 0; i < color.count; i++) for (const value of [color.getX(i), color.getY(i), color.getZ(i)]) {
        if (!Number.isFinite(value)) invalidValues++;
        minimumColor = Math.min(minimumColor, value);
        maximumColor = Math.max(maximumColor, value);
      }
    }
  });
  const bounds = new THREE.Box3().setFromObject(object);
  return {
    meshes, vertices, triangles: Math.round(triangles), coloredVertices, invalidValues,
    colorRange: [minimumColor, maximumColor],
    bounds: { min: bounds.min.toArray(), max: bounds.max.toArray(), size: bounds.getSize(new THREE.Vector3()).toArray() },
  };
}

const original = inspect(world.group);
assert.equal(original.invalidValues, 0, 'Original model must contain only finite vertex/color values.');
assert.equal(original.coloredVertices, original.vertices, 'Every original mesh must retain vertex color.');
// Compact only this throwaway export scene. Runtime geometry and the AO asset
// stay full precision; glTF natively supports normalized UNSIGNED_SHORT color.
const referenceColors = new Map();
const colorErrorTolerance = 1.6e-5;
let maxColorQuantizationError = 0;
let omittedWindAttributeBytes = 0;
world.group.traverse(node => {
  if (!node.isMesh) return;
  // windWeight drives the site's live custom shader, which is not part of this
  // static GLB. Omit its unused accessor only from the export scene.
  const wind = node.geometry.getAttribute('windWeight');
  if (wind) {
    omittedWindAttributeBytes += wind.array.byteLength;
    node.geometry.deleteAttribute('windWeight');
  }
  // Only the portable export is indexed: identical corner attributes share
  // a vertex, preserving crease normals and their unique baked colour.
  const compact=mergeVertices(node.geometry,1e-7);node.geometry.dispose();node.geometry=compact;
  const color = node.geometry.getAttribute('color');
  if (!color) return;
  const originalValues = new Float32Array(color.count * 3);
  const packed = new Uint16Array(color.count * 3);
  for (let i = 0; i < color.count; i++) {
    const values = [color.getX(i), color.getY(i), color.getZ(i)];
    for (let channel = 0; channel < 3; channel++) {
      const at = i * 3 + channel;
      originalValues[at] = values[channel];
      packed[at] = Math.round(THREE.MathUtils.clamp(values[channel], 0, 1) * 65535);
      maxColorQuantizationError = Math.max(maxColorQuantizationError, Math.abs(values[channel] - packed[at] / 65535));
    }
  }
  assert(!referenceColors.has(node.name), 'Export meshes need unique names for per-vertex color verification.');
  referenceColors.set(node.name, { count: color.count, values: originalValues });
  node.geometry.setAttribute('color', new THREE.Uint16BufferAttribute(packed, 3, true));
});
assert(maxColorQuantizationError <= colorErrorTolerance, 'Export color quantization must stay within tolerance.');
const binary = await new GLTFExporter().parseAsync(world.group, { binary: true, onlyVisible: true });
assert(binary instanceof ArrayBuffer);
const bytes = Buffer.from(binary);
assert.equal(bytes.toString('ascii', 0, 4), 'glTF');
assert.equal(bytes.readUInt32LE(4), 2);
assert.equal(bytes.readUInt32LE(8), bytes.length);
assert(bytes.length < 24_000_000, 'Export must leave headroom below the Sites 26,214,400-byte file limit.');
const loaded = await new GLTFLoader().parseAsync(binary, '');
const reconstructed = inspect(loaded.scene);
assert.equal(reconstructed.invalidValues, 0);
assert.equal(reconstructed.triangles, original.triangles, 'GLB roundtrip must preserve topology.');
assert.equal(reconstructed.coloredVertices, reconstructed.vertices, 'GLB roundtrip must retain every baked color attribute.');
let maxBoundsDifference = 0;
for (const side of ['min', 'max']) for (let i = 0; i < 3; i++) {
  maxBoundsDifference = Math.max(maxBoundsDifference, Math.abs(original.bounds[side][i] - reconstructed.bounds[side][i]));
}
assert(maxBoundsDifference < .001, 'GLB roundtrip must preserve world bounds.');
assert(original.colorRange.every((value, i) => Math.abs(value - reconstructed.colorRange[i]) <= colorErrorTolerance), 'GLB roundtrip must preserve the baked color range within quantization tolerance.');
let maxRoundtripColorError = 0, verifiedColoredMeshes = 0;
loaded.scene.traverse(node => {
  if (!node.isMesh) return;
  const reference = referenceColors.get(node.name);
  assert(reference, `Missing color reference for reloaded mesh ${node.name}.`);
  const color = node.geometry.getAttribute('color');
  assert.equal(color.count, reference.count, 'Color-only packing must preserve each mesh vertex count.');
  assert.equal(color.normalized, true, 'Packed vertex colors must remain normalized on reload.');
  const colorArray = color.isInterleavedBufferAttribute ? color.data.array : color.array;
  assert(colorArray instanceof Uint16Array, 'Packed colors must remain 16-bit after reloading.');
  for (let i = 0; i < color.count; i++) {
    const values = [color.getX(i), color.getY(i), color.getZ(i)];
    for (let channel = 0; channel < 3; channel++) {
      maxRoundtripColorError = Math.max(maxRoundtripColorError, Math.abs(values[channel] - reference.values[i * 3 + channel]));
    }
  }
  verifiedColoredMeshes++;
});
assert.equal(verifiedColoredMeshes, referenceColors.size, 'Every source color attribute must be verified after reload.');
assert(maxRoundtripColorError <= colorErrorTolerance, 'Every reloaded color component must remain within tolerance.');
let provenance = null, retainedLighting = null;
loaded.scene.traverse(node => {
  if (node.userData.provenance) provenance = node.userData.provenance;
  if (node.userData.lighting) retainedLighting = node.userData.lighting;
});
assert.match(provenance || '', /Not a neural image-to-3D conversion/);
assert.equal(retainedLighting?.bakedSunShadow, false);
assert.equal(retainedLighting?.sceneFingerprint, lighting.sceneHash);
const report = {
  artifact: 'dist/assets/jiuzhai-paper-model.glb', format: 'glTF 2.0 binary', version: '4-water-light',
  threeVersion: THREE.REVISION, bytes: bytes.length, mebibytes: +(bytes.length / 1024 / 1024).toFixed(3),
  provenance, lighting, original, reconstructed,
  exportEncoding: {
    vertexColor: 'UNSIGNED_SHORT normalized', colorComponentBits: 16,
    omittedRuntimeAttributes: ['windWeight'], omittedWindAttributeBytes,
    runtimeGeometryUnchanged: true, geometryEncoding:'Indexed matching position/normal/colour corners at 1e-7 tolerance', maxColorQuantizationError, maxRoundtripColorError,
    colorErrorTolerance, verifiedColoredMeshes, targetMaximumBytes: 24_000_000,
    sitesMaximumBytes: 26_214_400, sitesHeadroomBytes: 26_214_400 - bytes.length,
  },
  validation: {
    glbHeader: 'pass', geometryAndColorValues: 'finite', triangleCount: 'pass',
    bounds: 'pass', maxBoundsDifference, everyMeshRetainsColor: 'pass',
    retainedProvenance: 'pass', ambientOnlyNoBakedSun: 'pass',
    everyColorComponentWithinTolerance: 'pass', publicationFileBudget: 'pass',
  },
};
await fs.mkdir(path.dirname(destination), { recursive: true });
await fs.mkdir(path.dirname(reportPath), { recursive: true });
// Publish bytes only once the re-imported artifact passes all checks.
await fs.writeFile(destination, bytes);
await fs.writeFile(reportPath, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
