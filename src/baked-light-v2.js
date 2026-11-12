import { BufferAttribute, Matrix4 } from 'three';

// Offline visibility, never a rendered backdrop: the same scene geometry is
// still projected and lit by Three.js / the software renderer. Positions,
// normals, indices, and relative mesh transforms all take part in validation.
// File layout: 48-byte header, 16 bytes per mesh, then [AO, sun] uint8 pairs.
export const PAPER_LIGHT_VERSION = 2;
const HEADER_BYTES = 48;
const RECORD_BYTES = 16;
const MAGIC = 'JZLIGHT2';
// Math / normal construction can differ by a few ULPs across JS runtimes.
// Keep every coordinate and normal in the fingerprint, at 0.1 mm / 1e-4
// component precision; topology, vertex order, and counts remain exact.
export const PAPER_LIGHT_GEOMETRY_TOLERANCE = 1e-4;
const GEOMETRY_HASH_PRECISION = 1 / PAPER_LIGHT_GEOMETRY_TOLERANCE;
const floatScratch = new Float32Array(1);
const uintScratch = new Uint32Array(floatScratch.buffer);
const appliedStates = new WeakMap();

function mix(hash, word) { return Math.imul((hash ^ word) >>> 0, 16777619) >>> 0; }
function floatWord(value) {
  // Canonicalise -0 so mathematically identical transform compositions agree.
  floatScratch[0] = value === 0 ? 0 : value;
  return uintScratch[0];
}
function geometryWord(value) {
  if (!Number.isFinite(value)) throw new Error('Paper lighting geometry contains a nonfinite component.');
  return Math.round(value * GEOMETRY_HASH_PRECISION);
}

function geometryHash(mesh, relativeMatrix) {
  const geometry = mesh.geometry;
  const position = geometry.getAttribute('position');
  const normal = geometry.getAttribute('normal');
  const index = geometry.index;
  let hash = 2166136261;
  hash = mix(hash, position.count);
  hash = mix(hash, normal?.count || 0);
  hash = mix(hash, index?.count || 0);
  for (let i = 0; i < position.count; i++) {
    hash = mix(hash, geometryWord(position.getX(i)));
    hash = mix(hash, geometryWord(position.getY(i)));
    hash = mix(hash, geometryWord(position.getZ(i)));
    if (normal) {
      hash = mix(hash, geometryWord(normal.getX(i)));
      hash = mix(hash, geometryWord(normal.getY(i)));
      hash = mix(hash, geometryWord(normal.getZ(i)));
    }
  }
  if (index) for (let i = 0; i < index.count; i++) hash = mix(hash, index.getX(i));
  // Root presentation transforms cancel algebraically; quantisation also
  // removes the tiny numerical residue from that inverse multiplication.
  for (const value of relativeMatrix.elements) hash = mix(hash, floatWord(Math.round(value * 1e6) / 1e6));
  return hash >>> 0;
}

export function collectBakeLayout(group) {
  group.updateWorldMatrix(true, true);
  const inverseRoot = new Matrix4().copy(group.matrixWorld).invert();
  const meshes = [];
  let vertexCount = 0;
  let sceneHash = 2166136261;
  group.traverse(mesh => {
    if (!mesh.isMesh || !mesh.geometry?.getAttribute('position') || mesh.userData.bakeSkip) return;
    if (mesh.isInstancedMesh || mesh.isSkinnedMesh) {
      throw new Error('Paper lighting expects static, non-instanced scene meshes.');
    }
    const matrix = new Matrix4().multiplyMatrices(inverseRoot, mesh.matrixWorld);
    const count = mesh.geometry.getAttribute('position').count;
    const hash = geometryHash(mesh, matrix);
    const water = Boolean(mesh.userData.water || mesh.userData.isWater || mesh.userData.bakeWater);
    const flags = (water ? 1 : 0) | (mesh.userData.bakeNoOcclude ? 2 : 0);
    meshes.push({ mesh, matrix, vertexOffset: vertexCount, vertexCount: count, hash, flags });
    vertexCount += count;
    sceneHash = mix(mix(mix(sceneHash, hash), count), flags);
  });
  sceneHash = mix(mix(sceneHash, meshes.length), vertexCount);
  return { meshes, meshCount: meshes.length, vertexCount, sceneHash: sceneHash >>> 0 };
}

export function encodeBakedLighting(layout, samples) {
  if (samples.byteLength !== layout.vertexCount * 2) throw new Error('Baked visibility sample count does not match scene.');
  const payloadOffset = HEADER_BYTES + layout.meshCount * RECORD_BYTES;
  const buffer = new ArrayBuffer(payloadOffset + samples.byteLength);
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < MAGIC.length; i++) bytes[i] = MAGIC.charCodeAt(i);
  const view = new DataView(buffer);
  view.setUint32(8, PAPER_LIGHT_VERSION, true);
  view.setUint32(12, HEADER_BYTES, true);
  view.setUint32(16, layout.meshCount, true);
  view.setUint32(20, layout.vertexCount, true);
  view.setUint32(24, layout.sceneHash, true);
  view.setUint32(28, 2, true);
  view.setUint32(32, payloadOffset, true);
  view.setUint32(36, samples.byteLength, true);
  for (let i = 0; i < layout.meshes.length; i++) {
    const record = layout.meshes[i];
    const at = HEADER_BYTES + i * RECORD_BYTES;
    view.setUint32(at, record.vertexCount, true);
    view.setUint32(at + 4, record.hash, true);
    view.setUint32(at + 8, record.vertexOffset, true);
    view.setUint32(at + 12, record.flags, true);
  }
  bytes.set(new Uint8Array(samples.buffer || samples, samples.byteOffset || 0, samples.byteLength), payloadOffset);
  return buffer;
}

function reject(reason, options) {
  if (options.throwOnMismatch) throw new Error(reason);
  return { applied: false, reason };
}

/**
 * Call immediately after deterministic scene construction, before compiling
 * the software renderer. Unsupported / stale assets leave every mesh intact.
 * `software: true` adds the offline cast shadow; WebGL keeps dynamic shadows.
 * Repeat calls are safe: color is recomputed from the unbaked baseline.
 */
export function applyBakedLighting(group, arrayBuffer, options = {}) {
  if (ArrayBuffer.isView(arrayBuffer)) {
    arrayBuffer = arrayBuffer.buffer.slice(arrayBuffer.byteOffset, arrayBuffer.byteOffset + arrayBuffer.byteLength);
  }
  if (!(arrayBuffer instanceof ArrayBuffer) || arrayBuffer.byteLength < HEADER_BYTES) {
    return reject('Paper light asset is missing or truncated.', options);
  }
  const bytes = new Uint8Array(arrayBuffer);
  if ([...MAGIC].some((letter, i) => bytes[i] !== letter.charCodeAt(0))) {
    return reject('Paper light asset has an unknown signature.', options);
  }
  const view = new DataView(arrayBuffer);
  const version = view.getUint32(8, true);
  const header = view.getUint32(12, true);
  const meshCount = view.getUint32(16, true);
  const vertexCount = view.getUint32(20, true);
  const sceneHash = view.getUint32(24, true);
  const stride = view.getUint32(28, true);
  const payloadOffset = view.getUint32(32, true);
  const payloadBytes = view.getUint32(36, true);
  if (version !== PAPER_LIGHT_VERSION || header !== HEADER_BYTES || stride !== 2 ||
      payloadOffset !== HEADER_BYTES + meshCount * RECORD_BYTES || payloadBytes !== vertexCount * 2 ||
      arrayBuffer.byteLength !== payloadOffset + payloadBytes) {
    return reject('Paper light asset layout is invalid.', options);
  }
  const layout = collectBakeLayout(group);
  if (meshCount !== layout.meshCount || vertexCount !== layout.vertexCount || sceneHash !== layout.sceneHash) {
    if (meshCount === layout.meshCount) {
      const mismatches = layout.meshes.flatMap((record, i) => {
        const at = HEADER_BYTES + i * RECORD_BYTES;
        const assetHash = view.getUint32(at + 4, true);
        const assetCount = view.getUint32(at, true);
        return assetHash !== record.hash || assetCount !== record.vertexCount ? [{
          name: record.mesh.name, assetCount, sceneCount: record.vertexCount,
          assetHash: assetHash.toString(16), sceneHash: record.hash.toString(16),
        }] : [];
      });
      console.warn('Paper light geometry mismatch:', JSON.stringify(mismatches));
    }
    return reject(`Paper light fingerprint mismatch: asset ${meshCount}/${vertexCount}/${sceneHash.toString(16)}, scene ${layout.meshCount}/${layout.vertexCount}/${layout.sceneHash.toString(16)}.`, options);
  }
  // Validate all records first, so a corrupt file cannot partly shade a world.
  for (let i = 0; i < meshCount; i++) {
    const at = HEADER_BYTES + i * RECORD_BYTES;
    const record = layout.meshes[i];
    if (view.getUint32(at, true) !== record.vertexCount || view.getUint32(at + 4, true) !== record.hash ||
        view.getUint32(at + 8, true) !== record.vertexOffset || view.getUint32(at + 12, true) !== record.flags) {
      return reject(`Paper light mesh ${i} no longer matches.`, options);
    }
  }
  const samples = new Uint8Array(arrayBuffer, payloadOffset, payloadBytes);
  const aoStrength = options.aoStrength ?? .66;
  const shadowStrength = options.software ? (options.shadowStrength ?? .29) : 0;
  const minimum = options.minimumBrightness ?? .43;
  const waterWeight = options.waterWeight ?? .12;
  let minimumFactor = 1;
  let weightedFactor = 0;
  for (const record of layout.meshes) {
    const mesh = record.mesh;
    let state = appliedStates.get(mesh);
    if (!state) {
      const oldColor = mesh.geometry.getAttribute('color');
      const base = new Float32Array(record.vertexCount * 3);
      for (let i = 0; i < record.vertexCount; i++) {
        base[i * 3] = oldColor ? oldColor.getX(i) : 1;
        base[i * 3 + 1] = oldColor ? oldColor.getY(i) : 1;
        base[i * 3 + 2] = oldColor ? oldColor.getZ(i) : 1;
      }
      // Props may share geometry and material: each placement has unique AO.
      mesh.geometry = mesh.geometry.clone();
      mesh.material = Array.isArray(mesh.material) ? mesh.material.map(material => material.clone()) : mesh.material.clone();
      state = { base, geometry: mesh.geometry };
      appliedStates.set(mesh, state);
    }
    const color = new Float32Array(record.vertexCount * 3);
    const weight = record.flags & 1 ? waterWeight : 1;
    for (let i = 0; i < record.vertexCount; i++) {
      const at = (record.vertexOffset + i) * 2;
      const ambient = 1 - aoStrength * weight * (1 - samples[at] / 255);
      const sun = 1 - shadowStrength * weight * (1 - samples[at + 1] / 255);
      const factor = Math.max(minimum, ambient * sun);
      // Pale sky bounce keeps shadowed paper chromatic. The former yellow
      // multiplier browned every coral crown and the shaded waterfall folds.
      color[i * 3] = state.base[i * 3] * (factor + (1 - factor) * .045);
      color[i * 3 + 1] = state.base[i * 3 + 1] * (factor + (1 - factor) * .075);
      color[i * 3 + 2] = state.base[i * 3 + 2] * (factor + (1 - factor) * .12);
      minimumFactor = Math.min(minimumFactor, factor);
      weightedFactor += factor;
    }
    state.geometry.setAttribute('color', new BufferAttribute(color, 3));
    for (const material of Array.isArray(mesh.material) ? mesh.material : [mesh.material]) {
      material.vertexColors = true;
      material.needsUpdate = true;
    }
    mesh.userData.paperLightVersion = PAPER_LIGHT_VERSION;
  }
  return {
    applied: true, meshCount, vertexCount, sceneHash: sceneHash.toString(16).padStart(8, '0'),
    mode: options.software ? 'ambient + static sun' : 'ambient',
    minimumFactor, meanFactor: weightedFactor / Math.max(1, vertexCount),
  };
}
