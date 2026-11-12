// Perihelion: interface, input, the game loop and multiplayer glue.
// Every player order goes through act(): applied directly in a solo game or on
// the host, sent to the host from a guest. The local player is `me`.
import '@fontsource/rajdhani/latin-500.css';
import '@fontsource/rajdhani/latin-600.css';
import './style.css';
import { icon, glyph } from './icons.js';
import * as S from './sim.js';
import { NEUTRAL, RULES, CLASSES, BUILDABLE, FACTIONS, FACTION_KEYS, TECH, TECH_KEYS, TECH_COST, TRAITS, AGENT, PROFILES } from './sim.js';
import { createAI, stepAI, LEVELS, LEVEL_KEYS } from './ai.js';
import { createView, playerColors, AMBER, INK, HOSTILE, NEUTRAL_COLOR, FACTION_COLORS } from './render.js';
import { hostRoom, joinRoom, MAX_SEATS, cleanName } from './net.js';
import { SCENARIOS, SCENARIO_KEYS } from './scenarios.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const mmss = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

// Panels redraw a few times a second. Swapping a button out from under a
// finger loses the tap, so a panel being pressed waits until the tap is done.
let pressed = null, pressedAt = 0;
const held = new Set();
const setHTML = (el, html) => {
  if (pressed && performance.now() - pressedAt < 1500 && el.contains(pressed)) { el._pending = html; held.add(el); return; }
  el._pending = undefined;
  if (el._html !== html) { el._html = html; el.innerHTML = html; }
};
const flush = () => { pressed = null; for (const el of held) { held.delete(el); if (el._pending !== undefined) setHTML(el, el._pending); } };
window.addEventListener('pointerdown', (e) => { pressed = e.target; pressedAt = performance.now(); }, true);
window.addEventListener('pointerup', () => setTimeout(flush, 300), true);
window.addEventListener('pointercancel', flush, true);

const prefs = (() => {
  const d = { faction: 'concord', rivals: 1, level: 'normal', sound: true, ui: 1, gfx: 'auto', dev: false, name: '', done: {} };
  try { return { ...d, ...JSON.parse(localStorage.getItem('perihelion2') || '{}') }; } catch { return d; }
})();
const save = () => { try { localStorage.setItem('perihelion2', JSON.stringify(prefs)); } catch { /* private mode */ } };
const token = (() => {
  try { let t = localStorage.getItem('perihelion2-key'); if (!t) { t = Math.random().toString(36).slice(2) + Date.now().toString(36); localStorage.setItem('perihelion2-key', t); } return t; } catch { return ''; }
})();
document.documentElement.style.setProperty('--ui-mult', prefs.ui);

// Sound is a trial: it loads only if the module is there.
let audio = { unlock() {}, setEnabled() {}, setVolume() {}, update() {}, play() {} };
{
  const mods = import.meta.glob('./audio.js');
  if (mods['./audio.js']) mods['./audio.js']().then((m) => { audio = m.createAudio(); audio.setEnabled(prefs.sound); }).catch(() => {});
}
const sfx = (type, o) => { if (prefs.sound) audio.play(type, o); };
window.addEventListener('pointerdown', () => audio.unlock(), { once: false, capture: true });

const q = new URLSearchParams(location.search);
const lowEnd = (navigator.deviceMemory && navigator.deviceMemory <= 4 && Math.min(screen.width, screen.height) < 500);
const gfx = () => q.get('gfx') || (prefs.gfx === 'auto' ? (lowEnd ? 'low' : 'high') : prefs.gfx);
const view = createView($('scene'), $('plot'), {
  quality: gfx(),
  onSound: (type, pan, gain) => sfx(type, { pan, gain }),
});
view.resize();
window.addEventListener('resize', () => view.resize());

// ---- State --------------------------------------------------------------------
let game = null, ais = [], me = 0, mode = 'demo'; // demo | solo | host | guest
let paused = false, warp = 1, room = null, scn = null, ended = false, netFx = [], lastSnap = 0, notesT = 0;
const ui = { me: 0, sel: new Set(), selBody: null, target: null, targetShip: null, routes: null, routeKey: null, paths: new Map(), colors: [], fx: [], dev: false, plot: null, warp: 1, dragging: false, build: false, plotMode: false };
const inGame = () => mode === 'solo' || mode === 'host' || mode === 'guest';
const live = () => inGame() && game && !ended;
const mine = (s) => s.owner === me;
const selShips = () => game.ships.filter((s) => ui.sel.has(s.id) && s.owner === me);

function start(g, opts = {}) {
  game = g;
  me = opts.me ?? 0;
  mode = opts.mode || 'solo';
  scn = opts.scn || null;
  ais = [];
  (opts.players || []).forEach((p, i) => { if (p.ai && mode !== 'guest') ais.push(createAI(game, i, p.ai, game.seed)); });
  ended = false; paused = false; warp = opts.warp || 1; netFx = [];
  ui.me = me; ui.dev = mode === 'demo' || (prefs.dev && mode === 'solo');
  ui.colors = playerColors(game);
  document.documentElement.style.setProperty('--me', ui.colors[me] || INK);
  clearSel(); ui.selBody = null;
  for (const e of game.events) e.seen = true;
  view.build(game);
  const home = game.homes[me] || game.bodies.find((b) => b.owner === me) || game.bodies[0];
  if (mode === 'demo') { view.orbit.follow = null; view.orbit.target.set(0, 0, 0); view.orbit.dist = 1100; view.orbit.pol = 1.05; }
  else if (opts.look) { view.orbit.follow = null; view.orbit.ship = null; view.orbit.target.set(opts.look.x, 0, opts.look.z); view.orbit.dist = opts.look.dist; }
  else {
    // Open on the capital, close enough to see its ships and far enough to see its moon, with no fly-in.
    const hp = S.posAt(game, home, game.time);
    const reach = Math.max(12, ...game.bodies.filter((b) => b.parent === home.id).map((b) => b.r), home.parent !== null ? home.r * 1.6 : 0);
    view.focus(game, home.id, false); view.orbit.target.set(hp.x, hp.y, hp.z); view.orbit.dist = reach * 5.5; view.orbit.pol = 0.8;
  }
  $('hud').hidden = mode === 'demo';
  $('title').hidden = mode !== 'demo';
  $('panel').hidden = true; $('sheet').hidden = true; $('strip').hidden = true;
  $('feed').innerHTML = '';
  $('brief').hidden = !scn;
  window.__perihelion = { game, view, ui, S, act, get me() { return me; } };
}
function demo() {
  const fs = [...FACTION_KEYS].sort(() => Math.random() - 0.5);
  const players = [{ faction: fs[0], ai: 'hard' }, { faction: fs[1], ai: 'hard' }];
  start(S.createGame({ seed: (Math.random() * 1e9) | 0, players }), { mode: 'demo', players, me: -2, warp: 3 });
}

// ---- Orders ---------------------------------------------------------------------
function act(cmd) {
  if (!live() || paused && mode !== 'solo') return;
  if (mode === 'guest') { room.send({ t: 'cmd', cmd }); return; }
  apply(me, cmd);
}
function apply(owner, c) {
  if (!game || !game.alive[owner]) return;
  const b = c.body != null ? game.bodies[c.body] : null;
  if (b && b.owner !== owner) return;
  const ids = Array.isArray(c.ids) ? c.ids.filter((x) => Number.isInteger(x)).slice(0, 20) : [];
  switch (c.t) {
    case 'order': {
      const o = c.order;
      if (o === null) return S.setOrder(game, owner, ids, null);
      if (!o || typeof o !== 'object') return;
      const profile = PROFILES[o.profile] ? o.profile : 'cruise';
      if (o.type === 'orbit' && game.bodies[o.body]) S.setOrder(game, owner, ids, { type: 'orbit', body: o.body, profile, loose: !!o.loose, ...(game.bodies[o.via] && game.bodies[o.via].kind === 'planet' ? { via: o.via, side: o.side < 0 ? -1 : 1 } : {}) });
      else if (o.type === 'strike' && game.bodies[o.body]) S.setOrder(game, owner, ids, { type: 'strike', body: o.body, profile, loose: !!o.loose });
      else if (o.type === 'attack') { const T = S.shipById(game, o.ship); if (T && T.seen[owner]) S.setOrder(game, owner, ids, { type: 'attack', loose: !!o.loose, ship: o.ship, mode: o.mode === 'pass' || o.mode === 'board' ? o.mode : 'match', d0: T.st.civil || S.crippled(T) ? 1.2 : 3, profile }); }
      else if (o.type === 'form') { const Ld = S.shipById(game, o.lead); if (Ld && Ld.owner === owner) S.setOrder(game, owner, ids, { type: 'form', lead: Ld.id }); }
      else if (o.type === 'burn') { const l = Math.hypot(o.x, o.y, o.z) || 1; S.setOrder(game, owner, ids, { type: 'burn', x: o.x / l, y: o.y / l, z: o.z / l, left: Math.min(60, Math.max(1, +o.left || 1)) }); }
      return;
    }
    case 'stance': return S.setStance(game, owner, ids, c.st || {});
    case 'salvo': { const T = c.ship != null ? S.shipById(game, c.ship) : null; if (T && T.seen[owner]) S.salvo(game, owner, ids, { ship: T.id }); else if (game.bodies[c.at]) S.salvo(game, owner, ids, { body: c.at }); return; }
    case 'build': return b && S.buildStructure(game, b, c.type);
    case 'upgrade': { const x = b && S.structure(b, c.type); return x && S.upgrade(game, b, x); }
    case 'ship': return b && S.orderShip(game, b, c.cls);
    case 'cancel': return b && S.cancelShip(game, b, c.i);
    case 'demolish': return b && S.demolish(game, b, c.type);
    case 'research': return S.research(game, owner, c.line, c.key);
    case 'agent': { const w = game.bodies[c.at]; return w && S.sendAgent(game, owner, w); }
    case 'recall': { const w = game.bodies[c.at]; return w && S.recallAgent(game, owner, w); }
    case 'op': { const w = game.bodies[c.at]; return w && S.setAgentOp(game, owner, w, c.op); }
    case 'sabotage': { const w = game.bodies[c.at]; return w && S.sabotage(game, owner, w, c.what === 'yard' ? 'yard' : 'battery'); }
    case 'buy': { const w = game.bodies[c.at]; return w && S.buyWorld(game, owner, w); }
    default:
  }
}

// ---- Selection -------------------------------------------------------------------
/** Every ship flying with this one: its formation (leader and followers) and anything sent off with it. */
function fleetOf(s) {
  const root = s.order && s.order.type === 'form' ? S.shipById(game, s.order.lead) || s : s;
  return game.ships.filter((x) => mine(x) && !x.st.civil && x.at === null && (x === root || x === s || x.grp === root.grp || (x.order && x.order.type === 'form' && x.order.lead === root.id)));
}
function clearSel() { ui.armed = null; ui.struct = null; ui.sel = new Set(); ui.target = null; ui.targetShip = null; ui.routes = null; ui.routeKey = null; ui.build = false; ui.plotMode = false; ui.plot = null; }
function selectShips(list) { clearSel(); ui.selBody = null; for (const s of list) ui.sel.add(s.id); sfx('select'); }
function setTarget(bodyId) { ui.target = bodyId; ui.targetShip = null; ui.routeKey = null; refreshRoutes(); sfx('tap'); }
function refreshRoutes() {
  if (ui.target == null || !ui.sel.size) { ui.routes = null; return; }
  ui.routes = S.routes(game, [...ui.sel], ui.target).filter((r) => r.reach);
}
function tap(x, y, double) {
  if (!live()) return;
  let hit = view.pick(x, y);
  // With ships selected, a tap on a world means "go there" even if one of your own ships is drawn over it.
  if (hit && hit.ship != null && ui.sel.size) {
    const s = S.shipById(game, hit.ship), w = view.pick(x, y, false);
    if (s && mine(s) && w && !selShips().every((k) => k.at === w.body)) hit = w;
  }
  if (hit && hit.ship != null) {
    const s = S.shipById(game, hit.ship);
    if (!s) return;
    if (mine(s) && !s.st.civil && ui.sel.size && !ui.sel.has(s.id) && !(s.at !== null && selShips().every((x) => x.at === s.at))) { ui.targetShip = s.id; ui.target = null; ui.routes = null; sfx('tap'); }
    else if (mine(s) && !s.st.civil) {
      if (ui.sel.has(s.id) && ui.sel.size > 1) selectShips([s]);
      else selectShips(s.at !== null ? game.ships.filter((x) => mine(x) && !x.st.civil && x.at === s.at) : fleetOf(s));
      view.followShip(s.id, double);
    } else if (mine(s)) { clearSel(); ui.selBody = null; ui.targetShip = s.id; sfx('tap'); view.followShip(s.id, double); }
    else { ui.targetShip = s.id; ui.target = null; ui.routes = null; if (!ui.sel.size) ui.selBody = null; sfx('tap'); if (double) view.followShip(s.id, true); }
    return;
  }
  if (hit && hit.body != null) {
    const b = game.bodies[hit.body];
    const ships = selShips();
    if (double) view.focus(game, b.id, true);
    if (ships.length && !ships.every((s) => s.at === b.id)) { setTarget(b.id); return; }
    clearSel(); ui.selBody = b.id; sfx('select');
    if (!double) view.focus(game, b.id, false);
    return;
  }
  if (ui.target != null || ui.targetShip != null) { ui.target = null; ui.targetShip = null; ui.routes = null; return; }
  clearSel(); ui.selBody = null;
}

// ---- The strip (what is selected) ---------------------------------------------------
const bar = (v) => `style="--v:${Math.round(Math.max(0, Math.min(1, v)) * 25) * 4}%"`;
function chip(s, on = true) {
  const dots = ['drive', 'reactor', 'weapons', 'sensors'].map((k) => `<i class="${s.out[k] > 0 ? 'out' : ''}"></i>`).join('');
  return `<button class="chip ${on ? 'on' : ''}" data-a="chip" data-v="${s.id}" title="${esc(s.name)}">${glyph(s.cls, ui.colors[s.owner])}<span class="bars"><i class="${s.hull < s.st.hull * 0.35 ? 'low' : ''}" ${bar(s.hull / s.st.hull)}></i><i class="f" ${bar(s.dv / s.st.dv)}></i></span><span class="dots">${dots}</span>${S.rankOf(s) ? `<span class="rk">${'I'.repeat(S.rankOf(s))}</span>` : ''}</button>`;
}
const L = (ic, word) => `${ic}<em>${word}</em>`;
const ROUTE_NAME = { hard: 'Hard burn', cruise: 'Cruise', dark: 'Dark', sling: 'Slingshot' };
// What each button does, in a line. On touch the first tap shows it and the second does it; with a mouse, hover.
const HINT = {
  'go:hard': 'Fastest. Uses the most fuel. Easy to see.',
  'go:cruise': 'Slower. Uses less fuel.',
  'go:dark': 'Slowest. Hard to see.',
  'go:sling': 'Goes past a big planet to save fuel.',
  strike: 'Fly past and shoot the battery. Does not stop.',
  pass: 'Fly past at speed and shoot. More damage, but brief.',
  match: 'Pull alongside and fight. Also how you board.',
  salvo: 'Fire all torpedoes at this target.',
  cancel: 'Stop building this ship. You get 80% back.',
  join: 'Fly to this ship and stay with it.',
  pick: 'Select this ship instead.',
  formation: 'On: ships stay together. Off: each ship goes at its own speed.',
  torps: 'Free: ships fire torpedoes when they can. Held: they do not.',
  fire: 'Held: ships do not shoot, so they are harder to see.',
  evade: 'Harder to hit. Uses fuel. Your own aim is worse.',
  plot: 'Drag from the ship to set a burn.',
  cut: 'Stop the drive. The ship coasts.',
  retreat: 'Go to your nearest world.',
  'upgrade:yard': 'Builds ships 50% faster.',
  'upgrade:habitat': 'One more ship.',
  'upgrade:mine': 'More income.',
  'upgrade:refinery': 'More income.',
  'upgrade:battery': 'Stronger.',
  'upgrade:lab': 'Faster research.',
  'upgrade:exchange': 'More income.',
  'build:yard': 'Builds and repairs ships.',
  'build:mine': 'More income.',
  'build:refinery': 'More income. Fast refuelling.',
  'build:battery': 'Defends this world.',
  'build:habitat': 'One more ship in your fleet.',
  'build:array': 'This world sees further.',
  'build:depot': 'Fast refuelling.',
  'build:lab': 'Research 50% faster.',
  'build:exchange': 'More income.',
  'ship:corvette': 'Small and fast. Hard to see.',
  'ship:frigate': 'All-round warship with torpedoes.',
  'ship:escort': 'Shoots down torpedoes aimed at nearby ships.',
  'ship:battleship': 'Big guns, heavy armour, slow.',
  'ship:tender': 'No weapons. Gives fuel and torpedoes to ships flying next to it. Refills at a yard or your capital.',
  agent: 'Shows you this world and the ships near it. Can be caught.',
  recall: 'Remove the agent so you can use one elsewhere.',
  buy: 'Pay this world to join you.',
  'sab:battery': 'Turn off the battery for 90 seconds. The agent may be caught.',
  'sab:yard': 'Delay the ship being built by 60 seconds. The agent may be caught.',
  'op:steal': 'Take a third of this world\'s income. More likely to be caught.',
  'op:incite': 'This world yields to your ships twice as fast. More likely to be caught.',
  'op:watch': 'Only watch.',
};
const num = (x) => (Math.round(x * 10) / 10).toString();
/** What a structure does on this world at a level, in numbers. */
function structText(type, b, level = 1) {
  const K = (k) => S.knows(game, me, k), t = b.trait, R = RULES.structures[type];
  const pays = (rate, cost) => `+${num(rate)} credits a second. Pays for itself in ${Math.max(1, Math.round(cost / rate / 60))} min.`;
  const cost = level === 1 ? R.cost : S.upgradeCost({ type });
  switch (type) {
    case 'mine': return pays(R.income * (t === 'seam' ? 2 : 1) * (K('deepmine') ? 1.5 : 1), cost);
    case 'refinery': return `${pays(R.income * (t === 'deut' ? 1.5 : 1), cost)}${level === 1 ? ' Refuels ships 3 times as fast.' : ''}`;
    case 'exchange': return pays(R.income, cost);
    case 'habitat': { const n = (t === 'garden' ? 2 : 1) * (K('arcology') ? 2 : 1); return `${n} more ship${n > 1 ? 's' : ''} in your fleet.`; }
    case 'lab': return `Research ${t === 'archive' ? 100 : 50}% faster.`;
    case 'battery': { const hp = RULES.batteryHp * level * (t === 'fortress' ? 2 : 1) * (b.home ? 2 : 1), g = level + (b.home ? 1 : 0); return `Strength ${hp}, ${g} gun${g > 1 ? 's' : ''}. Shoots enemy ships in orbit and torpedoes.`; }
    case 'yard': return level === 1 ? `Builds ships${t === 'hulk' ? ' 50% faster' : ''}. Repairs and rearms ships in orbit.` : 'Builds ships 50% faster.';
    case 'array': return `This world sees ${num(RULES.arraySensor * (t === 'listening' ? 2 : 1))} times as far.`;
    case 'depot': return 'Refuels ships 3 times as fast.';
    default: return '';
  }
}
function shipText(cls) {
  const st = S.statsFor(game, me, cls), C = CLASSES[cls];
  const parts = [`Hull ${st.hull}`, st.rails.length ? `${st.rails.length} rail${st.rails.length > 1 ? 's' : ''}` : '', st.mag ? `${st.mag} torpedoes` : '', `${st.pdc} point defence`, `thrust ${Math.round(st.accel * 1000)}`, `fuel ${Math.round(st.dv)}`].filter(Boolean).join(', ');
  return `${HINT[`ship:${cls}`]} ${parts}. Takes ${mmss(S.shipTime(game, me, cls, ui.selBody != null ? game.bodies[ui.selBody] : null))}.${C.stores ? ` Carries ${C.stores} spare torpedoes.` : ''}`;
}
function hintOf(a, v) {
  const b = ui.selBody != null && game ? game.bodies[ui.selBody] : null;
  if (a === 'trait') return TRAITS[v]?.text || '';
  if (a === 'build' && b) return structText(v, b, 1);
  if (a === 'upgrade' && b) return structText(v, b, (S.structure(b, v)?.level || 1) + 1);
  if (a === 'demolish' && b) { const x = S.structure(b, v); return x ? `Remove it and get ${S.scrapValue(x)} credits back.` : ''; }
  if (a === 'struct' && b) { const x = S.structure(b, v); return x ? structText(v, b, x.level).replace(/ Pays for itself.*$/, '') : ''; }
  if (a === 'ship') return shipText(v);
  if (a === 'torps') return `${HINT.torps} Rearm at a yard, at your capital, or next to a tender.`;
  if (a === 'board') { const T = S.shipById(game, +v); return T ? `Pull alongside and try to take the ship. ${Math.round(S.boardChance(T, selShips()) * 100)}% chance each try. A failed try damages your ships.` : ''; }
  return HINT[`${a}:${v}`] || HINT[a] || '';
}
// Buttons that spend something or cannot be undone ask for a second tap. The rest act at once and just say what they did.
const TWO_STEP = new Set(['go', 'strike', 'pass', 'match', 'board', 'salvo', 'join', 'retreat', 'cut', 'build', 'ship', 'upgrade', 'demolish', 'agent', 'recall', 'buy', 'sab', 'op', 'cancel']);
let touchInput = false;
window.addEventListener('pointerdown', (e) => { touchInput = e.pointerType !== 'mouse'; }, true);
const tile = (a, v, ic, small, cls = '', extra = '') => `<button class="tile ${cls} ${ui.armed === `${a}:${v}` && ui.armedLabel ? 'arm' : ''}" title="${esc(hintOf(a, v))}" data-a="${a}" data-v="${v}">${ic}${small ? `<small>${small}</small>` : ''}${extra}</button>`;
/** The bar's line when no button is picked: the numbers for what is selected. */
function barText() {
  const ships = selShips();
  if (ships.length === 1) {
    const s = ships[0];
    return [`Hull ${Math.round(s.hull)}/${s.st.hull}`, `fuel ${Math.round((s.dv / s.st.dv) * 100)}%`, s.st.mag ? `torpedoes ${s.torps}/${s.st.mag}` : '', s.st.stores ? `spare torpedoes ${Math.floor(s.stores)}/${s.st.stores}` : ''].filter(Boolean).join(', ');
  }
  if (ships.length) return `Torpedoes ${ships.reduce((n, s) => n + s.torps, 0)}/${ships.reduce((n, s) => n + s.st.mag, 0)}. Tap a world to go there, or a ship to attack or join it.`;
  if (ui.selBody != null) {
    const b = game.bodies[ui.selBody], bm = S.batteryMax(b);
    const parts = [];
    if (b.owner === me) parts.push(`Earns ${num(S.incomeOf(b, game))} a second${b.home ? '' : ', sent by freighter'}`);
    if (bm) parts.push(`battery ${Math.round(b.bhp)}/${bm}, ${S.batteryGuns(b)} gun${S.batteryGuns(b) > 1 ? 's' : ''}`);
    if (b.owner !== me) parts.push(`yields after ${Math.round(S.yieldTime(b))} s with ${b.home ? `${S.CAPITAL_SHIPS} of your ships` : 'only your ships'} in orbit${bm ? ' and the battery down' : ''}`);
    return parts.join('. ').replace(/^./, (c) => c.toUpperCase());
  }
  return '';
}
function stripHTML() {
  if (!live()) return '';
  const ships = selShips();
  if (ships.length) {
    const one = ships.length === 1 ? ships[0] : null;
    let h = `<div class="head"><b>${one ? esc(one.name) : `${ships.length} ships`}</b><small>${one ? [CLASSES[one.cls].name, RANKS[S.rankOf(one)]].filter(Boolean).join(' · ') : ''}</small><button class="x" data-a="clear">${icon('close')}</button></div>`;
    h += `<div class="row">${ships.map((s) => chip(s)).join('')}</div>`;
    const lead = ships.find((s) => s.order && s.at === null);
    if (lead && ui.target == null && ui.targetShip == null) {
      const o = lead.order;
      const to = o.type === 'form' ? `With ${S.shipById(game, o.lead)?.name || ''}` : o.body != null ? game.bodies[o.body].name : o.type === 'attack' ? (S.shipById(game, o.ship)?.name || 'contact') : '';
      h += `<div class="sub">${icon(o.type === 'burn' ? 'plot' : o.type === 'form' ? 'match' : o.type === 'orbit' ? (o.via != null && !o.done ? 'sling' : o.profile) : 'strike')} ${esc(to)}${o.type !== 'burn' && o.type !== 'form' && lead.tau ? `<span class="num">${mmss(Math.ceil(lead.tau / 5) * 5)}</span>` : ''}</div>`;
    }
    if (ui.target != null) {
      const b = game.bodies[ui.target];
      const tank = Math.min(...ships.map((s) => s.dv));
      h += `<div class="sub">${icon('arrived')} ${esc(b.name)}</div><div class="row">`;
      for (const r of ui.routes || []) {
        const over = r.dv > tank;
        h += tile('go', r.key, L(icon(r.key), ROUTE_NAME[r.key]), mmss(Math.round(r.time / 5) * 5), `wide ${over ? 'no' : ''}`, `<span class="fuel"><i class="${over ? 'over' : ''}" style="width:${Math.min(100, Math.round((r.dv / Math.max(0.01, tank)) * 20) * 5)}%"></i></span>`);
      }
      if (b.owner !== me && S.batteryMax(b) > 0 && b.bhp > 0) h += tile('strike', b.id, L(icon('strike'), 'Firing pass'), '', 'wide');
      if (!(ui.routes || []).length) h += `<span class="hint">no course</span>`;
      h += '</div>';
    } else if (ui.targetShip != null) {
      const T = S.shipById(game, ui.targetShip);
      if (T && T.owner === me && !T.st.civil) {
        h += `<div class="sub">${icon('match')} ${esc(T.name)}</div><div class="row">${tile('join', T.id, L(icon('match'), 'Join'), '', 'wide')}${tile('pick', T.id, L(icon('check'), 'Select'), '', 'wide')}</div>`;
      } else if (T && (ui.dev || T.seen[me])) {
        const known = T.seen[me] === 2;
        h += `<div class="sub" style="color:${T.owner < 0 ? AMBER : HOSTILE}">${icon('contact')} ${T.derelict ? `Derelict ${CLASSES[T.cls].name.toLowerCase()}. Match to board.` : T.owner < 0 ? 'Convoy. Match to board.' : known ? `${esc(T.name)} · ${CLASSES[T.cls].name}` : 'Unknown contact'}</div><div class="row">`;
        h += tile('pass', T.id, L(icon('strike'), 'Pass'), '', 'wide') + tile('match', T.id, L(icon('match'), 'Match'), '', 'wide');
        if (known && T.owner >= 0 && !T.st.civil) h += tile('board', T.id, L(icon('flag'), 'Board'), '', 'wide');
        if (ships.some((s) => s.torps > 0)) h += tile('salvo', T.id, L(icon('salvo'), 'Salvo'), '', 'wide');
        h += '</div>';
      } else ui.targetShip = null;
    } else {
      const all = (k) => ships.every((s) => s[k]);
      h += '<div class="row">';
      if (ships.some((s) => s.st.tubes)) h += tile('torps', '', L(icon('torp'), all('torpsFree') ? 'Torpedoes free' : 'Torpedoes held'), `${ships.reduce((n, s) => n + s.torps, 0)} left`, all('torpsFree') ? 'on' : '');
      h += tile('fire', '', L(icon('fire'), all('fireFree') ? 'Guns free' : 'Guns held'), '', all('fireFree') ? 'on' : '');
      h += tile('evade', '', L(icon('evade'), 'Evade'), '', all('evade') ? 'on' : '');
      h += tile('plot', '', L(icon('plot'), 'Plot burn'), '', ui.plotMode ? 'on' : '');
      if (ships.some((s) => s.order)) h += tile('cut', '', L(icon('cut'), 'Stop'), '');
      h += tile('retreat', '', L(icon('retreat'), 'Retreat'), '');
      if (ships.length > 1) h += tile('formation', '', L(icon('match'), 'Formation'), '', ui.loose ? '' : 'on');
      h += tile('follow', '', L(icon('focus'), 'Follow'), '');
      h += '</div>';
      if (ui.plotMode) h += `<div class="hint">Drag from the ship.</div>`;
    }
    return h;
  }
  if (ui.targetShip != null) {
    const T = S.shipById(game, ui.targetShip);
    if (!T || !(ui.dev || T.seen[me])) { ui.targetShip = null; return ''; }
    if (T.st.civil) return freighterHTML(T);
    if (T.derelict) return `<div class="head"><b>${esc(T.name)}</b><small>Derelict ${CLASSES[T.cls].name.toLowerCase()}</small><button class="x" data-a="clear">${icon('close')}</button></div><div class="sub">No power. Match it to board. It joins your fleet.</div>`;
    const bound = T.owner !== me && S.knows(game, me, 'signals') ? (T.dest ?? (T.order && T.order.body != null ? T.order.body : null)) : null;
    if (bound != null && T.seen[me] === 2) return `<div class="head"><b style="color:${ui.colors[T.owner]}">${esc(T.name)}</b><small>${CLASSES[T.cls].name}</small><button class="x" data-a="clear">${icon('close')}</button></div><div class="row">${chip(T, false)}</div><div class="sub">${icon('arrived')} Bound for ${esc(game.bodies[bound].name)}</div>`;
    const known = T.seen[me] === 2 || ui.dev;
    return `<div class="head"><b style="color:${ui.colors[T.owner]}">${known ? esc(T.name) : 'Contact'}</b><small>${known ? CLASSES[T.cls].name : 'unidentified'}</small><button class="x" data-a="clear">${icon('close')}</button></div>${known ? `<div class="row">${chip(T, false)}</div>` : ''}`;
  }
  if (ui.selBody != null) {
    const b = game.bodies[ui.selBody];
    const own = b.owner === me;
    const who = b.owner === NEUTRAL ? 'Independent' : game.names[b.owner];
    let h = `<div class="head"><b style="color:${b.owner === NEUTRAL ? INK : ui.colors[b.owner]}">${esc(b.name)}</b><small>${b.home ? 'Capital' : b.giant ? 'Gas giant' : b.kind} · ${esc(who)}</small><button class="x" data-a="clear">${icon('close')}</button></div>`;
    const here = game.ships.filter((s) => s.at === b.id && mine(s) && !s.st.civil);
    if (b.trait) h += `<div class="row">${tile('trait', b.trait, L(icon('star'), TRAITS[b.trait].name), '', 'wide on')}</div>`;
    if (!own) {
      const ag = S.agentAt(game, me, b);
      if (ag && ag.at > game.time) h += `<div class="sub">${icon('agent')} Agent arriving<span class="num">${mmss(Math.ceil((ag.at - game.time) / 5) * 5)}</span></div>`;
      else if (ag) {
        h += '<div class="row">';
        if (b.owner === NEUTRAL) h += tile('buy', b.id, L(icon('credits'), 'Buy'), S.worldPrice(game, b), S.cantBuyWorld(game, me, b) ? 'no' : '');
        else {
          if (S.knows(game, me, 'sabot')) h += tile('sab', 'battery', L(icon('battery'), 'Sabotage'), AGENT.opCost, S.cantSabotage(game, me, b, 'battery') ? 'no' : '') + tile('sab', 'yard', L(icon('yard'), 'Stall yard'), AGENT.opCost, S.cantSabotage(game, me, b, 'yard') ? 'no' : '');
          if (S.knows(game, me, 'rings')) h += tile('op', ag.op === 'steal' ? 'watch' : 'steal', L(icon('credits'), 'Steal'), '', ag.op === 'steal' ? 'on' : '');
          if (S.knows(game, me, 'fifth')) h += tile('op', ag.op === 'incite' ? 'watch' : 'incite', L(icon('flag'), 'Incite'), '', ag.op === 'incite' ? 'on' : '');
        }
        h += tile('recall', b.id, L(icon('agent'), 'Recall'), '') + '</div>';
        if (b.owner !== NEUTRAL && b.queue && b.queue.length) h += `<div class="sub">On the slip: ${b.queue.map((q) => CLASSES[q.cls].name).join(', ')}</div>`;
      } else if (S.knows(game, me, 'signals')) h += `<div class="row">${tile('agent', b.id, L(icon('agent'), 'Send agent'), AGENT.cost, S.cantSendAgent(game, me, b) ? 'no' : '')}</div>`;
    }
    if (own) {
      const slots = S.slotsOf(b);
      h += '<div class="row">';
      const boost = b.trait ? TRAITS[b.trait].boost : null;
      for (const x of b.structures) {
        const S0 = RULES.structures[x.type];
        h += tile('struct', x.type, L(icon(x.type), S0.name), '', `${ui.struct === x.type ? 'on' : ''} ${boost === x.type ? 'boost' : ''}`, `${S0.maxLevel > 1 ? `<span class="lv">${'I'.repeat(x.level)}</span>` : ''}${x.left > 0 ? `<span class="prog" style="width:${Math.round((1 - x.left / x.total) * 20) * 5}%"></span>` : ''}`);
      }
      for (let i = b.structures.length; i < slots; i++) h += tile('slot', '', L(icon('add'), 'Build'), '', `empty ${ui.build ? 'on' : ''}`);
      h += '</div>';
      const px = ui.struct ? S.structure(b, ui.struct) : null;
      if (px) {
        const S0 = RULES.structures[px.type], can = S.working(px) && px.level < S0.maxLevel;
        h += `<div class="row">${can ? tile('upgrade', px.type, L(icon('up'), 'Upgrade'), S.upgradeCost(px), S.cantUpgrade(game, b, px) ? 'no' : '') : ''}${tile('demolish', px.type, L(icon('close'), 'Remove'), `+${S.scrapValue(px)}`, S.cantDemolish(game, b, px.type) ? 'no' : '')}</div>`;
      } else ui.struct = null;
      if (ui.build) {
        h += '<div class="row">';
        for (const type in RULES.structures) {
          const why = S.cantBuild(game, b, type);
          if (why && why !== 'Not enough credits') continue;
          h += tile('build', type, L(icon(type), RULES.structures[type].name), RULES.structures[type].cost, `${why ? 'no' : ''} ${boost === type ? 'boost' : ''}`);
        }
        h += '</div>';
      }
      if (S.has(b, 'yard')) {
        h += '<div class="row">';
        for (const cls of BUILDABLE) {
          const why = S.cantOrderShip(game, b, cls);
          if (why && why.startsWith('Needs') && cls === 'battleship' && !S.knows(game, me, 'spinal')) { h += tile('none', '', L(glyph(cls, DIMC), CLASSES[cls].name), 'research', 'no'); continue; }
          h += tile('ship', cls, L(glyph(cls, ui.colors[me]), CLASSES[cls].name), S.shipCost(game, me, cls), why ? 'no' : '').replace('<button', `<button title="${CLASSES[cls].name}"`);
        }
        h += '</div>';
        if (b.queue.length) h += `<div class="row">${b.queue.map((qq, i) => tile('cancel', i, glyph(qq.cls, AMBER), i === 0 ? mmss(Math.ceil(qq.left / 5) * 5) : '', 'on', i === 0 ? `<span class="prog" style="width:${Math.round((1 - qq.left / qq.total) * 20) * 5}%"></span>` : '')).join('')}</div>`;
      }
      if (!b.home) h += `<div class="sub">${icon('freight')}<span class="fuel" style="flex:1;height:3px;background:var(--faint);position:relative"><i style="position:absolute;inset:0 auto 0 0;background:var(--amber);width:${Math.min(100, Math.round((b.stock / RULES.load) * 20) * 5)}%"></i></span>${b.blockaded ? `<span style="color:${HOSTILE}">blockaded</span>` : ''}</div>`;
    } else if (b.structures.length) {
      h += `<div class="sub">${b.structures.filter(S.working).map((x) => icon(x.type)).join('')}</div>`;
    }
    if (here.length) h += `<div class="row">${here.map((s) => chip(s, false)).join('')}${tile('fleet', b.id, L(icon('check'), 'Select all'), '')}</div>`;
    return h;
  }
  return '';
}
const DIMC = '#6d685c';
const RANKS = ['', 'Seasoned', 'Veteran', 'Elite'];
/** A freighter, in a few words: whose, where from, where to, what she carries, when she's due. */
function freighterHTML(T) {
  const own = T.owner === me;
  if (T.owner < 0) return `<div class="head"><b>Convoy</b><small>Independent</small><button class="x" data-a="clear">${icon('close')}</button></div><div class="sub">${icon('freight')} ${Math.round(T.cargo || 0)} credits${T.order && T.order.body != null ? `, going to ${esc(game.bodies[T.order.body].name)}` : ''}. Match it to take them.</div>`;
  let h = `<div class="head"><b style="color:${ui.colors[T.owner]}">Freighter</b><small>${esc(game.names[T.owner])}</small><button class="x" data-a="clear">${icon('close')}</button></div>`;
  if (own && T.order && T.order.body != null) {
    const from = T.src != null ? game.bodies[T.src].name : '';
    h += `<div class="sub">${icon('freight')} ${from ? `${esc(from)} to ` : 'To '}${esc(game.bodies[T.order.body].name)}<span class="num">${T.tau ? mmss(Math.ceil(T.tau / 5) * 5) : ''}</span></div>`;
    h += `<div class="sub">${Math.round(T.cargo || 0)} credits, paid on arrival.</div>`;
  } else if (!own) h += `<div class="sub">Carrying their income. Destroy it, or match it to take the credits.</div>`;
  return h;
}
function clickStrip(a, v) {
  // Touch: the first tap on a button says what it does; the second does it.
  const key = `${a}:${v}`;
  if (a === 'disarm') { ui.armed = null; sfx('close'); refreshUI(); return; }
  if (a === 'confirm') { if (!ui.armed) return; const [a2, ...r] = ui.armed.split(':'); ui.confirmed = true; clickStrip(a2, r.join(':')); return; }
  if (touchInput && TWO_STEP.has(a) && ui.armed !== key && !ui.confirmed) { ui.armed = key; ui.armedText = hintOf(a, v); ui.armedLabel = arguments[2] || 'OK'; sfx('tap'); refreshUI(); return; }
  ui.confirmed = false;
  ui.armed = TWO_STEP.has(a) ? null : key; ui.armedText = hintOf(a, v); ui.armedLabel = '';
  const ships = selShips(), ids = ships.map((s) => s.id);
  const b = ui.selBody != null ? game.bodies[ui.selBody] : null;
  const order = (o) => { act({ t: 'order', ids, order: o && ui.loose ? { ...o, loose: true } : o }); sfx('confirm'); };
  switch (a) {
    case 'clear': clearSel(); ui.selBody = null; sfx('close'); break;
    case 'chip': {
      const id = +v;
      const s = S.shipById(game, id);
      if (!s || !mine(s)) break;
      if (ui.sel.has(id)) { if (ui.sel.size > 1) { ui.sel.delete(id); refreshRoutes(); } } else selectShips([s]);
      sfx('tap');
      break;
    }
    case 'fleet': selectShips(game.ships.filter((s) => s.at === +v && mine(s) && !s.st.civil)); break;
    case 'go': {
      const r = (ui.routes || []).find((x) => x.key === v);
      if (!r || r.dv > Math.min(...ships.map((s) => s.dv))) { sfx('deny'); break; }
      order({ type: 'orbit', body: ui.target, profile: r.profile, via: r.via, side: r.side });
      ui.target = null; ui.routes = null;
      break;
    }
    case 'strike': order({ type: 'strike', body: +v, profile: 'hard' }); ui.target = null; ui.routes = null; break;
    case 'pass': order({ type: 'attack', ship: +v, mode: 'pass', profile: 'hard' }); ui.targetShip = null; break;
    case 'match': order({ type: 'attack', ship: +v, mode: 'match', profile: 'hard' }); ui.targetShip = null; break;
    case 'board': order({ type: 'attack', ship: +v, mode: 'board', profile: 'hard' }); ui.targetShip = null; break;
    case 'salvo': act({ t: 'salvo', ids, ship: +v }); sfx('confirm'); break;
    case 'torps': act({ t: 'stance', ids, st: { torpsFree: !ships.every((s) => s.torpsFree) } }); sfx('tap'); break;
    case 'fire': act({ t: 'stance', ids, st: { fireFree: !ships.every((s) => s.fireFree) } }); sfx('tap'); break;
    case 'evade': act({ t: 'stance', ids, st: { evade: !ships.every((s) => s.evade) } }); sfx('tap'); break;
    case 'cut': order(null); break;
    case 'plot': ui.plotMode = !ui.plotMode; ui.plot = null; sfx('tap'); break;
    case 'follow': if (ships[0]) view.followShip(ships[0].id, true); break;
    case 'formation': ui.loose = !ui.loose; sfx('tap'); break;
    case 'join': order({ type: 'form', lead: +v }); ui.targetShip = null; break;
    case 'pick': { const T = S.shipById(game, +v); if (T) { selectShips([T]); view.followShip(T.id); } break; }
    case 'retreat': {
      // Nearest friendly world, by a hard burn if the tanks allow, else as they can.
      let best = null, bd = 1e9;
      for (const w of game.bodies) { if (w.owner !== me) continue; const p = game.bp ? game.bp[w.id] : S.posAt(game, w, game.time); const d = Math.hypot(p.x - ships[0].x, p.z - ships[0].z) + (S.has(w, 'yard') || w.home ? 0 : 40); if (d < bd) { bd = d; best = w; } }
      if (best) {
        const rs = S.routes(game, ids, best.id).filter((r) => r.ok);
        const r = rs.find((x) => x.key === 'hard') || rs[0];
        if (r) order({ type: 'orbit', body: best.id, profile: r.profile, via: r.via, side: r.side }); else sfx('deny');
      }
      break;
    }
    case 'slot': ui.build = !ui.build; ui.struct = null; sfx('tap'); break;
    case 'struct': ui.struct = ui.struct === v ? null : v; ui.build = false; sfx('tap'); break;
    case 'demolish': if (b && !S.cantDemolish(game, b, v)) { act({ t: 'demolish', body: b.id, type: v }); ui.struct = null; sfx('close'); } else sfx('deny'); break;
    case 'trait': break;
    case 'agent': if (b && !S.cantSendAgent(game, me, b)) { act({ t: 'agent', at: b.id }); sfx('confirm'); } else sfx('deny'); break;
    case 'recall': if (b) { act({ t: 'recall', at: b.id }); sfx('close'); } break;
    case 'buy': if (b && !S.cantBuyWorld(game, me, b)) { act({ t: 'buy', at: b.id }); sfx('confirm'); } else sfx('deny'); break;
    case 'sab': if (b && !S.cantSabotage(game, me, b, v)) { act({ t: 'sabotage', at: b.id, what: v }); sfx('confirm'); } else sfx('deny'); break;
    case 'op': if (b) { act({ t: 'op', at: b.id, op: v }); sfx('tap'); } break;
    case 'build': if (b && !S.cantBuild(game, b, v)) { act({ t: 'build', body: b.id, type: v }); ui.build = false; sfx('confirm'); } else sfx('deny'); break;
    case 'upgrade': { const x = b && S.structure(b, v); if (x && !S.cantUpgrade(game, b, x)) { act({ t: 'upgrade', body: b.id, type: v }); sfx('confirm'); } else sfx('deny'); break; }
    case 'ship': if (b && !S.cantOrderShip(game, b, v)) { act({ t: 'ship', body: b.id, cls: v }); sfx('confirm'); } else sfx('deny'); break;
    case 'cancel': if (b) { act({ t: 'cancel', body: b.id, i: +v }); sfx('close'); } break;
    default:
  }
  refreshUI();
}
const delegate = (el, fn) => el.addEventListener('click', (e) => { const t = e.target.closest('[data-a]'); if (t) { e.stopPropagation(); fn(t.dataset.a, t.dataset.v, t); } });
delegate($('strip'), (a, v, el) => clickStrip(a, v, el.querySelector('em')?.textContent));

// ---- Research sheet ------------------------------------------------------------------
function incomeHTML() {
  const inc = S.incomeBreakdown(game, me);
  const how = { capital: 'Paid directly', freight: 'By freighter', blockaded: 'Blockaded' };
  let h = `<div class="head"><b>Income</b><small>+${inc.total.toFixed(1)} a second</small><button class="x" data-a="closeSheet">${icon('close')}</button></div>`;
  for (const l of inc.lines.sort((a, b) => b.rate - a.rate)) {
    const b = game.bodies[l.body];
    h += `<div class="line"><div class="what"><b>${esc(b.name)}</b><span${l.how === 'blockaded' ? ` style="color:${HOSTILE}"` : ''}>${how[l.how]}</span></div><span class="num">${l.how === 'blockaded' ? '0.0' : `+${l.rate.toFixed(1)}`}</span></div>`;
  }
  const fr = game.ships.filter((x) => x.owner === me && x.st.civil);
  const waiting = game.bodies.reduce((n, b) => n + (b.owner === me ? b.stock : 0), 0);
  h += `<div class="sub">${icon('freight')} ${fr.length} freighter${fr.length === 1 ? '' : 's'} carrying ${Math.round(fr.reduce((n, x) => n + (x.cargo || 0), 0) / 10) * 10}. ${Math.round(waiting / 10) * 10} waiting.</div>`;
  return h;
}
function sheetHTML() {
  if (ui.sheet === 'income') return incomeHTML();
  const tech = game.tech[me], sp = S.researchSpeed(game, me), pr = tech.project;
  let h = `<div class="head"><b>Research</b><small>${sp > 1 ? `Speed ${Math.round(sp * 100)}%` : ''}</small><button class="x" data-a="closeSheet">${icon('close')}</button></div><div class="tree">`;
  const state = (line, i, o) => (tech.picks[o.key] ? 'done' : pr && pr.key === o.key ? 'now' : i < tech[line] || (pr && pr.line === line && i === tech[line]) ? 'skip' : i === tech[line] ? (game.credits[me] < TECH_COST[i] ? 'open poor' : 'open') : 'lock');
  for (const line of TECH_KEYS) {
    h += `<div class="tr"><div class="tn">${icon(line)}<span>${TECH[line].name}</span></div>`;
    TECH[line].tiers.forEach((t, i) => {
      h += `<div class="tc">${t.map((o) => `<button class="nd ${state(line, i, o)} ${ui.techSel === `${line}:${o.key}` ? 'sel' : ''}" data-a="node" data-v="${line}:${o.key}">${o.name}</button>`).join('')}</div>`;
    });
    h += '</div>';
  }
  h += '</div>';
  if (!ui.techSel) { const l0 = TECH_KEYS.find((l) => tech[l] < TECH[l].tiers.length) || TECH_KEYS[0]; ui.techSel = `${l0}:${TECH[l0].tiers[Math.min(tech[l0], 3)][0].key}`; }
  if (ui.techSel) {
    const [line, key] = ui.techSel.split(':'), i = TECH[line].tiers.findIndex((t) => t.some((o) => o.key === key)), o = S.techOption(key), st = state(line, i, o).split(' ')[0];
    const fork = TECH[line].tiers[i].length > 1;
    const right = st === 'done' ? 'Done' : st === 'now' ? mmss(Math.ceil(pr.left / sp / 5) * 5) : st === 'skip' ? 'Not chosen' : st === 'lock' ? 'Later' : `<button class="tile ${S.cantResearch(game, me, line, key) ? 'no' : 'go'}" data-a="research" data-v="${line}:${key}"><em>Research</em><small>${TECH_COST[i]}</small></button>`;
    h += `<div class="td"><div class="what"><b>${o.name}</b><span>${o.text}${fork && st === 'open' ? ' You can pick only one of the two.' : ''}</span></div><span class="num">${right}</span></div>`;
  }
  return h;
}
delegate($('sheet'), (a, v) => {
  if (a === 'closeSheet') { $('sheet').hidden = true; sfx('close'); }
  if (a === 'node') { ui.techSel = v; sfx('tap'); }
  if (a === 'research') { const [line, key] = v.split(':'); if (!S.cantResearch(game, me, line, key)) { act({ t: 'research', line, key }); sfx('confirm'); } else sfx('deny'); }
  refreshUI();
});

// ---- Notices (icons under the top bar) -----------------------------------------------
function notice(ic, color, text, jump) {
  const el = document.createElement('button');
  el.className = 'note';
  el.style.setProperty('--c', color);
  el.innerHTML = icon(ic) + (text ? `<span>${esc(text)}</span>` : '');
  if (jump) el.onclick = () => { jump(); sfx('tap'); };
  const feed = $('feed');
  feed.prepend(el);
  while (feed.children.length > 5) feed.lastChild.remove();
  setTimeout(() => el.classList.add('out'), 5200);
  setTimeout(() => el.remove(), 5900);
}
let lastContact = -99, lastAlarm = -99;
function drainEvents() {
  for (const e of game.events) {
    if (e.seen) continue;
    e.seen = true;
    if (!inGame()) continue;
    const s = e.ship != null ? S.shipById(game, e.ship) : null;
    const toShip = s ? () => view.followShip(s.id) : null;
    const b = e.at != null ? game.bodies[e.at] : null;
    const toBody = b ? () => view.focus(game, b.id, false) : null;
    const toPoint = e.x !== undefined ? () => { view.orbit.follow = null; view.orbit.ship = null; view.orbit.target.set(e.x, e.y, e.z); } : null;
    const mineC = ui.colors[me];
    switch (e.type) {
      case 'contact': if (e.owner === me && game.time - lastContact > 4) { lastContact = game.time; notice('contact', AMBER, 'Contact', toShip); sfx('contact'); } break;
      case 'salvo': if (e.owner !== me && s && s.seen[me] && game.time - lastAlarm > 6) { lastAlarm = game.time; notice('torp', HOSTILE, 'Torpedoes', toShip); sfx('alarm'); } break;
      case 'system': if (e.owner === me && s) { notice('bolt', HOSTILE, `${s.name}: ${e.sys} out`, toShip); sfx('system'); } break;
      case 'repaired': if (e.owner === me) sfx('repaired'); break;
      case 'lost': if (e.owner === me) { notice('lost', HOSTILE, `${e.name} lost`, toPoint); sfx('lost'); } else if (e.by === me) notice('lost', INK, `${e.name} destroyed`, toPoint); break;
      case 'raided': case 'seized': if ((e.owner === me && e.type === 'raided') || e.from === me) { notice('raided', HOSTILE, 'Freighter lost', toPoint); sfx('deny'); } else if (e.by === me || (e.type === 'seized' && e.owner === me)) { notice('freight', AMBER, e.n ? `+${e.n}` : '', toPoint); sfx('freight'); } break;
      case 'captured': if (e.owner === me) { notice('captured', mineC, `${b.name} taken`, toBody); sfx('captured'); } else if (e.from === me) { notice('captured', HOSTILE, `${b.name} lost`, toBody); sfx('lostWorld'); } break;
      case 'silenced': if (e.by === me) sfx('silenced'); else if (e.owner === me) { notice('battery', HOSTILE, `${b.name}: battery down`, toBody); sfx('silenced'); } break;
      case 'built': if (e.owner === me) { notice(e.what, mineC, b.name, toBody); sfx('built'); } break;
      case 'launched': if (e.owner === me && s) { notice('yard', mineC, `${s.name} launched`, toShip); sfx('launched'); } break;
      case 'research': if (e.owner === me) { notice(e.line, AMBER, S.techOption(e.key).name, null); sfx('research'); } break;
      case 'event': if (s) { notice(e.kind === 'derelict' ? 'star' : 'freight', AMBER, e.kind === 'derelict' ? `Derelict ${CLASSES[s.cls].name.toLowerCase()}` : 'Convoy', toShip); sfx('contact'); } break;
      case 'agentCaught': if (e.owner === me) { notice('agent', HOSTILE, `Agent caught at ${b.name}`, toBody); sfx('lost'); } else if (e.by === me) { notice('agent', mineC, `Caught an agent at ${b.name}`, toBody); sfx('repaired'); } break;
      case 'bought': if (e.owner === me) { notice('captured', mineC, `${b.name} joined you`, toBody); sfx('captured'); } else if (e.owner !== NEUTRAL) notice('captured', ui.colors[e.owner], `${b.name} joined ${game.names[e.owner]}`, toBody); break;
      case 'sabotage': if (e.owner === me) { notice('bolt', HOSTILE, `Sabotage at ${b.name}`, toBody); sfx('alarm'); } break;
      case 'promoted': if (e.owner === me && s) { notice('star', AMBER, `${s.name}: ${RANKS[e.rank].toLowerCase()}`, toShip); sfx('research'); } break;
      case 'freight': if (e.owner === me) sfx('freight', { gain: 0.5 }); break;
      case 'fuel': if (e.owner === me && s) { notice('fuel', AMBER, `${s.name}: low fuel`, toShip); sfx('fuel'); } break;
      case 'repelled': if (e.owner === me) { notice('flag', HOSTILE, `Boarding of ${e.name} failed`, toShip); sfx('deny'); } else if (e.from === me) notice('flag', mineC, `${e.name} fought off boarders`, toShip); break;
      case 'boarded': if (e.owner === me) { notice('flag', mineC, e.name, toShip); sfx('captured'); } else if (e.from === me) { notice('flag', HOSTILE, e.name, toShip); sfx('lost'); } break;
      case 'eliminated': if (e.owner !== me) notice('skull', ui.colors[e.owner], game.names[e.owner], null); break;
      default:
    }
  }
}

// ---- Top bar ------------------------------------------------------------------------
$('rnd').innerHTML = icon('research') + '<i class="bar"></i>';
$('sys').innerHTML = icon('system');
$('menuBtn').innerHTML = icon('menu');
function refreshUI() {
  if (!game || !inGame()) return;
  $('cr').textContent = Math.floor(game.credits[me] || 0);
  $('rate').textContent = `+${S.incomeBreakdown(game, me).total.toFixed(1)}/s`;
  const cap = S.fleetCap(game, me), n = S.warshipsOf(game, me).length, qd = S.fleetSize(game, me) - n;
  let pips = '';
  for (let i = 0; i < cap; i++) pips += `<i class="${i < n ? 'on' : i < n + qd ? 'q' : ''}"></i>`;
  setHTML($('pips'), pips);
  const tech = game.tech[me];
  const rnd = $('rnd');
  rnd.querySelector('.bar').style.width = tech.project ? `${(1 - tech.project.left / tech.project.total) * 100}%` : '0';
  rnd.classList.toggle('idle', !tech.project && TECH_KEYS.some((l) => tech[l] < TECH[l].tiers.length && TECH[l].tiers[tech[l]].some((o) => !S.cantResearch(game, me, l, o.key))));
  $('warp').textContent = `${warp}×`;
  $('warp').hidden = mode !== 'solo';
  $('pause').innerHTML = icon(paused ? 'play' : 'pause');
  $('pause').hidden = mode === 'guest';
  for (const b of game.bodies) {
    if (b.owner === me && b.yt > 1 && !b.warnedYield) { b.warnedYield = true; notice('captured', HOSTILE, `${b.name} under siege`, () => view.focus(game, b.id, false)); sfx('alarm'); }
    else if (b.yt <= 0) b.warnedYield = false;
  }
  let sh = stripHTML();
  // The bar: always there, so the panel does not jump. It says what the picked button does, with OK and cancel when it needs them.
  if (sh) {
    const ask = ui.armed && ui.armedLabel;
    sh += `<div class="bar"><span class="bt">${esc(ui.armed ? ui.armedText : barText())}</span>${ask ? `<button class="bx" data-a="disarm">${icon('close')}</button><button class="bok" data-a="confirm">${esc(ui.armedLabel)}</button>` : ''}</div>`;
  }
  $('strip').hidden = !sh || !$('sheet').hidden;
  setHTML($('strip'), sh);
  if (!$('sheet').hidden) setHTML($('sheet'), sheetHTML());
  if (scn) setHTML($('brief'), briefHTML());
}
$('brief').onclick = () => { ui.briefShut = !ui.briefShut; refreshUI(); };
$('purse').onclick = () => { const open = !$('sheet').hidden && ui.sheet === 'income'; ui.sheet = 'income'; $('sheet').hidden = open; sfx(open ? 'close' : 'open'); refreshUI(); };
$('rnd').onclick = () => { const open = !$('sheet').hidden && ui.sheet !== 'income'; ui.sheet = 'research'; $('sheet').hidden = open; sfx($('sheet').hidden ? 'close' : 'open'); refreshUI(); };
$('sys').onclick = () => { view.orbit.follow = null; view.orbit.ship = null; view.orbit.target.set(0, 0, 0); view.orbit.goalDist = view.orbit.maxDist * 0.3; sfx('tap'); };
$('warp').onclick = () => { warp = warp >= 8 ? 1 : warp * 2; sfx('tap'); refreshUI(); };
$('pause').onclick = () => { if (mode === 'guest') return; paused = !paused; if (mode === 'host') room.broadcast({ t: 'paused', paused }); sfx('tap'); refreshUI(); };
$('menuBtn').onclick = () => pauseMenu();

// ---- Scenario briefing ------------------------------------------------------------------
function briefHTML() {
  const st = scn.state(game, me);
  return `<b>${esc(scn.name)}${st.clock != null ? `<span class="t">${mmss(Math.max(0, st.clock))}</span>` : ''}</b>${ui.briefShut ? '' : esc(st.text)}`;
}

// ---- Menus --------------------------------------------------------------------------------
const panel = $('panel');
function showPanel(html) { panel.innerHTML = html; panel.hidden = false; panel.scrollTop = 0; panel.dataset.screen = ''; $('title').hidden = true; }
function hidePanel() { panel.hidden = true; $('title').hidden = mode !== 'demo'; }
const head = (t, back = 'title') => `<div class="ph"><button class="sq" data-a="${back}">${icon('back')}</button><h2>${t}</h2></div>`;
const factionOpts = (cur) => `<div class="opts">${FACTION_KEYS.map((k) => `<button class="opt ${k === cur ? 'on' : ''}" data-a="faction" data-v="${k}" style="--c:${FACTION_COLORS[k]}"><i class="sw"></i><div><b>${FACTIONS[k].name}</b><span>${FACTIONS[k].text}</span></div><span class="mark">${icon('check')}</span></button>`).join('')}</div>`;
const seg = (a, list, cur, lab = (x) => x) => `<div class="seg">${list.map((x) => `<button class="${String(x) === String(cur) ? 'on' : ''}" data-a="${a}" data-v="${x}">${lab(x)}</button>`).join('')}</div>`;

function titleNav() {
  const day = S.dailySeed().key.slice(5);
  $('nav').innerHTML = `<button data-a="setup">Engage</button><button data-a="scenarios">Scenarios</button><button data-a="daily">Daily<small>${day}</small></button><button data-a="mp">Multiplayer</button><button data-a="manual">Manual</button>`;
  $('fine').innerHTML = `<button data-a="sound">Sound ${prefs.sound ? 'on' : 'off'}</button><button data-a="text">Text ${prefs.ui === 1 ? 'standard' : prefs.ui > 1 ? 'large' : 'small'}</button><button data-a="gfx">Graphics ${prefs.gfx}</button>`;
}
function setupPanel(daily = false) {
  showPanel(`${head(daily ? 'Daily system' : 'Engage')}<p class="lbl">Side</p>${factionOpts(prefs.faction)}`
    + `<p class="lbl">Rivals</p>${seg('rivals', [1, 2], prefs.rivals)}<p class="lbl">AI</p>${seg('level', LEVEL_KEYS, prefs.level, (k) => LEVELS[k].name)}`
    + `<button class="cta" data-a="${daily ? 'launchDaily' : 'launch'}">Launch</button>`);
  panel.dataset.screen = daily ? 'daily' : 'setup';
}
function launch(seed, daily = false) {
  const others = FACTION_KEYS.filter((k) => k !== prefs.faction);
  const r = S.rng(seed);
  if (r() < 0.5) others.reverse();
  const players = [{ faction: prefs.faction, name: prefs.name || 'You' }];
  for (let i = 0; i < prefs.rivals; i++) players.push({ faction: others[i], ai: prefs.level });
  start(S.createGame({ seed, players }), { players, mode: 'solo' });
  game.daily = daily ? S.dailySeed().key : null;
}
function scenariosPanel() {
  showPanel(`${head('Scenarios')}<div class="opts">${SCENARIO_KEYS.map((k) => `<button class="opt" data-a="scenario" data-v="${k}"><i class="sw" style="background:${prefs.done[k] ? AMBER : 'var(--dim)'}"></i><div><b>${SCENARIOS[k].name}</b><span>${SCENARIOS[k].text}</span></div><span class="mark" style="visibility:${prefs.done[k] ? 'visible' : 'hidden'}">${icon('check')}</span></button>`).join('')}</div>`);
}
function startScenario(k) {
  const sc = SCENARIOS[k];
  const made = sc.make();
  start(made.game, { players: made.players, mode: 'solo', scn: { key: k, name: sc.name, state: sc.state }, look: made.look, me: 0 });
}
function manualPanel() {
  const k = (ic, t) => `<div class="k">${icon(ic)}<div>${t}</div></div>`;
  showPanel(`${head('Manual')}<div class="prose">
    <p>Take the enemy <b>capital</b> (double ring) to win. Put ships in its orbit and keep them there.</p>
    ${k('contact', 'Tap a ship to select it. Then tap a world to go there, or tap another ship to attack or join it.')}
    ${k('add', 'On a phone, the first tap on a button says what it does. The second tap does it.')}
    ${k('fuel', 'Flying uses fuel (amber bar). Ships refuel at your worlds. A ship with no fuel drifts; send a tender to it.')}
    ${k('match', 'Ships sent together stay in <b>formation</b>. Escorts protect the ships next to them from torpedoes.')}
    ${k('strike', 'The faster two ships close, the more damage shots do.')}
    ${k('dark', 'A ship is easy to see while its drive burns and hard to see when it coasts. Planets block the view.')}
    ${k('bolt', 'Hits can knock out a ship\'s drive, reactor, weapons or sensors. They come back after a while.')}
    ${k('battery', 'A world yields when its battery is down and only your ships are in its orbit.')}
    ${k('freight', 'Worlds send their income home by freighter. Freighters can be destroyed or boarded. A ship in orbit blocks a world\'s income.')}
    ${k('habitat', 'Each habitat level lets you have one more ship.')}
    ${k('star', 'A gold diamond marks a world with a bonus. Tap the gold button on the world to read it.')}
    ${k('research', 'Some research steps are a choice of two. You can only have one.')}
    ${k('agent', 'Agents (Intelligence research) show you a world. Later they can sabotage, steal or buy an independent world.')}
    <p>Mouse: drag to move, right-drag to turn, wheel to zoom. Keys: WASD move, Q/E turn, Space pause, 1 to 4 speed, H system, R research, Esc back.</p></div>`);
}
function endPanel(won, why) {
  ended = true;
  $('strip').hidden = true; $('sheet').hidden = true; $('hud').hidden = true; $('brief').hidden = true;
  sfx(won ? 'won' : 'defeat');
  const N = game.players, cols = Array.from({ length: N }, (_, o) => o);
  const row = (label, k) => `<span>${label}</span>${cols.map((o) => `<b style="color:${ui.colors[o]}">${Math.round(game.stats[o][k] || 0)}</b>`).join('')}`;
  // One small line chart per measure, a line for each side.
  const chart = (label, k) => {
    const ser = game.series || [];
    if (ser.length < 2) return '';
    const top = Math.max(1, ...ser.map((p) => Math.max(...p[k]))), t1 = ser[ser.length - 1].t || 1;
    const line = (o) => `<polyline fill="none" stroke="${ui.colors[o]}" stroke-width="1.5" vector-effect="non-scaling-stroke" points="${ser.map((p) => `${((p.t / t1) * 100).toFixed(1)},${(40 - (p[k][o] / top) * 38).toFixed(1)}`).join(' ')}"/>`;
    return `<div class="chart"><span>${label}</span><svg viewBox="0 0 100 41" preserveAspectRatio="none">${cols.map(line).join('')}</svg></div>`;
  };
  showPanel(`<div class="mast"><h1 style="font-size:2rem;color:${won ? AMBER : HOSTILE}">${won ? 'Victory' : 'Defeat'}</h1><p class="tag">${[why || (game.daily ? `Daily ${game.daily}` : ''), mmss(game.time)].filter(Boolean).map(esc).join(' · ')}</p></div>`
    + `<div class="tally" style="grid-template-columns:1fr ${'auto '.repeat(N)}"><span></span>${cols.map((o) => `<b style="color:${ui.colors[o]}">${esc(game.names[o])}</b>`).join('')}${row('Ships built', 'built')}${row('Ships lost', 'lost')}${row('Ships destroyed', 'killed')}${row('Worlds taken', 'captured')}${row('Worlds lost', 'worldsLost')}${row('Freighters home', 'hauled')}${row('Freighters raided', 'raided')}</div>`
    + chart('Fleet strength', 'pow') + chart('Worlds', 'worlds') + chart('Income', 'inc')
    + `<button class="cta" data-a="again">Again</button><button class="cta ghost" data-a="quit">Title</button>`);
  if (scn && won) { prefs.done[scn.key] = true; save(); }
}
function pauseMenu() {
  if (!live()) return;
  if (mode === 'solo') paused = true;
  showPanel(`<div class="ph"><h2>Paused</h2></div><button class="cta" data-a="resume">Resume</button><button class="cta ghost" data-a="sound">Sound ${prefs.sound ? 'on' : 'off'}</button><button class="cta ghost" data-a="manual2">Manual</button><button class="cta ghost" data-a="quit">${mode === 'solo' ? 'Abandon' : 'Leave'}</button>`);
  panel.dataset.screen = 'pause';
  refreshUI();
}

// ---- Multiplayer -------------------------------------------------------------------------
let lobby = null;
function mpPanel(msg = '') {
  showPanel(`${head('Multiplayer')}<p class="lbl">Name</p><input id="mpname" maxlength="16" value="${esc(prefs.name)}" placeholder="Your name" autocomplete="off" />`
    + `<p class="lbl">Side</p>${factionOpts(prefs.faction)}<button class="cta" data-a="host">Host a game</button>`
    + `<p class="lbl">Join with a code</p><input id="mpcode" maxlength="5" placeholder="Code" autocomplete="off" autocapitalize="characters" /><button class="cta ghost" data-a="join">Join</button><p class="hint">${esc(msg)}</p>`);
  panel.dataset.screen = 'mp';
}
function lobbyPanel() {
  if (!lobby) return;
  const host = mode === 'hostLobby';
  showPanel(`${head('Lobby', 'leaveLobby')}<p class="lbl">Room code</p><div class="code">${lobby.code || '·····'}</div><div class="opts">`
    + lobby.seats.map((s, i) => `<div class="opt" style="--c:${FACTION_COLORS[s.faction] || '#888'}"><i class="sw"></i><div><b>${esc(s.name)}${i === lobby.you ? ' (you)' : ''}</b><span>${FACTIONS[s.faction]?.name || ''}${s.online ? '' : ' · away'}</span></div>${host && i > 0 ? `<button class="mark" style="visibility:visible" data-a="kick" data-v="${i}">${icon('close')}</button>` : ''}</div>`).join('')
    + `</div>${host ? `<p class="lbl">Add an AI</p>${seg('lobbyLevel', LEVEL_KEYS, prefs.level, (k) => LEVELS[k].name)}<button class="cta ghost" data-a="addAI">Add AI</button><button class="cta" data-a="startMP">Start</button>` : '<p class="hint">Waiting for the host to start</p>'}`);
}
function hostGame() {
  prefs.name = cleanName($('mpname').value); save();
  lobby = { code: '', seats: [], you: 0 };
  mode = 'hostLobby';
  room = hostRoom(prefs.name, {
    open: (code) => { lobby.code = code; lobbyPanel(); },
    seats: (seats) => { lobby.seats = seats; if (mode === 'hostLobby') lobbyPanel(); },
    cmd: (i, cmd) => { if (mode === 'host' && !paused) apply(i, cmd); },
    error: (t) => { closeRoom(); mpPanel(t); },
    left: () => {},
    rejoin: (i) => room.sendTo(i, { t: 'start', seed: game.seed, players: game.mpPlayers, you: i }),
  }, prefs.faction);
  lobbyPanel();
}
function joinGame() {
  prefs.name = cleanName($('mpname').value); save();
  const code = $('mpcode').value.trim().toUpperCase();
  if (code.length !== 5) { mpPanel('Enter the five-letter code'); return; }
  lobby = { code, seats: [], you: 0 };
  mode = 'guestLobby';
  room = joinRoom(code, prefs.name, token, {
    message: (m) => {
      if (m.t === 'lobby') { lobby.seats = m.seats; lobby.you = m.you; lobby.code = m.code; if (mode === 'guestLobby') lobbyPanel(); }
      else if (m.t === 'full' || m.t === 'kicked') { closeRoom(); mpPanel(m.why || 'Removed from the room'); }
      else if (m.t === 'start') { start(S.createGame({ seed: m.seed, players: m.players, mp: true }), { players: m.players, mode: 'guest', me: m.you }); }
      else if (m.t === 'snap' && mode === 'guest') { S.applySnapshot(game, m.s, me); game.acc = 0; if (m.fx) ui.pendingFx = (ui.pendingFx || []).concat(m.fx); }
      else if (m.t === 'paused') paused = m.paused;
    },
    error: (t) => { closeRoom(); mpPanel(t); },
    closed: () => { if (mode === 'guest' && !ended) { closeRoom(); demo(); mpPanel('The host left the game'); } },
  }, prefs.faction);
  lobbyPanel();
}
function startMP() {
  const players = room.seats.map((s) => ({ faction: s.faction, name: s.name, ai: s.kind === 'ai' ? s.difficulty : null }));
  if (players.length < 2) return;
  room.start();
  const seed = (Math.random() * 1e9) | 0;
  const g = S.createGame({ seed, players, mp: true });
  g.mpPlayers = players;
  room.seats.forEach((s, i) => { if (s.kind === 'human' && i > 0) room.sendTo(i, { t: 'start', seed, players, you: i }); });
  start(g, { players, mode: 'host', me: 0 });
}
function closeRoom() { if (room) { try { room.close(); } catch { /* gone */ } room = null; } lobby = null; }

function clickPanel(a, v) {
  switch (a) {
    case 'title': hidePanel(); break;
    case 'setup': setupPanel(); break;
    case 'daily': setupPanel(true); break;
    case 'faction': prefs.faction = v; save(); if (panel.dataset.screen === 'mp') { const n = $('mpname').value, c = $('mpcode').value; prefs.name = cleanName(n); mpPanel(); $('mpcode').value = c; } else setupPanel(panel.dataset.screen === 'daily'); break;
    case 'rivals': prefs.rivals = +v; save(); setupPanel(panel.dataset.screen === 'daily'); break;
    case 'level': prefs.level = v; save(); setupPanel(panel.dataset.screen === 'daily'); break;
    case 'launch': launch((Math.random() * 1e9) | 0); break;
    case 'launchDaily': launch(S.dailySeed().seed, true); break;
    case 'scenarios': scenariosPanel(); break;
    case 'scenario': startScenario(v); break;
    case 'manual': manualPanel(); break;
    case 'manual2': manualPanel(); panel.querySelector('[data-a="title"]').dataset.a = 'pauseBack'; break;
    case 'pauseBack': pauseMenu(); break;
    case 'mp': mpPanel(); break;
    case 'host': hostGame(); break;
    case 'join': joinGame(); break;
    case 'lobbyLevel': prefs.level = v; save(); lobbyPanel(); break;
    case 'addAI': { const taken = room.seats.map((s) => s.faction); room.addAI(prefs.level, FACTION_KEYS.find((k) => !taken.includes(k)) || 'boreal'); break; }
    case 'kick': room.remove(+v); break;
    case 'startMP': startMP(); break;
    case 'leaveLobby': closeRoom(); mode = 'demo'; mpPanel(); break;
    case 'titleMP': closeRoom(); mode = 'demo'; hidePanel(); break;
    case 'resume': paused = false; hidePanel(); break;
    case 'again': if (scn) startScenario(scn.key); else if (mode === 'solo') launch(game.daily ? S.dailySeed().seed : (Math.random() * 1e9) | 0, !!game.daily); else { closeRoom(); demo(); } break;
    case 'quit': closeRoom(); hidePanel(); demo(); break;
    case 'sound': prefs.sound = !prefs.sound; save(); audio.setEnabled(prefs.sound); titleNav(); if (panel.dataset.screen === 'pause' && !panel.hidden) pauseMenu(); break;
    case 'text': prefs.ui = prefs.ui === 1 ? 1.15 : prefs.ui > 1 ? 0.9 : 1; save(); document.documentElement.style.setProperty('--ui-mult', prefs.ui); titleNav(); break;
    case 'gfx': prefs.gfx = prefs.gfx === 'auto' ? 'high' : prefs.gfx === 'high' ? 'low' : 'auto'; save(); view.setQuality(gfx()); titleNav(); break;
    default:
  }
  sfx('tap');
}
delegate(panel, clickPanel);
delegate($('title'), clickPanel);

// ---- Input: one finger turns, two pan and pinch, a tap selects and locks on, double-tap flies in ----
// (The same handling as the first Perihelion.)
const canvas = $('scene');
const pointers = new Map();
let gesture = null;
let lastTap = { t: 0, key: null };
canvas.addEventListener('contextmenu', (e) => e.preventDefault());
const plotBurn = () => {
  const s = S.shipById(game, ui.plot.ship);
  const w = view.worldAt(ui.plot.x, ui.plot.y);
  const a = s && view.screenOfShip(s.id);
  if (!s || !w || !a) return null;
  const px = Math.hypot(ui.plot.x - a.x, ui.plot.y - a.y);
  if (px < 14) return null;
  const dx = w.x - s.x, dz = w.z - s.z, l = Math.hypot(dx, dz) || 1;
  return { type: 'burn', x: dx / l, y: 0, z: dz / l, left: Math.min(60, px / 4) };
};
let lastPreview = 0;
function plotPreview() {
  const now = performance.now();
  if (now - lastPreview < 120) return;
  lastPreview = now;
  const o = plotBurn();
  const s = S.shipById(game, ui.plot.ship);
  ui.plot.path = o && s ? S.dryRun(game, s, o, { coast: 600, maxT: 700, h: 2, every: 3 }).path : null;
}
const startPlot = (e) => {
  if (!ui.plotMode || !selShips().length) return false;
  ui.plot = { ship: selShips()[0].id, x: e.clientX, y: e.clientY, path: null };
  gesture = { kind: 'plot', mouse: e.pointerType === 'mouse' };
  return true;
};
const endPlot = (cancel) => {
  const o = !cancel && plotBurn();
  if (o) { act({ t: 'order', ids: selShips().map((s) => s.id), order: o }); sfx('confirm'); ui.plotMode = false; }
  ui.plot = null; gesture = null; ui.dragging = false;
  refreshUI();
};
const doTap = (x, y) => {
  const hit = view.pick(x, y);
  const key = hit ? JSON.stringify(hit) : null;
  const now = performance.now();
  const dbl = key !== null && lastTap.key === key && now - lastTap.t < 350;
  lastTap = dbl ? { t: 0, key: null } : { t: now, key };
  tap(x, y, dbl);
  refreshUI();
};
canvas.addEventListener('pointerdown', (e) => {
  if (!game) return;
  e.preventDefault();
  try { canvas.setPointerCapture(e.pointerId); } catch { /* ignore */ }
  view.orbit.vaz = view.orbit.vpol = 0;
  if (e.pointerType === 'mouse') {
    if (e.button === 0 && startPlot(e)) return;
    // Mouse: left drags pan, right or middle drags turn the view around whatever is under the cursor.
    const turn = e.button === 2 || e.button === 1 || e.altKey;
    gesture = { kind: turn ? 'turn' : 'click', mouse: true, x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY,
      pivot: turn && !view.following() ? view.pivotAt(e.clientX, e.clientY) : null };
    ui.dragging = true;
    return;
  }
  // The first finger down starts afresh: a finger whose lift was never reported would
  // otherwise linger and turn every one-finger drag into a pinch.
  if (e.isPrimary) pointers.clear();
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pointers.size === 1) { if (!startPlot(e)) gesture = { kind: 'tap', x0: e.clientX, y0: e.clientY }; }
  else if (pointers.size === 2) {
    const [a, b] = [...pointers.values()];
    ui.plot = null;
    gesture = { kind: 'pinch', d: Math.hypot(a.x - b.x, a.y - b.y), mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2, mx0: (a.x + b.x) / 2, my0: (a.y + b.y) / 2 };
  }
  ui.dragging = true;
});
canvas.addEventListener('pointermove', (e) => {
  if (gesture?.kind === 'plot') { ui.plot.x = e.clientX; ui.plot.y = e.clientY; plotPreview(); const p = pointers.get(e.pointerId); if (p) { p.x = e.clientX; p.y = e.clientY; } return; }
  if (gesture?.mouse) {
    const dx = e.clientX - gesture.x, dy = e.clientY - gesture.y;
    gesture.x = e.clientX; gesture.y = e.clientY;
    if (gesture.kind === 'click' && Math.hypot(e.clientX - gesture.x0, e.clientY - gesture.y0) > 5) gesture.kind = 'pan';
    if (gesture.kind === 'pan') view.pan(dx, dy);
    if (gesture.kind === 'turn') {
      if (gesture.pivot) view.rotateAround(gesture.pivot, -dx * 0.006, -dy * 0.006);
      else { view.orbit.az -= dx * 0.006; view.orbit.pol -= dy * 0.006; }
    }
    return;
  }
  if (e.pointerType === 'mouse' && game) canvas.style.cursor = view.pick(e.clientX, e.clientY) ? 'pointer' : 'grab';
  const p = pointers.get(e.pointerId);
  if (!p || !gesture) return;
  const dx = e.clientX - p.x, dy = e.clientY - p.y;
  p.x = e.clientX; p.y = e.clientY;
  if (gesture.kind === 'pinch') {
    if (pointers.size < 2) return;
    const [a, b] = [...pointers.values()];
    const d = Math.hypot(a.x - b.x, a.y - b.y), mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    // Two fingers drag the map and zoom toward themselves. While locked onto a world or ship,
    // a pinch just zooms about it, until the fingers clearly drag the map away.
    if (view.following() && Math.hypot(mx - gesture.mx0, my - gesture.my0) < 40) view.zoomBy(gesture.d / Math.max(1, d));
    else { view.pan(mx - gesture.mx, my - gesture.my); view.zoomAt(mx, my, gesture.d / Math.max(1, d)); }
    gesture.d = d; gesture.mx = mx; gesture.my = my;
    return;
  }
  if (gesture.kind === 'tap' && Math.hypot(e.clientX - gesture.x0, e.clientY - gesture.y0) > 10) gesture.kind = 'orbit';
  if (gesture.kind === 'orbit') {
    const k = 4 / window.innerHeight;
    view.orbit.az -= dx * k; view.orbit.pol -= dy * k;
    view.orbit.vaz = -dx * k; view.orbit.vpol = -dy * k;
  }
});
function endPointer(e) {
  if (gesture?.kind === 'plot') { pointers.delete(e.pointerId); endPlot(e.type === 'pointercancel'); return; }
  if (gesture?.mouse) {
    const g = gesture;
    gesture = null; ui.dragging = false;
    if (g.kind === 'click' && e.type !== 'pointercancel') doTap(e.clientX, e.clientY);
    return;
  }
  if (!pointers.delete(e.pointerId)) return;
  if (gesture?.kind === 'tap' && pointers.size === 0 && e.type !== 'pointercancel') doTap(e.clientX, e.clientY);
  if (pointers.size === 0) { gesture = null; ui.dragging = false; } else gesture = { kind: 'orbit' };
}
canvas.addEventListener('pointerup', endPointer);
canvas.addEventListener('pointercancel', (e) => { endPointer(e); gesture = null; ui.dragging = false; });
// Lifts the canvas doesn't hear about (released over a panel, capture lost) still end that finger.
const dropPointer = (e) => {
  if (!pointers.delete(e.pointerId)) return;
  if (gesture?.kind === 'plot') { endPlot(true); return; }
  if (pointers.size === 0) { gesture = null; ui.dragging = false; } else gesture = { kind: 'orbit' };
};
window.addEventListener('pointerup', dropPointer);
window.addEventListener('pointercancel', dropPointer);
canvas.addEventListener('lostpointercapture', dropPointer);
const resetPointers = () => { pointers.clear(); gesture = null; ui.dragging = false; ui.plot = null; pressed = null; };
window.addEventListener('blur', resetPointers);
document.addEventListener('visibilitychange', resetPointers);
canvas.addEventListener('wheel', (e) => {
  e.preventDefault();
  const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1);
  view.zoomToward(e.clientX, e.clientY, Math.exp(Math.max(-0.5, Math.min(0.5, dy * (e.ctrlKey ? 0.01 : 0.0015)))));
}, { passive: false });
const keys = new Set();
window.addEventListener('keyup', (e) => keys.delete(e.key.toLowerCase()));
window.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT') return;
  if (e.key === 'Escape') { if (!$('sheet').hidden) $('sheet').hidden = true; else if (!panel.hidden && panel.dataset.screen === 'pause') { paused = false; hidePanel(); } else if (ui.sel.size || ui.selBody != null || ui.targetShip != null) { clearSel(); ui.selBody = null; } else pauseMenu(); refreshUI(); return; }
  if (!live()) return;
  const k = e.key.toLowerCase();
  if ('wasdqe'.includes(k) || k.startsWith('arrow') || k === '+' || k === '=' || k === '-') { keys.add(k); e.preventDefault(); return; }
  if (e.key === ' ') { e.preventDefault(); $('pause').click(); }
  else if (e.key >= '1' && e.key <= '4' && mode === 'solo') { warp = 2 ** (+e.key - 1); refreshUI(); }
  else if (k === 'h') $('sys').click();
  else if (k === 'r') $('rnd').click();
  else if (k === 'f') { const s = selShips()[0]; if (s) view.followShip(s.id, true); else if (ui.selBody != null) view.focus(game, ui.selBody, true); }
});
function keyNav(dt) {
  if (!keys.size) return;
  const has = (...ks) => ks.some((k) => keys.has(k));
  const sp = 600 * dt;
  if (has('a', 'arrowleft')) view.pan(sp, 0);
  if (has('d', 'arrowright')) view.pan(-sp, 0);
  if (has('w', 'arrowup')) view.pan(0, sp);
  if (has('s', 'arrowdown')) view.pan(0, -sp);
  if (has('q')) view.orbit.az += dt * 1.2;
  if (has('e')) view.orbit.az -= dt * 1.2;
  if (has('+', '=')) view.zoomBy(Math.exp(-dt * 1.5));
  if (has('-')) view.zoomBy(Math.exp(dt * 1.5));
}

// ---- The loop ---------------------------------------------------------------------------------
let last = performance.now(), uiT = 0, pathT = 0, routeT = 0, audioT = 0;
function frame(nowMs) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.1, (nowMs - last) / 1000);
  last = nowMs;
  const t = nowMs / 1000;
  if (!game) return;
  keyNav(dt);
  const hold = paused || ended || (!panel.hidden && mode === 'solo' && panel.dataset.screen === 'pause');
  let gdt = 0;
  if (mode === 'guest') { if (!paused) game.acc = Math.min(0.6, (game.acc || 0) + dt); }
  else if (!hold) {
    gdt = dt * (mode === 'solo' || mode === 'demo' ? warp : 1);
    if (!game.over) { S.step(game, gdt); for (const a of ais) stepAI(game, a, gdt); }
  }
  ui.fx = game.fx.splice(0);
  if (ui.pendingFx) { ui.fx = ui.fx.concat(ui.pendingFx); ui.pendingFx = null; }
  if (mode === 'host') {
    netFx.push(...ui.fx);
    if (nowMs - lastSnap > 250) {
      lastSnap = nowMs;
      room.seats.forEach((s, i) => { if (i > 0 && s.kind === 'human' && s.online) room.sendTo(i, { t: 'snap', s: S.snapshot(game, i), fx: netFx.slice(0, 120) }); });
      netFx = [];
    }
  }
  if (!inGame()) view.orbit.az += dt * 0.015;
  ui.warp = warp;
  const rep = view.render(game, ui, gdt, t);
  drainEvents();
  if (live()) {
    if (nowMs - pathT > 900) {
      pathT = nowMs;
      ui.paths = new Map();
      for (const s of selShips().slice(0, 6)) if (s.order && s.order.type !== 'form' && s.at === null) ui.paths.set(s.id, S.dryRun(game, s, s.order, { maxT: 2400, h: 2, every: 3, coast: s.order.type === 'burn' ? 600 : 0 }).path);
      for (const s of selShips().slice(0, 6)) if (!s.order && s.at === null) ui.paths.set(s.id, S.dryRun(game, s, { type: 'burn', x: 1, y: 0, z: 0, left: 0 }, { maxT: 700, h: 3, every: 2, coast: 660 }).path);
    }
    if (ui.target != null && nowMs - routeT > 3000) { routeT = nowMs; refreshRoutes(); }
    if (scn) { const st = scn.state(game, me); if (st.done) endPanel(st.done === 'win', st.why); }
    if (!ended && game.over) endPanel(game.over.winner === me, '');
    else if (!ended && !game.alive[me]) endPanel(false, '');
  }
  if (nowMs - uiT > 220) { uiT = nowMs; refreshUI(); }
  if (nowMs - audioT > 120) { audioT = nowMs; audio.update({ burn: inGame() ? rep.burn : 0, battle: inGame() ? rep.battle : rep.battle * 0.4, zoom: rep.zoom, paused: hold }); }
}
titleNav();
demo();
requestAnimationFrame(frame);
