/**
 * Where everything goes. The terrain is the canvas; this is the playground
 * built on it: every ramp, loop, pipe, deck and boost pad, the pillars that
 * hold them up, and the props scattered between.
 *
 * Pure data (no Three.js), shared by the renderer, the physics and
 * `tools/check.mjs`, which drives the car through the pieces.
 */
import {
  heightAt,
  normalAt,
  roadSamples,
  padNamed,
  mesaNamed,
  roadDistanceAt,
  washDepth,
  MESAS,
  HALF,
  RIM_START,
  fbm,
} from './terrain.js';
import {
  add,
  autoBank,
  cross,
  curveFrames,
  deck,
  extrude,
  flat,
  framesFrom,
  kicker,
  lathe,
  loop,
  madd,
  norm,
  quarterSection,
  scale,
  sweep,
  wedge,
} from './pieces.js';
import { createCollision } from './collide.js';

const TAU = Math.PI * 2;

/** Deterministic random so the canyon is the same canyon every visit. */
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function buildLayout() {
  const rand = mulberry32(0xd057);
  const pieces = [];
  const boosts = []; // { x, y, z, dx, dz, len, width, nx, ny, nz }
  const pillars = []; // { x, z, r, y0, y1 }
  const rocks = []; // boulders { x, y, z, r }
  const places = []; // named spots, for the one-off notes
  const collision = createCollision();
  const jumps = {}; // start points for the tests

  const ground = (x, z) => heightAt(x, z);
  const dirOf = (deg) => [Math.sin((deg * Math.PI) / 180), 0, -Math.cos((deg * Math.PI) / 180)];

  function addPiece(piece) {
    pieces.push(piece);
    collision.addTriangles(piece.collide, piece.flags);
    return piece;
  }

  /** A green pad that throws you forward. Laid on whatever is under it. */
  function boost(x, z, dir, { length = 10, width = 6, y = null } = {}) {
    dir = norm([dir[0], 0, dir[2]]);
    const gy = y ?? ground(x, z);
    const frames = framesFrom((s) => {
      const p = madd([x, 0, z], dir, s - length / 2);
      const h = y ?? ground(p[0], p[2]);
      return { p: [p[0], h + 0.06, p[2]], up: [0, 1, 0] };
    }, length, 1);
    const piece = sweep(frames, flat(width, 'boost'), { collide: false, name: 'boost' });
    pieces.push(piece);
    boosts.push({ x, y: gy, z, dx: dir[0], dz: dir[2], len: length, width });
  }

  /** Pillars under a deck, every `spacing` metres where it is high enough. */
  function holdUp(frames, spacing = 18, width = 0) {
    let next = spacing / 2;
    for (const f of frames) {
      if (f.s < next) continue;
      next = f.s + spacing;
      const below = madd(f.p, f.n, -1.3);
      const g = ground(below[0], below[2]);
      if (below[1] - g < 2.5) continue;
      const offsets = width ? [-width / 2 + 1, width / 2 - 1] : [0];
      for (const o of offsets) {
        const p = madd(below, f.r, o);
        const gg = ground(p[0], p[2]);
        pillars.push({ x: p[0], z: p[2], r: width ? 0.7 : 1.1, y0: gg - 1, y1: p[1] });
      }
    }
  }

  /* ------------------------------------------------------------ park --- */
  const park = padNamed('park');
  const py = park.h;
  places.push({ key: 'park', x: 0, z: 0, r: 120, text: 'The yard' });

  // Spawn facing the loop, a boost pad on the way.
  const spawn = { x: -5.5, y: py + 1.4, z: 70, heading: 0 };
  boost(-5.5, 30, dirOf(0), { length: 12, width: 7 });
  addPiece(loop([-5.5, 0, 6], dirOf(0), { radius: 13, width: 9, offset: 11 }));
  places.push({ key: 'loop', x: 2, z: -25, r: 22, text: 'The loop', above: 6 });

  // A row of kickers heading west, small to large.
  boost(-26, -2, dirOf(-90), { length: 8 });
  addPiece(kicker([-40, 0, -2], dirOf(-90), { length: 9, height: 1.6, width: 7 }));
  addPiece(kicker([-78, 0, -2], dirOf(-90), { length: 13, height: 3.2, width: 8 }));
  boost(-100, -2, dirOf(-90), { length: 8 });
  addPiece(kicker([-120, 0, -2], dirOf(-90), { length: 20, height: 5.5, width: 10 }));

  // The barrel roll: a kicker that twists as it rises, so one side leaves first.
  {
    const foot = [70, 0, 40];
    const dir = dirOf(180);
    const L = 22;
    const H = 4.5;
    const frames = framesFrom(
      (s) => {
        const t = s / L;
        const p = madd([foot[0], py + H * t * t, foot[2]], dir, s);
        const side = norm(cross(dir, [0, 1, 0]));
        const up = norm(add([0, 1, 0], scale(side, Math.tan(0.55 * t * t))));
        return { p, up };
      },
      L,
      1
    );
    addPiece(sweep(frames, wedge(8), { name: 'twist' }));
    boost(70, 22, dir, { length: 10 });
    places.push({ key: 'twist', x: 70, z: 55, r: 14, text: 'The twister' });
  }

  // A table-top: up, across, down.
  {
    const dir = dirOf(90);
    const L = 12;
    const H = 3;
    const x0 = 40;
    const z0 = 100;
    const frames = framesFrom(
      (s) => {
        let y;
        if (s < L) y = H * Math.sin((s / L) * Math.PI * 0.5) ** 2;
        else if (s < L + 14) y = H;
        else y = H * Math.cos(((s - L - 14) / L) * Math.PI * 0.5) ** 2;
        return { p: madd([x0, py + y, z0], dir, s), up: [0, 1, 0] };
      },
      L * 2 + 14,
      1
    );
    addPiece(sweep(frames, wedge(10, 'kicker'), { name: 'table' }));
  }

  // The half-pipe, along the south-west of the yard.
  {
    const R = 6;
    const floor = 10;
    const left = quarterSection(R, { run: 0 }).map((q) => ({ ...q, x: -floor / 2 - q.x }));
    const right = quarterSection(R, { run: 0 }).map((q) => ({ ...q, x: floor / 2 + q.x }));
    // Left side reversed (from its back wall in to the floor), then across
    // the floor, then up the right side.
    const lrev = left.slice().reverse().map((q, i, arr) => ({ ...q, paint: arr[i + 1]?.paint ?? 'concrete' }));
    const section = [...lrev.slice(0, -1), { x: -floor / 2, y: 0, paint: 'concrete' }, ...right];
    addPiece(extrude([-120, py, 80], dirOf(90), 70, section, { name: 'halfpipe' }));
    places.push({ key: 'pipe', x: -85, z: 80, r: 14, text: 'The half-pipe' });
  }

  // A quarter-pipe bowl on the east edge of the yard: drive at it, it hands
  // you back.
  {
    const R = 8;
    const prof = quarterSection(R, { run: 2 }).map((q) => ({ r: 34 + q.x, y: q.y, paint: q.paint }));
    addPiece(lathe([110, py, -40], prof, -TAU * 0.3, TAU * 0.3, { paint: 'concrete', name: 'bowl' }));
  }

  // A spine: two quarter-pipes back to back, to launch off either way.
  {
    const R = 5;
    const half = quarterSection(R, { run: 0, top: 0.3, back: false, angle: Math.PI * 0.36 });
    const a = half.map((q) => ({ ...q, x: -q.x - 2 }));
    const b = half.map((q) => ({ ...q, x: q.x + 2 }));
    const section = [...a.slice().reverse().map((q, i, arr) => ({ ...q, paint: arr[i + 1]?.paint ?? 'concrete' })), ...b];
    addPiece(extrude([-40, py, -90], dirOf(90), 26, section, { name: 'spine' }));
  }

  // Cones and barrels in a slalom across the yard, and a stack of crates.
  const loose = [];
  for (let i = 0; i < 10; i++) loose.push({ type: 'cone', x: -60 + i * 9, z: 40 + Math.sin(i) * 4 });
  for (let i = 0; i < 6; i++) loose.push({ type: 'barrel', x: 30 + (i % 3) * 1.4, z: -60 + Math.floor(i / 3) * 1.4 });
  for (let i = 0; i < 9; i++) loose.push({ type: 'crate', x: -10 + (i % 3) * 1.3, z: 110 + Math.floor(i / 3) * 0.01, stack: Math.floor(i / 3) });

  /* ------------------------------------------------------------ drum --- */
  {
    const pad = padNamed('drum');
    const R0 = 20;
    // Floor fillet, a tall wall, and a lip that curls back in at the top so
    // a car riding high is turned back down instead of thrown out.
    const prof = [
      { r: R0, y: 0.03, paint: 'wood' },
      ...Array.from({ length: 12 }, (_, i) => {
        const a = ((i + 1) / 12) * (Math.PI / 2);
        return { r: R0 + Math.sin(a) * 6, y: 6 - Math.cos(a) * 6 + 0.03, paint: 'wood' };
      }),
      { r: R0 + 6, y: 13, paint: 'wood' },
      ...Array.from({ length: 6 }, (_, i) => {
        const a = ((i + 1) / 6) * (Math.PI * 0.6);
        return { r: R0 + 6 - 2.4 * (1 - Math.cos(a)), y: 13 + 2.4 * Math.sin(a), paint: i === 5 ? 'railtop' : 'wood' };
      }),
      { r: R0 + 7.2, y: 15.4, paint: 'side' },
      { r: R0 + 7.2, y: -0.6 },
    ];
    // The doorway faces the road from the yard.
    const door = Math.atan2(250 - pad.z, 170 - pad.x);
    const gap = 0.45;
    addPiece(lathe([pad.x, pad.h, pad.z], prof, door + gap / 2, door + TAU - gap / 2, { flags: 1, name: 'drum' }));
    boost(pad.x + Math.cos(door) * 34, pad.z + Math.sin(door) * 34, [-Math.cos(door), 0, -Math.sin(door)], { length: 10 });
    places.push({ key: 'drum', x: pad.x, z: pad.z, r: 22, text: 'The drum — keep it pinned and ride the wall' });
  }

  /* ----------------------------------------------------- road pieces --- */

  const roadRuns = (name) => {
    const r = roadSamples.filter((s) => s.road === name);
    const runs = [];
    let cur = null;
    r.forEach((s, i) => {
      if (s.inWash) {
        if (!cur) runs.push((cur = { a: i, b: i }));
        cur.b = i;
      } else cur = null;
    });
    return { samples: r, runs };
  };

  // The canyon jump: a ramp up over the north lip of the wash, a ramp down
  // from the south lip, and nothing but air between. Both follow the road,
  // and either way works: drive it south to north and the landing ramp is
  // the take-off.
  const loopRoad = roadRuns('loop');
  {
    const run = loopRoad.runs.find((q) => loopRoad.samples[q.a].x > 0);
    const S = loopRoad.samples;
    const reach = 13; // samples (2 m each) the ramps reach out over the wash
    const lead = 22; // samples of run-up on the road
    const H = 6.5;
    const ramp = (from, to, rising) => {
      const pts = [];
      for (let i = from; i <= to; i++) pts.push(S[i]);
      const n = pts.length - 1;
      const yRoad = rising ? pts[0].y : pts[n].y;
      const frames = framesFrom(
        (sArc) => {
          const k = Math.min(n, Math.round((sArc / (n * 2)) * n));
          const q = pts[k];
          const t = rising ? k / n : 1 - k / n;
          return { p: [q.x, yRoad + 0.03 + H * t * t, q.z], up: [0, 1, 0] };
        },
        n * 2,
        2
      );
      return addPiece(sweep(frames, wedge(12), { name: 'kicker' }));
    };
    ramp(run.a - lead, run.a + reach, true);
    ramp(run.b - reach, run.b + lead, false);
    const n = S[run.a - 1];
    const s = S[run.b + 1];
    const tn = [S[run.a - lead + 1].x - S[run.a - lead - 4].x, 0, S[run.a - lead + 1].z - S[run.a - lead - 4].z];
    const ts = [S[run.b + lead - 1].x - S[run.b + lead + 4].x, 0, S[run.b + lead - 1].z - S[run.b + lead + 4].z];
    boost(S[run.a - lead - 10].x, S[run.a - lead - 10].z, tn, { length: 12, width: 8 });
    boost(S[run.b + lead + 10].x, S[run.b + lead + 10].z, ts, { length: 12, width: 8 });
    places.push({ key: 'gap', x: (n.x + s.x) / 2, z: (n.z + s.z) / 2, r: Math.hypot(s.x - n.x, s.z - n.z) / 2, text: 'Over the canyon!', above: 4 });
  }

  // The dip: a trestle that swoops down into the wash and back up.
  {
    const run = loopRoad.runs.find((q) => loopRoad.samples[q.a].x < 0);
    const a = run.a - 6;
    const b = run.b + 6;
    const pts = [];
    for (let i = a; i <= b; i += 4) pts.push(loopRoad.samples[i]);
    if (pts[pts.length - 1] !== loopRoad.samples[b]) pts.push(loopRoad.samples[b]);
    const y0 = loopRoad.samples[a].y;
    const y1 = loopRoad.samples[b].y;
    const base = curveFrames(pts.map((q) => [q.x, 0, q.z]), null, 2);
    const L = base[base.length - 1].s;
    const frames = framesFrom(
      (s) => {
        const f = base[Math.min(base.length - 1, Math.round((s / L) * (base.length - 1)))];
        const t = s / L;
        const y = y0 + (y1 - y0) * t - 13 * Math.sin(Math.PI * t) ** 2 + 0.05;
        return { p: [f.p[0], y, f.p[2]], up: [0, 1, 0] };
      },
      L,
      2
    );
    addPiece(sweep(frames, deck(13), { name: 'dip' }));
    holdUp(frames, 16, 13);
    const mid = frames[Math.floor(frames.length / 2)].p;
    places.push({ key: 'dip', x: mid[0], z: mid[2], r: 30, text: 'Down the dip', above: 6 });
  }

  // The bridge on the south spur, arched a little so it gives a hop.
  {
    const spur = roadRuns('south spur');
    const run = spur.runs[0];
    const a = run.a - 3;
    const b = run.b + 3;
    const sa = spur.samples[a];
    const sb = spur.samples[b];
    const pts = [];
    for (let i = a; i <= b; i += 5) pts.push(spur.samples[i]);
    if (pts[pts.length - 1] !== sb) pts.push(sb);
    const base = curveFrames(pts.map((q) => [q.x, 0, q.z]), null, 2);
    const L = base[base.length - 1].s;
    const frames = framesFrom(
      (s) => {
        const f = base[Math.min(base.length - 1, Math.round((s / L) * (base.length - 1)))];
        const t = s / L;
        const y = sa.y + (sb.y - sa.y) * t + 5 * Math.sin(Math.PI * t) + 0.05;
        return { p: [f.p[0], y, f.p[2]], up: [0, 1, 0] };
      },
      L,
      2
    );
    addPiece(sweep(frames, deck(12, 1.3), { name: 'bridge' }));
    holdUp(frames, 20, 12);
    places.push({ key: 'bridge', x: (sa.x + sb.x) / 2, z: (sa.z + sb.z) / 2, r: 30, text: 'The bridge', above: 3 });
  }

  /* ---------------------------------------------------- spiral mesa --- */
  {
    const m = mesaNamed('spiral');
    const R = 86;
    const a0 = Math.atan2(-0.63, -0.77);
    const turns = 1.25;
    const climb = R * TAU * turns;
    const inward = 0.32 * TAU;
    const top = m.h + 0.8;
    const startY = ground(m.x + Math.cos(a0) * R, m.z + Math.sin(a0) * R) + 0.05;
    // Arc length is not exactly radius × angle once the radius shrinks; the
    // frames are re-measured anyway, this only spaces them.
    const total = climb + inward * 55;
    const frames = framesFrom(
      (s) => {
        let a;
        let r;
        let y;
        if (s <= climb) {
          a = a0 + s / R;
          r = R;
          const t = s / climb;
          y = startY + (top - startY) * (t * t * (3 - 2 * t) * 0.3 + t * 0.7);
        } else {
          const t = Math.min(1, (s - climb) / (total - climb));
          a = a0 + climb / R + inward * t;
          r = R - (R - 22) * (t * t * (3 - 2 * t));
          y = top;
        }
        const p = [m.x + Math.cos(a) * r, y, m.z + Math.sin(a) * r];
        // Lean in to the mesa a touch.
        const inward3 = [-Math.cos(a), 0, -Math.sin(a)];
        return { p, up: norm(add([0, 1, 0], scale(inward3, 0.12))) };
      },
      total,
      2
    );
    addPiece(sweep(frames, deck(11), { name: 'spiral' }));
    holdUp(frames, 22, 11);
    // The ski jump off the top, straight on from where the road arrives,
    // lipped at the far edge of the mesa.
    const last = frames[frames.length - 1].p;
    const prev = frames[frames.length - 4].p;
    const out = norm([last[0] - prev[0], 0, last[2] - prev[2]]);
    // How far across the top before the edge, along `out`.
    const ox = last[0] - m.x;
    const oz = last[2] - m.z;
    const b = ox * out[0] + oz * out[2];
    const edge = -b + Math.sqrt(b * b - (ox * ox + oz * oz - (m.r * 0.94) ** 2));
    const lipAt = madd([last[0], 0, last[2]], out, edge - 1);
    const foot = madd(lipAt, out, -24);
    boost(...xz(madd(foot, out, -5)), out, { length: 8, y: m.h + 0.2 });
    addPiece(kicker(foot, out, { length: 24, height: 4.5, width: 10, foot: m.h }));
    jumps.spiral = { x: last[0], z: last[2], heading: Math.atan2(out[0], -out[2]), y: top };
    places.push({ key: 'spiral', x: m.x, z: m.z, r: 40, text: 'The top of the spiral — now jump' });
    places.push({ key: 'spiralFoot', x: frames[3].p[0], z: frames[3].p[2], r: 18, text: 'Up and round', above: 6 });
  }

  /* ----------------------------------------------------- the skyway --- */
  // An elevated road that swoops between the cones of the badlands, with a
  // gap to jump in the middle and a launch off the end into the yard.
  {
    const P = (x, z, y) => [x, y ?? ground(x, z) + 0.05, z];
    const pts = [
      P(-150, -40),
      P(-185, -40, ground(-185, -40) + 2.5),
      [-235, 11, -30],
      [-300, 19, 4],
      [-370, 15, -2],
      [-440, 24, -50],
      [-500, 30, -130],
      [-500, 26, -200],
      [-440, 20, -215],
      [-360, 27, -200],
      [-290, 22, -175],
      [-230, 20, -150],
      [-185, 18, -135],
    ];
    const frames = autoBank(curveFrames(pts, null, 2), 26, 0.5);
    // Cut a gap after the high crest at (-360, -200): the deck kicks up
    // just before it.
    let cut = frames.findIndex((f) => f.p[0] > -350 && f.p[2] > -205 && f.s > 400);
    if (cut < 0) cut = Math.floor(frames.length * 0.7);
    const gapLen = 9; // frames (2 m each)
    const before = frames.slice(0, cut + 1).map((f, i, arr) => {
      const k = Math.max(0, 1 - (arr.length - 1 - i) / 8);
      return { ...f, p: madd(f.p, f.n, 1.6 * k * k) };
    });
    const after = frames.slice(cut + gapLen);
    addPiece(sweep(before, deck(10), { name: 'skyway' }));
    addPiece(sweep(after, deck(10), { name: 'skyway' }));
    holdUp(before, 20, 10);
    holdUp(after, 20, 10);
    // The end: a launch kicker on the deck.
    const end = after[after.length - 1];
    const dir = end.t;
    const launch = framesFrom(
      (s) => {
        const t = s / 12;
        return { p: madd(madd(end.p, dir, s), end.n, 3 * t * t), up: end.n };
      },
      12,
      1
    );
    addPiece(sweep(launch, deck(10), { name: 'skyway' }));
    holdUp(launch, 6, 10);
    const bf = before[Math.max(0, before.length - 22)];
    boost(bf.p[0], bf.p[2], bf.t, { length: 10, width: 6, y: bf.p[1] });
    places.push({ key: 'skyway', x: -300, z: 4, r: 30, text: 'The skyway', above: 10 });
    places.push({ key: 'skygap', x: before[before.length - 1].p[0], z: before[before.length - 1].p[2], r: 18, text: 'Mind the gap!', above: 10 });
  }

  /* ---------------------------------------------------- rock arches --- */
  // Natural arches over the road, wide enough to drive under, and you can
  // ride over the top if you are brave.
  function arch(x, z, span, height, thick) {
    const s = nearestOnRoad(x, z);
    const side = norm(cross([s.tx, 0, s.tz], [0, 1, 0]));
    const c = [s.x, 0, s.z];
    const ring = [];
    for (let i = 0; i <= 8; i++) {
      const a = -(i / 8) * TAU;
      ring.push({ x: Math.cos(a) * thick, y: Math.sin(a) * thick * 0.75, paint: 'rock' });
    }
    const frames = framesFrom(
      (u) => {
        const a = Math.PI * (u / 100);
        const lateral = -Math.cos(a) * span;
        const p = madd(c, side, lateral);
        const g = Math.min(ground(...xz(madd(c, side, -span))), ground(...xz(madd(c, side, span))));
        const y = g - 2 + Math.sin(a) * height + (1 - Math.sin(a)) * 0;
        return { p: [p[0], y, p[2]], up: [s.tx, 0, s.tz] };
      },
      100,
      2.5
    );
    addPiece(sweep(frames, ring, { name: 'arch' }));
    places.push({ key: `arch${x}`, x: s.x, z: s.z, r: span, text: 'Under the arch', above: height });
  }
  arch(-650, -15, 16, 19, 4.5);
  arch(560, -125, 15, 17, 4);

  /* ----------------------------------------------------------- props --- */
  const props = { cactus: [], joshua: [], bush: [], rock: [], pole: [], turbine: [], sign: [] };

  // Wind turbines along the shelf mesa and up on the north rim.
  {
    const shelf = mesaNamed('shelf');
    for (let i = 0; i < 5; i++) {
      const x = shelf.x - 70 + i * 35;
      const z = shelf.z + Math.sin(i * 1.7) * 18;
      const y = ground(x, z);
      props.turbine.push({ x, y, z, phase: i * 1.3, yaw: 0.3 });
      pillars.push({ x, z, r: 1.4, y0: y - 1, y1: y + 46 });
    }
    for (let i = 0; i < 9; i++) {
      const a = -TAU * 0.25 + (i - 4) * 0.12;
      const r = RIM_START + 150;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      props.turbine.push({ x, y: ground(x, z), z, phase: i * 0.9, yaw: 0.3 });
    }
  }

  // Telegraph poles along the main road, every 40 m, on the outside.
  {
    const r = loopRoad.samples;
    for (let i = 0; i < r.length; i += 20) {
      const s = r[i];
      if (s.inWash) continue;
      const side = [-s.tz, 0, s.tx];
      const x = s.x + side[0] * 13;
      const z = s.z + side[2] * 13;
      if (washDepth(x, z) > 0.1) continue;
      props.pole.push({ x, y: ground(x, z), z, yaw: Math.atan2(s.tx, s.tz) });
    }
  }

  // Scatter: saguaros, Joshua trees, scrub and boulders, kept off roads,
  // pieces and steep ground.
  const clear = (x, z, pad) => {
    if (roadDistanceAt(x, z) < 14 + pad) return false;
    if (Math.hypot(x, z) < 160 + pad) return false;
    if (Math.hypot(x - 250, z - 120) < 50 + pad) return false;
    if (Math.hypot(x, z) > RIM_START - 20) return false;
    const n = normalAt(x, z);
    if (n.y < 0.9) return false;
    for (const p of pillars) if (Math.hypot(p.x - x, p.z - z) < 6 + pad) return false;
    return true;
  };
  for (let i = 0; i < 2600; i++) {
    const x = (rand() * 2 - 1) * (RIM_START - 10);
    const z = (rand() * 2 - 1) * (RIM_START - 10);
    const kind = rand();
    const lush = fbm(x * 0.004 + 40, z * 0.004, 2);
    if (kind < 0.18) {
      if (lush < 0.45 || !clear(x, z, 4)) continue;
      props.cactus.push({ x, y: ground(x, z), z, s: 0.8 + rand() * 0.7, yaw: rand() * TAU, arms: Math.floor(rand() * 3) });
    } else if (kind < 0.26) {
      if (lush < 0.5 || !clear(x, z, 4)) continue;
      props.joshua.push({ x, y: ground(x, z), z, s: 0.8 + rand() * 0.5, yaw: rand() * TAU });
    } else if (kind < 0.75) {
      if (!clear(x, z, 1)) continue;
      props.bush.push({ x, y: ground(x, z), z, s: 0.5 + rand() * 0.9, yaw: rand() * TAU });
    } else if (kind < 0.86) {
      if (!clear(x, z, 6)) continue;
      const r = 1.2 + rand() * rand() * 4.5;
      const y = ground(x, z) + r * 0.25;
      props.rock.push({ x, y, z, r, yaw: rand() * TAU });
      if (r > 1.8) rocks.push({ x, y, z, r: r * 0.9 });
    }
  }
  // A few boulders round the foot of each mesa.
  for (const m of MESAS) {
    for (let i = 0; i < 7; i++) {
      const a = rand() * TAU;
      const d = m.r + m.skirt * (0.85 + rand() * 0.5);
      const x = m.x + Math.cos(a) * d;
      const z = m.z + Math.sin(a) * d;
      if (!clear(x, z, 3)) continue;
      const r = 2 + rand() * 4;
      const y = ground(x, z) + r * 0.2;
      props.rock.push({ x, y, z, r, yaw: rand() * TAU });
      rocks.push({ x, y, z, r: r * 0.9 });
    }
  }

  for (const p of pillars) collision.addCylinder(p.x, p.z, p.r, p.y0, p.y1);
  for (const r of rocks) collision.addSphere(r.x, r.y, r.z, r.r);

  // Mesa names for the notes.
  for (const m of MESAS) {
    if (m.kind !== 'mesa' || m.name === 'spiral') continue;
    places.push({ key: m.name, x: m.x, z: m.z, r: m.r * 0.8, text: `On top of the ${m.name} mesa` });
  }
  places.push({ key: 'rim', ring: RIM_START + 70, text: 'The canyon wall — it always sends you back' });
  places.push({ key: 'dunes', x: 470, z: -260, r: 160, text: 'The dunes' });

  return { pieces, boosts, pillars, rocks, props, loose, places, spawn, collision, jumps, half: HALF };
}

function xz(p) {
  return [p[0], p[2]];
}

function nearestOnRoad(x, z) {
  let best = null;
  let bd = Infinity;
  for (const s of roadSamples) {
    const d = (s.x - x) ** 2 + (s.z - z) ** 2;
    if (d < bd) {
      bd = d;
      best = s;
    }
  }
  return best;
}

