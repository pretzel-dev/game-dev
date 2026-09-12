# Covewind — browser free-flight toy

A no-objective arcade flying sandbox above a stylised Mediterranean fishing
island. It is a floatplane, so you can throttle back, settle onto the sea and
taxi about — landing in the hidden cove is the closest thing here to a
destination. Follow the coast, fly through the arch, take a photograph, stop
whenever you like. There is no score, no mission, no timer and no way to crash.

Everything you see and hear is generated at runtime: the island, the village,
the boats, the gulls, the engine note and the harbour gulls are all built from
maths and primitives. The only dependency is Three.js.

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
| `npm run check` | Flies the model and checks the world without a browser: the stick turns the way you expect, the aeroplane lands on water and gets off again, nothing can put it through the island, no house is in the sea, no landmark is on a cliff. |
| `npm run icons` | Regenerates `public/icons/*.png` from `tools/make-icons.mjs`. Runs automatically as part of `npm run build`. |

## Controls

**Desktop**

| Key | |
| --- | --- |
| `S` / `W` or ↓ / ↑ | climb / dive — pull back to climb, as on a stick (`I` swaps it) |
| `A` / `D` or ← / → | bank |
| `Q` / `E` | rudder |
| `R` / `F` | throttle |
| `Space` | boost |
| `C` | camera (chase · close · postcard) |
| `L` | light (sunrise · noon · golden hour) |
| `P` | photo mode — `Esc` leaves it |
| `H` | hide the HUD |
| `M` | sound |

**Touch** — left stick flies, the right-hand slider is the throttle, ⚡ boosts,
and the buttons along the top change camera, light, photo mode and sound.

Land in the cove and taxi up to the beach: somebody has left a deck chair, a
table of drinks, a newspaper and a radio on the sand, and the radio is still
playing — you can hear it from the water.

**Landing** Throttle back until you are under about 30 knots, ease the nose
down, and the floats take the water; the sea stops holding you up as soon as
you are slow enough. Steer with the stick or rudder while taxiing, and open the
throttle all the way to get off again. Come in fast and the aeroplane skims
instead, which is its own kind of fun.

**Photo mode** hides the interface, holds the aeroplane still and orbits around
it while the island carries on living. Drag to look around, pinch or scroll to
zoom, and the shutter saves a PNG straight out of the canvas.

## How it is put together

```
src/
  main.js              wiring and the frame loop
  core/                palette, materials, quality tiers, settings, helpers
  world/
    terrain.js         the height field — the island as pure maths
    village-plan.js    where the houses go (data, no Three.js)
    island.js          ground mesh, cliffs, sea stacks, the arch
    water.js           sea shader: waves, glitter, shoreline surf
    sky.js             gradient dome with a sun
    lighting.js        the three light presets and the cross-fade between them
    village.js  lighthouse.js  cove.js  props.js  cloth.js
    beach-camp.js      the deck chair, drinks, newspaper and radio in the cove
    creatures.js       gulls that scatter, villagers who look up
    aircraft.js        the aeroplane model and the neighbours
    world.js           assembles the island and ticks everything on it
  flight/
    tuning.js          every number that decides how it feels
    flight-model.js    attitude, energy, and the ground cushion
    wind.js            breeze, gusts and ridge lift
    camera-rig.js      three cameras and the photo orbit
    effects.js         wingtip contrails and sea spray
    input.js           keyboard, stick, touch
  ui/                  HUD, hints, photo mode
  audio/               engine and wind, plus spatial island ambience
  pwa/sw-template.js   service worker, filled in at build time
```

A few things worth knowing if you are going to change it:

- **The island is a function, not a model.** `terrainHeightAt(x, z)` is the
  single source of truth: the mesh, the collision, the tree planting, the
  villagers' feet and the audio all sample it. The coastline is shared with the
  water shader (`coastlineGLSL()`), so the surf always breaks in the right
  place. Change `COAST` or `PLACES` in `terrain.js` and run `npm run check`.
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
  `quality`, `fps`.

## Deliberately not here

Combat, objectives, currencies, XP, timers, fail states, big HUDs,
photorealism, multi-megabyte asset packs.
