/**
 * Draws Bellbrook from the data in `world/city.js`: the ground, roads and
 * pavements, every building with its windows, doors, awnings and signs,
 * the trees, and all the little props. Nearly all of it is merged into a
 * few big meshes; the few things that move (windmill, crane, boats, ducks,
 * fountains, flags) are kept apart and turned in `update`.
 *
 * Buildings near the line from the camera to the fire engine turn to a
 * see-through dither, so a tall building never hides the truck.
 */
import {
  AdditiveBlending,
  CircleGeometry,
  Color,
  Group,
  InstancedMesh,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  Object3D,
  PlaneGeometry,
  Vector3,
} from 'three';
import { Builder, SHAPES } from './builder.js';
import { buildVehicle } from './vehicles.js';
import { N, HALF, ROAD, roadAt } from '../world/roads.js';
import { KERB, SEA_Z, groundY } from '../world/city.js';

const COLORS = {
  grass: 0x8fcf6a,
  asphalt: 0x646b78,
  line: 0xf6f3ea,
  pavement: 0xdcd6cc,
  kerb: 0xc4bdb2,
  garden: 0x9bd672,
  plaza: 0xeadbc6,
  square: 0xecc9b4,
  apron: 0xd4d2cc,
  pitch: 0x7cc95a,
  dirt: 0xcfae80,
  meadow: 0xa8d878,
  park: 0x92d46a,
  path: 0xf2e0b8,
  sand: 0xf5e2a8,
  soil: 0x9a7048,
  trunk: 0x8a5a3a,
  white: 0xfdfbf6,
  roofFlat: 0xbdb5aa,
  glass: 0x8cc4ea,
  stone: 0xd8d0c4,
  wood: 0xb07a4a,
  yellow: 0xf2c21b,
  water: 0x5cc0e6,
};

const PATCH = {
  garden: COLORS.garden,
  plaza: COLORS.plaza,
  square: COLORS.square,
  apron: COLORS.apron,
  pitch: COLORS.pitch,
  dirt: COLORS.dirt,
  meadow: COLORS.meadow,
  park: COLORS.park,
  path: COLORS.path,
  sand: COLORS.sand,
};

/** Adds the "see the truck through buildings" dither to a Lambert material. */
function withSeeThrough(material, uniforms) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTruck = uniforms.uTruck;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWorldPos;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWorldPos;\nuniform vec3 uTruck;')
      .replace(
        '#include <clipping_planes_fragment>',
        `#include <clipping_planes_fragment>
        {
          // Distance from this fragment to the line camera -> truck, if the
          // fragment is in front of the truck. Inside that tube: dither away.
          vec3 a = cameraPosition;
          vec3 b = uTruck + vec3(0.0, 1.6, 0.0);
          vec3 ab = b - a;
          float t = dot(vWorldPos - a, ab) / dot(ab, ab);
          if (t > 0.0 && t < 0.93 && vWorldPos.y > 1.2) {
            float d = length(vWorldPos - (a + ab * t));
            float r = 4.5 * smoothstep(0.55, 0.85, t) + 1.0;
            if (d < r) {
              vec2 px = floor(gl_FragCoord.xy);
              if (mod(px.x + px.y, 2.0) < 1.0 || d < r * 0.6) discard;
            }
          }
        }`
      );
  };
  material.customProgramCacheKey = () => 'seethrough';
  return material;
}

export function createTown(scene, city) {
  const uniforms = { uTruck: { value: new Vector3() } };
  const ground = new Builder();
  const solid = new Builder();
  const glassDark = new Builder();
  const glassLit = new Builder();
  const bulbs = new Builder();
  const anim = []; // things that move: { obj, update(t) }

  /* -------------------------------------------------------------- ground --- */

  ground.quad(-700, 700, -700, SEA_Z + 1, 0, COLORS.grass);
  // Roads, with a dashed centre line and zebra crossings at every corner.
  const L = HALF + ROAD / 2;
  for (let i = 0; i <= N; i++) {
    const r = roadAt(i);
    ground.quad(r - ROAD / 2, r + ROAD / 2, -L, L, 0.02, COLORS.asphalt);
    ground.quad(-L, L, r - ROAD / 2, r + ROAD / 2, 0.021, COLORS.asphalt);
  }
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j < N; j++) {
      const r = roadAt(i);
      const a = roadAt(j) + 10;
      const b = roadAt(j + 1) - 10;
      for (let u = a; u + 2.2 <= b; u += 5) {
        ground.quad(r - 0.13, r + 0.13, u, u + 2.2, 0.04, COLORS.line);
        ground.quad(u, u + 2.2, r - 0.13, r + 0.13, 0.04, COLORS.line);
      }
    }
  }
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= N; j++) {
      const x = roadAt(i);
      const z = roadAt(j);
      for (let k = -4; k <= 4; k++) {
        const o = k * 1.2;
        if (j > 0) ground.quad(x + o - 0.35, x + o + 0.35, z - 9, z - 6.6, 0.04, COLORS.line);
        if (j < N) ground.quad(x + o - 0.35, x + o + 0.35, z + 6.6, z + 9, 0.04, COLORS.line);
        if (i > 0) ground.quad(x - 9, x - 6.6, z + o - 0.35, z + o + 0.35, 0.04, COLORS.line);
        if (i < N) ground.quad(x + 6.6, x + 9, z + o - 0.35, z + o + 0.35, 0.04, COLORS.line);
      }
    }
  }
  // Pavements: a raised slab with a kerb, then whatever the block is on top.
  for (const g of city.ground) {
    if (g.kind === 'pavement') {
      solid.box((g.x0 + g.x1) / 2, 0, (g.z0 + g.z1) / 2, g.x1 - g.x0, KERB, g.z1 - g.z0, COLORS.pavement);
    }
  }
  for (const g of city.ground) {
    if (g.kind === 'pavement') continue;
    const y = g.kind === 'sand' ? 0.012 : g.kind === 'path' ? KERB + 0.006 : KERB + 0.003;
    if (g.kind === 'field') {
      // Rows of crops.
      for (let x = g.x0, k = 0; x < g.x1; x += 2, k++) ground.quad(x, Math.min(g.x1, x + 2), g.z0, g.z1, y, k % 2 ? 0x9a7a4a : 0x9fcf5a);
      continue;
    }
    ground.quad(g.x0, g.x1, g.z0, g.z1, y, PATCH[g.kind] ?? COLORS.grass);
    if (g.kind === 'pitch') {
      const cx = (g.x0 + g.x1) / 2;
      const cz = (g.z0 + g.z1) / 2;
      ground.quad(cx - 0.12, cx + 0.12, g.z0 + 1.5, g.z1 - 1.5, y + 0.004, COLORS.line);
      ground.disc(cx, cz, 3, y + 0.003, COLORS.line);
      ground.disc(cx, cz, 2.75, y + 0.005, COLORS.pitch);
    }
  }
  for (const d of city.discs) {
    if (d.kind === 'pond') {
      ground.disc(d.x, d.z, d.r + 0.8, KERB + 0.008, 0xcfc2a8);
    }
  }

  /* ------------------------------------------------------------ buildings --- */

  const glassFor = () => (Math.random() < 0.6 ? glassLit : glassDark);
  for (const b of city.buildings) {
    const y0 = KERB;
    // Plinth, walls, and the top.
    solid.box(b.x, y0, b.z, b.w + 0.3, 0.5, b.d + 0.3, shade(b.color, 0.78));
    solid.box(b.x, y0, b.z, b.w, b.h, b.d, b.color);
    if (b.stripe) {
      for (let f = 1; f < b.floors; f++) solid.box(b.x, y0 + f * b.floorH - 0.25, b.z, b.w + 0.08, 0.4, b.d + 0.08, b.stripe);
    }
    if (b.roof === 'flat' || b.parapet) {
      solid.box(b.x, y0 + b.h, b.z, b.w + 0.5, 0.45, b.d + 0.5, b.trim);
      solid.box(b.x, y0 + b.h + 0.45, b.z, b.w - 0.4, 0.05, b.d - 0.4, COLORS.roofFlat);
    }
    if (b.roof === 'gable' || b.roof === 'barn') {
      const ridgeZ = b.ridge === 'z';
      const ry = ridgeZ ? Math.PI / 2 : 0;
      const len = ridgeZ ? b.d : b.w;
      const span = ridgeZ ? b.w : b.d;
      solid.add(SHAPES.gable(), b.x, y0 + b.h, b.z, len, b.roofH, span, b.color, ry);
      solid.add(SHAPES.roof(), b.x, y0 + b.h - 0.05, b.z, len + 0.8, b.roofH + 0.25, span + 1.0, b.roofColor, ry);
      if (b.roof === 'barn') {
        // White X doors and trim on a red barn.
        solid.box(b.x + b.w / 2 + 0.05, y0, b.z, 0.12, 0.3, b.d, COLORS.white);
      }
      if (b.chimney) solid.box(b.x + b.w * 0.25, y0 + b.h + b.roofH * 0.3, b.z + 0.8, 0.9, b.roofH * 0.9, 0.9, 0xb0604a);
    }
    if (b.kind === 'station') {
      // Cream trim at each floor, and a white band along the top.
      solid.box(b.x, y0 + b.floorH - 0.2, b.z, b.w + 0.1, 0.35, b.d + 0.1, b.trim);
    }
    if (b.rooftop === 'watertower') {
      const top = y0 + b.h + 0.5;
      for (const [lx, lz] of [
        [-1, -1],
        [1, -1],
        [1, 1],
        [-1, 1],
      ])
        solid.box(b.x + 3 + lx * 1.1, top, b.z - 2 + lz * 1.1, 0.25, 2.2, 0.25, 0x6a4a3a);
      solid.cyl(b.x + 3, top + 2.2, b.z - 2, 1.7, 2.6, 0xa0704a, 14);
      solid.cone(b.x + 3, top + 4.8, b.z - 2, 1.9, 1.2, 0x7a5a48, 14);
    } else if (b.rooftop === 'vents') {
      solid.box(b.x - 3, y0 + b.h + 0.5, b.z + 2, 2.4, 1.2, 1.8, 0xb8c0c8);
      solid.box(b.x + 3.5, y0 + b.h + 0.5, b.z - 3, 1.4, 0.9, 1.4, 0xa8b0b8);
    }
  }

  // Windows: a white frame with the glass standing just proud of it.
  for (const w of city.windows) {
    const y = KERB + w.y;
    const ry = Math.atan2(w.nx, w.nz);
    solid.add(SHAPES.box(), w.x + w.nx * 0.04, y, w.z + w.nz * 0.04, w.w + 0.32, w.h + 0.32, 0.12, COLORS.white, ry);
    solid.add(SHAPES.box(), w.x + w.nx * 0.13, y - w.h / 2 - 0.18, w.z + w.nz * 0.13, w.w + 0.5, 0.12, 0.3, COLORS.white, ry);
    glassFor().add(SHAPES.box(), w.x + w.nx * 0.09, y, w.z + w.nz * 0.09, w.w, w.h, 0.08, COLORS.glass, ry);
  }
  for (const d of city.doors) {
    const ry = Math.atan2(d.nx, d.nz);
    solid.add(SHAPES.box(), d.x + d.nx * 0.04, KERB + d.h / 2 + 0.1, d.z + d.nz * 0.04, d.w + 0.4, d.h + 0.2, 0.12, COLORS.white, ry);
    solid.add(SHAPES.box(), d.x + d.nx * 0.09, KERB + d.h / 2, d.z + d.nz * 0.09, d.w, d.h, 0.1, d.color, ry);
    const tx = -d.nz;
    const tz = d.nx;
    solid.ball(d.x + d.nx * 0.18 + tx * d.w * 0.32, KERB + d.h * 0.48, d.z + d.nz * 0.18 + tz * d.w * 0.32, 0.07, 0xf2c21b);
    // A step.
    solid.add(SHAPES.box(), d.x + d.nx * 0.4, KERB + 0.07, d.z + d.nz * 0.4, d.w + 0.8, 0.14, 0.8, COLORS.stone, ry);
  }
  for (const a of city.awnings) {
    const ry = Math.atan2(a.nx, a.nz);
    const n = 9;
    const tx = -a.nz;
    const tz = a.nx;
    const sw = a.w / n;
    for (let k = 0; k < n; k++) {
      const u = -a.w / 2 + sw * (k + 0.5);
      const col = a.stripes && k % 2 ? COLORS.white : a.color;
      solid.add(SHAPES.box(), a.x + tx * u + a.nx * 0.85, KERB + 2.75, a.z + tz * u + a.nz * 0.85, sw, 0.08, 1.8, col, ry, 0.38);
      solid.add(SHAPES.box(), a.x + tx * u + a.nx * 1.68, KERB + 2.28, a.z + tz * u + a.nz * 1.68, sw, 0.36, 0.06, col, ry);
    }
  }
  for (const s of city.signs) {
    const ry = Math.atan2(s.nx, s.nz);
    const tx = -s.nz;
    const tz = s.nx;
    solid.add(SHAPES.box(), s.x, KERB + 3.65, s.z, s.w, 0.85, 0.16, s.color, ry);
    // Squiggly white "letters".
    for (let k = 0; k < 5; k++) {
      const u = -2.4 + k * 1.2;
      solid.add(SHAPES.box(), s.x + tx * u + s.nx * 0.09, KERB + 3.65, s.z + tz * u + s.nz * 0.09, 0.7, 0.36 + (k % 2) * 0.12, 0.04, COLORS.white, ry);
    }
  }

  /* --------------------------------------------------------------- trees --- */

  for (const t of city.trees) {
    const y0 = groundY(t.x, t.z);
    solid.cyl(t.x, y0, t.z, 0.26, t.h * 0.5, COLORS.trunk, 7);
    if (t.shape === 'cone') {
      const dark = shade(t.color, 0.82);
      solid.cone(t.x, y0 + t.h * 0.28, t.z, t.r * 1.05, t.h * 0.55, dark, 9);
      solid.cone(t.x, y0 + t.h * 0.55, t.z, t.r * 0.8, t.h * 0.5, t.color, 9);
    } else {
      solid.blob(t.x, y0 + t.h * 0.66, t.z, t.r, t.color, 0.92);
      solid.add(SHAPES.gem(), t.x + t.r * 0.55, y0 + t.h * 0.55, t.z + t.r * 0.2, t.r * 1.3, t.r * 1.2, t.r * 1.3, shade(t.color, 1.08));
      solid.add(SHAPES.gem(), t.x - t.r * 0.45, y0 + t.h * 0.58, t.z - t.r * 0.3, t.r * 1.25, t.r * 1.15, t.r * 1.25, shade(t.color, 0.9));
    }
  }

  /* --------------------------------------------------------------- lamps --- */

  for (const l of city.lamps) {
    solid.cyl(l.x, KERB, l.z, 0.09, 4.2, 0x3f4f5f, 6);
    solid.box(l.x + l.nx * 0.3, KERB + 4.1, l.z + l.nz * 0.3, 0.12 + Math.abs(l.nx) * 0.5, 0.1, 0.12 + Math.abs(l.nz) * 0.5, 0x3f4f5f);
    bulbs.box(l.x + l.nx * 0.55, KERB + 3.85, l.z + l.nz * 0.55, 0.36, 0.26, 0.36, 0xfff1c0);
  }

  /* --------------------------------------------------------------- props --- */

  for (const p of city.props) addProp(p);

  function at(p, lx, lz) {
    const c = Math.cos(p.rot || 0);
    const s = Math.sin(p.rot || 0);
    return [p.x + lx * c + lz * s, p.z - lx * s + lz * c];
  }
  function pbox(p, lx, y, lz, w, h, d, color) {
    const [x, z] = at(p, lx, lz);
    solid.box(x, y, z, w, h, d, color, p.rot || 0);
  }

  function addProp(p) {
    const y0 = p.y ?? groundY(p.x, p.z);
    const nz = p.nz ?? -1; // which way a sign or door on a wall faces
    switch (p.type) {
      case 'flowers': {
        solid.box(p.x, y0, p.z, p.w, 0.22, p.d, COLORS.soil);
        const n = Math.max(3, Math.round(p.w * 1.6));
        for (let k = 0; k < n; k++) {
          const fx = p.x - p.w / 2 + (p.w * (k + 0.5)) / n;
          const fz = p.z + (k % 2 ? 0.25 : -0.25) * p.d;
          solid.blob(fx, y0 + 0.32, fz, 0.22, 0x5aae52);
          solid.add(SHAPES.gem(), fx, y0 + 0.55, fz, 0.32, 0.22, 0.32, k % 3 === 2 ? COLORS.white : p.color);
        }
        break;
      }
      case 'postbox':
        solid.cyl(p.x, y0, p.z, 0.05, 1.0, 0x6a4a3a, 5);
        solid.box(p.x, y0 + 1.0, p.z, 0.45, 0.35, 0.3, p.color);
        break;
      case 'bin':
        solid.box(p.x, y0, p.z, 0.7, 1.0, 0.7, p.color);
        solid.box(p.x, y0 + 1.0, p.z, 0.76, 0.08, 0.76, shade(p.color, 0.75));
        break;
      case 'washing': {
        for (const s of [-2, 2]) solid.cyl(p.x + s, y0, p.z, 0.05, 1.9, 0x8a8a8a, 5);
        solid.box(p.x, y0 + 1.85, p.z, 4, 0.03, 0.03, 0xdddddd);
        const cols = [0xf25a7a, 0x3f8fd2, 0xffffff, 0xf2d03b];
        for (let k = 0; k < 4; k++) solid.box(p.x - 1.5 + k, y0 + 1.25, p.z, 0.6, 0.6, 0.05, cols[k]);
        break;
      }
      case 'hedge':
        solid.box(p.x, y0, p.z, p.w, p.h, p.d, 0x5aa04e);
        break;
      case 'bench':
        pbox(p, 0, y0 + 0.42, 0, 1.6, 0.08, 0.45, COLORS.wood);
        pbox(p, 0, y0 + 0.5, 0.22, 1.6, 0.45, 0.07, COLORS.wood);
        for (const s of [-0.7, 0.7]) pbox(p, s, y0, 0, 0.08, 0.42, 0.4, 0x3f4f5f);
        break;
      case 'cupcake':
        solid.cyl(p.x, y0, p.z, 1.6, 1.4, 0xf29cc2, 14);
        solid.blob(p.x, y0 + 1.8, p.z, 1.8, 0xfff4e8, 0.65);
        solid.ball(p.x, y0 + 2.8, p.z, 0.4, 0xe2504a);
        break;
      case 'teddy':
        solid.blob(p.x, y0 + 1.1, p.z, 1.2, 0xb07a4a);
        solid.blob(p.x, y0 + 2.6, p.z, 0.85, 0xb07a4a);
        for (const s of [-1, 1]) solid.ball(p.x + s * 0.65, y0 + 3.25, p.z, 0.3, 0x8a5a3a);
        solid.ball(p.x, y0 + 2.5, p.z - 0.75, 0.3, 0xe8c49a);
        solid.add(SHAPES.box(), p.x, y0 + 1.95, p.z - 0.3, 1.0, 0.25, 0.9, 0xe2504a);
        break;
      case 'cone':
        if (p.y != null) {
          // An ice cream on a roof.
          solid.add(SHAPES.cone(12), p.x, y0 + 1.4, p.z, 1.8, 2.8, 1.8, 0xe0b070, 0, Math.PI);
          solid.ball(p.x, y0 + 3.2, p.z, 1.1, 0xf29cc2);
          solid.ball(p.x, y0 + 4.2, p.z, 0.85, 0xa8e0c8);
          solid.ball(p.x, y0 + 5.0, p.z, 0.25, 0xe2504a);
        } else {
          // A traffic cone.
          solid.cone(p.x, y0, p.z, 0.3, 0.8, 0xf28a3b, 10);
          solid.cyl(p.x, y0 + 0.35, p.z, 0.2, 0.14, COLORS.white, 10);
        }
        break;
      case 'lolly':
        solid.cyl(p.x, y0, p.z, 0.15, 2.4, COLORS.white, 6);
        solid.add(SHAPES.cyl(18), p.x, y0 + 3.6, p.z, 3, 0.4, 3, 0xf25a7a, 0, Math.PI / 2);
        solid.add(SHAPES.torus(0.9, 0.2), p.x, y0 + 3.6, p.z - 0.2, 1, 1, 1, COLORS.white);
        break;
      case 'teacup':
        solid.cyl(p.x, y0, p.z, 2.0, 0.2, COLORS.white, 16);
        solid.cyl(p.x, y0 + 0.2, p.z, 1.4, 1.8, COLORS.white, 16);
        solid.cyl(p.x, y0 + 1.9, p.z, 1.2, 0.12, 0x7a4a2a, 16);
        solid.add(SHAPES.torus(0.55, 0.15), p.x + 1.5, y0 + 1.1, p.z, 1, 1, 1, COLORS.white, Math.PI / 2);
        break;
      case 'donut':
        solid.add(SHAPES.torus(1.3, 0.65), p.x, y0 + 2.0, p.z, 1, 1, 1, 0xe0b070);
        solid.add(SHAPES.torus(1.3, 0.55), p.x, y0 + 2.0, p.z - 0.18, 1, 1, 1, 0xf29cc2);
        break;
      case 'clocktower': {
        const top = y0;
        solid.box(p.x, top, p.z, 6, 13, 6, 0xf4e6cf);
        solid.box(p.x, top + 13, p.z, 6.6, 0.5, 6.6, COLORS.white);
        for (const [nx, nz] of [
          [0, -1],
          [0, 1],
          [1, 0],
          [-1, 0],
        ]) {
          const ry = Math.atan2(nx, nz);
          solid.add(SHAPES.cyl(20), p.x + nx * 3.05, top + 10, p.z + nz * 3.05, 3.4, 0.12, 3.4, COLORS.white, ry, Math.PI / 2);
          solid.add(SHAPES.box(), p.x + nx * 3.15, top + 10.5, p.z + nz * 3.15, 0.18, 1.1, 0.06, 0x2a2a30, ry);
          solid.add(SHAPES.box(), p.x + nx * 3.15, top + 10, p.z + nz * 3.15, 0.8, 0.15, 0.06, 0x2a2a30, ry);
        }
        solid.add(SHAPES.cone(4), p.x, top + 13.5 + 2.5, p.z, 8.4, 5, 8.4, 0x4f8a5b, Math.PI / 4);
        solid.ball(p.x, top + 18.8, p.z, 0.4, 0xf2c21b);
        break;
      }
      case 'fountain': {
        const r = p.r;
        solid.cyl(p.x, y0, p.z, r, 0.7, COLORS.stone, 24);
        ground.disc(p.x, p.z, r - 0.3, y0 + 0.62, COLORS.water);
        solid.cyl(p.x, y0, p.z, 0.4, p.small ? 1.4 : 2.2, COLORS.stone, 10);
        solid.cyl(p.x, y0 + (p.small ? 1.4 : 2.2), p.z, p.small ? 0.9 : 1.4, 0.3, COLORS.stone, 14);
        const jet = new Mesh(SHAPES.cone(10), new MeshLambertMaterial({ color: 0xd8f2ff, transparent: true, opacity: 0.7 }));
        const h = p.small ? 1.6 : 2.4;
        jet.position.set(p.x, y0 + (p.small ? 1.7 : 2.5) + h / 2, p.z);
        jet.scale.set(0.35, h, 0.35);
        scene.add(jet);
        anim.push((t) => {
          const s = 1 + Math.sin(t * 5 + p.x) * 0.08;
          jet.scale.set(0.35 * s, h * (2 - s), 0.35 * s);
        });
        break;
      }
      case 'baydoor': {
        solid.box(p.x, KERB, p.z, p.w + 0.6, p.h + 0.4, 0.3, COLORS.white);
        solid.box(p.x, KERB, p.z + nz * 0.1, p.w, p.h, 0.3, 0xd23a2e);
        for (let k = 1; k < 5; k++) solid.box(p.x, KERB + k * (p.h / 5), p.z + nz * 0.27, p.w, 0.06, 0.04, 0xa82a22);
        for (let k = 0; k < 4; k++) solid.box(p.x - p.w / 2 + 0.9 + k * ((p.w - 1.8) / 3), KERB + p.h * 0.62, p.z + nz * 0.28, 1.0, 0.7, 0.04, COLORS.glass);
        break;
      }
      case 'bell':
        solid.box(p.x, y0 + 0.9, p.z - nz * 0.2, 0.15, 0.5, 0.6, 0x6a4a3a);
        solid.add(SHAPES.cone(14), p.x, y0 + 0.35, p.z + nz * 0.2, 1.2, 1.0, 1.2, 0xf2c21b);
        solid.ball(p.x, y0 + 0.82, p.z + nz * 0.2, 0.32, 0xf2c21b);
        solid.ball(p.x, y0 - 0.15, p.z + nz * 0.2, 0.15, 0xc89a1b);
        break;
      case 'stationsign':
        solid.box(p.x, y0, p.z, 14, 1.2, 0.2, COLORS.white);
        for (let k = 0; k < 9; k++) solid.box(p.x - 5.6 + k * 1.4, y0 + 0.25, p.z + nz * 0.12, 0.9, 0.7, 0.05, 0xc8463a);
        break;
      case 'hosetower':
        solid.box(p.x, KERB, p.z, 5, p.h, 5, 0xc8463a);
        solid.box(p.x, KERB + p.h, p.z, 5.6, 0.6, 5.6, 0xfff4e0);
        for (let k = 1; k < 4; k++) solid.box(p.x, KERB + k * 4, p.z + nz * 2.55, 1.0, 1.4, 0.12, COLORS.glass);
        break;
      case 'flagpole': {
        solid.cyl(p.x, y0, p.z, 0.08, p.h, 0xdddddd, 6);
        const flag = new Mesh(SHAPES.box(), new MeshLambertMaterial({ color: 0xd8252b }));
        flag.scale.set(2.2, 1.3, 0.05);
        flag.position.set(p.x + 1.15, y0 + p.h - 0.8, p.z);
        scene.add(flag);
        anim.push((t) => {
          flag.rotation.y = Math.sin(t * 2.4) * 0.25;
          flag.position.x = p.x + Math.cos(flag.rotation.y) * 1.15;
          flag.position.z = p.z - Math.sin(flag.rotation.y) * 1.15;
        });
        break;
      }
      case 'hydrant':
        solid.cyl(p.x, y0, p.z, 0.22, 0.7, 0xe2382e, 10);
        solid.ball(p.x, y0 + 0.72, p.z, 0.24, 0xe2382e);
        solid.add(SHAPES.cyl(8), p.x, y0 + 0.45, p.z, 0.16, 0.6, 0.16, 0xf2c21b, 0, 0, Math.PI / 2);
        break;
      case 'heartsign': {
        solid.box(p.x, y0, p.z, 4, 3, 0.2, COLORS.white);
        solid.ball(p.x - 0.45, y0 + 1.9, p.z + nz * 0.15, 0.62, 0xe2504a);
        solid.ball(p.x + 0.45, y0 + 1.9, p.z + nz * 0.15, 0.62, 0xe2504a);
        solid.add(SHAPES.box(), p.x, y0 + 1.35, p.z + nz * 0.15, 1.15, 1.15, 0.3, 0xe2504a, 0, 0, Math.PI / 4);
        break;
      }
      case 'parked': {
        const v = buildVehicle(p.vehicle);
        v.position.set(p.x, y0, p.z);
        v.rotation.y = -p.heading;
        scene.add(v);
        break;
      }
      case 'bluelamp':
        bulbs.box(p.x, y0, p.z, 0.6, 0.6, 0.6, 0x5a9aff);
        break;
      case 'schoolclock':
        solid.add(SHAPES.cyl(20), p.x, y0, p.z + nz * 0.1, 2.2, 0.12, 2.2, COLORS.white, 0, Math.PI / 2);
        solid.add(SHAPES.box(), p.x, y0 + 0.35, p.z + nz * 0.2, 0.14, 0.75, 0.05, 0x2a2a30);
        solid.add(SHAPES.box(), p.x + 0.25, y0, p.z + nz * 0.2, 0.6, 0.12, 0.05, 0x2a2a30);
        break;
      case 'goal':
        for (const s of [-1.8, 1.8]) pbox(p, s, y0, 0, 0.12, 1.8, 0.12, COLORS.white);
        pbox(p, 0, y0 + 1.8, 0, 3.72, 0.12, 0.12, COLORS.white);
        pbox(p, 0, y0 + 0.9, 0.8, 3.6, 1.8, 0.04, 0xe8e8e8);
        break;
      case 'slide': {
        pbox(p, -1.5, y0, 0, 0.8, 2.4, 0.8, 0xf2c21b);
        pbox(p, -1.5, y0 + 2.4, 0, 1.0, 0.12, 1.0, 0x3f8fd2);
        const [x, z] = at(p, 0.3, 0);
        solid.add(SHAPES.box(), x, y0 + 1.25, z, 3.6, 0.12, 0.9, 0xe2504a, (p.rot || 0) + 0, 0, -0.6);
        break;
      }
      case 'swings':
        for (const s of [-1.8, 1.8]) {
          pbox(p, s, y0, -0.6, 0.12, 2.6, 0.12, 0x3f8fd2);
          pbox(p, s, y0, 0.6, 0.12, 2.6, 0.12, 0x3f8fd2);
        }
        pbox(p, 0, y0 + 2.5, 0, 3.8, 0.14, 0.14, 0x3f8fd2);
        for (const s of [-0.8, 0.8]) {
          pbox(p, s, y0 + 0.5, 0, 0.6, 0.08, 0.3, 0xe2504a);
          pbox(p, s - 0.25, y0 + 0.55, 0, 0.03, 1.95, 0.03, 0x888888);
          pbox(p, s + 0.25, y0 + 0.55, 0, 0.03, 1.95, 0.03, 0x888888);
        }
        break;
      case 'stall': {
        solid.box(p.x, y0, p.z, 3.6, 0.9, 2.0, COLORS.wood);
        for (const [sx, sz] of [
          [-1.8, -1.1],
          [1.8, -1.1],
          [1.8, 1.1],
          [-1.8, 1.1],
        ])
          solid.box(p.x + sx, y0, p.z + sz, 0.1, 2.5, 0.1, 0xeeeeee);
        for (let k = 0; k < 6; k++) solid.box(p.x - 1.75 + k * 0.7 + 0.35, y0 + 2.5, p.z, 0.7, 0.2, 2.6, k % 2 ? COLORS.white : p.color);
        const goodsCol = { apples: 0xe2382e, flowers: 0xf25a7a, cheese: 0xf2d03b, fish: 0x9fc3d9, cakes: 0xf29cc2, veg: 0x4fb06a, toys: 0x3f8fd2, bread: 0xd8a060, honey: 0xf2a93b }[p.goods];
        for (let k = 0; k < 8; k++) solid.ball(p.x - 1.4 + (k % 4) * 0.9, y0 + 1.05, p.z - 0.4 + Math.floor(k / 4) * 0.8, 0.28, goodsCol);
        break;
      }
      case 'frame': {
        const fh = 3.2;
        for (let f = 0; f <= p.floors; f++) solid.box(p.x, KERB + f * fh, p.z, p.w, 0.3, p.d, 0xc8c4bc);
        for (let i = 0; i <= 3; i++) {
          for (let j = 0; j <= 2; j++) {
            const x = p.x - p.w / 2 + 0.3 + (i * (p.w - 0.6)) / 3;
            const z = p.z - p.d / 2 + 0.3 + (j * (p.d - 0.6)) / 2;
            solid.box(x, KERB, z, 0.4, p.floors * fh, 0.4, 0xb8b4ac);
          }
        }
        // Yellow scaffolding along the front.
        for (let k = 0; k <= 6; k++) solid.box(p.x - p.w / 2 + k * (p.w / 6), KERB, p.z - p.d / 2 - 1.2, 0.1, p.floors * fh + 1, 0.1, COLORS.yellow);
        for (let f = 1; f <= p.floors; f++) solid.box(p.x, KERB + f * fh, p.z - p.d / 2 - 1.2, p.w, 0.1, 0.1, COLORS.yellow);
        break;
      }
      case 'crane': {
        solid.box(p.x, KERB, p.z, 3.2, 1, 3.2, 0x8a8a8a);
        solid.box(p.x, KERB + 1, p.z, 1.8, p.h - 1, 1.8, COLORS.yellow);
        solid.box(p.x, KERB + p.h, p.z, 2.6, 2.2, 2.6, COLORS.yellow);
        const jib = new Group();
        const jb = new Builder();
        jb.box(5, 0, 0, 22, 0.9, 1.1, COLORS.yellow);
        jb.box(-6, -0.4, 0, 4, 1.6, 2, 0x7a7a7a);
        jb.box(12, -9, 0, 0.05, 9, 0.05, 0x444444);
        jb.box(12, -9.6, 0, 0.9, 0.6, 0.6, 0xe2504a);
        jb.box(12, -12.4, 0, 2.4, 2.4, 2.4, 0x6fa8dc);
        const jm = new Mesh(jb.geometry(), new MeshLambertMaterial({ vertexColors: true }));
        jm.castShadow = true;
        jib.add(jm);
        jib.position.set(p.x, KERB + p.h + 2.2, p.z);
        scene.add(jib);
        anim.push((t) => (jib.rotation.y = Math.sin(t * 0.08) * 1.4 + 0.6));
        break;
      }
      case 'digger': {
        pbox(p, 0, y0, 0, 2.6, 0.7, 3.4, 0x3a3a40);
        pbox(p, 0, y0 + 0.7, 0.3, 2.4, 1.4, 2.4, COLORS.yellow);
        pbox(p, 0, y0 + 2.1, 0.5, 1.6, 1.2, 1.4, COLORS.yellow);
        pbox(p, 0, y0 + 2.2, 0.0, 1.5, 0.9, 0.05, COLORS.glass);
        const [x, z] = at(p, 0, -2.2);
        solid.add(SHAPES.box(), x, y0 + 2.4, z, 0.5, 0.5, 3.2, COLORS.yellow, p.rot || 0, -0.5);
        const [bx, bz] = at(p, 0, -3.8);
        solid.box(bx, y0, bz, 1.4, 0.8, 0.9, 0x6a6a70, p.rot || 0);
        break;
      }
      case 'sandpile':
        solid.cone(p.x, y0, p.z, p.r, 2.4, 0xe8c88a, 12);
        break;
      case 'skip':
        pbox(p, 0, y0, 0, 4, 1.5, 2.2, COLORS.yellow);
        pbox(p, 0, y0 + 1.45, 0, 3.6, 0.1, 1.8, 0x6a5a48);
        break;
      case 'silo':
        solid.cyl(p.x, y0, p.z, 3, p.h, 0xd8dde3, 18);
        solid.ball(p.x, y0 + p.h, p.z, 3, 0xb8c0c8, 18, 9);
        for (let k = 1; k < 4; k++) solid.cyl(p.x, y0 + k * (p.h / 4), p.z, 3.05, 0.2, 0x9aa2aa, 18);
        break;
      case 'hay':
        solid.add(SHAPES.cyl(14), p.x, y0 + p.r, p.z, p.r * 2, 1.7, p.r * 2, 0xe8c45a, 0.4, 0, Math.PI / 2);
        solid.add(SHAPES.cyl(14), p.x, y0 + p.r, p.z, p.r * 1.4, 1.74, p.r * 1.4, 0xd8b04a, 0.4, 0, Math.PI / 2);
        break;
      case 'tractor':
        pbox(p, 0, y0 + 0.6, 0.2, 1.6, 1.0, 3.2, 0x4fae4a);
        pbox(p, 0, y0 + 1.6, 0.8, 1.5, 1.4, 1.4, 0x4fae4a);
        pbox(p, 0, y0 + 1.75, 0.8, 1.55, 0.9, 1.3, COLORS.glass);
        pbox(p, 0, y0 + 3.0, 0.8, 1.7, 0.1, 1.6, 0xf2f2f2);
        for (const s of [-1, 1]) {
          const [x, z] = at(p, s * 1.0, 1.0);
          solid.add(SHAPES.cyl(14), x, y0 + 0.85, z, 1.7, 0.6, 1.7, 0x2a2a30, p.rot || 0, 0, Math.PI / 2);
          solid.add(SHAPES.cyl(10), x, y0 + 0.85, z, 0.9, 0.64, 0.9, 0xf2c21b, p.rot || 0, 0, Math.PI / 2);
          const [fx, fz] = at(p, s * 0.85, -1.1);
          solid.add(SHAPES.cyl(12), fx, y0 + 0.5, fz, 1.0, 0.4, 1.0, 0x2a2a30, p.rot || 0, 0, Math.PI / 2);
        }
        break;
      case 'fence': {
        const x0 = p.x - p.w / 2;
        const x1 = p.x + p.w / 2;
        const z0 = p.z - p.d / 2;
        const z1 = p.z + p.d / 2;
        for (let x = x0; x <= x1 + 0.01; x += 3) {
          solid.box(x, y0, z0, 0.15, 1.1, 0.15, COLORS.white);
          solid.box(x, y0, z1, 0.15, 1.1, 0.15, COLORS.white);
        }
        for (let z = z0; z <= z1 + 0.01; z += 3) {
          solid.box(x0, y0, z, 0.15, 1.1, 0.15, COLORS.white);
          solid.box(x1, y0, z, 0.15, 1.1, 0.15, COLORS.white);
        }
        for (const h of [0.5, 0.95]) {
          solid.box(p.x, y0 + h, z0, p.w, 0.1, 0.06, COLORS.white);
          solid.box(p.x, y0 + h, z1, p.w, 0.1, 0.06, COLORS.white);
          solid.box(x0, y0 + h, p.z, 0.06, 0.1, p.d, COLORS.white);
          solid.box(x1, y0 + h, p.z, 0.06, 0.1, p.d, COLORS.white);
        }
        break;
      }
      case 'windmill': {
        solid.cyl(p.x, y0, p.z, 2.2, 1, 0xd8d0c4, 12);
        solid.add(SHAPES.cyl(12), p.x, y0 + p.h / 2, p.z, 3.4, p.h, 3.4, COLORS.white);
        solid.cone(p.x, y0 + p.h, p.z, 2.0, 2.4, 0x3f6f8f, 12);
        const blades = new Group();
        const bb = new Builder();
        for (let k = 0; k < 4; k++) {
          const a = (k * Math.PI) / 2;
          bb.add(SHAPES.box(), Math.cos(a) * 3.4, Math.sin(a) * 3.4, 0, 6.6, 0.18, 0.1, COLORS.wood, 0, 0, a);
          bb.add(SHAPES.box(), Math.cos(a) * 3.8 - Math.sin(a) * 0.55, Math.sin(a) * 3.8 + Math.cos(a) * 0.55, 0, 5.0, 1.0, 0.06, COLORS.white, 0, 0, a);
        }
        bb.ball(0, 0, 0, 0.5, 0xe2504a);
        const bm = new Mesh(bb.geometry(), new MeshLambertMaterial({ vertexColors: true }));
        bm.castShadow = true;
        blades.add(bm);
        blades.position.set(p.x, y0 + p.h + 0.6, p.z - 1.9);
        scene.add(blades);
        anim.push((t) => (blades.rotation.z = t * 0.7));
        break;
      }
      case 'cow': {
        pbox(p, 0, y0 + 0.7, 0, 1.0, 0.9, 1.9, COLORS.white);
        pbox(p, 0.3, y0 + 1.25, 0.2, 0.42, 0.38, 0.7, 0x2a2a30);
        pbox(p, -0.2, y0 + 0.95, -0.4, 0.62, 0.4, 0.5, 0x2a2a30);
        pbox(p, 0, y0 + 1.1, -1.15, 0.7, 0.7, 0.6, COLORS.white);
        pbox(p, 0, y0 + 1.05, -1.5, 0.6, 0.35, 0.12, 0xf2b0b8);
        for (const [sx, sz] of [
          [-0.35, -0.7],
          [0.35, -0.7],
          [-0.35, 0.7],
          [0.35, 0.7],
        ])
          pbox(p, sx, y0, sz, 0.2, 0.72, 0.2, COLORS.white);
        break;
      }
      case 'duck': {
        const db = new Builder();
        db.blob(0, 0.2, 0, 0.32, 0xfff4b0, 0.7);
        db.blob(0, 0.45, -0.25, 0.18, 0xfff4b0);
        db.add(SHAPES.box(), 0, 0.43, -0.45, 0.12, 0.06, 0.16, 0xf28a3b);
        const duck = new Mesh(db.geometry(), new MeshLambertMaterial({ vertexColors: true }));
        scene.add(duck);
        const R = Math.hypot(p.x - p.pond.x, p.z - p.pond.z);
        const a0 = Math.atan2(p.z - p.pond.z, p.x - p.pond.x);
        anim.push((t) => {
          const a = a0 + t * 0.15;
          duck.position.set(p.pond.x + Math.cos(a) * R, KERB + 0.02 + Math.sin(t * 2 + a0) * 0.03, p.pond.z + Math.sin(a) * R);
          duck.rotation.y = -a + Math.PI;
        });
        break;
      }
      case 'picnic':
        pbox(p, 0, y0 + 0.75, 0, 1.0, 0.08, 2.0, COLORS.wood);
        for (const s of [-0.75, 0.75]) pbox(p, s, y0 + 0.42, 0, 0.35, 0.06, 2.0, COLORS.wood);
        for (const s of [-0.6, 0.6]) pbox(p, 0, y0, s, 1.6, 0.42, 0.08, COLORS.wood);
        pbox(p, 0, y0 + 0.83, 0, 0.9, 0.02, 0.9, 0xe2504a);
        break;
      case 'bbq':
        for (const a of [0, 2.1, 4.2]) solid.box(p.x + Math.cos(a) * 0.25, y0, p.z + Math.sin(a) * 0.25, 0.05, 0.6, 0.05, 0x2a2a30);
        solid.add(SHAPES.sphere(12, 8), p.x, y0 + 0.75, p.z, 0.8, 0.6, 0.8, 0x2a2a30);
        break;
      case 'roundabout': {
        solid.cyl(p.x, y0, p.z, 2.2, 0.25, 0xe2504a, 18);
        solid.cyl(p.x, y0 + 0.25, p.z, 0.12, 1.0, 0xf2c21b, 8);
        break;
      }
      case 'sandpit':
        solid.box(p.x, y0, p.z, p.r * 2, 0.3, p.r * 2, COLORS.wood);
        solid.box(p.x, y0 + 0.01, p.z, p.r * 2 - 0.5, 0.3, p.r * 2 - 0.5, COLORS.sand);
        solid.cone(p.x + 0.8, y0 + 0.3, p.z - 0.6, 0.6, 0.7, 0xe8c88a, 8);
        break;
      case 'seesaw':
        pbox(p, 0, y0, 0, 0.3, 0.6, 0.3, 0x3f8fd2);
        {
          const [x, z] = at(p, 0, 0);
          solid.add(SHAPES.box(), x, y0 + 0.65, z, 3.6, 0.1, 0.35, 0xf2c21b, p.rot || 0, 0, 0.2);
        }
        break;
      case 'hut': {
        solid.box(p.x, y0, p.z, 3.2, 3, 3, COLORS.white);
        for (let k = 0; k < 4; k++) solid.box(p.x - 1.2 + k * 0.8, y0, p.z - 1.52, 0.4, 3, 0.05, p.color);
        solid.add(SHAPES.gable(), p.x, y0 + 3, p.z, 3.2, 1.2, 3, COLORS.white, Math.PI / 2);
        solid.add(SHAPES.roof(), p.x, y0 + 2.95, p.z, 3.6, 1.35, 3.8, p.color, Math.PI / 2);
        solid.box(p.x, y0, p.z - 1.56, 1.2, 2.2, 0.05, shade(p.color, 0.7));
        break;
      }
      case 'umbrella':
        solid.cyl(p.x, y0, p.z, 0.05, 2.2, COLORS.white, 5);
        solid.cone(p.x, y0 + 2.0, p.z, 1.6, 0.6, p.color, 10);
        solid.box(p.x + 1, y0, p.z + 0.8, 1.0, 0.04, 1.9, shade(p.color, 1.2));
        break;
      case 'lifeguard':
        for (const [sx, sz] of [
          [-0.8, -0.8],
          [0.8, -0.8],
          [0.8, 0.8],
          [-0.8, 0.8],
        ])
          solid.box(p.x + sx, y0, p.z + sz, 0.15, 2.4, 0.15, COLORS.white);
        solid.box(p.x, y0 + 2.4, p.z, 2.2, 1.6, 2.2, 0xe2382e);
        solid.box(p.x, y0 + 2.8, p.z - 1.11, 1.6, 0.6, 0.04, COLORS.glass);
        solid.add(SHAPES.roof(), p.x, y0 + 4.0, p.z, 2.6, 0.8, 2.6, COLORS.white);
        break;
      case 'sandcastle':
        solid.box(p.x, y0, p.z, 2, 0.8, 2, 0xe8c88a);
        for (const [sx, sz] of [
          [-1, -1],
          [1, -1],
          [1, 1],
          [-1, 1],
        ])
          solid.cyl(p.x + sx, y0, p.z + sz, 0.4, 1.3, 0xe8c88a, 8);
        solid.cone(p.x, y0 + 0.8, p.z, 0.6, 1.0, 0xe8c88a, 8);
        solid.box(p.x, y0 + 1.8, p.z, 0.02, 0.6, 0.02, 0x888888);
        solid.box(p.x + 0.2, y0 + 2.2, p.z, 0.4, 0.25, 0.02, 0xe2504a);
        break;
      case 'pier': {
        solid.box(p.x, 0.25, p.z, p.w, 0.25, p.d, COLORS.wood);
        for (let z = p.z - p.d / 2 + 2; z < p.z + p.d / 2; z += 5) {
          for (const sx of [-1, 1]) {
            solid.box(p.x + sx * (p.w / 2 - 0.2), -2, z, 0.4, 2.3, 0.4, 0x7a5a3a);
            solid.box(p.x + sx * (p.w / 2 - 0.1), 0.5, z, 0.15, 1.1, 0.15, COLORS.white);
          }
        }
        for (const sx of [-1, 1]) solid.box(p.x + sx * (p.w / 2 - 0.1), 1.45, p.z + 1.5, 0.1, 0.1, p.d - 9, COLORS.white);
        break;
      }
      case 'pierhead': {
        solid.cyl(p.x, 0.25, p.z, p.r, 0.25, COLORS.wood, 40);
        const n = 34;
        for (let k = 0; k < n; k++) {
          const a = (k / n) * Math.PI * 2;
          const x = p.x + Math.cos(a) * (p.r - 0.2);
          const z = p.z + Math.sin(a) * (p.r - 0.2);
          solid.box(x, -2, z, 0.4, 2.3, 0.4, 0x7a5a3a);
          // Railings all round, except where the pier comes in (the north side).
          if (z < p.z && Math.abs(x - p.x) < p.neck / 2 + 0.5) continue;
          solid.box(x, 0.5, z, 0.15, 1.1, 0.15, COLORS.white);
          const a2 = ((k + 0.5) / n) * Math.PI * 2;
          const len = ((Math.PI * 2 * p.r) / n) * 1.02;
          solid.add(SHAPES.box(), p.x + Math.cos(a2) * (p.r - 0.2), 1.5, p.z + Math.sin(a2) * (p.r - 0.2), len, 0.1, 0.1, COLORS.white, -a2 - Math.PI / 2);
        }
        break;
      }
      case 'lighthouse': {
        const yb = 0.5;
        for (let k = 0; k < 5; k++) {
          const r0 = 2.6 - k * 0.25;
          solid.add(SHAPES.cyl(16), p.x, yb + (k + 0.5) * (p.h / 5), p.z, r0 * 2, p.h / 5, r0 * 2, k % 2 ? COLORS.white : 0xe2382e);
        }
        solid.cyl(p.x, yb + p.h, p.z, 2.0, 0.3, 0x2a2a30, 16);
        solid.cyl(p.x, yb + p.h + 2.4, p.z, 1.6, 0.3, 0x2a2a30, 16);
        solid.cone(p.x, yb + p.h + 2.7, p.z, 1.7, 1.6, 0xe2382e, 16);
        bulbs.cyl(p.x, yb + p.h + 0.3, p.z, 1.2, 2.1, 0xfff1a0, 12);
        break;
      }
      case 'boat': {
        const bb = new Builder();
        bb.box(0, -0.3, 0, 2.2, 1.0, 5, p.color);
        bb.box(0, 0.7, 0, 2.0, 0.1, 4.8, COLORS.white);
        bb.box(0, 0.8, 0.6, 1.2, 1.0, 1.6, COLORS.white);
        bb.box(0, 0.8, 0.6, 1.24, 0.4, 1.0, COLORS.glass);
        bb.cyl(0, 0.8, -1.0, 0.06, 4, 0xdddddd, 5);
        bb.add(SHAPES.gable(), 0, 1.4, -1.6, 0.06, 3.2, 1.6, COLORS.white, Math.PI / 2);
        const boat = new Mesh(bb.geometry(), new MeshLambertMaterial({ vertexColors: true }));
        boat.castShadow = true;
        scene.add(boat);
        anim.push((t) => {
          boat.position.set(p.x + Math.sin(t * 0.05 + p.x) * 6, Math.sin(t * 1.2 + p.x) * 0.15, p.z);
          boat.rotation.set(Math.sin(t * 1.1 + p.z) * 0.06, p.rot + Math.sin(t * 0.05 + p.x) * 0.1, Math.sin(t * 0.9 + p.x) * 0.08);
        });
        break;
      }
      default:
        break;
    }
  }

  /* ---------------------------------------------------------- the sea --- */

  const sea = new Mesh(new PlaneGeometry(3000, 1400), new MeshPhongMaterial({ color: 0x3fb0dc, shininess: 60, specular: 0x88ccee }));
  sea.rotation.x = -Math.PI / 2;
  sea.position.set(0, 0.03, SEA_Z + 700);
  sea.receiveShadow = true;
  scene.add(sea);
  const foam = new Mesh(new PlaneGeometry(3000, 1.4), new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 }));
  foam.rotation.x = -Math.PI / 2;
  foam.position.set(0, 0.05, SEA_Z + 0.4);
  scene.add(foam);
  anim.push((t) => {
    foam.position.z = SEA_Z + 0.2 + Math.sin(t * 0.9) * 0.8;
    foam.material.opacity = 0.55 + Math.sin(t * 0.9 + 1) * 0.25;
  });
  for (const d of city.discs) {
    if (d.kind !== 'pond') continue;
    const pond = new Mesh(new CircleGeometry(d.r, 32), new MeshPhongMaterial({ color: COLORS.water, shininess: 80, specular: 0x99ddff }));
    pond.rotation.x = -Math.PI / 2;
    pond.position.set(d.x, KERB + 0.012, d.z);
    pond.receiveShadow = true;
    scene.add(pond);
  }

  /* ----------------------------------------------- far hills all round --- */

  const hills = new Builder();
  for (let k = 0; k < 70; k++) {
    const a = (k / 70) * Math.PI * 2;
    // Not out to sea (south is +z).
    if (Math.sin(a) > 0.35) continue;
    const r = 520 + ((k * 37) % 9) * 22;
    const s = 70 + ((k * 53) % 7) * 18;
    hills.blob(Math.cos(a) * r, -s * 0.15, Math.sin(a) * r, s, k % 3 ? 0x7cbf62 : 0x6aae58, 0.55);
  }
  // A ring of dark-green woods just outside town.
  for (let k = 0; k < 90; k++) {
    const a = (k / 90) * Math.PI * 2;
    if (Math.sin(a) > 0.5) continue;
    const r = 290 + ((k * 13) % 5) * 12;
    hills.blob(Math.cos(a) * r, 4, Math.sin(a) * r, 16 + ((k * 7) % 4) * 4, 0x5a9f4e, 0.8);
  }
  const hillMesh = new Mesh(hills.geometry(), new MeshLambertMaterial({ vertexColors: true }));
  scene.add(hillMesh);

  /* ------------------------------------------------------- the meshes --- */

  const groundMesh = new Mesh(ground.geometry(), new MeshLambertMaterial({ vertexColors: true }));
  groundMesh.receiveShadow = true;
  scene.add(groundMesh);

  const solidMat = withSeeThrough(new MeshLambertMaterial({ vertexColors: true }), uniforms);
  const solidMesh = new Mesh(solid.geometry(), solidMat);
  solidMesh.castShadow = true;
  solidMesh.receiveShadow = true;
  scene.add(solidMesh);

  const darkMat = withSeeThrough(new MeshPhongMaterial({ vertexColors: true, shininess: 90, specular: 0xffffff }), uniforms);
  const litMat = withSeeThrough(new MeshPhongMaterial({ vertexColors: true, shininess: 90, specular: 0xffffff, emissive: 0xffc870, emissiveIntensity: 0 }), uniforms);
  darkMat.customProgramCacheKey = () => 'seethrough-glass';
  litMat.customProgramCacheKey = () => 'seethrough-glass';
  scene.add(new Mesh(glassDark.geometry(), darkMat));
  scene.add(new Mesh(glassLit.geometry(), litMat));
  const bulbMat = new MeshLambertMaterial({ vertexColors: true, emissive: 0xffe0a0, emissiveIntensity: 0.1 });
  scene.add(new Mesh(bulbs.geometry(), bulbMat));

  // Pools of lamplight on the pavement at night.
  const glowMat = new MeshBasicMaterial({ color: 0xffd890, transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false });
  const glows = new InstancedMesh(new CircleGeometry(2.4, 20), glowMat, city.lamps.length);
  const o = new Object3D();
  city.lamps.forEach((l, k) => {
    o.position.set(l.x + l.nx * 1.4, KERB + 0.03, l.z + l.nz * 1.4);
    o.rotation.set(-Math.PI / 2, 0, 0);
    o.updateMatrix();
    glows.setMatrixAt(k, o.matrix);
  });
  glows.visible = false;
  scene.add(glows);

  return {
    uniforms,
    setNight(n) {
      litMat.emissiveIntensity = n * 1.6;
      bulbMat.emissiveIntensity = 0.1 + n * 2.2;
      glowMat.opacity = n * 0.22;
      glows.visible = n > 0.01;
    },
    update(t, truck) {
      uniforms.uTruck.value.set(truck.x, 0, truck.z);
      for (const f of anim) f(t);
    },
  };
}

function shade(hex, k) {
  const c = new Color(hex);
  c.r = Math.min(1, c.r * k);
  c.g = Math.min(1, c.g * k);
  c.b = Math.min(1, c.b * k);
  return c.getHex();
}
