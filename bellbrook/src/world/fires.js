/**
 * The calls: one at a time, somewhere not too far away, a small cartoon
 * fire starts (or a kitten gets stuck up a tree). Spray it and it shrinks
 * and goes out; it never spreads and never grows back. Then a short
 * breather, and the next call.
 */
import { mulberry32 } from '../core/utils.js';

export const CALL = {
  firstDelay: 5, // seconds after you set off
  breather: [7, 11], // between one call and the next
  near: [55, 190], // how far away a call can be
  firstNear: [45, 120],
  catEvery: 4, // every so often it's a kitten instead
  water: 0.0065, // how much one drop puts out (divided by the fire's size)
  rescueRange: 15, // ladder reaches a kitten from this close
  rescueTime: 1.0,
};

export function createFires(city, seed = 7) {
  return {
    city,
    rng: mulberry32(seed),
    active: null,
    timer: CALL.firstDelay,
    calls: 0,
    recent: [],
    events: [],
  };
}

function choose(f, x, z) {
  const [lo, hi] = f.calls === 0 ? CALL.firstNear : CALL.near;
  const wantCat = f.calls > 0 && f.calls % CALL.catEvery === CALL.catEvery - 1;
  const lastKinds = f.recent.slice(-2).map((id) => f.city.spots[id].kind);
  let pool = f.city.spots.filter((s) => {
    if ((s.kind === 'cat') !== wantCat) return false;
    if (f.recent.includes(s.id)) return false;
    const d = Math.hypot(s.x - x, s.z - z);
    return d >= lo && d <= hi;
  });
  // A bit of variety: not the same kind of fire three times running.
  const varied = pool.filter((s) => !lastKinds.includes(s.kind) || s.kind === 'window');
  if (varied.length) pool = varied;
  if (!pool.length) pool = f.city.spots.filter((s) => (s.kind === 'cat') === wantCat && !f.recent.includes(s.id));
  return pool[Math.floor(f.rng() * pool.length) % pool.length];
}

function start(f, x, z) {
  const s = choose(f, x, z);
  f.calls++;
  f.recent.push(s.id);
  if (f.recent.length > 8) f.recent.shift();
  f.active = {
    spot: s,
    kind: s.kind,
    x: s.x,
    y: s.y,
    z: s.z,
    size: s.size,
    r: 1.3 + s.size * 0.9, // how close a drop has to come to count
    hp: 1,
    age: 0,
    rescue: 0,
    done: false,
  };
  f.events.push({ type: 'start', fire: f.active });
}

/**
 * Advance the calls. `ctx`: { x, z (the truck), speed, ladderUp }.
 * Events: start, out, rescued.
 */
export function updateFires(f, dt, ctx) {
  if (!f.active) {
    f.timer -= dt;
    if (f.timer <= 0) start(f, ctx.x, ctx.z);
    return;
  }
  const a = f.active;
  a.age += dt;
  if (a.kind === 'cat') {
    const near = Math.hypot(ctx.x - a.x, ctx.z - a.z) < CALL.rescueRange;
    if (near && ctx.ladderUp) a.rescue += dt;
    else a.rescue = Math.max(0, a.rescue - dt * 0.5);
    if (a.rescue >= CALL.rescueTime) finish(f, 'rescued');
  }
}

/** A drop of water landed in the fire. */
export function douse(f, amount = 1) {
  const a = f.active;
  if (!a || a.kind === 'cat' || a.done) return;
  a.hp -= (CALL.water * amount) / a.size;
  if (a.hp <= 0) {
    a.hp = 0;
    finish(f, 'out');
  }
}

function finish(f, type) {
  const a = f.active;
  a.done = true;
  f.events.push({ type, fire: a });
  f.active = null;
  const [lo, hi] = CALL.breather;
  f.timer = lo + f.rng() * (hi - lo);
}
