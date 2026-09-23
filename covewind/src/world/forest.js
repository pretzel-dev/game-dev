/**
 * Every tree and bush on the archipelago, drawn as a handful of instanced
 * meshes — one per kind — so the islands can be properly wooded on a phone.
 *
 * The kinds are the Adriatic's: umbrella pines with their flat dark crowns up
 * on bare trunks, cypresses like green flames, silvery olives, round holm
 * oaks, palms on the sand ring, and knee-high maquis scrub everywhere else.
 * Crowns are clusters of soft lumps so the cel shading draws each one as a
 * bright top and a cool underside, and they all lean in the same breeze.
 *
 * `plant()` just records where a tree goes; `buildForest()` makes the meshes
 * once everything has been planted.
 */
import {
  CatmullRomCurve3,
  Color,
  CylinderGeometry,
  DoubleSide,
  IcosahedronGeometry,
  InstancedMesh,
  LatheGeometry,
  Matrix4,
  Quaternion,
  SphereGeometry,
  TubeGeometry,
  Vector2,
  Vector3,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { mat } from '../core/materials.js';
import { palette } from '../core/palette.js';
import { rand, TAU } from '../core/utils.js';

export const KINDS = ['pine', 'cypress', 'olive', 'round', 'palm', 'bush'];

/** The wind in the leaves, shared by every tree. */
export const foliageUniforms = { time: { value: 0 }, gust: { value: 0 } };

const plantings = Object.fromEntries(KINDS.map((k) => [k, []]));

/** Record a tree. Heights come from the caller, which knows the ground. */
export function plant(kind, x, y, z, scale = 1) {
  plantings[kind].push({ x, y, z, scale, rot: rand(0, TAU), tint: rand(-1, 1) });
}

/** Trees are drawn in patches this big, so whole patches can be culled. */
const CHUNK = 320;

export function plantedCount() {
  return KINDS.reduce((n, k) => n + plantings[k].length, 0);
}

/* ------------------------------------------------------------ templates --- */

const TRUNK = new Color(palette.woodDark);
const BARK = new Color(0x8a6a50);

/** Colour every vertex of a geometry, so merged parts keep their own. */
function paint(geometry, color, jitter = 0) {
  const count = geometry.attributes.position.count;
  const data = new Float32Array(count * 3);
  const c = color.clone();
  if (jitter) c.offsetHSL(rand(-0.02, 0.02) * jitter, 0, rand(-0.05, 0.05) * jitter);
  for (let i = 0; i < count; i++) {
    data[i * 3] = c.r;
    data[i * 3 + 1] = c.g;
    data[i * 3 + 2] = c.b;
  }
  geometry.setAttribute('color', new (geometry.attributes.position.constructor)(data, 3));
  if (geometry.index) return geometry.toNonIndexed();
  return geometry;
}

/** Keep only what the merged template needs. */
function tidy(geometry) {
  for (const name of Object.keys(geometry.attributes)) {
    if (!['position', 'normal', 'color'].includes(name)) geometry.deleteAttribute(name);
  }
  return geometry;
}

/** A lumpy ball — one clump of leaves. */
function clump(radius, squash = 0.75, detail = 1, color, seed = rand(0, 10)) {
  const g = new IcosahedronGeometry(radius, detail);
  const p = g.attributes.position;
  const v = new Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = v.clone().normalize();
    const lump = 1 + Math.sin(n.x * 4.1 + seed) * Math.sin(n.z * 3.7 - seed) * 0.12;
    v.multiplyScalar(lump);
    v.y *= squash;
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return tidy(paint(g, color, 1));
}

/** A trunk that bends as it rises. */
function bentTrunk(height, bottom, top, lean, color) {
  const points = [];
  for (let i = 0; i <= 4; i++) {
    const t = i / 4;
    points.push(new Vector3(Math.sin(t * 1.4) * lean, t * height, Math.sin(t * 2.1) * lean * 0.3));
  }
  const curve = new CatmullRomCurve3(points);
  const tube = new TubeGeometry(curve, 8, 1, 6, false);
  // Taper it: TubeGeometry has a single radius, so scale each ring.
  const p = tube.attributes.position;
  const v = new Vector3();
  const centre = new Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const t = Math.min(1, Math.max(0, v.y / height));
    curve.getPointAt(Math.min(1, t), centre);
    const r = bottom + (top - bottom) * t;
    v.sub(centre).multiplyScalar(r).add(centre);
    p.setXYZ(i, v.x, v.y, v.z);
  }
  tube.computeVertexNormals();
  return { geometry: tidy(paint(tube, color)), tip: curve.getPointAt(1) };
}

function merge(parts) {
  const geometry = mergeGeometries(parts.map((g) => (g.index ? g.toNonIndexed() : g)), false);
  geometry.computeBoundingSphere();
  return geometry;
}

const TEMPLATES = {
  pine() {
    // Umbrella pine: tall bare trunk, a flat parasol of dark needles.
    const { geometry: trunk, tip } = bentTrunk(12, 0.85, 0.45, 1.6, BARK);
    const parts = [trunk];
    const green = new Color(palette.pine);
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * TAU;
      const r = i === 0 ? 0 : rand(2.8, 4.6);
      const puff = clump(rand(2.8, 3.6), 0.42, 1, green);
      puff.translate(tip.x + Math.cos(a) * r, tip.y + 1.2 + rand(-0.4, 0.6), tip.z + Math.sin(a) * r);
      parts.push(puff);
    }
    return merge(parts);
  },
  cypress() {
    const profile = [
      [0.01, 0],
      [1.2, 0.8],
      [1.65, 3.5],
      [1.6, 7],
      [1.25, 10.5],
      [0.7, 13.5],
      [0.01, 15.5],
    ].map(([r, y]) => new Vector2(r, y));
    const flame = new LatheGeometry(profile, 9);
    const p = flame.attributes.position;
    const v = new Vector3();
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      const bump = 1 + Math.sin(v.y * 1.7) * 0.07 + Math.sin(Math.atan2(v.z, v.x) * 3 + v.y) * 0.06;
      p.setXYZ(i, v.x * bump, v.y + 1.2, v.z * bump);
    }
    flame.computeVertexNormals();
    const trunk = new CylinderGeometry(0.35, 0.5, 1.6, 6);
    trunk.translate(0, 0.8, 0);
    return merge([tidy(paint(flame, new Color(0x2f5a36))), tidy(paint(trunk, TRUNK))]);
  },
  olive() {
    const a = bentTrunk(4.2, 0.9, 0.5, 1.1, new Color(0x7a6552));
    const b = bentTrunk(3.4, 0.6, 0.35, -0.9, new Color(0x7a6552));
    b.geometry.rotateY(2.2);
    const parts = [a.geometry, b.geometry];
    const silver = new Color(0x8ba668);
    for (let i = 0; i < 6; i++) {
      const puff = clump(rand(1.9, 2.6), 0.7, 1, silver);
      const ang = rand(0, TAU);
      puff.translate(Math.cos(ang) * rand(0.6, 2.4), rand(4.2, 6), Math.sin(ang) * rand(0.6, 2.4));
      parts.push(puff);
    }
    return merge(parts);
  },
  round() {
    // Holm oak or carob: a dense dome on a short trunk.
    const { geometry: trunk } = bentTrunk(5, 0.8, 0.45, 0.4, BARK);
    const parts = [trunk];
    const green = new Color(palette.leaf);
    for (let i = 0; i < 7; i++) {
      const puff = clump(rand(2.4, 3.3), 0.85, 1, green);
      const ang = (i / 7) * TAU;
      const r = i === 0 ? 0 : rand(1.6, 2.8);
      puff.translate(Math.cos(ang) * r, 6.2 + rand(-0.6, 1.6) + (i === 0 ? 1.6 : 0), Math.sin(ang) * r);
      parts.push(puff);
    }
    return merge(parts);
  },
  palm() {
    const { geometry: trunk, tip } = bentTrunk(10, 0.55, 0.38, 2.2, new Color(0x9b7a55));
    const parts = [trunk];
    const green = new Color(palette.leaf2);
    for (let i = 0; i < 8; i++) {
      // A frond: a long flattened leaf, drooping out from the crown.
      const leaf = new SphereGeometry(1, 8, 4);
      leaf.scale(0.9, 0.12, 3.6);
      leaf.translate(0, 0, 3.2);
      leaf.rotateX(0.55);
      leaf.rotateY((i / 8) * TAU + rand(-0.15, 0.15));
      leaf.translate(tip.x, tip.y + 0.2, tip.z);
      parts.push(tidy(paint(leaf, green, 1)));
    }
    const nuts = clump(0.7, 1, 0, new Color(0x6d5a3a));
    nuts.translate(tip.x, tip.y - 0.3, tip.z);
    parts.push(nuts);
    return merge(parts);
  },
  bush() {
    const green = new Color(palette.maquis);
    const parts = [];
    for (let i = 0; i < 3; i++) {
      const puff = clump(rand(1.4, 2.1), 0.7, 0, green);
      puff.translate(rand(-1.4, 1.4), 0.9, rand(-1.4, 1.4));
      parts.push(puff);
    }
    return merge(parts);
  },
};

/* ------------------------------------------------------------- material --- */

function foliageMaterial(doubleSided = false) {
  const material = mat(0xffffff, { vertexColors: true, soft: true, side: doubleSided ? DoubleSide : undefined });
  material.onBeforeCompile = (shader) => {
    shader.uniforms.time = foliageUniforms.time;
    shader.uniforms.gust = foliageUniforms.gust;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float time;\nuniform float gust;')
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        {
          // Crowns sway, trunks do not: the higher up the tree, the more it moves.
          vec3 base = vec3(0.0);
          #ifdef USE_INSTANCING
            base = instanceMatrix[3].xyz;
          #endif
          float h = max(0.0, transformed.y - 2.0) / 12.0;
          float phase = time * 1.3 + base.x * 0.05 + base.z * 0.043;
          float sway = (sin(phase) * 0.6 + sin(phase * 2.3 + 1.7) * 0.25) * (0.35 + gust * 0.6);
          transformed.x += sway * h * h * 1.4;
          transformed.z += sway * h * h * 0.6;
        }`
      );
  };
  return material;
}

/* ---------------------------------------------------------------- build --- */

const _m = new Matrix4();
const _q = new Quaternion();
const _s = new Vector3();
const _p = new Vector3();
const _up = new Vector3(0, 1, 0);
const _c = new Color();

export function buildForest(scene) {
  const meshes = [];
  const shared = foliageMaterial(false);
  const palms = foliageMaterial(true);
  for (const kind of KINDS) {
    const all = plantings[kind];
    if (!all.length) continue;
    const template = TEMPLATES[kind]();
    // Group into patches: each is one instanced mesh with a tight bounding
    // sphere, so the camera and the sun's shadow pass skip what they cannot see.
    const patches = new Map();
    for (const tree of all) {
      const key = `${Math.floor(tree.x / CHUNK)},${Math.floor(tree.z / CHUNK)}`;
      if (!patches.has(key)) patches.set(key, []);
      patches.get(key).push(tree);
    }
    for (const list of patches.values()) {
      const mesh = new InstancedMesh(template, kind === 'palm' ? palms : shared, list.length);
      list.forEach((tree, i) => {
        _q.setFromAxisAngle(_up, tree.rot);
        _s.setScalar(tree.scale);
        _p.set(tree.x, tree.y - 0.3, tree.z);
        mesh.setMatrixAt(i, _m.compose(_p, _q, _s));
        // A little variety per tree: some greener, some drier.
        _c.setRGB(1, 1, 1).offsetHSL(tree.tint * 0.015, tree.tint * 0.05, tree.tint * 0.04);
        mesh.setColorAt(i, _c);
      });
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      mesh.castShadow = kind !== 'bush';
      mesh.receiveShadow = true;
      mesh.computeBoundingSphere();
      mesh.boundingSphere.radius += 12; // crowns sway past their trunks
      mesh.name = `forest:${kind}`;
      scene.add(mesh);
      meshes.push(mesh);
    }
  }
  return meshes;
}
