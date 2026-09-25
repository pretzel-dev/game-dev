// End-of-game stats: highlight tiles, territory and fleet-strength charts,
// and a per-empire table. Plain DOM + inline SVG.
import { PLAYER, NEUTRAL } from './sim.js';
import { ownerColor } from './render.js';

const W = 340;
const H = 130;
const PAD = { l: 30, r: 6, t: 6, b: 18 };

const fmtTime = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
const fmtNum = (n) => (n >= 10000 ? `${(n / 1000).toFixed(0)}k` : n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(Math.round(n)));
const nameOf = (o) => (o === PLAYER ? 'You' : o === NEUTRAL ? 'Neutral' : `Rival ${o}`);

/** A time axis plus a y axis with a few round ticks. */
function frame(tMax, yMax, yFmt) {
  const x = (t) => PAD.l + (t / tMax) * (W - PAD.l - PAD.r);
  const y = (v) => H - PAD.b - (v / yMax) * (H - PAD.t - PAD.b);
  let grid = '';
  for (const f of [0, 0.5, 1]) {
    const v = yMax * f;
    grid += `<line x1="${PAD.l}" x2="${W - PAD.r}" y1="${y(v)}" y2="${y(v)}" class="grid"/>`
      + `<text x="${PAD.l - 4}" y="${y(v) + 3}" text-anchor="end">${yFmt(v)}</text>`;
  }
  const mins = tMax / 60;
  const every = mins <= 4 ? 1 : mins <= 10 ? 2 : mins <= 25 ? 5 : 10;
  for (let m = 0; m * 60 <= tMax; m += every) grid += `<text x="${x(m * 60)}" y="${H - 4}" text-anchor="middle">${m}m</text>`;
  return { x, y, grid };
}

function niceMax(v) {
  if (v <= 0) return 1;
  const p = 10 ** Math.floor(Math.log10(v));
  return [1, 2, 2.5, 5, 10].map((m) => m * p).find((m) => m >= v);
}

/** Stacked share of stars, with neutral on top. */
function territory(hist, players, total) {
  const tMax = hist.at(-1).t || 1;
  const { x, y, grid } = frame(tMax, total, (v) => `${Math.round((v / total) * 100)}%`);
  const layers = [...Array(players).keys(), NEUTRAL];
  const base = hist.map(() => 0);
  let areas = '';
  for (const o of layers) {
    const top = hist.map((h, i) => base[i] + (o === NEUTRAL ? total - h.stars.reduce((a, b) => a + b, 0) : h.stars[o]));
    const up = hist.map((h, i) => `${x(h.t).toFixed(1)},${y(top[i]).toFixed(1)}`);
    const down = hist.map((h, i) => `${x(h.t).toFixed(1)},${y(base[i]).toFixed(1)}`).reverse();
    const fill = o === NEUTRAL ? 'var(--line)' : ownerColor(o);
    areas += `<polygon points="${up.join(' ')} ${down.join(' ')}" fill="${fill}" fill-opacity="${o === NEUTRAL ? 1 : 0.85}" stroke="var(--bg)" stroke-width="1"/>`;
    top.forEach((v, i) => (base[i] = v));
  }
  return { svg: grid + areas, x, tMax };
}

/** One line per empire: every ship it has, anywhere. */
function strength(hist, players) {
  const tMax = hist.at(-1).t || 1;
  const yMax = niceMax(Math.max(...hist.flatMap((h) => h.ships)));
  const { x, y, grid } = frame(tMax, yMax, fmtNum);
  let lines = '';
  for (let o = players - 1; o >= 0; o--) {
    const pts = hist.map((h) => `${x(h.t).toFixed(1)},${y(h.ships[o]).toFixed(1)}`).join(' ');
    lines += `<polyline points="${pts}" fill="none" stroke="${ownerColor(o)}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
  }
  return { svg: grid + lines, x, tMax };
}

function chart(title, sub, built, hist, readout) {
  const wrap = document.createElement('figure');
  wrap.className = 'chart';
  wrap.innerHTML = `<figcaption><b>${title}</b> <span class="read">${sub}</span></figcaption>
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${title}">${built.svg}<line class="cross" y1="${PAD.t}" y2="${H - PAD.b}" visibility="hidden"/></svg>`;
  const svg = wrap.querySelector('svg');
  const cross = wrap.querySelector('.cross');
  const read = wrap.querySelector('.read');
  // Scrub: drag or hover across the chart to read the values at that time.
  const show = (e) => {
    const r = svg.getBoundingClientRect();
    const t = (((e.clientX - r.left) / r.width) * W - PAD.l) / (W - PAD.l - PAD.r) * built.tMax;
    let i = 0;
    while (i < hist.length - 1 && hist[i + 1].t <= t) i++;
    if (i < hist.length - 1 && t - hist[i].t > hist[i + 1].t - t) i++;
    const h = hist[i];
    cross.setAttribute('x1', built.x(h.t));
    cross.setAttribute('x2', built.x(h.t));
    cross.setAttribute('visibility', 'visible');
    read.innerHTML = `${fmtTime(h.t)} · ${readout(h)}`;
  };
  const hide = () => { cross.setAttribute('visibility', 'hidden'); read.textContent = sub; };
  svg.addEventListener('pointerdown', (e) => { svg.setPointerCapture(e.pointerId); show(e); });
  svg.addEventListener('pointermove', show);
  svg.addEventListener('pointerup', hide);
  svg.addEventListener('pointerleave', hide);
  svg.addEventListener('pointercancel', hide);
  return wrap;
}

const dot = (o) => `<i class="dot" style="background:${ownerColor(o)}"></i>`;

export function renderStats(el, game) {
  const st = game.stats;
  el.innerHTML = '';
  if (!st || !st.history.length) return;
  const players = game.players;
  const owners = [...Array(players).keys()];
  const me = st.owners[PLAYER];
  const hist = st.history;

  // Highlights.
  const bb = st.biggestBattle;
  const where = bb ? (bb.star === null ? 'in deep space' : 'at a star') : '';
  const lead = hist.filter((h) => h.stars[PLAYER] === Math.max(...h.stars)).length;
  const tiles = [
    ['Ships built', fmtNum(me.produced)],
    ['Enemy ships destroyed', fmtNum(me.killed)],
    ['Stars taken', String(me.captured)],
    ['Largest fleet', fmtNum(me.biggestFleet)],
    ['Time in the lead', `${Math.round((lead / hist.length) * 100)}%`],
    ['Ships lost in the biggest battle', bb ? fmtNum(bb.losses) : '—', bb ? `${fmtTime(bb.t)} ${where}` : ''],
  ];
  const tilesEl = document.createElement('div');
  tilesEl.className = 'tiles';
  tilesEl.innerHTML = tiles.map(([k, v, s]) => `<div class="tile"><b>${v}</b><span>${k}</span>${s ? `<small>${s}</small>` : ''}</div>`).join('');
  el.append(tilesEl);

  const legend = document.createElement('div');
  legend.className = 'legend';
  legend.innerHTML = owners.map((o) => `<span>${dot(o)}${nameOf(o)}</span>`).join('') + `<span><i class="dot" style="background:var(--line)"></i>Neutral</span>`;
  el.append(legend);

  const total = game.systems.length;
  const vals = (h, f) => owners.map((o) => `${dot(o)}${f(h, o)}`).join(' ');
  el.append(chart('Territory', 'share of stars · drag to scrub', territory(hist, players, total), hist,
    (h) => vals(h, (x, o) => x.stars[o])));
  el.append(chart('Fleet strength', 'all ships · drag to scrub', strength(hist, players), hist,
    (h) => vals(h, (x, o) => fmtNum(x.ships[o]))));

  // Per-empire table.
  const rows = [
    ['Ships built', (s) => fmtNum(s.produced)],
    ['Destroyed', (s) => fmtNum(s.killed)],
    ['Lost', (s) => fmtNum(s.lost)],
    ['K / L ratio', (s) => (s.lost > 0 ? (s.killed / s.lost).toFixed(2) : '—')],
    ['Stars taken', (s) => s.captured],
    ['Stars lost', (s) => s.starsLost],
    ['Most stars', (s) => s.peakStars],
    ['Most ships', (s) => fmtNum(s.peakShips)],
    ['Fleets sent', (s) => s.fleets],
    ['Largest fleet', (s) => fmtNum(s.biggestFleet)],
    ['Upgrades', (s) => `${s.upgrades} (${fmtNum(s.spentUpgrades)})`],
    ['Research', (s) => `${s.research} (${fmtNum(s.spentResearch)})`],
  ];
  const table = document.createElement('table');
  table.className = 'stats';
  table.innerHTML = `<thead><tr><th></th>${owners.map((o) => `<th>${dot(o)}${nameOf(o)}</th>`).join('')}</tr></thead>
    <tbody>${rows.map(([k, f]) => `<tr><th>${k}</th>${owners.map((o) => `<td>${f(st.owners[o])}</td>`).join('')}</tr>`).join('')}</tbody>`;
  el.append(table);
  const foot = document.createElement('p');
  foot.className = 'sheet-foot';
  foot.textContent = 'Upgrades and research show how many, then the ships spent.';
  el.append(foot);
}
