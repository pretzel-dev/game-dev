/**
 * Shared flat-shaded materials.
 *
 * Everything in the world is stylised and unlit-ish on purpose: high
 * roughness, no metalness, flat shading. Sharing instances keeps draw-call
 * state changes down, which is most of the mobile budget.
 */
import { MeshStandardMaterial, FrontSide } from 'three';
import { palette } from './palette.js';

export function mat(color, opts = {}) {
  return new MeshStandardMaterial({
    color,
    roughness: opts.roughness ?? 0.85,
    metalness: 0,
    flatShading: opts.flat ?? true,
    transparent: !!opts.transparent,
    opacity: opts.opacity ?? 1,
    side: opts.side ?? FrontSide,
    vertexColors: !!opts.vertexColors,
  });
}

export const MAT = {
  grass: mat(palette.grass),
  grass2: mat(palette.grass2),
  rock: mat(palette.rock),
  rockWarm: mat(palette.rockWarm),
  sand: mat(palette.sand),
  cream: mat(palette.cream),
  red: mat(palette.red),
  navy: mat(palette.navy),
  wood: mat(palette.wood),
  woodDark: mat(palette.woodDark),
  dark: mat(palette.dark),
  white: mat(palette.white),
  leaf: mat(palette.leaf),
  leaf2: mat(palette.leaf2),
  roof: mat(palette.roof),
  roof2: mat(palette.roof2),
  yellow: mat(palette.yellow),
  blue: mat(palette.blue),
  linen: mat(palette.linen),
  skin: mat(0xe1b184),
  terracotta: mat(0xd98b5f),
  plaster: mat(0xf1d7aa),
  plaster2: mat(0xe6cf9f),
  plaster3: mat(0xe8b38d),
};

export const HOUSE_WALLS = [MAT.cream, MAT.plaster, MAT.plaster2, MAT.plaster3];
export const HOUSE_ROOFS = [MAT.roof, MAT.roof2, MAT.terracotta];
export const CLOTH = [MAT.linen, MAT.white, MAT.blue, MAT.red, MAT.yellow];
