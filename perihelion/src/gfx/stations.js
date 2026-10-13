import * as THREE from 'three';
import { kit, singleHull, HULL, DARK, PAINT, NAV_R, NAV_G, STROBE } from './ships.js';
import { rng } from '../sim.js';

/** How many station designs there are (a station's design is its id modulo this). */
export const STATION_KINDS = 4;

/**
 * Stations, built from the same parts kit and material as the ships (so they
 * share plating, paint and lights). Built for zero g: nothing has an up, the
 * hub holds still, and only the crew's quarters turn (a ring or drum on its
 * own bearing, for spin gravity). Each looks added to over decades, with
 * modules and arrays wherever there was room.
 *
 *  0. Habitat: a big spin ring round a fixed spine, a docking node at one
 *     end, odd modules bolted on, solar arrays and radiators on a truss.
 *  1. Shipyard: an open framework cradle with a hull half built inside it,
 *     a gantry crane, a crew module and a small spin drum on a boom, and
 *     fabrication blocks and tanks behind.
 *  2. Refinery: stacked process blocks, an ore catcher on a long truss, a
 *     tank farm on one boom and radiator arrays on another. No ring: few
 *     crew.
 *  3. Bastion: an armoured citadel with gun turrets, missile cells and
 *     sensor masts, a crew ring round it, and the reactor aft behind a
 *     shield with radiators.
 *
 * Built along z (the station's axis). Windows light up once someone holds
 * it; owner-coloured paint shows whose it is. Returns the hub mesh; its
 * turning part, if any, is a child (`userData.rotor`, spun by the view).
 */
export function stationMesh(size, variant, uT) {
  const k = kit(variant * 31 + 7);
  const r = rng(variant * 31 + 7);
  const S = size;
  const cylZ = (rad, len, z, kind = HULL, seg = 16, x = 0, y = 0) => k.cyl(rad, rad, len, z, kind, seg, x, y);
  // A module standing out from the spine at angle a.
  const module = (rad, len, z, a, hubR, kind = HULL) => k.add(new THREE.CylinderGeometry(rad, rad, len, 12).translate(0, hubR + len / 2, 0).rotateZ(a - Math.PI / 2).translate(0, 0, z), kind, 0.9 + r() * 0.2);
  const rot = kit(variant * 31 + 9);
  let rotorAt = null, rotorSpin = 0;
  if (variant === 0) {
    cylZ(S * 0.11, S * 2.2, 0, HULL); // spine
    cylZ(S * 0.22, S * 0.34, 0, DARK); // ring bearing
    k.sphere(S * 0.18, 0, 0, S * 1.15, HULL, 1, 14); // docking node
    cylZ(S * 0.19, S * 0.05, S * 0.98, PAINT);
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2;
      k.boom(0, 0, S * 1.15, [Math.cos(a), Math.sin(a), 0], S * 0.42, S * 0.08, HULL);
      k.light(Math.cos(a) * S * 0.44, Math.sin(a) * S * 0.44, S * 1.15, i % 2 ? NAV_R : NAV_G, S * 0.04);
    }
    // Modules added over the years, wherever there was room.
    for (const [z, a, len, rad] of [[-0.42, 0.3, 0.5, 0.12], [-0.68, 2.4, 0.36, 0.1], [-0.52, 4.1, 0.6, 0.09], [0.55, 1.2, 0.3, 0.08]]) module(S * rad, S * len, S * z, a, S * 0.1);
    module(S * 0.06, S * 0.2, S * 0.55, 1.2, S * 0.4, PAINT);
    k.dish(S * 0.2, S * 0.24, S * 0.16, S * 0.85, [0.6, 0.5, 0.6]);
    // Aft: a truss with unequal solar arrays and a radiator.
    k.truss(0, 0, -S * 2.0, -S * 1.1, S * 0.14, 4, S * 0.016);
    k.boom(0, 0, -S * 1.75, [1, 0, 0], S * 0.95, S * 0.025);
    k.box(S * 0.6, S * 0.012, S * 0.38, S * 0.68, 0, -S * 1.75, DARK, 0.42);
    k.boom(0, 0, -S * 1.6, [-1, 0, 0], S * 0.6, S * 0.025);
    k.add(new THREE.BoxGeometry(S * 0.4, S * 0.012, S * 0.3).rotateX(0.6).translate(-S * 0.42, 0, -S * 1.6), DARK, 0.42);
    k.radiator(0, S * 0.07, -S * 1.4, S * 0.7, S * 0.42, Math.PI / 2 + 0.25, 4, S * 0.012);
    k.light(0, 0, S * 1.36, STROBE, S * 0.05);
    k.light(0, 0, -S * 2.05, STROBE, S * 0.05);
    rot.hoop(S * 0.95, S * 0.2, S * 0.3, 40, 0, 6, S * 0.22, S * 0.012);
    rotorAt = [0, 0, 0]; rotorSpin = 0.22;
  } else if (variant === 1) {
    // The cradle: an open framework of rails and frames.
    const W = S * 0.5, H = S * 0.4, t = S * 0.035;
    for (const sx of [-1, 1]) for (const sy of [-1, 1]) k.box(t, t, S * 2.4, sx * W, sy * H, 0, DARK);
    for (let i = 0; i <= 6; i++) {
      const z = -S * 1.2 + i * S * 0.4;
      for (const s of [-1, 1]) { k.box(W * 2, t, t, 0, s * H, z, DARK); k.box(t, H * 2, t, s * W, 0, z, DARK); }
      if (i < 6 && i % 2) k.add(new THREE.BoxGeometry(t * 0.7, t * 0.7, Math.hypot(H * 2, S * 0.4)).rotateX(Math.atan2(H * 2, S * 0.4)).translate(-W, 0, z + S * 0.2), DARK, 0.85);
    }
    // A hull half built: spine, ribs, some plating, its drive.
    cylZ(S * 0.06, S * 1.6, 0, DARK, 10);
    for (let i = 0; i < 7; i++) {
      const z = -S * 0.6 + i * S * 0.2;
      k.add(new THREE.TorusGeometry(S * 0.24, S * 0.014, 4, 18, i < 4 ? Math.PI * 2 : Math.PI * 1.2).translate(0, 0, z), DARK, 0.9);
    }
    for (let i = 0; i < 3; i++) k.box(S * 0.02, S * 0.3, S * 0.18, S * 0.24, (r() - 0.5) * S * 0.1, S * (0.0 + i * 0.2), i === 1 ? PAINT : HULL);
    k.box(S * 0.3, S * 0.02, S * 0.4, 0, -S * 0.24, -S * 0.3, HULL, 0.9);
    k.cyl(S * 0.12, S * 0.2, S * 0.22, -S * 0.92, DARK, 16);
    // A gantry crane across the top, its carriage partway along.
    k.box(W * 2.2, S * 0.05, S * 0.07, 0, H + S * 0.05, S * 0.3, PAINT);
    k.box(S * 0.1, S * 0.08, S * 0.12, -S * 0.15, H, S * 0.3, DARK);
    k.box(S * 0.025, S * 0.3, S * 0.025, -S * 0.15, H - S * 0.18, S * 0.3, DARK);
    // Crew module outside the frame.
    k.cyl(S * 0.14, S * 0.14, S * 0.6, -S * 0.2, HULL, 14, -W - S * 0.2, H * 0.5);
    k.cyl(S * 0.15, S * 0.15, S * 0.05, -S * 0.05, PAINT, 14, -W - S * 0.2, H * 0.5);
    k.windows(W + S * 0.2 + S * 0.141, H * 0.5, -S * 0.4, S * 0.0, 5, [-1]);
    // Fabrication blocks, tanks and a radiator behind.
    k.box(S * 0.4, S * 0.35, S * 0.3, S * 0.1, -S * 0.1, -S * 1.45, HULL);
    k.greeble(S * 0.4, S * 0.35, S * 0.3, S * 0.1, -S * 0.1, -S * 1.45, 6);
    k.sphere(S * 0.16, -S * 0.32, S * 0.2, -S * 1.48, HULL, 0.95, 14);
    k.sphere(S * 0.12, -S * 0.3, -S * 0.15, -S * 1.42, HULL, 1.05, 14);
    k.radiator(S * 0.3, -S * 0.25, -S * 1.45, S * 0.6, S * 0.36, -0.5, 3, S * 0.012);
    // A small spin drum for the yard crews, on an axle off one corner.
    k.boom(W, H, -S * 0.6, [1, 1, 0], S * 0.45, S * 0.03);
    cylZ(S * 0.05, S * 0.5, -S * 0.6, DARK, 10, W + S * 0.32, H + S * 0.32);
    rot.hoop(S * 0.28, S * 0.1, S * 0.22, 20, 0, 3, S * 0.05, S * 0.008);
    rotorAt = [W + S * 0.32, H + S * 0.32, -S * 0.6]; rotorSpin = 0.5;
    k.light(W, H, S * 1.2, NAV_G, S * 0.04); k.light(-W, -H, S * 1.2, NAV_R, S * 0.04);
    k.light(W, -H, -S * 1.2, STROBE, S * 0.05);
  } else if (variant === 2) {
    // Process blocks, stacked where they fitted.
    k.box(S * 0.5, S * 0.45, S * 0.6, 0, 0, 0);
    k.box(S * 0.35, S * 0.3, S * 0.4, S * 0.2, S * 0.3, S * 0.25, HULL, 0.9);
    k.box(S * 0.3, S * 0.3, S * 0.3, -S * 0.25, -S * 0.2, -S * 0.35, PAINT);
    k.greeble(S * 0.5, S * 0.45, S * 0.6, 0, 0, 0, 10);
    // Ore catcher: a funnel on a long truss.
    k.truss(0, 0, S * 0.3, S * 1.3, S * 0.13, 4, S * 0.016);
    k.add(new THREE.CylinderGeometry(S * 0.34, S * 0.08, S * 0.3, 18, 1, true).rotateX(Math.PI / 2).translate(0, 0, S * 1.45), DARK, 0.8);
    // Tank farm on one boom, radiator arrays on another.
    k.boom(-S * 0.25, 0, 0, [-1, 0, 0], S * 1.0, S * 0.05);
    for (const [x, y, rad] of [[-0.5, 0.18, 0.15], [-0.62, -0.2, 0.18], [-0.95, 0.15, 0.2], [-1.05, -0.2, 0.13]]) k.sphere(S * rad, S * x, S * y, 0, HULL, 0.85 + r() * 0.25, 14);
    k.boom(S * 0.25, 0, -S * 0.1, [1, 0, 0], S * 1.25, S * 0.04);
    k.radiator(S * 0.55, 0, -S * 0.1, S * 0.55, S * 0.5, Math.PI / 2 + 0.1, 4, S * 0.012);
    k.radiator(S * 0.85, 0, -S * 0.1, S * 0.5, S * 0.5, -Math.PI / 2, 4, S * 0.012);
    k.radiator(S * 1.15, 0, -S * 0.1, S * 0.45, S * 0.45, Math.PI / 2 - 0.25, 3, S * 0.012);
    // A docking spine aft.
    cylZ(S * 0.08, S * 0.9, -S * 0.75, DARK, 10);
    k.sphere(S * 0.14, 0, 0, -S * 1.2, HULL, 1, 14);
    k.dish(S * 0.14, -S * 0.2, S * 0.24, S * 0.2, [-0.3, 1, 0.3]);
    k.light(0, S * 0.15, -S * 1.2, NAV_G, S * 0.04); k.light(0, -S * 0.15, -S * 1.2, NAV_R, S * 0.04);
    k.light(-S * 1.2, 0, 0, STROBE, S * 0.05);
  } else {
    // The citadel: armour all round, gun turrets above and below.
    k.oct(S * 0.7, S * 0.7, S * 1.0, 0, 0.85);
    for (const z of [-0.3, 0.1]) k.oct(S * 0.74, S * 0.74, S * 0.04, S * z, 1, 0, 0, DARK);
    k.box(S * 0.5, S * 0.05, S * 0.3, 0, S * 0.35, S * 0.3, PAINT);
    for (const [y, z, up] of [[0.34, -0.35, 1], [-0.34, 0.3, -1], [-0.34, -0.4, -1]]) k.turret(0, S * y, S * z, up, S * 4.5);
    k.cells(S * 0.12, S * 0.36, -S * 0.05, 3, 4, S * 0.06);
    // Sensor masts with domes.
    const [sx, sy, sz] = k.boom(S * 0.2, S * 0.3, S * 0.35, [0.4, 1, 0.2], S * 0.55, S * 0.03);
    k.sphere(S * 0.07, sx, sy, sz, DARK, 0.7, 12);
    const [tx, ty, tz] = k.boom(-S * 0.3, -S * 0.1, S * 0.2, [-1, -0.3, 0.1], S * 0.4, S * 0.025);
    k.sphere(S * 0.05, tx, ty, tz, DARK, 0.7, 12);
    // Forward: docking node; aft: shield, reactor, radiators.
    cylZ(S * 0.2, S * 0.4, S * 0.7, HULL);
    k.sphere(S * 0.16, 0, 0, S * 1.0, HULL, 1, 14);
    k.add(new THREE.CylinderGeometry(S * 0.42, S * 0.26, S * 0.05, 18).rotateX(Math.PI / 2).translate(0, 0, -S * 0.6), DARK, 0.75);
    cylZ(S * 0.24, S * 0.4, -S * 0.85, DARK);
    k.radiator(S * 0.15, 0, -S * 0.85, S * 0.9, S * 0.5, 0.4, 4, S * 0.012);
    k.radiator(-S * 0.15, 0, -S * 0.8, S * 0.7, S * 0.4, Math.PI + 0.6, 3, S * 0.012);
    k.light(S * 0.3, 0, S * 1.0, NAV_G, S * 0.04); k.light(-S * 0.3, 0, S * 1.0, NAV_R, S * 0.04);
    k.light(0, 0, -S * 1.1, STROBE, S * 0.05);
    rot.hoop(S * 0.64, S * 0.14, S * 0.24, 32, 0, 4, S * 0.4, S * 0.01);
    rotorAt = [0, 0, -S * 0.12]; rotorSpin = 0.32;
  }
  const mesh = singleHull(k.build(1, 7 / Math.max(S * 2.5, 1)), uT);
  mesh.userData.spin = 0.015; // a slow drift: nothing in zero g needs to hold still
  if (rotorAt) {
    const ring = singleHull(rot.build(1, 7 / Math.max(S * 2.5, 1)), uT);
    ring.position.set(...rotorAt);
    ring.userData.spin = rotorSpin;
    mesh.add(ring);
    mesh.userData.rotor = ring;
    const set = mesh.userData.set;
    mesh.userData.set = (color, sunV, on) => { set(color, sunV, on); ring.userData.set(color, sunV, on); };
  }
  return mesh;
}

/**
 * Where ships can dock on each design, in units of the station's size: a
 * point on the (fixed) hub and the direction a docked ship sits out along
 * (in the station's own frame, so docked ships turn with it).
 */
export function stationPorts(variant) {
  const out = [];
  const port = (x, y, z, nx, ny, nz) => out.push({ p: [x, y, z], n: [nx, ny, nz] });
  if (variant === 0) {
    // The arms round the docking node.
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2;
      port(Math.cos(a) * 0.46, Math.sin(a) * 0.46, 1.15, Math.cos(a), Math.sin(a), 0);
    }
  } else if (variant === 1) {
    // Alongside the cradle.
    port(0.56, 0, 0.9, 1, 0, 0);
    port(-0.56, -0.2, 0.7, -1, 0, 0);
    port(0, -0.46, 0.4, 0, -1, 0);
  } else if (variant === 2) {
    // Round the docking node aft.
    port(0, 0.16, -1.2, 0, 1, 0);
    port(0, -0.16, -1.2, 0, -1, 0);
    port(0.16, 0, -1.2, 1, 0, 0);
  } else {
    // Round the docking node forward.
    port(0.18, 0, 1.0, 1, 0, 0);
    port(-0.18, 0, 1.0, -1, 0, 0);
    port(0, 0.18, 1.0, 0, 1, 0);
  }
  return out;
}
