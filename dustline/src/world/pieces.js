/**
 * Stunt pieces as swept shapes: a path (a list of frames: a point, a sideways
 * axis and an up axis) and a cross-section (a polyline in side/up
 * coordinates) swept along it. A road with kerbs, a loop, a half-pipe, the
 * wall of the drum, a kicker: all the same thing with a different path or a
 * different cross-section.
 *
 * Output is plain arrays: triangle positions for the collision grid and the
 * mesh, and a per-vertex "paint" attribute (which material, and where on it)
 * that the track shader turns into stripes, planks and arrows. No Three.js,
 * so it all runs in Node.
 */
import { heightAt } from './terrain.js';

/* ------------------------------------------------------------- vectors --- */

export const v3 = (x = 0, y = 0, z = 0) => [x, y, z];
export const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
export const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
export const scale = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
export const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
export const len = (a) => Math.hypot(a[0], a[1], a[2]);
export const norm = (a) => {
  const l = len(a) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
};
export const madd = (a, b, s) => [a[0] + b[0] * s, a[1] + b[1] * s, a[2] + b[2] * s];
/** Rotate v about unit axis k by angle a (Rodrigues). */
export function rotate(v, k, a) {
  const c = Math.cos(a);
  const s = Math.sin(a);
  const kv = cross(k, v);
  const kd = dot(k, v) * (1 - c);
  return [v[0] * c + kv[0] * s + k[0] * kd, v[1] * c + kv[1] * s + k[1] * kd, v[2] * c + kv[2] * s + k[2] * kd];
}

/* ------------------------------------------------------------- paints --- */

/** Paint ids, read by the track shader (render side). */
export const PAINT = {
  asphalt: 0,
  rail: 1, // yellow-and-black hazard stripes
  side: 2, // painted steel edge
  under: 3, // dark underside
  wood: 4, // planks
  kicker: 5, // orange with white chevrons
  boost: 6, // green with glowing arrows
  railtop: 7, // red and white kerb
  concrete: 8, // pale skatepark concrete
  steel: 9, // pillars
  rock: 10, // natural stone, striped like the cliffs
};

/* -------------------------------------------------------------- frames --- */

/**
 * Bank frames into their turns: each frame is rolled about its tangent by
 * an angle from how hard the path is turning there (smoothed), up to `max`.
 */
export function autoBank(frames, gain = 20, max = 0.45) {
  const n = frames.length;
  const raw = frames.map((f, i) => {
    const a = frames[Math.max(0, i - 2)];
    const b = frames[Math.min(n - 1, i + 2)];
    const ds = b.s - a.s || 1;
    const turn = dot(sub(b.t, a.t), f.r) / ds; // + when turning right
    return turn * gain;
  });
  const out = [];
  for (let i = 0; i < n; i++) {
    let sum = 0;
    let cnt = 0;
    for (let o = -6; o <= 6; o++) {
      const j = i + o;
      if (j < 0 || j >= n) continue;
      sum += raw[j];
      cnt++;
    }
    const ang = Math.max(-max, Math.min(max, sum / cnt));
    const f = frames[i];
    out.push({ ...f, r: rotate(f.r, f.t, ang), n: rotate(f.n, f.t, ang) });
  }
  return out;
}

/**
 * Frames from a function of arc length: fn(s) → { p, up }. Tangent comes
 * from the points themselves; side = tangent × up; up is re-orthogonalised.
 */
export function framesFrom(fn, length, step = 2) {
  const n = Math.max(2, Math.ceil(length / step));
  const pts = [];
  for (let i = 0; i <= n; i++) pts.push(fn((length * i) / n));
  const frames = [];
  let along = 0;
  for (let i = 0; i <= n; i++) {
    const a = pts[Math.max(0, i - 1)].p;
    const b = pts[Math.min(n, i + 1)].p;
    const t = norm(sub(b, a));
    const r = norm(cross(t, pts[i].up));
    const u = cross(r, t);
    if (i > 0) along += len(sub(pts[i].p, pts[i - 1].p));
    frames.push({ p: pts[i].p, t, r, n: u, s: along, ...(pts[i].extra || {}) });
  }
  return frames;
}

/** Catmull-Rom through 3D control points; `banks` (radians) per point. */
export function curveFrames(points, banks = null, step = 2) {
  const seg = points.length - 1;
  const at = (k) => points[Math.max(0, Math.min(points.length - 1, k))];
  const cr = (t) => {
    let f = t * seg;
    let i = Math.min(seg - 1, Math.floor(f));
    f -= i;
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2);
    const f2 = f * f, f3 = f2 * f;
    const c = (a, b, cc, d) => 0.5 * (2 * b + (-a + cc) * f + (2 * a - 5 * b + 4 * cc - d) * f2 + (-a + 3 * b - 3 * cc + d) * f3);
    const bank = banks ? banks[i] + (banks[Math.min(banks.length - 1, i + 1)] - banks[i]) * (f * f * (3 - 2 * f)) : 0;
    return { p: [c(p0[0], p1[0], p2[0], p3[0]), c(p0[1], p1[1], p2[1], p3[1]), c(p0[2], p1[2], p2[2], p3[2])], bank };
  };
  // Arc-length table so frames come out evenly spaced.
  const table = [0];
  let prev = cr(0).p;
  const fine = seg * 60;
  for (let k = 1; k <= fine; k++) {
    const p = cr(k / fine).p;
    table.push(table[k - 1] + len(sub(p, prev)));
    prev = p;
  }
  const total = table[fine];
  const tAt = (s) => {
    let lo = 0;
    let hi = fine;
    while (hi - lo > 1) {
      const mid = (lo + hi) >> 1;
      if (table[mid] < s) lo = mid;
      else hi = mid;
    }
    const span = table[hi] - table[lo] || 1;
    return (lo + (s - table[lo]) / span) / fine;
  };
  return framesFrom(
    (s) => {
      const t = tAt(s);
      const { p, bank } = cr(t);
      const q = cr(Math.min(1, t + 1e-3)).p;
      const q0 = cr(Math.max(0, t - 1e-3)).p;
      const tan = norm(sub(q, q0));
      let up = [0, 1, 0];
      // Up perpendicular to the tangent, then banked about it.
      up = norm(sub(up, scale(tan, dot(up, tan))));
      if (bank) up = rotate(up, tan, bank);
      return { p, up };
    },
    total,
    step
  );
}

/**
 * A path in a vertical plane, given its curvature along the way: start at
 * `origin` heading `dir` (horizontal unit vector), curving upward by
 * curvature(s). `drift(s)` slides it sideways (for loops, so the way out
 * misses the way in). Returns frames whose up points to the inside.
 */
export function curvatureFrames(origin, dir, length, curvature, drift = () => 0, step = 1.5) {
  const side = norm(cross(dir, [0, 1, 0]));
  const n = Math.ceil(length / 0.25);
  const ds = length / n;
  const pts = [];
  let a = 0;
  let f = 0;
  let u = 0;
  pts.push({ s: 0, f, u, a });
  for (let i = 1; i <= n; i++) {
    const s = i * ds;
    const k = curvature(s - ds / 2);
    const am = a + (k * ds) / 2;
    f += Math.cos(am) * ds;
    u += Math.sin(am) * ds;
    a += k * ds;
    pts.push({ s, f, u, a });
  }
  return framesFrom(
    (s) => {
      const q = pts[Math.min(n, Math.round(s / ds))];
      const p = add(add(add(origin, scale(dir, q.f)), [0, q.u, 0]), scale(side, drift(s)));
      const up = add(scale(dir, -Math.sin(q.a)), [0, Math.cos(q.a), 0]);
      return { p, up };
    },
    length,
    step
  );
}

/* ---------------------------------------------------------- profiles --- */

/** A plain driving surface, no kerbs. */
export const flat = (w, paint = 'asphalt') => [
  { x: -w / 2, y: 0, paint },
  { x: w / 2, y: 0 },
];

/** A road with low barriers both sides. */
export const railed = (w, rail = 0.9, paint = 'asphalt') => [
  { x: -w / 2 - 0.35, y: rail, paint: 'railtop' },
  { x: -w / 2, y: rail, paint: 'rail' },
  { x: -w / 2, y: 0, paint },
  { x: w / 2, y: 0, paint: 'rail' },
  { x: w / 2, y: rail, paint: 'railtop' },
  { x: w / 2 + 0.35, y: rail },
];

/** A road deck in the air: kerbs, steel sides and an underside. */
export const deck = (w, rail = 0.9, depth = 1.3, paint = 'asphalt') => [
  { x: -w / 2 - 0.35, y: -depth, paint: 'side' },
  { x: -w / 2 - 0.35, y: rail, paint: 'railtop' },
  { x: -w / 2, y: rail, paint: 'rail' },
  { x: -w / 2, y: 0, paint },
  { x: w / 2, y: 0, paint: 'rail' },
  { x: w / 2, y: rail, paint: 'railtop' },
  { x: w / 2 + 0.35, y: rail, paint: 'side' },
  { x: w / 2 + 0.35, y: -depth, paint: 'under' },
  { x: -w / 2 - 0.35, y: -depth },
];

/** A wedge: the surface plus sides that drop to the ground. */
export const wedge = (w, paint = 'kicker') => [
  { x: -w / 2, y: 0, drop: true, paint: 'side' },
  { x: -w / 2, y: 0, paint },
  { x: w / 2, y: 0, paint: 'side' },
  { x: w / 2, y: 0, drop: true },
];

/* --------------------------------------------------------------- build --- */

/**
 * Sweep a profile along frames. Returns
 * { positions, paints, collide, flags, name } where positions/paints are
 * per-vertex triangle soup (paint = [id, u, v] per vertex).
 */
export function sweep(frames, profile, opts = {}) {
  const positions = [];
  const paints = [];
  const collide = [];
  const nf = frames.length;
  // World position of profile point k on frame i.
  const world = frames.map((f) =>
    profile.map((q) => {
      let p = add(add(f.p, scale(f.r, q.x)), scale(f.n, q.y));
      if (q.drop) p = [p[0], Math.min(p[1], heightAt(p[0], p[2]) - 0.6), p[2]];
      return p;
    })
  );
  // Running across-distance per profile segment, for stripes.
  const segPaint = profile.map((q, k) => {
    let paint = q.paint;
    for (let j = k; paint == null && j >= 0; j--) paint = profile[j].paint;
    return paint ?? 'asphalt';
  });
  for (let k = 0; k < profile.length - 1; k++) {
    const paint = PAINT[segPaint[k]] ?? 0;
    const w0 = 0;
    const w1 = Math.hypot(profile[k + 1].x - profile[k].x, profile[k + 1].y - profile[k].y);
    const solid = opts.collide !== false && !(opts.skipCollide && opts.skipCollide.includes(segPaint[k]));
    for (let i = 0; i < nf - 1; i++) {
      const a = world[i][k];
      const b = world[i][k + 1];
      const c = world[i + 1][k];
      const d = world[i + 1][k + 1];
      const va = frames[i].s;
      const vb = frames[i + 1].s;
      // Wound so the face normal is (across) × (along): up for a road
      // drawn left to right, outward for a closed section.
      const tri = [a, b, c, b, d, c];
      const uv = [
        [w0, va],
        [w1, va],
        [w0, vb],
        [w1, va],
        [w1, vb],
        [w0, vb],
      ];
      for (let m = 0; m < 6; m++) {
        positions.push(tri[m][0], tri[m][1], tri[m][2]);
        paints.push(paint, uv[m][0], uv[m][1]);
        if (solid) collide.push(tri[m][0], tri[m][1], tri[m][2]);
      }
    }
  }
  return { positions, paints, collide, flags: opts.flags || 0, name: opts.name || '', path: frames.map((f) => f.p) };
}

/* ------------------------------------------------------ piece shapes --- */

/**
 * A kicker: a wedge whose surface curves up to `height` over `length`,
 * leaving at `angle` (radians). Placed at `pos` (the foot), facing `dir`.
 */
export function kicker(pos, dir, { length = 14, height = 3, width = 8, paint = 'kicker', foot = null } = {}) {
  dir = norm([dir[0], 0, dir[2]]);
  const y0 = foot ?? heightAt(pos[0], pos[2]);
  // Height ∝ (s/L)^2: tangent to the ground at the foot.
  const frames = framesFrom(
    (s) => {
      const t = s / length;
      const p = madd([pos[0], y0 + height * t * t, pos[2]], dir, s);
      return { p, up: [0, 1, 0] };
    },
    length,
    1
  );
  return sweep(frames, wedge(width, paint), { name: 'kicker' });
}

/** A landing ramp: like a kicker but facing the other way (a down slope). */
export function lander(pos, dir, opts = {}) {
  const { length = 14 } = opts;
  dir = norm([dir[0], 0, dir[2]]);
  // Build a kicker whose foot is at the far end, pointing back at us.
  const foot = madd(pos, dir, length);
  return kicker([foot[0], 0, foot[2]], scale(dir, -1), opts);
}

/**
 * A loop-the-loop at `pos` (the start of the run-in), heading `dir`.
 * Curvature eases in and out so the car is not slammed; the loop drifts
 * sideways by `offset` so the way out misses the way in.
 */
export function loop(pos, dir, { radius = 13, width = 9, offset = 11, ease = 12 } = {}) {
  dir = norm([dir[0], 0, dir[2]]);
  const kMax = 1 / radius;
  // Curvature: ramp up over `ease`, hold, ramp down; total turn 2π.
  // Ramp area = kMax*ease/2 each side, so the hold gives the rest.
  const hold = (2 * Math.PI - kMax * ease) / kMax;
  const run = 6;
  const total = run + ease + hold + ease + run;
  const curvature = (s) => {
    s -= run;
    if (s < 0) return 0;
    if (s < ease) return kMax * (s / ease);
    s -= ease;
    if (s < hold) return kMax;
    s -= hold;
    if (s < ease) return kMax * (1 - s / ease);
    return 0;
  };
  const drift = (s) => {
    const t = Math.min(1, Math.max(0, (s - run) / (total - 2 * run)));
    return offset * t * t * (3 - 2 * t);
  };
  const y0 = heightAt(pos[0], pos[2]) + 0.02;
  const frames = curvatureFrames([pos[0], y0, pos[2]], dir, total, curvature, drift, 1);
  return sweep(frames, railed(width, 1.1), { name: 'loop', flags: 1 });
}

/**
 * A surface of revolution about a vertical axis: `profile` is a list of
 * { r, y } from the inside out (radius, height); swept from angle a0 to a1.
 */
export function lathe(centre, profile, a0, a1, { paint = 'wood', step = 2, flags = 0, name = 'lathe' } = {}) {
  const rMax = Math.max(...profile.map((q) => q.r));
  const n = Math.max(8, Math.ceil(((a1 - a0) * rMax) / step));
  const frames = [];
  // Walk the angle downwards: then "side" (the radius, outward) is on the
  // right of the direction of travel, as it is for every other sweep.
  for (let i = 0; i <= n; i++) {
    const a = a1 - ((a1 - a0) * i) / n;
    const radial = [Math.cos(a), 0, Math.sin(a)];
    frames.push({ p: [...centre], t: [Math.sin(a), 0, -Math.cos(a)], r: radial, n: [0, 1, 0], s: (a1 - a) * rMax });
  }
  const prof = profile.map((q, k) => ({ x: q.r, y: q.y, paint: q.paint ?? (k < profile.length - 1 ? paint : undefined) }));
  return sweep(frames, prof, { name, flags });
}

/**
 * A straight piece with a shaped cross-section — quarter-pipes, half-pipes,
 * spines: `section` is the profile, swept `length` along `dir` from `pos`.
 * The profile's x runs across the piece (to the right of dir).
 */
export function extrude(pos, dir, length, section, opts = {}) {
  dir = norm([dir[0], 0, dir[2]]);
  const side = norm(cross(dir, [0, 1, 0]));
  const frames = [];
  const n = Math.max(1, Math.ceil(length / 2));
  for (let i = 0; i <= n; i++) {
    const s = (length * i) / n;
    frames.push({ p: madd(pos, dir, s), t: dir, r: side, n: [0, 1, 0], s });
  }
  return sweep(frames, section, opts);
}

/** Quarter-pipe cross-section: flat run-in then a curve up to vertical-ish. */
export function quarterSection(radius, { run = 3, top = 1.6, angle = Math.PI * 0.47, paint = 'concrete', back = true } = {}) {
  const pts = [{ x: -run, y: 0, paint }];
  const steps = 14;
  for (let i = 0; i <= steps; i++) {
    const a = (angle * i) / steps;
    pts.push({ x: Math.sin(a) * radius, y: radius - Math.cos(a) * radius, paint });
  }
  const last = pts[pts.length - 1];
  // A deck on top and a back wall down to the ground.
  pts[pts.length - 1].paint = 'railtop';
  pts.push({ x: last.x + top, y: last.y, paint: 'side' });
  if (back) pts.push({ x: last.x + top, y: -0.6 });
  return pts;
}
