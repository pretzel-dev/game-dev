import * as THREE from 'three';
import { kit, singleHull, HULL, DARK, PAINT, WINDOW, NAV_R, NAV_G, STROBE } from './ships.js';
import { rng } from '../sim.js';

/**
 * Stations, three designs, built from the same parts kit and material as the
 * ships (so they share plating, paint and lights):
 *
 *  0. A heavy spin-gravity wheel on a docking spine: a ring of plated deck
 *     segments with window strips, spokes, a hub and docking arms.
 *  1. A long spine with twin habitat rings and copper solar wings.
 *  2. A blocky industrial hub with stacked decks, booms with pods, radiator
 *     fins and an antenna spike.
 *
 * Built along z (the spin axis). Windows light up once someone holds it;
 * the hull's owner-coloured paint shows whose it is.
 */
export function stationMesh(size, variant, uT) {
  const k = kit(variant * 31 + 7);
  const r = rng(variant * 31 + 7);
  const S = size;
  // A polygonal ring of deck segments.
  const ring = (R, w, d, n, kind = HULL, win = true, z = 0) => {
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const seg = new THREE.BoxGeometry(w, (2 * Math.PI * R) / n * 1.02, d);
      seg.rotateZ(a).translate(Math.cos(a) * R, Math.sin(a) * R, z);
      k.add(seg, i % 7 === 3 ? PAINT : kind, 0.9 + r() * 0.2);
      if (win && i % 2 === 0) {
        const wg = new THREE.BoxGeometry(0.004 * S, (2 * Math.PI * R) / n * 0.6, 0.012 * S);
        wg.rotateZ(a).translate(Math.cos(a) * (R + w / 2 + 0.001), Math.sin(a) * (R + w / 2 + 0.001), z + (r() - 0.5) * d * 0.6);
        k.add(wg, WINDOW);
      }
    }
  };
  const spoke = (R, t, a, z = 0, kind = DARK) => {
    const g = new THREE.BoxGeometry(t, R, t);
    g.translate(0, R / 2, 0).rotateZ(a).translate(0, 0, z);
    k.add(g, kind);
  };
  const cylZ = (rad, len, z, kind = HULL, seg = 16, x = 0, y = 0) => k.cyl(rad, rad, len, z, kind, seg, x, y);
  if (variant === 0) {
    ring(S, S * 0.2, S * 0.3, 40);
    ring(S * 0.8, S * 0.03, S * 0.32, 40, DARK, false);
    for (let i = 0; i < 6; i++) spoke(S * 0.8, S * 0.05, (i / 6) * Math.PI * 2 + 0.26);
    cylZ(S * 0.12, S * 2.6, 0, HULL);
    cylZ(S * 0.24, S * 0.45, S * 0.3, HULL);
    cylZ(S * 0.26, S * 0.06, S * 0.55, PAINT);
    cylZ(S * 0.2, S * 0.35, -S * 0.55, DARK);
    for (const z of [0.95, 1.15, 1.3]) cylZ(S * 0.2, S * 0.06, S * z, DARK);
    // Docking arms at the far end of the spine, with lights at their tips.
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2;
      const g = new THREE.BoxGeometry(S * 0.05, S * 0.35, S * 0.05);
      g.translate(0, S * 0.3, 0).rotateZ(a).translate(0, 0, S * 1.05);
      k.add(g, DARK);
      k.light(Math.cos(a + Math.PI / 2) * S * 0.48, Math.sin(a + Math.PI / 2) * S * 0.48, S * 1.05, i % 2 ? NAV_R : NAV_G, S * 0.04);
    }
    for (let i = 0; i < 3; i++) {
      const a = r() * Math.PI * 2;
      k.box(S * 0.12, S * 0.12, S * 0.24, Math.cos(a) * S * 1.12, Math.sin(a) * S * 1.12, 0, HULL);
    }
    k.light(0, 0, S * 1.32, STROBE, S * 0.05);
    k.light(0, 0, -S * 0.75, STROBE, S * 0.05);
  } else if (variant === 1) {
    cylZ(S * 0.07, S * 3.2, 0, DARK, 10);
    for (let i = 0; i < 7; i++) {
      const z = (i - 3) * S * 0.4 + (i > 2 ? S * 0.3 : -S * 0.3);
      cylZ(S * (0.12 + r() * 0.05), S * 0.26, z, i === 3 ? PAINT : HULL, 14, (r() - 0.5) * S * 0.1, (r() - 0.5) * S * 0.1);
      k.greeble(S * 0.2, S * 0.2, S * 0.26, 0, 0, z, 3);
    }
    for (const zz of [-0.13, 0.13]) {
      ring(S * 0.8, S * 0.1, S * 0.12, 32, HULL, true, zz * S);
      for (let i = 0; i < 4; i++) spoke(S * 0.8, S * 0.025, (i / 4) * Math.PI * 2 + (zz > 0 ? 0.4 : 0), zz * S);
    }
    // Solar wings: dark cells on a frame.
    for (const zz of [-1.35, 1.35]) {
      for (const sx of [-1, 1]) {
        k.box(S * 0.7, S * 0.03, S * 0.03, sx * S * 0.45, 0, zz * S, DARK);
        k.box(S * 0.02, S * 1.5, S * 0.3, sx * S * 0.95, 0, zz * S, DARK, 0.45);
        k.box(S * 0.024, S * 1.52, S * 0.012, sx * S * 0.95, 0, zz * S, HULL, 0.8);
      }
    }
    k.light(0, 0, S * 1.62, STROBE, S * 0.05);
    k.light(S * 1.2, 0, S * 1.35, NAV_G, S * 0.04);
    k.light(-S * 1.2, 0, S * 1.35, NAV_R, S * 0.04);
  } else {
    // A spindle: a long central core with three habitat rings of different
    // sizes stacked along it, a construction sphere frame at one end and a
    // docking cluster at the other.
    cylZ(S * 0.1, S * 3.0, 0, DARK, 12);
    for (const [z, R, n] of [[-0.75, 0.62, 28], [0, 0.95, 40], [0.75, 0.62, 28]]) {
      ring(S * R, S * 0.12, S * 0.16, n, HULL, true, z * S);
      for (let i = 0; i < 4; i++) spoke(S * R, S * 0.03, (i / 4) * Math.PI * 2 + z, z * S);
      cylZ(S * 0.18, S * 0.12, z * S, PAINT, 14);
    }
    // Construction frame: a lattice of hoops round the bow.
    for (let i = 0; i < 3; i++) {
      const g = new THREE.TorusGeometry(S * 0.32, S * 0.012, 4, 24).rotateY((i / 3) * Math.PI).translate(0, 0, S * 1.35);
      k.add(g, DARK);
    }
    // Docking cluster at the stern.
    cylZ(S * 0.2, S * 0.3, -S * 1.35, HULL, 14);
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + 0.4;
      k.box(S * 0.08, S * 0.08, S * 0.3, Math.cos(a) * S * 0.26, Math.sin(a) * S * 0.26, -S * 1.4, HULL);
      k.light(Math.cos(a) * S * 0.3, Math.sin(a) * S * 0.3, -S * 1.56, i % 2 ? NAV_R : NAV_G, S * 0.04);
    }
    k.light(0, 0, S * 1.6, STROBE, S * 0.05);
  }
  const geo = k.build(1);
  const mesh = singleHull(geo, uT);
  // Only the wheel spins quickly; the long and blocky designs turn slowly.
  mesh.userData.spin = variant === 0 ? 0.4 : 0.08;
  return mesh;
}

/**
 * Where ships can dock on each design, in units of the station's size: a
 * point on the hull and the direction a docked ship sits out along (in the
 * station's own frame, so docked ships turn with it).
 */
export function stationPorts(variant) {
  const out = [];
  const port = (x, y, z, nx, ny, nz) => out.push({ p: [x, y, z], n: [nx, ny, nz] });
  if (variant === 0) {
    // The tips of the docking arms at the end of the spine.
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + Math.PI / 2;
      port(Math.cos(a) * 0.5, Math.sin(a) * 0.5, 1.05, Math.cos(a), Math.sin(a), 0);
    }
  } else if (variant === 1) {
    // Both ends of the long spine.
    port(0, 0, 1.62, 0, 0, 1);
    port(0, 0, -1.62, 0, 0, -1);
  } else {
    // The docking cluster at the stern.
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + 0.4;
      port(Math.cos(a) * 0.34, Math.sin(a) * 0.34, -1.4, Math.cos(a), Math.sin(a), 0);
    }
  }
  return out;
}
