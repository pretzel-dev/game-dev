# Bellbrook: a toy fire engine in a little town

A no-lose driving toy for small children who love fire engines. You drive a
big red fire engine round a cute little town. Now and then the bell rings:
there's a (very small, very friendly) fire somewhere, or a kitten stuck up a
tree. Follow the glowing arrows, stop, spray the fire until it's out (or raise
the ladder for the kitten), and everyone cheers. Then the next one.

There is no score, no timer, no fail state and nothing to get stuck on. Fires
never spread and never grow back. Nobody is ever in danger.

## What makes it a love letter to fire engines

- **The fire engine itself**: big cab with two firefighters in yellow helmets,
  shiny roller-door lockers, a ladder on a turntable, a water cannon on the
  roof, a brass bell on the front, blue lights that flash with the siren.
  Five paint colours.
- **The siren**: two-tone "nee-naw". People stop and wave, and cars pull in to
  the kerb and wait for you to pass.
- **The horn**: everyone nearby waves (and hops).
- **The water**: a real arcing stream with splashes and wet patches. Spray it
  anywhere: at the fire, at the fountain, at people (they giggle and a little
  heart pops up).
- **The ladder**: swings round, rises and extends. Park by the kitten's tree
  and the kitten climbs down it. If you just wait by the tree, it goes up by
  itself.
- **The fire station**: you start on the apron in front of three big red doors,
  under the brass bell, with three firefighters waving you off.
- **The cheering**: when a fire goes out, everyone around jumps up and down,
  there's confetti, stars, clapping, a crowd going "yaaay!" and a chime.

## The town

Six by six blocks, all different neighbourhoods:

| | |
| --- | --- |
| **Houses** | pastel houses with pitched roofs, front gardens, flower beds, trees (kittens love these), wheelie bins and washing lines |
| **Shops** | the bakery, toy shop, ice cream shop, sweet shop, café, doughnut shop and more, with striped awnings and giant cupcakes, ice creams, lollies, teddies and teacups on the roofs |
| **Downtown** | taller buildings with water towers on top |
| **The square** | the town hall with its clock tower and a fountain |
| **The fire station, hospital, police station, school** | each with its own vehicle or playground |
| **The market** | striped stalls of apples, flowers, cheese and cakes |
| **The building site** | a crane that swings slowly, a digger, a skip and a sand pile |
| **The farm** | a big red barn, a silo, hay bales, a tractor, cows, crop fields and a windmill |
| **The park and playground** | a duck pond you can drive through, slides, swings, a roundabout and a sandpit |
| **The seafront** | a beach with bright beach huts, umbrellas, a lifeguard hut, sandcastles, a pier with a lighthouse, and boats bobbing on the sea |

People stroll round the pavements and cross at the zebra crossings; little
cars, a bus and an ice cream van (which plays its tune) drive on the left.
Day, sunset and night (with lit windows, street lamps and headlights).

## Controls

**Phone or tablet**: drag anywhere on the left half to drive (the stick
appears under your thumb; point it where you want to go). Touch anywhere on
the right half to spray water there (touch near the fire and it aims for the
fire). Big buttons: water (sprays at the fire for you), siren, horn, ladder.

**Keyboard**: arrows or WASD to drive, Space to spray (aims at the fire),
or hold the mouse button to spray where you point. F siren, H horn, L ladder,
Q/E turn the view, mouse wheel or +/− to zoom, T time of day, M sound, Esc
menu.

**Gamepad**: left stick drive, A or right trigger spray, right stick aims,
X siren, B horn, Y ladder, bumpers turn the view.

The stick is "point where you want to go": the truck turns and drives that
way, lines itself up with the road if you're nearly lined up, turns on the
spot when it's slow, slides along walls instead of pushing into them, and
backs out by itself if it ever noses into a corner.

## Run it

```bash
npm ci
npm run dev       # http://localhost:5173
npm run check     # plays the game headless (a few seconds)
npm run build     # → dist/, a plain static site
```

`?gfx=low` forces the light graphics setting.

## How it is put together

```
src/
  main.js              wiring, the frame loop, light presets, hints, the kitten
  world/               pure data and rules (no DOM, no Three.js: runs in Node)
    roads.js           the road grid, street names, the "follow the arrows" route
    city.js            every building, window, tree, prop and fire spot, by district
    collide.js         what the truck bumps into (boxes, circles, the edge of the land)
    fires.js           the calls: where the next fire or kitten is, and putting it out
    water.js           the hose: ballistic drops aimed with a real arc, and what they hit
    people.js          the townsfolk: walking, crossing, waving, watching, cheering
    traffic.js         cars on the left, taking turns at junctions, pulling over for the siren
  truck/
    physics.js         "point where you want to go" driving, sliding along walls
    model.js           the fire engine, its lights, water cannon and ladder
    camera.js          the toy-box view from above, turned a quarter at a time
    input.js           touch stick, touch-to-spray, mouse, keyboard, gamepad
  render/
    builder.js         merges thousands of little shapes into a few meshes
    town.js            draws the town; buildings in front of the truck dither away
    vehicles.js        cars, bus, ice cream van, ambulance, police car
    people.js          instanced townsfolk, and the kitten
    cars.js            places the traffic
    fx.js              water drops, flames, smoke, steam, splashes, confetti, stars, hearts
    marker.js          the arrows along the road and the badge over the fire
    sky.js  post.js    painted sky; ink outlines and colour grade (from Dustline)
  audio/audio.js       everything synthesised: engine, siren, horn, hose, crackle, cheers
  ui/hud.js            the call banner, the happy word, hints, the off-screen arrow
tools/check.mjs        the headless tests
```

A few things worth knowing:

- **The rules are pure data.** `world/` and `truck/physics.js` have no DOM or
  rendering, so `tools/check.mjs` builds the town and plays it in Node: an
  autopilot answers 25 calls in a row with the real water simulation, random
  stick-mashing checks the truck never gets stuck or ends up inside anything,
  and the townsfolk and traffic run for three minutes.
- **No art assets.** Every model is built from boxes and balls at load, every
  particle shape is drawn in a shader, every sound is synthesised.
- **Calls are always close-ish** (55–190 m away, the first one closer), always
  next to a road, and a different kind from the last two.
