(() => {
  const P = () => window.__perihelion;
  const E = (x) => 1 - Math.pow(1 - Math.max(0, Math.min(1, x)), 3);
  const S = (x) => { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); };
  const lerp = (a, b, t) => a + (b - a) * t;
  const cam = (tx, ty, tz, dist, pol, az) => { const o = P().view.orbit; o.follow = null; o.goalDist = null; o.vaz = o.vpol = 0; o.target.set(tx, ty, tz); o.dist = dist; o.pol = pol; o.az = az; };
  const ids = () => {
    if (window.__ids) return window.__ids;
    const g = P().game, sim = P().sim;
    const home = g.bodies.filter((b) => b.owner === 0 && b.parent === null).sort((a, b) => b.size - a.size)[0];
    const pos = (b) => { const o = P().view.orbit; return null; };
    const enemy = g.bodies.filter((b) => b.owner > 0 && b.parent === null).sort((a, b) => Math.abs(a.r - home.r) - Math.abs(b.r - home.r))[0];
    return (window.__ids = { home: home.id, to: enemy.id });
  };
  window.__ids_fn = ids;
  const sunAz = (p) => Math.atan2(-p.x, -p.z);
  const go = (id) => { const o = P().view.orbit; o.follow = id; o.goalDist = null; o.vaz = o.vpol = 0; };
  window.__shots = [
    { start: 0, n: 75, setup() {}, frame(i, n) { const t = i / n; cam(0, 0, 0, lerp(105, 72, S(t)), lerp(1.5, 1.4, t), lerp(0.2, 0.75, t)); return 33; } },
    { start: 75, n: 60, settle: 40, setup() { const { game: g, view: v } = P(); v.focus(g, ids().home, false); }, frame(i, n) {
      const o = P().view.orbit; const t = i / n; const b = P().game.bodies[ids().home];
      go(b.id);
      o.dist = b.size * 3.4 * Math.exp(Math.log(85 / (b.size * 3.4)) * Math.pow(S(t), 1.5));
      o.pol = lerp(1.45, 1.1, S(t)); o.az = sunAz(o.target) + lerp(0.9, 0.35, t); return 33; } },
    { start: 135, n: 90, setup() {
      const { game: g, sim } = P(); const from = g.bodies[ids().home], to = g.bodies[ids().to];
      from.ships = 26; sim.launch(g, from, to, 22); window.__f = g.fleets[g.fleets.length - 1]; window.__f.t0 = g.time - 5.5;
    }, frame(i, n) {
      const { game: g, sim } = P(); const t = i / n; const p = sim.fleetState(window.__f, g.time + 0.033);
      cam(p.x, p.y, p.z, lerp(4.2, 7.5, S(t)), lerp(1.32, 1.2, t), sunAz(p) + lerp(-1.0, -0.2, S(t))); return 33; } },
    { start: 225, n: 90, setup() {
      const { game: g, sim, view: v } = P(); const from = g.bodies[ids().home], to = g.bodies[ids().to]; to.ships = 13;
      from.ships = 26; sim.launch(g, from, to, 22); const f = g.fleets[g.fleets.length - 1]; f.t0 = g.time - f.T + 0.35;
      v.focus(g, to.id, false);
    }, frame(i, n) {
      const o = P().view.orbit; const id = ids().to; go(id); const sz = P().game.bodies[id].size;
      if (i < 30) { o.dist = sz * lerp(8, 7, i / 30); o.pol = 1.25; o.az = sunAz(o.target) + lerp(0.5, 0.6, i / 30); return 33; }
      if (i < 60) { const t = (i - 30) / 30; o.dist = sz * lerp(4.4, 4.1, t); o.pol = 1.42; o.az = sunAz(o.target) + lerp(-0.9, -0.8, t); return 20; }
      const t = (i - 60) / 30; o.dist = sz * lerp(6, 9, E(t)); o.pol = lerp(1.1, 1.0, t); o.az = sunAz(o.target) + lerp(0.1, 0.3, t); return 33;
    } },
    { start: 315, n: 60, setup() { window.__warp = true; }, frame(i, n) {
      const { game: g, sim } = P(); const t = i / n;
      for (let k = 0; k < 28; k++) sim.step(g, 0.25);
      cam(0, 0, 0, lerp(150, 420, S(t)), lerp(1.35, 0.75, S(t)), lerp(0.3, 1.5, t)); return 100; } },
    { start: 375, n: 75, setup() {}, frame(i, n) { const t = i / n; cam(0, -58, 0, lerp(170, 150, t), lerp(1.5, 1.47, t), lerp(4.0, 4.2, t)); return 33; } },
  ];
})();
