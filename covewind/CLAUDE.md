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

- **Look**: cel shading everywhere (a stepped light ramp in
  `core/materials.js`), and one finishing pass (`render/post.js`) that inks
  silhouettes from depth, grades the colour (warm lights, blue-violet
  shadows), adds halation and paper grain, and tone-maps. Gouache sky with
  cirrus (`world/sky.js`), flat-bottomed cel cumulus plus towers on the horizon
  (`world/clouds.js`), a sea with caustics, sparkles and drawn foam lines that
  glows blue in the grotto (`world/water.js`), and wind shimmer over the
  meadows. Palette is the Adriatic: limestone, maquis, golden grass, umbrella
  pines, terracotta, turquoise.
- **Flight**: quaternion attitude, so pitch has no limit (hold back to loop).
  The stick banks to an angle and holds it; hands off it levels. Double-tap a
  bank (or flick the touch stick twice) for an aileron roll; hold the second
  tap to stop inverted. Inverted flight sinks; let go for `invertedPatience`
  seconds or get near the sea and it rolls upright. Speed trades against
  height, a stall is a soft nose-drop. Pull back to climb by default; `I` or
  the title-card chips swap it.
- **Display smoke** (`X` / ☁): white or tricolore, long-lived puffs from the
  wingtips and tail. First loop/roll/inverted flight gets a one-off word.
- It is a **floatplane**: under about 30 knots it settles onto the sea — or a
  lake (`LAKES`: the tarn over the falls, the hidden pine lake) — taxis, and
  unsticks at full power.
- Forgiving collision: ground and sea are cushions, a look-ahead lifts you
  over cliffs, slopes nudge you away. **Overhangs** (`OVERHANGS` in
  `terrain.js`): tunnels and the canyon bridge have a soft lid underneath and
  count as ground on top. **Obstacles** (`OBSTACLES`): upright cylinders for
  the campanile, lighthouse, chapel and fortress keep. No fail state.
- Wind: breeze, gusts, ridge lift; drives flags, laundry, trees and audio.
- Cameras (chase, close, postcard) follow the aeroplane's own axes through
  aerobatics; photo mode with a PNG shutter.
- Light presets: sunrise, noon, golden hour, dusk — a *choice*, cross-faded.
- **Nine islands** from one analytic height field: harbour (stone town with a
  Venetian campanile, piazza, lido, piers, lighthouse), cove (beach camp,
  rock arch), canyon (flooded slot, stone bridge), falls (tarn you can land
  on, a tunnel behind the waterfall into the blue grotto and out the far
  side), atoll (sand ring, beach bar), chapel rock, fortress (sea arch through
  the headland), pine island (wreck in the bay, hidden lake), sea stacks
  (spires, one pierced by a tunnel). See `world/landmarks.js`.
- Life: whales, a dolphin pod that races you when you skim open water
  (`world/dolphins.js`), a regatta of painted sails, fishing boats, gulls that
  scatter, villagers, sheep, three AI aeroplanes.
- Models are procedural but shaped: the floatplane is lathed and extruded
  (`world/aircraft.js`), houses are Dalmatian stone with hipped roofs and
  shutters (`world/architecture.js`, `props.js`), boats are lofted gozzo
  hulls, trees are instanced crowns of soft lumps (`world/forest.js`).
- Procedural audio, PWA, Vite, `three@0.186.0` the only runtime dependency,
  no art assets.

## Architecture notes

- `src/world/terrain.js` is the single source of truth for the archipelago
  (`ISLANDS`, `PLACES`, `terrainHeightAt`, plus `OVERHANGS`, `LAKES`,
  `OBSTACLES`) and is deliberately free of Three.js so it can be tested in
  Node (`npm run check`) and shared with the water shader.
  `terrainHeightAt(x, z, true)` gives the ground *before* tunnels were cut —
  use it for anything built on a tunnel roof.
- `src/flight/tuning.js` holds every number that decides how the aeroplane
  feels. Tune there, not in the model. `flight.heading/pitch/roll` are derived
  from `flight.quat` every frame; setting them by hand still works (the model
  notices and rebuilds the quaternion).
- `src/core/quality.js` holds the device tiers (including MSAA and halation
  for the post pass) and the one-shot degrade path.
- Draw calls: build static things from as many parts as you like, then
  `bakeStatic(group)` (world space) or `bakeLocal(group)` (for things that
  move as a whole). Mark animated parts `userData.dynamic = true`. Trees go
  through `createTree` → `forest.js`, never as individual meshes.
- Do not introduce React. This is a realtime 3D toy, not an app UI.

## Good next improvements

- A grass strip or beach to settle onto, for the wheels the floats replaced.
- Weather as a choice alongside the light (haze, high cloud, a summer shower).
- Gentle "postcards": save the photo with the light and the place's name.
- Fishing boats that leave the harbour in the morning and come back at dusk.
- Instanced gulls and villagers (they are still a few meshes each).
- The AI aeroplanes could fly the occasional loop, trailing smoke.

## Things to avoid

- Combat, objectives, currencies, XP, timers or fail states.
- Generic game UI or large HUDs.
- Heavy physics simulation that makes the plane hard to enjoy on touch screens.
- Photorealism; the geometry should remain graphic and charming.
- Loading multi-megabyte asset packs unless they clearly improve the experience.
