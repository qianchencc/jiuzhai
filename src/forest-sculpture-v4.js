import * as THREE from 'three';

// Crown silhouettes are built as little folded paper sculptures.  The firs
// have separated bough decks; the autumn trees have broad pleated scallops.
// All geometry is real, static geometry, with a small per-vertex wind weight.
const TAU = Math.PI * 2;
const clamp = THREE.MathUtils.clamp;
const lerp = THREE.MathUtils.lerp;
const COLORS = {
  ivory: new THREE.Color('#fff0cf'),
  wood: new THREE.Color('#b28d61'),
  woodLight: new THREE.Color('#e0b587'),
  woodShade: new THREE.Color('#936e50'),
  fir: ['#7f9569','#92a475','#6c845d','#a1ac79','#617b61','#b0b587'].map(c=>new THREE.Color(c)),
  autumn: ['#ffb9a5','#ffcaac','#ffd29b','#ffda8b','#f5aeba','#ffc1c8','#ffe5a6'].map(c=>new THREE.Color(c)),
};
function random(seed) { let n=seed>>>0; return ()=>{n=(Math.imul(1664525,n)+1013904223)>>>0;return n/4294967296;}; }
function segmentDistance(x,z,a,b) {
  const dx=b[0]-a[0],dz=b[1]-a[1],t=clamp(((x-a[0])*dx+(z-a[1])*dz)/(dx*dx+dz*dz||1),0,1);
  return Math.hypot(x-a[0]-t*dx,z-a[1]-t*dz);
}
function distanceToWater(x,z,basins) {
  let nearest=-Infinity;
  for(const basin of basins) {
    const q=basin.bounds;
    if(q&&(x<q.x0-1.8||x>q.x1+1.8||z<q.z0-1.8||z>q.z1+1.8))continue;
    let inside=false,distance=Infinity;
    const poly=basin.poly;
    for(let i=0,j=poly.length-1;i<poly.length;j=i++) {
      const a=poly[i],b=poly[j];
      if(((a[1]>z)!==(b[1]>z))&&x<(b[0]-a[0])*(z-a[1])/(b[1]-a[1])+a[0])inside=!inside;
      distance=Math.min(distance,segmentDistance(x,z,a,b));
    }
    nearest=Math.max(nearest,inside?distance:-distance);
  }
  return nearest;
}

class PaperGeometry {
  constructor(){this.positions=[];this.colors=[];this.wind=[];}
  triangle(a,b,c,color,weights=0) {
    this.positions.push(...a,...b,...c);
    for(let i=0;i<3;i++) {
      this.colors.push(color.r,color.g,color.b);
      this.wind.push(Array.isArray(weights)?weights[i]:weights);
    }
  }
  quad(a,b,c,d,color,weights=0) {
    this.triangle(a,b,c,color,Array.isArray(weights)?[weights[0],weights[1],weights[2]]:weights);
    this.triangle(a,c,d,color,Array.isArray(weights)?[weights[0],weights[2],weights[3]]:weights);
  }
  finish() {
    const g=new THREE.BufferGeometry();
    g.setAttribute('position',new THREE.Float32BufferAttribute(this.positions,3));
    g.setAttribute('color',new THREE.Float32BufferAttribute(this.colors,3));
    g.setAttribute('windWeight',new THREE.Float32BufferAttribute(this.wind,1));
    g.computeVertexNormals();g.computeBoundingBox();g.computeBoundingSphere();
    return g;
  }
}

function transform(x,y,z,height,rotation,origin) {
  const co=Math.cos(rotation),si=Math.sin(rotation);
  return [origin[0]+height*(x*co+z*si),origin[1]+height*y,origin[2]+height*(z*co-x*si)];
}
function twig(builder,a,b,radius,color,transformPoint,wind=0) {
  // A four-sided folded twig keeps its shape at close range without cylinders.
  const av=new THREE.Vector3(...a),bv=new THREE.Vector3(...b),axis=bv.clone().sub(av).normalize();
  const u=new THREE.Vector3(0,0,1).cross(axis).normalize();
  if(u.lengthSq()<.01)u.set(1,0,0);
  const v=new THREE.Vector3().crossVectors(axis,u).normalize();
  const ringA=[],ringB=[];
  for(let i=0;i<4;i++) {
    const angle=i*Math.PI/2+.25,offset=u.clone().multiplyScalar(Math.cos(angle)*radius).addScaledVector(v,Math.sin(angle)*radius);
    ringA.push(transformPoint(...av.clone().add(offset).toArray()));
    ringB.push(transformPoint(...bv.clone().addScaledVector(offset,.57).toArray()));
  }
  for(let i=0;i<4;i++)builder.quad(ringA[i],ringA[(i+1)%4],ringB[(i+1)%4],ringB[i],color.clone().multiplyScalar(i===0?1.12:i===2?.88:1),wind);
}

function fir(builder,{x,y,z,height,color,seed,hero=false}) {
  const rand=random(seed),angle=rand()*TAU,lean=(rand()-.5)*.045;
  const at=(a,b,c)=>transform(a+lean*b,b,c,height,angle,[x,y,z]);
  twig(builder,[0,0,0],[lean,.98,0],.020,COLORS.woodShade,at);
  const count=hero?6:5;
  for(let layer=0;layer<count;layer++) {
    const t=layer/(count-1),centerY=lerp(.305,.885,t);
    const radius=(.09+.29*Math.pow(1-t,.88))*(1+(rand()-.5)*.08);
    // The narrow, feather-cut branches interleave between adjacent tiers.
    // This avoids the old six-pointed plates and preserves fine silhouettes.
    const phase=layer*.59+rand()*.13;
    const face=color.clone().lerp(COLORS.ivory,.025+layer*.015);
    for(let k=0;k<5;k++) {
      const theta=phase+k*TAU/5,r=radius*(.94+rand()*.12);
      const co=Math.cos(theta),si=Math.sin(theta);
      const leafAt=(along,across,yy)=>at(co*along-si*across,yy,si*along+co*across);
      const hub=leafAt(r*.115,0,centerY+.071);
      // Three stepped feather tips on each side of the narrow leading point.
      // The notches are actual cuts, not a texture on a triangular plate.
      const outline=[
        [.45,-.35,.012],[.74,-.48,-.047],[.70,-.30,-.022],
        [.94,-.25,-.080],[1.02,0,-.120],
        [.94,.25,-.080],[.70,.30,-.022],[.74,.48,-.047],[.45,.35,.012],
      ].map(([along,across,dy])=>leafAt(along*r,across*r,centerY+dy));
      const w=.25+centerY*.65;
      for(let j=0;j<outline.length-1;j++) {
        const col=face.clone().multiplyScalar(j<4?(j%2?1.035:.96):(j%2?.91:.98));
        builder.triangle(hub,outline[j+1],outline[j],col,[w*.30,w,w]);
      }
      // One raised central paper crease provides the small folded highlight
      // that remains visible in a close view, with only two extra faces.
      const root=leafAt(r*.12,0,centerY+.077),tip=leafAt(r*1.015,0,centerY-.114);
      const middleY=lerp(centerY+.071,centerY-.120,.64)+.008;
      const left=leafAt(r*.71,-r*.025,middleY),right=leafAt(r*.71,r*.025,middleY);
      builder.triangle(root,tip,left,face.clone().lerp(COLORS.ivory,.17),[w*.3,w,w*.75]);
      builder.triangle(root,right,tip,face.clone().multiplyScalar(.93),[w*.3,w*.75,w]);
    }
  }
  const top=at(.009,1.045,.008),r=.052,baseY=.865;
  for(let i=0;i<6;i++) {
    const a=i*TAU/6,b=(i+1)*TAU/6;
    builder.triangle(top,at(Math.cos(b)*r,baseY,Math.sin(b)*r),at(Math.cos(a)*r,baseY,Math.sin(a)*r),color.clone().lerp(COLORS.ivory,.12).multiplyScalar(i%2?1:.90),[1,.7,.7]);
  }
}

function autumn(builder,{x,y,z,height,color,seed,hero=false}) {
  const rand=random(seed),rotation=rand()*TAU,lean=(rand()-.5)*.07;
  const at=(a,b,c)=>transform(a+lean*b,b,c,height,rotation,[x,y,z]);
  twig(builder,[0,0,0],[.012,.60,.006],.022,COLORS.woodLight,at);
  // Every crown presents a fan from a slightly different direction, giving the
  // tree a volume from all camera angles instead of a pair of crossed planes.
  const fans=[[-.19,.42,.035,.40,-.18],[.20,.46,-.018,.41,.48],[-.025,.57,-.13,.40,1.55],[.035,.56,.14,.42,-1.02],[.015,.65,.01,.35,.84]];
  for(let f=0;f<fans.length;f++) {
    const [cx,cy,cz,sz,faceAngle]=fans[f],size=sz*(.96+rand()*.08),a0=faceAngle+(rand()-.5)*.18;
    twig(builder,[.005,.27,0],[cx,cy+.055,cz],.012,COLORS.woodLight.clone().multiplyScalar(f===2?.90:1.02),at);
    const fanAt=(xx,yy,zz)=>at(cx+xx*Math.cos(a0)+zz*Math.sin(a0),cy+yy,cz+zz*Math.cos(a0)-xx*Math.sin(a0));
    const pivot=fanAt(0,0,0),n=hero?18:14,edge=[];
    for(let i=0;i<=n;i++) {
      const a=-1.28+i/n*2.56;
      const scallop=1+.014*Math.cos(i*Math.PI)+.012*Math.sin(i*.83+seed);
      const r=size*scallop;
      // A shallow bowed cup gives the paper a readable crown volume even
      // when another fan is seen edge-on during free orbiting.
      const bow=(.078*Math.cos(a)-.018)*size/.4;
      edge.push([Math.sin(a)*r,.065+Math.cos(a)*r,bow+(i%2?-.012:.015)*size/.4]);
    }
    const crownColor=color.clone().lerp(COLORS.ivory,f===2?.045:f===3?.12:.025);
    for(let i=0;i<n;i++) {
      const a=edge[i],b=edge[i+1],pa=fanAt(...a),pb=fanAt(...b),wa=.65+f*.06;
      // Alternating faces are the light and shade of a folded fan; the colour
      // belongs to the paper itself and remains visible under warm scene light.
      builder.triangle(pivot,pb,pa,crownColor.clone().multiplyScalar(i%2?.94:1.04),[.32,wa,wa]);
      const backA=fanAt(a[0],a[1],a[2]-.011),backB=fanAt(b[0],b[1],b[2]-.011);
      builder.quad(pa,pb,backB,backA,crownColor.clone().lerp(COLORS.ivory,.18),wa);
    }
  }
  if(hero) {
    for(let k=0;k<3;k++) {
      const a=k*TAU/3+rotation;
      twig(builder,[0,.09,0],[Math.cos(a)*.14,.005,Math.sin(a)*.14],.010,COLORS.woodLight,at);
    }
  }
}

// Coordinates concentrate colour around the water and establish alternating
// groves.  A grove has a colour family, rather than every tree being random.
const GROVES = [
  {x:-11.1,z:-4.7,r:2.0,fir:.92,p:1}, {x:-9.8,z:-1.2,r:1.5,fir:.77,p:0},
  {x:-4.0,z:-6.0,r:1.8,fir:.93,p:3}, {x:-1.2,z:-6.1,r:2.0,fir:.88,p:1},
  {x:.1,z:-2.6,r:1.5,fir:.67,p:2}, {x:2.5,z:-8.0,r:1.2,fir:.83,p:0},
  {x:10.6,z:-4.6,r:1.6,fir:.63,p:4}, {x:10.6,z:-.9,r:1.6,fir:.56,p:0},
  {x:10.1,z:4.4,r:1.7,fir:.57,p:1}, {x:-6.1,z:1.6,r:1.9,fir:.38,p:0},
  {x:-10.1,z:5.9,r:1.6,fir:.50,p:4}, {x:-3.6,z:3.6,r:1.35,fir:.55,p:2},
  {x:4.7,z:5.7,r:1.05,fir:.38,p:2}, {x:6.7,z:6.4,r:1.55,fir:.65,p:0},
  {x:-8.1,z:7.7,r:1.45,fir:.47,p:0}, {x:-4.7,z:8.0,r:1.4,fir:.32,p:3},
  {x:-2.9,z:8.7,r:.70,fir:.25,p:4}, {x:6.2,z:8.3,r:1.25,fir:.48,p:1},
  {x:8.3,z:7.5,r:1.3,fir:.64,p:0}, {x:-2.6,z:.5,r:1.1,fir:.68,p:3},
  {x:3.6,z:-7.8,r:.95,fir:.34,p:3}, {x:8.2,z:-7.5,r:1.1,fir:.43,p:4},
  {x:-11.1,z:2.4,r:1.0,fir:.58,p:1}, {x:-5.9,z:-2.4,r:.90,fir:.75,p:2},
  {x:2.6,z:.6,r:1.05,fir:.58,p:0},
];

export function buildForestV4({groundHeight,basins,route,homes,islandPhi,count=570}) {
  const rand=random(917326),builder=new PaperGeometry(),locations=[],cells=new Map();
  let trees=0,firs=0,autumnTrees=0,heroTrees=0,attempts=0;
  const cellSize=.7,cellKey=(x,z)=>`${Math.floor(x/cellSize)},${Math.floor(z/cellSize)}`;
  const routePoints=route.filter((_,i)=>i%5===0);
  function nearby(x,z,radius) {
    const ix=Math.floor(x/cellSize),iz=Math.floor(z/cellSize);
    for(let a=ix-2;a<=ix+2;a++)for(let b=iz-2;b<=iz+2;b++) {
      const bin=cells.get(`${a},${b}`);if(!bin)continue;
      for(const p of bin)if(Math.hypot(x-p.x,z-p.z)<radius+p.radius)return true;
    }
    return false;
  }
  function onRoute(x,z) {
    let d=Infinity;
    for(const p of routePoints)d=Math.min(d,Math.hypot(x-p.x,z-p.z));
    return d;
  }
  while(trees<count&&attempts++<48000) {
    const grove=GROVES[Math.floor(rand()*GROVES.length)],a=rand()*TAU,r=Math.sqrt(rand())*grove.r;
    const x=grove.x+Math.cos(a)*r,z=grove.z+Math.sin(a)*r;
    if(islandPhi(x,z)>-.045||z>9.65)continue;
    const y=groundHeight(x,z),water=distanceToWater(x,z,basins);
    if(y>7.0||water>-.19||onRoute(x,z)<.30||homes.some(h=>Math.hypot(x-h.x,z-h.z)<h.radius+.10))continue;
    // The waterfall openings are the white heart of the composition.
    if((x>5.4&&x<9.45&&z>-.05&&z<2.2)||(x>-3.5&&x<2.8&&z>4.22&&z<5.8))continue;
    const slope=Math.hypot(groundHeight(x+.1,z)-groundHeight(x-.1,z),groundHeight(x,z+.1)-groundHeight(x,z-.1))/.2;
    if(slope>2.05)continue;
    const pondApron=x>-9.05&&x<-5.35&&z>.05&&z<1.50;
    if(pondApron&&rand()>.36)continue;
    const isFir=!pondApron&&rand()<grove.fir,hero=!pondApron&&rand()<.10&&y<4.7&&water<-.48;
    const height=pondApron?.64+rand()*.27:(isFir?1.32+rand()*.83:1.13+rand()*.67)*(hero?1.19:1)*(y>5.3?.78:1);
    // Smaller trees can fill the gaps between the broad foreground crowns.
    const radius=(isFir?.115:.13)*height;
    if(nearby(x,z,radius))continue;
    const shade=isFir?COLORS.fir[Math.floor(rand()*COLORS.fir.length)]:COLORS.autumn[(grove.p+(rand()<.20?1:0))%COLORS.autumn.length];
    const col=shade.clone().lerp(COLORS.ivory,rand()*.06);
    const spec={x,y:y-.02,z,height,color:col,seed:trees*19+8721,hero};
    if(isFir){fir(builder,spec);firs++;}else{autumn(builder,spec);autumnTrees++;}
    if(hero)heroTrees++;
    const record={x,z,radius,height,isFir};
    const key=cellKey(x,z);if(!cells.has(key))cells.set(key,[]);cells.get(key).push(record);
    locations.push([x,z]);trees++;
  }
  const geometry=builder.finish();
  const material=new THREE.MeshStandardMaterial({color:'#ffffff',vertexColors:true,roughness:1,metalness:0,side:THREE.DoubleSide});
  material.name='hand-folded-colour-forest-v4';
  const mesh=new THREE.Mesh(geometry,material);mesh.name='layered-firs-and-coral-fan-groves';mesh.castShadow=true;mesh.receiveShadow=true;
  mesh.userData={kind:'foliage',staticSculpture:true};
  const group=new THREE.Group();group.name='jiuzhai-paper-forest-v4';group.add(mesh);
  const metadata={trees,firs,autumnTrees,heroTrees,triangles:geometry.attributes.position.count/3,vertices:geometry.attributes.position.count};
  group.userData.metadata=metadata;
  return {group,trees,locations,metadata};
}
