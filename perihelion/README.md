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
  many ships with − / +, then **Launch** (or tap the target again). The dashed
  curve shows the route to where the target *will be* when the ships arrive,
  and the panel shows what's defending it and the flight time.
- **Flight:** a torch-ship rendezvous. Ships start with their launch world's
  orbital velocity, burn with one thrust vector for the first half, flip, and
  burn with a second, arriving at the target's position *and* speed (they
  don't overshoot). The planner picks the fastest transfer the drive allows
  that stays clear of the sun; the sun's gravity is ignored during burns.
  A hop to your own moon takes under a minute; crossing the system takes
  minutes. Drive plumes are visible from far away. Ships can't be recalled.
- **Sites** (planets, moons, stations, asteroids) build ships slowly, up to 12,
  and have guns that rebuild after a fight. Neutral sites show their guns (◆).
- **Battles:** ships arriving at a hostile site circle it and trade fire with
  its docked ships and surface guns until one side is gone. Rounds streak
  between actual ships in the shooter's colour, and each ship lost goes up
  in a flash and fireball where it was.
- **Camera:** drag to rotate, pinch to zoom, two fingers to pan. Double-tap
  anything (or ◎) to fly to it and follow it; ⊙ returns to the whole system.
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
