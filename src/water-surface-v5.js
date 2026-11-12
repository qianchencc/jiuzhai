import * as THREE from 'three';

// A water effect belongs to one actual horizontal lake surface.  The outline
// is the last shore bevel, not the larger lake plane hidden underneath it.
// Triangulating that outline gives one common geometric mask in WebGL and in
// the software renderer. No screen-space stencil or approximate ellipse is
// involved: every returned effect triangle is an intersection with this mask.
const EPSILON = 1e-9;
const cross = (a, b, c) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);

function insideOutline(point, outline) {
  const [x, z] = point; let inside = false;
  for (let i = 0, j = outline.length - 1; i < outline.length; j = i++) {
    const a = outline[i], b = outline[j];
    if ((a[1] > z) !== (b[1] > z) && x < (b[0] - a[0]) * (z - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
  }
  return inside;
}

// A wide inset can fold back on itself at a tiny cove. Earcut alone interprets
// such an outline as an invalid polygon and can bridge across the bank. Split
// every crossing into a planar graph, walk the bounded faces, and triangulate
// only faces inside the original even/odd outline. This repairs the effect
// mask without changing the authored paper shore geometry.
function triangulateSurface(outline) {
  const segments = outline.map((a, i) => ({ a, b: outline[(i + 1) % outline.length], cuts: [0, 1] }));
  let intersections = 0;
  for (let i = 0; i < segments.length; i++) for (let j = i + 1; j < segments.length; j++) {
    if (j === i + 1 || (i === 0 && j === segments.length - 1)) continue;
    const a = segments[i], b = segments[j], dx = a.b[0] - a.a[0], dz = a.b[1] - a.a[1];
    const ex = b.b[0] - b.a[0], ez = b.b[1] - b.a[1], denominator = dx * ez - dz * ex;
    if (Math.abs(denominator) < 1e-12) continue;
    const ox = b.a[0] - a.a[0], oz = b.a[1] - a.a[1];
    const t = (ox * ez - oz * ex) / denominator, u = (ox * dz - oz * dx) / denominator;
    if (t > 1e-8 && t < 1 - 1e-8 && u > 1e-8 && u < 1 - 1e-8) {
      a.cuts.push(t); b.cuts.push(u); intersections++;
    }
  }
  if (!intersections) return { triangles: THREE.ShapeUtils.triangulateShape(outline.map(p => new THREE.Vector2(...p)), [])
    .map(ids => ids.map(i => outline[i])), intersections, faces: 1 };
  const nodes = [], nodeMap = new Map();
  function node(point) {
    const key = `${Math.round(point[0] * 1e8)},${Math.round(point[1] * 1e8)}`;
    if (!nodeMap.has(key)) { nodeMap.set(key, nodes.length); nodes.push({ point, neighbors: new Set() }); }
    return nodeMap.get(key);
  }
  for (const segment of segments) {
    const cuts = [...new Set(segment.cuts)].sort((a, b) => a - b);
    for (let i = 0; i + 1 < cuts.length; i++) {
      const at = t => [segment.a[0] + (segment.b[0] - segment.a[0]) * t, segment.a[1] + (segment.b[1] - segment.a[1]) * t];
      const a = node(at(cuts[i])), b = node(at(cuts[i + 1]));
      if (a !== b) { nodes[a].neighbors.add(b); nodes[b].neighbors.add(a); }
    }
  }
  for (const n of nodes) n.neighbors = [...n.neighbors].sort((a, b) =>
    Math.atan2(nodes[a].point[1] - n.point[1], nodes[a].point[0] - n.point[0]) -
    Math.atan2(nodes[b].point[1] - n.point[1], nodes[b].point[0] - n.point[0]));
  const visited = new Set(), triangles = []; let faces = 0;
  for (let start = 0; start < nodes.length; start++) for (const next of nodes[start].neighbors) {
    if (visited.has(`${start}:${next}`)) continue;
    const loop = []; let a = start, b = next, guard = nodes.length * 4;
    while (guard-- > 0 && !visited.has(`${a}:${b}`)) {
      visited.add(`${a}:${b}`); loop.push(nodes[a].point);
      const neighbors = nodes[b].neighbors, index = neighbors.indexOf(a);
      const c = neighbors[(index - 1 + neighbors.length) % neighbors.length];
      a = b; b = c;
      if (a === start && b === next) break;
    }
    if (loop.length < 3) continue;
    const area = loop.reduce((sum, p, i) => { const q = loop[(i + 1) % loop.length]; return sum + p[0] * q[1] - q[0] * p[1]; }, 0);
    if (area <= 1e-10) continue;
    const candidates = THREE.ShapeUtils.triangulateShape(loop.map(p => new THREE.Vector2(...p)), []).map(ids => ids.map(i => loop[i]));
    if (!candidates.length) continue;
    // Any interior point of a simple face has the same winding. Checking every
    // triangle also conservatively removes a numerically collapsed sliver.
    let accepted = 0;
    for (const triangle of candidates) {
      const center = [(triangle[0][0] + triangle[1][0] + triangle[2][0]) / 3,
        (triangle[0][1] + triangle[1][1] + triangle[2][1]) / 3];
      if (insideOutline(center, outline)) { triangles.push(triangle); accepted++; }
    }
    if (accepted) faces++;
  }
  return { triangles, intersections, faces };
}

function clipToTriangle(subject, triangle) {
  let polygon = subject;
  const direction = Math.sign(cross(triangle[0], triangle[1], triangle[2])) || 1;
  for (let edge = 0; edge < 3 && polygon.length; edge++) {
    const a = triangle[edge], b = triangle[(edge + 1) % 3], input = polygon;
    polygon = [];
    let previous = input[input.length - 1], before = direction * cross(a, b, previous);
    for (const current of input) {
      const after = direction * cross(a, b, current);
      const inside = after >= -EPSILON, wasInside = before >= -EPSILON;
      if (inside !== wasInside) {
        const t = before / (before - after);
        polygon.push([previous[0] + (current[0] - previous[0]) * t,
          previous[1] + (current[1] - previous[1]) * t]);
      }
      if (inside) polygon.push(current);
      previous = current; before = after;
    }
  }
  return polygon;
}

export function createWaterSurfaceIndex(mesh) {
  if (!mesh?.geometry?.attributes?.position || !mesh.userData.water || mesh.userData.falls) {
    throw new TypeError('Water-surface effects require a horizontal lake mesh.');
  }
  mesh.updateWorldMatrix(true, false);
  const attribute = mesh.geometry.attributes.position, position = new THREE.Vector3();
  position.set(attribute.getX(0), attribute.getY(0), attribute.getZ(0)).applyMatrix4(mesh.matrixWorld);
  const y = position.y, localY = attribute.getY(0), triangles = [], contour = mesh.userData.surfaceContour;
  let maskStats = { intersections: 0, faces: 0 };
  const worldPoint = (x, z) => {
    position.set(x, localY, z).applyMatrix4(mesh.matrixWorld);
    if (Math.abs(position.y - y) > 1e-5) throw new TypeError('Ripple masks must be horizontal.');
    return [position.x, position.z];
  };
  if (contour?.length >= 3) {
    const outline = contour.map(p => worldPoint(p[0], p[1]));
    const result = triangulateSurface(outline); triangles.push(...result.triangles);
    maskStats = { intersections: result.intersections, faces: result.faces };
  } else {
    // Legacy lakes without a sculpted shore can still use their exact mesh.
    const indices = mesh.geometry.index, count = indices?.count ?? attribute.count;
    for (let i = 0; i < count; i += 3) {
      const points = [];
      for (let j = 0; j < 3; j++) {
        const v = indices ? indices.getX(i + j) : i + j;
        points.push(worldPoint(attribute.getX(v), attribute.getZ(v)));
      }
      triangles.push(points);
    }
  }
  const cells = new Map(), cellSize = .65, bounds = [];
  let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
  for (let i = 0; i < triangles.length; i++) {
    const points = triangles[i], bx0 = Math.min(...points.map(p => p[0])), bx1 = Math.max(...points.map(p => p[0]));
    const bz0 = Math.min(...points.map(p => p[1])), bz1 = Math.max(...points.map(p => p[1]));
    bounds.push([bx0, bx1, bz0, bz1]);
    x0 = Math.min(x0, bx0); x1 = Math.max(x1, bx1); z0 = Math.min(z0, bz0); z1 = Math.max(z1, bz1);
    for (let x = Math.floor(bx0 / cellSize); x <= Math.floor(bx1 / cellSize); x++) {
      for (let z = Math.floor(bz0 / cellSize); z <= Math.floor(bz1 / cellSize); z++) {
        const key = `${x}:${z}`;
        if (!cells.has(key)) cells.set(key, []);
        cells.get(key).push(i);
      }
    }
  }
  function contains(x, z) {
    const candidates = cells.get(`${Math.floor(x / cellSize)}:${Math.floor(z / cellSize)}`);
    if (!candidates) return false;
    const p = [x, z];
    return candidates.some(i => {
      const [a, b, c] = triangles[i], d1 = cross(a, b, p), d2 = cross(b, c, p), d3 = cross(c, a, p);
      return !((d1 < -EPSILON || d2 < -EPSILON || d3 < -EPSILON) && (d1 > EPSILON || d2 > EPSILON || d3 > EPSILON));
    });
  }
  function clipPolygon(points) {
    if (points.length < 3) return [];
    const bx0 = Math.min(...points.map(p => p[0])), bx1 = Math.max(...points.map(p => p[0]));
    const bz0 = Math.min(...points.map(p => p[1])), bz1 = Math.max(...points.map(p => p[1]));
    if (bx1 < x0 || bx0 > x1 || bz1 < z0 || bz0 > z1) return [];
    const candidates = new Set(), result = [];
    for (let x = Math.floor(bx0 / cellSize); x <= Math.floor(bx1 / cellSize); x++) {
      for (let z = Math.floor(bz0 / cellSize); z <= Math.floor(bz1 / cellSize); z++) {
        for (const id of cells.get(`${x}:${z}`) || []) candidates.add(id);
      }
    }
    for (const id of candidates) {
      const b = bounds[id];
      if (b[1] < bx0 || b[0] > bx1 || b[3] < bz0 || b[2] > bz1) continue;
      const clipped = clipToTriangle(points, triangles[id]);
      for (let i = 1; i + 1 < clipped.length; i++) {
        const tri = [clipped[0], clipped[i], clipped[i + 1]];
        if (Math.abs(cross(...tri)) > 1e-10) result.push(tri);
      }
    }
    return result;
  }
  return { mesh, id: mesh.userData.basin, y, x0, x1, z0, z1, contains,
    clipPolygon, clipTriangle: (a, b, c) => clipPolygon([a, b, c]), triangles, maskStats };
}

// Ring sectors are convex quadrilaterals. Intersect them with the complete
// mask, then triangulate the result. This clips edges as well as vertices,
// including concave shore inlets and circles centred almost on the bank.
export function clippedRippleTriangles(surface, center, radius, halfWidth, segments = 72) {
  const output = [], cx = center.x ?? center[0], cz = center.z ?? center[1];
  const outer = radius + halfWidth, inner = Math.max(.001, radius - halfWidth);
  for (let i = 0; i < segments; i++) {
    const a = i / segments * Math.PI * 2, b = (i + 1) / segments * Math.PI * 2;
    const ca = Math.cos(a), sa = Math.sin(a), cb = Math.cos(b), sb = Math.sin(b);
    output.push(...surface.clipPolygon([
      [cx + ca * inner, cz + sa * inner], [cx + ca * outer, cz + sa * outer],
      [cx + cb * outer, cz + sb * outer], [cx + cb * inner, cz + sb * inner],
    ]));
  }
  return output;
}
