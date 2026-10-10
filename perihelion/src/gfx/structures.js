import * as THREE from 'three';
import { kit, singleHull, HULL, DARK, PAINT, WINDOW, NAV_R, NAV_G, STROBE } from './ships.js';
import { rng } from '../sim.js';

/**
 * Buildings, from the same parts kit as ships and stations (plating, owner's
 * paint, lit windows), each growing visibly with its upgrade level. Finished
 * ones use the hull material; ones being built (or scrapped) show as a
 * hologram (`ghost`). Surface buildings are built with +Y as "up"; orbital
 * ones (yard, skimmers) in the XY plane around the world.
 */
export function structureMesh(type, b, k, done, level, uT, ghost, color) {
  const s = Math.max(0.25, b.size * 0.14);
  const K = kit(b.id * 17 + k * 101 + level);
  const r = K.r;
  const orbital = type === 'shipyard' || type === 'skimmer';
  if (type === 'shipyard') {
    // A solid gantry ring in low orbit, with three dock cradles on it, each
    // holding a hull under construction, and lights on the cradles.
    const R = b.size * 1.35;
    K.add(new THREE.TorusGeometry(R, s * 0.06, 8, 96), HULL);
    K.add(new THREE.TorusGeometry(R, s * 0.025, 6, 96).translate(0, 0, s * 0.16), DARK);
    K.add(new THREE.TorusGeometry(R, s * 0.025, 6, 96).translate(0, 0, -s * 0.16), DARK);
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 + 0.4;
      const place = (geo) => geo.rotateZ(a).translate(Math.cos(a) * R, Math.sin(a) * R, 0);
      // Cradle: two rails outboard of the ring and cross-braces, all in the ring's plane.
      for (const sz of [-1, 1]) K.add(place(new THREE.BoxGeometry(s * 0.9, s * 0.05, s * 0.05).translate(s * 0.45, 0, sz * s * 0.16)), DARK);
      for (const x of [0.2, 0.55, 0.88]) K.add(place(new THREE.BoxGeometry(s * 0.04, s * 0.04, s * 0.36).translate(s * x, 0, 0)), HULL);
      K.add(place(new THREE.BoxGeometry(s * 0.5, s * 0.1, s * 0.12).translate(s * 0.52, 0, 0)), i === 0 ? PAINT : HULL); // the hull being built
      K.add(place(new THREE.BoxGeometry(s * 0.04, s * 0.04, s * 0.04).translate(s * 0.9, 0, s * 0.18)), i % 2 ? NAV_R : NAV_G);
    }
  } else if (type === 'skimmer') {
    // Scoop craft skimming the upper cloud deck, one per level: a wide intake
    // cowl, a fuel tank behind, and a small drive.
    const rad = b.size * 1.06;
    for (let i = 0; i < level; i++) {
      const a = (i / level) * Math.PI * 2 + k;
      const place = (geo) => geo.rotateZ(a + Math.PI / 2).translate(Math.cos(a) * rad, Math.sin(a) * rad, 0);
      K.add(place(new THREE.CylinderGeometry(s * 0.14, s * 0.26, s * 0.35, 10)), HULL);
      K.add(place(new THREE.CylinderGeometry(s * 0.15, s * 0.15, s * 0.04, 10).translate(0, s * 0.18, 0)), PAINT);
      K.add(place(new THREE.SphereGeometry(s * 0.17, 10, 8).translate(0, -s * 0.3, 0)), DARK);
      K.add(place(new THREE.CylinderGeometry(s * 0.05, s * 0.09, s * 0.1, 8).translate(0, -s * 0.5, 0)), DARK);
      K.add(place(new THREE.BoxGeometry(s * 0.03, s * 0.03, s * 0.03).translate(0, -s * 0.56, 0)), STROBE);
    }
  } else if (type === 'defence') {
    // A gun battery: an armoured octagonal base, a turret housing, one long
    // barrel per level, and a fire-control dome from level 2.
    const w = 1 + (level - 1) * 0.25;
    K.add(new THREE.CylinderGeometry(s * 0.5 * w, s * 0.62 * w, s * 0.22, 8).translate(0, s * 0.11, 0), DARK);
    K.add(new THREE.CylinderGeometry(s * 0.52 * w, s * 0.52 * w, s * 0.04, 8).translate(0, s * 0.23, 0), PAINT);
    K.box(s * 0.55 * w, s * 0.22, s * 0.5, 0, s * 0.36, 0, HULL);
    for (let i = 0; i < level; i++) {
      const x = (i - (level - 1) / 2) * s * 0.16;
      K.add(new THREE.BoxGeometry(s * 0.06, s * 0.06, s * (0.8 + level * 0.12)).rotateX(-0.45).translate(x, s * 0.52, s * 0.45), DARK);
    }
    if (level > 1) K.add(new THREE.SphereGeometry(s * 0.16, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2).translate(-s * 0.32 * w, s * 0.47, -s * 0.15), HULL);
    K.box(s * 0.04, s * 0.04, s * 0.04, 0, s * 0.5, -s * 0.24, NAV_R);
  } else if (type === 'exchange') {
    // Orbital exchange: a tapering spire, a tether up to a counting-house ring
    // that grows a deck per level, windows lit.
    K.add(new THREE.CylinderGeometry(s * 0.1, s * 0.34, s * 1.6, 8).translate(0, s * 0.8, 0), HULL);
    K.add(new THREE.CylinderGeometry(s * 0.36, s * 0.42, s * 0.12, 8).translate(0, s * 0.06, 0), PAINT);
    K.add(new THREE.CylinderGeometry(s * 0.015, s * 0.015, s * 3, 4).translate(0, s * 3.1, 0), DARK);
    const R = s * (0.42 + level * 0.12);
    for (let d = 0; d < level; d++) {
      K.add(new THREE.TorusGeometry(R, s * 0.07, 8, 32).rotateX(Math.PI / 2).translate(0, s * (4.6 + d * 0.18), 0), d === 0 ? PAINT : HULL);
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;
        K.box(s * 0.03, s * 0.025, s * 0.05, Math.cos(a) * (R + s * 0.07), s * (4.6 + d * 0.18), Math.sin(a) * (R + s * 0.07), WINDOW);
      }
    }
    K.add(new THREE.CylinderGeometry(s * 0.14, s * 0.14, s * 0.25, 8).translate(0, s * 4.6, 0), HULL);
    K.box(s * 0.05, s * 0.05, s * 0.05, 0, s * 4.8 + level * s * 0.18, 0, STROBE);
  } else if (type === 'lab') {
    // Research station: a low block with a window band, a mast with one
    // dish per level, and an antenna.
    K.box(s * 0.8, s * 0.28, s * 0.65, 0, s * 0.14, 0, HULL);
    K.box(s * 0.82, s * 0.05, s * 0.67, 0, s * 0.3, 0, PAINT);
    for (let i = 0; i < 6; i++) K.box(s * 0.08, s * 0.04, s * 0.01, (i - 2.5) * s * 0.12, s * 0.16, s * 0.33, WINDOW);
    K.add(new THREE.CylinderGeometry(s * 0.05, s * 0.08, s * 0.9, 6).translate(s * 0.2, s * 0.75, 0), DARK);
    for (let i = 0; i < level; i++) {
      const dish = new THREE.SphereGeometry(s * (0.3 - i * 0.05), 14, 6, 0, Math.PI * 2, 0, Math.PI / 3.2).rotateX(Math.PI - 0.6).rotateY(i * 2.1);
      K.add(dish.translate(s * 0.2, s * (0.75 + i * 0.3), 0), HULL);
    }
    K.add(new THREE.CylinderGeometry(s * 0.01, s * 0.01, s * 0.6, 3).translate(-s * 0.28, s * 0.6, -s * 0.2), DARK);
    K.box(s * 0.04, s * 0.04, s * 0.04, -s * 0.28, s * 0.92, -s * 0.2, STROBE);
  } else {
    // Mine: a pad that widens per level, a derrick and ore hopper per level,
    // and a conveyor between them, with lit control cabins.
    const W = s * (0.8 + (level - 1) * 0.4);
    K.box(W, s * 0.1, s * 0.7, 0, s * 0.05, 0, DARK);
    K.box(W, s * 0.03, s * 0.05, 0, s * 0.12, s * 0.3, PAINT);
    K.box(W * 0.9, s * 0.05, s * 0.08, 0, s * 0.2, -s * 0.15, HULL); // conveyor
    for (let i = 0; i < level; i++) {
      const x = (i - (level - 1) / 2) * s * 0.4;
      // Derrick: four legs leaning together.
      for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
        K.add(new THREE.BoxGeometry(s * 0.025, s * 0.85, s * 0.025).rotateZ(dx * 0.12).rotateX(-dz * 0.12).translate(x + dx * s * 0.06, s * 0.52, dz * s * 0.06), DARK);
      }
      K.add(new THREE.CylinderGeometry(s * 0.1, s * 0.05, s * 0.18, 8).translate(x, s * 0.28, -s * 0.15), HULL); // hopper
      K.box(s * 0.12, s * 0.1, s * 0.1, x + s * 0.12, s * 0.15, s * 0.18, HULL);
      K.box(s * 0.08, s * 0.03, s * 0.005, x + s * 0.12, s * 0.17, s * 0.23, WINDOW);
      K.box(s * 0.03, s * 0.03, s * 0.03, x, s * 0.97, 0, STROBE);
    }
  }
  const geo = K.build(1);
  let mesh;
  if (done) {
    mesh = singleHull(geo, uT);
    mesh.userData.set(color, 1, true);
  } else mesh = new THREE.Mesh(geo, ghost);
  const g = new THREE.Group();
  g.add(mesh);
  if (orbital) {
    g.rotation.x = type === 'shipyard' ? Math.PI / 2 + 0.35 : Math.PI / 2 + 0.25 + k * 0.3;
    return g;
  }
  const rr = rng(b.id * 17 + k * 101 + (type === 'mine' ? 5 : 0));
  const dir = new THREE.Vector3(rr() - 0.5, (rr() - 0.5) * 0.9, rr() - 0.5).normalize();
  g.position.copy(dir).multiplyScalar(b.size * (b.kind === 'asteroid' ? 1.05 : 0.99));
  g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
  void r;
  return g;
}
