// Named variations for tools/tune.mjs. Each takes the rules module (S) and the AI module (A) and changes switches or tables.
const oldAI = (A) => { A.AITUNE.generic = false; A.AITUNE.claim = false; A.AITUNE.refit = false; };
export const VARIANTS = {
  // What shipped before this round: per-power tables in the AI.
  old: (S, A) => { oldAI(A); },
  // The generic AI (fleet, research and doctrine worked out from each power's numbers; claimers; refits).
  base: () => {},
  generic_only: (S, A) => { A.AITUNE.claim = false; A.AITUNE.refit = false; },
  no_refit: (S, A) => { A.AITUNE.refit = false; },
  no_claim: (S, A) => { A.AITUNE.claim = false; },
  // Holds ideas.
  holds_corvette: (S) => { S.FACTIONS.holds.start = ['frigate', 'frigate', 'corvette', 'corvette']; },
  holds_moons4: (S) => { S.TUNE.holdsMoons = 4; },
  holds_moons5: (S) => { S.TUNE.holdsMoons = 5; },
  holds_hull85: (S) => { S.FACTIONS.holds.hull = 0.85; },
  holds_cheap85: (S) => { S.FACTIONS.holds.cost = 0.85; },
  holds_income1: (S) => { S.FACTIONS.holds.income = 1; },
  holds_cap2: (S) => { S.FACTIONS.holds.cap = 2; },
  holds_fast: (S) => { S.FACTIONS.holds.time = 0.75; },
  // Same structure more than once; each yard builds its own ship.
  dup: (S) => { S.TUNE.dup = true; },
  // Concord and Republic ideas.
  concord_hull150: (S) => { S.FACTIONS.concord.hull = 1.5; },
  concord_income140: (S) => { S.FACTIONS.concord.income = 1.4; },
  concord_income150: (S) => { S.FACTIONS.concord.income = 1.5; },
  concord_hull125: (S) => { S.FACTIONS.concord.hull = 1.25; },
  concord_income110: (S) => { S.FACTIONS.concord.income = 1.1; },
  concord_cost110: (S) => { S.FACTIONS.concord.cost = 1.1; },
  boreal_hull110: (S) => { S.FACTIONS.boreal.hull = 1.1; },
  boreal_rail145: (S) => { S.FACTIONS.boreal.rail = 1.45; },
  boreal_rail115: (S) => { S.FACTIONS.boreal.rail = 1.15; },
  boreal_accel110: (S) => { S.FACTIONS.boreal.accel = 1.1; },
  boreal_start3: (S) => { S.FACTIONS.boreal.start = ['frigate', 'corvette', 'corvette']; },
  boreal_hull90: (S) => { S.FACTIONS.boreal.hull = 0.9; },
  boreal_cost110: (S) => { S.FACTIONS.boreal.cost = 1.1; },
};
/** Combine variants: "a+b" applies both. */
export const VARIANTS_PROXY = new Proxy(VARIANTS, { get: (t, k) => (typeof k === 'string' && k.includes('+') ? (S, A) => k.split('+').forEach((n) => t[n](S, A)) : t[k]) });
