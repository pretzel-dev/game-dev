/**
 * Headless checks: build the ocean in Node and swim in it.
 *
 *  1. The ocean: the mermaid starts in clear water; every treasure and seat
 *     is in the open, not inside a rock or a wall.
 *  2. An autopilot swims from the palace to all twelve treasures in turn
 *     (into the grottos through their doors) and finds every one.
 *  3. It visits every rock and the throne, sits, and gets up again.
 *  4. It rides a dolphin, jumps out of the water, and lets go.
 *  5. Random swimming everywhere: never inside anything, never above the
 *     water (unless jumping), never under the sand, never stuck.
 *  6. The creatures run for three minutes: fish stay in the water, ships
 *     stay off the land, whales blow and dolphins leap.
 *
 * Run with `npm run check`. A failure blocks the deploy.
 */
import { buildOcean, heightAt, WORLD_R } from '../src/world/ocean.js';
import { insideSomething, pushSphere } from '../src/world/collide.js';
import { createMermaid, updateMermaid, actionFor, act, letGo, findTreasure, placeMermaid, SWIM } from '../src/world/swim.js';
import { createCreatures, updateCreatures } from '../src/world/creatures.js';
import { angleDelta, mulberry32 } from '../src/core/utils.js';

let failures = 0;
const ok = (cond, msg) => {
  if (cond) console.log(`  ok  ${msg}`);
  else {
    failures++;
    console.log(`  FAIL ${msg}`);
  }
};
const t0 = Date.now();
const DT = 1 / 60;
const ocean = buildOcean();
const creatures = createCreatures(ocean, { fish: 120 });

/* ------------------------------------------------------- 1. the ocean --- */
console.log('ocean');
{
  ok(!insideSomething(ocean, ocean.spawn, SWIM.radius), 'the mermaid starts in clear water');
  const buried = ocean.treasures.filter((t) => insideSomething(ocean, { x: t.x, y: t.y + 0.8, z: t.z }, 0.3));
  ok(buried.length === 0, `all ${ocean.treasures.length} treasures are out in the open${buried.length ? `: ${buried.map((t) => t.id)}` : ''}`);
  const seats = ocean.seats.filter((s) => insideSomething(ocean, { x: s.x, y: s.y + 0.6, z: s.z }, 0.3));
  ok(seats.length === 0, `all ${ocean.seats.length} seats are clear`);
  ok(ocean.seats.filter((s) => s.kind === 'rock').every((s) => s.y > 0), 'the rocks to sit on stick up out of the water');
}

/* ---------------------------------------------- shared: the autopilot --- */
/** Steer towards a point: turn to face it, rise or dive to its depth. */
function steer(m, x, y, z) {
  const want = Math.atan2(x - m.x, -(z - m.z));
  const diff = angleDelta(m.yaw, want);
  const flat = Math.hypot(x - m.x, z - m.z);
  return {
    turn: Math.max(-1, Math.min(1, diff * 2)),
    forward: Math.abs(diff) < 1.2 ? Math.min(1, flat / 4 + 0.2) : 0.15,
    rise: Math.max(-1, Math.min(1, (y - m.y) / 2)),
  };
}

/** Swim through waypoints; returns seconds taken, or null if it gave up. */
function swimTo(m, points, near = 1.5, limit = 150) {
  let t = 0;
  let k = 0;
  let mark = { x: m.x, y: m.y, z: m.z };
  let markT = 0;
  let detour = 0;
  while (t < limit) {
    t += DT;
    const p = points[k];
    let input = steer(m, p.x, p.y, p.z);
    // Not getting anywhere? Go up and over.
    if (detour > 0) {
      detour -= DT;
      input = { turn: 0.3, forward: 0.6, rise: 1 };
    }
    updateMermaid(m, input, ocean, DT);
    if (Math.hypot(p.x - m.x, p.y - m.y, p.z - m.z) < near) {
      if (++k >= points.length) return t;
    }
    if (t - markT > 3) {
      if (Math.hypot(m.x - mark.x, m.y - mark.y, m.z - mark.z) < 1.5) detour = 1.5;
      mark = { x: m.x, y: m.y, z: m.z };
      markT = t;
    }
  }
  return null;
}

/* ----------------------------------------------- 2. all the treasure --- */
console.log('treasure');
{
  const m = createMermaid(ocean.spawn);
  const found = new Set();
  let worst = 0;
  for (const t of ocean.treasures) {
    // Back out of a grotto the way you came in.
    const out = m.lastApproach ? [...m.lastApproach].reverse() : [];
    // Going past the palace? Over the top of it (not in through a door by mistake).
    const from = out.length ? out[out.length - 1] : m;
    const ax = from.x;
    const az = from.z;
    const bx = (t.approach || [t])[0].x;
    const bz = (t.approach || [t])[0].z;
    const u = Math.max(0, Math.min(1, -(ax * (bx - ax) + az * (bz - az)) / ((bx - ax) ** 2 + (bz - az) ** 2 || 1)));
    const over = Math.hypot(ax + (bx - ax) * u, az + (bz - az) * u) < 32 ? [{ x: 0, y: -3, z: 0 }] : [];
    const pts = [...out, ...over, ...(t.approach || []), { x: t.x, y: t.y + 0.9, z: t.z }];
    m.lastApproach = t.approach;
    let took = null;
    let time = 0;
    const s = swimTo(m, pts, 1.6);
    if (s != null) {
      time += s;
      for (let k = 0; k < 120 && !took; k++) {
        updateMermaid(m, {}, ocean, DT);
        const f = findTreasure(m, ocean, found);
        if (f) {
          found.add(f.id);
          took = f;
        }
      }
    }
    if (!took) console.log(`    could not reach ${t.id} at ${t.place} (mermaid at ${m.x.toFixed(1)}, ${m.y.toFixed(1)}, ${m.z.toFixed(1)})`);
    worst = Math.max(worst, time);
  }
  ok(found.size === ocean.treasures.length, `found ${found.size} of ${ocean.treasures.length} treasures`);
  ok(worst < 150, `the longest swim between two took ${worst.toFixed(0)}s`);
}

/* ------------------------------------------------- 3. sitting down --- */
console.log('sitting');
{
  const m = createMermaid(ocean.spawn);
  let sat = 0;
  for (const s of ocean.seats) {
    placeMermaid(m, s.x + Math.sin(s.yaw) * 4, s.kind === 'rock' ? -1.5 : s.y + 1, s.z - Math.cos(s.yaw) * 4, s.yaw + Math.PI);
    pushSphere(ocean, m, SWIM.radius);
    swimTo(m, [{ x: s.x, y: s.y, z: s.z }], 2.5, 30);
    const a = actionFor(m, ocean, creatures);
    if (a && (a.kind === 'sit' || a.kind === 'throne') && a.target === s) {
      act(m, a);
      for (let k = 0; k < 60; k++) updateMermaid(m, {}, ocean, DT);
      if (Math.hypot(m.x - s.x, m.y - s.y, m.z - s.z) < 0.3) sat++;
      updateMermaid(m, { forward: 1 }, ocean, DT);
    } else console.log(`    no "sit" at ${s.name}`);
  }
  ok(sat === ocean.seats.length, `sat on all ${sat} rocks and thrones`);
  ok(m.mode === 'swim', 'and swam off again');
}

/* -------------------------------------------- 4. riding a dolphin --- */
console.log('dolphins');
{
  const m = createMermaid(ocean.spawn);
  const d = creatures.dolphins[0];
  for (let k = 0; k < 600; k++) updateCreatures(creatures, DT, { mermaid: m, riding: null });
  while (d.leap >= 0) updateCreatures(creatures, DT, { mermaid: m, riding: null });
  placeMermaid(m, d.x, d.y - 0.5, d.z + 1);
  const a = actionFor(m, ocean, creatures);
  ok(a && a.kind === 'ride', 'swim up to a dolphin and "Ride" appears');
  act(m, a);
  let leapt = false;
  let splashed = false;
  let maxY = -99;
  for (let k = 0; k < 60 * 20; k++) {
    if (k === 300) act(m, actionFor(m, ocean, creatures));
    updateMermaid(m, { forward: 1, turn: 0.2 }, ocean, DT);
    updateCreatures(creatures, DT, { mermaid: m, riding: m.ride });
    for (const e of m.events) {
      if (e.type === 'leap') leapt = true;
      if (e.type === 'splash') splashed = true;
    }
    m.events.length = 0;
    maxY = Math.max(maxY, d.y);
  }
  ok(leapt && splashed && maxY > 1, `the dolphin jumped right out of the water (up to ${maxY.toFixed(1)} m) and splashed back in`);
  ok(letGo(m) && m.mode === 'swim', 'let go and swim on');
  for (let k = 0; k < 60 * 8; k++) updateCreatures(creatures, DT, { mermaid: m, riding: null });
  ok(d.offset.k === 0, 'the dolphin swam back to its friends');
}

/* --------------------------------------------- 5. swimming anywhere --- */
console.log('swimming everywhere');
{
  const rng = mulberry32(7);
  const m = createMermaid(ocean.spawn);
  let inside = 0;
  let above = 0;
  let below = 0;
  let outside = 0;
  let pinned = 0;
  let stretches = 0;
  let input = {};
  let since = 0;
  let mark = { x: m.x, y: m.y, z: m.z };
  for (let k = 0; k < 60 * 60 * 6; k++) {
    since += DT;
    if (since > 2.5) {
      if (input.forward > 0.5 && Math.hypot(m.x - mark.x, m.y - mark.y, m.z - mark.z) < 1) {
        pinned++;
        if (process.env.VERBOSE) console.log('    pinned at', m.x.toFixed(1), m.y.toFixed(1), m.z.toFixed(1));
      }
      stretches++;
      input = { forward: rng() < 0.1 ? -1 : 0.5 + rng() * 0.5, turn: rng() < 0.5 ? 0 : (rng() - 0.5) * 2, rise: rng() < 0.4 ? 0 : (rng() - 0.5) * 2, twirl: rng() < 0.1 };
      since = 0;
      mark = { x: m.x, y: m.y, z: m.z };
      if (rng() < 0.05) {
        // A long swim somewhere new.
        const a = rng() * Math.PI * 2;
        const r = rng() * 260;
        const x = Math.cos(a) * r;
        const z = Math.sin(a) * r;
        placeMermaid(m, x, Math.min(-1, heightAt(x, z) + 3), z);
        pushSphere(ocean, m, SWIM.radius);
        mark = { x: m.x, y: m.y, z: m.z };
      }
    }
    updateMermaid(m, input, ocean, DT);
    input.twirl = false;
    if (insideSomething(ocean, m, 0.2)) inside++;
    if (m.y > SWIM.floatY + 0.01) above++;
    if (m.y < heightAt(m.x, m.z) + 0.3) below++;
    if (Math.hypot(m.x, m.z) > WORLD_R + 0.5) outside++;
  }
  ok(inside === 0, `never inside a rock, wall or wreck (${inside})`);
  ok(above === 0 && below === 0, 'never out of the water, never under the sand');
  ok(outside === 0, 'never past the edge of the ocean');
  ok(pinned <= 4, `hardly ever stuck (${pinned} of ${stretches} stretches)`);
}

/* ------------------------------------------------ 6. the creatures --- */
console.log('creatures');
{
  const C = createCreatures(ocean, { fish: 260, seed: 3 });
  const m = createMermaid(ocean.spawn);
  let wet = 0;
  let nan = 0;
  let landShip = 0;
  let spouts = 0;
  let splashes = 0;
  for (let k = 0; k < 60 * 180; k++) {
    m.x = Math.cos(k * DT * 0.1) * 40;
    m.z = Math.sin(k * DT * 0.1) * 40;
    updateCreatures(C, DT, { mermaid: m, riding: null });
    for (const e of C.events) {
      if (e.type === 'spout') spouts++;
      if (e.type === 'splash') splashes++;
    }
    if (k % 30) continue;
    const F = C.fish;
    for (let i = 0; i < F.n; i++) {
      if (!Number.isFinite(F.px[i] + F.py[i] + F.pz[i])) nan++;
      else if (F.py[i] > -0.5 || F.py[i] < heightAt(F.px[i], F.pz[i]) + 0.3) wet++;
    }
    for (const a of [...C.turtles, ...C.rays, ...C.whales, ...C.dolphins]) if (!Number.isFinite(a.x + a.y + a.z)) nan++;
    for (const s of C.ships) if (heightAt(s.x, s.z) > -4) landShip++;
  }
  ok(nan === 0, 'nothing vanished');
  ok(wet === 0, `the fish stayed in the water (${wet})`);
  ok(C.ships.length === 3 && landShip === 0, `${C.ships.length} ships sailed, never over land`);
  ok(spouts >= 2 && splashes > 10, `whales blew (${spouts}) and dolphins leapt (${splashes} splashes)`);
}

console.log(`\n${failures ? `${failures} FAILED` : 'all good'} (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
process.exit(failures ? 1 : 0);
