# Perihelion (new build)

Fleet actions in a single star system. You command a handful of named ships.
Take orbit over the enemy capital and hold it until it yields.

This is the rebuilt game, tested beside the current one (`../perihelion/`)
until it replaces it. Ideas cut from the old game (agents, crews, megaprojects,
timed events) are still there to lift back if testing asks for them.

## The game in one page

- **One generated system every game.** A sun, four or five planets (at least
  one gas giant with moons), a belt, a station or two. Worlds ride fixed orbits.
  Space is mostly empty: worlds are hundreds of their own widths apart, a hop to
  your moon takes about a minute and crossing the system several. Solo games
  have time speeds up to 8x.
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

  Ships ordered together fly together at the slowest one's pace.
- **Fuel.** Worlds you hold refill ships in orbit; a refinery, a fuel depot or
  your capital does it three times as fast. A dry ship is adrift until a tender
  matches her.
- **War costs money.** Fuel, torpedoes and hull repairs are bought as ships
  resupply (3 credits per unit of fuel, 15 per torpedo, half a credit per point
  of hull). A fleet in orbit is cheap; a fleet that burns hard and fires salvos
  drains the treasury, and with no credits nothing is resupplied.
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
  Seven structures: yard (level two builds half as fast again), mine,
  refinery (gas giants), battery, habitat, sensor array (the world sees two and
  a half times as far), fuel depot. A capital has five slots, a planet three,
  a moon or station two, an asteroid one.
- **Fleet limit.** Four ships (five for the Holds), plus one for every habitat
  level you build, up to twelve. Pips under the credits show it.
- **Research.** Three short lines (drives, weapons, sensors), three steps
  each. One project at a time.
- **Scenarios.** First command (the tutorial), Blockade run, Raider hunt,
  Hold until relief, Convoy.
- **Daily.** Everyone gets the same system that day.
- **Multiplayer.** Host in the browser, up to three powers, AI seats. Guests
  send orders and receive only what their sensors see, four times a second.

## Reading the screen

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
npm run check:matches   # 24 AI-only matches; at most two may stalemate (a few minutes)
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

- Two AI admirals of equal strength can stalemate (about 1 match in 24).
- AI-only matches run long (median about 75 minutes of game time).
- Structures are shown as marks and icons, not as buildings on the worlds.
- AI admirals do not use firing passes on batteries or run dark.
- Sound has only been checked by measurement, not by ear.
