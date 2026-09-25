# Perihelion

A slow, hard-sci-fi strategy game set in one solar system. It's a smaller-scale
sibling of Starfall: one sun, six planets with moons, a few stations and
asteroids, and very few ships. Take the system from one or two AI rivals.

## How to play

- **Worlds orbit.** Inner planets circle the sun in about two minutes, outer
  ones in about 25. A base that was safely distant can swing close to the
  enemy.
- **Send ships:** tap one of your worlds (blue ring), tap a target, set how
  many ships with − / +, then **Launch** (or tap the target again). The dashed
  curve shows the route to where the target *will be* when the ships arrive,
  and the panel shows what's defending it and the flight time.
- **Flight:** ships keep their launch world's orbital velocity, burn toward
  the intercept, flip at the midpoint and burn to brake. Drive plumes are
  visible from far away. A hop to your own moon takes seconds; crossing the
  system takes minutes. Ships can't be recalled.
- **Sites** (planets, moons, stations, asteroids) build ships slowly, up to 12,
  and have guns that rebuild after a fight. Neutral sites show their guns (◆).
- **Battles:** ships arriving at a hostile site circle it and trade fire with
  its docked ships and guns until one side is gone.
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
