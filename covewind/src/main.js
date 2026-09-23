/**
 * Covewind — a free-flight toy above a warm fishing island.
 *
 * This file is the wiring: build the renderer and the world, then run one
 * frame loop that samples input, flies the aeroplane, moves the island's life
 * around, and draws it. Everything with an opinion lives in its own module.
 */
import {
  NeutralToneMapping,
  Timer,
  PCFShadowMap,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from 'three';

import { QUALITY, degrade } from './core/quality.js';
import { settings } from './core/settings.js';
import { DEFAULT_LIGHT, LIGHT_ORDER, LIGHT_PRESETS } from './core/palette.js';
import { clamp } from './core/utils.js';

import * as terrain from './world/terrain.js';
import { createSky } from './world/sky.js';
import { createClouds } from './world/clouds.js';
import { createWater } from './world/water.js';
import { createLighting } from './world/lighting.js';
import { createWorld } from './world/world.js';
import { createPlaneModel, setControlSurfaces } from './world/aircraft.js';

import { createFlight, updateFlight } from './flight/flight-model.js';
import { createWind } from './flight/wind.js';
import { createCameraRig, CAMERA_MODES } from './flight/camera-rig.js';
import { createContrails, createSmoke, createSpray, SMOKE_MODES } from './flight/effects.js';
import { createInput } from './flight/input.js';

import { createHud } from './ui/hud.js';
import { createPhotoMode } from './ui/photo-mode.js';
import { createAudio } from './audio/audio.js';
import { createPost } from './render/post.js';

function boot() {
  /* ------------------------------------------------------------ renderer --- */
  const renderer = new WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, QUALITY.pixelRatio));
  renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMap.enabled = QUALITY.shadows;
  renderer.shadowMap.type = PCFShadowMap;
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = NeutralToneMapping;
  renderer.toneMappingExposure = 1.08;
  document.body.insertBefore(renderer.domElement, document.querySelector('#ui'));

  const scene = new Scene();
  const camera = new PerspectiveCamera(58, innerWidth / innerHeight, 0.5, 4200);
  scene.add(camera);
  // Timer (rather than Clock) so a backgrounded tab doesn't come back with a
  // ten-second delta and throw the aeroplane across the island.
  const timer = new Timer();
  timer.connect(document);

  /* --------------------------------------------------------------- world --- */
  const sky = createSky(scene);
  const clouds = createClouds(scene);
  const water = createWater(scene);
  const lighting = createLighting(scene, renderer, sky, water, clouds);
  const world = createWorld(scene, clouds);
  const post = createPost(renderer);

  const plane = createPlaneModel(0xc9473d, false);
  plane.rotation.order = 'YXZ';
  scene.add(plane);

  const flight = createFlight();
  const wind = createWind();
  const rig = createCameraRig(camera, { mode: settings.get('camera') ?? 0 });
  const contrails = createContrails(scene);
  const spray = createSpray(scene);
  const smoke = createSmoke(scene);
  const audio = createAudio();

  plane.position.copy(flight.pos);
  rig.reset(flight);

  /* ------------------------------------------------------------------ ui --- */
  let started = false;

  const hud = createHud({
    actions: {
      camera: () => cycleCamera(),
      light: () => cycleLight(),
      photo: () => togglePhoto(),
      sound: () => toggleSound(),
    },
  });

  function cycleSmoke() {
    const mode = smoke.cycle();
    hud.hint(SMOKE_MODES[mode], 1.3);
    document.querySelector('#smokeBtn')?.classList.toggle('off', mode === 0);
  }

  const photo = createPhotoMode({
    rig,
    hud,
    onChange: (active) => {
      if (active) hud.hint('Photo mode — drag to look around, tap the shutter to keep it', 3.4);
    },
  });

  function cycleCamera() {
    const mode = rig.cycle();
    settings.set('camera', mode);
    hud.hint(`${CAMERA_MODES[mode]} camera`, 1.3);
  }

  function cycleLight() {
    const index = LIGHT_ORDER.indexOf(lighting.name);
    const next = LIGHT_ORDER[(index + 1) % LIGHT_ORDER.length];
    setLight(next);
  }

  function setLight(name) {
    lighting.set(name);
    settings.set('light', name);
    hud.hint(LIGHT_PRESETS[name].label, 1.4);
    for (const chip of document.querySelectorAll('[data-light]')) {
      chip.setAttribute('aria-pressed', String(chip.dataset.light === name));
    }
  }

  function togglePhoto() {
    photo.toggle(plane.position);
  }

  function toggleSound() {
    const on = audio.toggle();
    settings.set('sound', on);
    hud.setSound(on);
    hud.hint(on ? 'Sound on' : 'Sound off', 1.2);
  }

  const controls = createInput({
    canvas: renderer.domElement,
    actions: {
      camera: cycleCamera,
      light: cycleLight,
      photo: togglePhoto,
      sound: toggleSound,
      smoke: cycleSmoke,
      hud: () => hud.toggle(),
      invertPitch: () => setInvertPitch(!controls.invertPitch),
      escape: () => photo.set(false),
      orbit: (dx, dy) => {
        if (photo.active) rig.orbit(dx, dy);
      },
      zoom: (delta) => {
        if (photo.active) rig.zoom(delta);
      },
    },
    onFirstInput: () => audio.start(),
  });

  function setInvertPitch(value) {
    const on = controls.setInvertPitch(value);
    settings.set('invertPitch', on);
    hud.hint(on ? 'Pull back to climb' : 'Push forward to climb', 1.6);
    for (const chip of document.querySelectorAll('[data-pitch]')) {
      chip.setAttribute('aria-pressed', String((chip.dataset.pitch === 'inverted') === on));
    }
  }

  // Remembered preferences.
  setLight(settings.get('light') || DEFAULT_LIGHT);
  lighting.set(settings.get('light') || DEFAULT_LIGHT, { instant: true });
  controls.setInvertPitch(settings.get('invertPitch'));
  for (const chip of document.querySelectorAll('[data-pitch]')) {
    chip.setAttribute('aria-pressed', String((chip.dataset.pitch === 'inverted') === !!settings.get('invertPitch')));
    chip.addEventListener('click', () => setInvertPitch(chip.dataset.pitch === 'inverted'));
  }
  if (settings.get('sound') === false) audio.setEnabled(false);
  hud.setSound(audio.enabled);

  for (const chip of document.querySelectorAll('[data-light]')) {
    chip.addEventListener('click', () => {
      setLight(chip.dataset.light);
      audio.start();
    });
  }
  document.querySelector('#photoLight')?.addEventListener('click', cycleLight);

  document.querySelector('#start')?.addEventListener('click', () => {
    started = true;
    hud.hideIntro();
    audio.start();
    hud.hint('Follow the coast — there is a cove hiding past the lighthouse', 5);
  });

  /* ------------------------------------------------------- discoveries --- */
  // Gentle one-off notes when you find somewhere. Not a checklist: nothing
  // counts them, nothing is unlocked, and they never come back.
  const found = new Set();
  const DISCOVERIES = [
    { key: 'cove', at: () => world.landmarks.cove, radius: 130, below: 130, text: 'The hidden cove' },
    { key: 'lighthouse', at: () => world.landmarks.lighthouse, radius: 120, below: 160, text: 'The lighthouse on the point' },
    { key: 'village', at: () => world.landmarks.village, radius: 140, below: 110, text: 'Over the village — mind the laundry' },
    { key: 'arch', at: () => world.landmarks.arch, radius: 34, below: 46, text: 'Straight through the arch!' },
    { key: 'summit', at: () => world.landmarks.summit, radius: 90, below: 240, text: 'The top of the island' },
    {
      key: 'camp',
      at: () => world.landmarks.beachCamp,
      radius: 42,
      below: 26,
      text: "Someone's chair on the sand, and the radio still on",
    },
    { key: 'canyon', at: () => world.landmarks.canyon, radius: 150, below: 150, text: 'The canyon — it goes all the way through' },
    { key: 'canyonEnd', at: () => world.landmarks.canyonEnd, radius: 90, below: 60, text: 'Out the other side' },
    { key: 'falls', at: () => world.landmarks.falls, radius: 170, below: 190, text: 'The waterfall' },
    { key: 'lagoon', at: () => world.landmarks.lagoon, radius: 130, below: 120, text: 'The lagoon — shallow enough to land in' },
  ];

  // One nudge, the first time you are slow and low over the water, so the
  // floats are not a secret.
  let landingHinted = false;
  function offerLanding() {
    if (landingHinted || flight.waterborne) return;
    if (!flight.overWater || flight.pos.y > 45 || flight.speed > 34) return;
    landingHinted = true;
    hud.hint('Ease the nose down — the floats will take the water', 4);
  }

  function checkDiscoveries() {
    for (const spot of DISCOVERIES) {
      if (found.has(spot.key)) continue;
      const at = spot.at();
      const distance = Math.hypot(flight.pos.x - at.x, flight.pos.z - at.z);
      if (distance < spot.radius && flight.pos.y < spot.below) {
        found.add(spot.key);
        hud.hint(spot.text, 2.6);
        break;
      }
    }
  }

  /* ---------------------------------------------------------- flourishes --- */
  // A word when you pull off something pretty. Nothing is counted; the first
  // time is a small cheer, after that just a nod.
  const done = new Set();
  let flourishCooldown = 0;
  let invertedNoted = false;
  let tunnelNoted = 0;
  const FLOURISH = {
    loop: ['A loop! The whole sky went round', 'Loop'],
    'outside loop': ['An outside loop — brave', 'Outside loop'],
    roll: ['A barrel roll! Double-tap a bank to roll again', 'Roll'],
  };
  function celebrate(dt) {
    flourishCooldown = Math.max(0, flourishCooldown - dt);
    if (!started || photo.active) return;
    if (flight.justDid && FLOURISH[flight.justDid] && flourishCooldown <= 0) {
      const [first, again] = FLOURISH[flight.justDid];
      hud.hint(done.has(flight.justDid) ? again : first, done.has(flight.justDid) ? 1 : 2.6);
      done.add(flight.justDid);
      flourishCooldown = 1.2;
    }
    if (flight.invertedTime > 2.5 && !invertedNoted) {
      invertedNoted = true;
      hud.hint('Upside down over the Adriatic — let go and it rolls back', 2.8);
    }
    tunnelNoted = Math.max(0, tunnelNoted - dt);
    if (flight.underRoof && tunnelNoted <= 0) {
      tunnelNoted = 10;
      const roof = terrain.ceilingAt(flight.pos.x, flight.pos.z);
      if (roof?.name) hud.hint(roof.name, 2);
    }
  }

  /* ------------------------------------------------------------- events --- */
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
    if (!paused) timer.update(); // throw away the gap
  });

  renderer.domElement.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    paused = true;
    hud.hint('Graphics paused — reload the page if it does not come back', 8);
  });
  renderer.domElement.addEventListener('webglcontextrestored', () => {
    paused = false;
  });

  /* --------------------------------------------------------------- loop --- */
  const _lookAt = new Vector3();
  let slowFrames = 0;
  let neighbourCooldown = 0;
  let scatterCooldown = 0;
  let groundedCooldown = 0;
  let landedOnce = false;
  let fps = 60;

  // A small hatch for tinkering from the console — drop yourself over the cove,
  // check the frame rate, poke at the flight model.
  window.__covewind = {
    flight,
    world,
    lighting,
    terrain,
    camera,
    rig,
    quality: QUALITY,
    get fps() {
      return Math.round(fps);
    },
    teleport(x, y, z, heading = flight.heading) {
      flight.pos.set(x, y, z);
      flight.heading = heading;
      flight.roll = 0;
      flight.pitch = 0;
      started = true;
      hud.hideIntro();
      rig.reset(flight);
    },
  };

  function frame() {
    requestAnimationFrame(frame);
    if (paused) return;

    timer.update();
    const dt = Math.min(timer.getDelta(), 0.05);
    const t = timer.getElapsed();
    if (dt > 0) fps = fps * 0.94 + (1 / dt) * 0.06;

    const input = controls.sample(dt);
    const windState = wind.update(t, flight.pos);

    if (input.throttleSet != null) {
      flight.throttle = input.throttleSet;
      controls.clearThrottleSet();
    }
    if (input.throttleAxis) {
      flight.throttle = clamp(flight.throttle + input.throttleAxis * 0.34 * dt, 0, 1);
    }

    if (!photo.active) {
      if (started) {
        updateFlight(flight, input, windState, dt, t);
        checkDiscoveries();
        offerLanding();
      } else {
        // Attract mode: a slow left-hand circuit over the bay.
        updateFlight(flight, { pitch: 0, roll: -0.22, yaw: 0, boost: false, trick: 0 }, windState, dt, t);
      }
    }

    if (flight.justLanded) {
      hud.hint(
        landedOnce ? 'Down on the water' : 'Down on the water — open the throttle to take off again',
        landedOnce ? 1.6 : 4
      );
      landedOnce = true;
    } else if (flight.justTookOff) {
      hud.hint('Airborne', 1.2);
    } else if (flight.grounded && groundedCooldown <= 0) {
      groundedCooldown = 8;
      hud.hint('The floats are nudging the sand', 1.8);
    }
    groundedCooldown = Math.max(0, groundedCooldown - dt);
    celebrate(dt);

    plane.position.copy(flight.pos);
    plane.quaternion.copy(flight.quat);
    plane.userData.propeller.rotation.z += dt * (16 + flight.speed * 0.8);
    setControlSurfaces(
      plane,
      photo.active ? { roll: 0, pitch: 0, yaw: 0 } : input,
      dt
    );

    lighting.follow(flight.pos);
    lighting.update(dt);
    water.uniforms.time.value = t;
    sky.uniforms.time.value = t;

    world.update(t, dt, flight, windState, {
      beamOpacity: lighting.beam,
      onBirdScatter: () => {
        if (scatterCooldown > 0) return;
        scatterCooldown = 14;
        if (started && !photo.active) hud.hint('Gulls!', 1.2);
      },
    });

    contrails.update(dt, plane, flight, camera);
    spray.update(dt, flight, t);
    smoke.update(dt, plane, flight, renderer.domElement.height);

    rig.update(dt, flight, plane, { boosting: flight.boosting });
    _lookAt.copy(rig.lookAt);

    // Passing hellos, and a word when the ground gets close.
    neighbourCooldown = Math.max(0, neighbourCooldown - dt);
    scatterCooldown = Math.max(0, scatterCooldown - dt);
    if (started && !photo.active && neighbourCooldown <= 0) {
      for (const other of world.aiPlanes) {
        if (other.group.position.distanceTo(flight.pos) < 34) {
          neighbourCooldown = 18;
          hud.hint('Hello, sky neighbour 👋', 1.8);
          break;
        }
      }
      if (flight.contact > 0.55 && !flight.waterborne) {
        neighbourCooldown = 6;
        hud.hint(flight.overWater ? 'Skimming the waves!' : 'Easy — give the rooftops some room', 1.4);
      }
    }

    audio.update(dt, flight, windState, camera, _lookAt);
    hud.update(dt, flight, photo.active ? 99 : input.lastActivity);

    sky.follow(camera.position);
    clouds.follow(camera.position);
    post.render(scene, camera);
    photo.flush(renderer);

    // If the device is struggling, shed load once rather than stutter forever.
    if (!QUALITY.degraded && dt > 0.042) {
      slowFrames++;
      if (slowFrames > 260 && degrade(renderer, scene)) {
        post.setSize();
        hud.hint('Easing off the detail so this stays smooth', 2.4);
      }
    } else if (slowFrames > 0) {
      slowFrames--;
    }
  }

  frame();
}

/* ----------------------------------------------------------------- start --- */

try {
  boot();
} catch (error) {
  console.error(error);
  const panel = document.querySelector('#error');
  if (panel) panel.style.display = 'grid';
}

// Offline support. The service worker is generated at build time, so there is
// nothing to register while developing.
if ('serviceWorker' in navigator && !import.meta.env.DEV && location.protocol.startsWith('http')) {
  addEventListener('load', () => {
    // Resolved against the page, so it works from a subdirectory too.
    const url = new URL('sw.js', document.baseURI).href;
    navigator.serviceWorker.register(url, { scope: './' }).catch(() => {
      /* offline support is a bonus, never a requirement */
    });
  });
}
