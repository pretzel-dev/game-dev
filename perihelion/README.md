# Perihelion

A slow, hard-sci-fi strategy game set in one solar system. It's a smaller-scale
sibling of Starfall: one sun, six planets with moons, a few stations and
asteroids, and very few ships. Take the system from one or two AI rivals.

## Systems

Every map has a big sun (about 16 units across); the nearest planet orbits at
52 and ships keep a few units clear of its surface.

Pick a **System** on the menu (or Random). Each is a different layout; the
rules don't change:

- **Classic:** six worlds, a belt, a few moons.
- **Giant's court:** one huge gas giant ringed with five moons.
- **Wide and cold:** few worlds, far apart; long trips, probes matter.
- **Crowded:** worlds packed close; short, sharp trips.
- **Rich belt:** eight asteroids in a thick belt.
- **Binary:** a smaller companion sun with two worlds (and a moon) of its own
  on an eccentric orbit (dashed orange line): most of the game it hangs far
  out, then it swings in fast past the outer planets and away again. When
  that happens depends on the map. Its worlds earn 50% more. Routes steer
  clear of both suns.

**Daily system:** everyone gets the same map each day (seed and system from
the date). The end screen and share image say which day it was.

## Special worlds

Two or three neutral worlds on each map carry a perk (an icon beside the name;
tap any world to see what it has). Whoever holds the world has the perk. The relay, fuel depot and fortress rock reach
nearby worlds: select or tap one to see its reach as a dashed gold ring (worlds
drift in and out of it as they orbit; the panel lists which of yours are
inside right now).

| World | While held |
|---|---|
| Rich seam (asteroid or moon) | Mines here pay double |
| Old relay | See everything inside its (large) ring |
| Fuel depot | Fleets launched from your worlds inside its ring fly 20% faster |
| Listening post | Warnings of fleets heading for your worlds |
| Fortress rock | Starts with heavy guns; +1 gun on each of your worlds inside its ring |
| Ancient archive | Research 25% faster |
| Drydock hulk | Comes with a shipyard; ships built here start as veterans |
| Tidal forge (moon of a gas giant) | Structures, upgrades and ships build twice as fast here |

## Events

From about 4–6 minutes in, then every 7–10 minutes, something turns up.
The label on the map counts down: **in m:ss** until it starts, **gone m:ss**
while nobody holds it, and **hold m:ss** (in the holder's colour) for the
time still needed to claim it.
Comets and derelicts are visitors: they fall in from the edge of the system,
whip round the sun and fly back out (about 7–8 minutes inside the planets'
orbits; slow enough to catch, since ships must match a visitor's speed to
board it), so you have to
catch them on the way; the launch panel warns if they'll be gone before your
ships arrive, and anyone still aboard when one leaves heads for home. The
other events happen at a world (never a homeworld). It's announced a minute ahead; then whoever holds
that world, with no fight going on there, for the hold time gets the reward.
Losing the world resets the clock. The label shows the icon and countdown.

| Event | Hold | Reward |
|---|---|---|
| Comet pass | 60 s | 12 credits/s while you hold it |
| Derelict warship | 45 s | 4 veteran ships |
| Lost probe signal | 40 s | A random research level |
| Ice-hauler wreck | 45 s | 450 credits |
| Refugee convoy | 30 s | That world earns +1/s for good |
| Supply cache | 30 s | A free structure upgrade there |

## Research board

R&D opens a hex board: the six branches (Drives, Sensors, Intel, Weapons,
Armour, Industry) round a centre hex, and between each neighbouring pair a
**joint tech** that needs both at level II. Tap a hex for what it does.

| Joint tech | Between | Effect |
|---|---|---|
| Entangled signals | Intel + Sensors | Read every fleet you can see (size, destination, arrival); get warnings |
| Targeting data | Sensors + Weapons | +20% firepower when attacking |
| Kinetic strike | Weapons + Drives | Arriving fleets open with a volley: a tenth of their number in defenders destroyed |
| Torch production | Drives + Industry | Ships build 25% faster and fly 10% faster |
| Hardened colonies | Industry + Armour | +1 gun on every world; guns rebuild twice as fast |
| Point-defence net | Armour + Intel | Your worlds shoot down 15% of every attacking fleet as it arrives |

Sensors levels reach less far than before (the Ansible array megaproject is the way to see it all).

## Megaprojects

The end of each joint tech: researching it unlocks a megaproject (a wonder).
Each has a gold tile in the row under the R&D board:
tap it to see what it needs, Build, then tap one of your worlds. One per world, 2000 credits,
8 minutes, and your research
stations speed it up. Each kind can be finished only once per game; several
empires can race for the same one, and the first to finish wins it; the rest
get half their money back. Only research stations speed one up. Building asks you to confirm, like a
launch. A violet ring round the world shows how far along it is, to everyone. Everyone is told when a project
starts, and a captured world's project or wonder goes to the captor.

| Megaproject | Unlocked by | Where | Effect |
|---|---|---|---|
| Sun-diver collectors | Torch production | Innermost planet | Every world you hold earns 50% more |
| Mass driver | Kinetic strike | Any planet | Fleets launched here fly 50% faster |
| Ring yard | Hardened colonies | Gas giant | Ships build three times as fast here |
| Fortress world | Point-defence net | Any world | Three times the guns; its cover reaches its family at full strength |
| Ansible array | Entangled signals | Any world | See every world and fleet in the system, and where they are going |
| War college | Targeting data | Any world | Every ship you build starts as a veteran (second rank) |

## How to play

The menu's **How to play** page has the basics with screenshots
(`public/tutorial/`, regenerated by `node tools/tutorial-shots.mjs` with the
preview server running).

- **Gas giants** start with 5 guns (they're worth a lot, so they're not a
  free early grab).
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
  that stays clear of the sun. The sun's gravity pulls on ships all through
  the flight (at the strength that holds the planets in orbit), so routes
  bend round it: dives inward are quick, climbs outward cost more. The
  planner solves for burns that still land on target (about 1 route in 20
  is too awkward and flies the plain path).
  A hop to your own moon takes under a minute; crossing the system takes
  minutes. Drive plumes are visible from far away. Ships can't be recalled.
- **Credits:** every world you hold earns credits (planets 1/s, stations
  0.6, moons 0.5, asteroids 0.3), homeworlds +0.4, plus 1.5/s per mine. They show top left.
- **Building:** select one of your worlds for its build row (on touch, tap an
  option once to read what it does, again to build; with a mouse, hover). Worlds have
  build slots by size (asteroids and small moons 1, small planets and larger
  moons 2, rocky planets 3, gas giants 4, stations 2):
  - **Shipyard** (400, 90 s): needed to build ships there. Each yard on a
    world builds one ship at a time, so two yards build two at once.
    Stations come with one.
  - **Mine** (200, 45 s): asteroids and moons only; +1.5 credits/s per level.
  - **Guns** (250, 50 s): +2 guns per level (every held world has 1).
  - **Research station** (300, 60 s): each level speeds research by 50%.
  - **Gas harvester** (350, 70 s): gas giants only; +2 credits/s per level.
  - **Orbital exchange** (450, 80 s): homeworlds only; +2.5 credits/s per level (up to II).
  - **Upgrades:** mines, guns, research stations and gas harvesters go up to level 3.
  - **Scrap:** tearing a structure down gives back 40% of what it cost (all its levels) and takes 20 s;
    it stops working at once. If the world is taken first, the scrapping is
    cancelled and the captor gets the structure.
  - **Ship** (150, 45 s): ordered at a shipyard. Queued ships can be
    cancelled for an 80% refund.
  Ships are never built automatically. Your homeworld starts with a shipyard
  and guns, 4 ships and 400 credits. A captured world keeps its finished
  structures; anything unfinished and any queued ships are lost. Nothing is
  built while a world is under attack.
- **Running dark:** while picking a destination, tap the moon button (or D); a fleet
  already flying can switch too (tap it, then **Go dark** / **Light up**; it re-plans). The
  fleet makes a short burn, coasts with its drive off, then makes a short
  braking burn: it takes about half as long again, but while coasting enemy
  sensors only spot it at a third of their usual range (a ☾ on its tag), and a launch from a world they can't see goes unannounced.
- **Agents:** Signals intercept (Intel I) unlocks them. Select one of your worlds,
  tap the agent button (250 credits), then an enemy world and Confirm (or tap
  the enemy world and **Recruit agent**). Recruiting takes 40 seconds, then the agent shows you that world, its launches
  (even dark ones) and its surroundings, skims part of its income, and slows
  any megaproject there by a quarter. Every second there's a small chance the
  agent is caught (about five minutes on average); the owner's Intel level
  and a **Security bureau** (on the world or within reach of it) make that
  much quicker. One agent per enemy world.
- **Probes:** select a world with a shipyard and tap **Probe** (80 credits)
  next to **+ Ship**, then tap a destination and Confirm. A probe flies four
  times faster than ships and is used up on a flyby: the target stays in view
  (ships, structures) for 2½ minutes. On the map it shows as ◇ (named when
  you zoom in close). On desktop, right-click a world with one of yours
  selected to go straight to launch with it as the target.
- **Upgrades apply at once:** Weapons and Armour count in every fight from the
  moment they finish; Drives also re-plan fleets already in flight, so they
  arrive sooner.
- **Research (R&D, bottom left):** one project at a time, paid in credits.
  Drives (+15% thrust per level), Sensors (range), Intel (I: enemy fleet
  sizes; II: their routes and landing points; III: arrival times and
  incoming warnings), Weapons (+15% firepower), Armour (-12% damage taken)
  and Industry (+12% build speed, +15% mine output).
- **Fog of war:** beyond your sensors, worlds show `?` for ships and hide
  their structures, and enemy fleets are invisible. Rivals have the same
  limits and research the same tree.
- **Incoming:** hostile fleets heading for a world show on its label as
  `▼5 0:42` (ships, time to arrival) in the attacker's colour, and their
  arrival points pulse.
- **Cover:** worlds in one planet's family (the planet, its moons and its
  station) back each other up when the same side holds them. The planet's
  guns fire at half strength on anyone attacking its moons or station; each
  moon's or station's guns fire at a quarter strength for the planet and the
  other satellites. Cover can't be shot down by the attackers there; only
  taking the covering world (or its own guns) removes it. The world panel
  shows the cover a world gets and which worlds its guns defend.
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
- **Time:** the 1× button cycles ½×, 1×, 2×, 4× and 8× (keys 1–5 on desktop).
- **Turnaround:** ships that arrive at a world (or take it) need 15 s before they can launch again, so fleets can't bounce straight on.

## Multiplayer (host in browser)

Up to 3 empires. Enter a name, tap **Host** and share the 5-letter code (tap
it to copy); friends tap **Join** and type it. The host can add AI players to
empty seats, then starts the game.

AI levels: **Cadet**, **Easy**, **Normal**, **Hard** and **Brutal**. Every
level judges fights with a replay of the real battle rules and sees only what
its sensors show. Going up the ladder each level thinks more often, does more
per turn (defend, attack and build in the same turn), sends safer fleets
(weak levels cut it fine and lose fights they shouldn't), runs its economy
better (ships before tech) and earns more (Cadet ×0.5, Easy ×0.7, Normal ×1,
Hard ×1.4, Brutal ×2.1). Cadet and Easy leave other empires alone for the first 8 and 4
minutes. Hard and Brutal also scout rivals with probes, read fleets closing
on their worlds, keep a home garrison later on, prefer rivals' worlds and
gather big strikes. Tested over 24 games per pairing, each level beats the
one below about 23 times in 24. `node tools/ai-ladder.mjs` plays every level against
every other (and a quick "human" stand-in) to check the order holds.

- The host's browser runs the whole game, AIs included. Guests send orders and
  receive the state four times a second over WebRTC. The free PeerJS cloud only
  brokers the first handshake.
- No time warp. Only the host can pause, and it pauses for everyone.
- If a guest drops, their empire sits idle; rejoining with the same code and
  name takes the seat back. If the host leaves, the game ends.
- Knocked-out players keep watching until one empire is left.
- For testing against a self-hosted PeerJS server, add `?peer=host:port`.

Later: move the game onto a server (Cloudflare) so it keeps running without
the host and nobody can pause.

## Breaking out

Ships can leave a world that's under attack, but the attackers get a free
shot as they climb out: half of them are lost. The AI won't try it.

## Dev view

Tap **Dev view** on the menu to turn it on. In a solo game a bar under the
clock lets you see the map as any empire (or everything), and run the clock
at 16×; a selected fleet shows which empires can see it right now (handy for
checking running dark).

## Graphics

The menu's **Graphics** link cycles Auto, High and Low (Auto picks Low on
small, low-memory phones). Low uses smaller world textures, a lighter bloom
and fewer belt rocks. Either way the game lowers its resolution by itself if
frames run slow, and raises it again when there's room. Add `?gfx=low` or
`?gfx=high` to the URL to force one.

## Controls

- Touch: tap to select, drag to rotate, two fingers to pan and zoom, double-tap
  to fly to a world.
- Mouse: click to select, drag to pan, right-drag (or Alt-drag) to rotate
  around whatever is under the cursor, scroll to zoom toward the cursor,
  double-click to fly to a world.
- Keys: WASD/arrows pan, Q/E rotate, +/- zoom, F focus the selection,
  H whole system, D run dark, Esc back out.

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
- `src/render.js`: Three.js scene: camera, labels, what goes where each frame
- `src/gfx/`: the look (all procedural, no image files):
  - `post.js`: HDR rendering, bloom, sun lens flare, tone mapping, grain
  - `sky.js`: the nebula sky baked per system, live bright stars
  - `sun.js`: the star (granulation, sunspots, corona, prominences)
  - `planets.js`: worlds painted on the GPU (continents, craters, gas
    bands, clouds, city lights), atmospheres, rings, eclipses
  - `ships.js`: instanced hulls, drive plumes, glints; `stations.js`
  - `rocks.js`: asteroids and the belt; `fx.js`: weapons fire and explosions
- `src/main.js`: touch input, UI, game loop

## Ideas for later

Ship types and per-ship fitting, gravity assists, fog of war, battles in open
space, and more detail on worlds up close (bases, yards, docks).
