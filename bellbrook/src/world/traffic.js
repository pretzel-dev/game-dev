/**
 * Little cars pottering round the roads (on the left), a bus, and an ice
 * cream van. They wait for whatever's in front of them, take turns at the
 * junctions, and when they hear the siren they pull in to the kerb and
 * stop until the fire engine has gone by.
 */
import { mulberry32, angleDelta, damp } from '../core/utils.js';
import { N, LANE, roadAt } from './roads.js';

const DIRS = [
  [1, 0], // east
  [0, 1], // south
  [-1, 0], // west
  [0, -1], // north
];
// Driving on the left: the lane is to the left of the centre line.
const laneOf = (d) => [DIRS[d][1] * LANE, -DIRS[d][0] * LANE];
const TURN_IN = 6.5; // where a junction starts, from its middle

export const VEHICLES = {
  car: { length: 3.8, speed: [5.5, 7] },
  bus: { length: 8.5, speed: [4.5, 5] },
  icecream: { length: 4.8, speed: [4, 4.5] },
};

const CAR_COLORS = [0xe2504a, 0x3f8fd2, 0xf2d03b, 0x4fb06a, 0xf28a3b, 0xb07ae0, 0x2fb5a8, 0xf25a7a, 0xffffff, 0x9fc3d9];

const valid = (i, j, d) => {
  const ni = i + DIRS[d][0];
  const nj = j + DIRS[d][1];
  return ni >= 0 && ni <= N && nj >= 0 && nj <= N;
};

export function createTraffic(count, seed = 23) {
  const rng = mulberry32(seed);
  const cars = [];
  const used = new Set();
  for (let k = 0; k < count; k++) {
    const kind = k === 0 ? 'bus' : k === 1 ? 'icecream' : 'car';
    // Start on a stretch nobody else is on.
    let i;
    let j;
    let d;
    do {
      i = Math.floor(rng() * (N + 1));
      j = Math.floor(rng() * (N + 1));
      d = Math.floor(rng() * 4);
    } while (!valid(i, j, d) || used.has(`${i},${j},${d}`));
    used.add(`${i},${j},${d}`);
    const spec = VEHICLES[kind];
    const car = {
      kind,
      color: kind === 'car' ? CAR_COLORS[k % CAR_COLORS.length] : null,
      length: spec.length,
      cruise: spec.speed[0] + rng() * (spec.speed[1] - spec.speed[0]),
      speed: 0,
      x: 0,
      z: 0,
      heading: 0,
      pull: 0, // 0 in the lane, 1 pulled in to the kerb
      wait: 0,
      path: [],
      node: { i, j },
      dir: d,
      inJunction: null,
      wheel: 0,
    };
    // First stretch: from the middle of this road towards the next junction.
    const [lx, lz] = laneOf(d);
    const ax = roadAt(i) + lx + DIRS[d][0] * (TURN_IN + 4);
    const az = roadAt(j) + lz + DIRS[d][1] * (TURN_IN + 4);
    car.x = ax;
    car.z = az;
    car.heading = Math.atan2(DIRS[d][0], -DIRS[d][1]);
    car.node = { i: i + DIRS[d][0], j: j + DIRS[d][1] };
    planTurn(car, rng);
    cars.push(car);
  }
  return { cars, rng };
}

/** Add the next junction to a car's path: in, round the corner, out. */
function planTurn(car, rng) {
  const { i, j } = car.node;
  const dIn = car.dir;
  const options = [0, 1, 2, 3].filter((d) => d !== (dIn + 2) % 4 && valid(i, j, d));
  // Mostly straight on, sometimes a turn.
  let dOut = options.includes(dIn) && rng() < 0.55 ? dIn : options[Math.floor(rng() * options.length) % options.length];
  if (dOut === undefined) dOut = (dIn + 2) % 4;
  const nx = roadAt(i);
  const nz = roadAt(j);
  const [ix, iz] = laneOf(dIn);
  const [ox, oz] = laneOf(dOut);
  const E = [nx + ix - DIRS[dIn][0] * TURN_IN, nz + iz - DIRS[dIn][1] * TURN_IN];
  const X = [nx + ox + DIRS[dOut][0] * TURN_IN, nz + oz + DIRS[dOut][1] * TURN_IN];
  const C = dIn === dOut ? [(E[0] + X[0]) / 2, (E[1] + X[1]) / 2] : dOut === (dIn + 2) % 4 ? [nx, nz] : [nx + ix + ox, nz + iz + oz];
  car.path.push({ x: E[0], z: E[1], junction: { i, j } });
  for (let k = 1; k <= 6; k++) {
    const u = k / 6;
    const a = (1 - u) * (1 - u);
    const b = 2 * (1 - u) * u;
    const c = u * u;
    car.path.push({ x: a * E[0] + b * C[0] + c * X[0], z: a * E[1] + b * C[1] + c * X[1], junction: k < 6 ? { i, j } : null });
  }
  car.dir = dOut;
  car.node = { i: i + DIRS[dOut][0], j: j + DIRS[dOut][1] };
}

/** The offset applied when pulled in to the kerb (to the left). */
function kerbOffset(car) {
  const fx = Math.sin(car.heading);
  const fz = -Math.cos(car.heading);
  // Left of facing (fx, fz) is (fz, -fx).
  return [fz * 1.7 * car.pull, -fx * 1.7 * car.pull];
}

/** Where each vehicle is drawn and bumped into, after pulling over. */
export function carPose(car) {
  const [ox, oz] = kerbOffset(car);
  return { x: car.x + ox, z: car.z + oz };
}

/** ctx: { truck: { x, z, heading, speed }, siren } */
export function updateTraffic(T, dt, ctx) {
  const { truck } = ctx;
  for (const car of T.cars) {
    const fx = Math.sin(car.heading);
    const fz = -Math.cos(car.heading);
    let target = car.cruise;

    // Something in front? Ease up behind it.
    const ahead = (x, z, len) => {
      const rx = x - car.x;
      const rz = z - car.z;
      const along = rx * fx + rz * fz;
      const side = Math.abs(rx * fz - rz * fx);
      if (along > 0 && along < 10 + len / 2 && side < 2.6) target = Math.min(target, Math.max(0, (along - car.length / 2 - len / 2 - 1.5) * 1.3));
    };
    ahead(truck.x, truck.z, 7);
    for (const o of T.cars) if (o !== car) ahead(o.x, o.z, o.length);

    // Junctions: one at a time.
    const next = car.path[0];
    if (next && next.junction && !car.inJunction) {
      const d = Math.hypot(next.x - car.x, next.z - car.z);
      if (d < 4) {
        const busy = T.cars.some((o) => o !== car && o.inJunction && o.inJunction.i === next.junction.i && o.inJunction.j === next.junction.j);
        if (busy) target = 0;
        else car.inJunction = next.junction;
      }
    }

    // The siren: pull in and stop until it's gone past.
    const dTruck = Math.hypot(truck.x - car.x, truck.z - car.z);
    const pullIn = ctx.siren && dTruck < 30 && !car.inJunction;
    car.pull = damp(car.pull, pullIn ? 1 : 0, pullIn ? 2.5 : 1.2, dt);
    if (pullIn) target = 0;
    if (car.pull > 0.05 && !pullIn) target = Math.min(target, car.cruise * (1 - car.pull));

    car.speed = damp(car.speed, target, target < car.speed ? 5 : 1.6, dt);

    // Follow the path.
    let step = car.speed * dt;
    while (step > 0 && car.path.length) {
      const p = car.path[0];
      const dx = p.x - car.x;
      const dz = p.z - car.z;
      const d = Math.hypot(dx, dz);
      if (d <= step) {
        car.x = p.x;
        car.z = p.z;
        step -= d;
        car.path.shift();
        if (car.inJunction && !p.junction && car.path.length && !car.path[0].junction) car.inJunction = null;
      } else {
        car.x += (dx / d) * step;
        car.z += (dz / d) * step;
        step = 0;
      }
      if (car.path.length < 2) planTurn(car, T.rng);
    }
    if (car.path.length < 2) planTurn(car, T.rng);
    // Leaving the junction.
    if (car.inJunction && car.path[0] && !car.path[0].junction) car.inJunction = null;
    const p = car.path[0];
    if (p) {
      const want = Math.atan2(p.x - car.x, -(p.z - car.z));
      if (Math.hypot(p.x - car.x, p.z - car.z) > 0.05) car.heading += angleDelta(car.heading, want) * Math.min(1, 10 * dt);
    }
    car.wheel += car.speed * dt;
  }
}

/** The moving circles the fire engine keeps clear of. */
export function trafficCircles(T, out = []) {
  out.length = 0;
  for (const car of T.cars) {
    const { x, z } = carPose(car);
    const fx = Math.sin(car.heading);
    const fz = -Math.cos(car.heading);
    const half = car.length / 2 - 0.9;
    for (let s = -half; s <= half + 0.01; s += Math.max(0.5, half)) out.push({ x: x + fx * s, z: z + fz * s, r: 1.0 });
  }
  return out;
}
