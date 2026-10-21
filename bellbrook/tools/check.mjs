/**
 * Headless checks: build Bellbrook in Node and play it.
 *
 *  1. The town: buildings don't overlap the roads, the truck starts clear,
 *     and there are plenty of places for calls of every kind.
 *  2. An autopilot follows the arrows to 25 calls in a row and puts each
 *     fire out (or rescues the kitten) with the real water simulation.
 *  3. Random stick-mashing all over town: never inside a building, never
 *     off the map, never pinned in place.
 *  4. The townsfolk and the traffic run for a few minutes without anyone
 *     wandering off the pavement or a car leaving the road.
 *
 * Run with `npm run check`. A failure blocks the deploy.
 */
import { buildCity, inBounds, BOUNDS } from '../src/world/city.js';
import { buildCollider, pushCircle } from '../src/world/collide.js';
import { route, nearestRoadPoint, ROAD, HALF } from '../src/world/roads.js';
import { createTruck, updateTruck, placeTruck, TRUCK } from '../src/truck/physics.js';
import { createFires, updateFires, douse } from '../src/world/fires.js';
import { createWater, spray, updateWater, aimArc } from '../src/world/water.js';
import { createPeople, updatePeople } from '../src/world/people.js';
import { createTraffic, updateTraffic, trafficCircles, carPose } from '../src/world/traffic.js';
import { mulberry32 } from '../src/core/utils.js';

let failures = 0;
const ok = (cond, msg) => {
  if (cond) console.log(`  ok  ${msg}`);
  else {
    failures++;
    console.log(`  FAIL ${msg}`);
  }
};

const t0 = Date.now();
const city = buildCity();
const collider = buildCollider(city);
const world = { collider, ponds: city.ponds };
const DT = 1 / 60;

/* ------------------------------------------------------------ 1. town --- */
console.log('town');
{
  const overRoad = city.boxes.filter((b) => {
    for (const [x, z] of [
      [b.minX + 0.01, b.minZ + 0.01],
      [b.maxX - 0.01, b.maxZ - 0.01],
      [(b.minX + b.maxX) / 2, (b.minZ + b.maxZ) / 2],
    ]) {
      if (Math.abs(x) < HALF + ROAD && Math.abs(z) < HALF + ROAD && nearestRoadPoint(x, z).dist < ROAD / 2) return true;
    }
    return false;
  });
  ok(overRoad.length === 0, `no building on a road (${city.boxes.length} solid things)`);
  const p = pushCircle(collider, city.spawn.x, city.spawn.z, 3);
  ok(p.depth < 1e-6, 'the fire engine starts in the clear');
  const kinds = {};
  for (const s of city.spots) kinds[s.kind] = (kinds[s.kind] || 0) + 1;
  ok(city.spots.length > 120, `${city.spots.length} places for a call: ${JSON.stringify(kinds)}`);
  ok(kinds.cat >= 20, 'plenty of trees for kittens');
  ok(city.spots.every((s) => s.roadDist < 30), 'every call is near a road');
  // Nothing a fire is meant to be sprayed at is inside a building.
  const buried = city.spots.filter((s) => collider.boxAt(s.x, s.y, s.z));
  ok(buried.length === 0, `no fire inside a building${buried.length ? `: ${buried.map((s) => s.name).join(', ')}` : ''}`);
}

/* -------------------------------------------- shared: the autopilot --- */
function steerTo(truck, x, z) {
  const dx = x - truck.x;
  const dz = z - truck.z;
  const d = Math.hypot(dx, dz) || 1;
  const m = Math.min(1, d / 6);
  return { dx: (dx / d) * m, dz: (dz / d) * m };
}

/* --------------------------------------------- 2. answer 25 calls --- */
console.log('calls');
{
  const truck = createTruck(city.spawn);
  const fires = createFires(city, 99);
  const water = createWater(700);
  const rng = mulberry32(5);
  let simTime = 0;
  let done = 0;
  let worst = 0;
  let deepest = 0;
  const kinds = {};
  let callStart = 0;
  let ladder = 0;
  let waypoints = null;
  let replan = 0;
  while (done < 25 && simTime < 25 * 150) {
    simTime += DT;
    const f = fires.active;
    let input = { dx: 0, dz: 0 };
    let spraying = false;
    if (f) {
      if (f.age < DT * 1.5) {
        callStart = simTime;
        waypoints = null;
      }
      const dist = Math.hypot(f.x - truck.x, f.z - truck.z);
      const standoff = f.kind === 'cat' ? 9 : 14;
      if (dist > standoff) {
        replan -= DT;
        if (!waypoints || replan <= 0) {
          waypoints = route(truck.x, truck.z, f.x, f.z);
          waypoints.push({ x: f.x, z: f.z });
          replan = 1;
        }
        while (waypoints.length > 1 && Math.hypot(waypoints[0].x - truck.x, waypoints[0].z - truck.z) < 4.5) waypoints.shift();
        input = steerTo(truck, waypoints[0].x, waypoints[0].z);
        ladder = 0;
      } else if (f.kind === 'cat') {
        ladder = Math.min(1, ladder + DT * 1.2);
      } else spraying = true;
    }
    updateTruck(truck, input, world, DT);
    if (spraying) {
      const nozzle = { x: truck.x, y: 3.9, z: truck.z };
      spray(water, nozzle, aimArc(nozzle.x, nozzle.y, nozzle.z, f.x, f.y, f.z), DT, rng);
    }
    updateWater(water, DT, { collider, fire: fires.active, people: null });
    for (const e of water.events) if (e.type === 'fire') douse(fires);
    updateFires(fires, DT, { x: truck.x, z: truck.z, ladderUp: ladder > 0.85 });
    for (const e of fires.events) {
      if (e.type === 'out' || e.type === 'rescued') {
        done++;
        kinds[e.fire.kind] = (kinds[e.fire.kind] || 0) + 1;
        worst = Math.max(worst, simTime - callStart);
        ladder = 0;
      }
    }
    fires.events.length = 0;
    for (const b of city.boxes) {
      const qx = Math.max(b.minX, Math.min(b.maxX, truck.x));
      const qz = Math.max(b.minZ, Math.min(b.maxZ, truck.z));
      if (Math.hypot(truck.x - qx, truck.z - qz) < 0.01) deepest = Math.max(deepest, 1);
    }
  }
  ok(done === 25, `answered ${done} calls (${JSON.stringify(kinds)}) in ${Math.round(simTime)}s of driving`);
  ok(worst < 110, `slowest call took ${worst.toFixed(0)}s from the bell to "hooray"`);
  ok(deepest === 0, 'the truck never drove into a building');
}

/* ------------------------------------------------- 3. stick-mashing --- */
console.log('mashing');
{
  const rng = mulberry32(42);
  const truck = createTruck(city.spawn);
  let inside = 0;
  let outside = 0;
  let pinned = 0;
  let input = { dx: 0, dz: 0 };
  let since = 0;
  let mark = { x: truck.x, z: truck.z };
  const cars = [];
  const traffic = createTraffic(14, 3);
  for (let k = 0; k < 60 * 60 * 6; k++) {
    since += DT;
    if (since > 2) {
      // Every couple of seconds: a new direction, and see that the last
      // stretch got somewhere.
      if (Math.hypot(input.dx, input.dz) > 0.5 && Math.hypot(truck.x - mark.x, truck.z - mark.z) < 1.5) {
        pinned++;
        if (process.env.VERBOSE) console.log('    pinned at', truck.x.toFixed(1), truck.z.toFixed(1), 'heading', truck.heading.toFixed(2), 'wanted', Math.atan2(input.dx, -input.dz).toFixed(2));
      }
      const a = rng() * Math.PI * 2;
      const m = rng() < 0.15 ? 0 : 0.6 + rng() * 0.4;
      input = { dx: Math.cos(a) * m, dz: Math.sin(a) * m };
      since = 0;
      mark = { x: truck.x, z: truck.z };
      // Now and then, drop the truck somewhere random (like a long drive).
      if (rng() < 0.08) {
        let x;
        let z;
        do {
          x = BOUNDS.minX + rng() * (BOUNDS.maxX - BOUNDS.minX);
          z = BOUNDS.minZ + rng() * (BOUNDS.maxZ - BOUNDS.minZ);
        } while (pushCircle(collider, x, z, 3).depth > 0);
        placeTruck(truck, x, z, rng() * 6.28);
        mark = { x, z };
      }
    }
    updateTraffic(traffic, DT, { truck, siren: false });
    trafficCircles(traffic, cars);
    updateTruck(truck, input, world, DT, cars);
    if (!inBounds(truck.x, truck.z)) {
      if (process.env.VERBOSE && outside < 5) console.log('    outside at', truck.x.toFixed(2), truck.z.toFixed(2));
      outside++;
    }
    for (const off of TRUCK.offsets) {
      const fx = Math.sin(truck.heading) * off;
      const fz = -Math.cos(truck.heading) * off;
      if (collider.boxAt(truck.x + fx, 0.5, truck.z + fz)) inside++;
    }
  }
  ok(outside === 0, 'never left the map');
  ok(inside === 0, `never ended up inside a building (${inside})`);
  ok(pinned <= 4, `hardly ever pinned in place (${pinned} of ${Math.round((60 * 6 * 60) / 120)} stretches)`);
}

/* ------------------------------ 3b. steering it from behind, like a car --- */
console.log('steering from behind');
{
  const rng = mulberry32(77);
  const truck = createTruck(city.spawn);
  let inside = 0;
  let outside = 0;
  let pinned = 0;
  let stretches = 0;
  let input = { throttle: 0, steer: 0 };
  let since = 0;
  let mark = { x: truck.x, z: truck.z };
  for (let k = 0; k < 60 * 60 * 6; k++) {
    since += DT;
    if (since > 2.5) {
      if (input.throttle > 0.5 && Math.hypot(truck.x - mark.x, truck.z - mark.z) < 1.5) {
        pinned++;
        if (process.env.VERBOSE) console.log('    pinned at', truck.x.toFixed(1), truck.z.toFixed(1));
      }
      stretches++;
      // Mostly full gas, steering a bit, sometimes backing up.
      input = { throttle: rng() < 0.12 ? -1 : 0.6 + rng() * 0.4, steer: rng() < 0.4 ? 0 : (rng() - 0.5) * 2 };
      since = 0;
      mark = { x: truck.x, z: truck.z };
    }
    updateTruck(truck, input, world, DT);
    if (!inBounds(truck.x, truck.z)) outside++;
    for (const off of TRUCK.offsets) {
      const fx = Math.sin(truck.heading) * off;
      const fz = -Math.cos(truck.heading) * off;
      if (collider.boxAt(truck.x + fx, 0.5, truck.z + fz)) inside++;
    }
  }
  ok(outside === 0 && inside === 0, 'never left the map or ended up inside a building');
  ok(pinned <= 4, `hardly ever pinned in place (${pinned} of ${stretches} stretches)`);
}

/* ------------------------------------------- 4. people and traffic --- */
console.log('town life');
{
  const people = createPeople(city, 130, 3);
  const traffic = createTraffic(14, 4);
  const truck = createTruck(city.spawn);
  const fires = createFires(city, 4);
  let bad = 0;
  let cheered = 0;
  let waved = 0;
  let offRoad = 0;
  let moving = 0;
  let samples = 0;
  for (let k = 0; k < 60 * 180; k++) {
    // Drive round the block with the siren on, with a fire now and then.
    const a = k * DT * 0.2;
    truck.x = Math.cos(a) * 60;
    truck.z = Math.sin(a) * 60;
    truck.speed = 10;
    updateFires(fires, DT, { x: truck.x, z: truck.z, ladderUp: false });
    let cheer = null;
    if (fires.active && fires.active.age > 20) {
      const f = fires.active;
      cheer = { x: f.x, z: f.z };
      if (f.kind === 'cat') updateFires(fires, 2, { x: f.x, z: f.z, ladderUp: true });
      else while (fires.active) douse(fires);
    }
    fires.events.length = 0;
    updatePeople(people, DT, { truck, siren: true, horn: k % 600 === 0, fire: fires.active, cheer, blocks: city.blocks });
    updateTraffic(traffic, DT, { truck, siren: k % 1200 < 300 });
    for (const p of people.list) {
      if (!Number.isFinite(p.x) || !Number.isFinite(p.z)) bad++;
      if (p.state === 'cheer') cheered++;
      if (p.state === 'wave') waved++;
    }
    for (const car of traffic.cars) {
      const { x, z } = carPose(car);
      if (!Number.isFinite(x)) bad++;
      if (nearestRoadPoint(x, z).dist > ROAD / 2 + 0.5) offRoad++;
      moving += car.speed;
      samples++;
    }
  }
  ok(bad === 0, 'nobody vanished');
  ok(cheered > 0 && waved > 0, 'people waved at the siren and cheered when a fire went out');
  ok(offRoad === 0, `cars stayed on the roads (${offRoad})`);
  ok(moving / samples > 2, `traffic keeps moving (average ${(moving / samples).toFixed(1)} m/s)`);
}

console.log(`\n${failures ? `${failures} FAILED` : 'all good'} (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
process.exit(failures ? 1 : 0);
