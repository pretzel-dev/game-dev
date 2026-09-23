/**
 * Every number that decides how the aeroplane feels, in one place.
 *
 * The aim is an aeroplane that is *pleasant*, not accurate: it trades height
 * for speed like a real one, it sinks a little in a hard turn, and it will not
 * let you break it. Nothing here can end a flight.
 */
export const TUNE = {
  // Attitude rates (radians/second at full stick).
  pitchRate: 1.3, // no limit on pitch: hold it back and you loop
  rollRate: 2.9, // how fast bank follows the stick
  yawRate: 0.52,
  maxRoll: 1.25, // the bank the stick asks for; a double-tap rolls right round
  trickRollRate: 4.4, // an aileron roll takes about a second and a half

  // Hands off, the aeroplane tidies itself up — the single biggest comfort win
  // on a touch screen.
  pitchCentring: 0.5,
  rollCentring: 1.5,

  // Speed, in the made-up units the HUD calls knots.
  minSpeed: 13,
  maxSpeed: 96,
  baseSpeed: 20,
  throttleSpeed: 40,
  boostSpeed: 21,
  // Climbing costs speed and diving gains it: the aeroplane trades energy.
  pitchSpeedTrade: 30,
  speedResponse: 1.25,

  // Turning.
  turnBase: 0.4,
  turnFromSpeed: 0.0075,
  bankSink: 0.5, // how much height a hard turn costs

  // Lift: fast means climb a touch, slow and throttled back means sink.
  liftPerSpeed: 0.02,
  // Below the neutral speed the wing gives up much faster than it gains — that
  // asymmetry is what makes throttling back feel like coming down to land.
  sinkPerSpeed: 0.24,
  liftNeutralSpeed: 34,
  idleSink: 0.5,
  invertedSink: 4.5, // upside down the wing pushes the wrong way
  invertedPatience: 3, // seconds hands-off before it rolls itself upright

  // Stall: soft, self-recovering, never fatal.
  stallSpeed: 25,
  stallAuthority: 0.45,
  stallNoseDown: 0.6,

  // Ground and water are cushions, not walls. The sea lets you get properly
  // low — that is half the fun — while the land keeps a rooftop's worth of
  // room under the wheels.
  waterCushion: 9,
  landCushion: 19,
  cushionRise: 5.5,
  lookAhead: 52,
  skimScrub: 0.22,
  skimHeight: 10,
  roofCushion: 4, // how close under an arch or a cave roof you can fly

  // On the water. Throttle back and sink onto the sea, taxi about, then
  // firewall it to unstick — the floats mean the cove is somewhere to land.
  landingSpeed: 32, // slower than this, the sea stops holding you up
  touchdownHeight: 6,
  floatDraft: 2.1, // how high the aeroplane rides above the surface
  taxiSpeed: 34, // at full throttle this passes takeoffSpeed
  taxiBoost: 9,
  takeoffSpeed: 30,
  waterSteer: 0.85,
  waterDrag: 0.9,
  waterBrake: 2.6, // pull back on the stick to come to a stop

  // Sky and sea breeze limits.
  ceiling: 330,
  softCeiling: 300,
  homeRadius: 1450,
  turnHomeRate: 0.18,
};
