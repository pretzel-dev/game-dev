/**
 * Covewind terrain — one analytic height field shared by everything.
 *
 * The island is described in polar coordinates so the silhouette can be
 * authored directly: `islandRadius()` is the coastline, `terrainHeightAt()`
 * fills it in. Nothing here imports Three.js, which keeps the world sane to
 * unit-test (see `npm run check`) and lets gameplay code sample the ground
 * without touching scene graph or raycasters.
 *
 * Landmark anchors (kept stable so the village, harbour, lighthouse and cove
 * never drift when the silhouette is retuned) live in `PLACES`.
 */

export const TAU = Math.PI * 2;

export const PLACES = {
  villageCentre: { x: -110, z: 167 },
  harbour: { x: -158, z: 244 },
  villageBeach: { x: -140, z: 272 },
  church: { x: -104, z: 150 },
  lighthouse: { x: 370, z: 128 },
  coveBeach: { x: 172, z: -94 },
  coveDock: { x: 188, z: -110 },
  summit: { x: -34, z: 24 },
};

const angleOf = (p) => Math.atan2(p.z, p.x);
const TH_COVE = angleOf(PLACES.coveBeach); // ≈ -0.51
const TH_LIGHT = angleOf(PLACES.lighthouse); // ≈  0.33
const TH_HARBOUR = angleOf(PLACES.harbour); // ≈  2.17

/** Shortest signed angular distance between two headings. */
function dAngle(a, b) {
  return Math.atan2(Math.sin(a - b), Math.cos(a - b));
}
const gauss = (d, sigma) => Math.exp(-(d * d) / (sigma * sigma));

/**
 * The coastline, as data.
 *
 * Shared with the water shader (see `coastlineGLSL()`) so the foam that breaks
 * on the shore is drawn against exactly the same curve the island is built
 * from — the two can never drift apart when the silhouette is retuned.
 */
export const COAST = {
  base: 332,
  waves: [
    [26, 3, 0.8],
    [17, 5, -1.2],
    [11, 8, 0.4],
    [5.5, 13, 2.1],
  ],
  cove: { theta: TH_COVE, depth: 128, sigma: 0.2, armOffset: 0.34, armHeight: 42, armSigma: 0.1 },
  headland: { theta: TH_LIGHT, height: 58, sigma: 0.22 },
  bay: { theta: TH_HARBOUR, depth: 34, sigma: 0.26 },
};

/**
 * Coastline radius for a compass angle.
 *
 * Three deliberate features on top of the wobble: a lighthouse promontory, a
 * cove notch guarded by two arms, and a sheltered bay for the harbour.
 */
export function islandRadius(theta) {
  let r = COAST.base;
  for (const [amp, freq, phase] of COAST.waves) r += amp * Math.sin(theta * freq + phase);

  const dCove = dAngle(theta, COAST.cove.theta);
  r -= COAST.cove.depth * gauss(dCove, COAST.cove.sigma); // the cove bites deep in
  r += COAST.cove.armHeight * gauss(Math.abs(dCove) - COAST.cove.armOffset, COAST.cove.armSigma);

  r += COAST.headland.height * gauss(dAngle(theta, COAST.headland.theta), COAST.headland.sigma);
  r -= COAST.bay.depth * gauss(dAngle(theta, COAST.bay.theta), COAST.bay.sigma);

  return r;
}

/** The same curve as GLSL, for the water shader's shoreline foam. */
export function coastlineGLSL() {
  const f = (n) => n.toFixed(4);
  const waves = COAST.waves
    .map(([amp, freq, phase]) => `r += ${f(amp)} * sin(th * ${f(freq)} + ${f(phase)});`)
    .join('\n    ');
  return `
  float cw_dAngle(float a, float b){ return atan(sin(a - b), cos(a - b)); }
  float cw_gauss(float d, float s){ return exp(-(d * d) / (s * s)); }
  float islandRadius(float th){
    float r = ${f(COAST.base)};
    ${waves}
    float dc = cw_dAngle(th, ${f(COAST.cove.theta)});
    r -= ${f(COAST.cove.depth)} * cw_gauss(dc, ${f(COAST.cove.sigma)});
    r += ${f(COAST.cove.armHeight)} * cw_gauss(abs(dc) - ${f(COAST.cove.armOffset)}, ${f(COAST.cove.armSigma)});
    r += ${f(COAST.headland.height)} * cw_gauss(cw_dAngle(th, ${f(COAST.headland.theta)}), ${f(COAST.headland.sigma)});
    r -= ${f(COAST.bay.depth)} * cw_gauss(cw_dAngle(th, ${f(COAST.bay.theta)}), ${f(COAST.bay.sigma)});
    return r;
  }`;
}

/**
 * How cliff-like the coast is at a given angle (0 = beach, 1 = sheer).
 * The cove arms and the seaward face of the lighthouse headland are cliffs;
 * the village bay and the cove's inner beach stay soft and walkable.
 */
export function cliffFactor(theta) {
  const dCove = dAngle(theta, TH_COVE);
  const arms = 0.95 * gauss(Math.abs(dCove) - 0.36, 0.17);
  const coveMouth = 0.7 * gauss(Math.abs(dCove) - 0.16, 0.07);
  const headland = 0.85 * gauss(dAngle(theta, TH_LIGHT), 0.34);
  const northFace = 0.6 * gauss(dAngle(theta, 1.15), 0.3);
  const beach = 0.9 * gauss(dCove, 0.08) + 0.9 * gauss(dAngle(theta, TH_HARBOUR), 0.24);
  return Math.max(0, Math.min(1, Math.max(arms, coveMouth, headland, northFace) - beach));
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

/** Fractal noise in −1..1. Three octaves is plenty for a stylised island. */
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

/** Pull a region towards a flat target height — village shelves, cove floor. */
function flattenTo(h, x, z, cx, cz, radius, target, strength = 1) {
  const d2 = (x - cx) * (x - cx) + (z - cz) * (z - cz);
  const w = Math.exp(-d2 / (radius * radius)) * strength;
  return h * (1 - w) + target * w;
}

/* --------------------------------------------------------------- height --- */

export const SEA_LEVEL = 0;

/**
 * Ground height at a world position. Below `SEA_LEVEL` means sea floor, so
 * callers can treat `max(height, SEA_LEVEL)` as "what you would land on".
 */
export function terrainHeightAt(x, z) {
  const r = Math.hypot(x, z);
  const th = Math.atan2(z, x);
  const edge = islandRadius(th);
  const cliff = cliffFactor(th);

  if (r >= edge) {
    // Sea floor drops away from the shore; cliffs plunge, beaches shelve.
    const out = r - edge;
    return -1.5 - Math.min(34, out * (0.1 + cliff * 0.5));
  }

  const t = 1 - r / edge; // 0 at the waterline, 1 at the centre

  // Coastal profile: beaches ramp gently, cliff faces snap up almost vertically.
  const ramp = 1 - Math.exp(-t * (6 + cliff * 150));

  // Bulk of the island plus a ridge line running through the summit.
  const bulk = 24 * t + 74 * t * t;
  const spine = ridgeAt(x, z);
  let h = (bulk + spine + cliff * 44) * ramp;

  // Rolling hills at three scales. Without the middle one the island reads as
  // a smooth cone from the air, which is the one thing it must not do.
  h += fbm(x * 0.0052, z * 0.0052) * 32 * t;
  h += fbm(x * 0.0145 + 11.3, z * 0.0145 - 4.7) * 17 * t * (0.5 + t * 0.7);
  h += fbm(x * 0.027, z * 0.027) * 5.5 * t * (0.4 + cliff * 0.9);

  // Places people actually use are flat enough to build on.
  h = flattenTo(h, x, z, PLACES.villageCentre.x, PLACES.villageCentre.z, 120, 30, 0.9);
  h = flattenTo(h, x, z, PLACES.harbour.x, PLACES.harbour.z, 62, 5.5, 0.95);
  h = flattenTo(h, x, z, PLACES.villageBeach.x, PLACES.villageBeach.z, 44, 2.8, 0.9);
  h = flattenTo(h, x, z, PLACES.coveBeach.x, PLACES.coveBeach.z, 55, 3.4, 0.95);
  h = flattenTo(h, x, z, PLACES.lighthouse.x, PLACES.lighthouse.z, 40, 44, 0.85);

  return h;
}

/** Ridge running NW→SE through the summit, with a lower shoulder inland. */
function ridgeAt(x, z) {
  const ux = 0.82;
  const uz = -0.57; // ridge direction
  const px = x - PLACES.summit.x;
  const pz = z - PLACES.summit.z;
  const along = px * ux + pz * uz;
  const across = px * -uz + pz * ux;
  const crest = gauss(across, 88) * gauss(along, 250);
  const shoulder = gauss(across - 150, 120) * gauss(along + 60, 210);
  return 96 * crest + 34 * shoulder;
}

/* --------------------------------------------------------------- queries --- */

/** Height of whatever you would hit — ground above water, otherwise the sea. */
export function surfaceHeightAt(x, z) {
  return Math.max(terrainHeightAt(x, z), SEA_LEVEL);
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

/** Signed distance to the coastline: negative inland, positive out at sea. */
export function coastDistance(x, z) {
  const r = Math.hypot(x, z);
  return r - islandRadius(Math.atan2(z, x));
}

/** Point on the coastline nearest the given angle — used for surf audio. */
export function coastPoint(theta) {
  const r = islandRadius(theta);
  return { x: Math.cos(theta) * r, z: Math.sin(theta) * r };
}

export function isOverLand(x, z) {
  return terrainHeightAt(x, z) > SEA_LEVEL;
}
