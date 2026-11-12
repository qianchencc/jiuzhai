import * as THREE from 'three';
import {buildLandscapeV2} from '../src/landscape-v2.js';
import {createSceneAtmosphere} from '../src/scene-atmosphere-v3.js';
import {createWaterSurfaceIndex} from '../src/water-surface-v5.js';
import {fallSurfacePoint,fallSurfaceNormal} from '../src/water-sculpture-v4.js';
import {writeFileSync} from 'node:fs';
const start=performance.now(),landscape=buildLandscapeV2(),scene=new THREE.Scene();scene.add(landscape.group);
const atmosphere=createSceneAtmosphere({scene,landscape,software:true});
const basins=landscape.waterMeshes.filter(m=>!m.userData.falls).map(createWaterSurfaceIndex);
const falls=landscape.waterMeshes.filter(m=>m.userData.falls);
let previous=falls.map(m=>Float32Array.from(m.geometry.attributes.position.array));
let bad=0,escape=0,changed=0,totalSamples=0,maxUpdate=0,minNormal=1,maxRunout=0,updates=[],use={};
for(const mesh of falls){const f=mesh.userData.flowSurface;for(let i=0;i<=64;i++){let y=Infinity;for(let j=0;j<=64;j++){const p=fallSurfacePoint(f,i/64,j/64),n=fallSurfaceNormal(f,i/64,j/64);if(p[1]>y+1e-8)bad++;y=p[1];if(![...p,...n].every(Number.isFinite))bad++;minNormal=Math.min(minNormal,n[1],n[2]);}if(f.runout){const x=f.x+(i/64-.5)*f.width;maxRunout=Math.max(maxRunout,fallSurfacePoint(f,i/64,1)[2]-(f.z+f.curve*Math.sin(x*1.7)+.026+f.depth));}}}
for(let n=0;n<=720;n++){
  try{const before=performance.now();atmosphere.update(n*.125,.125);const duration=performance.now()-before;maxUpdate=Math.max(maxUpdate,duration);updates.push(duration);}catch(error){console.error({time:n*.125});throw error;}
  atmosphere.group.traverse(m=>{if(!m.isMesh)return;const a=m.geometry.attributes.position.array;for(let i=0;i<a.length;i++)if(!Number.isFinite(a[i]))bad++;
    if(m.name.startsWith('lake-breath-')||m.name.startsWith('aerated-outflow-')){let count=0;const id=m.name.startsWith('lake-breath-')?m.name.slice(12):({pearl:'mirror',nuorilang:'shuzheng-upper','shuzheng-one':'shuzheng-middle','shuzheng-two':'shuzheng-lower'})[m.name.slice(16)];const basin=basins.find(b=>b.id===id);if(!basin)throw new Error(id);for(let i=0;i<a.length;i+=9){const ar=Math.abs((a[i+3]-a[i])*(a[i+8]-a[i+2])-(a[i+5]-a[i+2])*(a[i+6]-a[i]));if(ar<1e-10)continue;totalSamples++;count++;const x=(a[i]+a[i+3]+a[i+6])/3,z=(a[i+2]+a[i+5]+a[i+8])/3;if(!basin.contains(x,z))escape++;if(Math.abs(a[i+1]-basin.y)>.0101)escape++;}use[m.name]=Math.max(use[m.name]||0,count);}
  });
}
falls.forEach((m,n)=>{const a=m.geometry.attributes.position.array;for(let i=0;i<a.length;i++)if(Math.abs(a[i]-previous[n][i])>1e-6)changed++;});
updates.sort((a,b)=>a-b);
const report={buildAndSamplesMs:performance.now()-start,metadata:atmosphere.metadata,veilVertices:falls.reduce((n,m)=>n+m.geometry.attributes.position.count,0),bad,escape,totalSamples,changed,maxUpdate,medianUpdate:updates[Math.floor(updates.length/2)],minNormal,maxRunout,use};
const reportPath=process.argv.find(arg=>arg.startsWith('--out='))?.slice(6);
if(reportPath)writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
if(bad||escape||!changed)process.exit(1);
