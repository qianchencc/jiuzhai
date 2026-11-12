import * as THREE from 'three';
import { buildLandscapeV2 } from './landscape-v2.js';
import { applyBakedLighting } from './baked-light-v2.js';
import { PaperSoftwareRenderer } from './software-renderer.js';
import { createFreeCamera } from './free-camera-v3.js';
import { createScenePicker } from './scene-picking-v3.js';
import { createSceneAtmosphere } from './scene-atmosphere-v3.js';
import { loadMemory, saveMemory, encodePhoto } from './memories.js';
import { createPaperSun, createPaperEffects, createMemoryLeaves, addPaperMaterials, ValleySound } from './paper-effects-v2.js';

const $ = id => document.getElementById(id);
const {clamp, lerp: mix} = THREE.MathUtils;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
// Place identities belong to the landscape, without a route or an ordering UI.
const places = [
  {id:'changhai', name:'长海', en:'Long Lake', line:'深蓝留在群山之间，薄雾缓缓越过水岸。'},
  {id:'wucai', name:'五彩池', en:'Five-Color Pond', line:'一枚澄澈的蓝，藏在层层纸叶的间隙。'},
  {id:'wuhua', name:'五花海', en:'Five Flower Lake', line:'青碧随水纹流转，沉木隐约浮现在光里。'},
  {id:'pearl', name:'珍珠滩瀑布', en:'Pearl Shoal', line:'清流越过石沿，轻轻碎成一片白。'},
  {id:'mirror', name:'镜海', en:'Mirror Lake', line:'风把倒影轻轻展开，又慢慢抚平。'},
  {id:'nuorilang', name:'诺日朗瀑布', en:'Nuorilang Falls', line:'一道宽阔的水帘，托起林间细细的雾。'},
  {id:'shuzheng', name:'树正群海', en:'Shuzheng Lakes', line:'浅水穿过秋林，金色纸叶在岸边停留。'},
];
const byId = Object.fromEntries(places.map(p => [p.id, p]));
const valley = {name:'九寨山水', en:'JIUZHAI VALLEY', line:'风过林梢，水有回声。'};
const container = $('scene-container'), scene = new THREE.Scene();
const raycaster = new THREE.Raycaster(), ndc = new THREE.Vector2();
const wind = {time:{value:0}, center:{value:new THREE.Vector3()}, force:{value:0}};
const sound = new ValleySound();
const dayPaper = new THREE.Color('#fff0df'), duskPaper = new THREE.Color('#eed5c3');
const daySun = new THREE.Color('#fff7ed'), duskSun = new THREE.Color('#ffc18d');
// Daylight is an open, cool sky with a warm key. A brighter fill preserves
// the pinks and apricots on the shaded side of a folded crown.
const sun = new THREE.DirectionalLight(daySun,2.65), hemi = new THREE.HemisphereLight('#f4f8ff','#ded3b9',1.75);
const ambient = new THREE.AmbientLight('#f1f6f5',.24);
let renderer, camera, view, landscape, picker, atmosphere, paperSun, effects, photoLeaves, lightBake;
let width=1, height=1, time=0, lastPaint=0, active=true, rafId=null, light=0, targetLight=0;
let currentId=null, focusedId=null, editorId=null, draftPhoto=null, photoJob=0, photoProcessing=false;
let gesture=null, pinch=null, hover=null, lastHoverAt=-1, lastBrushAt=-1, holdTimer, heldWater=null, revealedWater=null, waterReveal=0;
let resizeTimer, toastTimer, captionAt=0, lastTouchTap=null;
const pointers = new Map();
const cursor = $('cursor-feedback');

function notify(message) {
  $('toast').textContent=message; $('toast').hidden=false; $('toast').classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>{ $('toast').classList.remove('visible'); setTimeout(()=>$('toast').hidden=true,300); },3500);
}
function text(id,value) { if($(id).textContent!==value) $(id).textContent=value; }
function exploring() { document.body.classList.add('exploring'); }
function manipulating() { focusedId=null; hover=null; exploring(); }
function setPlace(id) {
  currentId=byId[id]?id:null;
  const place=byId[currentId]||valley;
  text('scene-title',place.name); text('scene-en',place.en); text('scene-line',place.line);
  container.dataset.focus=currentId||'valley';
}
function closestPlace(point) {
  let id='wuhua', distance=Infinity;
  for(const [key,anchor] of Object.entries(landscape.anchors)) {
    const d=anchor.distanceToSquared(point); if(d<distance) { id=key; distance=d; }
  }
  return id;
}
function localPointer(event) {
  const rect=container.getBoundingClientRect(); return {x:event.clientX-rect.left,y:event.clientY-rect.top};
}
function rayAt(point) {
  ndc.set(point.x/width*2-1,1-point.y/height*2);
  raycaster.setFromCamera(ndc,camera); return raycaster.ray;
}
function project(point) {
  const p=point.clone().project(camera); return {x:(p.x*.5+.5)*width,y:(1-p.y)*.5*height,z:p.z};
}
function hitAt(point, includeSun=true) {
  if(includeSun) {
    const sp=project(paperSun.group.position);
    if(sp.z<1&&Math.hypot(point.x-sp.x,point.y-sp.y)<28) return {kind:'sun',point:paperSun.group.position.clone()};
  }
  rayAt(point);
  const hit=picker.pick(raycaster.ray);
  const memories=[...photoLeaves.records.values()].filter(r=>r.group.visible).map(r=>r.group);
  if(memories.length) {
    const photo=raycaster.intersectObjects(memories,true)[0];
    if(photo&&(!hit||photo.distance<hit.distance+.03)) {
      let parent=photo.object; while(parent&&!parent.userData.memoryId) parent=parent.parent;
      if(parent) return {...photo,kind:'memory',id:parent.userData.memoryId};
    }
  }
  if(!hit) return null;
  const data=hit.object.userData;
  const kind=data.water?(data.falls||hit.object.name.includes('fall')?'falls':'water'):data.kind==='foliage'?'forest':'land';
  return {...hit,kind,id:byId[data.stopId]?data.stopId:closestPlace(hit.point)};
}
function feedback(point,hit) {
  if(!hit||hit.kind==='land'||editorId) { cursor.hidden=true; renderer.domElement.style.cursor='grab'; return; }
  const kind=hit.kind==='falls'?'water':hit.kind==='memory'?'focus':hit.kind;
  cursor.hidden=false; cursor.dataset.kind=kind;
  cursor.style.transform=`translate(${point.x}px,${point.y}px)`;
  cursor.classList.toggle('is-right',point.x>width-150);cursor.classList.toggle('is-bottom',point.y>height-65);
  text('cursor-label',hit.kind==='sun'?'拖动光线':hit.kind==='forest'?'风过林梢':hit.kind==='memory'?'留在这里的一页':byId[hit.id]?.name||'水声');
  renderer.domElement.style.cursor=hit.kind==='sun'?'ew-resize':hit.kind==='memory'?'pointer':'grab';
}
function brush(hit) {
  if(!hit||time-lastBrushAt<.34) return;
  if(hit.kind==='forest') {
    wind.center.value.copy(hit.point); wind.force.value=Math.min(1,wind.force.value+.6);
    atmosphere.disturb(hit.point,.55); lastBrushAt=time;
  } else if(hit.kind==='water') { atmosphere.disturb(hit.point,.22); lastBrushAt=time; }
}
function releaseWater() { clearTimeout(holdTimer); heldWater=null; }
function revealWater(hit) {
  if(hit?.kind!=='water') return;
  if(revealedWater&&revealedWater!==hit.object) {
    revealedWater.material.opacity=1; revealedWater.material.transparent=false; revealedWater.material.depthWrite=true;
  }
  heldWater=revealedWater=hit.object; heldWater.material.transparent=true; heldWater.material.depthWrite=false;
  cursor.hidden=true;
}
function focusHit(hit) {
  if(!hit||hit.kind==='sun') return;
  exploring(); releaseWater();
  if(hit.kind==='memory') { lookAtMemory(hit.id); return; }
  const id=hit.id||closestPlace(hit.point);
  // Frame the individual lake/fall; ground and forest can be explored at the exact picked point.
  const at=hit.kind==='water'||hit.kind==='falls'?landscape.anchors[id]:hit.point;
  const radius=width<650?(id==='wuhua'?24:19):(id==='wuhua'?17:12.5);
  view.focus(at,{radius,phi:hit.kind==='falls'?1.04:.84});
  focusedId=id;setPlace(id); captionAt=time;
}
function home() {
  releaseWater(); closeStudio(false); view.home(); focusedId=null; hover=null; cursor.hidden=true; setPlace(null);
  document.body.classList.remove('exploring');
}
function pinchInfo() {
  const [a,b]=[...pointers.values()];
  return {distance:Math.max(5,Math.hypot(a.x-b.x,a.y-b.y)),center:{x:(a.x+b.x)/2,y:(a.y+b.y)/2}};
}

function bindScene() {
  const canvas=renderer.domElement;
  canvas.addEventListener('contextmenu',event=>event.preventDefault());
  canvas.addEventListener('pointerdown',event=>{
    if(event.button>2) return;
    event.preventDefault();
    const point=localPointer(event);
    pointers.set(event.pointerId,point); canvas.setPointerCapture(event.pointerId); canvas.focus({preventScroll:true});
    if(pointers.size>=2) { pinch=pinchInfo(); gesture=null; releaseWater(); cursor.hidden=true; manipulating(); return; }
    const hit=hitAt(point), isPan=event.button!==0||event.shiftKey;
    gesture={pointerId:event.pointerId,start:point,last:point,moved:false,hit,pan:isPan,sun:!isPan&&hit?.kind==='sun',light:targetLight,down:time,touch:event.pointerType==='touch'};
    if(hit?.kind==='water'&&!isPan) holdTimer=setTimeout(()=>{ if(gesture&&!gesture.moved) revealWater(hit); },520);
    if(isPan) canvas.style.cursor='grabbing';
  });
  canvas.addEventListener('pointermove',event=>{
    const point=localPointer(event);
    if(pointers.has(event.pointerId)) pointers.set(event.pointerId,point);
    if(pointers.size>=2) {
      const next=pinchInfo();
      if(pinch) { view.zoom(Math.log(pinch.distance/next.distance)/.00125); view.pan(next.center.x-pinch.center.x,next.center.y-pinch.center.y); }
      pinch=next; return;
    }
    if(!gesture) {
      if(event.pointerType==='touch'||time-lastHoverAt<.075) return;
      lastHoverAt=time; hover=hitAt(point); feedback(point,hover); brush(hover); return;
    }
    if(gesture.pointerId!==event.pointerId) return;
    const dx=point.x-gesture.last.x,dy=point.y-gesture.last.y;
    gesture.last=point;
    if(!gesture.moved&&Math.hypot(point.x-gesture.start.x,point.y-gesture.start.y)>4) { gesture.moved=true; releaseWater(); if(!gesture.sun)manipulating(); }
    if(!gesture.moved) return;
    cursor.hidden=true;
    if(gesture.sun) { targetLight=clamp(gesture.light-(point.x-gesture.start.x)/Math.max(180,width*.45),0,1); canvas.style.cursor='ew-resize'; }
    else {
      if(gesture.pan||event.shiftKey) view.pan(dx,dy); else view.rotate(dx,dy);
      canvas.style.cursor='grabbing';
    }
  });
  function end(event,cancelled=false) {
    pointers.delete(event.pointerId); releaseWater();
    if(pointers.size===1) {
      const [id,point]=[...pointers.entries()][0];
      gesture={pointerId:id,start:point,last:point,moved:true,hit:null,pan:false,sun:false,down:time,touch:true};pinch=null;return;
    }
    if(pointers.size>1) {gesture=null;pinch=pinchInfo();return;}
    const finished=gesture; gesture=null; pinch=null; canvas.style.cursor='grab';
    if(cancelled||!finished||finished.moved||finished.pan) return;
    const hit=finished.hit;
    if(hit?.kind==='sun') targetLight=targetLight<.5?1:0;
    else if(hit?.kind==='water') { effects.ripple(hit.point,hit.object); atmosphere.disturb(hit.point,1); focusedId=hit.id;setPlace(hit.id); }
    else if(hit?.kind==='forest') { atmosphere.disturb(hit.point,1); wind.center.value.copy(hit.point); wind.force.value=1; }
    else if(hit?.kind==='memory') lookAtMemory(hit.id);
    if(finished.touch) {
      const last=lastTouchTap;
      if(last&&time-last.time<.36&&Math.hypot(last.point.x-finished.start.x,last.point.y-finished.start.y)<28) { focusHit(hit); lastTouchTap=null; }
      else lastTouchTap={time,point:finished.start};
    }
  }
  canvas.addEventListener('pointerup',event=>end(event));
  canvas.addEventListener('pointercancel',event=>end(event,true));
  canvas.addEventListener('lostpointercapture',event=>{ if(pointers.has(event.pointerId)) end(event,true); });
  canvas.addEventListener('pointerleave',()=>{ if(!gesture) { hover=null; cursor.hidden=true; } });
  canvas.addEventListener('dblclick',event=>{ event.preventDefault(); focusHit(hitAt(localPointer(event))); });
  canvas.addEventListener('wheel',event=>{
    event.preventDefault(); releaseWater(); manipulating(); cursor.hidden=true; hover=null;
    const point=localPointer(event), hit=hitAt(point,false);
    const pixels=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?height:1);
    view.zoom(clamp(pixels,-400,400),hit?.point);
  },{passive:false});
  canvas.addEventListener('keydown',event=>{
    if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','+','=','-','_'].includes(event.key)) return;
    event.preventDefault(); manipulating(); cursor.hidden=true;
    if(event.key==='Home') home();
    else if(['+','='].includes(event.key)) view.zoom(-180);
    else if(['-','_'].includes(event.key)) view.zoom(180);
    else {
      const x=event.key==='ArrowLeft'?-35:event.key==='ArrowRight'?35:0;
      const y=event.key==='ArrowUp'?-28:event.key==='ArrowDown'?28:0;
      if(event.shiftKey) view.pan(x,y); else view.rotate(x,y);
    }
  });
}

function lookAtMemory(id) {
  const record=photoLeaves.records.get(id); if(!record?.group.visible) return;
  exploring(); focusedId=id;setPlace(id);
  const normal=new THREE.Vector3(0,0,1).applyQuaternion(record.group.quaternion);
  view.focus(record.group.position,{radius:width<650?11:7.5,theta:Math.atan2(normal.x,normal.z),phi:1.18});
}
function openStudio() {
  exploring(); editorId=currentId||closestPlace(view.target);
  const memory=loadMemory(editorId); text('memory-place',byId[editorId].name);
  $('memory-line').value=memory?.text||''; $('memory-date').value=memory?.date||''; draftPhoto=memory?.photo||null;
  photoJob++; photoProcessing=false; $('memory-save').disabled=false; $('memory-photo').value=''; text('memory-status','');
  $('memory-studio').hidden=false; document.body.classList.add('writing'); $('studio-toggle').setAttribute('aria-expanded','true');
  cursor.hidden=true; syncDraftPhoto(); $('memory-line').focus({preventScroll:true});
}
function closeStudio(restoreFocus=true) {
  if(!editorId) return; photoJob++; editorId=null; $('memory-studio').hidden=true;
  document.body.classList.remove('writing'); $('studio-toggle').setAttribute('aria-expanded','false');
  if(restoreFocus) $('studio-toggle').focus({preventScroll:true});
}
function syncDraftPhoto() {
  $('memory-photo-preview').hidden=!draftPhoto; $('memory-remove-photo').hidden=!draftPhoto;
  if(draftPhoto) $('memory-photo-preview').src=draftPhoto; else $('memory-photo-preview').removeAttribute('src');
}
function closeAbout() {
  $('about-sheet').hidden=true; document.querySelector('.experience').inert=false;
  $('about-toggle').setAttribute('aria-expanded','false'); $('about-toggle').focus({preventScroll:true});
}
function bindUI() {
  $('home-view').onclick=home;
  document.querySelector('.brand').onclick=event=>{event.preventDefault();home();};
  $('zoom-in').onclick=()=>{manipulating();view.zoom(-220);};
  $('zoom-out').onclick=()=>{manipulating();view.zoom(220);};
  $('time-toggle').onclick=()=>{targetLight=targetLight<.5?1:0;};
  $('sound-toggle').onclick=async()=>{try {
    const enabled=await sound.toggle(); $('sound-toggle').setAttribute('aria-pressed',String(enabled));
    $('sound-toggle').setAttribute('aria-label',enabled?'关闭山谷环境声':'打开山谷环境声');
    $('sound-toggle').title=enabled?'关闭山谷环境声':'打开山谷环境声';
  } catch(error) {notify(error.message);} };
  $('studio-toggle').onclick=()=>editorId?closeStudio():openStudio(); $('memory-close').onclick=()=>closeStudio();
  $('memory-photo').addEventListener('change',async event=>{
    const file=event.target.files?.[0]; if(!file||!editorId) return;
    const job=++photoJob; photoProcessing=true; $('memory-save').disabled=true; text('memory-status','正在把照片做成一张小小的纸片…');
    try {const photo=await encodePhoto(file);if(job!==photoJob)return;draftPhoto=photo;syncDraftPhoto();text('memory-status','照片准备好了。');}
    catch(error) {if(job===photoJob)text('memory-status',error.message);}
    finally {if(job===photoJob){photoProcessing=false;$('memory-save').disabled=false;}}
  });
  $('memory-remove-photo').onclick=()=>{photoJob++;draftPhoto=null;photoProcessing=false;$('memory-save').disabled=false;$('memory-photo').value='';syncDraftPhoto();};
  $('memory-save').onclick=async()=>{
    if(!editorId||photoProcessing)return;
    const id=editorId,job=photoJob; $('memory-save').disabled=true;
    try {
      const memory=saveMemory(id,{text:$('memory-line').value,date:$('memory-date').value,photo:draftPhoto});
      await photoLeaves.set(id,memory);
      if(editorId===id&&photoJob===job){closeStudio();lookAtMemory(id);}
      notify('这一页已经留在山水之间。');
    }catch(error){if(editorId===id&&photoJob===job)text('memory-status',error.message);else notify(error.message);}
    finally{if(editorId===id&&photoJob===job)$('memory-save').disabled=false;}
  };
  $('about-toggle').onclick=()=>{
    cursor.hidden=true; $('about-sheet').hidden=false; $('about-toggle').setAttribute('aria-expanded','true');
    document.querySelector('.experience').inert=true; $('about-close').focus({preventScroll:true});
  };
  $('about-close').onclick=closeAbout;
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){if(!$('about-sheet').hidden)closeAbout();else closeStudio();}});
  $('capture-postcard').onclick=capture;
}

async function capture() {
  renderer.render(scene,camera); photoLeaves.update(camera,width,height);
  const canvas=document.createElement('canvas'); canvas.width=1800; canvas.height=1300;
  const ctx=canvas.getContext('2d'); ctx.fillStyle=`#${dayPaper.clone().lerp(duskPaper,light).getHexString()}`; ctx.fillRect(0,0,1800,1300);
  const sw=renderer.domElement.width,sh=renderer.domElement.height,scale=Math.min(1700/sw,1080/sh),dw=sw*scale,dh=sh*scale;
  ctx.drawImage(renderer.domElement,(1800-dw)/2,(1120-dh)/2,dw,dh);
  photoLeaves.drawToPostcard(ctx,camera,width,height,scale*renderer.getPixelRatio(),(1800-dw)/2,(1120-dh)/2);
  ctx.strokeStyle='#aaa18b';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(65,1158);ctx.lineTo(1735,1158);ctx.stroke();
  ctx.fillStyle='#4c5446';ctx.font='36px Georgia,"Songti SC",serif';ctx.fillText(`九寨 · 水行记${currentId?' / '+byId[currentId].name:''}`,70,1210);
  ctx.font='17px Georgia';ctx.fillText('JIUZHAI — THE SHAPE OF WATER',72,1251);ctx.textAlign='right';
  ctx.fillText(new Intl.DateTimeFormat('zh-CN',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date()),1728,1245);
  const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
  if(!blob){notify('这幅画面暂时无法导出，请再试一次。');return;}
  const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download='jiuzhai-the-shape-of-water.png';link.click();
  setTimeout(()=>URL.revokeObjectURL(link.href),5000);notify('此刻山水，已做成一张明信片。');
}
function resize() {
  const rect=container.getBoundingClientRect();width=Math.max(1,rect.width);height=Math.max(1,rect.height);
  renderer.setSize(width,height);view.resize(width,height);cursor.hidden=true;
}
function updateLight(dt) {
  light=Math.abs(targetLight-light)<.0001?targetLight:mix(light,targetLight,reducedMotion?1:1-Math.exp(-dt*3));
  scene.background.copy(dayPaper).lerp(duskPaper,light);sun.color.copy(daySun).lerp(duskSun,light);
  sun.intensity=mix(2.65,2.15,light);hemi.intensity=mix(1.75,1.10,light);ambient.intensity=mix(.24,.16,light);sun.position.set(mix(-13,12,light),mix(24,12,light),10);
  paperSun.group.position.set(mix(6.7,-6.5,light),mix(12,11.3,light),-9.4);paperSun.group.quaternion.copy(camera.quaternion);
  paperSun.disk.material.color.set(light>.5?'#ce8c65':'#dca96c');paperSun.fold.material.color.set(light>.5?'#e2a779':'#edc08a');
  const label=light>.5?'暮色':'晴日';const span=$('time-toggle').querySelector('span');if(span.textContent!==label)span.textContent=label;
  $('time-toggle').setAttribute('aria-pressed',String(light>.5));$('time-toggle').setAttribute('aria-label',light>.5?'切换为晨光':'切换为暮色');
}
function frame(now) {
  rafId=null;if(!active)return;rafId=requestAnimationFrame(frame);
  const interval=renderer.isSoftwareRenderer?(view.moving||gesture?42:62):0;
  if(now-lastPaint<interval)return;
  const dt=Math.min((now-lastPaint)/1000||.016,.16);lastPaint=now;time+=dt;
  if(!$('about-sheet').hidden)return;
  view.update(dt);updateLight(dt);
  wind.time.value=reducedMotion?0:time;wind.force.value=Math.max(0,wind.force.value-dt*.45);
  waterReveal=mix(waterReveal,heldWater?1:0,1-Math.exp(-dt*5));
  if(revealedWater){revealedWater.material.opacity=mix(.99,.46,waterReveal);if(!heldWater&&waterReveal<.004){revealedWater.material.opacity=1;revealedWater.material.transparent=false;revealedWater.material.depthWrite=true;revealedWater=null;}}
  effects.update(dt);
  atmosphere.update(time,dt,{focus:view.target,daylight:light,hoverPoint:hover?.point,hoverKind:hover?.kind});
  renderer.render(scene,camera);photoLeaves.update(camera,width,height);
  if(!focusedId&&!editorId&&!gesture&&!view.moving&&time-captionAt>.75) {
    const id=view.radius<view.homeRadius*.70?closestPlace(view.target):null;
    if(id!==currentId)setPlace(id);captionAt=time;
  }
  const distance=Math.min(view.target.distanceTo(landscape.anchors.pearl),view.target.distanceTo(landscape.anchors.nuorilang));
  sound.update((Math.sin(view.theta)+1)/2,light,distance);
  // Read-only diagnostics: no controls or personal data are exposed.
  container.dataset.cameraRadius=view.radius.toFixed(2);
  container.dataset.atmosphereTime=time.toFixed(1);
  container.dataset.renderQuality=renderer.info.render.quality||'webgl';
  container.dataset.frameMs=(renderer.info.render.frameMilliseconds||0).toFixed(1);
}

async function start() {
  const surface=document.createElement('canvas');let context=null;
  try{context=surface.getContext('webgl2',{alpha:true,antialias:true,preserveDrawingBuffer:true,powerPreference:'high-performance'});}catch{}
  renderer=context?new THREE.WebGLRenderer({canvas:surface,context,alpha:true,antialias:true,preserveDrawingBuffer:true}):new PaperSoftwareRenderer();
  renderer.setPixelRatio(renderer.isSoftwareRenderer?1.25:Math.min(devicePixelRatio||1,2));renderer.setClearColor('#fff0df',1);
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.NeutralToneMapping;renderer.toneMappingExposure=1.08;
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.domElement.setAttribute('aria-label','九寨沟纸雕山水。拖动旋转，滚轮缩放，Shift 或鼠标右键拖动平移，双击靠近风景。方向键环顾，加减键缩放，Home 回到全景。');
  renderer.domElement.tabIndex=0;renderer.domElement.style.touchAction='none';container.append(renderer.domElement);
  camera=new THREE.PerspectiveCamera(38,1,.1,240);scene.background=dayPaper.clone();
  sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-19,right:19,top:19,bottom:-19,near:1,far:70});
  sun.shadow.bias=-.00018;sun.shadow.normalBias=.022;sun.shadow.radius=3;scene.add(sun,hemi,ambient,sun.target);
  const ground=new THREE.Mesh(new THREE.PlaneGeometry(160,160),new THREE.ShadowMaterial({opacity:.19}));ground.rotation.x=-Math.PI/2;ground.position.y=-1.08;ground.receiveShadow=true;scene.add(ground);
  text('loading-message','山川与湖岸，正在找到彼此');
  const baked=fetch('./assets/paper-light-v4-water-light.bin').then(r=>r.ok?r.arrayBuffer():null).catch(()=>null);
  await new Promise(resolve=>requestAnimationFrame(resolve));landscape=buildLandscapeV2();scene.add(landscape.group);
  const buffer=await baked;lightBake=buffer?applyBakedLighting(landscape.group,buffer,{software:!!renderer.isSoftwareRenderer,aoStrength:.27,shadowStrength:.19,minimumBrightness:.66,waterWeight:.12}):{applied:false};
  addPaperMaterials(landscape.group,wind);
  picker=createScenePicker(landscape.group);
  paperSun=createPaperSun();scene.add(paperSun.group);effects=createPaperEffects(scene,{landscape,reducedMotion});
  atmosphere=createSceneAtmosphere({scene,landscape,software:!!renderer.isSoftwareRenderer,reducedMotion});
  photoLeaves=createMemoryLeaves(scene,landscape,places,!!renderer.isSoftwareRenderer,renderer);
  await Promise.all(places.map(p=>photoLeaves.set(p.id,loadMemory(p.id))));
  const rect=container.getBoundingClientRect();
  view=createFreeCamera({camera,groundHeight:landscape.groundHeight,width:rect.width,height:rect.height,reducedMotion});
  resize();updateLight(0);atmosphere.update(0,0,{focus:view.target,daylight:0});
  bindScene();bindUI();setPlace(null);renderer.compile(scene,camera);renderer.render(scene,camera);
  document.body.classList.add('ready');$('loading').hidden=true;
  container.dataset.renderer=renderer.isSoftwareRenderer?'software-geometry':'webgl2';container.dataset.paperLight=lightBake.applied?'ready':'fallback';
  container.dataset.people='0';container.dataset.navigation='free';container.dataset.sceneVersion='4-water-light';
  container.dataset.triangles=String(landscape.metadata.triangles);container.dataset.atmosphere=JSON.stringify(atmosphere.metadata);
  window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(resize,80);});
  document.addEventListener('visibilitychange',()=>{
    active=!document.hidden;
    if(active){lastPaint=performance.now();sound.resume();if(rafId===null)rafId=requestAnimationFrame(frame);}
    else{releaseWater();pointers.clear();gesture=null;pinch=null;cursor.hidden=true;if(rafId!==null)cancelAnimationFrame(rafId);rafId=null;sound.suspend();}
  });
  active=!document.hidden;lastPaint=performance.now();if(active)rafId=requestAnimationFrame(frame);
}
start().catch(error=>{console.error(error);text('loading-message','山水暂时没有展开，请刷新页面再试。');$('loading').querySelector('.loading-subline').textContent=error.message;});
