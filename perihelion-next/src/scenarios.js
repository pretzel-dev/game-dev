// Scenarios: short, hand-set situations on a fixed system. Each has
//   make()            -> { game, players, look? }
//   state(game, me)   -> { text, clock?, done?: 'win' | 'lose', why? }
// state() is called every frame; it may also give scripted orders to the
// other side (there is no AI admiral in a scenario).
import { createGame, spawnShip, setOrder, shipById, NEUTRAL } from './sim.js';

const give = (b, owner, battery = 0) => {
  b.owner = owner;
  if (battery) { b.structures = b.structures.filter((x) => x.type !== 'battery'); b.structures.push({ type: 'battery', level: battery, left: 0 }); b.bhp = 100 * battery; }
};
const base = (seed, mine = 'concord', theirs = 'holds') => {
  const players = [{ faction: mine, name: 'You' }, { faction: theirs, name: 'Raiders' }];
  const game = createGame({ seed, players, empty: true });
  game.noEvents = true; // nothing turns up to distract from the set piece
  const home = game.homes[0], foe = game.homes[1];
  const moon = game.bodies.find((b) => b.parent === home.id && b.kind === 'moon');
  return { players, game, home, foe, moon };
};
const alive = (game, id) => !!shipById(game, id);
const farWorld = (game, from, owner = NEUTRAL) => game.bodies.filter((b) => b.owner === owner && b.parent === null && b.kind !== 'planet').sort((a, b) => Math.abs(b.r - from.r) - Math.abs(a.r - from.r))[0];

export const SCENARIOS = {
  first: {
    name: 'First command',
    text: 'Tutorial',
    make() {
      const s = base(11);
      spawnShip(s.game, 0, 'frigate', s.home);
      spawnShip(s.game, 0, 'corvette', s.home);
      s.game.credits[0] = 500;
      s.moon.trait = undefined; s.moon.structures = []; s.moon.bhp = 0; // a plain moon to learn on
      s.game.scn = { step: 0, moon: s.moon.id };
      return s;
    },
    state(game, me) {
      const c = game.scn, moon = game.bodies[c.moon], home = game.homes[me];
      if (!home) return { text: 'The capital has fallen.', done: 'lose' };
      const mine = game.ships.filter((s) => s.owner === me && !s.st.civil);
      if (c.step === 0 && mine.some((s) => (s.order && s.order.body === moon.id) || s.at === moon.id)) c.step = 1;
      if (c.step <= 1 && moon.owner === me) c.step = 2;
      if (c.step === 2 && moon.structures.some((x) => x.type === 'mine')) {
        c.step = 3;
        const r = spawnShip(game, 1, 'corvette', game.homes[1]);
        setOrder(game, 1, [r.id], { type: 'orbit', body: moon.id, profile: 'hard' });
        c.raider = r.id;
      }
      if (c.step === 3 && !game.ships.some((s) => s.id === c.raider && s.owner === 1)) c.step = 4;
      if (!mine.length && c.step < 4) return { text: 'Your ships are lost.', done: 'lose' };
      const text = [
        `Tap one of your ships, then tap the moon ${moon.name} and pick a course.`,
        `Stay in orbit until ${moon.name} yields.`,
        `Tap ${moon.name}, then Build, then Mine.`,
        'A raider is coming. Select your ships, tap the raider, then Pass or Match.',
        'Well done.',
      ][c.step];
      return { text, done: c.step === 4 ? 'win' : null, why: 'First command' };
    },
  },
  blockade: {
    name: 'Blockade run',
    text: 'Get a tender past three warships',
    make() {
      const s = base(23, 'boreal', 'concord');
      const post = farWorld(s.game, s.home);
      give(post, 0);
      const t = spawnShip(s.game, 0, 'tender', s.home);
      spawnShip(s.game, 0, 'corvette', s.home);
      spawnShip(s.game, 0, 'corvette', s.home);
      spawnShip(s.game, 1, 'frigate', post);
      spawnShip(s.game, 1, 'frigate', post);
      spawnShip(s.game, 1, 'escort', post);
      s.game.scn = { post: post.id, tender: t.id, limit: 900 };
      return s;
    },
    state(game) {
      const c = game.scn, post = game.bodies[c.post], t = shipById(game, c.tender);
      const clock = c.limit - game.time;
      if (!t) return { text: 'The tender is lost.', done: 'lose', clock };
      if (t.at === post.id) return { text: 'The tender is in.', done: 'win', why: 'Blockade run', clock };
      if (clock <= 0 || post.owner !== 0) return { text: 'The outpost has fallen.', done: 'lose', clock: 0 };
      return { text: `Get the tender ${t.name} into orbit of ${post.name}.`, clock };
    },
  },
  hunt: {
    name: 'Raider hunt',
    text: 'Find the ship taking your freighters',
    make() {
      const s = base(37, 'concord', 'holds');
      for (const b of s.game.bodies) if (b.kind === 'asteroid' || b.parent === s.home.id) give(b, 0);
      for (const b of s.game.bodies) if (b.owner === 0 && !b.home) b.stock = 60 + b.id * 7;
      spawnShip(s.game, 0, 'frigate', s.home);
      spawnShip(s.game, 0, 'corvette', s.home);
      const rock = s.game.bodies.find((b) => b.kind === 'asteroid');
      const r = spawnShip(s.game, 1, 'corvette', rock);
      s.game.scn = { raider: r.id, limit: 1200, lost: 0, seen: 0 };
      return s;
    },
    state(game) {
      const c = game.scn, r = shipById(game, c.raider);
      const clock = c.limit - game.time;
      for (const e of game.events) if (!e.scn && (e.type === 'raided' || e.type === 'seized') && (e.owner === 0 || e.from === 0)) { e.scn = true; c.lost++; }
      if (!r || r.owner !== 1) return { text: 'The raider is finished.', done: 'win', why: 'Raider hunt', clock };
      if (c.lost >= 3 || clock <= 0) return { text: 'The raider got away with it.', done: 'lose', clock: Math.max(0, clock) };
      // The raider: run down the nearest freighter, then drift cold.
      if (!r.order && game.time > 20) {
        let prey = null, pd = 1e9;
        for (const f of game.ships) { if (f.owner !== 0 || !f.st.civil) continue; const d = Math.hypot(f.x - r.x, f.z - r.z); if (d < pd) { pd = d; prey = f; } }
        if (prey) setOrder(game, 1, [r.id], { type: 'attack', ship: prey.id, mode: 'match', d0: 1.2, profile: pd > 200 ? 'cruise' : 'hard' });
      }
      return { text: `Destroy the raider. Freighters lost: ${c.lost} of 3.`, clock };
    },
  },
  hold: {
    name: 'Hold until relief',
    text: 'Keep your moon for twelve minutes',
    make() {
      const s = base(51, 'concord', 'boreal');
      give(s.moon, 0, 1);
      spawnShip(s.game, 0, 'frigate', s.moon);
      spawnShip(s.game, 0, 'escort', s.moon);
      const ids = ['frigate', 'frigate', 'corvette', 'corvette'].map((cls) => spawnShip(s.game, 1, cls, s.foe).id);
      setOrder(s.game, 1, ids, { type: 'orbit', body: s.moon.id, profile: 'hard' });
      s.game.scn = { moon: s.moon.id, limit: 720, foes: ids };
      return s;
    },
    state(game) {
      const c = game.scn, moon = game.bodies[c.moon];
      const clock = c.limit - game.time;
      // Survivors that drift off come back for another go.
      for (const id of c.foes) { const f = shipById(game, id); if (f && !f.order && f.at !== moon.id) setOrder(game, 1, [id], { type: 'orbit', body: moon.id, profile: 'hard' }); }
      if (moon.owner !== 0) return { text: `${moon.name} has fallen.`, done: 'lose', clock: Math.max(0, clock) };
      if (clock <= 0) return { text: 'Relief has arrived.', done: 'win', why: 'Hold until relief', clock: 0 };
      return { text: `Keep ${moon.name} until the clock runs out.`, clock };
    },
  },
  convoy: {
    name: 'Convoy',
    text: 'Bring two of three freighters home',
    make() {
      const s = base(64, 'boreal', 'holds');
      const from = farWorld(s.game, s.home);
      give(from, 0);
      const fr = [0, 1, 2].map(() => {
        const f = spawnShip(s.game, 0, 'freighter', from, { cargo: 200, src: null });
        f.order = { type: 'orbit', body: s.home.id, profile: 'cruise', amax: f.st.accel };
        f.depart = from.id; f.at = null;
        return f.id;
      });
      spawnShip(s.game, 0, 'frigate', from);
      spawnShip(s.game, 0, 'escort', from);
      const hunters = [spawnShip(s.game, 1, 'corvette', s.foe).id, spawnShip(s.game, 1, 'corvette', s.foe).id, spawnShip(s.game, 1, 'frigate', s.foe).id];
      s.game.scn = { fr, hunters, home: 0 };
      return s;
    },
    state(game) {
      const c = game.scn;
      for (const e of game.events) if (!e.scn && e.type === 'freight' && e.owner === 0 && e.n >= 150) { e.scn = true; c.home++; }
      const left = c.fr.filter((id) => alive(game, id)).length;
      for (const id of c.hunters) {
        const h = shipById(game, id);
        if (!h || h.order || game.time < 15) continue;
        const prey = c.fr.map((x) => shipById(game, x)).filter(Boolean).sort((a, b) => Math.hypot(a.x - h.x, a.z - h.z) - Math.hypot(b.x - h.x, b.z - h.z))[0];
        if (prey) setOrder(game, 1, [id], { type: 'attack', ship: prey.id, mode: 'pass', profile: 'hard' });
      }
      if (c.home >= 2) return { text: 'The convoy is in.', done: 'win', why: 'Convoy' };
      if (c.home + left < 2) return { text: 'Too few got through.', done: 'lose' };
      return { text: `Freighters home: ${c.home}. Still under way: ${left}.` };
    },
  },
};
export const SCENARIO_KEYS = Object.keys(SCENARIOS);
