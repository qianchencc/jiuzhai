import * as THREE from 'three';

// Small, reusable paper sculptures. Coordinates are metres in a Y-up scene.
// Cached resources belong to this module: do not dispose them per instance.
const materials = new Map();
const geometries = new Map();
const UP = new THREE.Vector3(0, 1, 0);
const palette = {
  paper: '#f8eedb', edge: '#d8c8ae', wood: '#92735c',
  ink: '#55483f', rust: '#956152', sage: '#8b9b85', gold: '#c9ac76',
};

function rng(seed = 1) {
  let value = (Number(seed) || 1) >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let t = value;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function tint(color, amount) {
  return new THREE.Color(color).lerp(new THREE.Color(amount >= 0 ? '#fff8e9' : '#554a42'), Math.abs(amount));
}

function material(color, extra = '') {
  const c = new THREE.Color(color);
  const key = `${c.getHexString()}:${extra}`;
  if (!materials.has(key)) {
    materials.set(key, new THREE.MeshStandardMaterial({
      color: c, roughness: 1, metalness: 0, flatShading: true,
      name: `paper-${key}`,
    }));
  }
  return materials.get(key);
}

function paperMaterials(color) {
  return [material(color), material(tint(color, -.055)), material(tint(color, -.16))];
}

function geometry(key, create) {
  if (!geometries.has(key)) geometries.set(key, create());
  return geometries.get(key);
}

function mesh(geo, mat, parent, position = [0, 0, 0], scale = [1, 1, 1]) {
  const item = new THREE.Mesh(geo, mat);
  item.position.set(...position);
  item.scale.set(...scale);
  item.castShadow = true;
  item.receiveShadow = true;
  parent.add(item);
  return item;
}

function box(parent, color, size, position) {
  return mesh(geometry('box', () => new THREE.BoxGeometry()), material(color), parent, position, size);
}

function twig(parent, from, to, radius, color = palette.wood) {
  const start = new THREE.Vector3(...from);
  const end = new THREE.Vector3(...to);
  const direction = end.clone().sub(start);
  const stem = mesh(geometry('tapered-stem', () => new THREE.CylinderGeometry(.66, 1, 1, 5, 1)),
    material(color), parent, start.add(end).multiplyScalar(.5).toArray(),
    [radius, direction.length(), radius]);
  stem.quaternion.setFromUnitVectors(UP, direction.normalize());
  return stem;
}

function solidPaper(key, shape, depth = .014) {
  return geometry(key, () => {
    const geo = new THREE.ExtrudeGeometry(shape, {depth, bevelEnabled: false, steps: 1, curveSegments: 4});
    geo.translate(0, 0, -depth / 2);
    // Give the two paper faces subtly different colours, with a dark cut edge.
    const normals = geo.getAttribute('normal');
    geo.clearGroups();
    let start = 0;
    let previous = -1;
    for (let i = 0; i < normals.count; i += 3) {
      const z = normals.getZ(i);
      const index = z > .8 ? 0 : z < -.8 ? 1 : 2;
      if (index !== previous && previous !== -1) {
        geo.addGroup(start, i - start, previous);
        start = i;
      }
      previous = index;
    }
    geo.addGroup(start, normals.count - start, previous);
    return geo;
  });
}

function finish(group, kind, seed) {
  group.name = `paper-${kind}`;
  group.userData = {propKind: kind, seed};
  return group;
}

/** Four interleaved, serrated paper silhouettes around a slender trunk. */
export function createFir({height = 1.4, color = '#879d89', seed = 1} = {}) {
  const group = new THREE.Group();
  const random = rng(seed);
  const variant = Math.abs(Math.trunc(seed)) % 9;
  const crown = geometry(`fir-${variant}`, () => {
    const r = rng(variant + 97);
    const shape = new THREE.Shape();
    const side = [[0, 1]];
    const levels = 6;
    for (let i = 1; i <= levels; i++) {
      const y = 1 - i * .129;
      const width = (.025 + i * .041) * (.91 + r() * .17);
      side.push([width, y - .027], [width * .54, y + .024]);
    }
    side.push([.065, .18]);
    shape.moveTo(...side[0]);
    for (const point of side.slice(1)) shape.lineTo(...point);
    for (const point of side.slice(1).reverse()) shape.lineTo(-point[0], point[1]);
    shape.closePath();
    return solidPaper(`fir-paper-${variant}`, shape, .011);
  });
  for (let i = 0; i < 4; i++) {
    const sheet = mesh(crown, paperMaterials(tint(color, (i % 2) * .045)), group);
    sheet.rotation.y = i * Math.PI / 4;
    sheet.scale.set(1 + (random() - .5) * .15, .985 + random() * .015, 1);
  }
  twig(group, [0, 0, 0], [.006, .84, 0], .019, palette.wood);
  group.rotation.y = random() * Math.PI;
  group.scale.setScalar(height);
  return finish(group, 'fir', seed);
}

function foldedCrown(variant) {
  return geometry(`folded-crown-${variant}`, () => {
    const random = rng(variant + 201);
    const points = [
      [0, -.54], [-.25, -.39], [-.43, -.2], [-.54, .04], [-.48, .27],
      [-.33, .46], [-.09, .55], [.14, .53], [.36, .4], [.5, .19],
      [.51, -.06], [.36, -.31], [.18, -.43],
    ].map(([x, y], i) => [x * (.93 + random() * .13), y, (i % 2 ? -.02 : .024)]);
    const positions = [];
    const groups = [];
    const center = [0, -.13, .085];
    function triangle(a, b, c, mat) {
      const offset = positions.length / 3;
      positions.push(...a, ...b, ...c);
      groups.push([offset, 3, mat]);
    }
    for (let i = 0; i < points.length; i++) {
      const a = points[i], b = points[(i + 1) % points.length];
      const backA = [a[0], a[1], a[2] - .018];
      const backB = [b[0], b[1], b[2] - .018];
      triangle(center, b, a, 0);
      triangle([center[0], center[1], center[2] - .018], backA, backB, 1);
      triangle(a, b, backB, 2);
      triangle(a, backB, backA, 2);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const uvs = [];
    for (let i = 0; i < positions.length; i += 3) uvs.push(positions[i] + .6, positions[i + 1] + .6);
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    groups.forEach(([start, count, index]) => geo.addGroup(start, count, index));
    geo.computeVertexNormals();
    return geo;
  });
}

/** Branching stem with five differently folded, offset autumn paper crowns. */
export function createDeciduous({height = 1.2, color = '#d2b18d', seed = 1} = {}) {
  const group = new THREE.Group();
  const random = rng(seed);
  const lean = (random() - .5) * .11;
  twig(group, [0, 0, 0], [lean, .57, 0], .025);
  twig(group, [lean, .45, 0], [lean + .025, .9, .018], .016);
  twig(group, [lean * .65, .34, 0], [-.24, .68, .025], .012);
  twig(group, [lean, .45, 0], [.24, .72, -.035], .011);
  twig(group, [lean, .49, 0], [-.03, .74, -.2], .01);
  const crowns = [
    [-.23, .65, .025, .37, -.31], [.21, .69, -.04, .38, .43],
    [-.035, .77, -.17, .37, 1.24], [.03, .78, .13, .4, -.93],
    [lean + .01, .84, .01, .3, .17],
  ];
  crowns.forEach(([x, y, z, size, rotation], i) => {
    const crown = mesh(foldedCrown((Math.abs(Math.trunc(seed)) + i) % 7),
      paperMaterials(tint(color, i === 2 ? -.075 : i * .035)), group,
      [x, y, z], [size * (.93 + random() * .14), size, size]);
    crown.rotation.y = rotation + (random() - .5) * .24;
    crown.rotation.z = (random() - .5) * .3;
  });
  group.rotation.y = random() * Math.PI * 2;
  group.scale.setScalar(height);
  return finish(group, 'deciduous', seed);
}

function houseWindow(parent, x, y, z, rotation = 0, width = .17, height = .21) {
  const windowGroup = new THREE.Group();
  windowGroup.position.set(x, y, z);
  windowGroup.rotation.y = rotation;
  parent.add(windowGroup);
  box(windowGroup, palette.ink, [width + .035, height + .035, .026], [0, 0, 0]);
  box(windowGroup, '#d9bd89', [width - .018, height - .024, .009], [0, 0, .019]);
  box(windowGroup, palette.ink, [.013, height, .018], [0, 0, .026]);
  box(windowGroup, palette.ink, [width, .013, .018], [0, .025, .027]);
  box(windowGroup, palette.rust, [width + .07, .025, .067], [0, height / 2 + .035, .008]);
}

/** A compact, flat-roofed Tibetan house; default bounds approximately 1.15 × 1.1 × .9. */
export function createTibetanHouse({scale = 1, seed = 1} = {}) {
  const group = new THREE.Group();
  const random = rng(seed);
  const wall = tint('#f1e5cc', Math.floor(random() * 3) * .025);
  box(group, '#cab99f', [1.15, .05, .9], [0, .025, 0]);
  box(group, '#e7d9be', [1.11, .05, .86], [0, .075, 0]);
  box(group, '#d7c5a8', [1.07, .035, .82], [0, .1175, 0]);
  box(group, wall, [1.01, .745, .76], [0, .5075, 0]);
  box(group, '#bda98e', [1.025, .055, .775], [0, .163, 0]);
  // The fine horizontal colour band wraps all four facades.
  [palette.rust, palette.gold, palette.paper, palette.sage, palette.rust].forEach((color, i) => {
    box(group, color, [1.035, .012, .785], [0, .855 + i * .012, 0]);
  });
  box(group, palette.ink, [1.09, .035, .845], [0, .9275, 0]);
  box(group, palette.rust, [1.15, .027, .9], [0, .9585, 0]);
  box(group, '#d5bda0', [1.095, .027, .845], [0, .9855, 0]);
  box(group, '#eee0c7', [1.02, .025, .77], [0, 1.0115, 0]);
  // Low roof parapets keep the roof visibly flat from every angle.
  box(group, '#a87960', [1.04, .052, .035], [0, 1.05, .371]);
  box(group, '#a87960', [1.04, .052, .035], [0, 1.05, -.371]);
  box(group, '#a87960', [.035, .052, .71], [-.5025, 1.05, 0]);
  box(group, '#a87960', [.035, .052, .71], [.5025, 1.05, 0]);
  for (const x of [-.492, .492]) for (const z of [-.368, .368]) {
    box(group, '#bea487', [.032, .63, .031], [x, .51, z]);
  }
  houseWindow(group, -.29, .61, .388);
  houseWindow(group, .29, .61, .388);
  houseWindow(group, -.27, .61, -.388, Math.PI);
  houseWindow(group, .27, .61, -.388, Math.PI);
  for (const z of [-.21, .21]) {
    houseWindow(group, .513, .61, z, Math.PI / 2, .15, .21);
    houseWindow(group, -.513, .61, z, -Math.PI / 2, .15, .21);
  }
  box(group, '#6b5145', [.23, .39, .026], [0, .329, .395]);
  box(group, '#a67c5d', [.162, .325, .015], [0, .314, .414]);
  box(group, '#6b5145', [.014, .325, .012], [0, .314, .429]);
  box(group, palette.rust, [.30, .045, .09], [0, .551, .403]);
  box(group, '#d9c4a2', [.34, .045, .135], [0, .1425, .3825]);
  box(group, '#d8c5a8', [.14, .07, .15], [-.30, 1.05, -.18]);
  box(group, '#a98469', [.17, .015, .18], [-.30, 1.0925, -.18]);
  group.scale.setScalar(scale);
  return finish(group, 'tibetan-house', seed);
}

/** Muted cloth-paper flags hung between two fine wooden posts. */
export function createPrayerFlags({length = 2.5} = {}) {
  const group = new THREE.Group();
  const half = length / 2;
  twig(group, [-half, 0, 0], [-half, .93, 0], .016);
  twig(group, [half, 0, 0], [half, .96, 0], .016);
  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(-half, .9, 0), new THREE.Vector3(0, .64, .025), new THREE.Vector3(half, .93, 0));
  mesh(new THREE.TubeGeometry(curve, 20, .005, 3, false), material('#b7a48c'), group);
  const count = Math.max(5, Math.min(12, Math.round(length * 3.2)));
  const width = length / (count + 1) * .76;
  const colors = ['#829bb3', '#e8dfc7', '#a96f5e', '#8f9f83', '#c9ad72'];
  const shape = new THREE.Shape();
  shape.moveTo(-.5, 0); shape.lineTo(.5, 0); shape.lineTo(.46, -.91);
  shape.lineTo(.06, -.98); shape.lineTo(-.46, -.92); shape.closePath();
  const flagGeo = solidPaper('prayer-flag', shape, .022);
  for (let i = 0; i < count; i++) {
    const pos = curve.getPoint((i + 1) / (count + 1));
    const flag = mesh(flagGeo, paperMaterials(colors[i % colors.length]), group,
      pos.toArray(), [width, width * 1.13, width]);
    flag.rotation.y = Math.sin(i * 1.8) * .17;
    flag.rotation.z = Math.cos(i * 1.7) * .065;
  }
  return finish(group, 'prayer-flags', 1);
}

/** Three offset, solid paper cloud silhouettes; front is +Z, base is Y=0. */
export function createCloud({width = 2} = {}) {
  const group = new THREE.Group();
  const shape = new THREE.Shape();
  shape.moveTo(-.49, 0);
  shape.bezierCurveTo(-.56, .1, -.46, .2, -.35, .18);
  shape.bezierCurveTo(-.35, .30, -.24, .34, -.16, .29);
  shape.bezierCurveTo(-.11, .46, .12, .44, .17, .29);
  shape.bezierCurveTo(.29, .35, .39, .25, .37, .17);
  shape.bezierCurveTo(.50, .19, .57, .07, .49, 0);
  shape.closePath();
  const cloudGeo = solidPaper('cloud', shape, .018);
  const layers = [
    ['#d4c3b3', 1, 0, -.032], ['#e8dac7', .96, .013, 0], ['#fff4df', .91, .024, .035],
  ];
  layers.forEach(([color, size, y, z]) => {
    mesh(cloudGeo, paperMaterials(color), group, [0, y, z], [size, size, 1]);
  });
  group.scale.setScalar(width);
  return finish(group, 'cloud', 1);
}
