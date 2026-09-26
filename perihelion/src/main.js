import { createGame, step, launch, plan, fleetState, rng, PLAYER, NEUTRAL, RULES, slotsOf, cantBuild, buildStructure, cantOrderShip, orderShip, income, upgrade, cantUpgrade, upgradeCost, upgradeTime, coverOf, TECH, nextTech, research, cantResearch, researchSpeed, visibility, demolish, cantDemolish, demolishFee, cancelShip, yardsOf } from './sim.js';
import { createAI, tickAI } from './ai.js';
import { createView, ownerColor } from './render.js';

const $ = (id) => document.getElementById(id);
const setHTML = (el, html) => { if (el._html !== html) { el._html = html; el.innerHTML = html; } };
const view = createView($('scene'), $('labels'));

const prefs = (() => {
  const d = { rivals: 1, difficulty: 'normal' };
  try { return { ...d, ...JSON.parse(localStorage.getItem('perihelion') || '{}') }; } catch { return d; }
})();
const savePrefs = () => { try { localStorage.setItem('perihelion', JSON.stringify(prefs)); } catch { /* ignore */ } };

let game = null;
let ais = [];
let running = false;
const WARPS = [1, 2, 4, 8];
let warp = 1;

const ui = { selected: null, target: null, fleet: null, count: 1, preview: null, dragging: false, vis: null, slot: null };

const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

// ---- Menu -----------------------------------------------------------------

function segmented(el, get, set) {
  const sync = () => el.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.v === String(get())));
  el.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    set(b.dataset.v);
    savePrefs();
    sync();
  });
  sync();
}
segmented($('rivals'), () => prefs.rivals, (v) => (prefs.rivals = Number(v)));
segmented($('difficulty'), () => prefs.difficulty, (v) => (prefs.difficulty = v));

function start() {
  const seed = (Math.random() * 2 ** 31) | 0;
  game = createGame({ seed, opponents: prefs.rivals });
  const r = rng(seed ^ 0xabc);
  ais = Array.from({ length: prefs.rivals }, (_, i) => createAI(i + 1, prefs.difficulty, r));
  ui.selected = ui.target = ui.preview = ui.fleet = null;
  ui.slot = null;
  lastTech = {};
  $('research').hidden = true;
  view.build(game);
  ui.vis = visibility(game, PLAYER);
  // Open on the homeworld, far enough out to see its moons and neighbours.
  const home = game.bodies.find((b) => b.owner === PLAYER);
  view.focus(game, home.id, false);
  view.orbit.target.set(0, 0, 0);
  view.orbit.dist = home.size * 12 + 40;
  view.orbit.pol = 0.9;
  $('menu').hidden = true;
  $('end').hidden = true;
  $('hud').hidden = false;
  running = true;
  updateActions();
}
$('play').addEventListener('click', start);
$('again').addEventListener('click', () => {
  $('end').hidden = true;
  $('menu').hidden = false;
  $('resume').hidden = true;
  $('play').textContent = 'Play';
});
$('pause').addEventListener('click', pause);
$('resume').addEventListener('click', () => { $('menu').hidden = true; running = true; });
function pause() {
  if (!game || game.winner !== null || !running) return;
  running = false;
  $('menu').hidden = false;
  $('resume').hidden = false;
  $('play').textContent = 'New game';
}
document.addEventListener('visibilitychange', () => document.hidden && pause());

$('warp').addEventListener('click', () => {
  warp = WARPS[(WARPS.indexOf(warp) + 1) % WARPS.length];
  $('warp').textContent = `${warp}×`;
});
$('system').addEventListener('click', () => {
  view.orbit.follow = null;
  view.orbit.target.set(0, 0, 0);
  view.orbit.dist = 650;
});

// ---- Orders ---------------------------------------------------------------

function updateFleetInfo() {
  const f = ui.fleet !== null && game ? game.fleets.find((x) => x.id === ui.fleet) : null;
  if (!f) ui.fleet = null;
  $('fleet').hidden = !f || !running || ui.selected !== null;
  if ($('fleet').hidden) return;
  const s = fleetState(f, game.time);
  const left = f.T - (game.time - f.t0);
  const phase = s.flipping ? 'flipping' : s.phase === 1 ? 'burning toward' : 'braking for';
  const to = game.bodies[f.to];
  const speed = Math.hypot(s.vx, s.vy, s.vz);
  setHTML($('fleet'), `<b>${f.n} ship${f.n === 1 ? '' : 's'}</b> from ${game.bodies[f.from].name}, ${phase} <b>${to.name}</b><br>`
    + `arrive in <b>${fmt(left)}</b> · ${Math.round(s.progress * 100)}% · ${speed.toFixed(2)} u/s`);
}

function updateActions() {
  updateFleetInfo();
  const s = ui.selected !== null && game ? game.bodies[ui.selected] : null;
  const show = !!s && s.owner === PLAYER && running;
  $('actions').hidden = !show;
  $('system').hidden = view.orbit.follow === null;
  if (!show) { ui.preview = null; return; }
  // No ships here: nothing to send, and Launch stays off.
  ui.count = s.ships ? Math.max(1, Math.min(ui.count, s.ships)) : 0;
  $('count').textContent = ui.count;
  $('buildrow').hidden = ui.target !== null;
  if (ui.target === null) {
    ui.preview = null;
    const kind = s.kind === 'station' ? 'Station' : s.kind[0].toUpperCase() + s.kind.slice(1);
    setHTML($('info'), `<span class="tag">${kind}</span><b>${s.name}</b><span class="grow"></span><span class="num">${s.ships}</span><span class="tag">ship${s.ships === 1 ? '' : 's'}</span>`);
    $('launch').disabled = true;
    renderBuildRow(s);
  } else {
    const t = game.bodies[ui.target];
    ui.preview = plan(game, s, t);
    const defence = t.owner === PLAYER ? 'reinforce' : `${t.ships} ship${t.ships === 1 ? '' : 's'}, ${Math.ceil(t.guns)} gun${Math.ceil(t.guns) === 1 ? '' : 's'}`;
    const cover = t.owner === PLAYER ? 0 : coverOf(game, t);
    const seen = !ui.vis || ui.vis.bodies.has(t.id);
    const defenceText = !seen ? 'defences unknown' : cover ? `${defence}, +${cover.toFixed(1)} cover from ${game.bodies[t.parent].name}` : defence;
    if (s.ships < 1) setHTML($('info'), `No ships at <b>${s.name}</b> to send`);
    else setHTML($('info'), `<b>${ui.count}</b> → <b>${t.name}</b> (${defenceText}) · arrive in <b>${fmt(ui.preview.T)}</b>`);
    $('launch').disabled = s.ships < 1;
  }
}
// ---- Building ----------------------------------------------------------------

const ROMAN = ['', 'I', 'II', 'III'];
const ABBR = { shipyard: 'Yard', mine: 'Mine', defence: 'Guns', lab: 'Lab' };
const pct = (v) => `${Math.max(0, Math.min(100, Math.floor(v * 100)))}%`;
function progressOf(x) {
  if (x.next) return 1 - x.left / upgradeTime({ ...x, level: x.next - 1 });
  return x.left > 0 ? 1 - x.left / RULES.structures[x.type].time : null;
}
// The world panel: one cell per build slot (built, building, or empty), a
// ship line only where there's a yard, and one context row for the cell
// you tapped: build options for an empty slot, upgrade/demolish for a built one.
function renderBuildRow(s) {
  const slots = slotsOf(s);
  if (ui.slot !== null && ui.slot >= slots) ui.slot = null;
  const cells = [];
  for (let i = 0; i < slots; i++) {
    const x = s.structures[i];
    const on = ui.slot === i ? ' on' : '';
    if (!x) { cells.push(`<button class="cell empty${on}" data-slot="${i}"><span>+</span></button>`); continue; }
    const def = RULES.structures[x.type];
    const p = progressOf(x);
    const pips = def.maxLevel ? `<i class="pips">${'▮'.repeat(x.level)}${'▯'.repeat(def.maxLevel - x.level)}</i>` : '';
    const bar = p === null ? '' : `<i class="prog" style="width:${pct(p)}"></i>`;
    cells.push(`<button class="cell${p === null ? '' : ' busy'}${on}" data-slot="${i}"><b>${ABBR[x.type]}</b>${pips}${bar}</button>`);
  }
  let html = `<div class="cells">${cells.join('')}</div>`;

  // Context row for the tapped slot.
  if (ui.slot !== null) {
    const x = s.structures[ui.slot];
    let row = '';
    if (!x) {
      row = ['shipyard', 'mine', 'defence', 'lab'].map((k) => {
        const why = cantBuild(game, s, k);
        if (why && why !== 'not enough credits') return '';
        return `<button data-b="${k}" ${why ? 'disabled' : ''}>${ABBR[k]}<small>${RULES.structures[k].cost}</small></button>`;
      }).join('');
    } else {
      const def = RULES.structures[x.type];
      const p = progressOf(x);
      const state = x.next ? `upgrading → ${ROMAN[x.next]} · ${pct(p)}` : x.left > 0 ? `building · ${pct(p)}` : def.maxLevel ? `level ${ROMAN[x.level]}` : 'online';
      const why = cantUpgrade(game, s, x);
      const up = !why || why === 'not enough credits'
        ? `<button data-u="${ui.slot}" ${why ? 'disabled' : ''}>Upgrade<small>${upgradeCost(x)}</small></button>` : '';
      const dwhy = cantDemolish(game, s, x);
      row = `<span class="what">${def.name} · ${state}</span>${up}<button class="danger" data-d="${ui.slot}" ${dwhy ? 'disabled' : ''}>Scrap<small>${demolishFee(x)}</small></button>`;
    }
    html += `<div class="ctx">${row}</div>`;
  }

  // Ships: only where a yard can build them.
  const yards = yardsOf(s);
  if (yards) {
    const why = cantOrderShip(game, s);
    const q = s.queue ? `<span class="what">Queue <b class="num">${s.queue}</b><i class="meter"><i style="width:${pct(s.build)}"></i></i></span>`
      : `<span class="what">${yards} yard${yards === 1 ? '' : 's'} idle</span>`;
    html += `<div class="ctx ships">${q}`
      + (s.queue ? `<button data-cancel="1" class="danger">✕<small>+${Math.round(RULES.ship.cost * RULES.cancelRefund)}</small></button>` : '')
      + `<button data-b="ship" ${why ? 'disabled' : ''}>+ Ship<small>${RULES.ship.cost}</small></button></div>`;
  }
  setHTML($('buildrow'), html);
}
$('buildrow').addEventListener('click', (e) => {
  if (ui.selected === null) return;
  const s = game.bodies[ui.selected];
  const cell = e.target.closest('button[data-slot]');
  if (cell) {
    const i = Number(cell.dataset.slot);
    ui.slot = ui.slot === i ? null : i;
    updateActions();
    return;
  }
  if (e.target.closest('button[data-cancel]')) {
    if (cancelShip(game, s)) toast('Ship build cancelled', ownerColor(PLAYER));
    updateActions();
    return;
  }
  const up = e.target.closest('button[data-u]');
  if (up) {
    const x = s.structures[Number(up.dataset.u)];
    if (x && upgrade(game, s, x)) toast(`Upgrading ${RULES.structures[x.type].name} to ${ROMAN[x.next]} · ${Math.round(upgradeTime({ ...x, level: x.next - 1 }))}s`, ownerColor(PLAYER));
    updateActions();
    return;
  }
  const d = e.target.closest('button[data-d]');
  if (d) {
    const x = s.structures[Number(d.dataset.d)];
    if (x && demolish(game, s, x)) toast(`${RULES.structures[x.type].name} scrapped at ${s.name}`, ownerColor(PLAYER));
    ui.slot = null;
    updateActions();
    return;
  }
  const btn = e.target.closest('button[data-b]');
  if (!btn) return;
  const k = btn.dataset.b;
  const ok = k === 'ship' ? orderShip(game, s) : buildStructure(game, s, k);
  if (ok) {
    toast(k === 'ship' ? `Ship ordered at ${s.name}` : `${RULES.structures[k].name} under construction at ${s.name}`, ownerColor(PLAYER));
    if (k !== 'ship') ui.slot = null;
  }
  updateActions();
});

// ---- Research --------------------------------------------------------------------

function renderResearch() {
  const t = game.tech[PLAYER];
  const p = t.project;
  $('rbar').hidden = !running || !p;
  if (p) {
    const pct = Math.floor((1 - p.left / p.total) * 100);
    const eta = fmt(p.left / researchSpeed(game, PLAYER));
    setHTML($('rbar'), `Researching <b>${TECH[p.key].name} ${ROMAN[t[p.key] + 1]}</b> · ${pct}% · ${eta}`);
  }
  if ($('research').hidden) return;
  $('rstatus').textContent = `speed ×${researchSpeed(game, PLAYER).toFixed(1)}`;
  setHTML($('rlist'), Object.entries(TECH).map(([key, d]) => {
    const lvl = t[key];
    const pips = '●'.repeat(lvl) + '○'.repeat(d.cost.length - lvl);
    const next = nextTech(game, PLAYER, key);
    if (!next) return `<button class="tech-row" disabled><span class="t"><b>${d.name}<span class="pips">${pips}</span></b><small>Complete</small></span></button>`;
    const running = p && p.key === key;
    const why = cantResearch(game, PLAYER, key);
    const note = running ? `Researching · ${Math.floor((1 - p.left / p.total) * 100)}%` : `${next.text} · ${fmt(next.time / researchSpeed(game, PLAYER))}`;
    return `<button class="tech-row" data-k="${key}" ${why ? 'disabled' : ''}><span class="t"><b>${d.name} ${ROMAN[next.level]}<span class="pips">${pips}</span></b><small>${note}</small></span><span class="c">${running ? '' : next.cost}</span></button>`;
  }).join(''));
}
$('rnd').addEventListener('click', () => {
  $('research').hidden = !$('research').hidden;
  ui.selected = ui.target = null;
  updateActions();
  renderResearch();
});
$('rclose').addEventListener('click', () => { $('research').hidden = true; });
$('rlist').addEventListener('click', (e) => {
  const b = e.target.closest('button[data-k]');
  if (!b) return;
  if (research(game, PLAYER, b.dataset.k)) {
    toast(`Researching ${TECH[b.dataset.k].name}`, ownerColor(PLAYER));
    $('research').hidden = true;
  }
  renderResearch();
});

$('less').addEventListener('click', () => { ui.count = Math.max(1, ui.count - 1); updateActions(); });

$('more').addEventListener('click', () => { ui.count += 1; updateActions(); });
$('launch').addEventListener('click', doLaunch);
$('focus').addEventListener('click', () => {
  const id = ui.target ?? ui.selected;
  if (id !== null) view.focus(game, id);
  updateActions();
});

function doLaunch() {
  if (ui.selected === null || ui.target === null || ui.count < 1) return;
  const f = launch(game, game.bodies[ui.selected], game.bodies[ui.target], ui.count);
  if (f) toast(`${f.n} ship${f.n === 1 ? '' : 's'} burning for ${game.bodies[f.to].name} · ${fmt(f.T)}`, ownerColor(PLAYER));
  ui.selected = ui.target = null;
  updateActions();
}

let toastTimer = 0;
function toast(text, color) {
  const el = $('toast');
  el.textContent = text;
  el.style.color = color;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

function tap(id, x, y) {
  // Tapping one of your fleets in flight shows where it's going (fleets win
  // over the world behind them, unless you're picking a target).
  if (ui.selected === null) {
    const f = view.pickFleet(game, x, y, PLAYER);
    if (f !== null) {
      ui.fleet = f;
      updateActions();
      return;
    }
  }
  ui.fleet = null;
  // The camera locks onto whatever you tap.
  if (id !== null) view.focus(game, id, false);
  if (id === null) {
    if (ui.target !== null) ui.target = null;
    else ui.selected = null;
  } else if (ui.selected !== null && id === ui.target) {
    // Launching only ever happens from the Launch button.
  } else if (ui.selected !== null && id !== ui.selected) {
    ui.target = id;
  } else if (id === ui.selected) {
    ui.selected = ui.target = null;
  } else if (game.bodies[id].owner === PLAYER) {
    ui.selected = id; ui.slot = null;
    ui.target = null;
  }
  updateActions();
}

// ---- Input: one finger rotates, two pan and pinch, double-tap zooms in ------

const canvas = $('scene');
const pointers = new Map();
let gesture = null;
let lastTap = { t: 0, id: null };

canvas.addEventListener('pointerdown', (e) => {
  if (!running) return;
  e.preventDefault();
  try { canvas.setPointerCapture(e.pointerId); } catch { /* ignore */ }
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pointers.size === 1) {
    gesture = { kind: 'tap', x0: e.clientX, y0: e.clientY };
  } else if (pointers.size === 2) {
    const [a, b] = [...pointers.values()];
    gesture = { kind: 'pinch', d: Math.hypot(a.x - b.x, a.y - b.y), mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 };
  }
  ui.dragging = true;
  view.orbit.vaz = view.orbit.vpol = 0;
});

canvas.addEventListener('pointermove', (e) => {
  const p = pointers.get(e.pointerId);
  if (!p || !gesture) return;
  const dx = e.clientX - p.x;
  const dy = e.clientY - p.y;
  p.x = e.clientX;
  p.y = e.clientY;
  if (gesture.kind === 'pinch') {
    if (pointers.size < 2) return;
    const [a, b] = [...pointers.values()];
    const d = Math.hypot(a.x - b.x, a.y - b.y);
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    // Two fingers drag the map and zoom toward themselves.
    view.pan(mx - gesture.mx, my - gesture.my);
    view.zoomAt(mx, my, gesture.d / Math.max(1, d));
    gesture.d = d;
    gesture.mx = mx;
    gesture.my = my;
    return;
  }
  if (gesture.kind === 'tap' && Math.hypot(e.clientX - gesture.x0, e.clientY - gesture.y0) > 10) gesture.kind = 'orbit';
  if (gesture.kind === 'orbit') {
    const k = 4 / window.innerHeight;
    view.orbit.az -= dx * k;
    view.orbit.pol -= dy * k;
    view.orbit.vaz = -dx * k;
    view.orbit.vpol = -dy * k;
  }
});

function endPointer(e) {
  if (!pointers.delete(e.pointerId)) return;
  if (gesture?.kind === 'tap' && pointers.size === 0) {
    const id = view.pick(e.clientX, e.clientY);
    const now = performance.now();
    if (id !== null && lastTap.id === id && now - lastTap.t < 350) {
      // Double-tap: fly the camera to it and follow.
      view.focus(game, id);
      lastTap = { t: 0, id: null };
      updateActions();
    } else {
      lastTap = { t: now, id };
      tap(id, e.clientX, e.clientY);
    }
  }
  if (pointers.size === 0) { gesture = null; ui.dragging = false; }
  else gesture = { kind: 'orbit' };
}
canvas.addEventListener('pointerup', endPointer);
canvas.addEventListener('pointercancel', (e) => { gesture = null; endPointer(e); });
canvas.addEventListener('wheel', (e) => { e.preventDefault(); view.zoomAt(e.clientX, e.clientY, Math.exp(e.deltaY * 0.001)); }, { passive: false });
document.addEventListener('contextmenu', (e) => e.preventDefault());
for (const type of ['gesturestart', 'gesturechange', 'gestureend']) document.addEventListener(type, (e) => e.preventDefault(), { passive: false });
document.addEventListener('touchmove', (e) => { if (e.touches.length > 1) e.preventDefault(); }, { passive: false });

// ---- Loop -------------------------------------------------------------------

// ---- End-of-game report ----------------------------------------------------------

const PLAYER_NAMES = ['You', 'Red', 'Amber'];

/** A small line chart: one line per player, recessive grid, end labels, touch readout. */
function lineChart(title, key, series, players, fmtV = (v) => Math.round(v)) {
  const W = 320;
  const H = 130;
  const L = 30; // room for the y labels
  const R = 34; // room for end labels
  const T = 8;
  const B = 18;
  const t1 = series.at(-1).t || 1;
  const max = Math.max(1, ...series.flatMap((s) => s.p.map((p) => p[key])));
  const x = (t) => L + (t / t1) * (W - L - R);
  const y = (v) => T + (1 - v / max) * (H - T - B);
  const lines = players.map((o) => {
    const pts = series.map((s) => `${x(s.t).toFixed(1)},${y(s.p[o][key]).toFixed(1)}`).join(' ');
    const last = series.at(-1).p[o][key];
    return `<polyline points="${pts}" fill="none" stroke="${ownerColor(o)}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />`
      + `<text x="${x(t1) + 4}" y="${y(last) + 4}" font-size="10" fill="#aab1c8">${PLAYER_NAMES[o]}</text>`;
  }).join('');
  const grid = [0, 0.5, 1].map((k) => `<line x1="${L}" x2="${W - R}" y1="${y(max * k)}" y2="${y(max * k)}" stroke="rgba(160,180,255,0.12)" />`
    + `<text x="${L - 4}" y="${y(max * k) + 3}" font-size="9" fill="#858ca6" text-anchor="end">${fmtV(max * k)}</text>`).join('');
  const axis = `<text x="${L}" y="${H - 4}" font-size="9" fill="#858ca6">0:00</text><text x="${W - R}" y="${H - 4}" font-size="9" fill="#858ca6" text-anchor="end">${fmt(t1)}</text>`;
  return `<div class="chart" data-key="${key}"><h3>${title}</h3>`
    + `<svg viewBox="0 0 ${W} ${H}" data-l="${L}" data-r="${W - R}" data-w="${W}">${grid}${axis}${lines}<line class="cross" y1="${T}" y2="${H - B}" stroke="#e6ebf7" stroke-opacity="0.5" visibility="hidden" /></svg>`
    + `<div class="readout">Touch the chart to read values</div></div>`;
}

function renderReport() {
  const st = game.stats;
  const players = Array.from({ length: game.players }, (_, i) => i);
  const rows = [
    ['Ships built', 'built'], ['Ships lost', 'lost'], ['Enemy ships destroyed', 'killed'],
    ['Worlds captured', 'captured'], ['Worlds lost', 'worldsLost'],
    ['Credits earned', 'earned'], ['Credits spent', 'spent'], ['Research completed', 'research'],
  ];
  const legend = `<div class="legend">${players.map((o) => `<span><i style="background:${ownerColor(o)}"></i>${PLAYER_NAMES[o]}</span>`).join('')}</div>`;
  const table = `<table class="totals"><tr><th></th>${players.map((o) => `<th style="color:${ownerColor(o)}">${PLAYER_NAMES[o]}</th>`).join('')}</tr>`
    + rows.map(([label, k]) => `<tr><td>${label}</td>${players.map((o) => `<td>${Math.round(st.totals[o][k])}</td>`).join('')}</tr>`).join('')
    + '</table>';
  $('report').innerHTML = legend + table
    + lineChart('Ships', 'ships', st.series, players)
    + lineChart('Worlds held', 'worlds', st.series, players)
    + lineChart('Income (credits/s)', 'income', st.series, players, (v) => v.toFixed(1));
  // Touch or hover: a crosshair and the values at that moment.
  for (const chart of $('report').querySelectorAll('.chart')) {
    const svg = chart.querySelector('svg');
    const key = chart.dataset.key;
    const show = (e) => {
      const r = svg.getBoundingClientRect();
      const vx = ((e.clientX - r.left) / r.width) * Number(svg.dataset.w);
      const l = Number(svg.dataset.l);
      const rr = Number(svg.dataset.r);
      const k = Math.min(1, Math.max(0, (vx - l) / (rr - l)));
      const s = st.series[Math.round(k * (st.series.length - 1))];
      const cross = svg.querySelector('.cross');
      const cx = l + (s.t / (st.series.at(-1).t || 1)) * (rr - l);
      cross.setAttribute('x1', cx);
      cross.setAttribute('x2', cx);
      cross.setAttribute('visibility', 'visible');
      chart.querySelector('.readout').innerHTML = `${fmt(s.t)} · ` + players.map((o) => {
        const v = s.p[o][key];
        return `${PLAYER_NAMES[o]} <b>${key === 'income' ? v.toFixed(1) : Math.round(v)}</b>`;
      }).join(' · ');
    };
    svg.addEventListener('pointerdown', show);
    svg.addEventListener('pointermove', show);
  }
}

function finish() {
  running = false;
  ui.selected = ui.target = null;
  updateActions();
  const won = game.winner === PLAYER;
  $('end-title').textContent = won ? 'Victory' : 'Defeat';
  $('end-title').style.color = ownerColor(won ? PLAYER : game.winner);
  $('end-sub').textContent = won ? `The system is yours after ${fmt(game.time)}.` : `Your last world fell at ${fmt(game.time)}.`;
  renderReport();
  setTimeout(() => ($('end').hidden = false), 1200);
}

let last = performance.now();
let uiClock = 0;
let lastTech = {};
const seenOwner = new Map();
function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  if (game) {
    if (running) {
      // Time warp in small steps so battles and arrivals stay accurate.
      let left = dt * warp;
      while (left > 0) {
        const h = Math.min(0.25, left);
        for (const ai of ais) tickAI(game, ai, h);
        step(game, h);
        left -= h;
      }
      if (ui.selected !== null && game.bodies[ui.selected].owner !== PLAYER) ui.selected = ui.target = null;
      if (ui.fleet !== null) updateFleetInfo();
      uiClock -= dt;
      if (uiClock <= 0) {
        uiClock = 0.25;
        ui.vis = visibility(game, PLAYER);
        updateActions();
        renderResearch();
        const t = game.tech[PLAYER];
        const done = Object.keys(TECH).find((k) => t[k] > (lastTech[k] ?? 0));
        if (done) toast(`${TECH[done].name} ${ROMAN[t[done]]} complete`, ownerColor(PLAYER));
        lastTech = { ...t };
        $('clock').innerHTML = `<b>₵ ${Math.floor(game.credits[PLAYER])}</b> +${income(game, PLAYER).toFixed(1)}/s · T+${fmt(game.time)}`;
        for (const b of game.bodies) {
          const was = seenOwner.get(b.id);
          if (was !== undefined && was !== b.owner && (was === PLAYER || b.owner === PLAYER)) {
            toast(b.owner === PLAYER ? `${b.name} taken` : `${b.name} lost`, ownerColor(b.owner));
          }
          seenOwner.set(b.id, b.owner);
        }
      }
      if (game.winner !== null) finish();
    }
    view.render(game, ui, dt * (running ? warp : 0.2), now / 1000);
  }
  requestAnimationFrame(frame);
}

window.addEventListener('resize', view.resize);
view.resize();

// A quiet AI match plays behind the menu.
game = createGame({ seed: 11, opponents: 2 });
ais = [0, 1, 2].map((i) => createAI(i, 'hard', rng(5 + i)));
view.build(game);
view.orbit.dist = 330;
(function demo() {
  if (running || $('menu').hidden) return;
  for (let k = 0; k < 4; k++) { for (const ai of ais) tickAI(game, ai, 0.25); step(game, 0.25); }
  view.orbit.az += 0.001;
  setTimeout(demo, 50);
})();
requestAnimationFrame(frame);

// Hook for the headless smoke test.
window.__perihelion = { get game() { return game; }, view, ui, sim: { launch, fleetState, step } };
