/**
 * Bellbrook: a toy fire engine in a cute little town.
 *
 * Drive about. When a call comes in, follow the arrows, stop by the fire and
 * spray it until it's out, and everyone cheers. Sometimes it's a kitten up a
 * tree instead: raise the ladder. There's no score, no timer and no way to
 * get it wrong; it's a love letter to fire engines.
 *
 * This file is the wiring: build the renderer and the town, then one frame
 * loop that reads the controls, drives the truck, sprays the water, runs the
 * calls, the townsfolk and the traffic, and draws it all.
 */
import {
  DirectionalLight,
  Fog,
  HemisphereLight,
  NeutralToneMapping,
  PCFShadowMap,
  PerspectiveCamera,
  PointLight,
  Raycaster,
  Scene,
  SRGBColorSpace,
  Timer,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';

import { QUALITY, degrade } from './core/quality.js';
import { settings } from './core/settings.js';
import { clamp, damp } from './core/utils.js';
import { buildCity, groundY } from './world/city.js';
import { buildCollider } from './world/collide.js';
import { createFires, updateFires, douse, CALL } from './world/fires.js';
import { createWater, updateWater, spray, aimArc } from './world/water.js';
import { createPeople, updatePeople, splashPerson } from './world/people.js';
import { createTraffic, updateTraffic, trafficCircles } from './world/traffic.js';
import { createTruck, updateTruck, placeTruck } from './truck/physics.js';
import { createTruckModel, poseTruck, nozzleWorld, ladderTipWorld, ladderBaseWorld } from './truck/model.js';
import { createCameraRig } from './truck/camera.js';
import { createInput } from './truck/input.js';
import { createTown } from './render/town.js';
import { createPeopleView, createCat } from './render/people.js';
import { createCarsView } from './render/cars.js';
import { createFx } from './render/fx.js';
import { createMarker } from './render/marker.js';
import { createSky } from './render/sky.js';
import { createPost } from './render/post.js';
import { createAudio } from './audio/audio.js';
import { createHud } from './ui/hud.js';

/* ------------------------------------------------------------- lights --- */

const LIGHTS = {
  day: {
    label: 'Sunny day',
    sun: [0.45, 0.78, 0.42],
    sunColor: 0xfff4e0,
    sunIntensity: 2.7,
    sky: 0xc4e2ff,
    ground: 0x9cc77a,
    hemi: 1.3,
    fog: 0xd2e8f6,
    top: 0x4f9ae8,
    horizon: 0xe2f1ff,
    glow: 0xfff0c0,
    exposure: 1.0,
    night: 0,
  },
  sunset: {
    label: 'Sunset',
    sun: [-0.75, 0.24, 0.42],
    sunColor: 0xffb27a,
    sunIntensity: 2.6,
    sky: 0xbfa8e6,
    ground: 0xc48a5a,
    hemi: 1.05,
    fog: 0xf2bc98,
    top: 0x5a6ac8,
    horizon: 0xffbc8c,
    glow: 0xff7a3a,
    exposure: 1.08,
    night: 0.3,
  },
  night: {
    label: 'Night time',
    sun: [0.35, 0.62, -0.55],
    sunColor: 0xa8bcff,
    sunIntensity: 0.6,
    sky: 0x4a5a98,
    ground: 0x22303a,
    hemi: 0.75,
    fog: 0x1c2548,
    top: 0x0b1634,
    horizon: 0x2c3c70,
    glow: 0x7a8aff,
    exposure: 1.2,
    night: 1,
  },
};
const LIGHT_ORDER = ['day', 'sunset', 'night'];

const coarse = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;

function boot() {
  /* ----------------------------------------------------------- renderer --- */
  const renderer = new WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, QUALITY.pixelRatio));
  renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFShadowMap;
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = NeutralToneMapping;
  document.body.insertBefore(renderer.domElement, document.querySelector('#ui'));

  const scene = new Scene();
  const camera = new PerspectiveCamera(40, innerWidth / innerHeight, 1, 4500);
  scene.add(camera);
  const timer = new Timer();
  timer.connect(document);

  /* -------------------------------------------------------------- world --- */
  const city = buildCity();
  const collider = buildCollider(city);
  const world = { collider, ponds: city.ponds };
  const town = createTown(scene, city);
  const sky = createSky(scene);
  const post = createPost(renderer);
  post.uniforms.mistColor.value.set(0xffffff);

  const hemi = new HemisphereLight(0xc4e2ff, 0x9cc77a, 1.3);
  scene.add(hemi);
  const sun = new DirectionalLight(0xffffff, 2.7);
  sun.castShadow = true;
  sun.shadow.mapSize.set(QUALITY.shadowMap, QUALITY.shadowMap);
  const S = 60;
  Object.assign(sun.shadow.camera, { left: -S, right: S, top: S, bottom: -S, near: 1, far: 400 });
  sun.shadow.bias = -0.0005;
  sun.shadow.normalBias = 0.3;
  scene.add(sun, sun.target);
  scene.fog = new Fog(0xd2e8f6, 220, 1100);
  const sunDir = new Vector3();
  // The glow of the fire on everything around it.
  const fireLight = new PointLight(0xff8a3a, 0, 26, 1.5);
  scene.add(fireLight);

  let lightName = LIGHTS[settings.get('light')] ? settings.get('light') : 'day';
  let night = 0;
  function setLight(name) {
    const L = LIGHTS[name] || LIGHTS.day;
    lightName = name;
    sunDir.set(...L.sun).normalize();
    sun.color.setHex(L.sunColor);
    sun.intensity = L.sunIntensity;
    hemi.color.setHex(L.sky);
    hemi.groundColor.setHex(L.ground);
    hemi.intensity = L.hemi;
    scene.fog.color.setHex(L.fog);
    sky.uniforms.topColor.value.setHex(L.top);
    sky.uniforms.horizonColor.value.setHex(L.horizon);
    sky.uniforms.glowColor.value.setHex(L.glow);
    sky.uniforms.cloudColor.value.setHex(L.night > 0.5 ? 0x8890b8 : 0xffffff);
    sky.uniforms.sunDir.value.copy(sunDir);
    sky.uniforms.night.value = L.night > 0.5 ? 1 : 0;
    renderer.toneMappingExposure = L.exposure;
    night = L.night;
    town.setNight(L.night);
    settings.set('light', name);
    for (const chip of document.querySelectorAll('[data-light]')) chip.setAttribute('aria-pressed', String(chip.dataset.light === name));
    return L.label;
  }
  setLight(lightName);

  /* -------------------------------------------------------------- truck --- */
  const truck = createTruck(city.spawn);
  let paint = settings.get('paint') || 'red';
  let model = createTruckModel(paint);
  scene.add(model);
  function setPaint(name) {
    paint = name;
    settings.set('paint', name);
    const old = model;
    model = createTruckModel(name);
    scene.add(model);
    scene.remove(old);
    for (const chip of document.querySelectorAll('[data-paint]')) chip.setAttribute('aria-pressed', String(chip.dataset.paint === name));
  }
  setPaint(paint);
  // Two ways to play: steer it from behind like a car, or point the way from above.
  let drive = settings.get('drive') === 'behind' ? 'behind' : 'above';
  /** The first building on the line a -> b, as a fraction of the way (1 if none). */
  function firstBuilding(a, b) {
    let best = 1;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dz = b.z - a.z;
    for (const box of city.boxes) {
      let t0 = 0;
      let t1 = best;
      for (const [o, d, lo, hi] of [
        [a.x, dx, box.minX, box.maxX],
        [a.y, dy, 0, box.h],
        [a.z, dz, box.minZ, box.maxZ],
      ]) {
        if (Math.abs(d) < 1e-9) {
          if (o < lo || o > hi) t0 = 2;
          continue;
        }
        let u = (lo - o) / d;
        let v = (hi - o) / d;
        if (u > v) [u, v] = [v, u];
        t0 = Math.max(t0, u);
        t1 = Math.min(t1, v);
      }
      if (t0 <= t1 && t0 < best) best = t0;
    }
    return best;
  }
  const rig = createCameraRig(camera, { view: settings.get('view') || 0, mode: drive, blocker: firstBuilding });
  function setDrive(mode) {
    drive = mode;
    settings.set('drive', mode);
    rig.setMode(mode, truck);
    document.body.classList.toggle('behind', mode === 'behind');
    for (const chip of document.querySelectorAll('[data-drive]')) chip.setAttribute('aria-pressed', String(chip.dataset.drive === mode));
  }
  setDrive(drive);
  rig.reset(truck);

  /* ------------------------------------------------------- the townsfolk --- */
  const people = createPeople(city, QUALITY.people);
  const peopleView = createPeopleView(scene, people);
  const traffic = createTraffic(14);
  const carsView = createCarsView(scene, traffic);
  const cars = [];
  const fires = createFires(city, (Date.now() & 0xffff) + 1);
  const water = createWater(1000);
  const fx = createFx(scene, QUALITY.particles, water.max);
  const marker = createMarker(scene);
  const cat = createCat();
  scene.add(cat);
  const audio = createAudio();
  const hud = createHud();

  /* ------------------------------------------------------------- actions --- */
  let started = false;
  let menuOpen = false;
  let siren = false;
  let hornNow = false;
  let ladderUp = false;
  let sirenEver = false;
  const said = new Set();
  const sayOnce = (key, text, seconds = 3.5) => {
    if (said.has(key)) return;
    said.add(key);
    hud.hint(text, seconds);
  };

  function toggleSiren() {
    if (!started || menuOpen) return;
    siren = !siren;
    sirenEver = true;
    hud.setButton('#sirenBtn', siren);
    document.querySelector('#sirenBtn')?.classList.remove('pulse');
  }
  function honk() {
    if (!started || menuOpen) return;
    hornNow = true;
    audio.horn();
  }
  function toggleLadder() {
    if (!started || menuOpen) return;
    ladderUp = !ladderUp;
    if (ladderUp) truck.speed = Math.min(truck.speed, 2);
    hud.setButton('#ladderBtn', ladderUp);
    document.querySelector('#ladderBtn')?.classList.remove('pulse');
    audio.ladder(ladderUp);
  }
  function turnView(dir) {
    settings.set('view', rig.turn(dir));
  }
  function cycleLight() {
    const next = LIGHT_ORDER[(LIGHT_ORDER.indexOf(lightName) + 1) % LIGHT_ORDER.length];
    hud.hint(setLight(next), 1.4);
  }
  function toggleSound() {
    const on = audio.toggle();
    settings.set('sound', on);
    hud.setSound(on);
  }

  const controls = createInput({
    actions: {
      siren: toggleSiren,
      horn: honk,
      ladder: toggleLadder,
      turn: turnView,
      zoom: (f) => rig.zoom(f),
      sound: toggleSound,
      light: cycleLight,
      camera: () => {
        setDrive(drive === 'behind' ? 'above' : 'behind');
        hud.hint(drive === 'behind' ? 'Behind the truck' : 'From above', 1.4);
      },
      menu: () => (menuOpen ? closeMenu() : openMenu()),
    },
    onFirstInput: () => audio.start(),
  });
  document.querySelector('#viewBtn')?.addEventListener('click', () => turnView(1));
  document.querySelector('#lightBtn')?.addEventListener('click', cycleLight);
  document.querySelector('#soundBtn')?.addEventListener('click', toggleSound);
  for (const chip of document.querySelectorAll('[data-light]')) chip.addEventListener('click', () => setLight(chip.dataset.light));
  for (const chip of document.querySelectorAll('[data-drive]')) chip.addEventListener('click', () => setDrive(chip.dataset.drive));
  for (const chip of document.querySelectorAll('[data-paint]')) chip.addEventListener('click', () => setPaint(chip.dataset.paint));
  if (settings.get('sound') === false) audio.setEnabled(false);
  hud.setSound(audio.enabled);

  // The title card doubles as the menu.
  const startBtn = document.querySelector('#start');
  const homeBtn = document.querySelector('#home');
  function go() {
    if (menuOpen) return closeMenu();
    if (started) return;
    started = true;
    hud.hideIntro();
    document.body.classList.add('playing');
    audio.start();
    audio.bell(3);
    rig.reset(truck);
    document.querySelector('#sirenBtn')?.classList.add('pulse');
    if (drive === 'behind') hud.hint(coarse ? 'Push up on the left to go, left and right to steer. Try the siren!' : 'W to go, A and D to steer, S to back up. F for the siren!', 5);
    else hud.hint(coarse ? 'Drag on the left to drive. Try the siren!' : 'Arrow keys or WASD to drive. F for the siren!', 4.5);
  }
  function openMenu() {
    if (!started || menuOpen) return;
    menuOpen = true;
    if (startBtn) startBtn.textContent = 'Keep driving';
    if (homeBtn) homeBtn.hidden = false;
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
    placeTruck(truck, city.spawn.x, city.spawn.z, city.spawn.heading);
    rig.reset(truck);
  });
  document.querySelector('#menuBtn')?.addEventListener('click', () => (menuOpen ? closeMenu() : openMenu()));
  addEventListener('keydown', (e) => {
    if ((!started || menuOpen) && (e.code === 'Enter' || e.code === 'Space')) {
      e.preventDefault();
      go();
    } else if (e.code === 'Escape') menuOpen ? closeMenu() : openMenu();
  });

  /* --------------------------------------------------------- aiming --- */
  const raycaster = new Raycaster();
  const ndc = new Vector2();
  /** Where on the town a point on the screen lands (aiming at the fire if close). */
  function screenToWorld(sx, sy) {
    ndc.set((sx / innerWidth) * 2 - 1, -(sy / innerHeight) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const { origin: o, direction: d } = raycaster.ray;
    const f = fires.active;
    if (f && f.kind !== 'cat') {
      const tx = f.x - o.x;
      const ty = f.y - o.y;
      const tz = f.z - o.z;
      const along = tx * d.x + ty * d.y + tz * d.z;
      const off = Math.hypot(tx - d.x * along, ty - d.y * along, tz - d.z * along);
      if (along > 0 && off < 3 + f.size * 2) return { x: f.x, y: f.y, z: f.z };
    }
    let best = d.y < 0 ? -o.y / d.y : 1e9;
    for (const b of city.boxes) {
      // Slab test against the building's box.
      let t0 = 0;
      let t1 = best;
      for (const [oc, dc, lo, hi] of [
        [o.x, d.x, b.minX, b.maxX],
        [o.y, d.y, 0, b.h],
        [o.z, d.z, b.minZ, b.maxZ],
      ]) {
        if (Math.abs(dc) < 1e-9) {
          if (oc < lo || oc > hi) t0 = 1e9;
          continue;
        }
        let a = (lo - oc) / dc;
        let c = (hi - oc) / dc;
        if (a > c) [a, c] = [c, a];
        t0 = Math.max(t0, a);
        t1 = Math.min(t1, c);
      }
      if (t0 <= t1 && t0 < best) best = t0;
    }
    if (best > 400) best = 60;
    return { x: o.x + d.x * best, y: Math.max(0, o.y + d.y * best), z: o.z + d.z * best };
  }

  /* ------------------------------------------------------------ kitten --- */
  const kitten = { state: 'hidden', t: 0, tree: null, from: new Vector3(), to: new Vector3(), owner: null };
  function showKitten(fire) {
    const t = fire.spot.tree;
    // On the side of the tree nearest the road.
    const dx = fire.spot.road.x - t.x;
    const dz = fire.spot.road.z - t.z;
    const d = Math.hypot(dx, dz) || 1;
    kitten.tree = { x: t.x + (dx / d) * t.r * 0.75, y: groundY(t.x, t.z) + t.h * 0.66 + t.r * 0.55, z: t.z + (dz / d) * t.r * 0.75 };
    kitten.state = 'tree';
    kitten.t = 0;
    cat.visible = true;
  }
  const tipW = new Vector3();
  const baseW = new Vector3();
  function updateKitten(dt, t) {
    if (kitten.state === 'hidden') return;
    kitten.t += dt;
    if (kitten.state === 'tree') {
      cat.position.set(kitten.tree.x, kitten.tree.y + Math.abs(Math.sin(t * 2)) * 0.05, kitten.tree.z);
      cat.rotation.y = Math.sin(t * 0.7) * 0.6 - Math.atan2(truck.x - kitten.tree.x, -(truck.z - kitten.tree.z));
      if (Math.random() < dt * 0.25 && Math.hypot(truck.x - kitten.tree.x, truck.z - kitten.tree.z) < 40) audio.meow();
    } else if (kitten.state === 'down') {
      // Onto the ladder, down it, and off onto the pavement beside the truck.
      ladderTipWorld(model, tipW);
      ladderBaseWorld(model, baseW);
      const u = kitten.t;
      if (u < 0.6) cat.position.lerpVectors(kitten.from.set(kitten.tree.x, kitten.tree.y, kitten.tree.z), tipW, u / 0.6);
      else if (u < 2.4) cat.position.lerpVectors(tipW, baseW, (u - 0.6) / 1.8);
      else if (u < 3.0) {
        const k = (u - 2.4) / 0.6;
        kitten.to.set(truck.x + Math.cos(truck.heading) * 2.5, groundY(truck.x, truck.z), truck.z + Math.sin(truck.heading) * 2.5);
        cat.position.lerpVectors(baseW, kitten.to, k);
        cat.position.y += Math.sin(k * Math.PI) * 1.2;
      } else {
        kitten.state = 'happy';
        kitten.t = 0;
        ladderUp = false;
        hud.setButton('#ladderBtn', false);
        audio.ladder(false);
      }
      cat.rotation.y = -truck.heading;
    } else if (kitten.state === 'happy') {
      // A happy little hop, then off home.
      cat.position.y = kitten.to.y + Math.abs(Math.sin(kitten.t * 6)) * 0.3;
      cat.rotation.y += dt * 2;
      if (kitten.t > 4) {
        kitten.state = 'hidden';
        cat.visible = false;
      }
    }
  }

  /* ---------------------------------------------------------- the loop --- */
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

  let slowFrames = 0;
  let fps = 60;
  let attract = 0;
  let cheerAt = null;
  let truckY = 0;
  let steamCool = 0;
  let catNearT = 0;
  let exhaust = 0;
  let wasNearFire = false;
  const nozzle = new Vector3();
  const idle = { mx: 0, my: 0, spray: false, aim: null, stickAim: null };
  const proj = new Vector3();

  window.__bellbrook = {
    truck,
    city,
    fires,
    people,
    traffic,
    camera,
    renderer,
    get fps() {
      return Math.round(fps);
    },
    go,
    teleport(x, z, heading = 0) {
      placeTruck(truck, x, z, heading);
      rig.reset(truck);
    },
    callNow() {
      fires.timer = 0;
    },
    get ladder() {
      return { up: ladderUp, raised: model.userData.ladder, kitten: kitten.state };
    },
  };

  function frame() {
    requestAnimationFrame(frame);
    if (paused) return;
    timer.update();
    const dt = Math.min(timer.getDelta(), 0.05);
    const t = timer.getElapsed();
    if (dt > 0) fps = fps * 0.95 + (1 / dt) * 0.05;
    const live = started && !menuOpen;
    const input = live ? controls.sample(dt) : idle;

    /* -- drive -- */
    // From above the stick points the way; from behind it's gas and steering.
    const move = drive === 'behind' ? { throttle: input.my, steer: input.mx } : rig.toWorld(input.mx, input.my);
    // With the ladder up, the truck stays put (it lowers if you drive off).
    if (ladderUp && Math.hypot(input.mx, input.my) > 0.5 && kitten.state !== 'down') {
      ladderUp = false;
      hud.setButton('#ladderBtn', false);
      audio.ladder(false);
    }
    if (live) {
      trafficCircles(traffic, cars);
      updateTruck(truck, ladderUp ? { dx: 0, dz: 0 } : move, world, dt, cars);
    }
    for (const e of truck.events) {
      if (e.type === 'bump') {
        audio.bump(e.strength);
        rig.kick(e.strength * 0.4);
      } else if (e.type === 'splash') {
        fx.splash(truck.x, 0.3, truck.z, 30, 1.6, 0xbfe8ff);
        audio.splash(e.strength);
      }
    }
    truck.events.length = 0;
    if (truck.inWater && Math.abs(truck.speed) > 2 && Math.random() < dt * 20) fx.splash(truck.x + (Math.random() - 0.5) * 3, 0.3, truck.z + (Math.random() - 0.5) * 3, 3, 1, 0xbfe8ff);
    truckY = damp(truckY, groundY(truck.x, truck.z), 12, dt);

    /* -- water -- */
    const fire = fires.active;
    let aim = null;
    if (input.aim) aim = screenToWorld(input.aim.x, input.aim.y);
    else if (input.stickAim) {
      const d = rig.toWorld(input.stickAim.x, input.stickAim.y);
      aim = { x: truck.x + d.dx * 16, y: 0, z: truck.z + d.dz * 16 };
    } else if (input.spray) {
      if (fire && fire.kind !== 'cat' && Math.hypot(fire.x - truck.x, fire.z - truck.z) < 46) aim = { x: fire.x, y: fire.y, z: fire.z };
      else aim = { x: truck.x + Math.sin(truck.heading) * 15, y: 0, z: truck.z - Math.cos(truck.heading) * 15 };
    }
    const spraying = live && input.spray && !!aim;
    let aimPitch = null;
    if (spraying) {
      nozzleWorld(model, nozzle);
      const vel = aimArc(nozzle.x, nozzle.y, nozzle.z, aim.x, aim.y, aim.z);
      aimPitch = Math.atan2(vel.y, Math.hypot(vel.x, vel.z));
      spray(water, nozzle, vel, dt);
    }
    updateWater(water, dt, { collider, fire, people: people.list });
    let splashes = 0;
    steamCool -= dt;
    for (const e of water.events) {
      if (e.type === 'fire') {
        douse(fires);
        if (steamCool <= 0) {
          steamCool = 0.06;
          fx.steam(e.x, e.y, e.z, 1, 0.8 + (fire?.size ?? 1) * 0.3);
        }
      } else if (e.type === 'person') {
        if (splashPerson(e.person)) {
          fx.heart(e.person.x, 2.2, e.person.z);
          audio.giggle();
        }
      } else {
        splashes++;
        if (Math.random() < 0.35) fx.splash(e.x, e.y, e.z, 2, 0.7);
        if (e.type === 'ground') fx.wetAt(e.x, e.y, e.z, dt);
      }
    }

    /* -- the calls -- */
    if (live) updateFires(fires, dt, { x: truck.x, z: truck.z, ladderUp: ladderUp && model.userData.ladder > 0.8 });
    cheerAt = null;
    for (const e of fires.events) {
      const f = e.fire;
      if (e.type === 'start') {
        audio.alert();
        marker.set(f);
        if (f.kind === 'cat') {
          showKitten(f);
          hud.call('cat', `A kitten is stuck up ${f.spot.name}!`);
        } else hud.call('fire', `Fire at ${f.spot.name}!`);
        sayOnce('follow', 'Follow the arrows!', 3);
        if (!sirenEver) document.querySelector('#sirenBtn')?.classList.add('pulse');
      } else if (e.type === 'out' || e.type === 'rescued') {
        cheerAt = { x: f.x, z: f.z };
        marker.set(null);
        hud.call(null);
        audio.cheer();
        fx.confetti(f.x, f.y + 1, f.z, 140);
        fx.stars(f.x, f.y + 1.5, f.z, 10);
        if (e.type === 'out') {
          fx.steam(f.x, f.y, f.z, 18, 1.8);
          hud.pop(pickOne(['Hooray!', 'Well done!', 'Yay!', 'All out!', 'Hooray!']), pickOne(['Thank you, firefighter!', 'The fire is out!', 'Everyone is safe!', 'Super spraying!']));
        } else {
          kitten.state = 'down';
          kitten.t = 0;
          audio.meow();
          hud.pop('Hooray!', 'Kitten saved!');
          document.querySelector('#ladderBtn')?.classList.remove('pulse');
        }
        rig.kick(0.15);
      }
    }
    fires.events.length = 0;

    // Hints, once each, as they become useful.
    const near = fire ? Math.hypot(fire.x - truck.x, fire.z - truck.z) : 1e9;
    if (fire && fire.kind !== 'cat' && near < 36) {
      sayOnce('spray', coarse ? 'Hold the water button, or touch the fire, to spray!' : 'Hold Space, or click on the fire, to spray!', 4.5);
      if (!wasNearFire && !spraying) document.querySelector('#sprayBtn')?.classList.add('pulse');
      wasNearFire = true;
    } else wasNearFire = false;
    if (spraying) document.querySelector('#sprayBtn')?.classList.remove('pulse');
    if (fire && fire.kind === 'cat' && near < CALL.rescueRange) {
      sayOnce('ladder', coarse ? 'Stop by the tree and raise the ladder!' : 'Stop by the tree and press L for the ladder!', 4);
      if (!ladderUp) document.querySelector('#ladderBtn')?.classList.add('pulse');
      // Small hands: if the truck waits by the tree, up goes the ladder anyway.
      if (Math.abs(truck.speed) < 0.5 && !ladderUp) {
        catNearT += dt;
        if (catNearT > 2.5) {
          catNearT = 0;
          toggleLadder();
        }
      } else catNearT = 0;
    }
    if (started && t > 20 && !sirenEver) sayOnce('siren', coarse ? 'Press the blue siren button! Nee-naw!' : 'Press F for the siren! Nee-naw!', 3.5);

    /* -- townsfolk and traffic -- */
    updatePeople(people, dt, { truck, siren: siren && live, horn: hornNow, fire, cheer: cheerAt, blocks: city.blocks });
    hornNow = false;
    peopleView.update();
    updateTraffic(traffic, dt, { truck, siren: siren && live });
    carsView.update(t);

    /* -- fire visuals -- */
    if (fire && fire.kind !== 'cat') {
      fx.flames(fire, dt, fire.spot.nx, fire.spot.nz);
      fx.smoke(fire, dt);
      fireLight.position.set(fire.x + fire.spot.nx * 1.5, fire.y + 1, fire.z + fire.spot.nz * 1.5);
      fireLight.intensity = (8 + 22 * night) * fire.hp * (0.85 + Math.random() * 0.3) * fire.size;
    } else fireLight.intensity = 0;
    if (live && truck.speed > 1 && truck.speed < 8 && (exhaust -= dt) < 0) {
      exhaust = 0.35;
      fx.puff(truck.x + Math.cos(truck.heading) * 1.1 - Math.sin(truck.heading) * 3.4, 0.5 + truckY, truck.z + Math.sin(truck.heading) * 1.1 + Math.cos(truck.heading) * 3.4, 0x8a8a8a, 0.3);
    }

    /* -- truck, kitten, markers -- */
    const ladderAt = fire && fire.kind === 'cat' && kitten.tree ? kitten.tree : kitten.state === 'down' ? kitten.tree : null;
    let reach = 0;
    if (ladderAt) reach = clamp(Math.hypot(ladderAt.x - truck.x, ladderAt.z - truck.z) - 5.5, 0, 4.5);
    poseTruck(model, truck, dt, t, { aim, aimPitch, siren: siren && live, ladderUp, ladderAt, ladderReach: reach || 2.5, night: night > 0.5, y: truckY });
    updateKitten(dt, t);
    marker.update(dt, t, truck, rig.distance, near);
    fx.update(dt, water);
    town.update(t, truck);

    // Off-screen? An arrow at the edge of the screen points the way.
    if (fire && started) {
      proj.set(fire.x, fire.y + 2, fire.z).project(camera);
      const behind = proj.z > 1;
      let sx = proj.x;
      let sy = proj.y;
      if (behind) {
        sx = -sx;
        sy = -sy;
      }
      const off = behind || Math.abs(sx) > 0.92 || Math.abs(sy) > 0.88;
      if (off) {
        const k = 0.86 / Math.max(Math.abs(sx), Math.abs(sy), 1e-3);
        const ex = sx * Math.min(1, k);
        const ey = sy * Math.min(1, k);
        hud.arrow(true, ((ex + 1) / 2) * innerWidth, ((1 - ey) / 2) * innerHeight, Math.atan2(-sy, sx), fire.kind);
      } else hud.arrow(false);
    } else hud.arrow(false);

    /* -- camera -- */
    if (started) {
      let look = null;
      if (spraying) look = aim;
      else if (fire && near < 34) look = { x: fire.x, y: fire.y, z: fire.z };
      rig.update(dt, truck, look);
    } else {
      // Title card: drift slowly round the fire engine at the station.
      attract += dt * 0.2;
      const a = Math.sin(attract * 0.5) * 1.0;
      camera.position.set(truck.x + Math.sin(a) * 22, 9 + Math.sin(attract * 0.7) * 1.5, truck.z + Math.cos(a) * 22);
      camera.lookAt(truck.x, 3, truck.z - 6);
    }
    fx.setScale(renderer.domElement.height, camera.fov);

    // The sun's shadow box follows the camera's focus.
    let fxp = started ? camera.position.x + Math.sin(rig.yaw) * Math.cos(0.86) * rig.distance : truck.x;
    let fzp = started ? camera.position.z - Math.cos(rig.yaw) * Math.cos(0.86) * rig.distance : truck.z;
    if (started && drive === 'behind') {
      // Most of what you see is ahead of the truck.
      fxp = truck.x + Math.sin(truck.heading) * 25;
      fzp = truck.z - Math.cos(truck.heading) * 25;
    }
    sun.target.position.set(fxp, 0, fzp);
    sun.position.set(fxp, 0, fzp).addScaledVector(sunDir, 200);

    audio.update(dt, {
      speed: truck.speed,
      throttle: Math.min(1, Math.hypot(input.mx, input.my)),
      siren: siren && live,
      time: t,
      spraying,
      splashes,
      fireNear: fire && fire.kind !== 'cat' ? near : null,
      fireHp: fire ? fire.hp : 0,
      vanNear: Math.hypot(traffic.cars[1].x - truck.x, traffic.cars[1].z - truck.z),
    });
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

const pickOne = (list) => list[Math.floor(Math.random() * list.length)];

try {
  boot();
} catch (error) {
  console.error(error);
  const panel = document.querySelector('#error');
  if (panel) panel.style.display = 'grid';
}
