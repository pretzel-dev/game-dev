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
  uniform vec3 fogColor;
  uniform float fogNear;
  uniform float fogFar;
  varying vec3 vWorld;
  varying float vWave;
  ${WAVE_GLSL}
  ${/* islandRadius(), shared with the terrain */ ''}
  __COASTLINE__

  void main() {
    vec2 p = vWorld.xz;
    float coast = length(p) - islandRadius(atan(p.y, p.x));

    // Depth banding: turquoise over the sand, ink out in the channel.
    float depth = smoothstep(-20.0, 430.0, coast);
    vec3 col = mix(shallowColor, deepColor, depth);

    // Painterly current stripes, stretched along the swell.
    float stripe = 0.5 + 0.5 * sin(p.x * 0.021 + p.y * 0.016 + vWave * 1.7 + time * 0.12);
    col += (foamColor - col) * stripe * 0.035;

    vec3 normal = waveNormal(p, time);
    vec3 viewDir = normalize(cameraPosition - vWorld);

    // Glitter path towards the sun, plus a soft sheen.
    vec3 halfDir = normalize(normalize(sunDir) + viewDir);
    float spec = pow(max(dot(normal, halfDir), 0.0), 90.0);
    float sheen = pow(max(dot(normal, halfDir), 0.0), 12.0);
    col += sunColor * (spec * 0.85 + sheen * 0.10);

    // Fresnel: the sea goes pale and skyish at grazing angles.
    float fres = pow(1.0 - max(dot(normal, viewDir), 0.0), 4.0);
    col = mix(col, fogColor, fres * 0.15);

    // Surf. Two ragged bands that crawl up the beach with the swell.
    float swell = sin(time * 0.55 + coast * 0.09) * 3.0;
    float edge = coast + swell;
    float ripple = 0.5 + 0.5 * sin(atan(p.y, p.x) * 190.0 + time * 0.7);
    float surf = smoothstep(15.0 + ripple * 7.0, 1.0, edge) * smoothstep(-9.0, -1.0, edge);
    float wash = smoothstep(36.0, 6.0, edge) * 0.08;
    col = mix(col, foamColor, clamp(surf * 0.85 + wash, 0.0, 1.0));

    float fogAmount = smoothstep(fogNear, fogFar, length(cameraPosition - vWorld));
    col = mix(col, fogColor, fogAmount);

    float alpha = mix(0.86, 1.0, smoothstep(0.0, 70.0, coast));
    gl_FragColor = vec4(col, alpha);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

export function createWater(scene) {
  const size = 3600;
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
