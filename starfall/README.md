# Starfall

A touch-first, real-time 3D space strategy game. Take the sector from 1–3 AI
rivals by sending ships between star systems.

## How to play

- **Send ships:** tap one of your stars (blue), then tap any other star. Or
  drag from your star to the target. The ¼ / ½ / All buttons choose how much
  of the garrison goes. Fleets can't be recalled.
- **Upgrade:** with your star selected, tap **Upgrade**. It costs ships and
  raises the star's production and garrison cap (up to level 4; the rings
  show the level). A captured star drops one level.
- **Camera:** drag empty space to orbit, pinch (or scroll) to zoom.
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
