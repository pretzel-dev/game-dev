# Starfall

A touch-first, real-time 3D space strategy game. Take the sector from 1–3 AI
rivals by sending ships between star systems.

## How to play

- **Send a fleet:** tap one of your stars (blue), then tap a target. The panel
  shows your fleet against the defenders and the travel time. Pick ¼, ½ or
  All, then tap **Launch** (or tap the target again). Systems are far apart and
  crossings take 30–90 seconds, so each launch is a big commitment. Fleets
  can't be recalled.
- **Upgrade:** with your star selected, tap **Upgrade**. It costs ships and
  raises the star's production and garrison cap (up to level 4; the rings
  show the level). A captured star drops one level.
- **Camera:** drag with one finger to rotate, pinch (or scroll) to zoom. Dragging
  from your selected star aims it at another star instead.
- The bar at the top shows each side's share of all ships.
- You win when no rival holds a star or has a fleet in flight.

## The main choice

Stars stop producing once full, so idle ships are wasted. Each ship can
defend, attack, or pay for an upgrade that grows production later.

## Run

```sh
npm install
npm run dev      # local dev server
npm run check    # headless rules check + AI-vs-AI matches
npm run build    # static build in dist/
```

`tools/smoke.mjs` drives the built game on a phone-sized touch viewport with
Playwright (`npm run preview` first). Playwright isn't a dependency, so link
or install it yourself.

## Code

- `src/sim.js`: rules and simulation (pure, no DOM)
- `src/ai.js`: AI opponents
- `src/render.js`: Three.js scene, labels, picking
- `src/main.js`: touch input, UI, game loop
