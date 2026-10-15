# Dustline: implementation brief

The core idea: **a toy rally car in a canyon packed with fun things to drive
on, with no goal.** The owner's reference is Joy Ride on the Xbox 360: fast,
bouncy, lots of ramps, loops and jumps, tricks in the air. There is never a
score, timer, lap, unlock or fail state, and **nothing ever stops the car
dead**: walls and pillars deflect it along, the rim of the map is a bowl that
sends it back, and it rolls itself upright.

Prioritise, in order:

1. Driving feel (suspension, grip, air control, landings).
2. The map: always something nearby to jump, ride or fly off.
3. Camera feel.
4. Look and sense of place (warm red-rock desert, toy-like, cel-shaded).
5. Mobile performance and touch feel.

## Rules that keep it working

- `src/world/*` and `src/car/physics.js` / `tuning.js` stay free of the DOM
  and of rendering: `tools/check.mjs` runs them in Node. Physics may use
  Three.js maths classes (they run in Node).
- **Run `npm run check` after any change to the map or the tuning.** It
  drives the loop, kickers, drum, spiral, skyway, canyon jump, a pillar hit,
  the rim and random mashing. A failing check blocks the deploy.
- New stunt pieces go in `world/layout.js`, built with `world/pieces.js`
  (a path of frames swept by a cross-section). Use `addPiece` so they are
  both drawn and collided with. Sweeps are wound so face normals are
  (across) × (along); keep that, or shadows go wrong on the piece.
- **No hard stops.** Every piece must be climbable or deflecting from any
  side: kickers get a back slope, low undersides use `dropBelow`, extrusions
  can `taper` their ends. `tools/stuck-probe.mjs` (also run by the checks)
  drives at every piece from eight directions and fails if the car gets
  pinned.
- Anything elevated needs `holdUp(frames)` for pillars (which are also
  collision cylinders).
- Feel numbers go in `car/tuning.js`, not in the model.
- Terrain changes go in `world/terrain.js` (`MESAS`, `PADS`, `ROADS`, the
  wash and the rim). Roads must cross the wash only where a piece carries
  them (the checks count the crossings).
- Minimal UI: a trick word, a hint now and then, a small speed readout.
