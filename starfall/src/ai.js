import {
  NEUTRAL, TECH, dist, rateOf, capOf, upgradeCost, sendUnits, upgrade, research, nextTier,
  speedOf, visibility, fleetPosition, defenseOf, shipsToBeat,
} from './sim.js';

// The AI plays like a person: one action at a time (a single launch from a
// single star, one upgrade, or one research), then a pause before the next.
// It only knows what its own sensors show.
export const DIFFICULTY = {
  easy: { think: 4, greed: 1.6, upgradeBias: 0.2 },
  normal: { think: 2.5, greed: 1.3, upgradeBias: 0.35 },
  hard: { think: 1.5, greed: 1.15, upgradeBias: 0.45 },
};

// Guess for a fleet whose size we can't read, and for stars we can't see.
const UNKNOWN_FLEET = 25;
const UNKNOWN_STAR = 30;
// Tunable from the settings page.
export const AI_TUNING = {
  minFleet: 15, // never launch less than this (bar a weak neutral in sight)
  thinkScale: 1, // multiplies the pause between actions
};
const PLAN_TIMEOUT = 150;

export function createAI(owner, difficulty, rand) {
  const d = DIFFICULTY[difficulty];
  return { owner, d, rand, clock: 1 + rand() * d.think, plan: null };
}

/** Hostile ships we know are coming at s, and our own ships already heading to it. */
function incoming(game, vis, s, owner) {
  let friendly = 0;
  let hostile = 0;
  for (const f of game.fleets) {
    if (f.to !== s.id) continue;
    if (f.owner === owner) friendly += f.units;
    // Without intel we can see a fleet but not its size or target: assume the worst nearby.
    else if (vis.intel >= 2) hostile += f.units;
    else if (vis.sees(fleetPosition(game, f))) hostile += vis.intel >= 1 ? f.units : UNKNOWN_FLEET;
  }
  for (const g of s.sieges) {
    if (g.owner === owner) friendly += g.units;
    else if (s.owner === owner) hostile += g.units;
  }
  return { friendly, hostile };
}

/** Garrison we expect at t on arrival, from what we can see. */
function expected(game, vis, t, eta) {
  if (!vis.systems.has(t.id)) return UNKNOWN_STAR;
  const n = t.owner === NEUTRAL ? t.units : Math.min(capOf(t), t.units + rateOf(t) * eta);
  return shipsToBeat(n, defenseOf(t));
}

export function tickAI(game, ai, dt) {
  ai.clock -= dt;
  if (ai.clock > 0 || game.winner !== null) return;
  ai.clock = ai.d.think * AI_TUNING.thinkScale * (0.7 + ai.rand() * 0.6);

  const mine = game.systems.filter((s) => s.owner === ai.owner);
  if (!mine.length) return;
  const vis = visibility(game, ai.owner);
  const others = game.systems.filter((s) => s.owner !== ai.owner);
  const speed = speedOf(game, ai.owner);
  const spare = (s) => Math.floor(s.units - incoming(game, vis, s, ai.owner).hostile - 5);

  // 1. Carry on an invasion plan: gather ships at a staging star one launch per
  // turn, then send them all at once. (Under the square law, fleets that
  // arrive one after another are beaten one at a time.)
  if (ai.plan) {
    const t = game.systems[ai.plan.target];
    const stage = game.systems[ai.plan.stage];
    if (t.owner === ai.owner || stage.owner !== ai.owner || game.time > ai.plan.until) {
      ai.plan = null;
    } else if (spare(stage) >= ai.plan.need) {
      sendUnits(game, stage, t, spare(stage));
      ai.plan = null;
      return;
    } else {
      const src = mine
        .filter((s) => s !== stage && spare(s) >= AI_TUNING.minFleet)
        .sort((a, b) => dist(a.pos, stage.pos) - dist(b.pos, stage.pos))[0];
      if (src) { sendUnits(game, src, stage, spare(src)); return; }
    }
  }

  // 2. The best single-star attack.
  let best = null;
  for (const s of mine) {
    const avail = spare(s);
    if (avail <= 0) continue;
    for (const t of others) {
      const d = dist(s.pos, t.pos);
      const guess = expected(game, vis, t, d / speed);
      let need = Math.ceil(guess * ai.d.greed) + 2;
      // A proper fleet, unless it's a weak neutral we can see.
      if (!(t.owner === NEUTRAL && vis.systems.has(t.id))) need = Math.max(need, AI_TUNING.minFleet);
      if (need > avail || incoming(game, vis, t, ai.owner).friendly >= need) continue;
      const known = vis.systems.has(t.id);
      const score = (t.level + (t.owner === NEUTRAL ? 0 : 0.5) + (known ? 0 : -0.3)) / (need + d * 0.4);
      if (!best || score > best.score) best = { s, t, need, score };
    }
  }

  // 3. Build: an upgrade or research, from a star with ships to spare.
  const rich = mine.filter((s) => spare(s) > 0).sort((a, b) => spare(b) - spare(a))[0];
  const tech = game.tech[ai.owner];
  const build = () => {
    if (!rich) return false;
    const avail = spare(rich);
    const cost = upgradeCost(rich);
    const full = rich.units >= capOf(rich) * 0.9;
    if (cost !== null && avail >= cost && !rich.upgrading && (ai.rand() < ai.d.upgradeBias || full)) {
      return upgrade(game, rich);
    }
    if (!tech.research && ai.rand() < ai.d.upgradeBias) {
      // Sensors first, then intel and drives in turn.
      const order = ['sensors', 'intel', 'drives', 'sensors', 'drives'];
      const key = order.find((k) => nextTier(game, ai.owner, k));
      const tier = key && nextTier(game, ai.owner, key);
      if (tier && avail >= tier.cost) return research(game, rich, key);
    }
    return false;
  };

  if (best && (ai.rand() < 0.75 || !build())) {
    sendUnits(game, best.s, best.t, best.need);
    return;
  }
  if (!best && build()) return;
  if (best) return;

  // 4. Nothing one star can take: plan an invasion gathered from several stars.
  const total = mine.reduce((n, s) => n + (spare(s) >= AI_TUNING.minFleet ? spare(s) : 0), 0);
  let target = null;
  let need = Infinity;
  for (const t of others) {
    if (!vis.systems.has(t.id)) continue;
    const n = Math.ceil(shipsToBeat(Math.max(t.units, capOf(t)), defenseOf(t)) * ai.d.greed) + 5;
    if (n <= total && n < need) { target = t; need = n; }
  }
  if (target) {
    const stage = mine.slice().sort((a, b) => dist(a.pos, target.pos) - dist(b.pos, target.pos))[0];
    ai.plan = { target: target.id, stage: stage.id, need, until: game.time + PLAN_TIMEOUT };
    ai.clock = 0.1; // the first launch goes out on the next turn
    return;
  }

  // 5. Move a full star's surplus towards the front.
  const full = mine.find((s) => s.units >= capOf(s) * 0.95 && spare(s) >= 20);
  if (full && mine.length > 1) {
    let front = null;
    let frontD = Infinity;
    for (const m of mine) {
      const d = Math.min(...others.map((o) => dist(m.pos, o.pos)));
      if (d < frontD) { frontD = d; front = m; }
    }
    if (front && front !== full) sendUnits(game, full, front, spare(full) * 0.6);
  }
}

export { TECH };
