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
- The owner wants an epic with things to do now, in the mid term and in the
  long term, and worlds that feel like places, not only ships. So: world
  traits (`TRAITS`) and per-kind structures make each world different;
  research (`TECH`) is five lines with either/or doctrine choices; agents
  (`sendAgent`, `sabotage`, `buyWorld`) are the espionage side; derelicts and
  convoys (`stepEvents`) turn up to chase; ships earn rank (`rankOf`).
  The owner said to have fun and not be conservative: prefer adding a system
  with real choices over tuning numbers.
- **Wording.** The owner dislikes "Claude speak": intense or dramatic
  phrasing, flavour, and more text than needed. Write every on-screen string
  in short plain words ("Mines earn double.", "Pick one of the two."). No
  "she" for ships, no colons-for-effect, no stakes language ("for good",
  "may cost the agent"). If a line can go, remove it.
- **Stats are stats, not sentences.** The owner has asked for this many times
  and is tired of repeating it. Anything that is a number or a state is shown
  as a short label and a value (`stat()` in `main.js`: "Income +2.5/s",
  "Battery 40/60", "Yields in 30s"). No explainers on screen ("A freighter
  carries it home", "Tap a world to go there"). A description appears only
  when a button is picked, before you commit: a few plain words (`HINT`) plus
  its numbers as stats (`infoOf`, `structStats`, `shipStats`, computed from
  the rules). Follow the first game's world panel (chips, cells) for economy
  of space; nothing that looks like a button may do nothing. Check new panels
  with phone-sized screenshots before sending them.
- The strip ends in a fixed bar (`.bar`): numbers for the selection, or what
  the picked button does, with OK and cancel for `TWO_STEP` actions. Keep it
  a fixed height so the panel does not jump.
- Ships ordered together fly in formation (`type: 'form'` orders keep station
  on a leader); `loose` turns it off. `form` is also how one ship joins another.
- Research is drawn as a board (rows are lines, columns are steps, forks are
  two stacked boxes); tapping a box shows one line about it and the button.
- Panels redraw several times a second: keep their HTML steady (round times
  and bars) or taps get lost.
- Ships cost credits a second to run (`RULES.upkeep`); the owner asked for this
  (not the same as paying for fuel or repairs, which stays out).
- Orders given to some ships of a formation take only those ships; the rest
  carry on under a new leader (`setOrder`). Tapping a ship's square picks it alone.
- Scenarios are off the menu ("cold storage"): keep `scenarios.js` working but
  unlisted. A tutorial waits until movement and selection stop changing.
- New-game option `conquest`: losing the capital moves it; out only with no worlds.
- No payback times, no comma-joined fragments ("120 credits, paid on arrival"):
  whole short sentences, torpedoes as n/m, fuel as a percentage.
- Time is shown as a calendar (`S.DAY` = 8 game seconds; `mmss` and `rate` in
  `main.js` do the conversion). Never show raw seconds or "/s".
- Before inventing a feature the first game had, read how `perihelion/` did it
  and port that (the owner asked: demolish timer, turnaround, chart scrub and
  the tutorial all came across this way). Tutorial steps live in
  `src/tutorial.js`; keep them in step when buttons or flows change.
- Planet looks follow `b.zone` (hot, mild, cold by distance from the sun).
- Course choices are tiles like the other buttons (the owner tried a table and
  preferred the tiles).
- Rail sounds must stay unpitched (pitched thumps read as drums to the owner).
- Guests don't run the sim; anything a guest must see goes in `snapshot()`.
- Sound (`src/audio.js`) is generated in the browser as a trial. The owner
  dislikes cheap synth sound: if they reject it, keep interface and alert
  sounds only and source audio files.
- Tests: `npm run check`, `npm run check:matches` (24 AI-only matches; about
  2 do not finish, and the run fails above half), `node tools/smoke.mjs`,
  `node tools/mp-smoke.mjs`. The matches take over ten minutes in one process.
- AI assaults (`ai.js`): a fleet that arrives together takes a capital; one
  that trickles in dies. So the AI musters every armed ship at its capital
  (`mustering`), leaves as one formation, reinforces only in groups of three,
  keeps assaulting ships on station (no going home to rearm mid-siege) and
  breaks off below three ships. Keep those properties when changing it.
- The AI has no per-power plan: it reads each power's numbers (`FACTIONS`) to
  pick ship classes (worth per credit), research order and doctrines
  (`leanings`, `lineOrder`), sends lone corvettes to claim empty worlds and
  scraps weak ships for better ones when at the cap (`AITUNE` switches).
- Balance is measured with `node tools/tune.mjs <variant>[+variant] 96 normal 4 9000`
  (variants in `tools/variants.mjs`; 9000 plays matches out, since calling them
  early favours the Holds). About 13 minutes per 96 matches; noise is about ±6
  points per power. November 2026 result: Concord 36, Republic 53, Holds 44
  (share of games won). The Republic still leads; trimming its rails or drives
  did not help.
- Structures other than batteries, arrays and the like can be built more than
  once on a world (`TUNE.dup`, `DUP_OK`); each working yard builds its own ship.
  UI addresses a structure as `type.index`.

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
