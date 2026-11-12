import { Vector3 } from 'three';

// Pointer picking uses the complete landscape, so a tree or shore occludes water.
// Build once after static placement / AO and before decorative effects are added.
// Small shader wind and water deformations intentionally do not rebuild this BVH.
// Transforms, topology or substantial vertex movement require a new picker.
export function createScenePicker(group) {
  const started = performance.now();
  const objects = [];
  const ranges = [];
  let triangleCount = 0;
  group.updateWorldMatrix(true, true);
  group.traverse(object => {
    const geometry = object.isMesh && object.geometry;
    const positions = geometry && geometry.getAttribute('position');
    if (!positions) return;
    const total = geometry.index ? geometry.index.count : positions.count;
    const first = Math.ceil(Math.max(0, geometry.drawRange.start) / 3) * 3;
    const end = Math.floor(Math.min(total, geometry.drawRange.start + geometry.drawRange.count) / 3) * 3;
    if (end <= first) return;
    objects.push(object);
    ranges.push([first, end]);
    triangleCount += (end - first) / 3;
  });

  const vertices = new Float32Array(triangleCount * 9);
  const objectIndex = new Uint32Array(triangleCount);
  const faceIndices = new Uint32Array(triangleCount);
  const order = new Uint32Array(triangleCount);
  let triangleBounds = new Float32Array(triangleCount * 6);
  let centroids = new Float32Array(triangleCount * 3);
  let triangle = 0;
  for (let objectId = 0; objectId < objects.length; objectId++) {
    const object = objects[objectId];
    const positions = object.geometry.getAttribute('position');
    const indices = object.geometry.index;
    const matrix = object.matrixWorld.elements;
    const [first, end] = ranges[objectId];
    for (let index = first; index < end; index += 3, triangle++) {
      const offset = triangle * 9;
      for (let vertex = 0; vertex < 3; vertex++) {
        const source = indices ? indices.getX(index + vertex) : index + vertex;
        const x = positions.getX(source), y = positions.getY(source), z = positions.getZ(source);
        const target = offset + vertex * 3;
        vertices[target] = matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12];
        vertices[target + 1] = matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13];
        vertices[target + 2] = matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14];
      }
      for (let axis = 0; axis < 3; axis++) {
        const a = vertices[offset + axis], b = vertices[offset + axis + 3], c = vertices[offset + axis + 6];
        triangleBounds[triangle * 6 + axis] = Math.min(a, b, c);
        triangleBounds[triangle * 6 + axis + 3] = Math.max(a, b, c);
        centroids[triangle * 3 + axis] = (a + b + c) / 3;
      }
      objectIndex[triangle] = objectId;
      faceIndices[triangle] = index / 3;
      order[triangle] = triangle;
    }
  }

  const leafLimit = 20;
  let capacity = Math.max(1, Math.ceil(triangleCount / 10) * 2);
  let bounds = new Float32Array(capacity * 6);
  let left = new Int32Array(capacity);
  let right = new Int32Array(capacity);
  let firstTriangle = new Uint32Array(capacity);
  let counts = new Uint16Array(capacity);
  let nodeCount = 0, leafCount = 0, maxDepth = 0;
  function grow() {
    capacity *= 2;
    const extend = (array, length) => { const next = new array.constructor(length); next.set(array); return next; };
    bounds = extend(bounds, capacity * 6);
    left = extend(left, capacity); right = extend(right, capacity);
    firstTriangle = extend(firstTriangle, capacity); counts = extend(counts, capacity);
  }
  function build(first, end, depth) {
    const node = nodeCount++;
    if (node >= capacity) grow();
    maxDepth = Math.max(maxDepth, depth);
    let minX = Infinity, minY = Infinity, minZ = Infinity;
    let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
    let cx0 = Infinity, cy0 = Infinity, cz0 = Infinity;
    let cx1 = -Infinity, cy1 = -Infinity, cz1 = -Infinity;
    for (let i = first; i < end; i++) {
      const id = order[i], b = id * 6, c = id * 3;
      minX = Math.min(minX, triangleBounds[b]); minY = Math.min(minY, triangleBounds[b + 1]); minZ = Math.min(minZ, triangleBounds[b + 2]);
      maxX = Math.max(maxX, triangleBounds[b + 3]); maxY = Math.max(maxY, triangleBounds[b + 4]); maxZ = Math.max(maxZ, triangleBounds[b + 5]);
      cx0 = Math.min(cx0, centroids[c]); cy0 = Math.min(cy0, centroids[c + 1]); cz0 = Math.min(cz0, centroids[c + 2]);
      cx1 = Math.max(cx1, centroids[c]); cy1 = Math.max(cy1, centroids[c + 1]); cz1 = Math.max(cz1, centroids[c + 2]);
    }
    const b = node * 6;
    bounds[b] = minX; bounds[b + 1] = minY; bounds[b + 2] = minZ;
    bounds[b + 3] = maxX; bounds[b + 4] = maxY; bounds[b + 5] = maxZ;
    if (end - first <= leafLimit) {
      firstTriangle[node] = first; counts[node] = end - first;
      left[node] = right[node] = -1; leafCount++;
      return node;
    }
    const ex = cx1 - cx0, ey = cy1 - cy0, ez = cz1 - cz0;
    const axis = ex >= ey && ex >= ez ? 0 : ey >= ez ? 1 : 2;
    const midpoint = axis === 0 ? (cx0 + cx1) * .5 : axis === 1 ? (cy0 + cy1) * .5 : (cz0 + cz1) * .5;
    let lo = first, hi = end - 1;
    while (lo <= hi) {
      if (centroids[order[lo] * 3 + axis] < midpoint) lo++;
      else { const swap = order[lo]; order[lo] = order[hi]; order[hi--] = swap; }
    }
    // Identical centroids cannot be spatially separated; split their order safely.
    const split = lo === first || lo === end ? (first + end) >>> 1 : lo;
    const leftChild = build(first, split, depth + 1);
    const rightChild = build(split, end, depth + 1);
    left[node] = leftChild; right[node] = rightChild;
    return node;
  }
  if (triangleCount) build(0, triangleCount, 0);
  bounds = bounds.slice(0, nodeCount * 6);
  left = left.slice(0, nodeCount); right = right.slice(0, nodeCount);
  firstTriangle = firstTriangle.slice(0, nodeCount); counts = counts.slice(0, nodeCount);
  triangleBounds = null; centroids = null;

  // Query scratch is shared by this synchronous picker. Only successful results
  // allocate vectors; misses and BVH traversal do not allocate objects or arrays.
  const stackNodes = new Int32Array(maxDepth + 3);
  const stackNear = new Float64Array(maxDepth + 3);
  const visibleObjects = new Uint8Array(objects.length);
  let ox, oy, oz, dx, dy, dz, ix, iy, iz;
  function boxNear(node, maximum) {
    const b = node * 6;
    let near = 0, far = maximum, a, z;
    if (dx === 0) { if (ox < bounds[b] || ox > bounds[b + 3]) return Infinity; }
    else {
      a = (bounds[b] - ox) * ix; z = (bounds[b + 3] - ox) * ix;
      if (a > z) { const swap = a; a = z; z = swap; }
      near = Math.max(near, a); far = Math.min(far, z);
      if (near > far) return Infinity;
    }
    if (dy === 0) { if (oy < bounds[b + 1] || oy > bounds[b + 4]) return Infinity; }
    else {
      a = (bounds[b + 1] - oy) * iy; z = (bounds[b + 4] - oy) * iy;
      if (a > z) { const swap = a; a = z; z = swap; }
      near = Math.max(near, a); far = Math.min(far, z);
      if (near > far) return Infinity;
    }
    if (dz === 0) { if (oz < bounds[b + 2] || oz > bounds[b + 5]) return Infinity; }
    else {
      a = (bounds[b + 2] - oz) * iz; z = (bounds[b + 5] - oz) * iz;
      if (a > z) { const swap = a; a = z; z = swap; }
      near = Math.max(near, a); far = Math.min(far, z);
      if (near > far) return Infinity;
    }
    return near;
  }
  function pick(ray, maxDistance = Infinity) {
    if (!triangleCount || maxDistance < 0 || Number.isNaN(maxDistance)) return null;
    ox = ray.origin.x; oy = ray.origin.y; oz = ray.origin.z;
    dx = ray.direction.x; dy = ray.direction.y; dz = ray.direction.z;
    const directionLength = Math.hypot(dx, dy, dz);
    if (!Number.isFinite(ox + oy + oz + directionLength) || directionLength === 0) return null;
    ix = 1 / dx; iy = 1 / dy; iz = 1 / dz;
    let best = maxDistance / directionLength, bestId = -1;
    const rootNear = boxNear(0, best);
    if (rootNear === Infinity) return null;
    for (let i = 0; i < objects.length; i++) {
      let object = objects[i], visible = true;
      while (object) { if (!object.visible) { visible = false; break; } object = object.parent; }
      visibleObjects[i] = visible ? 1 : 0;
    }
    let stackSize = 1;
    stackNodes[0] = 0; stackNear[0] = rootNear;
    while (stackSize) {
      const stackIndex = --stackSize, node = stackNodes[stackIndex];
      if (stackNear[stackIndex] > best) continue;
      if (counts[node]) {
        const end = firstTriangle[node] + counts[node];
        for (let i = firstTriangle[node]; i < end; i++) {
          const id = order[i];
          if (!visibleObjects[objectIndex[id]]) continue;
          const v = id * 9;
          const ax = vertices[v], ay = vertices[v + 1], az = vertices[v + 2];
          const e1x = vertices[v + 3] - ax, e1y = vertices[v + 4] - ay, e1z = vertices[v + 5] - az;
          const e2x = vertices[v + 6] - ax, e2y = vertices[v + 7] - ay, e2z = vertices[v + 8] - az;
          const px = dy * e2z - dz * e2y, py = dz * e2x - dx * e2z, pz = dx * e2y - dy * e2x;
          const determinant = e1x * px + e1y * py + e1z * pz;
          if (Math.abs(determinant) < 1e-12) continue;
          const inverse = 1 / determinant, tx = ox - ax, ty = oy - ay, tz = oz - az;
          const u = (tx * px + ty * py + tz * pz) * inverse;
          if (u < 0 || u > 1) continue;
          const qx = ty * e1z - tz * e1y, qy = tz * e1x - tx * e1z, qz = tx * e1y - ty * e1x;
          const w = (dx * qx + dy * qy + dz * qz) * inverse;
          if (w < 0 || u + w > 1) continue;
          const distance = (e2x * qx + e2y * qy + e2z * qz) * inverse;
          if (distance >= 0 && distance <= best) { best = distance; bestId = id; }
        }
      } else {
        const a = left[node], b = right[node], na = boxNear(a, best), nb = boxNear(b, best);
        // Push the farther child first; an earlier surface prunes later branches.
        if (na < nb) {
          if (nb !== Infinity) { stackNodes[stackSize] = b; stackNear[stackSize++] = nb; }
          if (na !== Infinity) { stackNodes[stackSize] = a; stackNear[stackSize++] = na; }
        } else {
          if (na !== Infinity) { stackNodes[stackSize] = a; stackNear[stackSize++] = na; }
          if (nb !== Infinity) { stackNodes[stackSize] = b; stackNear[stackSize++] = nb; }
        }
      }
    }
    if (bestId < 0) return null;
    const v = bestId * 9;
    const e1x = vertices[v + 3] - vertices[v], e1y = vertices[v + 4] - vertices[v + 1], e1z = vertices[v + 5] - vertices[v + 2];
    const e2x = vertices[v + 6] - vertices[v], e2y = vertices[v + 7] - vertices[v + 1], e2z = vertices[v + 8] - vertices[v + 2];
    return {
      point: new Vector3(ox + dx * best, oy + dy * best, oz + dz * best),
      distance: best * directionLength,
      object: objects[objectIndex[bestId]],
      faceIndex: faceIndices[bestId],
      normal: new Vector3(e1y * e2z - e1z * e2y, e1z * e2x - e1x * e2z, e1x * e2y - e1y * e2x).normalize(),
    };
  }
  const bytes = vertices.byteLength + objectIndex.byteLength + faceIndices.byteLength + order.byteLength + bounds.byteLength + left.byteLength + right.byteLength + firstTriangle.byteLength + counts.byteLength + stackNodes.byteLength + stackNear.byteLength + visibleObjects.byteLength;
  return {
    pick,
    metadata: Object.freeze({ meshes: objects.length, triangles: triangleCount, nodes: nodeCount, leaves: leafCount, maxDepth, leafLimit, bytes, buildMilliseconds: +(performance.now() - started).toFixed(2), staticWorldSpace: true }),
  };
}
