import * as THREE from 'three';
import { kit, singleHull, HULL, DARK, PAINT, WINDOW, NAV_R, NAV_G, STROBE } from './ships.js';
import { rng } from '../sim.js';

/**
 * Buildings on worlds, from the same parts kit as ships and stations
 * (plating, owner's paint, lit windows, ceramic radiators, solar cells).
 * Each level adds or enlarges one major structure, so upgrades read from
 * the silhouette. Surface buildings stand on wide, short-load-path
 * foundations (these worlds have gravity) and are built with +Y as "up";
 * the two orbital ones (shipyard, gas harvester) are built in orbit as one
 * cluster each, in the plane round the world. They're drawn larger than
 * life (a real facility would be invisible against a planet); that's
 * presentation only.
 *
 * Finished buildings use the hull material; ones being built or scrapped
 * show as a hologram (`ghost`). The returned group may carry
 * `userData.wip` (the hull in the yard, in build stages: the view shows
 * them only while a ship is being built, more as it nears completion) and `userData.spin` ([{ mesh, axis, rate }]: parts that
 * turn, like a habitat drum on an asteroid).
 */
export function structureMesh(type, b, k, done, level, uT, ghost, color) {
  const s = buildingScale(b);
  const F = stationUnit(b);
  const K = kit(b.id * 17 + k * 101 + level);
  const r = K.r;
  const orbital = type === 'shipyard' || type === 'skimmer';
  const extra = []; // [kit, role] built alongside the main mesh
  // Vertical prisms and domes (the kit's cylinders run along z).
  const vc = (r1, r2, h, x, y, z, kind = HULL, seg = 12, tint) => K.add(new THREE.CylinderGeometry(r1, r2, h, seg).translate(x, y + h / 2, z), kind, tint);
  const dome = (rad, x, y, z, kind = HULL, tint) => K.add(new THREE.SphereGeometry(rad, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2).translate(x, y, z), kind, tint);
  const winBand = (w, x, y, z, n, face = 1, axis = 'z') => {
    for (let i = 0; i < n; i++) {
      const o = (i - (n - 1) / 2) * (w / n);
      if (axis === 'z') K.box(s * 0.035, s * 0.025, s * 0.006, x + o, y, z + face * 0.003, WINDOW);
      else K.box(s * 0.006, s * 0.025, s * 0.035, x + face * 0.003, y, z + o, WINDOW);
    }
  };
  let place = null; // orbital: a matrix taking the local frame to its spot in orbit

  if (type === 'shipyard') {
    // One orbital drydock: a big open cradle (one hull at a time), a
    // control and power hub at one end, a gantry, solar and radiators.
    // Local frame: +x along the orbit, +y away from the world, +z across.
    const c = F * 0.3; // the cradle about the size of a station's yard
    place = orbitFrame(b.size * 1.5, 0.4);
    const L = 7 * c, Wd = 1.2 * c, Hh = 1.0 * c, t = c * 0.1;
    for (const sy of [-1, 1]) for (const sz of [-1, 1]) K.box(L, t, t, 0, sy * Hh, sz * Wd, DARK);
    for (let i = 0; i <= 7; i++) {
      const x = -L / 2 + (L * i) / 7;
      for (const sy of [-1, 1]) K.box(t, t, Wd * 2, x, sy * Hh, 0, DARK);
      for (const sz of [-1, 1]) K.box(t, Hh * 2, t, x, 0, sz * Wd, DARK);
      if (i < 7) for (const sz of [-1, 1]) K.strut(x, -Hh, sz * Wd, x + L / 7, Hh, sz * Wd, t * 0.7);
    }
    K.box(L * 0.18, t * 2.2, Wd * 2.1, L * 0.41, Hh, 0, PAINT); // yard markings on the end beams
    K.box(L * 0.18, t * 2.2, Wd * 2.1, -L * 0.41, -Hh, 0, PAINT);
    // Gantry riding the top rails, its arm reaching in.
    K.box(c * 0.35, c * 0.25, Wd * 2.3, c * 0.8, Hh + c * 0.18, 0, HULL);
    K.box(c * 0.2, c * 0.2, c * 0.3, c * 0.8, Hh, c * 0.3, DARK);
    K.box(c * 0.08, Hh * 0.8, c * 0.08, c * 0.8, Hh * 0.55, c * 0.3, DARK);
    // Control and power hub, on a truss from the cradle's back end.
    const hx = -L / 2 - 1.9 * c;
    K.strut(-L / 2, 0, 0, hx + c * 0.6, 0, 0, c * 0.22, DARK);
    K.add(new THREE.CylinderGeometry(c * 0.6, c * 0.6, c * 1.6, 16).rotateX(Math.PI / 2).translate(hx, 0, 0), HULL);
    K.add(new THREE.CylinderGeometry(c * 0.62, c * 0.62, c * 0.4, 16).rotateX(Math.PI / 2).translate(hx, 0, 0), PAINT);
    for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; K.box(c * 0.12, c * 0.06, c * 0.06, hx + Math.cos(a) * c * 0.61, Math.sin(a) * c * 0.61, c * 0.5, WINDOW); }
    K.solar(hx, c * 0.6, 0, c * 2.2, c * 1.0, Math.PI / 2, c * 0.04);
    K.radiator(hx, -c * 0.6, 0, c * 1.6, c * 0.9, -Math.PI / 2, 3, c * 0.04);
    K.dish(c * 0.45, hx - c * 0.5, 0, c * 0.9, [-0.4, 0.3, 1]);
    K.light(L / 2, Hh, Wd, NAV_G, c * 0.12); K.light(L / 2, -Hh, -Wd, NAV_R, c * 0.12); K.light(hx, c * 0.7, 0, STROBE, c * 0.14);
    // The hull in the cradle: shown only while a ship is being built.
    // In three stages, shown as the build progresses: frame, plating, drive.
    const W = kit(b.id * 7 + 3), W1 = kit(b.id * 7 + 4), W2 = kit(b.id * 7 + 5);
    W.add(new THREE.CylinderGeometry(c * 0.18, c * 0.18, L * 0.7, 10).rotateZ(Math.PI / 2), DARK);
    for (const [x, z] of [[-0.2, 1], [0.05, -1], [0.25, 1]]) W.light(L * x, Hh * 0.6, Wd * 0.5 * z, STROBE, c * 0.1); // work lights
    for (let i = 0; i < 7; i++) W.add(new THREE.TorusGeometry(c * 0.62, c * 0.05, 4, 18, i < 4 ? Math.PI * 2 : Math.PI * 1.1).rotateY(Math.PI / 2).translate(-L * 0.3 + i * L * 0.09, 0, 0), DARK, 0.9);
    for (let i = 0; i < 4; i++) W1.add(new THREE.CylinderGeometry(c * 0.66, c * 0.66, L * 0.08, 16, 1, true, 0, Math.PI * 1.3).rotateZ(Math.PI / 2).translate(-L * 0.28 + i * L * 0.09, 0, 0), i === 1 ? PAINT : HULL);
    for (let i = 4; i < 7; i++) W2.add(new THREE.CylinderGeometry(c * 0.66, c * 0.66, L * 0.08, 16, 1, true, 0, Math.PI * 2).rotateZ(Math.PI / 2).translate(-L * 0.28 + i * L * 0.09, 0, 0), i === 5 ? PAINT : HULL);
    W2.add(new THREE.CylinderGeometry(c * 0.3, c * 0.55, c * 0.7, 16, 1, true).rotateZ(Math.PI / 2).translate(-L * 0.4, 0, 0), DARK, 0.7);
    extra.push([W, 'wip'], [W1, 'wip'], [W2, 'wip']);
  } else if (type === 'skimmer') {
    // A gas-harvesting system, all on one side so it reads as one
    // installation: aerostat collectors riding the cloud tops (one group
    // per level), an orbital storage and transfer platform above them
    // (more tankage per level), and a transfer craft between. Nothing
    // hangs down into the atmosphere.
    const c = F * 0.22; // the whole installation about a station's size
    const r0 = b.size * 1.03;
    place = orbitFrame(r0, 0.3 + k * 1.1);
    for (let i = 0; i < level; i++) {
      const x = (i - (level - 1) / 2) * 5 * c;
      const y = Math.sqrt(r0 * r0 - x * x) - r0 + c * 0.6;
      K.add(new THREE.SphereGeometry(c, 14, 8).scale(2.4, 0.95, 0.95).translate(x, y + c * 0.9, 0), HULL, 1.05); // envelope
      K.add(new THREE.CylinderGeometry(c * 0.99, c * 0.99, c * 0.7, 18, 1, true).rotateZ(Math.PI / 2).scale(1, 0.96, 0.96).translate(x, y + c * 0.9, 0), PAINT); // envelope band
      K.box(c * 1.4, c * 0.35, c * 0.45, x, y, 0, HULL, 0.85); // gondola
      K.add(new THREE.CylinderGeometry(c * 0.45, c * 0.2, c * 0.8, 14, 1, true).rotateZ(Math.PI / 2).translate(x + c * 1.0, y - c * 0.05, 0), DARK, 0.7); // intake scoop
      K.strapped(c * 0.16, c * 0.5, x - c * 0.25, y - c * 0.28, 0, false);
      for (const sx of [-1, 1]) K.strut(x + sx * c * 0.5, y + c * 0.15, 0, x + sx * c * 0.8, y + c * 0.55, 0, c * 0.05);
      K.light(x, y - c * 0.2, c * 0.25, STROBE, c * 0.1);
    }
    // Orbital platform: a spine with tank clusters, radiators and a dock.
    const py = c * 5.5, len = c * (3 + level * 1.8);
    K.truss(0, py, -len / 2, len / 2, c * 0.45, 3 + level, c * 0.05);
    K.add(new THREE.CylinderGeometry(c * 0.4, c * 0.4, c * 0.9, 14).rotateX(Math.PI / 2).translate(0, py, len / 2 + c * 0.4), HULL);
    K.add(new THREE.CylinderGeometry(c * 0.28, c * 0.28, c * 0.1, 14).rotateX(Math.PI / 2).translate(0, py, len / 2 + c * 0.9), DARK);
    for (let i = 0; i < level + 1; i++) {
      const z = -len / 2 + c * 1.1 + i * c * 1.5;
      for (const sx of [-1, 1]) K.strapped(c * 0.36, c * 0.7, sx * c * 0.6, py, z, i % 2 === 0 && sx > 0);
    }
    K.radiator(0, py + c * 0.3, -len * 0.1, c * 2, len * 0.6, Math.PI / 2, 2 + level, c * 0.04);
    // A transfer craft between the collectors and the platform.
    K.tank(c * 0.18, c * 0.5, c * 1.4, py * 0.55, 0, HULL);
    K.light(0, py + c * 0.5, len / 2 + c * 0.9, NAV_G, c * 0.12);
  } else if (type === 'defence') {
    // An armoured firing platform with two gun mounts per level (each one
    // gun, so the count on the platform is the guns it adds), a central
    // magazine, and a fire-control radar on its own mast (not a gun).
    const R = s * (0.5 + level * 0.14);
    vc(R, R * 1.12, s * 0.16, 0, 0, 0, DARK, 8);
    vc(R * 1.01, R * 1.01, s * 0.03, 0, s * 0.16, 0, PAINT, 8);
    K.box(R * 0.7, s * 0.2, R * 0.5, 0, s * 0.19 + s * 0.1, 0, HULL, 0.9); // magazine
    K.box(R * 0.72, s * 0.04, R * 0.08, 0, s * 0.3, R * 0.2, DARK);
    const n = level * 2;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + 0.4;
      const x = Math.cos(a) * R * 0.72, z = Math.sin(a) * R * 0.72, y = s * 0.19;
      vc(s * 0.11, s * 0.13, s * 0.08, x, y, z, DARK, 8);
      K.add(new THREE.BoxGeometry(s * 0.17, s * 0.1, s * 0.15).rotateY(-a).translate(x, y + s * 0.13, z), HULL);
      K.boom(x + Math.cos(a) * s * 0.06, y + s * 0.15, z + Math.sin(a) * s * 0.06, [Math.cos(a), 0.45, Math.sin(a)], s * 0.42, s * 0.04, DARK, 0.6);
    }
    // Radar on a mast off to one side.
    K.boom(-R * 0.15, s * 0.3, -R * 0.15, [0, 1, 0], s * 0.5, s * 0.04);
    K.sphere(s * 0.1, -R * 0.15, s * 0.82, -R * 0.15, HULL, 1.1, 12);
    K.box(s * 0.04, s * 0.04, s * 0.04, R * 0.6, s * 0.2, 0, NAV_R);
  } else if (type === 'exchange') {
    // A space elevator, the bond market's freight line: a wide ground
    // terminal, twin tethers past a geostationary port up to a
    // counterweight. Level I: a docking hub with two freight arms. Level
    // II: a wide docking ring with berths and storage, and a cargo annex.
    vc(s * 0.7, s * 0.8, s * 0.12, 0, 0, 0, DARK, 8);
    vc(s * 0.5, s * 0.6, s * 0.18, 0, s * 0.12, 0, HULL, 8);
    vc(s * 0.51, s * 0.51, s * 0.04, 0, s * 0.24, 0, PAINT, 8);
    vc(s * 0.16, s * 0.22, s * 0.5, 0, s * 0.3, 0, HULL, 10); // climber terminal
    for (const a of [0.5, 2.6, 4.4]) K.radiator(Math.cos(a) * s * 0.55, s * 0.14, Math.sin(a) * s * 0.55, s * 0.28, s * 0.22, Math.PI / 2, 2, s * 0.015);
    winBand(s * 0.8, 0, s * 0.2, s * 0.6, 8);
    const top = s * 7.2, port = s * 4.6;
    for (const sx of [-1, 1]) K.add(new THREE.CylinderGeometry(s * 0.018, s * 0.018, top - s * 0.8, 5).translate(sx * s * 0.05, s * 0.8 + (top - s * 0.8) / 2, 0), DARK);
    for (const y of [1.8, 3.3, 5.7]) { K.box(s * 0.16, s * 0.2, s * 0.12, 0, s * y, 0, HULL, 0.9); K.box(s * 0.12, s * 0.03, s * 0.004, 0, s * y, s * 0.062, WINDOW); }
    // The port (drawn larger than the base: it's what the player should see).
    const P = s * 1.5;
    vc(P * 0.32, P * 0.32, P * 0.4, 0, port - P * 0.2, 0, HULL, 16);
    vc(P * 0.33, P * 0.33, P * 0.1, 0, port - P * 0.05, 0, PAINT, 16);
    for (const sx of [-1, 1]) {
      const [ex, ey] = K.boom(sx * P * 0.3, port, 0, [sx, 0, 0], P * 0.45, P * 0.07, HULL, 0.9);
      K.box(P * 0.06, P * 0.16, P * 0.16, ex, ey, 0, DARK);
      K.strapped(P * 0.07, P * 0.16, sx * P * 0.5, port - P * 0.14, 0, sx > 0);
    }
    if (level >= 2) {
      K.add(new THREE.TorusGeometry(P * 1.0, P * 0.08, 8, 48).rotateX(Math.PI / 2).translate(0, port, 0), HULL);
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 + 0.26;
        K.strut(Math.cos(a) * P * 0.32, port, Math.sin(a) * P * 0.32, Math.cos(a) * P * 0.95, port, Math.sin(a) * P * 0.95, P * 0.04);
        K.frame(P * 0.28, P * 0.18, P * 0.28, Math.cos(a) * P * 1.18, port, Math.sin(a) * P * 1.18, P * 0.02); // freight berth
        if (i % 2 === 0) K.sphere(P * 0.09, Math.cos(a) * P * 1.18, port, Math.sin(a) * P * 1.18, i === 0 ? PAINT : HULL, 1, 10);
      }
      vc(P * 0.4, P * 0.4, P * 0.3, 0, port - P * 0.6, 0, HULL, 16); // cargo annex
      for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2; K.box(P * 0.04, P * 0.03, P * 0.05, Math.cos(a) * P * 1.08, port, Math.sin(a) * P * 1.08, WINDOW); }
    }
    // Counterweight.
    K.box(s * 0.5, s * 0.35, s * 0.4, 0, top, 0, DARK, 0.7);
    K.box(s * 0.3, s * 0.25, s * 0.3, s * 0.22, top + s * 0.2, s * 0.1, DARK, 0.6);
    K.box(s * 0.05, s * 0.05, s * 0.05, 0, top + s * 0.25, 0, STROBE);
  } else if (type === 'habitat') {
    if (b.kind === 'asteroid') {
      // Little gravity here: a housing drum on an axle that spins for it.
      for (const sx of [-1, 1]) vc(s * 0.06, s * 0.09, s * 0.5, sx * s * (0.35 + level * 0.12), 0, 0, DARK, 6);
      K.add(new THREE.CylinderGeometry(s * 0.05, s * 0.05, s * (0.9 + level * 0.25), 8).rotateZ(Math.PI / 2).translate(0, s * 0.5, 0), DARK);
      const D = kit(b.id * 5 + level);
      for (let i = 0; i < level; i++) {
        const x = (i - (level - 1) / 2) * s * 0.3;
        D.add(new THREE.CylinderGeometry(s * 0.3, s * 0.3, s * 0.24, 20).rotateZ(Math.PI / 2).translate(x, 0, 0), i === 1 ? PAINT : HULL);
        for (let j = 0; j < 10; j++) { const a = (j / 10) * Math.PI * 2; D.box(s * 0.12, s * 0.025, s * 0.025, x, Math.cos(a) * s * 0.302, Math.sin(a) * s * 0.302, WINDOW); }
      }
      extra.push([D, 'spin', [0, s * 0.5, 0]]);
    } else {
      // A settlement: pressurised domes, low residential blocks and towers,
      // covered connectors; each level a larger district.
      vc(s * (0.6 + level * 0.18), s * (0.66 + level * 0.18), s * 0.05, 0, 0, 0, DARK, 10);
      dome(s * 0.28, 0, s * 0.05, 0, HULL, 1.05);
      vc(s * 0.29, s * 0.29, s * 0.04, 0, s * 0.05, 0, PAINT, 16);
      winBand(s * 0.3, 0, s * 0.12, s * 0.28, 6);
      const block = (x, z, w, h, d, rot = 0) => {
        K.add(new THREE.BoxGeometry(w, h, d).rotateY(rot).translate(x, s * 0.05 + h / 2, z), HULL, 0.95);
        for (let f = 0; f < Math.max(1, Math.round(h / (s * 0.08))); f++) K.add(new THREE.BoxGeometry(w * 0.85, s * 0.018, d + s * 0.008).rotateY(rot).translate(x, s * 0.09 + f * s * 0.08, z), WINDOW);
      };
      const tube = (x0, z0, x1, z1) => K.strut(x0, s * 0.09, z0, x1, s * 0.09, z1, s * 0.07, HULL, 0.85);
      block(s * 0.48, 0, s * 0.22, s * 0.16, s * 0.4); tube(s * 0.28, 0, s * 0.37, 0);
      block(-s * 0.42, s * 0.18, s * 0.3, s * 0.12, s * 0.2, 0.4); tube(-s * 0.26, s * 0.1, -s * 0.3, s * 0.14);
      if (level >= 2) {
        block(-s * 0.2, -s * 0.5, s * 0.18, s * 0.5, s * 0.18); // residential tower
        K.box(s * 0.2, s * 0.03, s * 0.2, -s * 0.2, s * 0.56, -s * 0.5, PAINT);
        tube(-s * 0.1, -s * 0.26, -s * 0.17, -s * 0.41);
        dome(s * 0.18, s * 0.42, s * 0.05, -s * 0.48, HULL, 1.05); tube(s * 0.3, -s * 0.2, s * 0.38, -s * 0.36);
      }
      if (level >= 3) {
        dome(s * 0.34, -s * 0.62, s * 0.05, -s * 0.18, HULL, 1.05);
        vc(s * 0.35, s * 0.35, s * 0.04, -s * 0.62, s * 0.05, -s * 0.18, PAINT, 16);
        block(s * 0.15, s * 0.55, s * 0.5, s * 0.1, s * 0.16); block(s * 0.15, s * 0.55, s * 0.36, s * 0.2, s * 0.1);
        block(s * 0.72, -s * 0.2, s * 0.16, s * 0.7, s * 0.16);
        tube(s * 0.06, s * 0.27, s * 0.12, s * 0.46);
      }
      for (const a of [2.0, 5.0]) K.radiator(Math.cos(a) * s * (0.6 + level * 0.12), s * 0.05, Math.sin(a) * s * (0.6 + level * 0.12), s * 0.22, s * 0.2, Math.PI / 2, 2, s * 0.012);
      K.box(s * 0.04, s * 0.04, s * 0.04, 0, s * 0.35, 0, STROBE);
    }
  } else if (type === 'bureau') {
    // Security bureau: a reinforced operations block, a protected sensor
    // dome, a laser-comm head on its own pedestal (a lens, not a gun) and
    // a lattice antenna mast set apart. Level II: a second operations
    // annex on a covered link, a phased-array panel and a second dome.
    vc(s * 0.4, s * 0.48, s * 0.24, 0, 0, 0, HULL, 8);
    vc(s * 0.41, s * 0.41, s * 0.035, 0, s * 0.18, 0, PAINT, 8);
    K.box(s * 0.3, s * 0.025, s * 0.008, 0, s * 0.12, s * 0.42, WINDOW);
    vc(s * 0.13, s * 0.16, s * 0.12, s * 0.62, 0, -s * 0.1, DARK, 8);
    K.sphere(s * 0.2, s * 0.62, s * 0.3, -s * 0.1, HULL, 1.12, 16); // radome
    vc(s * 0.06, s * 0.08, s * 0.22, -s * 0.18, s * 0.24, s * 0.12, DARK, 8);
    K.add(new THREE.CylinderGeometry(s * 0.08, s * 0.08, s * 0.16, 12).rotateX(0.8).translate(-s * 0.18, s * 0.52, s * 0.16), HULL);
    K.add(new THREE.CylinderGeometry(s * 0.055, s * 0.055, s * 0.01, 12).rotateX(0.8).translate(-s * 0.18, s * 0.579, s * 0.221), WINDOW);
    const mx = -s * 0.62, mz = -s * 0.3;
    for (const a of [0, 2.1, 4.2]) K.strut(mx + Math.cos(a) * s * 0.1, 0, mz + Math.sin(a) * s * 0.1, mx + Math.cos(a) * s * 0.03, s * 1.15, mz + Math.sin(a) * s * 0.03, s * 0.02);
    for (let i = 1; i < 5; i++) vc(s * (0.1 - i * 0.016), s * (0.1 - i * 0.016), s * 0.012, mx, s * i * 0.23, mz, DARK, 3);
    K.box(s * 0.04, s * 0.04, s * 0.04, mx, s * 1.18, mz, STROBE);
    if (level >= 2) {
      K.strut(s * 0.3, s * 0.1, s * 0.25, s * 0.55, s * 0.1, s * 0.52, s * 0.12, HULL, 0.9);
      vc(s * 0.26, s * 0.3, s * 0.2, s * 0.68, 0, s * 0.68, HULL, 8);
      vc(s * 0.27, s * 0.27, s * 0.03, s * 0.68, s * 0.15, s * 0.68, PAINT, 8);
      K.add(new THREE.BoxGeometry(s * 0.42, s * 0.36, s * 0.03).rotateX(-0.5).translate(s * 0.68, s * 0.38, s * 0.92), DARK, 0.6); // phased array
      K.frame(s * 0.44, s * 0.03, s * 0.03, s * 0.68, s * 0.22, s * 0.86, s * 0.015);
      K.sphere(s * 0.13, -s * 0.15, s * 0.18, -s * 0.62, HULL, 1.12, 14);
      vc(s * 0.1, s * 0.12, s * 0.08, -s * 0.15, 0, -s * 0.62, DARK, 8);
    }
  } else if (type === 'lab') {
    // Research: each level a bigger campus. I: the main lab block and a
    // large dish. II: a second lab module on a link, an optical telescope
    // on a fork mount, and a power/cooling block. III: an observatory
    // dome, more linked modules, a dish array and an open experiment deck.
    K.box(s * 0.7, s * 0.2, s * 0.36, 0, s * 0.1, 0, HULL);
    K.box(s * 0.72, s * 0.035, s * 0.38, 0, s * 0.2, 0, PAINT);
    winBand(s * 0.6, 0, s * 0.12, s * 0.18, 8);
    const bigDish = (x, z, rad, dir) => {
      vc(s * 0.06, s * 0.1, s * 0.3, x, 0, z, DARK, 8);
      K.dish(rad, x, s * 0.34, z, dir);
    };
    bigDish(-s * 0.55, -s * 0.3, s * 0.34, [0.3, 1, 0.5]);
    if (level >= 2) {
      K.strut(s * 0.35, s * 0.1, 0, s * 0.6, s * 0.1, 0, s * 0.1, HULL, 0.9);
      K.add(new THREE.CylinderGeometry(s * 0.16, s * 0.16, s * 0.5, 16).rotateZ(Math.PI / 2).translate(s * 0.85, s * 0.16, 0), HULL); // second lab module
      K.add(new THREE.CylinderGeometry(s * 0.165, s * 0.165, s * 0.1, 16).rotateZ(Math.PI / 2).translate(s * 0.85, s * 0.16, 0), PAINT);
      // Telescope on a fork mount.
      vc(s * 0.12, s * 0.14, s * 0.1, s * 0.3, 0, s * 0.5, DARK, 10);
      for (const sx of [-1, 1]) K.box(s * 0.03, s * 0.22, s * 0.05, s * 0.3 + sx * s * 0.11, s * 0.2, s * 0.5, DARK);
      K.add(new THREE.CylinderGeometry(s * 0.09, s * 0.1, s * 0.55, 14).rotateX(0.6).translate(s * 0.3, s * 0.38, s * 0.55), HULL, 1.05);
      K.add(new THREE.CylinderGeometry(s * 0.07, s * 0.07, s * 0.01, 14).rotateX(0.6).translate(s * 0.3, s * 0.612, s * 0.707), DARK, 0.4);
      // Power and cooling block.
      K.box(s * 0.22, s * 0.16, s * 0.2, s * 0.85, s * 0.08, -s * 0.42, DARK, 0.8);
      K.radiator(s * 0.85, s * 0.16, -s * 0.42, s * 0.3, s * 0.26, Math.PI / 2, 2, s * 0.012);
    }
    if (level >= 3) {
      // Observatory dome with its slit.
      vc(s * 0.27, s * 0.27, s * 0.14, -s * 0.15, 0, s * 0.62, HULL, 16);
      dome(s * 0.27, -s * 0.15, s * 0.14, s * 0.62, HULL, 1.1);
      K.add(new THREE.BoxGeometry(s * 0.07, s * 0.28, s * 0.02).translate(-s * 0.15, s * 0.3, s * 0.88), DARK, 0.4);
      K.strut(-s * 0.15, s * 0.1, s * 0.2, -s * 0.15, s * 0.1, s * 0.38, s * 0.1, HULL, 0.9);
      // A dish array and an open experiment deck.
      for (let i = 0; i < 3; i++) bigDish(-s * (0.5 + i * 0.32), -s * 0.75, s * 0.18, [0.2, 1, 0.4]);
      for (const [x, z] of [[-0.95, 0.1], [-1.25, 0.1], [-0.95, 0.4], [-1.25, 0.4]]) K.box(s * 0.025, s * 0.2, s * 0.025, x * s, s * 0.1, z * s, DARK);
      K.box(s * 0.36, s * 0.025, s * 0.36, -s * 1.1, s * 0.2, s * 0.25, DARK, 0.75);
      K.box(s * 0.1, s * 0.1, s * 0.1, -s * 1.02, s * 0.27, s * 0.18, HULL);
      K.sphere(s * 0.06, -s * 1.2, s * 0.28, s * 0.34, HULL, 1.1, 10);
      K.strut(-s * 0.35, s * 0.1, 0, -s * 0.92, s * 0.2, s * 0.2, s * 0.05, HULL, 0.8);
      K.solar(-s * 0.55, s * 0.1, -s * 1.15, s * 0.5, s * 0.3, 0.25, s * 0.012);
    }
    K.box(s * 0.04, s * 0.04, s * 0.04, -s * 0.55, s * 0.72, -s * 0.3, STROBE);
  } else {
    // Mine, on airless rock: anchored, braced, dust-shielded machinery.
    // I: an extraction head and a processing hopper. II: a second head, a
    // sorting conveyor and a storage silo. III: a processing plant with
    // radiators, more storage and a loading gantry with a pad.
    const W = s * (0.9 + (level - 1) * 0.45);
    vc(W * 0.62, W * 0.7, s * 0.03, 0, 0, 0, DARK, 14, 0.7); // the worked site
    const head = (x, z) => {
      K.box(s * 0.32, s * 0.08, s * 0.32, x, s * 0.04, z, DARK);
      for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) K.strut(x + dx * s * 0.14, s * 0.08, z + dz * s * 0.14, x + dx * s * 0.05, s * 0.5, z + dz * s * 0.05, s * 0.035);
      K.box(s * 0.16, s * 0.16, s * 0.16, x, s * 0.52, z, HULL); // drive head
      vc(s * 0.035, s * 0.035, s * 0.5, x, 0, z, DARK, 6); // drill string
      K.box(s * 0.2, s * 0.12, s * 0.04, x, s * 0.14, z + s * 0.17, HULL, 0.8); // dust shield
    };
    const hopper = (x, z) => {
      for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) K.box(s * 0.025, s * 0.2, s * 0.025, x + dx * s * 0.1, s * 0.1, z + dz * s * 0.1, DARK);
      K.add(new THREE.CylinderGeometry(s * 0.17, s * 0.06, s * 0.2, 4).rotateY(Math.PI / 4).translate(x, s * 0.3, z), HULL);
      K.add(new THREE.CylinderGeometry(s * 0.175, s * 0.175, s * 0.03, 4).rotateY(Math.PI / 4).translate(x, s * 0.41, z), PAINT);
    };
    head(-W * 0.3, 0); hopper(0, -s * 0.12);
    K.box(s * 0.2, s * 0.03, s * 0.06, -W * 0.15, s * 0.25, -s * 0.06, DARK); // chute
    K.box(s * 0.16, s * 0.12, s * 0.14, s * 0.2, s * 0.06, s * 0.2, HULL); K.box(s * 0.1, s * 0.025, s * 0.004, s * 0.2, s * 0.08, s * 0.272, WINDOW); // control cabin
    if (level >= 2) {
      head(-W * 0.3, -s * 0.45);
      // Sorting conveyor on trestles, to a storage silo.
      K.box(W * 0.6, s * 0.06, s * 0.08, W * 0.1, s * 0.3, -s * 0.12, HULL, 0.85);
      for (let i = 0; i < 3; i++) K.box(s * 0.03, s * 0.3, s * 0.03, W * (-0.1 + i * 0.2), s * 0.15, -s * 0.12, DARK);
      vc(s * 0.2, s * 0.2, s * 0.5, W * 0.42, 0, -s * 0.12, HULL, 14);
      dome(s * 0.2, W * 0.42, s * 0.5, -s * 0.12, HULL, 1.05);
      vc(s * 0.205, s * 0.205, s * 0.06, W * 0.42, s * 0.36, -s * 0.12, PAINT, 14);
    }
    if (level >= 3) {
      // Processing plant with its radiators, more storage, a loading gantry.
      K.box(s * 0.5, s * 0.3, s * 0.36, -W * 0.05, s * 0.15, s * 0.5, HULL);
      K.box(s * 0.52, s * 0.04, s * 0.38, -W * 0.05, s * 0.3, s * 0.5, PAINT);
      K.pipe(-W * 0.05, s * 0.3, s * 0.4, 0, s * 0.42, -s * 0.12, s * 0.025);
      for (const dz of [0.38, 0.62]) K.radiator(-W * 0.05 - s * 0.25, s * 0.3, s * dz, s * 0.3, s * 0.18, Math.PI / 2 + 0.3, 2, s * 0.012);
      vc(s * 0.16, s * 0.16, s * 0.42, W * 0.42, 0, s * 0.3, HULL, 14); dome(s * 0.16, W * 0.42, s * 0.42, s * 0.3, HULL, 1.05);
      // Loading gantry over a pad.
      vc(s * 0.3, s * 0.32, s * 0.03, W * 0.45, 0, s * 0.75, DARK, 12);
      for (const sx of [-1, 1]) K.box(s * 0.04, s * 0.5, s * 0.04, W * 0.45 + sx * s * 0.3, s * 0.25, s * 0.55, DARK);
      K.box(s * 0.68, s * 0.05, s * 0.06, W * 0.45, s * 0.52, s * 0.55, HULL);
      K.box(s * 0.08, s * 0.08, s * 0.1, W * 0.45, s * 0.46, s * 0.55, DARK);
      K.box(s * 0.04, s * 0.04, s * 0.04, W * 0.45 + s * 0.3, s * 0.06, s * 0.75, NAV_G);
    }
    K.box(s * 0.04, s * 0.04, s * 0.04, -W * 0.3, s * 0.62, 0, STROBE);
  }
  void r;
  const mk = (geo) => {
    if (place) geo.applyMatrix4(place);
    if (!done) return new THREE.Mesh(geo, ghost);
    const m = singleHull(geo, uT);
    m.userData.set(color, 1, true);
    return m;
  };
  const g = new THREE.Group();
  g.userData.type = type;
  g.add(mk(K.build(1)));
  for (const [X, role, at] of extra) {
    if (role === 'wip' && !done) continue;
    const m = mk(X.build(1));
    if (role === 'spin') {
      // Build the drum about its own axle, then put it in place.
      m.position.set(...at);
      (g.userData.spin ||= []).push({ mesh: m, axis: 'x', rate: 0.5 });
    }
    if (role === 'wip') (g.userData.wip ||= []).push(m); // build stages, in order
    g.add(m);
  }
  if (orbital) {
    // A fixed tilt for the plane the orbital clusters sit in.
    g.rotation.x = Math.PI / 2 + 0.35;
    return g;
  }
  const rr = rng(b.id * 17 + k * 101 + (type === 'mine' ? 5 : 0));
  const dir = new THREE.Vector3(rr() - 0.5, (rr() - 0.5) * 0.9, rr() - 0.5).normalize();
  g.position.copy(dir).multiplyScalar(b.size * (b.kind === 'asteroid' ? 1.02 : 0.99));
  g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
  return g;
}

/**
 * Buildings are sized from the map, not the world they're on, so they're
 * in proportion to stations and ships everywhere (Vast draws everything
 * twice as big, stations included): `stationUnit` is how big a station is
 * drawn on this map. Surface buildings are a little smaller than a station,
 * and smaller again on small moons and asteroids so they don't swamp them.
 */
export const stationUnit = (b) => 0.36 * (b.size / (b.baseSize ?? b.size));
export const buildingScale = (b) => Math.min(0.86 * stationUnit(b), 0.45 * b.size);

/**
 * A spot in orbit, as a matrix: radius R in the XY plane at angle a, with
 * local +x along the orbit, +y away from the world and +z across the plane.
 */
function orbitFrame(R, a) {
  const u = new THREE.Vector3(Math.cos(a), Math.sin(a), 0);
  const t = new THREE.Vector3(-Math.sin(a), Math.cos(a), 0);
  const n = new THREE.Vector3(0, 0, -1); // t, u, n right-handed (a mirrored frame turns faces inside out)
  return new THREE.Matrix4().makeBasis(t, u, n).setPosition(u.clone().multiplyScalar(R));
}
