import * as THREE from 'three';
import { kit, singleHull, HULL, DARK, PAINT, WINDOW, NAV_R, NAV_G, STROBE, THROAT, RAD, SOLAR, GROUND } from './ships.js';
import { rng } from '../sim.js';

/**
 * Buildings on worlds, from the same parts kit as ships and stations
 * (plating, owner's paint, lit windows, ceramic radiators, solar cells).
 *
 * Surface buildings (mine, guns, security bureau, research station,
 * habitat, exchange) are sites: drawn near real scale in one shared unit
 * (SITE_U), laid over the ground under them (asteroids are probed), their
 * earthworks painted with the world's own surface, with a near and a far
 * version (see SITES and siteKit). On a gas giant they stand on a floating
 * deck. Each level adds equipment rather than scaling up. The two orbital
 * ones (shipyard, gas harvester) are built in orbit as one cluster each, at
 * ship scale.
 *
 * Finished buildings use the hull material; ones being built or scrapped
 * show as a hologram (`ghost`). The returned group may carry
 * `userData.wip` (the hull in the yard, in build stages: the view shows
 * them only while a ship is being built, more as it nears completion),
 * `userData.spin` ([{ mesh, axis, rate }]: parts that turn, like a habitat
 * drum) and `userData.lod` (a site's near and far meshes).
 */
export function structureMesh(type, b, k, done, level, uT, ghost, color, env = null) {
  const F = stationUnit(b);
  const K = kit(b.id * 17 + k * 101 + level);
  // Surface buildings are sites: near real scale, in site units, laid over the ground.
  const def = SITES[type];
  const site = def ? siteOn(b, k, env) : null;
  const siteR = site ? def.r[level - 1] * SITE_U : 0;
  const ctx = site && { rock: b.kind === 'asteroid', deck: site.deck, air: !!(env && env.air), sink: site.sink / SITE_U, spins: [] };
  const gk = site && site.key + type + level;
  const r = K.r;
  const extra = []; // [kit, role] built alongside the main mesh
  let place = null; // orbital: a matrix taking the local frame to its spot in orbit

  if (site) {
    if (!siteGeos.has(gk)) def.build(siteKit(K, ctx), K, level, ctx);
  } else if (type === 'shipyard') {
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
    for (const e of [-1, 1]) K.box(L * 0.03, t * 1.4, Wd * 2.02, e * L * 0.47, e * Hh, 0, PAINT); // yard markings on the end beams
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
    // Robot arms on the side rails, reaching in to the work: shoulder, upper
    // arm, elbow, forearm, a tool head.
    for (const [ax, sz] of [[-0.18, 1], [0.12, -1], [0.3, 1]]) {
      const x0 = L * ax, z0 = sz * Wd;
      K.box(c * 0.16, c * 0.12, c * 0.16, x0, Hh * 0.2, z0, DARK, 0.8);
      const [ex, ey, ez] = K.boom(x0, Hh * 0.2, z0, [0.3, 0.5, -sz * 0.8], c * 0.55, c * 0.07, HULL, 0.9);
      K.sphere(c * 0.06, ex, ey, ez, DARK, 0.7, 8);
      const [tx, ty, tz] = K.boom(ex, ey, ez, [0.2, -0.7, -sz * 0.6], c * 0.45, c * 0.05, HULL, 0.85);
      K.box(c * 0.08, c * 0.08, c * 0.08, tx, ty, tz, DARK, 0.6);
      K.light(tx, ty - c * 0.05, tz, WINDOW, c * 0.035);
    }
    // Floodlights on the cradle's corners.
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) K.light(sx * L * 0.48, Hh + t, sz * Wd, WINDOW, c * 0.05);
    // The crew's quarters across the hub, a supply depot of tanks on its
    // truss, and a tug parked alongside.
    K.add(new THREE.CylinderGeometry(c * 0.32, c * 0.32, c * 1.6, 14).translate(hx, 0, 0), HULL, 0.95);
    for (let i = 0; i < 5; i++) K.box(c * 0.05, c * 0.14, c * 0.05, hx + c * 0.32, (i - 2) * c * 0.28, 0, WINDOW);
    K.truss(hx - c * 0.2, -c * 0.9, -c * 0.4, c * 2.6, c * 0.35, 4, c * 0.04);
    for (let i = 0; i < 4; i++) K.strapped(c * 0.22, c * 0.55, hx - c * 0.2 + ((i % 2) ? 0.3 : -0.3) * c, -c * 0.9, c * (0.4 + Math.floor(i / 2) * 1.1), i === 0);
    K.tank(c * 0.16, c * 0.6, hx + c * 1.4, c * 0.9, c * 1.2, HULL);
    K.box(c * 0.3, c * 0.2, c * 0.25, hx + c * 1.4, c * 0.9, c * 1.75, DARK, 0.7);
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
  } else if (ORBITS[type]) {
    // A special world's works in orbit (its old relay ring, a fuel depot, a hulk).
    place = ORBITS[type](K, b);
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
      // Grilles in the intake, and the collector's cable up to the platform.
      for (let j = 0; j < 3; j++) K.add(new THREE.TorusGeometry(c * (0.42 - j * 0.07), c * 0.02, 3, 14).rotateY(Math.PI / 2).translate(x + c * (1.35 - j * 0.12), y - c * 0.05, 0), DARK, 0.6);
      K.strut(x, y + c * 1.85, 0, x * 0.2, c * 5.5 - c * 0.45, 0, c * 0.03, DARK, 0.8);
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
    // The crew can on the platform, and a tanker at the dock taking on fuel.
    K.add(new THREE.CylinderGeometry(c * 0.3, c * 0.3, c * 1.2, 14).rotateZ(Math.PI / 2).translate(0, py + c * 0.65, -len * 0.3), HULL);
    for (let i = 0; i < 6; i++) K.box(c * 0.08, c * 0.05, c * 0.02, (i - 2.5) * c * 0.18, py + c * 0.65, -len * 0.3 + c * 0.3, WINDOW);
    K.tank(c * 0.28, c * 1.2, 0, py, len / 2 + c * 1.9, HULL);
    K.add(new THREE.CylinderGeometry(c * 0.3, c * 0.3, c * 0.35, 12, 1, true).rotateX(Math.PI / 2).translate(0, py, len / 2 + c * 1.9), PAINT);
    K.add(new THREE.CylinderGeometry(c * 0.12, c * 0.22, c * 0.3, 12, 1, true).rotateX(Math.PI / 2).translate(0, py, len / 2 + c * 2.9), DARK, 0.6);
  }
  void r;
  const mk = (geo) => {
    if (place) geo.applyMatrix4(place);
    let m;
    if (!done) m = new THREE.Mesh(geo, ghost);
    else {
      m = singleHull(geo, uT, site && site.tex);
      m.userData.set(color, 1, true);
      m.userData.paint = color;
      if (site) m.userData.ground(site.ground);
    }
    if (site) m.scale.setScalar(siteR);
    if (m.isInstancedMesh) { m.computeBoundingSphere(); m.frustumCulled = true; } // (singleHull turns culling off)
    return m;
  };
  const g = new THREE.Group();
  g.userData.type = type;
  if (site) {
    // Two levels of detail: everything up close, and from further out only
    // the parts big enough to see (the rest would be under a pixel). Built
    // once per site and level, then copied: a world rebuilds its buildings
    // whenever any of them changes.
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
        groundAttrs(geo, site);
        geo.scale(SITE_U / siteR, SITE_U / siteR, SITE_U / siteR);
        geo.computeBoundingSphere();
      }
      // Parts that turn on their own (a drum, a gravity ring): built about
      // their own axle, then stood in place (turned with the site, on the ground).
      const c = Math.cos(site.spin), sn = Math.sin(site.spin);
      pair.push(ctx.spins.map((sp) => {
        const geo = sp.K.build(1, 7 * SITE_U).scale(SITE_U / siteR, SITE_U / siteR, SITE_U / siteR);
        geo.computeBoundingSphere();
        const [x, y, z] = sp.at, px = x * c + z * sn, pz = -x * sn + z * c;
        return { geo, pos: [px * SITE_U, (y + site.lift(px, pz)) * SITE_U, pz * SITE_U], axis: sp.axis, rate: sp.rate };
      }));
      siteGeos.set(gk, pair);
      if (siteGeos.size > 48) siteGeos.delete(siteGeos.keys().next().value); // oldest first
    }
    const mf = mk(pair[0].clone()), mc = mk(pair[1].clone());
    mc.visible = false;
    g.add(mf, mc);
    g.userData.lod = { fine: mf, coarse: mc, r: Math.max(siteR, (def.tall || 0) * SITE_U), extra: [] };
    for (const sp of pair[2]) {
      const m = mk(sp.geo.clone());
      m.position.set(...sp.pos);
      m.rotation.order = 'YXZ';
      m.rotation.y = site.spin;
      (g.userData.spin ||= []).push({ mesh: m, axis: sp.axis, rate: sp.rate });
      g.userData.lod.extra.push(m);
      g.add(m);
    }
    g.position.copy(site.p);
    g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), site.n);
    return g;
  }
  // In orbit: a near version and a far one (without the parts too small to
  // see from there), as for sites.
  const fine = K.build(1, 7, 0.006);
  const coarse = fine.userData.coarse;
  delete fine.userData.coarse;
  const mf = mk(fine), mc = mk(coarse);
  mc.visible = false;
  g.add(mf, mc);
  g.userData.lod = { fine: mf, coarse: mc, r: type === 'shipyard' ? 0.35 : ORBITS[type] ? 0.5 : F * 0.22 * 6, extra: [] };
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
  // The orbital clusters (yard, harvester) sit in one tilted plane round the world.
  g.rotation.x = Math.PI / 2 + 0.35;
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
export const SITE_U = 0.09;
/** The biggest footprint radius of any site, in U (a slot's spot is chosen for it). */
const SITE_MAX_R = 1.4;
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
/** Finished site geometry, [near, far, turning parts] by site, type and level (never drawn itself: meshes get copies). */
const siteGeos = new Map();
const UP = new THREE.Vector3(0, 1, 0);
function siteOn(b, k, env) {
  const body = env && env.body;
  const rock = b.kind === 'asteroid' && body && body.geometry && body.geometry.attributes.color ? body.geometry : null;
  // One spot per building slot, whatever is built there and its level:
  // probed for the biggest footprint, so an upgrade grows the site in place.
  const key = `${b.id}:${k}:${rock ? rock.uuid : b.size}:`;
  if (sites.has(key)) return sites.get(key);
  const R = SITE_MAX_R * SITE_U;
  const rr = rng(b.id * 17 + k * 101 + 5);
  const field = rock && rockField(rock);
  const others = [...sites.values()].filter((o) => o.bid === b.id);
  let best = null;
  for (let i = 0; i < (field ? 6 : 10); i++) {
    const dir = new THREE.Vector3(rr() - 0.5, (rr() - 0.5) * 0.9, rr() - 0.5).normalize();
    const st = field ? probeRock(field, dir, R) : { p: dir.clone().multiplyScalar(b.size), n: dir, rough: 0 };
    // Keep clear of the other buildings here, and (on a world with seas) off the water.
    let score = st.rough;
    for (const o of others) if (o.p.distanceTo(st.p) < R * 2.1) score += 100;
    if (env && env.wet && env.wet(dir)) score += 1000;
    if (!best || score < best.score) best = { ...st, score };
    if (!field && score === 0) break;
  }
  best.bid = b.id;
  const rU = b.size / SITE_U;
  if (b.giant) {
    // No ground on a gas giant: a floating deck just over the cloud tops.
    best.deck = true;
    best.p.multiplyScalar((b.size + 0.03) / b.size);
    best.lift = () => 0;
    best.sink = 0;
  } else if (field) {
    Object.assign(best, liftOver(field, best.p, best.n, R * 1.3));
    best.sink = 0.004;
  } else {
    best.lift = (x, z) => -(rU - Math.sqrt(Math.max(0, rU * rU - x * x - z * z)));
    best.sink = 0.0015;
  }
  best.spin = rr() * Math.PI * 2;
  best.key = key;
  // The earthworks' colour: the world's own map (and a brightness to match
  // its lighting), or the rock's colours (per point, colAt), or a plain grey.
  if (env && env.tex && !b.giant) {
    best.tex = env.tex;
    best.ground = env.groundK;
    best.u0 = Math.atan2(best.n.z, -best.n.x) / (2 * Math.PI);
  } else best.ground = field ? best.mean.map((c) => c * 0.8) : [0.16, 0.15, 0.14]; // (rock is shaded darker than plain lighting)
  sites.set(key, best);
  return best;
}

/**
 * Per point of a site's geometry (in U, laid over the ground), packed in one
 * attribute (a shader has only sixteen): where on the world's map it is
 * (xy), and how light the rock is there against its mean (z).
 */
function groundAttrs(geo, site) {
  const P = geo.attributes.position, n = P.count;
  const g = new Float32Array(n * 3);
  const ao = footShade(geo, site);
  const q = new THREE.Quaternion().setFromUnitVectors(UP, site.n), v = new THREE.Vector3();
  for (let i = 0; i < n; i++) {
    const x = P.getX(i), z = P.getZ(i);
    if (site.tex) {
      v.set(x, P.getY(i), z).multiplyScalar(SITE_U).applyQuaternion(q).add(site.p).normalize();
      // Where THREE.SphereGeometry puts that direction in its uv; unwrapped
      // round the site's own longitude so a site on the seam doesn't tear.
      const u = Math.atan2(v.z, -v.x) / (2 * Math.PI);
      g[i * 3] = site.u0 + ((((u - site.u0 + 0.5) % 1) + 1) % 1) - 0.5;
      g[i * 3 + 1] = 1 - Math.acos(THREE.MathUtils.clamp(v.y, -1, 1)) / Math.PI;
    }
    g[i * 3 + 2] = (site.shadeAt ? site.shadeAt(x, z) : 1) * ao(x, z);
  }
  geo.setAttribute('gnd', new THREE.BufferAttribute(g, 3));
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

/**
 * Contact shade: the ground darkens at the foot of whatever stands on it
 * (less sky reaches it), which is what makes a building look set down
 * rather than floating. Marks the footprint of every part low enough to
 * touch the ground on a grid round the site, blurs it, and returns the
 * shade at a point (x, z in U).
 */
const AO_N = 64, AO_SPAN = 2;
function footShade(geo, site) {
  const P = geo.attributes.position, kind = geo.attributes.kind;
  const G = new Float32Array(AO_N * AO_N), cell = (2 * AO_SPAN) / AO_N;
  const ix = (v) => Math.floor((v + AO_SPAN) / cell);
  for (let t = 0; t < P.count; t += 3) {
    if (kind.getX(t) === GROUND) continue;
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity, low = Infinity;
    for (let j = t; j < t + 3; j++) {
      const x = P.getX(j), z = P.getZ(j);
      x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z);
      low = Math.min(low, P.getY(j) - site.lift(x, z));
    }
    if (low > 0.06 || x1 - x0 > 1 || z1 - z0 > 1) continue; // only what stands on the ground (not long struts and cables)
    for (let i = Math.max(0, ix(x0)); i <= Math.min(AO_N - 1, ix(x1)); i++) for (let k = Math.max(0, ix(z0)); k <= Math.min(AO_N - 1, ix(z1)); k++) G[i * AO_N + k] = 1;
  }
  // Blur twice with a 5-cell box (a soft falloff about a tenth of a U wide).
  const B = new Float32Array(AO_N * AO_N);
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < AO_N; i++) for (let k = 0; k < AO_N; k++) {
      let s = 0, c = 0;
      for (let d = -2; d <= 2; d++) { const kk = k + d; if (kk >= 0 && kk < AO_N) { s += G[i * AO_N + kk]; c++; } }
      B[i * AO_N + k] = s / c;
    }
    for (let i = 0; i < AO_N; i++) for (let k = 0; k < AO_N; k++) {
      let s = 0, c = 0;
      for (let d = -2; d <= 2; d++) { const ii = i + d; if (ii >= 0 && ii < AO_N) { s += B[ii * AO_N + k]; c++; } }
      G[i * AO_N + k] = s / c;
    }
  }
  return (x, z) => {
    const i = ix(x), k = ix(z);
    if (i < 0 || k < 0 || i >= AO_N || k >= AO_N) return 1;
    return 1 - 0.6 * Math.min(1, G[i * AO_N + k] * 1.8);
  };
}

/** The rock round a site (in the site's frame) on a grid: its height (lift) and colour (colAt), as functions of x, z in U. */
function liftOver(field, p, n, span) {
  const qn = new THREE.Quaternion().setFromUnitVectors(UP, n);
  const ax = new THREE.Vector3(1, 0, 0).applyQuaternion(qn), az = new THREE.Vector3(0, 0, 1).applyQuaternion(qn);
  const N = 9, H = new Float32Array(N * N), C = new Float32Array(N * N * 3), q = new THREE.Vector3(), s = new THREE.Vector3(), c = [0, 0, 0];
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
    const x = (i / (N - 1) - 0.5) * 2 * span, z = (j / (N - 1) - 0.5) * 2 * span;
    q.copy(p).addScaledVector(ax, x).addScaledVector(az, z).normalize();
    c[0] = c[1] = c[2] = 0;
    H[i * N + j] = field.at(q, s, c).sub(p).dot(n) / SITE_U;
    C.set(c, (i * N + j) * 3);
  }
  const g = (N - 1) / ((2 * span) / SITE_U);
  const at = (x, z, A, k, w) => {
    const fx = THREE.MathUtils.clamp(x * g + (N - 1) / 2, 0, N - 1.001), fz = THREE.MathUtils.clamp(z * g + (N - 1) / 2, 0, N - 1.001);
    const i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j;
    const a = (ii, jj) => A[(ii * N + jj) * w + k];
    return (a(i, j) * (1 - u) + a(i + 1, j) * u) * (1 - v) + (a(i, j + 1) * (1 - u) + a(i + 1, j + 1) * u) * v;
  };
  // The rock's mean colour, and how much lighter or darker each point is (rocks keep one tint throughout).
  const mean = [0, 0, 0];
  for (let i = 0; i < N * N; i++) for (let j = 0; j < 3; j++) mean[j] += C[i * 3 + j] / (N * N);
  const m = mean[0] + mean[1] + mean[2] || 1;
  return { lift: (x, z) => at(x, z, H, 0, 1), shadeAt: (x, z) => (at(x, z, C, 0, 3) + at(x, z, C, 1, 3) + at(x, z, C, 2, 3)) / m, mean };
}

/**
 * The parts of a site, in site units (U) with +y up and the ground at y = 0.
 * `ctx.sink` (U) is how far below 0 the ground may fall away under the
 * site's edge: anything standing on the ground reaches down that far. On a
 * gas giant (`ctx.deck`) there's no ground: earthworks are left out and the
 * site stands on a floating deck.
 */
function siteKit(K, ctx) {
  const X = Math.PI / 2;
  const sink = ctx.sink, deck = ctx.deck;
  const put = (geo, x, y, z, rot = 0) => geo.rotateY(rot).translate(x, y, z);
  // A ragged edge for ground that's been worked or dumped: not a circle.
  const ragged = (geo, from, amp) => {
    const P = geo.attributes.position, ph = K.r() * 6, ph2 = K.r() * 6;
    for (let i = 0; i < P.count; i++) {
      const px = P.getX(i), pz = P.getZ(i), rho = Math.hypot(px, pz);
      if (rho < from) continue;
      const a = Math.atan2(pz, px), f = 1 + ((rho - from) / from) * amp * (Math.sin(3 * a + ph) + 0.5 * Math.sin(5 * a + ph2) + 0.3 * Math.sin(11 * a + ph * 2));
      P.setX(i, px * f); P.setZ(i, pz * f);
    }
    return geo;
  };
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
      if (deck) return { H: 0, r0: R * 0.32, step: 0, hb: 0 };
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
      if (deck) return;
      const d = new THREE.Vector3(x1 - x0, y1 - y0, z1 - z0), len = d.length();
      const geo = new THREE.BoxGeometry(w, 0.006, len).translate(0, 0.003, len / 2);
      geo.lookAt(d); // (BufferGeometry.lookAt turns +z to face d)
      K.add(geo.translate(x0, y0, z0), GROUND, 1.15);
    },
    /** A spoil heap. */
    heap(x, z, r, h, tint = 1.02) {
      if (deck) return;
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
    /**
     * Worked ground: a ragged apron of disturbed regolith, a little darker,
     * under a site. Not on worlds with air: seen through their haze, flat
     * ground painted outside it reads as a plate.
     */
    worked(x, z, r, tint = 0.8) {
      if (deck || ctx.air) return;
      K.add(ragged(new THREE.RingGeometry(r * 0.005, r, 48, 14).rotateX(-X), r * 0.6, 0.12).translate(x, 0.004, z), GROUND, tint);
    },
    /** Vehicle tracks: a faint line of compacted ground. */
    tracks(x0, z0, x1, z1, w = 0.03) {
      if (deck) return;
      const len = Math.hypot(x1 - x0, z1 - z0);
      K.add(new THREE.BoxGeometry(len, 0.004, w).translate(len / 2, 0.006, 0).rotateY(-Math.atan2(z1 - z0, x1 - x0)).translate(x0, 0, z0), GROUND, 0.8);
    },
    /** A berm: a ring of piled regolith (a blast wall, or shielding). */
    berm(x, z, r, h, w) {
      if (deck) return;
      const pts = [new THREE.Vector2(r + w, -sink), new THREE.Vector2(r + w * 0.35, h), new THREE.Vector2(r - w * 0.35, h), new THREE.Vector2(r - w, -sink)];
      K.add(new THREE.LatheGeometry(pts, 32).translate(x, 0, z), GROUND, 0.95);
    },
    /** A module under a mound of regolith (the shielding), its two ends with their airlocks showing. */
    mound(x, z, r, len, rot = 0) {
      const cy = S.can(x, z, r, len, rot, false);
      K.add(put(new THREE.BoxGeometry(r * 0.7, r * 0.9, r * 0.7).translate(len / 2 + r * 0.45, r * 0.45, 0), x, 0, z, rot), DARK, 0.7);
      K.add(put(new THREE.BoxGeometry(r * 0.3, r * 0.25, r * 0.72).translate(len / 2 + r * 0.45, r * 0.55, 0), x, 0, z, rot), WINDOW);
      if (deck) return cy;
      K.add(put(new THREE.SphereGeometry(1, 18, 8, 0, Math.PI * 2, 0, X).scale(len * 0.46, r * 2.6, r * 2.2), x, -sink, z, rot), GROUND, 0.97);
      return cy;
    },
    /** A bunker: a squat vault under a mound, its door showing. */
    bunker(x, z, w, d, h, rot = 0) {
      K.add(put(new THREE.BoxGeometry(w, h + sink, d).translate(0, (h - sink) / 2, 0), x, 0, z, rot), DARK, 0.65);
      K.add(put(new THREE.BoxGeometry(w * 0.3, h * 0.7, 0.01).translate(0, h * 0.35, d / 2 + 0.004), x, 0, z, rot), PAINT, 0.8);
      if (!deck) K.add(put(new THREE.SphereGeometry(1, 16, 7, 0, Math.PI * 2, 0, X).scale(w * 0.8, h * 1.7, d * 0.62), x, -sink, z, rot), GROUND, 0.95);
    },
    /** A pressurised dome (a greenhouse or a commons), ribbed, with a lit band at its foot. */
    dome(x, z, r, glass = true) {
      K.add(new THREE.CylinderGeometry(r * 1.04, r * 1.08, 0.02 + sink, 20).translate(x, (0.02 - sink) / 2, z), DARK, 0.6);
      K.add(new THREE.SphereGeometry(r, 20, 8, 0, Math.PI * 2, 0, X).translate(x, 0.02, z), glass ? SOLAR : HULL, glass ? 0.8 : 1.05);
      if (glass) for (let i = 0; i < 6; i++) K.add(new THREE.TorusGeometry(r * 1.005, r * 0.012, 3, 24, Math.PI).rotateY((i / 6) * Math.PI).translate(x, 0.02, z), HULL, 0.9);
      for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2; K.box(r * 0.18, r * 0.06, r * 0.05, x + Math.cos(a) * r * 0.98, 0.03, z + Math.sin(a) * r * 0.98, WINDOW); }
    },
    /** A gun mount: a ring base, an armoured turret, twin long barrels, aimed outward along angle a. */
    turret(x, z, a) {
      K.add(new THREE.CylinderGeometry(0.045, 0.055, 0.03 + sink, 10).translate(x, (0.03 - sink) / 2, z), DARK, 0.6);
      K.add(put(new THREE.BoxGeometry(0.08, 0.04, 0.07).translate(-0.01, 0.05, 0), x, 0, z, -a), HULL, 0.95);
      K.add(put(new THREE.BoxGeometry(0.012, 0.004, 0.072).translate(-0.03, 0.071, 0), x, 0, z, -a), PAINT);
      for (const o of [-0.016, 0.016]) K.add(put(new THREE.BoxGeometry(0.2, 0.011, 0.011).translate(0.1, 0, 0).rotateZ(0.32).translate(0.02, 0.055, o), x, 0, z, -a), DARK, 0.55);
    },
    /** A radome: a sensor sphere on a short drum. */
    radome(x, z, r, h = 0.06) {
      K.add(new THREE.CylinderGeometry(r * 0.6, r * 0.75, h + sink, 10).translate(x, (h - sink) / 2, z), DARK, 0.65);
      K.add(new THREE.SphereGeometry(r, 16, 10).translate(x, h + r * 0.8, z), HULL, 1.1);
    },
    /** A big dish on a pedestal, looking up at the sky. */
    bigDish(x, z, r, dir = [0.35, 1, 0.3]) {
      K.add(new THREE.CylinderGeometry(r * 0.25, r * 0.35, r * 0.7 + sink, 8).translate(x, (r * 0.7 - sink) / 2, z), DARK, 0.65);
      K.dish(r, x, r * 0.85, z, dir);
    },
    /** An observatory: a drum with a domed roof and its slit. */
    observatory(x, z, r) {
      K.add(new THREE.CylinderGeometry(r, r * 1.05, r * 0.9 + sink, 16).translate(x, (r * 0.9 - sink) / 2, z), HULL, 0.95);
      K.add(new THREE.SphereGeometry(r * 1.02, 16, 8, 0, Math.PI * 2, 0, X).translate(x, r * 0.9, z), HULL, 1.1);
      K.add(new THREE.BoxGeometry(r * 0.3, r * 1.1, r * 0.4).translate(x, r * 1.4, z + r * 0.75), DARK, 0.35);
      K.add(new THREE.CylinderGeometry(r * 1.02, r * 1.02, r * 0.14, 16, 1, true).translate(x, r * 0.6, z), PAINT);
    },
    /** A block (an operations hall), bermed up its walls where there's ground. */
    block(x, z, w, d, h, rot = 0, paint = true) {
      K.add(put(new THREE.BoxGeometry(w, h + sink, d).translate(0, (h - sink) / 2, 0), x, 0, z, rot), HULL, 0.95);
      if (paint) K.add(put(new THREE.BoxGeometry(w * 1.01, h * 0.14, d * 1.01).translate(0, h * 0.8, 0), x, 0, z, rot), PAINT);
      for (let i = 0; i < 4; i++) K.add(put(new THREE.BoxGeometry(w * 0.14, h * 0.12, 0.004).translate((i - 1.5) * w * 0.22, h * 0.55, d / 2 + 0.002), x, 0, z, rot), WINDOW);
      for (const [ox, oz] of [[-0.25, 0.1], [0.2, -0.15]]) K.add(put(new THREE.BoxGeometry(w * 0.2, h * 0.25, d * 0.3).translate(ox * w, h * 1.12, oz * d), x, 0, z, rot), DARK, 0.7);
      // Regolith banked against the walls (shielding), a slope out from them.
      const bh = Math.min(h * 0.55, 0.045), k = 1 + (1.4 * bh) / Math.min(w, d);
      if (!deck) K.add(put(new THREE.CylinderGeometry(Math.SQRT1_2, Math.SQRT1_2 * k, bh + sink, 4, 1).rotateY(Math.PI / 4).scale(w, 1, d).translate(0, (bh - sink) / 2, 0), x, 0, z, rot), GROUND, 0.95);
    },
    /** A perimeter fence: posts and a top wire, round a circle. */
    fence(x, z, r, n) {
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2, a2 = ((i + 1) / n) * Math.PI * 2;
        K.strut(x + Math.cos(a) * r, -sink, z + Math.sin(a) * r, x + Math.cos(a) * r, 0.05, z + Math.sin(a) * r, 0.005, DARK);
        K.strut(x + Math.cos(a) * r, 0.05, z + Math.sin(a) * r, x + Math.cos(a2) * r, 0.05, z + Math.sin(a2) * r, 0.003, DARK, 0.8);
      }
    },
    /** A floating deck for a gas giant: a platform on a truss, lift envelopes below in the clouds. */
    deck(r) {
      K.add(new THREE.CylinderGeometry(r, r * 0.96, 0.025, 28).translate(0, -0.0125, 0), DARK, 0.6);
      K.add(new THREE.CylinderGeometry(r * 1.005, r * 1.005, 0.01, 28, 1, true).translate(0, -0.005, 0), PAINT);
      for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; K.strut(Math.cos(a) * r * 0.9, -0.025, Math.sin(a) * r * 0.9, Math.cos(a) * r * 0.3, -0.18, Math.sin(a) * r * 0.3, 0.012, DARK); }
      for (let i = 0; i < 3; i++) {
        const a = (i / 3) * Math.PI * 2 + 0.5, ex = Math.cos(a) * r * 0.55, ez = Math.sin(a) * r * 0.55;
        K.add(new THREE.SphereGeometry(r * 0.32, 16, 10).scale(1.6, 0.8, 1).rotateY(-a).translate(ex, -0.22, ez), HULL, 1.05);
        K.strut(ex, -0.16, ez, ex * 0.5, -0.025, ez * 0.5, 0.008, DARK);
      }
      for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; K.box(0.012, 0.012, 0.012, Math.cos(a) * r * 0.98, 0.006, Math.sin(a) * r * 0.98, i % 2 ? NAV_G : NAV_R); }
    },
    /** A part that turns on its own (built in its own kit about its own axle at x, y, z). */
    spinner(x, y, z, axis, rate, build) {
      const K2 = kit(Math.floor(K.r() * 1e6));
      build(K2);
      ctx.spins.push({ K: K2, at: [x, y, z], axis, rate });
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
function mineSite(S, K, level, c) {
  const rock = c.rock, sink = c.sink;
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

/**
 * Guns: a hardened battery. A berm round the position, a magazine bunker in
 * the middle, and two gun mounts per level (each one gun, so the mounts are
 * the guns it adds), each a turret with twin barrels aimed outward. Fire
 * control on its own mast; level II adds a capacitor bank and radiators,
 * level III a second sensor dome.
 */
function gunsSite(S, K, level, c) {
  const R = [0.5, 0.6, 0.7][level - 1];
  if (c.deck) S.deck(R + 0.18);
  S.worked(0, 0, R + 0.14);
  S.berm(0, 0, R * 0.92, 0.04, 0.08);
  S.bunker(0, 0, 0.18, 0.12, 0.05, 0.4);
  const n = level * 2;
  for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2 + 0.3; S.turret(Math.cos(a) * R * 0.58, Math.sin(a) * R * 0.58, a); }
  // Fire control: a radar on a lattice mast, outside the berm.
  const mx = R + 0.08, mz = -0.12;
  S.tower(mx, mz, 0.045, 0.24, 0.005);
  K.dish(0.045, mx, 0.25, mz, [0.4, 1, -0.3]);
  K.box(0.012, 0.012, 0.012, mx, 0.29, mz, STROBE);
  if (c.rock) S.guys(mx, mz, 0.2, 0.12);
  S.foot(mx - 0.02, mz + 0.14, 0.09, 0.07, 0.04);
  if (level >= 2) {
    // A capacitor bank for the guns, with its radiators.
    S.foot(-R - 0.06, 0.1, 0.1, 0.18, 0.05, 0, HULL, 0.9);
    S.radiators(-R - 0.06, 0.1, 0.18, 0.05, 3, Math.PI / 2 + 0.2);
  }
  if (level >= 3) S.radome(0.1, R + 0.1, 0.05, 0.05);
  S.lamp(R * 0.3, -R - 0.05, 0.12);
  S.lamp(-R * 0.4, R + 0.02, 0.12);
  S.tracks(0, 0, -R - 0.25, -0.2);
}

/**
 * Security bureau: a fenced compound. An operations block banked with
 * regolith, a radome, a laser-comm head (a lens, not a gun) on its pedestal,
 * and a tall lattice antenna mast. Level II adds an annex on a covered link,
 * phased-array panels and a second dome.
 */
function bureauSite(S, K, level, c) {
  const R = level >= 2 ? 0.72 : 0.56;
  if (c.deck) S.deck(R + 0.12);
  S.worked(0, 0, R + 0.08);
  S.fence(0, 0, R, 22 + level * 8);
  S.block(-0.08, 0.04, 0.24, 0.15, 0.075, 0.25);
  S.radome(0.22, -0.18, 0.075, 0.07);
  // The laser-comm head: a drum on a pedestal, its lens up.
  K.add(new THREE.CylinderGeometry(0.03, 0.04, 0.09 + c.sink, 8).translate(0.2, (0.09 - c.sink) / 2, 0.2), DARK, 0.65);
  K.add(new THREE.CylinderGeometry(0.035, 0.035, 0.07, 12).rotateX(0.7).translate(0.2, 0.12, 0.21), HULL);
  K.add(new THREE.CylinderGeometry(0.026, 0.026, 0.006, 12).rotateX(0.7).translate(0.2, 0.145, 0.235), WINDOW);
  // The antenna mast, with its cross-arms.
  const mx = -0.32, mz = -0.3;
  S.tower(mx, mz, 0.05, 0.46, 0.005);
  for (const y of [0.3, 0.38]) K.box(0.14, 0.006, 0.006, mx, y, mz, DARK, 0.7);
  K.box(0.012, 0.012, 0.012, mx, 0.47, mz, STROBE);
  if (c.rock) S.guys(mx, mz, 0.4, 0.16);
  S.lamp(0.38, 0.05, 0.12);
  S.lamp(-0.3, 0.32, 0.12);
  if (level >= 2) {
    S.block(0.32, 0.38, 0.16, 0.12, 0.06, -0.4);
    S.tube(0.04, 0.12, 0.26, 0.32, 0.04, 0.018);
    // Phased arrays: flat panels on frames, tipped to the sky.
    for (const [x, z, a] of [[-0.48, 0.1, 0.3], [-0.42, 0.34, -0.5]]) {
      K.add(new THREE.BoxGeometry(0.14, 0.12, 0.012).rotateX(-0.6).rotateY(a).translate(x, 0.08, z), DARK, 0.55);
      K.strut(x, -c.sink, z, x, 0.06, z, 0.01, DARK);
    }
    S.radome(0.48, -0.1, 0.055, 0.05);
  }
}

/**
 * Research station: a growing campus. I: two lab modules on footings, a big
 * dish, solar and a mast. II: an observatory, a third module and a power
 * and cooling block. III: a dish array, an open experiment deck and a
 * landing pad with a lander for the samples.
 */
function labSite(S, K, level, c) {
  const L2 = level >= 2, L3 = level >= 3;
  if (c.deck) S.deck([0.55, 0.7, 0.9][level - 1]);
  S.worked(0, 0, [0.5, 0.65, 0.85][level - 1]);
  S.foot(-0.02, 0.06, 0.3, 0.12, 0.012, 0.2);
  const cy = S.can(-0.02, 0.06, 0.05, 0.22, 0.2, true);
  S.foot(0.24, 0.24, 0.24, 0.1, 0.012, 1.3);
  S.can(0.24, 0.24, 0.045, 0.18, 1.3);
  S.tube(0.06, 0.1, 0.2, 0.18, cy);
  S.bigDish(-0.3, -0.2, 0.12);
  S.solar(0.12, -0.32, 0.3, 3, 0.1);
  S.mast(0.42, -0.06, 0.24);
  if (c.rock) S.guys(0.42, -0.06, 0.2, 0.1);
  S.lamp(-0.16, 0.3, 0.12);
  if (L2) {
    S.observatory(0.08, 0.5, 0.08);
    S.foot(-0.3, 0.32, 0.24, 0.1, 0.012, 2.4);
    S.can(-0.3, 0.32, 0.045, 0.18, 2.4);
    S.tube(-0.12, 0.14, -0.24, 0.26, cy);
    S.foot(0.5, 0.25, 0.12, 0.1, 0.06, 0.4, HULL, 0.85);
    S.radiators(0.5, 0.25, 0.16, 0.05, 3, 0.4);
  }
  if (L3) {
    for (let i = 0; i < 3; i++) S.bigDish(-0.55 + i * 0.14, -0.5 + i * 0.05, 0.06, [0.2, 1, 0.5]);
    // An open experiment deck on legs, instruments on it.
    K.frame(0.22, 0.05, 0.16, -0.58, 0.07, 0.2, 0.006);
    K.box(0.22, 0.006, 0.16, -0.58, 0.095, 0.2, DARK, 0.6);
    K.box(0.05, 0.04, 0.05, -0.62, 0.12, 0.18, HULL);
    K.sphere(0.025, -0.52, 0.12, 0.24, HULL, 1.1, 10);
    for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) K.strut(-0.58 + dx * 0.1, -c.sink, 0.2 + dz * 0.07, -0.58 + dx * 0.1, 0.045, 0.2 + dz * 0.07, 0.008, DARK);
    if (!c.deck) { S.pad(0.62, -0.42, 0.14); S.lander(0.62, -0.42); S.tracks(0.5, -0.32, 0.2, -0.05); }
    S.lamp(0.45, -0.6, 0.12);
  }
}

/**
 * Habitat. On a moon or planet the crew live under the ground they've piled
 * over their modules (the regolith is the radiation shielding): mounds with
 * airlocks showing, a greenhouse dome, walkways; II adds more modules and a
 * big commons dome; III a tower and, on low-gravity worlds, a turning
 * gravity ring. On an asteroid: drums on an axle that spin for gravity,
 * one per level.
 */
function habitatSite(S, K, level, c) {
  if (c.rock) {
    const len = 0.22 + level * 0.12;
    for (const sx of [-1, 1]) {
      K.add(new THREE.CylinderGeometry(0.03, 0.05, 0.2 + c.sink, 8).translate(sx * (len / 2 + 0.04), (0.2 - c.sink) / 2, 0), DARK, 0.65);
      S.guys(sx * (len / 2 + 0.04), 0, 0.18, 0.12);
    }
    K.add(new THREE.CylinderGeometry(0.018, 0.018, len + 0.12, 8).rotateZ(Math.PI / 2).translate(0, 0.2, 0), DARK, 0.7);
    S.spinner(0, 0.2, 0, 'x', 0.5, (D) => {
      for (let i = 0; i < level; i++) {
        const x = (i - (level - 1) / 2) * 0.13;
        D.add(new THREE.CylinderGeometry(0.11, 0.11, 0.1, 22).rotateZ(Math.PI / 2).translate(x, 0, 0), i === 1 ? PAINT : HULL);
        for (let j = 0; j < 12; j++) { const a = (j / 12) * Math.PI * 2; D.box(0.04, 0.01, 0.012, x, Math.cos(a) * 0.111, Math.sin(a) * 0.111, WINDOW); }
      }
    });
    S.solar(0, 0.32, 0.36, 3, 0, 0.6);
    S.mast(0.3, -0.25, 0.22);
    S.guys(0.3, -0.25, 0.18, 0.1);
    S.lamp(-0.25, -0.22, 0.12);
    return;
  }
  const L2 = level >= 2, L3 = level >= 3;
  if (c.deck) S.deck([0.55, 0.75, 0.95][level - 1]);
  S.worked(0, 0, [0.5, 0.68, 0.88][level - 1]);
  S.mound(-0.12, 0.1, 0.05, 0.26, 0.35);
  S.mound(0.16, -0.12, 0.05, 0.24, 1.9);
  S.dome(0.2, 0.2, 0.08);
  S.tube(0.02, 0.0, 0.14, 0.14, 0.05);
  S.solar(-0.15, -0.34, 0.32, 3, 0.2);
  S.radiators(0.4, -0.05, 0.14, 0.05, 2, Math.PI / 2);
  S.lamp(-0.32, 0.12, 0.12);
  if (L2) {
    S.dome(-0.18, 0.42, 0.12, false);
    S.mound(-0.45, 0.05, 0.05, 0.24, 2.6);
    S.mound(0.1, 0.5, 0.05, 0.22, 0.1);
    S.tube(-0.12, 0.2, -0.16, 0.32, 0.05);
    S.lamp(0.3, 0.42, 0.12);
  }
  if (L3) {
    // A tower of quarters, and a gravity ring turning on its hub.
    S.block(0.45, 0.3, 0.1, 0.1, 0.36, 0.3, true);
    for (let f = 0; f < 6; f++) K.add(new THREE.BoxGeometry(0.104, 0.008, 0.104).rotateY(0.3).translate(0.45, 0.06 + f * 0.05, 0.3), WINDOW);
    K.add(new THREE.CylinderGeometry(0.03, 0.045, 0.08 + c.sink, 10).translate(-0.4, (0.08 - c.sink) / 2, -0.32), DARK, 0.65);
    S.spinner(-0.4, 0.1, -0.32, 'y', 0.35, (D) => {
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * Math.PI * 2;
        D.add(new THREE.BoxGeometry(0.05, 0.035, 0.042).rotateY(-a).translate(Math.cos(a) * 0.16, 0, Math.sin(a) * 0.16), i % 8 === 3 ? PAINT : HULL, 0.95);
        if (i % 2 === 0) D.box(0.012, 0.01, 0.02, Math.cos(a) * 0.186, 0, Math.sin(a) * 0.186, WINDOW);
      }
      for (let i = 0; i < 4; i++) { const a = (i / 4) * Math.PI * 2 + 0.4; D.strut(0, 0, 0, Math.cos(a) * 0.14, 0, Math.sin(a) * 0.14, 0.01, DARK); }
      D.add(new THREE.CylinderGeometry(0.03, 0.03, 0.04, 10), HULL);
    });
  }
}

/**
 * Orbital exchange: a space elevator, the bond market's freight line. A wide
 * ground terminal with its freight halls, twin tethers past a port high up
 * to a counterweight, climbers on the way. Level I: the port is a hub with
 * two freight arms; level II adds a docking ring with berths and a cargo
 * annex. (Far shorter than a real one, which would reach geostationary
 * orbit: the port is what reads from a distance.)
 */
const EX_PORT = 8.5, EX_TOP = 12;
function exchangeSite(S, K, level, c) {
  S.worked(0, 0, 0.82);
  K.add(new THREE.CylinderGeometry(0.28, 0.32, 0.06 + c.sink, 16).translate(0, (0.06 - c.sink) / 2, 0), DARK, 0.6);
  K.add(new THREE.CylinderGeometry(0.2, 0.24, 0.08, 16).translate(0, 0.1, 0), HULL, 0.95);
  K.add(new THREE.CylinderGeometry(0.205, 0.205, 0.02, 16, 1, true).translate(0, 0.12, 0), PAINT);
  K.add(new THREE.CylinderGeometry(0.06, 0.08, 0.3, 12).translate(0, 0.29, 0), HULL);
  for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2; K.box(0.04, 0.012, 0.01, Math.cos(a) * 0.243, 0.1, Math.sin(a) * 0.243, WINDOW); }
  // Freight halls and the lines out to them.
  S.block(0.5, 0.15, 0.2, 0.12, 0.07, 0.3);
  S.block(-0.45, -0.3, 0.18, 0.12, 0.06, -0.6);
  S.tracks(0.25, 0.05, 0.42, 0.13);
  S.tracks(-0.22, -0.12, -0.38, -0.26);
  S.radiators(0.15, -0.5, 0.24, 0.06, 3, 0.3);
  S.lamp(0.36, -0.3, 0.14);
  S.lamp(-0.3, 0.38, 0.14);
  // The tethers, the climbers, the port, the counterweight.
  for (const sx of [-1, 1]) K.strut(sx * 0.03, 0.44, 0, sx * 0.03, EX_TOP, 0, 0.045, DARK);
  for (const y of [2.2, 4.8, 7.1, 10.2]) { K.box(0.14, 0.2, 0.12, 0, y, 0, HULL, 0.9); K.box(0.1, 0.03, 0.004, 0, y, 0.062, WINDOW); }
  const P = 0.45;
  K.add(new THREE.CylinderGeometry(P * 0.8, P * 0.8, P, 16).translate(0, EX_PORT, 0), HULL);
  K.add(new THREE.CylinderGeometry(P * 0.82, P * 0.82, P * 0.25, 16, 1, true).translate(0, EX_PORT + P * 0.1, 0), PAINT);
  for (const sx of [-1, 1]) {
    const [ex, ey] = K.boom(sx * P * 0.75, EX_PORT, 0, [sx, 0, 0], P * 1.1, P * 0.14, HULL, 0.9);
    K.box(P * 0.12, P * 0.35, P * 0.35, ex, ey, 0, DARK);
    K.strapped(P * 0.16, P * 0.4, sx * P * 1.2, EX_PORT - P * 0.3, 0, sx > 0);
  }
  K.solar(0, EX_PORT + P * 0.5, 0, P * 2.2, P * 0.8, Math.PI / 2 + 0.3, 0.01);
  if (level >= 2) {
    K.add(new THREE.TorusGeometry(P * 2.4, P * 0.16, 8, 48).rotateX(Math.PI / 2).translate(0, EX_PORT, 0), HULL);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + 0.26;
      K.strut(Math.cos(a) * P * 0.8, EX_PORT, Math.sin(a) * P * 0.8, Math.cos(a) * P * 2.3, EX_PORT, Math.sin(a) * P * 2.3, P * 0.08);
      K.frame(P * 0.6, P * 0.4, P * 0.6, Math.cos(a) * P * 2.8, EX_PORT, Math.sin(a) * P * 2.8, P * 0.04);
      if (i % 2 === 0) K.sphere(P * 0.2, Math.cos(a) * P * 2.8, EX_PORT, Math.sin(a) * P * 2.8, i === 0 ? PAINT : HULL, 1, 10);
    }
    for (let i = 0; i < 16; i++) { const a = (i / 16) * Math.PI * 2; K.box(P * 0.1, P * 0.06, P * 0.12, Math.cos(a) * P * 2.58, EX_PORT, Math.sin(a) * P * 2.58, WINDOW); }
    K.add(new THREE.CylinderGeometry(P * 0.9, P * 0.9, P * 0.7, 16).translate(0, EX_PORT - P * 1.2, 0), HULL);
  }
  K.box(0.6, 0.4, 0.5, 0, EX_TOP, 0, DARK, 0.7);
  K.box(0.35, 0.3, 0.3, 0.25, EX_TOP + 0.3, 0.1, DARK, 0.6);
  K.box(0.03, 0.03, 0.03, 0, EX_TOP + 0.25, 0, STROBE);
}

/**
 * The buildings drawn as sites: footprint radius by level (in U, for their
 * level of detail and cloud clearing), how tall they reach (U, if more than
 * that), and what builds them.
 */
const SITES = {
  mine: { r: [1.0, 1.2, 1.4], build: mineSite },
  defence: { r: [0.75, 0.85, 0.95], build: gunsSite },
  bureau: { r: [0.7, 0.85], build: bureauSite },
  lab: { r: [0.7, 0.85, 1.05], build: labSite },
  habitat: { r: [0.65, 0.85, 1.0], build: habitatSite },
  exchange: { r: [1.0, 1.1], build: exchangeSite, tall: EX_TOP },
};

// ---- Special worlds -------------------------------------------------------
// What makes a special world special is there before anyone builds on it:
// a surface site (in the slot PERK_SLOT, so buildings keep clear of it)
// and, for some, works in orbit. Neutral weathered grey, the same parts
// kit, so they belong to the same history as everything else.

const PERK_SLOT = 50;
const OLD = '#6a7080';

/** The special-world features of b, as [{ m, orbital }] (none on a gas giant's surface). */
export function perkMeshes(b, uT, env) {
  const out = [];
  if (SITES['perk-' + b.perk] && !b.giant) out.push({ m: structureMesh('perk-' + b.perk, b, PERK_SLOT, true, 1, uT, null, OLD, env), orbital: false });
  if (ORBITS['orbit-' + b.perk]) out.push({ m: structureMesh('orbit-' + b.perk, b, 0, true, 1, uT, null, OLD, env), orbital: true });
  return out;
}

/** Rich seam: veins of ore across the ground, crystals where they break the surface, survey stakes and a test pit. */
function seamSite(S, K, level, c) {
  for (let i = 0; i < 6; i++) {
    const a = K.r() * Math.PI, len = 0.5 + K.r() * 0.7, x = (K.r() - 0.5) * 0.9, z = (K.r() - 0.5) * 0.9;
    K.add(new THREE.BoxGeometry(len, 0.03 + c.sink, 0.045 + K.r() * 0.03).translate(0, (0.03 - c.sink) / 2, 0).rotateY(a).translate(x, 0, z), GROUND, 1.5);
    for (let j = 0; j < 3; j++) {
      const f = (j / 2 - 0.5) * len * 0.8, px = x + Math.cos(a) * f, pz = z - Math.sin(a) * f;
      K.add(new THREE.OctahedronGeometry(0.015 + K.r() * 0.015).scale(1, 1.4, 1).rotateZ((K.r() - 0.5) * 0.8).rotateY(K.r() * 3).translate(px, 0.03, pz), SOLAR, 1.4);
    }
  }
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2, x = Math.cos(a) * 0.75, z = Math.sin(a) * 0.75;
    K.strut(x, -c.sink, z, x, 0.08, z, 0.008, DARK);
    K.box(0.014, 0.014, 0.014, x, 0.085, z, NAV_R);
  }
  S.pit(0.4, -0.35, 0.14, 2, 0.9);
}

/** Old relay: a vast weathered dish on its lattice mount, one segment gone; its mast fallen beside it. */
function relaySite(S, K, level, c) {
  K.add(new THREE.CylinderGeometry(0.22, 0.3, 0.06 + c.sink, 10).translate(0, (0.06 - c.sink) / 2, 0), DARK, 0.4);
  S.tower(0, 0, 0.2, 0.34, 0.012, DARK);
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0.45, 1, 0.2).normalize());
  K.add(new THREE.CylinderGeometry(0.55, 0.07, 0.17, 26, 1, true, 0, Math.PI * 1.7).translate(0, 0.085, 0).applyQuaternion(q).translate(0, 0.38, 0), HULL, 0.5);
  K.add(new THREE.TorusGeometry(0.55, 0.012, 4, 26, Math.PI * 1.7).rotateX(Math.PI / 2).translate(0, 0.17, 0).applyQuaternion(q).translate(0, 0.38, 0), DARK, 0.45);
  const feed = new THREE.Vector3(0, 0.42, 0).applyQuaternion(q);
  K.strut(0, 0.38, 0, feed.x, 0.38 + feed.y, feed.z, 0.012, DARK, 0.5);
  K.box(0.05, 0.05, 0.05, feed.x, 0.38 + feed.y, feed.z, HULL, 0.5);
  // The fallen mast, and wreckage.
  K.truss(0.55, 0.05, -0.75, 0.25, 0.07, 6, 0.008, DARK);
  for (let i = 0; i < 5; i++) K.box(0.04 + K.r() * 0.06, 0.02, 0.04 + K.r() * 0.05, (K.r() - 0.5) * 1.3, 0.01, (K.r() - 0.5) * 1.3, HULL, 0.45);
}

/** Listening post: a long-baseline line of dishes, a radome and an operations block, cable runs between. */
function postSite(S, K, level, c) {
  for (let i = 0; i < 6; i++) S.bigDish(-0.8 + i * 0.32, -0.15 + (i % 2) * 0.08, 0.1, [0.25, 1, 0.35]);
  S.tracks(-0.8, -0.15, 0.8, -0.1, 0.015);
  S.radome(0.15, 0.35, 0.09, 0.06);
  S.block(-0.25, 0.38, 0.18, 0.12, 0.06, 0.2);
  S.mast(0.55, 0.4, 0.3);
  S.lamp(-0.5, 0.25, 0.12);
}

/** Fortress rock: gun casemates cut into the rock, trenches between, a big radar dome in the middle. */
function fortressSite(S, K, level, c) {
  S.radome(0, 0, 0.12, 0.06);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + 0.4, x = Math.cos(a) * 0.6, z = Math.sin(a) * 0.6;
    S.bunker(x, z, 0.22, 0.16, 0.07, -a + Math.PI / 2);
    K.add(new THREE.BoxGeometry(0.34, 0.025, 0.025).translate(0.17, 0, 0).rotateY(-a).translate(x + Math.cos(a) * 0.08, 0.05, z + Math.sin(a) * 0.08), DARK, 0.5); // the gun through its embrasure
    S.tracks(0, 0, x * 0.85, z * 0.85, 0.04);
    S.berm(x, z, 0.2, 0.04, 0.05);
  }
  S.mast(-0.25, 0.3, 0.28);
}

/**
 * Ancient archive: not built by anyone here. A ring of dark glassy spires
 * round a low pyramid, faint light in their seams; and beside it, the
 * small camp of the people studying it.
 */
function archiveSite(S, K, level, c) {
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2, x = Math.cos(a) * 0.5, z = Math.sin(a) * 0.5, h = 0.32 + ((i * 37) % 5) * 0.05;
    K.add(new THREE.OctahedronGeometry(1).scale(0.055, h, 0.055).rotateY(a).translate(x, h * 0.75 - c.sink, z), SOLAR, 0.45);
    K.add(new THREE.BoxGeometry(0.006, h * 0.8, 0.006).translate(x * 1.11, h * 0.6, z * 1.11), THROAT, 1);
  }
  K.add(new THREE.ConeGeometry(0.22, 0.2, 4).rotateY(Math.PI / 4).translate(0, 0.1 - c.sink * 0.5, 0), SOLAR, 0.5);
  // The research camp.
  S.foot(0.85, -0.25, 0.26, 0.12, 0.012, 0.4);
  S.can(0.85, -0.25, 0.045, 0.2, 0.4, true);
  S.lamp(0.7, -0.05, 0.12);
  S.lamp(0.95, 0.05, 0.12);
  S.tracks(0.75, -0.2, 0.35, -0.05, 0.02);
}

/** Tidal forge: heat-exchanger towers over the tidal vents, radiator walls, a foundry with its doors aglow. */
function forgeSite(S, K, level, c) {
  for (let i = 0; i < 3; i++) {
    const x = -0.45 + i * 0.3, z = -0.25;
    K.add(new THREE.CylinderGeometry(0.06, 0.08, 0.42 + c.sink, 12).translate(x, (0.42 - c.sink) / 2, z), HULL, 0.9);
    K.add(new THREE.CylinderGeometry(0.065, 0.065, 0.04, 12, 1, true).translate(x, 0.34, z), PAINT);
    for (let j = 0; j < 4; j++) K.add(new THREE.BoxGeometry(0.004, 0.3, 0.07).translate(0.08, 0.2, 0).rotateY((j / 4) * Math.PI * 2).translate(x, 0, z), RAD, 0.95);
    // The vent under it, glowing.
    K.add(new THREE.CylinderGeometry(0.05, 0.05, 0.006, 10).translate(x + 0.1, 0.004, z + 0.08), WINDOW);
  }
  S.radiators(0.1, 0.25, 0.6, 0.12, 6, 0.1);
  S.radiators(0.1, 0.45, 0.6, 0.12, 6, 0.1);
  S.plant(0.55, -0.25, 0.26, 0.18, 0.12, 0.3);
  for (let i = 0; i < 3; i++) K.box(0.05, 0.05, 0.004, 0.47 + i * 0.07, 0.035, -0.15, WINDOW);
  for (let i = 0; i < 3; i++) K.pipe(-0.45 + i * 0.3, 0.12, -0.25, 0.42, 0.06, -0.25, 0.012);
  S.lamp(-0.7, 0.1, 0.14);
}

for (const [k, r, build] of [['seam', 0.95, seamSite], ['relay', 1.0, relaySite], ['post', 1.0, postSite], ['fortress', 0.9, fortressSite], ['archive', 1.0, archiveSite], ['forge', 1.0, forgeSite]]) SITES['perk-' + k] = { r: [r], build };

/** Works in orbit, each building its parts and returning where they sit (local +x along the orbit, +y away from the world). */
const ORBITS = {
  /** The old relay's ring: most of a great truss ring round the world, broken, its nodes dark. */
  'orbit-relay': (K, b) => {
    const R = b.size * 2.1;
    K.add(new THREE.TorusGeometry(R, 0.012, 4, 120, Math.PI * 1.35).rotateX(Math.PI / 2), DARK, 0.5);
    K.add(new THREE.TorusGeometry(R, 0.007, 3, 120, Math.PI * 1.2).rotateX(Math.PI / 2).translate(0, 0.035, 0), DARK, 0.45);
    for (let i = 0; i < 40; i++) {
      const a = (i / 40) * Math.PI * 1.2, cx = Math.cos(a) * R, cz = -Math.sin(a) * R;
      K.strut(cx, 0, cz, cx, 0.035, cz, 0.006, DARK, 0.45);
      if (i % 8 === 0) K.box(0.06, 0.05, 0.06, cx, 0.02, cz, HULL, 0.45);
    }
    return new THREE.Matrix4();
  },
  /** Fuel depot: a tank farm on a truss, transfer arms, a tanker at its berth. */
  'orbit-depot': (K, b) => {
    const c = 0.078;
    K.truss(0, 0, -c * 3, c * 3, c * 0.4, 6, c * 0.05);
    for (let i = 0; i < 6; i++) for (const sx of [-1, 1]) K.strapped(c * 0.32, c * 0.6, sx * c * 0.6, 0, -c * 2.4 + i * c * 0.95, i % 3 === 0 && sx > 0);
    K.add(new THREE.CylinderGeometry(c * 0.4, c * 0.4, c * 1.0, 14).rotateX(Math.PI / 2).translate(0, c * 0.6, c * 3.2), HULL);
    for (let i = 0; i < 6; i++) K.box(c * 0.05, c * 0.1, c * 0.02, (i - 2.5) * c * 0.12, c * 0.6, c * 3.71, WINDOW);
    for (const sx of [-1, 1]) {
      const [ex, ey, ez] = K.boom(sx * c * 0.3, c * 0.4, c * 1.2, [sx, 0.6, 0.2], c * 1.2, c * 0.06, HULL, 0.9);
      K.box(c * 0.15, c * 0.15, c * 0.15, ex, ey, ez, DARK, 0.7);
    }
    K.tank(c * 0.3, c * 1.3, c * 2.2, c * 0.4, c * 1.6, HULL);
    K.radiator(0, -c * 0.4, 0, c * 1.5, c * 3, -Math.PI / 2, 4, c * 0.04);
    K.light(0, c * 0.9, c * 3.2, STROBE, c * 0.12);
    return orbitFrame(b.size * 1.8, 2.2);
  },
  /** Drydock hulk: a huge derelict warship, plates gone in places, wrapped in scaffolding and being worked on. */
  'orbit-hulk': (K, b) => {
    const c = 0.078, L = c * 9, R = c * 0.75;
    for (let i = 0; i < 9; i++) {
      const x = -L / 2 + (i + 0.5) * (L / 9);
      const open = i % 3 === 1;
      K.add(new THREE.CylinderGeometry(R, R, L / 9 * 0.96, 16, 1, true, open ? 0.6 : 0, open ? Math.PI * 1.3 : Math.PI * 2).rotateZ(Math.PI / 2).translate(x, 0, 0), HULL, 0.55 + (i % 2) * 0.1);
      K.add(new THREE.TorusGeometry(R * 0.98, c * 0.05, 4, 18).rotateY(Math.PI / 2).translate(x - L / 18, 0, 0), DARK, 0.5);
    }
    K.add(new THREE.CylinderGeometry(R * 0.7, R * 1.2, c * 1.5, 16, 1, true).rotateZ(Math.PI / 2).translate(-L / 2 - c * 0.7, 0, 0), DARK, 0.5);
    K.add(new THREE.CylinderGeometry(R * 0.3, R, c * 0.9, 16).rotateZ(-Math.PI / 2).translate(L / 2 + c * 0.45, 0, 0), HULL, 0.5);
    // Scaffolding round the middle, a crane, work lights.
    for (let i = 0; i < 3; i++) K.frame(L * 0.18, R * 2.8, R * 2.8, -L * 0.2 + i * L * 0.2, 0, 0, c * 0.03);
    K.boom(0, R * 1.4, R * 1.4, [0.6, 0.4, 0], c * 2, c * 0.08, HULL, 0.9);
    for (let i = 0; i < 6; i++) K.light(-L * 0.3 + i * L * 0.12, R * 1.45, (i % 2 ? 1 : -1) * R * 1.4, WINDOW, c * 0.06);
    return orbitFrame(b.size * 1.9, 4.0);
  },
};
