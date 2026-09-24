/**
 * Shared cel-shaded materials.
 *
 * The whole world is lit through one stepped light ramp, the way a hand-painted
 * film is: a lit side, a soft mid-tone and a cool shadow, with nothing in
 * between. The hemisphere light fills the shadows with sky blue, so shade
 * reads as colour rather than as grey. Sharing instances keeps draw-call state
 * changes down, which is most of the mobile budget.
 */
import { DataTexture, FrontSide, MeshToonMaterial, NearestFilter, RedFormat } from 'three';
import { palette } from './palette.js';

/** The light ramp: shadow, a soft terminator band, lit, and a warm top. */
function rampTexture(steps) {
  const data = new Uint8Array(steps.map((v) => Math.round(v * 255)));
  const texture = new DataTexture(data, steps.length, 1, RedFormat);
  texture.minFilter = NearestFilter;
  texture.magFilter = NearestFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  return texture;
}

export const TOON_RAMP = rampTexture([0.2, 0.52, 0.86, 1.0]);
/** Softer ramp for big organic shapes — clouds, foliage, the hills. */
export const SOFT_RAMP = rampTexture([0.3, 0.46, 0.64, 0.82, 0.94, 1.0]);

export function mat(color, opts = {}) {
  const material = new MeshToonMaterial({
    color,
    gradientMap: opts.soft ? SOFT_RAMP : TOON_RAMP,
    transparent: !!opts.transparent,
    opacity: opts.opacity ?? 1,
    side: opts.side ?? FrontSide,
    vertexColors: !!opts.vertexColors,
  });
  // Hard-edged things (walls, hulls, rock) keep their facets; anything organic
  // is smooth so the light ramp draws a clean, painted terminator across it.
  material.flatShading = opts.flat ?? false;
  if (opts.emissive != null) material.emissive.setHex(opts.emissive);
  return material;
}

const flat = { flat: true };

export const MAT = {
  grass: mat(palette.grass, { soft: true }),
  grass2: mat(palette.grass2, { soft: true }),
  rock: mat(palette.rock, flat),
  rockWarm: mat(palette.rockWarm, flat),
  sand: mat(palette.sand),
  cream: mat(palette.cream),
  red: mat(palette.red),
  navy: mat(palette.navy),
  wood: mat(palette.wood),
  woodDark: mat(palette.woodDark),
  dark: mat(palette.dark),
  white: mat(palette.white),
  leaf: mat(palette.leaf, { soft: true }),
  leaf2: mat(palette.leaf2, { soft: true }),
  pine: mat(palette.pine, { soft: true }),
  roof: mat(palette.roof),
  roof2: mat(palette.roof2),
  yellow: mat(palette.yellow),
  blue: mat(palette.blue),
  green: mat(palette.shutter),
  linen: mat(palette.linen),
  skin: mat(0xf0c29a),
  terracotta: mat(0xd98b5f),
  plaster: mat(0xf4dfb8),
  plaster2: mat(0xeccf9c),
  plaster3: mat(0xf0b99a),
  plaster4: mat(0xf6e9cf),
  stone: mat(palette.stone, flat),
  stoneDark: mat(0xb6a78c, flat),
  brass: mat(0xd9a441),
  glass: mat(0x9fd6e6, { emissive: 0x1d3a44 }),
  lamp: mat(0xfff2c0, { emissive: 0xffe39a }),
  // Lit windows: dark glass by day, warm light at dusk and night (the
  // lighting turns up their emissive).
  window: mat(0x283f4a, { emissive: 0xffb257 }),
  navRed: mat(0xd83030, { emissive: 0xff2a2a }),
  navGreen: mat(0x2fae5a, { emissive: 0x2aff6a }),
  navWhite: mat(0xffffff, { emissive: 0xffffff }),
};
MAT.window.emissiveIntensity = 0;
for (const m of [MAT.navRed, MAT.navGreen, MAT.navWhite]) m.emissiveIntensity = 0.4;

export const HOUSE_WALLS = [MAT.cream, MAT.plaster, MAT.plaster2, MAT.plaster3, MAT.plaster4, MAT.stone];
export const HOUSE_ROOFS = [MAT.roof, MAT.roof2, MAT.terracotta];
export const SHUTTERS = [MAT.green, MAT.blue, MAT.green, MAT.woodDark];
export const CLOTH = [MAT.linen, MAT.white, MAT.blue, MAT.red, MAT.yellow];
