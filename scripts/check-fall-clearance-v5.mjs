import fs from 'node:fs/promises';
import * as THREE from 'three';
import { buildLandscapeV2 } from '../src/landscape-v2.js';
import { createScenePicker } from '../src/scene-picking-v3.js';
import { updateWaterfallVeil } from '../src/water-sculpture-v4.js';

// Check the actual triangulated cliff against the actual moving water mesh.
// An analytic ground sampler is not sufficient: interpolated coarse triangles
// previously pierced the thin veil even though its sampler was below water.
const world=buildLandscapeV2();
const terrain=world.group.getObjectByName('one-continuous-folded-valley');
const picker=createScenePicker(terrain);
const ray=new THREE.Ray(new THREE.Vector3(),new THREE.Vector3(0,-1,0));
const phases=[0,.23,.71,1.3,2.1,3.7,5.2,8.1];
const reports=[];
for(const mesh of world.waterMeshes.filter(m=>m.userData.falls)){
  let samples=0,penetrations=0,maximumTerrainAboveWater=-Infinity;
  const geometry=mesh.geometry,index=geometry.index,positions=geometry.attributes.position;
  const test=(x,y,z)=>{
    ray.origin.set(x,30,z);const hit=picker.pick(ray);if(!hit)return;
    const excess=hit.point.y-y;samples++;
    maximumTerrainAboveWater=Math.max(maximumTerrainAboveWater,excess);
    if(excess>1e-5)penetrations++;
  };
  for(const phase of phases){
    updateWaterfallVeil(mesh,phase);
    for(let i=0;i<positions.count;i++)test(positions.getX(i),positions.getY(i),positions.getZ(i));
    for(let i=0;i<index.count;i+=3){
      const ids=[index.getX(i),index.getX(i+1),index.getX(i+2)];
      test(ids.reduce((n,id)=>n+positions.getX(id),0)/3,ids.reduce((n,id)=>n+positions.getY(id),0)/3,ids.reduce((n,id)=>n+positions.getZ(id),0)/3);
      for(let k=0;k<3;k++){
        const a=ids[k],b=ids[(k+1)%3];
        test((positions.getX(a)+positions.getX(b))*.5,(positions.getY(a)+positions.getY(b))*.5,(positions.getZ(a)+positions.getZ(b))*.5);
      }
    }
  }
  reports.push({name:mesh.name,samples,phases:phases.length,penetrations,minimumActualClearance:-maximumTerrainAboveWater});
}
const report={method:'Actual triangle vertices, edge midpoints and centroids against triangulated terrain',reports,
  samples:reports.reduce((n,r)=>n+r.samples,0),penetrations:reports.reduce((n,r)=>n+r.penetrations,0)};
const reportPath=process.argv.find(arg=>arg.startsWith('--out='))?.slice(6)||new URL('../docs/fall-clearance-validation-v5.json',import.meta.url);
await fs.writeFile(reportPath,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
if(report.penetrations)process.exit(1);
