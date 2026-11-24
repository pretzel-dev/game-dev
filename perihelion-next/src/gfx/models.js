import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

/**
 * Models made in Blender (`tools/blender/*.py`), for the hull shader.
 *
 * A file holds one mesh of one or more models ("parts", spaced apart). Per
 * vertex it carries: position, a smooth normal, a colour that packs the tags
 * (r = kind / 15, g = tint / 2, b = part / 15) and the coordinates of the
 * file's baked shade map (ambient occlusion in red, weathering in green).
 * Here each part becomes a geometry with the attributes the hull shader
 * reads: `kind`, `tint`, plating coordinates projected by face (in model
 * units: scale them to suit) and `gnd` (the shade map's coordinates: unused
 * on anything that isn't ground).
 */
const MODELS = {
  holds: {
    glb: new URL('../assets/holds-station.glb', import.meta.url).href,
    bake: new URL('../assets/holds-station-bake.webp', import.meta.url).href,
  },
  holdsShips: {
    glb: new URL('../assets/holds-ships.glb', import.meta.url).href,
    bake: new URL('../assets/holds-ships-bake.webp', import.meta.url).href,
  },
};

const ready = new Map();
const waiting = new Map();

/** Call `fn({ parts, bake, extras })` once the model is in (straight away if it already is). */
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
    let geo = null, extras = {};
    g.scene.updateMatrixWorld(true);
    g.scene.traverse((o) => { if (o.isMesh && !geo) { geo = o.geometry.clone().applyMatrix4(o.matrixWorld); extras = { ...o.parent?.userData, ...o.userData }; } });
    const m = { parts: prepare(geo, extras), bake, extras };
    ready.set(name, m);
    for (const fn of waiting.get(name) || []) fn(m);
    waiting.delete(name);
  }).catch((e) => console.warn('model', name, e));
}

function prepare(src, extras) {
  const g = src.index ? src.toNonIndexed() : src;
  const pos = g.attributes.position, nor = g.attributes.normal, col = g.attributes.color, uv0 = g.attributes.uv, n = pos.count;
  const hulls = extras.hulls || 1, spacing = extras.spacing || 0, lodY = extras.lod_y || 0;
  // Sort the triangles into their parts.
  const lists = [];
  for (let i = 0; i < n; i += 3) {
    const p = Math.round(col.getZ(i) * 15);
    (lists[p] || (lists[p] = [])).push(i);
  }
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), fn = new THREE.Vector3();
  return lists.map((tris, part) => {
    if (!tris) return null;
    const m = tris.length * 3, ox = (part % hulls) * spacing, oy = part >= hulls ? lodY : 0;
    const P = new Float32Array(m * 3), N = new Float32Array(m * 3), kind = new Float32Array(m), tint = new Float32Array(m), gnd = new Float32Array(m * 3), uv = new Float32Array(m * 2);
    let k = 0;
    for (const i of tris) {
      a.fromBufferAttribute(pos, i); b.fromBufferAttribute(pos, i + 1); c.fromBufferAttribute(pos, i + 2);
      fn.subVectors(b, a).cross(c.sub(a));
      const ax = Math.abs(fn.x), ay = Math.abs(fn.y), az = Math.abs(fn.z);
      for (let j = i; j < i + 3; j++, k++) {
        const x = pos.getX(j) - ox, y = pos.getY(j) - oy, z = pos.getZ(j);
        P[k * 3] = x; P[k * 3 + 1] = y; P[k * 3 + 2] = z;
        N[k * 3] = nor.getX(j); N[k * 3 + 1] = nor.getY(j); N[k * 3 + 2] = nor.getZ(j);
        kind[k] = Math.round(col.getX(j) * 15);
        tint[k] = col.getY(j) * 2;
        gnd[k * 3] = uv0.getX(j); gnd[k * 3 + 1] = 1 - uv0.getY(j); gnd[k * 3 + 2] = 1;
        if (ax >= ay && ax >= az) { uv[k * 2] = z; uv[k * 2 + 1] = y; }
        else if (ay >= az) { uv[k * 2] = x; uv[k * 2 + 1] = z; }
        else { uv[k * 2] = x; uv[k * 2 + 1] = y; }
      }
    }
    const out = new THREE.BufferGeometry();
    out.setAttribute('position', new THREE.BufferAttribute(P, 3));
    out.setAttribute('normal', new THREE.BufferAttribute(N, 3));
    out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    out.setAttribute('kind', new THREE.BufferAttribute(kind, 1));
    out.setAttribute('tint', new THREE.BufferAttribute(tint, 1));
    out.setAttribute('gnd', new THREE.BufferAttribute(gnd, 3));
    return out;
  });
}

/** A copy of a model part, scaled by s, its plating repeating d times per unit. */
export function sized(geo, s, d) {
  const g = geo.clone().scale(s, s, s), uv = g.attributes.uv, k = s * d;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * k, uv.getY(i) * k);
  return g;
}
