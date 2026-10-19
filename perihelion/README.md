# Perihelion

A slow, hard-sci-fi strategy game set in one solar system. It's a smaller-scale
sibling of Starfall: one sun, six planets with moons, a few stations and
asteroids, and very few ships. Take the system from one or two AI rivals.

## Systems

Every map has a big sun (about 16 units across); the nearest planet orbits at
56 and ships keep a few units clear of its surface. Every map has at least one
gas giant.

**Orbits follow gravity.** Planets keep Kepler's law (a year grows with
distance^1.5). Every world has a mass, and its moons and station circle it
at the speed that mass gives (heavier worlds have faster moons), well inside
its Hill sphere, where its pull beats the sun's tides. On the usual maps the
worlds are dense (1–9% of the sun's mass), as in most space games, so moons can
sit close enough for a short hop. Each orbit tilts slightly about its own line.

Pick a **System** on the menu (or Random). Each is a different layout; the
rules don't change:

- **Classic:** six worlds, a belt, a few moons.
- **Giant's court:** one huge gas giant ringed with five moons.
- **Wide and cold:** few worlds, far apart; long trips, probes matter.
- **Crowded:** worlds packed close; short, sharp trips.
- **Rich belt:** eight asteroids in a thick belt.
- **Binary:** a smaller companion sun (a quarter of the sun's mass) with two
  worlds (and a moon) of its own on an eccentric orbit (dashed orange line).
  Its year follows from that orbit and both suns' masses, far longer than a
  game: most of the game it hangs far out, then once, 10 to 40 minutes in, it
  swings in fast past the outer planets and away again. Its worlds earn 50%
  more. Its pull acts on ships too; routes steer clear of both suns.

- **Vast** (test, picked by hand only): a system as true to life as the game
  allows. The sun is small and far away (the nearest world orbits about 70
  sun radii out, as Mercury does); worlds have real masses next to it (a gas
  giant about a thousandth of the sun, rocky worlds a few hundred-thousandths),
  so their pull on passing ships is slight and gravity assists are rare, as for
  real torch ships; moons sit close in, a few planet widths out, and circle
  slowly. Worlds are still drawn far bigger than life, or they'd be invisible.
  Distances are several times Classic's and drives are half as strong, so a
  trip to a neighbour takes minutes and to the far planets ten or more. Every
  voyage is a commitment: research and fleet size matter. Sensor, relay,
  depot, fortress and security reaches scale with the map; event warnings
  and visitor passes stretch to match; build slots are as usual. Research
  runs at 60% of the usual speed (the game is longer). Random and the Daily
  never pick it.

- **Reaction mass** (test, picked by hand only): Classic's layout with fuel
  rationed. Each trip gets one tank (every world you hold refuels you), and a
  tank buys only a small speed change, a fraction of what a torch run burns.
  So fleets burn briefly and coast most of the way on curving, gravity-bent
  paths, often arcing round the sun the way the worlds go, as real transfer
  orbits do. The planner picks the fastest route that fits the tank, trying
  straight runs, arcs round the sun and swings past heavy worlds; a passing
  world's pull often speeds a route (an assist, marked in the panel). Some
  targets are out of reach until the worlds line up: the panel says when the
  next launch window opens. A thin gauge shows how much of the tank a route
  burns. Drives research enlarges the tank as well as the thrust; a fuel
  depot adds a fifth. Ships can't run dark (they coast anyway). Games run
  long (often well over an hour).

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
| Listening post | Warnings of fleets heading for your worlds; a Security bureau here reaches twice as far |
| Fortress rock | Starts with heavy guns; +1 gun on each of your worlds inside its ring; Guns built here give half as many again |
| Ancient archive | Research 25% faster; Research stations here count double |
| Drydock hulk | Comes with a shipyard; ships built here start as veterans; its shipyards build 50% faster |
| Tidal forge (moon of a gas giant) | Structures, upgrades and ships build twice as fast here |

Build the structure that suits a special world (mines on a seam, guns on a
fortress, labs on an archive, a bureau on a listening post, yards on a hulk)
and it gets the extra bonus above; its build button is marked in the same colour.

## Events

From about 4–6 minutes in, then every 7–10 minutes, something turns up.
The label on the map counts down: **in m:ss** until it starts, **gone m:ss**
while nobody holds it, and **hold m:ss** (in the holder's colour) for the
time still needed to claim it.
Comets and derelicts are visitors from outside the system, on true hyperbolic
(Kepler) paths: they fall in from the edge, whip round the sun and fly back
out for good (about 9–10 minutes inside the planets' orbits; slow enough to
catch, since ships must match a visitor's speed to board it), so you have to
catch them on the way; the launch panel warns if they'll be gone before your
ships arrive, and anyone still aboard when one leaves heads for home. The
other events happen at a world: an independent one while any are left (never a
homeworld). It's announced a minute and a half ahead, with two minutes' grace
after it starts, so there's time to fly in and take it; then whoever holds
that world, with no fight going on there, for the hold time gets the reward.
Losing the world resets the clock. The label shows the icon and countdown.

| Event | Hold | Reward |
|---|---|---|
| Comet pass | 60 s | 9 credits/s while you hold it |
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
stations speed it up (half as much as they speed research). Each kind can be finished only once per game; several
empires can race for the same one, and the first to finish wins it; the rest
get half their money back. Only research stations speed one up. Building asks you to confirm, like a
launch. A violet ring round the world shows how far along it is, to everyone, and the structure itself goes up in stages (a hologram until each stage is done); the ring goes once it's finished. Everyone is told when a project
starts, and a captured world's project or wonder goes to the captor.

| Megaproject | Unlocked by | Where | Effect |
|---|---|---|---|
| Sun-diver collectors | Torch production | Innermost planet | Every world you hold earns 50% more |
| Mass driver | Kinetic strike | Any planet | Fleets launched here fly 50% faster |
| Ring yard | Hardened colonies | Gas giant | Ships build three times as fast here |
| Fortress world | Point-defence net | Any world | Twice the guns; its cover reaches its family at full strength |
| Ansible array | Entangled signals | Any world | See every world and fleet in the system, and where they are going |
| War college | Targeting data | Any world | Every ship you build starts as a veteran (second rank) |

## How to play

**Tutorial** (on the menu; highlighted until you've finished it once): a
guided first game on Classic against one Cadet. A card at the top says what
to do and the thing to tap glows gold (a world gets a gold ring; **Show**
flies the camera to it): select your homeworld, look around, credits and
crew, order a ship, build, research, send ships, speed up time, take a
world. Each step waits until you've actually done it (steps done early are
skipped), judged from your orders and the game state rather than screen
positions, so it keeps working as the game changes. Wording is touch or
mouse to suit the last input. You get 800 extra credits, and the rival does
nothing until the last card (or until you close the tour). The steps live in
`src/tutorial.js`; add one there when a new basic needs explaining.

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
  orbital velocity, burn with one thrust vector for the first half, cut the
  drive and flip, and burn with a second, arriving in a parking orbit beside
  the target, matched to its speed and moving round it at orbital speed (they
  don't overshoot or fly into it). The planner picks the fastest transfer the
  drive allows that stays clear of the sun and of the worlds on the way; when
  the straight line would cross the sun, the fleet steers round under full
  thrust (a burn to a turning point beside it, then on to the target; the
  panel says "round the sun"), so a better drive always shortens the trip.
- **Gravity:** the sun, a companion sun and every planet a fleet passes pull
  on it all through the flight (the worlds themselves stay on fixed orbits:
  "on rails"). Routes bend: dives toward the sun are quick, climbs outward
  cost more, and a pass close by a heavy world can speed a route along (a
  **gravity assist**, marked in the panel). Torch ships move far faster than
  the worlds, so an assist is worth a few percent, not a free ride. The
  worlds a fleet leaves and arrives at (and their moons) are left out:
  climbing out of and settling into their parking orbits is the close-in
  manoeuvring ships do on thrusters. The planner solves for burns that still
  land on target with all of that included (Newton's method on the two burns).
  A hop to your own moon takes under a minute; crossing the system takes
  minutes. Drive plumes are visible from far away. Ships can't be recalled.
- **Credits:** every world you hold earns credits (planets 1/s, stations
  0.6, moons 0.5, asteroids 0.3), homeworlds +0.4, plus 1.5/s per mine. They show top left.
- **Crews:** every ship needs a crew, and crews come from your worlds (a
  homeworld 16, planets 8, gas giants and stations 6, moons 3, asteroids 1).
  Ships in flight or garrisoned and ships on order all count; when they
  reach the cap, yards stop taking orders. A **Habitat** adds 4 crew per
  level, each Industry level adds 10%, and taking in a refugee convoy adds
  4. The top bar shows crew in use beside credits, and each world's info
  shows the crew it fields.
- **Upkeep:** the first 40 ships are free; each one beyond that costs
  0.05/s (crews, fuel, refits). The income tooltip shows it.
- **Drill:** a garrison that has held a rank trains new arrivals back up to
  it over a few minutes, so reinforcing veterans doesn't cost the rank for long.
- **Building:** select one of your worlds for its build row (on touch, tap an
  option once to read what it does, again to build; with a mouse, hover). Worlds have
  build slots by size (asteroids and small moons 1, small planets and larger
  moons 2, rocky planets 3, gas giants 4, stations 2, homeworlds 5):
  - **Shipyard** (400, 90 s): needed to build ships there. Each yard on a
    world builds one ship at a time, so two yards build two at once.
    Stations come with one.
  - **Mine** (200, 45 s): asteroids and moons only; +1.5 credits/s per level.
  - **Guns** (250, 50 s): +2 guns per level (every held world has 1); each
    upgrade costs 225, a little less than a new battery. Independent worlds
    slowly rebuild guns lost to a raid.
  - **Research station** (300, 60 s): each level speeds research by 50%.
  - **Gas harvester** (350, 70 s): gas giants only; +2 credits/s per level.
  - **Orbital exchange** (450, 80 s): homeworlds only; +2.5 credits/s per level (up to II).
  - **Upgrades:** mines, guns, research stations and gas harvesters go up to level 3.
  - **Scrap:** tearing a structure down gives back 40% of what it cost (all its levels) once it's
    done, after 20 s; it stops working at once (a battery's guns go with it). Not while the
    world is under attack. If the world is taken first, the scrapping is cancelled, nothing
    is paid, and the captor gets the structure.
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
- **Agents:** Signals intercept (Intel I) unlocks them. Tap an enemy world and
  **Recruit agent** (250 credits). Recruiting takes 40 seconds, then the agent shows you that world, its launches
  (even dark ones) and its surroundings, skims part of its income, and slows
  any megaproject there by a quarter. Every second there's a small chance the
  agent is caught (about five minutes on average); the owner's Intel level
  and a **Security bureau** (on the world or within reach of it) make that
  much quicker. Select a world with a bureau to see its reach as a
  dashed green ring (twice as wide on a listening post). One agent per enemy world.
- **Probes:** select a world with a shipyard and tap **Probe** (80 credits)
  next to **+ Ship**, then tap a destination and Confirm. A probe flies twice
  as fast as ships and is used up on a flyby: the target stays in view
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
  its docked ships and surface guns until one side is gone. Losses fall on
  whichever the defenders have more of, ships or guns. Rounds streak
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
- No time warp. Only the host can pause, and it pauses for everyone; no
  orders go through while paused.
- If a guest drops, their empire sits idle; rejoining with the same code from
  the same browser takes the seat back (the browser keeps a random key, so
  nobody else can claim the seat). If the host leaves, the game ends.
- Fog of war is applied on the host: a guest is only sent the fleets and
  worlds its sensors can see.
- Knocked-out players keep watching until one empire is left, or tap
  **Leave**.
- For testing against a self-hosted PeerJS server, add `?peer=host:port`.

Later: move the game onto a server (Cloudflare) so it keeps running without
the host and nobody can pause.

## Breaking out

Ships can leave a world that's under attack, but the attackers get a free
shot as they climb out: half of them (rounded down) are lost. The AI won't try it.

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
- With a world or fleet selected, the view locks onto it: rotating and zooming
  go round it until you drag the map away (or pinch while dragging).
- Keys: WASD/arrows pan, Q/E rotate, +/- zoom, F focus the selection,
  H (or the target button) whole system and deselect, L launch/confirm,
  P probe, R research, D run dark, Space pause, 1–5 time speed, Esc back out.

## Run

```sh
npm install
npm run dev
npm run check    # intercepts, flight, battles, maps (seconds)
npm run check:matches   # 20 AI-only matches on every map (minutes)
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
  - `ships.js`: instanced hulls (cutter, frigate, freighter, cruiser,
    surveyor with a turning habitat ring; survey, relay and recon probes),
    drive plumes, glints; `stations.js`: habitat, shipyard, refinery and
    bastion, each with a fixed hub and (when crewed) a ring or drum that
    turns on its own; `structures.js`: buildings on worlds;
    `megastructures.js`: the six megaprojects, built in stages
  - `rocks.js`: asteroids and the belt; `fx.js`: weapons fire and explosions
- `src/main.js`: touch input, UI, game loop

## Ideas for later

Ship types and per-ship fitting, battles in open space, and more detail on
worlds up close (bases, yards, docks).
