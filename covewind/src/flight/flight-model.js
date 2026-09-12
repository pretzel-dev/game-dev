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
    /** True while the floats are in the water. */
    waterborne: false,
    /** Set for one frame on touchdown and on unsticking, for hints and audio. */
    justLanded: false,
    justTookOff: false,
    /** Floats touching the shallows while taxiing. */
    grounded: false,
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
  flight.justLanded = false;
  flight.justTookOff = false;
  if (flight.waterborne) return updateOnWater(flight, input, dt, t);

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

  // Bank right, turn right. Heading grows anticlockwise seen from above, so a
  // right-hand turn subtracts from it.
  const turn =
    Math.sin(flight.roll) * (TUNE.turnBase + flight.speed * TUNE.turnFromSpeed) * authority +
    yawIn * TUNE.yawRate;
  flight.heading -= turn * dt;

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

  // Lift and sink, then the wind on top. Fast means a gentle climb; slow means
  // the wing stops holding you up, which is how you get down onto the water.
  const speedDelta = flight.speed - TUNE.liftNeutralSpeed;
  const lift = speedDelta * (speedDelta >= 0 ? TUNE.liftPerSpeed : TUNE.sinkPerSpeed);
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

  // The look-ahead is there to lift you over what you would otherwise fly
  // into, so it counts only ground that stands at or above the aeroplane. A
  // beach you are descending towards is below you, and must not shove you back
  // up just as you were settling onto the water in front of it.
  const risesAhead = aheadSurface > flight.pos.y - 2;

  // Water gives you a low pass; land keeps a rooftop's clearance. Below
  // landing speed the sea stops holding you up at all, so you can settle onto it.
  const cushion = flight.overWater && !risesAhead ? TUNE.waterCushion : TUNE.landCushion;
  const landing = flight.overWater && !risesAhead && flight.speed < TUNE.landingSpeed;
  const clearance = risesAhead
    ? Math.min(flight.groundClearance, aheadClearance)
    : flight.groundClearance;
  const push = landing ? 0 : clamp(1 - clearance / cushion, 0, 1);
  flight.contact = damp(flight.contact, push, 9, dt);

  if (push > 0) {
    const floor = (risesAhead ? Math.max(surface, aheadSurface) : surface) + cushion * 0.72;
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

  // Touchdown: slow, low, over open water, and not climbing away.
  if (landing && flight.groundClearance < TUNE.touchdownHeight && flight.velocity.y < 3) {
    flight.waterborne = true;
    flight.justLanded = true;
    flight.speed = Math.min(flight.speed, TUNE.takeoffSpeed - 6);
    flight.pos.y = surface + TUNE.floatDraft;
    return flight;
  }

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

/**
 * Taxiing on the surface. The throttle drives the speed, the stick and rudder
 * steer, and the swell tips the floats about. Open the throttle all the way and
 * the aeroplane unsticks and flies again.
 */
function updateOnWater(flight, input, dt, t) {
  const steer = clamp(
    shapeAxis(clamp(input.roll, -1, 1)) + shapeAxis(clamp(input.yaw, -1, 1), 0.1, 0.2),
    -1,
    1
  );
  flight.boosting = !!input.boost;
  flight.contact = 1;
  flight.stall = 0;

  const target =
    TUNE.taxiIdle + flight.throttle * TUNE.taxiSpeed + (flight.boosting ? TUNE.taxiBoost : 0);
  flight.speed = damp(flight.speed, target, TUNE.waterDrag, dt);

  // Slow water taxiing needs the rudder; at speed the floats track straighter.
  const authority = 0.5 + clamp(flight.speed / 26, 0, 1) * 0.75;
  flight.heading -= steer * TUNE.waterSteer * authority * dt;

  const step = flight.speed * dt;
  const nextX = flight.pos.x + Math.sin(flight.heading) * step;
  const nextZ = flight.pos.z + Math.cos(flight.heading) * step;
  if (terrainHeightAt(nextX, nextZ) < -1.5) {
    flight.pos.x = nextX;
    flight.pos.z = nextZ;
    flight.grounded = false;
  } else {
    // Nudging the sand: the floats stop, and you can turn back out.
    flight.speed *= 1 - 2.4 * dt;
    flight.grounded = true;
  }

  // Ride the swell: height from the wave under the floats, tilt from its slope.
  const wave = waveHeight(flight.pos.x, flight.pos.z, t);
  const ahead = waveHeight(flight.pos.x + Math.sin(flight.heading) * 6, flight.pos.z + Math.cos(flight.heading) * 6, t);
  const side = waveHeight(flight.pos.x + Math.cos(flight.heading) * 6, flight.pos.z - Math.sin(flight.heading) * 6, t);
  flight.pos.y = damp(flight.pos.y, wave + TUNE.floatDraft, 8, dt);
  flight.pitch = damp(flight.pitch, (ahead - wave) * 0.06, 3, dt);
  flight.roll = damp(flight.roll, (side - wave) * 0.05 + steer * 0.12, 3, dt);

  flight.velocity.set(Math.sin(flight.heading) * flight.speed, 0, Math.cos(flight.heading) * flight.speed);
  flight.groundClearance = TUNE.floatDraft;
  flight.overWater = true;
  flight.skimming = flight.speed > 10;

  // On the step and away.
  if (flight.speed > TUNE.takeoffSpeed) {
    flight.waterborne = false;
    flight.justTookOff = true;
    flight.grounded = false;
    flight.pitch = 0.14;
    flight.contact = 0;
  }
  return flight;
}

/** Adjust throttle by a delta, clamped to the usable range. */
export function nudgeThrottle(flight, delta) {
  flight.throttle = clamp(flight.throttle + delta, 0.16, 1);
  return flight.throttle;
}
