/**
 * Colour, and the three moods the island can be seen in.
 *
 * Time of day is a *choice*, never a cycle: nothing here advances on its own.
 * Each preset is a full description of the light, and `lighting.js` cross-fades
 * between them when the player picks a different one.
 */

export const palette = {
  // The Adriatic, as it is painted rather than photographed: glassy turquoise
  // over pale stone, dark umbrella pines, white limestone and terracotta.
  sea: 0x3fc4c6,
  seaDeep: 0x1a5f9c,
  grass: 0x6fa843,
  grass2: 0x9cc553,
  grassDry: 0xd8c46e,
  maquis: 0x3f6e38,
  rock: 0xdcd5c4,
  rockWarm: 0xcfbd9e,
  stone: 0xe9dfc8,
  sand: 0xf2dca6,
  pebble: 0xece6d6,
  cream: 0xfff3d6,
  red: 0xc9473d,
  navy: 0x1f4c63,
  wood: 0x94603f,
  woodDark: 0x5e3c2a,
  dark: 0x283f4a,
  white: 0xfffaf0,
  leaf: 0x3f7a3c,
  leaf2: 0x6c9e45,
  pine: 0x2f5d3a,
  roof: 0xc4583c,
  roof2: 0xdc7a4c,
  yellow: 0xf1b84a,
  blue: 0x3f7fb0,
  shutter: 0x4d8a5e,
  linen: 0xf8eed8,
};

/**
 * @typedef {object} LightPreset
 * @property {string} label       Shown in the UI.
 * @property {number[]} sunDir    Direction *towards* the sun.
 * @property {number} sunColor
 * @property {number} sunIntensity
 * @property {number} skyColor    Hemisphere light, sky side.
 * @property {number} groundColor Hemisphere light, bounce side.
 * @property {number} hemiIntensity
 * @property {number} skyTop
 * @property {number} skyHorizon
 * @property {number} sunGlow     Colour of the glow around the sun disc.
 * @property {number} glowStrength
 * @property {number} cloudLit    Sunny side of the clouds.
 * @property {number} cloudShade  Shadow side of the clouds.
 * @property {number} fog
 * @property {number} fogNear
 * @property {number} fogFar
 * @property {number} seaShallow
 * @property {number} seaDeep
 * @property {number} exposure
 * @property {number} beam        Lighthouse beam opacity.
 * @property {number} shadowOpacity
 */

/** @type {Record<string, LightPreset>} */
export const LIGHT_PRESETS = {
  sunrise: {
    label: 'Sunrise',
    sunDir: [0.82, 0.2, -0.55],
    sunColor: 0xffcf9e,
    sunIntensity: 3.3,
    skyColor: 0xc9d8f4,
    groundColor: 0x8c6f78,
    hemiIntensity: 1.7,
    skyTop: 0x4d7fcf,
    skyHorizon: 0xffc6a8,
    sunGlow: 0xffa36a,
    glowStrength: 0.7,
    cloudLit: 0xfff0dc,
    cloudShade: 0xb49ac2,
    fog: 0xe6cfc6,
    fogNear: 700,
    fogFar: 3000,
    seaShallow: 0x5cbcc4,
    seaDeep: 0x2a5b93,
    exposure: 1.04,
    beam: 0.085,
    shadowOpacity: 0.9,
  },
  noon: {
    label: 'Noon',
    sunDir: [0.3, 0.9, 0.3],
    sunColor: 0xfff5e0,
    sunIntensity: 3.9,
    skyColor: 0xcfe8ff,
    groundColor: 0x8f8a6a,
    hemiIntensity: 1.9,
    skyTop: 0x2f86dc,
    skyHorizon: 0xbfe7f5,
    sunGlow: 0xfff6dc,
    glowStrength: 0.28,
    cloudLit: 0xffffff,
    cloudShade: 0x9fb6d8,
    fog: 0xc9e6f0,
    fogNear: 900,
    fogFar: 3400,
    seaShallow: 0x33d1c8,
    seaDeep: 0x125ea8,
    exposure: 1.0,
    beam: 0.02,
    shadowOpacity: 1,
  },
  golden: {
    label: 'Golden hour',
    sunDir: [-0.55, 0.3, 0.72],
    sunColor: 0xffd49a,
    sunIntensity: 3.8,
    skyColor: 0xd4e6fb,
    groundColor: 0x94705a,
    hemiIntensity: 1.8,
    skyTop: 0x4a92d6,
    skyHorizon: 0xffd9a6,
    sunGlow: 0xff9a4a,
    glowStrength: 0.55,
    cloudLit: 0xfff1d6,
    cloudShade: 0xa9a2c8,
    fog: 0xe9d9bd,
    fogNear: 800,
    fogFar: 3200,
    seaShallow: 0x3fc4c6,
    seaDeep: 0x1a5f9c,
    exposure: 1.05,
    beam: 0.06,
    shadowOpacity: 1,
  },
};

export const LIGHT_ORDER = ['sunrise', 'noon', 'golden'];
export const DEFAULT_LIGHT = 'golden';
