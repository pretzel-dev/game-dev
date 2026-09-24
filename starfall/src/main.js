import { createGame, step, sendFraction, upgrade, upgradeCost, rng, PLAYER, NEUTRAL, RULES } from './sim.js';
import { createAI, tickAI } from './ai.js';
import { createView, ownerColor } from './render.js';

const $ = (id) => document.getElementById(id);
const view = createView($('scene'), $('labels'));

const prefs = loadPrefs();
let game = null;
let ais = [];
let running = false;

// UI state shared with the renderer.
const ui = { selected: null, hover: null, drag: null, dragging: false, fraction: prefs.fraction };

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
  ui.selected = ui.hover = ui.drag = null;
  view.build(game);
  // Start looking at the player's home.
  const home = game.systems.find((s) => s.owner === PLAYER).pos;
  view.orbit.az = Math.abs(home.z) > Math.abs(home.x) || innerHeight > innerWidth ? (home.z >= 0 ? 0 : Math.PI) : Math.atan2(home.x, home.z);
  view.orbit.pol = 0.7;
  view.orbit.dist = view.fitDistance();
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

// ---- Actions --------------------------------------------------------------

function updateActions() {
  const s = ui.selected !== null ? game.systems[ui.selected] : null;
  const show = !!s && s.owner === PLAYER && running;
  $('actions').hidden = !show;
  if (!show) return;
  const cost = upgradeCost(s);
  const btn = $('upgrade');
  if (cost === null) {
    btn.innerHTML = `Lv ${RULES.maxLevel}<small>max</small>`;
    btn.disabled = true;
  } else {
    const html = `Upgrade<small>${cost}</small>`;
    if (btn.innerHTML !== html) btn.innerHTML = html;
    btn.disabled = s.units < cost;
  }
}

$('upgrade').addEventListener('click', () => {
  if (ui.selected !== null) upgrade(game, game.systems[ui.selected]);
  updateActions();
});

function send(fromId, toId) {
  const from = game.systems[fromId];
  if (from.owner !== PLAYER || fromId === toId) return;
  if (sendFraction(game, from, game.systems[toId], ui.fraction)) buzz(8);
}

function buzz(ms) {
  if (navigator.vibrate) try { navigator.vibrate(ms); } catch { /* ignore */ }
}

function tap(id) {
  if (id === null) {
    ui.selected = null;
  } else if (ui.selected !== null && id !== ui.selected) {
    // The source stays selected so several waves can go out quickly.
    send(ui.selected, id);
  } else if (id === ui.selected) {
    ui.selected = null;
  } else if (game.systems[id].owner === PLAYER) {
    ui.selected = id;
  }
  updateActions();
}

// ---- Touch & mouse input ---------------------------------------------------

const canvas = $('scene');
const pointers = new Map();
let gesture = null; // { kind: 'tap' | 'orbit' | 'send' | 'pinch', ... }

canvas.addEventListener('pointerdown', (e) => {
  if (!running) return;
  canvas.setPointerCapture(e.pointerId);
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pointers.size === 1) {
    const id = view.pick(e.clientX, e.clientY);
    gesture = { kind: 'tap', id, x0: e.clientX, y0: e.clientY, own: id !== null && game.systems[id].owner === PLAYER };
  } else if (pointers.size === 2) {
    ui.drag = null;
    ui.hover = null;
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
  const o = view.orbit;

  if (gesture.kind === 'pinch' && pointers.size >= 2) {
    const [a, b] = [...pointers.values()];
    const d = Math.hypot(a.x - b.x, a.y - b.y);
    o.dist *= gesture.d / Math.max(1, d);
    gesture.d = d;
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    rotate(mx - gesture.mx, my - gesture.my);
    gesture.mx = mx;
    gesture.my = my;
    return;
  }

  if (gesture.kind === 'tap' && Math.hypot(e.clientX - gesture.x0, e.clientY - gesture.y0) > 10) {
    gesture.kind = gesture.own ? 'send' : 'orbit';
  }
  if (gesture.kind === 'orbit') {
    rotate(dx, dy);
  } else if (gesture.kind === 'send') {
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
  if (gesture?.kind === 'send' && ui.hover !== null) {
    send(gesture.id, ui.hover);
    ui.selected = null;
    updateActions();
  }
  if (pointers.size === 0) {
    gesture = null;
    ui.drag = null;
    ui.hover = null;
    ui.dragging = false;
  } else if (gesture?.kind === 'pinch') {
    // One finger lifted from a pinch: keep orbiting with the other, never tap.
    gesture = { kind: 'orbit' };
  }
}
canvas.addEventListener('pointerup', endPointer);
canvas.addEventListener('pointercancel', (e) => {
  gesture = null;
  endPointer(e);
});
canvas.addEventListener('wheel', (e) => {
  e.preventDefault();
  view.orbit.dist *= Math.exp(e.deltaY * 0.001);
}, { passive: false });
document.addEventListener('contextmenu', (e) => e.preventDefault());

// ---- HUD --------------------------------------------------------------------

const shareEl = $('share');
let shareKey = '';
function updateShare() {
  const counts = Array.from({ length: game.players }, () => 0);
  for (const s of game.systems) if (s.owner !== NEUTRAL) counts[s.owner] += s.units;
  for (const f of game.fleets) counts[f.owner] += f.units;
  const key = counts.map((c) => Math.round(c)).join();
  if (key === shareKey) return;
  shareKey = key;
  shareEl.innerHTML = counts.map((c, i) => `<i style="flex-grow:${c};background:${ownerColor(i)}"></i>`).join('');
}

function finish() {
  running = false;
  ui.selected = null;
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
function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  if (game) {
    if (running) {
      for (const ai of ais) tickAI(game, ai, dt);
      step(game, dt);
      // Lose a selected star? Drop the selection.
      if (ui.selected !== null && game.systems[ui.selected].owner !== PLAYER) ui.selected = null;
      hudClock -= dt;
      if (hudClock <= 0) {
        hudClock = 0.2;
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
