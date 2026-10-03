# game-dev: notes for agents

Small browser games, each in its own folder with its own `package.json`
(Vite + Three.js). Mobile-first, touch-optimised, minimal UI.

| Folder | What | Status |
|---|---|---|
| `perihelion/` | Hard-sci-fi strategy in one solar system, solo vs AI or host-in-browser multiplayer | Active |
| `starfall/` | 3D space strategy across star systems | Finished |
| `covewind/` | Free-flight toy | Finished |
| `site/` | Landing page linking the games | Static |

Live site: https://pretzel-dev.github.io/game-dev/ (each game in its own path).

## Workflow

- Work on a branch, commit, push, open a PR against `main`, then **merge it
  yourself**. The owner has asked for every change to be merged, not left open.
- Merging to `main` deploys automatically: `.github/workflows/pages.yml` runs
  `npm ci && npm run check && npm run build` for every game and publishes all
  of them to the `gh-pages` branch. **A failing `npm run check` blocks the deploy.**
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
- Balance changes must keep all 20 AI-only matches finishing in `npm run check`.

Testing:

```sh
cd perihelion
npm ci
npm run check        # headless sim tests + 20 AI matches (about 2-3 min)
npm run build && npm run preview   # serves on :4173
node tools/smoke.mjs out/          # phone-sized touch test (needs Playwright + Chromium)
node tools/mp-smoke.mjs out/       # two-browser multiplayer test (needs a local PeerJS server)
```

Multiplayer uses the free public PeerJS broker by default. Sandboxes often
block it; append `?peer=127.0.0.1:9000` to the URL to use a local
`peer` server bound to 127.0.0.1 (IPv6 may be unavailable).

## Owner's preferences

- Hard sci-fi feel, in the spirit of The Expanse, but **no names from The
  Expanse**. Planet and moon names should feel celestial.
- **Minimal UI**: don't add extra numbers or maths to screens; keep panels compact
  on mobile. Consoles use hairline borders, chamfered corners, small-caps labels.
- Mobile first, but mouse and keyboard must work well too.
- Explain decisions plainly; the owner is new to hosting and infrastructure.

## Planned next

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
- Balance idea: make gun upgrades a little cheaper than a new battery.
