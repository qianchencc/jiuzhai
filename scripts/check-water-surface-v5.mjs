import * as THREE from 'three';
import {buildLandscapeV2} from '../src/landscape-v2.js';
import {createWaterSurfaceIndex,clippedRippleTriangles} from '../src/water-surface-v5.js';
import {createPaperEffects} from '../src/paper-effects-v2.js';
import {writeFileSync} from 'node:fs';
const reportPath=process.argv.find(arg=>arg.startsWith('--out='))?.slice(6)||new URL('../docs/water-surface-validation-v5.json',import.meta.url);
const land=buildLandscapeV2(),lakes=land.waterMeshes.filter(m=>!m.userData.falls),scene=new THREE.Scene();
function polygonDistance(point,poly){let inside=false,distance=Infinity;const[x,z]=point;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j],dx=b[0]-a[0],dz=b[1]-a[1],t=Math.max(0,Math.min(1,((x-a[0])*dx+(z-a[1])*dz)/(dx*dx+dz*dz)));distance=Math.min(distance,Math.hypot(x-a[0]-dx*t,z-a[1]-dz*t));if((a[1]>z)!==(b[1]>z)&&x<(b[0]-a[0])*(z-a[1])/(b[1]-a[1])+a[0])inside=!inside;}return inside?distance:-distance;}
let totalCases=0,totalTriangles=0,maxTriangles=0,escapes=0,worstOutside=0;const basins=[];const start=performance.now();
for(const lake of lakes){const s=createWaterSurfaceIndex(lake),poly=lake.userData.surfaceContour;if(!poly)throw new Error('Missing precise visible shoreline');let cases=0,max=0,basinEscapes=0;
const centers=[];
for(let i=0;i<poly.length;i+=3){const a=poly[i],b=poly[(i+1)%poly.length];centers.push(a,[(a[0]+b[0])*.5,(a[1]+b[1])*.5]);}
centers.push([(s.x0+s.x1)/2,(s.z0+s.z1)/2]);
for(const center of centers)for(const radius of [.065,.2,.5,.85,1.185,1.6])for(const halfWidth of [.008,.045]){const out=clippedRippleTriangles(s,center,radius,halfWidth);cases++;max=Math.max(max,out.length);totalTriangles+=out.length;
for(const tri of out){const samples=[...tri,[(tri[0][0]+tri[1][0]+tri[2][0])/3,(tri[0][1]+tri[1][1]+tri[2][1])/3],[(tri[0][0]+tri[1][0])*.5,(tri[0][1]+tri[1][1])*.5],[(tri[1][0]+tri[2][0])*.5,(tri[1][1]+tri[2][1])*.5],[(tri[2][0]+tri[0][0])*.5,(tri[2][1]+tri[0][1])*.5]];
 for(const p of samples){const d=polygonDistance(p,poly);if(d < -2e-6){escapes++;basinEscapes++;worstOutside=Math.min(worstOutside,d);}}
}}
totalCases+=cases;maxTriangles=Math.max(maxTriangles,max);basins.push({id:s.id,contour:poly.length,maskTriangles:s.triangles.length,...s.maskStats,cases,maxTriangles:max,escapes:basinEscapes});}
const effects=createPaperEffects(scene,{landscape:land}),times=[];let maxYError=0,bufferEscapes=0;
for(const lake of lakes){const s=createWaterSurfaceIndex(lake),tr=s.triangles[Math.floor(s.triangles.length*.5)],point=new THREE.Vector3((tr[0][0]+tr[1][0]+tr[2][0])/3,s.y,(tr[0][1]+tr[1][1]+tr[2][1])/3);if(!effects.ripple(point,lake))throw new Error('Valid water hit rejected');
for(let frame=0;frame<40;frame++){const t=performance.now();effects.update(.0625);times.push(performance.now()-t);scene.traverse(m=>{if(!m.isMesh||!m.userData.waterEffect||!m.visible||!m.parent.visible)return;const owned=lakes.find(l=>l.userData.basin===m.userData.surface),y=owned.geometry.attributes.position.getY(0)+.005,a=m.geometry.attributes.position;for(let i=0;i<(m.userData.visibleTriangles||0)*3;i++){maxYError=Math.max(maxYError,Math.abs(a.getY(i)-y));if(polygonDistance([a.getX(i),a.getZ(i)],owned.userData.surfaceContour)<-2e-6)bufferEscapes++;}});}}
const invalidFall=effects.ripple(new THREE.Vector3(),land.waterMeshes.find(m=>m.userData.falls));
times.sort((a,b)=>a-b);const report={basins,totalCases,totalTriangles,maxTriangles,capacity:1024,escapes,worstOutside,bufferEscapes,maxYError,invalidFallAccepted:invalidFall,updateMsMedian:times[Math.floor(times.length/2)],updateMsP95:times[Math.floor(times.length*.95)],durationMs:performance.now()-start};writeFileSync(reportPath,JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));if(escapes||bufferEscapes||maxTriangles>1024||invalidFall||maxYError>1e-5)process.exit(1);
