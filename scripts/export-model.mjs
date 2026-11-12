import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { buildLandscape } from '../src/landscape.js';

// The exporter uses browser FileReader for binary Blob packaging. No image,
// Canvas, browser, or remote resource is involved in this texture-free model.
if (!globalThis.FileReader) {
  globalThis.FileReader = class NodeFileReader {
    result = null;
    error = null;
    onload = null;
    onloadend = null;
    onerror = null;
    async readAsArrayBuffer(blob) {
      try { this.result = await blob.arrayBuffer(); this.onload?.({ target: this }); }
      catch (error) { this.error = error; this.onerror?.({ target: this }); }
      finally { this.onloadend?.({ target: this }); }
    }
    async readAsDataURL(blob) {
      try {
        const data = Buffer.from(await blob.arrayBuffer()).toString('base64');
        this.result = `data:${blob.type || 'application/octet-stream'};base64,${data}`;
        this.onload?.({ target: this });
      } catch (error) { this.error = error; this.onerror?.({ target: this }); }
      finally { this.onloadend?.({ target: this }); }
    }
  };
}
if (!globalThis.ProgressEvent) {
  globalThis.ProgressEvent = class ProgressEvent extends Event {
    constructor(type, init = {}) {
      super(type);
      this.lengthComputable = init.lengthComputable || false;
      this.loaded = init.loaded || 0;
      this.total = init.total || 0;
    }
  };
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const destination = path.join(root, 'dist/assets/jiuzhai-paper-model.glb');
const reportPath = path.join(root, 'docs/model-validation.json');
const world = buildLandscape();
world.group.userData.provenance = 'Procedurally constructed Three.js paper geometry following the generated composition concept. Not a neural image-to-3D conversion.';
world.group.userData.title = 'Jiuzhai · Paper Memory Atlas';
world.group.userData.conceptAsset = 'jiuzhai-concept.png';
world.group.userData.scenicTopology = 'Artistic schematic of three Y-shaped valleys; Changhai has no surface-water outlet.';

function inspect(object) {
  let meshes = 0, vertices = 0, triangles = 0, invalidVertexValues = 0;
  object.traverse(node => {
    if (!node.isMesh) return;
    meshes++;
    const position = node.geometry.getAttribute('position');
    if (!position) return;
    vertices += position.count;
    triangles += (node.geometry.index?.count || position.count) / 3;
    for (const value of position.array) if (!Number.isFinite(value)) invalidVertexValues++;
  });
  const bounds = new THREE.Box3().setFromObject(object);
  return {
    meshes, vertices, triangles: Math.round(triangles), invalidVertexValues,
    bounds: { min: bounds.min.toArray(), max: bounds.max.toArray(), size: bounds.getSize(new THREE.Vector3()).toArray() },
  };
}

const original = inspect(world.group);
assert.equal(original.invalidVertexValues, 0, 'Source geometry must contain finite vertices.');
const binary = await new GLTFExporter().parseAsync(world.group, {
  binary: true,
  onlyVisible: true,
  includeCustomExtensions: false,
});
assert(binary instanceof ArrayBuffer, 'Expected a binary GLB ArrayBuffer.');
await fs.mkdir(path.dirname(destination), { recursive: true });
await fs.writeFile(destination, Buffer.from(binary));

const bytes = await fs.readFile(destination);
assert.equal(bytes.toString('ascii', 0, 4), 'glTF', 'GLB magic must match.');
assert.equal(bytes.readUInt32LE(4), 2, 'GLB version must be 2.');
assert.equal(bytes.readUInt32LE(8), bytes.length, 'GLB header must report its exact size.');
const loaded = await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength), '');
const reconstructed = inspect(loaded.scene);
assert.equal(reconstructed.invalidVertexValues, 0, 'Reloaded geometry must contain finite vertices.');
assert.equal(reconstructed.triangles, original.triangles, 'Round trip must preserve the triangle count.');
let maxBoundsDifference = 0;
for (const side of ['min', 'max']) for (let i = 0; i < 3; i++) {
  maxBoundsDifference = Math.max(maxBoundsDifference, Math.abs(original.bounds[side][i] - reconstructed.bounds[side][i]));
}
assert(maxBoundsDifference < 0.001, 'Round trip must preserve the model bounds.');
let provenance = null;
loaded.scene.traverse(node => { if (node.userData.provenance) provenance = node.userData.provenance; });
assert.match(provenance || '', /Not a neural image-to-3D conversion/, 'The GLB must retain its production provenance.');
const report = {
  artifact: 'dist/assets/jiuzhai-paper-model.glb',
  format: 'glTF 2.0 binary',
  threeVersion: THREE.REVISION,
  bytes: bytes.length,
  mebibytes: Number((bytes.length / 1024 / 1024).toFixed(3)),
  provenance,
  original,
  reconstructed,
  validation: {
    glbHeader: 'pass', finiteVertices: 'pass', triangleCount: 'pass',
    bounds: 'pass', maxBoundsDifference,
    retainedProvenance: 'pass',
    note: 'Reloaded mesh count may increase because glTF separates multi-material mesh primitives.',
  },
};
await fs.mkdir(path.dirname(reportPath), { recursive: true });
await fs.writeFile(reportPath, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
