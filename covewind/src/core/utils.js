/** Small shared helpers. Deliberately tiny — no framework, no ceremony. */

export const TAU = Math.PI * 2;

export const clamp = (v, min, max) => (v < min ? min : v > max ? max : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};

/**
 * Frame-rate independent easing towards a target. `rate` is roughly "how many
 * e-folds per second", so the same call feels identical at 30 and 120 fps.
 */
export const damp = (current, target, rate, dt) => lerp(current, target, 1 - Math.exp(-rate * dt));

/** Shortest signed angle from `a` to `b`. */
export const angleDelta = (a, b) => Math.atan2(Math.sin(b - a), Math.cos(b - a));

/** Deadzone + expo curve: gentle around centre, full authority at the edges. */
export function shapeAxis(v, deadzone = 0.06, expo = 0.35) {
  const s = Math.sign(v);
  const m = Math.abs(v);
  if (m <= deadzone) return 0;
  const n = (m - deadzone) / (1 - deadzone);
  return s * lerp(n, n * n * n, expo);
}

/** Deterministic PRNG so the island is the same island on every visit. */
export function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** The world's shared random stream. */
export const random = mulberry32(0xc0feb1d);
export const rand = (a = 0, b = 1) => a + random() * (b - a);
export const randInt = (a, b) => Math.floor(rand(a, b + 1));
export const pick = (list) => list[Math.floor(random() * list.length) % list.length];
export const chance = (p) => random() < p;
