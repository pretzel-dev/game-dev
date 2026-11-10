// The camera and staging for each shot. Runs in the page; S and A are the
// game's sim and AI modules, the match is already fast-forwarded.
(() => {
  const P = () => window.__perihelion;
  const G = () => P().game;
  const E = (x) => 1 - Math.pow(1 - Math.max(0, Math.min(1, x)), 3);
  const SM = (x) => { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); };
  const lerp = (a, b, t) => a + (b - a) * t;
  const orbit = () => { const o = P().view.orbit; o.goalDist = null; o.vaz = o.vpol = 0; return o; };
  const cam = (p, dist, pol, az) => { const o = orbit(); o.follow = null; o.target.set(p.x, p.y, p.z); o.dist = dist; o.pol = pol; o.az = az; };
  const follow = (id, dist, pol, az) => { const o = orbit(); o.follow = id; const q = S.posAt(G(), G().bodies[id], G().time); o.target.set(q.x, q.y, q.z); o.dist = dist; o.pol = pol; o.az = az; };
  const O = { x: 0, y: 0, z: 0 };
  const sunAz = (p) => Math.atan2(-p.x, -p.z);
  const sim = (sec) => { for (let k = 0; k < Math.round(sec / 0.25); k++) { for (const ai of window.__ais) A.tickAI(G(), ai, 0.25); S.step(G(), 0.25); } };
  const send = (from, to, n) => { const g = G(); g.bodies[from].ships = Math.max(g.bodies[from].ships, n); S.launch(g, g.bodies[from], g.bodies[to], n); return g.fleets[g.fleets.length - 1]; };
  const byName = (n) => G().bodies.find((b) => b.name === n).id;
  window.__shots = {
    // Orbits sweeping round, blue transfer routes curving across them.
    orbits: { n: 75, setup() {
      const g = G();
      const blue = g.bodies.filter((b) => b.owner === 0 && b.kind !== 'visitor');
      const others = g.bodies.filter((b) => b.owner !== 0 && b.parent === null && b.kind !== 'visitor');
      window.__routes = true;
      blue.slice(0, 5).forEach((b, i) => send(b.id, others[(i * 2) % others.length].id, 3 + i));
    }, frame(i, n) { const t = i / n; sim(1.0); const h = S.posAt(G(), G().bodies[byName('Betelline')], G().time);
      cam({ x: h.x * 0.55, y: 0, z: h.z * 0.55 }, lerp(215, 190, t), lerp(1.08, 1.14, t), Math.atan2(h.x, h.z) + lerp(0.12, -0.05, t)); return 33; } },
    // A fleet at its midpoint: burn, flip, brake.
    flip: { n: 60, setup() { window.__routes = false; const g = G(); const f = send(byName('Betelline'), byName('Aldebara'), 4); f.t0 = g.time - f.T / 2 + 3.4; window.__f = f; },
      frame(i, n) { const t = i / n; const f = window.__f; const p = S.fleetState(f, G().time + 0.07); const a = S.fleetState(f, f.t0), b = S.fleetState(f, f.t0 + f.T);
      cam(p, lerp(4.4, 3.8, t), lerp(1.4, 1.33, t), Math.atan2(b.x - a.x, b.z - a.z) + Math.PI / 2 + lerp(-0.35, 0.25, SM(t)));
      // The game caps a frame at 0.1 s, so speed through the flip by moving the fleet's clock.
      const want = i < 15 ? 0.05 : i < 38 ? 0.2 : 0.06; f.t0 -= want - 0.033; return 33; } },
    // A fleet on an assisted route, sweeping past the gas giant.
    assist: { n: 45, setup() {
      const g = G(); const giant = g.bodies.find((b) => b.giant);
      let best = null;
      for (let dt = 0; dt <= 240 && !best; dt += 4) for (const from of g.bodies.filter((b) => b.owner === 0 && b.parent !== giant.id && b.id !== giant.id)) for (const to of g.bodies) {
        if (to === from || to.kind === 'visitor' || from.kind === 'visitor') continue; const p = S.plan(g, from, to, g.time + dt); if (p.assist === giant.id) { best = { dt, from: from.id, to: to.id }; break; } }
      if (best) { sim(best.dt); }
      const f = best ? send(best.from, best.to, 8) : send(byName('Quark'), byName('Celestine'), 8);
      // Put the fleet at its closest pass at the middle of the shot.
      let tc = 0, dmin = 1e9;
      for (let k = 0; k <= 400; k++) { const tt = (k / 400) * f.T; const q = S.fleetState(f, f.t0 + tt); const gp = S.posAt(g, giant, f.t0 + tt); const d = Math.hypot(q.x - gp.x, q.y - gp.y, q.z - gp.z); if (d < dmin) { dmin = d; tc = tt; } }
      f.t0 = g.time - tc + 1.6; window.__f = f; window.__giant = giant.id; window.__assist = { best, dmin };
    }, frame(i, n) { const t = i / n; const p = S.fleetState(window.__f, G().time + 0.07); const gp = S.posAt(G(), G().bodies[window.__giant], G().time);
      const az = Math.atan2(p.x - gp.x, p.z - gp.z); cam(p, lerp(12, 14, t), 1.38, az + lerp(0.16, 0.08, t)); return 70; } },
    // A grown homeworld, ringed with yards and guns.
    empire: { n: 60, setup() {
      const g = G(); const b = g.bodies[byName('Betelline')];
      const add = (type, level) => b.structures.push({ type, level, left: 0 });
      b.structures = b.structures.filter((x) => x.type !== 'defence');
      add('shipyard', 1); add('defence', 3); add('exchange', 2); add('lab', 2);
      b.ships = 24; for (const x of b.structures) x.left = 0;
      g.queue && (g.queue[b.id] = 3);
    }, frame(i, n) { const t = i / n; const id = byName('Betelline'); const b = G().bodies[id]; const q = S.posAt(G(), b, G().time);
      follow(id, b.size * Math.exp(lerp(Math.log(4.2), Math.log(32), SM(t))), lerp(1.2, 0.95, t), sunAz(q) + lerp(-0.9, -0.3, t)); return 33; } },
    // A megaproject ring closing round the giant.
    wonder: { n: 45, setup() {
      const g = G(); const b = g.bodies.find((x) => x.giant); b.owner = 0; b.ships = 6; b.guns = 5;
      b.structures = [{ type: 'skimmer', level: 3, left: 0 }, { type: 'shipyard', level: 1, left: 0 }, { type: 'defence', level: 2, left: 0 }];
      b.project = { key: 'ringyard', left: 470, paid: 2000 }; window.__w = b.id;
    }, frame(i, n) { const t = i / n; const b = G().bodies[window.__w]; const q = S.posAt(G(), b, G().time);
      if (b.project) b.project.left = 480 * (1 - lerp(0.03, 1.0, SM(t * 1.15))) + 0.01;
      follow(b.id, b.size * lerp(10.5, 9.5, t), lerp(0.95, 1.0, t), sunAz(q) + lerp(0.45, 0.65, t)); return 33; } },
    // A blue armada takes the red homeworld.
    battle: { n: 60, setup() {
      const g = G(); const to = g.bodies.find((b) => b.owner === 1 && b.home) || g.bodies.find((b) => b.owner === 1);
      to.ships = 22; to.guns = 6; window.__t = to.id;
      const f = send(byName('Betelline'), to.id, 64); f.t0 = g.time - f.T + 0.45; f.vet = 3;
    }, frame(i, n) { const id = window.__t; const b = G().bodies[id]; const q = S.posAt(G(), b, G().time); const sz = b.size;
      if (i < 28) { const t = i / 28; follow(id, sz * lerp(9, 8, t), 1.22, sunAz(q) + lerp(0.6, 0.7, t)); return 40; }
      const t = (i - 28) / 32; follow(id, sz * lerp(6, 10, E(t)), lerp(1.05, 0.95, t), sunAz(q) + lerp(-0.5, -0.3, t)); return 40; } },
    // System montage.
    binary: { n: 15, setup() {
      const g = G(); let best = 0, dmin = 1e9;
      for (let dt = 0; dt < 2800; dt += 10) { const p = S.starPos(g, 1, g.time + dt); const d = Math.hypot(p.x, p.z); if (d < dmin) { dmin = d; best = dt; } }
      sim(best); window.__assist = { dmin, best };
    }, frame(i, n) { const t = i / n; const s = S.starPos(G(), 1); const m = { x: s.x * 0.5, y: 0, z: s.z * 0.5 }; const d = Math.hypot(s.x, s.z);
      cam(s, lerp(36, 32, t), 1.47, Math.atan2(s.x, s.z) + lerp(0.1, 0.13, t)); return 33; } },
    court: { n: 15, setup() {}, frame(i, n) { const t = i / n; const b = G().bodies.find((x) => x.giant); const q = S.posAt(G(), b, G().time);
      follow(b.id, b.size * lerp(10, 9.4, t), 1.12, sunAz(q) + 0.7 + lerp(0, 0.05, t)); return 33; } },
    crowded: { n: 15, setup() {}, frame(i, n) { const t = i / n; cam(O, lerp(250, 240, t), 0.95, 2.2 + lerp(0, 0.03, t)); return 33; } },
    // Title background: the sun from low on the ecliptic.
    title: { n: 60, setup() {}, frame(i, n) { const t = i / n; cam({ x: 0, y: -58, z: 0 }, lerp(170, 152, t), lerp(1.5, 1.47, t), lerp(4.0, 4.2, t)); return 33; } },
  };
})();
