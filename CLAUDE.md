# game-dev: notes for agents

Small browser games, each in its own folder with its own `package.json`
(Vite + Three.js). Mobile-first, touch-optimised, minimal UI.

| Folder | What | Status |
|---|---|---|
| `perihelion/` | Hard-sci-fi strategy in one solar system, solo vs AI or host-in-browser multiplayer | Live; being replaced |
| `perihelion-next/` | The rebuilt Perihelion: a handful of named ships, real fuel and flight, battles in open space | Active (in testing) |
| `starfall/` | 3D space strategy across star systems | Finished |
| `covewind/` | Free-flight toy | Finished |
| `dustline/` | Toy rally car in a stunt canyon (no goal) | Active |
| `bellbrook/` | Toy fire engine in a cute town: put out fires, everyone cheers (for small children, no lose state) | Active |
| `shellsong/` | Charlotte's mermaid game: choose your colours, swim, find treasure, ride dolphins, the palace and your throne | Active |
| `site/` | Landing page linking the games | Static |

Live site: https://pretzel-dev.github.io/game-dev/ (each game in its own path).

## Workflow

- Work on a branch, commit, push, open a PR against `main`, then **merge it
  yourself**. The owner has asked for every change to be merged, not left open.
- Merging to `main` deploys automatically: `.github/workflows/pages.yml` runs
  `npm ci && npm run check && npm run build` for every game and publishes all
  of them to the `gh-pages` branch. **A failing `npm run check` blocks the deploy.**
  Perihelion's 20 AI-only matches (`npm run check:matches`, slow) run in the
  deploy only when `src/sim.js` or `src/ai.js` changed; run them by hand before
  merging a balance change.
- Keep changes small and focused; the owner tests on a phone and a desktop.

## Perihelion

Read `perihelion/README.md` for the rules and controls. Code map:

- `src/sim.js`: the whole game as pure data and functions (no DOM, no Three.js),
  so it runs headless. Orbits, two-burn rendezvous transfers, gravity assists,
  economy (credits, slots, structures, upgrades), research (`TECH`), fog
  (`visibility`), battles (`fight`), veterancy, events (`game.events`), stats.
- `src/ai.js`: AI players. One action per "think"; difficulty is think rate
  plus `skill` (the chance it follows through on each smart move).
- `src/render.js`: Three.js view. Reads game state every frame; owns the camera
  (`orbit`, `pan`, `zoomAt`, `zoomToward`, `rotateAround`, `focus`).
- `src/gfx/`: the graphics, all procedural (no image assets): HDR post
  (`post.js`), baked nebula sky (`sky.js`), sun, GPU-baked worlds with
  atmospheres, clouds, rings and eclipses (`planets.js`), instanced ships and
  plumes (`ships.js`), stations, asteroids and the belt (`rocks.js`), and a
  GPU particle system for weapons and explosions (`fx.js`). Custom shaders
  must include the log-depth chunks from `gfx/glsl.js`. Graphics level is
  `prefs.gfx` (auto/high/low); `?gfx=low` forces it.
- `src/main.js`: UI, input (touch, mouse, keyboard), notifications, end report
  and share image, and multiplayer glue.
- `src/net.js`: host-in-browser multiplayer over WebRTC (PeerJS for the
  handshake only). 5-letter room codes, lobby, max 3 seats, AI seats.

Rules that keep things working:

- Keep `sim.js` free of DOM and rendering; `tools/check-sim.mjs` imports it in Node.
- **All player orders go through `act()` in `main.js`** (applied directly in solo
  or on the host, sent to the host from a guest). Don't call `launch`,
  `orderShip`, `upgrade` and so on straight from UI code.
- In UI code the local player is `me`, never the constant `PLAYER` (they differ
  for multiplayer guests). The renderer uses `ui.me`.
- The renderer keeps references to body objects, so **update bodies in place**
  (see `applySnapshot`), never replace `game.bodies`.
- Guests don't run the sim: they advance `game.time` and apply host snapshots
  four times a second. Anything a guest must see has to be in `snapshot()`.
- Balance changes must keep all 20 AI-only matches finishing in `npm run check:matches`.

Testing:

```sh
cd perihelion
npm ci
npm run check        # headless sim tests (seconds)
npm run check:matches  # 20 AI-only matches, every map (minutes; run before balance changes)
npm run build && npm run preview   # serves on :4173
node tools/smoke.mjs out/          # phone-sized touch test (needs Playwright + Chromium)
node tools/mp-smoke.mjs out/       # two-browser multiplayer test (needs a local PeerJS server)
```

Multiplayer uses the free public PeerJS broker by default. Sandboxes often
block it; append `?peer=127.0.0.1:9000` to the URL to use a local
`peer` server bound to 127.0.0.1 (IPv6 may be unavailable).

## Perihelion (new build): `perihelion-next/`

The overhaul agreed with the owner (November 2026): an empire game where the
fleet is a handful of named ships that fight real battles, in real time,
multiplayer intact. Read `perihelion-next/README.md` for the rules. It lives
beside the old game and deploys to `/perihelion-next/`; when the owner says so
it replaces `perihelion/`. Cut from the old game, and possibly coming back
after testing: agents, crews and upkeep, megaprojects, timed events, fixed maps.

- `src/sim.js`: pure data and functions. Ships are integrated bodies (gravity
  from the sun and planets, thrust from the autopilot `guide`). Routes are
  found by flying an order forward (`dryRun`), so the plan and the flight use
  the same code. Tunables are at the top (`RULES`, `CLASSES`, `FACTIONS`).
- `src/render.js`: the 3D scene plus a 2D "plot table" canvas over it for all
  linework and names. `src/main.js`: UI; **all orders go through `act()`**;
  the local player is `me`.
- The look is a naval plot table: black, thin amber and bone-white lines.
  **Every button has a plain word under its icon** (the owner found icon-only
  buttons unreadable). Keep copy short and literal: no taglines, no flavour
  sentences, no tracked-out capitals, no accent bars, nothing that pulses
  (the owner reads those as the "AI look").
- **Scale matters to the owner**: space must feel vast and travel slow. Worlds
  are spread by `SPREAD` in `sim.js`; don't shrink it to shorten games.
- Touch and mouse handling in `main.js` is a port of the first game's; keep
  the two in step.
- Explaining without clutter: on touch the first tap on a button shows a
  one-line hint (`HINT` in `main.js`) and the second tap does it; mouse users
  hover. Add a hint for every new button rather than text on screen.
- Moons and stations are hidden until the view comes in on their planet
  (`v.show` in `render.js`), as in NASA's solar system viewer. Ship scale,
  drive plumes and attitude jets follow the first game, which the owner liked.
- The ship limit grows only by building habitats. The owner tried paying for
  fuel, torpedoes and repairs and rejected it: money vanishing while ships sit
  in orbit made no sense to them. Don't bring it back. Money can pile up late;
  a sink the owner accepts is still an open question.
- The owner likes small touches from the first game (credits with their rate,
  tap for a breakdown, tap anything to see what it is and what it is doing)
  and wants less on screen from far out. Orbits are fading trails, not rings.
- Systems follow our solar system (rocky worlds in, belt, giants out,
  eccentric orbits: `b.e`). Each power starts on its own kind of world.
- Panels redraw several times a second: keep their HTML steady (round times
  and bars) or taps get lost.
- Guests don't run the sim; anything a guest must see goes in `snapshot()`.
- Sound (`src/audio.js`) is generated in the browser as a trial. The owner
  dislikes cheap synth sound: if they reject it, keep interface and alert
  sounds only and source audio files.
- Tests: `npm run check`, `npm run check:matches` (at most two of 24
  may stalemate), `node tools/smoke.mjs`, `node tools/mp-smoke.mjs`.

## Owner's preferences

- Hard sci-fi feel, in the spirit of The Expanse, but **no names from The
  Expanse**. Planet and moon names should feel celestial.
- **Minimal UI**: don't add extra numbers or maths to screens; keep panels compact
  on mobile. Consoles use hairline borders, chamfered corners, small-caps labels.
- Mobile first, but mouse and keyboard must work well too.
- Explain decisions plainly; the owner is new to hosting and infrastructure.

## Planned next

- **Building overhaul (in progress).** Brief: redraw every building, station,
  special world and megaproject at believable scale, mobile-friendly. Done:
  surface buildings as "sites" (`SITES` in `gfx/structures.js`: `SITE_U`
  scale, laid over the terrain, `GROUND` parts painted with the world's map
  via the `gnd` attribute; the hull shader is at the 16-attribute limit, so
  pack anything new), contact shade, near/far detail, eclipse dimming,
  decks on gas giants; sun shadows up close (`gfx/shadow.js`); a closer
  camera on small worlds; orbital yard/harvester and station detail;
  special-world features (`perkMeshes`, `ORBITS`); megaprojects reworked
  (`gfx/megastructures.js`). The first pass of the overhaul is complete.
- Move multiplayer to a server on Cloudflare (Durable Objects): the game keeps
  running without the host, and nobody can pause. Add a TURN relay for strict
  networks. The owner has a Cloudflare account and a Cloudflare MCP connector,
  which can manage storage but not deploy code; deploys need Git integration in the
  dashboard or an API token.
- Public lobby: a list of open games to tap and join, no code needed (on the
  same Cloudflare server; codes stay for private games).
- Stats and leaderboards (on the same Cloudflare server, with a D1 database):
  - Anonymous player ID per browser plus their chosen name; no logins, emails
    or tracking cookies. Add a short privacy note and a name filter first.
  - Per match: mode, AI level, system, length, winner, and each player's
    summary (worlds, ships built/lost, research, megaprojects, spies caught),
    mostly from the existing end-report stats. Key moments too (first capture,
    megaproject done, knocked out, quit part-way) to spot drop-off and balance.
  - Leaderboards: daily system (fastest win per AI level), all-time wins and
    streaks per level, a multiplayer rating once there are enough players.
    Solo results come from the browser, so they can be faked; fine for a
    casual board, and multiplayer is trustworthy once the server runs games.
  - A password-protected owner page: players per day, matches, win rates by
    AI level, match length, popular systems.
  - In game: a leaderboard button on the menu, and your placing on the end screen.
- Possibly move hosting from GitHub Pages to Cloudflare with a custom domain,
  and one repo per project.
