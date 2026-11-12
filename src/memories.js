const ALLOWED_IDS = new Set(['changhai', 'wucai', 'wuhua', 'pearl', 'mirror', 'nuorilang', 'shuzheng']);
const PREFIX = 'jiuzhai-paper-memories:v1:';
const MAX_INPUT_BYTES = 20 * 1024 * 1024;
const MAX_STORED_PHOTO_LENGTH = 1_800_000;
const MAX_ENCODED_PHOTO_LENGTH = 1_000_000;
const SUPPORTED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp']);

function assertId(id) {
  if (!ALLOWED_IDS.has(id)) throw new Error('没有找到这个景点，请重新选择一个地方。');
}

function validDate(date) {
  if (date === '') return true;
  if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const parsed = new Date(`${date}T12:00:00.000Z`);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === date;
}

function validPhoto(photo) {
  if (typeof photo !== 'string' || photo.length > MAX_STORED_PHOTO_LENGTH) return false;
  const match = /^data:image\/(jpeg|png|webp);base64,([A-Za-z0-9+/]+={0,2})$/.exec(photo);
  if (!match || match[2].length % 4 !== 0) return false;
  try {
    const header = atob(match[2].slice(0, 32));
    if (match[1] === 'jpeg') return header.startsWith('\xff\xd8\xff');
    if (match[1] === 'png') return header.startsWith('\x89PNG\r\n\x1a\n');
    return header.startsWith('RIFF') && header.slice(8, 12) === 'WEBP';
  } catch {
    return false;
  }
}

function normalizeMemory(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error('手记内容有些不完整，请重新填写后保存。');
  }
  const { text = '', date = '', photo = null } = value;
  if (typeof text !== 'string' || text.length > 1200) {
    throw new Error('这段记忆最多可以写 1200 个字，请稍微缩短一些。');
  }
  if (!validDate(date)) throw new Error('请选择一个有效日期，或把日期留空。');
  const normalizedPhoto = photo === '' || photo === null ? null : photo;
  if (normalizedPhoto !== null && !validPhoto(normalizedPhoto)) {
    throw new Error('照片格式或大小不合适，请通过“放入照片”重新选择 JPG、PNG 或 WebP 图片。');
  }
  return { text, date, photo: normalizedPhoto };
}

/** Read only the selected place. Missing, inaccessible or damaged records return null. */
export function loadMemory(id) {
  assertId(id);
  try {
    const raw = globalThis.localStorage.getItem(PREFIX + id);
    if (raw === null) return null;
    const parsed = JSON.parse(raw);
    const memory = normalizeMemory(parsed);
    if (typeof parsed.updatedAt !== 'string' || !Number.isFinite(Date.parse(parsed.updatedAt))) return null;
    return { ...memory, updatedAt: parsed.updatedAt };
  } catch {
    return null;
  }
}

/** Save a single place without deleting or changing any other browser data. */
export function saveMemory(id, value) {
  assertId(id);
  const memory = { ...normalizeMemory(value), updatedAt: new Date().toISOString() };
  try {
    globalThis.localStorage.setItem(PREFIX + id, JSON.stringify(memory));
  } catch (error) {
    if (error?.name === 'QuotaExceededError' || error?.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
      throw new Error('这个浏览器的保存空间不够了。可以换一张更小的照片，或先只保存文字。');
    }
    throw new Error('当前浏览器不允许保存手记。请检查隐私或存储设置，然后重试。');
  }
  return memory;
}

async function decodePhoto(file) {
  if (typeof globalThis.createImageBitmap === 'function') {
    try {
      const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
      return { image: bitmap, width: bitmap.width, height: bitmap.height, dispose: () => bitmap.close() };
    } catch {
      // The image element also applies EXIF orientation on supported browsers.
    }
  }
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.decoding = 'async';
    image.onload = () => resolve({ image, width: image.naturalWidth, height: image.naturalHeight, dispose: () => URL.revokeObjectURL(url) });
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('这张照片暂时无法打开。请换一张 JPG、PNG 或 WebP 图片。'));
    };
    image.src = url;
  });
}

/** Process the image in this browser only; this function makes no network request. */
export async function encodePhoto(file) {
  if (!file || typeof file.size !== 'number' || typeof file.type !== 'string' || typeof file.slice !== 'function') {
    throw new Error('请先选择一张照片。');
  }
  if (!SUPPORTED_TYPES.has(file.type.toLowerCase())) {
    throw new Error('暂时支持 JPG、PNG 和 WebP 图片，请换一种格式后再试。');
  }
  if (file.size === 0) throw new Error('这张照片是空文件，请重新选择。');
  if (file.size > MAX_INPUT_BYTES) throw new Error('照片需要小于或等于 20 MB，请选择一张小一些的图片。');
  if (typeof document === 'undefined') throw new Error('当前环境无法处理照片，请在浏览器中打开地图后再试。');

  let decoded;
  let canvas;
  try {
    decoded = await decodePhoto(file);
    if (!decoded.width || !decoded.height) throw new Error('这张照片的尺寸不正确，请换一张图片。');
    const scale = Math.min(1, 1200 / Math.max(decoded.width, decoded.height));
    let width = Math.max(1, Math.round(decoded.width * scale));
    let height = Math.max(1, Math.round(decoded.height * scale));
    canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) throw new Error('浏览器暂时无法处理照片，请刷新页面后重试。');
    context.imageSmoothingEnabled = true;

    for (let resizeAttempt = 0; resizeAttempt < 7; resizeAttempt += 1) {
      canvas.width = width;
      canvas.height = height;
      context.imageSmoothingQuality = 'high';
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, width, height);
      context.drawImage(decoded.image, 0, 0, width, height);
      for (const quality of [0.82, 0.7, 0.58, 0.46, 0.34]) {
        const photo = canvas.toDataURL('image/jpeg', quality);
        if (photo.length <= MAX_ENCODED_PHOTO_LENGTH && validPhoto(photo)) return photo;
      }
      width = Math.max(1, Math.round(width * 0.8));
      height = Math.max(1, Math.round(height * 0.8));
    }
    throw new Error('这张照片暂时无法压缩到合适大小，请换一张图片。');
  } catch (error) {
    if (error instanceof Error && /[\u4e00-\u9fff]/.test(error.message)) throw error;
    throw new Error('照片处理失败，请选择另一张 JPG、PNG 或 WebP 图片重试。');
  } finally {
    decoded?.dispose();
    if (canvas) { canvas.width = 0; canvas.height = 0; }
  }
}
