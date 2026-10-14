/**
 * Every number that decides how the car feels. Tune here, not in the model.
 *
 * Units are SI: metres, seconds, kilograms, newtons. Gravity is a little
 * stronger than Earth's so jumps land with a thump instead of floating, but
 * the suspension is long and soft, like a trophy truck's.
 */
export const TUNING = {
  gravity: 12,
  mass: 1100,
  // Moments of inertia about the car's own axes (pitch, yaw, roll). A bit
  // heavier than a real box this size, so it is calm on the ground.
  inertia: [2300, 2500, 900],

  // Wheels, in the car's frame: +x left, +y up, +z forward.
  track: 0.98, // half the distance between left and right wheels
  front: 1.4, // axle positions from the centre of mass
  rear: -1.3,
  mountHeight: -0.22,
  wheelRadius: 0.46,
  restLength: 0.62, // suspension, fully extended
  travel: 0.5, // how far it can compress before the bump stop
  spring: 17000,
  damper: 2100, // compressing
  rebound: 1500, // extending
  bumpStop: 90000,
  // Tyre forces act this far up from the contact patch towards the centre
  // of mass, which keeps the car from tripping over its own grip.
  rollCentre: 0.55,

  grip: 1.35, // tyre friction coefficient, all four
  gripSlide: 0.55, // rear grip with the handbrake on
  lateralStiffness: 0.75, // fraction of sideways slip killed each step
  rolling: 0.012,
  drag: 0.32, // air drag coefficient (force = drag × v²)

  engine: 11.5, // m/s² of push at a standstill
  topSpeed: 47,
  reverseSpeed: 14,
  brake: 18, // m/s²
  boost: 9, // extra m/s² while boosting
  boostTopSpeed: 62,
  boostPad: 38, // m/s² while over a boost pad
  boostPadTop: 58,

  steerMax: 0.62, // radians at walking pace
  steerFalloff: 15, // speed (m/s) at which the steering lock has halved
  steerRate: 5,

  downforce: 0.35, // N per (m/s)² per kg, with two or more wheels down
  stickSpeed: 9, // on loops and the drum, start pinning above this speed…
  stickFull: 18, // …and pin fully above this one

  airSpin: 4.6, // rad/s for flips, spins and rolls in the air
  airResponse: 7,
  landAssist: 3.2, // how keenly it turns its wheels to the ground when you let go
  landAssistRange: 14,

  // The body, as spheres in the car's frame: [x, y, z, radius].
  body: [
    [0, 0.05, 1.25, 0.72],
    [0, 0.05, -1.15, 0.72],
    [0, 0.35, 0.05, 0.78],
  ],
  restitution: 0.15,
  wallKeep: 0.82, // a glancing blow keeps this share of your speed, turned along the wall
};
