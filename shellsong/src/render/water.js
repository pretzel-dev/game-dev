/**
 * The water itself:
 *
 *  - the surface: from above, a deep blue that sparkles and shows a little
 *    of what's below; from below, a shimmering silver-turquoise ceiling,
 *    brightest straight up;
 *  - sunbeams slanting down from the surface, swaying;
 *  - tiny specks drifting in the water round you, so you can feel yourself
 *    moving.
 *
 * Under the water the fog is a bright turquoise (set in main.js).
 */
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  DoubleSide,
  Mesh,
  PlaneGeometry,
  Points,
  ShaderMaterial,
} from 'three';

const surfaceVert = /* glsl */ `
  varying vec3 vWorld;
  void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`;

const surfaceFrag = /* glsl */ `
  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uSky;
  uniform vec3 uUnder;
  uniform vec3 uSunDir;
  uniform vec3 uFogAbove;
  uniform vec3 uFogBelow;
  uniform float uFogDensity;
  varying vec3 vWorld;

  vec3 waveNormal(vec2 p, float t) {
    float dx = 0.0;
    float dz = 0.0;
    for (int i = 0; i < 4; i++) {
      float fi = float(i);
      vec2 dir = vec2(cos(fi * 1.7 + 0.3), sin(fi * 2.3 + 0.9));
      float f = 0.35 + fi * 0.28;
      float ph = dot(dir, p) * f + t * (1.1 + fi * 0.35);
      float a = 0.18 / (1.0 + fi);
      dx += dir.x * cos(ph) * a * f;
      dz += dir.y * cos(ph) * a * f;
    }
    return normalize(vec3(-dx, 1.0, -dz));
  }

  void main() {
    vec3 n = waveNormal(vWorld.xz, uTime);
    vec3 toEye = cameraPosition - vWorld;
    float dist = length(toEye);
    vec3 v = toEye / dist;
    vec4 col;
    if (gl_FrontFacing) {
      // From above: deep blue, catching the sky at a glance, glinting in the sun.
      float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
      vec3 c = mix(uDeep, uSky, 0.25 + fres * 0.6);
      vec3 h = normalize(uSunDir + v);
      c += vec3(1.0, 0.95, 0.85) * pow(max(dot(n, h), 0.0), 180.0) * 2.5;
      float fog = 1.0 - exp(-dist * 0.0018);
      c = mix(c, uFogAbove, fog);
      col = vec4(c, mix(0.9, 0.98, fres));
    } else {
      // From below: a bright, rippling ceiling; brightest straight overhead.
      float up = max(-v.y, 0.0);
      float ripple = 0.5 + 0.5 * sin(dot(n.xz, vec2(40.0, 33.0)) + uTime * 2.0);
      vec3 c = mix(uUnder * 0.7, uUnder * 1.6 + vec3(0.25), smoothstep(0.55, 0.95, up));
      c += ripple * 0.12;
      float fog = 1.0 - exp(-dist * uFogDensity * 1.2);
      c = mix(c, uFogBelow, fog);
      col = vec4(c, 0.92);
    }
    gl_FragColor = col;
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

const rayVert = /* glsl */ `
  varying vec2 vUv;
  varying float vDepth;
  void main() {
    vUv = uv;
    vec4 w = modelMatrix * vec4(position, 1.0);
    vDepth = w.y;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`;

const rayFrag = /* glsl */ `
  uniform float uAlpha;
  uniform float uTime;
  uniform float uSeed;
  varying vec2 vUv;
  varying float vDepth;
  void main() {
    float side = sin(vUv.x * 3.14159);
    side = pow(side, 2.0);
    float flicker = 0.7 + 0.3 * sin(uTime * 0.8 + uSeed * 7.0 + vUv.y * 3.0);
    float fade = smoothstep(0.0, 0.25, vUv.y) * smoothstep(-34.0, -4.0, vDepth);
    gl_FragColor = vec4(vec3(0.75, 1.0, 0.95) * side * fade * flicker * uAlpha, 1.0);
  }
`;

export function createWater(scene) {
  const uniforms = {
    uTime: { value: 0 },
    uDeep: { value: new Color(0x1a6aa8) },
    uSky: { value: new Color(0xa8d8ff) },
    uUnder: { value: new Color(0x7ad8e8) },
    uSunDir: { value: null },
    uFogAbove: { value: new Color(0xcfe8f8) },
    uFogBelow: { value: new Color(0x2a9ac0) },
    uFogDensity: { value: 0.016 },
  };
  const surface = new Mesh(
    new PlaneGeometry(4000, 4000),
    new ShaderMaterial({ vertexShader: surfaceVert, fragmentShader: surfaceFrag, uniforms, side: DoubleSide, transparent: true, depthWrite: false })
  );
  surface.rotation.x = -Math.PI / 2;
  surface.renderOrder = 5;
  scene.add(surface);

  // Sunbeams: soft vertical sheets that face the camera.
  const rays = [];
  for (let k = 0; k < 14; k++) {
    const m = new ShaderMaterial({
      vertexShader: rayVert,
      fragmentShader: rayFrag,
      uniforms: { uAlpha: { value: 0.1 }, uTime: uniforms.uTime, uSeed: { value: k * 1.37 } },
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      side: DoubleSide,
    });
    const g = new PlaneGeometry(1, 1);
    g.translate(0, -0.5, 0);
    const ray = new Mesh(g, m);
    ray.userData = { angle: (k / 14) * Math.PI * 2, r: 10 + ((k * 7) % 5) * 9, w: 2 + ((k * 3) % 4) * 1.8 };
    ray.renderOrder = 6;
    ray.frustumCulled = false;
    scene.add(ray);
    rays.push(ray);
  }

  // Drifting specks round the camera.
  const N = 700;
  const BOX = 40;
  const pos = new Float32Array(N * 3);
  for (let k = 0; k < N * 3; k++) pos[k] = (Math.random() - 0.5) * BOX;
  const sg = new BufferGeometry();
  sg.setAttribute('position', new BufferAttribute(pos, 3));
  const specks = new Points(
    sg,
    new ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { uCam: { value: null }, uScale: { value: 400 } },
      vertexShader: /* glsl */ `
        uniform vec3 uCam;
        uniform float uScale;
        varying float vA;
        void main() {
          vec3 p = mod(position - uCam + 20.0, 40.0) - 20.0 + uCam;
          vec4 mv = viewMatrix * vec4(p, 1.0);
          gl_PointSize = uScale * 0.06 / -mv.z;
          vA = smoothstep(20.0, 6.0, length(p - uCam)) * step(p.y, -0.3);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */ `
        varying float vA;
        void main() {
          float r = length(gl_PointCoord - 0.5);
          if (r > 0.5) discard;
          gl_FragColor = vec4(0.9, 1.0, 1.0, vA * 0.5 * (1.0 - r * 2.0));
        }`,
    })
  );
  specks.frustumCulled = false;
  scene.add(specks);

  return {
    uniforms,
    surface,
    update(t, camera, underwater, sunDir) {
      uniforms.uTime.value = t;
      uniforms.uSunDir.value = sunDir;
      surface.position.x = camera.position.x;
      surface.position.z = camera.position.z;
      for (const ray of rays) {
        const u = ray.userData;
        const a = u.angle + t * 0.01;
        ray.position.set(camera.position.x + Math.cos(a) * u.r, 0, camera.position.z + Math.sin(a) * u.r);
        ray.scale.set(u.w, 36, 1);
        ray.rotation.set(0, Math.atan2(camera.position.x - ray.position.x, camera.position.z - ray.position.z), 0.18 + Math.sin(t * 0.3 + u.angle) * 0.05);
        ray.visible = underwater;
      }
      specks.visible = underwater;
      specks.material.uniforms.uCam.value = camera.position;
    },
    setScale(px) {
      specks.material.uniforms.uScale.value = px;
    },
  };
}
