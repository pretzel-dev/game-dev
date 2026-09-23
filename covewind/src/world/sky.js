/**
 * The sky dome, painted rather than simulated: a deep zenith that softens to a
 * warm horizon, a sun with a broad haze around it, and thin brush-stroke
 * cirrus drifting high overhead. The big cumulus are real geometry (see
 * `clouds.js`); this is the backdrop they are painted against.
 */
import { BackSide, Color, Mesh, ShaderMaterial, SphereGeometry, Vector3 } from 'three';

const vertexShader = /* glsl */ `
  varying vec3 vDir;
  void main() {
    vDir = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 topColor;
  uniform vec3 horizonColor;
  uniform vec3 glowColor;
  uniform vec3 cloudColor;
  uniform vec3 sunDir;
  uniform float glowStrength;
  uniform float time;
  varying vec3 vDir;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) { v += noise(p) * a; p = p * 2.03 + 17.1; a *= 0.5; }
    return v;
  }

  void main() {
    vec3 dir = normalize(vDir);
    float y = dir.y;

    // Three-stop gradient: a pale band on the horizon, a clean mid-blue, and
    // a deeper zenith — the look of a gouache sky wash.
    float h = smoothstep(-0.02, 0.42, y);
    vec3 mid = mix(horizonColor, topColor, 0.7);
    vec3 col = mix(horizonColor, mid, smoothstep(0.0, 0.35, h));
    col = mix(col, topColor * 0.92, smoothstep(0.5, 1.0, h));

    // Below the horizon, the sky fades into the sea haze.
    col = mix(col, horizonColor * 1.02, smoothstep(0.0, -0.08, y));

    float cosA = dot(dir, normalize(sunDir));
    col += glowColor * pow(max(0.0, cosA), 6.0) * glowStrength * 0.45;
    col += glowColor * pow(max(0.0, cosA), 90.0) * glowStrength * 0.9;
    // The disc: a flat, bright coin with a crisp edge, as a painter would.
    col = mix(col, vec3(1.0, 0.98, 0.92) * 1.4, smoothstep(0.9990, 0.9994, cosA));

    // High cirrus: long wind-combed strokes, only overhead.
    if (y > 0.04) {
      vec2 p = dir.xz / (y + 0.18);
      p = vec2(p.x * 0.55 + p.y * 0.2, p.y * 1.9) + vec2(time * 0.004, 0.0);
      float streak = fbm(p * 1.6);
      streak = smoothstep(0.56, 0.78, streak) * smoothstep(0.04, 0.3, y);
      // Lit on the sun side, cooler away from it.
      vec3 tint = mix(cloudColor * 0.92, cloudColor * 1.05 + glowColor * 0.08, 0.5 + 0.5 * cosA);
      col = mix(col, tint, streak * 0.45);
    }

    gl_FragColor = vec4(col, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

export function createSky(scene) {
  const material = new ShaderMaterial({
    side: BackSide,
    depthWrite: false,
    fog: false,
    vertexShader,
    fragmentShader,
    uniforms: {
      topColor: { value: new Color(0x4a92d6) },
      horizonColor: { value: new Color(0xffd9a6) },
      glowColor: { value: new Color(0xff9a4a) },
      cloudColor: { value: new Color(0xfff1d6) },
      sunDir: { value: new Vector3(-0.55, 0.3, 0.72) },
      glowStrength: { value: 0.5 },
      time: { value: 0 },
    },
  });
  const sky = new Mesh(new SphereGeometry(3600, 32, 20), material);
  sky.frustumCulled = false;
  sky.renderOrder = -1;
  scene.add(sky);
  return {
    mesh: sky,
    uniforms: material.uniforms,
    /** The dome travels with the camera so it is never clipped. */
    follow(position) {
      sky.position.copy(position);
    },
  };
}
