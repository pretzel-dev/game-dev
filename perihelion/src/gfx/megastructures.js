import * as THREE from 'three';
import { kit, singleHull, HULL, DARK, PAINT, WINDOW, NAV_R, NAV_G, STROBE, SOLAR } from './ships.js';
import { SHADOW_LAYER } from './shadow.js';

/**
 * Megaprojects: one great structure per world, from the same parts kit as
 * ships, stations and buildings. Each is built in three stages; while the
 * project runs, finished stages are solid and the rest show as a hologram,
 * so you can watch it go up.
 *
 *  - Sun-diver collectors: a receiving station turned to face the sun, its
 *    great dish catching power beamed from heat-shielded divers sunward.
 *  - Mass driver: a long electromagnetic launch rail climbing off the
 *    surface on trestles, coil rings along it, a power plant at its foot.
 *  - Ring yard: a full truss ring round the gas giant with berths and hubs.
 *  - Fortress world: six armoured battle platforms ringing the world.
 *  - Ansible array: a Y of long trusses with a dish at each tip and a
 *    correlator hub at the centre, facing out from the world.
 *  - War college: an academy station with a training wheel, a spire of
 *    simulator decks, a target range and trainers docked.
 *
 * Returns a group to add to the world's (non-turning) group, with
 * userData: stages [[solid, ghost], ...], set(color, sun) and faceSun.
 */
export function megaMesh(key, b, uT, ghostMat) {
  const R = b.size;
  const M = 0.5; // the structures' scale: a little over a station
  const stages = [kit(11), kit(12), kit(13)];
  const [A, B, C] = stages;
  let place = new THREE.Matrix4();
  let faceSun = false, surface = false;
  let spin = null;

  if (key === 'sundiver') {
    // Local +z points at the sun (the view turns the group each frame).
    // I: the framework, a great ring of truss with its spokes, and the
    // receiving station behind it. II: the collector field, hexagonal
    // panels filling the ring. III: the receiver dish, the heat-shielded
    // divers far sunward beaming power home, and the lights.
    faceSun = true;
    const z0 = R * 1.6, Rf = M * 1.7;
    A.add(new THREE.TorusGeometry(Rf, M * 0.04, 6, 64).translate(0, 0, z0), DARK, 0.8);
    A.add(new THREE.TorusGeometry(Rf * 0.98, M * 0.02, 4, 64).translate(0, 0, z0 - M * 0.12), DARK, 0.7);
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2, c = Math.cos(a), sn = Math.sin(a);
      A.strut(c * M * 0.2, sn * M * 0.2, z0 - M * 0.05, c * Rf, sn * Rf, z0, M * 0.025);
      A.strut(c * Rf, sn * Rf, z0, c * Rf * 0.98, sn * Rf * 0.98, z0 - M * 0.12, M * 0.015);
    }
    A.cyl(M * 0.18, M * 0.18, M * 0.8, z0 - M * 0.5, HULL, 16);
    A.cyl(M * 0.19, M * 0.19, M * 0.12, z0 - M * 0.4, PAINT, 16);
    for (const a of [0, Math.PI / 2, Math.PI, Math.PI * 1.5]) A.radiator(Math.cos(a) * M * 0.18, Math.sin(a) * M * 0.18, z0 - M * 0.6, M * 0.8, M * 0.4, a, 3, M * 0.012);
    // The collector field: hex tiles on a hex grid, inside the ring.
    const hx = M * 0.21;
    for (let q = -8; q <= 8; q++) for (let r = -8; r <= 8; r++) {
      const x = hx * 1.5 * q, y = hx * Math.sqrt(3) * (r + q / 2);
      const d = Math.hypot(x, y);
      if (d > Rf * 0.93 || d < M * 0.45) continue;
      B.add(new THREE.CylinderGeometry(hx * 0.95, hx * 0.95, M * 0.012, 6).rotateX(Math.PI / 2).translate(x, y, z0 + M * 0.02), SOLAR, 0.9 + ((q * 7 + r * 3) % 5) * 0.04);
    }
    C.dish(M * 0.45, 0, 0, z0 + M * 0.05, [0, 0, 1]);
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 + 0.4;
      const x = Math.cos(a) * M * 0.6, y = Math.sin(a) * M * 0.6, z = z0 + M * (2.0 + i * 0.35);
      C.add(new THREE.CylinderGeometry(M * 0.01, M * 0.22, M * 0.16, 16).rotateX(Math.PI / 2).translate(x, y, z), HULL, 1.15); // shield
      C.cyl(M * 0.05, M * 0.06, M * 0.22, z - M * 0.18, DARK, 10, x, y);
      C.box(M * 0.12, M * 0.02, M * 0.08, x, y, z - M * 0.22, PAINT);
    }
    for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; C.light(Math.cos(a) * Rf, Math.sin(a) * Rf, z0 + M * 0.05, i % 2 ? STROBE : NAV_G, M * 0.04); }
  } else if (key === 'massdriver') {
    // Built on the surface (local +y up), along local x, rising toward +x.
    surface = true;
    const L = M * 4.6;
    const ground = (x) => Math.sqrt(Math.max(0, R * R - x * x)) - R; // the world curves away under it
    const rail = (x) => M * 0.12 + ((x + L / 2) / L) * M * 0.75;
    const n = 12;
    for (let i = 0; i <= n; i++) {
      const x = -L / 2 + (L * i) / n, y = rail(x);
      for (const sz of [-1, 1]) A.strut(x, y, sz * M * 0.08, x, ground(x) - M * 0.02, sz * M * 0.14, M * 0.03); // trestle
      if (i < n) {
        const x2 = x + L / n;
        for (const sz of [-1, 1]) A.strut(x, y, sz * M * 0.05, x2, rail(x2), sz * M * 0.05, M * 0.04, HULL, 0.9); // the rails
        B.add(new THREE.TorusGeometry(M * 0.11, M * 0.025, 6, 16).rotateY(Math.PI / 2).rotateZ(Math.atan2(M * 0.75, L)).translate(x + L / n / 2, (y + rail(x2)) / 2, 0), i % 3 === 0 ? PAINT : DARK, 0.9); // coils
      }
    }
    // Power plant and capacitor banks at the foot, with radiators.
    const fx = -L / 2 - M * 0.35;
    C.box(M * 0.45, M * 0.3, M * 0.5, fx, ground(fx) + M * 0.15, 0, HULL);
    C.box(M * 0.47, M * 0.05, M * 0.52, fx, ground(fx) + M * 0.3, 0, PAINT);
    for (const z of [-0.18, 0, 0.18]) C.add(new THREE.CylinderGeometry(M * 0.06, M * 0.06, M * 0.25, 10).translate(fx - M * 0.32, ground(fx) + M * 0.12, M * z), HULL, 0.9);
    for (const z of [-0.32, 0.32]) C.radiator(fx, ground(fx) + M * 0.28, M * z, M * 0.4, M * 0.3, Math.PI / 2, 2, M * 0.012);
    C.box(M * 0.2, M * 0.07, M * 0.07, -L * 0.2, rail(-L * 0.2) + M * 0.06, 0, PAINT); // a capsule on the rail
    C.light(L / 2, rail(L / 2) + M * 0.06, 0, STROBE, M * 0.04);
    // The muzzle: a launch cradle on a tower, and lights along the rail.
    const mx = L / 2;
    for (const sz of [-1, 1]) C.strut(mx, rail(mx), sz * M * 0.12, mx, ground(mx) - M * 0.02, sz * M * 0.25, M * 0.05);
    C.add(new THREE.TorusGeometry(M * 0.16, M * 0.04, 6, 18).rotateY(Math.PI / 2).rotateZ(Math.atan2(M * 0.75, L)).translate(mx, rail(mx), 0), PAINT, 1);
    for (let i = 1; i < 6; i++) { const x = -L / 2 + (L * i) / 6; C.light(x, rail(x) + M * 0.14, M * 0.1, i % 2 ? NAV_G : NAV_R, M * 0.03); }
  } else if (key === 'ringyard') {
    // A full truss ring round the giant (in its equatorial plane).
    const Rr = R * 1.45, w = M * 0.2;
    for (const [dr, dy] of [[-w, -w], [-w, w], [w, -w], [w, w]]) A.add(new THREE.TorusGeometry(Rr + dr, M * 0.03, 5, 160).rotateX(Math.PI / 2).translate(0, dy, 0), DARK);
    A.add(new THREE.TorusGeometry(Rr, M * 0.06, 6, 160).rotateX(Math.PI / 2).scale(1, 0.4, 1), HULL, 0.9); // the service way
    for (let i = 0; i < 72; i++) {
      const a = (i / 72) * Math.PI * 2, c = Math.cos(a), s = Math.sin(a);
      A.strut(c * (Rr - w), -w, s * (Rr - w), c * (Rr + w), w, s * (Rr + w), M * 0.03);
      A.strut(c * (Rr - w), w, s * (Rr - w), c * (Rr - w), -w, s * (Rr - w), M * 0.025);
      A.strut(c * (Rr + w), w, s * (Rr + w), c * (Rr + w), -w, s * (Rr + w), M * 0.025);
      if (i % 12 === 0) A.box(M * 0.5, M * 0.04, M * 0.5, c * Rr, w + M * 0.02, s * Rr, PAINT); // deck plates in the owner's colour
    }
    // Three hubs on the ring, and six berths with hulls in them.
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2;
      B.add(new THREE.CylinderGeometry(M * 0.3, M * 0.3, M * 0.7, 16).translate(Math.cos(a) * Rr, 0, Math.sin(a) * Rr), HULL);
      B.add(new THREE.CylinderGeometry(M * 0.31, M * 0.31, M * 0.15, 16).translate(Math.cos(a) * Rr, 0, Math.sin(a) * Rr), PAINT);
      B.radiator(Math.cos(a) * Rr, M * 0.3, Math.sin(a) * Rr, M * 0.6, M * 0.4, Math.PI / 2, 3, M * 0.015);
      B.light(Math.cos(a) * Rr, M * 0.22, Math.sin(a) * Rr, STROBE, M * 0.04);
    }
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + Math.PI / 6, c = Math.cos(a), sn = Math.sin(a);
      const P = new THREE.Vector3(c * (Rr + M * 0.45), 0, sn * (Rr + M * 0.45));
      const T = new THREE.Vector3(-sn, 0, c), U = new THREE.Vector3(c, 0, sn), Y = new THREE.Vector3(0, 1, 0);
      // An open berth frame along the ring, a hull in it.
      const hl = M * 0.45, hr = M * 0.2, hy = M * 0.2;
      const pt = (a1, b1, c1) => P.clone().addScaledVector(T, a1).addScaledVector(U, b1).addScaledVector(Y, c1);
      const edge = (p, q) => C.strut(p.x, p.y, p.z, q.x, q.y, q.z, M * 0.014);
      for (const b1 of [-hr, hr]) for (const c1 of [-hy, hy]) edge(pt(-hl, b1, c1), pt(hl, b1, c1));
      for (const a1 of [-hl, hl]) for (const c1 of [-hy, hy]) edge(pt(a1, -hr, c1), pt(a1, hr, c1));
      for (const a1 of [-hl, hl]) for (const b1 of [-hr, hr]) edge(pt(a1, b1, -hy), pt(a1, b1, hy));
      const hull = new THREE.CylinderGeometry(M * 0.1, M * 0.1, M * 0.7, 10).applyQuaternion(new THREE.Quaternion().setFromUnitVectors(Y, T)).translate(P.x, P.y, P.z);
      C.add(hull, i % 2 ? HULL : PAINT);
      C.strut(c * (Rr + w), 0, sn * (Rr + w), c * (Rr + M * 0.25), 0, sn * (Rr + M * 0.25), M * 0.05);
      // A crane over each berth, and work lights.
      const top = pt(0, -hr, hy + M * 0.25), arm = pt(hl * 0.6, 0, hy + M * 0.25);
      C.strut(P.x, P.y + hy, P.z, top.x, top.y, top.z, M * 0.03);
      C.strut(top.x, top.y, top.z, arm.x, arm.y, arm.z, M * 0.025, HULL, 0.9);
      for (const a1 of [-hl, hl]) { const lp = pt(a1, hr, hy); C.light(lp.x, lp.y, lp.z, WINDOW, M * 0.035); }
    }
  } else if (key === 'citadel') {
    // Six armoured battle platforms in a ring round the world: hexagonal
    // casemates with twin heavy guns facing out, a radar dome and radiators.
    const Rr = R * 1.4, P = M * 1.8;
    for (let i = 0; i < 6; i++) {
      const K = stages[Math.floor(i / 2)];
      const a = (i / 6) * Math.PI * 2 + 0.3, c = Math.cos(a), s = Math.sin(a);
      const x = c * Rr, z = s * Rr;
      K.add(new THREE.CylinderGeometry(P * 0.24, P * 0.28, P * 0.14, 6).translate(x, 0, z), HULL);
      K.add(new THREE.CylinderGeometry(P * 0.29, P * 0.29, P * 0.03, 6).translate(x, -P * 0.07, z), DARK);
      K.add(new THREE.CylinderGeometry(P * 0.245, P * 0.245, P * 0.03, 6).translate(x, P * 0.06, z), PAINT);
      for (const o of [-1, 1]) {
        const ox = x + -s * o * P * 0.1, oz = z + c * o * P * 0.1;
        K.add(new THREE.CylinderGeometry(P * 0.06, P * 0.07, P * 0.05, 10).translate(ox, P * 0.08, oz), DARK);
        K.box(P * 0.1, P * 0.07, P * 0.1, ox, P * 0.13, oz, HULL, 0.85);
        K.boom(ox + c * P * 0.04, P * 0.14, oz + s * P * 0.04, [c, 0.12, s], P * 0.36, P * 0.03, DARK, 0.6);
      }
      K.boom(x - c * P * 0.12, P * 0.07, z - s * P * 0.12, [0, 1, 0], P * 0.14, P * 0.02);
      K.sphere(P * 0.05, x - c * P * 0.12, P * 0.23, z - s * P * 0.12, HULL, 1.1, 10);
      K.radiator(x - c * P * 0.26, 0, z - s * P * 0.26, P * 0.22, P * 0.14, Math.PI / 2, 2, P * 0.01);
      K.light(x, -P * 0.1, z, NAV_R, P * 0.03);
    }
    // Picket satellites on the ring between the platforms: sensors and point defence.
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 + 0.3 + Math.PI / 12, c = Math.cos(a), s = Math.sin(a);
      C.sphere(P * 0.04, c * Rr, P * 0.02, s * Rr, HULL, 1.05, 10);
      C.box(P * 0.12, P * 0.01, P * 0.05, c * Rr, P * 0.02, s * Rr, SOLAR);
      C.light(c * Rr, P * 0.07, s * Rr, NAV_R, P * 0.02);
    }
  } else if (key === 'array') {
    // In orbit (local +y away from the world): a Y of trusses, a dish at each tip.
    place = orbitAt(R * 1.6, 0.9);
    A.sphere(M * 0.16, 0, 0, 0, HULL, 1, 16);
    A.cyl(M * 0.1, M * 0.1, M * 0.5, 0, DARK, 12);
    A.cyl(M * 0.17, M * 0.17, M * 0.06, 0, PAINT, 16);
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 + Math.PI / 2, c = Math.cos(a), s = Math.sin(a);
      const L = M * 1.2;
      for (const [ox, oz] of [[0.05, 0.05], [-0.05, 0.05], [0, -0.06]]) A.strut(c * M * 0.15 + ox * M * -s, oz * M, s * M * 0.15 + ox * M * c, c * L + ox * M * -s, oz * M, s * L + ox * M * c, M * 0.018);
      const K = i < 2 ? B : C;
      K.dish(M * 0.38, c * L, 0, s * L, [c * 0.25, 1, s * 0.25]);
      K.box(M * 0.12, M * 0.08, M * 0.12, c * L, -M * 0.06, s * L, HULL, 0.9);
    }
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 + Math.PI / 2, c = Math.cos(a), s = Math.sin(a);
      for (const f of [0.45, 0.8]) C.dish(M * 0.14, c * M * 1.2 * f, M * 0.06, s * M * 1.2 * f, [c * 0.4, 1, s * 0.4]);
    }
    C.cyl(M * 0.03, M * 0.04, M * 0.2, -M * 0.35, HULL, 10); // laser link
    C.light(0, M * 0.2, 0, STROBE, M * 0.04);
  } else if (key === 'college') {
    // In orbit: a spire of simulator decks through a training wheel, a target range and trainers.
    place = orbitAt(R * 1.55, 2.4);
    A.cyl(M * 0.1, M * 0.1, M * 1.3, 0, HULL, 14);
    for (const z of [-0.45, -0.2, 0.25, 0.5]) A.cyl(M * 0.17, M * 0.17, M * 0.1, M * z, z > 0 ? PAINT : HULL, 16);
    for (const z of [0.38]) A.add(new THREE.SphereGeometry(M * 0.15, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2).rotateX(Math.PI / 2).translate(0, 0, M * z), HULL, 1.1);
    for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; A.box(M * 0.03, M * 0.03, M * 0.05, Math.cos(a) * M * 0.172, Math.sin(a) * M * 0.172, M * 0.25, WINDOW); }
    B.cyl(M * 0.14, M * 0.14, M * 0.12, 0, DARK, 16); // the wheel's bearing
    for (let i = 0; i < 4; i++) { const a = (i / 4) * Math.PI * 2; B.box(M * 0.1, M * 0.1, M * 0.14, Math.cos(a) * M * 0.2, Math.sin(a) * M * 0.2, -M * 0.62, HULL, 0.9); } // docking bays
    const W = kit(14);
    W.hoop(M * 0.75, M * 0.12, M * 0.18, 40, 0, 4, M * 0.1, M * 0.012);
    spin = W;
    for (let i = 0; i < 8; i++) C.box(M * 0.06, M * 0.06, M * 0.06, M * (1.1 + (i % 3) * 0.22), M * (0.5 - i * 0.14), M * (0.3 + (i % 2) * 0.25), DARK, 0.7); // the target range
    for (let i = 0; i < 4; i++) { const a = (i / 4) * Math.PI * 2 + 0.7; C.tank(M * 0.04, M * 0.14, Math.cos(a) * M * 1.05, Math.sin(a) * M * 1.05, M * 0.15, HULL); C.light(Math.cos(a) * M * 1.05, Math.sin(a) * M * 1.05, M * 0.26, STROBE, M * 0.025); } // trainers out on exercise
    for (const [x, y] of [[0.12, 0.12], [-0.12, -0.12]]) { C.box(M * 0.05, M * 0.05, M * 0.3, M * x, M * y, -M * 0.85, HULL); C.box(M * 0.06, M * 0.02, M * 0.1, M * x, M * y, -M * 0.8, PAINT); }
    C.light(0, 0, M * 0.68, STROBE, M * 0.04);
  }

  const g = new THREE.Group();
  const out = [];
  for (const K of stages) {
    const geo = K.build(1, 7);
    geo.applyMatrix4(place);
    const solid = singleHull(geo, uT);
    solid.computeBoundingSphere(); solid.frustumCulled = true; solid.layers.enable(SHADOW_LAYER);
    const ghost = new THREE.Mesh(geo, ghostMat);
    g.add(solid, ghost);
    out.push([solid, ghost]);
  }
  if (spin) {
    const geo = spin.build(1, 7);
    const ring = singleHull(geo, uT);
    ring.applyMatrix4(place);
    const ghost = new THREE.Mesh(geo, ghostMat);
    ghost.applyMatrix4(place);
    g.add(ring, ghost);
    out[1].push(ring, ghost); // turns up with the second stage
    g.userData.spinner = ring;
  }
  g.userData = { ...g.userData, stages: out, faceSun, surface };
  g.userData.set = (color, sun) => { for (const st of out) for (const m of st) m.userData.set?.(color, sun, true); };
  return g;
}

/** A spot in orbit: radius r, angle a round the world's equator; local +y points away from the world. */
function orbitAt(r, a) {
  const u = new THREE.Vector3(Math.cos(a), 0, Math.sin(a));
  const n = new THREE.Vector3(0, 1, 0);
  const t = new THREE.Vector3().crossVectors(u, n);
  return new THREE.Matrix4().makeBasis(t, u, n).setPosition(u.clone().multiplyScalar(r));
}

/** Show a project's progress: stages finished are solid, the rest a hologram (or all solid once done). */
export function megaProgress(g, prog, done) {
  g.userData.stages.forEach((st, j) => {
    const built = done || prog >= (j + 1) / 3;
    for (let i = 0; i < st.length; i += 2) { st[i].visible = built; st[i + 1].visible = !built; }
  });
}
