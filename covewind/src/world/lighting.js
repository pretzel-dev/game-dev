/**
 * Light, as a choice rather than a clock.
 *
 * Three presets (sunrise, noon, golden hour); picking one cross-fades every
 * value that describes the mood — sun, sky, fog, sea, exposure — over about a
 * second. Nothing changes on its own, ever.
 */
import { Color, DirectionalLight, Fog, HemisphereLight, Vector3 } from 'three';
import { LIGHT_PRESETS, DEFAULT_LIGHT } from '../core/palette.js';
import { QUALITY } from '../core/quality.js';
import { damp } from '../core/utils.js';

const COLOR_KEYS = [
  'sunColor',
  'skyColor',
  'groundColor',
  'skyTop',
  'skyHorizon',
  'sunGlow',
  'fog',
  'seaShallow',
  'seaDeep',
];
const SCALAR_KEYS = [
  'sunIntensity',
  'hemiIntensity',
  'glowStrength',
  'fogNear',
  'fogFar',
  'exposure',
  'beam',
];

export function createLighting(scene, renderer, sky, water) {
  const sun = new DirectionalLight(0xffe0ae, 4);
  sun.castShadow = QUALITY.shadows;
  const d = QUALITY.shadowDistance;
  sun.shadow.mapSize.set(QUALITY.shadowMap, QUALITY.shadowMap);
  sun.shadow.camera.left = -d;
  sun.shadow.camera.right = d;
  sun.shadow.camera.top = d;
  sun.shadow.camera.bottom = -d;
  sun.shadow.camera.near = 10;
  sun.shadow.camera.far = 1900;
  sun.shadow.bias = -0.0005;
  // Generous, because the shadow frustum covers a whole island: without it,
  // steep slopes at a low sun stripe with shadow acne.
  sun.shadow.normalBias = 2.2;
  scene.add(sun);
  scene.add(sun.target);

  const hemi = new HemisphereLight(0xdff1ff, 0x8b7257, 2.05);
  scene.add(hemi);

  scene.fog = new Fog(0xd7ceb4, 540, 1270);

  // Live values, cross-faded towards the chosen preset.
  const live = {
    sunDir: new Vector3(),
    target: new Vector3(),
  };
  for (const key of COLOR_KEYS) live[key] = new Color();
  const targetColor = {};
  for (const key of COLOR_KEYS) targetColor[key] = new Color();

  let currentName = DEFAULT_LIGHT;
  let preset = LIGHT_PRESETS[DEFAULT_LIGHT];
  const focus = new Vector3();

  function setTargets(next) {
    preset = next;
    live.target.set(...next.sunDir).normalize();
    for (const key of COLOR_KEYS) targetColor[key].setHex(next[key === 'fog' ? 'fog' : key]);
  }

  function applyInstantly() {
    live.sunDir.copy(live.target);
    for (const key of COLOR_KEYS) live[key].copy(targetColor[key]);
    for (const key of SCALAR_KEYS) live[key] = preset[key];
    push();
  }

  function push() {
    sun.color.copy(live.sunColor);
    sun.intensity = live.sunIntensity;
    hemi.color.copy(live.skyColor);
    hemi.groundColor.copy(live.groundColor);
    hemi.intensity = live.hemiIntensity;

    sun.position.copy(live.sunDir).multiplyScalar(900).add(focus);
    sun.target.position.copy(focus);
    sun.target.updateMatrixWorld();

    scene.fog.color.copy(live.fog);
    scene.fog.near = live.fogNear;
    scene.fog.far = live.fogFar;
    renderer.toneMappingExposure = live.exposure;

    sky.uniforms.topColor.value.copy(live.skyTop);
    sky.uniforms.horizonColor.value.copy(live.skyHorizon);
    sky.uniforms.glowColor.value.copy(live.sunGlow);
    sky.uniforms.glowStrength.value = live.glowStrength;
    sky.uniforms.sunDir.value.copy(live.sunDir);

    water.uniforms.shallowColor.value.copy(live.seaShallow);
    water.uniforms.deepColor.value.copy(live.seaDeep);
    water.uniforms.sunColor.value.copy(live.sunColor);
    water.uniforms.sunDir.value.copy(live.sunDir);
    water.uniforms.fogColor.value.copy(live.fog);
    water.uniforms.fogNear.value = live.fogNear;
    water.uniforms.fogFar.value = live.fogFar;
  }

  setTargets(LIGHT_PRESETS[DEFAULT_LIGHT]);
  applyInstantly();

  return {
    sun,
    hemi,
    get name() {
      return currentName;
    },
    get label() {
      return preset.label;
    },
    /** Lighthouse beam opacity for the current light. */
    get beam() {
      return live.beam;
    },

    set(name, { instant = false } = {}) {
      const next = LIGHT_PRESETS[name];
      if (!next) return currentName;
      currentName = name;
      setTargets(next);
      if (instant) applyInstantly();
      return currentName;
    },

    /** Keep the shadow frustum wrapped around the player. */
    follow(position) {
      focus.set(position.x, 0, position.z);
    },

    update(dt) {
      const rate = 2.6;
      live.sunDir.lerp(live.target, 1 - Math.exp(-rate * dt)).normalize();
      for (const key of COLOR_KEYS) live[key].lerp(targetColor[key], 1 - Math.exp(-rate * dt));
      for (const key of SCALAR_KEYS) live[key] = damp(live[key], preset[key], rate, dt);
      push();
    },
  };
}
