/**
 * Drives the car round the canyon without a browser — `npm run check`.
 *
 * Every test is something a player will do in the first ten minutes: go
 * round the loop, hit the kickers, ride the drum, climb the spiral and jump
 * off it, run the skyway, clear the canyon, hit a wall, hit the rim, and
 * mash the controls at random. If any of it breaks, the deploy stops.
 */
import { Vector3 } from 'three';
import { buildLayout } from '../src/world/layout.js';
import { heightAt, ROADS, roadSamples, RIM_START, HALF, MESAS, washDepth } from '../src/world/terrain.js';
import { createCar, updateCar, placeCar } from '../src/car/physics.js';
import { probe } from './stuck-probe.mjs';
import { throughHoop } from '../src/world/balloons.js';

const t0 = performance.now();
const layout = buildLayout();
const world = { collision: layout.collision, boosts: layout.boosts, water: layout.water, balloons: layout.balloons };
console.log(`built canyon in ${Math.round(performance.now() - t0)} ms: ${layout.collision.triangleCount} triangles, ${layout.pieces.length} pieces`);

let failures = 0;
function check(name, ok, detail = '') {
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}${detail ? `  (${detail})` : ''}`);
  if (!ok) failures++;
}

const DT = 1 / 60;
const up = new Vector3();
const fwd = new Vector3();
const upOf = (car) => up.set(0, 1, 0).applyQuaternion(car.quat);
const fwdOf = (car) => fwd.set(0, 0, 1).applyQuaternion(car.quat);
const headingTo = (x, z, tx, tz) => Math.atan2(tx - x, -(tz - z));

/** Steer towards the point `look` metres ahead along `path` ([x,y,z] list). */
function follower(path, look = 14) {
  let idx = 0;
  return (car) => {
    // Advance to the nearest point ahead.
    let best = idx;
    let bd = Infinity;
    for (let i = idx; i < Math.min(path.length, idx + 40); i++) {
      const d = (path[i][0] - car.pos.x) ** 2 + (path[i][1] - car.pos.y) ** 2 + (path[i][2] - car.pos.z) ** 2;
      if (d < bd) {
        bd = d;
        best = i;
      }
    }
    idx = best;
    let j = idx;
    let acc = 0;
    while (j < path.length - 1 && acc < look) {
      acc += Math.hypot(path[j + 1][0] - path[j][0], path[j + 1][2] - path[j][2]);
      j++;
    }
    const target = path[j];
    const f = fwdOf(car);
    const u = upOf(car);
    const to = new Vector3(target[0] - car.pos.x, target[1] - car.pos.y, target[2] - car.pos.z);
    to.addScaledVector(u, -to.dot(u));
    const left = new Vector3().crossVectors(u, f);
    const side = to.dot(left);
    const ahead = to.dot(f);
    const steer = Math.max(-1, Math.min(1, (-Math.atan2(side, Math.max(1, ahead)) * 2.2)));
    return { steer, progress: idx / (path.length - 1) };
  };
}

function run(car, seconds, control) {
  const log = { events: [], maxY: -Infinity, minClear: Infinity, maxSpeed: 0, airTime: 0, flipbacks: 0, unstuck: 0, nan: false, below: 0, maxR: 0 };
  for (let i = 0; i < seconds / DT; i++) {
    const input = control(car, i * DT);
    if (input === null) break;
    updateCar(car, input, world, DT);
    for (const e of car.events) {
      log.events.push(e);
      if (e.type === 'flipback') log.flipbacks++;
      if (e.type === 'unstuck') log.unstuck++;
    }
    if (process.env.TRACE && i % 10 === 0) console.log('   ', (i * DT).toFixed(2), car.pos.toArray().map((v) => v.toFixed(1)).join(','), 'v', car.speed.toFixed(1), 'g', car.grounded, 'up', upOf(car).y.toFixed(2), car.events.map((e) => e.type).join());
    const p = car.pos;
    if (!Number.isFinite(p.x + p.y + p.z + car.vel.x + car.vel.y + car.vel.z)) {
      log.nan = true;
      break;
    }
    log.maxY = Math.max(log.maxY, p.y);
    log.maxSpeed = Math.max(log.maxSpeed, car.speed);
    log.maxR = Math.max(log.maxR, Math.hypot(p.x, p.z));
    const clear = p.y - heightAt(p.x, p.z);
    log.minClear = Math.min(log.minClear, clear);
    if (clear < -1.2) log.below++;
    if (car.grounded === 0) log.airTime += DT;
  }
  return log;
}

const names = (log, type) => log.events.filter((e) => e.type === type);

/* ---------------------------------------------------------- the world --- */
{
  const s = layout.spawn;
  check('spawn is just above the ground', Math.abs(s.y - heightAt(s.x, s.z) - 1.4) < 0.6);
  let maxR = 0;
  for (const r of roadSamples) maxR = Math.max(maxR, Math.hypot(r.x, r.z));
  check('roads stay inside the canyon wall', maxR < RIM_START - 40, `furthest ${Math.round(maxR)} m`);
  let worst = 0;
  for (const m of MESAS) {
    for (const r of roadSamples) {
      if (m.name === 'spiral') continue;
      const d = Math.hypot(r.x - m.x, r.z - m.z);
      if (d < m.r) worst = Math.max(worst, m.r - d);
    }
  }
  check('no road runs into a mesa top', worst === 0);
  const crossings = ROADS.map((road) => {
    const r = roadSamples.filter((q) => q.road === road.name);
    let runs = 0;
    for (let i = 1; i < r.length; i++) if (r[i].inWash && !r[i - 1].inWash) runs++;
    return runs;
  });
  const byName = Object.fromEntries(ROADS.map((r, i) => [r.name, crossings[i]]));
  check('the main loop crosses the wash twice, the south spur once, nothing else', byName.loop === 2 && byName['south spur'] === 1 && crossings.reduce((a, b) => a + b, 0) === 3, crossings.join(','));
  let buried = 0;
  for (const p of layout.boosts) if (Math.abs(p.y - heightAt(p.x, p.z)) > 0.5 && p.y < heightAt(p.x, p.z)) buried++;
  check('no boost pad is buried', buried === 0);
}

/* -------------------------------------------------------- the loop --- */
{
  const car = createCar(layout.spawn);
  const log = run(car, 9, () => ({ throttle: 1, steer: 0 }));
  const loops = names(log, 'trick').filter((e) => e.name === 'loop').length;
  check('full throttle from the start goes round the loop', loops === 1, `loops ${loops}, top ${log.maxY.toFixed(1)} m`);
  check('…and comes out upright and still going', upOf(car).y > 0.9 && car.speed > 20, `up ${upOf(car).y.toFixed(2)}, ${car.speed.toFixed(1)} m/s`);
  check('…without rolling over', log.flipbacks === 0 && log.unstuck === 0);
}
{
  // Too slow: it should fall back out of the loop, not stick to the roof.
  const car = createCar(layout.spawn);
  placeCar(car, -5.5, layout.spawn.y, 20, 0);
  const log = run(car, 10, (c, t) => ({ throttle: t < 1.6 ? 0.6 : 0, steer: 0 }));
  const loops = names(log, 'trick').filter((e) => e.name === 'loop').length;
  check('creeping into the loop does not go round', loops === 0, `top ${log.maxY.toFixed(1)} m`);
  check('…and you end up on the ground, not stuck', car.grounded >= 3 || log.flipbacks > 0, `grounded ${car.grounded}`);
}

/* ------------------------------------------------------- the kickers --- */
{
  const car = createCar(layout.spawn);
  placeCar(car, -14, heightAt(-14, -2) + 1.2, -2, -Math.PI / 2);
  const log = run(car, 9, () => ({ throttle: 1, steer: 0 }));
  const landings = names(log, 'landed');
  check('the kicker row throws you into the air', landings.length >= 2, `${landings.length} landings, ${log.airTime.toFixed(1)} s airborne`);
  check('…and you land on your wheels', log.flipbacks === 0 && upOf(car).y > 0.8, `up ${upOf(car).y.toFixed(2)}`);
}

/* ------------------------------------------------------ air control --- */
{
  const car = createCar(layout.spawn);
  placeCar(car, -14, heightAt(-14, -2) + 1.2, -2, -Math.PI / 2);
  let pressed = false;
  const log = run(car, 10, (c) => {
    // Off the big kicker, hold "back" until one flip is done.
    const air = c.grounded === 0 && c.pos.x < -125;
    if (air && c.airTime > 0.1 && Math.abs(c.airSpinLocal.x) < Math.PI * 1.85) pressed = true;
    else pressed = false;
    return { throttle: air ? 0 : 1, steer: 0, pitch: pressed ? -1 : 0 };
  });
  const flips = names(log, 'landed').filter((e) => e.tricks.some((t) => t.includes('backflip')));
  check('a backflip off the big kicker is called', flips.length >= 1, names(log, 'landed').map((e) => e.tricks.join('+') || '-').join(' '));
}

/* --------------------------------------------------------- the drum --- */
{
  const drum = layout.pieces.find((p) => p.name === 'drum');
  const pad = { x: 250, z: 120 };
  const car = createCar(layout.spawn);
  // Start inside, heading round the wall.
  placeCar(car, pad.x + 14, heightAt(pad.x + 14, pad.z) + 1.2, pad.z, 0);
  const log = run(car, 14, (c) => {
    const dx = c.pos.x - pad.x;
    const dz = c.pos.z - pad.z;
    const r = Math.hypot(dx, dz);
    // Aim along the circle, a little outward to climb.
    const tang = [dz / r, -dx / r];
    const out = r < 21 ? 3 : 0;
    const tx = c.pos.x + tang[0] * 12 + (dx / r) * out;
    const tz = c.pos.z + tang[1] * 12 + (dz / r) * out;
    const h = headingTo(c.pos.x, c.pos.z, tx, tz);
    const f = fwdOf(c);
    const cur = Math.atan2(f.x, -f.z);
    const err = Math.atan2(Math.sin(h - cur), Math.cos(h - cur));
    return { throttle: c.speed < 24 ? 1 : 0, steer: Math.max(-1, Math.min(1, err * 2)) };
  });
  const walls = names(log, 'trick').filter((e) => e.name === 'wall ride').length;
  check('the drum can be ridden round the wall', walls >= 1, `top ${(log.maxY - heightAt(pad.x, pad.z)).toFixed(1)} m up, ${log.maxSpeed.toFixed(1)} m/s`);
  check('…without getting stuck in it', log.unstuck === 0 && !log.nan && drum);
}

/* ------------------------------------------------- the spiral mesa --- */
{
  const spiral = layout.pieces.find((p) => p.name === 'spiral');
  const path = spiral.path;
  const car = createCar(layout.spawn);
  const p0 = path[2];
  const p1 = path[6];
  placeCar(car, p0[0], p0[1] + 1.3, p0[2], headingTo(p0[0], p0[2], p1[0], p1[2]));
  const follow = follower(path, 16);
  let reached = 0;
  const log = run(car, 60, (c) => {
    const f = follow(c);
    reached = Math.max(reached, f.progress);
    if (f.progress > 0.995) return null;
    return { throttle: c.speed < 26 ? 1 : 0.3, steer: f.steer };
  });
  check('the spiral road can be driven to the top', reached > 0.99 && car.pos.y > 55, `reached ${(reached * 100).toFixed(0)}%, y ${car.pos.y.toFixed(1)}`);
  check('…without falling off', log.flipbacks === 0 && log.unstuck === 0);
  // Then off the ski jump on top.
  const j = layout.jumps.spiral;
  placeCar(car, j.x, j.y + 1.4, j.z, j.heading);
  let after = 0;
  const jump = run(car, 12, (c) => {
    if (c.airTime === 0 && after > 0) after += DT;
    if (c.grounded === 0 && c.airTime > 1) after = DT;
    return after > 2.5 ? null : { throttle: 1, steer: 0 };
  });
  const air = names(jump, 'landed').reduce((a, e) => Math.max(a, e.airTime), 0);
  check('…and the balloon in its path gets a bounce', names(jump, 'balloon').length >= 1, `${names(jump, 'balloon').length} bounce(s)`);
  check('the jump off the top is a long one, and you land it', air > 2.5 && jump.flipbacks === 0 && upOf(car).y > 0.8, `${air.toFixed(1)} s in the air`);
}

/* ------------------------------------------------------- the skyway --- */
{
  const parts = layout.pieces.filter((p) => p.name === 'skyway');
  const path = [...parts[0].path, ...parts[1].path, ...parts[2].path];
  const car = createCar(layout.spawn);
  const p0 = path[1];
  const p1 = path[5];
  placeCar(car, p0[0], p0[1] + 1.3, p0[2], headingTo(p0[0], p0[2], p1[0], p1[2]));
  const follow = follower(path, 18);
  let reached = 0;
  const log = run(car, 60, (c) => {
    const f = follow(c);
    reached = Math.max(reached, f.progress);
    if (f.progress > 0.995 && c.grounded === 0) return null;
    return { throttle: c.speed < 30 ? 1 : 0.4, steer: f.steer, boost: c.speed < 30 };
  });
  check('the skyway can be driven end to end, over the gap', reached > 0.97, `reached ${(reached * 100).toFixed(0)}%, ${log.airTime.toFixed(1)} s airborne`);
  check('…on its wheels', log.flipbacks === 0 && log.unstuck === 0);
}

/* ----------------------------------------------------- the canyon jump --- */
{
  const loop = roadSamples.filter((s) => s.road === 'loop');
  const i = loop.findIndex((s, k) => s.inWash && !loop[k - 1].inWash && s.x > 0);
  const j = loop.findIndex((s, k) => k > i && !s.inWash);
  const path = loop.slice(i - 90, j + 60).map((s) => [s.x, s.y, s.z]);
  const start = path[0];
  const car = createCar(layout.spawn);
  placeCar(car, start[0], start[1] + 1.4, start[2], headingTo(start[0], start[2], path[4][0], path[4][2]));
  const follow = follower(path, 20);
  const far = loop[j];
  let airborne = 0;
  let hooped = 0;
  const prev = new Vector3().copy(car.pos);
  const log = run(car, 10, (c) => {
    const f = follow(c);
    for (const h of layout.hoops) {
      if (throughHoop(h, prev, c.pos)) hooped++;
      const da = (prev.x - h.x) * h.nx + (prev.z - h.z) * h.nz;
      const db = (c.pos.x - h.x) * h.nx + (c.pos.z - h.z) * h.nz;
      if (process.env.HOOP && (da > 0) !== (db > 0)) console.log('plane', h.y.toFixed(1), c.pos.y.toFixed(1), Math.hypot(c.pos.x - h.x, c.pos.z - h.z).toFixed(1));
    }
    prev.copy(c.pos);
    if (c.grounded === 0) airborne += DT;
    return { throttle: 1, boost: true, steer: c.grounded ? f.steer : 0 };
  });
  const across = new Vector3(far.x - loop[i - 1].x, 0, far.z - loop[i - 1].z).normalize();
  const past = (car.pos.x - far.x) * across.x + (car.pos.z - far.z) * across.z;
  check('the canyon jump clears the wash at full chat', past > 0 && washDepth(car.pos.x, car.pos.z) < 3, `${log.airTime.toFixed(1)} s airborne, ${past.toFixed(0)} m past the far lip`);
  check('…and lands upright', log.flipbacks === 0 && upOf(car).y > 0.8);
  check('…through the hoop over the middle', hooped >= 1, `${hooped} hoop(s)`);
}

/* ------------------------------------------------------- hard knocks --- */
{
  // Straight at a skyway pillar at speed: glance off, keep going.
  const pillar = layout.pillars.find((p) => p.y1 - p.y0 > 8 && Math.hypot(p.x, p.z) < 500);
  const car = createCar(layout.spawn);
  const sx = pillar.x + 40;
  placeCar(car, sx, heightAt(sx, pillar.z + 0.4) + 1.2, pillar.z + 0.4, -Math.PI / 2);
  car.vel.set(-30, 0, 0);
  const log = run(car, 3, () => ({ throttle: 1, steer: 0 }));
  check('hitting a pillar square on glances off and keeps speed', car.speed > 12 && !log.nan && log.unstuck === 0, `${car.speed.toFixed(1)} m/s after`);
}
{
  // At the canyon wall at full speed: up the bowl and back down.
  const car = createCar(layout.spawn);
  placeCar(car, 0, heightAt(0, -600) + 1.2, -600, 0);
  const log = run(car, 25, (c, t) => ({ throttle: t < 8 ? 1 : 0, boost: t < 8, steer: 0 }));
  check('the rim sends you back', log.maxR < HALF - 20 && Math.hypot(car.pos.x, car.pos.z) < RIM_START + 60, `furthest ${log.maxR.toFixed(0)} m, highest ${log.maxY.toFixed(0)} m`);
  check('…and never through the ground', log.below === 0 && !log.nan);
}

/* ---------------------------------------------------------- the falls --- */
{
  const road = roadSamples.filter((r) => r.road === 'falls road');
  const path = road.map((r) => [r.x, r.y, r.z]);
  const pool = layout.water[0];
  path.push([pool.x, pool.level, pool.z], [pool.x + (pool.x - road[0].x) * 0.3, pool.level, pool.z + (pool.z - road[0].z) * 0.3]);
  const car = createCar(layout.spawn);
  placeCar(car, path[0][0], path[0][1] + 1.4, path[0][2], headingTo(path[0][0], path[0][2], path[3][0], path[3][2]));
  const follow = follower(path, 12);
  let slowest = Infinity;
  const log = run(car, 14, (c) => {
    if (c.inWater) slowest = Math.min(slowest, c.speed);
    return { throttle: 1, steer: follow(c).steer };
  });
  check('the falls road runs into the pool, and you splash', names(log, 'splash').length >= 1, `${names(log, 'splash').length} splash(es)`);
  check('…wading slows you but you drive out the far side', slowest < 15 && Math.hypot(car.pos.x - pool.x, car.pos.z - pool.z) > pool.r, `slowest ${slowest.toFixed(1)} m/s in the water`);
}

/* ------------------------------------------------ no hard stops --- */
{
  // Flat out at every piece from eight directions: the car should never
  // need lifting out (rolling back down a slope too steep to climb is fine).
  const { runs, pinned } = probe(layout);
  const rescued = pinned.filter((p) => p.unstuck);
  check('driving into any piece from any side never pins the car', rescued.length <= 2, `${rescued.length} of ${runs} runs needed lifting out${rescued.length ? ': ' + rescued.slice(0, 3).map((p) => `${p.piece} from ${p.from}°`).join(', ') : ''}`);
}

/* -------------------------------------------------------- mash it --- */
{
  let rnd = 12345;
  const random = () => ((rnd = (rnd * 16807) % 2147483647) / 2147483647);
  const starts = [[0, 60], [-200, -100], [450, -260], [300, 450], [-600, 300], [600, -200], [250, 120], [-430, -250]];
  let bad = 0;
  let worst = '';
  for (const [x, z] of starts) {
    const car = createCar(layout.spawn);
    placeCar(car, x, heightAt(x, z) + 1.5, z, random() * Math.PI * 2);
    let input = {};
    const log = run(car, 40, (c, t) => {
      if (Math.floor(t * 2) !== Math.floor((t - DT) * 2)) {
        input = {
          throttle: random() < 0.8 ? 1 : 0,
          brake: random() < 0.15 ? 1 : 0,
          steer: random() * 2 - 1,
          boost: random() < 0.3,
          handbrake: random() < 0.15,
          pitch: random() * 2 - 1,
          roll: random() < 0.2 ? random() * 2 - 1 : 0,
        };
      }
      return input;
    });
    const r = Math.hypot(car.pos.x, car.pos.z);
    if (log.nan || log.below > 5 || log.maxR > HALF - 10 || r > RIM_START + 200) {
      bad++;
      worst = `from ${x},${z}: nan ${log.nan}, below ${log.below}, maxR ${log.maxR.toFixed(0)}`;
    }
  }
  check('random driving never breaks the car', bad === 0, worst);
}

console.log(failures ? `\n${failures} check(s) failed` : '\nall good');
process.exit(failures ? 1 : 0);
