# Perihelion (new build)

Fleet actions in a single star system. You command a handful of named ships.
Take orbit over the enemy capital and hold it until it yields.

This is the rebuilt game, tested beside the current one (`../perihelion/`)
until it replaces it. Ideas cut from the old game (agents, crews, megaprojects,
timed events) are still there to lift back if testing asks for them.

## The game in one page

- **One generated system every game**, laid out like our own: two to four
  rocky worlds close in, a belt, then gas giants far apart, sometimes a small
  cold world beyond. Each orbit is roughly half as far out again as the last,
  and none is a perfect circle. Space is mostly empty: a hop to a moon takes
  about a minute, crossing the system many. Solo games have time speeds to 8x.
- **Where you start suits your power.** The Concord on a living world (its
  capital earns a quarter more), the Republic on a dry one (it starts with
  four ships), the Holds on a large station over a gas giant with moons close
  by (its capital earns a quarter less).
- **Ships are real bodies.** Each has a position, a velocity and a tank. The sun
  and the planets pull on them. They change course only by burning, and every
  burn spends fuel (shown as an amber bar; in the rules it is a total speed
  change, `dv`).
- **Five classes**, the same for every power:

  | Class | Role |
  |---|---|
  | Corvette | Small, fast, hard to see. Scout and raider |
  | Frigate | The workhorse: torpedo tubes and a rail |
  | Escort | Point defence for the ships beside her |
  | Battleship | Spinal rails and armour. Needs the Spinal mounts research |
  | Tender | Unarmed. Refuels, rearms and patches ships flying alongside |

  Freighters are civilian and fly themselves.
- **Three powers**:

  | Power | Feel |
  |---|---|
  | Meridian Concord | Heavy plate and armour, dearer, a little slower |
  | Boreal Republic | Faster drives, harder-hitting rails, bigger tanks, thin skins |
  | Lantern Holds | Cheaper and quicker to build, run cold (hard to spot), fragile, one more ship allowed |

- **Flying.** Select ships, tap a world, pick a course. Each choice shows its
  time and the fuel it costs:
  - *Hard burn*: fastest, seen across the system, thirsty.
  - *Cruise*: a measured burn and a coast.
  - *Dark*: short burns and a long cold coast.
  - *Slingshot*: skim a heavy world and let it bend the path. Offered only when
    it saves fuel over cruising.
  - Or plot a burn by hand: drag from the ship; the dashed line is where she
    will coast.

  Ships ordered together fly in formation: the slowest leads and the rest keep
  station beside it, escorts closest, so point defence covers the group. Turn
  Formation off to let each ship go at its own pace. With ships selected, tap
  another of your ships and choose Join to fly to it and stay with it (this is
  how a tender reaches a ship that has run dry).
- **Fuel.** Worlds you hold refill ships in orbit; a refinery, a fuel depot or
  your capital does it three times as fast. A dry ship is adrift until a tender
  matches her.
- **Seeing.** A burning drive (or a firing ship) shows anywhere there is a
  clear line of sight. A cold ship is seen only up close. The sun, planets and
  moons block sight and fire. A contact too far to identify is an amber diamond;
  one that drops off the sensors leaves a fading last-known mark.
- **Battle** happens wherever ships meet. Ships work their own rails, torpedoes
  and point defence. You make the calls: *pass* (charge through at speed) or
  *match* (come alongside), torpedoes free or held, guns free or held, evade,
  loose a salvo now, break off.
  - **Closing speed decides how deadly it is.** Rail and torpedo damage grow
    with the speed the two sides close at. A head-on pass is over in seconds; a
    matched fight grinds.
  - **Point defence** stops slow torpedoes easily and fast ones rarely. It
    covers any ship within its reach, so escorts protect their neighbours.
  - **Hits knock out systems** (drive, reactor, weapons, sensors). Crews bring
    them back in under a minute, unless the hull is below a quarter: then it
    needs a yard or a tender.
  - **Boarding.** Match a freighter, or a warship with her reactor out, and
    hold alongside: the cargo or the ship is yours.
- **Worlds.** A world yields to the one side holding its orbit, once its
  battery is silent and no defender is left there. Capitals take longest.
  Independent worlds yield in half the time.
- **Economy.** A capital banks its income. Every other world sets its earnings
  aside until a freighter carries them home; freighters can be destroyed or
  boarded, and a hostile ship in orbit blockades the world (no income, no yard).
  Nine structures, and what a world can take depends on what it is:

  | Structure | Where | Does |
  |---|---|---|
  | Yard (2 levels) | Planets, stations | Builds, repairs and rearms ships |
  | Mine (2) | Rocky planets, moons, asteroids | Income |
  | Refinery (2) | Gas giants | Income; quick refuelling |
  | Battery (2) | Anywhere | Guns and point defence |
  | Habitat (2) | Rocky planets, stations | One more ship per level |
  | Laboratory (2) | Rocky planets, stations | Research half as fast again per level |
  | Exchange (2) | Stations, capitals | Income paid straight in |
  | Sensor array | Moons, stations, asteroids | The world sees much further |
  | Fuel depot | Moons, stations | Quick refuelling |

  A capital has five slots, a planet three, a moon or station two, an asteroid one.
- **Special worlds.** Most independent worlds have a trait (a gold diamond on
  the plot; tap the gold tile to read it): rich seam (mines double), old
  relay (sees four times as far), deuterium sea (quick refuelling, better
  refinery), fortress rock (battery twice as tough), ancient archive (research
  a third faster; laboratory counts double), drydock hulk (comes with a yard;
  its ships are veterans), tidal forge (everything builds twice as fast),
  garden world (earns more; habitats count double), listening post (identifies
  burning ships across most of the system).
- **Fleet limit.** Four ships (five for the Holds), plus one for every habitat
  level you build, up to twelve. Pips under the credits show it.
- **Research.** Five lines (drives, weapons, sensors, industry, intelligence)
  of four steps, costing 250, 450, 750 and 1200. The second and fourth step of
  every line is a choice between two doctrines, and taking one closes the
  other for the rest of the game (spinal mounts or wolfpack tubes; swarm
  warheads or flak curtain; cold running or a deep-space network; and so on).
  One project at a time; laboratories and the archive speed it up.
- **Agents** (Intelligence). Send one to a world that is not yours (200
  credits, 45 seconds). She shows you the place and the ships over it. With
  research she can sabotage a battery or stall a yard, skim a third of the
  world's earnings, or make it yield to your ships twice as fast. An
  independent world with your agent on it can be bought outright. Every second
  there is a chance she is caught; counter-intelligence doubles it.
- **Boarding.** Board is an order against any enemy warship: pull alongside
  and after 20 seconds there is a chance to take it (bigger and more seasoned
  boarders, a smaller or damaged target, raise it). A failed try costs the
  boarders 12% of their hull.
- **Batteries** have three levels. A capital's is twice as strong and has an
  extra gun, and a capital yields only when three or more of your armed ships
  hold its orbit together.
- **Rearming.** Torpedoes come back at a yard or your capital, or from a
  tender flying alongside (it carries 24 and refills at a yard or capital).
- **Trait limits.** A garden world takes no mines; a tidal forge takes no labs.
- **Worlds are solid.** Ships steer round planets and moons, including the
  planet a moon or station belongs to.
- **Veterans.** Ships earn rank from hits scored (three steps, a gold bar
  each): better aim, harder to hit.
- **Derelicts and convoys.** Every several minutes a derelict warship turns up
  adrift, or an independent convoy crosses the system, and everyone is told.
  Match a derelict to board her: she joins you as a veteran. Match a convoy to
  take its cargo.
- **Scenarios.** First command (the tutorial), Blockade run, Raider hunt,
  Hold until relief, Convoy.
- **Daily.** Everyone gets the same system that day.
- **Multiplayer.** Host in the browser, up to three powers, AI seats. Guests
  send orders and receive only what their sensors see, four times a second.

## Reading the screen

- **The bar at the bottom of the panel** always shows a line of numbers: for a
  ship its hull, fuel and torpedoes; for a world its income and battery. Tap
  a button and the bar says what it does, with the numbers (a mine: credits a
  second and how long it takes to pay for itself; a ship: hull, guns,
  torpedoes, thrust, build time). Buttons that spend something or cannot be
  undone then show OK and a cancel; the rest act at once.
- **Gold buttons** are structures the world's trait makes better.
- **Tap a built structure** to upgrade it or remove it (40% back).
- **The end screen** has a table for every side and charts of fleet strength,
  worlds and income over the game.

- **Credits** show with the rate they come in. Tap them for where the income
  comes from, world by world, and what is at sea in freighters.
- **Freighters.** Tap one to see whose she is, where she is going, what she
  carries and when she is due.
- **Orbits** are drawn as a trail behind each world that fades away, not as
  full rings. From far out the plot keeps to the essentials: who holds what
  and where the fleets are.
- **Ships keep clear of each other**, in orbit and in formation.

- **Planet families.** From far out a planet shows alone, with a dot for each
  moon or station it has (in the holder's colour). Come in on it, or tap it,
  and its family and their orbits appear.
- **What a button does.** On touch, the first tap on a button shows one line
  saying what it does and the second tap does it. With a mouse, hover.

## Controls

- Touch (as in the first Perihelion): tap to select and lock the view on it,
  drag to turn, two fingers to move and zoom (while locked, a pinch zooms about
  the locked world or ship), double-tap to fly in.
- Mouse: click to select, drag to move the map, right-drag to turn, wheel to zoom.
- Keys: WASD or arrows move, Q/E turn, +/- zoom, Space pause, 1 to 4 time speed, H whole system, R research, F follow, Esc back.

## Run

```sh
npm ci
npm run dev
npm run check           # headless rules checks (seconds)
npm run check:matches   # 24 AI-only matches; up to half may not finish (several minutes)
npm run build && npm run preview
node tools/smoke.mjs    # phone-sized touch test (needs the preview server and Playwright)
node tools/mp-smoke.mjs # two-browser multiplayer test (also needs a local PeerJS server)
```

`?gfx=low` or `?gfx=high` forces the graphics level. `?peer=127.0.0.1:9000`
points multiplayer at a local PeerJS server (`npx peerjs --port 9000 --host 127.0.0.1`).

## Code

- `src/sim.js`: the whole game as plain data and functions (no DOM, no
  Three.js). System generation, the autopilot (`guide`), flight (`advance`),
  route planning by flying an order forward (`dryRun`, `routes`), seeing
  (`detect`), battle (`combat`, `stepTorps`), worlds and economy
  (`stepWorlds`), and what a multiplayer guest is sent (`snapshot`).
  The numbers to tune are at the top: `RULES`, `CLASSES`, `FACTIONS`, `TECH`,
  `PROFILES`.
- `src/ai.js`: AI admirals. Honest sight, same rules. Difficulty is think
  rate, follow-through (`skill`) and economy (`eco`).
- `src/scenarios.js`: the scenarios, each a setup and a state check.
- `src/render.js`: the Three.js scene plus the 2D plot drawn over it (rings,
  vectors, routes, ship marks, names). Owns the camera.
- `src/gfx/`: procedural graphics. `ships.js` holds the 18 hulls (three
  powers by six classes; `hullIndex(faction, cls)`).
- `src/audio.js`: generated sound (a trial: no audio files).
- `src/main.js`: interface, input, the loop, multiplayer glue. Every order
  goes through `act()`.
- `src/net.js`: WebRTC rooms (PeerJS for the handshake).

## Known gaps

- AI admirals are poor at taking a well-defended capital: nearly half of
  AI-only games never end, and the rest are long (around two hours of game time).
- With giants far out, a slingshot that saves fuel is rare.
- Weapons reach a few ship-lengths (rails 7, torpedoes 20, against worlds
  hundreds apart); ships sharing an orbit can always engage each other.
- AI-only matches run long (median about 75 minutes of game time).
- Structures are shown as marks and icons, not as buildings on the worlds.
- AI admirals do not use firing passes on batteries or run dark.
- Sound has only been checked by measurement, not by ear.
