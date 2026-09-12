/**
 * Draws the Covewind app icons — `npm run icons`.
 *
 * The game ships no art assets, and its icons shouldn't either: this renders
 * them from the same palette the world uses, with a tiny hand-rolled PNG
 * encoder so the build needs no image library.
 */
import { deflateSync } from 'node:zlib';
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const OUT = fileURLToPath(new URL('../public/icons/', import.meta.url));

/* ------------------------------------------------------------------ png --- */

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function chunk(type, data) {
  const head = Buffer.alloc(8);
  head.writeUInt32BE(data.length, 0);
  head.write(type, 4, 'ascii');
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([head.subarray(4), data])), 0);
  return Buffer.concat([head, data, crc]);
}

function encodePNG(width, height, rgba) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (width * 4 + 1)] = 0; // filter: none
    rgba.copy(raw, y * (width * 4 + 1) + 1, y * width * 4, (y + 1) * width * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // truecolour + alpha
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

/* ----------------------------------------------------------------- draw --- */

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
const smoothstep = (e0, e1, x) => {
  const t = clamp01((x - e0) / (e1 - e0));
  return t * t * (3 - 2 * t);
};

/** Distance to a rounded line segment — the workhorse for the plane shape. */
function sdSegment(px, py, ax, ay, bx, by) {
  const pax = px - ax;
  const pay = py - ay;
  const bax = bx - ax;
  const bay = by - ay;
  const h = clamp01((pax * bax + pay * bay) / (bax * bax + bay * bay));
  return Math.hypot(pax - bax * h, pay - bay * h);
}

// Palette shared with the game world.
const SKY_TOP = [0x6f, 0xba, 0xd6];
const SKY_WARM = [0xff, 0xcf, 0x93];
const SUN = [0xff, 0xe6, 0xa8];
const SEA = [0x3f, 0x9c, 0xae];
const ISLAND = [0x7d, 0xad, 0x65];
const PLANE = [0xc9, 0x47, 0x3d];
const CREAM = [0xff, 0xf4, 0xd8];

/**
 * Samples one point of the icon in a -1..1 square.
 * `inset` shrinks the artwork for maskable icons' safe zone.
 */
function sample(x, y, inset) {
  const sx = x / inset;
  const sy = y / inset;

  // Sky, warming towards the horizon.
  let col = mix(SKY_TOP, SKY_WARM, smoothstep(-0.9, 0.5, sy));

  // Low sun with a soft halo.
  const sunD = Math.hypot(sx + 0.42, sy + 0.06);
  col = mix(col, SUN, smoothstep(0.5, 0.16, sunD) * 0.5);
  col = mix(col, [0xff, 0xf3, 0xc8], smoothstep(0.17, 0.14, sunD));

  // Sea.
  const horizon = 0.44;
  col = mix(col, SEA, smoothstep(horizon - 0.015, horizon + 0.015, sy));
  if (sy > horizon) {
    const glint = Math.sin((sy - horizon) * 46) * 0.5 + 0.5;
    col = mix(col, CREAM, glint * 0.13 * smoothstep(0.8, 0.15, Math.abs(sx + 0.42)));
  }

  // A hint of the island sitting on the horizon.
  const islandTop = horizon - 0.16 * Math.exp(-((sx - 0.46) ** 2) / 0.12);
  const onIsland =
    smoothstep(islandTop - 0.01, islandTop + 0.01, sy) * smoothstep(horizon + 0.06, horizon - 0.02, sy);
  col = mix(col, ISLAND, onIsland);

  // The plane, seen from above, banking across the sun.
  const a = -0.44;
  const px = (sx - 0.06) * 1.35;
  const py = (sy + 0.06) * 1.35;
  const rx = px * Math.cos(a) - py * Math.sin(a);
  const ry = px * Math.sin(a) + py * Math.cos(a);
  const body = sdSegment(rx, ry, -0.3, 0, 0.25, 0) - 0.058;
  const wing = sdSegment(rx, ry, -0.02, -0.32, -0.02, 0.32) - 0.04;
  const tail = sdSegment(rx, ry, -0.27, -0.13, -0.27, 0.13) - 0.028;
  const prop = sdSegment(rx, ry, 0.28, -0.12, 0.28, 0.12) - 0.016;
  const plane = Math.min(body, wing, tail, prop);

  col = mix(col, [0x1c, 0x44, 0x4d], smoothstep(0.03, -0.02, plane + 0.03) * 0.22); // soft shadow
  col = mix(col, PLANE, smoothstep(0.012, -0.012, plane));
  col = mix(col, CREAM, smoothstep(0.012, -0.012, Math.hypot(rx - 0.07, ry) - 0.045)); // cockpit

  return col;
}

function render(size, { inset = 1, round = true } = {}) {
  const rgba = Buffer.alloc(size * size * 4);
  const SS = 3; // supersampling
  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      let r = 0;
      let g = 0;
      let b = 0;
      let a = 0;
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const x = ((px + (sx + 0.5) / SS) / size) * 2 - 1;
          const y = ((py + (sy + 0.5) / SS) / size) * 2 - 1;
          const c = sample(x, y, inset);
          // Squircle mask for the plain icon; maskable icons bleed to the edge.
          const squircle = (Math.abs(x) ** 4 + Math.abs(y) ** 4) ** 0.25;
          const m = round ? smoothstep(1.0, 0.93, squircle) : 1;
          r += c[0];
          g += c[1];
          b += c[2];
          a += 255 * m;
        }
      }
      const n = SS * SS;
      const i = (py * size + px) * 4;
      rgba[i] = Math.round(r / n);
      rgba[i + 1] = Math.round(g / n);
      rgba[i + 2] = Math.round(b / n);
      rgba[i + 3] = Math.round(a / n);
    }
  }
  return encodePNG(size, size, rgba);
}

mkdirSync(OUT, { recursive: true });
writeFileSync(`${OUT}icon-192.png`, render(192));
writeFileSync(`${OUT}icon-512.png`, render(512));
writeFileSync(`${OUT}icon-maskable-512.png`, render(512, { inset: 0.62, round: false }));
console.log('icons written to public/icons/');
