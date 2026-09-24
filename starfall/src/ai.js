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
  return { friendly, hostile };
}

export function tickAI(game, ai, dt) {
  ai.clock -= dt;
  if (ai.clock > 0 || game.winner !== null) return;
  ai.clock = ai.d.think * (0.7 + ai.rand() * 0.6);

  const mine = game.systems.filter((s) => s.owner === ai.owner);
  const others = game.systems.filter((s) => s.owner !== ai.owner);

  for (const s of mine) {
    const threat = incoming(game, s, ai.owner).hostile;
    const reserve = threat + 3;
    let avail = Math.floor(s.units - reserve);
    if (avail <= 0) continue;

    // Invest when safe, and always rather than sit at a full cap.
    const cost = upgradeCost(s);
    if (cost !== null && avail >= cost && (ai.rand() < ai.d.upgradeBias || s.units >= capOf(s) * 0.9)) {
      upgrade(game, s);
      continue;
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
      const need = Math.ceil((grown - inc.friendly) * ai.d.greed) + 2;
      if (need <= 0 || need > avail) continue;
      const score = (t.level + (t.owner === NEUTRAL ? 0 : 0.5)) / (need + d * 0.4);
      if (score > bestScore) { bestScore = score; best = t; bestNeed = need; }
    }
    if (best) {
      sendUnits(game, s, best, bestNeed);
      continue;
    }

    // Nothing to take: move surplus from a full system to the most threatened ally.
    if (s.units >= capOf(s) * 0.95 && mine.length > 1) {
      let target = null;
      let worst = 0;
      for (const m of mine) {
        if (m === s) continue;
        const danger = incoming(game, m, ai.owner).hostile - m.units + 1 / (1 + dist(s.pos, m.pos));
        if (target === null || danger > worst) { worst = danger; target = m; }
      }
      sendUnits(game, s, target, avail * 0.5);
    }
  }
}
