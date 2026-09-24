/**
 * The finishing pass that turns a 3D render into something that looks drawn.
 *
 * The scene is rendered once into an off-screen buffer (with its depth), then
 * one full-screen shader:
 *
 *  - inks the silhouettes, using jumps in depth, in a warm dark line that
 *    thins out with distance the way a background painter would let it;
 *  - grades the colour: a little more saturation, warm highlights and cool,
 *    blue-violet shadows;
 *  - adds a soft halation round the brightest things (sun on the sea, white
 *    walls, clouds), which is most of the "film" in a film still;
 *  - and lays a faint paper grain and vignette over everything.
 *
 * Tone mapping and the sRGB conversion happen here, on the way to the screen,
 * so every material in the scene can stay in linear light.
 */
import {
  Color,
  DepthTexture,
  HalfFloatType,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  UnsignedIntType,
  Vector2,
  WebGLRenderTarget,
} from 'three';
import { QUALITY } from '../core/quality.js';

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  #include <packing>
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform vec2 texel;
  uniform float near;
  uniform float far;
  uniform float lineWidth;
  uniform vec3 inkColor;
  uniform vec3 shadowTint;
  uniform vec3 lightTint;
  uniform float saturation;
  uniform float halation;
  uniform float grain;
  uniform float mist;
  uniform vec3 mistColor;
  varying vec2 vUv;

  float viewZ(vec2 uv) {
    float d = texture2D(tDepth, uv).x;
    return -perspectiveDepthToViewZ(d, near, far);
  }

  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }

  float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

  void main() {
    vec3 col = texture2D(tColor, vUv).rgb;

    /* -- ink ------------------------------------------------------------ */
    float z = viewZ(vUv);
    vec2 o = texel * lineWidth;
    float zl = viewZ(vUv - vec2(o.x, 0.0));
    float zr = viewZ(vUv + vec2(o.x, 0.0));
    float zu = viewZ(vUv + vec2(0.0, o.y));
    float zd = viewZ(vUv - vec2(0.0, o.y));
    // Only the near side of a depth jump gets inked, so lines sit on the
    // object's edge rather than floating on the background behind it.
    float jump = max(max(zl, zr), max(zu, zd)) - z;
    // Relative, so a line means the same thing at 20m and at 800m; and the
    // second-derivative term ignores smooth slopes seen edge-on (the sea).
    float curve = abs(zl + zr - 2.0 * z) + abs(zu + zd - 2.0 * z);
    float edge = smoothstep(0.035, 0.09, jump / z) * smoothstep(0.012, 0.04, curve / z);
    edge *= 1.0 - smoothstep(700.0, 2200.0, z);
    // The sky has nothing to ink.
    edge *= step(z, far * 0.95);
    vec3 inked = mix(col * 0.32, inkColor, 0.45);
    col = mix(col, inked, edge * 0.85);

    /* -- halation ------------------------------------------------------- */
    #ifdef HALATION
      vec3 glow = vec3(0.0);
      for (int i = 0; i < 8; i++) {
        float a = float(i) * 0.7854;
        vec2 dir = vec2(cos(a), sin(a));
        vec3 s1 = texture2D(tColor, vUv + dir * texel * 5.0).rgb;
        vec3 s2 = texture2D(tColor, vUv + dir * texel * 14.0).rgb;
        glow += max(s1 - 1.15, 0.0) + max(s2 - 1.15, 0.0) * 0.7;
      }
      col += glow * halation / 8.0;
    #endif

    /* -- grade ---------------------------------------------------------- */
    float l = luma(col);
    col = mix(vec3(l), col, saturation);
    // Split-tone: shadows lean blue-violet, highlights lean warm.
    float shade = 1.0 - smoothstep(0.05, 0.45, l);
    float light = smoothstep(0.45, 1.1, l);
    col = mix(col, col * shadowTint * 1.25, shade * 0.35);
    col = mix(col, col * lightTint, light * 0.25);

    /* -- inside a cloud: soft white, thinner at the edges of the screen -- */
    vec2 m = vUv - 0.5;
    float wisp = 0.85 + 0.15 * sin(vUv.x * 9.0 + vUv.y * 5.0);
    col = mix(col, mistColor, clamp(mist * wisp * (1.0 - dot(m, m) * 0.6), 0.0, 0.92));

    /* -- paper ---------------------------------------------------------- */
    vec2 px = gl_FragCoord.xy;
    float paper = noise(px * 0.35) * 0.6 + noise(px * 0.09) * 0.4;
    col *= 1.0 + (paper - 0.5) * grain;
    float fine = hash(px) - 0.5;
    col += fine * grain * 0.25;

    vec2 c = vUv - 0.5;
    col *= 1.0 - dot(c, c) * 0.42;

    gl_FragColor = vec4(max(col, 0.0), 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

export function createPost(renderer) {
  const size = renderer.getDrawingBufferSize(new Vector2());
  const target = new WebGLRenderTarget(size.x, size.y, {
    type: HalfFloatType,
    samples: QUALITY.msaa,
    depthBuffer: true,
  });
  target.depthTexture = new DepthTexture(size.x, size.y, UnsignedIntType);

  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    defines: QUALITY.halation ? { HALATION: '' } : {},
    depthTest: false,
    depthWrite: false,
    uniforms: {
      tColor: { value: target.texture },
      tDepth: { value: target.depthTexture },
      texel: { value: new Vector2(1 / size.x, 1 / size.y) },
      near: { value: 0.5 },
      far: { value: 4200 },
      lineWidth: { value: 1 },
      inkColor: { value: new Color(0x2a2233) },
      shadowTint: { value: new Color(0x8c93c8) },
      lightTint: { value: new Color(0xfff7ea) },
      saturation: { value: 1.12 },
      halation: { value: 0.4 },
      grain: { value: 0.045 },
      mist: { value: 0 },
      mistColor: { value: new Color(0xf4f1ea) },
    },
  });

  const quad = new Mesh(new PlaneGeometry(2, 2), material);
  quad.frustumCulled = false;
  const screen = new Scene();
  screen.add(quad);
  const screenCamera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

  function setSize() {
    renderer.getDrawingBufferSize(size);
    target.setSize(size.x, size.y);
    material.uniforms.texel.value.set(1 / size.x, 1 / size.y);
    // Lines a touch heavier on big, dense screens so they read the same.
    material.uniforms.lineWidth.value = Math.max(1, Math.min(2, size.y / 720));
  }
  setSize();

  return {
    uniforms: material.uniforms,
    setSize,
    render(scene, camera) {
      material.uniforms.near.value = camera.near;
      material.uniforms.far.value = camera.far;
      renderer.setRenderTarget(target);
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);
      renderer.render(screen, screenCamera);
    },
  };
}
