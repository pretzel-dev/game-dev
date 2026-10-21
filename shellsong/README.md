# Shellsong: a mermaid princess under the sea

Charlotte's game. You're a mermaid princess: choose your colours, then swim
off to explore the ocean. There's no score, no timer and nothing to lose.

## Make your mermaid

On the title card (or the ☰ menu any time):

| | |
| --- | --- |
| **Hair** | gold, honey, brown, black, red, pink, purple, blue, mint, silver |
| **Hairstyle** | long, ponytail, plaits, buns, short |
| **Skin** | six skin tones, plus sea green and lilac |
| **Shell top** | pink, purple, gold, white, blue, coral, mint |
| **Tail** | teal, purple, pink, blue, green, gold, coral, silver |
| **Crown** | gold, silver, rose gold, pearl, crystal, pink |
| **Throne** | pink, purple, blue, gold, white, mint, coral |

You can also type your name, and the King will call you Princess *(name)*.
Your colours and your treasure are remembered next time.

## What's in the sea

| | |
| --- | --- |
| **The underwater palace** | a pearly dome with golden ribs, four pink towers and an avenue of pillars with glowing pearls. Swim in through the big front door (or down through the round window in the roof). Inside, the King sits on his golden throne and waves, and your own shell throne is right beside him: swim up and press **Sit on your throne**. |
| **Treasure** | twelve treasures to find: a golden crown, gold coins and a pirate's compass in the shipwrecks; a ruby, an emerald and a sapphire in the grottos; a magic pearl, a pearl necklace, a silver mirror and a singing conch in giant clams; a message in a bottle by the Sunny Rocks; and a starry tiara in the kelp forest. Hidden treasure twinkles so you can spot it. Swim up to it to find it, and it goes on show round your throne. |
| **Grottos** | three caves full of glowing crystals (purple, green and pink), each with a treasure chest inside. Their doorways face the palace. |
| **Shipwrecks** | three sunken ships with broken masts, torn sails, cannons and spilled barrels. |
| **The surface** | come up to the top to see sailing ships, seagulls wheeling over the islands, and palm trees. There are rocks round every island to **Sit** on. |
| **Creatures** | schools of bright fish that swirl round you, turtles, stingrays, jellyfish, seahorses in the palace garden, crabs on the sand, dolphins that leap out of the water, and two great whales that come up to blow. |
| **Your fish friend** | a round little yellow fish with blue stripes who swims along beside you, spins when you do an emote and jumps for joy when you find treasure. |
| **Emotes** | tap 😊 (top left) for **wave**, **blow a kiss** (hearts float out to you), **sing** (music notes; fish come and swirl round you and dolphins jump for joy), **dance** and **flip**. Near the palace, the King answers. |
| **Dolphins** | swim up to one and press **Ride**. Push up to go fast, press **Jump!** to leap right out of the water, and **Let go** to swim off. |

## Controls

**Phone or tablet**: drag anywhere on the left half to swim (the stick
appears under your thumb: up swims forward, left and right turn). ▲ and ▼
swim up and down. The big pink button appears when there's something to do
(Sit, Ride, Jump!, Swim). ✨ does a twirl, 😊 opens the emotes. Drag on the
right half to look round.

**Keyboard**: W/S swim forward and back, A/D turn, Space up, Shift down,
E to sit, ride or jump, Q to twirl (or let go of a dolphin), 1 to 5 for the
emotes (wave, kiss, sing, dance, flip), H back to the palace, M sound, Esc
menu.

**Gamepad**: left stick swims, triggers up and down, A sits, rides and
jumps, X twirls.

The mermaid slides round rocks and walls, floats at the top with her head
out of the water, and can't get stuck anywhere.

## Run it

```bash
npm ci
npm run dev       # http://localhost:5173
npm run check     # swims the ocean headless (a few seconds)
npm run build     # → dist/, a plain static site
```

`?gfx=low` forces the light graphics setting.

## How it is put together

```
src/
  main.js              wiring, the frame loop, the menu, treasure, the King
  camera.js            follows behind her; turns to her face when she sits
  input.js             touch stick and buttons, keyboard, gamepad
  world/               pure data and rules (no DOM, no Three.js: runs in Node)
    ocean.js           the seabed, islands, palace, grottos, wrecks, clams,
                       treasure, rocks to sit on, coral, kelp
    collide.js         rocks, towers, hulls, domes with doorways, seabed, surface
    swim.js            swimming, floating, sitting, riding a dolphin, jumping
    creatures.js       fish schools, turtles, rays, dolphins, whales, jellyfish,
                       seahorses, crabs, ships and gulls
  render/
    looks.js           every colour you can choose
    mermaid.js         the mermaid and the King (a smooth tube for the tail),
                       hairstyles, emotes, sitting with her tail over the edge
    friend.js          your fish friend
    scenery.js         palace, thrones, grottos, wrecks, coral, kelp, clams, chests
    seabed.js          the sea floor, with dancing sunlight (caustics)
    water.js           the surface from above and below, sunbeams, drifting specks
    creatures.js       draws the creatures (fish and jellyfish instanced)
    treasures.js       the twelve treasures as little models
    fx.js              bubbles, sparkles, splashes, spouts, confetti, hearts
    builder.js  sky.js  post.js   shared with the other games
  audio/audio.js       all synthesised: the sea, bubbles, gulls, dolphins, whale
                       song, treasure fanfares and a gentle harp tune
  ui/hud.js            the big button, the King's speech, treasure banners
tools/check.mjs        the headless tests
```

`tools/check.mjs` builds the ocean in Node, swims an autopilot to all twelve
treasures (into the grottos through their doors), sits on every rock and the
throne, rides a dolphin and jumps, swims at random everywhere checking she's
never inside anything or stuck, and runs the creatures for three minutes.
