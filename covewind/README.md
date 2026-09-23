# Covewind — browser free-flight toy

A no-objective arcade flying sandbox over a painted Adriatic archipelago:
cel-shaded hills of maquis and umbrella pine, white limestone, terracotta
roofs, turquoise water with drawn foam lines, and towering cumulus. It is a
floatplane, so you can throttle back, settle onto the sea (or a lake) and taxi
about. Loop over the campanile, roll under the canyon bridge, thread the hole
through the sea stack, find the grotto behind the waterfall. There is no
score, no mission, no timer and no way to crash.

**Nine islands**, close enough to see each other from the air:

| | |
| --- | --- |
| **Harbour** | the home island: a stone town on a hillside shelf round a Venetian campanile and a piazza, a lido of striped umbrellas, piers and boats, the lighthouse on the point, the summit. |
| **Cove** | a notch between two cliff arms, with somebody's afternoon on the beach — deck chair, drinks, newspaper and a radio that is still playing. The rock arch stands at its mouth. |
| **Canyon** | a flooded slot cut right through the island, with a great stone bridge high across the middle. |
| **Falls** | a tarn spilling over a high lip and down the sea cliff. The tarn is a lake you can land on, with a shepherd's hut and sheep. **Behind the falling water** a tunnel runs into a glowing blue grotto big enough to land in (somebody keeps a boat and a hammock there) and out through the far side of the island. |
| **Atoll** | a sand ring round a shallow lagoon, with a beach bar and palms. A regatta of painted sails rounds a course nearby. |
| **Chapel rock** | a domed chapel on a tiny island with a quay and a boat tied up. |
| **Fortress** | a five-sided Venetian fortress with round towers and a keep, and a sea arch through its headland. |
| **Pine island** | dark umbrella pines, a wreck in the bay, and a lake hidden among the trees with a jetty and a cabin. |
| **Sea stacks** | three towers of rock standing in the sea — the middle one pierced right through at water level, and a hermit's hut on the tallest. |

Whales work the deep channels, and a pod of dolphins comes to race you if you
skim low over open water for long enough.

Everything you see and hear is generated at runtime from maths and primitives:
the islands, the town, the trees, the boats, the clouds, the engine note. The
only dependency is Three.js.

## Run it

```bash
npm install
npm run dev          # http://localhost:5173
```

To make a deployable build:

```bash
npm run build        # → dist/, a plain static site
npm run preview
```

`dist/` can be dropped on any static host (Netlify, Cloudflare Pages, GitHub
Pages, S3…). `base` is relative, so a subdirectory works too. The build also
emits a service worker that precaches the whole app — including the bundled
copy of Three.js — so Covewind installs as a PWA and flies with no network.

Other scripts:

| Script | What it does |
| --- | --- |
| `npm run check` | Flies the model and checks the world without a browser: the stick turns the way you expect, loops go over the top, rolls come out upright, inverted flight rights itself near the sea, the aeroplane lands on water and on both lakes and gets off again, every tunnel and the bridge can be flown through without touching rock, nothing can put it through the ground, the islands stay separate, no house is in the sea, no landmark is on a cliff. |
| `npm run icons` | Regenerates `public/icons/*.png` from `tools/make-icons.mjs`. Runs automatically as part of `npm run build`. |

## Controls

**Desktop**

| Key | |
| --- | --- |
| `S` / `W` or ↓ / ↑ | climb / dive — pull back to climb, as on a stick (`I` swaps it). Hold it and you loop. |
| `A` / `D` or ← / → | bank. **Double-tap** to roll; hold the second tap to stop upside down |
| `Q` / `E` | rudder |
| `R` / `F` | throttle |
| `Space` | boost |
| `X` | display smoke: off · white · tricolore |
| `C` | camera (chase · close · postcard) |
| `L` | light (sunrise · noon · golden hour · dusk) |
| `P` | photo mode — `Esc` leaves it |
| `H` | hide the HUD |
| `M` | sound |

**Touch** — left stick flies (flick it to the edge twice to roll), the
right-hand slider is the throttle, ⚡ boosts, ☁ cycles the smoke, and the
buttons along the top change camera, light, photo mode and sound.

**Aerobatics** Casual flying is unchanged: the stick banks to an angle and
holds it, and hands off the aeroplane levels itself. But pitch has no limit,
so hold the stick back and you go over the top; double-tap a bank for an
aileron roll. Upside down you sink a little, and if you let go of everything
for a few seconds (or get near the sea) it rolls itself upright. Smoke hangs
in the air, so a loop leaves a ring you can fly back through.

**Landing** Throttle back until you are under about 30 knots, ease the nose
down, and the floats take the water; the sea stops holding you up as soon as
you are slow enough. It works on the lakes too: the tarn above the falls and
the one hidden in the pines. Steer with the stick or rudder while taxiing, and
open the throttle all the way to get off again. Come in fast and the aeroplane
skims instead, which is its own kind of fun.

**Photo mode** hides the interface, holds the aeroplane still and orbits around
it while the island carries on living. Drag to look around, pinch or scroll to
zoom, and the shutter saves a PNG straight out of the canvas.

## How it is put together

```
src/
  main.js              wiring and the frame loop
  core/                palette + light presets, cel materials, quality tiers,
                       static-mesh baking (merge.js), settings, helpers
  render/post.js       the finishing pass: ink outlines, grade, halation, paper
  world/
    terrain.js         the height field — the archipelago as pure maths, plus
                       tunnels (OVERHANGS), lakes (LAKES) and towers (OBSTACLES)
    village-plan.js    where the houses go (data, no Three.js)
    island.js          ground meshes, tunnel roofs, lakes, rocks, the arch
    water.js           sea shader: waves, caustics, sparkles, drawn foam, grotto glow
    sky.js  clouds.js  gouache sky with cirrus; cel-shaded cumulus
    lighting.js        the light presets and the cross-fade between them
    forest.js          every tree and bush, instanced, swaying
    architecture.js    roofs, shutters, arches, the campanile, battlements
    props.js           houses, boats, piers, villagers
    village.js  lighthouse.js  cove.js  falls.js  beach-camp.js  cloth.js
    landmarks.js       chapel, fortress, bridge, wreck, lido, grotto hideout…
    whales.js  dolphins.js  creatures.js
    aircraft.js        the floatplane and the neighbours
    world.js           assembles the archipelago and ticks everything on it
  flight/
    tuning.js          every number that decides how it feels
    flight-model.js    quaternion attitude, energy, the ground cushion, roofs, lakes
    wind.js            breeze, gusts and ridge lift
    camera-rig.js      three cameras (that follow through loops) and the photo orbit
    effects.js         contrails, sea spray, display smoke
    input.js           keyboard, stick, touch, double-tap rolls
  ui/                  HUD, hints, photo mode
  audio/               engine and wind, plus spatial island ambience
  pwa/sw-template.js   service worker, filled in at build time
```

A few things worth knowing if you are going to change it:

- **The islands are a function, not models.** `terrainHeightAt(x, z)` is the
  single source of truth: it takes the highest of the island fields, and
  the meshes, the collision, the tree planting, the villagers' feet, the whales
  and the audio all sample it. The coastlines are shared with the water shader
  (`coastlineGLSL()`), so the surf always breaks in the right place. Change
  `ISLANDS` or `PLACES` in `terrain.js` and run `npm run check`.
- **Overhangs, lakes and towers sit beside the height field.** A height field
  cannot hold a cave roof, so tunnels are trenches cut in it with the rock put
  back as a roof slab (`OVERHANGS`); under the roof a soft lid holds you down,
  above it the roof is ground. `LAKES` float the aeroplane at their own level.
  `OBSTACLES` are upright cylinders (bell tower, lighthouse, keep) the cushion
  lifts you over.
- **The look is cel shading plus one post pass.** Every material uses a
  stepped light ramp (`core/materials.js`); the scene renders to an off-screen
  buffer and `render/post.js` inks silhouettes from depth, grades the colour,
  adds halation and paper grain, and tone-maps on the way to the screen.
- **Static things are baked.** Villages and landmarks are built from hundreds
  of small parts and then merged into one mesh per material
  (`core/merge.js`); anything animated is marked `userData.dynamic`. Trees are
  instanced in patches so they cull.
- **Flight feel lives in `flight/tuning.js`.** Nothing in the model can end a
  flight: the ground and sea are cushions that push back and scrub a little
  speed, cliffs lift you over rather than stopping you, and a stall just drops
  the nose until the aeroplane is flying again. Below landing speed the sea
  stops cushioning you and the floats take over, which is the whole landing
  mechanic. `tools/check-flight.mjs` flies all of that in Node.
- **Performance knobs are in `core/quality.js`.** The tier is picked from the
  device on load (segment counts, shadow map size, gull and cloud counts, pixel
  ratio); if frames are still slow the game sheds shadows and pixel ratio once,
  rather than stuttering forever.
- **There are no audio files.** `audio/audio.js` synthesises the engine and
  wind; `audio/ambience.js` places gulls, surf, a village murmur and the church
  and fog bells in space with `PannerNode`s.
- **`window.__covewind`** is a small hatch for tinkering from the console:
  `teleport(x, y, z, heading)`, `flight`, `world`, `terrain`, `lighting`,
  `quality`, `renderer`, `scene`, `fps`.

## Deliberately not here

Combat, objectives, currencies, XP, timers, fail states, big HUDs,
photorealism, multi-megabyte asset packs.
