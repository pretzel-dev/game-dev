/**
 * Covewind's archipelago — five islands as one analytic height field.
 *
 * Every island is described in its own polar coordinates: `islandRadiusAt()` is
 * its coastline, the profile fills it in, and `terrainHeightAt()` takes
 * whichever island is highest at a point (or the sea floor between them).
 * Nothing here imports Three.js, which keeps the world sane to unit-test (see
 * `npm run check`) and lets gameplay code sample the ground without touching
 * the scene graph or raycasters.
 *
 * The water shader is generated from the same data (`coastlineGLSL()`), so surf
 * always breaks on the real shore of every island.
 */

export const TAU = Math.PI * 2;
export const SEA_LEVEL = 0;
const OCEAN_FLOOR = -38;

const gauss = (d, sigma) => Math.exp(-(d * d) / (sigma * sigma));
function dAngle(a, b) {
  return Math.atan2(Math.sin(a - b), Math.cos(a - b));
}

/* ---------------------------------------------------------------- noise --- */

function hash2(ix, iz) {
  const s = Math.sin(ix * 127.1 + iz * 311.7) * 43758.5453;
  return s - Math.floor(s);
}
const fade = (t) => t * t * (3 - 2 * t);

function valueNoise(x, z) {
  const ix = Math.floor(x);
  const iz = Math.floor(z);
  const fx = fade(x - ix);
  const fz = fade(z - iz);
  const a = hash2(ix, iz);
  const b = hash2(ix + 1, iz);
  const c = hash2(ix, iz + 1);
  const d = hash2(ix + 1, iz + 1);
  return (a + (b - a) * fx) * (1 - fz) + (c + (d - c) * fx) * fz;
}

/** Fractal noise in −1..1. Three octaves is plenty for stylised islands. */
function fbm(x, z) {
  let v = 0;
  let amp = 0.5;
  let f = 1;
  for (let i = 0; i < 3; i++) {
    v += valueNoise(x * f, z * f) * amp;
    f *= 2.07;
    amp *= 0.5;
  }
  return v * 2 - 0.875;
}

/* -------------------------------------------------------------- the map --- */

/**
 * @typedef {object} Island
 * @property {string} key
 * @property {string} name       What the hint calls it.
 * @property {{x:number,z:number}} centre
 * @property {number} base       Mean coast radius.
 * @property {number[][]} waves  [amplitude, frequency, phase] wobble on the coast.
 * @property {object[]} [bumps]  Headlands and bays: {theta, size, sigma}.
 * @property {object[]} [cliffs] Where the coast is sheer: {theta, strength, sigma}.
 * @property {object[]} [beaches] Where it is soft: {theta, strength, sigma}.
 * @property {number} rise       Height at the shoulder of the profile.
 * @property {number} peak       Height at the middle of the profile.
 * @property {number} roughness  Rolling-hill noise amplitude.
 * @property {object} [ridge]    A spine: {x, z, along, across, height, direction}.
 * @property {object[]} [shelves] Flat ground, in world coordinates.
 * @property {object[]} [carves]  Gorges cut through, in world coordinates.
 * @property {object} [lagoon]   Flooded middle: {from, depth}.
 * @property {number} seed       Offsets the noise so islands do not repeat.
 */

/** @type {Island[]} */
export const ISLANDS = [
  {
    key: 'harbour',
    name: 'Harbour Island',
    centre: { x: 0, z: 0 },
    base: 330,
    waves: [
      [24, 3, 0.8],
      [16, 5, -1.2],
      [10, 8, 0.4],
      [5, 13, 2.1],
    ],
    bumps: [
      { theta: 0.33, size: 58, sigma: 0.22 }, // the lighthouse headland
      { theta: 2.17, size: -34, sigma: 0.26 }, // the harbour bay
    ],
    cliffs: [
      { theta: 0.33, strength: 0.85, sigma: 0.34 },
      { theta: 1.15, strength: 0.6, sigma: 0.3 },
      { theta: -0.7, strength: 0.7, sigma: 0.3 },
    ],
    beaches: [{ theta: 2.17, strength: 0.9, sigma: 0.24 }],
    rise: 24,
    peak: 74,
    roughness: 1,
    ridge: { x: -34, z: 24, direction: [0.82, -0.57], along: 250, across: 88, height: 96 },
    seed: 0,
  },
  {
    key: 'cove',
    name: 'the hidden cove',
    centre: { x: 750, z: -610 },
    base: 215,
    waves: [
      [18, 3, 2.2],
      [12, 5, 0.6],
      [7, 9, -1.1],
    ],
    // The cove itself: a deep notch guarded by two arms.
    bumps: [
      { theta: -0.5, size: -96, sigma: 0.2 },
      { theta: -0.84, size: 40, sigma: 0.12 },
      { theta: -0.16, size: 40, sigma: 0.12 },
    ],
    cliffs: [
      { theta: -0.86, strength: 0.95, sigma: 0.16 },
      { theta: -0.14, strength: 0.95, sigma: 0.16 },
      { theta: 1.9, strength: 0.75, sigma: 0.5 },
    ],
    beaches: [{ theta: -0.5, strength: 0.95, sigma: 0.09 }],
    rise: 30,
    peak: 96,
    roughness: 1.1,
    ridge: { x: 710, z: -560, direction: [0.3, 0.95], along: 170, across: 70, height: 62 },
    seed: 37,
  },
  {
    key: 'canyon',
    name: 'the canyon',
    centre: { x: -700, z: -460 },
    base: 250,
    waves: [
      [20, 4, 1.4],
      [11, 7, -0.5],
      [6, 11, 2.7],
    ],
    // Sheer nearly all the way round: this one is a block of rock.
    cliffs: [
      { theta: 0, strength: 0.9, sigma: 1.6 },
      { theta: 3.14, strength: 0.9, sigma: 1.6 },
    ],
    rise: 54,
    peak: 132,
    roughness: 0.7,
    // A flooded slot cut clean through, wide enough to fly and land in.
    carves: [
      {
        from: { x: -880, z: -330 },
        to: { x: -520, z: -600 },
        width: 46,
        wall: 26,
        floor: -7,
      },
    ],
    seed: 101,
  },
  {
    key: 'falls',
    name: 'the waterfall',
    centre: { x: -520, z: 620 },
    base: 235,
    waves: [
      [22, 3, -0.6],
      [13, 6, 1.9],
      [7, 10, 0.2],
    ],
    bumps: [{ theta: 1.6, size: -30, sigma: 0.3 }],
    cliffs: [
      { theta: 1.6, strength: 1, sigma: 0.34 }, // the face the water comes over
      { theta: -1.4, strength: 0.7, sigma: 0.5 },
    ],
    beaches: [{ theta: -2.6, strength: 0.85, sigma: 0.3 }],
    rise: 44,
    peak: 96,
    cliffHeight: 88, // the face the waterfall comes over
    roughness: 0.85,
    // Its tarn and lip are shelved in below, once PLACES exists.
    seed: 211,
  },
  {
    key: 'atoll',
    name: 'the lagoon',
    centre: { x: 700, z: 560 },
    base: 205,
    waves: [
      [14, 4, 0.9],
      [9, 7, 2.4],
    ],
    beaches: [
      { theta: 0, strength: 0.9, sigma: 2.5 },
      { theta: 3.14, strength: 0.9, sigma: 2.5 },
    ],
    rise: 46,
    peak: 10,
    roughness: 0.35,
    // A ring of sand around shallow water you can land in.
    lagoon: { from: 0.34, depth: 6 },
    seed: 313,
  },
  {
    key: 'chapel',
    name: 'the chapel on the rock',
    centre: { x: 0, z: -820 },
    base: 82,
    waves: [
      [6, 3, 0.4],
      [4, 5, 1.9],
    ],
    // A little stone quay faces the harbour; the rest is rock.
    cliffs: [{ theta: -1.57, strength: 0.7, sigma: 1.2 }],
    beaches: [{ theta: 1.57, strength: 0.9, sigma: 0.35 }],
    rise: 10,
    peak: 12,
    cliffHeight: 16,
    roughness: 0.35,
    seed: 401,
  },
  {
    key: 'fortress',
    name: 'the fortress island',
    centre: { x: 1050, z: 0 },
    base: 150,
    waves: [
      [12, 3, 2.6],
      [8, 5, 0.3],
      [5, 9, 1.1],
    ],
    // A long headland out to the east, with the sea cut clean through it.
    bumps: [{ theta: 0, size: 56, sigma: 0.17 }],
    cliffs: [
      { theta: 0, strength: 1, sigma: 0.5 },
      { theta: 1.9, strength: 0.85, sigma: 0.7 },
      { theta: -1.8, strength: 0.85, sigma: 0.7 },
    ],
    beaches: [{ theta: 3.14, strength: 0.85, sigma: 0.3 }],
    rise: 30,
    peak: 26,
    cliffHeight: 58,
    roughness: 0.6,
    seed: 503,
  },
  {
    key: 'pines',
    name: 'the pine island',
    centre: { x: -1050, z: 80 },
    base: 170,
    waves: [
      [16, 3, 1.1],
      [10, 5, -2.2],
      [6, 8, 0.5],
    ],
    // A sheltered bay on the far side, with something in it.
    bumps: [{ theta: -2.5, size: -58, sigma: 0.24 }],
    cliffs: [{ theta: 0.4, strength: 0.6, sigma: 0.6 }],
    beaches: [{ theta: -2.5, strength: 0.95, sigma: 0.32 }],
    rise: 22,
    peak: 40,
    roughness: 0.9,
    ridge: { x: -1080, z: 120, direction: [0.6, 0.8], along: 120, across: 70, height: 20 },
    seed: 607,
  },
  {
    key: 'stacks',
    name: 'the sea stacks',
    centre: { x: 120, z: 880 },
    // Not an island so much as three towers of rock standing in the sea, the
    // middle one pierced right through at water level.
    spires: [
      { dx: -74, dz: 12, radius: 24, height: 92 },
      { dx: 0, dz: -10, radius: 31, height: 118 },
      { dx: 74, dz: 18, radius: 21, height: 78 },
      { dx: 28, dz: 66, radius: 9, height: 20 },
    ],
    base: 70,
    waves: [],
    rise: 0,
    peak: 0,
    roughness: 0.6,
    seed: 709,
  },
];

const byKey = Object.fromEntries(ISLANDS.map((i) => [i.key, i]));
export const island = (key) => byKey[key];

/** A point out along a bearing from an island's centre, as a fraction of the
 * distance to its coast. Landmarks are pinned this way so that moving an
 * island moves everything on it. */
function along(key, theta, fraction) {
  const spec = byKey[key];
  const r = islandRadiusAt(spec, theta) * fraction;
  return { x: spec.centre.x + Math.cos(theta) * r, z: spec.centre.z + Math.sin(theta) * r };
}

/**
 * Rock and stone you can fly *under*: arches, cave roofs, bridge spans. The
 * height field cannot hold an overhang, so these are kept alongside it. Each
 * is a capsule in plan (a segment and a half-width) with a roof from
 * `bottom` up to `top` (or up to the uncut ground, for tunnels). Below the
 * bottom you are in the tunnel; above it the roof counts as ground.
 *
 * @type {{from:{x:number,z:number}, to:{x:number,z:number}, width:number, bottom:number, top?:number, name?:string, island?:string}[]}
 */
export const OVERHANGS = [];

/**
 * Tall things that are not ground — towers, the lighthouse, the fortress keep,
 * bridge piers — as upright cylinders. The island meshes ignore them; the
 * aeroplane and the camera treat them as solid, so the cushion lifts you
 * over a bell tower rather than through it. Each is `{x, z, radius, top}`.
 */
export const OBSTACLES = [];

/** World-space anchors. Everything that gets built looks itself up here. */
export const PLACES = {
  villageCentre: { x: -110, z: 167 },
  harbour: { x: -158, z: 244 },
  villageBeach: { x: -140, z: 272 },
  church: { x: -104, z: 150 },
  lighthouse: { x: 370, z: 128 },
  summit: { x: -34, z: 24 },

  // At the head of the notch, and a little way out into it.
  coveBeach: along('cove', -0.5, 0.88),
  coveDock: along('cove', -0.5, 1.06),

  canyonMouth: { x: -880, z: -330 },
  canyonEnd: { x: -520, z: -600 },

  // On the lip of the sea cliff, the tarn behind it, and the sea below.
  fallsTop: along('falls', 1.6, 0.98),
  fallsTarn: along('falls', 1.6, 0.72),
  fallsFoot: along('falls', 1.6, 1.22),

  lagoon: { x: 700, z: 560 },

  // Behind the waterfall: a tunnel in the foot of the cliff and a cavern
  // under the tarn, with water on its floor.
  grottoMouth: along('falls', 1.6, 1.02),
  grottoCavern: along('falls', 1.6, 0.5),
  grottoExit: along('falls', 2.75, 1.02),

  chapel: { x: 0, z: -838 },
  chapelQuay: along('chapel', 1.57, 1.08),

  fortress: { x: 1030, z: 0 },
  fortressArch: { x: 1228, z: 0 },

  pinesBay: along('pines', -2.5, 0.84),
  wreck: along('pines', -2.5, 1.1),
  pinesLake: { x: -1020, z: 110 },

  stacks: { x: 120, z: 870 },

  // The bridge across the middle of the canyon.
  bridge: { x: -700, z: -465 },
};

// Shelves that belong to the main island, kept beside the places they flatten.
island('harbour').shelves = [
  { ...PLACES.villageCentre, radius: 120, height: 30, strength: 0.9 },
  { ...PLACES.harbour, radius: 62, height: 5.5, strength: 0.95 },
  { ...PLACES.villageBeach, radius: 44, height: 2.8, strength: 0.9 },
  { ...PLACES.lighthouse, radius: 40, height: 44, strength: 0.85 },
];
island('cove').shelves = [{ ...PLACES.coveBeach, radius: 55, height: 3.4, strength: 0.95 }];
island('falls').shelves = [
  { ...PLACES.fallsTarn, radius: 58, height: 92, strength: 0.9 }, // the tarn
  { ...PLACES.fallsTop, radius: 26, height: 90, strength: 0.85 }, // the lip
];
island('chapel').shelves = [{ ...PLACES.chapel, radius: 36, height: 13, strength: 0.9 }];
island('fortress').shelves = [{ ...PLACES.fortress, radius: 78, height: 54, strength: 0.92 }];
island('pines').shelves = [{ ...PLACES.pinesBay, radius: 40, height: 2.6, strength: 0.9 }];

// The tall buildings (heights measured from the ground they stand on).
for (const [place, radius, height] of [
  [PLACES.church, 8, 72],
  [PLACES.lighthouse, 9, 50],
]) {
  OBSTACLES.push({ x: place.x, z: place.z, radius, top: 0, height, pending: true });
}

/* -------------------------------------------------- tunnels and lakes --- */

/**
 * Tunnels are trenches in the height field with a roof put back over them
 * (see OVERHANGS below): the grotto behind the falls, the arch through the
 * fortress headland, and the hole through the middle sea stack.
 */
function tunnel(key, from, to, { width, wall = 10, floor = -6, roof, name, glow = false }) {
  const spec = island(key);
  spec.carves ??= [];
  spec.carves.push({ from, to, width, wall, floor, roofed: true });
  OVERHANGS.push({ from, to, width: width + wall * 0.6, bottom: roof, name, island: key, glow });
}

/**
 * Still water above sea level that you can land on. The ground under each is
 * dished below `level`, and the flight model floats on `level` instead of the
 * sea.
 */
export const LAKES = [
  { ...PLACES.fallsTarn, radius: 44, level: 90, name: 'the tarn above the falls' },
  { ...PLACES.pinesLake, radius: 40, level: 24, name: 'a lake hidden in the pines' },
];

// In behind the waterfall, through a blue cavern big enough to land in,
// and out through the cliffs on the far side of the island.
tunnel('falls', along('falls', 1.6, 1.0), PLACES.grottoCavern, {
  width: 22,
  wall: 10,
  roof: 27,
  name: 'Behind the waterfall — the grotto',
});
tunnel('falls', PLACES.grottoCavern, PLACES.grottoCavern, {
  width: 54,
  wall: 12,
  roof: 34,
  name: 'The blue grotto — land if you like',
  glow: true,
});
tunnel('falls', PLACES.grottoCavern, PLACES.grottoExit, {
  width: 20,
  wall: 10,
  roof: 26,
  name: 'Daylight at the end of the tunnel',
});
tunnel('fortress', { x: 1228, z: -62 }, { x: 1228, z: 62 }, { width: 17, wall: 8, roof: 30, name: 'Through the sea arch' });
{
  // The middle stack is pierced north to south, clear of its neighbours.
  const c = island('stacks').centre;
  tunnel('stacks', { x: c.x, z: c.z - 58 }, { x: c.x, z: c.z + 42 }, {
    width: 13,
    wall: 6,
    roof: 32,
    name: 'Threading the needle',
  });
}
{
  // The bridge spans the canyon square across the channel.
  const { x, z } = PLACES.bridge;
  const nx = 0.6;
  const nz = 0.8;
  const half = 52;
  OVERHANGS.push({
    from: { x: x - nx * half, z: z - nz * half },
    to: { x: x + nx * half, z: z + nz * half },
    width: 8,
    bottom: 46,
    top: 66,
    name: 'Under the old bridge',
    bridge: true,
  });
}

// Precompute the reach of each island, for early-outs.
for (const spec of ISLANDS) {
  let max = spec.base;
  for (const [amp] of spec.waves) max += Math.abs(amp);
  for (const bump of spec.bumps ?? []) max += Math.max(0, bump.size);
  for (const spire of spec.spires ?? []) max = Math.max(max, Math.hypot(spire.dx, spire.dz) + spire.radius);
  spec.reach = max + 12;
  spec.reachSq = spec.reach * spec.reach;
}

/* ------------------------------------------------------------ coastline --- */

/** Coast radius of one island at a bearing from its centre. */
export function islandRadiusAt(spec, theta) {
  // Sea stacks have no single coastline; `base` is a notional one.
  let r = spec.base;
  for (const [amp, freq, phase] of spec.waves) r += amp * Math.sin(theta * freq + phase);
  for (const bump of spec.bumps ?? []) r += bump.size * gauss(dAngle(theta, bump.theta), bump.sigma);
  return r;
}

/** How sheer the coast is there: 0 is a beach, 1 a cliff. */
export function cliffFactorAt(spec, theta) {
  let cliff = 0;
  for (const c of spec.cliffs ?? []) {
    cliff = Math.max(cliff, c.strength * gauss(dAngle(theta, c.theta), c.sigma));
  }
  let soft = 0;
  for (const b of spec.beaches ?? []) {
    soft = Math.max(soft, b.strength * gauss(dAngle(theta, b.theta), b.sigma));
  }
  return Math.max(0, Math.min(1, cliff - soft));
}

/* --------------------------------------------------------------- height --- */

function ridgeAt(spec, x, z) {
  const ridge = spec.ridge;
  if (!ridge) return 0;
  const [ux, uz] = ridge.direction;
  const px = x - ridge.x;
  const pz = z - ridge.z;
  const along = px * ux + pz * uz;
  const across = px * -uz + pz * ux;
  return ridge.height * gauss(across, ridge.across) * gauss(along, ridge.along);
}

/** Pull a region towards a flat height — village shelves, tarns, beaches. */
function flattenTo(h, x, z, shelf) {
  const d2 = (x - shelf.x) * (x - shelf.x) + (z - shelf.z) * (z - shelf.z);
  const w = Math.exp(-d2 / (shelf.radius * shelf.radius)) * shelf.strength;
  return h * (1 - w) + shelf.height * w;
}

/** Distance from a point to a line segment, in the plane. */
function distanceToSegment(x, z, from, to) {
  const vx = to.x - from.x;
  const vz = to.z - from.z;
  const wx = x - from.x;
  const wz = z - from.z;
  const len2 = vx * vx + vz * vz || 1;
  const t = Math.max(0, Math.min(1, (wx * vx + wz * vz) / len2));
  return Math.hypot(wx - vx * t, wz - vz * t);
}

/** Cut a gorge: flat floor, near-vertical walls, in world coordinates. */
function carveTrench(h, x, z, carve) {
  const d = distanceToSegment(x, z, carve.from, carve.to);
  if (d > carve.width + carve.wall) return h;
  // 1 in the channel, falling away through the wall band.
  const inside = 1 - smoothstep(carve.width, carve.width + carve.wall, d);
  return h * (1 - inside) + carve.floor * inside;
}

function smoothstep(e0, e1, x) {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

/**
 * Height of one island at a world point, or `null` when the point is out at
 * sea. The second return channel — the shallow sea floor around the island —
 * comes back as a negative number so callers can take the highest of them.
 */
/** Sea stacks: steep towers, stepped a little so they read as strata. */
function heightOfSpires(spec, x, z) {
  let best = -Infinity;
  for (const spire of spec.spires) {
    const d = Math.hypot(x - spec.centre.x - spire.dx, z - spec.centre.z - spire.dz);
    const wobble = fbm((x + spec.seed) * 0.05, (z - spec.seed) * 0.05) * 3;
    const edge = spire.radius + wobble;
    if (d >= edge + 6) {
      best = Math.max(best, -2 - Math.min(30, (d - edge) * 0.4));
      continue;
    }
    const wall = 1 - smoothstep(edge - 3, edge + 4, d);
    const crown = 1 - Math.pow(d / (edge + 4), 3) * 0.28;
    const ledges = Math.floor(spire.height * crown * 0.2) / 0.2;
    best = Math.max(best, (ledges * 0.3 + spire.height * crown * 0.7) * wall - 2 * (1 - wall));
  }
  return best;
}

function heightOfIsland(spec, x, z, uncut = false) {
  if (spec.spires) {
    let h = heightOfSpires(spec, x, z);
    if (!uncut) for (const carve of spec.carves ?? []) h = carveTrench(h, x, z, carve);
    return h;
  }
  const dx = x - spec.centre.x;
  const dz = z - spec.centre.z;
  const r = Math.hypot(dx, dz);
  const theta = Math.atan2(dz, dx);
  const edge = islandRadiusAt(spec, theta);
  const cliff = cliffFactorAt(spec, theta);

  if (r >= edge) {
    // Sea floor: shelving away from this island's shore.
    const out = r - edge;
    return -1.5 - Math.min(34, out * (0.1 + cliff * 0.5));
  }

  const t = 1 - r / edge; // 0 at the waterline, 1 at the middle

  // Coastal profile: beaches ramp gently, cliff faces snap up almost vertically.
  const ramp = 1 - Math.exp(-t * (6 + cliff * 150));
  // The peak term is eased at the top, so summits are rounded hills rather
  // than the point of a cone.
  const crown = t * t * (2.2 - 1.2 * t);
  let h = (spec.rise * t + spec.peak * crown + cliff * (spec.cliffHeight ?? 44)) * ramp;

  h += ridgeAt(spec, x, z) * ramp;

  // Rolling hills at three scales, offset per island so they do not repeat.
  const s = spec.seed;
  h += fbm((x + s) * 0.0052, (z - s) * 0.0052) * 32 * spec.roughness * t;
  h += fbm((x + s) * 0.0145 + 11.3, (z - s) * 0.0145 - 4.7) * 17 * spec.roughness * t * (0.5 + t * 0.7);
  h += fbm((x + s) * 0.027, (z - s) * 0.027) * 5.5 * spec.roughness * t * (0.4 + cliff * 0.9);

  // A flooded middle, for the atoll.
  if (spec.lagoon) {
    const w = smoothstep(spec.lagoon.from - 0.12, spec.lagoon.from + 0.14, t);
    h = h * (1 - w) + -spec.lagoon.depth * w;
  }

  for (const shelf of spec.shelves ?? []) h = flattenTo(h, x, z, shelf);
  for (const lake of LAKES) h = dishLake(h, x, z, lake);
  for (const carve of spec.carves ?? []) {
    if (uncut && carve.roofed) continue;
    h = carveTrench(h, x, z, carve);
  }

  return h;
}

/** Dish the ground under a lake so its water has somewhere to sit. */
function dishLake(h, x, z, lake) {
  const d = Math.hypot(x - lake.x, z - lake.z);
  if (d > lake.radius * 1.8) return h;
  if (d > lake.radius) {
    // A low rim of rock holds the water in, the way a tarn sits in a hollow.
    const rim = lake.level + 1.6 - Math.max(0, d - lake.radius * 1.25) * 0.55;
    return Math.max(h, rim);
  }
  // Banks rise just past the shoreline; the bed shelves to a few metres deep.
  const bank = lake.level + 1.2 + (d - lake.radius) * 0.5;
  const bed = lake.level - 5 * smoothstep(lake.radius, lake.radius * 0.85, d);
  return Math.min(h, Math.max(bed, Math.min(bank, lake.level - 0.8 + smoothstep(lake.radius - 2, lake.radius + 6, d) * 3)));
}

/**
 * Ground height at a world position: the highest island at that point, or the
 * sea floor between them. Below the water level (see `waterLevelAt`) means
 * water. `uncut` gives the ground as it was before tunnels were dug through
 * it, which is where their roofs are.
 */
export function terrainHeightAt(x, z, uncut = false) {
  let best = OCEAN_FLOOR;
  for (const spec of ISLANDS) {
    const dx = x - spec.centre.x;
    const dz = z - spec.centre.z;
    if (dx * dx + dz * dz > spec.reachSq) continue;
    const h = heightOfIsland(spec, x, z, uncut);
    if (h > best) best = h;
  }
  return best;
}

/** The lake at a point, if there is one. */
export function lakeAt(x, z) {
  for (const lake of LAKES) {
    const dx = x - lake.x;
    const dz = z - lake.z;
    if (dx * dx + dz * dz < lake.radius * lake.radius * 1.2) return lake;
  }
  return null;
}

/** Height of the water surface at a point: a lake's level, or the sea's. */
export function waterLevelAt(x, z) {
  return lakeAt(x, z)?.level ?? SEA_LEVEL;
}

/* ------------------------------------------------------------ obstacles --- */


export function obstacleHeightAt(x, z) {
  let best = -Infinity;
  for (const o of OBSTACLES) {
    const dx = x - o.x;
    const dz = z - o.z;
    if (dx * dx + dz * dz < o.radius * o.radius && o.top > best) best = o.top;
  }
  return best;
}

/** Ground or building, whichever is higher. */
export function solidHeightAt(x, z) {
  return Math.max(terrainHeightAt(x, z), obstacleHeightAt(x, z));
}

/* ------------------------------------------------------------ overhangs --- */

/** The roof over a point, or null if the sky is open. */
export function ceilingAt(x, z) {
  for (const o of OVERHANGS) {
    if (distanceToSegment(x, z, o.from, o.to) < o.width) return o;
  }
  return null;
}

/** Height of the top of an overhang at a point: the rock as it was before
 * the tunnel was cut, or the bridge deck. */
export function roofTopAt(roof, x, z) {
  return roof.top ?? terrainHeightAt(x, z, true);
}

/* --------------------------------------------------------------- queries --- */

/** Height of whatever you would hit — ground above water, otherwise the sea. */
export function surfaceHeightAt(x, z) {
  return Math.max(terrainHeightAt(x, z), waterLevelAt(x, z), obstacleHeightAt(x, z));
}

/**
 * What is underneath something at a height: inside a tunnel that is the
 * tunnel floor (or the sea in it), not the rock and the lake on the roof.
 */
export function surfaceBelow(x, y, z) {
  const roof = ceilingAt(x, z);
  if (roof && y < roof.bottom) return Math.max(terrainHeightAt(x, z), SEA_LEVEL);
  if (roof) return Math.max(surfaceHeightAt(x, z), roofTopAt(roof, x, z));
  return surfaceHeightAt(x, z);
}

const _grad = { x: 0, z: 0 };
/** Uphill gradient (per metre). Reused object — copy it if you keep it. */
export function terrainGradient(x, z, step = 6) {
  const hx = terrainHeightAt(x + step, z) - terrainHeightAt(x - step, z);
  const hz = terrainHeightAt(x, z + step) - terrainHeightAt(x, z - step);
  _grad.x = hx / (2 * step);
  _grad.z = hz / (2 * step);
  return _grad;
}

/** The island whose coast is nearest, and how far outside it you are. */
export function nearestCoast(x, z) {
  let best = null;
  for (const spec of ISLANDS) {
    const dx = x - spec.centre.x;
    const dz = z - spec.centre.z;
    const r = Math.hypot(dx, dz);
    const theta = Math.atan2(dz, dx);
    let distance = r - islandRadiusAt(spec, theta);
    if (spec.spires) {
      distance = Infinity;
      for (const spire of spec.spires) {
        distance = Math.min(distance, Math.hypot(dx - spire.dx, dz - spire.dz) - spire.radius);
      }
    }
    if (!best || distance < best.distance) best = { spec, distance, theta, r };
  }
  return best;
}

/** Signed distance to the nearest coastline: negative inland. */
export function coastDistance(x, z) {
  return nearestCoast(x, z).distance;
}

export function isOverLand(x, z) {
  return terrainHeightAt(x, z) > SEA_LEVEL;
}

/** How far out the whole archipelago reaches, for fences and fog. */
export const ARCHIPELAGO_RADIUS = ISLANDS.reduce(
  (max, spec) => Math.max(max, Math.hypot(spec.centre.x, spec.centre.z) + spec.reach),
  0
);

/* ----------------------------------------------------------------- glsl --- */

/**
 * The same coastlines as GLSL, for the water shader's surf. Islands are tested
 * with a cheap distance check first, so a fragment out in the channel pays for
 * almost none of this.
 */
export function coastlineGLSL() {
  const f = (n) => n.toFixed(4);
  const bodies = ISLANDS.map((spec, index) => {
    if (spec.spires) {
      const towers = spec.spires
        .map((t) => `best = min(best, length(p - vec2(${f(spec.centre.x + t.dx)}, ${f(spec.centre.z + t.dz)})) - ${f(t.radius)});`)
        .join('\n    ');
      return `
  float coast${index}(vec2 p) {
    float best = 1.0e6;
    ${towers}
    return best;
  }`;
    }
    const waves = spec.waves
      .map(([amp, freq, phase]) => `r += ${f(amp)} * sin(th * ${f(freq)} + ${f(phase)});`)
      .join('\n      ');
    const bumps = (spec.bumps ?? [])
      .map((b) => `r += ${f(b.size)} * cw_gauss(cw_dAngle(th, ${f(b.theta)}), ${f(b.sigma)});`)
      .join('\n      ');
    return `
  float coast${index}(vec2 p) {
    vec2 d = p - vec2(${f(spec.centre.x)}, ${f(spec.centre.z)});
    float dist = length(d);
    if (dist > ${f(spec.reach + 300)}) return dist - ${f(spec.base)};
    float th = atan(d.y, d.x);
    float r = ${f(spec.base)};
    ${waves}
    ${bumps}
    return dist - r;
  }`;
  });

  const calls = ISLANDS.map((_, index) => `  best = min(best, coast${index}(p));`).join('\n');

  return `
  float cw_dAngle(float a, float b){ return atan(sin(a - b), cos(a - b)); }
  float cw_gauss(float d, float s){ return exp(-(d * d) / (s * s)); }
  ${bodies.join('\n')}
  float coastDistance(vec2 p) {
    float best = 1.0e6;
${calls}
    return best;
  }`;
}

// Obstacles registered by height above ground get their tops once the
// height field is ready.
for (const o of OBSTACLES) {
  if (o.pending) {
    o.top = terrainHeightAt(o.x, o.z) + o.height;
    delete o.pending;
  }
}
