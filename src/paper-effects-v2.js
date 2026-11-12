import * as THREE from 'three';
import { createWaterSurfaceIndex, clippedRippleTriangles } from './water-surface-v5.js';

const mix=THREE.MathUtils.lerp;
const clamp=THREE.MathUtils.clamp;

export function createPaperSun(){
  const group=new THREE.Group();group.name='a-handful-of-daylight';
  const disk=new THREE.Mesh(new THREE.CylinderGeometry(.77,.77,.045,48),new THREE.MeshBasicMaterial({color:'#dca96c',side:THREE.DoubleSide}));
  disk.rotation.x=Math.PI/2;group.add(disk);
  const half=new THREE.Shape();half.moveTo(0,.69);half.absarc(0,0,.69,Math.PI/2,Math.PI*1.5,false);half.lineTo(0,.69);
  const fold=new THREE.Mesh(new THREE.ShapeGeometry(half),new THREE.MeshBasicMaterial({color:'#edc08a',side:THREE.DoubleSide}));fold.position.z=.026;group.add(fold);
  group.position.set(6.7,12,-9.4);group.userData.sun=true;
  return {group,disk,fold};
}

// Preallocated effects keep scene topology fixed and let the CPU fallback use
// the same geometry. Continuous ambient movement is supplied by scene-atmosphere-v3.
export function createPaperEffects(scene,{landscape,reducedMotion=false}={}){
  const surfaces=new Map(),ripples=[],capacity=1024;
  for(const lake of landscape?.waterMeshes||[])if(!lake.userData.falls)surfaces.set(lake,createWaterSurfaceIndex(lake));
  // Two wave fronts, each with a very quiet broad edge and a narrow crest.
  // The full buffer exists before software-renderer compilation. Unused
  // triangles collapse to one point; no draw-range or topology changes occur.
  for(let i=0;i<2;i++){
    const group=new THREE.Group();group.name=`water-touch-${i}`;group.visible=false;scene.add(group);
    const rings=[];
    for(let j=0;j<2;j++){
      const layers=[];
      for(let k=0;k<2;k++){
        const geometry=new THREE.BufferGeometry(),attribute=new THREE.Float32BufferAttribute(new Float32Array(capacity*9),3);
        attribute.setUsage(THREE.DynamicDrawUsage);geometry.setAttribute('position',attribute);
        const material=new THREE.MeshBasicMaterial({color:k?'#dcf2df':'#b9e4d6',transparent:true,opacity:0,
          side:THREE.DoubleSide,depthTest:true,depthWrite:false,toneMapped:false});
        const mesh=new THREE.Mesh(geometry,material);mesh.name=`water-touch-${i}-front-${j}-${k?'crest':'soft-edge'}`;
        mesh.frustumCulled=false;mesh.userData={waterEffect:true,atmosphere:true};group.add(mesh);
        layers.push({mesh,attribute,array:attribute.array,triangles:0});
      }
      rings.push({layers,delay:j*.29});
    }
    ripples.push({group,rings,age:99,life:reducedMotion?.72:2.25,point:new THREE.Vector3(),surface:null});
  }
  const leafShape=new THREE.Shape();leafShape.moveTo(0,-.105);leafShape.quadraticCurveTo(-.09,-.02,0,.105);leafShape.quadraticCurveTo(.09,.02,0,-.105);
  const geo=new THREE.ShapeGeometry(leafShape),leaves=[];
  const palette=['#d1a36b','#c9866c','#e0bd82','#9ea88c'];
  for(let i=0;i<26;i++){
    const mesh=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({color:palette[i%palette.length],side:THREE.DoubleSide,roughness:1}));mesh.visible=false;scene.add(mesh);
    leaves.push({mesh,age:99,origin:new THREE.Vector3(),seed:i*1.618});
  }
  let ringIndex=0;
  return {
    ripple(point,lake){
      if(!lake?.userData.water||lake.userData.falls)return false;
      let surface=surfaces.get(lake);
      if(!surface){surface=createWaterSurfaceIndex(lake);surfaces.set(lake,surface);}
      if(!surface.contains(point.x,point.z))return false;
      const r=ripples[ringIndex++%ripples.length];r.point.copy(point);r.surface=surface;r.group.visible=true;r.age=0;
      return true;
    },
    wind(point){leaves.forEach((l,i)=>{l.origin.copy(point).add(new THREE.Vector3(Math.sin(i*2.1)*1.1,.2+(i%5)*.24,Math.cos(i*1.7)*.8));l.age=-i*.027;l.mesh.visible=true;});},
    update(dt){let active=false;
      for(const r of ripples){if(r.age>=r.life||!r.surface)continue;active=true;r.age+=Math.max(0,dt);
        for(let j=0;j<r.rings.length;j++){
          const ring=r.rings[j],elapsed=r.age-ring.delay,span=r.life-ring.delay;
          const a=clamp(elapsed/span,0,1),fade=Math.min(1,a/.12)*Math.pow(1-a,1.3);
          const radius=reducedMotion?.16:.065+a*1.12,halfWidth=reducedMotion?.011:.008+.008*a;
          for(let k=0;k<ring.layers.length;k++){
            const layer=ring.layers[k];layer.mesh.visible=elapsed>0&&a<1&&(!reducedMotion||j===0);
            if(!layer.mesh.visible)continue;
            const triangles=clippedRippleTriangles(r.surface,r.point,radius,halfWidth*(k?1:2.8));
            // Capacity is validated against every actual basin, including its
            // concave corners. Clipping is retained even if a future much more
            // complex shoreline needs a larger buffer.
            layer.triangles=Math.min(capacity,triangles.length);
            let offset=0;const y=r.surface.y+.005;
            for(let t=0;t<layer.triangles;t++)for(const p of triangles[t]){
              layer.array[offset++]=p[0];layer.array[offset++]=y;layer.array[offset++]=p[1];
            }
            for(;offset<layer.array.length;offset+=3){layer.array[offset]=r.point.x;layer.array[offset+1]=y;layer.array[offset+2]=r.point.z;}
            layer.mesh.material.opacity=(k?.22:.045)*fade*(j?.72:1);
            layer.mesh.userData.surface=r.surface.id;layer.mesh.userData.visibleTriangles=layer.triangles;
            layer.attribute.needsUpdate=true;
          }
        }
        if(r.age>=r.life)r.group.visible=false;
      }
      for(const l of leaves){if(l.age>3.6)continue;active=true;l.age+=dt;const a=Math.max(0,l.age);l.mesh.visible=l.age>=0&&a<3.6;l.mesh.position.copy(l.origin).add(new THREE.Vector3(a*.58+Math.sin(a*2.5+l.seed)*.3,Math.sin(a/3.6*Math.PI)*.7-a*.25,Math.cos(a*1.6+l.seed)*.38));l.mesh.rotation.set(a*2.4+l.seed,a*1.6,l.seed+a*2);l.mesh.scale.setScalar(Math.min(1,Math.max(0,(3.6-a)*2)));}
      return active;
    }
  };
}

export function addPaperMaterials(group,wind){
  const mats=new Set();
  group.traverse(m=>{if(!m.isMesh)return;for(const mat of Array.isArray(m.material)?m.material:[m.material]){
    if(mats.has(mat)||!mat.isMeshStandardMaterial)continue;mats.add(mat);
    const foliage=Boolean(m.geometry.attributes.windWeight);
    mat.onBeforeCompile=shader=>{
      shader.uniforms.uPaperTime=wind.time;shader.uniforms.uWindCenter=wind.center;shader.uniforms.uWindForce=wind.force;
      shader.vertexShader=shader.vertexShader.replace('#include <common>',`#include <common>\nvarying vec3 vPaperPosition;\n${foliage?'attribute float windWeight;\nuniform float uPaperTime;\nuniform vec3 uWindCenter;\nuniform float uWindForce;':''}`);
      shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>\nvPaperPosition=transformed;\n${foliage?'float reach=exp(-distance(transformed.xz,uWindCenter.xz)*.5);\nfloat breeze=sin(uPaperTime*.74+transformed.x*.35+transformed.z*.21)*.075+sin(uPaperTime*1.18+transformed.z*.7)*.022;\ntransformed.x+=(breeze+sin(uPaperTime*3.+transformed.z*1.4)*uWindForce*reach*.16)*windWeight;\ntransformed.z+=(cos(uPaperTime*.61+transformed.x*.27)*.034+cos(uPaperTime*2.3+transformed.x)*uWindForce*reach*.08)*windWeight;':''}`);
      shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 vPaperPosition;\nfloat paperFiber(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453123);}');
      shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\nfloat fiber=paperFiber(floor(vPaperPosition*210.));\ndiffuseColor.rgb*=.978+.044*fiber;');
    };
    mat.customProgramCacheKey=()=>`paper-fiber-v3-${foliage}`;
  }});
}

// Photo leaves are actual planes and frames set beside the path. The browser
// fallback projects the image itself into the matching quadrilateral.
export function createMemoryLeaves(scene,landscape,stops,software,depthRenderer=null){
  const records=new Map(),overlays=document.getElementById('photo-overlays');
  const cream=new THREE.MeshStandardMaterial({color:'#f9eed8',roughness:1,side:THREE.DoubleSide});
  const clipmat=new THREE.MeshStandardMaterial({color:'#a78c66',roughness:1});
  for(const stop of stops){
    const p=landscape.stopProgress[stop.id],idx=Math.round(p*(landscape.route.length-1)),at=landscape.route[idx].clone();
    const next=landscape.route[Math.min(idx+3,landscape.route.length-1)],direction=next.clone().sub(at).normalize(),normal=new THREE.Vector3(direction.z,0,-direction.x);
    at.addScaledVector(normal,.55);at.y=landscape.groundHeight(at.x,at.z)+.62;
    const group=new THREE.Group();group.position.copy(at);group.rotation.y=Math.atan2(normal.x,normal.z);group.rotation.z=-.06;group.visible=false;group.userData.memoryId=stop.id;scene.add(group);
    const frame=new THREE.Mesh(new THREE.BoxGeometry(.88,1.02,.024),cream);frame.castShadow=true;frame.receiveShadow=true;group.add(frame);
    const picture=new THREE.Mesh(new THREE.PlaneGeometry(.75,.70),new THREE.MeshBasicMaterial({color:'#fffaf0',side:THREE.DoubleSide}));picture.position.set(0,.065,.016);group.add(picture);
    const clip=new THREE.Mesh(new THREE.BoxGeometry(.07,.12,.055),clipmat);clip.position.set(0,.48,.022);group.add(clip);
    const pole=new THREE.Mesh(new THREE.BoxGeometry(.025,.62,.025),clipmat);pole.position.set(0,-.7,-.02);group.add(pole);
    const label=document.createElement('div');label.className='photo-leaf';label.hidden=true;label.style.cssText='position:absolute;left:0;top:0;width:240px;height:224px;transform-origin:0 0;backface-visibility:hidden;overflow:hidden;pointer-events:none;';
    const img=document.createElement('img');img.style.cssText='width:100%;height:100%;object-fit:cover;display:block;';label.append(img);overlays.append(label);
    records.set(stop.id,{group,picture,label,img,memory:null,corners:[[-.375,.415,.018],[.375,.415,.018],[-.375,-.285,.018],[.375,-.285,.018]].map(v=>new THREE.Vector3(...v))});
  }
  async function set(id,memory){const r=records.get(id);if(!r)return;const revision=(r.revision||0)+1;r.revision=revision;r.memory=memory;r.group.visible=Boolean(memory&&(memory.photo||memory.text));r.label.hidden=true;if(!r.group.visible)return;
    const canvas=document.createElement('canvas');canvas.width=600;canvas.height=560;const ctx=canvas.getContext('2d');ctx.fillStyle='#f4e9d1';ctx.fillRect(0,0,600,560);
    if(memory.photo){const img=new Image();img.src=memory.photo;await img.decode();if(r.revision!==revision)return;const scale=Math.max(600/img.width,560/img.height);ctx.drawImage(img,(600-img.width*scale)/2,(560-img.height*scale)/2,img.width*scale,img.height*scale);}
    else{ctx.fillStyle='#5a6251';ctx.font='28px Georgia, "Songti SC", serif';const chars=[...memory.text];let x=55,y=110;for(let i=0;i<Math.min(chars.length,84);i++){ctx.fillText(chars[i],x,y);x+=31;if(x>530){x=55;y+=48;}}if(memory.date){ctx.font='19px Georgia';ctx.fillStyle='#9a7860';ctx.fillText(memory.date,55,510);}}
    const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;r.picture.material.map?.dispose();r.picture.material.map=texture;r.picture.material.needsUpdate=true;r.img.src=canvas.toDataURL('image/jpeg',.9);
  }
  function update(camera,width,height){
    if(!software)return;
    for(const r of records.values()){
      if(!r.group.visible){r.label.hidden=true;continue;}
      r.group.updateWorldMatrix(true,false);
      const worldCorners=r.corners.map(v=>v.clone().applyMatrix4(r.group.matrixWorld));
      if(depthRenderer?.isWorldPointVisible){const center=new THREE.Vector3(0,.065,.019).applyMatrix4(r.group.matrixWorld);const cornersVisible=worldCorners.filter(p=>depthRenderer.isWorldPointVisible(p,camera)).length;if(!depthRenderer.isWorldPointVisible(center,camera)||cornersVisible<3){r.label.hidden=true;continue;}}
      const points=worldCorners.map(v=>v.project(camera));
      if(points.some(p=>p.z>1||p.z< -1)){r.label.hidden=true;continue;}
      const [a,b,c,d]=points.map(p=>({x:(p.x*.5+.5)*width,y:(-.5*p.y+.5)*height}));
      if((b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x)<0){r.label.hidden=true;continue;}
      const dx1=b.x-d.x,dx2=c.x-d.x,dx3=a.x-b.x-c.x+d.x,dy1=b.y-d.y,dy2=c.y-d.y,dy3=a.y-b.y-c.y+d.y,det=dx1*dy2-dx2*dy1;
      const g=Math.abs(det)>1e-8?(dx3*dy2-dx2*dy3)/det:0,h=Math.abs(det)>1e-8?(dx1*dy3-dx3*dy1)/det:0;
      const aa=b.x-a.x+g*b.x,bb=c.x-a.x+h*c.x,dd=b.y-a.y+g*b.y,ee=c.y-a.y+h*c.y;
      r.label.style.transform=`matrix3d(${aa/240},${dd/240},0,${g/240},${bb/224},${ee/224},0,${h/224},0,0,1,0,${a.x},${a.y},0,1)`;r.label.hidden=false;
    }
  }
  function drawPhotoTriangle(ctx,img,source,dest){
    const [s0,s1,s2]=source,[d0,d1,d2]=dest,det=(s1.x-s0.x)*(s2.y-s0.y)-(s2.x-s0.x)*(s1.y-s0.y);if(Math.abs(det)<1e-8)return;
    const a=((d1.x-d0.x)*(s2.y-s0.y)-(d2.x-d0.x)*(s1.y-s0.y))/det;
    const b=((d1.y-d0.y)*(s2.y-s0.y)-(d2.y-d0.y)*(s1.y-s0.y))/det;
    const c=((s1.x-s0.x)*(d2.x-d0.x)-(s2.x-s0.x)*(d1.x-d0.x))/det;
    const d=((s1.x-s0.x)*(d2.y-d0.y)-(s2.x-s0.x)*(d1.y-d0.y))/det;
    ctx.save();ctx.beginPath();ctx.moveTo(d0.x,d0.y);ctx.lineTo(d1.x,d1.y);ctx.lineTo(d2.x,d2.y);ctx.closePath();ctx.clip();ctx.transform(a,b,c,d,d0.x-a*s0.x-c*s0.y,d0.y-b*s0.x-d*s0.y);ctx.drawImage(img,0,0);ctx.restore();
  }
  function drawToPostcard(ctx,camera,width,height,scale,offsetX,offsetY){
    if(!software)return;
    for(const r of records.values()){
      if(!r.group.visible||r.label.hidden||!r.img.complete)continue;
      const p=r.corners.map(v=>v.clone().applyMatrix4(r.group.matrixWorld).project(camera)).map(v=>({x:offsetX+(v.x*.5+.5)*width*scale,y:offsetY+(1-v.y)*.5*height*scale}));
      const sw=r.img.naturalWidth,sh=r.img.naturalHeight;
      drawPhotoTriangle(ctx,r.img,[{x:0,y:0},{x:sw,y:0},{x:sw,y:sh}],[p[0],p[1],p[3]]);
      drawPhotoTriangle(ctx,r.img,[{x:0,y:0},{x:sw,y:sh},{x:0,y:sh}],[p[0],p[3],p[2]]);
    }
  }
  return {records,set,update,drawToPostcard};
}

export class ValleySound {
  constructor(){this.enabled=false;this.context=null;}
  async toggle(){
    if(!this.context){
      const AC=window.AudioContext||window.webkitAudioContext;if(!AC)throw new Error('当前浏览器无法播放环境声。');
      const c=this.context=new AC(),buffer=c.createBuffer(1,c.sampleRate*5,c.sampleRate),data=buffer.getChannelData(0);let brown=0;
      for(let i=0;i<data.length;i++){brown=(brown+(Math.random()*2-1)*.035)/1.018;data[i]=brown*3.8;}
      const source=c.createBufferSource();source.buffer=buffer;source.loop=true;
      this.filter=c.createBiquadFilter();this.filter.type='lowpass';this.filter.frequency.value=1550;
      this.gain=c.createGain();this.gain.gain.value=0;this.pan=c.createStereoPanner();source.connect(this.filter).connect(this.pan).connect(this.gain).connect(c.destination);source.start();
    }
    await this.context.resume();this.enabled=!this.enabled;this.gain.gain.setTargetAtTime(this.enabled?.10:0,this.context.currentTime,.7);return this.enabled;
  }
  update(progress,daylight,waterDistance){if(!this.context||!this.enabled)return;const c=this.context,near=Math.exp(-waterDistance*.17);this.gain.gain.setTargetAtTime(.055+near*.18,c.currentTime,.8);this.filter.frequency.setTargetAtTime(mix(850,2200,near),c.currentTime,1);this.pan.pan.setTargetAtTime(Math.sin(progress*Math.PI*3)*.28,c.currentTime,.6);}
  suspend(){if(this.context)this.context.suspend();}
  resume(){if(this.context&&this.enabled)this.context.resume().catch(()=>{});}
}
