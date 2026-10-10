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
          // Seen as in a solar observatory's images: a deep orange disc with a
          // fine churning network, bright active regions threaded with arching
          // magnetic loops, dark snaking filaments, and a bright fringe at the edge.
          vec3 w = vec3(fbm(p * 3.0 + t * 0.012, 3), fbm(p * 3.0 + 5.0 - t * 0.012, 3), fbm(p * 3.0 + 9.0, 3));
          float net = fbm(p * 38.0 + w * 2.5 + t * 0.03, ${hi ? 5 : 4}) * 0.5 + 0.5;
          float act = fbm(p * 2.1 + w * 0.6 + vec3(0.0, t * 0.006, 0.0), 3);
          act = smoothstep(0.08, 0.45, act) * smoothstep(0.95, 0.35, abs(p.y));
          // Loops: bright fibres wound round each active region.
          float loops = ridged(p * 11.0 + w * 3.0 + vec3(t * 0.02, 0.0, 0.0), 4);
          float plage = act * (0.35 + 1.4 * pow(loops, 3.0));
          float core = smoothstep(0.75, 1.0, act) * (0.6 + 0.4 * net);
          // Filaments: thin dark lines away from the active regions.
          float fil = exp(-pow(snoise(p * 3.2 + w * 0.8 + 21.0) / 0.022, 2.0)) * (1.0 - act) * smoothstep(0.2, 0.6, fbm(p * 2.0 + 40.0, 2) * 0.5 + 0.5);
          float mu = max(dot(vN, vV), 0.0);
          float edge = pow(1.0 - mu, 6.0);
          vec3 deep = vec3(0.75, 0.22, 0.03), base = vec3(1.0, 0.46, 0.08), hotc = vec3(1.0, 0.78, 0.38), white = vec3(1.0, 0.95, 0.82);
          vec3 c = mix(deep, base, 0.35 + net * 0.75);
          c = mix(c, hotc, clamp(plage, 0.0, 1.0));
          c += white * core * 1.4 + hotc * max(plage - 1.0, 0.0) * 0.8;
          c *= 1.0 - fil * 0.3;
          c = mix(c, hotc * 1.3, edge * 0.8); // the bright fringe at the limb
          // Bright, but not white: the bloom does the rest.
          gl_FragColor = vec4(c * uTint * (0.85 + 0.25 * mu), 1.0);
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
          float s = length(modelMatrix[0].xyz) * uR * 2.2;
          vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          mv.xy += position.xy * s;
          vXY = position.xy * 2.2; // in star radii
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
          vec2 dir = vXY / r;
          // A close, fibrous fringe: fine bright threads standing off the limb,
          // flickering and drifting, brighter over the actv longitudes, and a
          // soft glow beyond.
          float rot = uT * 0.01;
          vec2 rd = vec2(dir.x * cos(rot) - dir.y * sin(rot), dir.x * sin(rot) + dir.y * cos(rot));
          float fib = fbm(vec3(rd * 26.0, uT * 0.12 + r * 2.0), 3) * 0.5 + 0.5;
          float fib2 = fbm(vec3(rd * 60.0 + 3.0, uT * 0.2 - r * 4.0), 2) * 0.5 + 0.5;
          float actv = smoothstep(0.35, 0.75, fbm(vec3(rd * 3.0, uT * 0.02), 3) * 0.5 + 0.5);
          float h = r - 1.0;
          float threads = pow(fib, 3.0) * 1.6 + pow(fib2, 4.0) * 0.8;
          float fringe = exp(-h / (0.07 + 0.12 * actv * fib)) * (0.6 + threads);
          float glow = exp(-h * 3.0) * 0.18 + exp(-h * 1.1) * 0.04;
          float k = (fringe * (0.7 + actv * 0.8) + glow) * smoothstep(2.2, 1.6, r);
          vec3 c = mix(vec3(1.0, 0.42, 0.08), vec3(1.0, 0.75, 0.35), clamp(fringe * 0.6, 0.0, 1.0)) * uTint;
          gl_FragColor = vec4(c * k * 0.9, 1.0);
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
  for (const [s, c, o] of [[15, '#ffc080', 0.22], [28, '#ff9a50', 0.09], [60, '#ff7a30', 0.03]]) {
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: c, opacity: o, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    glow.scale.setScalar(s);
    glow.userData.base = s;
    glows.push(glow);
    group.add(glow);
  }

  function update(t) {
    uT.value = t;
    // The halo breathes a little, so the glare is never quite still.
    glows.forEach((g, i) => g.scale.setScalar(g.userData.base * (1 + 0.03 * Math.sin(t * (0.5 + i * 0.23) + i))));
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
