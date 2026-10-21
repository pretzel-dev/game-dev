/**
 * The twelve treasures as little shiny models, each about half a metre
 * across. They're used where they're hidden, when they float up out of a
 * chest, and on show round your throne once you've found them.
 */
import { Mesh, MeshPhongMaterial } from 'three';
import { Builder, SHAPES } from './builder.js';

const GOLD = 0xf2c94a;
const SILVER = 0xe0e6f0;
const PEARL = 0xfff8f4;

const material = new MeshPhongMaterial({ vertexColors: true, shininess: 120, specular: 0xffffff, emissive: 0x302010 });

function build(id) {
  const b = new Builder();
  switch (id) {
    case 'crown':
      b.add(SHAPES.cyl(18), 0, 0.12, 0, 0.5, 0.22, 0.5, GOLD);
      for (let k = 0; k < 6; k++) {
        const a = (k / 6) * Math.PI * 2;
        b.cone(Math.cos(a) * 0.24, 0.22, Math.sin(a) * 0.24, 0.05, 0.16, GOLD, 6);
        b.ball(Math.cos(a) * 0.24, 0.4, Math.sin(a) * 0.24, 0.035, k % 2 ? 0xff3a5a : 0x3a8aff);
      }
      b.ball(0, 0.13, -0.26, 0.05, 0xff3a5a);
      break;
    case 'coins':
      for (let k = 0; k < 9; k++) {
        const a = k * 2.4;
        const r = k < 1 ? 0 : 0.14;
        b.add(SHAPES.cyl(14), Math.cos(a) * r, 0.03 + Math.floor(k / 4) * 0.05, Math.sin(a) * r, 0.2, 0.04, 0.2, GOLD);
      }
      b.add(SHAPES.cyl(14), 0, 0.25, 0, 0.2, 0.04, 0.2, GOLD, 0, 1.2);
      break;
    case 'compass':
      b.add(SHAPES.cyl(20), 0, 0.05, 0, 0.42, 0.1, 0.42, 0xc89a4a);
      b.add(SHAPES.cyl(20), 0, 0.1, 0, 0.34, 0.02, 0.34, 0xfff4e0);
      b.add(SHAPES.box(), 0, 0.12, -0.06, 0.04, 0.02, 0.14, 0xe2382e);
      b.add(SHAPES.box(), 0, 0.12, 0.06, 0.04, 0.02, 0.14, 0x2a2a30);
      break;
    case 'ruby':
    case 'emerald':
    case 'sapphire': {
      const c = { ruby: 0xff2a5a, emerald: 0x2ae07a, sapphire: 0x2a6aff }[id];
      b.add(SHAPES.gem(), 0, 0.22, 0, 0.36, 0.44, 0.36, c);
      break;
    }
    case 'pearl':
      b.ball(0, 0.18, 0, 0.18, PEARL, 16, 12);
      break;
    case 'necklace':
      for (let k = 0; k < 16; k++) {
        const a = (k / 16) * Math.PI * 2;
        b.ball(Math.cos(a) * 0.22, 0.05, Math.sin(a) * 0.17, 0.045, PEARL);
      }
      b.add(SHAPES.gem(), 0, 0.05, 0.22, 0.1, 0.12, 0.1, 0xff8ac8);
      break;
    case 'mirror':
      b.add(SHAPES.cyl(20), 0, 0.3, 0, 0.36, 0.04, 0.36, SILVER, 0, Math.PI / 2);
      b.add(SHAPES.cyl(20), 0, 0.3, -0.02, 0.3, 0.02, 0.3, 0xc8f0ff, 0, Math.PI / 2);
      b.add(SHAPES.cyl(8), 0, 0.05, 0, 0.06, 0.24, 0.06, SILVER);
      break;
    case 'conch':
      for (let k = 0; k < 5; k++) b.add(SHAPES.cone(10), 0, 0.12 + k * 0.05, 0, 0.36 - k * 0.06, 0.18, 0.36 - k * 0.06, k % 2 ? 0xffc0d0 : 0xfff0e0, k * 0.7);
      b.add(SHAPES.cone(10), 0.12, 0.1, 0, 0.18, 0.3, 0.18, 0xff9ab8, 0, 0, Math.PI / 2);
      break;
    case 'bottle':
      b.add(SHAPES.cyl(12), 0, 0.12, 0, 0.18, 0.3, 0.18, 0x9ae0c0);
      b.add(SHAPES.cyl(10), 0, 0.33, 0, 0.08, 0.14, 0.08, 0x9ae0c0);
      b.add(SHAPES.cyl(8), 0, 0.42, 0, 0.07, 0.06, 0.07, 0x8a5a3a);
      b.add(SHAPES.cyl(8), 0, 0.12, 0, 0.1, 0.2, 0.1, 0xfff4d8);
      break;
    case 'tiara':
      for (let k = 0; k < 9; k++) {
        const a = Math.PI * (0.1 + (k / 8) * 0.8);
        b.ball(Math.cos(a) * 0.22, 0.05 + Math.sin(a) * 0.08, -Math.sin(a) * 0.12, 0.03, SILVER);
      }
      for (let k = 0; k < 5; k++) {
        const a = Math.PI * (0.2 + (k / 4) * 0.6);
        const h = k === 2 ? 0.22 : 0.14;
        b.add(SHAPES.gem(), Math.cos(a) * 0.22, 0.1 + h, -Math.sin(a) * 0.12, 0.08, 0.1, 0.03, k === 2 ? 0xffe05a : 0xa8e8ff);
      }
      break;
    default:
      b.ball(0, 0.2, 0, 0.2, GOLD);
  }
  return b.geometry();
}

const cache = new Map();
export function makeTreasure(id) {
  if (!cache.has(id)) cache.set(id, build(id));
  const m = new Mesh(cache.get(id), material);
  m.castShadow = true;
  return m;
}
