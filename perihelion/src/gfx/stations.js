import * as THREE from 'three';
import { kit, singleHull, HULL, DARK, PAINT, WINDOW, NAV_R, NAV_G, STROBE } from './ships.js';

/** How many core layouts there are (a station's core is its id modulo this). */
export const STATION_CORES = 3;
/** Docking collars sit on the diagonals, clear of the module slots on the axes. */
const PORT_ANGLES = [0.785, 2.356, 3.927, 5.498];

/**
 * Stations: a core hub plus modules for what has actually been built there.
 * Built from the same parts kit and material as the ships. Zero g: nothing
 * has an up, the hub holds still, and only crew rings turn.
 *
 * The core (three layouts, so stations aren't all copies) has docking
 * collars on its diagonals, a power pod and radiators on an aft truss and
 * a comms mast. Modules attach at fixed slots, each with room to work:
 *
 *  - shipyard (fore): the open cradle, a hull half built inside, a gantry;
 *    its mouth faces out along the axis, so the approach is clear.
 *  - lab (+x): a laboratory drum with instrument booms and sensor pods;
 *    more booms, a dish and an isolated pod with each level.
 *  - bureau (-x): an armoured operations block with secure (laser) comms
 *    and a sensor mast; a second dish and more armour at level 2.
 *  - defence (+y, -y, then a diagonal): one gun mount per level, each a
 *    pylon, a protected magazine and a twin gun facing outward.
 *  - habitat (aft): a spin ring per level on an extended truss, turning on
 *    its own bearing (the `rotor`, spun by the view).
 *
 * Built along z (the station's axis). Modules under construction show as
 * ghosts. Windows light up once someone holds it; owner-coloured paint on
 * big surfaces shows whose it is.
 */
export function stationMesh(size, core, uT) {
  const S = size;
  const k = kit(core * 31 + 7);
  const r = k.r;
  const cylZ = (rad, len, z, kind = HULL, seg = 16, x = 0, y = 0) => k.cyl(rad, rad, len, z, kind, seg, x, y);
  // The pressurised core: three layouts, each its own silhouette.
  if (core === 0) {
    // Compact cylindrical hub: one fat drum with domed ends.
    cylZ(S * 0.27, S * 0.44, 0);
    k.cyl(S * 0.15, S * 0.27, S * 0.1, S * 0.27, HULL, 18);
    k.cyl(S * 0.27, S * 0.2, S * 0.1, -S * 0.27, HULL, 18);
    cylZ(S * 0.28, S * 0.14, S * 0.02, PAINT);
    for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2 + 0.3; k.box(S * 0.03, S * 0.03, S * 0.06, Math.cos(a) * S * 0.272, Math.sin(a) * S * 0.272, -S * 0.12, WINDOW); }
  } else if (core === 1) {
    // Open radial docking hub: a small node and four open arms, each
    // ending in a docking node.
    k.sphere(S * 0.19, 0, 0, 0, HULL, 1, 16);
    cylZ(S * 0.12, S * 0.5, -S * 0.1);
    cylZ(S * 0.2, S * 0.08, 0, PAINT);
    for (const a of PORT_ANGLES) {
      const ux = Math.cos(a), uy = Math.sin(a), vx = -uy, vy = ux;
      const r0 = S * 0.15, r1 = S * 0.68, w = S * 0.055;
      const rails = [[vx * w, vy * w, w], [-vx * w, -vy * w, w], [0, 0, -w]];
      for (const [ox, oy, oz] of rails) k.strut(ux * r0 + ox, uy * r0 + oy, oz, ux * r1 + ox, uy * r1 + oy, oz, S * 0.018);
      for (let q = 0; q <= 4; q++) {
        const rr = r0 + ((r1 - r0) * q) / 4;
        for (let m = 0; m < 3; m++) { const A = rails[m], B = rails[(m + 1) % 3]; k.strut(ux * rr + A[0], uy * rr + A[1], A[2], ux * rr + B[0], uy * rr + B[1], B[2], S * 0.012); }
      }
      k.pipe(ux * r0, uy * r0, 0, ux * r1, uy * r1, 0, S * 0.025, HULL); // pressurised tunnel
      k.sphere(S * 0.075, ux * S * 0.72, uy * S * 0.72, 0, HULL, 1, 12);
    }
  } else {
    // Long modular spine: cans of different sizes and ages along a spine.
    cylZ(S * 0.07, S * 1.2, -S * 0.15, DARK, 10);
    for (const [z, rad, len, x, y, kind] of [[0.28, 0.17, 0.26, 0, 0, HULL], [0.0, 0.2, 0.22, 0.02, -0.01, PAINT], [-0.24, 0.15, 0.24, -0.02, 0.02, HULL], [-0.5, 0.12, 0.18, 0, 0, HULL]]) {
      k.cyl(S * rad, S * rad, S * len, S * z, kind === PAINT ? HULL : kind, 16, S * x, S * y, 0.85 + r() * 0.25);
      for (const e of [-0.5, 0.5]) k.cyl(S * rad * 1.04, S * rad * 1.04, S * 0.02, S * (z + e * len), DARK, 16, S * x, S * y);
    }
    cylZ(S * 0.205, S * 0.1, 0, PAINT);
  }
  cylZ(S * 0.1, S * 0.12, S * 0.42, DARK, 12); // forward hard point (where a yard attaches)
  k.greeble(S * 0.36, S * 0.36, S * 0.5, 0, 0, 0, 6);
  // Docking collars (clear of the module slots).
  for (const p of stationPorts(core)) {
    const [x, y, z] = p.p, [nx, ny] = p.n;
    k.boom(x * S - nx * S * 0.1, y * S - ny * S * 0.1, z * S, [nx, ny, 0], S * 0.1, S * 0.09, HULL, 0.95);
    k.boom(x * S - nx * S * 0.01, y * S - ny * S * 0.01, z * S, [nx, ny, 0], S * 0.02, S * 0.13, DARK);
  }
  // Aft: an expansion truss with the power pod, its shield and radiators.
  k.truss(0, 0, -S * 0.75, -S * 0.3, S * 0.14, 3, S * 0.018);
  cylZ(S * 0.09, S * 0.18, -S * 0.68, DARK, 12);
  k.cyl(S * 0.16, S * 0.1, S * 0.03, -S * 0.56, DARK, 16);
  k.radiator(S * 0.08, 0, -S * 0.66, S * 0.42, S * 0.2, 0.75 + core * 0.4, 3, S * 0.01);
  k.radiator(-S * 0.08, 0, -S * 0.64, S * 0.32, S * 0.16, Math.PI + 0.9 + core * 0.3, 2, S * 0.01);
  // Comms mast and dish.
  const [mx, my, mz] = k.boom(-S * 0.07, S * 0.07, -S * 0.45, [-0.6, 0.6, -0.2], S * 0.4, S * 0.022);
  k.dish(S * 0.1, mx, my, mz, [-0.4, 0.6, 0.5]);
  k.light(0, 0, S * 0.49, STROBE, S * 0.05);
  k.light(S * 0.2, 0, -S * 0.1, NAV_G, S * 0.04); k.light(-S * 0.2, 0, -S * 0.1, NAV_R, S * 0.04);
  void r;
  const mesh = singleHull(k.build(1, uvD(S)), uT);
  mesh.userData.spin = 0.015; // a slow drift: nothing in zero g needs to hold still
  const base = mesh.userData.set;
  const st = { S, uT, parts: [], last: ['#6a7080', 1, false] };
  mesh.userData.station = st;
  mesh.userData.set = (color, sunV, on) => {
    st.last = [color, sunV, on];
    base(color, sunV, on);
    for (const m of st.parts) m.userData.set?.(color, sunV, on);
  };
  return mesh;
}

const uvD = (S) => 7 / Math.max(S * 2.5, 1);

/**
 * Show what's built on a station: `mods` is [{ type, level, done }]. Old
 * modules are removed; ones not finished show as ghosts (`ghost` material).
 */
export function setStationModules(mesh, mods, ghost) {
  const st = mesh.userData.station;
  for (const m of st.parts) m.removeFromParent();
  st.parts.length = 0;
  mesh.userData.rotor = null;
  const S = st.S;
  for (const [i, mod] of mods.entries()) {
    const k = kit(mod.type.length * 13 + i * 7 + mod.level);
    let ring = null;
    if (mod.type === 'shipyard') shipyard(k, S);
    else if (mod.type === 'lab') lab(k, S, mod.level);
    else if (mod.type === 'bureau') bureau(k, S, mod.level);
    else if (mod.type === 'defence') guns(k, S, mod.level);
    else if (mod.type === 'habitat') ring = habitat(k, S, mod.level, mod.done);
    else continue;
    const geo = k.build(1, uvD(S));
    const part = mod.done || !ghost ? singleHull(geo, st.uT) : new THREE.Mesh(geo, ghost);
    mesh.add(part);
    st.parts.push(part);
    if (ring && part.userData.set) {
      const rot = singleHull(ring.build(1, uvD(S)), st.uT);
      rot.position.set(0, 0, 0);
      rot.userData.spin = 0.22;
      part.add(rot);
      const set = part.userData.set;
      part.userData.set = (c, s, on) => { set(c, s, on); rot.userData.set(c, s, on); };
      mesh.userData.rotor = rot;
    }
    part.userData.set?.(...st.last);
  }
  // The more that's built, the more power and heat: extra radiator panels
  // (and from four levels up, a second power pod) on the aft truss, so a
  // developed station is visibly bigger and busier than a new one.
  const L = mods.reduce((n, m) => n + (m.done ? (m.type === 'shipyard' ? 1 : m.level) : 0), 0);
  if (L >= 2) {
    const k = kit(400 + L);
    for (let i = 0; i < Math.min(5, L - 1); i++) {
      const a = 0.3 + i * 1.27;
      k.radiator(Math.cos(a) * S * 0.08, Math.sin(a) * S * 0.08, -S * (0.4 + (i % 2) * 0.22), S * (0.3 + i * 0.04), S * 0.16, a, 2, S * 0.01);
    }
    if (L >= 4) {
      k.cyl(S * 0.07, S * 0.07, S * 0.16, -S * 0.5, DARK, 12, S * 0.15, -S * 0.12);
      k.strut(0, 0, -S * 0.5, S * 0.15, -S * 0.12, -S * 0.5, S * 0.03);
    }
    const part = singleHull(k.build(1, uvD(S)), st.uT);
    mesh.add(part);
    st.parts.push(part);
    part.userData.set(...st.last);
  }
}

// ---- Modules (built in the station's frame, in units of its size S) -------

function shipyard(k, S) {
  // The cradle: an open framework off the bow, its mouth facing out.
  const W = S * 0.45, H = S * 0.36, t = S * 0.03, z0 = S * 0.55, z1 = S * 2.25;
  k.truss(0, 0, S * 0.42, z0, S * 0.16, 1, S * 0.02);
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) k.box(t, t, z1 - z0, sx * W, sy * H, (z0 + z1) / 2, DARK);
  const n = 5;
  for (let i = 0; i <= n; i++) {
    const z = z0 + ((z1 - z0) * i) / n;
    for (const s of [-1, 1]) { k.box(W * 2, t, t, 0, s * H, z, DARK); if (i < n) k.box(t, H * 2, t, s * W, 0, z, DARK); }
    if (i < n && i % 2) k.strut(-W, -H, z, -W, H, z + (z1 - z0) / n, t * 0.8);
  }
  k.box(W * 2, S * 0.04, S * 0.18, 0, H, z0 + S * 0.05, PAINT); // yard office beam
  // A hull half built: spine, ribs, some plating, its drive near the back.
  const zs = z0 + S * 0.2, ze = z1 - S * 0.15;
  k.cyl(S * 0.05, S * 0.05, ze - zs, (zs + ze) / 2, DARK, 10);
  for (let i = 0; i < 7; i++) {
    const z = zs + ((ze - zs) * (i + 0.5)) / 7;
    k.add(new THREE.TorusGeometry(S * 0.2, S * 0.012, 4, 16, i > 3 ? Math.PI * 2 : Math.PI * 1.1).translate(0, 0, z), DARK, 0.9);
  }
  for (let i = 0; i < 3; i++) k.box(S * 0.016, S * 0.26, S * 0.18, S * 0.2, 0, ze - S * (0.15 + i * 0.2), HULL);
  k.cyl(S * 0.1, S * 0.17, S * 0.2, zs - S * 0.02, DARK, 14);
  // Gantry crane riding the top rails.
  k.box(W * 2.1, S * 0.05, S * 0.07, 0, H + S * 0.05, S * 1.5, HULL);
  k.box(S * 0.1, S * 0.08, S * 0.12, -S * 0.12, H, S * 1.5, DARK);
  k.box(S * 0.025, S * 0.26, S * 0.025, -S * 0.12, H - S * 0.16, S * 1.5, DARK);
  k.light(W, H, z1, NAV_G, S * 0.04); k.light(-W, -H, z1, NAV_R, S * 0.04);
  k.light(-W, H, z1, STROBE, S * 0.045);
}

function lab(k, S, level) {
  // Off to +x on a short truss: a laboratory drum with instruments.
  k.boom(S * 0.18, 0, S * 0.05, [1, 0, 0], S * 0.5, S * 0.06, HULL, 0.9);
  const x = S * 0.85;
  k.cyl(S * 0.17, S * 0.17, S * 0.48, S * 0.05, HULL, 16, x, 0);
  k.cyl(S * 0.12, S * 0.17, S * 0.08, S * 0.33, HULL, 16, x, 0);
  k.cyl(S * 0.175, S * 0.175, S * 0.14, -S * 0.05, PAINT, 16, x, 0);
  for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; k.box(S * 0.02, S * 0.02, S * 0.05, x + Math.cos(a) * S * 0.172, Math.sin(a) * S * 0.172, S * 0.15, WINDOW); }
  // Instrument booms with sensor pods, out where the station's noise is least.
  const [ax, ay, az] = k.boom(x + S * 0.12, S * 0.1, S * 0.2, [1, 0.6, 0.4], S * 0.5, S * 0.025);
  k.box(S * 0.07, S * 0.07, S * 0.07, ax, ay, az, DARK, 0.7);
  k.sphere(S * 0.04, ax, ay + S * 0.06, az, HULL, 1, 10);
  if (level >= 2) k.dish(S * 0.16, x + S * 0.1, -S * 0.18, -S * 0.12, [0.5, -0.7, 0.3]);
  if (level >= 3) {
    const [bx, by, bz] = k.boom(x + S * 0.17, -S * 0.02, -S * 0.1, [1, -0.15, -0.2], S * 0.8, S * 0.022);
    k.box(S * 0.14, S * 0.12, S * 0.16, bx, by, bz, HULL, 0.9); // an isolated equipment pod
    k.radiator(bx, by + S * 0.06, bz, S * 0.2, S * 0.12, Math.PI / 2, 2, S * 0.008);
  }
  k.light(x, S * 0.18, S * 0.33, STROBE, S * 0.04);
}

function bureau(k, S, level) {
  // Off to -x: an armoured operations block on a short neck.
  k.boom(-S * 0.18, 0, -S * 0.05, [-1, 0, 0], S * 0.38, S * 0.1, DARK, 0.8);
  const x = -S * 0.72;
  k.oct(S * 0.34, S * 0.3, S * 0.44, -S * 0.05, 0.9, x, 0);
  k.box(S * 0.36, S * 0.03, S * 0.3, x, S * 0.16, -S * 0.05, PAINT);
  for (const z of [-0.2, 0.1]) k.oct(S * 0.37, S * 0.33, S * 0.04, S * z, 1, x, 0, DARK);
  k.box(S * 0.01, S * 0.02, S * 0.12, x - S * 0.17, S * 0.02, -S * 0.05, WINDOW);
  // Secure comms: a laser-comm turret (a lens, not a gun) and a sensor mast.
  k.cyl(S * 0.05, S * 0.06, S * 0.06, S * 0.1, DARK, 12, x, S * 0.2);
  k.box(S * 0.08, S * 0.06, S * 0.06, x, S * 0.24, S * 0.1, HULL, 0.9);
  k.cyl(S * 0.022, S * 0.022, S * 0.01, S * 0.135, WINDOW, 10, x, S * 0.24);
  const [mx, my, mz] = k.boom(x - S * 0.1, -S * 0.12, -S * 0.15, [-0.6, -1, -0.2], S * 0.32, S * 0.02);
  k.sphere(S * 0.05, mx, my, mz, DARK, 0.7, 10);
  if (level >= 2) {
    k.dish(S * 0.11, x - S * 0.19, S * 0.06, -S * 0.15, [-1, 0.3, -0.3]);
    k.oct(S * 0.38, S * 0.06, S * 0.36, -S * 0.05, 1, x, -S * 0.18, DARK); // added armour
  }
  k.light(x - S * 0.17, S * 0.15, -S * 0.27, NAV_R, S * 0.035);
}

function guns(k, S, level) {
  // One mount per level, each facing outward on its own pylon.
  const dirs = [[0, 1], [0, -1], [-0.7, -0.7]];
  for (let i = 0; i < Math.min(level, 3); i++) {
    const [ux, uy] = dirs[i];
    const z = i === 2 ? -S * 0.2 : S * 0.1;
    const at = (d) => [ux * d, uy * d];
    k.boom(...at(S * 0.16), z, [ux, uy, 0], S * 0.32, S * 0.06, DARK, 0.85);
    const [x1, y1] = at(S * 0.36);
    k.box(Math.abs(uy) * S * 0.2 + Math.abs(ux) * S * 0.14, Math.abs(ux) * S * 0.2 + Math.abs(uy) * S * 0.14, S * 0.18, x1, y1, z, HULL, 0.85); // magazine
    k.box(Math.abs(uy) * S * 0.21 + S * 0.01, Math.abs(ux) * S * 0.21 + S * 0.01, S * 0.04, x1, y1, z, PAINT);
    const [x2, y2] = at(S * 0.5);
    k.sphere(S * 0.08, x2, y2, z, HULL, 0.9, 12); // turret housing
    for (const o of [-1, 1]) {
      const px = x2 + -uy * o * S * 0.03, py = y2 + ux * o * S * 0.03;
      k.boom(px, py, z, [ux, uy, 0.35], S * 0.36, S * 0.025, DARK, 0.6);
    }
    k.light(...at(S * 0.6), z - S * 0.06, NAV_R, S * 0.03);
  }
}

function habitat(k, S, level, done) {
  // Aft, past the power pod: a truss out to one spin ring per level, each
  // on a fixed bearing hub. The rings themselves go in `ring` (they turn).
  const n = Math.min(level, 3);
  const zs = [-1.15, -1.55, -1.95].slice(0, n).map((z) => z * S);
  k.truss(0, 0, zs[n - 1] - S * 0.12, -S * 0.75, S * 0.12, 2 + n, S * 0.016);
  const ring = kit(91 + level);
  for (const z of zs) {
    k.cyl(S * 0.16, S * 0.16, S * 0.2, z, DARK, 16);
    ring.hoop(S * 0.85, S * 0.16, S * 0.26, 36, z, 5, S * 0.16, S * 0.012);
  }
  if (!done) { for (const z of zs) k.hoop(S * 0.85, S * 0.16, S * 0.26, 24, z, 0, 0, 0); return null; }
  return ring;
}

/**
 * Where ships dock on each core layout, in units of the station's size: the
 * collars on the diagonals (clear of the module slots), and the direction a
 * docked ship sits out along (in the station's frame, so ships turn with it).
 */
export function stationPorts(core) {
  const out = [];
  for (const [i, a] of PORT_ANGLES.entries()) {
    const R = core === 1 ? 0.8 : core === 0 ? 0.36 : [0.26, 0.29, 0.26, 0.24][i];
    const z = core === 1 ? 0 : core === 0 ? -0.12 : [0.28, 0.0, -0.24, 0.0][i];
    out.push({ p: [Math.cos(a) * R, Math.sin(a) * R, z], n: [Math.cos(a), Math.sin(a), 0] });
  }
  return out;
}
