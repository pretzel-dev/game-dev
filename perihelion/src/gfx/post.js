import * as THREE from 'three';
import { FULLSCREEN_VERT } from './glsl.js';

/**
 * The camera's "film": the scene is drawn in high dynamic range (so the sun,
 * drive plumes and explosions can be far brighter than white), then a bloom
 * spreads the brightest light into a soft glow, an analytic lens flare and
 * anamorphic streak follow the sun, and a last pass tone-maps it for the
 * screen with a light vignette and film grain (which also hides banding in
 * the dark nebulae).
 *
 * Bloom is a mip chain: a thresholded half-size copy is shrunk five or six
 * times with a 13-tap filter, then grown back with a tent filter, adding each
 * level on the way up (the "Call of Duty" bloom). It's cheap even on phones.
 */
export function createPost(renderer) {
  const tri = new THREE.BufferGeometry();
  tri.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
  const quad = new THREE.Mesh(tri);
  quad.frustumCulled = false;
  const flat = new THREE.Scene();
  flat.add(quad);
  const cam = new THREE.Camera();

  const rtOpts = { type: THREE.HalfFloatType, depthBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter };
  let sceneRT = null;
  const down = [];
  const LEVELS = 6;

  const texel = () => ({ value: new THREE.Vector2() });
  const downMat = new THREE.ShaderMaterial({
    uniforms: { tSrc: { value: null }, uTexel: texel(), uPrefilter: { value: 0 }, uThreshold: { value: 1.0 }, uKnee: { value: 0.6 } },
    vertexShader: FULLSCREEN_VERT,
    fragmentShader: /* glsl */ `
      uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uPrefilter, uThreshold, uKnee;
      varying vec2 vUv;
      vec3 s(vec2 o) { return texture2D(tSrc, vUv + o * uTexel).rgb; }
      void main() {
        // 13 taps in five overlapping boxes, weighted toward the centre.
        vec3 a = s(vec2(-2, 2)), b = s(vec2(0, 2)), c = s(vec2(2, 2));
        vec3 d = s(vec2(-2, 0)), e = s(vec2(0, 0)), f = s(vec2(2, 0));
        vec3 g = s(vec2(-2, -2)), h = s(vec2(0, -2)), i = s(vec2(2, -2));
        vec3 j = s(vec2(-1, 1)), k = s(vec2(1, 1)), l = s(vec2(-1, -1)), m = s(vec2(1, -1));
        vec3 col = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625 + (j + k + l + m) * 0.125;
        if (uPrefilter > 0.5) {
          // Soft threshold: only light brighter than about white blooms, so
          // orbit lines and labels-in-the-scene stay crisp.
          col = min(col, vec3(60.0));
          float br = max(col.r, max(col.g, col.b));
          float rq = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
          rq = rq * rq / (4.0 * uKnee + 1e-4);
          col *= max(rq, br - uThreshold) / max(br, 1e-4);
        }
        gl_FragColor = vec4(col, 1.0);
      }`,
    depthTest: false,
    depthWrite: false,
  });
  const upMat = new THREE.ShaderMaterial({
    uniforms: { tSrc: { value: null }, uTexel: texel(), uRadius: { value: 1.0 } },
    vertexShader: FULLSCREEN_VERT,
    fragmentShader: /* glsl */ `
      uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uRadius;
      varying vec2 vUv;
      vec3 s(vec2 o) { return texture2D(tSrc, vUv + o * uTexel * uRadius).rgb; }
      void main() {
        vec3 col = s(vec2(0)) * 4.0 + (s(vec2(-1, 0)) + s(vec2(1, 0)) + s(vec2(0, -1)) + s(vec2(0, 1))) * 2.0
          + s(vec2(-1, -1)) + s(vec2(1, -1)) + s(vec2(-1, 1)) + s(vec2(1, 1));
        gl_FragColor = vec4(col / 16.0, 1.0);
      }`,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    depthWrite: false,
  });

  const flare = { pos: new THREE.Vector2(0.5, 0.5), vis: 0, color: new THREE.Color('#ffe2b0') };
  const outMat = new THREE.ShaderMaterial({
    uniforms: {
      tScene: { value: null }, tBloom: { value: null }, uBloom: { value: 0.22 }, uExposure: { value: 1.0 },
      uTime: { value: 0 }, uAspect: { value: 1 }, uSun: { value: flare.pos }, uSunVis: { value: 0 }, uSunColor: { value: flare.color },
      uTexel: texel(), uCA: { value: 1 }, uGrain: { value: 1 },
    },
    vertexShader: FULLSCREEN_VERT,
    fragmentShader: /* glsl */ `
      uniform sampler2D tScene, tBloom; uniform float uBloom, uExposure, uTime, uAspect, uSunVis, uCA, uGrain;
      uniform vec2 uSun, uTexel; uniform vec3 uSunColor;
      varying vec2 vUv;
      // Khronos PBR Neutral tone mapping: keeps colours true below about 0.8,
      // then rolls highlights off to white (so owner colours stay owner colours).
      vec3 neutral(vec3 c) {
        float x = min(c.r, min(c.g, c.b));
        float off = x < 0.08 ? x - 6.25 * x * x : 0.04;
        c -= off;
        float peak = max(c.r, max(c.g, c.b));
        if (peak < 0.76) return c;
        float d = 0.24;
        float np = 1.0 - d * d / (peak + d - 0.76);
        c *= np / peak;
        float g = 1.0 - 1.0 / (0.15 * (peak - np) + 1.0);
        return mix(c, vec3(np), g);
      }
      vec3 toSRGB(vec3 c) {
        c = clamp(c, 0.0, 1.0);
        return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
      }
      float h12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      float disc(vec2 p, vec2 c, float r, float soft) { return 1.0 - smoothstep(r * (1.0 - soft), r, length((p - c) * vec2(uAspect, 1.0))); }
      void main() {
        vec2 fromC = vUv - 0.5;
        // A touch of lateral chromatic aberration toward the corners.
        vec2 ca = fromC * dot(fromC, fromC) * 0.012 * uCA;
        vec3 col;
        col.r = texture2D(tScene, vUv - ca).r;
        col.g = texture2D(tScene, vUv).g;
        col.b = texture2D(tScene, vUv + ca).b;
        col += texture2D(tBloom, vUv).rgb * uBloom;
        // Lens flare from the sun: ghosts strung along the line through the
        // centre of the frame, a faint halo, and a thin anamorphic streak.
        if (uSunVis > 0.001) {
          vec2 sd = uSun - 0.5;
          vec3 fl = vec3(0.0);
          fl += disc(vUv, 0.5 - sd * 0.45, 0.035, 0.6) * vec3(0.30, 0.55, 1.00) * 0.10;
          fl += disc(vUv, 0.5 - sd * 0.80, 0.075, 0.9) * vec3(0.55, 1.00, 0.70) * 0.05;
          fl += disc(vUv, 0.5 - sd * 1.25, 0.020, 0.4) * vec3(1.00, 0.60, 0.30) * 0.14;
          fl += disc(vUv, 0.5 + sd * 0.35, 0.050, 1.0) * vec3(0.70, 0.50, 1.00) * 0.06;
          fl += disc(vUv, 0.5 - sd * 1.70, 0.110, 1.0) * vec3(0.35, 0.60, 1.00) * 0.04;
          float hr = length((vUv - uSun) * vec2(uAspect, 1.0));
          fl += exp(-pow((hr - 0.32) / 0.012, 2.0)) * vec3(0.5, 0.75, 1.0) * 0.035;
          vec2 dv = (vUv - uSun) * vec2(uAspect, 1.0);
          float streak = exp(-abs(dv.y) * 700.0) * exp(-abs(dv.x) * 6.0);
          fl += streak * vec3(0.55, 0.75, 1.0) * 0.35;
          col += fl * uSunVis * uSunColor;
        }
        col *= uExposure;
        // Gentle grade: cool the shadows a little, as through a ship's camera.
        float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
        col += vec3(-0.004, 0.0, 0.010) * (1.0 - smoothstep(0.0, 0.25, lum));
        col = neutral(max(col, 0.0));
        // Vignette.
        float v = smoothstep(0.95, 0.25, length(fromC * vec2(uAspect * 0.85, 1.0)));
        col *= mix(0.72, 1.0, v);
        vec3 outc = toSRGB(col);
        // Film grain (also dithers away banding in the dark).
        float gr = h12(gl_FragCoord.xy + fract(uTime * 7.31) * 517.0) - 0.5;
        outc += gr * (0.018 * uGrain + 0.004);
        gl_FragColor = vec4(outc, 1.0);
      }`,
    depthTest: false,
    depthWrite: false,
  });

  let size = new THREE.Vector2(1, 1);
  let samples = 4;
  function setSize(w, h, pr) {
    const W = Math.max(1, Math.round(w * pr)), H = Math.max(1, Math.round(h * pr));
    size.set(W, H);
    if (!sceneRT) sceneRT = new THREE.WebGLRenderTarget(W, H, { type: THREE.HalfFloatType, samples, depthBuffer: true });
    else sceneRT.setSize(W, H);
    let bw = Math.max(1, W >> 1), bh = Math.max(1, H >> 1);
    for (let i = 0; i < LEVELS; i++) {
      if (!down[i]) down[i] = new THREE.WebGLRenderTarget(bw, bh, rtOpts);
      else down[i].setSize(bw, bh);
      bw = Math.max(1, bw >> 1); bh = Math.max(1, bh >> 1);
    }
    outMat.uniforms.uAspect.value = w / h;
  }
  function setSamples(n) {
    if (n === samples) return;
    samples = n;
    if (sceneRT) { sceneRT.dispose(); sceneRT = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples, depthBuffer: true }); }
  }

  function pass(mat, target) {
    quad.material = mat;
    renderer.setRenderTarget(target);
    renderer.render(flat, cam);
  }

  function render(scene, camera, t) {
    renderer.setRenderTarget(sceneRT);
    renderer.clear();
    renderer.render(scene, camera);
    // Bloom: down...
    let src = sceneRT.texture;
    let sw = size.x, sh = size.y;
    for (let i = 0; i < levels; i++) {
      downMat.uniforms.tSrc.value = src;
      downMat.uniforms.uTexel.value.set(1 / sw, 1 / sh);
      downMat.uniforms.uPrefilter.value = i === 0 ? 1 : 0;
      pass(downMat, down[i]);
      src = down[i].texture;
      sw = down[i].width; sh = down[i].height;
    }
    // ...and back up, adding each level into the one above.
    for (let i = levels - 2; i >= 0; i--) {
      upMat.uniforms.tSrc.value = down[i + 1].texture;
      upMat.uniforms.uTexel.value.set(1 / down[i + 1].width, 1 / down[i + 1].height);
      renderer.autoClear = false;
      pass(upMat, down[i]);
      renderer.autoClear = true;
    }
    const u = outMat.uniforms;
    u.tScene.value = sceneRT.texture;
    u.tBloom.value = down[0].texture;
    u.uTime.value = t;
    u.uSunVis.value = flare.vis;
    pass(outMat, null);
  }

  /** Low: a shorter, coarser bloom and no chromatic aberration. */
  let levels = LEVELS;
  function setLevel(q) {
    levels = q === 'high' ? LEVELS : 4;
    outMat.uniforms.uCA.value = q === 'high' ? 1 : 0;
  }

  return { setSize, setSamples, setLevel, render, flare, uniforms: outMat.uniforms };
}
