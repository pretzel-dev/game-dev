/**
 * The canyon as numbers: one height field, generated once from a handful of
 * shapes, then sampled by everything (the ground mesh, the car's wheels, the
 * dust, the placement of every ramp and cactus).
 *
 * No Three.js and no DOM in here, so `tools/check.mjs` can drive the car
 * across it in Node.
 *
 * What is in the field, from the bottom up:
 *  - gentle rolling desert;
 *  - a dune field in the north-east whose crests are steep on the lee side,
 *    so every dune is a kicker;
 *  - mesas, buttes and cones, each with a concave skirt at the foot that
 *    rides like a quarter-pipe;
 *  - the wash: a dry riverbed across the south, U-shaped like a half-pipe;
 *  - flat pads where the stunt pieces stand;
 *  - the roads, smoothed into the ground, with rally crests and whoops;
 *  - and the rim: all the way round, the ground curves up into a bowl wall,
 *    so the world has no edge that stops you; it just sends you back.
 */

export const HALF = 1250; // the field covers -HALF..HALF in x and z
export const CELL = 2.5; // metres per sample
export const N = Math.round((HALF * 2) / CELL) + 1;
export const RIM_START = 860; // where the bowl wall begins to rise

/* ------------------------------------------------------------- noise --- */

function hash2(ix, iz) {
  let h = Math.imul(ix, 374761393) ^ Math.imul(iz, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

export function noise(x, z) {
  const ix = Math.floor(x);
  const iz = Math.floor(z);
  let fx = x - ix;
  let fz = z - iz;
  fx = fx * fx * (3 - 2 * fx);
  fz = fz * fz * (3 - 2 * fz);
  const a = hash2(ix, iz);
  const b = hash2(ix + 1, iz);
  const c = hash2(ix, iz + 1);
  const d = hash2(ix + 1, iz + 1);
  return a + (b - a) * fx + (c - a) * fz + (a - b - c + d) * fx * fz;
}

export function fbm(x, z, octaves = 4) {
  let v = 0;
  let amp = 0.5;
  let total = 0;
  for (let i = 0; i < octaves; i++) {
    v += noise(x, z) * amp;
    total += amp;
    x = x * 2.03 + 17.3;
    z = z * 2.03 - 9.1;
    amp *= 0.5;
  }
  return v / total;
}

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const smooth = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};

/* -------------------------------------------------------------- shapes --- */

/**
 * Mesas (flat tops, cliffs, concave skirts), buttes and cones (pointed). The
 * skirt is (1 - s)^k: steep at the top, flat at the foot, so driving at one
 * is riding up a quarter-pipe, never hitting a wall.
 */
export const MESAS = [
  // The spiral mesa: a road wraps round it to a jump off the top.
  { name: 'spiral', x: -430, z: -330, r: 50, h: 58, skirt: 22, k: 3, wob: 0.03, kind: 'mesa' },
  { name: 'anvil', x: 360, z: -560, r: 80, h: 46, skirt: 40, k: 3, kind: 'mesa' },
  { name: 'table', x: 640, z: 370, r: 50, h: 38, skirt: 34, k: 2.6, kind: 'mesa' },
  { name: 'tower', x: -700, z: 170, r: 26, h: 74, skirt: 48, k: 3.4, kind: 'mesa' },
  { name: 'saddle', x: -230, z: 780, r: 60, h: 34, skirt: 40, k: 2.4, kind: 'mesa' },
  // The shelf: wind turbines along the top.
  { name: 'shelf', x: 120, z: -760, r: 90, h: 30, skirt: 50, k: 2.4, kind: 'mesa' },
  // Cones: the striped hills of the badlands, rideable all the way round.
  { name: 'cone1', x: -330, z: -80, r: 0, h: 34, skirt: 62, k: 2, kind: 'cone' },
  { name: 'cone2', x: -580, z: -140, r: 0, h: 42, skirt: 70, k: 2, kind: 'cone' },
  { name: 'cone3', x: -250, z: -580, r: 0, h: 30, skirt: 56, k: 2, kind: 'cone' },
  { name: 'cone4', x: -720, z: -440, r: 0, h: 50, skirt: 80, k: 2, kind: 'cone' },
  { name: 'cone5', x: 80, z: 520, r: 0, h: 26, skirt: 52, k: 2, kind: 'cone' },
  { name: 'cone6', x: 720, z: 560, r: 0, h: 36, skirt: 64, k: 2, kind: 'cone' },
];

function mesaHeight(m, x, z) {
  const dx = x - m.x;
  const dz = z - m.z;
  const d0 = Math.hypot(dx, dz);
  const reach = m.r + m.skirt;
  if (d0 > reach * (1 + (m.wob ?? 0.12) * 1.7)) return 0;
  // A wobbly outline, so they look eroded rather than turned on a lathe.
  const a = Math.atan2(dz, dx);
  const w = m.wob ?? 0.12;
  const wob = 1 + w * Math.sin(a * 3 + m.x * 0.01) + w * 0.6 * Math.sin(a * 7 + m.z * 0.02);
  const d = d0 / wob;
  if (d <= m.r) return m.h + (m.kind === 'mesa' ? 0.4 * (noise(x * 0.05, z * 0.05) - 0.5) : 0);
  const s = clamp((d - m.r) / m.skirt, 0, 1);
  return m.h * Math.pow(1 - s, m.k);
}

/** The wash: a dry riverbed across the south of the map. */
export function washCentre(x) {
  return 300 + 80 * Math.sin(x / 150) + 30 * Math.sin(x / 63 + 1.3);
}
export const WASH = { depth: 22, floor: 22, wall: 38 };

/** How far below the surrounding ground the wash is at (x, z), 0 outside. */
export function washDepth(x, z) {
  const zc = washCentre(x);
  const slope = (80 / 150) * Math.cos(x / 150) + (30 / 63) * Math.cos(x / 63 + 1.3);
  const d = Math.abs(z - zc) / Math.sqrt(1 + slope * slope);
  const { depth, floor, wall } = WASH;
  if (d >= floor + wall) return 0;
  if (d <= floor) return depth;
  const s = (d - floor) / wall;
  // Concave: flat on the floor, steep at the lip. A half-pipe.
  return depth * (1 - Math.pow(s, 2.2));
}

/** Dune field, north-east: long crests, gentle windward, steep lee. */
function dunes(x, z) {
  const cx = 470;
  const cz = -260;
  const mask = 1 - smooth(180, 330, Math.hypot((x - cx) * 0.9, z - cz));
  if (mask <= 0) return 0;
  const warp = 18 * (fbm(x * 0.006, z * 0.006, 3) - 0.5) * 2;
  const along = (x * 0.8 + z * 0.6 + warp) / 58;
  const f = along - Math.floor(along);
  // Up slowly to the crest at 0.78, then drop: a ramp every 58 m.
  const p = f < 0.78 ? smooth(0, 1, f / 0.78) : 1 - smooth(0, 1, (f - 0.78) / 0.22);
  const size = 4 + 5 * fbm(x * 0.004 + 3, z * 0.004, 2);
  return p * size * mask;
}

/** Ripples of hard-packed badland to the west: little humps to skip over. */
function badlands(x, z) {
  const mask = 1 - smooth(120, 260, Math.hypot(x + 560, z - 330));
  if (mask <= 0) return 0;
  return (Math.sin(x * 0.11 + Math.sin(z * 0.05) * 2) * 0.5 + 0.5) * 2.4 * mask;
}

function rim(x, z) {
  const r = Math.hypot(x, z);
  const a = Math.atan2(z, x);
  const start = RIM_START + 40 * Math.sin(a * 3 + 1) + 25 * Math.sin(a * 7);
  if (r <= start) return 0;
  const s = (r - start) / 250;
  // A bowl that rides like a giant quarter-pipe, then terraces of cliff
  // above where nobody will reach, broken up so it reads as rock.
  const smoothBowl = Math.min(360, 120 * Math.pow(s, 2.2));
  const terrace = 26;
  const k = smoothBowl / terrace;
  const f = k - Math.floor(k);
  const stepped = (Math.floor(k) + Math.min(1, f * 1.8)) * terrace;
  // Smooth as far up as any car can climb; ledges only above that.
  const w = smooth(1.0, 1.25, s);
  const h = smoothBowl * (1 - w) + Math.max(stepped, smoothBowl * 0.92) * w;
  return h + 10 * fbm(x * 0.008, z * 0.008, 3) * Math.min(1, s * 2) * w + 3 * fbm(x * 0.01, z * 0.01, 2) * Math.min(1, s * 3);
}

function rolling(x, z) {
  return 7 * fbm(x / 260 + 11, z / 260 - 4, 4) + 2.5 * fbm(x / 70, z / 70, 3) - 4;
}

/* --------------------------------------------------------------- pads --- */

/**
 * Flat places for the stunt pieces to stand on, set into the ground.
 * `h` is the level; if missing, it is the ground at the centre.
 */
export const PADS = [
  { name: 'park', x: 0, z: 0, r: 150, blend: 50 },
  { name: 'drum', x: 250, z: 120, r: 52, blend: 30 },
];

/* -------------------------------------------------------------- roads --- */

/**
 * Roads are Catmull-Rom loops through these points. The main loop goes
 * right round the canyon; the spurs join it to the park in the middle.
 * `crests` add rally bumps along the profile (at fraction t, height, length).
 */
export const ROADS = [
  {
    name: 'loop',
    closed: true,
    width: 14,
    points: [
      [140, -190], [380, -170], [600, -130], [730, 0], [650, 95], [520, 140], [455, 230], [430, 335],
      [480, 470], [400, 600], [150, 650], [-150, 620], [-380, 520], [-430, 420], [-420, 297],
      [-430, 180], [-560, 40], [-760, -80], [-640, -250], [-540, -420], [-380, -520], [-160, -430],
    ],
    // Rally crests: bumps in the road that throw you into the air.
    crests: [
      { x: 500, z: -150, h: 3.2, len: 34 },
      { x: 700, z: 70, h: 2.6, len: 26 },
      { x: 300, z: 630, h: 3, len: 30 },
      { x: -40, z: 640, h: 4, len: 36 },
      { x: -700, z: -40, h: 2.6, len: 22 },
      { x: -735, z: -5, h: 2.6, len: 22 },
      { x: -760, z: -75, h: 2.6, len: 22 },
      { x: -260, z: -490, h: 3.5, len: 32 },
    ],
  },
  {
    name: 'north spur',
    closed: false,
    width: 12,
    points: [[0, -60], [30, -130], [140, -190], [220, -190]],
    crests: [],
  },
  {
    name: 'south spur',
    closed: false,
    width: 12,
    points: [[40, 70], [110, 160], [170, 250], [200, 350], [220, 450], [250, 560], [265, 626]],
    crests: [{ x: 230, z: 500, h: 2.5, len: 26 }],
  },
];

export function catmull(points, closed, t) {
  const n = points.length;
  const segs = closed ? n : n - 1;
  let f = t * segs;
  let i = Math.floor(f);
  if (i >= segs) i = segs - 1;
  f -= i;
  const at = (k) => (closed ? points[((k % n) + n) % n] : points[Math.max(0, Math.min(n - 1, k))]);
  const p0 = at(i - 1);
  const p1 = at(i);
  const p2 = at(i + 1);
  const p3 = at(i + 2);
  const f2 = f * f;
  const f3 = f2 * f;
  const c = (a, b, cc, d) => 0.5 * (2 * b + (-a + cc) * f + (2 * a - 5 * b + 4 * cc - d) * f2 + (-a + 3 * b - 3 * cc + d) * f3);
  return [c(p0[0], p1[0], p2[0], p3[0]), c(p0[1], p1[1], p2[1], p3[1])];
}

/* ----------------------------------------------------- the field itself --- */

export const field = new Float32Array(N * N);
/** Per cell: distance to the nearest road centre line (m), for the shader. */
export const roadDist = new Float32Array(N * N);
/** Per cell: distance along that road (m), for its paint. */
export const roadAlong = new Float32Array(N * N);
/** Every road sampled every 2 m: { x, z, y, tx, tz, s }. */
export const roadSamples = [];

function natural(x, z) {
  let h = rolling(x, z) + dunes(x, z) + badlands(x, z);
  for (const m of MESAS) {
    const mh = mesaHeight(m, x, z);
    if (mh > 0) h = Math.max(h, mh + h * (1 - mh / m.h) * 0.6);
  }
  return h + rim(x, z);
}

function build() {
  // 1. The natural ground (no wash yet: roads take their level from it).
  for (let j = 0; j < N; j++) {
    const z = -HALF + j * CELL;
    for (let i = 0; i < N; i++) {
      const x = -HALF + i * CELL;
      field[j * N + i] = natural(x, z);
    }
  }
  // 2. Pads.
  for (const pad of PADS) {
    pad.h ??= sampleRaw(pad.x, pad.z);
    const reach = pad.r + pad.blend;
    forCells(pad.x, pad.z, reach, (idx, x, z) => {
      const w = 1 - smooth(pad.r, reach, Math.hypot(x - pad.x, z - pad.z));
      field[idx] += (pad.h - field[idx]) * w;
    });
  }
  // 3. The wash.
  for (let j = 0; j < N; j++) {
    const z = -HALF + j * CELL;
    for (let i = 0; i < N; i++) {
      const x = -HALF + i * CELL;
      const d = washDepth(x, z);
      if (d > 0) field[j * N + i] -= d;
    }
  }
  // 4. Roads, pressed into the ground on top of everything.
  roadDist.fill(1e4);
  const roadH = new Float32Array(N * N);
  const roadW = new Float32Array(N * N);
  for (const road of ROADS) stampRoad(road, roadH, roadW);
  for (let k = 0; k < field.length; k++) {
    if (roadW[k] > 0) field[k] += (roadH[k] - field[k]) * roadW[k];
  }
}

function forCells(cx, cz, radius, fn) {
  const i0 = Math.max(0, Math.floor((cx - radius + HALF) / CELL));
  const i1 = Math.min(N - 1, Math.ceil((cx + radius + HALF) / CELL));
  const j0 = Math.max(0, Math.floor((cz - radius + HALF) / CELL));
  const j1 = Math.min(N - 1, Math.ceil((cz + radius + HALF) / CELL));
  for (let j = j0; j <= j1; j++) {
    for (let i = i0; i <= i1; i++) fn(j * N + i, -HALF + i * CELL, -HALF + j * CELL);
  }
}

function stampRoad(road, roadH, roadW) {
  // Sample the curve every ~2 m of arc.
  const dense = [];
  const steps = 4000;
  for (let k = 0; k <= steps; k++) dense.push(catmull(road.points, road.closed, k / steps));
  const pts = [dense[0]];
  let acc = 0;
  for (let k = 1; k < dense.length; k++) {
    acc += Math.hypot(dense[k][0] - dense[k - 1][0], dense[k][1] - dense[k - 1][1]);
    if (acc >= 2) {
      pts.push(dense[k]);
      acc = 0;
    }
  }
  const n = pts.length;
  const total = n * 2;
  // Level: the ground under it, smoothed hard, plus crests.
  const raw = pts.map(([x, z]) => sampleRaw(x, z) + washDepth(x, z)); // as if the wash were not there
  const level = new Float32Array(n);
  const win = 30;
  for (let k = 0; k < n; k++) {
    let sum = 0;
    let cnt = 0;
    for (let o = -win; o <= win; o++) {
      let q = k + o;
      if (road.closed) q = (q + n) % n;
      else if (q < 0 || q >= n) continue;
      sum += raw[q];
      cnt++;
    }
    level[k] = sum / cnt;
  }
  for (let k = 0; k < n; k++) {
    for (const c of road.crests) {
      c.k ??= nearestIndex(pts, c.x, c.z);
      let d = Math.abs(k - c.k) * 2;
      if (road.closed) d = Math.min(d, total - d);
      if (d < c.len) level[k] += c.h * 0.5 * (1 + Math.cos((Math.PI * d) / c.len));
    }
  }
  const half = road.width / 2;
  const reach = half + 14;
  for (let k = 0; k < n; k++) {
    const [x, z] = pts[k];
    const nx = pts[Math.min(n - 1, k + 1)];
    const pv = pts[Math.max(0, k - 1)];
    let tx = nx[0] - pv[0];
    let tz = nx[1] - pv[1];
    const tl = Math.hypot(tx, tz) || 1;
    tx /= tl;
    tz /= tl;
    const inWash = washDepth(x, z) > 0.2;
    roadSamples.push({ road: road.name, x, z, y: level[k], tx, tz, s: k * 2, inWash });
    if (inWash) continue; // the road stops at the lip: jumps and bridges cross it
    forCells(x, z, reach, (idx, cx, cz) => {
      const d = Math.hypot(cx - x, cz - z);
      const w = 1 - smooth(half + 1, reach, d);
      if (w <= 0) return;
      if (w > roadW[idx] || (w === roadW[idx] && level[k] > roadH[idx])) {
        roadW[idx] = w;
        roadH[idx] = level[k];
      }
      if (d < roadDist[idx]) {
        roadDist[idx] = d;
        roadAlong[idx] = k * 2;
      }
    });
  }
}

function nearestIndex(pts, x, z) {
  let best = 0;
  let bd = Infinity;
  for (let k = 0; k < pts.length; k++) {
    const d = (pts[k][0] - x) ** 2 + (pts[k][1] - z) ** 2;
    if (d < bd) {
      bd = d;
      best = k;
    }
  }
  return best;
}

/** Bilinear sample of the field as it stands (used while building). */
function sampleRaw(x, z) {
  const fx = clamp((x + HALF) / CELL, 0, N - 1.001);
  const fz = clamp((z + HALF) / CELL, 0, N - 1.001);
  const i = Math.floor(fx);
  const j = Math.floor(fz);
  const u = fx - i;
  const v = fz - j;
  const k = j * N + i;
  const a = field[k];
  const b = field[k + 1];
  const c = field[k + N];
  const d = field[k + N + 1];
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

build();

/* -------------------------------------------------------------- queries --- */

/** Ground height at (x, z). */
export const heightAt = sampleRaw;

/** Ground normal at (x, z), written into `out` ({x, y, z}). */
export function normalAt(x, z, out = { x: 0, y: 1, z: 0 }) {
  const e = 1;
  const dx = sampleRaw(x + e, z) - sampleRaw(x - e, z);
  const dz = sampleRaw(x, z + e) - sampleRaw(x, z - e);
  const l = Math.hypot(dx, 2 * e, dz);
  out.x = -dx / l;
  out.y = (2 * e) / l;
  out.z = -dz / l;
  return out;
}

/** Nearest-cell road distance (m) — 1e4 when nowhere near a road. */
export function roadDistanceAt(x, z) {
  const i = Math.round(clamp((x + HALF) / CELL, 0, N - 1));
  const j = Math.round(clamp((z + HALF) / CELL, 0, N - 1));
  return roadDist[j * N + i];
}

/** Nearest road sample to (x, z), for placing things beside roads. */
export function nearestRoadSample(x, z, name) {
  let best = null;
  let bd = Infinity;
  for (const s of roadSamples) {
    if (name && s.road !== name) continue;
    const d = (s.x - x) ** 2 + (s.z - z) ** 2;
    if (d < bd) {
      bd = d;
      best = s;
    }
  }
  return best;
}

export function padNamed(name) {
  return PADS.find((p) => p.name === name);
}

export function mesaNamed(name) {
  return MESAS.find((m) => m.name === name);
}
