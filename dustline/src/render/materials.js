/**
 * Cel-shaded materials: one stepped light ramp for everything, so the canyon
 * reads like a painted toy box rather than a photograph.
 */
import { DataTexture, MeshToonMaterial, NearestFilter, RedFormat } from 'three';

function rampTexture(steps) {
  const data = new Uint8Array(steps.map((v) => Math.round(v * 255)));
  const texture = new DataTexture(data, steps.length, 1, RedFormat);
  texture.minFilter = NearestFilter;
  texture.magFilter = NearestFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  return texture;
}

export const TOON_RAMP = rampTexture([0.32, 0.6, 0.88, 1.0]);
export const SOFT_RAMP = rampTexture([0.38, 0.52, 0.68, 0.84, 0.95, 1.0]);

const cache = new Map();

/** A shared toon material for a colour (and options). */
export function mat(color, opts = {}) {
  const key = `${color}|${JSON.stringify(opts)}`;
  if (cache.has(key)) return cache.get(key);
  const m = new MeshToonMaterial({
    color,
    gradientMap: opts.soft ? SOFT_RAMP : TOON_RAMP,
    side: opts.side ?? 0,
    transparent: !!opts.transparent,
    opacity: opts.opacity ?? 1,
  });
  if (opts.emissive != null) m.emissive.setHex(opts.emissive);
  cache.set(key, m);
  return m;
}
