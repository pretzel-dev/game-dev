# Covewind — implementation brief

Preserve the core idea: **a beautiful, low-pressure browser flying toy where
the flight feel and atmosphere matter more than features.** There should never
be a mandatory mission, score, combat loop or progression system.

## Product direction

Aesthetic target: warm, hand-painted, whimsical Mediterranean aviation
adventure. Keep it original rather than reproducing specific copyrighted
characters, vehicles or locations.

Player fantasy: "I have ten minutes and want to happily fly a tiny plane around
somewhere beautiful."

Prioritise, in order:

1. Flight feel.
2. Camera feel.
3. Composition / colour / sense of place.
4. Mobile performance and touch feel.
5. Ambient life.
6. More features.

## What exists

- Arcade flight model with bank-to-turn, pitch, rudder, throttle and boost.
  Speed trades against height, hard turns cost a little lift, and a stall is a
  soft nose-drop that recovers itself.
- Forgiving collision: the ground and the sea are cushions (a low one over
  water so you can properly skim, a rooftop-high one over land), a look-ahead
  sample lifts you over cliffs, and slopes nudge you away from the rock. There
  is no fail state.
- Wind: a slowly turning breeze with gusts, plus ridge lift along the cliffs.
  It drives the aeroplane, the flags, the laundry and the wind audio together.
- 3 cameras (chase, close, postcard) plus a photo mode: one button hides the
  interface, holds the aeroplane and orbits it, with a shutter that saves a PNG.
- 3 light presets (sunrise, noon, golden hour) as a *choice*, cross-faded.
  Never a forced cycle. Remembered in `localStorage`.
- Desktop keyboard controls and purpose-built touch controls.
- Procedural audio: engine and wind, plus spatial ambience — gulls over the
  harbour and cove, surf on the nearest shore, a village murmur, church and fog
  bells. No audio files.
- Procedural world from one analytic height field: island, cliffs, sea stacks,
  a flyable rock arch, fishing village on a hillside shelf with lanes and
  laundry, harbour with piers and boats, lighthouse on a headland, hidden cove,
  trees, villagers, gulls that scatter when you buzz them, clouds, 3 AI
  aeroplanes.
- Wingtip contrails under boost and spray when you skim the water.
- PWA: installable, offline, Three.js bundled into the build.
- Vite project, `three@0.186.0` the only runtime dependency, no art assets.

## Architecture notes

- `src/world/terrain.js` is the single source of truth for the island and is
  deliberately free of Three.js so it can be tested in Node (`npm run check`)
  and shared with the water shader.
- `src/flight/tuning.js` holds every number that decides how the aeroplane
  feels. Tune there, not in the model.
- `src/core/quality.js` holds the device tiers and the one-shot degrade path.
- Do not introduce React. This is a realtime 3D toy, not an app UI.

## Good next improvements

- Landing and taxiing: a beach or a grass strip you can settle onto.
- Interiors of the cove: a cave you can fly into.
- More weather as a choice alongside the light presets (light haze, high cloud).
- Gentle multiplayer-free "postcards": save the photo with the light and place.
- Richer boat behaviour — fishing boats that actually leave the harbour.

## Things to avoid

- Combat, objectives, currencies, XP, timers or fail states.
- Generic game UI or large HUDs.
- Heavy physics simulation that makes the plane hard to enjoy on touch screens.
- Photorealism; the geometry should remain graphic and charming.
- Loading multi-megabyte asset packs unless they clearly improve the experience.
