import { NEUTRAL, RULES, income, launch, plan, has, buildStructure, cantBuild, orderShip, cantOrderShip, upgrade, cantUpgrade, upgradeCost, coverOf, visibility, fleetState, research, cantResearch, nextTech, TECH, VET_BONUS, vetLevel, cancelShip, cantDemolish, demolish, launchProbe, cantProbe, dist, posAt, readyShips, present, staysFor, firepowerOf, damageTaken, maxGuns, fortressGuns, cantProject, startProject, fundProject, attackPowerOf, cantSpy, plantSpy } from './sim.js';

// The AI plays like a player with the same information: it sees only what its
// sensors show (plus what anyone can read off the map: neutral worlds keep no
// ships, and their guns follow a pattern). Each "think" it can defend, attack
// and build; better levels think more often, take more actions per think,
// judge battles more tightly and play more cleverly.
//
//   think   seconds between thinks
//   acts    attack and build actions per think
//   margin  ships sent = exact need × margin + extra (exact need from a replay
//           of the battle rules). Weak levels cut it fine and lose fights
//           they shouldn't; strong ones send enough to be sure.
//   skill   chance it follows through on each smart move it spots
//   eco     income multiplier (the ends of the ladder only)
//   calm    seconds before it attacks another player (it still expands)
//   smart   scouts with probes, reads fleets closing on its worlds, keeps a
//           home garrison, goes after rivals' worlds, gathers big strikes
export const DIFFICULTY = {
  cadet: { think: 14, acts: 1, margin: 0.85, extra: 0, seenExtra: 0, skill: 0.1, eco: 0.5, calm: 480 },
  easy: { think: 8, acts: 1, margin: 1, extra: 1, seenExtra: 0, skill: 0.35, eco: 0.7, calm: 240 },
  normal: { think: 4, acts: 2, margin: 1.2, extra: 1, seenExtra: 1, skill: 0.7 },
  hard: { think: 2, acts: 3, margin: 1.3, extra: 1, seenExtra: 1, skill: 0.95, eco: 1.4, smart: true },
  brutal: { think: 0.8, acts: 5, margin: 1.4, extra: 2, seenExtra: 1, skill: 1, eco: 2.1, smart: true },
};

export function createAI(owner, difficulty, rand) {
  return { owner, d: DIFFICULTY[difficulty], rand, clock: 2 + rand() * 3, plan: null };
}

/**
 * Fewest ships that take world t (a replay of the battle rules: both sides
 * fire each half second until one is gone). `def` overrides what's there
 * ({ ships, vet, guns, cover }); by default the world as it is.
 */
export function shipsToTake(game, owner, t, vet = 0, _known = true, def = null) {
  const d = def || { ships: t.ships, vet: t.vet, guns: t.guns, cover: coverOf(game, t) };
  const aFp = attackPowerOf(game, owner) * (1 + VET_BONUS * vetLevel(vet));
  const aDmg = damageTaken(game, owner);
  const defOwner = t.owner;
  const dFp = defOwner === NEUTRAL ? 1 : firepowerOf(game, defOwner);
  const dDmg = defOwner === NEUTRAL ? 1 : damageTaken(game, defOwner);
  const dVet = 1 + VET_BONUS * vetLevel(d.vet);
  const wins = (n) => {
    let a = n, aD = 0, s = d.ships, g = d.guns, bD = 0;
    for (let k = 0; k < 1200; k++) {
      aD += RULES.fire * (s * dVet + g + d.cover) * dFp * aDmg * 0.5;
      bD += RULES.fire * a * aFp * dDmg * 0.5;
      while (bD >= 1 && s + g > 0) { bD -= 1; if (s > 0) s -= 1; else g = Math.max(0, g - 1); }
      while (aD >= 1 && a > 0) { aD -= 1; a -= 1; }
      if (a <= 0) return false;
      if (s + g <= 0) return true;
    }
    return false;
  };
  let lo = 1, hi = 1;
  while (!wins(hi)) { hi *= 2; if (hi > 256) return Infinity; }
  while (lo < hi) { const m = (lo + hi) >> 1; if (wins(m)) hi = m; else lo = m + 1; }
  return hi;
}

export function tickAI(game, ai, dt) {
  if (ai.d.eco && game.winner === null) {
    game.credits[ai.owner] = Math.max(0, game.credits[ai.owner] + income(game, ai.owner) * (ai.d.eco - 1) * dt);
  }
  ai.clock -= dt;
  if (ai.clock > 0 || game.winner !== null) return;
  ai.clock = ai.d.think * (0.8 + ai.rand() * 0.4);

  const vis = visibility(game, ai.owner);
  // A smart AI reads intent from a visible fleet closing on one of its worlds
  // (as a player would), even without the intel to read its route.
  // Any level can see a fleet closing on its world (a player can); the
  // weaker ones just don't always react.
  const closing = (f) => {
    if (!vis.seesFleet(f)) return false;
    const t = game.bodies[f.to];
    return t.owner === ai.owner && dist(fleetState(f, game.time), posAt(game, t, game.time)) < 60;
  };
  const known = (f) => f.owner === ai.owner || (vis.intel >= 2 && vis.seesFleet(f)) || closing(f);
  const sizeOf = (f) => (f.owner === ai.owner || vis.intel >= 1 ? f.n : 5);
  const coming = (b, own) => game.fleets.filter((f) => !f.probe && f.to === b.id && (f.owner === ai.owner) === own && known(f)).reduce((n, f) => n + sizeOf(f), 0);
  const will = () => ai.rand() < ai.d.skill;
  const power = (b) => b.ships * (1 + VET_BONUS * vetLevel(b.vet));
  // Routes and battle estimates are reused within one think.
  const routes = new Map();
  const route = (s, t) => { const k = s.id * 1000 + t.id; if (!routes.has(k)) routes.set(k, plan(game, s, t, game.time, 1, true).T); return routes.get(k); };
  const ctx = { vis, known, sizeOf, coming, will, power, route };

  defend(game, ai, game.bodies.filter((b) => b.owner === ai.owner), vis, known, sizeOf, power, will);
  for (let i = 0; i < ai.d.acts; i++) if (!attack(game, ai, ctx)) break;
  for (let i = 0; i < ai.d.acts; i++) {
    const r = economy(game, ai, game.bodies.filter((b) => b.owner === ai.owner), coming, will);
    if (!r || r === 'save') break;
  }
}

/** What the AI believes defends t: exact if in sensor range, else a guess. */
function believed(game, ai, vis, t) {
  if (vis.bodies.has(t.id)) return { ships: t.ships, vet: t.vet, guns: t.guns, cover: coverOf(game, t) };
  if (t.owner === NEUTRAL) {
    // Neutral garrisons are public knowledge: no ships, a few guns.
    const guns = t.perk === 'fortress' ? 6 : t.giant ? 5 : t.kind === 'planet' ? 2 : 2;
    return { ships: 0, vet: 0, guns, cover: 0 };
  }
  return { ships: 6, vet: 1, guns: 3, cover: 1 };
}

/** One attack (or a step toward one); returns true if it acted. */
function attack(game, ai, { vis, coming, route }) {
  const mine = game.bodies.filter((b) => b.owner === ai.owner);
  const smart = ai.d.smart;
  const calm = ai.d.calm && game.time < ai.d.calm;
  // A home garrison once the opening's over (the first minutes are for expanding).
  const keep = (s) => (s.home && game.time > 900 ? 2 : 1);
  const spare = (s) => readyShips(game, s) - Math.ceil(coming(s, false) * 1.2) - keep(s);
  const scanned = (t) => (game.scans || []).some((x) => x.owner === ai.owner && x.body === t.id);
  const probing = (t) => game.fleets.some((f) => f.probe && f.owner === ai.owner && f.to === t.id);
  const sending = (t) => game.fleets.filter((f) => !f.probe && f.owner === ai.owner && f.to === t.id).reduce((n, f) => n + f.n, 0);
  // Exact need × margin, plus a ship or two for doubt (less when it can see).
  const cost = (need, t) => Math.ceil(need * ai.d.margin) + (vis.bodies.has(t.id) ? ai.d.seenExtra : ai.d.extra);

  // Smart: scout the nearest enemy-held world it can't see, one probe at a time.
  if (smart && !game.fleets.some((f) => f.probe && f.owner === ai.owner) && game.credits[ai.owner] > RULES.probe.cost + 200) {
    const yards = mine.filter((s) => has(s, 'shipyard'));
    const d = (t) => Math.min(...yards.map((s) => dist(posAt(game, s, game.time), posAt(game, t, game.time))));
    const blind = game.bodies.filter((t) => t.owner !== ai.owner && t.owner !== NEUTRAL && !t.visitor && !vis.bodies.has(t.id) && !scanned(t)).sort((a, b) => d(a) - d(b))[0];
    if (blind && yards.length && d(blind) < 160 && ai.rand() < 0.5) {
      const near = (s) => dist(posAt(game, s, game.time), posAt(game, blind, game.time));
      if (launchProbe(game, yards.sort((a, b) => near(a) - near(b))[0], blind)) return true;
    }
  }

  let best = null;
  for (const s of mine) {
    const sp = spare(s);
    if (sp < 1) continue;
    for (const t of game.bodies) {
      if (t.owner === ai.owner || !present(game, t)) continue;
      if (calm && t.owner !== NEUTRAL) continue;
      // One strike at a time: small top-ups arrive alone and get picked off.
      if (sending(t) > 0) continue;
      const T = route(s, t);
      if (T > staysFor(game, t) - 10) continue; // a visitor that will be gone first
      const def = believed(game, ai, vis, t);
      // What it builds meanwhile, guns rebuilt by the time we arrive, and
      // enemy ships already on their way there.
      if (t.owner !== NEUTRAL && has(t, 'shipyard')) def.ships += Math.min(t.queue || 1, T / RULES.ship.time);
      if (t.owner !== NEUTRAL) def.guns = Math.max(def.guns, Math.min(maxGuns(t) + fortressGuns(game, t), def.guns + RULES.gunRegen * T));
      def.ships += coming(t, false);
      const need = cost(shipsToTake(game, ai.owner, t, s.vet, true, def), t);
      if (need < 1 || need > sp) continue;
      let value = t.kind === 'planet' ? (t.giant ? 4 : 3) : t.kind === 'station' ? 2 : 1.5;
      // Smart: once the land grab is over, hurting a rival beats a neutral.
      if (smart && t.owner !== NEUTRAL && game.time > 900) value *= t.home ? 1.6 : 1.25;
      if (t.perk) value *= 1.5;
      if ((game.happenings || []).some((h) => h.at === t.id)) value *= 2;
      const score = value / (need + T / 25);
      if (!best || score > best.score) best = { s, t, need, score };
    }
  }
  if (best && smart && best.t.owner !== NEUTRAL && !vis.bodies.has(best.t.id) && !scanned(best.t)) {
    // Don't attack a rival blind: look first.
    if (probing(best.t)) best = null;
    else {
      const yard = mine.find((s) => !cantProbe(game, s, best.t));
      if (yard && launchProbe(game, yard, best.t)) return true;
    }
  }
  if (best) { launch(game, best.s, best.t, best.need); return true; }

  // Nothing one site can take alone: gather ships at the site nearest a
  // target, then strike with all of them at once.
  if (ai.plan) {
    const t = game.bodies[ai.plan.target];
    const stage = game.bodies[ai.plan.stage];
    if (t.owner === ai.owner || stage.owner !== ai.owner || game.time > ai.plan.until) {
      ai.plan = null;
    } else if (readyShips(game, stage) - keep(stage) >= ai.plan.need) {
      launch(game, stage, t, readyShips(game, stage) - keep(stage));
      ai.plan = null;
      return true;
    } else {
      const src = mine.filter((s) => s !== stage && spare(s) >= 1 && !game.fleets.some((f) => f.from === s.id && f.to === stage.id))
        .sort((a, b) => route(a, stage) - route(b, stage))[0];
      if (src) { launch(game, src, stage, spare(src)); return true; }
      return false;
    }
  }
  const total = mine.reduce((n, s) => n + Math.max(0, spare(s)), 0);
  let target = null;
  let need = Infinity;
  for (const t of game.bodies) {
    if (t.owner === ai.owner || t.visitor || (calm && t.owner !== NEUTRAL)) continue;
    const n = cost(shipsToTake(game, ai.owner, t, 0, true, believed(game, ai, vis, t)), t) + 1;
    if (n <= total && n < need) { target = t; need = n; }
  }
  if (target && mine.length > 1) {
    const stage = mine.slice().sort((a, b) => route(a, target) - route(b, target))[0];
    ai.plan = { target: target.id, stage: stage.id, need, until: game.time + 600 };
  }
  return false;
}

/** One economic action if there's something worth doing; returns true if it acted. */
/**
 * Defence, before anything else: reinforce a world that can't hold against a
 * force it can see coming (in time to arrive first), or, if it can't be saved,
 * cancel its ship orders and get the credits back before it falls.
 */
function defend(game, ai, mine, vis, known, sizeOf, power, will) {
  for (const b of mine) {
    const threats = game.fleets.filter((f) => f.to === b.id && f.owner !== ai.owner && known(f));
    if (!threats.length) continue;
    const eta = Math.min(...threats.map((f) => f.t0 + f.T - game.time));
    const enemy = threats.reduce((n, f) => n + sizeOf(f), 0) * 1.2;
    const held = power(b) + b.guns + coverOf(game, b);
    if (held >= enemy) continue;
    const gap = Math.ceil(enemy - held) + 1;
    // Sources that can get there first and still keep a garrison of their own.
    const help = mine.filter((s) => s !== b && readyShips(game, s) >= 3 && !game.fleets.some((f) => f.to === s.id && f.owner !== ai.owner && known(f)))
      .map((s) => ({ s, T: plan(game, s, b, game.time, 1, true).T }))
      .filter((x) => x.T < eta - 5)
      .sort((x, y) => x.T - y.T);
    // A reinforcement too small to hold just dies with the garrison: smart AIs
    // only send one that's enough.
    const src = help.find((x) => readyShips(game, x.s) - 1 >= gap) || (ai.d.smart ? null : help[0]);
    if (src && will()) {
      launch(game, src.s, b, Math.min(readyShips(game, src.s) - 1, gap));
      return true;
    }
    // Lost cause: take the refund on queued ships rather than hand them over.
    if (!src && b.queue > 0 && held * 2 < enemy && will()) {
      while (b.queue > 0) cancelShip(game, b);
      return true;
    }
  }
  return false;
}

function economy(game, ai, mine, coming, will) {
  const smart = ai.d.smart;
  const threatened = (b) => coming(b, false) > 0 || b.sieges.length;
  const free = (b, type) => !cantBuild(game, b, type);
  // 1. Guns for a world about to be hit.
  const hit = mine.find((b) => threatened(b) && free(b, 'defence') && b.structures.filter((x) => x.type === 'defence').length < 2);
  if (hit) return buildStructure(game, hit, 'defence');
  // 2. Mines on every moon and asteroid we hold.
  // Mines pay for themselves: if one is waiting for credits, save up for it
  // rather than spending on ships (a smart player does; weaker AIs don't).
  const rock = mine.find((b) => (b.kind === 'asteroid' || b.kind === 'moon') && !b.structures.some((x) => x.type === 'mine')
    && (free(b, 'mine') || cantBuild(game, b, 'mine') === 'not enough credits'));
  if (rock) {
    if (free(rock, 'mine')) return buildStructure(game, rock, 'mine');
    if (!threatened(rock) && will()) return 'save';
  }
  // 2'. Ships first: every yard keeps at least one in the queue.
  const idle = mine.filter((b) => !cantOrderShip(game, b) && b.queue < 1)[0];
  if (idle) return orderShip(game, idle);
  // 2a. Skimmers on held gas giants, an exchange at home: steady income.
  for (const type of ['exchange', 'skimmer']) {
    const site = mine.find((b) => free(b, type) && !threatened(b) && !b.structures.some((x) => x.type === type));
    if (site && (smart || will())) return buildStructure(game, site, type);
  }
  // 2b. Upgrade mines when there's money to spare; guns where trouble is coming.
  const credits = game.credits[ai.owner];
  // Save for the next mine upgrade too: extra income compounds.
  const nextMine = mine.flatMap((b) => b.structures.filter((x) => x.type === 'mine' && cantUpgrade(game, b, x) === 'not enough credits').map((x) => [b, x]))[0];
  if (nextMine && !threatened(nextMine[0]) && mine.reduce((n, b) => n + b.ships, 0) >= 6 && will()) {
    if (credits < upgradeCost(nextMine[1])) return 'save';
  }
  for (const b of mine) {
    for (const x of b.structures) {
      if (cantUpgrade(game, b, x)) continue;
      if ((x.type === 'mine' || x.type === 'skimmer' || x.type === 'exchange') && credits >= upgradeCost(x) && will()) return upgrade(game, b, x);
      if (x.type === 'lab' && game.tech[ai.owner].project && credits > upgradeCost(x) + 300 && will()) return upgrade(game, b, x);
      if (x.type === 'defence' && threatened(b) && will()) return upgrade(game, b, x);
    }
  }
  // 2e. Megaprojects (smart levels): one at a time, on a safe world, and
  // speeded up with spare cash.
  if (smart) {
    const own = mine.find((b) => b.project);
    if (own && credits > 900 && !threatened(own)) return fundProject(game, own, 'cash');
    if (!own && credits > 1700 && mine.length >= 4) {
      for (const key of ['sundiver', 'ringyard', 'citadel', 'massdriver', 'telescope']) {
        const site = mine.filter((b) => !threatened(b) && !cantProject(game, b, key)).sort((a, b) => (b.home ? 1 : 0) - (a.home ? 1 : 0))[0];
        if (site) return startProject(game, site, key);
      }
    }
  }
  // 2f. Spies (smart levels): one agent at a time on a rival's project or
  // homeworld; a security bureau at home once the empire is big.
  if (smart && credits > 1100 && !(game.spies || []).some((x) => x.owner === ai.owner)) {
    const t = game.bodies.filter((b) => !cantSpy(game, ai.owner, b)).sort((a, b) => (b.project ? 2 : b.home ? 1 : 0) - (a.project ? 2 : a.home ? 1 : 0))[0];
    if (t && will()) return !!plantSpy(game, ai.owner, t);
  }
  const home0 = mine.find((b) => b.home);
  if (smart && home0 && mine.length >= 6 && credits > 1000 && free(home0, 'bureau') && !home0.structures.some((x) => x.type === 'bureau')) return buildStructure(game, home0, 'bureau');
  // 3. More shipyards as the empire grows (one per three worlds).
  const yards = mine.filter((b) => b.structures.some((x) => x.type === 'shipyard'));
  if (yards.length < 1 + Math.floor(mine.length / 3) && will()) {
    const site = mine.filter((b) => b.kind === 'planet' && free(b, 'shipyard')).sort((a, b) => b.size - a.size)[0];
    if (site) return buildStructure(game, site, 'shipyard');
  }
  // 2c. Research, in a sensible order, when it can afford it and still build.
  const order = smart ? ['industry', 'sensors', 'intel', 'drives', 'weapons', 'armour', 'industry', 'drives', 'weapons', 'armour', 'sensors', 'intel', 'drives', 'sensors', 'intel'] : ['sensors', 'drives', 'intel', 'industry', 'weapons', 'armour', 'drives', 'sensors', 'weapons', 'armour', 'industry', 'intel', 'drives', 'sensors', 'intel'];
  // Joint techs once their two branches are at II.
  const joints = ['torch', 'hardened', 'targeting', 'kinetic', 'pdnet', 'ansible'];
  const key = [...order, ...joints].find((k) => nextTech(game, ai.owner, k) && cantResearch(game, ai.owner, k) !== 'locked');
  if (key && !cantResearch(game, ai.owner, key) && credits > nextTech(game, ai.owner, key).cost + RULES.ship.cost * 2 && mine.length >= 3) {
    return research(game, ai.owner, key);
  }
  // 2d. Research stations once things are comfortable: one, then a second.
  const labs = mine.reduce((n, b) => n + b.structures.filter((x) => x.type === 'lab').length, 0);
  if (labs < 2 && credits > 700 + labs * 500 && mine.length > 2 + labs * 2 && will()) {
    const site = mine.find((b) => free(b, 'lab') && b.kind !== 'asteroid');
    if (site) return buildStructure(game, site, 'lab');
    // No room: scrap a spare gun battery at a safe inner world to make some.
    const safe = mine.find((b) => b.kind !== 'asteroid' && !threatened(b)
      && b.structures.filter((x) => x.type === 'defence').length > 1);
    const x = safe && safe.structures.find((y) => y.type === 'defence' && y.level === 1 && !cantDemolish(game, safe, y));
    if (x && credits > 900) return demolish(game, safe, x);
  }
  // 4. Ships: keep every yard busy, but leave credits for the rest now and then.
  const yard = mine.filter((b) => !cantOrderShip(game, b) && b.queue < 3).sort((a, b) => a.queue - b.queue)[0];
  if (yard && (smart || ai.rand() < 0.8)) return orderShip(game, yard);
  // 5. More guns at home once things are running.
  const home = mine.find((b) => b.home) || mine[0];
  if (home && game.credits[ai.owner] > 600 && free(home, 'defence') && home.structures.filter((x) => x.type === 'defence').length < 2) return buildStructure(game, home, 'defence');
  return false;
}
