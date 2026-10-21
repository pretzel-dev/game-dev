/**
 * Shellsong: you are a mermaid princess.
 *
 * Choose your colours (hair, skin, shell top, tail, crown and throne), then
 * swim: through coral gardens and kelp forests, into glowing grottos, round
 * sunken shipwrecks, up to the surface to sit on the rocks and watch the
 * ships and seagulls. Find the twelve treasures (they go on show round your
 * throne), ride the dolphins, swim with turtles, rays and whales, and visit
 * your father the King in the underwater palace.
 *
 * There's no score, no timer and nothing to lose.
 *
 * This file is the wiring: build the renderer and the ocean, then one frame
 * loop that reads the controls, swims the mermaid, moves the creatures, and
 * draws it all.
 */
import {
  DirectionalLight,
  Fog,
  FogExp2,
  HemisphereLight,
  NeutralToneMapping,
  PCFShadowMap,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  Timer,
  Vector3,
  WebGLRenderer,
} from 'three';

import { QUALITY, degrade } from './core/quality.js';
import { settings } from './core/settings.js';
import { buildOcean, TREASURE_LIST } from './world/ocean.js';
import { createMermaid, updateMermaid, actionFor, act, letGo, findTreasure, placeMermaid, emote } from './world/swim.js';
import { createCreatures, updateCreatures } from './world/creatures.js';
import { createSeabed } from './render/seabed.js';
import { createWater } from './render/water.js';
import { createScenery } from './render/scenery.js';
import { createCreaturesView } from './render/creatures.js';
import { createMerperson, setLook, poseMerperson } from './render/mermaid.js';
import { makeTreasure } from './render/treasures.js';
import { LOOKS, DEFAULT_LOOK, HAIRSTYLES, colorOf } from './render/looks.js';
import { createFriend } from './render/friend.js';
import { createFx } from './render/fx.js';
import { createSky } from './render/sky.js';
import { createPost } from './render/post.js';
import { createCamera } from './camera.js';
import { createInput } from './input.js';
import { createAudio } from './audio/audio.js';
import { createHud } from './ui/hud.js';

const coarse = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;
const UNDER = { color: 0x3aaed0, density: 0.014 };
const ABOVE = { color: 0xd8ecf8 };

function boot() {
  /* ----------------------------------------------------------- renderer --- */
  const renderer = new WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, QUALITY.pixelRatio));
  renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFShadowMap;
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = NeutralToneMapping;
  renderer.toneMappingExposure = 1.05;
  document.body.insertBefore(renderer.domElement, document.querySelector('#ui'));

  const scene = new Scene();
  const camera = new PerspectiveCamera(58, innerWidth / innerHeight, 0.3, 4500);
  scene.add(camera);
  const timer = new Timer();
  timer.connect(document);

  /* -------------------------------------------------------------- ocean --- */
  const ocean = buildOcean();
  const uniforms = { uTime: { value: 0 } };
  const look = { ...DEFAULT_LOOK, ...(settings.get('look') || {}) };
  createSeabed(scene, uniforms);
  const scenery = createScenery(scene, ocean, uniforms, look);
  const water = createWater(scene);
  const sky = createSky(scene);
  sky.uniforms.topColor.value.setHex(0x4f9ae8);
  sky.uniforms.horizonColor.value.setHex(0xe2f1ff);
  sky.uniforms.glowColor.value.setHex(0xfff0c0);
  const post = createPost(renderer);

  const hemi = new HemisphereLight(0xc8f4ff, 0x3a8aa8, 1.5);
  scene.add(hemi);
  const sun = new DirectionalLight(0xfff4e0, 2.4);
  const sunDir = new Vector3(0.35, 1, 0.25).normalize();
  sky.uniforms.sunDir.value.copy(sunDir);
  sun.castShadow = true;
  sun.shadow.mapSize.set(QUALITY.shadowMap, QUALITY.shadowMap);
  const S = 30;
  Object.assign(sun.shadow.camera, { left: -S, right: S, top: S, bottom: -S, near: 1, far: 200 });
  sun.shadow.bias = -0.0005;
  sun.shadow.normalBias = 0.3;
  scene.add(sun, sun.target);
  const fogUnder = new FogExp2(UNDER.color, UNDER.density);
  const fogAbove = new Fog(ABOVE.color, 120, 1400);
  scene.fog = fogUnder;
  water.uniforms.uFogBelow.value.setHex(UNDER.color);
  water.uniforms.uFogDensity.value = UNDER.density;

  /* -------------------------------------------------- mermaid and King --- */
  const mermaid = createMermaid(ocean.spawn);
  mermaid.yaw = Math.PI; // facing you on the title screen, the palace behind her
  const model = createMerperson(look);
  scene.add(model);
  const king = createMerperson(null, { king: true });
  const KT = ocean.palace.kingThrone;
  king.position.set(KT.x, KT.y + 1.55 * 1.6 + 0.2, KT.z + 0.35);
  king.rotation.y = -KT.yaw;
  scene.add(king);
  const kingState = { mode: 'throne', pitch: 0, roll: 0, speed: 0, stroke: 0, wave: false, time: 0 };

  const creatures = createCreatures(ocean, { fish: QUALITY.fish });
  const creaturesView = createCreaturesView(scene, creatures);
  const fx = createFx(scene, QUALITY.particles);
  const cam = createCamera(camera, ocean);
  const friend = createFriend(scene);
  const audio = createAudio();
  const hud = createHud();

  /* ---------------------------------------------------------- treasure --- */
  const found = new Set((settings.get('treasure') || []).filter((id) => TREASURE_LIST.some((t) => t.id === id)));
  const shown = new Map(); // the treasures on show round your throne
  function showTreasure(id) {
    if (shown.has(id)) return;
    const k = TREASURE_LIST.findIndex((t) => t.id === id);
    const d = ocean.palace.display[k];
    const m = makeTreasure(id);
    m.position.set(d.x, d.y, d.z);
    m.scale.setScalar(1.3);
    scene.add(m);
    shown.set(id, m);
  }
  for (const id of found) showTreasure(id);
  let flying = null; // a treasure floating up out of where it was hidden

  /* ----------------------------------------------------- choose colours --- */
  let tab = 'hair';
  function renderSwatches() {
    const row = document.querySelector('#swatches');
    if (!row) return;
    row.innerHTML = '';
    if (tab === 'style') {
      for (const [name, label] of Object.entries(HAIRSTYLES)) {
        const b = document.createElement('button');
        b.className = 'tab';
        b.textContent = label;
        b.setAttribute('aria-pressed', String((look.style || 'long') === name));
        b.addEventListener('click', () => {
          look.style = name;
          settings.set('look', { ...look });
          setLook(model, look);
          renderSwatches();
          audio.sparkle();
          fx.sparkle(mermaid.x, mermaid.y + 0.7, mermaid.z, colorOf(look, 'hair'), 8, 0.6);
        });
        row.appendChild(b);
      }
      for (const t of document.querySelectorAll('[data-tab]')) t.setAttribute('aria-pressed', String(t.dataset.tab === tab));
      return;
    }
    for (const [name, hex] of Object.entries(LOOKS[tab].colors)) {
      const b = document.createElement('button');
      b.className = 'swatch';
      b.style.background = `#${hex.toString(16).padStart(6, '0')}`;
      b.setAttribute('aria-label', `${LOOKS[tab].label}: ${name}`);
      b.setAttribute('aria-pressed', String(look[tab] === name));
      b.addEventListener('click', () => {
        look[tab] = name;
        settings.set('look', { ...look });
        setLook(model, look);
        scenery.setThroneColor(colorOf(look, 'throne'));
        renderSwatches();
        audio.sparkle();
        fx.sparkle(mermaid.x, mermaid.y + 0.6, mermaid.z, colorOf(look, tab), 8, 0.8);
      });
      row.appendChild(b);
    }
    for (const t of document.querySelectorAll('[data-tab]')) t.setAttribute('aria-pressed', String(t.dataset.tab === tab));
  }
  for (const t of document.querySelectorAll('[data-tab]')) {
    t.addEventListener('click', () => {
      tab = t.dataset.tab;
      renderSwatches();
      audio.start();
    });
  }
  renderSwatches();
  const nameInput = document.querySelector('#name');
  if (nameInput) {
    nameInput.value = settings.get('name') || '';
    nameInput.addEventListener('input', () => settings.set('name', nameInput.value.trim().slice(0, 20)));
  }
  const princess = () => {
    const n = (settings.get('name') || '').trim();
    return n ? `Princess ${n}` : 'my little princess';
  };
  function renderTreasureList() {
    const list = document.querySelector('#treasureList');
    if (!list) return;
    list.innerHTML = '';
    for (const t of TREASURE_LIST) {
      const li = document.createElement('li');
      li.className = found.has(t.id) ? 'got' : '';
      li.textContent = found.has(t.id) ? t.name.replace(/^an? /, '') : '?';
      list.appendChild(li);
    }
    const count = document.querySelector('#treasureCount');
    if (count) count.textContent = found.size ? `${found.size} of ${TREASURE_LIST.length} found` : 'Hidden all over the sea';
  }
  renderTreasureList();

  /* ------------------------------------------------------------ actions --- */
  let started = false;
  let menuOpen = false;
  function toggleSound() {
    const on = audio.toggle();
    settings.set('sound', on);
    hud.setSound(on);
  }
  function toggleMusic() {
    const on = !(settings.get('music') !== false);
    settings.set('music', on);
    audio.setMusic(on);
    hud.setMusic(on);
  }
  function goHome() {
    placeMermaid(mermaid, ocean.spawn.x, ocean.spawn.y, ocean.spawn.z, 0);
    cam.reset(mermaid);
    hud.hint('Home to the palace!', 2.5);
  }
  const controls = createInput({
    actions: { sound: toggleSound, home: goHome, zoom: (f) => cam.zoom(f), menu: () => (menuOpen ? closeMenu() : openMenu()) },
    onFirstInput: () => audio.start(),
  });
  document.querySelector('#soundBtn')?.addEventListener('click', toggleSound);
  document.querySelector('#musicBtn')?.addEventListener('click', toggleMusic);
  if (settings.get('sound') === false) audio.setEnabled(false);
  if (settings.get('music') === false) audio.setMusic(false);
  hud.setSound(audio.enabled);
  hud.setMusic(settings.get('music') !== false);

  // Emotes: the 😊 button opens a row of them (or press 1 to 5).
  let wantEmote = null;
  const emoteBar = document.querySelector('#emoteBar');
  document.querySelector('#emoteBtn')?.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    audio.start();
    emoteBar?.classList.toggle('open');
  });
  for (const b of document.querySelectorAll('[data-emote]')) {
    b.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      wantEmote = b.dataset.emote;
    });
  }
  const EMOTE_KEYS = { Digit1: 'wave', Digit2: 'kiss', Digit3: 'sing', Digit4: 'dance', Digit5: 'flip' };
  addEventListener('keydown', (e) => {
    if (e.target?.tagName !== 'INPUT' && EMOTE_KEYS[e.code]) wantEmote = EMOTE_KEYS[e.code];
  });
  const KING_SAYS = {
    wave: () => `Hello, ${princess()}!`,
    kiss: () => 'And a kiss for you too, my darling!',
    sing: () => 'What a beautiful song!',
    dance: () => 'What lovely dancing!',
    flip: () => 'What a splendid flip!',
  };
  let noteT = 0;
  let kissHearts = 0;

  const startBtn = document.querySelector('#start');
  const homeBtn = document.querySelector('#home');
  const resetBtn = document.querySelector('#resetTreasure');
  function go() {
    if (menuOpen) return closeMenu();
    if (started) return;
    started = true;
    document.body.classList.add('playing');
    hud.hideIntro();
    audio.start();
    mermaid.yaw = 0;
    cam.reset(mermaid);
    hud.hint(coarse ? 'Drag on the left to swim. The arrows swim up and down.' : 'W, A, S, D to swim. Space swims up, Shift swims down.', 5);
    setTimeout(() => hud.say(`Off you go, ${princess()}! The palace is right in front of you.`, 4.5), 1200);
  }
  function openMenu() {
    if (!started || menuOpen) return;
    menuOpen = true;
    if (startBtn) startBtn.textContent = 'Keep swimming';
    if (homeBtn) homeBtn.hidden = false;
    renderTreasureList();
    hud.showIntro();
  }
  function closeMenu() {
    menuOpen = false;
    hud.hideIntro();
    timer.update();
  }
  startBtn?.addEventListener('click', go);
  homeBtn?.addEventListener('click', () => {
    closeMenu();
    goHome();
  });
  resetBtn?.addEventListener('click', () => {
    // Hide all the treasure again, to find it all over again.
    found.clear();
    settings.set('treasure', []);
    for (const m of shown.values()) scene.remove(m);
    shown.clear();
    renderTreasureList();
    hud.hint('The treasure is hidden again!', 2.5);
  });
  document.querySelector('#menuBtn')?.addEventListener('click', () => (menuOpen ? closeMenu() : openMenu()));
  addEventListener('keydown', (e) => {
    if (e.target?.tagName === 'INPUT') return;
    if ((!started || menuOpen) && e.code === 'Enter') go();
    else if (e.code === 'Escape') menuOpen ? closeMenu() : openMenu();
  });

  /* ----------------------------------------------------------- events --- */
  let paused = false;
  addEventListener(
    'resize',
    () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, QUALITY.pixelRatio));
      renderer.setSize(innerWidth, innerHeight);
      post.setSize();
    },
    { passive: true }
  );
  document.addEventListener('visibilitychange', () => {
    paused = document.hidden;
    audio.setPaused(paused);
    if (!paused) timer.update();
  });

  const said = new Set();
  const sayOnce = (key, text, seconds = 3.5) => {
    if (said.has(key)) return;
    said.add(key);
    hud.hint(text, seconds);
  };
  let inPalace = false;
  let kingT = 0;
  let sparkleT = 0;
  let bubbleT = 0;
  let slowFrames = 0;
  let fps = 60;
  let attract = 0;
  const idle = { turn: 0, forward: 0, rise: 0, action: false, twirl: false, look: 0, looking: false };

  window.__shellsong = {
    mermaid,
    ocean,
    creatures,
    camera,
    renderer,
    found,
    get fps() {
      return Math.round(fps);
    },
    go,
    /** For testing: look at her from a fixed offset, e.g. { x: 4, y: 0.5, z: 0 } (null to stop). */
    viewFrom: null,
    teleport(x, y, z, yaw = 0) {
      placeMermaid(mermaid, x, y, z, yaw);
      cam.reset(mermaid);
    },
  };

  function frame() {
    requestAnimationFrame(frame);
    if (paused) return;
    timer.update();
    const dt = Math.min(timer.getDelta(), 0.05);
    const t = timer.getElapsed();
    if (dt > 0) fps = fps * 0.95 + (1 / dt) * 0.05;
    uniforms.uTime.value = t;
    const live = started && !menuOpen;
    const input = live ? controls.sample() : idle;

    /* -- swim -- */
    const action = live ? actionFor(mermaid, ocean, creatures) : null;
    if (input.action && action) act(mermaid, action);
    if (input.twirl && (mermaid.mode === 'ride' || mermaid.mode === 'leap')) {
      letGo(mermaid);
      input.twirl = false;
    }
    if (live && wantEmote) emote(mermaid, wantEmote);
    wantEmote = null;
    if (live) updateMermaid(mermaid, input, ocean, dt);
    hud.action(live ? action : null, mermaid.mode === 'ride' || mermaid.mode === 'leap');
    for (const e of mermaid.events) {
      if (e.type === 'surface') {
        fx.splash(mermaid.x, 0, mermaid.z, 10, 0.5);
        audio.surface();
        sayOnce('surface', 'The top of the sea! Look for ships and seagulls, and rocks to sit on.', 4);
      } else if (e.type === 'twirl') {
        audio.twirl();
        fx.sparkle(mermaid.x, mermaid.y, mermaid.z, colorOf(look, 'tail'), 16, 1);
        fx.bubbles(mermaid.x, mermaid.y, mermaid.z, 10);
      } else if (e.type === 'sit' || e.type === 'throne') {
        audio.sit();
        if (e.type === 'throne') hud.say(`You look wonderful on your throne, ${princess()}!`, 4);
      } else if (e.type === 'ride') {
        audio.dolphin();
        hud.hint(coarse ? 'Push up to go fast! Press Jump to leap out of the water.' : 'W to go fast! Press E to jump out of the water. Q to let go.', 4);
      } else if (e.type === 'leap') {
        audio.dolphin();
      } else if (e.type === 'emote') {
        audio.emote(e.kind);
        friend.cheer();
        if (e.kind === 'flip') fx.bubbles(mermaid.x, mermaid.y, mermaid.z, 14);
        if (e.kind === 'dance') fx.sparkle(mermaid.x, mermaid.y + 0.5, mermaid.z, colorOf(look, 'tail'), 14, 1);
        if (e.kind === 'kiss') kissHearts = 5;
        // The King answers, if he's near enough to see.
        if (Math.hypot(mermaid.x - KT.x, mermaid.y - KT.y, mermaid.z - KT.z) < 18) {
          setTimeout(() => {
            audio.hello();
            hud.say(KING_SAYS[e.kind](), 3);
          }, 700);
          kingT = 3;
        }
        sayOnce('emote', 'Try them all! Sing to the fish and dolphins.', 3);
      } else if (e.type === 'splash') {
        fx.splash(e.x, 0, e.z, 30, e.size);
        audio.splash(e.size);
        cam.kick(0.15);
      }
    }
    mermaid.events.length = 0;

    // Treasure!
    if (live && !flying) {
      const tr = findTreasure(mermaid, ocean, found);
      if (tr) {
        found.add(tr.id);
        settings.set('treasure', [...found]);
        audio.treasure();
        friend.cheer(true);
        fx.confetti(tr.x, tr.y + 1, tr.z, 90);
        fx.coins(tr.x, tr.y + 1, tr.z, 30);
        fx.stars(tr.x, tr.y + 1.2, tr.z, 10);
        hud.pop('Treasure!', `You found ${tr.name}!`);
        const m = makeTreasure(tr.id);
        m.position.set(tr.x, tr.y + 0.9, tr.z);
        m.scale.setScalar(1.5);
        scene.add(m);
        flying = { mesh: m, t: 0, id: tr.id };
        if (found.size === TREASURE_LIST.length) setTimeout(() => hud.pop('All twelve!', 'You found every treasure in the sea!'), 3200);
        else if (found.size === 1) setTimeout(() => hud.hint('Your treasure goes on show by your throne in the palace.', 4), 3200);
      }
    }
    if (flying) {
      // Up, a spin to show it off, then off home to the palace.
      flying.t += dt;
      const f = flying;
      f.mesh.rotation.y += dt * 3;
      if (f.t < 1.6) f.mesh.position.y += dt * 1.2;
      else f.mesh.scale.multiplyScalar(Math.max(0, 1 - dt * 3));
      if (Math.random() < dt * 20) fx.sparkle(f.mesh.position.x, f.mesh.position.y, f.mesh.position.z, 0xfff0a0, 1, 0.4);
      if (f.t > 2.6) {
        scene.remove(f.mesh);
        showTreasure(f.id);
        flying = null;
      }
    }
    // Hidden treasure twinkles, so you can spot it from a way off.
    sparkleT -= dt;
    if (sparkleT <= 0) {
      sparkleT = 0.12;
      for (const tr of ocean.treasures) {
        if (found.has(tr.id)) continue;
        if (Math.hypot(tr.x - mermaid.x, tr.z - mermaid.z) < 70 && Math.random() < 0.5) fx.sparkle(tr.x, tr.y + 1.4, tr.z, 0xfff0a0, 1, 0.8, 0.5);
      }
    }
    // A trail of bubbles when swimming fast.
    bubbleT -= dt;
    if (mermaid.y < -1 && mermaid.speed > 3 && bubbleT <= 0) {
      bubbleT = 0.15;
      fx.bubbles(mermaid.x - Math.sin(mermaid.yaw) * 1.2, mermaid.y, mermaid.z + Math.cos(mermaid.yaw) * 1.2, 1, 0.12);
    }

    // Hints, when they become useful.
    if (action?.kind === 'sit') sayOnce('sit', coarse ? 'Press Sit to sit on the rock.' : 'Press E to sit on the rock.');
    if (action?.kind === 'ride') sayOnce('ride', coarse ? 'A dolphin! Press Ride to ride it.' : 'A dolphin! Press E to ride it.');
    if (action?.kind === 'throne') sayOnce('throne', 'Your very own shell throne!');

    /* -- the King -- */
    const P = ocean.palace;
    const dKing = Math.hypot(mermaid.x - KT.x, mermaid.y - KT.y, mermaid.z - KT.z);
    const nowIn = Math.hypot(mermaid.x - P.x, mermaid.z - P.z) < P.hallR && mermaid.y < P.floor + P.hallR;
    if (nowIn && !inPalace && live) {
      audio.hello();
      hud.say(found.size ? `Welcome home, ${princess()}! What lovely treasures you've found!` : `Welcome home, ${princess()}! There's treasure hidden all over the sea.`, 4.5);
      kingT = 4;
    }
    inPalace = nowIn;
    kingT -= dt;
    kingState.wave = dKing < 12 && kingT > 0;
    kingState.time = t;
    poseMerperson(king, kingState, dt, t);

    /* -- creatures -- */
    const singing = mermaid.emote?.kind === 'sing';
    if (singing && (noteT -= dt) <= 0) {
      noteT = 0.22;
      fx.note(mermaid.x, mermaid.y + 0.9, mermaid.z);
    }
    if (kissHearts > 0 && mermaid.emote?.kind === 'kiss' && mermaid.emote.t > 0.6) {
      // Hearts float out from her hand, towards you.
      kissHearts--;
      const tx = camera.position.x - mermaid.x;
      const tz = camera.position.z - mermaid.z;
      const l = Math.hypot(tx, tz) || 1;
      fx.emit({ x: mermaid.x, y: mermaid.y + 0.6, z: mermaid.z, vx: (tx / l) * 1.5 + (Math.random() - 0.5), vy: 0.6 + Math.random() * 0.5, vz: (tz / l) * 1.5 + (Math.random() - 0.5), life: 1.8, size: 0.4, size1: 0.6, color: 0xff6a9a, bright: 1.3, shape: 5, fade: 0.6, drag: 0.8 });
    }
    updateCreatures(creatures, dt, { mermaid, riding: mermaid.mode === 'ride' || mermaid.mode === 'leap' ? mermaid.ride : null, lure: singing ? mermaid : null });
    creaturesView.update(t);
    for (const e of creatures.events) {
      const d = Math.hypot(e.x - mermaid.x, e.z - mermaid.z);
      if (d > 80) continue;
      if (e.type === 'splash') {
        fx.splash(e.x, 0, e.z, 16, e.size);
        if (d < 40) audio.splash(e.size * 0.5);
      } else if (e.type === 'spout') {
        fx.spout(e.x, 0.5, e.z);
        audio.splash(0.6);
      }
    }
    let whaleNear = 0;
    for (const w of creatures.whales) whaleNear = Math.max(whaleNear, 1 - Math.hypot(w.x - mermaid.x, w.y - mermaid.y, w.z - mermaid.z) / 60);
    let dolphinNear = 0;
    for (const d of creatures.dolphins) dolphinNear = Math.max(dolphinNear, 1 - Math.hypot(d.x - mermaid.x, d.y - mermaid.y, d.z - mermaid.z) / 30);

    /* -- the mermaid's model -- */
    model.position.set(mermaid.x, mermaid.y, mermaid.z);
    model.rotation.y = -mermaid.yaw;
    poseMerperson(model, { ...mermaid, wave: mermaid.mode === 'sit' && Math.sin(t * 0.4) > 0.6 }, dt, t);
    scenery.update(t, dt, found, mermaid);
    friend.update(mermaid, dt, t);

    /* -- camera -- */
    if (started) {
      cam.lookRound(input.look, input.looking, dt);
      cam.update(mermaid, dt);
      const v = window.__shellsong.viewFrom;
      if (v) {
        camera.position.set(mermaid.x + v.x, mermaid.y + v.y, mermaid.z + v.z);
        camera.lookAt(mermaid.x, mermaid.y + 0.2, mermaid.z);
      }
    } else {
      // Title screen: a close look at your mermaid, the palace behind her.
      attract += dt;
      const a = mermaid.yaw + Math.sin(attract * 0.3) * 0.35;
      camera.position.set(mermaid.x + Math.sin(a) * 3.6, mermaid.y + 0.6, mermaid.z - Math.cos(a) * 3.6);
      camera.lookAt(mermaid.x, mermaid.y + 0.2, mermaid.z);
      // Shift the picture so she's beside the menu card, not behind it.
      const wide = innerWidth > innerHeight;
      camera.setViewOffset(innerWidth, innerHeight, wide ? innerWidth * 0.22 : 0, wide ? 0 : innerHeight * 0.22, innerWidth, innerHeight);
    }
    if (started && camera.view?.enabled) camera.clearViewOffset();

    const under = camera.position.y < 0;
    scene.fog = under ? fogUnder : fogAbove;
    // Under the water there's no sky: just blue, fading into the distance.
    sky.mesh.visible = !under;
    scene.background = under ? fogUnder.color : null;
    water.surface.material.depthWrite = !under;
    post.uniforms.inkFade.value.set(under ? 18 : 300, under ? 70 : 1500);
    hemi.intensity = under ? 1.5 : 1.25;
    water.update(t, camera, under, sunDir);
    fx.setScale(renderer.domElement.height, camera.fov);
    fx.update(dt, t);
    sun.target.position.set(mermaid.x, mermaid.y, mermaid.z);
    sun.position.copy(sun.target.position).addScaledVector(sunDir, 80);

    audio.update(dt, { underwater: under, speed: mermaid.speed, whaleNear: Math.max(0, whaleNear), dolphinNear: Math.max(0, dolphinNear) });
    hud.update(dt);
    sky.follow(camera.position);
    sky.uniforms.time.value = t;
    post.render(scene, camera);

    if (!QUALITY.degraded && dt > 0.042) {
      if (++slowFrames > 240 && degrade(renderer, sun)) post.setSize();
    } else if (slowFrames > 0) slowFrames--;
  }
  frame();
}

try {
  boot();
} catch (error) {
  console.error(error);
  const panel = document.querySelector('#error');
  if (panel) panel.style.display = 'grid';
}

