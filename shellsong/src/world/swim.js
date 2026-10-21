/**
 * How the mermaid swims, as pure data. Simple for small hands: the stick
 * steers (left and right turn her, up swims forward), and two buttons
 * swim up and down. At the top she floats with her head out of the water.
 *
 * She can also sit on a rock or on her throne, ride a dolphin (and make it
 * jump right out of the water), and twirl. Treasure is found just by
 * swimming up to it.
 *
 * Yaw 0 faces north (-z); forward is (sin yaw, -cos yaw).
 */
import { angleDelta, clamp, damp } from '../core/utils.js';
import { pushSphere } from './collide.js';

export const SWIM = {
  speed: 6.5, // m/s, flat out
  reverse: 2,
  turn: 2.1, // rad/s
  rise: 4,
  accel: 5,
  radius: 0.65,
  floatY: -0.15, // body height when floating at the top (head and shoulders out)
  twirlBoost: 1.6,
  rideSpeed: 13,
  rideMin: 4,
  leapUp: 10,
  gravity: 13,
  reach: 3.5, // how close to be for "sit" or "ride"
  findReach: 2.8, // how close to be to find treasure
};

/** Emotes, and how long each one lasts (seconds). */
export const EMOTES = { wave: 2.2, kiss: 1.8, sing: 3.6, dance: 3.2, flip: 1.3 };

/** Start an emote (a flip only while swimming). */
export function emote(m, kind) {
  if (!EMOTES[kind] || (kind === 'flip' && m.mode !== 'swim')) return false;
  m.emote = { kind, t: 0, dur: EMOTES[kind] };
  m.events.push({ type: 'emote', kind });
  return true;
}

export function createMermaid(spawn) {
  return {
    x: spawn.x,
    y: spawn.y,
    z: spawn.z,
    yaw: spawn.yaw ?? 0,
    pitch: 0,
    roll: 0,
    speed: 0,
    vy: 0,
    mode: 'swim', // swim | sit | throne | ride | leap
    seat: null,
    ride: null,
    twirl: 0,
    emote: null, // { kind, t, dur }
    stroke: 0, // how hard she's swimming, for the tail
    atSurface: false,
    time: 0,
    events: [],
  };
}

export function placeMermaid(m, x, y, z, yaw = m.yaw) {
  Object.assign(m, { x, y, z, yaw, speed: 0, vy: 0, mode: 'swim', seat: null, ride: null, twirl: 0 });
}

/** What the big button would do right now: { kind, label, target } or null. */
export function actionFor(m, ocean, creatures) {
  if (m.mode === 'sit' || m.mode === 'throne') return { kind: 'stand', label: 'Swim' };
  if (m.mode === 'ride' || m.mode === 'leap') return { kind: 'leap', label: 'Jump!' };
  let best = null;
  let bestD = SWIM.reach;
  for (const s of ocean.seats) {
    const d = Math.hypot(s.x - m.x, (s.y - m.y) * 0.7, s.z - m.z);
    if (d < bestD) {
      bestD = d;
      best = { kind: s.kind === 'throne' ? 'throne' : 'sit', label: s.kind === 'throne' ? 'Sit on your throne' : 'Sit', target: s };
    }
  }
  for (const d of creatures.dolphins) {
    const dist = Math.hypot(d.x - m.x, d.y - m.y, d.z - m.z);
    if (dist < bestD + 1 && d.leap < 0) {
      bestD = dist - 1;
      best = { kind: 'ride', label: 'Ride', target: d };
    }
  }
  return best;
}

/** Do it. */
export function act(m, a) {
  if (!a) return;
  if (a.kind === 'sit' || a.kind === 'throne') {
    m.mode = a.kind === 'throne' ? 'throne' : 'sit';
    m.seat = a.target;
    m.speed = 0;
    m.vy = 0;
    m.events.push({ type: a.kind });
  } else if (a.kind === 'stand') {
    standUp(m);
  } else if (a.kind === 'ride') {
    m.mode = 'ride';
    m.ride = a.target;
    m.yaw = a.target.yaw;
    m.speed = Math.max(SWIM.rideMin, a.target.speed || 6);
    m.events.push({ type: 'ride' });
  } else if (a.kind === 'leap' && m.mode === 'ride' && m.ride.y > -3) {
    m.mode = 'leap';
    m.vy = SWIM.leapUp;
    m.events.push({ type: 'leap' });
  }
}

/** Off the dolphin (the twirl button does this while riding). */
export function letGo(m) {
  if (m.mode !== 'ride') return false;
  m.mode = 'swim';
  m.y = Math.min(m.y, -0.8);
  m.ride = null;
  m.speed = Math.min(m.speed, SWIM.speed);
  m.events.push({ type: 'letgo' });
  return true;
}

function standUp(m) {
  const s = m.seat;
  m.mode = 'swim';
  m.seat = null;
  if (s) {
    // Slip off the front, into the water.
    m.x = s.x + Math.sin(s.yaw) * 1.8;
    m.z = s.z - Math.cos(s.yaw) * 1.8;
    m.y = s.kind === 'throne' ? s.y : -1.4;
    m.yaw = s.yaw;
  }
  m.events.push({ type: 'stand' });
}

const p = { x: 0, y: 0, z: 0 };

/**
 * input: { turn, forward, rise } each -1..1, twirl: true on the frame it's
 * pressed. Events: surface, dive, splash, twirl, treasure, chest.
 */
export function updateMermaid(m, input, ocean, dt) {
  m.time += dt;
  if (m.emote && (m.emote.t += dt) >= m.emote.dur) m.emote = null;
  const turn = clamp(input.turn || 0, -1, 1);
  const fwd = clamp(input.forward || 0, -1, 1);
  const rise = clamp(input.rise || 0, -1, 1);

  if (m.mode === 'sit' || m.mode === 'throne') {
    const s = m.seat;
    m.x = damp(m.x, s.x, 10, dt);
    m.y = damp(m.y, s.y, 10, dt);
    m.z = damp(m.z, s.z, 10, dt);
    m.yaw += angleDelta(m.yaw, s.yaw) * Math.min(1, dt * 8);
    m.pitch = damp(m.pitch, 0, 6, dt);
    m.roll = damp(m.roll, 0, 6, dt);
    m.stroke = damp(m.stroke, 0, 3, dt);
    // Any real push on the stick and off she goes.
    if (Math.abs(fwd) > 0.5 || Math.abs(turn) > 0.8 || Math.abs(rise) > 0.5) standUp(m);
    return;
  }

  if (input.twirl && m.mode === 'swim' && m.twirl <= 0) {
    m.twirl = 1;
    m.events.push({ type: 'twirl' });
  }
  if (m.twirl > 0) m.twirl = Math.max(0, m.twirl - dt * 1.1);

  if (m.mode === 'ride' || m.mode === 'leap') return ride(m, turn, fwd, rise, ocean, dt);

  // Turn, and swim forward along the way she faces.
  m.yaw += turn * SWIM.turn * dt * (1 - 0.25 * Math.min(1, m.speed / SWIM.speed));
  const boost = m.twirl > 0 ? SWIM.twirlBoost : 1;
  const target = fwd >= 0 ? fwd * SWIM.speed * boost : fwd * SWIM.reverse;
  m.speed += clamp(target - m.speed, -SWIM.accel * 1.5 * dt, SWIM.accel * dt * boost);
  m.vy = damp(m.vy, rise * SWIM.rise, 4, dt);

  const fx = Math.sin(m.yaw);
  const fz = -Math.cos(m.yaw);
  p.x = m.x + fx * m.speed * dt;
  p.y = m.y + m.vy * dt;
  p.z = m.z + fz * m.speed * dt;
  const push = pushSphere(ocean, p, SWIM.radius, { surface: SWIM.floatY });
  // Lose the speed that went into whatever she bumped.
  const into = -(push.x * fx + push.z * fz);
  if (into > 0) m.speed = Math.max(0, m.speed - into / dt * 0.5);
  m.x = p.x;
  m.y = p.y;
  m.z = p.z;

  const was = m.atSurface;
  m.atSurface = m.y > SWIM.floatY - 0.4;
  if (m.atSurface && !was) m.events.push({ type: 'surface', speed: Math.abs(m.vy) });
  if (!m.atSurface && was) m.events.push({ type: 'dive' });

  // Pose: lean into turns, nose up or down with the swim.
  const vert = m.atSurface && rise >= 0 ? 0 : m.vy;
  m.pitch = damp(m.pitch, clamp(Math.atan2(vert, Math.max(1.5, m.speed)) * 1.2, -1.1, 1.1), 5, dt);
  m.roll = damp(m.roll, -turn * Math.min(1, m.speed / 4) * 0.5, 5, dt);
  m.stroke = damp(m.stroke, Math.min(1, Math.abs(m.speed) / SWIM.speed + Math.abs(m.vy) / 6), 3, dt);
}

function ride(m, turn, fwd, rise, ocean, dt) {
  const d = m.ride;
  m.yaw += turn * 1.7 * dt;
  const target = fwd >= 0 ? SWIM.rideMin + fwd * (SWIM.rideSpeed - SWIM.rideMin) : 2;
  m.speed = damp(m.speed, target, 2, dt);
  const fx = Math.sin(m.yaw);
  const fz = -Math.cos(m.yaw);
  if (m.mode === 'leap') {
    // Up, out of the water, and down again with a splash.
    m.vy -= SWIM.gravity * dt;
  } else {
    m.vy = damp(m.vy, rise * 5, 4, dt);
    // Rising fast at the top? Jump!
    if (rise > 0.5 && d.y > -1.2 && m.speed > 7) {
      m.mode = 'leap';
      m.vy = SWIM.leapUp;
      m.events.push({ type: 'leap' });
    }
  }
  p.x = d.x + fx * m.speed * dt;
  p.y = d.y + m.vy * dt;
  p.z = d.z + fz * m.speed * dt;
  pushSphere(ocean, p, 0.9, { surface: m.mode === 'leap' ? 6 : -0.9 });
  if (m.mode === 'leap' && m.vy < 0 && p.y < -0.6) {
    m.mode = 'ride';
    m.vy = -2;
    m.events.push({ type: 'splash', x: p.x, z: p.z, size: 1.4 });
  }
  if (m.mode === 'leap' && p.y > 0.2 && d.y <= 0.2) m.events.push({ type: 'splash', x: p.x, z: p.z, size: 1 });
  // The dolphin goes where you steer; you sit on its back.
  d.x = p.x;
  d.y = p.y;
  d.z = p.z;
  d.yaw = m.yaw;
  d.pitch = clamp(Math.atan2(m.vy, m.speed), -0.9, 0.9);
  d.speed = m.speed;
  m.x = d.x - fx * 0.2;
  m.y = d.y + 0.75;
  m.z = d.z - fz * 0.2;
  m.pitch = d.pitch * 0.5;
  m.roll = damp(m.roll, -turn * 0.35, 5, dt);
  m.atSurface = d.y > -1.5;
  m.stroke = damp(m.stroke, 0.2, 3, dt);
}

/** Has she found any treasure? Returns the treasure (once), else null. */
export function findTreasure(m, ocean, found) {
  for (const t of ocean.treasures) {
    if (found.has(t.id)) continue;
    const d = Math.hypot(t.x - m.x, t.y + 0.6 - m.y, t.z - m.z);
    if (d < SWIM.findReach) return t;
  }
  return null;
}
