import { NEUTRAL, RULES, launch, plan, has, buildStructure, cantBuild, orderShip, cantOrderShip } from './sim.js';

// One action per turn, like a player: build up the economy and fleet, then
// pick a target it can take and send enough ships from one site.
export const DIFFICULTY = {
  easy: { think: 8, margin: 1.8 },
  normal: { think: 5, margin: 1.5 },
  hard: { think: 3, margin: 1.3 },
};

export function createAI(owner, difficulty, rand) {
  return { owner, d: DIFFICULTY[difficulty], rand, clock: 5 + rand() * 5, plan: null };
}

export function tickAI(game, ai, dt) {
  ai.clock -= dt;
  if (ai.clock > 0 || game.winner !== null) return;
  ai.clock = ai.d.think * (0.7 + ai.rand() * 0.6);

  const mine = game.bodies.filter((b) => b.owner === ai.owner);
  if (economy(game, ai, mine)) return;
  const coming = (b, own) => game.fleets.filter((f) => f.to === b.id && (f.owner === ai.owner) === own).reduce((n, f) => n + f.n, 0);

  let best = null;
  for (const s of mine) {
    const spare = s.ships - Math.ceil(coming(s, false) * 1.2) - 1;
    if (spare < 2) continue;
    for (const t of game.bodies) {
      if (t.owner === ai.owner) continue;
      const { T } = plan(game, s, t);
      // What will be waiting: garrison and guns, plus what it builds meanwhile.
      const growth = t.owner === NEUTRAL || !has(t, 'shipyard') ? 0 : Math.min(t.queue, T / RULES.ship.time);
      const need = Math.ceil((t.ships + t.guns + growth) * ai.d.margin) + 1 - coming(t, true);
      if (need < 1 || need > spare) continue;
      const value = t.kind === 'planet' ? 3 : t.kind === 'station' ? 2 : 1;
      const score = value / (need + T / 30);
      if (!best || score > best.score) best = { s, t, need, score };
    }
  }
  if (best) { launch(game, best.s, best.t, best.need); return; }

  // Nothing one site can take: gather ships at the site nearest a target, one
  // transfer per turn, then strike with all of them at once.
  const spare = (s) => s.ships - Math.ceil(coming(s, false) * 1.2) - 1;
  if (ai.plan) {
    const t = game.bodies[ai.plan.target];
    const stage = game.bodies[ai.plan.stage];
    if (t.owner === ai.owner || stage.owner !== ai.owner || game.time > ai.plan.until) {
      ai.plan = null;
    } else if (stage.ships >= ai.plan.need) {
      launch(game, stage, t, stage.ships - 1);
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
    if (t.owner === ai.owner) continue;
    const n = Math.ceil((Math.max(t.ships, 6) + t.guns) * ai.d.margin) + 2;
    if (n <= total && n < need) { target = t; need = n; }
  }
  if (target && mine.length > 1) {
    const stage = mine.slice().sort((a, b) => plan(game, a, target).T - plan(game, b, target).T)[0];
    ai.plan = { target: target.id, stage: stage.id, need, until: game.time + 900 };
  }
}

/** One economic action if there's something worth doing; returns true if it acted. */
function economy(game, ai, mine) {
  const threatened = (b) => game.fleets.some((f) => f.to === b.id && f.owner !== ai.owner) || b.sieges.length;
  const free = (b, type) => !cantBuild(game, b, type);
  // 1. Guns for a world about to be hit.
  const hit = mine.find((b) => threatened(b) && free(b, 'defence') && b.structures.filter((x) => x.type === 'defence').length < 2);
  if (hit) return buildStructure(game, hit, 'defence');
  // 2. Mines on every moon and asteroid we hold.
  const rock = mine.find((b) => (b.kind === 'asteroid' || b.kind === 'moon') && !b.structures.some((x) => x.type === 'mine') && free(b, 'mine'));
  if (rock) return buildStructure(game, rock, 'mine');
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
  if (home && game.credits[ai.owner] > 150 && free(home, 'defence')) return buildStructure(game, home, 'defence');
  return false;
}
