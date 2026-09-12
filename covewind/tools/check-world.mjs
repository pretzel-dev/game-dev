/**
 * World sanity checks — `npm run check`.
 *
 * The island is pure maths, so the things that quietly break when the
 * silhouette is retuned (a house in the sea, a harbour on a cliff, a summit
 * poking through the flight ceiling) can all be caught without a browser.
 */
import {
  PLACES,
  islandRadius,
  cliffFactor,
  terrainHeightAt,
  coastDistance,
  TAU,
} from '../src/world/terrain.js';
import { HOUSE_SITES } from '../src/world/village-plan.js';

let failures = 0;
const ok = (name) => console.log(`  ok   ${name}`);
const fail = (name, detail) => {
  failures++;
  console.log(`  FAIL ${name} — ${detail}`);
};

function check(name, condition, detail) {
  if (condition) ok(name);
  else fail(name, detail);
}

function localSlope(x, z, step = 7) {
  const dx = terrainHeightAt(x + step, z) - terrainHeightAt(x - step, z);
  const dz = terrainHeightAt(x, z + step) - terrainHeightAt(x, z - step);
  return Math.hypot(dx, dz) / (2 * step);
}

console.log('\nCoastline');
{
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < 720; i++) {
    const r = islandRadius((i / 720) * TAU);
    min = Math.min(min, r);
    max = Math.max(max, r);
  }
  check('coastline never collapses', min > 120, `min radius ${min.toFixed(1)}`);
  check('coastline fits the water plane', max < 700, `max radius ${max.toFixed(1)}`);

  let worstJump = 0;
  for (let i = 0; i < 2000; i++) {
    const th = (i / 2000) * TAU;
    const d = Math.abs(islandRadius(th) - islandRadius(th + TAU / 2000));
    worstJump = Math.max(worstJump, d);
  }
  check('coastline is continuous', worstJump < 4, `largest step ${worstJump.toFixed(2)}m`);
}

console.log('\nLandmarks on buildable ground');
for (const [name, p] of Object.entries(PLACES)) {
  const h = terrainHeightAt(p.x, p.z);
  if (name === 'coveDock') {
    check(`${name} reaches the water`, h < 6, `ground ${h.toFixed(1)}m`);
    continue;
  }
  const slope = localSlope(p.x, p.z);
  const flatEnough = name === 'summit' ? slope < 0.9 : slope < 0.42;
  check(`${name} is above water`, h > 1.5, `ground ${h.toFixed(1)}m`);
  check(`${name} is flat enough`, flatEnough, `slope ${slope.toFixed(2)}`);
}

console.log('\nVillage');
{
  check('the village got built', HOUSE_SITES.length >= 18, `${HOUSE_SITES.length} houses`);
  const drowned = HOUSE_SITES.filter((s) => terrainHeightAt(s.x, s.z) < 3);
  check('no house in the sea', drowned.length === 0, `${drowned.length} drowned sites`);
  const steep = HOUSE_SITES.filter((s) => localSlope(s.x, s.z) > 0.5);
  check('no house on a cliff', steep.length === 0, `${steep.length} steep sites`);
}

console.log('\nCove');
{
  const { x, z } = PLACES.coveBeach;
  check('cove beach is sheltered', coastDistance(x, z) < 40, 'cove beach sits outside the coast');
  // The arms flanking the cove should read as cliffs, not dunes.
  let steepest = 0;
  for (let i = 0; i < 240; i++) {
    const th = -0.51 + (i / 240 - 0.5) * 1.4;
    if (cliffFactor(th) < 0.5) continue;
    const r = islandRadius(th);
    const cx = Math.cos(th);
    const cz = Math.sin(th);
    const inner = terrainHeightAt(cx * (r - 16), cz * (r - 16));
    steepest = Math.max(steepest, inner / 16);
  }
  check('cove arms are cliffs', steepest > 1.2, `steepest coastal rise ${steepest.toFixed(2)}`);
}

console.log('\nHeight field');
{
  let peak = -Infinity;
  let peakAt = null;
  let worstJump = 0;
  for (let x = -420; x <= 420; x += 6) {
    for (let z = -420; z <= 420; z += 6) {
      const h = terrainHeightAt(x, z);
      if (h > peak) {
        peak = h;
        peakAt = [x, z];
      }
      worstJump = Math.max(worstJump, Math.abs(h - terrainHeightAt(x + 3, z)));
    }
  }
  check('island has a summit worth flying over', peak > 120, `peak ${peak.toFixed(1)}m`);
  check('summit stays below the flight ceiling', peak < 260, `peak ${peak.toFixed(1)}m`);
  check('height field has no tears', worstJump < 60, `${worstJump.toFixed(1)}m over 3m`);
  console.log(`  info peak ${peak.toFixed(0)}m at ${peakAt}`);
}

console.log(failures ? `\n${failures} check(s) failed\n` : '\nAll world checks passed\n');
process.exit(failures ? 1 : 0);
