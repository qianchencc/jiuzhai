import * as THREE from 'three';
import { fallSurfacePoint, fallSurfaceNormal, updateWaterfallVeil } from './water-sculpture-v4.js';
import { createWaterSurfaceIndex } from './water-surface-v5.js';

// Moving pieces are cut from the same quiet palette as the landscape. They are
// real, depth-tested geometry, shared by WebGL and the software renderer.
const TAU = Math.PI * 2;
const clamp = THREE.MathUtils.clamp;
const lerp = THREE.MathUtils.lerp;
const smooth = t => t * t * (3 - 2 * t);
const fract = n => n - Math.floor(n);
const hash = (a, b = 0) => fract(Math.sin(a * 127.1 + b * 311.7) * 43758.5453123);
const FALLS = [
  { id: 'pearl', x: 7.45, z: .57, width: 3.12, top: 3.4, bottom: 1.78, depth: 1.02, curve: .07, count: 28 },
  { id: 'nuorilang', x: -.35, z: 4.54, width: 5.15, top: 1.78, bottom: .26, depth: .72, curve: .08, count: 40 },
  { id: 'shuzheng-one', x: 1, z: 6.94, width: 2.1, top: .26, bottom: .08, depth: .23, curve: .025, count: 10 },
  { id: 'shuzheng-two', x: 2.25, z: 8.54, width: 2.4, top: .08, bottom: -.08, depth: .23, curve: .025, count: 10 },
];

function material(color, opacity = 1) {
  return new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity,
    side: THREE.DoubleSide, depthWrite: false, toneMapped: false });
}

function batch(parent, name, quads, mat) {
  const geometry = new THREE.BufferGeometry();
  const position = new THREE.Float32BufferAttribute(new Float32Array(quads * 18), 3);
  position.setUsage(THREE.DynamicDrawUsage);
  geometry.setAttribute('position', position);
  const mesh = new THREE.Mesh(geometry, mat);
  mesh.name = name;
  mesh.frustumCulled = false;
  mesh.userData.atmosphere = true;
  parent.add(mesh);
  return { mesh, position, array: position.array };
}

function quad(array, offset, a, b, c, d) {
  array.set(a, offset); array.set(b, offset + 3); array.set(c, offset + 6);
  array.set(a, offset + 9); array.set(c, offset + 12); array.set(d, offset + 15);
}

// All horizontal effects share the exact visible-water mask used by clicks.
// The outline excludes shore bevels, including their tight concave inlets.
const basinIndex=createWaterSurfaceIndex;
function fillClipped(target,polygons,basin,y) {
  target.array.fill(0);let cursor=0;
  for(const polygon of polygons)for(const triangle of basin.clipPolygon(polygon)){
    if(cursor+9>target.array.length)throw new Error(`Water-effect capacity exceeded: ${target.mesh.name}`);
    for(const point of triangle){target.array[cursor++]=point[0];target.array[cursor++]=y;target.array[cursor++]=point[1];}
  }
  target.usedVertices=cursor/3;target.position.needsUpdate=true;
}

function lakeCurrents(parent, basins) {
  const counts = { wuhua: 11, changhai: 5, wucai: 3, mirror: 4, 'nuorilang-head': 3,
    'shuzheng-upper': 2, 'shuzheng-middle': 2, 'shuzheng-lower': 2 };
  return basins.map((basin, basinNumber) => {
    const lines = [];
    const tempo = basin.id === 'mirror' ? .42 : basin.id === 'changhai' ? .56 : basin.id.startsWith('shuzheng') ? 1.25 : 1;
    for (let attempt = 0; lines.length < counts[basin.id] && attempt < 1200; attempt++) {
      const seed = attempt + basinNumber * 1601;
      const x = lerp(basin.x0, basin.x1, hash(seed, 1)), z = lerp(basin.z0, basin.z1, hash(seed, 2));
      const length = basin.id === 'wuhua' ? 1.15 + hash(seed, 3) * 1.10 : .60 + hash(seed, 3) * .85;
      const bend = basin.id === 'wuhua' ? .10 + hash(seed, 4) * .12 : .06 + hash(seed, 4) * .08;
      const width = .018 + hash(seed, 5) * .012, angle = (hash(seed, 8) - .5) * .44;
      const co = Math.cos(angle), si = Math.sin(angle);
      let fits = true;
      for (let i = 0; i <= 5 && fits; i++) for (const side of [-1, 1]) {
        const along = (i / 5 - .5) * length, across = side * (bend + .17 + width * 1.9);
        if (!basin.contains(x + along * co - across * si, z + along * si + across * co)) { fits = false; break; }
      }
      if (fits) lines.push({ x, z, length, bend, width, co, si, phase: hash(seed, 6) * TAU, speed: (.28 + hash(seed, 7) * .17) * tempo });
    }
    const result = batch(parent, `lake-breath-${basin.id}`, Math.max(lines.length * 13,basin.id==='nuorilang-head'?72:30),
      material(basin.id === 'changhai' ? '#b2cfc0' : '#d5e5c9', .25));
    return { ...result, basin, lines, wake: 0 };
  });
}

function fallingWater(parent,landscape,basins) {
  const receiverIds={pearl:'mirror',nuorilang:'shuzheng-upper','shuzheng-one':'shuzheng-middle','shuzheng-two':'shuzheng-lower'};
  return FALLS.map((data,number)=>{
    const veil=landscape.waterMeshes.find(mesh=>mesh.name===`waterfall-${data.id}`);
    const fall={...data,...veil?.userData.flowSurface,id:data.id};
    const large=fall.top-fall.bottom>.6;
    const streams=Array.from({length:fall.count},(_,i)=>({
      u:.018+(i+.35+hash(i,number+1)*.25)/fall.count*.964,
      phase:hash(i,number+5),speed:.59+hash(i,number+11)*.30,
      length:.19+hash(i,number+7)*.25,width:.010+hash(i,number+9)*.020,
    }));
    const flow=batch(parent,`descending-water-${fall.id}`,streams.length*3,material('#fffff3',.82));
    const patches=Array.from({length:large?7:4},(_,i)=>({
      u:.03+(i+.5)/(large?7:4)*.94,phase:hash(i,number+13),
      length:.14+hash(i,number+17)*.19,width:.038+hash(i,number+19)*.055,
      speed:.37+hash(i,number+23)*.20,
    }));
    const foam=batch(parent,`aerated-outflow-${fall.id}`,large?176:128,material('#f9fbef',.69));
    return {...fall,veil,streams,flow,patches,foam,laceSegments:large?26:12,receiver:basins.find(b=>b.id===receiverIds[fall.id])};
  });
}

function mistRibbons(parent) {
  const placements = [
    [7.45, 1.84, 1.72, 3.5, .27], [-.35, .32, 5.40, 5.3, .30],
    [-6.8, 4.02, -7.35, 2.4, .17], [6.2, 1.85, 3.2, 2.4, .13],
  ];
  return placements.map(([x, y, z, length, breadth], i) => ({ x, y, z, length, breadth, phase: i * 2.3,
    ...batch(parent, `vellum-mist-${i}`, 8, material('#f0e9d3', i < 2 ? .13 : .075)) }));
}

function foldedLeaves(parent, landscape, basins) {
  const geometry = new THREE.BufferGeometry();
  // Two unequal paper folds catch different amounts of warm light.
  geometry.setAttribute('position', new THREE.Float32BufferAttribute([
    0, -.10, 0, -.075, .005, -.018, 0, .14, 0,
    0, -.10, 0, 0, .14, 0, .065, .018, .028,
  ], 3));
  geometry.computeVertexNormals();
  const zones = landscape.interactionZones.filter(z => z.kind === 'forest');
  const colors = ['#eea38c', '#f0c775', '#de8f9a', '#b2bd88'];
  const leaves = [];
  for (let i = 0; i < 28; i++) {
    const zone = zones[i % zones.length];
    const angle = hash(i, 3) * TAU, radius = .3 + hash(i, 5) * 1.0;
    const x = zone.center.x + Math.cos(angle) * radius, z = zone.center.z + Math.sin(angle) * radius;
    const dx = .65 + hash(i, 8) * 1.0, dz = (hash(i, 9) - .5) * .9;
    const destinationX = x + dx, destinationZ = z + dz;
    let floor = landscape.groundHeight(destinationX, destinationZ) + .028;
    const water = basins.find(b => b.contains(destinationX, destinationZ));
    if (water) floor = Math.max(floor, water.y + .025);
    const startY = Math.max(landscape.groundHeight(x, z) + 1.45 + hash(i, 7) * .65, floor + .65);
    const samples = Array.from({ length: 13 }, (_, n) => {
      const q = n / 12, xx = x + dx * q + Math.sin(q * Math.PI) * .25, zz = z + dz * q;
      return landscape.groundHeight(xx, zz) + .025;
    });
    const mat = new THREE.MeshStandardMaterial({ color: colors[i % colors.length], roughness: 1,
      side: THREE.DoubleSide, transparent: true, opacity: .9, depthWrite: false });
    const mesh = new THREE.Mesh(geometry, mat); mesh.name = `drifting-paper-leaf-${i}`;
    mesh.castShadow = false; mesh.frustumCulled = false; mesh.userData.atmosphere = true; parent.add(mesh);
    leaves.push({ mesh, x, z, dx, dz, floor, startY, samples, seed: i * 1.618,
      flight: 6.5 + hash(i, 10) * 4.0, rest: 8 + hash(i, 11) * 8, phase: hash(i, 12) });
  }
  return leaves;
}

export function createSceneAtmosphere({ scene, landscape, software = false, reducedMotion = false }) {
  const group = new THREE.Group(); group.name = 'the-valley-breathes'; scene.add(group);
  const basins = landscape.waterMeshes.filter(m => !m.userData.falls).map(basinIndex);
  const waters = lakeCurrents(group, basins), falls = fallingWater(group,landscape,basins), mists = mistRibbons(group);
  const leaves = foldedLeaves(group, landscape, basins);
  const clouds=(landscape.clouds||[]).map((cloud,i)=>({cloud,x:cloud.position.x,y:cloud.position.y,phase:i*2.13}));
  const gust = { point: new THREE.Vector3(), strength: 0 };
  let lastTime = -Infinity;

  function disturb(point, strength = 1) {
    gust.point.copy(point); gust.strength = Math.max(gust.strength, clamp(strength, 0, 2));
    for (const water of waters) if (water.basin.contains(point.x, point.z)) water.wake = Math.max(water.wake, strength);
  }

  function update(time, dt, { daylight = 0 } = {}) {
    const t = reducedMotion ? 0 : time;
    if (t === lastTime) return false;
    lastTime = t;
    gust.strength *= Math.exp(-Math.max(0, dt) * 1.35);
    for (const water of waters) {
      water.wake*=Math.exp(-Math.max(0,dt)*1.4);
      const {lines,basin}=water,polygons=[];
      const motion=reducedMotion?0:1;
      for(const line of lines){
        const phase=t*line.speed+line.phase;
        const drift=Math.sin(phase*.73)*(basin.id==='mirror'?.065:.13)*motion;
        const breath=.48+.52*(.5+.5*Math.sin(phase));
        function at(q,side){
          const taper=Math.pow(Math.sin(q*Math.PI),.65),along=(q-.5)*line.length;
          const across=drift+Math.sin(q*Math.PI+phase*.16)*line.bend+side*line.width*taper*breath*(1+water.wake*.45);
          return [line.x+along*line.co-across*line.si,line.z+along*line.si+across*line.co];
        }
        for(let segment=0;segment<4;segment++){
          const a=segment/4,b=(segment+1)/4;
          polygons.push([at(a,-1),at(b,-1),at(b,1),at(a,1)]);
        }
      }
      fillClipped(water,polygons,basin,basin.y+.008);
      water.mesh.material.opacity=lerp(.22,.19,daylight);
    }
    for(const fall of falls){
      if(fall.veil)updateWaterfallVeil(fall.veil,t);
      for(let streamNumber=0;streamNumber<fall.streams.length;streamNumber++){
        const stream=fall.streams[streamNumber],age=fract(t*stream.speed+stream.phase);
        // A uniformly timed packet accelerates down the actual curved veil.
        // Its fine width is evaluated on that same surface, then moved only
        // 8 mm along the real surface normal to avoid any floating decal.
        const head=.005+.990*Math.pow(age,1.22);
        function at(q,side){
          const p=clamp(head-stream.length+q*stream.length,.002,.998);
          const taper=Math.sin(q*Math.PI)*Math.sin(p*Math.PI)*Math.sqrt(Math.sin(age*Math.PI));
          const u=clamp(stream.u+side*stream.width*taper/fall.width,.002,.998);
          const point=fallSurfacePoint(fall,u,p,t),normal=fallSurfaceNormal(fall,u,p,t);
          return [point[0]+normal[0]*.008,point[1]+normal[1]*.008,point[2]+normal[2]*.008];
        }
        for(let segment=0;segment<3;segment++){
          const a=segment/3,b=(segment+1)/3;
          quad(fall.flow.array,(streamNumber*3+segment)*18,at(a,-1),at(b,-1),at(b,1),at(a,1));
        }
      }
      fall.flow.position.needsUpdate=true;
      const receiver=fall.receiver,polygons=[];
      if(receiver){
        // Flat scalloped lace coalesces where the water lands, with small
        // apertures and downstream gaps. It is clipped to water and follows
        // the irregular runout; there is no straight necklace of particles.
        for(let band=0;band<2;band++)for(let i=0;i<fall.laceSegments;i++){
          if((band===1&&hash(i,fall.seed+9)>.56)||(band===0&&hash(i,fall.seed+4)>.91))continue;
          function at(u,side){
            const end=fallSurfacePoint(fall,u,1,t),pulse=.5+.5*Math.sin(u*47-t*3.1+band*2.3);
            const width=(band?.014:.036)+(band?.010:.032)*pulse;
            const z=end[2]+.027+band*.14+Math.sin(u*69+t*2.3)*.016;
            return [end[0],z+side*width];
          }
          const a=.012+i/fall.laceSegments*.976,b=.012+(i+1)/fall.laceSegments*.976;
          polygons.push([at(a,-1),at(b,-1),at(b,1),at(a,1)]);
        }
        for(const patch of fall.patches){
          const age=fract(t*patch.speed+patch.phase),pulse=Math.sin(age*Math.PI);
          const end=fallSurfacePoint(fall,patch.u,1,t);
          const x=end[0]+Math.sin(age*4+patch.phase*TAU)*.025,z=end[2]+.09+age*.31;
          const length=patch.length*(.45+.55*pulse),width=patch.width*(.20+.80*pulse);
          const island=[];
          for(let j=0;j<8;j++){
            const a=j/8*TAU;island.push([x+Math.cos(a)*length*.5,z+Math.sin(a)*width]);
          }
          polygons.push(island);
        }
      }
      if(receiver)fillClipped(fall.foam,polygons,receiver,receiver.y+.009);
    }
    for (const mist of mists) {
      const drift = Math.sin(t * .13 + mist.phase) * .17;
      function at(q, side) {
        const taper = Math.sin(q * Math.PI), wave = Math.sin(q * Math.PI * 2 + t * .19 + mist.phase);
        return [mist.x + (q - .5) * mist.length + drift,
          mist.y + .04 + .045 * wave * taper + (side > 0 ? .055 * taper : 0),
          mist.z + wave * .07 + side * mist.breadth * taper];
      }
      for (let segment = 0; segment < 8; segment++) {
        const a = segment / 8, b = (segment + 1) / 8;
        quad(mist.array, segment * 18, at(a, -1), at(b, -1), at(b, 1), at(a, 1));
      }
      mist.position.needsUpdate = true;
    }
    for(const record of clouds){record.cloud.position.x=record.x+Math.sin(t*.07+record.phase)*.10;record.cloud.position.y=record.y+Math.sin(t*.095+record.phase)*.035;}
    for (const leaf of leaves) {
      const period = leaf.flight + leaf.rest, age = fract(t / period + leaf.phase) * period;
      const q = clamp(age / leaf.flight, 0, 1), rest = Math.max(0, age - leaf.flight);
      const reach = Math.exp(-Math.hypot(leaf.x - gust.point.x, leaf.z - gust.point.z) * .6);
      const flutter = Math.sin(q * Math.PI) * Math.sin(age * 2.3 + leaf.seed) * (.22 + reach * gust.strength * .16);
      const x = leaf.x + leaf.dx * q + Math.sin(q * Math.PI) * .25;
      const z = leaf.z + leaf.dz * q + flutter;
      const sample = q * 12, a = Math.floor(sample), b = Math.min(a + 1, 12);
      const floor = lerp(leaf.samples[a], leaf.samples[b], sample - a);
      const y = q < 1 ? Math.max(floor, lerp(leaf.startY, leaf.floor, q * q) + Math.sin(q * Math.PI) * .15) : leaf.floor;
      leaf.mesh.position.set(x, y, z);
      if (q < 1) leaf.mesh.rotation.set(age * 1.7 + leaf.seed, age * .65, Math.sin(age * 1.3 + leaf.seed) * .6);
      else leaf.mesh.rotation.set(-Math.PI / 2, 0, leaf.seed);
      const opacity = Math.min(1, age / .6, Math.max(0, (period - age) / 1.6));
      leaf.mesh.material.opacity = opacity * (rest > 0 ? .8 : .95);
      leaf.mesh.scale.setScalar(.65 + hash(leaf.seed) * .7);
    }
    return true;
  }

  update(0, 0);
  let vertices = 0, meshes = 0;
  group.traverse(object => { if (object.isMesh) { meshes++; vertices += object.geometry.attributes.position.count; } });
  return { group, update, disturb, metadata: {
    meshes, dynamicVertices: vertices, lakeCurrentLines: waters.reduce((n, w) => n + w.lines.length, 0),
    fallingWaterStrokes: falls.reduce((n, f) => n + f.streams.length, 0),
    foamPatches: falls.reduce((n,f)=>n+f.patches.length,0), animatedVeilVertices: falls.reduce((n,f)=>n+(f.veil?.geometry.attributes.position.count||0),0), foamBands:0, mistRibbons: mists.length, fallingAndSettledLeaves: leaves.length,
    waterfallSurfaceModel:'continuous thin veil with travelling geometry and aeration',
    actualBasinClipping: true, softwareGeometry: software,
  } };
}
