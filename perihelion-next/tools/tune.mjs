// Balance experiments: AI-only matches under named rule variations (tools/variants.mjs), reported as win shares.
//   node tools/tune.mjs <variant>[,<variant>...] [matches=24] [level=normal] [procs=cores] [horizon=4500]
// Every (variant, match) is one job; a pool of processes, one per core, takes jobs from a single queue, so no core
// waits on a slow slice. A match that has not ended by the horizon (game seconds; 4500 is 75 minutes) is called for
// the side ahead on worlds and fleet. A variant name with "+" applies several.
// Output: one JSON line per variant.
import { spawn } from 'child_process';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import { VARIANTS_PROXY as VARIANTS } from './variants.mjs';

const me = fileURLToPath(import.meta.url);
const F = ['concord', 'boreal', 'holds'];
const setup = (i) => {
  const three = i % 4 === 3;
  return three ? [F[i % 3], F[(i + 1) % 3], F[(i + 2) % 3]] : [F[i % 3], F[(i + 1 + (i >> 2) % 2) % 3]];
};

if (process.argv[2] === '--job') {
  const [, , , name, i, level, horizon] = process.argv;
  const S = await import('../src/sim.js'); const A = await import('../src/ai.js');
  VARIANTS[name](S, A);
  const fs = setup(+i), lv = level.split('/'); // "hard/easy": seat 0 hard, the rest easy
  const players = fs.map((f, k) => ({ faction: f, ai: lv[Math.min(k, lv.length - 1)] }));
  const g = S.createGame({ seed: 100 + +i, players });
  const ais = players.map((p, k) => A.createAI(g, k, p.ai, 100 + +i));
  while (!g.over && g.time < +horizon) { S.step(g, 1); for (const a of ais) A.stepAI(g, a, 1); }
  // Ahead: share of worlds plus share of fleet strength.
  const worlds = fs.map((_, o) => g.bodies.filter((b) => b.owner === o).length);
  const fleet = fs.map((_, o) => g.ships.filter((s) => s.owner === o && !s.st.civil).reduce((v, s) => v + S.strength(s), 0));
  const tw = worlds.reduce((a, b) => a + b, 0) || 1, tf = fleet.reduce((a, b) => a + b, 0) || 1;
  const score = fs.map((_, o) => (g.alive[o] ? worlds[o] / tw + fleet[o] / tf : -1));
  const lead = score.indexOf(Math.max(...score));
  const inc = (g.series || []).filter((p) => p.t <= 1800).slice(-1)[0]?.inc || null;
  console.log(JSON.stringify({ i: +i, fs, win: g.over ? g.over.winner : -1, lead, t: g.over ? g.over.t : g.time, inc }));
  process.exit(0);
}

const names = (process.argv[2] || 'base').split(','), N = +process.argv[3] || 24, level = process.argv[4] || 'normal';
const P = +process.argv[5] || cpus().length, H = +process.argv[6] || 4500;
const jobs = names.flatMap((name) => Array.from({ length: N }, (_, i) => ({ name, i })));
const done = new Map(names.map((n) => [n, []]));
const t0 = Date.now();
await new Promise((resolve) => {
  let running = 0, next = 0;
  const pump = () => {
    if (next >= jobs.length && !running) return resolve();
    while (running < P && next < jobs.length) {
      const j = jobs[next++]; running++;
      const c = spawn(process.execPath, [me, '--job', j.name, j.i, level, H]); let buf = '', err = '';
      c.stdout.on('data', (d) => { buf += d; }); c.stderr.on('data', (d) => { err += d; });
      c.on('close', (code) => {
        running--;
        if (code) console.error(`${j.name} match ${j.i} failed: ${err.slice(0, 300)}`); else done.get(j.name).push(JSON.parse(buf));
        // A variant finished: report it now rather than at the end.
        if (done.get(j.name).length === N) report(j.name);
        pump();
      });
    }
  };
  pump();
});
function report(name) {
  const games = done.get(name), wins = {}, ahead = {}, played = {}, inc = {}, incN = {};
  let seat0 = 0;
  for (const g of games) {
    g.fs.forEach((f, o) => { played[f] = (played[f] || 0) + 1; if (g.inc) { inc[f] = (inc[f] || 0) + g.inc[o]; incN[f] = (incN[f] || 0) + 1; } });
    if (g.win >= 0) wins[g.fs[g.win]] = (wins[g.fs[g.win]] || 0) + 1;
    const top = g.win >= 0 ? g.win : g.lead;
    ahead[g.fs[top]] = (ahead[g.fs[top]] || 0) + 1;
    if (top === 0) seat0++;
  }
  // Share of games each power won or was ahead in at the horizon, against what an even share would be.
  const pct = (f) => Math.round(((ahead[f] || 0) / (played[f] || 1)) * 100);
  const mins = games.filter((g) => g.win >= 0).map((g) => g.t / 60).sort((a, b) => a - b);
  console.log(JSON.stringify({
    variant: name, level, matches: games.length, ended: mins.length, topPct: Object.fromEntries(F.map((f) => [f, pct(f)])),
    spread: Math.max(...F.map(pct)) - Math.min(...F.map(pct)), wins, seat0Pct: Math.round((seat0 / games.length) * 100),
    medianMin: Math.round(mins[mins.length >> 1] || 0), incomeAt30min: Object.fromEntries(F.map((f) => [f, +((inc[f] || 0) / (incN[f] || 1)).toFixed(1)])),
    minutes: +((Date.now() - t0) / 60000).toFixed(1),
  }));
}
