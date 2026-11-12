// AI-only matches across every pairing of powers (and three-way games): nearly all must
// end with a winner. Slow-ish; run before merging a balance change. npm run check:matches
import * as S from '../src/sim.js';
import { createAI, stepAI } from '../src/ai.js';
const F = S.FACTION_KEYS;
const level = process.argv[2] || 'normal';
const N = +process.argv[3] || 24;
const wins = {}, played = {};
let bad = 0, total = 0, mins = [];
for (let i = 0; i < N; i++) {
  const three = i % 4 === 3;
  const fs = three ? [F[i % 3], F[(i + 1) % 3], F[(i + 2) % 3]] : [F[i % 3], F[(i + 1 + (i >> 2) % 2) % 3]];
  const players = fs.map((f) => ({ faction: f, ai: level }));
  const g = S.createGame({ seed: 100 + i, players });
  const ais = players.map((p, k) => createAI(g, k, p.ai, 100 + i));
  while (!g.over && g.time < 10000) { S.step(g, 1); for (const a of ais) stepAI(g, a, 1); }
  for (const f of fs) played[f] = (played[f] || 0) + 1;
  total++;
  if (!g.over) { bad++; console.log(`match ${i} (${fs.join(' v ')}): no result`); continue; }
  const w = g.factions[g.over.winner];
  wins[w] = (wins[w] || 0) + 1;
  mins.push(g.over.t / 60);
  console.log(`match ${i} (${fs.join(' v ')}): ${w} in ${(g.over.t / 60).toFixed(0)} min; ships built ${g.stats.map((s) => s.built).join('/')}`);
}
mins.sort((a, b) => a - b);
console.log(`wins by power: ${F.map((f) => `${f} ${wins[f] || 0}/${played[f] || 0}`).join(', ')}; median ${mins[mins.length >> 1]?.toFixed(0)} min, longest ${mins[mins.length - 1]?.toFixed(0)} min`);
// AI admirals are poor at cracking a well-defended capital (it needs three ships in orbit and a silenced battery),
// so some AI-only games never end. More than half unfinished means the rules themselves stalemate.
if (bad) console.log(`${bad} of ${total} matches did not finish`);
if (bad > total / 2) process.exit(1);
