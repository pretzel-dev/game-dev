# Starfall

A touch-first, real-time 3D space strategy game. Take the sector from 1–3 AI
rivals by sending ships between star systems.

## How to play

- **Send a fleet:** tap one of your stars (blue), then tap a target. The panel
  shows your fleet against the defenders and the travel time. Pick ¼, ½ or
  All, then tap **Launch** (or tap the target again). Systems are far apart and
  crossings take 30–90 seconds, so each launch is a big commitment. Fleets
  can't be recalled.
- **Battles:** a fleet reaching a hostile star lays siege, and the fight plays
  out over several seconds. Battles blend Lanchester's laws (the *battle
  intensity* setting, default 0.5): bigger forces win more cheaply than the
  plain difference (80 vs 20 leaves about 72; 60 vs 50 leaves about 18), and
  fleets that arrive one after another are beaten one at a time. Even
  lopsided fights take several seconds. Each garrison ship is worth 1.1
  attackers, +0.05 per factory level. A star under siege stops
  producing. The label shows `defenders ⚔ attackers`.
- **Space battles:** hostile fleets that pass very close to each other stop and
  fight where they are. The survivors carry on to their target.
- **Neutral stars** are lightly held and never grow or upgrade.
- **Upgrade:** with your star selected, tap **Upgrade**. You pay the ships up
  front, then the upgrade takes 12–30 seconds to build. It raises the star's
  production and garrison cap, up to level 4; the rings show the level. A
  captured star drops one level and loses any upgrade it was building.
- **Fog of war:** you only see owners, ship counts and battles within sensor
  range of your stars. Stars beyond it show as a dim `?`, and enemy fleets out
  there are hidden. Your fleets can still fly into the unknown.
- **Tech:** with a star selected, tap **Tech**. Research is paid in ships from
  that star and takes time, one project at a time:
  - *Sensors I–III:* see further.
  - *Fleet intel I–II:* see enemy fleet sizes, then their targets and arrival
    times.
  - *Drives I–II:* faster fleets.
- **Rivals** play under the same rules: one action at a time (a launch from one
  star, an upgrade or a research), only what their sensors show, and the same
  tech tree.
- **Camera:** drag with one finger to rotate. Pinch (or scroll) to zoom
  toward your fingers, and move two fingers to pan. Dragging from your selected
  star aims it at another star instead.
- The bar at the top shows each side's share of all ships.
- You win when no rival holds a star or has a fleet in flight.

## Settings

**Settings** on the menu has sliders for playtesting: battle intensity
(0 = winner keeps the difference, 1 = full square law), battle speed and pace, defence
bonus, fleet speed, space engagement range, production, starting ships, and the
AI's minimum fleet and pace. Changes are saved on the device.

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
