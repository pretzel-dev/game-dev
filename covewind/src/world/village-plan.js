/**
 * Where the village goes.
 *
 * Kept separate from the meshes (and free of Three.js) so the layout can be
 * reasoned about — and checked — as data. Houses are laid along three
 * concentric lanes stepping down the shelf towards the harbour, in the way a
 * hillside fishing town actually grows, then filtered against the height field
 * so nothing ever ends up in the sea or pasted onto a cliff.
 */
import { PLACES, terrainHeightAt } from './terrain.js';

export const VILLAGE_CENTRE = PLACES.villageCentre;

/** Deterministic little RNG so the town is the same town every visit. */
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Direction from the village shelf down to the harbour.
const TOWARDS_HARBOUR = Math.atan2(
  PLACES.harbour.z - VILLAGE_CENTRE.z,
  PLACES.harbour.x - VILLAGE_CENTRE.x
);

/** The lanes, which double as the road ribbons drawn in `village.js`. */
export const LANES = [
  { radius: 48, spread: 1.15, houses: 5 },
  { radius: 86, spread: 1.25, houses: 8 },
  { radius: 124, spread: 1.3, houses: 11 },
];

export function lanePoint(lane, u) {
  const theta = TOWARDS_HARBOUR + (u - 0.5) * 2 * lane.spread;
  return {
    x: VILLAGE_CENTRE.x + Math.cos(theta) * lane.radius,
    z: VILLAGE_CENTRE.z + Math.sin(theta) * lane.radius,
    theta,
  };
}

function slopeAt(x, z, step = 7) {
  const dx = terrainHeightAt(x + step, z) - terrainHeightAt(x - step, z);
  const dz = terrainHeightAt(x, z + step) - terrainHeightAt(x, z - step);
  return Math.hypot(dx, dz) / (2 * step);
}

function buildSites() {
  const rnd = mulberry32(20260912);
  const sites = [];

  LANES.forEach((lane, laneIndex) => {
    for (let i = 0; i < lane.houses; i++) {
      const u = (i + 0.5) / lane.houses;
      const p = lanePoint(lane, u);
      // Step houses off the lane, alternating sides like a real street.
      const side = i % 2 === 0 ? 1 : -1;
      const offset = 13 + rnd() * 5;
      const x = p.x + Math.cos(p.theta) * offset * side + (rnd() - 0.5) * 6;
      const z = p.z + Math.sin(p.theta) * offset * side + (rnd() - 0.5) * 6;
      sites.push({
        x,
        z,
        // Houses face down the hill, roughly towards the water.
        rot: p.theta + Math.PI / 2 + (rnd() - 0.5) * 0.5,
        scale: 0.74 + rnd() * 0.3,
        lane: laneIndex,
        u,
      });
    }
  });

  // A short waterfront row above the piers.
  for (let i = 0; i < 5; i++) {
    const t = i / 4;
    sites.push({
      x: PLACES.harbour.x - 58 + t * 104 + (rnd() - 0.5) * 8,
      z: PLACES.harbour.z - 26 + Math.sin(t * Math.PI) * 9,
      rot: Math.PI + (rnd() - 0.5) * 0.4,
      scale: 0.7 + rnd() * 0.22,
      lane: 3,
      u: t,
    });
  }

  return sites.filter((s) => terrainHeightAt(s.x, s.z) > 4.5 && slopeAt(s.x, s.z) < 0.46);
}

export const HOUSE_SITES = buildSites();

/** Laundry strung between neighbours on the same lane. */
export function laundryLines() {
  const lines = [];
  for (let i = 1; i < HOUSE_SITES.length; i++) {
    const a = HOUSE_SITES[i - 1];
    const b = HOUSE_SITES[i];
    if (a.lane !== b.lane) continue;
    const d = Math.hypot(a.x - b.x, a.z - b.z);
    if (d < 16 || d > 40) continue;
    if (i % 2) continue; // not every gap — it should feel incidental
    lines.push({ a, b });
  }
  return lines;
}
