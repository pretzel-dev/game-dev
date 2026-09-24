import { createGame, step, sendFraction, upgrade, upgradeCost, upgradeProgress, rng, dist, PLAYER, NEUTRAL, RULES, TECH, nextTier, research, visibility, speedOf, sensorRange } from './sim.js';
import { createAI, tickAI } from './ai.js';
import { createView, ownerColor } from './render.js';

const $ = (id) => document.getElementById(id);
// Browsers normalise innerHTML, so compare against what we last wrote instead.
const setHTML = (el, html) => { if (el._html !== html) { el._html = html; el.innerHTML = html; } };
const view = createView($('scene'), $('labels'));

const prefs = loadPrefs();
let game = null;
let ais = [];
let running = false;

// UI state shared with the renderer.
const ui = { vis: null, selected: null, target: null, hover: null, drag: null, dragging: false, fraction: prefs.fraction };

function loadPrefs() {
  const d = { rivals: 2, difficulty: 'normal', fraction: 0.5 };
  try { return { ...d, ...JSON.parse(localStorage.getItem('starfall') || '{}') }; } catch { return d; }
}
function savePrefs() {
  try { localStorage.setItem('starfall', JSON.stringify(prefs)); } catch { /* private mode */ }
}

// ---- Menu -----------------------------------------------------------------

function segmented(el, attr, get, set) {
  const sync = () => el.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset[attr] === String(get())));
  el.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    set(b.dataset[attr]);
    savePrefs();
    sync();
  });
  sync();
}
segmented($('rivals'), 'v', () => prefs.rivals, (v) => (prefs.rivals = Number(v)));
segmented($('difficulty'), 'v', () => prefs.difficulty, (v) => (prefs.difficulty = v));
segmented($('amount'), 'f', () => ui.fraction, (v) => (prefs.fraction = ui.fraction = Number(v)));

function start() {
  const seed = (Math.random() * 2 ** 31) | 0;
  game = createGame({ seed, opponents: prefs.rivals, portrait: innerHeight > innerWidth });
  const r = rng(seed ^ 0x5eed);
  ais = Array.from({ length: prefs.rivals }, (_, i) => createAI(i + 1, prefs.difficulty, r));
  ui.selected = ui.target = ui.hover = ui.drag = null;
  view.build(game);
  ui.vis = visibility(game, PLAYER);
  lastTech = {};
  // Start looking at the player's home.
  const home = game.systems.find((s) => s.owner === PLAYER).pos;
  view.orbit.az = Math.abs(home.z) > Math.abs(home.x) || innerHeight > innerWidth ? (home.z >= 0 ? 0 : Math.PI) : Math.atan2(home.x, home.z);
  view.orbit.pol = 0.7;
  // Open on home, framing what your sensors can see; zoom out for the rest.
  view.orbit.target.set(home.x, 0, home.z);
  view.orbit.dist = sensorRange(game, PLAYER) * 3.2;
  view.orbit.vaz = view.orbit.vpol = 0;
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
$('resume').addEventListener('click', () => {
  $('menu').hidden = true;
  running = true;
});

function pause() {
  if (!game || game.winner !== null) return;
  running = false;
  $('menu').hidden = false;
  $('resume').hidden = false;
  $('play').textContent = 'New game';
}
document.addEventListener('visibilitychange', () => document.hidden && pause());

// ---- Orders ---------------------------------------------------------------
// Select one of your stars, pick a target, then Launch. The two-step order
// makes each fleet a deliberate commitment: it can't be recalled.

const fmtTime = (t) => `${Math.floor(t / 60)}:${String(Math.round(t % 60)).padStart(2, '0')}`;

function orderSize() {
  const from = game.systems[ui.selected];
  return Math.max(1, Math.floor(from.units * ui.fraction));
}

function updateActions() {
  const s = ui.selected !== null ? game.systems[ui.selected] : null;
  const show = !!s && s.owner === PLAYER && running;
  if (!show) $('tech').hidden = true;
  $('actions').hidden = !show || !$('tech').hidden;
  renderTech();
  if (!show) return;
  const hasTarget = ui.target !== null;
  $('order').hidden = !hasTarget;
  $('hint').hidden = hasTarget;
  if (hasTarget) {
    const t = game.systems[ui.target];
    const n = orderSize();
    const eta = dist(s.pos, t.pos) / speedOf(game, PLAYER);
    const known = ui.vis.systems.has(t.id);
    const who = t.owner === NEUTRAL ? 'neutral' : 'enemy';
    const html = t.owner === PLAYER
      ? `<b>${n}</b> ships to reinforce · arrive in <b>${fmtTime(eta)}</b>`
      : known
        ? `<b>${n}</b> ships vs <b>${Math.floor(t.units)}</b> ${who} · arrive in <b>${fmtTime(eta)}</b>`
        : `<b>${n}</b> ships into the unknown · arrive in <b>${fmtTime(eta)}</b>`;
    setHTML($('order-info'), html);
    $('launch').disabled = s.units < 1;
  }
  const cost = upgradeCost(s);
  const btn = $('upgrade');
  if (s.upgrading > 0) {
    const html = `Building<small>${Math.floor(upgradeProgress(s) * 100)}%</small>`;
    setHTML(btn, html);
    btn.disabled = true;
  } else if (cost === null) {
    btn.innerHTML = `Lv ${RULES.maxLevel}<small>max</small>`;
    btn.disabled = true;
  } else {
    const html = `Upgrade<small>${cost}</small>`;
    setHTML(btn, html);
    btn.disabled = s.units < cost;
  }
}

// ---- Tech -----------------------------------------------------------------

const ROMAN = ['', 'I', 'II', 'III', 'IV'];
function renderTech() {
  if ($('tech').hidden) return;
  const t = game.tech[PLAYER];
  const s = ui.selected !== null ? game.systems[ui.selected] : null;
  $('tech-status').textContent = t.research
    ? `${TECH[t.research.key].name} ${ROMAN[t[t.research.key] + 1]} · ${Math.floor((1 - t.research.left / t.research.total) * 100)}%`
    : '';
  const html = Object.entries(TECH).map(([key, def]) => {
    const tier = nextTier(game, PLAYER, key);
    const level = t[key];
    const pips = '●'.repeat(level) + '○'.repeat(def.tiers.length - level);
    if (!tier) return `<button class="tech-row" disabled><span class="t"><b>${def.name}<span class="pips">${pips}</span></b><small>Complete</small></span></button>`;
    const ok = s && s.owner === PLAYER && !t.research && s.units >= tier.cost;
    return `<button class="tech-row" data-k="${key}" ${ok ? '' : 'disabled'}><span class="t"><b>${def.name} ${ROMAN[level + 1]}<span class="pips">${pips}</span></b><small>${tier.text} · ${tier.time}s</small></span><span class="c">${tier.cost}</span></button>`;
  }).join('');
  setHTML($('tech-list'), html);
}
$('tech-btn').addEventListener('click', () => {
  $('tech').hidden = false;
  $('actions').hidden = true;
  renderTech();
});
$('tech-close').addEventListener('click', () => {
  $('tech').hidden = true;
  updateActions();
});
$('tech-list').addEventListener('click', (e) => {
  const b = e.target.closest('button[data-k]');
  if (!b || ui.selected === null) return;
  const key = b.dataset.k;
  if (research(game, game.systems[ui.selected], key)) {
    toast(`Researching ${TECH[key].name} ${ROMAN[game.tech[PLAYER][key] + 1]}`, ownerColor(PLAYER));
    $('tech').hidden = true;
    updateActions();
  }
});

$('upgrade').addEventListener('click', () => {
  if (ui.selected !== null && upgrade(game, game.systems[ui.selected])) {
    const s = game.systems[ui.selected];
    toast(`Building level ${s.level + 1} · ${RULES.upgradeTime[s.level - 1]}s`, ownerColor(PLAYER));
  }
  updateActions();
});
$('launch').addEventListener('click', launch);
$('amount').addEventListener('click', () => updateActions());

function launch() {
  if (ui.selected === null || ui.target === null) return;
  const from = game.systems[ui.selected];
  if (from.owner !== PLAYER) return;
  const f = sendFraction(game, from, game.systems[ui.target], ui.fraction);
  if (f) {
    buzz([20, 40, 30]);
    toast(`Fleet of ${f.units} launched · arrives in ${fmtTime(f.duration)}`, ownerColor(PLAYER));
  }
  ui.target = null;
  ui.selected = null;
  updateActions();
}

let toastTimer = 0;
function toast(text, color) {
  const el = $('toast');
  el.textContent = text;
  el.style.color = color;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

function buzz(pattern) {
  if (navigator.vibrate) try { navigator.vibrate(pattern); } catch { /* ignore */ }
}

function tap(id) {
  if (id === null) {
    // Tapping space backs out one step: target first, then selection.
    if (ui.target !== null) ui.target = null;
    else ui.selected = null;
  } else if (ui.selected !== null && id === ui.target) {
    launch();
    return;
  } else if (ui.selected !== null && id !== ui.selected) {
    ui.target = id;
  } else if (id === ui.selected) {
    ui.selected = ui.target = null;
  } else if (game.systems[id].owner === PLAYER) {
    ui.selected = id;
    ui.target = null;
  }
  updateActions();
}

// ---- Touch & mouse input ---------------------------------------------------
// One finger: tap to select/target; drag to rotate, except a drag that starts
// on the selected star, which aims it. Two fingers: pinch to zoom, move to pan.

const canvas = $('scene');
const pointers = new Map();
let gesture = null; // { kind: 'tap' | 'orbit' | 'aim' | 'pinch', ... }

function beginPinch() {
  const [a, b] = [...pointers.values()];
  gesture = { kind: 'pinch', d: Math.hypot(a.x - b.x, a.y - b.y), mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 };
  ui.drag = null;
  ui.hover = null;
}

canvas.addEventListener('pointerdown', (e) => {
  if (!running) return;
  e.preventDefault();
  try { canvas.setPointerCapture(e.pointerId); } catch { /* ignore */ }
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pointers.size === 1) {
    const id = view.pick(e.clientX, e.clientY);
    gesture = { kind: 'tap', id, x0: e.clientX, y0: e.clientY, aim: id !== null && id === ui.selected };
  } else if (pointers.size === 2) {
    beginPinch();
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
    view.pan(mx - gesture.mx, my - gesture.my);
    view.zoomAt(mx, my, gesture.d / Math.max(1, d));
    gesture.d = d;
    gesture.mx = mx;
    gesture.my = my;
    return;
  }

  if (gesture.kind === 'tap' && Math.hypot(e.clientX - gesture.x0, e.clientY - gesture.y0) > 10) {
    gesture.kind = gesture.aim ? 'aim' : 'orbit';
  }
  if (gesture.kind === 'orbit') {
    rotate(dx, dy);
  } else if (gesture.kind === 'aim') {
    const over = view.pick(e.clientX, e.clientY);
    ui.hover = over !== gesture.id ? over : null;
    ui.drag = { from: gesture.id, x: e.clientX, y: e.clientY };
  }
});

function rotate(dx, dy) {
  const k = 4 / window.innerHeight;
  view.orbit.az -= dx * k;
  view.orbit.pol -= dy * k;
  view.orbit.vaz = -dx * k;
  view.orbit.vpol = -dy * k;
}

function endPointer(e) {
  if (!pointers.delete(e.pointerId)) return;
  if (gesture?.kind === 'tap' && pointers.size === 0) tap(gesture.id);
  if (gesture?.kind === 'aim' && ui.hover !== null) {
    ui.target = ui.hover;
    updateActions();
  }
  if (pointers.size === 0) {
    gesture = null;
    ui.drag = null;
    ui.hover = null;
    ui.dragging = false;
  } else if (pointers.size === 1) {
    // One finger lifted from a pinch: carry on rotating with the other, never tap.
    gesture = { kind: 'orbit' };
  } else {
    beginPinch();
  }
}
canvas.addEventListener('pointerup', endPointer);
canvas.addEventListener('pointercancel', (e) => {
  gesture = null;
  endPointer(e);
});
canvas.addEventListener('wheel', (e) => {
  e.preventDefault();
  view.zoomAt(e.clientX, e.clientY, Math.exp(e.deltaY * 0.001));
}, { passive: false });
document.addEventListener('contextmenu', (e) => e.preventDefault());
// iOS Safari ignores user-scalable=no; stop its own pinch-zoom of the page.
for (const type of ['gesturestart', 'gesturechange', 'gestureend']) {
  document.addEventListener(type, (e) => e.preventDefault(), { passive: false });
}
document.addEventListener('touchmove', (e) => { if (e.touches.length > 1) e.preventDefault(); }, { passive: false });
document.addEventListener('dblclick', (e) => e.preventDefault());

// ---- HUD --------------------------------------------------------------------

const shareEl = $('share');
let shareKey = '';
function updateShare() {
  // Only what you can know: your share of the stars.
  const mine = game.systems.filter((s) => s.owner === PLAYER).length;
  const key = `${mine}`;
  if (key === shareKey) return;
  shareKey = key;
  shareEl.innerHTML = `<i style="flex-grow:${mine};background:${ownerColor(PLAYER)}"></i><i style="flex-grow:${game.systems.length - mine}"></i>`;
}

function finish() {
  running = false;
  ui.selected = ui.target = null;
  updateActions();
  const won = game.winner === PLAYER;
  $('end-title').textContent = won ? 'Victory' : 'Defeat';
  $('end-title').style.color = won ? ownerColor(PLAYER) : ownerColor(game.winner);
  const m = Math.floor(game.time / 60);
  const s = String(Math.floor(game.time % 60)).padStart(2, '0');
  $('end-sub').textContent = won ? `The sector is yours in ${m}:${s}.` : `Your last star fell at ${m}:${s}.`;
  setTimeout(() => ($('end').hidden = false), 900);
}

// ---- Loop -------------------------------------------------------------------

let last = performance.now();
let hudClock = 0;
let lastTech = {};
function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  if (game) {
    if (running) {
      for (const ai of ais) tickAI(game, ai, dt);
      step(game, dt);
      // Lose a selected star? Drop the selection.
      if (ui.selected !== null && game.systems[ui.selected].owner !== PLAYER) ui.selected = ui.target = null;
      hudClock -= dt;
      if (hudClock <= 0) {
        hudClock = 0.2;
        ui.vis = visibility(game, PLAYER);
        const t = game.tech[PLAYER];
        const done = Object.keys(TECH).find((k) => t[k] > (lastTech[k] ?? 0));
        if (done) toast(`${TECH[done].name} ${ROMAN[t[done]]} complete`, ownerColor(PLAYER));
        lastTech = { ...t };
        updateShare();
        updateActions();
      }
      if (game.winner !== null) finish();
    }
    view.render(game, ui, dt, now / 1000);
  }
  requestAnimationFrame(frame);
}

window.addEventListener('resize', view.resize);
view.resize();

// A demo match plays behind the menu until the player starts.
game = createGame({ seed: 7, opponents: 3, portrait: innerHeight > innerWidth });
ais = Array.from({ length: 4 }, (_, i) => createAI(i, 'normal', rng(99 + i)));
view.build(game);
(function demo() {
  if (running || $('menu').hidden) return;
  for (const ai of ais) tickAI(game, ai, 1 / 30);
  step(game, 1 / 30);
  if (game.winner !== null) { game = createGame({ seed: game.time | 0, opponents: 3, portrait: innerHeight > innerWidth }); view.build(game); }
  view.orbit.az += 0.0015;
  setTimeout(demo, 33);
})();
requestAnimationFrame(frame);

// Hook for the headless smoke test in tools/.
window.__starfall = { get game() { return game; }, view };
