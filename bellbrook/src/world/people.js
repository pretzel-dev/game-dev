/**
 * The townsfolk. They stroll round the pavements and cross at the
 * corners. Hear the siren and they stop and wave. Get too close and they
 * hop out of the way. When there's a fire they come and watch (from a safe
 * distance), and when it's out they jump up and down and cheer. Spray
 * them and they giggle.
 *
 * Pure data: the renderer reads x, z, heading and the pose numbers.
 */
import { mulberry32, angleDelta, damp } from '../core/utils.js';

export const PEOPLE_COLORS = {
  shirts: [0xe2504a, 0x3f8fd2, 0xf2d03b, 0x4fb06a, 0xf28a3b, 0xb07ae0, 0x2fb5a8, 0xf25a7a, 0xffffff, 0x2f4858],
  legs: [0x2f4858, 0x5b7db1, 0x7a5a48, 0x3a3a48, 0xc9a77a, 0x4f8a5b],
  skin: [0xf6d2b4, 0xe8b48e, 0xc98e66, 0x9a6440, 0x6e4a32, 0xffe0c8],
  hair: [0x2a1d14, 0x5a3a20, 0xc98a3a, 0xf2d07a, 0x9a3a20, 0x3a3a3a, 0xeeeeee],
};

function loopLength(L) {
  return 2 * (L.x1 - L.x0 + (L.z1 - L.z0));
}

/** Position, direction and inward normal at distance s round a loop. */
function onLoop(L, s, out) {
  const w = L.x1 - L.x0;
  const h = L.z1 - L.z0;
  const total = 2 * (w + h);
  s = ((s % total) + total) % total;
  if (s < w) Object.assign(out, { x: L.x0 + s, z: L.z0, tx: 1, tz: 0, nx: 0, nz: 1 });
  else if (s < w + h) Object.assign(out, { x: L.x1, z: L.z0 + (s - w), tx: 0, tz: 1, nx: -1, nz: 0 });
  else if (s < 2 * w + h) Object.assign(out, { x: L.x1 - (s - w - h), z: L.z1, tx: -1, tz: 0, nx: 0, nz: -1 });
  else Object.assign(out, { x: L.x0, z: L.z1 - (s - 2 * w - h), tx: 0, tz: -1, nx: 1, nz: 0 });
  return out;
}

/** The loop distance of the point nearest (x, z). */
function nearestS(L, x, z) {
  const w = L.x1 - L.x0;
  const h = L.z1 - L.z0;
  const cx = Math.max(L.x0, Math.min(L.x1, x));
  const cz = Math.max(L.z0, Math.min(L.z1, z));
  const opts = [
    [Math.hypot(x - cx, z - L.z0), cx - L.x0],
    [Math.hypot(x - L.x1, z - cz), w + (cz - L.z0)],
    [Math.hypot(x - cx, z - L.z1), w + h + (L.x1 - cx)],
    [Math.hypot(x - L.x0, z - cz), 2 * w + h + (L.z1 - cz)],
  ];
  opts.sort((a, b) => a[0] - b[0]);
  return opts[0][1];
}

export function createPeople(city, count, seed = 11) {
  const rng = mulberry32(seed);
  const pick = (a) => a[Math.floor(rng() * a.length) % a.length];
  const loops = city.loops;
  const people = [];
  const tmp = {};
  for (let k = 0; k < count; k++) {
    // The beach loop is long: it gets a fair share of people.
    const L = k % 9 === 0 ? loops[loops.length - 1] : loops[Math.floor(rng() * (loops.length - 1))];
    const s = rng() * loopLength(L);
    onLoop(L, s, tmp);
    const child = rng() < 0.3;
    people.push({
      loop: L,
      s,
      dir: rng() < 0.5 ? 1 : -1,
      pace: (child ? 1.1 : 1.25) + rng() * 0.35,
      x: tmp.x,
      z: tmp.z,
      heading: 0,
      side: 0, // stepped aside off the loop, towards the middle of the block
      state: 'walk',
      t: rng() * 6,
      phase: rng() * 6,
      cool: 0, // seconds before they'll wave again
      watchS: 0,
      cross: null,
      // pose, read by the renderer
      walk: 0,
      arms: 0, // 0 down, 1 both up
      wave: 0, // 0..1 right arm waving
      hop: 0,
      look: null,
      // A bit bigger than life, like toy figures, so you can see them from up high.
      scale: child ? 0.9 : 1.2 + rng() * 0.18,
      shirt: pick(PEOPLE_COLORS.shirts),
      legs: pick(PEOPLE_COLORS.legs),
      skin: pick(PEOPLE_COLORS.skin),
      hair: pick(PEOPLE_COLORS.hair),
      hat: rng() < 0.18 ? pick([0xf2d03b, 0xe2504a, 0x3f8fd2, 0xffffff]) : null,
      crew: false,
    });
  }
  // The firefighters at the station: they stay put, and wave.
  for (const c of city.crew) {
    people.push({
      loop: null,
      x: c.x,
      z: c.z,
      homeX: c.x,
      homeZ: c.z,
      heading: Math.PI,
      side: 0,
      state: 'crew',
      t: 0,
      phase: rng() * 6,
      cool: 0,
      walk: 0,
      arms: 0,
      wave: 0,
      hop: 0,
      look: null,
      scale: 1.3,
      shirt: 0x2a2f3a,
      legs: 0x2a2f3a,
      skin: pick(PEOPLE_COLORS.skin),
      hair: 0x2a1d14,
      hat: 0xf2d03b,
      crew: true,
    });
  }
  return { list: people, rng, tmp: {} };
}

/**
 * ctx: { truck: {x, z, speed}, siren, horn (true on the frame it sounds),
 *        fire: the active call or null, cheer: {x, z} on the frame one ends,
 *        blocks: city.blocks (for crossing roads) }
 */
export function updatePeople(P, dt, ctx) {
  const { truck } = ctx;
  const tmp = P.tmp;
  const rng = P.rng;
  const fire = ctx.fire;
  for (const p of P.list) {
    p.t += dt;
    p.cool = Math.max(0, p.cool - dt);
    const dTruck = Math.hypot(p.x - truck.x, p.z - truck.z);

    // Things that happen to anyone.
    if (ctx.cheer && Math.hypot(p.x - ctx.cheer.x, p.z - ctx.cheer.z) < 55) {
      p.state = 'cheer';
      p.t = -rng() * 0.3;
      p.look = { x: ctx.cheer.x, z: ctx.cheer.z };
    } else if (ctx.horn && dTruck < 24 && p.state !== 'cheer' && p.state !== 'cross') {
      p.state = 'wave';
      p.t = 0;
      p.hopKick = 1;
    } else if (ctx.siren && dTruck < 26 && p.cool <= 0 && (p.state === 'walk' || p.state === 'wait' || p.state === 'crew')) {
      p.prev = p.state === 'crew' ? 'crew' : 'walk';
      p.state = 'wave';
      p.t = 0;
      p.cool = 9 + rng() * 4;
    }

    if (p.crew) updateCrew(p, dt, truck, dTruck);
    else updateWalker(p, dt, ctx, fire, tmp, rng, dTruck);

    // Hop aside if the fire engine gets close.
    if (!p.crew && p.state !== 'cross') {
      const close = dTruck < 4.6 && Math.abs(truck.speed) > 0.5;
      p.side = damp(p.side, close ? 2.4 : 0, close ? 8 : 0.8, dt);
    }

    // Pose.
    const sinT = Math.sin(p.t * 7 + p.phase);
    p.wave = damp(p.wave, p.state === 'wave' || (p.state === 'crew' && dTruck < 30) || p.state === 'point' ? 1 : 0, 8, dt);
    p.arms = damp(p.arms, p.state === 'cheer' ? 1 : 0, 10, dt);
    let hop = 0;
    if (p.state === 'cheer') hop = Math.abs(Math.sin(p.t * 7.5 + p.phase)) * 0.45;
    else if (p.state === 'giggle') hop = Math.abs(Math.sin(p.t * 10)) * 0.3;
    if (p.hopKick) {
      hop = Math.max(hop, p.hopKick * 0.4);
      p.hopKick = Math.max(0, p.hopKick - dt * 3);
    }
    p.hop = hop;
    p.waveSwing = sinT;
  }
}

function faceToward(p, x, z, dt, rate = 6) {
  const want = Math.atan2(x - p.x, -(z - p.z));
  p.heading += angleDelta(p.heading, want) * Math.min(1, rate * dt);
}

function updateCrew(p, dt, truck, dTruck) {
  p.x = p.homeX;
  p.z = p.homeZ;
  if (p.state === 'cheer') {
    if (p.t > 3) p.state = 'crew';
  } else if (p.state === 'wave') {
    if (p.t > 2.5) p.state = 'crew';
  }
  if (dTruck < 40) faceToward(p, truck.x, truck.z, dt, 3);
  p.walk = 0;
}

function updateWalker(p, dt, ctx, fire, tmp, rng, dTruck) {
  const L = p.loop;
  const total = L ? loopLength(L) : 0;

  // A fire nearby: go and watch.
  if (fire && (p.state === 'walk' || p.state === 'wait') && L) {
    const d = Math.hypot(p.x - fire.x, p.z - fire.z);
    if (d < 48) {
      const s = nearestS(L, fire.x, fire.z);
      onLoop(L, s, tmp);
      // Stand well back: never right underneath it.
      const back = Math.hypot(tmp.x - fire.x, tmp.z - fire.z);
      if (back > 5) {
        p.state = 'watch';
        p.watchS = s + (rng() - 0.5) * 14;
      }
    }
  }
  if (!fire && (p.state === 'watch' || p.state === 'point')) p.state = 'walk';

  let moving = false;
  switch (p.state) {
    case 'walk': {
      p.s += p.dir * p.pace * dt;
      moving = true;
      if (rng() < dt * 0.04) {
        p.state = 'wait';
        p.t = 0;
      }
      // At a corner, sometimes cross the road to the next block.
      if (L.block && ctx.blocks) {
        const corner = cornerAt(L, p.s);
        if (corner != null && rng() < 0.35 && p.lastCorner !== Math.round(p.s)) startCross(p, L, corner, ctx.blocks, rng);
        if (corner != null) p.lastCorner = Math.round(p.s);
      }
      break;
    }
    case 'wait':
      if (p.t > 2 + rng() * 2) {
        p.state = 'walk';
        if (rng() < 0.4) p.dir *= -1;
      }
      break;
    case 'wave':
      faceToward(p, ctx.truck.x, ctx.truck.z, dt);
      if (p.t > 2.6) p.state = 'walk';
      break;
    case 'watch': {
      const delta = (((p.watchS - p.s) % total) + total * 1.5) % total - total / 2;
      if (Math.abs(delta) > 0.4) {
        p.s += Math.sign(delta) * Math.min(Math.abs(delta), 2.4 * dt);
        moving = true;
      } else {
        p.state = 'point';
        p.t = 0;
      }
      break;
    }
    case 'point':
      faceToward(p, fire.x, fire.z, dt);
      break;
    case 'cheer':
      if (p.look) faceToward(p, p.look.x, p.look.z, dt);
      if (p.t > 3.6) {
        p.state = 'wave';
        p.t = 0.8;
      }
      break;
    case 'giggle':
      p.heading += dt * 9;
      if (p.t > 1.1) p.state = 'walk';
      break;
    case 'cross': {
      const c = p.cross;
      c.u += (p.pace * 1.15 * dt) / c.len;
      const u = Math.min(1, c.u);
      p.x = c.ax + (c.bx - c.ax) * u;
      p.z = c.az + (c.bz - c.az) * u;
      const want = Math.atan2(c.bx - c.ax, -(c.bz - c.az));
      p.heading += angleDelta(p.heading, want) * Math.min(1, 8 * dt);
      p.walk += dt * p.pace * 2.2;
      if (u >= 1) {
        p.loop = c.loop;
        p.s = c.s;
        p.state = 'walk';
        p.cross = null;
        p.lastCorner = Math.round(p.s);
      }
      return;
    }
  }
  if (!L) return;
  onLoop(L, p.s, tmp);
  p.x = tmp.x + tmp.nx * p.side;
  p.z = tmp.z + tmp.nz * p.side;
  if (moving) {
    const dirx = tmp.tx * Math.sign(p.state === 'walk' ? p.dir : 1);
    const dirz = tmp.tz * Math.sign(p.state === 'walk' ? p.dir : 1);
    const want = p.state === 'watch' ? Math.atan2(fire.x - p.x, -(fire.z - p.z)) : Math.atan2(dirx, -dirz);
    if (p.state === 'watch') {
      // Walking sideways along the pavement while watching: face the way you walk.
      const delta = (((p.watchS - p.s) % total) + total * 1.5) % total - total / 2;
      const sgn = Math.sign(delta) || 1;
      p.heading += angleDelta(p.heading, Math.atan2(tmp.tx * sgn, -tmp.tz * sgn)) * Math.min(1, 8 * dt);
    } else p.heading += angleDelta(p.heading, want) * Math.min(1, 8 * dt);
    p.walk += dt * p.pace * 2.2;
  }
}

/** If s is at a corner of the loop, which one (0 NW, 1 NE, 2 SE, 3 SW). */
function cornerAt(L, s) {
  const w = L.x1 - L.x0;
  const h = L.z1 - L.z0;
  const total = 2 * (w + h);
  const m = ((s % total) + total) % total;
  const corners = [0, w, w + h, 2 * w + h];
  for (let k = 0; k < 4; k++) if (Math.abs(m - corners[k]) < 0.05 || Math.abs(m - total) < 0.05) return Math.abs(m - total) < 0.05 ? 0 : k;
  return null;
}

function cornerPoint(L, k) {
  return [
    [L.x0, L.z0],
    [L.x1, L.z0],
    [L.x1, L.z1],
    [L.x0, L.z1],
  ][k];
}

function cornerS(L, k) {
  const w = L.x1 - L.x0;
  const h = L.z1 - L.z0;
  return [0, w, w + h, 2 * w + h][k];
}

function startCross(p, L, corner, blocks, rng) {
  const b = L.block;
  // Across the road from each corner: [dc, dr, the corner you arrive at].
  const across = {
    0: [
      [-1, 0, 1],
      [0, -1, 3],
    ],
    1: [
      [1, 0, 0],
      [0, -1, 2],
    ],
    2: [
      [1, 0, 3],
      [0, 1, 1],
    ],
    3: [
      [-1, 0, 2],
      [0, 1, 0],
    ],
  }[corner];
  const opts = across.map(([dc, dr, k]) => [blocks.find((o) => o.c === b.c + dc && o.r === b.r + dr), k]).filter(([o]) => o);
  if (!opts.length) return;
  const [to, k] = opts[Math.floor(rng() * opts.length) % opts.length];
  const toLoop = to.loop;
  if (!toLoop) return;
  const [ax, az] = cornerPoint(L, corner);
  const [bx, bz] = cornerPoint(toLoop, k);
  p.state = 'cross';
  p.cross = { ax, az, bx, bz, len: Math.hypot(bx - ax, bz - az), u: 0, loop: toLoop, s: cornerS(toLoop, k) };
}

/** A drop of water hit someone: they giggle (but not every drop). */
export function splashPerson(p) {
  if (p.crew || p.state === 'cross' || p.state === 'giggle' || p.state === 'cheer') return false;
  if (p.cool > 6) return false;
  p.state = 'giggle';
  p.t = 0;
  p.cool = 8;
  return true;
}
