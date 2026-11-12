import * as THREE from 'three';

// A geometry renderer for browsers without WebGL. This projects the actual
// world-space triangles: no concept image, billboard, or pre-rendered view.
const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
const different = (a, b, epsilon = 1e-7) => !b || a.some((value, index) => Math.abs(value - b[index]) > epsilon);
// A lookup followed by an exact byte-boundary correction gives the same
// 8-bit sRGB quantisation without six Math.pow calls for every lit triangle.
const srgbLookup = new Uint8Array(65536);
const srgbBoundary = new Float64Array(257);
for (let i = 0; i < srgbLookup.length; i++) {
  const linear = i / 65535;
  srgbLookup[i] = Math.round((linear <= .0031308 ? linear * 12.92 : 1.055 * Math.pow(linear, 1 / 2.4) - .055) * 255);
}
for (let i = 1; i < 256; i++) {
  const encoded = (i - .5) / 255;
  srgbBoundary[i] = encoded <= .04045 ? encoded / 12.92 : Math.pow((encoded + .055) / 1.055, 2.4);
}
srgbBoundary[256] = Infinity;
const srgbByte = (linear) => {
  if (linear <= 0) return 0;
  if (linear >= 1) return 255;
  const value = srgbLookup[Math.round(linear * 65535)];
  return linear < srgbBoundary[value] ? value - 1 : linear >= srgbBoundary[value + 1] ? value + 1 : value;
};
function visible(object) {
  for (let node = object; node; node = node.parent) if (!node.visible) return false;
  return true;
}

export class PaperSoftwareRenderer {
  constructor() {
    this.isSoftwareRenderer = true;
    this.domElement = document.createElement('canvas');
    this.domElement.style.display = 'block';
    this.domElement.style.touchAction = 'none';
    this._context = this.domElement.getContext('2d', { alpha: true });
    if (!this._context) throw new Error('Canvas 2D is not available.');
    this._surface = document.createElement('canvas');
    this._surfaceContext = this._surface.getContext('2d', { alpha: true });
    this.shadowMap = { enabled: true, type: 0 };
    this.info = { render: { calls: 0, triangles: 0, frame: 0 } };
    this.toneMappingExposure = 1.15;
    this.outputColorSpace = THREE.SRGBColorSpace;
    this.autoClear = true;
    this._width = 1;
    this._height = 1;
    this._pixelRatio = 1;
    this._rasterRatio = 1;
    this._lastMotionTime = -Infinity;
    this._needsRefinement = false;
    this._clearColor = new THREE.Color(0);
    this._clearAlpha = 0;
    this._dirty = true;
    this._records = [];
    this._materials = [];
    this._matrix = new THREE.Matrix4();
    this._visibilityMatrix = new THREE.Matrix4();
    this._normalMatrix = new THREE.Matrix3();
    this._lightDirection = new THREE.Vector3(-12, 22, 10).normalize();
    this._sunColor = new THREE.Color('#fff1d9');
    this._sunIntensity = 3.3;
    this._order = [];
    this._translucentOrder = [];
    this._staticOrder = [];
    this._dynamicOrder = [];
    this._staticCacheValid = false;
    this._motionRatio = .60;
    this._lastFrameMilliseconds = 0;
    this._depthBins = new Uint32Array(16384);
    this._lastCamera = null;
    this._lastLighting = '';
    this._styles = [];
    this._styleTable = new Map();
    this._materialStates = [];
    this._compareDepth = (a, b) => this._depth[b] - this._depth[a];
  }

  setPixelRatio(value = 1) {
    const next = clamp(Number(value) || 1, .5, 1.25);
    if (next !== this._pixelRatio) {
      this._pixelRatio = next;
      if (!this._needsRefinement) this._rasterRatio = next;
      this.setSize(this._width, this._height);
    }
  }

  getPixelRatio() { return this._pixelRatio; }

  setClearColor(color, alpha = 1) {
    this._clearColor.set(color);
    this._clearAlpha = clamp(alpha, 0, 1);
    this._dirty = true;
  }

  setSize(width, height, updateStyle = true) {
    this._width = Math.max(1, Math.round(width));
    this._height = Math.max(1, Math.round(height));
    this.domElement.width = Math.round(this._width * this._pixelRatio);
    this.domElement.height = Math.round(this._height * this._pixelRatio);
    if (updateStyle) {
      this.domElement.style.width = `${this._width}px`;
      this.domElement.style.height = `${this._height}px`;
    }
    this._dirty = true;
  }

  getSize(target = new THREE.Vector2()) { return target.set(this._width, this._height); }

  /**
   * Query the most recently rendered depth buffer without a raycast or redraw.
   * `point` is a world-space Vector3; `epsilon` is an NDC-depth tolerance, not
   * a world-space distance (the default is 0.00002 in the [-1, 1] depth range).
   * Four neighbouring pixel centres conservatively cover the projected point:
   * only an occluder covering that whole footprint can hide it. This prevents
   * paper edges and the motion-resolution grid from self-occluding a photo.
   * Missing/stale buffers return true; points outside the rendered frustum
   * return false. Only surfaces that wrote depth count as occluders.
   */
  isWorldPointVisible(point, camera, epsilon = 2e-5) {
    if (!this._zBuffer || !this._lastCamera || this._dirty || !camera) return true;
    const matrix = this._visibilityMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    // The caller may have moved a camera before the next render. A depth image
    // from another view cannot reliably hide the new view's photo overlays.
    if (different(matrix.elements, this._lastCamera, 1e-6)) return true;
    const m = matrix.elements, x = point.x, y = point.y, z = point.z;
    const clipW = m[3] * x + m[7] * y + m[11] * z + m[15];
    if (!(clipW > 0)) return false;
    const ndcX = (m[0] * x + m[4] * y + m[8] * z + m[12]) / clipW;
    const ndcY = (m[1] * x + m[5] * y + m[9] * z + m[13]) / clipW;
    const ndcZ = (m[2] * x + m[6] * y + m[10] * z + m[14]) / clipW;
    if (!Number.isFinite(ndcX + ndcY + ndcZ) || ndcX < -1 || ndcX > 1 ||
      ndcY < -1 || ndcY > 1 || ndcZ < -1 || ndcZ > 1) return false;
    const width = this._surface.width, height = this._surface.height;
    const sampleX = Math.floor((ndcX * .5 + .5) * width - .5);
    const sampleY = Math.floor((.5 - ndcY * .5) * height - .5);
    let farthestDepth = -Infinity;
    for (let dy = 0; dy < 2; dy++) {
      const row = clamp(sampleY + dy, 0, height - 1) * width;
      for (let dx = 0; dx < 2; dx++) {
        const depth = this._zBuffer[row + clamp(sampleX + dx, 0, width - 1)];
        if (depth === Infinity) return true;
        farthestDepth = Math.max(farthestDepth, depth);
      }
    }
    return ndcZ <= farthestDepth + Math.max(0, Number(epsilon) || 0);
  }

  compile(scene, camera) {
    scene.updateMatrixWorld(true);
    camera.updateMatrixWorld(true);
    this._scene = scene;
    this._records = [];
    this._materials = [];
    const materialIds = new Map();
    const indices = [], faceMaterials = [], owners = [], vertexColors = [], smoothOffsets = [];
    let smoothColorCount = 0;
    let vertexCount = 0;
    scene.traverse((object) => {
      if (!object.isMesh || !object.geometry?.attributes?.position) return;
      const list = Array.isArray(object.material) ? object.material : [object.material];
      if (!list.some(mat => mat && !mat.isShadowMaterial)) return;
      const geometry = object.geometry;
      const position = geometry.attributes.position;
      const color = geometry.attributes.color;
      const record = {
        object, geometry, vertexStart: vertexCount, vertexCount: position.count,
        faceStart: faceMaterials.length, faceCount: 0, matrix: null, active: visible(object),
        positionVersion: position.version, normalVersion: geometry.attributes.normal?.version,
        colorVersion: color?.version, materialIds: new Set(), visibleFaces: [],
        projectDirty: true, orderDirty: true, shadeDirty: true, dynamic: false,
        smoothWater: Boolean(object.userData.water && (!object.userData.falls || object.userData.flowSurface)),
        minimumDepth: Infinity, maximumDepth: -Infinity,
      };
      const owner = this._records.length;
      this._records.push(record);
      const index = geometry.index;
      const total = index ? index.count : position.count;
      const drawStart = geometry.drawRange.start || 0;
      const drawEnd = Math.min(total, drawStart + geometry.drawRange.count);
      const groups = Array.isArray(object.material) && geometry.groups.length
        ? geometry.groups : [{ start: 0, count: total, materialIndex: 0 }];
      for (const part of groups) {
        const mat = list[part.materialIndex || 0];
        if (!mat || mat.isShadowMaterial) continue;
        if (!materialIds.has(mat)) {
          materialIds.set(mat, this._materials.length);
          this._materials.push(mat);
        }
        const id = materialIds.get(mat);
        record.materialIds.add(id);
        const start = Math.max(part.start, drawStart);
        const end = Math.min(part.start + part.count, drawEnd);
        for (let at = start; at + 2 < end; at += 3) {
          const a = index ? index.getX(at) : at;
          const b = index ? index.getX(at + 1) : at + 1;
          const c = index ? index.getX(at + 2) : at + 2;
          indices.push(vertexCount + a, vertexCount + b, vertexCount + c);
          faceMaterials.push(id);
          owners.push(owner);
          // Only mineral lake surfaces need continuous colour. The folded
          // paper, forest and falling-water sculpture retain their flat faces.
          smoothOffsets.push(record.smoothWater ? smoothColorCount : -1);
          if (record.smoothWater) smoothColorCount += 9;
          if (color && mat.vertexColors) {
            vertexColors.push(
              (color.getX(a) + color.getX(b) + color.getX(c)) / 3,
              (color.getY(a) + color.getY(b) + color.getY(c)) / 3,
              (color.getZ(a) + color.getZ(b) + color.getZ(c)) / 3,
            );
          } else vertexColors.push(1, 1, 1);
        }
      }
      record.faceCount = faceMaterials.length - record.faceStart;
      vertexCount += position.count;
    });
    this._positions = new Float32Array(vertexCount * 3);
    this._projected = new Float32Array(vertexCount * 3);
    this._clipW = new Float32Array(vertexCount);
    this._indices = new Uint32Array(indices);
    this._faceMaterials = new Uint16Array(faceMaterials);
    this._owners = new Uint16Array(owners);
    this._vertexColors = new Float32Array(vertexColors);
    this._smoothColorOffsets = new Int32Array(smoothOffsets);
    this._smoothFrontColors = new Float32Array(smoothColorCount);
    this._smoothBackColors = new Float32Array(smoothColorCount);
    this._normals = new Float32Array(faceMaterials.length * 3);
    this._flips = new Int8Array(faceMaterials.length);
    this._depth = new Float32Array(faceMaterials.length);
    this._faceBins = new Uint16Array(faceMaterials.length);
    this._sortedOrder = new Uint32Array(faceMaterials.length);
    this._frontFacing = new Uint8Array(faceMaterials.length);
    this._front = new Uint32Array(faceMaterials.length);
    this._back = new Uint32Array(faceMaterials.length);
    this._drawStyle = new Uint32Array(faceMaterials.length);
    this._styles = [];
    this._styleTable.clear();
    this._materialStates = [];
    this._staticCacheValid = false;
    for (const record of this._records) this._updateWorld(record);
    this._lastCamera = null;
    this._lastLighting = '';
    this._lastMaterials = '';
    this._dirty = true;
  }

  _updateWorld(record) {
    const geometry = record.geometry, position = geometry.attributes.position;
    const normal = geometry.attributes.normal;
    const world = record.object.matrixWorld;
    const m = world.elements;
    const positions = this._positions;
    const first = record.vertexStart;
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i), y = position.getY(i), z = position.getZ(i);
      const p = (first + i) * 3;
      positions[p] = m[0] * x + m[4] * y + m[8] * z + m[12];
      positions[p + 1] = m[1] * x + m[5] * y + m[9] * z + m[13];
      positions[p + 2] = m[2] * x + m[6] * y + m[10] * z + m[14];
    }
    const n = this._normalMatrix.getNormalMatrix(world).elements;
    const flip = world.determinant() < 0 ? -1 : 1;
    for (let face = record.faceStart; face < record.faceStart + record.faceCount; face++) {
      const j = face * 3;
      const ai = this._indices[j], bi = this._indices[j + 1], ci = this._indices[j + 2];
      let nx, ny, nz;
      if (normal) {
        const a = ai - first, b = bi - first, c = ci - first;
        const x = normal.getX(a) + normal.getX(b) + normal.getX(c);
        const y = normal.getY(a) + normal.getY(b) + normal.getY(c);
        const z = normal.getZ(a) + normal.getZ(b) + normal.getZ(c);
        nx = n[0] * x + n[3] * y + n[6] * z;
        ny = n[1] * x + n[4] * y + n[7] * z;
        nz = n[2] * x + n[5] * y + n[8] * z;
      } else {
        const a = ai * 3, b = bi * 3, c = ci * 3;
        const ux = positions[b] - positions[a], uy = positions[b + 1] - positions[a + 1], uz = positions[b + 2] - positions[a + 2];
        const vx = positions[c] - positions[a], vy = positions[c + 1] - positions[a + 1], vz = positions[c + 2] - positions[a + 2];
        nx = (uy * vz - uz * vy) * flip;
        ny = (uz * vx - ux * vz) * flip;
        nz = (ux * vy - uy * vx) * flip;
      }
      const length = Math.hypot(nx, ny, nz) || 1;
      this._normals[j] = nx / length;
      this._normals[j + 1] = ny / length;
      this._normals[j + 2] = nz / length;
      this._flips[face] = flip;
    }
    record.matrix = m.slice();
    record.positionVersion = position.version;
    record.normalVersion = normal?.version;
    record.projectDirty = record.orderDirty = record.shadeDirty = true;
  }

  _lighting(scene) {
    let firstSun = null;
    scene.traverse((object) => { if (!firstSun && object.isDirectionalLight && object.visible) firstSun = object; });
    if (firstSun) {
      const target = new THREE.Vector3().setFromMatrixPosition(firstSun.target.matrixWorld);
      this._lightDirection.setFromMatrixPosition(firstSun.matrixWorld).sub(target).normalize();
      this._sunColor.copy(firstSun.color);
      this._sunIntensity = firstSun.intensity;
    }
    return [this._lightDirection.x, this._lightDirection.y, this._lightDirection.z,
      this._sunColor.r, this._sunColor.g, this._sunColor.b, this._sunIntensity,
      this.toneMappingExposure].map(n => Math.round(n * 700)).join(',');
  }

  _updateFaceColors(record) {
    const color = record.geometry.attributes.color, out = this._vertexColors;
    const first = record.vertexStart, indices = this._indices;
    for (let face = record.faceStart, end = face + record.faceCount; face < end; face++) {
      const j = face * 3, mat = this._materials[this._faceMaterials[face]];
      if (color && mat.vertexColors) {
        const a = indices[j] - first, b = indices[j + 1] - first, c = indices[j + 2] - first;
        out[j] = (color.getX(a) + color.getX(b) + color.getX(c)) / 3;
        out[j + 1] = (color.getY(a) + color.getY(b) + color.getY(c)) / 3;
        out[j + 2] = (color.getZ(a) + color.getZ(b) + color.getZ(c)) / 3;
      } else out[j] = out[j + 1] = out[j + 2] = 1;
    }
    record.colorVersion = color?.version;
    record.shadeDirty = true;
  }

  _shadeFaces(records = null) {
    // Style identities persist when only a traveller, a leaf, or a material
    // changes. Opacity is deliberately not part of a colour: it belongs to
    // fragment compositing and must never relight the whole forest.
    if (!records) { this._styles.length = 0; this._styleTable.clear(); }
    const styles = this._styles, table = this._styleTable, colors = this._vertexColors;
    const light = this._lightDirection, sun = this._sunColor;
    const exposure = .86 + this.toneMappingExposure * .12;
    const direct = clamp(this._sunIntensity / 2.65, .25, 1.2);
    const normal = this._normals;
    const styleFor = (face, sign) => {
      const mat = this._materials[this._faceMaterials[face]];
      const j = face * 3;
      let strength = 1;
      if (!mat.isMeshBasicMaterial) {
        const dot = (normal[j] * light.x + normal[j + 1] * light.y + normal[j + 2] * light.z) * sign;
        // A broad sky fill and wrapped key make shallow folds readable without
        // turning their back faces brown. The GPU uses the same open-sky art
        // direction with a hemisphere fill and a softer direct-to-fill ratio.
        const sky = .5 + .5 * normal[j + 1] * sign;
        const wrapped = Math.max(0, (dot + .35) / 1.35);
        strength = .57 + .34 * wrapped * direct + .13 * sky;
        strength = Math.round(strength * 100) / 100;
      }
      const base = mat.color || { r: 1, g: 1, b: 1 };
      const warm = mat.isMeshBasicMaterial ? 0 : .12;
      const smoothOffset = this._smoothColorOffsets[face];
      if (smoothOffset >= 0) {
        const record = this._records[this._owners[face]], attribute = record.geometry.attributes.color;
        const out = sign > 0 ? this._smoothFrontColors : this._smoothBackColors;
        const red = base.r * strength * exposure * (1 - warm + sun.r * warm);
        const green = base.g * strength * exposure * (1 - warm + sun.g * warm);
        const blue = base.b * strength * exposure * (1 - warm + sun.b * warm);
        for (let corner = 0; corner < 3; corner++) {
          const vertex = this._indices[j + corner] - record.vertexStart, at = smoothOffset + corner * 3;
          out[at] = red * (attribute && mat.vertexColors ? attribute.getX(vertex) : 1);
          out[at + 1] = green * (attribute && mat.vertexColors ? attribute.getY(vertex) : 1);
          out[at + 2] = blue * (attribute && mat.vertexColors ? attribute.getZ(vertex) : 1);
        }
      }
      const r = srgbByte(base.r * colors[j] * strength * exposure * (1 - warm + sun.r * warm));
      const g = srgbByte(base.g * colors[j + 1] * strength * exposure * (1 - warm + sun.g * warm));
      const b = srgbByte(base.b * colors[j + 2] * strength * exposure * (1 - warm + sun.b * warm));
      const key = r | (g << 8) | (b << 16);
      let id = table.get(key);
      if (id === undefined) {
        id = styles.length;
        table.set(key, id);
        styles.push({ r, g, b, pixel: (key | (255 << 24)) >>> 0 });
      }
      return id;
    };
    for (const record of records || this._records) {
      for (let face = record.faceStart, end = face + record.faceCount; face < end; face++) {
        this._front[face] = styleFor(face, 1);
        this._back[face] = styleFor(face, -1);
        this._drawStyle[face] = this._frontFacing[face] ? this._front[face] : this._back[face];
      }
      record.shadeDirty = false;
      this._shadedFaces += record.faceCount;
    }
  }

  _project(matrix, records = this._records) {
    const p = this._positions, out = this._projected, wValues = this._clipW;
    const m = matrix.elements, halfWidth = this._width / 2, halfHeight = this._height / 2;
    for (const record of records) {
      if (!record.active) continue;
      const end = record.vertexStart + record.vertexCount;
      for (let vertex = record.vertexStart, i = vertex * 3; vertex < end; vertex++, i += 3) {
        const x = p[i], y = p[i + 1], z = p[i + 2];
        const w = m[3] * x + m[7] * y + m[11] * z + m[15];
        const reciprocal = 1 / w;
        out[i] = (1 + (m[0] * x + m[4] * y + m[8] * z + m[12]) * reciprocal) * halfWidth;
        out[i + 1] = (1 - (m[1] * x + m[5] * y + m[9] * z + m[13]) * reciprocal) * halfHeight;
        out[i + 2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) * reciprocal;
        wValues[vertex] = w;
      }
      record.projectDirty = false;
      record.orderDirty = true;
      this._projectedVertices += record.vertexCount;
    }
  }

  _collectFaces(record, areaThreshold) {
    const order = record.visibleFaces; order.length = 0;
    record.orderDirty = false;
    record.minimumDepth = Infinity;
    record.maximumDepth = -Infinity;
    if (!record.active) return;
    const p = this._projected, idx = this._indices, depths = this._depth;
    const width = this._width, height = this._height, w = this._clipW;
    const singleMaterial = record.materialIds.size === 1
      ? this._materials[record.materialIds.values().next().value] : null;
    if (singleMaterial && (!singleMaterial.visible || (singleMaterial.transparent && singleMaterial.opacity <= 0))) return;
    for (let face = record.faceStart, end = face + record.faceCount; face < end; face++) {
      const mat = singleMaterial || this._materials[this._faceMaterials[face]];
      if (!singleMaterial && (!mat.visible || (mat.transparent && mat.opacity <= 0))) continue;
      const j = face * 3, ai = idx[j], bi = idx[j + 1], ci = idx[j + 2];
      if (w[ai] <= 0 || w[bi] <= 0 || w[ci] <= 0) continue;
      const a = ai * 3, b = bi * 3, c = ci * 3;
      const ax = p[a], ay = p[a + 1], bx = p[b], by = p[b + 1], cx = p[c], cy = p[c + 1];
      if ((ax < -1 && bx < -1 && cx < -1) || (ax > width + 1 && bx > width + 1 && cx > width + 1) ||
        (ay < -1 && by < -1 && cy < -1) || (ay > height + 1 && by > height + 1 && cy > height + 1)) continue;
      if ((p[a + 2] < -1 && p[b + 2] < -1 && p[c + 2] < -1) ||
        (p[a + 2] > 1 && p[b + 2] > 1 && p[c + 2] > 1)) continue;
      const area = (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
      if (Math.abs(area) < areaThreshold) continue;
      const front = area * this._flips[face] < 0;
      if ((mat.side === THREE.FrontSide && !front) || (mat.side === THREE.BackSide && front)) continue;
      depths[face] = (p[a + 2] + p[b + 2] + p[c + 2]) / 3;
      record.minimumDepth = Math.min(record.minimumDepth, depths[face]);
      record.maximumDepth = Math.max(record.maximumDepth, depths[face]);
      this._frontFacing[face] = front ? 1 : 0;
      this._drawStyle[face] = front ? this._front[face] : this._back[face];
      order.push(face);
    }
  }

  _groundShadow(matrix) {
    const point = (x, y, z) => {
      const p = new THREE.Vector3(x, y, z).applyMatrix4(matrix);
      return [(p.x + 1) * this._width / 2, (1 - p.y) * this._height / 2];
    };
    // Extend the soft grounding shadow beyond the actual paper silhouette.
    // The old ellipse sat inside the island and was hidden by its geometry.
    const center = point(.55, -1.08, .7), x = point(15.85, -1.08, .7), z = point(.55, -1.08, 12.5);
    const ctx = this._context;
    ctx.save();
    ctx.transform(x[0] - center[0], x[1] - center[1], z[0] - center[0], z[1] - center[1], center[0], center[1]);
    const gradient = ctx.createRadialGradient(0, 0, .18, 0, 0, 1.18);
    gradient.addColorStop(0, 'rgba(101,65,43,0.26)');
    gradient.addColorStop(.8, 'rgba(101,65,43,0.17)');
    gradient.addColorStop(1, 'rgba(91,65,45,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(-1.2, -1.2, 2.4, 2.4);
    ctx.restore();
  }

  _rasterize() {
    const width = Math.max(1, Math.round(this._width * this._rasterRatio));
    const height = Math.max(1, Math.round(this._height * this._rasterRatio));
    if (!this._image || this._surface.width !== width || this._surface.height !== height) {
      this._surface.width = width;
      this._surface.height = height;
      this._image = this._surfaceContext.createImageData(width, height);
      this._pixels = new Uint32Array(this._image.data.buffer);
      this._zBuffer = new Float32Array(width * height);
      this._staticPixels = new Uint32Array(width * height);
      this._staticDepth = new Float32Array(width * height);
      this._staticCacheValid = false;
    }
    const pixels = this._pixels, depthBuffer = this._zBuffer;
    const p = this._projected, indices = this._indices, order = this._order;
    const ratioX = width / this._width, ratioY = height / this._height;
    // This is a retained colour/depth buffer, not an image-based landscape.
    // Every camera change invalidates it. At a fixed viewpoint the immutable
    // geometry is rasterised once; moving paper keeps its real fragment depth.
    const cacheEnabled = !this._needsRefinement;
    const reuseStatic = cacheEnabled && this._staticCacheValid;
    if (reuseStatic) { pixels.set(this._staticPixels); depthBuffer.set(this._staticDepth); }
    else { pixels.fill(0); depthBuffer.fill(Infinity); }
    const staticOrder = this._staticOrder, dynamicOrder = this._dynamicOrder;
    staticOrder.length = dynamicOrder.length = this._translucentOrder.length = 0;
    for (let i = 0; i < order.length; i++) {
      const face = order[i], mat = this._materials[this._faceMaterials[face]];
      const alpha = mat.transparent ? clamp(mat.opacity ?? 1, 0, 1) : 1;
      if (alpha <= 0) continue;
      if (alpha < .999) this._translucentOrder.push(face);
      else if (!cacheEnabled || this._records[this._owners[face]].dynamic || mat.depthWrite === false || mat.depthTest === false) dynamicOrder.push(face);
      else if (!reuseStatic) staticOrder.push(face);
    }
    // A translucent lake is always drawn after both static and moving opaque
    // geometry. Its submerged branches remain in the z-buffer, so revealing
    // the water cannot accidentally reuse the previous opaque lake image.
    this._translucentOrder.sort(this._compareDepth);
    const rebuildStatic = cacheEnabled && !reuseStatic;
    const passes = rebuildStatic ? [staticOrder, dynamicOrder, this._translucentOrder] : [dynamicOrder, this._translucentOrder];
    for (let pass = 0; pass < passes.length; pass++) {
      const passOrder = passes[pass];
      const translucent = passOrder === this._translucentOrder;
      for (let at = 0; at < passOrder.length; at++) {
        const face = passOrder[at], mat = this._materials[this._faceMaterials[face]];
        const style = this._styles[this._drawStyle[face]];
        const alpha = mat.transparent ? clamp(mat.opacity ?? 1, 0, 1) : 1;
        const j = face * 3, ai = indices[j] * 3, bi = indices[j + 1] * 3, ci = indices[j + 2] * 3;
        let ax = p[ai] * ratioX, ay = p[ai + 1] * ratioY, az = p[ai + 2];
        let bx = p[bi] * ratioX, by = p[bi + 1] * ratioY, bz = p[bi + 2];
        let cx = p[ci] * ratioX, cy = p[ci + 1] * ratioY, cz = p[ci + 2];
        let va = 0, vb = 3, vc = 6;
        let swap;
        if (ay > by) { swap=ax; ax=bx; bx=swap; swap=ay; ay=by; by=swap; swap=az; az=bz; bz=swap; swap=va; va=vb; vb=swap; }
        if (by > cy) { swap=bx; bx=cx; cx=swap; swap=by; by=cy; cy=swap; swap=bz; bz=cz; cz=swap; swap=vb; vb=vc; vc=swap; }
        if (ay > by) { swap=ax; ax=bx; bx=swap; swap=ay; ay=by; by=swap; swap=az; az=bz; bz=swap; swap=va; va=vb; vb=swap; }
        const area = (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
        if (Math.abs(area) < .00001 || cy - ay < .00001) continue;
        const dzdx = ((bz - az) * (cy - ay) - (cz - az) * (by - ay)) / area;
        const dzdy = ((bx - ax) * (cz - az) - (cx - ax) * (bz - az)) / area;
        const longSlope = (cx - ax) / (cy - ay);
        const upperSlope = by - ay > .00001 ? (bx - ax) / (by - ay) : 0;
        const lowerSlope = cy - by > .00001 ? (cx - bx) / (cy - by) : 0;
        const firstY = Math.max(0, Math.ceil(ay - .5));
        const lastY = Math.min(height - 1, Math.ceil(cy - .5) - 1);
        const packedColor = style.pixel;
        const depthTest = mat.depthTest !== false, depthWrite = mat.depthWrite !== false;
        const smoothOffset = this._smoothColorOffsets[face];
        let redA=0, greenA=0, blueA=0, inverseWA=0;
        let redDX=0, greenDX=0, blueDX=0, inverseWDX=0;
        let redDY=0, greenDY=0, blueDY=0, inverseWDY=0;
        if (smoothOffset >= 0) {
          // Interpolate colour / clip-W and 1 / clip-W as screen-space planes.
          // Recovering their ratio at the pixel matches perspective-correct
          // vertex colour in WebGL and avoids a seam along a lake's triangles.
          const colors = this._frontFacing[face] ? this._smoothFrontColors : this._smoothBackColors;
          inverseWA = 1 / this._clipW[indices[j + va / 3]];
          const inverseWB = 1 / this._clipW[indices[j + vb / 3]];
          const inverseWC = 1 / this._clipW[indices[j + vc / 3]];
          redA = colors[smoothOffset + va] * inverseWA;
          greenA = colors[smoothOffset + va + 1] * inverseWA;
          blueA = colors[smoothOffset + va + 2] * inverseWA;
          const redB=colors[smoothOffset + vb]*inverseWB, redC=colors[smoothOffset + vc]*inverseWC;
          const greenB=colors[smoothOffset + vb + 1]*inverseWB, greenC=colors[smoothOffset + vc + 1]*inverseWC;
          const blueB=colors[smoothOffset + vb + 2]*inverseWB, blueC=colors[smoothOffset + vc + 2]*inverseWC;
          const dxB=bx-ax, dxC=cx-ax, dyB=by-ay, dyC=cy-ay;
          redDX=((redB-redA)*dyC-(redC-redA)*dyB)/area;
          greenDX=((greenB-greenA)*dyC-(greenC-greenA)*dyB)/area;
          blueDX=((blueB-blueA)*dyC-(blueC-blueA)*dyB)/area;
          inverseWDX=((inverseWB-inverseWA)*dyC-(inverseWC-inverseWA)*dyB)/area;
          redDY=(dxB*(redC-redA)-dxC*(redB-redA))/area;
          greenDY=(dxB*(greenC-greenA)-dxC*(greenB-greenA))/area;
          blueDY=(dxB*(blueC-blueA)-dxC*(blueB-blueA))/area;
          inverseWDY=(dxB*(inverseWC-inverseWA)-dxC*(inverseWB-inverseWA))/area;
        }
        for (let y = firstY; y <= lastY; y++) {
          const centerY = y + .5;
          const edgeA = ax + (centerY - ay) * longSlope;
          const edgeB = centerY < by ? ax + (centerY - ay) * upperSlope : bx + (centerY - by) * lowerSlope;
          const firstX = Math.max(0, Math.ceil(Math.min(edgeA, edgeB) - .5));
          const lastX = Math.min(width - 1, Math.ceil(Math.max(edgeA, edgeB) - .5) - 1);
          let z = az + dzdx * (firstX + .5 - ax) + dzdy * (centerY - ay);
          let pixel = y * width + firstX;
          if (smoothOffset >= 0) {
            const dx=firstX+.5-ax, dy=centerY-ay;
            let red=redA+redDX*dx+redDY*dy, green=greenA+greenDX*dx+greenDY*dy;
            let blue=blueA+blueDX*dx+blueDY*dy, inverseW=inverseWA+inverseWDX*dx+inverseWDY*dy;
            for (let x=firstX; x<=lastX; x++, pixel++, z+=dzdx,
              red+=redDX, green+=greenDX, blue+=blueDX, inverseW+=inverseWDX) {
              if (z < -1 || z > 1 || (depthTest && z > depthBuffer[pixel] + 1e-7)) continue;
              const w=1/inverseW;
              let r=srgbByte(red*w), g=srgbByte(green*w), b=srgbByte(blue*w), outputAlpha=255;
              if (translucent) {
                const old=pixels[pixel], oldAlpha=(old>>>24)/255;
                const outAlpha=alpha+oldAlpha*(1-alpha), oldWeight=oldAlpha*(1-alpha);
                r=Math.round((r*alpha+(old&255)*oldWeight)/outAlpha);
                g=Math.round((g*alpha+((old>>>8)&255)*oldWeight)/outAlpha);
                b=Math.round((b*alpha+((old>>>16)&255)*oldWeight)/outAlpha);
                outputAlpha=Math.round(outAlpha*255);
              }
              pixels[pixel]=(r|(g<<8)|(b<<16)|(outputAlpha<<24))>>>0;
              if (depthWrite) depthBuffer[pixel]=z;
            }
          } else if (!translucent) {
            for (let x = firstX; x <= lastX; x++, pixel++, z += dzdx) {
              if (z < -1 || z > 1 || (depthTest && z > depthBuffer[pixel] + 1e-7)) continue;
              pixels[pixel] = packedColor;
              if (depthWrite) depthBuffer[pixel] = z;
            }
          } else {
            for (let x = firstX; x <= lastX; x++, pixel++, z += dzdx) {
              if (z < -1 || z > 1 || (depthTest && z > depthBuffer[pixel] + 1e-7)) continue;
              const old = pixels[pixel], oldAlpha = (old >>> 24) / 255;
              const outAlpha = alpha + oldAlpha * (1 - alpha);
              const oldWeight = oldAlpha * (1 - alpha);
              const r = Math.round((style.r * alpha + (old & 255) * oldWeight) / outAlpha);
              const g = Math.round((style.g * alpha + ((old >>> 8) & 255) * oldWeight) / outAlpha);
              const b = Math.round((style.b * alpha + ((old >>> 16) & 255) * oldWeight) / outAlpha);
              pixels[pixel] = (r | (g << 8) | (b << 16) | (Math.round(outAlpha * 255) << 24)) >>> 0;
              if (depthWrite) depthBuffer[pixel] = z;
            }
          }
        }
      }
      if (rebuildStatic && pass === 0) {
        this._staticPixels.set(pixels);
        this._staticDepth.set(depthBuffer);
        this._staticCacheValid = true;
      }
    }
    this._surfaceContext.putImageData(this._image, 0, 0);
    this._context.imageSmoothingEnabled = true;
    this._context.imageSmoothingQuality = 'high';
    this._context.drawImage(this._surface, 0, 0, this._width, this._height);
  }

  _sortDepth(minimum, maximum) {
    const order = this._order, bins = this._depthBins, faceBins = this._faceBins;
    const depth = this._depth, sorted = this._sortedOrder;
    bins.fill(0);
    const factor = (bins.length - 1) / Math.max(maximum - minimum, 1e-9);
    for (let i = 0; i < order.length; i++) {
      const face = order[i], bin = clamp(Math.floor((depth[face] - minimum) * factor), 0, bins.length - 1);
      faceBins[face] = bin;
      bins[bin]++;
    }
    let offset = 0;
    for (let i = bins.length - 1; i >= 0; i--) {
      const count = bins[i];
      bins[i] = offset;
      offset += count;
    }
    for (let i = 0; i < order.length; i++) {
      const face = order[i];
      sorted[bins[faceBins[face]]++] = face;
    }
    for (let i = 0; i < order.length; i++) order[i] = sorted[i];
    // A fine depth bucket order is enough for traversal; exact per-pixel
    // depth comparisons, rather than bucket order, decide visible surfaces.
  }

  render(scene, camera) {
    if (this._scene !== scene || !this._positions) this.compile(scene, camera);
    scene.updateMatrixWorld();
    camera.updateMatrixWorld();
    this._matrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    const cameraChanged = different(this._matrix.elements, this._lastCamera, 1e-6);
    const now = performance.now(), wasRefining = this._needsRefinement, previousRatio = this._rasterRatio;
    if (cameraChanged && this._lastCamera) {
      this._lastMotionTime = now;
      this._needsRefinement = true;
      if (!wasRefining) this._motionRatio = .60;
      else if (this._lastFrameMilliseconds > 85) this._motionRatio = Math.max(.42, this._motionRatio - .06);
      else if (this._lastFrameMilliseconds < 40) this._motionRatio = Math.min(.66, this._motionRatio + .03);
      this._rasterRatio = Math.min(this._pixelRatio, this._motionRatio);
    } else if (this._needsRefinement && now - this._lastMotionTime >= 150) {
      this._needsRefinement = false;
      this._rasterRatio = this._pixelRatio;
    }
    const qualityChanged = wasRefining !== this._needsRefinement || previousRatio !== this._rasterRatio;
    let worldChanged = false, visibilityChanged = false, colorsChanged = false;
    for (const record of this._records) {
      if (different(record.object.matrixWorld.elements, record.matrix) ||
        record.geometry.attributes.position.version !== record.positionVersion ||
        record.geometry.attributes.normal?.version !== record.normalVersion) {
        if (!record.dynamic) this._staticCacheValid = false;
        record.dynamic = true;
        this._updateWorld(record);
        worldChanged = true;
      }
      if (record.geometry.attributes.color?.version !== record.colorVersion) {
        if (!record.dynamic) this._staticCacheValid = false;
        record.dynamic = true;
        this._updateFaceColors(record);
        colorsChanged = true;
      }
      const active = visible(record.object);
      if (active !== record.active) {
        if (!record.dynamic) this._staticCacheValid = false;
        record.dynamic = true;
        record.active = active;
        record.projectDirty = record.orderDirty = true;
        visibilityChanged = true;
      }
    }
    const lighting = this._lighting(scene), lightingChanged = lighting !== this._lastLighting;
    const shadeMaterials = new Set(), cullMaterials = new Set(), colorMaterials = new Set(), rasterMaterials = new Set();
    let materialsChanged = false;
    for (let id = 0; id < this._materials.length; id++) {
      const mat = this._materials[id], old = this._materialStates[id];
      const state = [mat.color?.r, mat.color?.g, mat.color?.b, mat.opacity, mat.transparent,
        mat.visible, mat.side, mat.depthTest, mat.depthWrite, mat.vertexColors];
      if (!old || state.some((value, i) => value !== old[i])) {
        materialsChanged = true;
        if (old) rasterMaterials.add(id);
      }
      if (!old || state[0] !== old[0] || state[1] !== old[1] || state[2] !== old[2] || state[9] !== old[9]) shadeMaterials.add(id);
      if (!old || state[5] !== old[5] || state[6] !== old[6] ||
        Boolean(state[4] && state[3] <= 0) !== Boolean(old[4] && old[3] <= 0)) cullMaterials.add(id);
      if (old && state[9] !== old[9]) colorMaterials.add(id);
      this._materialStates[id] = state;
    }
    if (!cameraChanged && !worldChanged && !visibilityChanged && !colorsChanged && !materialsChanged &&
      !lightingChanged && !qualityChanged && !this._dirty) return;
    this._shadedFaces = 0;
    this._projectedVertices = 0;
    const shadeRecords = [], projectRecords = [];
    for (const record of this._records) {
      for (const id of record.materialIds) {
        if (rasterMaterials.has(id)) {
          if (!record.dynamic) this._staticCacheValid = false;
          record.dynamic = true;
        }
        if (colorMaterials.has(id)) this._updateFaceColors(record);
        if (shadeMaterials.has(id)) record.shadeDirty = true;
        if (cullMaterials.has(id)) record.orderDirty = true;
      }
      if (record.shadeDirty) shadeRecords.push(record);
      if (record.projectDirty) projectRecords.push(record);
    }
    if (lightingChanged || cameraChanged || qualityChanged || this._dirty) this._staticCacheValid = false;
    if (lightingChanged || !this._styles.length) this._shadeFaces();
    else if (shadeRecords.length) this._shadeFaces(shadeRecords);
    if (cameraChanged || this._dirty) this._project(this._matrix);
    else if (projectRecords.length) this._project(this._matrix, projectRecords);
    this._lastCamera = this._matrix.elements.slice();
    this._lastLighting = lighting;
    const fullCull = cameraChanged || qualityChanged || this._dirty;
    // During travel only triangles substantially smaller than a raster pixel
    // are omitted. As soon as the camera settles every original face is
    // evaluated again at the unchanged full-quality threshold and pixel ratio.
    const areaThreshold = this._needsRefinement ? .55 / (this._rasterRatio * this._rasterRatio) : .03;
    const order = this._order;
    let orderChanged = fullCull;
    for (const record of this._records) {
      if (fullCull || record.orderDirty) { this._collectFaces(record, areaThreshold); orderChanged = true; }
    }
    if (orderChanged) {
      order.length = 0;
      let minimumDepth = Infinity, maximumDepth = -Infinity;
      for (const record of this._records) {
        const faces = record.visibleFaces;
        for (let i = 0; i < faces.length; i++) order.push(faces[i]);
        minimumDepth = Math.min(minimumDepth, record.minimumDepth);
        maximumDepth = Math.max(maximumDepth, record.maximumDepth);
      }
      // Preserve the original full-quality tie order for coplanar paper
      // folds. Pure opacity/light updates reuse this already sorted list.
      this._sortDepth(minimumDepth, maximumDepth);
    }
    this._dirty = false;
    const width = this._width, height = this._height;
    const ctx = this._context, ratio = this._pixelRatio;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.domElement.width, this.domElement.height);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.globalAlpha = 1;
    if (this._clearAlpha > 0) {
      ctx.globalAlpha = this._clearAlpha;
      ctx.fillStyle = `#${this._clearColor.getHexString()}`;
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1;
    }
    if (scene.background?.isColor) {
      ctx.fillStyle = `#${scene.background.getHexString()}`;
      ctx.fillRect(0, 0, width, height);
    }
    if (this.shadowMap.enabled) this._groundShadow(this._matrix);
    this._rasterize();
    ctx.globalAlpha = 1;
    this.info.render.calls = 1;
    this.info.render.triangles = order.length;
    this.info.render.resolutionRatio = this._rasterRatio;
    this.info.render.quality = this._needsRefinement ? 'motion' : 'full';
    this.info.render.shadedTriangles = this._shadedFaces;
    this.info.render.projectedVertices = this._projectedVertices;
    this._lastFrameMilliseconds = performance.now() - now;
    this.info.render.frameMilliseconds = this._lastFrameMilliseconds;
    this.info.render.frame++;
  }

  dispose() {
    this._records = [];
    this._materials = [];
    this._styles = [];
    this._styleTable.clear();
    this._materialStates = [];
    this._order = [];
    this._positions = this._projected = this._indices = this._normals = null;
    this._smoothColorOffsets = this._smoothFrontColors = this._smoothBackColors = null;
    this._image = this._pixels = this._zBuffer = null;
    this._staticPixels = this._staticDepth = null;
    this._staticOrder = [];
    this._dynamicOrder = [];
    this._staticCacheValid = false;
    this._context.clearRect(0, 0, this.domElement.width, this.domElement.height);
    this._scene = null;
  }
}
