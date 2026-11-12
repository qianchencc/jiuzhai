import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { createFir, createDeciduous, createTibetanHouse, createPrayerFlags, createCloud } from './props.js';

// A composition-led, deliberately non-cartographic paper model. Every visible
// landscape layer is geometry; the concept image is never used as a billboard.
const P = {
  cream: '#eee5cf', ivory: '#fff4dc', blush: '#ddbdab', pink: '#e7c5b5',
  sand: '#d8c8a9', sage: '#a7ad8f', darkSage: '#788a73', wood: '#bc986e',
  aqua: '#95d0bd', teal: '#68b8b3', blue: '#4c99a3', deep: '#548c9b',
};
const mats = new Map();
function material(color, extra = {}) {
  const key = color + JSON.stringify(extra);
  if (!mats.has(key)) mats.set(key, new THREE.MeshStandardMaterial({ color, roughness: 1, metalness: 0, ...extra }));
  return mats.get(key);
}
function random(seed) {
  let s = seed >>> 0;
  return () => { s = (1664525 * s + 1013904223) >>> 0; return s / 4294967296; };
}
function mesh(geometry, mat, parent) {
  const m = new THREE.Mesh(geometry, mat);
  m.castShadow = true; m.receiveShadow = true;
  if (parent) parent.add(m);
  return m;
}
function pointsCurve(points, closed = true, samples = 100) {
  const c = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(p[0], 0, p[1])), closed, 'centripetal');
  return c.getPoints(samples).map(p => [p.x, p.z]);
}
function shapeOf(points) {
  const shape = new THREE.Shape();
  points.forEach((p, i) => i ? shape.lineTo(p[0], -p[1]) : shape.moveTo(p[0], -p[1]));
  shape.closePath();
  return shape;
}
function paper(points, y, depth, color, parent, bevel = 0.014) {
  const geometry = new THREE.ExtrudeGeometry(shapeOf(points), {
    depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel,
    bevelSegments: 1, steps: 1, curveSegments: 1,
  });
  geometry.rotateX(-Math.PI / 2);
  const m = mesh(geometry, material(color), parent); m.position.y = y;
  return m;
}
function scalePoints(points, scale, cx = 0, cz = 0) {
  return points.map(p => [p[0] * scale + cx, p[1] * scale + cz]);
}
function ring(points, outer, inner, y, thickness, color, parent, cx = 0, cz = 0) {
  const shape = shapeOf(scalePoints(points, outer, cx, cz));
  const hole = shapeOf(scalePoints(points, inner, cx, cz));
  shape.holes.push(hole);
  const geo = new THREE.ExtrudeGeometry(shape, { depth: thickness, bevelEnabled: false, steps: 1, curveSegments: 1 });
  geo.rotateX(-Math.PI / 2);
  const m = mesh(geo, material(color), parent); m.position.y = y;
  return m;
}
function inside(point, polygon) {
  let hit = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const a = polygon[i], b = polygon[j];
    if (((a[1] > point[1]) !== (b[1] > point[1])) &&
      point[0] < (b[0] - a[0]) * (point[1] - a[1]) / (b[1] - a[1]) + a[0]) hit = !hit;
  }
  return hit;
}
function lineTube(points, radius, color, parent, segments = 20, radialSegments = 4) {
  const c = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));
  return mesh(new THREE.TubeGeometry(c, segments, radius, radialSegments, false), material(color), parent);
}
function addBranch(parent, a, b, radius, color) {
  const av = new THREE.Vector3(...a), bv = new THREE.Vector3(...b), dir = bv.clone().sub(av);
  const g = new THREE.CylinderGeometry(radius * .55, radius, dir.length(), 5, 1);
  g.translate(0, dir.length() / 2, 0);
  const m = mesh(g, material(color), parent);
  m.position.copy(av); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  return m;
}
function organicEllipse(rx, rz, seed, n = 13) {
  const rng = random(seed), p = [];
  for (let i = 0; i < n; i++) {
    const a = i * Math.PI * 2 / n, wobble = .9 + rng() * .15;
    p.push([Math.cos(a) * rx * wobble, Math.sin(a) * rz * wobble]);
  }
  return pointsCurve(p, true, 96);
}

function addMountain(parent, { x, z, y, rx, rz, height, seed, snow = true }) {
  const rng = random(seed), n = 9 + Math.floor(rng() * 4), pos = [], colors = [];
  const peak = new THREE.Vector3((rng() - .5) * rx * .38, height, (rng() - .5) * rz * .32);
  const shoulder = [9, 18, 21].includes(seed)
    ? new THREE.Vector3(peak.x + rx * .56, height * .82, peak.z + rz * .12)
    : null;
  const rings = [[], [], []];
  const angleOffset = rng() * .5;
  for (let i = 0; i < n; i++) {
    const a = i / n * Math.PI * 2 + angleOffset, r = .8 + rng() * .3;
    rings[0].push(new THREE.Vector3(Math.cos(a) * rx * r, rng() * height * .06, Math.sin(a) * rz * r));
    rings[1].push(new THREE.Vector3(Math.cos(a + .035) * rx * (.44 + rng() * .16), height * (.26 + rng() * .14), Math.sin(a + .035) * rz * (.47 + rng() * .14)));
    rings[2].push(new THREE.Vector3(Math.cos(a) * rx * (.20 + rng() * .16) + peak.x * .5, height * (.56 + rng() * .18), Math.sin(a) * rz * (.20 + rng() * .16) + peak.z * .5));
  }
  const greens = ['#a1aa8e', '#b7b99d', '#8e9d83', '#c3c3a6', '#a3af97', '#bcc2aa'];
  const whites = ['#f5f0dc', '#e9e6d6', '#fff6e5', '#d8dfd2'];
  function tri(a, b, c, col) {
    const color = new THREE.Color(col);
    for (const p of [a, c, b]) { pos.push(p.x, p.y, p.z); colors.push(color.r, color.g, color.b); }
  }
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    for (let k = 0; k < 2; k++) {
      tri(rings[k][i], rings[k][j], rings[k + 1][i], greens[(i + k + seed) % greens.length]);
      tri(rings[k][j], rings[k + 1][j], rings[k + 1][i], greens[(i * 2 + k + seed + 1) % greens.length]);
    }
    const apexA = shoulder && rings[2][i].x > peak.x + rx * .08 ? shoulder : peak;
    const apexB = shoulder && rings[2][j].x > peak.x + rx * .08 ? shoulder : peak;
    const capColor = snow ? whites[(i + seed) % whites.length] : greens[(i + seed) % greens.length];
    tri(rings[2][i], rings[2][j], apexA, capColor);
    if (apexA !== apexB) tri(rings[2][j], apexB, apexA, snow ? whites[(i + seed + 1) % whites.length] : greens[(i + seed + 1) % greens.length]);
    // A few long, narrow snow tongues describe the folds below the snow line.
    if (snow && i % 3 === 0) {
      const a = rings[2][i].clone(), b = rings[2][j].clone().lerp(a, .75);
      const c = rings[1][i].clone().lerp(a, .20);
      a.multiplyScalar(1.002); b.multiplyScalar(1.002); c.multiplyScalar(1.002);
      tri(a, b, c, whites[(i + 1) % whites.length]);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3)); g.computeVertexNormals();
  const m = mesh(g, material('#ffffff', { vertexColors: true, flatShading: true, side: THREE.DoubleSide }), parent);
  m.position.set(x, y, z);
  return m;
}

function waterfall(parent, { x, z, top, bottom, width, seed, curve = .15 }) {
  const rng = random(seed), water = new THREE.Group(); parent.add(water);
  const strips = Math.ceil(width / .055);
  for (let i = 0; i < strips; i++) {
    const t = (i + .5) / strips, xx = x + (t - .5) * width;
    const zz = z + Math.cos((t - .5) * Math.PI) * curve;
    const front = .18 + rng() * .15, w = .030 + rng() * .036;
    const yy = top + (rng() - .5) * .035;
    const path = new THREE.CatmullRomCurve3([
      new THREE.Vector3(xx, yy, zz - .22),
      new THREE.Vector3(xx, yy + .005, zz - .06),
      new THREE.Vector3(xx + (rng() - .5) * .018, yy - .09, zz + .10),
      new THREE.Vector3(xx + (rng() - .5) * .036, bottom + .13, zz + front),
      new THREE.Vector3(xx + (rng() - .5) * .05, bottom + .035, zz + front + .20),
    ]);
    const verts = [], indices = [], seg = 14;
    for (let j = 0; j <= seg; j++) {
      const p = path.getPoint(j / seg);
      const fold = Math.sin(j / seg * Math.PI) * .012;
      verts.push(p.x - w / 2, p.y, p.z, p.x, p.y + fold, p.z + .006, p.x + w / 2, p.y, p.z);
      if (j < seg) for (let a = 0; a < 2; a++) {
        const q = j * 3 + a; indices.push(q, q + 3, q + 1, q + 1, q + 3, q + 4);
      }
    }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    geo.setIndex(indices); geo.computeVertexNormals();
    mesh(geo, material(['#fff4df', '#e9eddb', '#f8f4df', '#d5e2d7'][i % 4], { side: THREE.DoubleSide }), water);
  }
  // Small flattened paper scallops, not translucent particle spray.
  for (let i = 0; i < width * 14; i++) {
    const t = rng(), xx = x + (t - .5) * width * 1.02;
    const zz = z + Math.cos((t - .5) * Math.PI) * curve + .35 + rng() * .19;
    const foam = mesh(new THREE.SphereGeometry(.08 + rng() * .07, 6, 4), material('#eff1df'), water);
    foam.scale.set(1.7, .22, .65); foam.position.set(xx, bottom + .038, zz);
  }
}

function boardwalk(parent, points, width = .4, rail = true) {
  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)), false, 'centripetal');
  const length = curve.getLength(), count = Math.floor(length / .11);
  const wood = material('#d6b68a'), dark = material('#aa8c64');
  for (let i = 0; i <= count; i++) {
    const t = i / count, p = curve.getPointAt(t), tangent = curve.getTangentAt(t);
    const pl = mesh(new THREE.BoxGeometry(width, .035, .094), i % 5 === 0 ? dark : wood, parent);
    pl.position.copy(p); pl.rotation.y = Math.atan2(tangent.x, tangent.z);
    if (i % 6 === 0 && rail) {
      const right = new THREE.Vector3(tangent.z, 0, -tangent.x).normalize();
      for (const sign of [-1, 1]) {
        const q = p.clone().addScaledVector(right, width / 2 * sign);
        const post = mesh(new THREE.BoxGeometry(.034, .38, .034), wood, parent);
        post.position.copy(q); post.position.y += .15;
        const foot = mesh(new THREE.BoxGeometry(.045, .23, .045), dark, parent);
        foot.position.copy(q); foot.position.y -= .12;
      }
    }
  }
  if (rail) for (const sign of [-1, 1]) for (const h of [.16, .29]) {
    const p = [];
    for (let i = 0; i <= 70; i++) {
      const t = i / 70, v = curve.getPointAt(t), tangent = curve.getTangentAt(t);
      const right = new THREE.Vector3(tangent.z, 0, -tangent.x).normalize();
      v.addScaledVector(right, sign * width / 2); v.y += h; p.push(v.toArray());
    }
    lineTube(p, .017, '#d6b68a', parent, 90, 4);
  }
}

// Split grouped geometry before merging; props can carry front/back/edge paper
// materials. This keeps the final scene small without losing its colored edges.
function consolidate(group) {
  group.updateMatrixWorld(true);
  const buckets = new Map();
  group.traverse(o => {
    if (!o.isMesh) return;
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    const groups = Array.isArray(o.material) ? g.groups : [{ start: 0, count: g.attributes.position.count, materialIndex: 0 }];
    for (const part of groups) {
      const mat = Array.isArray(o.material) ? o.material[part.materialIndex] : o.material;
      if (!mat || part.count === 0) continue;
      const cut = new THREE.BufferGeometry();
      for (const name of ['position', 'normal', 'color']) {
        if (!g.attributes[name]) continue;
        const a = g.attributes[name], values = a.array.slice(part.start * a.itemSize, (part.start + part.count) * a.itemSize);
        cut.setAttribute(name, new THREE.BufferAttribute(values, a.itemSize));
      }
      cut.applyMatrix4(o.matrixWorld);
      if (!cut.attributes.normal) cut.computeVertexNormals();
      const key = `${mat.uuid}/${Object.keys(cut.attributes).sort().join(',')}`;
      if (!buckets.has(key)) buckets.set(key, { material: mat, geometries: [], castShadow: o.castShadow, receiveShadow: o.receiveShadow });
      buckets.get(key).geometries.push(cut);
    }
    g.dispose();
  });
  const out = new THREE.Group(); out.name = 'Paper landscape · consolidated';
  for (const bucket of buckets.values()) {
    const merged = mergeGeometries(bucket.geometries, false);
    for (const g of bucket.geometries) g.dispose();
    if (!merged) continue;
    const m = new THREE.Mesh(merged, bucket.material); m.castShadow = bucket.castShadow; m.receiveShadow = bucket.receiveShadow; out.add(m);
  }
  return out;
}

export function buildLandscape() {
  const group = new THREE.Group(); group.name = 'Jiuzhai · a little paper atlas';
  const staticRoot = new THREE.Group(), dynamicRoot = new THREE.Group();
  const platforms = [], lakes = [], movingRipples = [], clouds = [];
  const rng = random(722);
  const outline = organicEllipse(11.7, 8.4, 114, 24);
  for (let i = 0; i < 5; i++) {
    const scale = 1 + (i === 0 ? -.006 : Math.sin(i * 1.4) * .008);
    paper(scalePoints(outline, scale), -.68 + i * .145, .145, [P.sand, P.blush, '#f0d3bd', '#e0c2a8', '#eee4c9'][i], staticRoot, .018);
  }
  const baseTop = .05;
  function terrace(ctrl, top, color = '#e4dcc0', levels = 4) {
    const pts = pointsCurve(ctrl, true, 100);
    let cx = 0, cz = 0; ctrl.forEach(p => { cx += p[0]; cz += p[1]; }); cx /= ctrl.length; cz /= ctrl.length;
    for (let i = 0; i < levels; i++) {
      const f = i / (levels - 1), yy = baseTop + (top - baseTop) * f;
      const ss = 1.04 - f * .04;
      const pp = pts.map(p => [(p[0] - cx) * ss + cx, (p[1] - cz) * ss + cz]);
      paper(pp, yy - .025, (top - baseTop) / levels + .025, i === levels - 1 ? color : ['#dac6a8', '#dfccb0', '#eadbc0', '#d8cbb0'][i % 4], staticRoot, .015);
    }
    platforms.push({ points: pts, y: top + (top - baseTop) / levels });
    return platforms.at(-1).y;
  }
  const leftY = terrace([[-10.3,-5.5],[-7.5,-7.2],[-3.9,-7.7],[-1.0,-5.8],[-.8,-2.2],[-2.5,.1],[-5,2.3],[-8.9,1.7],[-10.4,-1.1]], 1.06, '#dedcc2');
  const rightY = terrace([[.5,-5.6],[4.1,-7.1],[8.8,-5.9],[10.5,-2.9],[10,1.5],[7.3,2.3],[3.5,1.9],[1,-.1]], 1.17, '#e4ddbe');
  const centerY = terrace([[-2.4,-3.1],[.5,-3.9],[2.6,-2.1],[2.7,.1],[1.8,1.3],[-1.7,1.3],[-3.4,.2]], .88, '#ded8b7');
  const frontY = terrace([[-4.0,2.1],[-.8,1.7],[2.4,2.3],[5.1,3.6],[5.1,6.7],[2.9,7.4],[-.9,6.8],[-3.5,5.1]], .19, '#e9dfbf', 3);
  const villageY = terrace([[-9.4,2.1],[-6,2],[-4.2,3.7],[-3.7,5.7],[-5.4,6.5],[-8.1,5.7],[-9.7,4.0]], .16, '#e6dab9', 3);
  const mirrorY = terrace([[3.9,1.3],[8.4,1.4],[9.0,3.2],[7.6,4.8],[4.4,4.5],[3.3,3]], .36, '#e4d9bc', 3);
  function heightAt(x, z) {
    let y = .05;
    for (const p of platforms) if (inside([x, z], p.points)) y = Math.max(y, p.y);
    return y;
  }
  function addLake({ id, x, z, y, rx, rz, seed, points, palette, logs = false }) {
    const pts = points ? pointsCurve(points, true, 116) : organicEllipse(rx, rz, seed);
    const colors = palette || ['#a2d7c2', '#8dcdbf', '#72bab6', '#5da7b1'];
    ring(pts, 1.10, .995, y, .065, '#f0e6c9', staticRoot, x, z);
    ring(pts, 1.04, .995, y + .070, .020, '#d4dbc1', staticRoot, x, z);
    const scales = [1, .88, .72, .56, 0];
    for (let i = 0; i < 4; i++) {
      if (i === 3) paper(scalePoints(pts, scales[i], x, z), y + .035 - i * .006, .016, colors[i], staticRoot, 0);
      else ring(pts, scales[i], scales[i + 1], y + .035 - i * .006, .016, colors[i], staticRoot, x, z);
    }
    lakes.push({ id, points: scalePoints(pts, 1.15, x, z), x, z, y, rx, rz });
    // Broken fine ripples leave most of the colored paper water quiet.
    const rippleGroup = new THREE.Group();
    const rr = random(seed * 71);
    for (let i = 0; i < (id === 'wuhua' ? 19 : 9); i++) {
      const xx = x + (rr() - .5) * rx * 1.25, zz = z + (rr() - .5) * rz * 1.1;
      if (!inside([xx, zz], scalePoints(pts, .65, x, z))) continue;
      const w = .12 + rr() * .35;
      lineTube([[xx - w,y+.061,zz],[xx,y+.061,zz+.024],[xx+w*.7,y+.061,zz+.012]], .008, '#c9e3cf', rippleGroup, 8, 3);
    }
    const mergedRipples = consolidate(rippleGroup); dynamicRoot.add(mergedRipples);
    movingRipples.push({ object: mergedRipples, phase: rr() * 6 });
    if (logs) for (let i = 0; i < 5; i++) {
      const xx = x + (rr() - .5) * rx, zz = z + (rr() - .5) * rz * .8, h = y + .057;
      const dx = .4 + rr() * .8, dz = .15 + rr() * .55;
      addBranch(staticRoot, [xx-dx*.6,h,zz+dz], [xx+dx,h,zz-dz], .021, '#8b9b7d');
      for (let k = 0; k < 4; k++) {
        const f = k / 4;
        addBranch(staticRoot, [xx-dx*.6+dx*1.6*f,h+.001,zz+dz-dz*2*f], [xx-dx*.6+dx*1.6*f-.25,h+.001,zz+dz-dz*2*f-.35], .010, '#91a48b');
      }
    }
    return new THREE.Vector3(x, y + .065, z);
  }
  const anchors = {};
  anchors.changhai = addLake({id:'changhai',x:-5.15,z:-3.95,y:leftY+.025,rx:1.9,rz:2.8,seed:11,
    points:[[-.7,-2.70],[.5,-2.78],[1.35,-2.18],[1.55,-1.28],[1.08,-.43],[.80,.30],[1.22,1.17],[1.45,1.91],[.85,2.56],[-.25,2.74],[-1.32,2.20],[-1.80,1.30],[-1.73,.24],[-1.32,-.55],[-1.44,-1.65]],
    palette:['#aac8bf','#95bab7','#7fa8ac','#65929f']});
  anchors.changhai.set(-5.0,anchors.changhai.y,-4.35);
  anchors.wucai = addLake({id:'wucai',x:-6.8,z:.60,y:leftY+.03,rx:1.07,rz:.79,seed:27,palette:['#a6d4af','#83c9b1','#61bcb6','#399eae']});
  anchors.wuhua = addLake({id:'wuhua',x:4.8,z:-2.72,y:rightY+.03,rx:3.78,rz:2.34,seed:33,logs:true,
    points:[[-3,-.4],[-2.4,-1.5],[-1,-1.65],[-.4,-1.1],[.7,-1.75],[2,-1.3],[3,-.4],[2.7,.9],[1.45,1.5],[.4,1.1],[-1,1.55],[-2.6,.95]].map(([x,z])=>[x*1.20,z*1.20]),
    palette:['#afe1c6','#94d2bf','#75c5bd','#62b1b8']});
  anchors.wuhua.set(5.1,anchors.wuhua.y,-2.55);
  anchors.mirror = addLake({id:'mirror',x:6.15,z:3.05,y:mirrorY+.03,rx:1.70,rz:.96,seed:94,palette:['#b6d8c4','#a0cbbb','#8cbbad','#79acaa']});
  addLake({id:'nor-top',x:.05,z:.37,y:centerY+.02,rx:1.92,rz:.59,seed:22,palette:['#b1d4bb','#a6d0bc','#8fc5b7','#80b9ae']});
  const s1 = addLake({id:'shuzheng1',x:.35,z:3.0,y:frontY+.20,rx:1.9,rz:.85,seed:41,palette:['#b3d8bc','#98cebb','#7fbfb2','#7bb7ab']});
  const s2 = addLake({id:'shuzheng2',x:.55,z:4.6,y:frontY+.11,rx:2.35,rz:1.04,seed:43,palette:['#badbc1','#a3d3bf','#8bc9ba','#7dbbad']});
  anchors.shuzheng = addLake({id:'shuzheng',x:1.5,z:6.25,y:.13,rx:2.85,rz:1.07,seed:51,palette:['#badbc1','#a5d3c0','#8dc6b8','#82bdb0']});
  anchors.nuorilang = new THREE.Vector3(0, centerY-.35, 1.65);
  anchors.pearl = new THREE.Vector3(6.1, rightY-.30, 1.16);
  waterfall(staticRoot,{x:0,z:1.14,top:centerY+.08,bottom:frontY+.23,width:4.1,seed:102,curve:.13});
  waterfall(staticRoot,{x:6.15,z:1.16,top:rightY+.06,bottom:mirrorY+.085,width:3.12,seed:110,curve:-.27});
  waterfall(staticRoot,{x:.7,z:3.81,top:s1.y+.01,bottom:s2.y,width:2.45,seed:112,curve:.08});
  waterfall(staticRoot,{x:1.4,z:5.50,top:s2.y+.01,bottom:anchors.shuzheng.y,width:3.28,seed:115,curve:.08});
  // The rear is a broken horseshoe, with a lower central saddle and open front.
  const mountainSpecs = [
    [-9.25,-4.8,2.0,2.0,2.9,1,true],[-8.35,-6.4,2.35,1.65,3.7,7,true],
    [-6.25,-7.05,2.4,1.40,4.7,9,true],[-3.5,-7.05,2.35,1.45,5.6,10,true],
    [-1.15,-6.3,2.1,1.75,3.8,12,true],[.6,-5.9,1.8,1.6,2.65,14,true],
    [2.4,-6.15,1.85,1.35,2.6,17,false],[4.4,-6.2,2.0,1.5,3.35,18,true],
    [7.0,-5.95,2.2,1.5,3.85,21,true],[9.0,-4.5,1.7,1.5,2.50,26,false],
    [-2.9,-2.2,1.6,1.25,2.25,29,false],[-9.55,-1.8,1.35,1.4,1.8,31,false],
  ];
  for (const [x,z,rx,rz,height,seed,snow] of mountainSpecs) addMountain(staticRoot,{x,z,y:heightAt(x,z)-.04,rx,rz,height,seed,snow});
  // Footpaths stay on land. In particular, the Long Lake has no river outlet.
  boardwalk(staticRoot,[[-8.5,leftY+.12,-1.3],[-8.6,leftY+.12,.3],[-8.0,leftY+.12,1.55],[-6.1,leftY+.12,1.95],[-4.55,1.05,2.8],[-4.1,.65,3.6],[-3.9,.35,4.6],[-2.5,.33,5.7],[-.4,.31,7.0],[2.3,.27,7.65]],.35,true);
  boardwalk(staticRoot,[[3.2,rightY+.12,-.42],[3.0,rightY+.12,.6],[3.2,1.05,1.7],[3.6,.72,2.3],[3.5,.62,3.5],[2.8,.57,4.0]],.32,true);
  boardwalk(staticRoot,[[-7.4,villageY+.06,4.2],[-6.1,villageY+.06,4.8],[-4.4,villageY+.06,4.4]],.32,false);
  for (const [x,z,s,r] of [[-7.2,4.35,.95,.05],[-5.75,4.9,.70,-.09],[-8.15,4.96,.72,.12]]) {
    const house = createTibetanHouse({scale:s,seed:Math.round(100+x*7)});house.position.set(x,villageY+.02,z);house.rotation.y=r;staticRoot.add(house);
  }
  const flags=createPrayerFlags({length:3.0});flags.position.set(-7.5,villageY+.03,3.42);flags.rotation.y=.09;staticRoot.add(flags);
  // Curated groves with varied silhouettes, interrupted by water and open banks.
  const groves = [
    [-8.4,-3.6,1.0,1.6,16,'fir'],[-6.8,-1.9,1.05,.65,12,'fir'],[-2.65,-4.3,.55,1.1,11,'fir'],
    [-2.3,-.6,.9,.7,13,'fir'],[-4.6,1.6,1,.65,10,'mixed'],[-8.9,.6,.55,1.5,11,'autumn'],
    [1.45,-3.5,.55,1.15,13,'fir'],[3.2,-5.05,1.5,.48,13,'mixed'],[7.0,-4.65,1.35,.55,15,'autumn'],
    [9.15,-1.0,.55,1.75,19,'autumn'],[8.55,1.55,.55,.6,9,'mixed'],[3.0,1.55,.55,.45,8,'fir'],
    [-2.0,2.7,.55,.6,7,'mixed'],[-3.6,4.0,.45,.55,7,'autumn'],[4.0,5.9,.5,.7,9,'mixed'],
    [-8.4,3.3,.7,.5,9,'autumn'],[-6.4,5.8,1.1,.35,9,'autumn'],[7.4,4.45,1.2,.3,8,'mixed'],
    [-7.45,-2.7,.40,.85,9,'fir'],[-4.75,.15,.65,.40,8,'mixed'],
    [.70,-1.35,.40,.62,8,'fir'],[4.70,.12,.63,.32,7,'autumn'],
    [7.8,-.05,.53,.40,7,'autumn'],[9.15,-3.0,.36,.80,8,'mixed'],
  ];
  const firColors = ['#869b7f','#9aa885','#728c77','#b0b294'];
  const autumnColors = ['#d8a18c','#d6b576','#bf8e88','#e1b79a','#c8be86'];
  let treeSeed = 0;
  for (const [cx,cz,rx,rz,count,type] of groves) {
    for (let i=0; i<count; i++) {
      const a=rng()*Math.PI*2, radial=Math.sqrt(rng()), x=cx+Math.cos(a)*rx*radial, z=cz+Math.sin(a)*rz*radial;
      if (!inside([x,z],outline) || lakes.some(l=>inside([x,z],l.points))) continue;
      const isFir=type==='fir'||(type==='mixed'&&rng()<.65);
      const h=(isFir?.75:.62)+rng()*(isFir?1.05:.65), seed=++treeSeed*17;
      const tree=isFir?createFir({height:h,color:firColors[seed%firColors.length],seed}):createDeciduous({height:h,color:autumnColors[seed%autumnColors.length],seed});
      tree.position.set(x,heightAt(x,z)+.015,z);tree.rotation.y=rng()*Math.PI*2;staticRoot.add(tree);
    }
  }
  // Small paper stones and grasses give the banks a scale without crowding them.
  for (let i=0;i<115;i++) {
    const a=rng()*Math.PI*2, rad=Math.sqrt(rng()),x=Math.cos(a)*10.5*rad,z=Math.sin(a)*7.4*rad;
    if(lakes.some(l=>inside([x,z],l.points))||z < -4.9)continue;
    const s=.045+rng()*.10;
    const stone=mesh(new THREE.DodecahedronGeometry(s,0),material(['#c7c7a6','#b5bc99','#d8ceb0'][i%3]),staticRoot);
    stone.position.set(x,heightAt(x,z)+s*.35,z);stone.scale.set(1.5,.6,1);stone.rotation.set(rng(),rng(),rng());
  }
  for(const spec of [[-5.5,7.8,-6.8,2.4],[3.8,6.2,-5.1,2.1]]){
    const cloud=createCloud({width:spec[3]});cloud.position.set(spec[0],spec[1],spec[2]);cloud.rotation.y=.28;dynamicRoot.add(cloud);clouds.push({object:cloud,x:spec[0],phase:rng()*6});
  }
  group.add(consolidate(staticRoot),dynamicRoot);
  group.userData.provenance = 'Procedurally constructed Three.js paper geometry following the generated composition concept. Not a neural image-to-3D conversion.';
  group.userData.scenicTopology = 'Schematic Y-shaped valleys; Changhai has no surface-water outlet.';
  let triangles=0,meshes=0;
  group.traverse(o=>{if(o.isMesh){meshes++;triangles+=(o.geometry.index?o.geometry.index.count:o.geometry.attributes.position.count)/3;}});
  return {
    group, anchors, bounds:{width:24,depth:17,height:8.5},
    metadata:{trees:treeSeed,triangles:Math.round(triangles),meshes,construction:'paper geometry'},
    update(elapsed) {
      for(const r of movingRipples)r.object.position.y=Math.sin(elapsed*.7+r.phase)*.004;
      for(const c of clouds)c.object.position.x=c.x+Math.sin(elapsed*.075+c.phase)*.13;
    },
  };
}
