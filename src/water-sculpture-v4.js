import * as THREE from 'three';

// JIUZHAI · WATER SCULPTURE
// Mineral colour is carried by actual, nested paper shore shelves. Waterfalls
// are overlapping broad, irregular folds with a rock backing and foam petals.
// Every surface remains real geometry in both the GPU and software renderer.
const TAU = Math.PI * 2;
const { clamp, lerp } = THREE.MathUtils;
const ease = t => { t=clamp(t,0,1); return t*t*(3-2*t); };
const hash = (a,b=0) => { const n=Math.sin(a*127.1+b*311.7)*43758.5453123; return n-Math.floor(n); };
const C = Object.fromEntries(Object.entries({
  ivory:'#fff1d7', cream:'#ead8b8', sand:'#ceb89b', peach:'#d6ad95',
  foam:'#fff8e6', foamShade:'#c5e1cc', mint:'#a5d9c1', paleJade:'#71c8b0',
  jade:'#35b8ae', turquoise:'#20aeb3', blue:'#178ba5', deep:'#16718a',
  fallShade:'#aab9a7', fallMid:'#e0d3b9', fallLight:'#fff5de',
}).map(([name,color])=>[name,new THREE.Color(color)]));
const paper = new THREE.MeshStandardMaterial({color:'#ffffff',vertexColors:true,side:THREE.DoubleSide,roughness:1,metalness:0});
paper.name='hand-cut-water-sculpture-v4';
const lakeMaterial = new THREE.MeshStandardMaterial({color:'#ffffff',vertexColors:true,side:THREE.DoubleSide,roughness:.72,metalness:0});
lakeMaterial.name='mineral-colour-water-v4';
function geometry(pos,col) {
  const g=new THREE.BufferGeometry();
  g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));
  g.setAttribute('color',new THREE.Float32BufferAttribute(col,3));
  g.computeVertexNormals();return g;
}
function tri(p,c,a,b,d,color) { p.push(...a,...b,...d);for(let i=0;i<3;i++)c.push(color.r,color.g,color.b); }
function quad(p,c,a,b,d,e,color) { tri(p,c,a,b,d,color);tri(p,c,a,d,e,color); }
function mesh(parent,g,name,material=paper) {
  const m=new THREE.Mesh(g,material);m.name=name;m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;
}
function signedDistance(x,z,poly) {
  let inside=false,d=Infinity;
  for(let i=0,j=poly.length-1;i<poly.length;j=i++) {
    const a=poly[i],b=poly[j],dx=b[0]-a[0],dz=b[1]-a[1];
    const t=clamp(((x-a[0])*dx+(z-a[1])*dz)/(dx*dx+dz*dz||1),0,1);
    d=Math.min(d,Math.hypot(x-a[0]-dx*t,z-a[1]-dz*t));
    if((a[1]>z)!==(b[1]>z)&&x<(b[0]-a[0])*(z-a[1])/(b[1]-a[1])+a[0])inside=!inside;
  }
  return inside?d:-d;
}
function area(poly) {let a=0;for(let i=0;i<poly.length;i++){const p=poly[i],q=poly[(i+1)%poly.length];a+=p[0]*q[1]-q[0]*p[1];}return a*.5;}
function noise(x,z) {
  const a=Math.floor(x),b=Math.floor(z),u=ease(x-a),v=ease(z-b);
  return lerp(lerp(hash(a,b),hash(a+1,b),u),lerp(hash(a,b+1),hash(a+1,b+1),u),v)*2-1;
}
function waterColour(b,x,z,d) {
  const lake=b.id,deep=ease((d+.10)/(lake==='wuhua'?1.28:.74));
  const meander=noise(x*.34+4,z*.34-7),mineral=noise(x*.43-9,z*.38+3);
  let out;
  if(lake==='changhai') out=C.blue.clone().lerp(C.deep,.48+.48*deep);
  else if(lake==='wucai') out=new THREE.Color('#2abeb9').lerp(new THREE.Color('#1687ab'),deep*.74);
  else if(lake==='wuhua') {
    out=new THREE.Color('#5cc9b8').lerp(C.turquoise,deep*.91);
    out.lerp(new THREE.Color('#198da3'),ease((meander+.15)/.8)*deep*.34);
    out.lerp(new THREE.Color('#91d7bb'),ease((mineral-.12)/.8)*.27);
  } else if(lake==='mirror') {
    out=new THREE.Color('#4bbfb0').lerp(new THREE.Color('#319f9d'),deep*.52);
    out.lerp(new THREE.Color('#82d1b8'),(.5+mineral*.5)*.16);
  } else {
    // The surrounding cut shelves already carry the light-to-deep transition.
    // Quiet broad patches in the pool floor avoid a second, steep colour ramp
    // that turns the fallback renderer's individual triangles into a mosaic.
    out=new THREE.Color(lake==='shuzheng-lower'?'#35aaa9':'#38b3ac');
    out.lerp(new THREE.Color('#7bceba'),(.5+mineral*.5)*.27);
    out.lerp(new THREE.Color('#279ca7'),(.5+meander*.5)*.12);
  }
  return out.multiplyScalar(.996+.006*noise(x*.78,z*.78));
}

function offsetContour(poly,distance,seed=0) {
  const sign=Math.sign(area(poly));
  return poly.map((a,i)=>{
    const prev=poly[(i-1+poly.length)%poly.length],next=poly[(i+1)%poly.length];
    let dx=next[0]-prev[0],dz=next[1]-prev[1],l=Math.hypot(dx,dz)||1;
    // Positive distance is towards the water.
    const nx=-sign*dz/l,nz=sign*dx/l;
    const variation=1+.10*Math.sin(i*.17+seed)+.05*Math.sin(i*.39-seed);
    let d=distance*variation;
    if(d>0){
      const ax=a[0]-prev[0],az=a[1]-prev[1],bx=next[0]-a[0],bz=next[1]-a[1];
      const cross=ax*bz-az*bx;
      if(sign*cross>1e-7){
        // A tight convex shore bend cannot carry a wider inset than its radius.
        // Smooth compression keeps every tier distinct instead of folding the
        // inner contours over themselves at the tips of small coves.
        const radius=Math.hypot(ax,az)*Math.hypot(bx,bz)*l/(2*Math.abs(cross));
        d=radius*(1-Math.exp(-d/radius));
      }
      let tries=0;while(signedDistance(a[0]+nx*d,a[1]+nz*d,poly)<-.0001&&tries++<8)d*=.5;
    }
    return [a[0]+nx*d,a[1]+nz*d];
  });
}
function ring(pos,col,outer,inner,y0,y1,color,shoreWeight=null,waterY=0) {
  // Each ring meets the next one at exactly the same contour and elevation.
  // There are no overlapping, subpixel vertical skirts; light inclined cut
  // edges remain readable without becoming black dotted lines from behind.
  for(let i=0;i<outer.length;i++) {
    const j=(i+1)%outer.length,a=outer[i],b=outer[j],d=inner[j],e=inner[i];
    const tint=color.clone().multiplyScalar(.995+.008*Math.sin(i*.12));
    const wi=shoreWeight?.[i]??1,wj=shoreWeight?.[j]??1;
    const v0=[a[0],lerp(waterY,y0,wi),a[1]],v1=[e[0],lerp(waterY,y1,wi),e[1]],v2=[d[0],lerp(waterY,y1,wj),d[1]],v3=[b[0],lerp(waterY,y0,wj),b[1]];
    for(const t of [[v0,v1,v2],[v0,v2,v3]]){
      const [a,b,d]=t,normalY=(b[2]-a[2])*(d[0]-a[0])-(b[0]-a[0])*(d[2]-a[2]);
      if(normalY<0)tri(pos,col,a,d,b,tint);else tri(pos,col,a,b,d,tint);
    }
  }
}

function ribbon(pos,col,a,b,width,color,y) {
  const dx=b[0]-a[0],dz=b[1]-a[1],l=Math.hypot(dx,dz)||1,nx=-dz/l*width,nz=dx/l*width;
  quad(pos,col,[a[0]-nx,y,a[1]-nz],[a[0]+nx,y,a[1]+nz],[b[0]+nx*.55,y,b[1]+nz*.55],[b[0]-nx*.55,y,b[1]-nz*.55],color);
}
function submergedTimber(pos,col,b) {
  if(b.id!=='wuhua')return;
  const trunks=[[[3.55,-4.1],[6.55,-3.28]],[[6.15,-5.98],[8.08,-3.85]],[[7.65,-1.6],[9.65,-2.64]],[[3.4,-5.2],[5.7,-5.8]]];
  const wood=new THREE.Color('#468e87'),lit=new THREE.Color('#84bdb0');
  for(let n=0;n<trunks.length;n++){
    const [a,d]=trunks[n],base=b.y+.012;
    ribbon(pos,col,a,d,.021,wood.clone().lerp(lit,n*.09),base);
    ribbon(pos,col,[a[0]-.014,a[1]-.014],[d[0]-.014,d[1]-.014],.006,lit,base+.003);
    for(let k=1;k<6;k++){
      const t=k/6,x=lerp(a[0],d[0],t),z=lerp(a[1],d[1],t),s=k%2?1:-1,len=.22+hash(n,k)*.47;
      const end=[x-.24+hash(k,n)*.15,z+s*len];
      ribbon(pos,col,[x,z],end,.009,wood,base+.001);
      if(k%2)ribbon(pos,col,[lerp(x,end[0],.64),lerp(z,end[1],.64)],[end[0]-.19,end[1]-.05],.005,wood,base+.001);
    }
  }
}

const WATER_JUNCTIONS=[
  {x:7.45,z:.57,width:3.12,top:3.4,bottom:1.78,depth:1.02,curve:.07},
  {x:-.35,z:4.54,width:5.15,top:1.78,bottom:.26,depth:.72,curve:.08},
  {x:1,z:6.94,width:2.1,top:.26,bottom:.08,depth:.23,curve:.025},
  {x:2.25,z:8.54,width:2.4,top:.08,bottom:-.08,depth:.23,curve:.025},
];
function shoreWeights(b) {
  return b.poly.map(([x,z])=>{
    let weight=1;
    for(const f of WATER_JUNCTIONS){
      const source=Math.abs(b.y-f.top)<.001,receiver=Math.abs(b.y-f.bottom)<.001;
      if(!source&&!receiver)continue;
      const across=Math.abs(x-f.x)/(f.width*.5),edge=f.z+f.curve*Math.sin(x*1.7)+(receiver?f.depth:0);
      const opening=(1-ease((across-.80)/.22))*(1-ease((Math.abs(z-edge)-.18)/.65));
      weight=Math.min(weight,1-opening);
    }
    return weight;
  });
}
function lakeShoreCuts(b) {
  const scale=b.id==='wuhua'?1:b.id==='changhai'?.67:.65;
  const offsets=[-.135,-.018,.025,.101,.143,.255,.303,.440,.500].map(d=>d*scale);
  const weights=shoreWeights(b);
  const cuts=offsets.map(d=>offsetContour(b.poly,d,.45).map((point,i)=>[
    lerp(b.poly[i][0],point[0],weights[i]),lerp(b.poly[i][1],point[1],weights[i])
  ]));
  return {cuts,weights};
}
// Pure deterministic hydraulic data, called before terrain construction. The
// fall's last shallow runout reaches the real receiver, including its cut-shore
// opening. No module-level scene or construction-order state is retained.
export function prepareFallProfile(f,basins) {
  const id=f.name||f.id;
  const receiverId={pearl:'mirror',nuorilang:'shuzheng-upper','shuzheng-one':'shuzheng-middle','shuzheng-two':'shuzheng-lower'}[id];
  const sourceId={pearl:'wuhua',nuorilang:'nuorilang-head','shuzheng-one':'shuzheng-upper','shuzheng-two':'shuzheng-middle'}[id];
  const receiver=basins.find(b=>b.id===receiverId),source=basins.find(b=>b.id===sourceId);
  if(!receiver)return {...f};
  const contour=lakeShoreCuts(receiver).cuts.at(-1),sourceContour=source?lakeShoreCuts(source).cuts.at(-1):null;
  const runout=[],inlet=[],receiverPigment=[],sourcePigment=[];
  for(let i=0;i<=32;i++){
    const x=f.x+(i/32-.5)*f.width,crest=f.z+(f.curve??.08)*Math.sin(x*1.7)+.026,start=crest+f.depth;
    let target=start;
    for(let z=start;z<=start+1.05;z+=.012){
      if(signedDistance(x,z,contour)>.035){target=z+.065;break;}
    }
    let from=crest-.045;
    if(sourceContour)for(let z=crest+.55;z>=crest-1.2;z-=.012){
      if(signedDistance(x,z,sourceContour)>.025){from=Math.min(crest-.020,z-.035);break;}
    }
    runout.push(target);inlet.push(from);
    const lower=waterColour(receiver,x,target,Math.max(0,signedDistance(x,target,receiver.poly)));
    const upper=source?waterColour(source,x,from,Math.max(0,signedDistance(x,from,source.poly))):lower;
    receiverPigment.push([lower.r,lower.g,lower.b]);sourcePigment.push([upper.r,upper.g,upper.b]);
  }
  return {...f,runout,inlet,receiverPigment,sourcePigment};
}

export function buildLakeV4(b,parent,groundHeight) {
  const triangles=THREE.ShapeUtils.triangulateShape(b.poly.map(p=>new THREE.Vector2(...p)),[]),p=[],c=[];
  function subdivide(a,d,e,iteration=0) {
    const edges=[Math.hypot(a[0]-d[0],a[1]-d[1]),Math.hypot(d[0]-e[0],d[1]-e[1]),Math.hypot(e[0]-a[0],e[1]-a[1])];
    const max=Math.max(...edges);
    if(max>.29&&iteration<16){
      const longest=edges.indexOf(max);
      if(longest===0){const m=[(a[0]+d[0])*.5,(a[1]+d[1])*.5];subdivide(a,m,e,iteration+1);subdivide(m,d,e,iteration+1);}
      else if(longest===1){const m=[(d[0]+e[0])*.5,(d[1]+e[1])*.5];subdivide(a,d,m,iteration+1);subdivide(a,m,e,iteration+1);}
      else {const m=[(e[0]+a[0])*.5,(e[1]+a[1])*.5];subdivide(a,d,m,iteration+1);subdivide(m,d,e,iteration+1);}return;
    }
    for(const [x,z]of[a,e,d]){p.push(x,b.y,z);const color=waterColour(b,x,z,Math.max(0,signedDistance(x,z,b.poly)));c.push(color.r,color.g,color.b);}
  }
  for(const ids of triangles)subdivide(...ids.map(i=>b.poly[i]));
  const stopId=b.id.startsWith('shuzheng')?'shuzheng':b.id==='nuorilang-head'?'nuorilang':b.id;
  const lake=mesh(parent,geometry(p,c),`water-${b.id}`,lakeMaterial.clone());
  lake.castShadow=false;lake.userData={water:true,stopId,basin:b.id,area:b.area};
  const rp=[],rc=[];
  // Four physical shore layers make the littoral transition legible even in
  // a distant miniature view. Narrow ponds use proportionately slimmer cuts.
  const {cuts,weights}=lakeShoreCuts(b);
  // Interaction and foam use the visible inner-water contour, never the
  // larger lake plane hidden underneath the layered shore shelves.
  lake.userData.surfaceContour=cuts.at(-1).map(point=>[point[0],point[1]]);
  const heights=[.080,.073,.050,.046,.031,.028,.015,.011,0];
  const teal=b.id==='changhai'?new THREE.Color('#489fac'):new THREE.Color('#4fc2b2');
  const bands=[C.ivory,C.ivory.clone().lerp(C.mint,.35),C.mint,C.mint.clone().lerp(C.paleJade,.40),C.paleJade,C.paleJade.clone().lerp(teal,.34),teal,teal.clone().lerp(new THREE.Color('#76cbbb'),.14)];
  for(let i=0;i<cuts.length-1;i++)ring(rp,rc,cuts[i],cuts[i+1],b.y+heights[i],b.y+heights[i+1],bands[i],weights,b.y);
  // Submerged branches are low-contrast coloured silhouettes in the water,
  // not black logs sitting on its surface. The watercolour contour plane stays
  // intact for true surface picking and hold-to-reveal interaction.
  submergedTimber(rp,rc,b);
  return {lake,rim:geometry(rp,rc)};
}

// A single continuous flowing veil. The curve is shallow at the lip, steep
// through the drop, then turns into the receiving pool. Fine channels have
// millimetres of relief; there are no overlapping curtain lobes or solid ribs.
// u is across the whole fall and t runs from crest to foot. Animated water uses
// this exact surface and its normal, rather than a second approximate ribbon.
const FLOW = {
  white:new THREE.Color('#fafbec'), light:new THREE.Color('#edf7e9'),
  body:new THREE.Color('#c4e2d9'), channel:new THREE.Color('#72b2b2'),
  edge:new THREE.Color('#bfddd4'),
};
function fallSeed(f) {
  return f.seed??({pearl:8,nuorilang:19,'shuzheng-one':20,'shuzheng-two':22}[f.id||f.name]??1);
}
function profileSample(values,u,fallback) {
  if(!values?.length)return fallback;
  const r=clamp(u,0,1)*(values.length-1),a=Math.floor(r),b=Math.min(a+1,values.length-1);
  return lerp(values[a],values[b],r-a);
}
function pigmentSample(values,u,fallback) {
  if(!values?.length)return fallback.clone();
  const r=clamp(u,0,1)*(values.length-1),a=Math.floor(r),b=Math.min(a+1,values.length-1),q=r-a;
  return new THREE.Color().setRGB(lerp(values[a][0],values[b][0],q),lerp(values[a][1],values[b][1],q),lerp(values[a][2],values[b][2],q));
}
export function fallSurfacePoint(f,u,t,time=0) {
  u=clamp(u,0,1);t=clamp(t,0,1);
  const seed=fallSeed(f),h=f.top-f.bottom,large=h>.6;
  const x=f.x+(u-.5)*f.width,progress=clamp((t-.055)/.945,0,1),envelope=Math.sin(progress*Math.PI);
  const crest=(large?.008:.002)*Math.sin(u*TAU*4.7+seed);
  const channel=(large?.009:.0025)*(Math.sin(u*TAU*16.4+seed)*.62+Math.sin(u*TAU*33.7+seed*.31)*.38);
  const crestZ=f.z+(f.curve??.08)*Math.sin(x*1.7)+.026;
  const startZ=profileSample(f.inlet,u,crestZ-.045),endZ=profileSample(f.runout,u,crestZ+f.depth);
  const extension=Math.max(0,endZ-(crestZ+f.depth));
  return [x+(large?.005:.0014)*Math.sin(u*23+seed)*envelope,
    lerp(f.top+.007,f.bottom+.004,ease(progress))+crest*(1-ease(progress)),
    lerp(startZ,crestZ,ease(t/.14))+f.depth*(.23*progress+.77*progress*progress)+channel*envelope+
      (large?.006:.0017)*Math.sin(u*TAU*7.1-progress*14+time*7.3+seed)*envelope+extension*ease((progress-.68)/.32)];
}

export function fallSurfaceNormal(f,u,t,time=0) {
  const du=.0002,dt=.0002;
  const a=fallSurfacePoint(f,Math.max(0,u-du),t,time),b=fallSurfacePoint(f,Math.min(1,u+du),t,time);
  const c=fallSurfacePoint(f,u,Math.max(0,t-dt),time),d=fallSurfacePoint(f,u,Math.min(1,t+dt),time);
  const ux=b[0]-a[0],uy=b[1]-a[1],uz=b[2]-a[2];
  const tx=d[0]-c[0],ty=d[1]-c[1],tz=d[2]-c[2];
  const nx=ty*uz-tz*uy,ny=tz*ux-tx*uz,nz=tx*uy-ty*ux,n=Math.hypot(nx,ny,nz)||1;
  return [nx/n,ny/n,nz/n];
}
function flowPulse(seed,u,t,time) {
  const packet=Math.pow(.5+.5*Math.sin(u*36-t*18+time*(9.0+Math.sin(u*17)*1.6)+seed),3);
  const broken=Math.pow(.5+.5*Math.sin(u*79-t*31+time*15.3+seed),5);
  return (packet*.38+broken*.24)*Math.sin(t*Math.PI);
}
function flowColourBasis(f,u,t) {
  const seed=fallSeed(f);
  // Narrow, unequal cool channels break up the broad white silhouette. The
  // lighter packets migrate downhill and split: the veil is never a blank
  // colour sheet with a second set of lines pasted on top.
  const bend=.13*Math.sin(t*4.4+u*19+seed);
  const channel=Math.pow(.5+.5*Math.sin(u*TAU*17.3+bend+seed),3.5);
  const finer=Math.pow(.5+.5*Math.sin(u*TAU*31.7+t*.55+seed*.31),5);
  const whiteRun=Math.pow(.5+.5*Math.sin(u*TAU*8.7+seed*.7),2);
  const color=FLOW.body.clone().lerp(FLOW.channel,(channel*.56+finer*.18)*Math.sin(t*Math.PI));
  color.lerp(FLOW.light,.16+whiteRun*.24);
  const flare=Math.exp(-Math.pow((t-(.75+.035*Math.sin(u*37+seed)))/.12,2))*(.42+whiteRun*.27);
  const gain=FLOW.white.clone().sub(color).multiplyScalar(1-flare);
  color.lerp(FLOW.white,flare);
  // Aeration reaches its brightest just above the landing; its irregular
  // lower edge dissolves into the exact receiving lake pigment, not a hem.
  const footAt=.79+.055*Math.sin(u*TAU*4.3+seed)+.025*Math.sin(u*TAU*9.7);
  const foot=ease((t-footAt)/(1-footAt)),inlet=1-ease(t/.18);
  color.lerp(pigmentSample(f.receiverPigment,u,C.jade),foot);
  color.lerp(pigmentSample(f.sourcePigment,u,C.jade),inlet);
  gain.multiplyScalar((1-foot)*(1-inlet));
  return {color,gain};
}
// The terrain is a coarser triangulated surface than the veil. Its interpolated
// facets need clearance as well as the 6 mm travelling water motion. Sampling
// the analytic height alone with a tiny offset can still expose rock slivers.
export function fallExcavationHeight(f,x,z) {
  const u=clamp((x-f.x)/f.width+.5,0,1);let low=0,high=1;
  if(z<fallSurfacePoint(f,u,0)[2]-.10||z>fallSurfacePoint(f,u,1)[2]+.10)return Infinity;
  for(let i=0;i<18;i++){
    const middle=(low+high)*.5;
    if(fallSurfacePoint(f,u,middle)[2]<z)low=middle;else high=middle;
  }
  return fallSurfacePoint(f,u,(low+high)*.5)[1]-.18;
}
const veilStates=new WeakMap();
export function updateWaterfallVeil(mesh,time) {
  const state=veilStates.get(mesh);if(!state)return false;
  const {profile,uv,baseColors,gainColors}=state,position=mesh.geometry.attributes.position,color=mesh.geometry.attributes.color;
  const seed=fallSeed(profile);
  for(let i=0;i<position.count;i++){
    const u=uv[i*2],t=uv[i*2+1],q=fallSurfacePoint(profile,u,t,time),pulse=flowPulse(seed,u,t,time);
    position.array.set(q,i*3);
    for(let c=0;c<3;c++)color.array[i*3+c]=baseColors[i*3+c]+gainColors[i*3+c]*pulse;
  }
  position.needsUpdate=true;color.needsUpdate=true;return true;
}

function stoneBlock(p,c,x,y,z,w,h,d,seed) {
  const corners=[[-.5,-.5],[-.21,-.61],[.29,-.56],[.54,-.18],[.46,.42],[.04,.55],[-.43,.39]];
  const top=corners.map(([a,b],i)=>[x+a*w,y+h*(.54+.53*hash(i,seed)),z+b*d]);
  const centre=[x-w*.07,y+h*.96,z-d*.09],warm=C.cream.clone().lerp(C.peach,.18+hash(seed,7)*.16);
  for(let i=0;i<corners.length;i++){
    const j=(i+1)%corners.length,a=top[i],b=top[j],shade=warm.clone().multiplyScalar(.95+.05*hash(i,seed+4));
    tri(p,c,centre,b,a,shade);
    quad(p,c,a,b,[x+(b[0]-x)*1.13,y,z+(b[2]-z)*1.09],[x+(a[0]-x)*1.13,y,z+(a[2]-z)*1.09],shade.clone().multiplyScalar(.94));
  }
}

export function buildFallsV4(parent,f) {
  const seed=fallSeed(f),large=f.top-f.bottom>.6,p=[],c=[],rp=[],rc=[];
  const columns=Math.ceil(f.width/(large?.067:.09)),rows=large?34:18;
  const uv=[],indices=[],baseColors=[],gainColors=[];
  for(let i=0;i<=columns;i++)for(let j=0;j<=rows;j++){
    const u=i/columns,t=j/rows;
    p.push(...fallSurfacePoint(f,u,t));uv.push(u,t);
    const {color,gain}=flowColourBasis(f,u,t),pulse=flowPulse(seed,u,t,0);
    baseColors.push(color.r,color.g,color.b);gainColors.push(gain.r,gain.g,gain.b);
    c.push(color.r+gain.r*pulse,color.g+gain.g*pulse,color.b+gain.b*pulse);
  }
  for(let i=0;i<columns;i++)for(let j=0;j<rows;j++){
    const a=i*(rows+1)+j,b=a+1,d=(i+1)*(rows+1)+j,e=d+1;
    indices.push(a,b,e,a,e,d);
  }
  const veilGeometry=geometry(p,c);veilGeometry.setIndex(indices);
  veilGeometry.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));
  veilGeometry.attributes.position.setUsage(THREE.DynamicDrawUsage);
  veilGeometry.attributes.color.setUsage(THREE.DynamicDrawUsage);
  veilGeometry.computeVertexNormals();
  const mat=new THREE.MeshBasicMaterial({color:'#ffffff',vertexColors:true,side:THREE.DoubleSide,toneMapped:false});
  mat.name='thin-aerated-water-veil-v5';
  const curtain=mesh(parent,veilGeometry,`waterfall-${f.name}`,mat);
  curtain.castShadow=false;curtain.receiveShadow=false;
  curtain.userData={water:true,falls:true,bakeSkip:true,bakeNoOcclude:true,
    stopId:f.name.startsWith('shuzheng')?'shuzheng':f.name,
    flowSurface:{...f,seed},maxChannelRelief:large?.015:.0042};
  veilStates.set(curtain,{profile:{...f,seed},uv,baseColors:Float32Array.from(baseColors),gainColors:Float32Array.from(gainColors)});
  // Only the small, warm limestone shoulders remain solid. All froth at the
  // foot is animated, thin water geometry clipped to the receiving basin.
  for(const side of [-1,1]){
    const x=f.x+side*(f.width*.5+.035),edgeZ=f.z+(f.curve??.08)*Math.sin(x*1.7);
    stoneBlock(rp,rc,x,f.top-.14,edgeZ-.09,large?.20:.13,.13,large?.20:.12,seed+side*19);
    if(large)stoneBlock(rp,rc,x+side*.055,f.bottom+.01,edgeZ+f.depth*.72,.23,.20,.25,seed+side*31);
  }
  const structure=mesh(parent,geometry(rp,rc),`travertine-shoulders-${f.name}`);
  structure.userData={kind:'travertine',stopId:curtain.userData.stopId};
  return {mesh:curtain,base:Float32Array.from(curtain.geometry.attributes.position.array),seed};
}
