/**
 * Everything else that lives in (and on) the sea, as pure data:
 *
 *  - schools of bright fish that swirl round their reef and scatter when
 *    you swim through them;
 *  - turtles paddling slow loops, stingrays gliding over the sand;
 *  - dolphins in pods near the surface, leaping now and then (and one will
 *    carry you, if you ask);
 *  - two great whales that rise to the surface to blow;
 *  - jellyfish, seahorses in the palace garden, crabs on the sand;
 *  - and up top, sailing ships going round and seagulls wheeling over the
 *    islands.
 *
 * Most of them follow a loop: a circle round a centre, at a depth, with a
 * bit of wander. The renderer reads x, y, z, yaw and pitch.
 */
import { mulberry32, angleDelta } from '../core/utils.js';
import { heightAt, PALACE, ISLANDS, GROTTOS } from './ocean.js';

const TAU = Math.PI * 2;

export const FISH_COLORS = [0xffd23a, 0x3fa8ff, 0xff8a2a, 0xb07aff, 0xff6aa8, 0xd8e8f0, 0x5af0b0, 0xff4a4a, 0x7ad0ff, 0xfff0a0];

/** A loop: where something should be at time t. */
function loopAt(L, t, out) {
  const a = L.phase + L.w * t * L.dir;
  const wob = 1 + 0.12 * Math.sin(a * 3 + L.phase * 7);
  out.x = L.cx + Math.cos(a) * L.r * wob;
  out.z = L.cz + Math.sin(a) * L.r * wob;
  out.y = L.y + Math.sin(a * 2 + L.phase) * (L.bob ?? 1);
  return out;
}

/** Keep something between the seabed (plus a gap) and the surface. */
function inWater(x, y, z, gap, top = -0.8) {
  return Math.min(top, Math.max(y, heightAt(x, z) + gap));
}

export function createCreatures(ocean, { fish = 260, seed = 9 } = {}) {
  const rng = mulberry32(seed);
  const rand = (a = 0, b = 1) => a + rng() * (b - a);
  const loop = (cx, cz, r, y, speed, bob = 1) => ({ cx, cz, r, y, w: speed / r, dir: rng() < 0.5 ? 1 : -1, phase: rand(0, TAU), bob });
  const agent = (kind, L, extra = {}) => ({ kind, loop: L, x: L.cx, y: L.y, z: L.cz, yaw: 0, pitch: 0, roll: 0, speed: 0, anim: rand(0, TAU), ...extra });

  const C = { t: 0, events: [] };

  /* --------------------------------------------------------- fish --- */
  const schools = [];
  const homes = [
    { x: 0, z: 0, r: 50 },
    { x: 30, z: 40, r: 25 },
    { x: -40, z: -30, r: 30 },
    ...ISLANDS.map((i) => ({ x: i.x, z: i.z, r: i.r * 1.9 })),
    { x: 95, z: -60, r: 25 },
    { x: -150, z: -25, r: 25 },
    { x: 25, z: 125, r: 25 },
    { x: -60, z: 100, r: 30 },
    { x: 150, z: 95, r: 25 },
  ];
  homes.forEach((h, k) => {
    const y = Math.max(heightAt(h.x, h.z) + 4, -14);
    schools.push({ loop: loop(h.x, h.z, h.r, Math.min(-3, y), 2.2, 2), color: FISH_COLORS[k % FISH_COLORS.length], size: k % 3 === 0 ? 1.3 : 1, x: 0, y: 0, z: 0 });
  });
  const F = {
    n: fish,
    px: new Float32Array(fish),
    py: new Float32Array(fish),
    pz: new Float32Array(fish),
    vx: new Float32Array(fish),
    vy: new Float32Array(fish),
    vz: new Float32Array(fish),
    yaw: new Float32Array(fish),
    school: new Uint16Array(fish),
    orbit: new Float32Array(fish), // how far from the school's middle
    phase: new Float32Array(fish),
    height: new Float32Array(fish),
    size: new Float32Array(fish),
  };
  for (let k = 0; k < fish; k++) {
    const s = k % schools.length;
    F.school[k] = s;
    F.orbit[k] = rand(1, 5);
    F.phase[k] = rand(0, TAU);
    F.height[k] = rand(-1.5, 1.5);
    F.size[k] = schools[s].size * rand(0.8, 1.2);
    // Start out with the school, wherever its loop begins.
    loopAt(schools[s].loop, 0, tmp);
    F.px[k] = tmp.x + rand(-3, 3);
    F.py[k] = schools[s].loop.y;
    F.pz[k] = tmp.z + rand(-3, 3);
  }
  C.schools = schools;
  C.fish = F;

  /* ------------------------------------------- turtles, rays, jellies --- */
  C.turtles = [];
  for (let k = 0; k < 7; k++) {
    const a = rand(0, TAU);
    const d = rand(40, 200);
    C.turtles.push(agent('turtle', loop(Math.cos(a) * d, Math.sin(a) * d, rand(25, 55), rand(-14, -6), 1.6, 2), { size: rand(0.9, 1.3) }));
  }
  C.rays = [];
  for (let k = 0; k < 6; k++) {
    const a = rand(0, TAU);
    const d = rand(35, 220);
    C.rays.push(agent('ray', loop(Math.cos(a) * d, Math.sin(a) * d, rand(18, 40), 0, 2.2, 0), { size: rand(1, 1.6) }));
  }
  C.jellies = [];
  for (let k = 0; k < 22; k++) {
    const g = GROTTOS[k % GROTTOS.length];
    const near = k < 12;
    const a = rand(0, TAU);
    const d = near ? rand(14, 30) : rand(60, 240);
    const cx = near ? g.x + Math.cos(a) * d : Math.cos(a) * d;
    const cz = near ? g.z + Math.sin(a) * d : Math.sin(a) * d;
    C.jellies.push({ x: cx, y: rand(-14, -5), z: cz, cx, cz, anim: rand(0, TAU), color: [0xffa8e0, 0xc8a8ff, 0xa8e8ff, 0xffe0a8][k % 4], size: rand(0.6, 1.1) });
  }
  C.seahorses = [];
  for (let k = 0; k < 10; k++) {
    const a = rand(0, TAU);
    const d = rand(17, 40);
    C.seahorses.push({ cx: PALACE.x + Math.cos(a) * d, cz: PALACE.z + Math.sin(a) * d, x: 0, y: 0, z: 0, yaw: rand(0, TAU), anim: rand(0, TAU), color: [0xffb05a, 0xff7ab0, 0xffe05a, 0x7ad0ff][k % 4] });
  }
  C.crabs = [];
  for (let k = 0; k < 14; k++) {
    const isl = ISLANDS[k % ISLANDS.length];
    const a = rand(0, TAU);
    const home = k < 8 ? { x: isl.x + Math.cos(a) * isl.r * 1.2, z: isl.z + Math.sin(a) * isl.r * 1.2 } : { x: PALACE.x + Math.cos(a) * rand(20, 50), z: PALACE.z + Math.sin(a) * rand(20, 50) };
    C.crabs.push({ cx: home.x, cz: home.z, x: home.x, y: 0, z: home.z, yaw: rand(0, TAU), anim: rand(0, TAU), color: k % 2 ? 0xff5a3a : 0xff8a3a });
  }

  /* --------------------------------------------------------- dolphins --- */
  C.dolphins = [];
  for (const [cx, cz, r] of [
    [20, -20, 85],
    [-60, 60, 120],
    [60, 90, 70],
  ]) {
    const pod = loop(cx, cz, r, -2.2, 7, 0.4);
    for (let k = 0; k < 3; k++) {
      // Each dolphin swims a little apart from the others in its pod.
      const L = { ...pod, r: pod.r + (k - 1) * 3, phase: pod.phase - k * 0.06, y: pod.y - k * 0.5 };
      C.dolphins.push(agent('dolphin', L, { leapIn: rand(3, 12), leap: -1, ridden: false, offset: { x: 0, y: 0, z: 0, k: 0 } }));
    }
  }

  /* ---------------------------------------------------------- whales --- */
  C.whales = [
    agent('whale', loop(0, 0, 105, -14, 3, 1.5), { breathIn: 25, breath: -1, size: 1 }),
    agent('whale', loop(-20, 10, 150, -16, 2.6, 1.5), { breathIn: 50, breath: -1, size: 0.85 }),
  ];

  /* ------------------------------------------------ ships and gulls --- */
  C.ships = [];
  const shipLoops = [
    [0, 0, 112],
    [0, 0, 285],
    [40, -30, 172],
    [-20, 40, 150],
    [10, 0, 235],
    [-60, -40, 95],
    [60, 40, 120],
    [30, 20, 70],
    [-40, 0, 60],
    [0, 0, 300],
  ];
  const deep = (cx, cz, r) => {
    // (Loops wander 12% in and out, so test both.)
    for (let a = 0; a < TAU; a += 0.04) for (const k of [0.86, 1, 1.14]) if (heightAt(cx + Math.cos(a) * r * k, cz + Math.sin(a) * r * k) > -5) return false;
    return true;
  };
  for (const [cx, cz, r] of shipLoops) {
    if (C.ships.length >= 3 || !deep(cx, cz, r)) continue;
    C.ships.push(agent('ship', loop(cx, cz, r, 0, 3.2, 0), { kind2: C.ships.length, color: [0x8a4a2a, 0x3a5a8a, 0x8a2a3a][C.ships.length] }));
  }
  C.gulls = [];
  for (let k = 0; k < 14; k++) {
    const isl = ISLANDS[k % ISLANDS.length];
    const over = k < 10 ? isl : { x: rand(-150, 150), z: rand(-150, 150) };
    C.gulls.push(agent('gull', loop(over.x, over.z, rand(8, 26), rand(8, 16), 7, 1.5), {}));
  }

  return C;
}

const tmp = { x: 0, y: 0, z: 0 };
const ahead = { x: 0, y: 0, z: 0 };

/** Follow a loop: place at time t and face along it. */
function follow(a, t, gap, top) {
  loopAt(a.loop, t, tmp);
  loopAt(a.loop, t + 0.4, ahead);
  a.x = tmp.x;
  a.z = tmp.z;
  a.y = inWater(tmp.x, tmp.y, tmp.z, gap, top);
  const ay = inWater(ahead.x, ahead.y, ahead.z, gap, top);
  const dx = ahead.x - tmp.x;
  const dz = ahead.z - tmp.z;
  const h = Math.hypot(dx, dz);
  a.yaw = Math.atan2(dx, -dz);
  a.pitch = Math.atan2(ay - a.y, h || 1);
  a.speed = h / 0.4;
}

/**
 * Advance everything by dt. ctx: { mermaid: { x, y, z }, riding: the
 * dolphin being ridden or null, lure: where she's singing, or null }.
 * Events: splash, spout.
 */
export function updateCreatures(C, dt, ctx) {
  C.t += dt;
  const t = C.t;
  C.events.length = 0;
  const m = ctx.mermaid;

  /* -- fish: swirl round the school's middle; scatter from the mermaid -- */
  for (const s of C.schools) {
    loopAt(s.loop, t, tmp);
    s.x = tmp.x;
    s.z = tmp.z;
    s.y = inWater(tmp.x, tmp.y, tmp.z, 3, -2);
  }
  const F = C.fish;
  for (let k = 0; k < F.n; k++) {
    const s = C.schools[F.school[k]];
    const a = F.phase[k] + t * (0.6 + F.orbit[k] * 0.05) * (k % 2 ? 1 : -1) * 0.8;
    let tx = s.x + Math.cos(a) * F.orbit[k] * 1.6;
    let ty = s.y + F.height[k] + Math.sin(a * 2) * 0.4;
    let tz = s.z + Math.sin(a) * F.orbit[k] * 1.6;
    // When she sings, nearby schools come and swirl round her instead.
    if (ctx.lure && Math.hypot(s.x - ctx.lure.x, s.z - ctx.lure.z) < 25) {
      tx = ctx.lure.x + Math.cos(a) * (2.2 + F.orbit[k] * 0.5);
      ty = ctx.lure.y + F.height[k] * 0.6 + Math.sin(a * 2) * 0.4;
      tz = ctx.lure.z + Math.sin(a) * (2.2 + F.orbit[k] * 0.5);
    }
    // Scatter from the mermaid, then drift back.
    const dx = F.px[k] - m.x;
    const dy = F.py[k] - m.y;
    const dz = F.pz[k] - m.z;
    const d = Math.hypot(dx, dy, dz);
    if (d < 5 && d > 1e-3 && !ctx.lure) {
      const push = (5 - d) * 2.2;
      tx += (dx / d) * push;
      ty += (dy / d) * push * 0.5;
      tz += (dz / d) * push;
    }
    const k1 = Math.min(1, dt * 2.5);
    F.vx[k] += ((tx - F.px[k]) * 1.5 - F.vx[k]) * k1;
    F.vy[k] += ((ty - F.py[k]) * 1.5 - F.vy[k]) * k1;
    F.vz[k] += ((tz - F.pz[k]) * 1.5 - F.vz[k]) * k1;
    // (Never into the shallows: they just don't go that way.)
    const nx = F.px[k] + F.vx[k] * dt;
    const nz = F.pz[k] + F.vz[k] * dt;
    if (heightAt(nx, nz) < -2.2) {
      F.px[k] = nx;
      F.pz[k] = nz;
    } else {
      F.vx[k] *= -0.5;
      F.vz[k] *= -0.5;
    }
    F.py[k] = inWater(F.px[k], F.py[k] + F.vy[k] * dt, F.pz[k], 0.8, -0.8);
    if (Math.hypot(F.vx[k], F.vz[k]) > 0.15) {
      const want = Math.atan2(F.vx[k], -F.vz[k]);
      F.yaw[k] += angleDelta(F.yaw[k], want) * Math.min(1, dt * 8);
    }
  }

  /* -- turtles, rays -- */
  for (const a of C.turtles) {
    follow(a, t, 2.5, -1.5);
    a.anim += dt * 1.6;
  }
  for (const a of C.rays) {
    loopAt(a.loop, t, tmp);
    a.loop.y = heightAt(tmp.x, tmp.z) + 1.4;
    follow(a, t, 1.2, -1.5);
    a.anim += dt * 2.2;
  }
  for (const j of C.jellies) {
    j.anim += dt;
    j.x = j.cx + Math.sin(j.anim * 0.13) * 4;
    j.z = j.cz + Math.cos(j.anim * 0.11) * 4;
    j.y = inWater(j.x, j.y + Math.sin(j.anim * 1.7) * dt * 0.6, j.z, 2, -2);
  }
  for (const h of C.seahorses) {
    h.anim += dt;
    h.x = h.cx + Math.sin(h.anim * 0.2) * 1.5;
    h.z = h.cz + Math.cos(h.anim * 0.17) * 1.5;
    h.y = heightAt(h.x, h.z) + 2 + Math.sin(h.anim * 1.3) * 0.4;
    h.yaw += dt * 0.15;
  }
  for (const c of C.crabs) {
    c.anim += dt;
    // Scuttle sideways, back and forth.
    const u = Math.sin(c.anim * 0.5) * 3;
    c.x = c.cx + Math.cos(c.yaw) * u;
    c.z = c.cz + Math.sin(c.yaw) * u;
    c.y = heightAt(c.x, c.z);
  }

  /* -- dolphins: leaping now and then; one may be carrying you -- */
  for (const d of C.dolphins) {
    d.anim += dt * 6;
    if (d === ctx.riding) {
      d.ridden = true;
      continue;
    }
    if (d.ridden) {
      // Just let go: glide back to the pod from wherever you left it.
      d.ridden = false;
      loopAt(d.loop, t, tmp);
      d.offset = { x: d.x - tmp.x, y: d.y - tmp.y, z: d.z - tmp.z, k: 1 };
    }
    const px = d.x;
    const pz = d.z;
    follow(d, t, 2, -1.2);
    if (d.offset.k > 0) {
      d.offset.k = Math.max(0, d.offset.k - dt / 5);
      const e = d.offset.k * d.offset.k * (3 - 2 * d.offset.k);
      d.x += d.offset.x * e;
      d.y += d.offset.y * e;
      d.z += d.offset.z * e;
      if (Math.hypot(d.x - px, d.z - pz) > 1e-3) d.yaw = Math.atan2(d.x - px, -(d.z - pz));
    }
    // Leap: up out of the water in an arc, and back in with a splash.
    // (Sing to them and the ones nearby jump for joy.)
    if (ctx.lure && d.leap < 0 && d.leapIn > 0.5 && Math.hypot(d.x - ctx.lure.x, d.z - ctx.lure.z) < 35) d.leapIn = 0.2 + ((d.anim * 13) % 1.5);
    d.leapIn -= dt;
    if (d.leap < 0 && d.leapIn <= 0 && d.offset.k === 0) {
      d.leap = 0;
      C.events.push({ type: 'splash', x: d.x, y: 0, z: d.z, size: 0.8 });
    }
    if (d.leap >= 0) {
      d.leap += dt / 1.3;
      const u = Math.min(1, d.leap);
      d.y = -0.8 + Math.sin(u * Math.PI) * 3.2;
      d.pitch = Math.cos(u * Math.PI) * 0.9;
      if (d.leap >= 1) {
        d.leap = -1;
        d.leapIn = 5 + ((d.anim * 997) % 9);
        C.events.push({ type: 'splash', x: d.x, y: 0, z: d.z, size: 1 });
      }
    }
  }

  /* -- whales: deep, slow, and up to the surface to blow -- */
  for (const w of C.whales) {
    follow(w, t, 6, -3);
    w.anim += dt * 0.8;
    w.breathIn -= dt;
    if (w.breath < 0 && w.breathIn <= 0) w.breath = 0;
    if (w.breath >= 0) {
      w.breath += dt / 14;
      const u = Math.min(1, w.breath);
      const rise = Math.sin(u * Math.PI);
      w.y = w.y + (-2.2 - w.y) * rise;
      w.pitch += Math.cos(u * Math.PI) * 0.15;
      if (!w.blew && u > 0.5) {
        w.blew = true;
        C.events.push({ type: 'spout', x: w.x + Math.sin(w.yaw) * 3, y: 0, z: w.z - Math.cos(w.yaw) * 3 });
      }
      if (w.breath >= 1) {
        w.breath = -1;
        w.blew = false;
        w.breathIn = 40 + ((w.anim * 31) % 20);
      }
    }
  }

  /* -- ships and gulls -- */
  for (const s of C.ships) {
    follow(s, t, -100, 0);
    s.y = 0;
    s.pitch = Math.sin(t * 0.8 + s.loop.phase) * 0.03;
    s.roll = Math.sin(t * 0.6 + s.loop.phase * 2) * 0.05;
  }
  for (const g of C.gulls) {
    follow(g, t, -100, 40);
    g.y = g.loop.y + Math.sin(t * 0.7 + g.loop.phase) * 1.5;
    g.roll = 0.35 * g.loop.dir;
    g.anim += dt * 9;
  }
}

/** Every creature with a position, for checks and for "who's near?". */
export function everyCreature(C) {
  return [...C.turtles, ...C.rays, ...C.dolphins, ...C.whales];
}
