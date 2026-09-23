/**
 * Building blocks for Adriatic stone: hip and gable roofs in terracotta,
 * shuttered windows, arched doors and arcades, bell towers, bougainvillea.
 *
 * Everything here returns plain meshes in a group; villages and landmarks are
 * assembled from them and then baked into a few draw calls (`core/merge.js`).
 */
import {
  BoxGeometry,
  BufferGeometry,
  ConeGeometry,
  CylinderGeometry,
  Float32BufferAttribute,
  Group,
  IcosahedronGeometry,
  Mesh,
  SphereGeometry,
} from 'three';
import { MAT, mat } from '../core/materials.js';
import { chance, pick, rand, TAU } from '../core/utils.js';

/* ---------------------------------------------------------------- roofs --- */

/** Faceted mesh from a list of triangles (each three [x,y,z]). */
function facets(triangles) {
  const positions = [];
  for (const tri of triangles) for (const v of tri) positions.push(...v);
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  return geometry;
}

/**
 * A hipped roof over a w × d footprint, eaves at y = 0: four slopes and a
 * short ridge along the long side, the way Dalmatian roofs are laid.
 */
export function hipRoofGeometry(w, d, height, overhang = 0.9) {
  const hw = w / 2 + overhang;
  const hd = d / 2 + overhang;
  const long = hw >= hd;
  // Ridge runs along the long axis, inset by the short half-width.
  const inset = long ? hd : hw;
  const r = long ? [Math.max(0.01, hw - inset), 0] : [0, Math.max(0.01, hd - inset)];
  const A = [-hw, 0, -hd];
  const B = [hw, 0, -hd];
  const C = [hw, 0, hd];
  const D = [-hw, 0, hd];
  const R1 = long ? [-r[0], height, 0] : [0, height, -r[1]];
  const R2 = long ? [r[0], height, 0] : [0, height, r[1]];
  if (long) {
    return facets([
      [A, R1, R2], [A, R2, B], // back slope
      [D, C, R2], [D, R2, R1], // front slope
      [A, D, R1], // left hip
      [B, R2, C], // right hip
    ]);
  }
  return facets([
    [A, D, R2], [A, R2, R1], // left slope
    [B, R1, R2], [B, R2, C], // right slope
    [A, R1, B], // back hip
    [D, C, R2], // front hip
  ]);
}

/** A plain gable roof, ridge along x. */
export function gableRoofGeometry(w, d, height, overhang = 0.8) {
  const hw = w / 2 + overhang;
  const hd = d / 2 + overhang;
  const A = [-hw, 0, -hd];
  const B = [hw, 0, -hd];
  const C = [hw, 0, hd];
  const D = [-hw, 0, hd];
  const R1 = [-hw, height, 0];
  const R2 = [hw, height, 0];
  return facets([
    [A, R1, R2], [A, R2, B],
    [D, C, R2], [D, R2, R1],
    // Gable ends, set back to the wall line so they read as masonry.
    [[-w / 2, 0, -d / 2], [-w / 2, 0, d / 2], [-w / 2, height * 0.92, 0]],
    [[w / 2, 0, d / 2], [w / 2, 0, -d / 2], [w / 2, height * 0.92, 0]],
  ]);
}

/* -------------------------------------------------------------- details --- */

/** A window with its pair of shutters, on a wall facing +z at (x, y). */
export function shutteredWindow(parent, x, y, z, { shutter = MAT.green, open = chance(0.6), w = 1.6, h = 2.3 } = {}) {
  const glass = new Mesh(new BoxGeometry(w, h, 0.2), MAT.dark);
  glass.position.set(x, y, z + 0.02);
  parent.add(glass);
  const sill = new Mesh(new BoxGeometry(w + 0.6, 0.25, 0.5), MAT.stone);
  sill.position.set(x, y - h / 2 - 0.1, z + 0.2);
  parent.add(sill);
  for (const side of [-1, 1]) {
    const leaf = new Mesh(new BoxGeometry(w / 2 + 0.05, h + 0.1, 0.16), shutter);
    if (open) {
      leaf.position.set(x + side * (w * 0.75 + 0.3), y, z + 0.1);
    } else {
      leaf.position.set(x + side * (w / 4), y, z + 0.14);
    }
    parent.add(leaf);
  }
}

/** A round-headed door or opening on a wall facing +z. */
export function archedDoor(parent, x, z, { w = 2.4, h = 4, material = MAT.woodDark } = {}) {
  const leaf = new Mesh(new BoxGeometry(w, h - w / 2, 0.24), material);
  leaf.position.set(x, (h - w / 2) / 2, z + 0.03);
  parent.add(leaf);
  const head = new Mesh(new CylinderGeometry(w / 2, w / 2, 0.24, 12, 1, false, -Math.PI / 2, Math.PI), material);
  head.rotation.x = Math.PI / 2;
  head.position.set(x, h - w / 2, z + 0.03);
  parent.add(head);
  const surround = new Mesh(new BoxGeometry(w + 0.7, 0.35, 0.3), MAT.stone);
  surround.position.set(x, h + 0.15, z + 0.05);
  parent.add(surround);
}

const BLOOMS = [mat(0xd8388f, { soft: true }), mat(0xe8559e, { soft: true }), mat(0xf07a3c, { soft: true })];

/** Bougainvillea spilling down a wall facing +z. */
export function bougainvillea(parent, x, y, z, spread = 3) {
  const colour = pick(BLOOMS);
  for (let i = 0; i < 5; i++) {
    const clump = new Mesh(new IcosahedronGeometry(rand(0.7, 1.2), 1), i % 2 ? colour : MAT.leaf2);
    clump.position.set(x + rand(-spread, spread), y - rand(0, spread * 1.3), z + rand(0.2, 0.6));
    clump.scale.set(1.2, 0.9, 0.6);
    parent.add(clump);
  }
}

/** Pots of geraniums along a sill or a balcony. */
export function flowerPots(parent, x, y, z, count = 3, spacing = 0.9) {
  for (let i = 0; i < count; i++) {
    const px = x + (i - (count - 1) / 2) * spacing;
    const pot = new Mesh(new CylinderGeometry(0.28, 0.2, 0.45, 6), MAT.terracotta);
    pot.position.set(px, y + 0.22, z);
    parent.add(pot);
    const bloom = new Mesh(new SphereGeometry(0.34, 6, 4), chance(0.5) ? MAT.red : BLOOMS[1]);
    bloom.position.set(px, y + 0.62, z);
    parent.add(bloom);
  }
}

/* ------------------------------------------------------------ campanile --- */

const BRICK = mat(0xc9785a, { flat: true });
const BRICK_DARK = mat(0xae6248, { flat: true });

/**
 * A Venetian bell tower: a tall brick shaft with pilasters, an open belfry
 * with arches on every side, an octagonal drum and a green spire.
 */
export function campanile(parent, { height = 46, width = 9 } = {}) {
  const group = new Group();
  parent.add(group);
  const shaft = new Mesh(new BoxGeometry(width, height, width), BRICK);
  shaft.position.y = height / 2;
  group.add(shaft);
  // Pilasters on the corners and a strip down each face.
  for (const [px, pz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
    const pil = new Mesh(new BoxGeometry(1.1, height, 1.1), BRICK_DARK);
    pil.position.set((px * width) / 2, height / 2, (pz * width) / 2);
    group.add(pil);
  }
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2;
    const strip = new Mesh(new BoxGeometry(0.8, height * 0.9, 0.5), BRICK_DARK);
    strip.position.set(Math.sin(a) * (width / 2 + 0.1), height * 0.45, Math.cos(a) * (width / 2 + 0.1));
    strip.rotation.y = a;
    group.add(strip);
  }
  // A stone cornice, then the belfry: four corner piers and arched openings.
  const cornice = new Mesh(new BoxGeometry(width + 1.4, 0.9, width + 1.4), MAT.stone);
  cornice.position.y = height + 0.45;
  group.add(cornice);
  const belfryH = 8;
  for (const [px, pz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
    const pier = new Mesh(new BoxGeometry(2, belfryH, 2), MAT.stone);
    pier.position.set((px * (width - 2)) / 2, height + 0.9 + belfryH / 2, (pz * (width - 2)) / 2);
    group.add(pier);
  }
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2;
    const mid = new Mesh(new CylinderGeometry(0.35, 0.35, belfryH - 2.5, 6), MAT.stone);
    mid.position.set(Math.sin(a) * (width / 2 - 0.6), height + 0.9 + (belfryH - 2.5) / 2, Math.cos(a) * (width / 2 - 0.6));
    group.add(mid);
    const lintel = new Mesh(new BoxGeometry(width, 2.2, 0.8), MAT.stone);
    lintel.position.set(Math.sin(a) * (width / 2 - 0.4), height + 0.9 + belfryH - 1.1, Math.cos(a) * (width / 2 - 0.4));
    lintel.rotation.y = a;
    group.add(lintel);
  }
  const bell = new Mesh(new ConeGeometry(1.6, 2.6, 10, 1, true), MAT.brass);
  bell.position.y = height + 0.9 + belfryH * 0.45;
  group.add(bell);
  const deck = new Mesh(new BoxGeometry(width + 0.8, 0.8, width + 0.8), MAT.stone);
  deck.position.y = height + 0.9 + belfryH + 0.4;
  group.add(deck);
  const drum = new Mesh(new CylinderGeometry(width * 0.42, width * 0.46, 4, 8), BRICK);
  drum.position.y = height + belfryH + 3.8;
  group.add(drum);
  const spire = new Mesh(new ConeGeometry(width * 0.44, 12, 8), mat(0x5f9c86, { flat: true }));
  spire.position.y = height + belfryH + 11.8;
  group.add(spire);
  const ball = new Mesh(new SphereGeometry(0.55, 8, 6), MAT.brass);
  ball.position.y = height + belfryH + 18.3;
  group.add(ball);
  for (const o of group.children) o.castShadow = o.receiveShadow = true;
  return { group, bellHeight: bell.position.y, top: height + belfryH + 18.8 };
}

/* --------------------------------------------------------------- stones --- */

/** An arch of voussoirs from a to b (in x), springing at y, in the XY plane. */
export function stoneArch(parent, { span, rise, thickness = 2, depth = 6, y = 0, material = MAT.stone, pieces = 11 }) {
  const r = (span * span) / 4 / (2 * rise) + rise / 2; // radius of the circle through the springs and crown
  const cy = y + rise - r;
  const half = Math.asin(Math.min(1, span / 2 / r));
  for (let i = 0; i < pieces; i++) {
    const a = -half + ((i + 0.5) / pieces) * half * 2;
    const len = ((half * 2) / pieces) * (r + thickness / 2) * 1.04;
    const block = new Mesh(new BoxGeometry(len, thickness, depth), material);
    block.position.set(Math.sin(a) * (r + thickness / 2), cy + Math.cos(a) * (r + thickness / 2), 0);
    block.rotation.z = -a;
    parent.add(block);
  }
}

/** A crenellated wall run from (x1, z1) to (x2, z2), standing on `base`. */
export function battlement(parent, x1, z1, x2, z2, { height = 9, thickness = 3, base = 0, material = MAT.stone } = {}) {
  const len = Math.hypot(x2 - x1, z2 - z1);
  const wall = new Mesh(new BoxGeometry(len, height, thickness), material);
  const ang = -Math.atan2(z2 - z1, x2 - x1);
  wall.position.set((x1 + x2) / 2, base + height / 2, (z1 + z2) / 2);
  wall.rotation.y = ang;
  parent.add(wall);
  const merlons = Math.floor(len / 3);
  for (let i = 0; i < merlons; i++) {
    const t = (i + 0.5) / merlons;
    const m = new Mesh(new BoxGeometry(1.6, 1.6, thickness + 0.2), material);
    m.position.set(x1 + (x2 - x1) * t, base + height + 0.8, z1 + (z2 - z1) * t);
    m.rotation.y = ang;
    parent.add(m);
  }
}

/** A round tower with a battlemented top. */
export function roundTower(parent, x, z, { radius = 6, height = 16, base = 0, material = MAT.stone, roof = false } = {}) {
  const body = new Mesh(new CylinderGeometry(radius, radius * 1.12, height, 14), material);
  body.position.set(x, base + height / 2, z);
  parent.add(body);
  const lip = new Mesh(new CylinderGeometry(radius + 0.6, radius + 0.6, 1, 14), material);
  lip.position.set(x, base + height + 0.5, z);
  parent.add(lip);
  if (roof) {
    const cap = new Mesh(new ConeGeometry(radius + 1.2, radius * 1.3, 14), MAT.roof);
    cap.position.set(x, base + height + 1 + radius * 0.65, z);
    parent.add(cap);
  } else {
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * TAU;
      const m = new Mesh(new BoxGeometry(1.4, 1.4, 1.2), material);
      m.position.set(x + Math.cos(a) * (radius + 0.2), base + height + 1.6, z + Math.sin(a) * (radius + 0.2));
      m.rotation.y = -a;
      parent.add(m);
    }
  }
}
