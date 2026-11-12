import * as THREE from 'three';

const {clamp} = THREE.MathUtils;
const HOME_TARGET = new THREE.Vector3(0, 2.8, -.15);
const HOME_DIRECTION = new THREE.Vector3(7, 27, 37).normalize();
const HOME_ANGLES = new THREE.Spherical().setFromVector3(HOME_DIRECTION);
const MIN_PHI = .28, MAX_PHI = 1.31;

/** Camera math only. Pointer ownership, hit testing and gestures live in the app. */
export function createFreeCamera({camera, groundHeight = () => 0, width = 1, height = 1, reducedMotion = false}) {
  const target = HOME_TARGET.clone(), desiredTarget = target.clone();
  const current = new THREE.Spherical(43.5, HOME_ANGLES.phi, HOME_ANGLES.theta);
  const desired = current.clone();
  const offset = new THREE.Vector3(), right = new THREE.Vector3(), forward = new THREE.Vector3();
  const shift = new THREE.Vector3(), cameraPoint = new THREE.Vector3();
  let viewportWidth = Math.max(1, width), viewportHeight = Math.max(1, height);
  let homeRadius = 43.5, minRadius = 7.5, maxRadius = 70, atHome = true, moving = false;

  function finitePoint(point) {
    return point && Number.isFinite(point.x) && Number.isFinite(point.y) && Number.isFinite(point.z);
  }

  function constrainTarget(elevationOffset = null) {
    desiredTarget.x = clamp(desiredTarget.x, -14, 14);
    desiredTarget.z = clamp(desiredTarget.z, -11.5, 11.5);
    const rim = Math.hypot(desiredTarget.x / 14, desiredTarget.z / 11.5);
    if (rim > 1) { desiredTarget.x /= rim; desiredTarget.z /= rim; }
    const floor = groundHeight(desiredTarget.x, desiredTarget.z);
    if (elevationOffset !== null && Number.isFinite(floor)) desiredTarget.y = floor + elevationOffset;
    desiredTarget.y = clamp(Math.max(desiredTarget.y, Number.isFinite(floor) ? floor + .12 : 0), .12, 9);
  }

  function placeCamera() {
    offset.setFromSpherical(current);
    cameraPoint.copy(target).add(offset);
    if (Math.hypot(cameraPoint.x / 14.4, cameraPoint.z / 11.6) < 1.08) {
      const floor = groundHeight(cameraPoint.x, cameraPoint.z);
      if (Number.isFinite(floor)) cameraPoint.y = Math.max(cameraPoint.y, floor + .85);
    }
    camera.position.copy(cameraPoint);
    camera.lookAt(target);
    camera.updateMatrixWorld();
  }

  function snap() {
    target.copy(desiredTarget);
    current.copy(desired);
    moving = false;
    placeCamera();
  }

  function home(immediate = false) {
    atHome = true;
    desiredTarget.copy(HOME_TARGET);
    // Keep the nearest equivalent turn so resetting never spins through 360°.
    const turns = Math.round((current.theta - HOME_ANGLES.theta) / (Math.PI * 2));
    desired.set(homeRadius, HOME_ANGLES.phi, HOME_ANGLES.theta + turns * Math.PI * 2);
    moving = true;
    if (immediate || reducedMotion) snap();
  }

  function resize(w, h) {
    viewportWidth = Math.max(1, Number.isFinite(w) ? w : 1);
    viewportHeight = Math.max(1, Number.isFinite(h) ? h : 1);
    const aspect = viewportWidth / viewportHeight, mobile = viewportWidth < 650;
    homeRadius = clamp(43.5 * Math.max(1, .95 / aspect), 43.5, 102);
    minRadius = mobile ? 11 : 7.5;
    maxRadius = mobile ? Math.max(105, homeRadius + 5) : Math.max(70, homeRadius + 5);
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
    if (atHome) home(true);
    else { desired.radius = clamp(desired.radius, minRadius, maxRadius); moving = true; }
  }

  function rotate(dx, dy) {
    if (!Number.isFinite(dx) || !Number.isFinite(dy)) return;
    atHome = false;
    const scale = Math.PI * 2 / Math.max(560, viewportHeight);
    desired.theta -= clamp(dx, -500, 500) * scale;
    desired.phi = clamp(desired.phi - clamp(dy, -500, 500) * scale * .78, MIN_PHI, MAX_PHI);
    moving = true;
  }

  function pan(dx, dy) {
    if (!Number.isFinite(dx) || !Number.isFinite(dy)) return;
    atHome = false;
    const previousFloor = groundHeight(desiredTarget.x, desiredTarget.z);
    const elevationOffset = Number.isFinite(previousFloor) ? Math.max(.12, desiredTarget.y - previousFloor) : null;
    const units = 2 * current.radius * Math.tan(THREE.MathUtils.degToRad(camera.fov * .5)) / viewportHeight;
    right.set(Math.cos(current.theta), 0, -Math.sin(current.theta));
    forward.set(-Math.sin(current.theta), 0, -Math.cos(current.theta));
    desiredTarget.addScaledVector(right, -clamp(dx, -300, 300) * units);
    desiredTarget.addScaledVector(forward, clamp(dy, -300, 300) * units / Math.max(.35, Math.cos(current.phi)));
    // Follow the terrain down as well as up, preserving the viewing height.
    constrainTarget(elevationOffset);
    moving = true;
  }

  /** delta is wheel distance in CSS pixels; positive zooms out. */
  function zoom(delta, focusPoint = null) {
    if (!Number.isFinite(delta) || delta === 0) return;
    atHome = false;
    const before = desired.radius;
    desired.radius = clamp(before * Math.exp(clamp(delta, -800, 800) * .00125), minRadius, maxRadius);
    if (finitePoint(focusPoint)) {
      // Zoom toward the actual surface under the pointer; limit travel near the rim.
      const weight = clamp((1 - desired.radius / before) * .82, -.12, .25);
      shift.copy(focusPoint).sub(desiredTarget).multiplyScalar(weight);
      if (shift.lengthSq() > 4) shift.setLength(2);
      desiredTarget.add(shift);
      constrainTarget();
    }
    moving = true;
  }

  function focus(point, options = {}) {
    if (!finitePoint(point)) return;
    atHome = false;
    desiredTarget.copy(point);
    constrainTarget();
    desired.radius = clamp(Number.isFinite(options.radius) ? options.radius : viewportWidth < 650 ? 20 : 13.5, minRadius, maxRadius);
    if (Number.isFinite(options.theta)) {
      const turns = Math.round((current.theta - options.theta) / (Math.PI * 2));
      desired.theta = options.theta + turns * Math.PI * 2;
    }
    if (Number.isFinite(options.phi)) desired.phi = clamp(options.phi, MIN_PHI, MAX_PHI);
    moving = true;
    if (options.immediate || reducedMotion) snap();
  }

  function update(dt) {
    if (!moving) return false;
    const elapsed = Number.isFinite(dt) ? clamp(dt, 0, .1) : 1 / 60;
    const blend = reducedMotion ? 1 : 1 - Math.exp(-elapsed * 10);
    target.lerp(desiredTarget, blend);
    current.radius = THREE.MathUtils.lerp(current.radius, desired.radius, blend);
    current.theta = THREE.MathUtils.lerp(current.theta, desired.theta, blend);
    current.phi = THREE.MathUtils.lerp(current.phi, desired.phi, blend);
    const settled = target.distanceToSquared(desiredTarget) < 1e-7 &&
      Math.abs(current.radius - desired.radius) < 3e-4 &&
      Math.abs(current.theta - desired.theta) < 2e-5 && Math.abs(current.phi - desired.phi) < 2e-5;
    if (settled) snap();
    else placeCamera();
    return true;
  }

  resize(viewportWidth, viewportHeight);
  home(true);
  return {target, desiredTarget, resize, home, rotate, pan, zoom, focus, update,
    get moving() { return moving; }, get isHome() { return atHome; },
    get radius() { return current.radius; }, get homeRadius() { return homeRadius; },
    get theta() { return current.theta; }, get phi() { return current.phi; }};
}
