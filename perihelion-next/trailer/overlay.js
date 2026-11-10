// Composites the WebGL frame with a light grade, one caption per shot, and the title.
(() => {
  const W = 1080, H = 1920;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const ctx = c.getContext('2d');
  const FG = '#e6ebf7', ACC = '#58b8ff';
  const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const ease = (x) => 1 - Math.pow(1 - clamp(x), 3);
  const F = (w, px) => `${w} ${px}px Rajdhani, sans-serif`;
  const CAPS = [
    [8, 75, 'EVERY WORLD IS MOVING.'],
    [80, 135, 'BURN. FLIP. BRAKE.'],
    [138, 180, 'SLINGSHOT PAST GIANTS.'],
    [184, 240, 'GROW AN EMPIRE.'],
    [243, 285, 'RAISE MEGAPROJECTS.'],
    [298, 345, 'TAKE THE SYSTEM.'],
    [347, 390, 'NO TWO SYSTEMS ALIKE.'],
  ];
  function fit(text, w, px, sp, maxW) {
    for (;;) { ctx.font = F(w, px); ctx.letterSpacing = `${sp}px`; if (ctx.measureText(text).width <= maxW || px < 20) return sp; px -= 2; sp *= 0.97; }
  }
  function caption([a, b, text], f) {
    const t = f - a, left = b - f;
    const al = clamp(t / 6) * clamp(left / 4);
    if (al <= 0) return;
    const e = ease(t / 12);
    ctx.save();
    ctx.globalAlpha = al;
    ctx.textAlign = 'center';
    const sp = fit(text, 700, 100, 6 + 34 * (1 - e), 960);
    ctx.shadowColor = 'rgba(0,0,0,0.9)'; ctx.shadowBlur = 32;
    ctx.fillStyle = FG;
    ctx.fillText(text, W / 2 + sp / 2, 1330 + (1 - e) * 16);
    ctx.restore();
  }
  function title(f) {
    const t = f - 390;
    if (t < 0) return;
    ctx.save();
    ctx.fillStyle = `rgba(3,4,10,${0.45 * ease(t / 10)})`; ctx.fillRect(0, 0, W, H);
    ctx.textAlign = 'center';
    const e = ease(t / 20), y = 1010;
    ctx.globalAlpha = clamp(t / 4);
    const sp = fit('PERIHELION', 700, 150, 22 + 60 * (1 - e), 1000);
    ctx.shadowColor = 'rgba(255,170,80,0.55)'; ctx.shadowBlur = 50 * (1 - e) + 18;
    ctx.fillStyle = '#fff6ea';
    ctx.fillText('PERIHELION', W / 2 + sp / 2, y);
    ctx.shadowBlur = 0;
    const lw = 380 * ease((t - 6) / 16);
    ctx.globalAlpha = clamp((t - 6) / 8);
    ctx.strokeStyle = 'rgba(160,180,255,0.45)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(W / 2 - 22, y + 70); ctx.lineTo(W / 2 - 22 - lw, y + 70); ctx.moveTo(W / 2 + 22, y + 70); ctx.lineTo(W / 2 + 22 + lw, y + 70); ctx.stroke();
    ctx.fillStyle = '#ffc56b'; ctx.beginPath(); ctx.arc(W / 2, y + 70, 7, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = clamp((t - 14) / 10);
    ctx.font = F(600, 44); ctx.letterSpacing = '8px'; ctx.fillStyle = FG;
    ctx.fillText('PLAY FREE IN YOUR BROWSER', W / 2 + 4, y + 170);
    ctx.font = F(600, 38); ctx.letterSpacing = '2px'; ctx.fillStyle = ACC;
    ctx.fillText('pretzel-dev.github.io/game-dev', W / 2 + 1, y + 232);
    ctx.restore();
  }
  // Glowing transfer routes, projected with the game camera's own numbers
  // (45° field of view, looking at the orbit target).
  function routes() {
    if (!window.__routes) return;
    const { view, game } = window.__perihelion, o = view.orbit;
    const sp = Math.sin(o.pol);
    const cx = o.target.x + o.dist * sp * Math.sin(o.az), cy = o.target.y + o.dist * Math.cos(o.pol), cz = o.target.z + o.dist * sp * Math.cos(o.az);
    let fx = o.target.x - cx, fy = o.target.y - cy, fz = o.target.z - cz; const fl = Math.hypot(fx, fy, fz); fx /= fl; fy /= fl; fz /= fl;
    let rx = -fz, rz = fx; const rl = Math.hypot(rx, rz); rx /= rl; rz /= rl; // forward × up
    const ux = -rz * fy, uy = rz * fx - rx * fz, uz = rx * fy; // right × forward
    const th = Math.tan((45 * Math.PI) / 360), asp = W / H;
    const proj = (p) => { const dx = p.x - cx, dy = p.y - cy, dz = p.z - cz; const z = dx * fx + dy * fy + dz * fz; if (z <= 0.1) return null;
      return [((dx * rx + dz * rz) / (z * th * asp) * 0.5 + 0.5) * W, (-(dx * ux + dy * uy + dz * uz) / (z * th)) * 0.5 * H + H / 2]; };
    ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    for (const f of game.fleets) {
      if (f.owner !== 0) continue;
      const now = game.time, left = f.t0 + f.T - now; if (left <= 0) continue;
      const pts = []; for (let k = 0; k <= 48; k++) { const q = S.fleetState(f, now + (left * k) / 48); const s = proj(q); if (s) pts.push(s); }
      if (pts.length < 2) continue;
      for (const [w, a, blur] of [[10, 0.18, 24], [3.5, 0.95, 10]]) {
        for (let k = 1; k < pts.length; k++) {
          ctx.strokeStyle = `rgba(88,184,255,${a * (1 - (k / pts.length) * 0.6)})`; ctx.lineWidth = w; ctx.shadowColor = ACC; ctx.shadowBlur = blur;
          ctx.beginPath(); ctx.moveTo(...pts[k - 1]); ctx.lineTo(...pts[k]); ctx.stroke();
        }
      }
      const [ex, ey] = pts[pts.length - 1];
      ctx.shadowBlur = 12; ctx.strokeStyle = 'rgba(230,240,255,0.85)'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(ex, ey, 14, 0, Math.PI * 2); ctx.stroke();
      const [hx, hy] = pts[0]; ctx.fillStyle = '#e8f4ff'; ctx.shadowBlur = 20; ctx.beginPath(); ctx.arc(hx, hy, 6, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
  }
  window.__comp = (f, q = 0.92) => {
    ctx.save(); ctx.filter = 'saturate(1.12) contrast(1.06)'; ctx.drawImage(document.getElementById('scene'), 0, 0, W, H); ctx.restore();
    const g = ctx.createRadialGradient(W / 2, H * 0.48, H * 0.25, W / 2, H * 0.5, H * 0.72);
    g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,0.6)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    routes();
    for (const cp of CAPS) caption(cp, f);
    title(f);
    for (const [at, k] of [[285, 0.6], [390, 0.9]]) {
      const d = f - at;
      if (d >= 0 && d < 8) { ctx.fillStyle = `rgba(255,240,220,${k * (1 - d / 8) ** 2})`; ctx.fillRect(0, 0, W, H); }
    }
    const fade = Math.max(clamp(1 - f / 10), clamp((f - 443) / 7));
    if (fade > 0) { ctx.fillStyle = `rgba(0,0,0,${fade})`; ctx.fillRect(0, 0, W, H); }
    return c.toDataURL('image/jpeg', q);
  };
})();
