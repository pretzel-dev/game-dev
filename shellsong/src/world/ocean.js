/**
 * The ocean as pure data: the shape of the seabed, the islands poking out
 * of the water, the underwater palace, the grottos, the shipwrecks, the
 * giant clams, the twelve treasures, the rocks to sit on, and everything a
 * mermaid can bump into.
 *
 * No DOM and no Three.js here: `tools/check.mjs` builds the ocean in Node.
 * The same numbers are drawn by `render/scenery.js`.
 *
 * y is up and the surface of the sea is y = 0. Yaw 0 faces north (-z).
 */
import { mulberry32, fbm, noise2, smoothstep, lerp } from '../core/utils.js';

export const WORLD_R = 300; // how far out you can swim
export const SURFACE = 0;

export const PALACE = {
  x: 0,
  z: 0,
  floor: -20,
  hallR: 14,
  towerR: 24, // how far out the four towers stand
};

export const ISLANDS = [
  { name: 'Palm Island', x: 135, z: -150, r: 40, h: 5 },
  { name: 'Seagull Island', x: -175, z: 70, r: 36, h: 4.5 },
  { name: 'Lighthouse Island', x: 75, z: 195, r: 32, h: 4 },
  { name: 'the Sunny Rocks', x: -45, z: -95, r: 13, h: 1.2, rocksOnly: true },
];

export const GROTTOS = [
  { name: 'the Crystal Grotto', x: -125, z: -130, r: 10, crystal: 0xb07aff },
  { name: 'the Glow Grotto', x: 205, z: 30, r: 10, crystal: 0x5af0d0 },
  { name: 'the Rainbow Grotto', x: -80, z: 210, r: 10, crystal: 0xff7ac8 },
];

export const WRECKS = [
  { name: 'the pirate ship', x: 95, z: -60, yaw: 0.7, roll: 0.22, sail: 0x2a2a30 },
  { name: 'the old galleon', x: -150, z: -25, yaw: 2.3, roll: -0.18, sail: 0xe8dcc0 },
  { name: 'the little sailing ship', x: 25, z: 125, yaw: -0.8, roll: 0.3, sail: 0xd8e8f8 },
];

export const CLAMS = [
  { x: 42, z: -32 },
  { x: -62, z: 38 },
  { x: 150, z: 95 },
  { x: -112, z: 150 },
];

export const KELP_FORESTS = [
  { x: -60, z: 100, r: 30 },
  { x: 115, z: 40, r: 24 },
  { x: -205, z: -85, r: 30 },
  { x: 170, z: -60, r: 22 },
];

/** The twelve treasures, and where each one is hidden. */
export const TREASURE_LIST = [
  { id: 'crown', name: 'a golden crown', where: { wreck: 0 } },
  { id: 'coins', name: 'a pile of gold coins', where: { wreck: 1 } },
  { id: 'compass', name: "a pirate's compass", where: { wreck: 2 } },
  { id: 'ruby', name: 'a sparkly ruby', where: { grotto: 0 } },
  { id: 'emerald', name: 'a shiny emerald', where: { grotto: 1 } },
  { id: 'sapphire', name: 'a blue sapphire', where: { grotto: 2 } },
  { id: 'pearl', name: 'a magic pearl', where: { clam: 0 } },
  { id: 'necklace', name: 'a pearl necklace', where: { clam: 1 } },
  { id: 'mirror', name: 'a silver mirror', where: { clam: 2 } },
  { id: 'conch', name: 'a singing conch shell', where: { clam: 3 } },
  { id: 'bottle', name: 'a message in a bottle', where: { islet: 3 } },
  { id: 'tiara', name: 'a starry tiara', where: { kelp: 0 } },
];

const dist2 = (ax, az, bx, bz) => Math.hypot(ax - bx, az - bz);

/** The seabed before anything is flattened for buildings. */
function natural(x, z) {
  let h = -29 + 9 * fbm(x / 110 + 3, z / 110 - 7, 4) + 2.2 * (noise2(x / 18, z / 18) - 0.5);
  // Out past the edge, the bottom falls away into the deep blue.
  const r = Math.hypot(x, z);
  h -= smoothstep(250, 340, r) * 30;
  // Islands rise out of the water, with sandy slopes all round.
  for (const isl of ISLANDS) {
    const d = dist2(x, z, isl.x, isl.z);
    const s = smoothstep(isl.r * 1.7, isl.r * 0.25, d);
    if (s > 0) {
      const top = isl.h + (isl.rocksOnly ? 0 : 1.5 * (noise2(x / 9, z / 9) - 0.5));
      h = lerp(h, top, s * s * (3 - 2 * s));
    }
  }
  return h;
}

/** Height of the seabed (or the land, on an island) at (x, z). */
export function heightAt(x, z) {
  let h = natural(x, z);
  // The palace stands on a smooth, raised plateau.
  const dp = dist2(x, z, PALACE.x, PALACE.z);
  const sp = smoothstep(70, 42, dp);
  if (sp > 0) h = lerp(h, PALACE.floor, sp);
  // Grotto floors are flat; so is the sand under each wreck.
  for (const g of GROTTOS) {
    const d = dist2(x, z, g.x, g.z);
    const s = smoothstep(g.r + 9, g.r + 1, d);
    if (s > 0) h = lerp(h, g.floor, s);
  }
  for (const w of WRECKS) {
    const d = dist2(x, z, w.x, w.z);
    const s = smoothstep(22, 10, d) * 0.7;
    if (s > 0) h = lerp(h, w.floor, s);
  }
  return h;
}

// Floors are set from the natural seabed before heightAt is used.
for (const g of GROTTOS) g.floor = natural(g.x, g.z) - 1;
for (const w of WRECKS) w.floor = natural(w.x, w.z);

/** Which way the land slopes down at (x, z): the gradient of heightAt. */
export function slopeAt(x, z) {
  const e = 0.6;
  return {
    x: (heightAt(x + e, z) - heightAt(x - e, z)) / (2 * e),
    z: (heightAt(x, z + e) - heightAt(x, z - e)) / (2 * e),
  };
}

export function buildOcean(seed = 0x5ea5) {
  const rng = mulberry32(seed);
  const rand = (a = 0, b = 1) => a + rng() * (b - a);

  const ocean = {
    spheres: [], // { x, y, z, r }
    cyls: [], // { x, z, r, y0, y1 }
    boxes: [], // turned about y: { x, y, z, hx, hy, hz, yaw (as rotation.y) }
    shells: [], // hollow domes with doorways: { x, y, z, r, doors: [{ x, y, z, cos }] }
    seats: [], // { x, y, z, yaw, kind, name }
    rocks: [], // drawn rocks: { x, y, z, r, sy, color }
    coral: [], // { x, y, z, kind, color, s }
    kelp: [], // { x, y, z, h }
    lanterns: [],
    treasures: [],
    palace: PALACE,
    islands: ISLANDS,
    grottos: GROTTOS,
    wrecks: WRECKS,
    clams: [],
    palms: [],
    spawn: { x: 0, y: -12, z: 50, yaw: 0 },
  };

  /* ----------------------------------------------------------- palace --- */
  const P = PALACE;
  const door = (dx, dy, dz, half) => {
    const l = Math.hypot(dx, dy, dz);
    return { x: dx / l, y: dy / l, z: dz / l, cos: Math.cos(half) };
  };
  ocean.shells.push({
    name: 'the palace',
    x: P.x,
    y: P.floor,
    z: P.z,
    r: P.hallR,
    // Big doors front and back, and a round window in the roof to swim out of.
    doors: [door(0, 0.3, 1, 0.5), door(0, 0.3, -1, 0.42), door(0, 1, 0, 0.4)],
  });
  P.towers = [];
  for (let k = 0; k < 4; k++) {
    const a = Math.PI / 4 + (k * Math.PI) / 2;
    const t = { x: P.x + Math.cos(a) * P.towerR, z: P.z + Math.sin(a) * P.towerR, r: 3.2, y0: P.floor - 2, y1: -7 };
    P.towers.push(t);
    ocean.cyls.push({ x: t.x, z: t.z, r: t.r, y0: t.y0, y1: t.y1 + 4 });
  }
  // An avenue of pillars up to the front door, with pearl lanterns.
  P.pillars = [];
  for (let k = 0; k < 4; k++) {
    for (const sx of [-1, 1]) {
      const p = { x: P.x + sx * 6.5, z: P.z + 19 + k * 6, r: 0.7, y0: P.floor - 1, y1: P.floor + 7 };
      P.pillars.push(p);
      ocean.cyls.push(p);
      ocean.lanterns.push({ x: p.x, y: p.y1 + 0.6, z: p.z });
    }
  }
  // Inside: the King on his throne, and the princess's shell throne beside him.
  P.kingThrone = { x: P.x - 3.6, y: P.floor, z: P.z - 8.2, yaw: Math.PI };
  P.throne = { x: P.x + 3.6, y: P.floor, z: P.z - 8, yaw: Math.PI - 0.15 };
  // (A seat's y is where her middle goes: hips on the cushion, tail over the front.)
  ocean.seats.push({ kind: 'throne', name: 'your throne', x: P.throne.x + Math.sin(P.throne.yaw) * 0.4, y: P.floor + 1.6, z: P.throne.z - Math.cos(P.throne.yaw) * 0.4, yaw: P.throne.yaw });
  ocean.spheres.push({ x: P.kingThrone.x, y: P.floor + 1.2, z: P.kingThrone.z - 0.3, r: 2.2 });
  // Where the treasures you find are put on show, round your throne.
  P.display = [];
  for (let k = 0; k < TREASURE_LIST.length; k++) {
    const a = -0.2 + (k / (TREASURE_LIST.length - 1)) * 2.2;
    P.display.push({ x: P.throne.x + 2.5 + Math.cos(a) * 3.2 - 1.5, y: P.floor + 1.1 + (k % 2) * 0.5, z: P.throne.z + 1.2 - Math.sin(a) * 3.2 + 1.5 });
  }

  /* ------------------------------------------------------ the grottos --- */
  for (const g of GROTTOS) {
    // The way in faces the palace, so you can find it.
    const dx = P.x - g.x;
    const dz = P.z - g.z;
    const l = Math.hypot(dx, dz);
    g.door = { x: dx / l, z: dz / l };
    g.y = g.floor;
    ocean.shells.push({ name: g.name, x: g.x, y: g.floor, z: g.z, r: g.r, doors: [door(g.door.x, 0.35, g.door.z, 0.55)] });
    // Lumpy rocks heaped round the outside (not across the doorway).
    for (let k = 0; k < 9; k++) {
      const a = (k / 9) * Math.PI * 2;
      const ox = Math.cos(a);
      const oz = Math.sin(a);
      if (ox * g.door.x + oz * g.door.z > 0.55) continue;
      const r = rand(3, 5);
      // Far enough out that they don't poke through the grotto's walls.
      const out = g.r + r * 0.9 + 0.8;
      const rock = { x: g.x + ox * out, y: g.floor + rand(0, 3), z: g.z + oz * out, r };
      ocean.rocks.push({ ...rock, sy: 0.8, color: 0x7a6f8a });
      ocean.spheres.push(rock);
    }
  }

  /* ---------------------------------------------------- the shipwrecks --- */
  for (const w of WRECKS) {
    w.y = w.floor;
    // The hull, lying on its side a little, half sunk into the sand.
    // (A box's yaw is its rotation.y, so it turns the same way the model does.)
    ocean.boxes.push({ x: w.x, y: w.floor + 2, z: w.z, hx: 3.2, hy: 2.8, hz: 10.5, yaw: -w.yaw });
    const fx = Math.sin(w.yaw);
    const fz = -Math.cos(w.yaw);
    // The broken mast.
    ocean.cyls.push({ x: w.x + fx * 1.5, z: w.z + fz * 1.5, r: 0.5, y0: w.floor, y1: w.floor + 11 });
    // The treasure chest lies on the sand by the stern.
    w.chest = { x: w.x - fx * 9 + fz * 5, z: w.z - fz * 9 - fx * 5, yaw: w.yaw + 0.6 };
    w.chest.y = heightAt(w.chest.x, w.chest.z);
  }

  /* ---------------------------------------------------- giant clams --- */
  for (const c of CLAMS) {
    const clam = { x: c.x, z: c.z, y: heightAt(c.x, c.z), yaw: rand(0, 6.28) };
    ocean.clams.push(clam);
    ocean.spheres.push({ x: clam.x, y: clam.y + 0.2, z: clam.z, r: 1.1 });
  }

  /* --------------------------------------------- islands and rocks to sit on --- */
  for (const isl of ISLANDS) {
    // Walk out from the middle until the water is a couple of metres deep.
    const n = isl.rocksOnly ? 4 : 3;
    for (let k = 0; k < n; k++) {
      const a = (k / n) * Math.PI * 2 + 0.5;
      let d = isl.r * 0.2;
      while (d < isl.r * 2 && heightAt(isl.x + Math.cos(a) * d, isl.z + Math.sin(a) * d) > -1.6) d += 0.5;
      const x = isl.x + Math.cos(a) * d;
      const z = isl.z + Math.sin(a) * d;
      const rock = { x, y: -0.9, z, r: 2.0, sy: 0.75, color: 0x8a8f9a };
      ocean.rocks.push(rock);
      ocean.spheres.push({ x, y: -1.2, z, r: 1.9 });
      // Sit on the seaward edge, facing out to sea, tail hanging down into the water.
      const edge = 1.1;
      const top = rock.y + rock.sy * Math.sqrt(rock.r * rock.r - edge * edge);
      ocean.seats.push({ kind: 'rock', name: `a rock by ${isl.name}`, x: x + Math.cos(a) * edge, y: top + 0.25, z: z + Math.sin(a) * edge, yaw: Math.atan2(Math.cos(a), -Math.sin(a)) });
    }
    if (!isl.rocksOnly) {
      for (let k = 0; k < 7; k++) {
        const a = rand(0, 6.28);
        const d = rand(0, isl.r * 0.45);
        const x = isl.x + Math.cos(a) * d;
        const z = isl.z + Math.sin(a) * d;
        if (heightAt(x, z) > 1) ocean.palms.push({ x, y: heightAt(x, z), z, h: rand(5, 8), lean: rand(-0.3, 0.3), yaw: rand(0, 6.28) });
      }
    }
  }

  /* ---------------------------------------------------- the treasures --- */
  for (const t of TREASURE_LIST) {
    const w = t.where;
    let spot;
    if (w.wreck != null) {
      const wr = WRECKS[w.wreck];
      spot = { ...wr.chest, container: 'chest', place: wr.name };
    } else if (w.grotto != null) {
      const g = GROTTOS[w.grotto];
      const x = g.x - g.door.x * (g.r - 3.5);
      const z = g.z - g.door.z * (g.r - 3.5);
      spot = {
        x,
        y: g.floor,
        z,
        yaw: Math.atan2(g.door.x, -g.door.z),
        container: 'chest',
        place: g.name,
        // To get in: out in front of the door, then through it.
        approach: [
          { x: g.x + g.door.x * (g.r + 8), y: g.floor + 4, z: g.z + g.door.z * (g.r + 8) },
          { x: g.x + g.door.x * (g.r - 2), y: g.floor + 3, z: g.z + g.door.z * (g.r - 2) },
        ],
      };
    } else if (w.clam != null) {
      const c = ocean.clams[w.clam];
      // The clam opens as you come near: the treasure sits on top.
      spot = { x: c.x, y: c.y + 1.2, z: c.z, yaw: c.yaw, container: 'clam', place: 'a giant clam' };
    } else if (w.islet != null) {
      const isl = ISLANDS[w.islet];
      // Bobbing on the water by the rocks.
      spot = { x: isl.x + isl.r * 0.9, y: -0.1, z: isl.z + isl.r * 0.4, yaw: 0, container: 'bottle', place: isl.name };
    } else if (w.kelp != null) {
      const f = KELP_FORESTS[w.kelp];
      spot = { x: f.x + 4, y: heightAt(f.x + 4, f.z - 3), z: f.z - 3, yaw: 0.4, container: 'chest', place: 'the kelp forest' };
    }
    ocean.treasures.push({ ...t, ...spot });
  }

  /* ------------------------------------------------ coral, rocks, kelp --- */
  const corals = ['branch', 'brain', 'fan', 'tube', 'anemone', 'star', 'sponge'];
  const coralColors = [0xff7a8a, 0xffb05a, 0xf25aa0, 0xb07aff, 0x5ad0ff, 0xffe05a, 0xff5a5a, 0x7aff9a, 0xff9ad8];
  const near = (x, z, list, r) => list.some((o) => dist2(x, z, o.x, o.z) < r);
  const blocked = (x, z) =>
    near(x, z, GROTTOS.map((g) => ({ x: g.x, z: g.z })), 13) ||
    near(x, z, WRECKS, 13) ||
    near(x, z, CLAMS, 3) ||
    dist2(x, z, P.x, P.z) < P.hallR + 2 ||
    (Math.abs(x - P.x) < 9 && z > P.z + 10 && z < P.z + 46) ||
    P.towers.some((t) => dist2(x, z, t.x, t.z) < 5);
  const addCoralPatch = (cx, cz, r, n) => {
    for (let k = 0; k < n; k++) {
      const a = rand(0, 6.28);
      const d = Math.sqrt(rng()) * r;
      const x = cx + Math.cos(a) * d;
      const z = cz + Math.sin(a) * d;
      const y = heightAt(x, z);
      if (y > -2.5 || blocked(x, z)) continue;
      const kind = corals[Math.floor(rng() * corals.length)];
      const s = rand(0.7, 1.6);
      ocean.coral.push({ x, y, z, kind, color: coralColors[Math.floor(rng() * coralColors.length)], s, yaw: rand(0, 6.28) });
      if (kind === 'brain' && s > 1.3) ocean.spheres.push({ x, y: y + 0.3, z, r: 0.9 * s });
    }
  };
  // The palace gardens.
  addCoralPatch(P.x, P.z, 62, 260);
  // Reefs round the islands, and here and there across the sea floor.
  for (const isl of ISLANDS) addCoralPatch(isl.x, isl.z, isl.r * 1.9, isl.rocksOnly ? 40 : 90);
  for (let k = 0; k < 26; k++) addCoralPatch(rand(-260, 260), rand(-260, 260), 14, 16);
  // Boulders.
  for (let k = 0; k < 70; k++) {
    const x = rand(-270, 270);
    const z = rand(-270, 270);
    if (blocked(x, z) || Math.hypot(x, z) > 280) continue;
    const y = heightAt(x, z);
    if (y > -3) continue;
    const r = rand(1.2, 3.5);
    ocean.rocks.push({ x, y, z, r, sy: rand(0.6, 0.9), color: 0x8a8070 });
    ocean.spheres.push({ x, y: y - r * 0.2, z, r: r * 0.85 });
  }
  // Kelp forests: tall swaying strands.
  for (const f of KELP_FORESTS) {
    for (let k = 0; k < 90; k++) {
      const a = rand(0, 6.28);
      const d = Math.sqrt(rng()) * f.r;
      const x = f.x + Math.cos(a) * d;
      const z = f.z + Math.sin(a) * d;
      const y = heightAt(x, z);
      if (y > -6) continue;
      ocean.kelp.push({ x, y, z, h: Math.min(-y - 2, rand(9, 18)) });
    }
  }
  // A scattering of kelp through the palace gardens.
  for (let k = 0; k < 40; k++) {
    const a = rand(0, 6.28);
    const d = rand(30, 60);
    const x = P.x + Math.cos(a) * d;
    const z = P.z + Math.sin(a) * d;
    if (blocked(x, z)) continue;
    const y = heightAt(x, z);
    ocean.kelp.push({ x, y, z, h: rand(6, 12) });
  }

  return ocean;
}
