/**
 * Colour, and the three moods the island can be seen in.
 *
 * Time of day is a *choice*, never a cycle: nothing here advances on its own.
 * Each preset is a full description of the light, and `lighting.js` cross-fades
 * between them when the player picks a different one.
 */

export const palette = {
  sea: 0x4ba8b6,
  seaDeep: 0x1d6a7e,
  grass: 0x7dad65,
  grass2: 0x99c074,
  grassDry: 0xb7bd6d,
  rock: 0x8b7f6b,
  rockWarm: 0xa08a6d,
  sand: 0xe9c888,
  cream: 0xfff0c7,
  red: 0xb84c3f,
  navy: 0x26525a,
  wood: 0x8d6045,
  woodDark: 0x6c4733,
  dark: 0x244951,
  white: 0xfff7dd,
  leaf: 0x4f7f55,
  leaf2: 0x72985b,
  roof: 0xad5844,
  roof2: 0xc8734e,
  yellow: 0xe9ad4a,
  blue: 0x477c97,
  linen: 0xf6ead0,
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
    sunDir: [0.82, 0.17, -0.55],
    sunColor: 0xffd2a6,
    sunIntensity: 3.1,
    skyColor: 0xd9e7f6,
    groundColor: 0x7d6f6a,
    hemiIntensity: 1.9,
    skyTop: 0x6d9ad2,
    skyHorizon: 0xffc9b4,
    sunGlow: 0xffb27a,
    glowStrength: 0.62,
    fog: 0xd5cfd2,
    fogNear: 900,
    fogFar: 2900,
    seaShallow: 0x5f9fb6,
    seaDeep: 0x2a5d7c,
    exposure: 1.02,
    beam: 0.085,
    shadowOpacity: 0.9,
  },
  noon: {
    label: 'Noon',
    sunDir: [0.18, 0.94, 0.29],
    sunColor: 0xfff3dd,
    sunIntensity: 4.1,
    skyColor: 0xdaf0ff,
    groundColor: 0x93856a,
    hemiIntensity: 2.2,
    skyTop: 0x4ea8d8,
    skyHorizon: 0xbfe6ef,
    sunGlow: 0xfff6dc,
    glowStrength: 0.25,
    fog: 0xc6e2e4,
    fogNear: 1200,
    fogFar: 3400,
    seaShallow: 0x47b3c4,
    seaDeep: 0x14677f,
    exposure: 1.0,
    beam: 0.02,
    shadowOpacity: 1,
  },
  golden: {
    label: 'Golden hour',
    sunDir: [-0.55, 0.34, 0.72],
    sunColor: 0xffe0ae,
    sunIntensity: 3.9,
    skyColor: 0xdff1ff,
    groundColor: 0x8b7257,
    hemiIntensity: 2.05,
    skyTop: 0x77bfd8,
    skyHorizon: 0xffd6a0,
    sunGlow: 0xffa04a,
    glowStrength: 0.5,
    fog: 0xd7ceb4,
    fogNear: 1000,
    fogFar: 3100,
    seaShallow: 0x4ba8b6,
    seaDeep: 0x1d6a7e,
    exposure: 1.08,
    beam: 0.06,
    shadowOpacity: 1,
  },
};

export const LIGHT_ORDER = ['sunrise', 'noon', 'golden'];
export const DEFAULT_LIGHT = 'golden';
