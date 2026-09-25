import { createGame, step, launch, plan, fleetState, rng, PLAYER, NEUTRAL, RULES, slotsOf, cantBuild, buildStructure, cantOrderShip, orderShip, income, upgrade, cantUpgrade, upgradeCost, upgradeTime } from './sim.js';
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

const ui = { selected: null, target: null, fleet: null, count: 1, preview: null, dragging: false };

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
  view.build(game);
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
  ui.count = Math.max(1, Math.min(ui.count, s.ships));
  $('count').textContent = s.ships ? ui.count : 0;
  $('buildrow').hidden = ui.target !== null;
  if (ui.target === null) {
    ui.preview = null;
    // What's here: slots, structures (and their progress), the ship queue.
    const parts = s.structures.map((x) => {
      const def = RULES.structures[x.type];
      const lvl = def.maxLevel ? ` ${x.level}` : '';
      if (x.next) return `${def.name}${lvl}→${x.next} ${Math.floor((1 - x.left / upgradeTime({ ...x, level: x.next - 1 })) * 100)}%`;
      return x.left > 0 ? `${def.name} ${Math.floor((1 - x.left / def.time) * 100)}%` : `${def.name}${lvl}`;
    });
    const queue = s.queue ? ` · building ${s.queue} ship${s.queue === 1 ? '' : 's'} (${Math.floor(s.build * 100)}%)` : '';
    setHTML($('info'), `<b>${s.name}</b> · ${s.ships} ship${s.ships === 1 ? '' : 's'}${queue}<br>`
      + `${parts.join(', ') || 'Nothing built'} · slots ${s.structures.length}/${slotsOf(s)}`);
    $('launch').disabled = true;
    renderBuildRow(s);
  } else {
    const t = game.bodies[ui.target];
    ui.preview = plan(game, s, t);
    const defence = t.owner === PLAYER ? 'reinforce' : `${t.ships} ship${t.ships === 1 ? '' : 's'}, ${Math.ceil(t.guns)} gun${Math.ceil(t.guns) === 1 ? '' : 's'}`;
    setHTML($('info'), `<b>${ui.count}</b> → <b>${t.name}</b> (${defence}) · arrive in <b>${fmt(ui.preview.T)}</b>`);
    $('launch').disabled = s.ships < 1;
  }
}
// ---- Building ----------------------------------------------------------------

const BUILD = [
  { key: 'ship', label: 'Ship', cost: () => RULES.ship.cost },
  { key: 'shipyard', label: 'Yard', cost: () => RULES.structures.shipyard.cost },
  { key: 'mine', label: 'Mine', cost: () => RULES.structures.mine.cost },
  { key: 'defence', label: 'Guns', cost: () => RULES.structures.defence.cost },
];
function renderBuildRow(s) {
  const html = BUILD.map((b) => {
    const why = b.key === 'ship' ? cantOrderShip(game, s) : cantBuild(game, s, b.key);
    // Hide what can never go here; grey out what can't be afforded yet.
    if (why && why !== 'not enough credits' && b.key !== 'ship' && why !== 'no free slots') return '';
    return `<button data-b="${b.key}" ${why ? 'disabled' : ''} title="${why || ''}">${b.label}<small>${b.cost()}</small></button>`;
  }).join('') + s.structures.map((x, i) => {
    // Upgrades for what's already here.
    const why = cantUpgrade(game, s, x);
    if (why && why !== 'not enough credits') return '';
    const name = x.type === 'mine' ? 'Mine' : 'Guns';
    return `<button data-u="${i}" ${why ? 'disabled' : ''}>${name} ${x.level}→${x.level + 1}<small>${upgradeCost(x)}</small></button>`;
  }).join('');
  setHTML($('buildrow'), html);
}
$('buildrow').addEventListener('click', (e) => {
  const up = e.target.closest('button[data-u]');
  if (up && ui.selected !== null) {
    const s = game.bodies[ui.selected];
    const x = s.structures[Number(up.dataset.u)];
    if (x && upgrade(game, s, x)) toast(`Upgrading ${RULES.structures[x.type].name} to level ${x.next} · ${Math.round(upgradeTime({ ...x, level: x.next - 1 }))}s`, ownerColor(PLAYER));
    updateActions();
    return;
  }
  const btn = e.target.closest('button[data-b]');
  if (!btn || ui.selected === null) return;
  const s = game.bodies[ui.selected];
  const k = btn.dataset.b;
  const ok = k === 'ship' ? orderShip(game, s) : buildStructure(game, s, k);
  if (ok) toast(k === 'ship' ? `Ship ordered at ${s.name}` : `${RULES.structures[k].name} under construction at ${s.name}`, ownerColor(PLAYER));
  updateActions();
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
  if (ui.selected === null || ui.target === null) return;
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
    ui.selected = id;
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

function finish() {
  running = false;
  ui.selected = ui.target = null;
  updateActions();
  const won = game.winner === PLAYER;
  $('end-title').textContent = won ? 'Victory' : 'Defeat';
  $('end-title').style.color = ownerColor(won ? PLAYER : game.winner);
  $('end-sub').textContent = won ? `The system is yours after ${fmt(game.time)}.` : `Your last world fell at ${fmt(game.time)}.`;
  setTimeout(() => ($('end').hidden = false), 1200);
}

let last = performance.now();
let uiClock = 0;
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
        updateActions();
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
window.__perihelion = { get game() { return game; }, view, ui, sim: { launch } };
