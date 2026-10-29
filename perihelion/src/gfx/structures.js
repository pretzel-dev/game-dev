import * as THREE from 'three';
import { kit, singleHull, HULL, DARK, PAINT, WINDOW, NAV_R, NAV_G, STROBE, RAD, SOLAR, GROUND } from './ships.js';
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
export function structureMesh(type, b, k, done, level, uT, ghost, color, env = null) {
  const s = buildingScale(b);
  const F = stationUnit(b);
  const K = kit(b.id * 17 + k * 101 + level);
  // Sites (the mine, so far): real-scale-ish, in site units, on the terrain.
  const siteR = type === 'mine' ? MINE_R[level - 1] * SITE_U : 0;
  const site = siteR ? siteOn(b, k, siteR, env) : null;
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
    const c = 0.078; // the hull in the cradle as long as a finished ship (any map)
    place = orbitFrame(b.size * 1.5, 0.4 + k * 1.6); // each yard its own spot in orbit
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
    const top = s * 3.6, port = s * 2.5; // about a station's height in all
    for (const sx of [-1, 1]) K.add(new THREE.CylinderGeometry(s * 0.018, s * 0.018, top - s * 0.8, 5).translate(sx * s * 0.05, s * 0.8 + (top - s * 0.8) / 2, 0), DARK);
    for (const y of [1.25, 1.9, 3.1]) { K.box(s * 0.16, s * 0.2, s * 0.12, 0, s * y, 0, HULL, 0.9); K.box(s * 0.12, s * 0.03, s * 0.004, 0, s * y, s * 0.062, WINDOW); }
    // The port (drawn larger than the base: it's what the player should see).
    const P = s * 0.95;
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
    // Mine: see mineSite. Built in site units (U), seated on the terrain.
    if (!siteGeos.has(site.key + level)) mineSite(K, level, b.kind === 'asteroid', site.sink / SITE_U);
  }
  void r;
  const mk = (geo) => {
    if (place) geo.applyMatrix4(place);
    let m;
    if (!done) m = new THREE.Mesh(geo, ghost);
    else {
      m = singleHull(geo, uT);
      m.userData.set(color, 1, true);
      m.userData.paint = color;
      if (site) m.userData.ground(site.ground);
    }
    if (site) {
      m.scale.setScalar(siteR);
      if (m.isInstancedMesh) { m.computeBoundingSphere(); m.frustumCulled = true; }
    }
    return m;
  };
  const g = new THREE.Group();
  g.userData.type = type;
  if (site) {
    // Two levels of detail: everything up close, and from further out only
    // the parts big enough to see (the rest would be under a pixel). Built
    // once per site and level, then copied: a world rebuilds its buildings
    // whenever any of them changes.
    const gk = site.key + level;
    let pair = siteGeos.get(gk);
    if (!pair) {
      const fine = K.build(1, 7 * SITE_U, SITE_COARSE);
      pair = [fine, fine.userData.coarse];
      delete fine.userData.coarse;
      for (const geo of pair) {
        // Laid over the ground: every point raised or lowered to the
        // terrain under it (a site is built on a flat plane; worlds curve
        // away and rocks are lumpy). Then unit-sized, in a mesh scaled to the
        // site, so the shader's on-screen size (running lights, fine detail)
        // is the site's own.
        geo.rotateY(site.spin);
        const P = geo.attributes.position;
        for (let i = 0; i < P.count; i++) P.setY(i, P.getY(i) + site.lift(P.getX(i), P.getZ(i)));
        geo.scale(SITE_U / siteR, SITE_U / siteR, SITE_U / siteR);
        geo.computeBoundingSphere();
      }
      siteGeos.set(gk, pair);
      if (siteGeos.size > 48) siteGeos.delete(siteGeos.keys().next().value); // oldest first
    }
    const mf = mk(pair[0].clone()), mc = mk(pair[1].clone());
    mc.visible = false;
    g.add(mf, mc);
    g.userData.lod = { fine: mf, coarse: mc, r: siteR };
    g.position.copy(site.p);
    g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), site.n);
    return g;
  }
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
 * Buildings are the same size on every map (ships are, so a yard's hull
 * always matches a finished ship): `stationUnit` is a Classic station's
 * drawn size. Surface buildings are a little smaller than that, and smaller
 * again on small moons and asteroids so they don't swamp them.
 */
export const stationUnit = () => 0.36;
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

/**
 * Scale for sites (buildings drawn at something like real scale; the mine
 * first). One unit, U, for everything built on a world: about a ship's
 * length. A site is measured in U and is the same size on every world, so a
 * big moon makes a mine look small and an asteroid makes it look like it
 * has eaten into the rock. Still larger than life (a real mine would be
 * invisible from orbit), but restrained: a level III mine is about a tenth
 * of a moon across. At the usual zoom it's a small, distinct silhouette;
 * the world's ring and label do the work of finding it.
 */
export const SITE_U = 0.08;
/** Footprint radius of a mine at levels I, II, III, in U. */
const MINE_R = [1.0, 1.2, 1.4];
/** Parts smaller than this (radius, in U) are left off the far-off version. */
const SITE_COARSE = 0.045;

/**
 * Where a site sits: its centre `p` and up `n` in the world's own frame
 * (buildings turn with it), `lift(x, z)` (the height of the ground under a
 * point of the site, in U, so the whole site can be laid over it), `sink`
 * (how far footings reach below that, for the bumps between samples, world
 * units), `ground` (linear RGB of the surface there) and `spin` (its turn
 * about up). Worlds are spheres; an asteroid is probed for its real
 * surface, trying a few spots and keeping the flattest.
 */
const sites = new Map();
/** Finished site geometry, [near, far] by site and level (never drawn itself: meshes get copies). */
const siteGeos = new Map();
function siteOn(b, k, R, env) {
  const body = env && env.body;
  const rock = b.kind === 'asteroid' && body && body.geometry && body.geometry.attributes.color ? body.geometry : null;
  // One spot per building, whatever its level: probed for the biggest
  // footprint, so an upgrade grows the site where it is.
  const key = `${b.id}:${k}:${rock ? rock.uuid : b.size}`;
  if (sites.has(key)) return sites.get(key);
  R = Math.max(R, MINE_R[MINE_R.length - 1] * SITE_U);
  const rr = rng(b.id * 17 + k * 101 + 5);
  const field = rock && rockField(rock);
  let best = null;
  for (let i = 0; i < (field ? 5 : 1); i++) {
    const dir = new THREE.Vector3(rr() - 0.5, (rr() - 0.5) * 0.9, rr() - 0.5).normalize();
    const st = field ? probeRock(field, dir, R) : { p: dir.clone().multiplyScalar(b.size), n: dir, rough: 0, ground: null };
    if (!best || st.rough < best.rough) best = st;
  }
  const rU = b.size / SITE_U;
  best.lift = field ? liftOver(field, best.p, best.n, R * 1.3) : (x, z) => -(rU - Math.sqrt(Math.max(0, rU * rU - x * x - z * z)));
  best.sink = field ? 0.004 : 0.0015;
  best.spin = rr() * Math.PI * 2;
  best.key = key + ':';
  if (!best.ground) best.ground = (env && env.groundAt && env.groundAt(best.n)) || [0.16, 0.15, 0.14];
  sites.set(key, best);
  return best;
}

/**
 * A rock as a height field: it's a lumpy sphere, so the surface along any
 * direction from its centre is near the vertices pointing that way. Much
 * cheaper than casting rays at twenty thousand triangles.
 */
const fields = new WeakMap();
function rockField(geo) {
  if (fields.has(geo)) return fields.get(geo);
  const P = geo.attributes.position, C = geo.attributes.color, n = P.count;
  const dir = new Float32Array(n * 3), rad = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const x = P.getX(i), y = P.getY(i), z = P.getZ(i), r = Math.hypot(x, y, z);
    dir[i * 3] = x / r; dir[i * 3 + 1] = y / r; dir[i * 3 + 2] = z / r; rad[i] = r;
  }
  const near = [0, 0, 0], dots = [-2, -2, -2];
  // The surface point along unit direction u (written into out), from the
  // three vertices closest in direction; and (optional) their mean colour.
  const at = (u, out, col) => {
    dots[0] = dots[1] = dots[2] = -2;
    for (let i = 0; i < n; i++) {
      const d = dir[i * 3] * u.x + dir[i * 3 + 1] * u.y + dir[i * 3 + 2] * u.z;
      if (d <= dots[2]) continue;
      if (d > dots[0]) { dots[2] = dots[1]; near[2] = near[1]; dots[1] = dots[0]; near[1] = near[0]; dots[0] = d; near[0] = i; }
      else if (d > dots[1]) { dots[2] = dots[1]; near[2] = near[1]; dots[1] = d; near[1] = i; }
      else { dots[2] = d; near[2] = i; }
    }
    let w = 0, r = 0;
    for (let j = 0; j < 3; j++) { const wj = 1 / (1.0000001 - dots[j]); w += wj; r += rad[near[j]] * wj; if (col) { col[0] += C.getX(near[j]) / 3; col[1] += C.getY(near[j]) / 3; col[2] += C.getZ(near[j]) / 3; } }
    return out.copy(u).multiplyScalar(r / w);
  };
  const f = { at };
  fields.set(geo, f);
  return f;
}

/** A spot on a rock: centre, the lie of the land, how rough it is, its colour. */
function probeRock(field, dir, R) {
  const c = field.at(dir, new THREE.Vector3());
  const t1 = new THREE.Vector3().crossVectors(dir, Math.abs(dir.y) < 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0)).normalize();
  const t2 = new THREE.Vector3().crossVectors(dir, t1);
  const gr = [0, 0, 0];
  const q = new THREE.Vector3(), s = new THREE.Vector3();
  const height = (a, b, col) => { q.copy(c).addScaledVector(t1, a).addScaledVector(t2, b).normalize(); return field.at(q, s, col).sub(c).dot(dir); };
  // Slope from the footprint's edges, leaned towards straight up (it's a building, not a limpet).
  const hx = (height(R, 0, gr) - height(-R, 0, gr)) / (2 * R), hz = (height(0, R, gr) - height(0, -R, gr)) / (2 * R);
  const n = dir.clone().addScaledVector(t1, -hx).addScaledVector(t2, -hz).normalize().multiplyScalar(0.6).addScaledVector(dir, 0.4).normalize();
  let lo = 0, hi = 0;
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    q.copy(c).addScaledVector(t1, Math.cos(a) * R).addScaledVector(t2, Math.sin(a) * R).normalize();
    const h = field.at(q, s).sub(c).dot(n);
    lo = Math.min(lo, h); hi = Math.max(hi, h);
  }
  return { p: c, n, rough: hi - lo, ground: [gr[0] / 4, gr[1] / 4, gr[2] / 4] };
}

/** The rock's height over a grid round a site (in the site's frame), as a function of x, z in U. */
function liftOver(field, p, n, span) {
  const qn = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), n);
  const ax = new THREE.Vector3(1, 0, 0).applyQuaternion(qn), az = new THREE.Vector3(0, 0, 1).applyQuaternion(qn);
  const N = 9, H = new Float32Array(N * N), q = new THREE.Vector3(), s = new THREE.Vector3();
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
    const x = (i / (N - 1) - 0.5) * 2 * span, z = (j / (N - 1) - 0.5) * 2 * span;
    q.copy(p).addScaledVector(ax, x).addScaledVector(az, z).normalize();
    H[i * N + j] = field.at(q, s).sub(p).dot(n) / SITE_U;
  }
  const g = (N - 1) / ((2 * span) / SITE_U);
  return (x, z) => {
    const fx = THREE.MathUtils.clamp(x * g + (N - 1) / 2, 0, N - 1.001), fz = THREE.MathUtils.clamp(z * g + (N - 1) / 2, 0, N - 1.001);
    const i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j;
    return (H[i * N + j] * (1 - u) + H[(i + 1) * N + j] * u) * (1 - v) + (H[i * N + j + 1] * (1 - u) + H[(i + 1) * N + j + 1] * u) * v;
  };
}

/**
 * The parts of a site, in site units (U) with +y up and the ground at y = 0.
 * `sink` (U) is how far below 0 the ground may fall away under the site's
 * edge: anything standing on the ground reaches down that far.
 */
function siteKit(K, sink) {
  const X = Math.PI / 2;
  const put = (geo, x, y, z, rot = 0) => geo.rotateY(rot).translate(x, y, z);
  const S = {
    /** A footing slab, its top at y = h. */
    foot(x, z, w, d, h = 0.015, rot = 0, kind = DARK, tint = 0.55) {
      K.add(put(new THREE.BoxGeometry(w, h + sink, d), x, (h - sink) / 2, z, rot), kind, tint);
    },
    /** A pressurised module lying on saddles, along local x (turned by rot). */
    can(x, z, r, len, rot = 0, paint = false, y = 0) {
      const cy = y + r * 1.25;
      K.add(put(new THREE.CylinderGeometry(r, r, len, 14).rotateZ(X), x, cy, z, rot), HULL);
      for (const e of [-1, 1]) {
        K.add(put(new THREE.SphereGeometry(r, 14, 6, 0, Math.PI * 2, 0, X).scale(1, 0.45, 1).rotateZ(-e * X).translate(e * len / 2, 0, 0), x, cy, z, rot), HULL, 0.95);
        // Saddle down to the ground.
        K.add(put(new THREE.BoxGeometry(r * 0.35, r * 1.25 + y + sink, r * 1.6).translate(e * len * 0.3, (r * 1.25 + y - sink) / 2 - y, 0), x, y, z, rot), DARK, 0.6);
      }
      if (paint) K.add(put(new THREE.CylinderGeometry(r * 1.02, r * 1.02, len * 0.22, 14, 1, true).rotateZ(X), x, cy, z, rot), PAINT);
      // A row of windows down one side.
      for (let i = 0; i < 4; i++) K.add(put(new THREE.BoxGeometry(len * 0.09, r * 0.22, r * 0.08).translate((i - 1.5) * len * 0.18, 0, r * 0.98), x, cy + r * 0.2, z, rot), WINDOW);
      return cy;
    },
    /** A covered link between two modules (a pressurised walkway). */
    tube(x0, z0, x1, z1, y, r = 0.02) {
      K.strut(x0, y, z0, x1, y, z1, r * 2.4, HULL, 0.85);
    },
    /** A storage silo: shell, cone roof, a band, a ladder, a ring footing. */
    silo(x, z, r, h, paint = false) {
      K.add(new THREE.CylinderGeometry(r * 1.15, r * 1.2, 0.015 + sink, 12).translate(x, (0.015 - sink) / 2, z), DARK, 0.55);
      K.add(new THREE.CylinderGeometry(r, r, h, 14).translate(x, h / 2, z), HULL, 0.95);
      K.add(new THREE.CylinderGeometry(r * 0.15, r, r * 0.6, 14).translate(x, h + r * 0.3, z), HULL, 0.9);
      K.add(new THREE.CylinderGeometry(r * 1.02, r * 1.02, h * 0.12, 14, 1, true).translate(x, h * 0.78, z), paint ? PAINT : DARK, paint ? 1 : 0.7);
      K.box(r * 0.12, h, r * 0.06, x + r, h / 2, z, DARK, 0.6);
      return h + r * 0.6;
    },
    /** A lattice tower: four legs leaning in, rings and cross-bracing. Returns its top. */
    tower(x, z, w, h, t = 0.008, kind = DARK) {
      const top = w * 0.45;
      const L = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
      for (const [a, c] of L) K.strut(x + a * w / 2, -sink, z + c * w / 2, x + a * top / 2, h, z + c * top / 2, t, kind);
      const bays = Math.max(2, Math.round(h / (w * 1.2)));
      for (let i = 0; i <= bays; i++) {
        const f = i / bays, y = f * h, hw = (w + (top - w) * f) / 2;
        for (let j = 0; j < 4; j++) { const [a, c] = L[j], [a2, c2] = L[(j + 1) % 4]; K.strut(x + a * hw, y, z + c * hw, x + a2 * hw, y, z + c2 * hw, t * 0.7, kind); }
        if (i < bays) {
          const f2 = (i + 1) / bays, y2 = f2 * h, hw2 = (w + (top - w) * f2) / 2;
          for (let j = 0; j < 4; j++) { const [a, c] = L[j], [a2, c2] = L[(j + 1) % 4]; K.strut(x + a * hw, y, z + c * hw, x + a2 * hw2, y2, z + c2 * hw2, t * 0.6, kind, 0.85); }
        }
      }
      return h;
    },
    /** A floodlight on a pole: warm, small, and only lit once the site is held. */
    lamp(x, z, h = 0.14) {
      K.strut(x, -sink, z, x, h, z, 0.008, DARK);
      K.box(0.03, 0.012, 0.02, x, h, z, DARK, 0.7);
      K.box(0.022, 0.006, 0.014, x, h - 0.008, z, WINDOW);
    },
    /** A comms mast: a lattice tower, a dish and a beacon. */
    mast(x, z, h) {
      S.tower(x, z, 0.05, h, 0.006);
      K.dish(0.05, x + 0.03, h * 0.75, z, [0.6, 0.7, 0.3]);
      K.box(0.012, 0.012, 0.012, x, h + 0.008, z, STROBE);
    },
    /** A row of solar panels on posts, tipped towards the sky. */
    solar(x, z, len, n, rot = 0, tilt = 0.45) {
      const step = len / n;
      for (let i = 0; i < n; i++) {
        const px = (i - (n - 1) / 2) * step;
        K.add(put(new THREE.BoxGeometry(step * 0.92, 0.006, 0.14).rotateX(tilt).translate(px, 0.07, 0), x, 0, z, rot), SOLAR);
        K.add(put(new THREE.BoxGeometry(0.008, 0.07 + sink, 0.008).translate(px, (0.07 - sink) / 2, 0), x, 0, z, rot), DARK, 0.6);
      }
      K.add(put(new THREE.BoxGeometry(len, 0.008, 0.008).translate(0, 0.07, 0), x, 0, z, rot), DARK, 0.7);
    },
    /** A bank of radiator panels standing on edge, with their manifold. */
    radiators(x, z, len, h, n, rot = 0) {
      const step = len / n;
      for (let i = 0; i < n; i++) K.add(put(new THREE.BoxGeometry(step * 0.9, h, 0.006).translate((i - (n - 1) / 2) * step, h / 2 + 0.03, 0), x, 0, z, rot), RAD, 0.9 + K.r() * 0.15);
      K.add(put(new THREE.BoxGeometry(len * 1.04, 0.03 + sink, 0.03).translate(0, (0.03 - sink) / 2, 0), x, 0, z, rot), DARK, 0.6);
      K.add(put(new THREE.CylinderGeometry(0.008, 0.008, len, 6).rotateZ(X).translate(0, h + 0.035, 0), x, 0, z, rot), HULL, 0.8);
    },
    /** A conveyor gallery on trestles (or an enclosed tube, on low-gravity rock). */
    conveyor(x0, y0, z0, x1, y1, z1, closed = false) {
      const d = new THREE.Vector3(x1 - x0, y1 - y0, z1 - z0);
      const len = d.length();
      if (closed) K.pipe(x0, y0, z0, x1, y1, z1, 0.018, HULL);
      else K.boom(x0, y0, z0, [d.x, d.y, d.z], len, 0.03, HULL, 0.85);
      const n = Math.max(1, Math.floor(len / 0.18));
      for (let i = 1; i <= n; i++) {
        const f = i / (n + 1), px = x0 + d.x * f, py = y0 + d.y * f, pz = z0 + d.z * f;
        if (py > 0.02) K.strut(px, -sink, pz, px, py, pz, 0.012, DARK);
      }
    },
    /** A haul truck (or, rot'd, parked): cab, tipper bed, wheels. */
    truck(x, z, rot = 0, y = 0) {
      K.add(put(new THREE.BoxGeometry(0.035, 0.03, 0.04).translate(0.035, 0.03, 0), x, y, z, rot), HULL);
      K.add(put(new THREE.BoxGeometry(0.06, 0.03, 0.045).translate(-0.015, 0.035, 0), x, y, z, rot), DARK, 0.85);
      for (const [wx, wz] of [[-0.03, -1], [-0.03, 1], [0.035, -1], [0.035, 1]]) K.add(put(new THREE.CylinderGeometry(0.014, 0.014, 0.01, 8).rotateX(X).translate(wx, 0.014, wz * 0.025), x, y, z, rot), DARK, 0.5);
    },
    /**
     * An open pit: benches stepping down to a floor, the spoil thrown up as
     * a berm round the rim. The world can't be dug into, so the rim and
     * benches rise round a floor at ground level; from above it reads the
     * same. `oval` squashes it.
     */
    pit(x, z, R, n, oval = 0.85, rot = 0) {
      const pts = [new THREE.Vector2(0, 0)];
      const hb = 0.014, r0 = R * 0.32, step = (R - r0) / n;
      pts.push(new THREE.Vector2(r0, 0));
      for (let i = 0; i < n; i++) {
        const ri = r0 + i * step, y = (i + 1) * hb;
        pts.push(new THREE.Vector2(ri + step * 0.35, y), new THREE.Vector2(ri + step, y));
      }
      const H = n * hb;
      // A low berm at the rim, then a long apron of spoil fading into the ground.
      pts.push(new THREE.Vector2(R * 1.04, H + 0.004), new THREE.Vector2(R * 1.14, H * 0.6), new THREE.Vector2(R * 1.3, H * 0.15), new THREE.Vector2(R * 1.4, -sink));
      // Lathe profiles run bottom to top; outward and down needs the faces flipped.
      const geo = new THREE.LatheGeometry(pts.reverse(), 30).scale(1, 1, oval);
      // A ragged edge to the spoil: dumped where the trucks went, not a circle.
      const P = geo.attributes.position, ph = K.r() * 6, ph2 = K.r() * 6;
      for (let i = 0; i < P.count; i++) {
        const px = P.getX(i), pz = P.getZ(i), rho = Math.hypot(px, pz);
        if (rho < R * 1.06) continue;
        const a = Math.atan2(pz, px), f = 1 + ((rho - R * 1.06) / R) * (0.5 * Math.sin(3 * a + ph) + 0.3 * Math.sin(7 * a + ph2));
        P.setX(i, px * f); P.setZ(i, pz * f);
      }
      K.add(put(geo, x, 0, z, rot), GROUND, 0.92);
      // Fresh-cut floor and bench faces are darker than the weathered surface.
      K.add(put(new THREE.CircleGeometry(r0 * 1.02, 20).rotateX(-X).scale(1, 1, oval), x, 0.002, z, rot), GROUND, 0.7);
      return { H, r0, step, hb };
    },
    /** A haul road of compacted ground, from (x0, y0, z0) up to (x1, y1, z1). */
    ramp(x0, y0, z0, x1, y1, z1, w = 0.05) {
      const d = new THREE.Vector3(x1 - x0, y1 - y0, z1 - z0), len = d.length();
      const geo = new THREE.BoxGeometry(w, 0.006, len).translate(0, 0.003, len / 2);
      geo.lookAt(d); // (BufferGeometry.lookAt turns +z to face d)
      K.add(geo.translate(x0, y0, z0), GROUND, 1.15);
    },
    /** A spoil heap. */
    heap(x, z, r, h, tint = 1.02) {
      const pts = [new THREE.Vector2(r * 1.08, -sink), new THREE.Vector2(r, 0), new THREE.Vector2(r * 0.7, h * 0.55), new THREE.Vector2(r * 0.35, h * 0.92), new THREE.Vector2(0, h)];
      K.add(new THREE.LatheGeometry(pts, 16).scale(1, 1, 0.75 + K.r() * 0.2).rotateY(K.r() * 3).translate(x, 0, z), GROUND, tint);
    },
    /** A drill rig: crawler, cab, mast with its drill string. */
    rig(x, z, h, y = 0, rot = 0) {
      K.add(put(new THREE.BoxGeometry(0.1, 0.025, 0.07).translate(0, 0.0125, 0), x, y, z, rot), DARK, 0.6);
      K.add(put(new THREE.BoxGeometry(0.05, 0.035, 0.05).translate(0.02, 0.042, 0), x, y, z, rot), HULL, 0.9);
      K.add(put(new THREE.BoxGeometry(0.04, 0.03, 0.004).translate(0.02, 0.045, 0.026), x, y, z, rot), WINDOW);
      // The mast, a slim lattice leaning over the hole.
      const c = Math.cos(rot), sn = Math.sin(rot);
      const mx = x - 0.03 * c, mz = z + 0.03 * sn;
      for (const [a, b2] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) K.strut(mx + a * 0.012, y + 0.025, mz + b2 * 0.012, mx + a * 0.006, y + h, mz + b2 * 0.006, 0.006, DARK);
      for (let i = 1; i < 5; i++) K.box(0.022 - i * 0.002, 0.004, 0.022 - i * 0.002, mx, y + 0.025 + (h - 0.025) * (i / 5), mz, DARK, 0.7);
      K.box(0.02, 0.016, 0.02, mx, y + h, mz, HULL);
      K.strut(mx, y - 0.02, mz, mx, y + h, mz, 0.006, HULL, 0.7);
    },
    /** A processing plant: a hall, a taller crusher house, roof machinery. */
    plant(x, z, w, d, h, rot = 0) {
      S.foot(x, z, w * 1.12, d * 1.15, 0.012, rot);
      K.add(put(new THREE.BoxGeometry(w, h, d).translate(0, h / 2, 0), x, 0, z, rot), HULL, 0.95);
      K.add(put(new THREE.BoxGeometry(w * 1.01, h * 0.12, d * 1.01).translate(0, h * 0.82, 0), x, 0, z, rot), PAINT);
      K.add(put(new THREE.BoxGeometry(w * 0.38, h * 0.75, d * 0.7).translate(-w * 0.25, h * 1.35, 0), x, 0, z, rot), HULL, 0.9);
      for (let i = 0; i < 5; i++) K.add(put(new THREE.BoxGeometry(w * 0.12, h * 0.08, 0.004).translate((i - 2) * w * 0.18, h * 0.5, d / 2 + 0.002), x, 0, z, rot), WINDOW);
      for (let i = 0; i < 3; i++) K.add(put(new THREE.BoxGeometry(w * 0.12, h * 0.18, d * 0.2).translate(w * (0.08 + i * 0.13), h + h * 0.09, (i - 1) * d * 0.25), x, 0, z, rot), DARK, 0.7);
    },
    /** A landing pad: a ring-marked slab with edge lights. */
    pad(x, z, r) {
      K.add(new THREE.CylinderGeometry(r, r * 1.04, 0.012 + sink, 20).translate(x, (0.012 - sink) / 2, z), DARK, 0.5);
      K.add(new THREE.RingGeometry(r * 0.6, r * 0.7, 20).rotateX(-X).translate(x, 0.0125, z), PAINT);
      for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; K.box(0.01, 0.01, 0.01, x + Math.cos(a) * r * 0.92, 0.016, z + Math.sin(a) * r * 0.92, NAV_G); }
    },
    /** An ore lander on its legs. */
    lander(x, z, y = 0.012) {
      K.add(new THREE.CapsuleGeometry(0.032, 0.05, 2, 10).translate(x, y + 0.085, z), HULL);
      K.add(new THREE.CylinderGeometry(0.034, 0.034, 0.02, 10, 1, true).translate(x, y + 0.1, z), PAINT);
      K.add(new THREE.CylinderGeometry(0.012, 0.026, 0.03, 10, 1, true).translate(x, y + 0.035, z), DARK, 0.6);
      for (let i = 0; i < 4; i++) { const a = (i / 4) * Math.PI * 2 + 0.6; K.strut(x + Math.cos(a) * 0.025, y + 0.07, z + Math.sin(a) * 0.025, x + Math.cos(a) * 0.065, y, z + Math.sin(a) * 0.065, 0.006, DARK); }
    },
    /** A tank lying in a cradle. */
    tank(x, z, r, len, rot = 0, paint = false) {
      K.add(put(new THREE.CapsuleGeometry(r, len, 3, 12).rotateZ(X), x, r * 1.1, z, rot), HULL, 0.95);
      if (paint) K.add(put(new THREE.CylinderGeometry(r * 1.03, r * 1.03, len * 0.25, 12, 1, true).rotateZ(X), x, r * 1.1, z, rot), PAINT);
      for (const e of [-0.3, 0.3]) K.add(put(new THREE.BoxGeometry(r * 0.3, r * 1.1 + sink, r * 1.6).translate(e * len, (r * 1.1 - sink) / 2, 0), x, 0, z, rot), DARK, 0.6);
    },
    /** A reactor: a half-buried vault, a containment dome, radiator wings. */
    reactor(x, z, rot = 0) {
      K.add(put(new THREE.CylinderGeometry(0.08, 0.09, 0.05 + sink, 12).translate(0, (0.05 - sink) / 2, 0), x, 0, z, rot), DARK, 0.6);
      K.add(put(new THREE.SphereGeometry(0.065, 14, 6, 0, Math.PI * 2, 0, X).translate(0, 0.05, 0), x, 0, z, rot), HULL, 1.05);
      for (const e of [-1, 1]) S.radiators(x + Math.cos(rot) * e * 0.22, z - Math.sin(rot) * e * 0.22, 0.28, 0.09, 4, rot);
    },
    /** Guy cables from a height down to anchors in the rock (low gravity). */
    guys(x, z, h, r) {
      for (let i = 0; i < 3; i++) { const a = (i / 3) * Math.PI * 2 + 0.4; K.strut(x, h, z, x + Math.cos(a) * r, -sink * 0.5, z + Math.sin(a) * r, 0.003, DARK, 0.8); }
    },
  };
  return S;
}

/**
 * A mine. On a moon: an open pit of terraced benches with spoil heaps, drill
 * rigs and haul trucks in it, a ramp up the side, and the ore going by
 * conveyor to the plant; a crew module, power and comms beside. On an
 * asteroid (next to no gravity) the same plant, but the cut is shallow and
 * hooded, conveyors are sealed tubes, ore goes into spherical tanks and
 * tall things are guyed down.
 *
 *  I: a small pit with one rig, a hopper and a silo, a crew module, a few
 *     solar panels and a mast.
 *  II: the pit widened and deepened, a second rig, a processing plant and
 *     silos on a conveyor, a second module, radiators, more trucks.
 *  III: a big pit, a refinery and a reactor with radiator wings, a tank
 *     farm, a third module, and a landing pad (or, on rock, a tug berth)
 *     where the ore leaves.
 */
function mineSite(K, level, rock, sink) {
  const S = siteKit(K, sink);
  const L2 = level >= 2, L3 = level >= 3;
  // The pit, west of centre; the works east of it.
  const R = [0.34, 0.46, 0.6][level - 1];
  const px = -0.2 - (level - 1) * 0.08, pz = 0.02;
  const benches = rock ? 2 : level + 2;
  const pit = S.pit(px, pz, R, benches, rock ? 0.95 : 0.82, 0.3);
  const rimY = pit.H;
  // Spoil heaps, beyond the rim.
  S.heap(px - R * 1.45, pz + R * 0.6, 0.16 + level * 0.02, 0.025 + level * 0.005, 0.94);
  if (L2) S.heap(px - R * 0.6, pz - R * 1.5, 0.18, 0.03, 0.9);
  if (L3) S.heap(px + R * 0.3, pz + R * 1.5, 0.2, 0.035, 0.97);
  // Rigs on the floor and benches; trucks on the ramp.
  S.rig(px + 0.04, pz - 0.03, 0.2, 0, 0.6);
  if (L2) S.rig(px - pit.r0 * 0.9 - pit.step, pz + 0.1, 0.17, pit.hb, 2.2);
  if (L3) S.rig(px + 0.05, pz + pit.r0 + pit.step * 1.2, 0.18, pit.hb * 2, 4.1);
  if (rock) {
    // A capture hood over the cut: in microgravity the spoil would fly off.
    K.add(new THREE.CylinderGeometry(R * 0.4, R * 0.6, 0.035, 18, 1, true).translate(px, 0.09, pz), DARK, 0.6);
    for (let i = 0; i < 3; i++) { const a = (i / 3) * Math.PI * 2 + 0.5; K.strut(px + Math.cos(a) * R * 0.8, 0.07, pz + Math.sin(a) * R * 0.8, px + Math.cos(a) * R * 1.05, -sink, pz + Math.sin(a) * R * 1.05, 0.012, DARK); }
  } else {
    S.ramp(px + pit.r0 * 0.8, 0.004, pz - pit.r0 * 0.5, px + R * 1.05, rimY + 0.008, pz - R * 0.75);
    S.truck(px + pit.r0 * 1.6, pz - R * 0.45, -0.65, rimY * 0.45);
    if (L2) S.truck(px + R * 1.25, pz - R * 0.95, 0.4, 0);
    if (L3) S.truck(px - pit.r0 * 0.6, pz - pit.r0 * 0.2, 1.9, 0);
  }
  // Ore handling: a hopper at the rim, a conveyor to the silos (and plant).
  const hx = px + R * 1.25, hz = pz + 0.02;
  S.foot(hx, hz, 0.1, 0.1, rimY);
  K.add(new THREE.CylinderGeometry(0.065, 0.025, 0.07, 4).rotateY(Math.PI / 4).translate(hx, rimY + 0.07, hz), HULL, 0.9);
  K.add(new THREE.CylinderGeometry(0.067, 0.067, 0.012, 4).rotateY(Math.PI / 4).translate(hx, rimY + 0.1, hz), PAINT);
  const sx = L2 ? 0.72 : 0.42, sz = L2 ? -0.28 : -0.06;
  if (rock) {
    for (let i = 0; i < level; i++) {
      const tx = sx + (i % 2) * 0.12, tz = sz + Math.floor(i / 2) * 0.13 - (L2 ? 0 : 0.0);
      K.add(new THREE.SphereGeometry(0.06, 14, 10).translate(tx, 0.075, tz), HULL, 0.95);
      K.add(new THREE.CylinderGeometry(0.062, 0.062, 0.015, 14, 1, true).translate(tx, 0.075, tz), i === 0 ? PAINT : DARK, i === 0 ? 1 : 0.7);
      S.foot(tx, tz, 0.07, 0.07, 0.02);
    }
    S.conveyor(hx, rimY + 0.05, hz, sx, 0.08, sz, true);
  } else {
    S.silo(sx, sz, 0.055, 0.2, true);
    if (L2) S.silo(sx, sz + 0.16, 0.055, 0.2);
    S.conveyor(hx + 0.03, rimY + 0.08, hz, sx - 0.06, 0.2, sz, false);
  }
  if (L2) {
    // The processing plant between the hopper and the silos.
    S.plant(0.42, 0.06, 0.24, 0.15, 0.09, 0.15);
    S.conveyor(hx + 0.05, rimY + 0.06, hz + 0.02, 0.3, 0.1, 0.05, rock);
  }
  // Crew: modules linked by covered walkways, on footings.
  const cans = [[0.3, 0.38, 0.4], [0.58, 0.42, -0.3], [0.48, 0.66, 1.2]].slice(0, level);
  let prev = null;
  for (const [cx, cz, rot] of cans) {
    S.foot(cx, cz, 0.3, 0.12, 0.012, rot);
    const cy = S.can(cx, cz, 0.05, 0.2, rot, prev === null);
    if (prev) S.tube(prev[0], prev[1], cx, cz, cy);
    prev = [cx, cz];
  }
  // Power and comms.
  S.solar(0.02, 0.62, 0.42, 4, 0.15);
  if (L2) S.solar(0.08, 0.82, 0.42, 4, 0.15);
  S.radiators(0.72, 0.18, 0.16 + level * 0.06, 0.06, 2 + level, Math.PI / 2);
  S.mast(0.78, 0.55, 0.32);
  if (rock) S.guys(0.78, 0.55, 0.25, 0.14);
  S.lamp(px + R * 0.9, pz + R * 0.75);
  if (L2) S.lamp(px - R * 0.2, pz - R * 1.1);
  S.lamp(0.55, -0.02);
  if (L3) {
    // A reactor and its radiators, a tank farm, and where the ore leaves.
    S.reactor(-0.25, 0.9, 0.2);
    for (let i = 0; i < 4; i++) S.tank(0.95 + (i % 2) * 0.1, 0.2 + Math.floor(i / 2) * 0.13, 0.04, 0.14, Math.PI / 2, i === 0);
    // A refinery column beside the plant.
    K.add(new THREE.CylinderGeometry(0.035, 0.04, 0.3, 12).translate(0.62, 0.15, 0.12), HULL, 0.95);
    K.add(new THREE.CylinderGeometry(0.037, 0.037, 0.04, 12, 1, true).translate(0.62, 0.24, 0.12), PAINT);
    S.tower(0.62, 0.12, 0.1, 0.33, 0.006);
    if (rock) {
      // A tug berth: a guyed tower with a docking collar, a tug on it.
      S.tower(1.0, -0.4, 0.09, 0.42, 0.008);
      S.guys(1.0, -0.4, 0.35, 0.2);
      K.add(new THREE.CylinderGeometry(0.03, 0.03, 0.02, 12).translate(1.0, 0.43, -0.4), DARK);
      K.add(new THREE.CapsuleGeometry(0.028, 0.08, 2, 10).translate(1.0, 0.5, -0.4), HULL);
      K.add(new THREE.CylinderGeometry(0.03, 0.03, 0.025, 10, 1, true).translate(1.0, 0.5, -0.4), PAINT);
      S.conveyor(sx + 0.1, 0.08, sz, 1.0, 0.3, -0.4, true);
    } else {
      S.pad(1.0, -0.45, 0.17);
      S.lander(1.0, -0.45);
      S.conveyor(sx + 0.05, 0.16, sz + 0.16, 0.86, 0.1, -0.35, false);
    }
    S.lamp(0.85, -0.7);
    S.lamp(-0.05, 1.05);
  }
}
