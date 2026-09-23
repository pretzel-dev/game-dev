/**
 * The sea.
 *
 * A single displaced plane, but three details do the heavy lifting: surf that
 * breaks on the real coastline (the shader shares `islandRadius` with the
 * terrain), a glitter path that tracks the sun, and shallow water that goes
 * turquoise over the sand.
 */
import { Color, DoubleSide, Mesh, PlaneGeometry, ShaderMaterial, Vector3 } from 'three';
import { coastlineGLSL } from './terrain.js';
import { QUALITY } from '../core/quality.js';

/** Wave field, in world space. Keep in sync with `WAVE_GLSL` below. */
export function waveHeight(x, z, t) {
  return (
    1.0 * Math.sin(x * 0.018 + t * 0.7) +
    0.65 * Math.sin(z * 0.024 - t * 0.9) +
    0.8 * Math.sin((x + z) * 0.011 + t * 0.45) +
    0.35 * Math.sin((x - z) * 0.031 - t * 1.3)
  );
}

const WAVE_GLSL = /* glsl */ `
  float waveAt(vec2 p, float t) {
    return 1.00 * sin(p.x * 0.018 + t * 0.70)
         + 0.65 * sin(p.y * 0.024 - t * 0.90)
         + 0.80 * sin((p.x + p.y) * 0.011 + t * 0.45)
         + 0.35 * sin((p.x - p.y) * 0.031 - t * 1.30);
  }
  vec3 waveNormal(vec2 p, float t) {
    float dx = 1.00 * 0.018 * cos(p.x * 0.018 + t * 0.70)
             + 0.80 * 0.011 * cos((p.x + p.y) * 0.011 + t * 0.45)
             + 0.35 * 0.031 * cos((p.x - p.y) * 0.031 - t * 1.30);
    float dy = 0.65 * 0.024 * cos(p.y * 0.024 - t * 0.90)
             + 0.80 * 0.011 * cos((p.x + p.y) * 0.011 + t * 0.45)
             - 0.35 * 0.031 * cos((p.x - p.y) * 0.031 - t * 1.30);
    return normalize(vec3(-dx * 8.0, 1.0, -dy * 8.0));
  }
`;

const vertexShader = /* glsl */ `
  uniform float time;
  varying vec3 vWorld;
  varying float vWave;
  ${WAVE_GLSL}
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    float w = waveAt(world.xz, time);
    world.y += w;
    vWave = w;
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const fragmentShader = /* glsl */ `
  uniform float time;
  uniform vec3 shallowColor;
  uniform vec3 deepColor;
  uniform vec3 foamColor;
  uniform vec3 sunDir;
  uniform vec3 sunColor;
  uniform vec3 skyColor;
  uniform vec3 fogColor;
  uniform float fogNear;
  uniform float fogFar;
  varying vec3 vWorld;
  varying float vWave;
  ${WAVE_GLSL}
  __COASTLINE__

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }

  // Cel caustics: the bright net of light on a sandy bottom, drawn as lines.
  float caustic(vec2 p, float t) {
    vec2 q = p * 0.09;
    float a = sin(q.x + sin(q.y * 1.3 + t * 0.7) * 1.4 + t * 0.4);
    float b = sin(q.y * 1.1 + sin(q.x * 0.9 - t * 0.6) * 1.4 - t * 0.3);
    float c = abs(a + b);
    return smoothstep(0.22, 0.0, c);
  }

  void main() {
    vec2 p = vWorld.xz;
    float coast = coastDistance(p);
    float dist = length(cameraPosition - vWorld);

    // Depth bands, the way the Adriatic sits over white stone: glassy
    // turquoise in the shallows, a clean step to blue, ink out in the channel.
    float depth = smoothstep(-20.0, 380.0, coast);
    float stepped = floor(depth * 4.0 + noise(p * 0.01) * 0.6) / 4.0;
    depth = mix(depth, stepped, 0.45);
    vec3 col = mix(shallowColor * 1.08, deepColor, depth);

    // Sea floor showing through the shallows.
    float shallow = 1.0 - smoothstep(0.0, 90.0, coast);
    col += vec3(0.85, 1.0, 0.95) * caustic(p, time) * shallow * 0.22 * (1.0 - smoothstep(300.0, 900.0, dist));

    vec3 normal = waveNormal(p, time);
    // Small ripples on top of the swell, for the glitter.
    normal = normalize(normal + vec3(noise(p * 0.12 + time * 0.4) - 0.5, 0.0, noise(p * 0.12 - time * 0.35 + 7.0) - 0.5) * 0.35);
    vec3 viewDir = normalize(cameraPosition - vWorld);

    // Sky in the surface at grazing angles.
    float fres = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
    col = mix(col, skyColor, fres * 0.35);

    // Sun glitter, drawn as hard white sparks rather than a smooth sheen.
    vec3 halfDir = normalize(normalize(sunDir) + viewDir);
    float nh = max(dot(normal, halfDir), 0.0);
    float sheen = pow(nh, 40.0);
    col += sunColor * sheen * 0.18;
    float sparkle = step(0.9965, nh) * step(0.55, noise(p * 0.6 + time * 1.3));
    col += vec3(1.0) * sparkle * 1.6;

    // Whitecaps: little brush flecks on the swell crests, out in open water.
    float crest = smoothstep(1.4, 2.2, vWave) * step(0.8, noise(p * 0.22 + vec2(time * 0.5, 0.0)));
    col = mix(col, foamColor, crest * 0.55 * smoothstep(20.0, 120.0, coast) * (1.0 - smoothstep(500.0, 1400.0, dist)));

    // Surf: a clean ribbon on the shore, then drawn foam lines that roll in
    // parallel to the coast, the way waves are drawn in a picture book.
    float swell = sin(time * 0.55 + coast * 0.09) * 3.0;
    float edge = coast + swell;
    float ripple = noise(p * 0.08 + time * 0.2);
    float surf = smoothstep(9.0 + ripple * 6.0, 5.0 + ripple * 4.0, edge) * smoothstep(-9.0, -1.0, edge);
    float lines = fract((coast - time * 5.0) / 16.0 + ripple * 0.35);
    float line = smoothstep(0.08, 0.0, abs(lines - 0.5) - 0.02);
    line *= smoothstep(64.0, 14.0, coast) * step(0.0, coast) * step(0.35, noise(p * 0.05 + 3.0));
    col = mix(col, foamColor, clamp(surf * 0.95 + line * 0.7, 0.0, 1.0));

    float fogAmount = smoothstep(fogNear, fogFar, dist);
    col = mix(col, fogColor, fogAmount);

    float alpha = mix(0.82, 1.0, smoothstep(0.0, 60.0, coast));
    gl_FragColor = vec4(col, alpha);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

export function createWater(scene) {
  const size = 6400;
  const material = new ShaderMaterial({
    transparent: true,
    depthWrite: true,
    side: DoubleSide,
    uniforms: {
      time: { value: 0 },
      shallowColor: { value: new Color(0x4ba8b6) },
      deepColor: { value: new Color(0x1d6a7e) },
      foamColor: { value: new Color(0xfdf6e3) },
      sunDir: { value: new Vector3(-0.55, 0.34, 0.72) },
      sunColor: { value: new Color(0xffe0ae) },
      skyColor: { value: new Color(0xbfe7f5) },
      fogColor: { value: new Color(0xd7ceb4) },
      fogNear: { value: 540 },
      fogFar: { value: 1270 },
    },
    vertexShader,
    fragmentShader: fragmentShader.replace('__COASTLINE__', coastlineGLSL()),
  });

  const segments = QUALITY.waterSegments;
  const mesh = new Mesh(new PlaneGeometry(size, size, segments, segments), material);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 0;
  mesh.renderOrder = 1;
  scene.add(mesh);

  return { mesh, uniforms: material.uniforms };
}
