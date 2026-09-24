import { NEUTRAL, RULES, dist, rateOf, capOf, upgradeCost, sendUnits, upgrade } from './sim.js';

export const DIFFICULTY = {
  easy: { think: 2.6, greed: 1.6, upgradeBias: 0.2 },
  normal: { think: 1.5, greed: 1.3, upgradeBias: 0.35 },
  hard: { think: 0.8, greed: 1.15, upgradeBias: 0.45 },
};

export function createAI(owner, difficulty, rand) {
  const d = DIFFICULTY[difficulty];
  return { owner, d, rand, clock: rand() * d.think };
}

/** Units heading to a system, split into friendly and hostile relative to owner. */
function incoming(game, s, owner) {
  let friendly = 0;
  let hostile = 0;
  for (const f of game.fleets) {
    if (f.to !== s.id) continue;
    if (f.owner === owner) friendly += f.units;
    else hostile += f.units;
  }
  for (const g of s.sieges) {
    if (g.owner === owner) friendly += g.units;
    else if (s.owner === owner) hostile += g.units;
  }
  return { friendly, hostile };
}

export function tickAI(game, ai, dt) {
  ai.clock -= dt;
  if (ai.clock > 0 || game.winner !== null) return;
  ai.clock = ai.d.think * (0.7 + ai.rand() * 0.6);

  const mine = game.systems.filter((s) => s.owner === ai.owner);
  const others = game.systems.filter((s) => s.owner !== ai.owner);

  let attacked = false;
  for (const s of mine) {
    const threat = incoming(game, s, ai.owner).hostile;
    const reserve = threat + 3;
    let avail = Math.floor(s.units - reserve);
    if (avail <= 0) continue;

    // Invest when safe, and always rather than sit at a full cap.
    const cost = upgradeCost(s);
    if (cost !== null && avail >= cost && (ai.rand() < ai.d.upgradeBias || s.units >= capOf(s) * 0.9)) {
      if (upgrade(game, s)) continue;
    }

    // Attack the cheapest, closest, most valuable target we can afford.
    let best = null;
    let bestScore = 0;
    let bestNeed = 0;
    for (const t of others) {
      const d = dist(s.pos, t.pos);
      const eta = d / RULES.fleetSpeed;
      const inc = incoming(game, t, ai.owner);
      const grown = t.owner === NEUTRAL ? t.units : Math.min(capOf(t), t.units + rateOf(t) * eta);
      const need = Math.ceil(grown * ai.d.greed) + 2;
      // Already on its way? Leave it; no trickles of reinforcements.
      if (inc.friendly >= need || need > avail) continue;
      const score = (t.level + (t.owner === NEUTRAL ? 0 : 0.5)) / (need + d * 0.4);
      if (score > bestScore) { bestScore = score; best = t; bestNeed = need; }
    }
    if (best) {
      sendUnits(game, s, best, bestNeed);
      attacked = true;
      continue;
    }

    // Nothing to take: move a full star's surplus to our star nearest the enemy.
    if (s.units >= capOf(s) * 0.95 && avail >= 20) {
      let front = null;
      let frontD = Infinity;
      for (const m of mine) {
        const d = Math.min(...others.map((o) => dist(m.pos, o.pos)));
        if (d < frontD) { frontD = d; front = m; }
      }
      if (front && front !== s) sendUnits(game, s, front, avail * 0.6);
    }
  }

  if (!attacked) combinedStrike(game, ai, mine, others);
}

/** When no single star can take anything, several launch together at one target. */
function combinedStrike(game, ai, mine, others) {
  const spare = mine
    .map((s) => ({ s, avail: Math.floor(s.units - incoming(game, s, ai.owner).hostile - 5) }))
    .filter((x) => x.avail > 0);
  const total = spare.reduce((n, x) => n + x.avail, 0);
  let best = null;
  let bestNeed = Infinity;
  for (const t of others) {
    const need = Math.ceil(Math.max(t.units, capOf(t)) * ai.d.greed) + 5;
    if (incoming(game, t, ai.owner).friendly >= need) continue;
    if (need <= total && need < bestNeed) { best = t; bestNeed = need; }
  }
  if (!best) return;
  spare.sort((a, b) => dist(a.s.pos, best.pos) - dist(b.s.pos, best.pos));
  let left = bestNeed;
  for (const x of spare) {
    if (left <= 0) break;
    const n = Math.min(x.avail, left);
    sendUnits(game, x.s, best, n);
    left -= n;
  }
}
