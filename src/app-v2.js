import * as THREE from 'three';
import { buildLandscapeV2 } from './landscape-v2.js';
import { applyBakedLighting } from './baked-light-v2.js';
import { PaperSoftwareRenderer } from './software-renderer.js';
import { loadMemory,saveMemory,encodePhoto } from './memories.js';
import { createTraveller,createPaperSun,createPaperEffects,createMemoryLeaves,addPaperMaterials,ValleySound } from './paper-effects-v2.js';

const $=id=>document.getElementById(id),clamp=THREE.MathUtils.clamp,mix=THREE.MathUtils.lerp;
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const stops=[
  {id:'shuzheng',name:'树正群海',en:'Shuzheng Lakes',line:'水绕过村落，旅程在这里变得缓慢。',position:[9.5,8.8,20.3],target:[-.7,1.0,6.4]},
  {id:'nuorilang',name:'诺日朗瀑布',en:'Nuorilang Falls',line:'一整片山谷，展开成水的声音。',position:[7.2,6.8,15.8],target:[-.6,1.35,4.6]},
  {id:'mirror',name:'镜海',en:'Mirror Lake',line:'风停了一会儿，天空就住进水里。',position:[14.2,7.8,15.7],target:[5.7,1.8,3.3]},
  {id:'pearl',name:'珍珠滩瀑布',en:'Pearl Shoal',line:'顺着纸的褶皱，听见光落下。',position:[16.4,8.3,11.6],target:[7.2,2.4,1.0]},
  {id:'wuhua',name:'五花海',en:'Five Flower Lake',line:'把手轻轻停在水面，让深处的颜色浮现。',position:[14.6,12.6,10.1],target:[5.5,3.2,-3.3]},
  {id:'wucai',name:'五彩池',en:'Five-Color Pond',line:'山林收起了喧哗，只留下一枚蓝。',position:[-14.2,9.6,11.6],target:[-7.1,2.6,-.5]},
  {id:'changhai',name:'长海',en:'Long Lake',line:'走到山水尽头，给记忆留一点安静。',position:[1.6,14.7,9.8],target:[-6.6,4.1,-6]},
];
const byId=Object.fromEntries(stops.map((s,i)=>[s.id,{...s,index:i}]));
const container=$('scene-container'),scene=new THREE.Scene();
let renderer,camera,landscape,traveller,paperSun,effects,photoLeaves,lightBake;
let width=1,height=1,ratio=1,entered=false,mode='journey',playing=false,currentId='shuzheng';
let progress=0,targetProgress=0,lastProgress=0,time=0,lastFrame=0,lastPaint=0,active=true,rafId=null;
let light=0,targetLight=0,editorId=null,draftPhoto=null,photoJob=0,photoProcessing=false;
let pointerState=null,pointers=new Map(),pinchDistance=null,holdTimer,heldWater=null,revealingWater=null,waterReveal=0,requestedStop=null;
let toastTimer,resizeTimer,hoverTime=0,lastGesture=0,photoFocus=null,hoverCue=null;
const target=new THREE.Vector3(),desiredTarget=new THREE.Vector3(),desiredPosition=new THREE.Vector3();
const homePosition=new THREE.Vector3(),homeTarget=new THREE.Vector3();
const orbit={theta:0,phi:1,radius:30,target:new THREE.Vector3()};
const raycaster=new THREE.Raycaster(),pointerNDC=new THREE.Vector2();
const wind={time:{value:0},center:{value:new THREE.Vector3()},force:{value:0}};
const sound=new ValleySound();
const dayPaper=new THREE.Color('#f4eddf'),duskPaper=new THREE.Color('#ead4c2');
const daySun=new THREE.Color('#fff2d6'),duskSun=new THREE.Color('#efac7c');
const sun=new THREE.DirectionalLight(daySun,3.0),hemi=new THREE.HemisphereLight('#fff3dc','#9d9f85',1.8);
const ambient=new THREE.AmbientLight('#f4e5cf',.24);
let stopRouteStart=0,stopRouteEnd=1,routeScreens=[];
const placeLabel=document.createElement('button');placeLabel.className='place-label';placeLabel.setAttribute('aria-label','停留在这一处山水');$('markers').append(placeLabel);
const sceneCue=$('scene-cue');

function notify(message){const el=$('toast');el.textContent=message;el.hidden=false;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>{el.classList.remove('visible');setTimeout(()=>el.hidden=true,300);},3700);}
function buttonText(id,text){const span=$(id).querySelector('span');if(span&&span.textContent!==text)span.textContent=text;}
function easeVector(a,b,f){if(a.distanceToSquared(b)<.000001)a.copy(b);else a.lerp(b,f);}
function absoluteProgress(p){return mix(stopRouteStart,stopRouteEnd,p);}
function pointOnRoute(p){const raw=absoluteProgress(clamp(p,0,1))*(landscape.route.length-1),i=Math.floor(raw),j=Math.min(i+1,landscape.route.length-1);return landscape.route[i].clone().lerp(landscape.route[j],raw-i);}
function normalizedStop(id){return clamp((landscape.stopProgress[id]-stopRouteStart)/(stopRouteEnd-stopRouteStart),0,1);}

function project(point){const p=point.clone().project(camera);return {x:(p.x*.5+.5)*width,y:(-.5*p.y+.5)*height,z:p.z};}
function localPointer(event){const rect=container.getBoundingClientRect();return{x:event.clientX-rect.left,y:event.clientY-rect.top};}
function rayAt(event){const p=localPointer(event);pointerNDC.set(p.x/width*2-1,1-p.y/height*2);raycaster.setFromCamera(pointerNDC,camera);return p;}
function hitWater(event){rayAt(event);return raycaster.intersectObjects(landscape.waterMeshes,false).find(hit=>hit.object.userData.stopId&&!hit.object.name.includes('fall'));}
function nearestRoute(screen,limit=Infinity){let best=null,dist=limit;for(const sample of routeScreens){const d=Math.hypot(sample.x-screen.x,sample.y-screen.y);if(d<dist){dist=d;best=sample;}}return best&&{...best,distance:dist};}
function nearestZone(screen,kind){let best=null,dist=90;for(const zone of landscape.interactionZones){if(zone.kind!==kind)continue;const p=project(zone.center),r=Math.min(100,zone.radius*height/camera.position.distanceTo(zone.center)*1.3);const d=Math.hypot(p.x-screen.x,p.y-screen.y);if(d<Math.max(28,r)&&d<dist){dist=d;best=zone;}}return best;}

function configureHero(){
  const mobile=width<650;
  camera.fov=38;camera.aspect=ratio;camera.updateProjectionMatrix();
  const center=new THREE.Vector3(0,2.5,-.4),direction=new THREE.Vector3(17.2,23.2,31).normalize();
  const distance=mobile?99:43.7;
  homeTarget.copy(center);homePosition.copy(center).addScaledVector(direction,distance);
  // Shift the editorial opening in world space, never crop the 3D canvas.
  const right=new THREE.Vector3().crossVectors(direction,new THREE.Vector3(0,1,0)).normalize().negate();
  if(!mobile){homeTarget.addScaledVector(right,-5.5);homePosition.addScaledVector(right,-5.5);}
  else{homeTarget.y=8.5;homePosition.copy(homeTarget).addScaledVector(direction,distance);}
}

function shotAt(p){
  let index=0;for(let i=0;i<stops.length-1;i++)if(p>=normalizedStop(stops[i].id))index=i;
  index=Math.min(index,stops.length-2);const a=stops[index],b=stops[index+1];
  const pa=normalizedStop(a.id),pb=normalizedStop(b.id),raw=clamp((p-pa)/(pb-pa||1),0,1),t=raw*raw*(3-2*raw);
  desiredTarget.fromArray(a.target).lerp(new THREE.Vector3(...b.target),t);
  desiredPosition.fromArray(a.position).lerp(new THREE.Vector3(...b.position),t);
  // Portrait screens retreat instead of clipping the lake on both sides.
  const widen=width<650?1.42:1;
  desiredPosition.sub(desiredTarget).multiplyScalar(widen).add(desiredTarget);
  const walker=pointOnRoute(p);desiredTarget.lerp(walker,.075);
}
function syncOrbit(){const delta=camera.position.clone().sub(target),spherical=new THREE.Spherical().setFromVector3(delta);orbit.theta=spherical.theta;orbit.phi=spherical.phi;orbit.radius=spherical.radius;orbit.target.copy(target);}
function setMode(next){const wasHero=!entered;if(wasHero)enter();photoFocus=null;mode=next;buttonText('view-mode',mode==='journey'?'自由观景':'沿途而行');$('view-mode').setAttribute('aria-pressed',String(mode==='explore'));if(mode==='explore'){syncOrbit();if(wasHero){orbit.target.set(0,2.5,-.4);orbit.radius=width<650?90:40.8;}pause();}}
function enter(){if(!entered){entered=true;document.body.classList.add('entered');mode='journey';buttonText('view-mode','自由观景');$('view-mode').setAttribute('aria-pressed','false');}lastGesture=time;}
function pause(){playing=false;$('play-journey').setAttribute('aria-pressed','false');buttonText('play-journey','让山水带路');$('play-journey').querySelector('use').setAttribute('href','#i-play');}
function play(){enter();setMode('journey');if(targetProgress>.995){targetProgress=0;progress=0;}playing=true;$('play-journey').setAttribute('aria-pressed','true');buttonText('play-journey','在这里停一会');$('play-journey').querySelector('use').setAttribute('href','#i-pause');}
function goTo(id){photoFocus=null;requestedStop=id;if(editorId)closeStudio();enter();mode='journey';buttonText('view-mode','自由观景');$('view-mode').setAttribute('aria-pressed','false');pause();targetProgress=normalizedStop(id);lastGesture=time;setChapter(id);}
function home(){photoFocus=null;pause();closeStudio();entered=false;mode='journey';document.body.classList.remove('entered');buttonText('view-mode','自由观景');$('view-mode').setAttribute('aria-pressed','false');lastGesture=time;}
function lookAtMemory(id){const record=photoLeaves.records.get(id);if(!record?.group.visible)return;enter();pause();photoFocus=id;targetProgress=normalizedStop(id);setChapter(id);lastGesture=time;}

function setChapter(id){if(!byId[id])return;const s=byId[id];currentId=id;$('chapter-index').textContent=`${String(s.index+1).padStart(2,'0')} / 07`;$('chapter-title').textContent=s.name;$('chapter-en').textContent=s.en;
  const memory=loadMemory(id);$('chapter-line').textContent=memory?.text?memory.text.slice(0,75):s.line;
  placeLabel.textContent=s.name;placeLabel.classList.toggle('on-water',!['pearl','nuorilang'].includes(id));placeLabel.setAttribute('aria-label',`停留在${s.name}`);
  for(const button of document.querySelectorAll('[data-stop]')){const selected=button.dataset.stop===id;button.classList.toggle('is-active',selected);if(selected)button.setAttribute('aria-current','true');else button.removeAttribute('aria-current');}
}
function updateUI(){
  $('journey-progress').value=String(progress);$('journey-progress').style.setProperty('--progress',`${progress*100}%`);$('journey-progress').setAttribute('aria-valuetext',`${byId[currentId].name}，${Math.round(progress*100)}%`);
  const progressText=`${progress>.995?'山水深处':progress<.005?'起点':'沿水而行'} · ${Math.round(progress*100)}%`;if($('progress-label').textContent!==progressText)$('progress-label').textContent=progressText;
  if(requestedStop&&Math.abs(targetProgress-progress)<.003)requestedStop=null;
  if(!pointerState&&!editorId&&!requestedStop){let nearest=stops[0],d=Infinity;for(const s of stops){const next=Math.abs(normalizedStop(s.id)-progress);if(next<d){d=next;nearest=s;}}if(nearest.id!==currentId)setChapter(nearest.id);}
  const anchor=landscape.anchors[currentId],p=project(anchor.clone().add(new THREE.Vector3(0,.25,0)));placeLabel.hidden=!entered||p.z>1||p.x<45||p.x>width-45||p.y<120||p.y>height-205||!!editorId||!!photoFocus;
  if(!placeLabel.hidden){placeLabel.style.left=`${p.x}px`;placeLabel.style.top=`${p.y-15}px`;}
  const cueVisible=entered&&mode==='journey'&&!pointerState&&!playing&&!editorId&&!photoFocus&&time-lastGesture>3.5&&time-lastGesture<14;
  if(hoverCue&&time-hoverCue.time<1.2&&!pointerState&&!editorId){sceneCue.classList.remove('on-water');sceneCue.hidden=false;sceneCue.style.left=`${clamp(hoverCue.x,100,width-100)}px`;sceneCue.style.top=`${clamp(hoverCue.y+42,100,height-205)}px`;const span=sceneCue.querySelector('span');if(span)span.textContent=hoverCue.text;}
  else if(cueVisible){sceneCue.classList.toggle('on-water',!['pearl','nuorilang'].includes(currentId));sceneCue.hidden=false;sceneCue.style.left=`${clamp(p.x,100,width-100)}px`;sceneCue.style.top=`${clamp(p.y+42,150,height-225)}px`;const span=sceneCue.querySelector('span');if(span)span.textContent=['pearl','nuorilang'].includes(currentId)?'轻触水声，停一会儿':'轻触涟漪 · 长按看向水下';}
  else if(!pointerState)sceneCue.hidden=true;
  routeScreens=[];for(let i=0;i<=100;i++){const p=i/100,point=project(pointOnRoute(p));if(point.z<1&&point.z> -1)routeScreens.push({...point,p});}
  photoLeaves.update(camera,width,height);
}

function showWater(hit){if(!hit)return;heldWater=hit.object;revealingWater=heldWater;heldWater.userData.originalOpacity??=heldWater.material.opacity;heldWater.material.transparent=true;heldWater.material.depthWrite=false;wind.center.value.copy(hit.point);
  const id=hit.object.userData.stopId;const memory=loadMemory(id);$('chapter-line').textContent=memory?.text?memory.text.slice(0,100):'把这一刻留给水，让目光再往深处走一点。';sceneCue.hidden=true;
}
function releaseWater(){clearTimeout(holdTimer);if(heldWater){heldWater=null;setChapter(currentId);}}

function bindScene(){
  const canvas=renderer.domElement;
  canvas.addEventListener('pointerdown',event=>{
    if(event.button!==0)return;pointers.set(event.pointerId,localPointer(event));canvas.setPointerCapture(event.pointerId);lastGesture=time;sceneCue.hidden=true;
    if(pointers.size===2){const a=[...pointers.values()];pinchDistance=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);setMode('explore');pointerState={kind:'pinch'};releaseWater();return;}
    const point=rayAt(event),sunPoint=project(paperSun.group.position),travellerPoint=project(traveller.group.position.clone().add(new THREE.Vector3(0,.4,0)));
    let kind='scene',hit=null,zone=null,memoryId=null;
    const memoryHit=raycaster.intersectObjects([...photoLeaves.records.values()].filter(r=>r.group.visible).map(r=>r.group),true)[0];
    if(memoryHit){let parent=memoryHit.object;while(parent&&!parent.userData.memoryId)parent=parent.parent;memoryId=parent?.userData.memoryId;}
    if(Math.hypot(point.x-sunPoint.x,point.y-sunPoint.y)<30)kind='sun';
    else if(Math.hypot(point.x-travellerPoint.x,point.y-travellerPoint.y)<23)kind='traveller';
    else if(memoryId)kind='memory';
    else if(hit=hitWater(event))kind='water';
    else if(zone=nearestZone(point,'forest'))kind='forest';
    pointerState={kind,start:point,last:point,moved:false,hit,zone,memoryId,light:targetLight,down:time};
    if(kind==='water')holdTimer=setTimeout(()=>{if(pointerState?.kind==='water'&&!pointerState.moved)showWater(hit);},540);
    if(kind==='traveller'){requestedStop=null;pointerState.resumeJourney=mode==='journey';enter();setMode('explore');}
    if(kind==='forest'){effects.wind(zone.center);wind.center.value.copy(zone.center);wind.force.value=1;}
    if(kind==='sun'){canvas.style.cursor='ew-resize';pause();}
  });
  canvas.addEventListener('pointermove',event=>{
    const p=localPointer(event);if(pointers.has(event.pointerId))pointers.set(event.pointerId,p);
    if(pointers.size===2){const points=[...pointers.values()],distance=Math.hypot(points[0].x-points[1].x,points[0].y-points[1].y);if(pinchDistance){orbit.radius=clamp(orbit.radius*pinchDistance/distance,8,90);pinchDistance=distance;}return;}
    const state=pointerState;
    if(!state){if(time-hoverTime<.12)return;hoverTime=time;const sp=project(paperSun.group.position),wp=project(traveller.group.position);const nearSun=Math.hypot(p.x-sp.x,p.y-sp.y)<30,nearWalker=Math.hypot(p.x-wp.x,p.y-wp.y)<28,forest=nearestZone(p,'forest');canvas.style.cursor=nearSun?'ew-resize':'grab';hoverCue=nearSun?{...p,time,text:'拖动这束光，从晨光到暮色'}:nearWalker?{...p,time,text:'牵着纸人，沿水而行'}:forest?{...p,time,text:'轻拂树林，让风经过'}:null;return;}
    const dx=p.x-state.last.x,dy=p.y-state.last.y;state.last=p;
    if(Math.hypot(p.x-state.start.x,p.y-state.start.y)>6){state.moved=true;clearTimeout(holdTimer);}
    if(state.kind==='sun'){targetLight=clamp(state.light-(p.x-state.start.x)/Math.max(180,width*.45),0,1);return;}
    if(state.kind==='traveller'){const next=nearestRoute(p,95);if(next){targetProgress=next.p;if(mode==='explore')progress=targetProgress;}return;}
    if(state.kind==='forest'){if(state.moved&&time-state.down>.27){effects.wind(state.zone.center);wind.force.value=1;state.down=time;}return;}
    if(!state.moved)return;
    releaseWater();if(mode!=='explore'||photoFocus)setMode('explore');if(!entered){entered=true;document.body.classList.add('entered');}
    orbit.theta-=dx*.006;orbit.phi=clamp(orbit.phi-dy*.005,.25,1.35);canvas.style.cursor='grabbing';
  });
  function end(event){
    pointers.delete(event.pointerId);if(pointers.size){pointerState=null;pinchDistance=null;return;}
    const state=pointerState;pointerState=null;pinchDistance=null;canvas.style.cursor='grab';clearTimeout(holdTimer);
    if(state&&!state.moved){if(state.kind==='water'){effects.ripple(state.hit.point);if(!entered)goTo(state.hit.object.userData.stopId);}else if(state.kind==='memory'){lookAtMemory(state.memoryId);}else if(state.kind==='forest'){effects.wind(state.zone.center);wind.force.value=1;}else if(state.kind==='sun'){targetLight=targetLight<.5?1:0;}else if(state.kind==='scene'){const point=nearestRoute(state.start,18);if(point){photoFocus=null;enter();pause();targetProgress=point.p;}}}
    if(state?.kind==='traveller'&&state.resumeJourney)setMode('journey');releaseWater();
  }
  canvas.addEventListener('pointerup',end);canvas.addEventListener('pointercancel',end);
  canvas.addEventListener('wheel',event=>{event.preventDefault();lastGesture=time;if(editorId)return;photoFocus=null;requestedStop=null;pause();if(mode==='explore'){orbit.radius=clamp(orbit.radius*Math.exp(event.deltaY*.001),8,90);}else{enter();targetProgress=clamp(targetProgress+event.deltaY*.00032,0,1);}},{passive:false});
  canvas.addEventListener('keydown',event=>{
    if(['ArrowRight','ArrowUp','ArrowLeft','ArrowDown',' ','Home','+','-'].includes(event.key))event.preventDefault();
    if(event.key==='Home')home();else if(event.key===' ')playing?pause():play();else if(event.key==='+'||event.key==='-'){setMode('explore');orbit.radius=clamp(orbit.radius*(event.key==='+'?.9:1.1),8,90);}else if(event.key.startsWith('Arrow')){photoFocus=null;enter();pause();mode='journey';targetProgress=clamp(targetProgress+(['ArrowRight','ArrowUp'].includes(event.key)?.025:-.025),0,1);}
  });
}

function openStudio(){pause();enter();editorId=currentId;const memory=loadMemory(editorId);$('memory-place').textContent=byId[editorId].name;$('memory-line').value=memory?.text||'';$('memory-date').value=memory?.date||'';draftPhoto=memory?.photo||null;photoJob++;photoProcessing=false;$('memory-save').disabled=false;$('memory-photo').value='';$('memory-status').textContent='';$('memory-studio').hidden=false;document.body.classList.add('writing');$('studio-toggle').setAttribute('aria-expanded','true');syncDraftPhoto();$('memory-line').focus({preventScroll:true});}
function closeStudio(){if(!editorId)return;photoJob++;editorId=null;$('memory-studio').hidden=true;document.body.classList.remove('writing');$('studio-toggle').setAttribute('aria-expanded','false');$('studio-toggle').focus({preventScroll:true});}
function syncDraftPhoto(){$('memory-photo-preview').hidden=!draftPhoto;$('memory-remove-photo').hidden=!draftPhoto;if(draftPhoto)$('memory-photo-preview').src=draftPhoto;else $('memory-photo-preview').removeAttribute('src');}
function bindUI(){
  $('enter-journey').onclick=()=>{enter();targetProgress=0;};$('home-view').onclick=home;
  $('view-mode').onclick=()=>setMode(mode==='journey'?'explore':'journey');
  $('play-journey').onclick=()=>playing?pause():play();
  $('journey-progress').addEventListener('input',event=>{photoFocus=null;requestedStop=null;enter();pause();mode='journey';buttonText('view-mode','自由观景');targetProgress=Number(event.target.value);lastGesture=time;});
  for(const button of document.querySelectorAll('[data-stop]'))button.onclick=()=>goTo(button.dataset.stop);
  placeLabel.onclick=()=>{pause();const center=landscape.anchors[currentId];effects.ripple(center);lastGesture=time;};
  sceneCue.onclick=()=>{const center=landscape.anchors[currentId];effects.ripple(center);lastGesture=time;sceneCue.hidden=true;};
  $('time-toggle').onclick=()=>{targetLight=targetLight<.5?1:0;};
  $('sound-toggle').onclick=async()=>{try{const enabled=await sound.toggle();$('sound-toggle').setAttribute('aria-pressed',String(enabled));$('sound-toggle').setAttribute('aria-label',enabled?'关闭山谷环境声':'打开山谷环境声');$('sound-toggle').title=enabled?'关闭山谷环境声':'打开山谷环境声';}catch(error){notify(error.message);}};
  $('studio-toggle').onclick=()=>editorId?closeStudio():openStudio();$('memory-close').onclick=closeStudio;
  $('memory-photo').addEventListener('change',async event=>{const file=event.target.files?.[0];if(!file||!editorId)return;const job=++photoJob;photoProcessing=true;$('memory-save').disabled=true;$('memory-status').textContent='正在把照片做成一张小小的纸片…';try{const photo=await encodePhoto(file);if(job!==photoJob)return;draftPhoto=photo;syncDraftPhoto();$('memory-status').textContent='照片准备好了。';}catch(error){if(job===photoJob)$('memory-status').textContent=error.message;}finally{if(job===photoJob){photoProcessing=false;$('memory-save').disabled=false;}}});
  $('memory-remove-photo').onclick=()=>{photoJob++;draftPhoto=null;photoProcessing=false;$('memory-save').disabled=false;$('memory-photo').value='';syncDraftPhoto();};
  $('memory-save').onclick=async()=>{if(!editorId||photoProcessing)return;const id=editorId,job=photoJob;$('memory-save').disabled=true;try{const memory=saveMemory(id,{text:$('memory-line').value,date:$('memory-date').value,photo:draftPhoto});await photoLeaves.set(id,memory);if(editorId===id&&photoJob===job){closeStudio();setChapter(id);lookAtMemory(id);}notify('这一页已经留在栈道旁。滚动，继续前行。');}catch(error){if(editorId===id&&photoJob===job)$('memory-status').textContent=error.message;else notify(error.message);}finally{if(editorId===id&&photoJob===job)$('memory-save').disabled=false;}};
  $('about-toggle').onclick=()=>{pause();$('about-sheet').hidden=false;$('about-toggle').setAttribute('aria-expanded','true');document.querySelector('.experience').inert=true;$('about-close').focus({preventScroll:true});};
  $('about-close').onclick=()=>{$('about-sheet').hidden=true;document.querySelector('.experience').inert=false;$('about-toggle').setAttribute('aria-expanded','false');$('about-toggle').focus({preventScroll:true});};
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){if(!$('about-sheet').hidden){$('about-sheet').hidden=true;document.querySelector('.experience').inert=false;$('about-toggle').setAttribute('aria-expanded','false');$('about-toggle').focus({preventScroll:true});}else closeStudio();}});
  $('capture-postcard').onclick=capture;
}

async function capture(){
  pause();renderer.render(scene,camera);photoLeaves.update(camera,width,height);
  const canvas=document.createElement('canvas');canvas.width=1800;canvas.height=1300;const ctx=canvas.getContext('2d');ctx.fillStyle=`#${dayPaper.clone().lerp(duskPaper,light).getHexString()}`;ctx.fillRect(0,0,1800,1300);
  const sw=renderer.domElement.width,sh=renderer.domElement.height,scale=Math.min(1700/sw,1080/sh),dw=sw*scale,dh=sh*scale;
  ctx.drawImage(renderer.domElement,(1800-dw)/2,(1120-dh)/2,dw,dh);
  photoLeaves.drawToPostcard(ctx,camera,width,height,scale*renderer.getPixelRatio(),(1800-dw)/2,(1120-dh)/2);
  ctx.strokeStyle='#aaa18b';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(65,1158);ctx.lineTo(1735,1158);ctx.stroke();ctx.fillStyle='#4c5446';ctx.font='36px Georgia,"Songti SC",serif';ctx.fillText(`九寨 · 水行记${entered?' / '+byId[currentId].name:''}`,70,1210);ctx.font='17px Georgia';ctx.fillText('JIUZHAI — THE SHAPE OF WATER',72,1251);ctx.textAlign='right';ctx.fillText(new Intl.DateTimeFormat('zh-CN',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date()),1728,1245);
  const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob){notify('这幅画面暂时无法导出，请再试一次。');return;}const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download='jiuzhai-the-shape-of-water.png';link.click();setTimeout(()=>URL.revokeObjectURL(link.href),5000);notify('此刻山水，已做成一张明信片。');
}

function resize(){const rect=container.getBoundingClientRect();width=Math.max(1,rect.width);height=Math.max(1,rect.height);ratio=width/height;renderer.setSize(width,height);camera.aspect=ratio;configureHero();if(!entered){camera.position.copy(homePosition);target.copy(homeTarget);camera.lookAt(target);}camera.updateProjectionMatrix();document.querySelector('.gesture-note').textContent=width<650?'拖动下方刻度前行 · 双指缩放':'滚动前行 · 拖动环顾';}

function frame(now){
  rafId=null;if(!active)return;rafId=requestAnimationFrame(frame);const dt=Math.min((now-lastFrame)/1000||.016,.4);lastFrame=now;time+=dt;
  if(playing){targetProgress=Math.min(1,targetProgress+dt*.0062);if(targetProgress===1)pause();}
  if(Math.abs(targetProgress-progress)<.000005)progress=targetProgress;else progress=mix(progress,targetProgress,1-Math.exp(-dt*(pointerState?.kind==='traveller'?9:2.8)));
  if(reducedMotion)progress=targetProgress;
  const cameraEase=reducedMotion?1:1-Math.exp(-dt*3.5);
  if(!entered){desiredPosition.copy(homePosition);desiredTarget.copy(homeTarget);}
  else if(photoFocus){const record=photoLeaves.records.get(photoFocus);desiredTarget.copy(record.group.position);const normal=new THREE.Vector3(0,0,1).applyQuaternion(record.group.quaternion);desiredPosition.copy(desiredTarget).addScaledVector(normal,width<650?5:3.6).add(new THREE.Vector3(.6,1.15,0));desiredPosition.y=Math.max(desiredPosition.y,landscape.groundHeight(desiredPosition.x,desiredPosition.z)+1.7);}
  else if(mode==='journey')shotAt(progress);
  else{desiredTarget.copy(orbit.target);desiredPosition.setFromSpherical(new THREE.Spherical(orbit.radius,orbit.phi,orbit.theta)).add(desiredTarget);if((desiredPosition.x/14.4)**2+(desiredPosition.z/11.6)**2<1.1)desiredPosition.y=Math.max(desiredPosition.y,landscape.groundHeight(desiredPosition.x,desiredPosition.z)+.8);}
  easeVector(camera.position,desiredPosition,cameraEase);easeVector(target,desiredTarget,cameraEase);camera.lookAt(target);
  const walkerPoint=pointOnRoute(progress),nextPoint=pointOnRoute(Math.min(1,progress+.001));traveller.group.position.copy(walkerPoint);traveller.group.position.y+=.025;
  if(nextPoint.distanceToSquared(walkerPoint)>.00001)traveller.group.rotation.y=Math.atan2(nextPoint.x-walkerPoint.x,nextPoint.z-walkerPoint.z);
  const moving=Math.abs(progress-lastProgress);if(!reducedMotion)traveller.update(time,moving/dt);lastProgress=progress;
  if(Math.abs(targetLight-light)<.0001)light=targetLight;else light=mix(light,targetLight,1-Math.exp(-dt*3));
  scene.background=dayPaper.clone().lerp(duskPaper,light);sun.color.copy(daySun).lerp(duskSun,light);sun.intensity=mix(3.0,2.1,light);hemi.intensity=mix(1.8,1.5,light);sun.position.set(mix(-13,12,light),mix(24,12,light),10);
  paperSun.group.position.set(mix(6.7,-6.5,light),mix(12,11.3,light),-9.4);paperSun.group.quaternion.copy(camera.quaternion);paperSun.disk.material.color.set(light>.5?'#ce8c65':'#dca96c');paperSun.fold.material.color.set(light>.5?'#e2a779':'#edc08a');
  buttonText('time-toggle',light>.5?'晨光':'暮色');$('time-toggle').setAttribute('aria-pressed',String(light>.5));$('time-toggle').setAttribute('aria-label',light>.5?'切换为晨光':'切换为暮色');
  wind.time.value=time;wind.force.value=Math.max(0,wind.force.value-dt*.36);
  waterReveal=mix(waterReveal,heldWater?1:0,1-Math.exp(-dt*4));
  for(const water of landscape.waterMeshes){if(water.material.transparent){water.material.opacity=mix(.97,water===revealingWater?.48:.97,waterReveal);if(!heldWater&&waterReveal<.005){water.material.opacity=1;water.material.transparent=false;water.material.depthWrite=true;}}}if(!heldWater&&waterReveal<.005)revealingWater=null;
  const effectsActive=effects.update(dt);
  if(!reducedMotion&&!renderer.isSoftwareRenderer)landscape.update(time,dt);
  if(renderer.isSoftwareRenderer&&now-lastPaint<(effectsActive?60:45))return;lastPaint=now;
  renderer.render(scene,camera);updateUI();
  const waterDistance=Math.min(traveller.group.position.distanceTo(landscape.anchors.pearl),traveller.group.position.distanceTo(landscape.anchors.nuorilang));sound.update(progress,light,waterDistance);
}

async function start(){
  const surface=document.createElement('canvas');let context=null;try{context=surface.getContext('webgl2',{alpha:true,antialias:true,preserveDrawingBuffer:true,powerPreference:'high-performance'});}catch{}
  renderer=context?new THREE.WebGLRenderer({canvas:surface,context,alpha:true,antialias:true,preserveDrawingBuffer:true}):new PaperSoftwareRenderer();
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,renderer.isSoftwareRenderer?1.25:2));renderer.setClearColor('#f4eddf',1);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.domElement.setAttribute('aria-label','可漫游的九寨沟纸雕山水。滚动沿水前行，拖动环顾，长按湖面。左右方向键前行，空格播放。');renderer.domElement.tabIndex=0;container.append(renderer.domElement);
  camera=new THREE.PerspectiveCamera(38,1,.1,240);
  sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-19,right:19,top:19,bottom:-19,near:1,far:70});sun.shadow.bias=-.00025;sun.shadow.normalBias=.035;sun.shadow.radius=3;scene.add(sun,hemi,ambient,sun.target);
  const ground=new THREE.Mesh(new THREE.PlaneGeometry(160,160),new THREE.ShadowMaterial({opacity:.13}));ground.rotation.x=-Math.PI/2;ground.position.y=-.88;ground.receiveShadow=true;scene.add(ground);
  $('loading-message').textContent='山川与湖岸，正在找到彼此';
  const baked=fetch('./assets/paper-light-v2.bin').then(r=>r.ok?r.arrayBuffer():null).catch(()=>null);
  await new Promise(resolve=>requestAnimationFrame(resolve));landscape=buildLandscapeV2();scene.add(landscape.group);
  const buffer=await baked;if(buffer){lightBake=applyBakedLighting(landscape.group,buffer,{software:!!renderer.isSoftwareRenderer});if(!lightBake.applied)console.warn(lightBake.reason);}
  else lightBake={applied:false,reason:'No offline paper lighting asset.'};
  addPaperMaterials(landscape.group,wind);stopRouteStart=landscape.stopProgress.shuzheng;stopRouteEnd=landscape.stopProgress.changhai;
  for(const button of document.querySelectorAll('[data-stop]'))button.style.left=`${normalizedStop(button.dataset.stop)*100}%`;
  traveller=createTraveller();scene.add(traveller.group);paperSun=createPaperSun();scene.add(paperSun.group);effects=createPaperEffects(scene);photoLeaves=createMemoryLeaves(scene,landscape,stops,!!renderer.isSoftwareRenderer,renderer);
  await Promise.all(stops.map(s=>photoLeaves.set(s.id,loadMemory(s.id))));
  resize();desiredPosition.copy(homePosition);desiredTarget.copy(homeTarget);camera.position.copy(homePosition);target.copy(homeTarget);camera.lookAt(target);
  bindScene();bindUI();setChapter('shuzheng');renderer.compile(scene,camera);renderer.render(scene,camera);
  document.body.classList.add('ready');$('loading').hidden=true;
  // Expose only read-only diagnostics in the DOM for verification and support.
  container.dataset.renderer=renderer.isSoftwareRenderer?'software-geometry':'webgl2';container.dataset.triangles=String(landscape.metadata.triangles);container.dataset.paperLight=lightBake.applied?'ready':'fallback';
  window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(resize,80);});
  document.addEventListener('visibilitychange',()=>{active=!document.hidden;if(active){lastFrame=performance.now();sound.resume();if(rafId===null)rafId=requestAnimationFrame(frame);}else{if(rafId!==null)cancelAnimationFrame(rafId);rafId=null;sound.suspend();}});
  active=!document.hidden;lastFrame=performance.now();if(active)rafId=requestAnimationFrame(frame);
}
start().catch(error=>{console.error(error);$('loading-message').textContent='山水暂时没有展开，请刷新页面再试。';$('loading').querySelector('.loading-subline').textContent=error.message;});
