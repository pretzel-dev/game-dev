# Dustline: a toy rally car in a stunt canyon

A no-goal driving toy. A long-travel rally buggy (big knobbly tyres, tube
cage, whip flags) loose in a red-rock desert canyon full of things to jump
on, off and round. No score, no timer, no laps, and nothing that stops you:
hit a wall or a pillar and you glance off it, land on your roof and you roll
back over, drive at the edge of the world and it curves up under you and
sends you back.

## What's in the canyon

| | |
| --- | --- |
| **The yard** | where you start: a loop-the-loop straight ahead, a row of kickers (small, medium, big), a twisting barrel-roll ramp, a table-top, a half-pipe, a spine, a quarter-pipe bowl, cones, oil drums and a stack of crates to knock flying. |
| **The drum** | a wooden wall-of-death: drive in through the doorway, keep it pinned and ride the wall. A lip at the top turns you back in. |
| **The spiral** | a road that winds a turn and a quarter up the outside of a mesa, then a ski jump off the top: about four seconds in the air. |
| **The skyway** | an elevated, banked road on pillars that swoops between the striped cones of the badlands, with a gap to jump in the middle and a launch off the end. |
| **The wash** | a dry riverbed shaped like a half-pipe across the south of the map. The main road jumps it on a pair of ramps, swoops through it on a trestle dip, and the south road crosses it on an arched bridge. |
| **The dunes** | a field of wind-blown dunes in the north-east, each one a kicker. |
| **Mesas and cones** | flat-topped mesas and striped cones, all with a curved foot you can ride up like a quarter-pipe. |
| **The roads** | a dirt rally loop round the whole canyon with crests that throw you into the air, two spurs to the yard, rock arches, telegraph poles, wind turbines on the shelf mesa. |
| **The falls** | a sheer red butte in the west with a creek across its top pouring off the edge into a plunge pool: mist, a rainbow, cottonwoods, two thin spires. A dirt road runs straight into the pool; wade through, or drive under the falling water. |
| **Balloons and hoops** | hot air balloons drift over the drum, in the path of the spiral's ski jump, off the end of the skyway and high over the canyon. Hit one and it bounces you like a trampoline. Hoops hang over the canyon jump and the yard's big kicker. |
| **The rim** | all the way round, the ground curves up into a giant bowl. You can't leave; you can only go up it and come back down. |

Boost pads (green, with running arrows) sit in front of the big jumps, and
the exhausts spit flame while you boost.

Nothing has a hard edge: every ramp slopes down at the back, half-pipe ends
taper to the ground, low decks become embankments, and low ledges lift the
car over them. If you ever do get pinned with the gas down, the car is
lifted out after a second or two.

## Controls

**Keyboard**: W/S gas and brake (brake again to reverse), A/D steer, Shift
boost, Space handbrake. In the air: A/D spin, W/S flip (only if you press
them after take-off, so holding the gas off a ramp doesn't flip you), Q/E
barrel roll. R puts you back on your wheels, C changes camera, L the light,
M sound, H hides the hints, Esc opens the menu (paint, light, back to the
start).

**Touch**: drag anywhere on the left half to steer (and up/down in the air to
flip), Gas and Brake on the right, » boosts. ☰ (top right) opens the menu to
change the paint or the light. Brake while steering hard at
speed for a handbrake slide.

**Gamepad**: left stick steers and flips, right trigger gas, left trigger
brake, A boost, B handbrake, bumpers roll, Y camera, Start back on wheels.

Let go of everything in the air and the car levels itself and turns its
wheels to the ground. Land a flip, a spin, a barrel roll, big air, a loop or
a wall ride and a word pops up; nothing is counted.

## Run it

```bash
npm ci
npm run dev       # http://localhost:5173
npm run check     # drives the car through everything, headless (a few seconds)
npm run build     # → dist/, a plain static site
```

`?gfx=low` forces the light graphics setting.

## How it is put together

```
src/
  main.js              wiring, the frame loop, light presets, the one-off notes
  world/
    terrain.js         the height field: rolling desert, dunes, mesas and cones,
                       the wash, pads, roads (pressed in, with crests), the rim
    pieces.js          stunt pieces as swept shapes: a path of frames × a cross-section
    layout.js          where every piece, pad, pillar, prop and boulder goes
    collide.js         what the car can touch: height field + triangle grid +
                       cylinders + boulders; raycasts and sphere contacts
  car/
    tuning.js          every number that decides how it drives
    physics.js         rigid body on four raycast springs, tyres, air control,
                       glancing off walls, rolling back over, trick detection
    model.js           the buggy, posed from the physics every frame
    camera.js          chase camera that follows the travel, tilts in loops
    input.js           keyboard, touch, gamepad
  render/
    terrain-mesh.js    the ground, painted in the shader (sand, strata, mud, dirt road)
    track-mesh.js      all pieces as one mesh; the "paint" attribute picks stripes,
                       kerbs, planks, chevrons and boost arrows
    props.js           instanced cacti, Joshua trees, scrub, rocks, poles, turbines
    loose.js           cones, drums, crates and tumbleweeds that get knocked about
    dust.js            the dust plumes
    sky.js  post.js    painted sky; ink outlines, grade and grain (from Covewind)
  audio/audio.js       gearbox, tyres, wind, thumps, splashes
  audio/engine-worklet.js  the engine: a pulse-train-and-resonator model
                       (one pulse per cylinder firing, two exhaust resonators,
                       a muffler, overrun crackle) in an AudioWorklet
  world/balloons.js    where balloons drift and how hoops are crossed
  render/water.js      the falls, creek, plunge pool, mist and rainbow
  render/balloons.js   balloons and hoops
  ui/hud.js            trick words, hints, speed
tools/check.mjs        the headless driving tests
tools/stuck-probe.mjs  drives at every piece from all round, flat out, and
                       reports anywhere the car gets pinned
```

A few things worth knowing:

- **Everything the car touches is pure data.** `world/` and `car/physics.js`
  have no DOM and no rendering, so `tools/check.mjs` builds the canyon and
  drives the car through it in Node. Change the map or the tuning, run
  `npm run check`.
- **Stunt pieces are sweeps.** A loop is a path whose curvature eases up to
  `1/radius` and back, drifting sideways so the exit misses the entry; a
  half-pipe is a straight path with a U cross-section; the drum is a lathe.
  The same triangles are drawn and collided with.
- **Arcade help lives in `physics.js`**: gravity turns towards loops and the
  drum at speed, the air stabiliser and landing assist, the wall glance. The
  numbers are in `tuning.js`.
- **No art assets.** Every model is built from primitives at load; every
  surface pattern is a shader; every sound is synthesised.
