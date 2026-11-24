import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

/**
 * Models made in Blender (`tools/blender/*.py`), for the hull shader.
 *
 * A model file carries, per vertex: position, a smooth normal, a colour that
 * packs the part tags (r = kind / 15, g = tint / 2) and the coordinates of
 * its baked shade map (ambient occlusion in red, weathering in green). Here
 * that becomes the attributes the hull shader reads: `kind`, `tint`, plating
 * coordinates projected by face (so plating is the same size everywhere) and
 * `gnd` (the shade map's coordinates: unused on anything that isn't ground).
 */
const MODELS = {
  holds: {
    glb: new URL('../assets/holds-station.glb', import.meta.url).href,
    bake: new URL('../assets/holds-station-bake.webp', import.meta.url).href,
  },
};

const ready = new Map();
const waiting = new Map();

/** The model if it has loaded: { geometry (in units of the station's size), bake }. */
export const model = (name) => ready.get(name) || null;

/** Call `fn(model)` once the model is in (straight away if it already is). */
export function whenModel(name, fn) {
  if (ready.has(name)) return fn(ready.get(name));
  if (!waiting.has(name)) { waiting.set(name, []); load(name); }
  waiting.get(name).push(fn);
}

function load(name) {
  const src = MODELS[name];
  const tex = new THREE.TextureLoader().loadAsync(src.bake);
  const glb = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync(src.glb);
  Promise.all([glb, tex]).then(([g, bake]) => {
    bake.colorSpace = THREE.NoColorSpace;
    bake.anisotropy = 4;
    let geo = null;
    g.scene.updateMatrixWorld(true);
    g.scene.traverse((o) => { if (o.isMesh && !geo) geo = o.geometry.clone().applyMatrix4(o.matrixWorld); });
    const m = { geometry: prepare(geo), bake };
    ready.set(name, m);
    for (const fn of waiting.get(name) || []) fn(m);
    waiting.delete(name);
  }).catch((e) => console.warn('model', name, e));
}

function prepare(src) {
  const g = src.index ? src.toNonIndexed() : src;
  const pos = g.attributes.position, col = g.attributes.color, uv0 = g.attributes.uv, n = pos.count;
  const kind = new Float32Array(n), tint = new Float32Array(n), gnd = new Float32Array(n * 3), uv = new Float32Array(n * 2);
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), fn = new THREE.Vector3();
  for (let i = 0; i < n; i++) {
    kind[i] = Math.round(col.getX(i) * 15);
    tint[i] = col.getY(i) * 2;
    gnd[i * 3] = uv0.getX(i); gnd[i * 3 + 1] = 1 - uv0.getY(i); gnd[i * 3 + 2] = 1;
  }
  for (let i = 0; i < n; i += 3) {
    a.fromBufferAttribute(pos, i); b.fromBufferAttribute(pos, i + 1); c.fromBufferAttribute(pos, i + 2);
    fn.subVectors(b, a).cross(c.sub(a));
    const ax = Math.abs(fn.x), ay = Math.abs(fn.y), az = Math.abs(fn.z);
    for (let j = i; j < i + 3; j++) {
      const x = pos.getX(j), y = pos.getY(j), z = pos.getZ(j);
      if (ax >= ay && ax >= az) { uv[j * 2] = z; uv[j * 2 + 1] = y; }
      else if (ay >= az) { uv[j * 2] = x; uv[j * 2 + 1] = z; }
      else { uv[j * 2] = x; uv[j * 2 + 1] = y; }
    }
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos.array), 3));
  out.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(g.attributes.normal.array), 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  out.setAttribute('kind', new THREE.BufferAttribute(kind, 1));
  out.setAttribute('tint', new THREE.BufferAttribute(tint, 1));
  out.setAttribute('gnd', new THREE.BufferAttribute(gnd, 3));
  return out;
}
