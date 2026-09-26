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
  - **Shipyard** (400, 90 s): needed to build ships there. Each yard on a
    world builds one ship at a time, so two yards build two at once.
    Stations come with one.
  - **Mine** (200, 45 s): asteroids and moons only; +1.5 credits/s per level.
  - **Guns** (250, 50 s): +2 guns per level (every held world has 1).
  - **Research station** (300, 60 s): each level speeds research by 50%.
  - **Upgrades:** mines, guns and research stations go up to level 3.
  - **Ship** (150, 45 s): ordered at a shipyard. Queued ships can be
    cancelled for an 80% refund; any structure can be demolished for 25% of
    its cost (Demolish in the build row).
  Ships are never built automatically. Your homeworld starts with a shipyard
  and guns, 4 ships and 400 credits. A captured world keeps its finished
  structures; anything unfinished and any queued ships are lost. Nothing is
  built while a world is under attack.
- **Research (R&D, top bar):** one project at a time, paid in credits.
  Drives (thrust), Sensors (range), Intel (I: enemy fleet sizes; II: their
  destinations, arrival times and incoming warnings), Weapons, Armour and
  Industry (build speed, mine output).
- **Fog of war:** beyond your sensors, worlds show `?` for ships and hide
  their structures, and enemy fleets are invisible. Rivals have the same
  limits and research the same tree.
- **Incoming:** hostile fleets heading for a world show on its label as
  `▼5 0:42` (ships, time to arrival) in the attacker's colour, and their
  arrival points pulse.
- **Planetary cover:** a planet's guns also fire, at half strength, on
  anyone attacking a moon or station held by the same side. Take the planet
  (or knock out its guns) and its satellites get much easier.
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
