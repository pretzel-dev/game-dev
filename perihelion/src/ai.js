import { NEUTRAL, RULES, income, launch, plan, has, buildStructure, cantBuild, orderShip, cantOrderShip, upgrade, cantUpgrade, upgradeCost, coverOf, visibility, fleetState, research, cantResearch, nextTech, TECH, VET_BONUS, vetLevel, cancelShip, cantDemolish, demolish, launchProbe, cantProbe, dist, posAt, readyShips, present, staysFor } from './sim.js';

// One action per turn, like a player: build up the economy and fleet, then
// pick a target it can take and send enough ships from one site.
// Difficulty: how often it thinks, how much margin it wants before attacking,
// and `skill`, the chance it follows through on each smart move it spots
// (defending, rescuing credits, tech and upgrades). At the ends, `eco` scales
// its income (cadet runs a lean economy, brutal a rich one) and `calm` keeps a
// cadet from attacking anyone for its first few minutes. `smart` (brutal)
// plays better without seeing more: it scouts with probes before attacking
// blind, builds its economy first, prefers hurting rivals over grabbing
// neutrals, and keeps a garrison home.
export const DIFFICULTY = {
  cadet: { think: 14, margin: 2.4, skill: 0.1, eco: 0.6, calm: 420 },
  easy: { think: 9, margin: 1.6, skill: 0.35 },
  normal: { think: 5, margin: 1.6, skill: 0.7 },
  hard: { think: 3, margin: 1.6, skill: 1 },
  brutal: { think: 1.5, margin: 1.6, skill: 1, eco: 1.25, smart: true },
};

export function createAI(owner, difficulty, rand) {
  return { owner, d: DIFFICULTY[difficulty], rand, clock: 5 + rand() * 5, plan: null };
}

export function tickAI(game, ai, dt) {
  if (ai.d.eco && game.winner === null) {
    game.credits[ai.owner] = Math.max(0, game.credits[ai.owner] + income(game, ai.owner) * (ai.d.eco - 1) * dt);
  }
  ai.clock -= dt;
  if (ai.clock > 0 || game.winner !== null) return;
  ai.clock = ai.d.think * (0.7 + ai.rand() * 0.6);

  const mine = game.bodies.filter((b) => b.owner === ai.owner);
  // Same limits as the player: only what its sensors show. Enemy fleets it
  // can see but can't read (no intel) are assumed to be a medium force; their
  // destinations are only known with intel II.
  const vis = visibility(game, ai.owner);
  // A smart AI reads intent from a visible fleet closing on one of its worlds
  // (as a player would), even without the intel to read its route.
  const closing = (f) => {
    if (!ai.d.smart || !vis.sees(fleetState(f, game.time))) return false;
    const t = game.bodies[f.to];
    return t.owner === ai.owner && dist(fleetState(f, game.time), posAt(game, t, game.time)) < 45;
  };
  const known = (f) => f.owner === ai.owner || (vis.intel >= 2 && vis.sees(fleetState(f, game.time))) || closing(f);
  const sizeOf = (f) => (f.owner === ai.owner || vis.intel >= 1 ? f.n : 5);
  const coming = (b, own) => game.fleets.filter((f) => f.to === b.id && (f.owner === ai.owner) === own && known(f)).reduce((n, f) => n + sizeOf(f), 0);
  // Worlds out of sensor range: guess a modest garrison.
  const shipsAt = (t) => (vis.bodies.has(t.id) ? t.ships * (1 + VET_BONUS * vetLevel(t.vet)) : 4);
  const gunsAt = (t) => (vis.bodies.has(t.id) ? t.guns + coverOf(game, t) : 3);
  const will = () => ai.rand() < ai.d.skill;
  const power = (b) => b.ships * (1 + VET_BONUS * vetLevel(b.vet));
  if (defend(game, ai, mine, vis, known, sizeOf, power, will)) return;
  if (economy(game, ai, mine, coming, will)) return;
  if (ai.d.calm && game.time < ai.d.calm) return;

  const smart = ai.d.smart;
  // Smart: never strip the homeworld bare.
  const keep = (s) => (smart && s.home ? 3 : 1);
  const scanned = (t) => (game.scans || []).some((x) => x.owner === ai.owner && x.body === t.id);
  const probing = (t) => game.fleets.some((f) => f.probe && f.owner === ai.owner && f.to === t.id);
  // Smart: scout the nearest world it can't see, one probe at a time.
  if (smart && !game.fleets.some((f) => f.probe && f.owner === ai.owner) && game.credits[ai.owner] > RULES.probe.cost + 150) {
    const yards = mine.filter((s) => has(s, 'shipyard'));
    const d = (t) => Math.min(...yards.map((s) => dist(posAt(game, s, game.time), posAt(game, t, game.time))));
    const blind = game.bodies.filter((t) => t.owner !== ai.owner && !t.visitor && !vis.bodies.has(t.id) && !scanned(t)).sort((a, b) => d(a) - d(b))[0];
    if (blind && yards.length && d(blind) < 120) {
      const near = (s) => dist(posAt(game, s, game.time), posAt(game, blind, game.time));
      launchProbe(game, yards.sort((a, b) => near(a) - near(b))[0], blind);
      return;
    }
  }
  let best = null;
  for (const s of mine) {
    const spare = readyShips(game, s) - Math.ceil(coming(s, false) * 1.2) - keep(s);
    if (spare < 2) continue;
    const vetK = 1 + VET_BONUS * vetLevel(s.vet); // veterans need fewer hulls
    for (const t of game.bodies) {
      if (t.owner === ai.owner || !present(game, t)) continue;
      const { T } = plan(game, s, t);
      if (T > staysFor(game, t) - 10) continue; // a visitor that will be gone first
      // What will be waiting: garrison and guns, plus what it builds meanwhile.
      const growth = t.owner === NEUTRAL || !has(t, 'shipyard') ? 0 : Math.min(t.queue, T / RULES.ship.time);
      const need = Math.ceil(((shipsAt(t) + gunsAt(t) + growth) * ai.d.margin) / vetK) + 1 - coming(t, true);
      if (need < 1 || need > spare) continue;
      let value = t.kind === 'planet' ? 3 : t.kind === 'station' ? 2 : 1;
      // Smart: taking from a rival hurts them twice; homeworlds most of all.
      if (smart && t.owner !== NEUTRAL) value *= t.home ? 2 : 1.5;
      // Special worlds and events are worth going for.
      if (t.perk) value *= 1.5;
      if ((game.happenings || []).some((h) => h.at === t.id)) value *= 2;
      const score = value / (need + T / 30);
      if (!best || score > best.score) best = { s, t, need, score };
    }
  }
  if (best && smart && !vis.bodies.has(best.t.id) && !scanned(best.t)) {
    // Don't attack blind: look first (then plan with what the probe saw).
    const yard = mine.find((s) => !cantProbe(game, s, best.t));
    if (yard && !probing(best.t)) { launchProbe(game, yard, best.t); return; }
    if (probing(best.t)) best = null;
  }
  if (best) { launch(game, best.s, best.t, best.need); return; }

  // Nothing one site can take: gather ships at the site nearest a target, one
  // transfer per turn, then strike with all of them at once.
  const spare = (s) => readyShips(game, s) - Math.ceil(coming(s, false) * 1.2) - keep(s);
  if (ai.plan) {
    const t = game.bodies[ai.plan.target];
    const stage = game.bodies[ai.plan.stage];
    if (t.owner === ai.owner || stage.owner !== ai.owner || game.time > ai.plan.until) {
      ai.plan = null;
    } else if (readyShips(game, stage) >= ai.plan.need) {
      launch(game, stage, t, readyShips(game, stage) - 1);
      ai.plan = null;
      return;
    } else {
      const src = mine.filter((s) => s !== stage && spare(s) >= 2 && !game.fleets.some((f) => f.from === s.id && f.to === stage.id))
        .sort((a, b) => plan(game, a, stage).T - plan(game, b, stage).T)[0];
      if (src) launch(game, src, stage, spare(src));
      return;
    }
  }
  const total = mine.reduce((n, s) => n + Math.max(0, spare(s)), 0);
  let target = null;
  let need = Infinity;
  for (const t of game.bodies) {
    if (t.owner === ai.owner || t.visitor) continue;
    const n = Math.ceil((Math.max(shipsAt(t), 6) + gunsAt(t)) * ai.d.margin) + 2;
    if (n <= total && n < need) { target = t; need = n; }
  }
  if (target && mine.length > 1) {
    const stage = mine.slice().sort((a, b) => plan(game, a, target).T - plan(game, b, target).T)[0];
    ai.plan = { target: target.id, stage: stage.id, need, until: game.time + 900 };
  }
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
      .map((s) => ({ s, T: plan(game, s, b).T }))
      .filter((x) => x.T < eta - 5)
      .sort((x, y) => x.T - y.T);
    const src = help.find((x) => readyShips(game, x.s) - 1 >= gap) || help[0];
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
    if (!threatened(rock) && will()) return true;
  }
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
    if (credits < upgradeCost(nextMine[1])) return true;
  }
  for (const b of mine) {
    for (const x of b.structures) {
      if (cantUpgrade(game, b, x)) continue;
      if ((x.type === 'mine' || x.type === 'skimmer' || x.type === 'exchange') && credits >= upgradeCost(x) && will()) return upgrade(game, b, x);
      if (x.type === 'lab' && game.tech[ai.owner].project && credits > upgradeCost(x) + 300 && will()) return upgrade(game, b, x);
      if (x.type === 'defence' && threatened(b) && will()) return upgrade(game, b, x);
    }
  }
  // 2c. Research, in a sensible order, when it can afford it and still build.
  const order = smart ? ['industry', 'sensors', 'intel', 'drives', 'weapons', 'armour', 'industry', 'drives', 'weapons', 'armour', 'sensors', 'intel', 'drives', 'sensors', 'intel'] : ['sensors', 'drives', 'intel', 'industry', 'weapons', 'armour', 'drives', 'sensors', 'weapons', 'armour', 'industry', 'intel', 'drives', 'sensors', 'intel'];
  const key = order.find((k) => nextTech(game, ai.owner, k));
  if (key && !cantResearch(game, ai.owner, key) && credits > nextTech(game, ai.owner, key).cost + RULES.ship.cost) {
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
  // 3. A second shipyard, on the planet with the most room.
  const yards = mine.filter((b) => b.structures.some((x) => x.type === 'shipyard'));
  if (yards.length < 2 && ai.rand() < 0.5) {
    const site = mine.filter((b) => b.kind === 'planet' && free(b, 'shipyard')).sort((a, b) => b.size - a.size)[0];
    if (site) return buildStructure(game, site, 'shipyard');
  }
  // 4. Ships: keep every yard busy, but leave credits for the rest now and then.
  const yard = mine.filter((b) => !cantOrderShip(game, b) && b.queue < 3).sort((a, b) => a.queue - b.queue)[0];
  if (yard && ai.rand() < 0.8) return orderShip(game, yard);
  // 5. More guns at home once things are running.
  const home = mine.find((b) => b.home) || mine[0];
  if (home && game.credits[ai.owner] > 600 && free(home, 'defence') && home.structures.filter((x) => x.type === 'defence').length < 2) return buildStructure(game, home, 'defence');
  return false;
}
