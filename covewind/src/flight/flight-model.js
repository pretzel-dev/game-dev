/**
 * How the aeroplane flies.
 *
 * Attitude first (pitch, bank, heading), then a speed that trades with height,
 * then a position. The ground and the sea are cushions: come in too low and
 * the air pushes back, you scrub a little speed and carry on. There is no way
 * to crash, no fail state and nothing to lose.
 */
import { Vector3 } from 'three';
import { TUNE } from './tuning.js';
import { surfaceHeightAt, terrainGradient, terrainHeightAt } from '../world/terrain.js';
import { waveHeight } from '../world/water.js';
import { clamp, damp, shapeAxis, smoothstep } from '../core/utils.js';

export function createFlight() {
  return {
    pos: new Vector3(-60, 108, 330),
    velocity: new Vector3(),
    heading: Math.PI * 0.86,
    pitch: -0.03,
    roll: 0,
    throttle: 0.64,
    speed: 40,
    wobble: 0,
    stall: 0,
    /** 0..1 — how hard the ground cushion is currently pushing back. */
    contact: 0,
    overWater: true,
    skimming: false,
    boosting: false,
    groundClearance: 100,
  };
}

const _forward = new Vector3();
const _ahead = new Vector3();

/** Unit vector the aeroplane is pointing along. */
export function headingVector(flight, out = _forward) {
  const cp = Math.cos(flight.pitch);
  return out.set(
    Math.sin(flight.heading) * cp,
    Math.sin(flight.pitch),
    Math.cos(flight.heading) * cp
  );
}

/**
 * @param {object} flight  State from `createFlight`.
 * @param {object} input   `{ pitch, roll, yaw, boost }`, each −1..1.
 * @param {object} wind    Wind state from `createWind`.
 * @param {number} dt      Seconds.
 * @param {number} t       Elapsed time, for the wave field.
 */
export function updateFlight(flight, input, wind, dt, t) {
  const pitchIn = shapeAxis(clamp(input.pitch, -1, 1));
  const rollIn = shapeAxis(clamp(input.roll, -1, 1));
  const yawIn = shapeAxis(clamp(input.yaw, -1, 1), 0.1, 0.2);
  flight.boosting = !!input.boost;

  /* -- stall: authority fades as the aeroplane runs out of air, and comes
        straight back the moment the nose drops ------------------------ */
  const stalling = smoothstep(TUNE.stallSpeed + 6, TUNE.stallSpeed - 6, flight.speed);
  flight.stall = damp(flight.stall, stalling, 4, dt);
  const authority = 1 - flight.stall * (1 - TUNE.stallAuthority);

  /* -- attitude ---------------------------------------------------------- */
  const pitchRate = TUNE.pitchRate * (0.72 + (flight.speed / 75) * 0.28) * authority;
  flight.pitch += pitchIn * pitchRate * dt;
  if (Math.abs(pitchIn) < 0.04) {
    flight.pitch = damp(flight.pitch, 0, TUNE.pitchCentring, dt);
  }
  // A stalled aeroplane drops its nose until it is flying again.
  flight.pitch -= flight.stall * TUNE.stallNoseDown * dt;
  flight.pitch = clamp(flight.pitch, -TUNE.maxPitch, TUNE.maxPitch);

  const targetRoll = rollIn * TUNE.maxRoll;
  const rollRate = Math.abs(rollIn) < 0.04 ? TUNE.rollCentring : TUNE.rollRate;
  flight.roll = damp(flight.roll, targetRoll, rollRate, dt);

  // Gusts rock the wings a little; they never take the aeroplane away from you.
  flight.wobble += dt * (2.2 + flight.speed * 0.02);
  const buffet = wind.gust * (0.05 + flight.stall * 0.12);
  flight.roll += Math.sin(flight.wobble * 1.7) * buffet * dt * 2.4;
  flight.pitch += Math.sin(flight.wobble * 2.3 + 1.1) * buffet * dt * 1.4;

  const turn =
    Math.sin(flight.roll) * (TUNE.turnBase + flight.speed * TUNE.turnFromSpeed) * authority +
    yawIn * TUNE.yawRate;
  flight.heading += turn * dt;

  /* -- speed: throttle, boost, and the trade against height -------------- */
  const target =
    TUNE.baseSpeed +
    flight.throttle * TUNE.throttleSpeed +
    (flight.boosting ? TUNE.boostSpeed : 0) -
    Math.sin(flight.pitch) * TUNE.pitchSpeedTrade;
  flight.speed = damp(flight.speed, target, TUNE.speedResponse, dt);
  flight.speed = clamp(flight.speed, TUNE.minSpeed, TUNE.maxSpeed);

  /* -- position ---------------------------------------------------------- */
  headingVector(flight, _forward);
  flight.velocity.copy(_forward).multiplyScalar(flight.speed);

  // Lift and sink, then the wind on top.
  const lift = (flight.speed - TUNE.liftNeutralSpeed) * TUNE.liftPerSpeed;
  const idle = (1 - flight.throttle) * TUNE.idleSink;
  const bankSink = Math.abs(Math.sin(flight.roll)) * TUNE.bankSink;
  flight.velocity.y += lift - idle - bankSink;
  flight.velocity.x += wind.vector.x * 0.35;
  flight.velocity.z += wind.vector.z * 0.35;
  flight.velocity.y += wind.updraft * 0.5;

  flight.pos.addScaledVector(flight.velocity, dt);

  /* -- the ground is a cushion ------------------------------------------- */
  const ground = terrainHeightAt(flight.pos.x, flight.pos.z);
  flight.overWater = ground <= 0;
  const wave = flight.overWater ? waveHeight(flight.pos.x, flight.pos.z, t) : 0;
  const surface = Math.max(ground, wave);
  flight.groundClearance = flight.pos.y - surface;

  // Look ahead as well, so cliffs lift you over rather than stopping you.
  _ahead
    .copy(flight.pos)
    .addScaledVector(_forward, TUNE.lookAhead)
    .setY(flight.pos.y);
  const aheadSurface = surfaceHeightAt(_ahead.x, _ahead.z);
  const aheadClearance = flight.pos.y - aheadSurface;

  // Water gives you a low pass; land keeps a rooftop's clearance.
  const cushion =
    flight.overWater && aheadSurface <= 0 ? TUNE.waterCushion : TUNE.landCushion;
  const clearance = Math.min(flight.groundClearance, aheadClearance);
  const push = clamp(1 - clearance / cushion, 0, 1);
  flight.contact = damp(flight.contact, push, 9, dt);

  if (push > 0) {
    const floor = Math.max(surface, aheadSurface) + cushion * 0.72;
    flight.pos.y = damp(flight.pos.y, Math.max(flight.pos.y, floor), TUNE.cushionRise * push, dt);
    // The nose is eased up, never snapped.
    flight.pitch = damp(flight.pitch, Math.max(flight.pitch, 0.16 * push), 3.5 * push, dt);
    flight.speed *= 1 - TUNE.skimScrub * push * dt;

    // Slopes gently turn you away from the rock, like air spilling off a ridge.
    const grad = terrainGradient(flight.pos.x, flight.pos.z, 14);
    if (Math.hypot(grad.x, grad.z) > 0.25) {
      const awayHeading = Math.atan2(-grad.x, -grad.z);
      let delta = Math.atan2(
        Math.sin(awayHeading - flight.heading),
        Math.cos(awayHeading - flight.heading)
      );
      flight.heading += delta * push * 0.45 * dt;
    }
  }

  flight.skimming = flight.overWater && flight.groundClearance < TUNE.skimHeight;

  /* -- the sky has a soft lid, and the sea a soft fence ------------------- */
  if (flight.pos.y > TUNE.softCeiling) {
    flight.pos.y = damp(flight.pos.y, TUNE.softCeiling, 1.6, dt);
    flight.pitch = Math.min(flight.pitch, 0.1);
  }
  flight.pos.y = Math.min(flight.pos.y, TUNE.ceiling);

  const distance = Math.hypot(flight.pos.x, flight.pos.z);
  if (distance > TUNE.homeRadius) {
    const home = Math.atan2(-flight.pos.x, -flight.pos.z);
    const delta = Math.atan2(
      Math.sin(home - flight.heading),
      Math.cos(home - flight.heading)
    );
    const strength = smoothstep(TUNE.homeRadius, TUNE.homeRadius + 320, distance);
    flight.heading += delta * TUNE.turnHomeRate * strength * dt * 3;
  }

  return flight;
}

/** Adjust throttle by a delta, clamped to the usable range. */
export function nudgeThrottle(flight, delta) {
  flight.throttle = clamp(flight.throttle + delta, 0.16, 1);
  return flight.throttle;
}
