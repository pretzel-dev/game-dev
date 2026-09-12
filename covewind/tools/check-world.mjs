/**
 * World sanity checks — `npm run check`.
 *
 * The archipelago is pure maths, so the things that quietly break when it is
 * retuned (a house in the sea, a harbour on a cliff, a canyon that does not go
 * through, islands that grow into each other) can all be caught without a
 * browser.
 */
import {
  ARCHIPELAGO_RADIUS,
  ISLANDS,
  PLACES,
  TAU,
  cliffFactorAt,
  island,
  islandRadiusAt,
  terrainHeightAt,
} from '../src/world/terrain.js';
import { HOUSE_SITES } from '../src/world/village-plan.js';

let failures = 0;
const ok = (name) => console.log(`  ok   ${name}`);
const fail = (name, detail) => {
  failures++;
  console.log(`  FAIL ${name} — ${detail}`);
};
const check = (name, condition, detail) => (condition ? ok(name) : fail(name, detail));

function localSlope(x, z, step = 7) {
  const dx = terrainHeightAt(x + step, z) - terrainHeightAt(x - step, z);
  const dz = terrainHeightAt(x, z + step) - terrainHeightAt(x, z - step);
  return Math.hypot(dx, dz) / (2 * step);
}

/** Highest ground on one island, and where. */
function peakOf(spec) {
  let peak = -Infinity;
  let at = null;
  const step = 8;
  for (let x = -spec.reach; x <= spec.reach; x += step) {
    for (let z = -spec.reach; z <= spec.reach; z += step) {
      if (x * x + z * z > spec.reachSq) continue;
      const wx = spec.centre.x + x;
      const wz = spec.centre.z + z;
      const h = terrainHeightAt(wx, wz);
      if (h > peak) {
        peak = h;
        at = [Math.round(wx), Math.round(wz)];
      }
    }
  }
  return { peak, at };
}

console.log('\nCoastlines');
for (const spec of ISLANDS) {
  let min = Infinity;
  let max = -Infinity;
  let worstJump = 0;
  for (let i = 0; i < 1440; i++) {
    const th = (i / 1440) * TAU;
    const r = islandRadiusAt(spec, th);
    min = Math.min(min, r);
    max = Math.max(max, r);
    worstJump = Math.max(worstJump, Math.abs(r - islandRadiusAt(spec, th + TAU / 1440)));
  }
  check(`${spec.key}: coastline never collapses`, min > 60, `min radius ${min.toFixed(1)}`);
  check(`${spec.key}: coastline is continuous`, worstJump < 4, `step ${worstJump.toFixed(2)}m`);
}

console.log('\nThe islands are separate');
for (let i = 0; i < ISLANDS.length; i++) {
  for (let j = i + 1; j < ISLANDS.length; j++) {
    const a = ISLANDS[i];
    const b = ISLANDS[j];
    const gap = Math.hypot(a.centre.x - b.centre.x, a.centre.z - b.centre.z) - a.reach - b.reach;
    check(`${a.key} ↔ ${b.key} have water between them`, gap > 60, `gap ${gap.toFixed(0)}m`);
  }
}
check('the whole archipelago fits inside the fence', ARCHIPELAGO_RADIUS < 1400, `${ARCHIPELAGO_RADIUS.toFixed(0)}m`);
console.log(`  info archipelago radius ${ARCHIPELAGO_RADIUS.toFixed(0)}m`);

console.log('\nLandmarks on buildable ground');
for (const [name, p] of Object.entries(PLACES)) {
  const h = terrainHeightAt(p.x, p.z);
  if (name === 'coveDock' || name === 'canyonMouth' || name === 'canyonEnd' || name === 'lagoon' || name === 'fallsFoot') {
    check(`${name} is in the water`, h < 1, `ground ${h.toFixed(1)}m`);
    continue;
  }
  const slope = localSlope(p.x, p.z);
  // The lip of a waterfall is a cliff edge; that is the whole idea.
  const steepOk = name === 'summit' || name === 'fallsTop';
  const flatEnough = steepOk ? slope < 9 : slope < 0.45;
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

console.log('\nThe cove');
{
  const spec = island('cove');
  const { x, z } = PLACES.coveBeach;
  const r = Math.hypot(x - spec.centre.x, z - spec.centre.z);
  check('the cove beach is inside its island', r < islandRadiusAt(spec, Math.atan2(z - spec.centre.z, x - spec.centre.x)), 'beach is out at sea');
  let steepest = 0;
  for (let i = 0; i < 240; i++) {
    const th = -0.5 + (i / 240 - 0.5) * 1.4;
    if (cliffFactorAt(spec, th) < 0.5) continue;
    const edge = islandRadiusAt(spec, th);
    const inner = terrainHeightAt(
      spec.centre.x + Math.cos(th) * (edge - 16),
      spec.centre.z + Math.sin(th) * (edge - 16)
    );
    steepest = Math.max(steepest, inner / 16);
  }
  check('the cove arms are cliffs', steepest > 1.2, `steepest rise ${steepest.toFixed(2)}`);
}

console.log('\nThe canyon goes through');
{
  const from = PLACES.canyonMouth;
  const to = PLACES.canyonEnd;
  let highestFloor = -Infinity;
  let narrowest = Infinity;
  for (let i = 0; i <= 40; i++) {
    const t = i / 40;
    const x = from.x + (to.x - from.x) * t;
    const z = from.z + (to.z - from.z) * t;
    highestFloor = Math.max(highestFloor, terrainHeightAt(x, z));

    // How wide is the water at this point, across the channel?
    const nx = -(to.z - from.z);
    const nz = to.x - from.x;
    const len = Math.hypot(nx, nz);
    let width = 0;
    for (let d = 0; d < 60; d += 1) {
      const a = terrainHeightAt(x + (nx / len) * d, z + (nz / len) * d);
      const b = terrainHeightAt(x - (nx / len) * d, z - (nz / len) * d);
      if (a > 0 && b > 0) break;
      width = d * 2;
    }
    narrowest = Math.min(narrowest, width);
  }
  check('the channel is water all the way through', highestFloor < 0, `highest floor ${highestFloor.toFixed(1)}m`);
  check('the channel is wide enough to fly', narrowest > 26, `narrowest ${narrowest.toFixed(0)}m`);
  console.log(`  info channel: floor ${highestFloor.toFixed(1)}m, narrowest ${narrowest.toFixed(0)}m`);

  // And the walls either side are worth flying between.
  const mid = { x: (from.x + to.x) / 2, z: (from.z + to.z) / 2 };
  let wall = 0;
  for (let d = 40; d < 120; d += 4) {
    const nx = -(to.z - from.z);
    const nz = to.x - from.x;
    const len = Math.hypot(nx, nz);
    wall = Math.max(wall, terrainHeightAt(mid.x + (nx / len) * d, mid.z + (nz / len) * d));
  }
  check('the canyon has walls', wall > 60, `walls only ${wall.toFixed(0)}m`);
}

console.log('\nThe lagoon');
{
  const spec = island('atoll');
  const middle = terrainHeightAt(spec.centre.x, spec.centre.z);
  check('the lagoon holds water', middle < -1, `middle is ${middle.toFixed(1)}m`);
  check('the lagoon is shallow', middle > -12, `middle is ${middle.toFixed(1)}m`);
  let ring = -Infinity;
  for (let i = 0; i < 72; i++) {
    const th = (i / 72) * TAU;
    const r = islandRadiusAt(spec, th) * 0.78;
    ring = Math.max(ring, terrainHeightAt(spec.centre.x + Math.cos(th) * r, spec.centre.z + Math.sin(th) * r));
  }
  check('there is sand around it', ring > 2, `ring tops out at ${ring.toFixed(1)}m`);
}

console.log('\nThe waterfall');
{
  const lip = terrainHeightAt(PLACES.fallsTop.x, PLACES.fallsTop.z);
  const below = terrainHeightAt(PLACES.fallsTop.x, PLACES.fallsTop.z + 40);
  check('the lip is high', lip > 70, `${lip.toFixed(0)}m`);
  check('it falls into the sea', below < 2, `ground below the lip is ${below.toFixed(1)}m`);
  const tarn = terrainHeightAt(PLACES.fallsTarn.x, PLACES.fallsTarn.z);
  check('the tarn sits behind the lip', Math.abs(tarn - lip) < 40, `tarn ${tarn.toFixed(0)}m vs lip ${lip.toFixed(0)}m`);
  console.log(`  info lip ${lip.toFixed(0)}m, tarn ${tarn.toFixed(0)}m`);
}

console.log('\nHeight field');
{
  let worstJump = 0;
  for (const spec of ISLANDS) {
    const { peak, at } = peakOf(spec);
    // A sand ring is a summit too, just a modest one.
    const wanted = spec.lagoon ? 8 : 20;
    check(`${spec.key}: has a summit`, peak > wanted, `peak ${peak.toFixed(1)}m`);
    check(`${spec.key}: stays below the flight ceiling`, peak < 260, `peak ${peak.toFixed(1)}m`);
    console.log(`  info ${spec.key}: peak ${peak.toFixed(0)}m at ${at}`);
    for (let x = -spec.reach; x <= spec.reach; x += 7) {
      for (let z = -spec.reach; z <= spec.reach; z += 7) {
        const wx = spec.centre.x + x;
        const wz = spec.centre.z + z;
        worstJump = Math.max(worstJump, Math.abs(terrainHeightAt(wx, wz) - terrainHeightAt(wx + 3, wz)));
      }
    }
  }
  // Sea cliffs and canyon walls are meant to be near-vertical; this is
  // looking for the accidental kind of cliff.
  check('height field has no tears', worstJump < 130, `${worstJump.toFixed(1)}m over 3m`);
}

console.log(failures ? `\n${failures} check(s) failed\n` : '\nAll world checks passed\n');
process.exit(failures ? 1 : 0);
