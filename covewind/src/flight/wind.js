/**
 * Weather you can feel but never fight.
 *
 * A slowly turning breeze with gusts on top, plus ridge lift where the wind
 * piles up against a slope — fly along the cliffs and the aeroplane floats.
 * Everything is gentle by design: the wind nudges, it never takes over.
 */
import { Vector3 } from 'three';
import { terrainGradient, terrainHeightAt } from '../world/terrain.js';
import { clamp, smoothstep } from '../core/utils.js';

export function createWind() {
  const vector = new Vector3();
  const state = {
    /** Wind velocity in world units per second. */
    vector,
    /** 0..1-ish, drives cloth, audio and the aeroplane's wobble. */
    gust: 0,
    /** Vertical air movement at the aeroplane, in units per second. */
    updraft: 0,
    direction: 0,
    speed: 0,
  };

  function update(t, position) {
    // Direction wanders slowly; speed breathes.
    state.direction = 2.1 + Math.sin(t * 0.021) * 0.55 + Math.sin(t * 0.0073 + 1.7) * 0.3;
    const base = 2.6 + Math.sin(t * 0.037 + 0.4) * 1.1;

    // Gusts: three unrelated rhythms multiplied so they arrive in bursts.
    const g =
      Math.sin(t * 0.31) * 0.5 +
      Math.sin(t * 0.72 + 1.3) * 0.3 +
      Math.sin(t * 1.27 + 2.9) * 0.2;
    state.gust = clamp(smoothstep(0.05, 0.75, g) * (0.55 + Math.sin(t * 0.11) * 0.45), 0, 1);

    state.speed = base + state.gust * 5.2;
    vector.set(Math.sin(state.direction), 0, Math.cos(state.direction)).multiplyScalar(state.speed);

    // Ridge lift: air climbing a slope that faces the wind.
    const ground = terrainHeightAt(position.x, position.z);
    const clearance = position.y - Math.max(ground, 0);
    const nearGround = smoothstep(150, 12, clearance);
    if (nearGround > 0.01 && ground > -6) {
      const grad = terrainGradient(position.x, position.z, 12);
      const upslope = -(grad.x * vector.x + grad.z * vector.z);
      state.updraft = clamp(upslope * 0.85, -3.5, 7) * nearGround;
    } else {
      state.updraft = 0;
    }
    vector.y = state.updraft;
    return state;
  }

  return { state, update };
}
