import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildLandscape } from './landscape.js';
import { loadMemory, saveMemory, encodePhoto } from './memories.js';
import { PaperSoftwareRenderer } from './software-renderer.js';

const $ = (id) => document.getElementById(id);
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const stops = [
  { id: 'changhai', name: '长海', english: 'Long Lake', valley: '则查洼沟', line: '雪山怀里的蓝', description: '雪峰与森林围拢一片深蓝。这里是长海，山把这一汪水轻轻收进怀里。', offset: [-38, -9] },
  { id: 'wucai', name: '五彩池', english: 'Five-Color Pond', valley: '则查洼沟', line: '一小池，好几种蓝', description: '一枚小小的蓝绿宝石，藏在林间。不同的水色在这里相遇，值得停下来慢慢看。', offset: [-37, -3] },
  { id: 'wuhua', name: '五花海', english: 'Five Flower Lake', valley: '日则沟', line: '让颜色慢下来', description: '蓝、绿与岸边的秋色，在同一片水里交叠。几道沉木的线条，是这页山水留下的笔迹。', offset: [-40, -8] },
  { id: 'pearl', name: '珍珠滩瀑布', english: 'Pearl Shoal', valley: '日则沟', line: '听水翻过山谷', description: '水流越过宽阔的滩面，铺成一道弯弯的白色水帘。把声音也收藏进这段记忆吧。', offset: [14, -8] },
  { id: 'mirror', name: '镜海', english: 'Mirror Lake', valley: '日则沟', line: '天空的另一半', description: '风轻的时候，山和天空会在水里再出现一次。留一点空白，让这片平静自己说话。', offset: [6, 5] },
  { id: 'nuorilang', name: '诺日朗瀑布', english: 'Nuorilang Falls', valley: '三沟交会处', line: '山间的一帘白', description: '宽阔的水帘展开在林间，像一页被山风翻起的白纸。这里也是地图从双谷转向群海的地方。', offset: [-79, -7] },
  { id: 'shuzheng', name: '树正群海', english: 'Shuzheng Lakes', valley: '树正沟', line: '一层水，一层光', description: '海子、树丛与小小跌水一层层相接。顺着栈道走，山里的颜色便一页页展开。', offset: [-30, -4] },
];
const byId = Object.fromEntries(stops.map((stop, index) => [stop.id, { ...stop, index }]));
const container = $('scene-container');
const detail = $('detail-panel');
let selected = 'wuhua';
let renderer, scene, camera, controls, landscape, clock;
let focusRing, tween = null, homeZoom = 1;
let frameId, active = true, labelsVisible = true;
let tourRunning = false, tourIndex = 0, nextTourTime = 0;
let draftPhoto = '', photoRequest = 0, lightTarget = 0, currentLight = 0;
let sun, hemi, ambient, ambience = null;
let lastTime = 0, lastWidth = 0, lastHeight = 0, photoProcessing = false;
const markerElements = [];
const homeTarget = new THREE.Vector3(0, 1.25, 0.1);
const homePosition = new THREE.Vector3(10.5, 21, 28.5).add(homeTarget);
const toast = document.createElement('div');
toast.className = 'atlas-toast';
toast.setAttribute('role', 'status');
toast.setAttribute('aria-live', 'polite');
document.body.appendChild(toast);
let toastTimer;
function notify(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 4200);
}

function addPaperGrain(group) {
  const materials = new Set();
  group.traverse((object) => {
    if (object.isMesh) for (const material of Array.isArray(object.material) ? object.material : [object.material]) materials.add(material);
  });
  for (const material of materials) {
    if (!material.isMeshStandardMaterial || material.transparent) continue;
    material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vPaperPosition;');
      shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvPaperPosition = transformed;');
      shader.fragmentShader = shader.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vPaperPosition;\nfloat paperNoise(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,42.173)))*43758.5453);}');
      shader.fragmentShader = shader.fragmentShader.replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb *= 0.978 + 0.042 * paperNoise(floor(vPaperPosition * 155.0));');
    };
    material.customProgramCacheKey = () => 'jiuzhai-paper-v1';
  }
}

function initScene() {
  const surface = document.createElement('canvas');
  let context = null;
  try { context = surface.getContext('webgl2', { antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: true }); } catch { /* Hardware acceleration is optional. */ }
  renderer = context ? new THREE.WebGLRenderer({ canvas: surface, context, antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: true }) : new PaperSoftwareRenderer();
  if (renderer.isSoftwareRenderer) {
    document.body.classList.add('software-mode');
    document.querySelector('.gesture-hint').textContent = '兼容模式 · 拖动旋转 · 滚轮缩放 · 点击地名，打开手记';
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.setAttribute('aria-label', '九寨沟纸雕小岛。可以拖动旋转或使用景点目录。');
  renderer.domElement.tabIndex = 0;
  container.appendChild(renderer.domElement);
  scene = new THREE.Scene();
  if (innerWidth <= 850) {
    homeTarget.y = 0.1;
    homePosition.copy(homeTarget).add(new THREE.Vector3(10.5, 21, 28.5));
  }
  camera = new THREE.OrthographicCamera(-20, 20, 15, -15, 0.1, 150);
  camera.position.copy(homePosition);
  camera.lookAt(homeTarget);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.copy(homeTarget);
  controls.enableDamping = true;
  controls.dampingFactor = 0.075;
  controls.rotateSpeed = 0.55;
  controls.zoomSpeed = 0.8;
  controls.minZoom = 0.62;
  controls.maxZoom = 3.8;
  controls.minPolarAngle = 0.2;
  controls.maxPolarAngle = Math.PI * 0.475;
  controls.enablePan = true;
  controls.panSpeed = 0.6;
  controls.addEventListener('start', () => { tween = null; if (tourRunning) stopTour(); });
  hemi = new THREE.HemisphereLight(0xfff8ec, 0xb1a48c, 2.4);
  ambient = new THREE.AmbientLight(0xfff7ea, 0.38);
  sun = new THREE.DirectionalLight(0xfff1d9, 3.3);
  sun.position.set(-12, 22, 10);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -19, right: 19, top: 19, bottom: -19, near: 1, far: 65 });
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.024;
  sun.shadow.radius = 4;
  scene.add(hemi, ambient, sun);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(140, 140), new THREE.ShadowMaterial({ opacity: 0.14 }));
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.7;
  ground.receiveShadow = true;
  scene.add(ground);
  landscape = buildLandscape();
  landscape.group.name = 'Jiuzhai — concept-guided paper model';
  addPaperGrain(landscape.group);
  scene.add(landscape.group);
  focusRing = new THREE.Group();
  focusRing.name = 'focus-ring';
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.37, 0.405, 64), new THREE.MeshBasicMaterial({ color: 0xc09b78, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2;
  focusRing.add(ring);
  const dot = new THREE.Mesh(new THREE.CircleGeometry(0.045, 20), new THREE.MeshBasicMaterial({ color: 0xfffae9, side: THREE.DoubleSide }));
  dot.rotation.x = -Math.PI / 2;
  dot.position.y = 0.005;
  focusRing.add(dot);
  scene.add(focusRing);
  createMarkers();
  resizeScene(true);
  new ResizeObserver(() => resizeScene()).observe(container);
  const point = landscape.anchors[selected];
  focusRing.position.copy(point).add(new THREE.Vector3(0, 0.055, 0));
  clock = new THREE.Clock();
  setupCanvasInput();
  renderer.compile(scene, camera);
  renderer.render(scene, camera);
  $('loading').classList.add('loaded');
  $('loading').setAttribute('aria-hidden', 'true');
  window.__jiuzhai = {
    get status() { return { ready: true, selected, tourRunning, labelsVisible, light: $('light-select').value, memoryCount: stops.filter((s) => loadMemory(s.id)).length, drawCalls: renderer.info.render.calls, triangles: renderer.info.render.triangles }; },
  };
  animate();
}

function resizeScene(first = false) {
  const { width, height } = container.getBoundingClientRect();
  if (!width || !height || (width === lastWidth && height === lastHeight && !first)) return;
  lastWidth = width; lastHeight = height;
  const aspect = width / height;
  const viewHeight = Math.max(21.5, (width < 600 ? 25.8 : 29) / aspect);
  camera.left = -viewHeight * aspect / 2;
  camera.right = viewHeight * aspect / 2;
  camera.top = viewHeight / 2;
  camera.bottom = -viewHeight / 2;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  if (first) { camera.zoom = homeZoom; camera.updateProjectionMatrix(); }
}

function createMarkers() {
  for (const [index, stop] of stops.entries()) {
    const button = document.createElement('button');
    button.className = `map-marker${stop.id === selected ? ' active' : ''}`;
    button.dataset.place = stop.id;
    button.setAttribute('aria-label', `${stop.name}，打开旅行手记`);
    button.innerHTML = `<span class="marker-dot"></span><span class="marker-label">${stop.name}<small>${stop.english}</small></span><span class="marker-number">${String(index + 1).padStart(2, '0')}</span>`;
    button.addEventListener('click', () => selectStop(stop.id));
    $('markers').appendChild(button);
    markerElements.push({ element: button, stop });
  }
}

const projection = new THREE.Vector3();
function positionMarkers() {
  if (!labelsVisible) return;
  for (const { element, stop } of markerElements) {
    projection.copy(landscape.anchors[stop.id]).y += 0.9;
    projection.project(camera);
    const x = (projection.x * 0.5 + 0.5) * lastWidth + stop.offset[0];
    const y = (-projection.y * 0.5 + 0.5) * lastHeight + stop.offset[1];
    const visible = projection.z < 1 && projection.z > -1 && x > -90 && x < lastWidth - 12 && y > 15 && y < lastHeight - 28;
    element.style.visibility = visible ? 'visible' : 'hidden';
    element.style.transform = `translate3d(${Math.round(x)}px,${Math.round(y)}px,0)`;
    element.style.zIndex = stop.id === selected ? '8' : `${Math.round((1 - projection.z) * 100)}`;
  }
}

function beginFlight(target, position, zoom, duration = 1100) {
  tween = { start: performance.now(), duration: reducedMotion ? 1 : duration, fromTarget: controls.target.clone(), toTarget: target.clone(), fromPosition: camera.position.clone(), toPosition: position.clone(), fromZoom: camera.zoom, toZoom: zoom };
}

function focusStop(id, showPanel = true) {
  const target = landscape.anchors[id].clone();
  target.y += 0.5;
  const mobile = innerWidth <= 850;
  const zoom = Math.min(homeZoom * (mobile ? 1.65 : 1.9), controls.maxZoom);
  if (showPanel && !mobile) {
    const side = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
    target.addScaledVector(side, (camera.right - camera.left) / zoom * Math.min(0.2, 175 / lastWidth));
  } else if (showPanel && mobile) {
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(camera.quaternion);
    target.addScaledVector(up, -(camera.top - camera.bottom) / zoom * 0.2);
  }
  const direction = camera.position.clone().sub(controls.target).normalize().multiplyScalar(37);
  if (direction.y < 15) direction.y = 19;
  beginFlight(target, target.clone().add(direction), zoom);
}

function markActive(id) {
  selected = id;
  const stop = byId[id];
  for (const button of document.querySelectorAll('[data-stop]')) {
    const isCurrent = button.dataset.stop === id;
    button.classList.toggle('active', isCurrent);
    if (isCurrent) button.setAttribute('aria-current', 'true'); else button.removeAttribute('aria-current');
  }
  for (const marker of markerElements) marker.element.classList.toggle('active', marker.stop.id === id);
  $('scene-status').textContent = `${stop.name} · ${stop.line}`;
  if (landscape) focusRing.position.copy(landscape.anchors[id]).add(new THREE.Vector3(0, 0.055, 0));
}

function selectStop(id, { panel = true, fly = true, fromTour = false } = {}) {
  if (!byId[id] || !landscape) return;
  if (!fromTour) stopTour();
  markActive(id);
  renderMemory();
  if (panel) { detail.classList.add('open'); detail.setAttribute('aria-hidden', 'false'); }
  if (fly) focusStop(id, panel);
  if (innerWidth <= 850) document.querySelector(`[data-stop="${id}"]`).scrollIntoView({ block: 'nearest', inline: 'center', behavior: reducedMotion ? 'instant' : 'smooth' });
}

function closeDetail() {
  detail.classList.remove('open');
  detail.setAttribute('aria-hidden', 'true');
  photoRequest++;
}

function resetView() {
  stopTour(); closeDetail();
  beginFlight(homeTarget, homePosition, homeZoom, 1200);
}

function startTour() {
  closeDetail();
  tourRunning = true; tourIndex = 0;
  $('tour-toggle').setAttribute('aria-pressed', 'true');
  $('tour-toggle').querySelector('use').setAttribute('href', '#i-pause');
  $('tour-toggle').querySelector('span').textContent = '暂停漫游';
  nextTourTime = performance.now() + 6000;
  selectStop(stops[0].id, { panel: false, fromTour: true });
}

function stopTour() {
  tourRunning = false;
  $('tour-toggle').setAttribute('aria-pressed', 'false');
  $('tour-toggle').querySelector('use').setAttribute('href', '#i-play');
  $('tour-toggle').querySelector('span').textContent = '沿途漫游';
}

function renderMemory() {
  const stop = byId[selected];
  const saved = loadMemory(selected);
  photoRequest++;
  photoProcessing = false;
  $('memory-save').disabled = false;
  $('detail-kicker').textContent = `${String(stop.index + 1).padStart(2, '0')} / ${stop.english.toUpperCase()} · ${stop.valley}`;
  $('detail-title').textContent = stop.name;
  $('detail-description').textContent = stop.description;
  $('memory-text').value = saved?.text || '';
  $('memory-date').value = saved?.date || '';
  $('memory-feedback').textContent = saved ? '这一页已收藏，可以继续补充。' : '';
  $('memory-photo').value = '';
  draftPhoto = saved?.photo || '';
  showPhotoPreview();
  $('detail-image').hidden = !draftPhoto;
  if (draftPhoto) $('detail-image').src = draftPhoto; else $('detail-image').removeAttribute('src');
  $('detail-caption').textContent = saved?.date ? `${saved.date.replaceAll('-', '.')} · 我的旅行照片` : '我的旅行照片';
  detail.scrollTop = 0;
}

function showPhotoPreview() {
  $('memory-preview').hidden = !draftPhoto;
  $('memory-remove-photo').hidden = !draftPhoto;
  if (draftPhoto) $('memory-preview').src = draftPhoto; else $('memory-preview').removeAttribute('src');
}

async function handlePhoto(event) {
  const file = event.target.files[0];
  if (!file) return;
  const request = ++photoRequest;
  photoProcessing = true;
  $('memory-save').disabled = true;
  $('memory-feedback').textContent = '正在把照片放进这一页…';
  try {
    const data = await encodePhoto(file);
    if (request !== photoRequest) return;
    draftPhoto = data;
    showPhotoPreview();
    $('memory-feedback').textContent = '照片已准备好，点“收藏这一刻”保存。';
  } catch (error) {
    if (request === photoRequest) $('memory-feedback').textContent = error.message;
  } finally {
    if (request === photoRequest) { photoProcessing = false; $('memory-save').disabled = false; }
  }
}

function setupCanvasInput() {
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let down = null;
  renderer.domElement.addEventListener('pointerdown', (event) => { down = { x: event.clientX, y: event.clientY, time: performance.now() }; });
  renderer.domElement.addEventListener('pointerup', (event) => {
    if (!down || Math.hypot(event.clientX - down.x, event.clientY - down.y) > 5 || performance.now() - down.time > 600) return;
    const rect = container.getBoundingClientRect();
    pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObject(landscape.group, true)[0];
    if (!hit) return;
    const nearest = stops.map((stop) => ({ id: stop.id, d: hit.point.distanceTo(landscape.anchors[stop.id]) })).sort((a, b) => a.d - b.d)[0];
    if (nearest.d < 2.1) selectStop(nearest.id);
  });
  renderer.domElement.addEventListener('keydown', (event) => {
    if (event.key === '+' || event.key === '=') { event.preventDefault(); changeZoom(1.2); }
    if (event.key === '-') { event.preventDefault(); changeZoom(1 / 1.2); }
    if (event.key.toLowerCase() === 'r') resetView();
    if (/^Arrow(Left|Right|Up|Down)$/.test(event.key)) {
      event.preventDefault(); stopTour(); tween = null;
      const vector = camera.position.clone().sub(controls.target);
      const spherical = new THREE.Spherical().setFromVector3(vector);
      spherical.theta += event.key === 'ArrowLeft' ? 0.12 : event.key === 'ArrowRight' ? -0.12 : 0;
      spherical.phi = THREE.MathUtils.clamp(spherical.phi + (event.key === 'ArrowUp' ? -0.09 : event.key === 'ArrowDown' ? 0.09 : 0), controls.minPolarAngle, controls.maxPolarAngle);
      camera.position.copy(controls.target).add(new THREE.Vector3().setFromSpherical(spherical));
    }
  });
  renderer.domElement.addEventListener('webglcontextlost', (event) => { event.preventDefault(); active = false; cancelAnimationFrame(frameId); notify('图形显示暂时中断，恢复后会继续显示。'); });
  renderer.domElement.addEventListener('webglcontextrestored', () => { active = true; animate(); notify('山水已恢复。'); });
}

function changeZoom(factor) {
  stopTour();
  beginFlight(controls.target, camera.position, THREE.MathUtils.clamp(camera.zoom * factor, controls.minZoom, controls.maxZoom), 300);
}

function updateLight(delta) {
  currentLight = THREE.MathUtils.damp(currentLight, lightTarget, 2.2, delta);
  const day = new THREE.Color(0xfff1d9), dusk = new THREE.Color(0xffbf8f);
  sun.color.copy(day.lerp(dusk, currentLight));
  sun.intensity = THREE.MathUtils.lerp(3.3, 1.8, currentLight);
  sun.position.x = THREE.MathUtils.lerp(-12, -18, currentLight);
  sun.position.y = THREE.MathUtils.lerp(22, 12, currentLight);
  hemi.color.set(0xfff8ec).lerp(new THREE.Color(0xe4dae9), currentLight);
  hemi.intensity = THREE.MathUtils.lerp(2.4, 1.4, currentLight);
  renderer.toneMappingExposure = THREE.MathUtils.lerp(1.15, 1.03, currentLight);
  document.documentElement.style.setProperty('--dusk', currentLight.toFixed(3));
}

function animate() {
  if (!active) return;
  frameId = requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.05), elapsed = clock.elapsedTime;
  const now = performance.now();
  if (tween) {
    const progress = Math.min(1, (now - tween.start) / tween.duration);
    const ease = progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
    controls.target.lerpVectors(tween.fromTarget, tween.toTarget, ease);
    camera.position.lerpVectors(tween.fromPosition, tween.toPosition, ease);
    camera.zoom = THREE.MathUtils.lerp(tween.fromZoom, tween.toZoom, ease);
    camera.updateProjectionMatrix();
    if (progress === 1) tween = null;
  }
  if (tourRunning && now >= nextTourTime) {
    tourIndex++;
    if (tourIndex >= stops.length) { resetView(); notify('七处山水，已走过一遍。喜欢的片刻可以留下来。'); }
    else { selectStop(stops[tourIndex].id, { panel: false, fromTour: true }); nextTourTime = now + 6000; }
  }
  controls.update();
  if (!reducedMotion && !renderer.isSoftwareRenderer) landscape.update?.(elapsed, delta);
  focusRing.scale.setScalar(reducedMotion || renderer.isSoftwareRenderer ? 1 : 1 + Math.sin(elapsed * 1.4) * 0.045);
  updateLight(delta);
  positionMarkers();
  renderer.render(scene, camera);
  lastTime = now;
}

async function toggleSound() {
  try {
    if (!ambience) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) throw new Error('这个浏览器暂时不能播放环境声音。');
      const context = new AudioContext();
      const buffer = context.createBuffer(1, context.sampleRate * 4, context.sampleRate);
      const data = buffer.getChannelData(0);
      let previous = 0;
      for (let i = 0; i < data.length; i++) { previous = (previous + (Math.random() * 2 - 1) * 0.024) / 1.024; data[i] = previous * 3; }
      const source = context.createBufferSource(); source.buffer = buffer; source.loop = true;
      const filter = context.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 1450;
      const gain = context.createGain(); gain.gain.value = 0;
      source.connect(filter).connect(gain).connect(context.destination); source.start();
      ambience = { context, gain, playing: false };
    }
    await ambience.context.resume();
    ambience.playing = !ambience.playing;
    ambience.gain.gain.setTargetAtTime(ambience.playing ? 0.24 : 0, ambience.context.currentTime, 0.6);
    $('sound-toggle').setAttribute('aria-pressed', String(ambience.playing));
    $('sound-toggle').setAttribute('aria-label', ambience.playing ? '关闭山水声音' : '开启山水声音');
    $('sound-toggle').title = ambience.playing ? '关闭山水声音' : '开启山水声音';
    if (ambience.playing) notify('轻轻的水声已开启。');
  } catch (error) { notify(error.message || '声音暂时无法开启，请再试一次。'); }
}

async function savePostcard() {
  if (!renderer) return;
  const button = $('save-postcard');
  button.disabled = true;
  try {
    renderer.render(scene, camera);
    const canvas = document.createElement('canvas');
    canvas.width = 1800; canvas.height = 1350;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = currentLight > 0.5 ? '#efe2d4' : '#f5efe4'; ctx.fillRect(0, 0, 1800, 1350);
    const source = renderer.domElement;
    const fit = Math.min(1680 / source.width, 1090 / source.height);
    const w = source.width * fit, h = source.height * fit;
    ctx.drawImage(source, (1800 - w) / 2, 30 + (1080 - h) / 2, w, h);
    ctx.strokeStyle = '#cfc3ad'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(100, 1140); ctx.lineTo(1700, 1140); ctx.stroke();
    ctx.fillStyle = '#55654e'; ctx.font = '50px Georgia'; ctx.fillText('Jiuzhai in paper', 110, 1220);
    ctx.font = '21px sans-serif'; ctx.fillStyle = '#948773'; ctx.fillText('山水手记 · ' + byId[selected].name, 112, 1270);
    ctx.textAlign = 'right'; ctx.font = '18px Georgia'; ctx.fillText('SICHUAN, CHINA · A LITTLE ATLAS', 1690, 1245);
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (!blob) throw new Error('明信片暂时未能生成，请再试一次。');
    const url = URL.createObjectURL(blob), link = document.createElement('a');
    link.href = url; link.download = `jiuzhai-${selected}-postcard.png`; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 20000);
    notify('明信片已生成，正在保存。');
  } catch (error) { notify(error.message); }
  finally { button.disabled = false; }
}

function bindUI() {
  for (const button of document.querySelectorAll('[data-stop]')) button.addEventListener('click', () => selectStop(button.dataset.stop));
  $('tour-toggle').addEventListener('click', () => tourRunning ? stopTour() : startTour());
  $('home-view').addEventListener('click', resetView);
  $('zoom-in').addEventListener('click', () => changeZoom(1.2));
  $('zoom-out').addEventListener('click', () => changeZoom(1 / 1.2));
  $('detail-close').addEventListener('click', closeDetail);
  $('memory-open').addEventListener('click', () => { selectStop(selected); setTimeout(() => $('memory-text').focus({ preventScroll: true }), 480); });
  $('label-toggle').addEventListener('click', () => { labelsVisible = !labelsVisible; $('markers').hidden = !labelsVisible; $('label-toggle').setAttribute('aria-pressed', String(labelsVisible)); });
  $('light-select').addEventListener('change', () => { lightTarget = $('light-select').value === 'dusk' ? 1 : 0; document.body.classList.toggle('dusk', lightTarget === 1); });
  $('sound-toggle').addEventListener('click', toggleSound);
  $('save-postcard').addEventListener('click', savePostcard);
  $('concept-open').addEventListener('click', () => $('concept-dialog').showModal());
  $('concept-close').addEventListener('click', () => $('concept-dialog').close());
  $('help-toggle').addEventListener('click', () => $('help-dialog').showModal());
  for (const dialog of [$('concept-dialog'), $('help-dialog')]) dialog.addEventListener('click', (event) => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
  $('memory-photo').addEventListener('change', handlePhoto);
  $('memory-remove-photo').addEventListener('click', () => { photoRequest++; draftPhoto = ''; photoProcessing = false; $('memory-save').disabled = false; $('memory-photo').value = ''; showPhotoPreview(); $('memory-feedback').textContent = '点“收藏这一刻”保存移除后的这一页。'; });
  $('memory-form').addEventListener('submit', (event) => {
    event.preventDefault(); if (photoProcessing) return;
    try {
      const saved = saveMemory(selected, { text: $('memory-text').value, date: $('memory-date').value, photo: draftPhoto });
      $('memory-feedback').textContent = '已收藏。下次在这个浏览器打开，还会在这里。';
      $('detail-image').hidden = !saved.photo;
      if (saved.photo) $('detail-image').src = saved.photo; else $('detail-image').removeAttribute('src');
      $('detail-caption').textContent = saved.date ? `${saved.date.replaceAll('-', '.')} · 我的旅行照片` : '我的旅行照片';
      notify(`${byId[selected].name}的记忆，已收藏。`);
    } catch (error) { $('memory-feedback').textContent = error.message; }
  });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !$('concept-dialog').open && !$('help-dialog').open) closeDetail(); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { active = false; cancelAnimationFrame(frameId); if (ambience) ambience.context.suspend(); }
    else if (renderer) { active = true; clock.getDelta(); nextTourTime = performance.now() + 6000; animate(); if (ambience?.playing) ambience.context.resume(); }
  });
  detail.setAttribute('aria-hidden', 'true');
}

bindUI();
try { initScene(); }
catch (error) {
  console.error('Jiuzhai scene:', error);
  $('loading-message').textContent = '这个浏览器暂时无法展开 3D 山水。';
  $('loading').querySelector('small').textContent = '请开启浏览器硬件加速后刷新，或先翻开左侧概念手稿。';
  $('loading').classList.add('failed');
  for (const id of ['tour-toggle', 'home-view', 'zoom-in', 'zoom-out', 'save-postcard']) $(id).disabled = true;
}
