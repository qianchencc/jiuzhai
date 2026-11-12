import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import * as THREE from 'three';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { collectBakeLayout, encodeBakedLighting, applyBakedLighting } from '../src/baked-light-v2.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const option = (name, fallback) => {
  const at = args.indexOf(name);
  return at < 0 ? fallback : args[at + 1];
};
const inputModule = path.resolve(root, option('--module', 'src/landscape-v2.js'));
const exportName = option('--export', 'buildLandscapeV2');
const destination = path.resolve(root, option('--out', 'dist/assets/paper-light-v4-water-light.bin'));
const workdir = path.resolve(option('--workdir', '/workspace/shared/jiuzhai-bake-v2'));
const blender = option('--blender', '/usr/bin/blender');
const renderPath = option('--render', null);
const settings = {
  aoRays: Number(option('--ao-rays', 6)),
  aoDistance: Number(option('--ao-distance', 1.3)),
  shadowRays: Number(option('--shadow-rays', 2)),
  sunDirection: option('--sun', '-.5,.8,.35').split(',').map(Number),
  sunRadius: Number(option('--sun-radius', .026)),
  epsilon: Number(option('--epsilon', .009)),
  shadowDistance: 75,
};
for (const [key, value] of Object.entries(settings)) {
  if (Array.isArray(value) ? value.some(item => !Number.isFinite(item)) : !Number.isFinite(value) || value <= 0) {
    throw new Error(`Invalid bake setting ${key}.`);
  }
}

function run(command, argv) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, argv, { cwd: root, stdio: 'inherit' });
    child.on('error', reject);
    child.on('close', code => code === 0 ? resolve() : reject(new Error(`${command} exited with ${code}.`)));
  });
}

const imported = await import(pathToFileURL(inputModule).href);
if (typeof imported[exportName] !== 'function') throw new Error(`${inputModule} does not export ${exportName}().`);
const world = imported[exportName]();
const group = world.group || world;
const layout = collectBakeLayout(group);
console.log(`Scene: ${layout.meshCount} meshes / ${layout.vertexCount.toLocaleString()} vertices / fingerprint ${layout.sceneHash.toString(16)}.`);
await fs.mkdir(workdir, { recursive: true });
await fs.mkdir(path.dirname(destination), { recursive: true });

if (!args.includes('--render-only') && !args.includes('--render-unbaked')) {
  const positions = new Float32Array(layout.vertexCount * 3);
  const normals = new Float32Array(layout.vertexCount * 3);
  const flags = new Uint8Array(layout.vertexCount);
  const indices = [];
  const point = new THREE.Vector3();
  const normal = new THREE.Vector3();
  const normalMatrix = new THREE.Matrix3();
  const bounds = new THREE.Box3();
  for (const record of layout.meshes) {
    const mesh = record.mesh;
    const position = mesh.geometry.getAttribute('position');
    let normalAttribute = mesh.geometry.getAttribute('normal');
    if (!normalAttribute) {
      const temporary = mesh.geometry.clone();
      temporary.computeVertexNormals();
      normalAttribute = temporary.getAttribute('normal');
    }
    normalMatrix.getNormalMatrix(record.matrix);
    for (let i = 0; i < position.count; i++) {
      const at = record.vertexOffset + i;
      point.fromBufferAttribute(position, i).applyMatrix4(record.matrix);
      normal.fromBufferAttribute(normalAttribute, i).applyMatrix3(normalMatrix).normalize();
      if (![...point, ...normal].every(Number.isFinite)) throw new Error(`Nonfinite geometry in mesh ${mesh.name || mesh.id}.`);
      point.toArray(positions, at * 3);
      normal.toArray(normals, at * 3);
      flags[at] = record.flags;
      bounds.expandByPoint(point);
    }
    if (record.flags & 3) continue;
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const index = mesh.geometry.index;
    const count = index ? index.count : position.count;
    const ranges = Array.isArray(mesh.material) && mesh.geometry.groups.length
      ? mesh.geometry.groups : [{ start: 0, count, materialIndex: 0 }];
    for (const range of ranges) {
      const material = materials[range.materialIndex || 0];
      if (!material || material.isShadowMaterial || material.opacity < .85 || material.depthWrite === false) continue;
      const from = Math.max(range.start, mesh.geometry.drawRange.start || 0);
      const until = Math.min(range.start + range.count, count, (mesh.geometry.drawRange.start || 0) + mesh.geometry.drawRange.count);
      for (let i = from; i + 2 < until; i += 3) {
        const a = index ? index.getX(i) : i;
        const b = index ? index.getX(i + 1) : i + 1;
        const c = index ? index.getX(i + 2) : i + 2;
        if (a !== b && b !== c && a !== c) indices.push(record.vertexOffset + a, record.vertexOffset + b, record.vertexOffset + c);
      }
    }
  }
  const triangles = new Uint32Array(indices);
  const metadata = {
    version: 2, settings,
    module: path.relative(root, inputModule), exportName,
    meshCount: layout.meshCount, vertexCount: layout.vertexCount,
    sceneHash: layout.sceneHash.toString(16).padStart(8, '0'),
    triangles: triangles.length / 3,
    bounds: { min: bounds.min.toArray(), max: bounds.max.toArray() },
    meshes: layout.meshes.map(({ mesh, vertexOffset, vertexCount, hash, flags }) => ({
      name: mesh.name, vertexOffset, vertexCount, hash: hash.toString(16).padStart(8, '0'), flags,
    })),
  };
  await Promise.all([
    fs.writeFile(path.join(workdir, 'positions.f32'), new Uint8Array(positions.buffer)),
    fs.writeFile(path.join(workdir, 'normals.f32'), new Uint8Array(normals.buffer)),
    fs.writeFile(path.join(workdir, 'flags.u8'), flags),
    fs.writeFile(path.join(workdir, 'triangles.u32'), new Uint8Array(triangles.buffer)),
    fs.writeFile(path.join(workdir, 'input.json'), JSON.stringify(metadata, null, 2)),
  ]);
  console.log(`BVH input: ${metadata.triangles.toLocaleString()} opaque triangles in ${workdir}.`);
  if (args.includes('--export-only')) process.exit(0);
  await run(blender, ['-b', '--factory-startup', '--threads', '4', '--python', path.join(root, 'scripts/bake-light-v2.py'), '--', '--input', path.join(workdir, 'input.json')]);
  const samples = await fs.readFile(path.join(workdir, 'visibility.u8'));
  const binary = encodeBakedLighting(layout, samples);
  const report = JSON.parse(await fs.readFile(path.join(workdir, 'bake-report.json'), 'utf8'));
  const validation = applyBakedLighting(group, binary, { software: true, throwOnMismatch: true });
  await fs.writeFile(destination, new Uint8Array(binary));
  await fs.writeFile(destination.replace(/\.bin$/, '') + '.json', JSON.stringify({
    ...metadata, bytes: binary.byteLength,
    channels: ['ambient visibility / 255', 'sun visibility / 255'],
    runtime: 'Apply AO in WebGL; AO + static sunlight visibility in the software renderer. Geometry fingerprint checked before any mutation.',
    report, validation,
  }, null, 2) + '\n');
  console.log(JSON.stringify({ artifact: destination, bytes: binary.byteLength, report, validation }, null, 2));
}

if (renderPath) {
  if (!args.includes('--render-unbaked')) {
    const bytes = await fs.readFile(destination);
    const result = applyBakedLighting(group, bytes, { software: false, aoStrength: .32, throwOnMismatch: true });
    console.log('Offline render lighting:', result);
  }
  if (!globalThis.FileReader) globalThis.FileReader = class NodeFileReader {
    async readAsArrayBuffer(blob) {
      try { this.result = await blob.arrayBuffer(); this.onload?.({ target: this }); }
      catch (error) { this.error = error; this.onerror?.({ target: this }); }
      finally { this.onloadend?.({ target: this }); }
    }
    async readAsDataURL(blob) {
      this.result = `data:${blob.type || 'application/octet-stream'};base64,${Buffer.from(await blob.arrayBuffer()).toString('base64')}`;
      this.onload?.({ target: this }); this.onloadend?.({ target: this });
    }
  };
  const glb = await new GLTFExporter().parseAsync(group, { binary: true, onlyVisible: true });
  const model = path.join(workdir, 'hero-model.glb');
  await fs.writeFile(model, new Uint8Array(glb));
  await run(blender, ['-b', '--factory-startup', '--threads', '8', '--python', path.join(root, 'scripts/render-hero-v2.py'), '--',
    '--gltf', model, '--out', path.resolve(renderPath), '--samples', option('--render-samples', '64'),
    '--width', option('--render-width', '1600'), '--height', option('--render-height', '1100')]);
}
