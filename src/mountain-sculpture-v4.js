import * as THREE from 'three';

// The alpine backdrop is made from authored ridge graphs, not cones or a
// regular height-map grid. Each ridge breaks into long, unequal paper planes.
const TAU=Math.PI*2;
const clamp=THREE.MathUtils.clamp, mix=THREE.MathUtils.lerp;
const hash=(x,z=0)=>{const a=Math.sin(x*127.1+z*311.7)*43758.5453;return a-Math.floor(a);};
const smooth=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
const rockPalette=['#b9bd8f','#aab48a','#9ca780','#879674','#c7c89b','#b3ba91','#96a27e'];
const snowPalette=['#fff3df','#f5ead6','#eadfcb','#fff6e5','#f0e3cf'];
const colorCache=new Map();
const color=(hex)=>{if(!colorCache.has(hex))colorCache.set(hex,new THREE.Color(hex));return colorCache.get(hex);};
const material=new THREE.MeshStandardMaterial({color:'#ffffff',vertexColors:true,side:THREE.DoubleSide,roughness:1,metalness:0});
material.name='folded-alpine-paper-v4';
const cloudMaterial=new THREE.MeshBasicMaterial({color:'#ffffff',vertexColors:true,side:THREE.DoubleSide});
cloudMaterial.name='warm-ivory-paper-cloud-v4';

// Heights are absolute scene coordinates. Long Lake and Five Flower Lake are
// deliberately outside these footprints, leaving their shores open.
const MASSIFS=[
  {id:'western-crown',seed:81,snow:6.25,
    outline:[[-12.8,-5.5],[-11.3,-8.0],[-9.6,-9.4],[-8.2,-9.15],[-8.65,-7.9],[-8.55,-6.65],[-8.9,-5.55],[-9.25,-4.1],[-9.8,-2.65],[-11.3,-2.6],[-12.5,-3.8]],
    ridges:[
      {w:1.65,p:[[-11.65,-4.7,4.5],[-11.2,-6.3,6.8],[-10.65,-7.55,7.1],[-10.0,-7.9,8.5],[-9.45,-8.55,6.65],[-8.95,-8.65,7.35]]},
      {w:.98,p:[[-10,-7.9,8.5],[-9.65,-6.55,6.65],[-10.0,-5.75,5.8],[-9.55,-4.75,4.6]]},
      {w:.78,p:[[-11.2,-6.3,6.8],[-12.1,-5.2,4.6],[-11.4,-3.5,3.4]]}
    ]},
  {id:'northern-snow-ridge',seed:113,snow:6.35,
    outline:[[-7.6,-9.65],[-5.75,-10.35],[-3.75,-10.5],[-1.45,-10.25],[.35,-9.5],[.95,-8.45],[-.15,-7.4],[-1.6,-6.55],[-3.3,-6.2],[-4.55,-6.6],[-4.55,-8.4],[-5.9,-9.25]],
    ridges:[
      {w:1.7,p:[[-6.6,-9.75,5.8],[-5.2,-9.8,7.6],[-4.35,-9.65,6.95],[-3.35,-9.45,8.65],[-2.35,-9.1,6.9],[-1.2,-9.1,7.4],[-.35,-8.8,5.9]]},
      {w:1.15,p:[[-3.35,-9.45,8.65],[-3.65,-8.65,7.15],[-3.1,-7.8,6.15],[-2.5,-6.8,4.55]]},
      {w:.85,p:[[-2.35,-9.1,6.9],[-1.25,-7.9,5.8],[.1,-7.7,4.0]]}
    ]},
  {id:'inner-folded-spur',seed:29,snow:7.9,
    outline:[[-4.5,-5.9],[-3.6,-6.75],[-1.8,-6.9],[-.3,-6.1],[.65,-5.25],[1.1,-4.15],[.75,-2.8],[-.05,-1.5],[-1.4,-1.9],[-2.6,-2.8],[-3.85,-3.9]],
    ridges:[
      {w:1.3,p:[[-3.15,-5.7,5.95],[-1.9,-5.0,5.45],[-1.25,-3.5,4.45],[-.55,-2.2,3.3]]},
      {w:.83,p:[[-3.15,-5.7,5.95],[-2.1,-6.25,5.35],[-.6,-5.5,4.55]]}
    ]},
  {id:'eastern-alpine-ridge',seed:307,snow:6.0,
    outline:[[.55,-8.65],[1.7,-10.0],[4,-10.45],[6.4,-10.0],[8.65,-8.8],[9.9,-7.6],[9.2,-6.95],[7.75,-7.78],[6.15,-7.4],[4.3,-7.75],[2.35,-6.95],[1.1,-7.4]],
    ridges:[
      {w:1.25,p:[[1.8,-9.0,5.0],[3.85,-9.5,6.65],[5.05,-9.25,5.95],[6.3,-9.0,7.8],[7.1,-8.65,6.9],[7.8,-8.25,6.3],[9.0,-7.55,4.7]]},
      {w:.90,p:[[6.3,-9.0,7.8],[5.7,-8.3,6.1],[4.75,-7.95,4.1]]},
      {w:.7,p:[[3.85,-9.5,6.5],[2.65,-8.15,5.15],[1.45,-7.65,3.65]]}
    ]},
  {id:'eastern-shore-folds',seed:401,snow:8.6,
    outline:[[10.55,-6.4],[11.4,-5.8],[12.4,-4.2],[12.85,-2.3],[12.1,-1.05],[11.25,-.55],[10.95,-1.6],[11.2,-3.5],[10.8,-5.25]],
    ridges:[
      {w:.75,p:[[11.35,-5.6,5.75],[11.8,-4.15,5.15],[12.0,-2.9,4.05],[11.6,-1.3,3.25]]}
    ]}
];

function inside(x,z,poly){let yes=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a[1]>z)!==(b[1]>z)&&x<(b[0]-a[0])*(z-a[1])/(b[1]-a[1])+a[0])yes=!yes;}return yes;}
function segDistance(x,z,a,b){const dx=b[0]-a[0],dz=b[1]-a[1],t=clamp(((x-a[0])*dx+(z-a[1])*dz)/(dx*dx+dz*dz||1),0,1);return {d:Math.hypot(x-a[0]-t*dx,z-a[1]-t*dz),t};}
function boundaryDistance(x,z,poly){let d=Infinity;for(let i=0;i<poly.length;i++)d=Math.min(d,segDistance(x,z,poly[i],poly[(i+1)%poly.length]).d);return d;}

// A compact Bowyer-Watson triangulation gives an irregular crease network.
// Exact outline edges are kept by the later containment test; the base terrain
// stays underneath tiny concave areas where no face is emitted.
function circumcircle(a,b,c){
  const d=2*(a[0]*(b[1]-c[1])+b[0]*(c[1]-a[1])+c[0]*(a[1]-b[1]));
  if(Math.abs(d)<1e-10)return {x:0,z:0,r:-1};
  const aa=a[0]*a[0]+a[1]*a[1],bb=b[0]*b[0]+b[1]*b[1],cc=c[0]*c[0]+c[1]*c[1];
  const x=(aa*(b[1]-c[1])+bb*(c[1]-a[1])+cc*(a[1]-b[1]))/d;
  const z=(aa*(c[0]-b[0])+bb*(a[0]-c[0])+cc*(b[0]-a[0]))/d;
  return {x,z,r:(x-a[0])**2+(z-a[1])**2};
}
function triangulate(input){
  const pts=input.slice(),n=pts.length;
  let minX=Infinity,minZ=Infinity,maxX=-Infinity,maxZ=-Infinity;
  for(const p of pts){minX=Math.min(minX,p[0]);maxX=Math.max(maxX,p[0]);minZ=Math.min(minZ,p[1]);maxZ=Math.max(maxZ,p[1]);}
  const m=Math.max(maxX-minX,maxZ-minZ)*12,cx=(minX+maxX)/2,cz=(minZ+maxZ)/2;
  pts.push([cx-m,cz-m],[cx,cz+m],[cx+m,cz-m]);
  let tris=[{ids:[n,n+1,n+2],circle:circumcircle(pts[n],pts[n+1],pts[n+2])}];
  for(let i=0;i<n;i++){
    const p=pts[i],bad=[],edges=new Map();
    for(let j=0;j<tris.length;j++){const c=tris[j].circle;if(c.r>=0&&(p[0]-c.x)**2+(p[1]-c.z)**2<=c.r+1e-8)bad.push(j);}
    for(const j of bad){const ids=tris[j].ids;for(let k=0;k<3;k++){const a=ids[k],b=ids[(k+1)%3],key=a<b?`${a}:${b}`:`${b}:${a}`;if(edges.has(key))edges.delete(key);else edges.set(key,[a,b]);}}
    const removed=new Set(bad);tris=tris.filter((_,j)=>!removed.has(j));
    for(const [a,b]of edges.values())tris.push({ids:[a,b,i],circle:circumcircle(pts[a],pts[b],p)});
  }
  return tris.filter(t=>t.ids.every(i=>i<n)).map(t=>t.ids);
}
function pushTri(store,a,b,c,tint){store.p.push(...a,...b,...c);for(let i=0;i<3;i++)store.c.push(tint.r,tint.g,tint.b);}
function meshFrom(store,name,parent){
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(store.p,3));geo.setAttribute('color',new THREE.Float32BufferAttribute(store.c,3));geo.computeVertexNormals();geo.computeBoundingBox();geo.computeBoundingSphere();
  const mesh=new THREE.Mesh(geo,material);mesh.name=name;mesh.castShadow=true;mesh.receiveShadow=true;mesh.userData.kind='mountain';parent.add(mesh);return mesh;
}
function normal(a,b,c){return new THREE.Vector3().subVectors(new THREE.Vector3(...b),new THREE.Vector3(...a)).cross(new THREE.Vector3().subVectors(new THREE.Vector3(...c),new THREE.Vector3(...a))).normalize();}

function ridgeElevation(x,z,massif,base){
  let best=base;
  for(const ridge of massif.ridges)for(let i=0;i<ridge.p.length-1;i++){
    const a=ridge.p[i],b=ridge.p[i+1],d=segDistance(x,z,a,b),peak=mix(a[2],b[2],d.t);
    // A linear folded flank meets the ground decisively, not a Gaussian mound.
    const falloff=Math.pow(Math.max(0,1-d.d/(ridge.w*1.62)),1.10);
    best=Math.max(best,base+(peak-base)*falloff);
  }
  return base+(best-base)*smooth(0,.72,boundaryDistance(x,z,massif.outline));
}

function sculptMassif(massif,groundHeight,rock,snow,creases,sampler){
  const poly=massif.outline,pts=[],keys=new Set(),outlineCount=poly.length;
  function add(x,z,edge=false){const key=`${x.toFixed(4)},${z.toFixed(4)}`;if(keys.has(key))return;keys.add(key);pts.push([x,z,edge]);}
  // Alternate feet and mid-edge knots create long irregular folds.
  poly.forEach(p=>add(...p,true));
  for(let i=0;i<poly.length;i++){const a=poly[i],b=poly[(i+1)%poly.length];if(Math.hypot(a[0]-b[0],a[1]-b[1])>1.5)add(mix(a[0],b[0],.47),mix(a[1],b[1],.47),true);}
  for(const ridge of massif.ridges)for(let i=0;i<ridge.p.length;i++){
    const p=ridge.p[i];if(inside(p[0],p[1],poly))add(p[0],p[1]);
    if(i<ridge.p.length-1){const b=ridge.p[i+1],dx=b[0]-p[0],dz=b[1]-p[1],len=Math.hypot(dx,dz),nx=-dz/len,nz=dx/len;
      for(const t of[.30,.67]){const x=mix(p[0],b[0],t),z=mix(p[1],b[1],t);if(inside(x,z,poly))add(x,z);
        for(const side of[-1,1])for(const width of[.45,.95]){const u=x+nx*ridge.w*width*side,v=z+nz*ridge.w*width*side;if(inside(u,v,poly)&&boundaryDistance(u,v,poly)>.14)add(u,v);}
      }
    }
  }
  // Sparse, jittered intermediate points add branching gullies, never a grid.
  const minX=Math.min(...poly.map(p=>p[0])),maxX=Math.max(...poly.map(p=>p[0])),minZ=Math.min(...poly.map(p=>p[1])),maxZ=Math.max(...poly.map(p=>p[1]));
  let seq=0;for(let z=minZ+.5;z<maxZ;z+=.82)for(let x=minX+.4;x<maxX;x+=.85){const xx=x+(hash(seq,massif.seed)-.5)*.48,zz=z+(hash(seq+971,massif.seed)-.5)*.43;seq++;if(inside(xx,zz,poly)&&boundaryDistance(xx,zz,poly)>.24&&pts.every(p=>Math.hypot(p[0]-xx,p[1]-zz)>.37))add(xx,zz);}
  const vertices=pts.map(([x,z,edge])=>{const base=groundHeight(x,z);return [x,edge?base-.018:Math.max(base-.005,ridgeElevation(x,z,massif,base)),z];});
  const tri=triangulate(pts),edges=new Map();
  let count=0;
  for(const ids0 of tri){
    const pp=ids0.map(i=>pts[i]),center=[pp.reduce((a,p)=>a+p[0],0)/3,pp.reduce((a,p)=>a+p[1],0)/3];
    if(!inside(...center,poly))continue;
    if(pp.some((p,i)=>{const q=pp[(i+1)%3];const x=mix(p[0],q[0],.5),z=mix(p[1],q[1],.5);return !inside(x,z,poly)&&boundaryDistance(x,z,poly)>.035;}))continue;
    let ids=ids0.slice(),a=vertices[ids[0]],b=vertices[ids[1]],c=vertices[ids[2]],n=normal(a,b,c);
    if(n.y<0){[ids[1],ids[2]]=[ids[2],ids[1]];b=vertices[ids[1]];c=vertices[ids[2]];n=normal(a,b,c);}
    const height=(a[1]+b[1]+c[1])/3,lightFace=clamp(.45-n.x*.32+n.z*.19,0,1);
    // Neighbouring planes share a mineral colour family. Random colour per
    // triangle would make a mosaic and erase the long coherent ridge folds.
    const tint=color('#b0b88c').clone();
    const grain=.5+.5*Math.sin(center[0]*.52+center[1]*.24+massif.seed*.02);
    tint.lerp(color('#cdcca1'),smooth(.35,.8,lightFace)*.43);
    tint.lerp(color('#7e9271'),smooth(.58,.16,lightFace)*.30);
    tint.lerp(color('#c9bd92'),grain*.15);
    tint.multiplyScalar(.99+hash(count,massif.seed)*.02);
    if(massif.id==='inner-folded-spur')tint.lerp(color('#c8c79b'),.10);
    const roseBand=Math.sin(center[0]*.67-center[1]*.35+massif.seed*.075);
    if(roseBand>.91&&height<5.9)tint.lerp(color('#d3b49c'),.30);
    pushTri(rock,a,b,c,tint);sampler.push({a,b,c,minX:Math.min(a[0],b[0],c[0]),maxX:Math.max(a[0],b[0],c[0]),minZ:Math.min(a[2],b[2],c[2]),maxZ:Math.max(a[2],b[2],c[2])});count++;
    for(let k=0;k<3;k++){const i=ids[k],j=ids[(k+1)%3],key=i<j?`${i}:${j}`:`${j}:${i}`;if(edges.has(key))edges.get(key).push(n);else edges.set(key,[n]);}

    // Jagged snow fingers are separately thickened paper, clipped exactly to
    // the same sloping planes instead of painted horizontal white triangles.
    const summit=massif.ridges.flatMap(r=>r.p).reduce((best,p)=>p[2]>best[2]?p:best);
    const snowLine=v=>{
      const angle=Math.atan2(v[2]-summit[1],v[0]-summit[0]);
      const finger=Math.pow(Math.max(0,Math.cos(angle*5+massif.seed*.13)),8);
      return massif.snow+.25*Math.sin(v[0]*2.7+v[2]*1.2)+.12*Math.sin(v[0]*4.1-v[2]*2.9)-finger*.85;
    };
    let clipped=[];for(let k=0;k<3;k++){
      const v=[a,b,c][k],w=[a,b,c][(k+1)%3],dv=v[1]-snowLine(v),dw=w[1]-snowLine(w);
      if(dv>=0)clipped.push(v);
      if((dv>=0)!==(dw>=0)){const t=dv/(dv-dw);clipped.push(v.map((q,j)=>mix(q,w[j],t)));}
    }
    if(clipped.length>=3){
      const offset=v=>v.map((q,j)=>q+n.getComponent(j)*.028),front=clipped.map(offset),snowTint=color(snowPalette[Math.floor(hash(count,massif.seed+55)*snowPalette.length)]).clone();
      snowTint.lerp(color('#e9e6ce'),(1-lightFace)*.16);
      for(let i=1;i<front.length-1;i++)pushTri(snow,front[0],front[i],front[i+1],snowTint);
      for(let i=0;i<front.length;i++){const j=(i+1)%front.length;pushTri(snow,front[i],clipped[i],clipped[j],color('#d4c6ae'));pushTri(snow,front[i],clipped[j],front[j],color('#e4d8bf'));}
    }
  }
  // A handful of high creases have a visible warm cut-paper edge, keeping the
  // effect local instead of outlining every triangle like a wireframe.
  for(const ridge of massif.ridges)for(let i=0;i<ridge.p.length-1;i++){
    const a=ridge.p[i],b=ridge.p[i+1];if(Math.max(a[2],b[2])>massif.snow-.2)continue;
    const dx=b[0]-a[0],dz=b[1]-a[1],len=Math.hypot(dx,dz),nx=-dz/len*.018,nz=dx/len*.018;
    const ay=ridgeElevation(a[0],a[1],massif,groundHeight(a[0],a[1]))+.028,by=ridgeElevation(b[0],b[1],massif,groundHeight(b[0],b[1]))+.028;
    pushTri(creases,[a[0]-nx,ay,a[1]-nz],[b[0]-nx,by,b[1]-nz],[b[0]+nx,by+.018,b[1]+nz],color('#d9d5ae'));
    pushTri(creases,[a[0]-nx,ay,a[1]-nz],[b[0]+nx,by+.018,b[1]+nz],[a[0]+nx,ay+.018,a[1]+nz],color('#d9d5ae'));
  }
  return {id:massif.id,vertices:vertices.length,faces:count};
}

function heightFromTriangle(x,z,t){
  const a=t.a,b=t.b,c=t.c,den=(b[2]-c[2])*(a[0]-c[0])+(c[0]-b[0])*(a[2]-c[2]);
  if(Math.abs(den)<1e-9)return -Infinity;
  const u=((b[2]-c[2])*(x-c[0])+(c[0]-b[0])*(z-c[2]))/den,v=((c[2]-a[2])*(x-c[0])+(a[0]-c[0])*(z-c[2]))/den,w=1-u-v;
  return u>=-1e-6&&v>=-1e-6&&w>=-1e-6?u*a[1]+v*b[1]+w*c[1]:-Infinity;
}

function cloudOutline(){
  const shape=new THREE.Shape();shape.moveTo(-1.7,0);
  shape.bezierCurveTo(-1.64,.18,-1.48,.28,-1.22,.27);
  shape.bezierCurveTo(-1.18,.48,-.92,.59,-.68,.48);
  shape.bezierCurveTo(-.48,.78,-.13,.81,.13,.59);
  shape.bezierCurveTo(.36,.77,.68,.64,.75,.43);
  shape.bezierCurveTo(.99,.52,1.24,.38,1.25,.22);
  shape.bezierCurveTo(1.52,.24,1.73,.11,1.67,-.025);
  shape.bezierCurveTo(1.36,-.15,1.08,-.14,.80,-.10);
  shape.bezierCurveTo(.56,-.22,.22,-.21,-.02,-.13);
  shape.bezierCurveTo(-.34,-.20,-.58,-.12,-.84,-.10);
  shape.bezierCurveTo(-1.14,-.18,-1.5,-.12,-1.7,0);shape.closePath();
  return shape.getPoints(5).slice(0,-1);
}
function foldedCloud(seed){
  const group=new THREE.Group();group.name=`layered-paper-cloud-${seed}`;group.userData.kind='cloud';
  const outline=cloudOutline();
  for(let layer=0;layer<4;layer++){
    const store={p:[],c:[]},s=1-layer*.145,cy=.045+layer*.085,cz=layer*.055,shift=layer%2?.08:-.06;
    const edge=outline.map((p,i)=>[p.x*s+shift,p.y*s+cy,cz+.014*Math.sin(i*.88+seed)]),front=[shift,.20+layer*.08,cz+.105],back=[shift,.20+layer*.08,cz-.022];
    for(let i=0;i<edge.length;i++){
      const a=edge[i],b=edge[(i+1)%edge.length],aa=[a[0],a[1],a[2]-.025],bb=[b[0],b[1],b[2]-.025];
      const tint=color(layer%2?'#fff2de':'#f7e6cd').clone().lerp(color('#eed3ae'),.06+.035*Math.sin(i*.54));
      pushTri(store,front,a,b,tint);pushTri(store,back,bb,aa,color('#edddc3'));
      pushTri(store,a,aa,bb,color('#d8bd97'));pushTri(store,a,bb,b,color('#e4c9a5'));
    }
    const mesh=meshFrom(store,`cloud-${seed}-paper-layer-${layer}`,group);mesh.userData.kind='cloud';
    // Clouds have deliberately authored ivory lighting. Their thin nearly
    // horizontal faces otherwise turn grey in the CPU renderer at this angle.
    mesh.material=cloudMaterial;mesh.castShadow=false;mesh.receiveShadow=false;mesh.userData.bakeSkip=true;
  }
  return group;
}

/** Build the static sculpture, plus a sampled height for tree roots/camera. */
export function buildMountainSculptureV4({groundHeight}){
  const group=new THREE.Group();group.name='hand-folded-alpine-ridges-and-clouds';
  const rock={p:[],c:[]},snow={p:[],c:[]},creases={p:[],c:[]},triangles=[];
  const massifs=MASSIFS.map(m=>sculptMassif(m,groundHeight,rock,snow,creases,triangles));
  const mountainMeshes=[meshFrom(rock,'five-connected-alpine-paper-massifs',group),meshFrom(snow,'separate-ivory-snow-papers',group),meshFrom(creases,'warm-mountain-fold-edges',group)];
  const clouds=[
    {position:[-6.25,10.15,-10.2],scale:.66,rotation:-.18,seed:1},
    {position:[1.35,8.6,-9.2],scale:.80,rotation:.12,seed:2},
    {position:[10.85,7.25,-5.7],scale:.54,rotation:.24,seed:3},
  ].map(({position,scale,rotation,seed})=>{const cloud=foldedCloud(seed);cloud.position.set(...position);cloud.scale.setScalar(scale);cloud.scale.y*=1.36;cloud.rotation.y=rotation;group.add(cloud);return cloud;});
  // Bucketed triangle queries stay cheap during deterministic tree placement.
  const buckets=new Map(),step=.9;
  for(const triangle of triangles)for(let z=Math.floor(triangle.minZ/step);z<=Math.floor(triangle.maxZ/step);z++)for(let x=Math.floor(triangle.minX/step);x<=Math.floor(triangle.maxX/step);x++){
    const key=`${x},${z}`;if(!buckets.has(key))buckets.set(key,[]);buckets.get(key).push(triangle);
  }
  const surfaceHeight=(x,z)=>{let h=-Infinity;const list=buckets.get(`${Math.floor(x/step)},${Math.floor(z/step)}`)||[];for(const t of list){if(x<t.minX||x>t.maxX||z<t.minZ||z>t.maxZ)continue;h=Math.max(h,heightFromTriangle(x,z,t));}return h;};
  let allTriangles=0;group.traverse(m=>{if(m.isMesh)allTriangles+=m.geometry.attributes.position.count/3;});
  return {group,clouds,mountainMeshes,surfaceHeight,metadata:{massifs,clouds:clouds.length,triangles:allTriangles}};
}
