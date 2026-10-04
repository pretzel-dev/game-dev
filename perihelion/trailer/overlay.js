// Composites the WebGL frame with grade, captions and title. Runs in the page.
(() => {
  const W = 1080, H = 1920, FPS = 30;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const ctx = c.getContext('2d');
  const ACC = '#58b8ff', FG = '#e6ebf7', DIM = '#858ca6';
  const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const ease = (x) => 1 - Math.pow(1 - clamp(x), 3);
  const F = (w, px) => `${w} ${px}px Rajdhani, sans-serif`;
  const CAPS = [
    { a: 12, b: 75, tag: '01', text: 'ONE STAR.' },
    { a: 84, b: 135, tag: '02', text: 'SIX WORLDS.' },
    { a: 150, b: 225, tag: '03', text: 'VERY FEW SHIPS.' },
    { a: 283, b: 315, tag: '04', text: 'TAKE THE SYSTEM.' },
  ];
  function fit(text, w, px, sp, maxW) {
    for (;;) { ctx.font = F(w, px); ctx.letterSpacing = `${sp}px`; if (ctx.measureText(text).width <= maxW || px < 20) return; px -= 2; sp *= 0.97; }
  }
  function chamfer(x, y, w, h, k) {
    ctx.beginPath();
    ctx.moveTo(x + k, y); ctx.lineTo(x + w, y); ctx.lineTo(x + w, y + h - k);
    ctx.lineTo(x + w - k, y + h); ctx.lineTo(x, y + h); ctx.lineTo(x, y + k); ctx.closePath();
  }
  function caption(cp, f) {
    const t = f - cp.a, left = cp.b - f;
    const al = clamp(t / 7) * clamp(left / 5);
    if (al <= 0) return;
    const e = ease(t / 14);
    const y = 1330 + (1 - e) * 18;
    ctx.save();
    ctx.globalAlpha = al;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    // tag with hairlines
    ctx.font = F(600, 30); ctx.letterSpacing = '8px'; ctx.fillStyle = ACC;
    ctx.fillText(cp.tag, W / 2 + 4, y - 120);
    const lw = 150 * e;
    ctx.strokeStyle = 'rgba(88,184,255,0.7)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(W / 2 - 50, y - 130); ctx.lineTo(W / 2 - 50 - lw, y - 130); ctx.moveTo(W / 2 + 50, y - 130); ctx.lineTo(W / 2 + 50 + lw, y - 130); ctx.stroke();
    // main text, tracking tightens in
    const sp = 6 + 40 * (1 - e);
    fit(cp.text, 700, 104, sp, 960);
    ctx.shadowColor = 'rgba(0,0,0,0.85)'; ctx.shadowBlur = 30;
    ctx.fillStyle = FG;
    ctx.fillText(cp.text, W / 2 + parseFloat(ctx.letterSpacing) / 2, y);
    ctx.restore();
  }
  function title(f) {
    const t = f - 375;
    if (t < 0) return;
    ctx.save();
    ctx.fillStyle = `rgba(3,4,10,${0.45 * ease(t / 10)})`; ctx.fillRect(0, 0, W, H);
    ctx.textAlign = 'center';
    const e = ease(t / 20);
    const y = 1010;
    // small kicker
    ctx.globalAlpha = clamp((t - 8) / 10);
    ctx.font = F(600, 30); ctx.letterSpacing = '12px'; ctx.fillStyle = ACC;
    ctx.fillText('A HARD SCI-FI STRATEGY GAME', W / 2 + 6, y - 150);
    // title
    ctx.globalAlpha = clamp(t / 4);
    const sp = 22 + 60 * (1 - e);
    fit('PERIHELION', 700, 150, sp, 1000);
    ctx.shadowColor = 'rgba(255,170,80,0.55)'; ctx.shadowBlur = 50 * (1 - e) + 18;
    ctx.fillStyle = '#fff6ea';
    ctx.fillText('PERIHELION', W / 2 + parseFloat(ctx.letterSpacing) / 2, y);
    ctx.shadowBlur = 0;
    // hairline rule with sun dot
    const lw = 380 * ease((t - 6) / 16);
    ctx.globalAlpha = clamp((t - 6) / 8);
    ctx.strokeStyle = 'rgba(160,180,255,0.45)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(W / 2 - 22, y + 70); ctx.lineTo(W / 2 - 22 - lw, y + 70); ctx.moveTo(W / 2 + 22, y + 70); ctx.lineTo(W / 2 + 22 + lw, y + 70); ctx.stroke();
    ctx.fillStyle = '#ffc56b'; ctx.beginPath(); ctx.arc(W / 2, y + 70, 7, 0, Math.PI * 2); ctx.fill();
    ctx.font = F(500, 40); ctx.letterSpacing = '5px'; ctx.fillStyle = FG;
    ctx.fillText('One solar system. Take it all.', W / 2 + 2, y + 150);
    // call to action panel
    const a = clamp((t - 22) / 10);
    if (a > 0) {
      ctx.globalAlpha = a;
      const bw = 640, bh = 150, bx = (W - bw) / 2, by = 1340 + (1 - ease((t - 22) / 12)) * 20;
      chamfer(bx, by, bw, bh, 22);
      ctx.fillStyle = 'rgba(12,15,28,0.78)'; ctx.fill();
      ctx.strokeStyle = 'rgba(88,184,255,0.75)'; ctx.lineWidth = 2; ctx.stroke();
      ctx.font = F(700, 46); ctx.letterSpacing = '10px'; ctx.fillStyle = FG;
      ctx.fillText('PLAY FREE', W / 2 + 5, by + 66);
      ctx.font = F(500, 30); ctx.letterSpacing = '3px'; ctx.fillStyle = DIM;
      ctx.fillText('in your browser · phone or desktop', W / 2 + 1, by + 112);
      ctx.font = F(600, 34); ctx.letterSpacing = '2px'; ctx.fillStyle = ACC;
      ctx.fillText('pretzel-dev.github.io/game-dev', W / 2 + 1, by + 230);
    }
    ctx.restore();
  }
  function clock(f) {
    if (f < 315 || f >= 375) return;
    const g = window.__perihelion.game;
    const s = g.time, txt = `T+ ${String(Math.floor(s / 3600)).padStart(2, '0')}:${String(Math.floor(s / 60) % 60).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
    ctx.save();
    ctx.globalAlpha = clamp((f - 315) / 5) * clamp((375 - f) / 4);
    ctx.textAlign = 'center';
    ctx.font = F(600, 30); ctx.letterSpacing = '10px'; ctx.fillStyle = ACC;
    ctx.fillText('TIME WARP', W / 2 + 5, 1250);
    ctx.font = F(700, 96); ctx.letterSpacing = '6px'; ctx.fillStyle = FG;
    ctx.shadowColor = 'rgba(0,0,0,0.85)'; ctx.shadowBlur = 24;
    ctx.fillText(txt, W / 2 + 3, 1350);
    ctx.restore();
  }
  window.__comp = (f, q = 0.92) => {
    const sc = document.getElementById('scene');
    ctx.save();
    ctx.filter = 'saturate(1.12) contrast(1.06)';
    ctx.drawImage(sc, 0, 0, W, H);
    ctx.restore();
    // vignette
    const g = ctx.createRadialGradient(W / 2, H * 0.48, H * 0.25, W / 2, H * 0.5, H * 0.72);
    g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,0.6)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    for (const cp of CAPS) caption(cp, f);
    clock(f);
    title(f);
    // flashes on hard hits
    for (const [at, k] of [[225, 0.7], [375, 0.9]]) {
      const d = f - at;
      if (d >= 0 && d < 8) { ctx.fillStyle = `rgba(255,240,220,${k * (1 - d / 8) ** 2})`; ctx.fillRect(0, 0, W, H); }
    }
    // fade in / out
    const fade = Math.max(clamp(1 - f / 14), clamp((f - 443) / 7));
    if (fade > 0) { ctx.fillStyle = `rgba(0,0,0,${fade})`; ctx.fillRect(0, 0, W, H); }
    return c.toDataURL('image/jpeg', q);
  };
})();
