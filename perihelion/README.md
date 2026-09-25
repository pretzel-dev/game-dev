# Perihelion

A slow, hard-sci-fi strategy game set in one solar system. It's a smaller-scale
sibling of Starfall: one sun, six planets with moons, a few stations and
asteroids, and very few ships. Take the system from one or two AI rivals.

## How to play

- **Worlds orbit.** Inner planets circle the sun in about a minute and a half,
  outer ones in 25–40. Orbits are spaced so each planet's moons and stations
  have room, with a separate lane for the asteroid belt. A base that was safely distant can swing close to the
  enemy.
- **Send ships:** tap one of your worlds (blue ring), tap a target, set how
  many ships with − / +, then **Launch** (only the button launches). The dashed
  curve shows the route to where the target *will be* when the ships arrive,
  and the panel shows what's defending it and the flight time.
- **Flight:** a torch-ship rendezvous. Ships start with their launch world's
  orbital velocity, burn with one thrust vector for the first half, flip, and
  burn with a second, arriving in a parking orbit beside the target at its
  speed (they don't overshoot or fly into it). The planner picks the fastest transfer the drive allows
  that stays clear of the sun; the sun's gravity is ignored during burns.
  A hop to your own moon takes under a minute; crossing the system takes
  minutes. Drive plumes are visible from far away. Ships can't be recalled.
- **Credits:** every world you hold earns credits (planets 1/s, stations
  0.6, moons 0.5, asteroids 0.3), plus 1.5/s per mine. They show top left.
- **Building:** select one of your worlds for its build row. Worlds have
  build slots by size (asteroids and small moons 1, small planets and larger
  moons 2, rocky planets 3, gas giants 4, stations 2):
  - **Shipyard** (80, 40 s): needed to build ships there. Stations come with one.
  - **Mine** (40, 25 s): asteroids and moons only; +1.5 credits/s.
  - **Guns** (50, 30 s): +2 guns (every held world has 1).
  - **Ship** (25, 20 s): ordered at a shipyard and built one at a time.
  Ships are never built automatically. Your homeworld starts with a shipyard
  and guns, 4 ships and 120 credits. A captured world keeps its finished
  structures; anything unfinished and any queued ships are lost. Nothing is
  built while a world is under attack.
- **Battles:** ships arriving at a hostile site circle it and trade fire with
  its docked ships and surface guns until one side is gone. Rounds streak
  between actual ships in the shooter's colour, and each ship lost goes up
  in a flash and fireball where it was.
- **Camera:** the game opens on your homeworld. Tapping a world locks the
  camera onto it; double-tap (or ◎) also zooms in. Drag to rotate; two
  fingers drag the map and pinch-zoom toward your fingers. ⊙ shows the whole
  system.
- **Reading the map:** worlds show their ship count; when a moon or station
  is too close to its planet to label, its ships show on the planet's label
  (`3 +10`). Fleets in flight carry a `▸ n` tag; tap one of yours for its
  destination, arrival time and whether it's burning, flipping or braking.
- **Life:** homeworlds are ocean-and-continent worlds, and every held world
  shows city lights on its night side (stations light their windows).
- **Time:** the 1× button cycles 1×, 2×, 4× and 8×.

## Run

```sh
npm install
npm run dev
npm run check    # intercepts, flight, battles, AI-only matches
npm run build
```

`tools/smoke.mjs` drives the built game on a phone-sized touch viewport with
Playwright (`npm run preview` first; Playwright isn't a dependency).

## Code

- `src/sim.js`: orbits, intercept planning, flights, production, battles
- `src/ai.js`: AI rivals, one action at a time
- `src/render.js`: Three.js scene, procedural worlds, ships and effects
- `src/main.js`: touch input, UI, game loop

## Ideas for later

Ship types and per-ship fitting, gravity assists, fog of war, battles in open
space, and more detail on worlds up close (bases, yards, docks).
