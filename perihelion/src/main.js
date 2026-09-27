import { createGame, step, launch, plan, fleetState, rng, PLAYER, NEUTRAL, RULES, slotsOf, cantBuild, buildStructure, cantOrderShip, orderShip, income, upgrade, cantUpgrade, upgradeCost, upgradeTime, coverOf, TECH, nextTech, research, cantResearch, researchSpeed, visibility, demolish, cantDemolish, demolishFee, cancelShip, yardsOf, vetLevel, incomeOf } from './sim.js';
import { createAI, tickAI } from './ai.js';
import { createView, ownerColor } from './render.js';
import { hostRoom, joinRoom, MAX_SEATS } from './net.js';

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
// Which empire this screen plays (0 in solo; your seat in multiplayer).
let me = 0;
// Multiplayer: null (solo), { role: 'host', room } or { role: 'client', room }.
let net = null;
let paused = false; // multiplayer pause, set by the host
const WARPS = [1, 2, 4, 8];
let warp = 1;

const ui = { selected: null, target: null, fleet: null, count: 1, preview: null, dragging: false, vis: null, slot: null, mode: null };

const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

// ---- Orders ----------------------------------------------------------------
// Every order goes through here: applied directly in solo or on the host,
// sent to the host from a guest (it shows up with the next state update).

function applyCmd(owner, c) {
  const b = game.bodies[c.b];
  if (c.type !== 'research' && (!b || b.owner !== owner)) return false;
  switch (c.type) {
    case 'launch': return !!launch(game, b, game.bodies[c.to], c.n);
    case 'ship': return orderShip(game, b);
    case 'cancel': return cancelShip(game, b);
    case 'build': return buildStructure(game, b, c.k);
    case 'upgrade': return !!b.structures[c.i] && upgrade(game, b, b.structures[c.i]);
    case 'demolish': return !!b.structures[c.i] && demolish(game, b, b.structures[c.i]);
    case 'research': return research(game, owner, c.k);
    default: return false;
  }
}
function act(c) {
  if (net?.role === 'client') { net.room.send({ t: 'cmd', cmd: c }); return true; }
  return applyCmd(me, c);
}

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

/**
 * Start a game. Solo: you against AIs. Multiplayer: everyone builds the same
 * map from the seed; the host runs it and guests mirror the host's state.
 */
let aiSeatDiffs = [];
function startGame({ seed = (Math.random() * 2 ** 31) | 0, players = prefs.rivals + 1, seat = 0, names = null, aiSeats = null, aiDiffs = null, mp = false } = {}) {
  game = createGame({ seed, opponents: players - 1, mp });
  if (names) game.names = names;
  me = seat;
  const r = rng(seed ^ 0xabc);
  // AIs run only where the game runs: solo, or on the host.
  aiSeatDiffs = aiDiffs || (aiSeats ? aiSeats.map(([, d]) => d) : mp ? [] : Array(players - 1).fill(prefs.difficulty));
  ais = net?.role === 'client' ? []
    : aiSeats ? aiSeats.map(([i, d]) => createAI(i, d, r))
      : Array.from({ length: players - 1 }, (_, i) => createAI(i + 1, prefs.difficulty, r));
  ui.selected = ui.target = ui.preview = ui.fleet = ui.mode = null;
  ui.slot = null;
  ui.me = me;
  paused = false;
  knockedOut = false;
  game.events.length = 0;
  $('feed').innerHTML = '';
  $('research').hidden = true;
  view.build(game);
  ui.vis = visibility(game, me);
  // Open on the homeworld, far enough out to see its moons and neighbours.
  const home = game.bodies.find((b) => b.owner === me);
  view.focus(game, home.id, false);
  view.orbit.target.set(0, 0, 0);
  view.orbit.dist = home.size * 12 + 40;
  view.orbit.pol = 0.9;
  for (const id of ['menu', 'end', 'lobby']) $(id).hidden = true;
  $('hud').hidden = false;
  // No time warp in multiplayer; only the host can pause.
  $('warp').hidden = !!net;
  $('pause').hidden = net?.role === 'client';
  warp = 1;
  $('warp').textContent = '1×';
  running = true;
  updateActions();
}
function start() { leaveNet(); startGame(); }
$('play').addEventListener('click', start);
$('again').addEventListener('click', () => {
  leaveNet();
  $('end').hidden = true;
  $('menu').hidden = false;
  $('resume').hidden = true;
  $('play').textContent = 'Play vs AI';
});
$('pause').addEventListener('click', pause);
$('resume').addEventListener('click', () => { $('menu').hidden = true; running = true; });
function pause() {
  if (!game || game.winner !== null || !running) return;
  if (net) {
    // Multiplayer: the host pauses (and resumes) for everyone.
    paused = !paused;
    $('pause').textContent = paused ? '▶' : '❚❚';
    net.room.broadcast({ t: 'pause', paused });
    showPaused();
    return;
  }
  running = false;
  $('menu').hidden = false;
  $('resume').hidden = false;
  $('play').textContent = 'New game';
}
function showPaused() {
  $('banner').hidden = !paused;
  $('banner').textContent = me === 0 ? 'Paused · tap ▶ to resume' : 'Paused by host';
}

// ---- Multiplayer ------------------------------------------------------------

$('keys').textContent = matchMedia('(pointer: fine)').matches
  ? 'Mouse: click to select · drag to pan · right-drag to rotate · scroll to zoom · double-click to fly to a world. Keys: WASD pan · Q/E rotate · +/− zoom · F focus · H whole system · Esc back.'
  : 'Drag to rotate · two fingers to pan and zoom · double-tap to fly to a world.';
$('name').value = prefs.name || '';
$('name').addEventListener('input', () => { prefs.name = $('name').value.trim(); savePrefs(); });
const myName = () => ($('name').value.trim() || 'Player').slice(0, 16);
const menuMsg = (t) => { $('menu-msg').textContent = t || ''; };
let lobbySeats = [];

function leaveNet() {
  if (net) net.room.close();
  net = null;
  paused = false;
  $('banner').hidden = true;
  $('pause').textContent = '❚❚';
}

function renderLobby(seats, code) {
  lobbySeats = seats;
  $('lobby-code').textContent = code || '·····';
  const host = net?.role === 'host';
  const rows = seats.map((s, i) => `<div class="seat"><i style="background:${ownerColor(i)}"></i><span>${s.name}${i === me ? ' (you)' : ''}</span>`
    + `<small>${s.kind === 'ai' ? 'AI' : i === 0 ? 'host' : s.online === false ? 'offline' : 'ready'}</small>`
    + `${host && i > 0 ? `<button data-kick="${i}">✕</button>` : ''}</div>`);
  for (let i = seats.length; i < MAX_SEATS; i++) rows.push('<div class="seat empty"><span>Open seat</span></div>');
  $('seats').innerHTML = rows.join('');
  $('lobby-ai').hidden = !host || seats.length >= MAX_SEATS;
  $('lobby-start').hidden = !host;
  $('lobby-start').disabled = seats.length < 2;
  $('lobby-hint').textContent = host ? (seats.length < 2 ? 'Share the code, or add an AI. Up to 3 empires.' : 'Ready when you are.') : 'Waiting for the host to start…';
}
let aiDiff = 'normal';
$('ai-diff').addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  aiDiff = b.dataset.v;
  $('ai-diff').querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b));
});
$('add-ai').addEventListener('click', () => net?.role === 'host' && net.room.addAI(aiDiff));
$('seats').addEventListener('click', (e) => {
  const b = e.target.closest('button[data-kick]');
  if (b && net?.role === 'host') net.room.remove(Number(b.dataset.kick));
});
$('lobby-leave').addEventListener('click', () => { leaveNet(); $('lobby').hidden = true; $('menu').hidden = false; });

$('host').addEventListener('click', () => {
  leaveNet();
  menuMsg('Opening a room…');
  me = 0;
  const room = hostRoom(myName(), {
    open: (code) => { menuMsg(''); $('menu').hidden = true; $('lobby').hidden = false; renderLobby(room.seats, code); },
    seats: (seats) => renderLobby(seats, room.code),
    error: (t) => { menuMsg(t); if (!room.started) { leaveNet(); $('lobby').hidden = true; $('menu').hidden = false; } },
    cmd: (seat, c) => { if (game && running) applyCmd(seat, c); },
    left: (seat) => toast(`${game.names[seat]} disconnected`, ownerColor(seat)),
    rejoin: (seat) => {
      room.sendTo(seat, startMsg(seat));
      toast(`${game.names[seat]} is back`, ownerColor(seat));
    },
  });
  net = { role: 'host', room };
});
function startMsg(seat) {
  return { t: 'start', seed: net.seed, players: game.players, names: game.names, seat, paused, aiDiffs: aiSeatDiffs };
}
$('lobby-start').addEventListener('click', () => {
  if (net?.role !== 'host' || lobbySeats.length < 2) return;
  const room = net.room;
  room.start();
  net.seed = (Math.random() * 2 ** 31) | 0;
  const names = room.seats.map((s) => s.name);
  const aiSeats = room.seats.map((s, i) => [i, s]).filter(([, s]) => s.kind === 'ai').map(([i, s]) => [i, s.difficulty]);
  startGame({ seed: net.seed, players: room.seats.length, seat: 0, names, aiSeats, mp: true });
  room.seats.forEach((s, i) => { if (s.conn) room.sendTo(i, startMsg(i)); });
});

$('join').addEventListener('click', () => {
  const code = $('code').value.trim().toUpperCase();
  if (code.length !== 5) { menuMsg('Enter the 5-letter code'); return; }
  leaveNet();
  menuMsg('Connecting…');
  const room = joinRoom(code, myName(), {
    message: (m) => onHostMessage(m),
    error: (t) => { menuMsg(t); leaveNet(); $('lobby').hidden = true; $('menu').hidden = false; },
    closed: () => {
      if (!net) return;
      leaveNet();
      if (running) { toast('Lost connection to the host', '#ff7a4d'); running = false; setTimeout(() => { $('menu').hidden = false; }, 1500); } else { $('lobby').hidden = true; $('menu').hidden = false; menuMsg('The host closed the room'); }
    },
  });
  net = { role: 'client', room, code };
});

/** A guest: everything arrives from the host. */
function onHostMessage(m) {
  if (m.t === 'lobby') {
    me = m.you;
    menuMsg('');
    $('menu').hidden = true;
    if (!running) $('lobby').hidden = false;
    renderLobby(m.seats, m.code);
  } else if (m.t === 'full' || m.t === 'kicked') {
    menuMsg(m.t === 'kicked' ? 'The host removed you' : m.why);
    leaveNet();
    $('lobby').hidden = true;
    $('menu').hidden = false;
  } else if (m.t === 'start') {
    startGame({ seed: m.seed, players: m.players, seat: m.seat, names: m.names, aiDiffs: m.aiDiffs || [], mp: true });
    paused = m.paused;
    showPaused();
  } else if (m.t === 'state' && game && running) {
    applySnapshot(m.s);
  } else if (m.t === 'events' && game && running) {
    drainEvents(m.list);
  } else if (m.t === 'pause') {
    paused = m.paused;
    showPaused();
  }
}

// Snapshots: bodies are updated in place (the renderer holds on to them).
const BODY_KEYS = ['owner', 'ships', 'guns', 'structures', 'sieges', 'queue', 'build', 'slips', 'vet', 'tf', 'fighting', 'totDef', 'totAtk'];
function snapshot() {
  return {
    time: game.time,
    winner: game.winner,
    credits: game.credits,
    tech: game.tech,
    fleets: game.fleets,
    nextId: game.nextId,
    bodies: game.bodies.map((b) => Object.fromEntries(BODY_KEYS.map((k) => [k, b[k]]))),
    stats: game.winner !== null ? game.stats : undefined,
  };
}
function applySnapshot(s) {
  // Keep local time smooth: small differences are eased out, big ones snap.
  const d = s.time - game.time;
  game.time = paused || Math.abs(d) > 1.5 ? s.time : game.time + d * 0.5;
  game.credits = s.credits;
  game.tech = s.tech;
  game.fleets = s.fleets;
  game.nextId = s.nextId;
  s.bodies.forEach((x, i) => {
    const b = game.bodies[i];
    // Losses since the last update become explosions; a new owner flashes.
    const lostDef = (b.lostDef || 0) + Math.max(0, (x.totDef || 0) - (b.totDef || 0));
    const lostAtk = (b.lostAtk || 0) + Math.max(0, (x.totAtk || 0) - (b.totAtk || 0));
    const captured = b.captured || x.owner !== b.owner;
    Object.assign(b, x, { lostDef, lostAtk, captured });
  });
  if (s.stats) game.stats = s.stats;
  if (s.winner !== null) game.winner = s.winner;
}

$('warp').addEventListener('click', () => {
  warp = WARPS[(WARPS.indexOf(warp) + 1) % WARPS.length];
  $('warp').textContent = `${warp}×`;
});
/** Reset the camera to a view of the whole system. */
function systemView() {
  view.orbit.follow = null;
  view.orbit.target.set(0, 0, 0);
  view.orbit.vaz = view.orbit.vpol = 0;
  view.orbit.pol = 0.9;
  view.orbit.goalDist = 650;
}
$('system').addEventListener('click', systemView);

// ---- Orders ---------------------------------------------------------------

function updateFleetInfo() {
  const f = ui.fleet !== null && game ? game.fleets.find((x) => x.id === ui.fleet) : null;
  if (!f) ui.fleet = null;
  $('fleet').hidden = !f || !running || ui.selected !== null || !$('research').hidden;
  if ($('fleet').hidden) return;
  const s = fleetState(f, game.time);
  const left = f.T - (game.time - f.t0);
  const phase = s.flipping ? 'flipping' : s.phase === 1 ? 'burning toward' : 'braking for';
  const to = game.bodies[f.to];
  const speed = Math.hypot(s.vx, s.vy, s.vz);
  setHTML($('fleet'), `<b>${tf(f.name)}</b>${vetLevel(f.vet) ? ` <span class="vet">${vetName(f.vet)}</span>` : ''} · <b>${f.n}</b> ship${f.n === 1 ? '' : 's'} from ${game.bodies[f.from].name}, ${phase} <b>${to.name}</b><br>`
    + `arrive in <b>${fmt(left)}</b> · ${Math.round(s.progress * 100)}% · ${speed.toFixed(2)} u/s${f.assist !== undefined ? ` · <span class="assist">↻ ${game.bodies[f.assist].name}</span>` : ''}`);
}

function updateActions() {
  updateFleetInfo();
  const s = ui.selected !== null && game ? game.bodies[ui.selected] : null;
  const show = !!s && s.owner === me && running;
  $('actions').hidden = !show;
  if (!show) { ui.preview = null; ui.mode = null; return; }
  if (!s.ships && ui.mode) ui.mode = null;
  ui.count = s.ships ? Math.max(1, Math.min(ui.count, s.ships)) : 0;
  $('count').textContent = ui.count;
  const launching = ui.mode === 'launch';
  $('actions').classList.toggle('launching', launching);
  $('buildrow').hidden = launching;
  $('stepper').hidden = !launching;
  $('cancel').hidden = !launching;
  if (!launching) {
    ui.preview = null;
    ui.target = null;
    const kind = s.kind === 'station' ? 'Station' : s.kind[0].toUpperCase() + s.kind.slice(1);
    setHTML($('info'), `<span class="tag">${kind}</span><b>${s.name}</b><span class="grow"></span>${s.ships ? `${s.tf ? `<span class="tag">TF ${s.tf}</span>` : ''}<span class="num">${s.ships}</span><span class="tag">ship${s.ships === 1 ? '' : 's'}</span>` : '<span class="tag">no ships</span>'}`
      + `<div class="econ">${econLine(s)}</div>`);
    $('launch').textContent = 'Launch';
    $('launch').disabled = s.ships < 1;
    renderBuildRow(s);
  } else if (ui.target === null) {
    ui.preview = null;
    setHTML($('info'), `<span class="tag">Launch from</span><b>${s.name}</b><span class="grow"></span><span class="tag">tap a destination</span>`);
    $('launch').textContent = 'Confirm';
    $('launch').disabled = true;
  } else {
    const t = game.bodies[ui.target];
    ui.preview = plan(game, s, t);
    const defence = t.owner === me ? 'reinforce' : `${t.ships} ship${t.ships === 1 ? '' : 's'}, ${Math.ceil(t.guns)} gun${Math.ceil(t.guns) === 1 ? '' : 's'}`;
    const cover = t.owner === me ? 0 : coverOf(game, t);
    const seen = !ui.vis || ui.vis.bodies.has(t.id);
    const defenceText = !seen ? 'defences unknown' : cover ? `${defence}, +${cover.toFixed(1)} cover from ${game.bodies[t.parent].name}` : defence;
    const assist = ui.preview.assist !== undefined ? ` · <span class="assist">↻ assist via ${game.bodies[ui.preview.assist].name}</span>` : '';
    setHTML($('info'), `<span><b>${ui.count}</b> → <b>${t.name}</b> (${defenceText}) · arrive in <b>${fmt(ui.preview.T)}</b>${assist}</span>`);
    $('launch').textContent = 'Confirm';
    $('launch').disabled = false;
  }
}
// ---- Building ----------------------------------------------------------------

const ROMAN = ['', 'I', 'II', 'III'];
/** What a world earns: its base plus any mines, per second. */
function econLine(b) {
  const total = incomeOf(b, game);
  const base = RULES.income[b.kind];
  const mines = total - base;
  return `<span class="tag">Income</span> <b class="pos">+${total.toFixed(1)}/s</b> <span class="dim">· ${b.kind} ${base.toFixed(1)}${mines > 0.001 ? ` + mines ${mines.toFixed(1)}` : ''}</span>`;
}
/** What one level of a structure does, for the upgrade breakdown. */
function levelEffect(type, level) {
  const mining = 1 + 0.15 * game.tech[me].industry;
  if (type === 'mine') return `+${(RULES.mineIncome * level * mining).toFixed(1)}/s`;
  if (type === 'defence') return `${RULES.gunsPerDefence * level} guns`;
  if (type === 'lab') return `+${Math.round(RULES.labSpeed * level * 100)}% research`;
  return '';
}
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
      const dwhy = cantDemolish(game, s, x);
      row = `<span class="what">${def.name} · ${state}</span><button class="danger" data-d="${ui.slot}" ${dwhy ? 'disabled' : ''}>Scrap<small>${demolishFee(x)}</small></button>`;
      // Every level at a glance: what it gives and what it costs to reach.
      if (def.maxLevel) {
        const steps = [];
        for (let k = 1; k <= def.maxLevel; k++) {
          const cost = k === 1 ? def.cost : upgradeCost({ type: x.type, level: k - 1 });
          const cls = k <= x.level ? 'done' : k === x.next ? 'now' : '';
          // The next level is the upgrade button itself.
          const next = k === x.level + 1 && !x.next && (!why || why === 'not enough credits');
          const tag = next ? `button data-u="${ui.slot}" ${why ? 'disabled' : ''}` : 'span';
          const note = k <= x.level ? '✓' : k === x.next ? 'upgrading' : next ? `Upgrade · ${cost}` : cost;
          steps.push(`<${tag} class="lv ${cls}${next ? ' next' : ''}"><b>${ROMAN[k]}</b> ${levelEffect(x.type, k)}<small>${note}</small></${tag.split(' ')[0]}>`);
        }
        row += `<div class="ladder">${steps.join('')}</div>`;
      }
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
    if (act({ type: 'cancel', b: s.id })) toast('Ship build cancelled', ownerColor(me));
    updateActions();
    return;
  }
  const up = e.target.closest('button[data-u]');
  if (up) {
    const x = s.structures[Number(up.dataset.u)];
    if (x && act({ type: 'upgrade', b: s.id, i: Number(up.dataset.u) })) toast(`Upgrading ${RULES.structures[x.type].name} to ${ROMAN[x.level + 1]} · ${Math.round(upgradeTime(x))}s`, ownerColor(me));
    updateActions();
    return;
  }
  const d = e.target.closest('button[data-d]');
  if (d) {
    const x = s.structures[Number(d.dataset.d)];
    if (x && act({ type: 'demolish', b: s.id, i: Number(d.dataset.d) })) toast(`${RULES.structures[x.type].name} scrapped at ${s.name}`, ownerColor(me));
    ui.slot = null;
    updateActions();
    return;
  }
  const btn = e.target.closest('button[data-b]');
  if (!btn) return;
  const k = btn.dataset.b;
  const ok = act(k === 'ship' ? { type: 'ship', b: s.id } : { type: 'build', b: s.id, k });
  if (ok) {
    toast(k === 'ship' ? `Ship ordered at ${s.name}` : `${RULES.structures[k].name} under construction at ${s.name}`, ownerColor(me));
    if (k !== 'ship') ui.slot = null;
  }
  updateActions();
});

// ---- Research --------------------------------------------------------------------

function renderResearch() {
  const t = game.tech[me];
  const p = t.project;
  $('rbar').hidden = !running || !p;
  if (p) {
    const pct = Math.floor((1 - p.left / p.total) * 100);
    const eta = fmt(p.left / researchSpeed(game, me));
    setHTML($('rbar'), `Researching <b>${TECH[p.key].levels[t[p.key]]}</b> · ${pct}% · ${eta}`);
  }
  if ($('research').hidden) return;
  $('rstatus').textContent = `speed ×${researchSpeed(game, me).toFixed(1)}`;
  setHTML($('rlist'), Object.entries(TECH).map(([key, d]) => {
    const lvl = t[key];
    const pips = '●'.repeat(lvl) + '○'.repeat(d.cost.length - lvl);
    const next = nextTech(game, me, key);
    if (!next) return `<button class="tech-row" disabled><span class="t"><em>${d.name}</em><b>${d.levels.at(-1)}<span class="pips">${pips}</span></b><small>Complete</small></span></button>`;
    const running = p && p.key === key;
    const why = cantResearch(game, me, key);
    const note = running ? `Researching · ${Math.floor((1 - p.left / p.total) * 100)}%` : `${next.text} · ${fmt(next.time / researchSpeed(game, me))}`;
    return `<button class="tech-row" data-k="${key}" ${why ? 'disabled' : ''}><span class="t"><em>${d.name} ${ROMAN[next.level]}</em><b>${next.title}<span class="pips">${pips}</span></b><small>${note}</small></span><span class="c">${running ? '' : next.cost}</span></button>`;
  }).join(''));
}
$('rnd').addEventListener('click', () => {
  $('research').hidden = !$('research').hidden;
  ui.selected = ui.target = null;
  updateActions();
  renderResearch();
});
$('rclose').addEventListener('click', () => { $('research').hidden = true; });
// Tapping anywhere outside the sheet closes it too.
const closeResearch = (e) => {
  if ($('research').hidden || e.target.closest('#research, #rnd')) return;
  $('research').hidden = true;
  updateFleetInfo();
};
for (const ev of ['pointerdown', 'touchstart', 'mousedown']) document.addEventListener(ev, closeResearch, { capture: true, passive: true });
$('rlist').addEventListener('click', (e) => {
  const b = e.target.closest('button[data-k]');
  if (!b) return;
  const title = TECH[b.dataset.k].levels[game.tech[me][b.dataset.k]];
  if (act({ type: 'research', k: b.dataset.k })) {
    toast(`Researching ${title}`, ownerColor(me));
    $('research').hidden = true;
  }
  renderResearch();
});

$('less').addEventListener('click', () => { ui.count = Math.max(1, ui.count - 1); updateActions(); });

$('more').addEventListener('click', () => { ui.count += 1; updateActions(); });
$('launch').addEventListener('click', () => {
  if (ui.mode !== 'launch') { ui.mode = 'launch'; ui.target = null; updateActions(); return; }
  doLaunch();
});
$('cancel').addEventListener('click', () => { ui.mode = null; ui.target = null; updateActions(); });
$('focus').addEventListener('click', () => {
  const id = ui.target ?? ui.selected;
  if (id !== null) view.focus(game, id);
  updateActions();
});

function doLaunch() {
  if (ui.selected === null || ui.target === null || ui.count < 1) return;
  act({ type: 'launch', b: ui.selected, to: ui.target, n: ui.count });
  ui.mode = null;
  ui.selected = ui.target = null;
  updateActions();
}

let toastTimer = 0;
// Notifications: a small stack in the top corner; each fades after a while.
function toast(text, color) {
  const feed = $('feed');
  const el = document.createElement('div');
  el.className = 'note';
  el.style.setProperty('--c', color);
  el.textContent = text;
  feed.prepend(el);
  while (feed.children.length > 4) feed.lastChild.remove();
  setTimeout(() => el.classList.add('gone'), 5200);
  setTimeout(() => el.remove(), 5800);
}
const vetName = (v) => ['', 'blooded', 'veteran', 'elite'][vetLevel(v)];
const tf = (name) => `TF ${name}`;

/** Turns the simulation's events into notes, filtered by what we can know. */
function drainEvents(evs = game.events.splice(0)) {
  const vis = ui.vis;
  const nm = (id) => game.bodies[id].name;
  const mine = ownerColor(me);
  for (const e of evs) {
    const c = ownerColor(e.owner);
    switch (e.type) {
      case 'launch':
        if (e.owner === me) {
          const f = game.fleets.find((x) => x.id === e.fleet);
          toast(`${tf(e.name)} · ${e.n} ship${e.n === 1 ? '' : 's'} → ${nm(e.to)}${f ? ` · ${fmt(f.T)}` : ''}${f && f.assist !== undefined ? ` · assist via ${nm(f.assist)}` : ''}`, mine);
          break;
        }
        if (!vis || vis.intel < 1 || !vis.bodies.has(e.from)) break;
        toast(`Launch detected at ${nm(e.from)} · ${e.n} ship${e.n === 1 ? '' : 's'}${vis.intel >= 2 ? ` → ${nm(e.to)}` : ''}`, c);
        break;
      case 'arrived':
        if (e.owner === me) toast(`${tf(e.name)} arrived at ${nm(e.at)}`, mine);
        break;
      case 'engaged':
        if (e.owner === me) toast(`${tf(e.name)} engaging ${nm(e.at)}`, mine);
        else if (e.vs === me) toast(`${nm(e.at)} under attack`, c);
        break;
      case 'wiped':
        if (e.owner === me) toast(`${tf(e.name)} lost with all hands at ${nm(e.at)}`, ownerColor(e.vs));
        else if (e.vs === me) toast(`Enemy ${tf(e.name)} destroyed at ${nm(e.at)}`, mine);
        break;
      case 'captured':
        if (e.owner === me) toast(`${nm(e.at)} taken by ${tf(e.name)}`, mine);
        else if (e.from === me) toast(`${nm(e.at)} lost`, c);
        break;
      case 'held':
        if (e.owner === me) toast(`${nm(e.at)} held${vetLevel(game.bodies[e.at].vet) ? ` · garrison ${vetName(game.bodies[e.at].vet)}` : ''}`, mine);
        break;
      case 'promoted':
        if (e.owner === me) toast(`${e.name ? tf(e.name) : `${nm(e.at)} garrison`} now ${vetName(e.v)}`, mine);
        break;
      case 'research':
        if (e.owner === me) toast(`${TECH[e.key].levels[e.level - 1]} complete`, mine);
        break;
    }
  }
}

function tap(id, x, y, mouse = false) {
  // Tapping one of your fleets in flight shows where it's going (fleets win
  // over the world behind them, unless you're picking a target).
  if (ui.selected === null) {
    const f = view.pickFleet(game, x, y, me);
    if (f !== null) {
      ui.fleet = f;
      updateActions();
      return;
    }
  }
  ui.fleet = null;
  // On touch the camera locks onto whatever you tap; a mouse click only
  // selects (the mouse steers the camera itself).
  if (id !== null && !mouse) view.focus(game, id, false);
  if (ui.mode === 'launch') {
    // Picking a destination: any other world becomes the target; empty
    // space backs out of launching and deselects.
    if (id === null) { ui.selected = ui.target = null; ui.mode = null; } else ui.target = id !== ui.selected ? id : null;
  } else if (id === null || id === ui.selected) {
    ui.selected = ui.target = null;
  } else if (game.bodies[id].owner === me) {
    ui.selected = id; ui.slot = null; ui.target = null;
  } else {
    ui.selected = ui.target = null;
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
  if (e.pointerType === 'mouse') {
    // Mouse: left drags pan, right or middle drags turn the view around
    // whatever is under the cursor. A left click without a drag selects.
    const turn = e.button === 2 || e.button === 1 || e.altKey;
    gesture = { kind: turn ? 'turn' : 'click', mouse: true, x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY,
      pivot: turn ? view.pivotAt(game, e.clientX, e.clientY) : null };
    ui.dragging = true;
    view.orbit.vaz = view.orbit.vpol = 0;
    return;
  }
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
  if (gesture?.mouse) {
    const dx = e.clientX - gesture.x;
    const dy = e.clientY - gesture.y;
    gesture.x = e.clientX;
    gesture.y = e.clientY;
    if (gesture.kind === 'click' && Math.hypot(e.clientX - gesture.x0, e.clientY - gesture.y0) > 5) gesture.kind = 'pan';
    if (gesture.kind === 'pan') view.pan(dx, dy);
    if (gesture.kind === 'turn') view.rotateAround(gesture.pivot, -dx * 0.006, -dy * 0.006);
    return;
  }
  // Hover feedback for the mouse: a pointer over anything clickable.
  if (e.pointerType === 'mouse' && game) canvas.style.cursor = view.pick(e.clientX, e.clientY) !== null ? 'pointer' : 'grab';
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
  if (gesture?.mouse) {
    const g = gesture;
    gesture = null;
    ui.dragging = false;
    if (g.kind !== 'click' || e.type === 'pointercancel') return;
    const id = view.pick(e.clientX, e.clientY);
    const now = performance.now();
    if (id !== null && lastTap.id === id && now - lastTap.t < 350) {
      // Double-click: glide to it and follow.
      view.focus(game, id);
      lastTap = { t: 0, id: null };
      updateActions();
    } else {
      lastTap = { t: now, id };
      tap(id, e.clientX, e.clientY, true);
    }
    return;
  }
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
canvas.addEventListener('pointercancel', (e) => { endPointer(e); gesture = null; ui.dragging = false; });
canvas.addEventListener('wheel', (e) => {
  e.preventDefault();
  // Trackpad pinch arrives as ctrl+wheel with small deltas; scale to match.
  // Some browsers (Firefox) report wheel steps in lines or pages, not pixels.
  const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1);
  const k = e.ctrlKey ? 0.01 : 0.0015;
  view.zoomToward(e.clientX, e.clientY, Math.exp(Math.max(-0.5, Math.min(0.5, dy * k))));
}, { passive: false });

// Keyboard: WASD/arrows pan, Q/E turn, +/- zoom, F focus selection,
// H whole system, Esc backs out of whatever you're doing.
const held = new Set();
window.addEventListener('keydown', (e) => {
  if (!running || e.target.closest('input, textarea')) return;
  const k = e.key.toLowerCase();
  held.add(k);
  if (k === 'escape') {
    if (ui.mode) { ui.mode = null; ui.target = null; } else ui.selected = ui.target = null;
    $('research').hidden = true;
    updateActions();
  } else if (k === 'f') {
    const id = ui.target ?? ui.selected;
    if (id !== null) view.focus(game, id);
  } else if (k === 'h') {
    systemView();
  }
});
window.addEventListener('keyup', (e) => held.delete(e.key.toLowerCase()));
window.addEventListener('blur', () => held.clear());
function keyboardCamera(dt) {
  if (!held.size) return;
  const v = 700 * dt;
  const has = (...ks) => ks.some((k) => held.has(k));
  if (has('w', 'arrowup')) view.pan(0, v);
  if (has('s', 'arrowdown')) view.pan(0, -v);
  if (has('a', 'arrowleft')) view.pan(v, 0);
  if (has('d', 'arrowright')) view.pan(-v, 0);
  if (has('q')) view.orbit.az += dt * 1.5;
  if (has('e')) view.orbit.az -= dt * 1.5;
  if (has('=', '+')) view.zoomAt(window.innerWidth / 2, window.innerHeight / 2, Math.exp(-dt * 1.8));
  if (has('-', '_')) view.zoomAt(window.innerWidth / 2, window.innerHeight / 2, Math.exp(dt * 1.8));
}
document.addEventListener('contextmenu', (e) => e.preventDefault());
for (const type of ['gesturestart', 'gesturechange', 'gestureend']) document.addEventListener(type, (e) => e.preventDefault(), { passive: false });
document.addEventListener('touchmove', (e) => { if (e.touches.length > 1) e.preventDefault(); }, { passive: false });

// ---- Loop -------------------------------------------------------------------

// ---- End-of-game report ----------------------------------------------------------

const SOLO_NAMES = ['You', 'Red', 'Amber'];
/** Display name for an empire: "You" for this screen, else its player's name. */
const nameOf = (o) => (o === me ? 'You' : game.names ? game.names[o] : SOLO_NAMES[o]);

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
      + `<text x="${x(t1) + 4}" y="${y(last) + 4}" font-size="10" fill="#aab1c8">${nameOf(o)}</text>`;
  }).join('');
  const grid = [0, 0.5, 1].map((k) => `<line x1="${L}" x2="${W - R}" y1="${y(max * k)}" y2="${y(max * k)}" stroke="rgba(160,180,255,0.12)" />`
    + `<text x="${L - 4}" y="${y(max * k) + 3}" font-size="9" fill="#858ca6" text-anchor="end">${fmtV(max * k)}</text>`).join('');
  const axis = `<text x="${L}" y="${H - 4}" font-size="9" fill="#858ca6">0:00</text><text x="${W - R}" y="${H - 4}" font-size="9" fill="#858ca6" text-anchor="end">${fmt(t1)}</text>`;
  return `<div class="chart" data-key="${key}"><h3>${title}</h3>`
    + `<svg viewBox="0 0 ${W} ${H}" data-l="${L}" data-r="${W - R}" data-w="${W}">${grid}${axis}${lines}<line class="cross" y1="${T}" y2="${H - B}" stroke="#e6ebf7" stroke-opacity="0.5" visibility="hidden" /></svg>`
    + `<div class="readout">Touch the chart to read values</div></div>`;
}

const REPORT_ROWS = [
  ['Ships built', 'built'], ['Ships lost', 'lost'], ['Enemy ships destroyed', 'killed'],
  ['Worlds captured', 'captured'], ['Worlds lost', 'worldsLost'],
  ['Credits earned', 'earned'], ['Credits spent', 'spent'], ['Research completed', 'research'],
];
const LOWER_IS_BETTER = new Set(['lost', 'worldsLost']);
/** Who led a category (ties share it; nobody leads an all-zero row). */
function bestIn(k, players) {
  const v = players.map((o) => Math.round(game.stats.totals[o][k]));
  const best = LOWER_IS_BETTER.has(k) ? Math.min(...v) : Math.max(...v);
  if (!LOWER_IS_BETTER.has(k) && best <= 0) return [];
  if (v.every((x) => x === best)) return [];
  return players.filter((o, i) => v[i] === best);
}

/** "12:34 · 2 rivals · normal": difficulty only when there were AIs. */
function matchLine() {
  const rivals = game.players - 1;
  const diffs = [...new Set(aiSeatDiffs)];
  const aiNote = diffs.length ? ` · ${game.mp ? 'AI ' : ''}${diffs.join('/')}` : '';
  return `${fmt(game.time)} · ${rivals} rival${rivals === 1 ? '' : 's'}${aiNote}`;
}
/** Shrink a font until the text fits the width. */
function fitText(g, text, x, y, maxW, weight, px, font) {
  let size = px;
  g.font = font(weight, size);
  while (size > 16 && g.measureText(text).width > maxW) g.font = font(weight, --size);
  if (g.measureText(text).width > maxW) {
    while (text.length > 1 && g.measureText(text + '…').width > maxW) text = text.slice(0, -1);
    text += '…';
  }
  g.fillText(text, x, y);
}
/** One portrait image of the whole report, for sharing. */
function reportImage() {
  const W = 1080, H = 1500;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const players = Array.from({ length: game.players }, (_, i) => i);
  const font = (w, px) => `${w} ${px}px Rajdhani, system-ui, sans-serif`;
  g.fillStyle = '#03040a'; g.fillRect(0, 0, W, H);
  g.strokeStyle = 'rgba(120,190,255,0.25)'; g.lineWidth = 2; g.strokeRect(24, 24, W - 48, H - 48);
  g.textAlign = 'center';
  g.fillStyle = '#858ca6'; g.font = font(600, 30);
  g.fillText('P E R I H E L I O N', W / 2, 96);
  const won = game.winner === me;
  g.fillStyle = ownerColor(won ? me : game.winner); g.font = font(700, 96);
  g.fillText(won ? 'VICTORY' : 'DEFEAT', W / 2, 200);
  g.fillStyle = '#e6ebf7'; g.font = font(500, 34);
  g.fillText(matchLine(), W / 2, 252);
  // Table.
  const x0 = 80, colW = 170, labelW = W - 160 - colW * players.length;
  let y = 330;
  g.font = font(700, 32); g.textAlign = 'right';
  players.forEach((o, i) => { g.fillStyle = ownerColor(o); fitText(g, nameOf(o), x0 + labelW + colW * (i + 1) - 20, y, colW - 30, 700, 32, font); });
  y += 20;
  for (const [label, k] of REPORT_ROWS) {
    y += 52;
    g.strokeStyle = 'rgba(160,180,255,0.15)'; g.beginPath(); g.moveTo(x0, y + 16); g.lineTo(W - x0, y + 16); g.stroke();
    g.textAlign = 'left'; g.fillStyle = '#858ca6'; g.font = font(500, 30); g.fillText(label, x0, y);
    const best = bestIn(k, players);
    players.forEach((o, i) => {
      const rx = x0 + labelW + colW * (i + 1) - 20;
      if (best.includes(o)) {
        g.fillStyle = 'rgba(126,224,161,0.16)'; g.fillRect(rx - colW + 30, y - 34, colW - 20, 46);
        g.fillStyle = '#7ee0a1';
      } else g.fillStyle = '#e6ebf7';
      g.textAlign = 'right'; g.font = font(best.includes(o) ? 700 : 500, 32);
      g.fillText(String(Math.round(game.stats.totals[o][k])), rx, y);
    });
  }
  // Charts: three small multiples side by side.
  const series = game.stats.series;
  const charts = [['Ships', 'ships'], ['Worlds', 'worlds'], ['Income', 'income']];
  const cw = (W - 160 - 40) / 3, ch = 400, cy = y + 90;
  charts.forEach(([title, key], i) => {
    const cx = 80 + i * (cw + 20);
    g.textAlign = 'left'; g.fillStyle = '#e6ebf7'; g.font = font(600, 30); g.fillText(title, cx, cy);
    const top = cy + 20, bot = top + ch;
    const t1 = series.at(-1).t || 1;
    const max = Math.max(1, ...series.flatMap((q) => q.p.map((p) => p[key])));
    g.strokeStyle = 'rgba(160,180,255,0.15)'; g.lineWidth = 2;
    for (const k of [0, 0.5, 1]) { g.beginPath(); g.moveTo(cx, bot - k * ch); g.lineTo(cx + cw, bot - k * ch); g.stroke(); }
    for (const o of players) {
      g.strokeStyle = ownerColor(o); g.lineWidth = 4; g.lineJoin = 'round'; g.beginPath();
      series.forEach((q, j) => { const px = cx + (q.t / t1) * cw, py = bot - (q.p[o][key] / max) * ch; j ? g.lineTo(px, py) : g.moveTo(px, py); });
      g.stroke();
    }
    g.fillStyle = '#858ca6'; g.font = font(500, 24);
    g.fillText(key === 'income' ? max.toFixed(1) : String(Math.round(max)), cx, top + 26);
  });
  g.textAlign = 'center'; g.fillStyle = '#858ca6'; g.font = font(500, 26);
  g.fillText('pretzel-dev.github.io/game-dev/perihelion', W / 2, H - 56);
  return c;
}
async function shareReport() {
  const blob = await new Promise((r) => reportImage().toBlob(r, 'image/png'));
  const file = new File([blob], 'perihelion-report.png', { type: 'image/png' });
  try {
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      // Files only: adding a title makes some share sheets send a second, text item.
      await navigator.share({ files: [file] });
      return;
    }
  } catch (e) { if (e.name === 'AbortError') return; }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = file.name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
}
$('share').addEventListener('click', shareReport);

function renderReport() {
  const st = game.stats;
  const players = Array.from({ length: game.players }, (_, i) => i);
  const rows = REPORT_ROWS;
  const legend = `<div class="legend">${players.map((o) => `<span><i style="background:${ownerColor(o)}"></i>${nameOf(o)}</span>`).join('')}</div>`;
  const table = `<table class="totals"><tr><th></th>${players.map((o) => `<th style="color:${ownerColor(o)}">${nameOf(o)}</th>`).join('')}</tr>`
    + rows.map(([label, k]) => `<tr><td>${label}</td>${players.map((o) => `<td class="${bestIn(k, players).includes(o) ? 'best' : ''}">${Math.round(st.totals[o][k])}</td>`).join('')}</tr>`).join('')
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
        return `${nameOf(o)} <b>${key === 'income' ? v.toFixed(1) : Math.round(v)}</b>`;
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
  const won = game.winner === me;
  $('end-title').textContent = won ? 'Victory' : 'Defeat';
  $('end-title').style.color = ownerColor(won ? me : game.winner);
  $('end-sub').textContent = won ? `The system is yours after ${fmt(game.time)}.` : `Your last world fell at ${fmt(game.time)}.`;
  renderReport();
  setTimeout(() => ($('end').hidden = false), 1200);
}

let last = performance.now();
let uiClock = 0;
let netClock = 0;
let knockedOut = false;
function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  if (game) {
    if (running && !paused) {
      if (net?.role === 'client') {
        // Guests don't simulate: orbits and flights are functions of time, so
        // advancing the clock keeps everything moving between host updates.
        game.time += dt;
      } else {
        // Time warp in small steps so battles and arrivals stay accurate.
        let left = dt * warp;
        while (left > 0) {
          const h = Math.min(0.25, left);
          for (const ai of ais) tickAI(game, ai, h);
          step(game, h);
          left -= h;
        }
      }
    }
    if (running) {      if (ui.selected !== null && game.bodies[ui.selected].owner !== me) ui.selected = ui.target = null;
      if (net?.role !== 'client') {
        const evs = game.events.splice(0);
        drainEvents(evs);
        if (net?.role === 'host' && evs.length) net.room.broadcast({ t: 'events', list: evs });
      }
      if (net?.role === 'host') {
        netClock -= dt;
        if (netClock <= 0 || game.winner !== null) { netClock = 0.25; net.room.broadcast({ t: 'state', s: snapshot() }); }
      }
      if (game.mp && !knockedOut && !game.bodies.some((b) => b.owner === me) && !game.fleets.some((f) => f.owner === me) && game.winner === null) {
        knockedOut = true;
        toast('Your empire has fallen · watching the rest', '#ff7a4d');
        ui.vis = null; // observers see everything
      }
      if (ui.fleet !== null) updateFleetInfo();
      uiClock -= dt;
      if (uiClock <= 0) {
        uiClock = 0.25;
        ui.vis = knockedOut ? null : visibility(game, me);
        updateActions();
        renderResearch();
        $('clock').innerHTML = `<b>₵ ${Math.floor(game.credits[me])}</b> +${income(game, me).toFixed(1)}/s · T+${fmt(game.time)}`;
      }
      if (game.winner !== null) finish();
    }
    if (running) keyboardCamera(dt);
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
