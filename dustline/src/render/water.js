/**
 * The falls: a creek running across the top of the butte, a curtain of
 * water pouring off the lip into the plunge pool, mist at the bottom and a
 * rainbow in it. All shader-drawn, no textures.
 */
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  CircleGeometry,
  DoubleSide,
  Mesh,
  ShaderMaterial,
  TorusGeometry,
  UniformsLib,
  UniformsUtils,
} from 'three';
import { heightAt } from '../world/terrain.js';

const FOG_PARS_V = '#include <fog_pars_vertex>';
const FOG_V = '#include <fog_vertex>';

/** Pool surface: deep teal in the middle, pale at the shore, ripples, foam. */
function poolMaterial(time, pool, impact) {
  return new ShaderMaterial({
    transparent: true,
    fog: true,
    depthWrite: false,
    uniforms: UniformsUtils.merge([
      UniformsLib.fog,
      {
        time: { value: 0 },
        centre: { value: [pool.x, pool.z] },
        radius: { value: pool.r },
        impact: { value: impact },
      },
    ]),
    vertexShader: /* glsl */ `
      varying vec3 vWorld;
      #include <common>
      ${FOG_PARS_V}
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vWorld = w.xyz;
        vec4 mvPosition = viewMatrix * w;
        gl_Position = projectionMatrix * mvPosition;
        ${FOG_V}
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float time;
      uniform vec2 centre;
      uniform float radius;
      uniform vec2 impact;
      varying vec3 vWorld;
      #include <common>
      #include <fog_pars_fragment>
      void main() {
        float d = length(vWorld.xz - centre) / radius;
        vec3 deep = pow(vec3(0.05, 0.42, 0.45), vec3(2.2));
        vec3 shallow = pow(vec3(0.36, 0.78, 0.70), vec3(2.2));
        vec3 col = mix(deep, shallow, smoothstep(0.35, 1.0, d));
        // Rings spreading out from where the falls land.
        float di = length(vWorld.xz - impact);
        float ring = sin(di * 1.6 - time * 4.0) * 0.5 + 0.5;
        float near = exp(-di * 0.12);
        col += vec3(0.5) * smoothstep(0.75, 1.0, ring) * near * 0.35;
        // Wind ripples elsewhere.
        float rip = sin(vWorld.x * 0.9 + time * 1.3 + sin(vWorld.z * 0.7 + time) * 1.5);
        col += vec3(0.25) * smoothstep(0.85, 1.0, rip) * 0.25;
        // Foam where the water lands and round the shore.
        float foam = smoothstep(6.0, 1.5, di) * (0.6 + 0.4 * sin(time * 9.0 + di * 3.0));
        foam = max(foam, smoothstep(0.86, 1.0, d) * (0.5 + 0.5 * sin(atan(vWorld.z - centre.y, vWorld.x - centre.x) * 22.0 + time * 2.0)));
        col = mix(col, vec3(0.95, 0.98, 1.0), clamp(foam, 0.0, 1.0) * 0.85);
        float alpha = mix(0.88, 0.55, smoothstep(0.7, 1.0, d));
        gl_FragColor = vec4(col, alpha);
        #include <fog_fragment>
      }
    `,
  });
}

/** Falling or flowing water: streaks that run along v, fading at the edges. */
function streamMaterial(speed, brightness = 1) {
  return new ShaderMaterial({
    transparent: true,
    fog: true,
    depthWrite: false,
    side: DoubleSide,
    uniforms: UniformsUtils.merge([UniformsLib.fog, { time: { value: 0 } }]),
    vertexShader: /* glsl */ `
      attribute vec2 aUv;
      varying vec2 vUv;
      #include <common>
      ${FOG_PARS_V}
      void main() {
        vUv = aUv;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        ${FOG_V}
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float time;
      varying vec2 vUv;
      #include <common>
      #include <fog_pars_fragment>
      float h(float x) { return fract(sin(x * 127.1) * 43758.5453); }
      void main() {
        // u: 0..1 across, v: metres along the flow.
        float col = floor(vUv.x * 26.0);
        float off = h(col) * 10.0;
        float sp = ${speed.toFixed(2)} * (0.8 + 0.4 * h(col + 3.0));
        float streak = fract((vUv.y - time * sp) * 0.18 + off);
        float s = smoothstep(0.0, 0.25, streak) * smoothstep(1.0, 0.55, streak);
        float edge = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        vec3 base = pow(vec3(0.62, 0.86, 0.92), vec3(2.2));
        vec3 white = vec3(1.0);
        vec3 c = mix(base, white, s * 0.8) * ${brightness.toFixed(2)};
        float a = (0.55 + 0.4 * s) * edge;
        gl_FragColor = vec4(c, a);
        #include <fog_fragment>
      }
    `,
  });
}

function ribbon(points, widths, sides) {
  // points: centre-line [x,y,z]; sides: unit side vectors; widths: metres.
  const pos = [];
  const uv = [];
  let along = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i];
    const b = points[i + 1];
    const seg = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
    const quad = (k, u) => {
      const p = k ? b : a;
      const w = widths[i + k] / 2;
      const s = sides[i + k];
      return [p[0] + s[0] * w * (u * 2 - 1), p[1], p[2] + s[2] * w * (u * 2 - 1)];
    };
    const v0 = along;
    const v1 = along + seg;
    const across = 6;
    for (let j = 0; j < across; j++) {
      const u0 = j / across;
      const u1 = (j + 1) / across;
      const A = quad(0, u0);
      const B = quad(0, u1);
      const C = quad(1, u0);
      const D = quad(1, u1);
      pos.push(...A, ...B, ...C, ...B, ...D, ...C);
      uv.push(u0, v0, u1, v0, u0, v1, u1, v0, u1, v1, u0, v1);
    }
    along = v1;
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute('aUv', new BufferAttribute(new Float32Array(uv), 2));
  g.computeBoundingSphere();
  return g;
}

export function createFalls(scene, falls) {
  const { lip, dir, mesa, pool } = falls;
  const side = [-dir[1], 0, dir[0]];
  const width = 10;

  // The creek across the top: from the middle of the butte to the lip.
  const creekPts = [];
  const creekW = [];
  const creekS = [];
  for (let i = 0; i <= 12; i++) {
    const t = i / 12;
    const wig = Math.sin(t * 5) * 3 * (1 - t);
    const x = mesa.x + dir[0] * mesa.r * t * 0.97 + side[0] * wig;
    const z = mesa.z + dir[1] * mesa.r * t * 0.97 + side[2] * wig;
    creekPts.push([x, Math.max(heightAt(x, z), mesa.h - 0.4) + 0.25, z]);
    creekW.push(3.5 + t * (width - 3.5));
    creekS.push(side);
  }
  const creekMat = streamMaterial(5, 1.0);
  scene.add(new Mesh(ribbon(creekPts, creekW, creekS), creekMat));

  // The curtain: water leaves the lip at a few m/s and falls free.
  const v0 = 5;
  const g = 9.8;
  const drop = lip.y + 0.25 - pool.level;
  const tEnd = Math.sqrt((2 * drop) / g);
  const curtain = [];
  const cw = [];
  const cs = [];
  for (let i = 0; i <= 30; i++) {
    const t = (i / 30) * tEnd;
    curtain.push([lip.x + dir[0] * v0 * t, lip.y + 0.25 - 0.5 * g * t * t, lip.z + dir[1] * v0 * t]);
    cw.push(width * (1 + 0.35 * (i / 30)));
    cs.push(side);
  }
  const fallMat = streamMaterial(16, 1.08);
  scene.add(new Mesh(ribbon(curtain, cw, cs), fallMat));
  // A second, wider veil a little out from the first, for body.
  const veil = curtain.map((p, i) => [p[0] + dir[0] * 0.6 * (i / 30), p[1], p[2] + dir[1] * 0.6 * (i / 30)]);
  const veilMat = streamMaterial(13, 0.95);
  scene.add(new Mesh(ribbon(veil, cw.map((w) => w * 1.15), cs), veilMat));

  const impact = [lip.x + dir[0] * v0 * tEnd, lip.z + dir[1] * v0 * tEnd];
  const poolMat = poolMaterial(0, pool, impact);
  const surface = new Mesh(new CircleGeometry(pool.r + 0.6, 48), poolMat);
  surface.rotation.x = -Math.PI / 2;
  surface.position.set(pool.x, pool.level, pool.z);
  scene.add(surface);

  // A rainbow in the spray, facing out over the canyon.
  const bow = new Mesh(
    new TorusGeometry(15, 1.6, 6, 48, Math.PI),
    new ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
      side: DoubleSide,
      uniforms: { strength: { value: 0.22 } },
      vertexShader: /* glsl */ `
        varying vec3 vLocal;
        void main() { vLocal = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
      `,
      fragmentShader: /* glsl */ `
        uniform float strength;
        varying vec3 vLocal;
        vec3 hue(float h) { return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); }
        void main() {
          float r = length(vLocal.xy);
          float t = clamp((r - 13.4) / 3.2, 0.0, 1.0);
          float edge = smoothstep(0.0, 0.2, t) * smoothstep(1.0, 0.8, t);
          float ends = smoothstep(0.0, 6.0, vLocal.y);
          gl_FragColor = vec4(hue(t * 0.8) * edge * ends * strength, 1.0);
        }
      `,
    })
  );
  bow.position.set(impact[0] + dir[0] * 6, pool.level - 2, impact[1] + dir[1] * 6);
  bow.rotation.y = Math.atan2(dir[0], dir[1]);
  scene.add(bow);

  const mistAt = { x: impact[0], y: pool.level + 0.5, z: impact[1] };
  return {
    mistAt,
    curtain: { lip, dir, v0, tEnd, width, side },
    update(t) {
      creekMat.uniforms.time.value = t;
      fallMat.uniforms.time.value = t;
      veilMat.uniforms.time.value = t;
      poolMat.uniforms.time.value = t;
    },
    /** Is (x, y, z) under the falling water? */
    under(p) {
      const dx = p.x - lip.x;
      const dz = p.z - lip.z;
      const along = dx * dir[0] + dz * dir[1];
      const across = Math.abs(dx * side[0] + dz * side[2]);
      return along > 0 && along < v0 * tEnd + 3 && across < width * 0.7 && p.y < lip.y;
    },
  };
}

