import * as THREE from 'three';
import { NOISE, LD_VERT_PARS, LD_VERT, LD_FRAG_PARS, LD_FRAG } from './glsl.js';
import { rng } from '../sim.js';

/**
 * The star: a boiling photosphere (granulation cells with dark lanes, slow
 * supergranules, sunspots with penumbrae, bright faculae near the limb, and
 * limb darkening), a corona of faint streamers round it, and prominences
 * arching off the surface. Drawn brighter than white so the bloom makes it
 * blaze. `radius` is the star's radius in world units; the group is scaled
 * per star.
 */
export function createSun(radius, quality) {
  const group = new THREE.Group();
  const uT = { value: 0 };
  const hi = quality === 'high';

  const surface = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 96, 64),
    new THREE.ShaderMaterial({
      uniforms: { uT, uTint: { value: new THREE.Color(1, 1, 1) } },
      vertexShader: /* glsl */ `${LD_VERT_PARS}
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        void main() {
          vP = position; vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
          ${LD_VERT}
        }`,
      fragmentShader: /* glsl */ `${LD_FRAG_PARS}
        ${NOISE}
        uniform float uT; uniform vec3 uTint;
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        void main() {
          ${LD_FRAG}
          vec3 p = normalize(vP);
          float t = uT;
          // Granules: convection cells, bright centres and dark lanes, that churn.
          vec3 q = p * 30.0 + vec3(fbm(p * 5.0 + t * 0.015, 3), fbm(p * 5.0 + 7.0 - t * 0.015, 3), 0.0) * 1.2;
          vec2 w = worley(q + vec3(0.0, 0.0, t * 0.05));
          float gran = smoothstep(0.0, 0.7, w.y - w.x) * 0.7 + (snoise(q * 0.7 + t * 0.03) * 0.5 + 0.5) * 0.3;
          ${hi ? 'vec2 w2 = worley(q * 2.3 + 11.0 - vec3(t * 0.08)); gran = gran * 0.75 + smoothstep(0.0, 0.5, w2.y - w2.x) * 0.25;' : ''}
          float sup = fbm(p * 6.0 - t * 0.01, 3) * 0.5 + 0.5;
          // Active regions: spots (umbra and penumbra) and bright faculae round them.
          float act = fbm(p * 2.0 + vec3(0.0, t * 0.004, 0.0), 2) + snoise(p * 9.0) * 0.03;
          act *= smoothstep(0.85, 0.3, abs(p.y)); // spots keep to the low latitudes
          float pen = smoothstep(0.36, 0.41, act);
          float umb = smoothstep(0.44, 0.47, act);
          float fil = 0.5 + 0.5 * sin(atan(p.y, p.x) * 90.0 + fbm(p * 20.0, 2) * 6.0);
          float mu = max(dot(vN, vV), 0.0);
          float limb = 0.35 + 0.65 * pow(mu, 0.55);
          float fac = smoothstep(0.18, 0.28, act) * (1.0 - pen) * (1.0 - mu) * 1.5;
          vec3 hot = vec3(1.0, 0.93, 0.78), warm = vec3(1.0, 0.62, 0.25), deep = vec3(0.8, 0.28, 0.06);
          vec3 c = mix(warm, hot, gran * 0.7 + sup * 0.3);
          c = mix(c, deep, (1.0 - limb) * 0.85);
          c *= 1.0 + fac * 0.6;
          c *= 1.0 - pen * (0.45 + 0.1 * fil) - umb * 0.45;
          // Brighter than white: the bloom does the rest.
          gl_FragColor = vec4(c * uTint * (0.45 + 0.85 * limb), 1.0);
        }`,
    }),
  );
  group.add(surface);

  // Corona: a camera-facing disc of faint streamers, fading out from the limb.
  const corona = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    new THREE.ShaderMaterial({
      uniforms: { uT, uR: { value: radius }, uTint: surface.material.uniforms.uTint },
      vertexShader: /* glsl */ `${LD_VERT_PARS}
        uniform float uR; varying vec2 vXY;
        void main() {
          float s = length(modelMatrix[0].xyz) * uR * 5.0;
          vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          mv.xy += position.xy * s;
          vXY = position.xy * 5.0; // in star radii
          gl_Position = projectionMatrix * mv;
          ${LD_VERT}
        }`,
      fragmentShader: /* glsl */ `${LD_FRAG_PARS}
        ${NOISE}
        uniform float uT; uniform vec3 uTint; varying vec2 vXY;
        void main() {
          ${LD_FRAG}
          float r = length(vXY);
          if (r < 0.97) discard;
          float a = atan(vXY.y, vXY.x);
          vec2 dir = vXY / r;
          // Streamers: noise in angle, stretched outward, drifting slowly.
          float s = fbm(vec3(dir * 3.0, uT * 0.01), 4) * 0.5 + 0.5;
          float s2 = fbm(vec3(dir * 9.0 + 4.0, r * 0.6 - uT * 0.02), 3) * 0.5 + 0.5;
          float streak = pow(s, 2.0) * 0.8 + pow(s2, 3.0) * 0.6;
          float fall = exp(-(r - 1.0) * 2.6) * 0.9 + exp(-(r - 1.0) * 0.7) * 0.12;
          float inner = exp(-(r - 1.0) * 18.0) * 1.5; // the bright chromosphere edge
          float k = fall * (0.35 + streak) + inner;
          k *= smoothstep(5.0, 3.0, r);
          vec3 c = mix(vec3(1.0, 0.55, 0.25), vec3(1.0, 0.85, 0.65), clamp(streak, 0.0, 1.0)) * uTint;
          gl_FragColor = vec4(c * k * 0.7, 1.0);
        }`,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    }),
  );
  corona.frustumCulled = false;
  group.add(corona);

  // Prominences: loops of glowing plasma that rise, swell and fade, then
  // reappear somewhere else. Each loop is a tube with flowing brightness.
  const proms = [];
  const promMat = (hue) => new THREE.ShaderMaterial({
    uniforms: { uT, uA: { value: 0 }, uC: { value: new THREE.Color().setHSL(hue, 1, 0.55) }, uTint: surface.material.uniforms.uTint },
    vertexShader: /* glsl */ `${LD_VERT_PARS}
      varying vec2 vUv; varying float vRim;
      void main() {
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vRim = abs(dot(normalize(normalMatrix * normal), normalize(-mv.xyz)));
        gl_Position = projectionMatrix * mv;
        ${LD_VERT}
      }`,
    fragmentShader: /* glsl */ `${LD_FRAG_PARS}
      ${NOISE}
      uniform float uT, uA; uniform vec3 uC, uTint; varying vec2 vUv; varying float vRim;
      void main() {
        ${LD_FRAG}
        float flow = snoise(vec3(vUv.x * 14.0 - uT * 0.6, vUv.y * 3.0, uT * 0.1)) * 0.5 + 0.5;
        float ends = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        float k = uA * (0.35 + flow) * (0.4 + 0.6 * vRim) * (0.5 + ends * 0.5);
        gl_FragColor = vec4(uC * uTint * k * 2.2, 1.0);
      }`,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  {
    const r = rng(7);
    const up = new THREE.Vector3(0, 1, 0);
    for (let i = 0; i < 9; i++) {
      const size = 0.7 + r() * 1.3;
      const m = new THREE.Mesh(new THREE.TorusGeometry(size, 0.07 + r() * 0.08, 8, 40, Math.PI), promMat(0.03 + r() * 0.05));
      const place = () => {
        const n = new THREE.Vector3().randomDirection();
        m.position.copy(n).multiplyScalar(radius * 0.97);
        m.quaternion.setFromUnitVectors(up, n);
        m.rotateY(Math.random() * Math.PI);
      };
      place();
      proms.push({ m, place, phase: r() * 40, period: 25 + r() * 30, peak: 0.5 + r() * 0.4, lastU: 0 });
      group.add(m);
    }
  }

  // Soft glow sprites: the halo you'd see even without bloom.
  const glowTex = makeGlowTexture();
  const glows = [];
  for (const [s, c, o] of [[16, '#fff0c0', 0.2], [36, '#ffd890', 0.08], [100, '#ffc070', 0.025]]) {
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: c, opacity: o, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    glow.scale.setScalar(s);
    glows.push(glow);
    group.add(glow);
  }

  function update(t) {
    uT.value = t;
    for (const pr of proms) {
      const u = ((t + pr.phase) % pr.period) / pr.period;
      if (u < pr.lastU) pr.place();
      pr.lastU = u;
      pr.m.material.uniforms.uA.value = Math.sin(u * Math.PI) ** 2 * pr.peak;
      pr.m.scale.setScalar(0.6 + u * 0.6);
    }
  }
  return { group, update, tint: surface.material.uniforms.uTint.value };
}

export function makeGlowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.2, 'rgba(255,255,255,0.5)');
  grad.addColorStop(0.5, 'rgba(255,255,255,0.1)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
