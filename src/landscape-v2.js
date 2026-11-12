import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { createFir, createTibetanHouse, createPrayerFlags } from './props.js';
import { buildLakeV4, buildFallsV4, fallExcavationHeight, prepareFallProfile } from './water-sculpture-v4.js';
import { buildForestV4 } from './forest-sculpture-v4.js';
import { buildMountainSculptureV4 } from './mountain-sculpture-v4.js';

// JIUZHAI / A WALK THROUGH WATER
// One carved, continuous landscape. Nothing here relies on a DOM, a texture,
// a billboard or an image of a landscape. The thin edges really are paper.
const TAU = Math.PI * 2;
const C = {
  land: '#d9d5a9', moss: '#b6be8b', chalk: '#f1dfbd', paper: '#fff0d6',
  blush: '#eeb39f', cut: '#d2b58b', wood: '#c9a475', woodDark: '#947355',
  sage: '#8b9e72', sageLight: '#b0bd8c', pine: '#526f59', coral: '#ed9f8e',
  peach: '#f5bd91', honey: '#e7bb6e', gold: '#f5d492', snow: '#fff3df',
  aqua: '#7abfad', jade: '#289f9f', blue: '#268594', deep: '#285e73',
};
const palette = Object.fromEntries(Object.entries(C).map(([k,v]) => [k,new THREE.Color(v)]));
const UP = new THREE.Vector3(0,1,0);
const FALLS = [
  {name:'pearl',x:7.45,z:.57,width:3.12,top:3.4,bottom:1.78,depth:1.02,seed:8,curve:.07},
  {name:'nuorilang',x:-.35,z:4.54,width:5.15,top:1.78,bottom:.26,depth:.72,seed:19,curve:.08},
  {name:'shuzheng-one',x:1.0,z:6.94,width:2.1,top:.26,bottom:.08,depth:.23,seed:20,curve:.025},
  {name:'shuzheng-two',x:2.25,z:8.54,width:2.4,top:.08,bottom:-.08,depth:.23,seed:22,curve:.025},
];
const clamp = THREE.MathUtils.clamp;
const mix = THREE.MathUtils.lerp;
const smooth = (a,b,x) => { const t=clamp((x-a)/(b-a),0,1); return t*t*(3-2*t); };
const hash = (x,z=0) => { const n=Math.sin(x*127.1+z*311.7)*43758.5453123; return n-Math.floor(n); };
function random(seed=1) { let n=seed>>>0; return () => { n=(1664525*n+1013904223)>>>0; return n/4294967296; }; }
function noise(x,z) {
  const ix=Math.floor(x),iz=Math.floor(z),fx=smooth(0,1,x-ix),fz=smooth(0,1,z-iz);
  return mix(mix(hash(ix,iz),hash(ix+1,iz),fx),mix(hash(ix,iz+1),hash(ix+1,iz+1),fx),fz)*2-1;
}
function organic(points,count=120) {
  const curve=new THREE.CatmullRomCurve3(points.map(([x,z])=>new THREE.Vector3(x,0,z)),true,'centripetal');
  return curve.getPoints(count).slice(0,-1).map(p=>[p.x,p.z]);
}
function polygonArea(poly) { let s=0; for(let i=0;i<poly.length;i++){const a=poly[i],b=poly[(i+1)%poly.length];s+=a[0]*b[1]-a[1]*b[0];}return s/2; }
function segmentDistance(x,z,a,b) {
  const dx=b[0]-a[0],dz=b[1]-a[1],t=clamp(((x-a[0])*dx+(z-a[1])*dz)/(dx*dx+dz*dz||1),0,1);
  return { d:Math.hypot(x-a[0]-t*dx,z-a[1]-t*dz),t,x:a[0]+t*dx,z:a[1]+t*dz };
}
function signedDistance(x,z,poly) {
  let yes=false,d=Infinity;
  for(let i=0,j=poly.length-1;i<poly.length;j=i++) {
    const a=poly[i],b=poly[j];
    if(((a[1]>z)!==(b[1]>z))&&x<(b[0]-a[0])*(z-a[1])/(b[1]-a[1])+a[0])yes=!yes;
    d=Math.min(d,segmentDistance(x,z,a,b).d);
  }
  return yes?d:-d;
}
function geometryFromTriangles(pos,col) {
  const g=new THREE.BufferGeometry();
  g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));
  if(col?.length)g.setAttribute('color',new THREE.Float32BufferAttribute(col,3));
  g.computeVertexNormals(); return g;
}
function addTri(pos,col,a,b,c,color) { pos.push(...a,...b,...c); for(let i=0;i<3;i++)col.push(color.r,color.g,color.b); }
function makeMesh(geometry,material,parent,name) {
  const m=new THREE.Mesh(geometry,material);m.castShadow=true;m.receiveShadow=true;
  if(name)m.name=name;if(parent)parent.add(m);return m;
}
function mat(color,extra={}) {return new THREE.MeshStandardMaterial({color,roughness:1,metalness:0,...extra});}
const paperMat=mat('#ffffff',{vertexColors:true,side:THREE.DoubleSide});
paperMat.name='paper-v2-vertex-colour';
const waterMat=mat('#ffffff',{vertexColors:true,roughness:.83,side:THREE.DoubleSide});
waterMat.name='mineral-water-v2';
const colorMaterials=new Map();
function colored(color) { const key=typeof color==='string'?color:color.getHexString();if(!colorMaterials.has(key))colorMaterials.set(key,mat(color));return colorMaterials.get(key); }
const boxGeo=new THREE.BoxGeometry(1,1,1);
const stemGeo=new THREE.CylinderGeometry(.7,1,1,5,1);
function box(parent,size,position,color,rotation=0) {const m=makeMesh(boxGeo,colored(color),parent);m.position.set(...position);m.scale.set(...size);m.rotation.y=rotation;return m;}
function branch(parent,a,b,radius,color=C.woodDark) {
  const from=new THREE.Vector3(...a),to=new THREE.Vector3(...b),dir=to.clone().sub(from);
  const m=makeMesh(stemGeo,colored(color),parent);m.position.copy(from.add(to).multiplyScalar(.5));
  m.scale.set(radius,dir.length(),radius);m.quaternion.setFromUnitVectors(UP,dir.normalize());return m;
}

// The five upper basins and three lower pools each have one irregular shoreline.
// They are cut into the very same ground mesh; the rim is only 6–9 cm wide.
function makeBasins() {
  const raw=[
    {id:'wuhua',y:3.4,depth:.76,lip:.07,color:'jade',points:[[1.25,-4.8],[2.2,-6.4],[4.3,-7.45],[6.2,-7.1],[7.8,-7.5],[9.6,-6.5],[10.4,-5.1],[10.8,-3.5],[10.1,-2.4],[10.5,-1.3],[9.2,-.2],[8.7,.58],[7.5,.64],[6.15,.60],[5.7,-.05],[4.8,-.9],[3.15,-.8],[2.2,-2.2],[1.5,-2.9]]},
    {id:'changhai',y:3.95,depth:.72,lip:.055,color:'deep',points:[[-7.6,-9.0],[-6.15,-9.1],[-4.8,-8.1],[-4.7,-6.8],[-5.55,-5.3],[-5.6,-4.15],[-6.6,-3.15],[-7.95,-3.2],[-8.5,-4.3],[-7.8,-5.5],[-8.35,-6.65],[-8.65,-7.9]]},
    {id:'wucai',y:2.35,depth:.47,lip:.055,color:'blue',points:[[-8.8,-1.2],[-8.15,-1.95],[-6.75,-1.85],[-5.8,-1.1],[-5.9,-.2],[-6.7,.45],[-7.9,.6],[-8.65,-.1]]},
    {id:'mirror',y:1.78,depth:.5,lip:.055,color:'aqua',points:[[3.5,2.55],[4.1,1.95],[5.7,1.7],[7.35,1.85],[8.5,2.45],[8.7,3.5],[7.7,4.2],[6.15,4.5],[4.8,4.1],[4.15,3.5]]},
    {id:'nuorilang-head',y:1.78,depth:.23,lip:.05,color:'jade',points:[[-3.4,3.7],[-2.45,3.05],[-.6,3.0],[1.15,3.3],[2.6,3.1],[4.2,2.7],[4.7,3.4],[3.1,4.1],[1.7,4.55],[-.1,4.65],[-1.7,4.55],[-3.15,4.25]]},
    {id:'shuzheng-upper',y:.26,depth:.22,lip:.055,color:'jade',points:[[-3.1,5.8],[-1.9,5.05],[-.65,5.2],[.65,5.14],[1.8,5.18],[2.65,5.05],[3.8,5.65],[3.75,6.25],[2.9,6.72],[1.65,6.96],[-.1,6.96],[-1.45,6.66],[-2.6,6.82],[-3.25,6.3]]},
    {id:'shuzheng-middle',y:.08,depth:.16,lip:.055,color:'aqua',points:[[-2.2,7.55],[-1.2,7.2],[.1,7.2],[1.6,7.19],[2.8,7.12],[3.8,7.3],[4.65,7.8],[4.4,8.35],[3.3,8.55],[1.6,8.59],[.2,8.33],[-1.4,8.4],[-2.35,8.08]]},
    {id:'shuzheng-lower',y:-.08,depth:.12,lip:.055,color:'blue',points:[[-.9,8.85],[.5,8.74],[2.4,8.8],[4.1,8.75],[5.1,9.0],[5.2,9.5],[3.75,10.15],[1.9,10.35],[.5,10.0],[-.9,9.6],[-1.8,9.15]]},
  ];
  return raw.map(b=>{const poly=organic(b.points,b.id==='wuhua'?144:96);return {...b,poly,area:Math.abs(polygonArea(poly)),bounds:{x0:Math.min(...poly.map(p=>p[0])),x1:Math.max(...poly.map(p=>p[0])),z0:Math.min(...poly.map(p=>p[1])),z1:Math.max(...poly.map(p=>p[1]))}};});
}

// The main spine has changing height and width, with branching ridges. Summing
// narrow peaks would make cones; distance to these connected lines makes folds.
const ridges=[
  {width:2.65,points:[[-12.0,-5.4,2.2],[-10.7,-7.8,4.4],[-9.15,-9.25,6.0],[-6.9,-10.2,3.6],[-4.0,-10.4,5.35],[-1.6,-9.9,5.6],[.7,-9.5,3.5],[3.2,-10.1,3.7],[6.0,-9.6,2.6],[8.7,-8.65,3.9],[11.45,-6.9,2.15]]},
  {width:1.55,points:[[-11.5,-7.2,3.3],[-10.5,-4.5,3.15],[-10.65,-1.75,1.45],[-11.4,.5,.55]]},
  {width:1.7,points:[[-3.6,-9.1,4.5],[-3.3,-6.7,3.35],[-2.45,-4.4,2.6],[-1.6,-2.15,1.05]]},
  {width:1.2,points:[[10.6,-6.8,2.3],[11.5,-4.8,1.7],[12.2,-2.9,.9],[11.8,-.5,.35]]},
];
function ridgeHeight(x,z,ridge) {
  let best=Infinity,height=0;
  for(let i=0;i<ridge.points.length-1;i++){const a=ridge.points[i],b=ridge.points[i+1],d=segmentDistance(x,z,a,b);if(d.d<best){best=d.d;height=mix(a[2],b[2],d.t);}}
  const folds=1+.12*Math.sin(x*2.5+z*1.8)+.065*Math.sin(x*4.1-z*2.2);
  return height*Math.exp(-Math.pow(best/(ridge.width*folds),1.23));
}
function rawHeight(x,z) {
  let h=.16+(10.2-z)*.133;
  h+=.47*Math.exp(-((x+7.2)**2/17+(z-2.8)**2/17));
  h+=1.15*Math.exp(-((x-6.2)**2/36+(z+3.1)**2/36));
  const rv=ridges.map(r=>ridgeHeight(x,z,r)).sort((a,b)=>b-a);
  // The authored folded massifs supply the alpine silhouette. The underlying
  // meadow remains a gentle support so lake shores do not become tall podiums.
  h+=rv[0]*.22+rv[1]*.045;
  h+=.16*noise(x*.58,z*.58)+.09*noise(x*1.7,z*1.7);
  // At the front the paper becomes almost level with the last ribbons of water.
  h-=.35*smooth(5,10.8,z); return h;
}
const foldSamples=new Map();
function foldedHeight(x,z) {
  const angle=.31,co=Math.cos(angle),si=Math.sin(angle),u=(x*co+z*si)/1.08,v=(-x*si+z*co)/1.08,ix=Math.floor(u),iz=Math.floor(v),fx=u-ix,fz=v-iz;
  function sample(a,b){const key=`${a},${b}`;if(!foldSamples.has(key)){const xx=(a*co-b*si)*1.08,zz=(a*si+b*co)*1.08;foldSamples.set(key,rawHeight(xx,zz));}return foldSamples.get(key);}
  const a=sample(ix,iz),b=sample(ix+1,iz),c=sample(ix+1,iz+1),d=sample(ix,iz+1);
  let folded;
  if((ix+iz)%2===0)folded=fx>fz?a+(b-a)*fx+(c-b)*fz:a+(c-d)*fx+(d-a)*fz;
  else folded=fx+fz<1?a+(b-a)*fx+(d-a)*fz:c+(d-c)*(1-fx)+(b-c)*(1-fz);
  const natural=rawHeight(x,z);return mix(natural,folded,smooth(2.5,4.6,natural));
}
function islandPhi(x,z) {
  const a=Math.atan2(z/11.3,x/14.15);
  const radius=1+.021*Math.sin(a*5+.7)+.012*Math.sin(a*9-1.4)+.007*Math.sin(a*17);
  return Math.hypot(x/14.15,z/11.3)-radius;
}

function makeGroundFunction(basins, hydraulicFalls) {
  return (x,z)=>{
    let h=foldedHeight(x,z),nearest=null,nearestD=-Infinity;
    for(const b of basins) {
      const q=b.bounds,pad=2.1;
      if(x<q.x0-pad||x>q.x1+pad||z<q.z0-pad||z>q.z1+pad)continue;
      const d=signedDistance(x,z,b.poly);
      if(d>nearestD){nearest=b;nearestD=d;}
    }
    // The shelf is constrained to the water elevation before the basin deepens.
    // In particular a low original slope must never leave a lake hanging above it.
    if(nearest){
      if(nearestD>=0)h=nearest.y-.012-nearest.depth*smooth(.16,1.35,nearestD);
      else if(nearestD>-1.85){const d=-nearestD,shore=nearest.y+.016+d*.105;h=mix(h,shore,1-smooth(.16,1.85,d));}
    }
    // Excavate against the very same thin-water profile used by the veil and
    // its moving streaks. A separately approximated cliff can pierce the flow.
    for(const f of hydraulicFalls){
      const lateral=Math.abs(x-f.x),half=f.width*.5+.08;
      if(lateral>half+.20)continue;
      const profile=fallExcavationHeight(f,x,z);
      const weight=1-smooth(half,half+.20,lateral);
      h=mix(h,Math.min(h,profile),weight);
    }
    return h;
  };
}

function buildTerrain(parent,groundHeight,basins) {
  const positions=[],colors=[],indices=[],cache=new Map(),step=.25;
  const forestSpots=[[-10,-4,3],[-4,-5,3],[.4,-7,2.6],[11,-2,2.4],[9,5,2.6],[-8,3,3],[-4,1,2.3]];
  function vertex(x,z) {
    const key=`${x.toFixed(5)},${z.toFixed(5)}`;if(cache.has(key))return cache.get(key);
    const y=groundHeight(x,z),eps=.06;
    const sx=(groundHeight(x+eps,z)-groundHeight(x-eps,z))/(2*eps),sz=(groundHeight(x,z+eps)-groundHeight(x,z-eps))/(2*eps);
    const slope=Math.hypot(sx,sz),n=noise(x*.9,z*.9);
    let c=palette.land.clone().lerp(palette.moss,.28+.16*n);
    let forest=0;for(const [fx,fz,r]of forestSpots)forest=Math.max(forest,Math.exp(-((x-fx)**2+(z-fz)**2)/(r*r)));
    c.lerp(palette.sageLight,forest*.22);
    c.lerp(new THREE.Color('#95a67e'),smooth(.7,2.4,slope)*.35);
    c.lerp(new THREE.Color('#b8bd94'),smooth(2.7,5.8,y)*.25);
    // Travertine at a waterfall is warm chalk rather than a vertical lawn.
    // Keeping these small exposed shoulders pale also separates the falling
    // cool water from the sage slopes around it.
    for(const fall of FALLS){
      const dx=Math.abs(x-fall.x),q=z-fall.z;
      if(dx<fall.width*.5+.85&&q>-.20&&q<fall.depth+1.2){
        const edge=1-smooth(fall.width*.5+.25,fall.width*.5+.85,dx);
        c.lerp(new THREE.Color('#ead7bb'),edge*smooth(.45,1.6,slope)*.74);
      }
    }
    c.multiplyScalar(.975+.05*hash(Math.floor(x*10),Math.floor(z*10)));
    const idx=positions.length/3;positions.push(x,y,z);colors.push(c.r,c.g,c.b);cache.set(key,idx);return idx;
  }
  function clippedTriangle(tri) {
    const out=[];
    for(let i=0;i<3;i++){
      const a=tri[i],b=tri[(i+1)%3],fa=islandPhi(...a),fb=islandPhi(...b);
      if(fa<=0)out.push(a);
      if((fa<0)!==(fb<0)){let lo=0,hi=1;for(let k=0;k<14;k++){const t=(lo+hi)/2,f=islandPhi(mix(a[0],b[0],t),mix(a[1],b[1],t));if((f<0)===(fa<0))lo=t;else hi=t;}const t=(lo+hi)/2;out.push([mix(a[0],b[0],t),mix(a[1],b[1],t)]);}
    }
    if(out.length<3)return;
    const ids=out.map(p=>vertex(...p));for(let i=1;i<ids.length-1;i++)indices.push(ids[0],ids[i+1],ids[i]);
  }
  for(let z=-11.75;z<11.75;z+=step)for(let x=-14.75;x<14.75;x+=step){
    const a=[x,z],b=[x+step,z],c=[x+step,z+step],d=[x,z+step];
    if((Math.floor(x/step)+Math.floor(z/step))%2){clippedTriangle([a,b,d]);clippedTriangle([b,c,d]);}
    else{clippedTriangle([a,b,c]);clippedTriangle([a,c,d]);}
  }
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));g.setIndex(indices);g.computeVertexNormals();
  // Meadows use continuous normals; authored mountain and paper-cut meshes
  // retain their deliberate hard folds. This avoids a noisy polygon lawn.
  const folded=g.toNonIndexed();g.dispose();
  const m=makeMesh(folded,paperMat,parent,'one-continuous-folded-valley');m.userData.kind='terrain';
  // Five gently offset cut sheets form a warm, scalloped edge. Every layer
  // follows the real terrain boundary, including its uneven thickness.
  const edge=[];for(let i=0;i<360;i++){const a=i/360*TAU;let r=1+.021*Math.sin(a*5+.7)+.012*Math.sin(a*9-1.4)+.007*Math.sin(a*17);edge.push([Math.cos(a)*14.15*r,Math.sin(a)*11.3*r]);}
  const p=[],c=[];
  for(let i=0;i<edge.length;i++){
    const a=edge[i],b=edge[(i+1)%edge.length],ha=groundHeight(...a),hb=groundHeight(...b);
    const offsets=[0,.045,-.018,.033,-.025,-.085];
    const sheetColors=['#efdfb9','#edb6a4','#f8dec0','#e8ae9c','#f2d5b1'];
    for(let k=0;k<5;k++){
      const wave=(j,t)=>Math.sin(j*.13+k*.8)*.035*Math.sin(Math.PI*t);
      const t0=k/5,t1=(k+1)/5;
      const h0a=mix(ha,-1.04,t0)+wave(i,t0),h0b=mix(hb,-1.04,t0)+wave(i+1,t0);
      const h1a=mix(ha,-1.04,t1)+wave(i,t1),h1b=mix(hb,-1.04,t1)+wave(i+1,t1);
      const offset=offsets[k],next=offsets[k+1];
      const aa=[a[0]*(1+offset/14),a[1]*(1+offset/11)],bb=[b[0]*(1+offset/14),b[1]*(1+offset/11)];
      const ab=[a[0]*(1+next/14),a[1]*(1+next/11)],bb1=[b[0]*(1+next/14),b[1]*(1+next/11)];
      const col=new THREE.Color(sheetColors[k]).multiplyScalar(.97+.035*hash(Math.floor(i/3),k));
      addTri(p,c,[aa[0],h0a,aa[1]],[bb[0],h0b,bb[1]],[bb1[0],h1b,bb1[1]],col);
      addTri(p,c,[aa[0],h0a,aa[1]],[bb1[0],h1b,bb1[1]],[ab[0],h1a,ab[1]],col);
    }
  }
  makeMesh(geometryFromTriangles(p,c),paperMat,parent,'five-scalloped-paper-strata');
  return {vertices:folded.attributes.position.count,triangles:indices.length/3};
}

function waterColor(b,x,z,distance) {
  const n=noise(x*1.75,z*1.75),patch=noise(x*.68+9,z*.68-8);
  let color=palette[b.color].clone();
  const deep=smooth(.10,1.45,distance)*(.48+.25*patch);
  color.lerp(palette.deep,deep*.56);
  color.lerp(palette.aqua,(1-smooth(.05,.55,distance))*.7);
  if(b.id==='wuhua'){
    const turquoise=smooth(-.2,.75,noise(x*.9,z*.9)+.27*Math.sin(x*2.1+z*.8));
    color.lerp(new THREE.Color('#43afa9'),turquoise*.30);
    color.lerp(new THREE.Color('#8cbf9d'),smooth(.25,.8,patch)*.28);
  }
  return color.multiplyScalar(.985+n*.032);
}
function buildLake(b,parent,groundHeight) {
  const verts=b.poly.map(p=>new THREE.Vector2(...p)),triangles=THREE.ShapeUtils.triangulateShape(verts,[]);
  const p=[],colors=[];
  function tri(a,d,c,iteration=0) {
    const edges=[Math.hypot(a[0]-d[0],a[1]-d[1]),Math.hypot(d[0]-c[0],d[1]-c[1]),Math.hypot(c[0]-a[0],c[1]-a[1])],max=Math.max(...edges);
    if(max>.38&&iteration<14){const e=edges.indexOf(max);if(e===0){const m=[(a[0]+d[0])/2,(a[1]+d[1])/2];tri(a,m,c,iteration+1);tri(m,d,c,iteration+1);}else if(e===1){const m=[(d[0]+c[0])/2,(d[1]+c[1])/2];tri(a,d,m,iteration+1);tri(a,m,c,iteration+1);}else{const m=[(c[0]+a[0])/2,(c[1]+a[1])/2];tri(a,d,m,iteration+1);tri(m,d,c,iteration+1);}return;}
    for(const [x,z]of[a,c,d]){p.push(x,b.y,z);const color=waterColor(b,x,z,Math.max(0,signedDistance(x,z,b.poly)));colors.push(color.r,color.g,color.b);}
  }
  for(const ids of triangles)tri(...ids.map(i=>b.poly[i]));
  const stopId=b.id.startsWith('shuzheng')?'shuzheng':b.id==='nuorilang-head'?'nuorilang':b.id;
  const lake=makeMesh(geometryFromTriangles(p,colors),waterMat.clone(),parent,`water-${b.id}`);lake.castShadow=false;lake.userData={water:true,stopId,basin:b.id,area:b.area};
  const rimPos=[],rimCol=[],sign=Math.sign(polygonArea(b.poly));
  for(let i=0;i<b.poly.length;i++){
    const a=b.poly[i],b1=b.poly[(i+1)%b.poly.length],len=Math.hypot(b1[0]-a[0],b1[1]-a[1]),nx=sign*(b1[1]-a[1])/len,nz=-sign*(b1[0]-a[0])/len;
    const w=b.lip*(.8+.4*hash(i,b.y)),aa=[a[0]+nx*w,b.y+.027,a[1]+nz*w],bb=[b1[0]+nx*w,b.y+.027,b1[1]+nz*w],ai=[a[0],b.y+.018,a[1]],bi=[b1[0],b.y+.018,b1[1]];
    const col=palette.paper.clone().lerp(palette.moss,.18+.08*hash(i,3));addTri(rimPos,rimCol,aa,bb,bi,col);addTri(rimPos,rimCol,aa,bi,ai,col);
    addTri(rimPos,rimCol,ai,bi,[bi[0],b.y-.045,bi[2]],palette.cut);addTri(rimPos,rimCol,ai,[bi[0],b.y-.045,bi[2]],[ai[0],b.y-.045,ai[2]],palette.cut);
  }
  return {lake,rim:geometryFromTriangles(rimPos,rimCol)};
}

// Every waterfall is a curtain of folded, curved strips, with a true vertical
// interval and a second piece of water visible at its foot.
function buildFalls(parent,{name,x,z,width,top,bottom,depth=.9,seed=1,curve=.08}) {
  const rand=random(seed),p=[],c=[];
  const count=Math.round(width/.115),steps=11;
  for(let i=0;i<count;i++){
    const u=(i+.5)/count-.5,cx=x+u*width,w=width/count*(.79+rand()*.17),phase=rand()*TAU;
    for(let k=0;k<steps;k++)for(let side=0;side<2;side++){
      const q=[];
      for(const [j,s]of[[k,side],[k+1,side],[k+1,side+1],[k,side+1]]){
        const t=j/steps,offset=(s/2-.5)*w;
        const xx=cx+offset+.027*Math.sin(t*4+phase)*Math.sin(t*Math.PI);
        const yy=mix(top+.018,bottom+.035,smooth(0,1,t))+.018*Math.cos((s/2-.5)*Math.PI)*Math.sin(t*Math.PI);
        const zz=z+curve*Math.sin(cx*1.7)+depth*(.18*t+.82*t*t)+.028*Math.sin(s/2*Math.PI)*Math.sin(t*Math.PI);
        q.push([xx,yy,zz]);
      }
      const t=(k+.5)/steps,col=palette.paper.clone().lerp(palette.aqua,Math.pow(Math.abs(t-.5)*2,3)*.37).multiplyScalar(.94+rand()*.08);
      addTri(p,c,q[0],q[1],q[2],col);addTri(p,c,q[0],q[2],q[3],col);
    }
  }
  const curtainMaterial=paperMat.clone();curtainMaterial.name='folded-waterfall-v2';
  const mesh=makeMesh(geometryFromTriangles(p,c),curtainMaterial,parent,`waterfall-${name}`);mesh.userData={water:true,falls:true,stopId:name.startsWith('shuzheng')?'shuzheng':name};
  const base=Float32Array.from(mesh.geometry.attributes.position.array);
  return {mesh,base,seed};
}

// A fan is made of alternating mountain/valley folds, scalloped at its edge.
// It has a warm thin cut edge and a few branches visible behind the crown.
const fanCache=new Map();
function fanGeometry(variant) {
  if(fanCache.has(variant))return fanCache.get(variant);
  const p=[],c=[],rand=random(variant+73),n=16,edge=[];
  for(let i=0;i<=n;i++){const a=-.97+i/n*1.94,r=.83+.08*Math.sin(i*.9)+rand()*.025;edge.push([Math.sin(a)*r,.18+Math.cos(a)*r,(i%2?-.025:.042)]);}
  const pivot=[0,0,0],back=[0,0,-.012];
  for(let i=0;i<n;i++){
    const a=edge[i],b=edge[i+1],shade=new THREE.Color(i%2?'#fff6e6':'#e0ceb5');
    addTri(p,c,pivot,b,a,shade);addTri(p,c,back,[a[0],a[1],a[2]-.012],[b[0],b[1],b[2]-.012],shade.clone().multiplyScalar(.95));
    addTri(p,c,a,b,[b[0],b[1],b[2]-.012],new THREE.Color('#c1a58b'));addTri(p,c,a,[b[0],b[1],b[2]-.012],[a[0],a[1],a[2]-.012],new THREE.Color('#c1a58b'));
  }
  const g=geometryFromTriangles(p,c);fanCache.set(variant,g);return g;
}
function makeAutumnTree(height,color,seed) {
  const group=new THREE.Group(),rand=random(seed),baseColor=new THREE.Color(color);
  branch(group,[0,0,0],[.025,.68,0],.025,C.woodDark);
  const fans=[[-.24,.43,.025,.42,-.38],[.22,.49,-.01,.43,.53],[-.04,.62,-.16,.43,1.2],[.02,.60,.13,.47,-.8]];
  for(let i=0;i<fans.length;i++){
    const [x,y,z,size,rot]=fans[i];branch(group,[.01,.29,0],[x,y+.08,z],.012,C.woodDark);
    const g=fanGeometry((seed+i)%7),m=makeMesh(g,colored(baseColor.clone().lerp(palette.paper,i*.035)),group);
    m.position.set(x,y,z);m.scale.setScalar(size*(.95+rand()*.1));m.rotation.y=rot;m.rotation.z=(rand()-.5)*.2;
    m.material=m.material.clone();m.material.vertexColors=true;
  }
  group.scale.setScalar(height);group.rotation.y=rand()*TAU;group.userData.kind='autumn-tree';return group;
}

function makeTour(groundHeight,basins) {
  const points=[[-8.0,6.4],[-6.4,7.2],[-4.4,6.8],[-4.5,4.7],[-4.25,2.8],[-2.0,2.35],[.8,2.25],[3.4,1.35],[3.0,3.25],[4.0,4.8],[6.7,5.15],[9.2,4.5],[10.0,2.7],[10.8,.0],[11.4,-2.5],[11.1,-4.8],[9.8,-6.85],[8.2,-7.78],[6.1,-7.50],[4.2,-7.78],[2.2,-6.8],[.5,-4.95],[.5,-2.25],[-2.6,-.4],[-5.2,.1],[-6.4,1.1],[-8.7,1.25],[-9.55,-1.3],[-9.15,-2.65],[-8.9,-3.6],[-8.85,-4.65],[-8.7,-5.6]];
  const c=new THREE.CatmullRomCurve3(points.map(([x,z])=>new THREE.Vector3(x,0,z)),false,'centripetal');
  const dense=c.getSpacedPoints(960).map(v=>{
    const water=nearestWater(v.x,v.z,basins),bank=groundHeight(v.x,v.z)+.085;
    // The single crossing of Mirror Lake's narrow outlet is a real footbridge.
    const y=water.d>-.06?Math.max(bank,water.body.y+.135):bank;
    return new THREE.Vector3(v.x,y,v.z);
  });
  // A wooden walkway follows the real ground; short grades become stairs.
  return {route:dense,plan:points};
}
function routeDistance(x,z,route) {
  let d=Infinity;
  for(let i=0;i<route.length;i+=5){const p=route[i];d=Math.min(d,Math.hypot(x-p.x,z-p.z));}return d;
}
function buildBoardwalk(parent,route,groundHeight) {
  const g=new THREE.Group(),railL=[],railR=[];parent.add(g);g.name='one-continuous-shore-walk';
  const step=2;
  for(let i=0;i<route.length-1;i+=step){
    const a=route[i],b=route[Math.min(i+step,route.length-1)],dir=b.clone().sub(a),length=Math.hypot(dir.x,dir.z),mid=a.clone().add(b).multiplyScalar(.5),angle=Math.atan2(dir.x,dir.z),nx=Math.cos(angle),nz=-Math.sin(angle),width=i<250?.41:.30;
    // Deck boards have tiny true gaps, capped at a sensible stair riser.
    box(g,[width,.037,length*.94],[mid.x,Math.max(a.y,b.y),mid.z],i%6===0?'#cfb58a':C.wood,angle);
    const needsRail=i<220||(i>300&&i<410)||(i>660&&i<810);
    if(needsRail&&i%6===0){
      for(const side of[-1,1]){
        const x=mid.x+nx*width*.46*side,z=mid.z+nz*width*.46*side,base=groundHeight(x,z),postTop=mid.y+.29;
        box(g,[.024,postTop-base+.06,.024],[x,(postTop+base-.06)/2,z],C.woodDark);
      }
    }
    railL.push(new THREE.Vector3(mid.x+nx*width*.46,mid.y+.25,mid.z+nz*width*.46));
    railR.push(new THREE.Vector3(mid.x-nx*width*.46,mid.y+.25,mid.z-nz*width*.46));
    if(i%8===0)for(const side of[-1,1]){
      const x=mid.x+nx*width*.35*side,z=mid.z+nz*width*.35*side,h=groundHeight(x,z);if(mid.y-h>.045)branch(g,[x,h-.04,z],[x,mid.y-.025,z],.022,C.woodDark);
    }
  }
  for(const [a,b]of[[0,109],[151,205],[331,405]])for(const points of[railL,railR]){
    const subset=points.slice(a,b+1);if(subset.length<2)continue;
    const curve=new THREE.CatmullRomCurve3(subset);makeMesh(new THREE.TubeGeometry(curve,subset.length*2,.014,4,false),colored(C.wood),g);
  }
  return g;
}

function nearestWater(x,z,basins) {
  let d=-Infinity,body=null;
  for(const b of basins){const q=b.bounds;if(x<q.x0-1.5||x>q.x1+1.5||z<q.z0-1.5||z>q.z1+1.5)continue;const s=signedDistance(x,z,b.poly);if(s>d){d=s;body=b;}}
  return {d,body};
}
function buildVillage(parent,groundHeight) {
  const homes=[[-8.25,5.5,1.05,-.16],[-6.55,5.85,.82,.10],[-7.65,3.7,.82,-.2],[-9.65,4.15,.67,.12]];
  const footprints=[];
  for(let i=0;i<homes.length;i++){
    const [x,z,s,r]=homes[i],y=groundHeight(x,z),h=createTibetanHouse({scale:s,seed:20+i});h.position.set(x,y+.035,z);h.rotation.y=r;parent.add(h);footprints.push({x,z,radius:s*.87});
    // Low courtyard paving, two uneven steps and a small roof stack.
    for(let k=0;k<3;k++)box(parent,[s*.7,.045,s*.19],[x,y+.02-k*.032,z+s*.48+k*.15],k%2?C.cut:C.chalk,r);
    const flag=createPrayerFlags({length:s*1.4});flag.position.set(x-.68*s,y,z-.6*s);flag.scale.setScalar(.7);parent.add(flag);
    for(let k=0;k<4;k++)box(parent,[.12,.065,.15],[x+s*.27+(k%2)*.11,y+s*1.09+Math.floor(k/2)*.065,z-.15],C.woodDark,r);
  }
  return footprints;
}

function buildForest(parent,groundHeight,basins,route,homes) {
  const rand=random(917326),clusters=[[-11,-4,2.3],[-9.5,-.1,1.6],[-4.2,-5.3,2],[-1.1,-6.6,2.3],[.2,-2.2,1.9],[3.3,-8,1.6],[10.8,-4.2,2],[10.7,.6,1.8],[10.5,4.4,2],[-6.6,2,2.3],[-10,6.1,2],[-3.8,4.5,1.7],[4.5,5.8,1.4],[6.8,6.2,1.6],[-8.1,7.8,1.7],[-4.8,8.2,1.6],[-2.7,8.8,.8],[6.4,8.1,1.5],[8.7,7.1,1.6],[-2.5,.5,1.4]];
  let trees=0,attempts=0;const used=[];
  while(trees<380&&attempts++<18000){
    const cl=clusters[Math.floor(rand()*clusters.length)],a=rand()*TAU,r=Math.sqrt(rand())*cl[2],x=cl[0]+Math.cos(a)*r,z=cl[1]+Math.sin(a)*r;
    if(islandPhi(x,z)>-.055||z>9.5)continue;
    const y=groundHeight(x,z),water=nearestWater(x,z,basins);
    if(water.d>-.21||y>6.5||routeDistance(x,z,route)<.30||homes.some(h=>Math.hypot(x-h.x,z-h.z)<h.radius))continue;
    if((x>5.2&&x<9.4&&z>-.1&&z<2.2)||(x>-3.4&&x<2.6&&z>4.3&&z<5.7))continue;
    const slope=Math.hypot(groundHeight(x+.12,z)-groundHeight(x-.12,z),groundHeight(x,z+.12)-groundHeight(x,z-.12))/.24;
    if(slope>2.3||used.some(t=>Math.hypot(t[0]-x,t[1]-z)<.31))continue;
    const fir=rand()<(z<-2?.84:.51),height=(.7+rand()*.9)*(fir?1.14:1.02)*(y>5.2?.73:1);
    const color=fir?[C.sage,C.sageLight,C.pine][Math.floor(rand()*3)]:[C.coral,C.peach,C.honey,C.gold][Math.floor(rand()*4)];
    const tree=fir?createFir({height,color,seed:trees+75}):makeAutumnTree(height,color,trees+92);
    tree.position.set(x,y-.025,z);if(fir)tree.scale.x*=1.1;parent.add(tree);used.push([x,z]);trees++;
    // A few slender roots visibly meet the soil, instead of hovering over it.
    if(trees%3===0)for(let k=0;k<3;k++){const t=k/3*TAU+rand(),rr=.10+rand()*.10,xx=x+Math.cos(t)*rr,zz=z+Math.sin(t)*rr;branch(parent,[x,y+.06,z],[xx,groundHeight(xx,zz)+.012,zz],.014,C.woodDark);}
  }
  return {trees,locations:used};
}

function buildGroundLife(parent,groundHeight,basins,route,homes,treeLocations,hydraulicFalls) {
  const inFallingWater=(x,z)=>hydraulicFalls.some(f=>Math.abs(x-f.x)<f.width*.5+.24&&Number.isFinite(fallExcavationHeight(f,x,z)));
  const rand=random(47019),p=[],c=[],rockGeo=new THREE.IcosahedronGeometry(1,0);let shrubs=0,stones=0;
  for(let i=0;i<1400;i++){
    const tree=treeLocations[Math.floor(rand()*treeLocations.length)],a=rand()*TAU,r=.16+rand()*.54,x=tree[0]+Math.cos(a)*r,z=tree[1]+Math.sin(a)*r;
    if(islandPhi(x,z)>-.035||nearestWater(x,z,basins).d>-.12||inFallingWater(x,z)||routeDistance(x,z,route)<.23||homes.some(h=>Math.hypot(x-h.x,z-h.z)<h.radius))continue;
    const y=groundHeight(x,z);if(y>6.2)continue;
    const col=[palette.moss,palette.sageLight,palette.honey,palette.peach][Math.floor(rand()*4)].clone();
    const size=.06+rand()*.12;
    for(let k=0;k<3;k++){
      const theta=a+k*1.1,dx=Math.cos(theta)*size,dz=Math.sin(theta)*size,h=size*(.65+rand()*.7),base=[x,y+.012,z],l=[x+dx,y+.035,z+dz],top=[x+dx*.35,y+h,z+dz*.35],rr=[x-dz*.25,y+.025,z+dx*.25];
      addTri(p,c,base,l,top,col);addTri(p,c,base,top,rr,col.clone().multiplyScalar(.9));
    }shrubs++;
    if(i%13===0){const rock=makeMesh(rockGeo,colored(i%2?C.cut:C.chalk),parent);rock.position.set(x,y+.035,z);rock.scale.set(.11+rand()*.15,.055+rand()*.11,.09+rand()*.15);rock.rotation.set(rand(),rand(),rand());stones++;}
  }
  // Short blades appear on the sunny outer slopes as well as under the canopy.
  for(let i=0;i<1200;i++){
    const x=(rand()-.5)*27,z=(rand()-.5)*21;if(islandPhi(x,z)>-.08||nearestWater(x,z,basins).d>-.15||inFallingWater(x,z)||routeDistance(x,z,route)<.23)continue;
    const y=groundHeight(x,z);if(y>5.3)continue;const h=.035+rand()*.065,w=.014,a=rand()*TAU,dx=Math.cos(a)*w,dz=Math.sin(a)*w,col=palette.sageLight.clone().multiplyScalar(.9+rand()*.2);
    addTri(p,c,[x-dx,y+.008,z-dz],[x+dx,y+.008,z+dz],[x+.025,y+h,z+.01],col);
  }
  makeMesh(geometryFromTriangles(p,c),paperMat,parent,'small-paper-undergrowth');return {shrubs,stones};
}

function addWaterDetails(parent,basins,groundHeight) {
  // Mineral-coloured branches just below the surface are part of the drawing,
  // never bold black sticks or rings that compete with the lake silhouette.
  const trunks=[[[3.8,-3.8],[6.7,-3.0]],[[6.4,-5.9],[7.9,-3.8]],[[7.8,-1.5],[9.4,-2.6]],[[3.4,-5.2],[5.9,-5.8]]];
  for(let n=0;n<trunks.length;n++){
    const [a,b]=trunks[n],y=3.345,col=n%2?'#6ba99f':'#79b7a6';branch(parent,[a[0],y,a[1]],[b[0],y,b[1]],.024,col);
    for(let k=1;k<5;k++){
      const t=k/5,x=mix(a[0],b[0],t),z=mix(a[1],b[1],t),dir=k%2?1:-1,len=.25+hash(n,k)*.4;
      branch(parent,[x,y+.001,z],[x-.12,y+.006,z+dir*len],.012,col);
      if(k%2)branch(parent,[x-.07,y+.006,z+dir*len*.65],[x-.28,y+.006,z+dir*len*.85],.008,col);
    }
  }
  const p=[],c=[];
  for(const b of basins){
    const rand=random(b.poly.length+Math.round(b.y*500)+1000);
    for(let i=0;i<(b.id==='wuhua'?40:12);i++){
      const x=mix(b.bounds.x0,b.bounds.x1,rand()),z=mix(b.bounds.z0,b.bounds.z1,rand());if(signedDistance(x,z,b.poly)<.2)continue;
      const length=.07+rand()*.23,width=.008,yy=b.y+.021,col=palette.paper.clone().lerp(palette.aqua,.48);
      addTri(p,c,[x-length/2,yy,z],[x+length/2,yy,z+.018],[x+length/2,yy,z+.018+width],col);addTri(p,c,[x-length/2,yy,z],[x+length/2,yy,z+.018+width],[x-length/2,yy,z+width],col);
    }
  }
  // Tiny curved foam threads at the foot of the two falls.
  for(const [x,z,y,w,seed]of[[7.45,1.54,1.8,3.3,11],[-.35,5.23,.285,5.05,12],[1.0,7.18,.105,2.1,13],[2.25,8.77,-.055,2.4,14]]){
    const rand=random(seed);
    for(let k=0;k<36;k++){
      const xx=x+(rand()-.5)*w,zz=z+rand()*.25,ww=.035+rand()*.12;
      const col=palette.paper.clone().lerp(palette.aqua,rand()*.28);
      addTri(p,c,[xx-ww,y,zz],[xx+ww,y,zz+.015],[xx+ww*.65,y,zz+.035],col);
    }
  }
  makeMesh(geometryFromTriangles(p,c),paperMat,parent,'water-light-and-foam').castShadow=false;
}

// Preserve the deliberately different material colours by baking them into
// attributes, then consolidate each sculpture family into one draw call.
function consolidate(source,name) {
  source.updateMatrixWorld(true);const geometries=[];
  source.traverse(item=>{
    if(!item.isMesh)return;
    const original=item.geometry,base=original.index?original.toNonIndexed():original.clone(),positions=base.attributes.position,normals=base.attributes.normal,colors=base.attributes.color;
    const groups=Array.isArray(item.material)?base.groups:[{start:0,count:positions.count,materialIndex:0}];
    for(const group of groups){
      const material=Array.isArray(item.material)?item.material[group.materialIndex]:item.material;if(!material)continue;
      const start=group.start,end=Math.min(start+group.count,positions.count),g=new THREE.BufferGeometry(),p=[],n=[],c=[],wind=[];
      let ancestor=item.parent,isFir=false;
      while(ancestor&&ancestor!==source){if(ancestor.userData.propKind==='fir')isFir=true;ancestor=ancestor.parent;}
      const fan=[...fanCache.values()].includes(original),leaf=fan||(isFir&&Array.isArray(item.material));
      for(let i=start;i<end;i++){
        p.push(positions.getX(i),positions.getY(i),positions.getZ(i));if(normals)n.push(normals.getX(i),normals.getY(i),normals.getZ(i));
        const tint=material.color||new THREE.Color('#fff');c.push(tint.r*(colors?colors.getX(i):1),tint.g*(colors?colors.getY(i):1),tint.b*(colors?colors.getZ(i):1));
        wind.push(leaf?Math.pow(clamp(positions.getY(i),0,1),1.35)*(fan?.8:1):0);
      }
      g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('color',new THREE.Float32BufferAttribute(c,3));g.setAttribute('windWeight',new THREE.Float32BufferAttribute(wind,1));if(n.length)g.setAttribute('normal',new THREE.Float32BufferAttribute(n,3));else g.computeVertexNormals();g.applyMatrix4(item.matrixWorld);geometries.push(g);
    }
    base.dispose();
  });
  const geometry=mergeGeometries(geometries,false);geometries.forEach(g=>g.dispose());
  const result=makeMesh(geometry,paperMat,null,name);result.userData.staticSculpture=true;return result;
}

export function buildLandscapeV2() {
  const group=new THREE.Group();group.name='jiuzhai-paper-colour-miniature';
  const basins=makeBasins(),hydraulicFalls=FALLS.map(f=>prepareFallProfile(f,basins));
  const baseGround=makeGroundFunction(basins,hydraulicFalls),terrain=new THREE.Group();
  const terrainStats=buildTerrain(terrain,baseGround,basins);group.add(terrain);
  const mountains=buildMountainSculptureV4({groundHeight:baseGround});group.add(mountains.group);
  const groundHeight=(x,z)=>Math.max(baseGround(x,z),mountains.surfaceHeight(x,z));
  const waters=new THREE.Group(),shores=new THREE.Group(),waterMeshes=[];group.add(waters);
  for(const b of basins){const {lake,rim}=buildLakeV4(b,waters,groundHeight);waterMeshes.push(lake);makeMesh(rim,paperMat,shores);}
  group.add(consolidate(shores,'layered-mineral-shores-and-submerged-timber'));
  const falls=hydraulicFalls.map(f=>buildFallsV4(group,f));
  waterMeshes.push(...falls.map(f=>f.mesh));
  const {route,plan}=makeTour(groundHeight,basins),architecture=new THREE.Group();
  const homes=buildVillage(architecture,groundHeight);buildBoardwalk(architecture,route,groundHeight);
  // A short lower-shore footbridge makes the foreground a close miniature:
  // handrails, tiny piers, and water beneath, with no route UI or tour order.
  const frontCurve=new THREE.CatmullRomCurve3([[-5.8,7.6],[-4.15,7.9],[-3.0,8.6],[-1.5,9.65],[.3,10.4],[2.6,10.75],[4.5,10.35]].map(([x,z])=>new THREE.Vector3(x,0,z)));
  const frontWalk=frontCurve.getSpacedPoints(260).map(p=>{const water=nearestWater(p.x,p.z,basins);p.y=Math.max(groundHeight(p.x,p.z)+.09,water.d>-.1?water.body.y+.15:-Infinity);return p;});
  buildBoardwalk(architecture,frontWalk,groundHeight);
  group.add(consolidate(architecture,'village-and-shore-boardwalks'));
  const forestStats=buildForestV4({groundHeight,basins,route:[...route,...frontWalk],homes,islandPhi});group.add(forestStats.group);
  const forest=new THREE.Group(),lifeStats=buildGroundLife(forest,groundHeight,basins,[...route,...frontWalk],homes,forestStats.locations,hydraulicFalls);
  const foliage=consolidate(forest,'paper-meadow-and-understory');foliage.userData.kind='foliage';foliage.material=paperMat.clone();group.add(foliage);
  const anchors={changhai:new THREE.Vector3(-6.75,3.97,-6.0),wucai:new THREE.Vector3(-7.3,2.37,-.7),wuhua:new THREE.Vector3(6.1,3.43,-3.5),pearl:new THREE.Vector3(7.45,2.65,1.0),mirror:new THREE.Vector3(6.25,1.80,3.1),nuorilang:new THREE.Vector3(-.35,1.07,4.98),shuzheng:new THREE.Vector3(1.2,.22,7.8)};
  const stopProgress={};
  for(const [id,a]of Object.entries(anchors)){let best=Infinity,index=0;for(let i=0;i<route.length;i++){const p=route[i],d=Math.hypot(p.x-a.x,p.z-a.z);if(d<best){best=d;index=i;}}stopProgress[id]=index/(route.length-1);}
  stopProgress.shuzheng=.035;
  const interactionZones=[...Object.entries(anchors).map(([id,center])=>({id,kind:id==='pearl'||id==='nuorilang'?'falls':'water',center:center.clone(),radius:id==='wuhua'?4.2:id==='changhai'?2.2:1.6})),{id:'autumn-woods',kind:'forest',center:new THREE.Vector3(10.1,groundHeight(10.1,4.6)+.8,4.6),radius:2.1},{id:'village-grove',kind:'forest',center:new THREE.Vector3(-8.5,groundHeight(-8.5,2.2)+.8,2.2),radius:2.2}];
  // Paper pigments are bounded reflectance. Keep bright cut edges within
  // linear [0,1] so the same colours survive the portable GLB export.
  group.traverse(m=>{const c=m.geometry?.attributes.color;if(c)for(let i=0;i<c.array.length;i++)c.array[i]=clamp(c.array[i],0,1);});
  let triangles=0,meshCount=0;group.traverse(m=>{if(m.isMesh){triangles+=(m.geometry.index?m.geometry.index.count:m.geometry.attributes.position.count)/3;meshCount++;}});
  const metadata={title:'九寨 · 水行记',version:'4-water-light',baseRevision:4,trees:forestStats.trees,forest:forestStats.metadata,mountains:mountains.metadata,shrubs:lifeStats.shrubs,stones:lifeStats.stones,triangles,meshCount,terrain:terrainStats,basinAreas:Object.fromEntries(basins.map(b=>[b.id,+b.area.toFixed(2)])),routePlan:plan,hero:{direction:[7,27,37],target:[0,2.8,-.15],fov:38},bounds:{width:28.5,depth:23,height:10.8},design:'Revision 4 dense paper groves, authored mountain ridges and free orbit, with retained thin waterfalls, open-sky lighting and surface-bound water interactions.'};
  return {group,anchors,route,stopProgress,waterMeshes,interactionZones,groundHeight,metadata,clouds:mountains.clouds,update(){}};
}
