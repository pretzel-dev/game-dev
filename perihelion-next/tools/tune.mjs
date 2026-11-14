// Balance experiments: play AI-only matches under a named variation of the rules and report who wins.
//   node tools/tune.mjs <variant>[,<variant>...] [matches=48] [level=normal] [procs=4]
// Variants are in tools/variants.mjs. Each match is one child process slice, so all cores are used.
// Output: one JSON line per variant: wins and games per power, unfinished, median minutes.
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { VARIANTS_PROXY as VARIANTS } from './variants.mjs';

const me = fileURLToPath(import.meta.url);
if (process.argv[2] === '--slice') {
  const [, , , name, K, M, N, level] = process.argv;
  const S = await import('../src/sim.js'); const A = await import('../src/ai.js');
  const v = VARIANTS[name]; if (!v) throw new Error(`no variant ${name}`);
  v(S, A);
  const F = S.FACTION_KEYS, out = [];
  const lv = level.split('/'); // "hard/easy": seat 0 is hard, the rest easy
  for (let i = 0; i < +N; i++) {
    if (i % +M !== +K) continue;
    const three = i % 4 === 3;
    const fs = three ? [F[i % 3], F[(i + 1) % 3], F[(i + 2) % 3]] : [F[i % 3], F[(i + 1 + (i >> 2) % 2) % 3]];
    const players = fs.map((f, k) => ({ faction: f, ai: lv[Math.min(k, lv.length - 1)] }));
    const g = S.createGame({ seed: 100 + i, players });
    const ais = players.map((p, k) => A.createAI(g, k, p.ai, 100 + i));
    while (!g.over && g.time < 9000) { S.step(g, 1); for (const a of ais) A.stepAI(g, a, 1); }
    out.push({ i, fs, win: g.over ? g.over.winner : -1, t: g.over ? g.over.t : g.time, worlds: fs.map((_, o) => g.bodies.filter((b) => b.owner === o).length), built: g.stats.map((s) => s.built), mid: (g.series || []).filter((p) => p.t <= 1800).slice(-1)[0] || null });
  }
  console.log(JSON.stringify(out));
  process.exit(0);
}
const names = (process.argv[2] || 'base').split(','), N = +process.argv[3] || 48, level = process.argv[4] || 'normal', P = +process.argv[5] || 4;
for (const name of names) {
  const parts = await Promise.all(Array.from({ length: P }, (_, k) => new Promise((res, rej) => {
    const c = spawn(process.execPath, [me, '--slice', name, k, P, N, level]); let buf = '', err = '';
    c.stdout.on('data', (d) => { buf += d; }); c.stderr.on('data', (d) => { err += d; });
    c.on('close', (code) => (code ? rej(new Error(err.slice(0, 400))) : res(JSON.parse(buf))));
  })));
  const games = parts.flat(), wins = {}, played = {}, seat0 = { win: 0, n: 0 }, mid = {}, midN = {};
  for (const g of games) {
    g.fs.forEach((f, o) => {
      played[f] = (played[f] || 0) + 1;
      if (g.mid) { mid[f] = (mid[f] || 0) + g.mid.inc[o]; midN[f] = (midN[f] || 0) + 1; }
    });
    if (g.win >= 0) { wins[g.fs[g.win]] = (wins[g.fs[g.win]] || 0) + 1; if (g.win === 0) seat0.win++; }
    seat0.n++;
  }
  const done = games.filter((g) => g.win >= 0), mins = done.map((g) => g.t / 60).sort((a, b) => a - b);
  const rate = (f) => +(((wins[f] || 0) / (played[f] || 1)) * 100).toFixed(0);
  const fk = ['concord', 'boreal', 'holds'];
  console.log(JSON.stringify({ variant: name, level, matches: games.length, unfinished: games.length - done.length, winPct: Object.fromEntries(fk.map((f) => [f, rate(f)])), spread: Math.max(...fk.map(rate)) - Math.min(...fk.map(rate)), wins, seat0WinPct: +((seat0.win / seat0.n) * 100).toFixed(0), medianMin: +(mins[mins.length >> 1] || 0).toFixed(0), incomeAt30min: Object.fromEntries(fk.map((f) => [f, +((mid[f] || 0) / (midN[f] || 1)).toFixed(1)])) }));
}
