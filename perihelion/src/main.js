import { icon, iconBody } from './icons.js';
import { createGame, step, launch, plan, fleetState, rng, PLAYER, NEUTRAL, RULES, slotsOf, cantBuild, buildStructure, cantOrderShip, orderShip, income, upgrade, cantUpgrade, upgradeCost, upgradeTime, coverOf, coverFrom, TECH, nextTech, research, cantResearch, researchSpeed, visibility, demolish, cantDemolish, demolishFee, cancelShip, yardsOf, vetLevel, incomeOf, launchProbe, cantProbe, readyShips, restingShips, SYSTEMS, SYSTEM_KEYS, RANDOM_KEYS, dailySeed, PERKS, EVENTS, staysFor, posAt, dist, JOINTS, BRANCH_RING, techTitle, PROJECTS, PROJECT_FUND, cantProject, startProject, fundProject, DARK, SPY, cantSpy, plantSpy, catchRate, incomeParts, buildSpeed, shipTime } from './sim.js';
import { createAI, tickAI } from './ai.js';
import { createView, ownerColor } from './render.js';
import { hostRoom, joinRoom, MAX_SEATS } from './net.js';

const $ = (id) => document.getElementById(id);
const setHTML = (el, html) => { if (el._html !== html) { el._html = html; el.innerHTML = html; } };
const view = createView($('scene'), $('labels'));

const prefs = (() => {
  const d = { rivals: 1, difficulty: 'normal', system: 'random' };
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
const WARPS = [0.5, 1, 2, 4, 8];
let warp = 1;

const ui = { peek: null, pick: null, selected: null, target: null, fleet: null, count: 1, dark: false, preview: null, dragging: false, vis: null, slot: null, mode: null };

const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

// ---- Orders ----------------------------------------------------------------
// Every order goes through here: applied directly in solo or on the host,
// sent to the host from a guest (it shows up with the next state update).

function applyCmd(owner, c) {
  const b = game.bodies[c.b];
  if (c.type !== 'research' && c.type !== 'spy' && (!b || b.owner !== owner)) return false;
  switch (c.type) {
    case 'launch': return !!launch(game, b, game.bodies[c.to], c.n, !!c.dark);
    case 'spy': return !!plantSpy(game, owner, b);
    case 'ship': return orderShip(game, b);
    case 'cancel': return cancelShip(game, b);
    case 'build': return buildStructure(game, b, c.k);
    case 'upgrade': return !!b.structures[c.i] && upgrade(game, b, b.structures[c.i]);
    case 'demolish': return !!b.structures[c.i] && demolish(game, b, b.structures[c.i]);
    case 'research': return research(game, owner, c.k);
    case 'probe': return !!launchProbe(game, b, game.bodies[c.to]);
    case 'project': return startProject(game, b, c.k);
    case 'fund': return fundProject(game, b, c.how === 'ship' ? 'ship' : 'cash');
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
let daily = null; // the day's key when playing the daily system
/** The chosen system type, with Random resolved from the seed. */
const systemFor = (seed) => (prefs.system !== 'random' && SYSTEMS[prefs.system] ? prefs.system : RANDOM_KEYS[(seed >>> 0) % RANDOM_KEYS.length]);
function startGame({ seed = (Math.random() * 2 ** 31) | 0, players = prefs.rivals + 1, seat = 0, names = null, aiSeats = null, aiDiffs = null, mp = false, system = systemFor(seed), day = null } = {}) {
  daily = day;
  game = createGame({ seed, opponents: players - 1, mp, system });
  if (names) game.names = names;
  me = seat;
  const r = rng(seed ^ 0xabc);
  // AIs run only where the game runs: solo, or on the host.
  aiSeatDiffs = aiDiffs || (aiSeats ? aiSeats.map(([, d]) => d) : mp ? [] : Array(players - 1).fill(prefs.difficulty));
  ais = net?.role === 'client' ? []
    : aiSeats ? aiSeats.map(([i, d]) => createAI(i, d, r))
      : Array.from({ length: players - 1 }, (_, i) => createAI(i + 1, prefs.difficulty, r));
  ui.selected = ui.target = ui.preview = ui.fleet = ui.mode = ui.peek = null;
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
  const sys = SYSTEMS[game.system];
  toast(`${daily ? 'Daily · ' : ''}${sys.name}`, '#aab1c8');
}
function start() { leaveNet(); startGame(); }
function startDaily() { leaveNet(); const d = dailySeed(); startGame({ seed: d.seed, system: d.system, day: d.key }); }
$('daily').addEventListener('click', startDaily);
// System picker: tap to cycle Random and each type.
const SYSTEM_CHOICES = ['random', ...SYSTEM_KEYS];
function syncSystem() {
  $('system-pick').textContent = prefs.system === 'random' ? 'Random' : `${SYSTEMS[prefs.system].name}${SYSTEMS[prefs.system].test ? ' (test)' : ''}`;
  $('system-pick').title = prefs.system === 'random' ? 'A different system type each game' : SYSTEMS[prefs.system].text;
  const d = dailySeed();
  $('daily').innerHTML = `Daily<small>${SYSTEMS[d.system].name}</small>`;
  $('daily').title = `Today's system, the same for everyone: ${SYSTEMS[d.system].name}`;
}
$('system-pick').addEventListener('click', () => {
  prefs.system = SYSTEM_CHOICES[(SYSTEM_CHOICES.indexOf(prefs.system) + 1) % SYSTEM_CHOICES.length];
  savePrefs();
  syncSystem();
});
syncSystem();
$('play').addEventListener('click', start);
$('again').addEventListener('click', () => {
  leaveNet();
  $('end').hidden = true;
  if (daily) { startDaily(); return; }
  $('menu').hidden = false;
  $('resume').hidden = true;
  $('menu').classList.remove('paused');
  $('play').textContent = 'Play vs AI';
});
$('pause').addEventListener('click', pause);
$('resume').addEventListener('click', () => { $('menu').hidden = true; $('menu').classList.remove('paused'); running = true; });
function pause() {
  if (!game || game.winner !== null || !running) return;
  if (net) {
    // Multiplayer: the host pauses (and resumes) for everyone.
    paused = !paused;
    $('pause').innerHTML = icon(paused ? 'play' : 'pause');
    net.room.broadcast({ t: 'pause', paused });
    showPaused();
    return;
  }
  running = false;
  $('menu').hidden = false;
  $('resume').hidden = false;
  $('rnd').hidden = true;
  $('menu').classList.add('paused');
  $('play').textContent = 'New game';
}
function showPaused() {
  $('banner').hidden = !paused;
  $('banner').textContent = me === 0 ? 'Paused · tap play to resume' : 'Paused by host';
}

// ---- Multiplayer ------------------------------------------------------------

$('keys').textContent = matchMedia('(pointer: fine)').matches
  ? 'Mouse: click to select · drag to pan · right-drag to rotate · scroll to zoom · double-click a world to fly there. Keys: WASD pan · Q/E rotate · +/− zoom · F focus · H whole system · L launch/confirm · P probe · R research · Space pause · 1–5 speed (½× to 8×) · Esc back.'
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
  $('pause').innerHTML = icon('pause');
}

function renderLobby(seats, code) {
  lobbySeats = seats;
  $('lobby-code').textContent = code || '·····';
  const host = net?.role === 'host';
  const rows = seats.map((s, i) => `<div class="seat"><i style="background:${ownerColor(i)}"></i><span>${s.name}${i === me ? ' (you)' : ''}</span>`
    + `<small>${s.kind === 'ai' ? 'AI' : i === 0 ? 'host' : s.online === false ? 'offline' : 'ready'}</small>`
    + `${host && i > 0 ? `<button data-kick="${i}" aria-label="Remove">${icon('close')}</button>` : ''}</div>`);
  for (let i = seats.length; i < MAX_SEATS; i++) rows.push('<div class="seat empty"><span>Open seat</span></div>');
  $('seats').innerHTML = rows.join('');
  $('lobby-ai').hidden = !host || seats.length >= MAX_SEATS;
  $('lobby-start').hidden = !host;
  $('lobby-start').disabled = seats.length < 2;
  $('lobby-hint').textContent = host ? (seats.length < 2 ? 'Tap the code to copy it. Up to 3 empires.' : 'Ready when you are.') : 'Waiting for the host to start…';
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
  return { t: 'start', seed: net.seed, players: game.players, names: game.names, seat, paused, aiDiffs: aiSeatDiffs, system: game.system };
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

// Join asks for the code in place of the Host / Join buttons.
function showJoin(on) {
  $('mp-buttons').hidden = on;
  $('join-row').hidden = !on;
  if (on) $('code').focus();
}
$('join').addEventListener('click', () => { menuMsg(''); showJoin(true); });
$('join-back').addEventListener('click', () => { menuMsg(''); showJoin(false); });
$('code').addEventListener('keydown', (e) => { if (e.key === 'Enter') $('join-go').click(); });
$('howto').addEventListener('click', () => { $('menu').hidden = true; $('tutorial').hidden = false; });
$('tut-close').addEventListener('click', () => { $('tutorial').hidden = true; $('menu').hidden = false; });
// Tap the room code to copy it.
$('lobby-code').addEventListener('click', async () => {
  const code = $('lobby-code').textContent;
  if (!/^\w{5}$/.test(code)) return;
  const hint = $('lobby-hint');
  const was = hint.textContent;
  try { await navigator.clipboard.writeText(code); hint.textContent = 'Code copied'; } catch { hint.textContent = 'Long-press the code to copy it'; }
  setTimeout(() => { hint.textContent = was; }, 1800);
});
$('join-go').addEventListener('click', () => {
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
    startGame({ seed: m.seed, players: m.players, seat: m.seat, names: m.names, aiDiffs: m.aiDiffs || [], mp: true, system: m.system || 'classic' });
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
const BODY_KEYS = ['owner', 'ships', 'guns', 'structures', 'sieges', 'queue', 'build', 'slips', 'vet', 'tf', 'fighting', 'totDef', 'totAtk', 'resting', 'restUntil', 'bonus', 'name', 'project', 'wonder'];
function snapshot() {
  return {
    time: game.time,
    winner: game.winner,
    credits: game.credits,
    tech: game.tech,
    fleets: game.fleets,
    scans: game.scans,
    spies: game.spies,
    happenings: game.happenings,
    wonders: game.wonders,
    visit: game.visit,
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
  game.scans = s.scans;
  game.spies = s.spies;
  game.happenings = s.happenings;
  game.wonders = s.wonders;
  game.visit = s.visit;
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

function setWarp(v) {
  warp = v;
  $('warp').textContent = `${warp === 0.5 ? '½' : warp}×`;
}
$('warp').addEventListener('click', () => setWarp(WARPS[(WARPS.indexOf(warp) + 1) % WARPS.length]));
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
  const phase = f.dark && !s.burning ? tip(`${icon('dark')} coasting dark`, 'Drive off: enemies only spot this fleet close in', 'dim') : s.flipping ? 'flipping' : s.phase === 1 ? 'burning' : 'braking';
  const to = game.bodies[f.to];
  const speed = Math.hypot(s.vx, s.vy, s.vz);
  if (f.probe) {
    setHTML($('fleet'), `${icon('probe')} <b>Probe</b> → <b>${to.name}</b> · <b>${fmt(left)}</b>`);
    return;
  }
  setHTML($('fleet'), `<b>${tf(f.name)}</b>${vetLevel(f.vet) ? ` <span class="vet">${vetName(f.vet)}</span>` : ''} · <b>${f.n}</b> → <b>${to.name}</b><br><span class="dim">${phase}</span> · `
    + `arrive in <b>${fmt(left)}</b>${f.assist !== undefined ? ` ${tip(icon('assist'), `Gravity assist via ${game.bodies[f.assist].name}`, 'assist')}` : ''} ${tip(`${Math.round(s.progress * 100)}%`, `${speed.toFixed(2)} units/s`, 'dim')}`);
}

/** Read-only panel for a world that isn't yours: owner, what you can see, perk, events. */
function updatePeek() {
  const b = ui.peek !== null && game && running && ui.selected === null && ui.fleet === null ? game.bodies[ui.peek] : null;
  $('peek').hidden = !b;
  if (!b) return;
  const seen = !ui.vis || ui.vis.bodies.has(b.id);
  const kind = b.visitor ? (game.visit?.kind === 'comet' ? 'Comet' : 'Derelict') : b.kind === 'planet' && b.giant ? 'Gas giant' : b.kind[0].toUpperCase() + b.kind.slice(1);
  const who = b.owner === NEUTRAL ? 'Independent' : nameOf(b.owner);
  const built = b.structures.filter((x) => x.left <= 0 || x.next).map((x) => `${RULES.structures[x.type].name}${RULES.structures[x.type].maxLevel ? ` ${ROMAN[x.level]}` : ''}`);
  const garrison = seen ? `${icon('fleet')} <b>${b.ships}</b> ship${b.ships === 1 ? '' : 's'} · ${icon('guns')} <b>${Math.ceil(b.guns)}</b> gun${Math.ceil(b.guns) === 1 ? '' : 's'}${built.length ? ` · ${built.join(', ')}` : ''}` : tip('Defences unknown', 'Out of sensor range: send a probe or get a world nearby to see it');
  setHTML($('peek'), `<div class="head"><span class="tag">${kind}</span><b>${b.name}</b><span class="grow"></span><span class="tag" style="color:${b.owner === NEUTRAL ? 'var(--dim)' : ownerColor(b.owner)}">${who}</span></div>`
    + `<div class="row2">${garrison}</div>${chips(b, { income: false, seen })}${spyLine(b)}`);
}
/** Where your credits per second come from, one source per line. */
function incomeBreakdown() {
  const sum = { worlds: 0, mines: 0, skimmers: 0, exchanges: 0, bonuses: 0 };
  let n = 0;
  for (const b of game.bodies) {
    if (b.owner !== me) continue;
    n += 1;
    const p = incomeParts(b, game);
    for (const k in sum) sum[k] += p[k];
  }
  const agents = (game.spies || []).filter((x) => x.owner === me && x.since <= game.time).reduce((t, x) => t + incomeOf(game.bodies[x.body], game) * SPY.skim, 0);
  const comet = (game.happenings || []).some((h) => h.kind === 'comet' && h.holder === me && game.time >= h.starts) ? EVENTS.comet.pay : 0;
  const rows = [[`${n} world${n === 1 ? '' : 's'}`, sum.worlds], ['Mines', sum.mines], ['Gas harvesters', sum.skimmers], ['Exchanges', sum.exchanges], ['Bonuses and wonders', sum.bonuses], ['Agents', agents], ['Comet mining', comet]];
  return rows.filter(([, v]) => v > 0.001).map(([k, v]) => `${k}  +${v.toFixed(1)}/s`).join('\n');
}
/** Spy line on an enemy world: plant one, or how long yours has been there. */
function spyLine(b) {
  if (b.owner === NEUTRAL || b.owner === me || b.visitor || knockedOut) return '';
  const mine = (game.spies || []).find((x) => x.owner === me && x.body === b.id);
  if (mine && mine.since > game.time) return `<div class="spy">${icon('spy')} ${tip(`Agent on the way · ${fmt(mine.since - game.time)}`, 'Slipping in quietly: they start work when they arrive')}</div>`;
  if (mine) {
    const risk = catchRate(game, b) * 60;
    const odds = risk < 0.25 ? 'low' : risk < 0.5 ? 'rising' : 'high';
    return `<div class="spy">${icon('spy')} ${tip(`Agent in place · ${fmt(game.time - mine.since)}`, 'Shows you this world and its launches, skims its income and slows any megaproject here')}<span class="grow"></span>${tip(`risk ${odds}`, 'Each minute there\'s a chance the agent is caught. Their Intel and a security bureau nearby raise it', odds === 'high' ? 'warn' : 'dim')}</div>`;
  }
  const why = cantSpy(game, me, b);
  if (why === 'needs Signals intercept') return `<div class="spy dim">${icon('spy')} Spies need Signals intercept</div>`;
  return `<div class="spy">${icon('spy')} <span class="dim">No agent here</span><span class="grow"></span><button data-spy="${b.id}" ${why ? 'disabled' : ''} title="Plant a spy">Plant spy<small>${SPY.cost}</small></button></div>`;
}
$('peek').addEventListener('click', (e) => {
  const sb = e.target.closest('button[data-spy]');
  if (!sb) return;
  const b = game.bodies[+sb.dataset.spy];
  if (act({ type: 'spy', b: b.id })) toast(`Agent on the way to ${b.name}`, ownerColor(me), 'spy');
  updateActions();
});

function updateActions() {
  updateFleetInfo();
  updatePeek();
  const s = ui.selected !== null && game ? game.bodies[ui.selected] : null;
  const show = !!s && s.owner === me && running;
  $('actions').hidden = !show;
  if (!show) { ui.preview = null; if (ui.mode !== 'project') ui.mode = null; return; }
  if (!s.ships && ui.mode === 'launch') ui.mode = null;
  const ready = readyShips(game, s);
  if (ui.mode === 'probe' && !yardsOf(s)) ui.mode = null;
  const probing = ui.mode === 'probe';
  ui.count = ready ? Math.max(1, Math.min(ui.count, ready)) : 0;
  $('count').innerHTML = `${ui.count}<small>/${ready}</small>`;
  const launching = ui.mode === 'launch' || probing;
  $('actions').classList.toggle('launching', launching);
  $('buildrow').hidden = launching;
  $('stepper').hidden = !launching || probing;
  $('cancel').hidden = !launching;
  $('dark').hidden = !launching || probing;
  $('dark').classList.toggle('on', ui.dark);
  if (!launching) {
    ui.preview = null;
    ui.target = null;
    const kind = s.visitor ? (game.visit?.kind === 'comet' ? 'Comet' : 'Derelict') : s.kind === 'station' ? 'Station' : s.kind[0].toUpperCase() + s.kind.slice(1);
    setHTML($('info'), `<span class="tag">${kind}</span><b>${s.name}</b><span class="grow"></span>${s.ships ? `${s.tf ? `<span class="tag">TF ${s.tf}</span>` : ''}<span class="num">${s.ships}</span><span class="tag">ship${s.ships === 1 ? '' : 's'}</span>` : '<span class="tag">no ships</span>'}`
      + chips(s));
    // Ships that just arrived need a moment before they can leave again.
    const wait = s.ships && !ready ? Math.ceil(s.restUntil - game.time) : 0;
    $('launch').textContent = wait ? `Ready in ${fmt(wait)}` : 'Launch';
    $('launch').disabled = ready < 1;
    renderBuildRow(s);
  } else if (ui.target === null) {
    ui.preview = null;
    setHTML($('info'), `<span class="tag">${probing ? 'Probe from' : 'Launch from'}</span><b>${s.name}</b><span class="grow"></span><span class="tag">tap a destination</span>`);
    $('launch').textContent = 'Confirm';
    $('launch').disabled = true;
  } else {
    const t = game.bodies[ui.target];
    ui.preview = plan(game, s, t, game.time, probing ? RULES.probe.speed : 1, false, !probing && ui.dark ? DARK.burn : 0.5);
    const defence = t.owner === me ? 'reinforce' : `${t.ships} ship${t.ships === 1 ? '' : 's'}, ${Math.ceil(t.guns)} gun${Math.ceil(t.guns) === 1 ? '' : 's'}`;
    const cover = t.owner === me ? 0 : coverOf(game, t);
    const seen = !ui.vis || ui.vis.bodies.has(t.id);
    const defenceText = !seen ? 'unknown' : cover ? `${defence} ${tip(`+${cover.toFixed(1)}`, `Cover from ${coverFrom(game, t).map((c) => c.from.name).join(', ')}`)}` : defence;
    const assist = ui.preview.assist !== undefined ? ` ${tip(icon('assist'), `Gravity assist via ${game.bodies[ui.preview.assist].name}: a faster route`, 'assist')}` : '';
    if (probing) {
      const why = cantProbe(game, s, t);
      setHTML($('info'), `<span>Probe → <b>${t.name}</b> · <b>${fmt(ui.preview.T)}</b>${why ? ` · <span class="dim">${why}</span>` : ''}</span>`);
      $('launch').textContent = 'Confirm';
      $('launch').disabled = !!why;
      return;
    }
    const resting = restingShips(game, s);
    const restNote = resting ? ` ${tip(`+${resting} in ${fmt(Math.ceil(s.restUntil - game.time))}`, `${resting} ship${resting === 1 ? '' : 's'} just arrived and can launch in ${fmt(Math.ceil(s.restUntil - game.time))}`, 'dim')}` : '';
    // A visitor only waits so long: say when it leaves, and if we'd miss it.
    const stay = staysFor(game, t);
    const late = ui.preview.T > stay - 5;
    const leaves = Number.isFinite(stay) ? ` · <span class="${late ? 'warn' : 'dim'}">${late ? 'too late' : `leaves ${fmt(stay)}`}</span>` : '';
    setHTML($('info'), `<span><b>${ui.count}</b> → <b>${t.name}</b> <span class="dim">${defenceText}</span> · <b>${fmt(ui.preview.T)}</b>${ui.dark ? ` ${tip('dark', 'Running dark: enemies only spot this fleet close in', 'dim')}` : ''}${assist}${restNote}${leaves}</span>${chips(t, { income: false, seen })}`);
    $('launch').textContent = 'Confirm';
    $('launch').disabled = ready < 1 || late;
  }
}
// ---- Building ----------------------------------------------------------------

const ROMAN = ['', 'I', 'II', 'III'];
/** A small label with more detail behind it (hover, or tap on touch). */
const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const tip = (html, detail, cls = '') => `<span class="chip${cls ? ` ${cls}` : ''}" tabindex="0" data-tip="${esc(detail)}">${html}</span>`;
/**
 * One row of short chips for a world: income, cover, perk and any event.
 * The explanations live in the tooltips.
 */
function chips(b, { income = true, seen = true } = {}) {
  const out = [];
  if (income && b.owner !== NEUTRAL) {
    const total = incomeOf(b, game);
    const base = RULES.income[b.kind] * (b.star ? 1.5 : 1);
    const extra = total - base;
    out.push(tip(`<b class="pos">+${total.toFixed(1)}/s</b>`, `Income: ${b.home ? 'homeworld' : b.kind} ${base.toFixed(1)}${extra > 0.001 ? ` + ${extra.toFixed(1)} from structures and bonuses` : ''} per second`));
  }
  if (seen) {
    const got = coverFrom(game, b);
    const gives = game.bodies.filter((x) => x !== b && coverFrom(game, x).some((c) => c.from === b));
    // Guns: its own, plus cover from the rest of the family, in one chip.
    const own = Math.ceil(b.guns);
    const cover = got.reduce((n, c) => n + c.n, 0);
    const detail = [`${own} gun${own === 1 ? '' : 's'} here`];
    for (const c of got) detail.push(`+${c.n.toFixed(1)} from ${c.from.name}`);
    if (gives.length) detail.push(`these guns also help defend ${gives.map((x) => x.name).join(', ')} (${b.parent === null ? 'half' : 'quarter'} strength)`);
    if (b.owner !== NEUTRAL || own) out.push(tip(`${icon('guns')} ${own}${cover ? ` <span class="pos">+${cover.toFixed(1)}</span>` : ''}`, detail.join(' · ')));
  }
  if (b.perk) {
    const P = PERKS[b.perk];
    let inside = '';
    if (P.range && b.perk === 'relay') inside = ' (dashed ring)';
    else if (P.range) {
      const c = posAt(game, b, game.time);
      const mine = game.bodies.filter((x) => x.owner === me && x !== b && dist(posAt(game, x, game.time), c) <= P.range).map((x) => x.name);
      inside = ` (dashed ring). ${mine.length ? `Yours inside now: ${mine.join(', ')}` : 'None of yours inside now'}`;
    }
    out.push(tip(`${icon(b.perk)} ${P.name}`, `${P.text}${inside}`, 'gold'));
  }
  if (b.wonder) out.push(tip(`${icon(b.wonder)} ${PROJECTS[b.wonder].name}`, PROJECTS[b.wonder].text, 'gold'));
  if (b.project) out.push(tip(`${icon(b.project.key)} ${Math.floor((1 - b.project.left / PROJECTS[b.project.key].time) * 100)}%`, `Building the ${PROJECTS[b.project.key].name}: ${PROJECTS[b.project.key].text}. Take the world and it's yours.`, 'gold'));
  for (const h of game.happenings || []) {
    if (h.at !== b.id) continue;
    const E = EVENTS[h.kind];
    const soon = game.time < h.starts;
    const holding = !soon && h.holder !== NEUTRAL;
    const state = soon ? `starts in ${fmt(h.starts - game.time)}` : holding ? `${h.holder === me ? 'you hold it' : `${nameOf(h.holder)} holds it`}: ${fmt(Math.max(0, E.hold - h.held))} to go` : `gone in ${fmt(Math.max(0, h.ends - game.time))}`;
    out.push(tip(`${icon(h.kind)} ${E.name}`, `${E.text}. Hold it for ${fmt(E.hold)} without a fight. Now: ${state}`, 'gold'));
  }
  return out.length ? `<div class="chips">${out.join('')}</div>` : '';
}
/** What one level of a structure does, for the upgrade breakdown. */
function levelEffect(type, level) {
  const mining = 1 + 0.15 * game.tech[me].industry;
  if (type === 'mine') return `+${(RULES.mineIncome * level * mining).toFixed(1)}/s`;
  if (RULES.structures[type].income) return `+${(RULES.structures[type].income * level).toFixed(1)}/s`;
  if (type === 'defence') return `${RULES.gunsPerDefence * level} guns`;
  if (type === 'bureau') return `${level === 1 ? '2.5' : '4'}× catch`;
  if (type === 'lab') return `+${Math.round(RULES.labSpeed * level * 100)}% research`;
  return '';
}
const ABBR = { bureau: 'Security', shipyard: 'Yard', mine: 'Mine', defence: 'Guns', lab: 'Lab', skimmer: 'Gas rig', exchange: 'Exchange' };
const pct = (v) => `${Math.max(0, Math.min(100, Math.floor(v * 100)))}%`;
function progressOf(x) {
  if (x.scrap) return 1 - x.scrap / RULES.scrapTime;
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
    const left = p !== null && !x.scrap ? `<i class="pips">${fmt(x.left / buildSpeed(game, me, s))}</i>` : pips;
    cells.push(`<button class="cell${p === null ? '' : ' busy'}${on}" data-slot="${i}"><b>${ABBR[x.type]}</b>${left}${bar}</button>`);
  }
  let html = `<div class="cells">${cells.join('')}</div>`;

  // Context row for the tapped slot.
  if (ui.slot !== null) {
    const x = s.structures[ui.slot];
    let row = '';
    if (!x) {
      row = ['shipyard', 'mine', 'skimmer', 'exchange', 'defence', 'lab', 'bureau'].map((k) => {
        const why = cantBuild(game, s, k);
        if (why && why !== 'not enough credits') return '';
        const def = RULES.structures[k];
        return `<button class="opt" data-b="${k}" data-hold="${esc(`${def.name}: ${def.desc}`)}" title="${def.name}: ${def.desc}" ${why ? 'disabled' : ''}>${ABBR[k]}<small>${def.cost} · ${fmt(def.time / buildSpeed(game, me, s))}</small></button>`;
      }).join('');
    } else {
      const def = RULES.structures[x.type];
      const p = progressOf(x);
      const state = x.scrap ? `scrapping · ${pct(p)}` : x.next ? `upgrading → ${ROMAN[x.next]} · ${pct(p)}` : x.left > 0 ? `building · ${pct(p)}` : def.maxLevel ? `level ${ROMAN[x.level]}` : 'online';
      const why = cantUpgrade(game, s, x);
      const dwhy = cantDemolish(game, s, x);
      row = `<span class="what" title="${def.desc}">${def.name} · ${state}</span><button class="danger" data-d="${ui.slot}" ${dwhy ? 'disabled' : ''}>Scrap<small>+${demolishFee(x)}</small></button>`;
      // Every level at a glance: what it gives and what it costs to reach.
      if (def.maxLevel) {
        const steps = [];
        for (let k = 1; k <= def.maxLevel; k++) {
          const cost = k === 1 ? def.cost : upgradeCost({ type: x.type, level: k - 1 });
          const cls = k <= x.level ? 'done' : k === x.next ? 'now' : '';
          // The next level is the upgrade button itself.
          const next = k === x.level + 1 && !x.next && (!why || why === 'not enough credits');
          const tag = next ? `button data-u="${ui.slot}" ${why ? 'disabled' : ''}` : 'span';
          const note = k <= x.level ? '✓' : k === x.next ? fmt(x.left / buildSpeed(game, me, s)) : next ? `Upgrade · ${cost} · ${fmt(upgradeTime({ type: x.type, level: k - 1 }) / buildSpeed(game, me, s))}` : cost;
          steps.push(`<${tag} class="lv ${cls}${next ? ' next' : ''}"><b>${ROMAN[k]}</b> ${levelEffect(x.type, k)}<small>${note}</small></${tag.split(' ')[0]}>`);
        }
        row += `<div class="ladder">${steps.join('')}</div>`;

      }
    }
    html += `<div class="ctx">${row}</div>`;
  }

  // Megaprojects: one per world; each kind can only be finished once.
  // Ships: only where a yard can build them.
  const yards = yardsOf(s);
  if (yards) {
    const why = cantOrderShip(game, s);
    // Status above, buttons below in a fixed order: the layout never shifts
    // as ships are ordered, so tapping + Ship repeatedly stays on + Ship.
    // One thin bar per yard (always all of them, so the height is steady).
    const slips = Array.from({ length: yards }, (_, k) => s.slips && s.slips[k] !== undefined ? s.slips[k] : 0);
    const bars = slips.map((p) => `<i class="meter"><i style="width:${pct(p)}"></i></i>`).join('');
    const next = s.queue && s.slips && s.slips.length ? fmt((1 - Math.max(...s.slips)) * shipTime(game, s)) : '';
    html += `<div class="ctx ships"><span class="what">${s.queue ? `Queue <b class="num">${s.queue}</b>` : `${yards} yard${yards === 1 ? '' : 's'} idle`}<span class="bars">${bars}</span><span class="dim">${next}</span></span></div>`
      + `<div class="ctx shipbtns"><button data-b="ship" title="Order a ship (${RULES.ship.time}s per yard)" ${why ? 'disabled' : ''}>+ Ship<small>${RULES.ship.cost} · ${fmt(shipTime(game, s))}</small></button>`
      + `<button data-cancel="1" class="danger" title="Cancel the last queued ship" ${s.queue ? '' : 'disabled'}>${icon('close')}<small>+${Math.round(RULES.ship.cost * RULES.cancelRefund)}</small></button>`
      + `<button class="mini" data-probe="1" ${game.credits[me] < RULES.probe.cost ? 'disabled' : ''} title="Probe: fast one-way flyby that reveals a world">Probe<small>${RULES.probe.cost}</small></button></div>`;
  }
  setHTML($('buildrow'), html);
}
$('buildrow').addEventListener('click', (e) => {
  if (ui.selected === null) return;
  const s = game.bodies[ui.selected];
  const cell = e.target.closest('button[data-slot]');
  if (cell) {
    ui.pick = null;
    const i = Number(cell.dataset.slot);
    ui.slot = ui.slot === i ? null : i;
    updateActions();
    return;
  }
  if (e.target.closest('button[data-probe]')) {
    ui.mode = 'probe'; ui.target = null; ui.slot = null;
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
    if (x && act({ type: 'demolish', b: s.id, i: Number(d.dataset.d) })) toast(`Scrapping ${RULES.structures[x.type].name} at ${s.name}`, ownerColor(me));
    ui.slot = null;
    updateActions();
    return;
  }
  const btn = e.target.closest('button[data-b]');
  if (!btn) return;
  const k = btn.dataset.b;
  // On touch, the first tap on a build option explains it; the second builds.
  if (holdShown) { holdShown = false; return; } // a press-and-hold only explains
  const ok = act(k === 'ship' ? { type: 'ship', b: s.id } : { type: 'build', b: s.id, k });
  if (ok) {
    toast(k === 'ship' ? `Ship ordered at ${s.name}` : `${RULES.structures[k].name} under construction at ${s.name}`, ownerColor(me));
    if (k !== 'ship') ui.slot = null;
  }
  updateActions();
});

// ---- Research --------------------------------------------------------------------

// Research is a hex board: the six branches round a centre hex, and between
// each neighbouring pair a joint tech that needs both at level II.
const HEX_DIRS = [[1, 0], [1, -1], [0, -1], [-1, 0], [-1, 1], [0, 1]];
const JOINT_SHORT = { ansible: 'Signals', targeting: 'Targeting', kinetic: 'Kinetic', torch: 'Torch', hardened: 'Hardened', pdnet: 'PD net' };
function hexBoard() {
  const S = 30;
  const xy = ([q, r]) => [S * 1.5 * q, S * Math.sqrt(3) * (r + q / 2)];
  const hex = (cx, cy, s = S - 2) => Array.from({ length: 6 }, (_, i) => `${(cx + s * Math.cos((Math.PI / 3) * i)).toFixed(1)},${(cy + s * Math.sin((Math.PI / 3) * i)).toFixed(1)}`).join(' ');
  const cells = [];
  BRANCH_RING.forEach((key, i) => {
    const [cx, cy] = xy(HEX_DIRS[i]);
    cells.push({ key, cx, cy, branch: true });
    const a = HEX_DIRS[i], b = HEX_DIRS[(i + 1) % 6];
    const jkey = Object.keys(JOINTS).find((k) => JOINTS[k].needs.includes(key) && JOINTS[k].needs.includes(BRANCH_RING[(i + 1) % 6]));
    const [jx, jy] = xy([a[0] + b[0], a[1] + b[1]]);
    cells.push({ key: jkey, cx: jx, cy: jy });
  });
  const t = game.tech[me];
  const p = t.project;
  const out = [`<title>One project at a time. A joint tech needs both neighbours at II. Research stations speed everything up.</title><polygon points="${hex(0, 0)}" class="hx core"/><text x="0" y="-2" class="hl">R&amp;D</text><text x="0" y="11" class="hs">×${researchSpeed(game, me).toFixed(1)}</text>`];
  for (const c of cells) {
    const lvl = t[c.key] || 0;
    const max = c.branch ? TECH[c.key].cost.length : 1;
    const why = cantResearch(game, me, c.key);
    const state = lvl >= max ? 'done' : p && p.key === c.key ? 'run' : why === 'locked' ? 'locked' : game.credits[me] < nextTech(game, me, c.key).cost ? 'open poor' : 'open';
    const sel = ui.techSel === c.key ? ' sel' : '';
    const pips = c.branch ? Array.from({ length: max }, (_, k) => `<circle cx="${(k - (max - 1) / 2) * 6}" cy="17" r="1.8" class="${k < lvl ? 'on' : ''}"/>`).join('') : '';
    out.push(`<g data-hex="${c.key}" transform="translate(${c.cx.toFixed(1)},${c.cy.toFixed(1)})" class="hexc ${state}${sel}"><polygon points="${hex(0, 0)}" class="hx"/>`
      + (() => { const i = iconBody(c.key); return `<svg x="-8" y="-17" width="16" height="16" viewBox="${i.vb}" class="ic${i.lu ? ' lu' : ''}">${i.body}</svg>`; })()
      + `<text x="0" y="9" class="hl">${c.branch ? TECH[c.key].name : JOINT_SHORT[c.key]}</text>${pips}</g>`);
  }
  // Megaprojects: a row of gold tiles under the board, one per joint tech.
  const megas = Object.keys(PROJECTS).map((key) => {
    const joint = PROJECTS[key].needs;
    const ownerB = game.wonders && game.wonders[key] !== undefined ? game.bodies[game.wonders[key]] : null;
    const building = game.bodies.some((b) => b.owner === me && b.project && b.project.key === key);
    const state = ownerB ? (ownerB.owner === me ? 'done' : 'taken') : building ? 'run' : !t[joint] ? 'locked' : game.credits[me] < PROJECTS[key].cost ? 'poor' : 'open';
    const sel = ui.techSel === `mega:${key}` ? ' sel' : '';
    return `<button data-hex="mega:${key}" class="mtile ${state}${sel}" title="${esc(PROJECTS[key].name)}">${icon(key)}</button>`;
  }).join('');
  return `<svg class="board" viewBox="-124 -114 248 228">${out.join('')}</svg><div class="megarow"><span>Megaprojects</span>${megas}</div>`;
}
function techDetail(key) {
  const t = game.tech[me];
  const p = t.project;
  const joint = JOINTS[key];
  const next = nextTech(game, me, key);
  const why = cantResearch(game, me, key);
  const lvl = t[key] || 0;
  const name = joint ? joint.name : TECH[key].name;
  const done = joint ? (lvl ? [joint.text] : []) : TECH[key].levels.slice(0, lvl).map((n, i) => `${n}: ${TECH[key].text[i]}`);
  let body = done.length ? `<div class="have">${done.map((d) => `<div>${icon('star')} ${d}</div>`).join('')}</div>` : '';
  if (!next) body += '<small class="dim">Complete</small>';
  else if (p && p.key === key) body += `<small>Researching ${next.title} · ${Math.floor((1 - p.left / p.total) * 100)}%</small>`;
  else {
    const needs = joint && why === 'locked' ? `<small class="dim">Needs ${joint.needs.map((k) => `${TECH[k].name} II`).join(' and ')}</small>` : '';
    body += `<div class="nextrow"><span>${joint ? '' : `<b>${next.title}</b>`}<small>${next.text} · ${fmt(next.time / researchSpeed(game, me))}</small>${needs}</span>`
      + `<button data-k="${key}" ${why ? 'disabled' : ''}>Research<small>${next.cost}</small></button></div>`;
  }
  if (joint) {
    const mk = Object.keys(PROJECTS).find((k) => PROJECTS[k].needs === key);
    if (mk) body += `<small class="dim unlocks">Unlocks ${icon(mk)} ${PROJECTS[mk].name}</small>`;
  }
  return `<div class="tdetail"><div class="th">${icon(key)} <b>${name}</b></div>${body}</div>`;
}
/** The megaproject a joint tech unlocks: build it, or watch and speed it up. */
function megaDetail(joint) {
  const key = Object.keys(PROJECTS).find((k) => PROJECTS[k].needs === joint);
  if (!key) return '';
  const P = PROJECTS[key];
  const head = `<div class="mega"><div class="th">${icon(key)} <b>${P.name}</b> ${tip('megaproject', `${P.where === 'giant' ? 'Gas giants only. ' : P.where === 'inner' ? 'Innermost planet only. ' : P.where === 'planet' ? 'Planets only. ' : 'Any world of yours. '}One per world, and only one empire can finish it`, 'dim')}</div><small>${P.text}</small>`;
  const owner = game.wonders && game.wonders[key] !== undefined ? game.bodies[game.wonders[key]] : null;
  if (owner) return `${head}<small>${owner.owner === me ? 'Yours' : `Built by ${nameOf(owner.owner)}`}, at ${owner.name}</small></div>`;
  const mine = game.bodies.find((b) => b.owner === me && b.project && b.project.key === key);
  const rivals = game.bodies.filter((b) => b.owner !== me && b.project && b.project.key === key).length;
  const race = rivals ? `<small class="warn">${rivals} rival${rivals === 1 ? '' : 's'} building it</small>` : '';
  if (mine) {
    return `${head}${race}<div class="nextrow"><span><small>At ${mine.name} · ${fmt(Math.max(0, mine.project.left / researchSpeed(game, me) - Math.min(mine.project.rush || 0, mine.project.left / researchSpeed(game, me) / 2)))} left${mine.project.rush > 0 ? ` · ${tip('rushing', `Twice as fast for ${fmt(mine.project.rush)}`, 'gold')}` : ''}</small><i class="meter"><i style="width:${pct(1 - mine.project.left / P.time)}"></i></i></span>`
      + `<button data-fund="cash" data-fb="${mine.id}" ${game.credits[me] < PROJECT_FUND.credits ? 'disabled' : ''} title="Pay for overtime: work goes twice as fast for ${PROJECT_FUND.cut}s">Rush<small>${PROJECT_FUND.credits}</small></button>`
      + `<button data-fund="ship" data-fb="${mine.id}" ${readyShips(game, mine) < 1 ? 'disabled' : ''} title="Break up a docked ship there for parts and crew: work goes twice as fast for ${PROJECT_FUND.crewCut}s">Rush<small>1 ship</small></button></div></div>`;
  }
  const ready = game.tech[me][joint];
  const sites = game.bodies.filter((b) => b.owner === me && !cantProject(game, b, key));
  return `${head}${race}<div class="nextrow"><span><small>${ready ? (sites.length ? fmt(P.time / researchSpeed(game, me)) : 'No world of yours can take it yet') : `Needs ${JOINTS[joint].name}${game.tech[me][JOINTS[joint].needs[0]] < 2 || game.tech[me][JOINTS[joint].needs[1]] < 2 ? ` (after ${JOINTS[joint].needs.map((k) => `${TECH[k].name} II`).join(' and ')})` : ''}`}</small></span>`
    + `<button data-mega="${key}" ${ready && sites.length ? '' : 'disabled'}>Build<small>${P.cost}</small></button></div></div>`;
}
function renderResearch() {
  const t = game.tech[me];
  const p = t.project;
  // The R&D button sits bottom left, out of the way of the world panels, and
  // shows what's being researched.
  $('rbar').hidden = true;
  $('rnd').hidden = !running || knockedOut || !$('menu').hidden || !$('end').hidden || !$('actions').hidden || !$('peek').hidden || !$('fleet').hidden || !$('research').hidden;
  $('rnd').classList.toggle('idle', !p);
  setHTML($('rndsub'), p ? `${TECH[p.key] ? TECH[p.key].name : JOINTS[p.key].name} · ${fmt(p.left / researchSpeed(game, me))}` : 'idle');
  $('rndbar').style.width = p ? pct(1 - p.left / p.total) : '0%';
  if ($('research').hidden) return;
  $('rstatus').textContent = '';
  if (!ui.techSel) ui.techSel = p ? p.key : BRANCH_RING.find((k) => nextTech(game, me, k)) || 'ansible';
  const sel = ui.techSel;
  setHTML($('rlist'), hexBoard() + (sel.startsWith('mega:') ? `<div class="tdetail">${megaDetail(PROJECTS[sel.slice(5)].needs)}</div>` : techDetail(sel)));
}
$('rlist').addEventListener('click', (e) => {
  const h = e.target.closest('[data-hex]');
  if (h) { ui.techSel = h.dataset.hex; renderResearch(); return; }
  const fd = e.target.closest('button[data-fund]');
  if (fd) { act({ type: 'fund', b: Number(fd.dataset.fb), how: fd.dataset.fund }); renderResearch(); return; }
  const mg = e.target.closest('button[data-mega]');
  if (mg) {
    // Pick the world: the sheet closes and the next tap on one of yours builds it.
    ui.mode = 'project'; ui.projKey = mg.dataset.mega;
    ui.selected = ui.target = null;
    $('research').hidden = true;
    toast(`Tap one of your worlds to build the ${PROJECTS[ui.projKey].name}`, '#c7a6ff', ui.projKey);
    updateActions();
  }
});
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
  const title = techTitle(b.dataset.k, (game.tech[me][b.dataset.k] || 0) + 1);
  if (act({ type: 'research', k: b.dataset.k })) {
    toast(`Researching ${title}`, ownerColor(me));
    $('research').hidden = true;
  }
  renderResearch();
});

$('less').addEventListener('click', () => { ui.count = Math.max(1, ui.count - 1); updateActions(); });

$('more').addEventListener('click', () => { ui.count += 1; updateActions(); });
// Tap the number to send everything ready (again for half, again for one).
$('count').addEventListener('click', () => {
  const s = ui.selected !== null ? game.bodies[ui.selected] : null;
  if (!s) return;
  const all = readyShips(game, s);
  ui.count = ui.count === all ? Math.max(1, Math.ceil(all / 2)) : ui.count === Math.max(1, Math.ceil(all / 2)) && all > 2 ? 1 : all;
  updateActions();
});
// Hold − or + to keep counting.
for (const [id, d] of [['less', -1], ['more', 1]]) {
  let timer = null;
  const stop = () => { clearInterval(timer); timer = null; };
  $(id).addEventListener('pointerdown', () => { stop(); timer = setTimeout(() => { timer = setInterval(() => { ui.count = Math.max(1, ui.count + d); updateActions(); }, 70); }, 350); });
  for (const ev of ['pointerup', 'pointerleave', 'pointercancel']) $(id).addEventListener(ev, stop);
}
$('launch').addEventListener('click', () => {
  if (!ui.mode) { ui.mode = 'launch'; ui.target = null; updateActions(); return; }
  doLaunch();
});
$('dark').addEventListener('click', () => { ui.dark = !ui.dark; updateActions(); });
$('cancel').addEventListener('click', () => { ui.dark = false; ui.mode = null; ui.target = null; updateActions(); });
$('focus').addEventListener('click', () => {
  const id = ui.target ?? ui.selected;
  if (id !== null) view.focus(game, id);
  updateActions();
});

function doLaunch() {
  if (ui.selected === null || ui.target === null) return;
  if (ui.mode === 'probe') {
    // A probe: a fast, one-way flyby that shows the target for a while.
    const t = game.bodies[ui.target];
    if (act({ type: 'probe', b: ui.selected, to: ui.target })) toast(`Probe away to ${t.name}`, ownerColor(me));
    ui.mode = null;
    ui.selected = ui.target = null;
    updateActions();
    return;
  }
  if (ui.count < 1) return;
  act({ type: 'launch', b: ui.selected, to: ui.target, n: ui.count, dark: ui.dark });
  ui.dark = false; // a one-off choice: the next launch starts lit
  ui.mode = null;
  ui.selected = ui.target = null;
  updateActions();
}

// Touch or mouse, from the last press: touch builds take a second tap.
let touchInput = matchMedia('(pointer: coarse)').matches;
window.addEventListener('pointerdown', (e) => { touchInput = e.pointerType !== 'mouse'; }, true);
// Tooltips: one floating box for every [data-tip] (hover with a mouse, tap on touch).
const tipBox = document.createElement('div');
tipBox.id = 'tipbox';
tipBox.hidden = true;
document.body.appendChild(tipBox);
let tipFor = null;
function showTip(el, text = el.dataset.tip) {
  tipFor = el;
  tipBox.textContent = text;
  tipBox.hidden = false;
  const r = el.getBoundingClientRect();
  const w = Math.min(280, window.innerWidth - 24);
  tipBox.style.maxWidth = `${w}px`;
  const bw = tipBox.offsetWidth, bh = tipBox.offsetHeight;
  const x = Math.max(12, Math.min(window.innerWidth - bw - 12, r.left + r.width / 2 - bw / 2));
  const above = r.top - bh - 8;
  tipBox.style.left = `${x}px`;
  tipBox.style.top = `${above > 8 ? above : r.bottom + 8}px`;
}
function hideTip() { tipFor = null; tipBox.hidden = true; }
document.addEventListener('mouseover', (e) => { const el = e.target.closest?.('[data-tip]'); if (el && !touchInput) showTip(el); });
document.addEventListener('mouseout', (e) => { const el = e.target.closest?.('[data-tip]'); if (el && el === tipFor && !touchInput) hideTip(); });
document.addEventListener('click', (e) => {
  if (holdShown) return; // releasing a press-and-hold: keep its tip up
  const el = e.target.closest?.('[data-tip]');
  if (el && touchInput) { if (tipFor === el) hideTip(); else showTip(el); return; }
  if (!el) hideTip();
}, true);
// Press and hold anything with data-hold (build options) to read what it does.
let holdTimer = null;
let holdShown = false;
document.addEventListener('pointerdown', (e) => {
  const el = e.target.closest?.('[data-hold]');
  clearTimeout(holdTimer);
  holdShown = false;
  if (!el || e.pointerType === 'mouse') return;
  holdTimer = setTimeout(() => { holdShown = true; showTip(el, el.dataset.hold); }, 450);
}, true);
for (const ev of ['pointerup', 'pointercancel', 'pointermove']) document.addEventListener(ev, (e) => { if (ev !== 'pointermove' || Math.hypot(e.movementX || 0, e.movementY || 0) > 6) clearTimeout(holdTimer); }, true);
let toastTimer = 0;
// Notifications: a small stack in the top corner; each fades after a while.
// The world an event happened at, set while turning sim events into notes:
// tapping the note flies the camera there.
let toastAt = null;
function toast(text, color, ic = null) {
  const feed = $('feed');
  const el = document.createElement('div');
  el.className = 'note';
  if (toastAt !== null && game && game.bodies[toastAt]) {
    const at = toastAt;
    el.classList.add('go');
    el.addEventListener('click', () => { view.focus(game, at); ui.mode = null; ui.fleet = null; ui.selected = game.bodies[at].owner === me ? at : null; ui.peek = at; updateActions(); });
  }
  el.style.setProperty('--c', color);
  el.textContent = text;
  if (ic) el.insertAdjacentHTML('afterbegin', `${icon(ic)} `);
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
    toastAt = e.at ?? e.to ?? e.from ?? null;
    const c = ownerColor(e.owner);
    switch (e.type) {
      case 'launch':
        if (e.owner === me) {
          const f = game.fleets.find((x) => x.id === e.fleet);
          toast(`${tf(e.name)} · ${e.n} ship${e.n === 1 ? '' : 's'} → ${nm(e.to)}${f ? ` · ${fmt(f.T)}` : ''}${f && f.assist !== undefined ? ` · assist via ${nm(f.assist)}` : ''}`, mine);
          break;
        }
        if (!vis || vis.intel < 1 || !vis.bodies.has(e.from)) break;
        { const f = game.fleets.find((x) => x.id === e.fleet); if (f && f.dark && !vis.seesFleet(f)) break; }
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
      case 'event': {
        const E = EVENTS[e.kind];
        if (e.phase === 'soon') toast(game.bodies[e.at].visitor ? `${nm(e.at)} incoming` : `${E.name} at ${nm(e.at)} in 1:00`, '#c7a6ff', e.kind);
        else if (e.phase === 'won') toast(`${e.owner === me ? 'You' : nameOf(e.owner)} secured the ${E.name.toLowerCase()} · ${e.what}`, ownerColor(e.owner), e.kind);
        else toast(`${E.name} at ${nm(e.at)} is gone`, '#858ca6', e.kind);
        break;
      }
      case 'visitor':
        toast(`${e.name} has left the system`, '#858ca6', 'comet');
        break;
      case 'project': {
        const P = PROJECTS[e.key];
        if (e.phase === 'start' && e.owner !== me) toast(`${nameOf(e.owner)} began the ${P.name} at ${nm(e.at)}`, ownerColor(e.owner), e.key);
        if (e.phase === 'done') toast(`${e.owner === me ? 'You' : nameOf(e.owner)} completed the ${P.name}`, ownerColor(e.owner), e.key);
        if (e.phase === 'lost' && e.owner === me) toast(`Beaten to the ${P.name}: half refunded`, '#ff7a4d', e.key);
        break;
      }
      case 'spycaught':
        if (e.owner === me) toast(`Agent caught on ${nm(e.at)} after ${fmt(e.after)}`, '#ff7a4d', 'spy');
        else if (e.by === me) toast(`Security caught a ${nameOf(e.owner)} spy on ${nm(e.at)}`, mine, 'spy');
        break;
      case 'probed':
        if (e.owner === me) toast(`Probe flyby of ${nm(e.at)} · in view for ${Math.round(RULES.probe.scan / 60 * 2) / 2} min`, mine);
        break;
      case 'scrapped':
        if (e.owner === me) toast(`${RULES.structures[e.what].name} scrapped at ${nm(e.at)}`, mine);
        break;
      case 'research':
        if (e.owner === me) toast(`${techTitle(e.key, e.level)} complete`, mine, e.key);
        break;
    }
  }
  toastAt = null;
}

function tap(id, x, y, mouse = false) {
  // Tapping one of your fleets in flight shows where it's going. If a world is
  // under the tap too, the world wins; tap the same spot again for the fleet.
  if (!ui.mode) {
    const f = view.pickFleet(game, x, y, me);
    const again = id !== null && (id === ui.peek || id === ui.selected);
    if (f !== null && (id === null || again) && ui.fleet !== f) {
      ui.selected = ui.target = ui.peek = null;
      ui.fleet = f;
      updateActions();
      return;
    }
  }
  ui.fleet = null;
  // On touch the camera locks onto whatever you tap; a mouse click only
  // selects (the mouse steers the camera itself).
  if (id !== null && !mouse) view.focus(game, id, false);
  if (ui.mode === 'project') {
    const b = id !== null ? game.bodies[id] : null;
    const why = b ? cantProject(game, b, ui.projKey) : 'cancelled';
    if (b && !why) { if (act({ type: 'project', b: id, k: ui.projKey })) toast(`${PROJECTS[ui.projKey].name} begun at ${b.name}`, ownerColor(me), ui.projKey); }
    else toast(why === 'cancelled' ? 'Megaproject cancelled' : `Can't build it there: ${why}`, '#858ca6');
    ui.mode = null;
    updateActions();
    return;
  }
  if (ui.mode === 'launch' || ui.mode === 'probe') {
    // Picking a destination: any other world becomes the target; empty
    // space backs out of launching and deselects.
    if (id === null) { ui.selected = ui.target = null; ui.mode = null; } else ui.target = id !== ui.selected ? id : null;
  } else if (id === null || id === ui.selected) {
    ui.selected = ui.target = null;
  } else if (game.bodies[id].owner === me) {
    ui.selected = id; ui.slot = null; ui.pick = null; ui.target = null;
  } else {
    // Someone else's world (or a neutral): show what's known about it.
    ui.selected = ui.target = null;
    ui.peek = ui.peek === id ? null : id;
    updateActions();
    return;
  }
  ui.peek = null;
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
    gesture = { kind: turn ? 'turn' : 'click', right: e.button === 2, mouse: true, x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY,
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
    if (gesture.kind === 'turn') {
      view.rotateAround(gesture.pivot, -dx * 0.006, -dy * 0.006);
      if (Math.hypot(e.clientX - gesture.x0, e.clientY - gesture.y0) > 5) gesture.moved = true;
    }
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
    // Right-click (no drag) on another world with one of yours selected:
    // straight into launch, with that world as the target.
    if (g.kind === 'turn' && g.right && !g.moved && e.type !== 'pointercancel') {
      const id = view.pick(e.clientX, e.clientY);
      const s = ui.selected !== null ? game.bodies[ui.selected] : null;
      if (id !== null && s && s.owner === me && id !== s.id && s.ships) {
        ui.mode = 'launch'; ui.target = id; ui.fleet = null;
        updateActions();
      }
      return;
    }
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
    if (ui.mode) { ui.mode = null; ui.target = null; } else ui.selected = ui.target = ui.peek = null;
    $('research').hidden = true;
    updateActions();
  } else if (k === 'f') {
    const id = ui.target ?? ui.selected;
    if (id !== null) view.focus(game, id);
  } else if (k === 'h') {
    systemView();
  } else if (k >= '1' && k <= '5' && !net) {
    // Number keys set the time speed: 1 = ½×, 2 = 1×, 3 = 2×, 4 = 4×, 5 = 8×.
    setWarp(WARPS[Number(k) - 1]);
  } else if (k === ' ') {
    e.preventDefault();
    if (!$('pause').hidden) pause();
  } else if (k === 'l' || k === 'enter') {
    // L: launch, then confirm.
    if (ui.selected !== null && !$('launch').disabled) $('launch').click();
  } else if (k === 'd') {
    if (!$('dark').hidden) $('dark').click();
  } else if (k === 'p') {
    const b = document.querySelector('#buildrow button[data-probe]');
    if (b && !b.disabled) b.click();
  } else if (k === 'r') {
    $('rnd').click();
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
  const where = daily ? `Daily ${daily.slice(5).replace('-', '/')} · ${SYSTEMS[game.system].name}` : SYSTEMS[game.system].name;
  return `${where} · ${fmt(game.time)} · ${rivals} rival${rivals === 1 ? '' : 's'}${aiNote}`;
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
  $('rnd').hidden = true;
  ui.selected = ui.target = null;
  updateActions();
  const won = game.winner === me;
  $('end-title').textContent = won ? 'Victory' : 'Defeat';
  $('end-title').style.color = ownerColor(won ? me : game.winner);
  const diffs = [...new Set(aiSeatDiffs)];
  const vs = diffs.length ? ` · ${diffs.map((d) => d[0].toUpperCase() + d.slice(1)).join(' / ')} AI` : '';
  $('end-sub').textContent = (won ? `The system is yours after ${fmt(game.time)}.` : `Your last world fell at ${fmt(game.time)}.`) + vs + ` · ${daily ? 'Daily · ' : ''}${SYSTEMS[game.system].name}`;
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
      if (game.mp && !knockedOut && !game.bodies.some((b) => b.owner === me) && !game.fleets.some((f) => f.owner === me && !f.probe) && game.winner === null) {
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
        setHTML($('clock'), `<b>₵ ${Math.floor(game.credits[me])}</b> ${tip(`+${income(game, me).toFixed(1)}/s`, incomeBreakdown(), 'inc')} · T+${fmt(game.time)}`);
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
