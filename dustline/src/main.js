/**
 * Dustline: a toy rally car in a red-rock canyon full of things to jump.
 *
 * This file is the wiring: build the renderer and the canyon, then one
 * frame loop that reads the controls, drives the car, kicks up the dust,
 * moves the camera and draws it all. Everything with an opinion lives in its
 * own module.
 */
import {
  BackSide,
  BufferAttribute,
  BufferGeometry,
  Color,
  DirectionalLight,
  Fog,
  HemisphereLight,
  Mesh,
  MeshBasicMaterial,
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
import { buildLayout } from './world/layout.js';
import { heightAt, fbm } from './world/terrain.js';
import { createCar, updateCar, placeCar, headingOf } from './car/physics.js';
import { createCarModel, poseCar } from './car/model.js';
import { createCameraRig, CAMERA_MODES } from './car/camera.js';
import { createInput } from './car/input.js';
import { createSky } from './render/sky.js';
import { createTerrainMesh } from './render/terrain-mesh.js';
import { createTrackMesh } from './render/track-mesh.js';
import { createProps } from './render/props.js';
import { createLoose } from './render/loose.js';
import { createDust } from './render/dust.js';
import { createPost } from './render/post.js';
import { createAudio } from './audio/audio.js';
import { createHud } from './ui/hud.js';

/* ------------------------------------------------------------- lights --- */

const LIGHTS = {
  morning: {
    label: 'Morning',
    sun: [0.75, 0.32, -0.45],
    sunColor: 0xfff0dc,
    sunIntensity: 2.6,
    sky: 0x9cc6ee,
    ground: 0xd29a6c,
    hemi: 1.15,
    fog: 0xe9d6c4,
    top: 0x4f8fd8,
    horizon: 0xf3e2cf,
    glow: 0xffc88a,
    exposure: 1.05,
    dustTint: 0xf2e6dc,
  },
  afternoon: {
    label: 'Afternoon',
    sun: [-0.45, 0.62, 0.55],
    sunColor: 0xfff1d8,
    sunIntensity: 3.0,
    sky: 0x8fc0f0,
    ground: 0xd8955e,
    hemi: 1.1,
    fog: 0xf0d2ae,
    top: 0x2f78cf,
    horizon: 0xf6d6ae,
    glow: 0xff9a4a,
    exposure: 1.05,
    dustTint: 0xffffff,
  },
  sunset: {
    label: 'Sunset',
    sun: [-0.8, 0.14, 0.3],
    sunColor: 0xffb070,
    sunIntensity: 2.8,
    sky: 0x8d8fc8,
    ground: 0xc4703e,
    hemi: 1.0,
    fog: 0xeba67a,
    top: 0x3a5aa8,
    horizon: 0xffb07a,
    glow: 0xff6a2a,
    exposure: 1.1,
    dustTint: 0xd89a78,
  },
};
const LIGHT_ORDER = ['morning', 'afternoon', 'sunset'];

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
  const camera = new PerspectiveCamera(62, innerWidth / innerHeight, 0.3, 4600);
  scene.add(camera);
  const timer = new Timer();
  timer.connect(document);

  /* -------------------------------------------------------------- world --- */
  const layout = buildLayout();
  const world = { collision: layout.collision, boosts: layout.boosts };
  const sky = createSky(scene);
  createTerrainMesh(scene);
  const track = createTrackMesh(scene, layout);
  const props = createProps(scene, layout);
  const loose = createLoose(scene, layout);
  const dust = createDust(scene);
  const post = createPost(renderer);
  addMountains(scene);

  const hemi = new HemisphereLight(0x9cc6ee, 0xd29a6c, 1.1);
  scene.add(hemi);
  const sun = new DirectionalLight(0xffffff, 3);
  sun.castShadow = true;
  sun.shadow.mapSize.set(QUALITY.shadowMap, QUALITY.shadowMap);
  const S = 70;
  Object.assign(sun.shadow.camera, { left: -S, right: S, top: S, bottom: -S, near: 1, far: 600 });
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.35;
  scene.add(sun);
  scene.add(sun.target);
  scene.fog = new Fog(0xf0d2ae, 260, QUALITY.far * 0.8);
  const sunDir = new Vector3();

  let lightName = settings.get('light') || 'afternoon';
  function setLight(name) {
    const L = LIGHTS[name] || LIGHTS.afternoon;
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
    sky.uniforms.sunDir.value.copy(sunDir);
    renderer.toneMappingExposure = L.exposure;
    dust.setTint(L.dustTint);
    settings.set('light', name);
    for (const chip of document.querySelectorAll('[data-light]')) chip.setAttribute('aria-pressed', String(chip.dataset.light === name));
    return L.label;
  }
  setLight(lightName);

  /* ---------------------------------------------------------------- car --- */
  let livery = settings.get('livery') || 'blue';
  let model = createCarModel(livery);
  scene.add(model);
  function setLivery(name) {
    livery = name;
    settings.set('livery', name);
    scene.remove(model);
    model = createCarModel(name);
    scene.add(model);
    for (const chip of document.querySelectorAll('[data-livery]')) chip.setAttribute('aria-pressed', String(chip.dataset.livery === name));
  }
  setLivery(livery);
  model.traverse((o) => {
    if (o.isMesh) o.castShadow = true;
  });

  const car = createCar(layout.spawn);
  const rig = createCameraRig(camera, { mode: settings.get('camera') || 0 });
  rig.reset(car);
  const audio = createAudio();
  const hud = createHud();

  /* ---------------------------------------------------------------- ui --- */
  let started = false;
  function cycleCamera() {
    const mode = rig.cycle();
    settings.set('camera', mode);
    hud.hint(`${CAMERA_MODES[mode]} camera`, 1.2);
  }
  function cycleLight() {
    const next = LIGHT_ORDER[(LIGHT_ORDER.indexOf(lightName) + 1) % LIGHT_ORDER.length];
    hud.hint(setLight(next), 1.3);
  }
  function toggleSound() {
    const on = audio.toggle();
    settings.set('sound', on);
    hud.setSound(on);
    hud.hint(on ? 'Sound on' : 'Sound off', 1.1);
  }
  function resetCar() {
    const heading = car.speed > 3 ? Math.atan2(car.vel.x, -car.vel.z) : headingOf(car);
    const y = Math.max(car.pos.y, heightAt(car.pos.x, car.pos.z)) + 2;
    placeCar(car, car.pos.x, y, car.pos.z, heading);
  }

  const controls = createInput({
    actions: {
      camera: cycleCamera,
      light: cycleLight,
      sound: toggleSound,
      reset: resetCar,
      hud: () => hud.toggle(),
    },
    onFirstInput: () => audio.start(),
  });
  document.querySelector('#cameraBtn')?.addEventListener('click', cycleCamera);
  document.querySelector('#lightBtn')?.addEventListener('click', cycleLight);
  document.querySelector('#soundBtn')?.addEventListener('click', toggleSound);
  document.querySelector('#resetBtn')?.addEventListener('click', resetCar);
  for (const chip of document.querySelectorAll('[data-light]')) chip.addEventListener('click', () => setLight(chip.dataset.light));
  for (const chip of document.querySelectorAll('[data-livery]')) chip.addEventListener('click', () => setLivery(chip.dataset.livery));
  if (settings.get('sound') === false) audio.setEnabled(false);
  hud.setSound(audio.enabled);

  function go() {
    if (started) return;
    started = true;
    hud.hideIntro();
    audio.start();
    placeCar(car, layout.spawn.x, layout.spawn.y, layout.spawn.z, layout.spawn.heading);
    rig.reset(car);
    hud.hint(matchMedia('(pointer: coarse)').matches ? 'Hold Gas. The loop is straight ahead.' : 'Hold W. The loop is straight ahead.', 4);
  }
  document.querySelector('#start')?.addEventListener('click', go);
  addEventListener('keydown', (e) => {
    if (!started && (e.code === 'Enter' || e.code === 'Space')) go();
  });

  /* -------------------------------------------------------- the notes --- */
  const found = new Set();
  function checkPlaces() {
    for (const p of layout.places) {
      if (found.has(p.key)) continue;
      let inside;
      if (p.ring) inside = Math.hypot(car.pos.x, car.pos.z) > p.ring;
      else {
        inside = Math.hypot(car.pos.x - p.x, car.pos.z - p.z) < p.r;
        if (inside && p.above != null) inside = car.pos.y - heightAt(car.pos.x, car.pos.z) > p.above;
      }
      if (inside) {
        found.add(p.key);
        hud.hint(p.text, 2.6);
        break;
      }
    }
  }

  const said = new Set();
  function sayOnce(key, text, seconds = 2.6) {
    if (said.has(key)) return;
    said.add(key);
    hud.hint(text, seconds);
  }

  function handleEvents() {
    for (const e of car.events) {
      if (e.type === 'landed') {
        const strength = Math.min(1, e.airTime / 2.5);
        dust.landing(car.pos.x, car.pos.y - 0.9, car.pos.z, strength);
        audio.thump(0.3 + strength * 0.7);
        rig.kick(0.2 + strength * 0.5);
        const words = e.tricks.length ? e.tricks.join(' + ') : e.size;
        if (words) {
          hud.trick(words, e.tricks.length && e.size ? e.size : `${e.airTime.toFixed(1)}s in the air`);
          audio.chime(e.tricks.length ? 1.25 : 1);
        }
        if (!e.tricks.length && e.airTime > 1.2) sayOnce('flip', 'In the air, steer to spin, and W/S (or drag up/down) to flip', 3.5);
      } else if (e.type === 'trick') {
        hud.trick(e.name === 'loop' ? 'Loop!' : 'Wall ride');
        audio.chime(1.4);
      } else if (e.type === 'pad') {
        audio.chime(0.8);
        rig.kick(0.15);
      } else if (e.type === 'bump' || e.type === 'thud') {
        audio.thump(e.strength * 0.7);
        rig.kick(e.strength * 0.5);
      } else if (e.type === 'flipback') {
        sayOnce('flipback', 'Back on your wheels', 1.6);
      } else if (e.type === 'unstuck') {
        hud.hint('Lifted out', 1.2);
      }
    }
  }

  /* -------------------------------------------------------------- events --- */
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

  /* ---------------------------------------------------------------- loop --- */
  let slowFrames = 0;
  let fps = 60;
  let attract = 0;
  const idle = { throttle: 0, brake: 0, steer: 0, boost: false, handbrake: false, pitch: 0, roll: 0 };

  window.__dustline = {
    car,
    layout,
    camera,
    renderer,
    scene,
    quality: QUALITY,
    get fps() {
      return Math.round(fps);
    },
    teleport(x, z, heading = 0, y = null) {
      started = true;
      hud.hideIntro();
      placeCar(car, x, y ?? heightAt(x, z) + 1.5, z, heading);
      rig.reset(car);
    },
    go,
  };

  function frame() {
    requestAnimationFrame(frame);
    if (paused) return;
    timer.update();
    const dt = Math.min(timer.getDelta(), 0.05);
    const t = timer.getElapsed();
    if (dt > 0) fps = fps * 0.95 + (1 / dt) * 0.05;

    const input = started ? controls.sample(dt, car.grounded === 0) : idle;
    // Touch: brake while steering hard at speed is a handbrake slide.
    if (input.touchBrake && Math.abs(input.steer) > 0.35 && car.forwardSpeed > 12) {
      input.handbrake = true;
      input.brake = 0;
    }
    updateCar(car, input, world, dt);
    if (started) {
      handleEvents();
      checkPlaces();
    }
    car.events.length = 0;

    poseCar(model, car, dt, t);
    dust.update(dt, car);
    loose.update(dt, car, t);
    track.update(t);
    props.update(t);

    if (started) rig.update(dt, car, { boosting: input.boost || car.onPad });
    else {
      // Title card: drift slowly round the parked car.
      attract += dt * 0.12;
      camera.position.set(car.pos.x + Math.sin(attract) * 11, car.pos.y + 3.2, car.pos.z + Math.cos(attract) * 11);
      camera.up.set(0, 1, 0);
      camera.lookAt(car.pos.x, car.pos.y + 0.6, car.pos.z);
    }
    dust.setPixelScale(renderer.domElement.height, camera.fov);

    // The sun's shadow box follows the car.
    sun.target.position.copy(car.pos);
    sun.position.copy(car.pos).addScaledVector(sunDir, 300);

    audio.update(dt, car, input);
    hud.update(dt, car);
    sky.follow(camera.position);
    post.render(scene, camera);

    if (!QUALITY.degraded && dt > 0.042) {
      if (++slowFrames > 240 && degrade(renderer, sun)) {
        post.setSize();
        hud.hint('Easing off the detail so it stays smooth', 2.2);
      }
    } else if (slowFrames > 0) slowFrames--;
  }
  frame();
}

/** Far mountains: two jagged rings in the haze beyond the canyon wall. */
function addMountains(scene) {
  for (const [radius, low, high, color, seed] of [
    [1750, 380, 640, 0xc98a6a, 3],
    [2700, 520, 980, 0xd8a88e, 9],
  ]) {
    const n = 220;
    const pos = [];
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * Math.PI * 2;
      const a1 = ((i + 1) / n) * Math.PI * 2;
      const h = (a) => low + (high - low) * fbm(Math.cos(a) * 6 + seed, Math.sin(a) * 6, 4) ** 1.4 * 1.6;
      const p = (a, y) => [Math.cos(a) * radius, y, Math.sin(a) * radius];
      const b0 = p(a0, -60);
      const b1 = p(a1, -60);
      const t0 = p(a0, h(a0));
      const t1 = p(a1, h(a1));
      pos.push(...b0, ...t0, ...b1, ...b1, ...t0, ...t1);
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3));
    const m = new Mesh(g, new MeshBasicMaterial({ color: new Color(color), side: BackSide, fog: true }));
    m.material.side = 2;
    scene.add(m);
  }
}

try {
  boot();
} catch (error) {
  console.error(error);
  const panel = document.querySelector('#error');
  if (panel) panel.style.display = 'grid';
}

