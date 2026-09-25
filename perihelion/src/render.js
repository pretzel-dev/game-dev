import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { NEUTRAL, posAt, fleetState, rng } from './sim.js';

export const OWNER_COLORS = ['#58b8ff', '#ff6a5a', '#ffb347'];
export const NEUTRAL_COLOR = '#8a90a6';
export const ownerColor = (o) => (o === NEUTRAL ? NEUTRAL_COLOR : OWNER_COLORS[o]);

const SUN_RADIUS = 6;
const MAX_SHIPS = 400;
const MAX_BOOMS = 120;

// ---- Procedural textures ----------------------------------------------------

function canvasTex(w, h, draw, scale = 1) {
  const c = document.createElement('canvas');
  c.width = w * scale;
  c.height = h * scale;
  const g = c.getContext('2d');
  // Draw in w x h coordinates but at `scale` times the pixels, so worlds stay
  // crisp up close.
  g.scale(scale, scale);
  draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const glowTex = canvasTex(128, 128, (g) => {
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.2, 'rgba(255,255,255,0.5)');
  grad.addColorStop(0.5, 'rgba(255,255,255,0.1)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
});

const ringTex = canvasTex(128, 128, (g) => {
  g.strokeStyle = '#fff';
  g.lineWidth = 4;
  g.beginPath();
  g.arc(64, 64, 58, 0, Math.PI * 2);
  g.stroke();
});

/** Fine speckle over a whole texture, so surfaces have grain when close. */
function grain(g, w, h, r, amount) {
  for (let i = 0; i < 6000; i++) {
    g.fillStyle = r() < 0.5 ? `rgba(0,0,0,${amount})` : `rgba(255,255,255,${amount * 0.6})`;
    g.fillRect(r() * w, r() * h, 0.35, 0.35);
  }
}

/** Gas giant: soft horizontal bands. Rocky world: mottled continents and craters. */
function surfaceTex(b) {
  const r = rng(Math.floor(b.hue * 1e6) + b.id);
  const col = new THREE.Color();
  return canvasTex(256, 128, (g, w, h) => {
    drawSurface(g, w, h);
    grain(g, w, h, r, b.giant ? 0.05 : 0.12);
  }, b.kind === 'planet' ? 4 : 2);

  function drawSurface(g, w, h) {
    if (b.home) {
      // A living world: deep oceans, green and ochre continents, ice caps, cloud.
      g.fillStyle = '#1d4f86';
      g.fillRect(0, 0, w, h);
      for (let c = 0; c < 7; c++) {
        const cx = r() * w;
        const cy = h * (0.2 + r() * 0.6);
        for (let i = 0; i < 26; i++) {
          col.setHSL(0.22 + r() * 0.12 - (r() < 0.3 ? 0.14 : 0), 0.45, 0.3 + r() * 0.1);
          g.fillStyle = `#${col.getHexString()}`;
          g.beginPath();
          g.arc((cx + (r() - 0.5) * 50 + w) % w, cy + (r() - 0.5) * 26, 3 + r() * 9, 0, Math.PI * 2);
          g.fill();
        }
      }
      g.fillStyle = 'rgba(240,248,255,0.9)';
      g.fillRect(0, 0, w, 6);
      g.fillRect(0, h - 6, w, 6);
      g.fillStyle = 'rgba(255,255,255,0.35)';
      for (let i = 0; i < 40; i++) {
        g.beginPath();
        g.ellipse(r() * w, r() * h, 8 + r() * 20, 2 + r() * 3, 0, 0, Math.PI * 2);
        g.fill();
      }
      return;
    }
    if (b.kind === 'planet' && b.giant) {
      const base = 0.05 + b.hue * 0.12;
      for (let y = 0; y < h; y++) {
        const band = Math.sin(y * 0.18 + Math.sin(y * 0.05) * 3) * 0.5 + 0.5;
        col.setHSL(base + band * 0.04, 0.35 + band * 0.2, 0.35 + band * 0.25 + (r() - 0.5) * 0.03);
        g.fillStyle = `#${col.getHexString()}`;
        g.fillRect(0, y, w, 1);
      }
      // A great storm.
      col.setHSL(base, 0.6, 0.55);
      g.fillStyle = `#${col.getHexString()}`;
      g.beginPath();
      g.ellipse(w * r(), h * (0.3 + r() * 0.4), 14, 6, 0, 0, Math.PI * 2);
      g.fill();
    } else {
      const moon = b.kind !== 'planet';
      const hue = moon ? 0.08 : [0.08, 0.55, 0.02, 0.33][Math.floor(b.hue * 4)];
      col.setHSL(hue, moon ? 0.05 : 0.3, moon ? 0.45 : 0.35);
      g.fillStyle = `#${col.getHexString()}`;
      g.fillRect(0, 0, w, h);
      for (let i = 0; i < 90; i++) {
        col.setHSL(hue + (r() - 0.5) * 0.05, moon ? 0.05 : 0.35, 0.25 + r() * 0.3);
        g.fillStyle = `#${col.getHexString()}`;
        g.globalAlpha = 0.35;
        g.beginPath();
        g.arc(r() * w, r() * h, 2 + r() * (moon ? 8 : 22), 0, Math.PI * 2);
        g.fill();
      }
      // Craters.
      g.globalAlpha = 0.5;
      for (let i = 0; i < (moon ? 40 : 12); i++) {
        const x = r() * w;
        const y = r() * h;
        const cr = 1 + r() * 4;
        g.strokeStyle = 'rgba(0,0,0,0.5)';
        g.beginPath();
        g.arc(x, y, cr, 0, Math.PI * 2);
        g.stroke();
      }
      g.globalAlpha = 1;
      if (!moon) {
        g.fillStyle = 'rgba(255,255,255,0.8)';
        g.fillRect(0, 0, w, 5);
        g.fillRect(0, h - 5, w, 5);
      }
    }
  }
}

/** City lights: warm specks clustered into towns and cities (black elsewhere). */
function lightsTex(b) {
  const r = rng(b.id * 131 + 7);
  const t = canvasTex(256, 128, (g, w, h) => {
    g.fillStyle = '#000';
    g.fillRect(0, 0, w, h);
    const cities = b.giant ? 6 : b.kind === 'moon' ? 5 : 18;
    for (let c = 0; c < cities; c++) {
      const cx = r() * w;
      const cy = h * (0.15 + r() * 0.7);
      const n = 20 + Math.floor(r() * 60);
      for (let i = 0; i < n; i++) {
        // Dense cores thinning out to suburbs.
        const k = r() ** 2;
        g.fillStyle = r() < 0.2 ? '#fff4d0' : '#ffb95a';
        g.globalAlpha = 0.4 + r() * 0.6;
        g.fillRect((cx + (r() - 0.5) * 30 * k + w) % w, cy + (r() - 0.5) * 14 * k, 0.45, 0.45);
      }
    }
    g.globalAlpha = 1;
  }, 4);
  return t;
}

// Sun position in view space, shared by every material that glows at night.
const sunView = { value: new THREE.Vector3() };

/** Makes a material's emissive map (city lights) show only on the night side. */
function nightOnly(mat) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uSunView = sunView;
    sh.fragmentShader = `uniform vec3 uSunView;\n${sh.fragmentShader}`.replace(
      '#include <emissivemap_fragment>',
      `#include <emissivemap_fragment>
      {
        float day = dot(normal, normalize(uSunView + vViewPosition));
        totalEmissiveRadiance *= smoothstep(0.12, -0.25, day);
      }`,
    );
  };
  return mat;
}

// ---- Meshes -------------------------------------------------------------------

/**
 * Three hull types, all built along +Z (nose forward, drive at the back):
 * a lean corvette with radiator fins, a frigate with a spin ring, and a
 * gunship with side pods. Each is a single merged geometry.
 */
function shipGeometries() {
  const X = Math.PI / 2;
  const cyl = (r1, r2, l, z, seg = 8) => new THREE.CylinderGeometry(r1, r2, l, seg).rotateX(X).translate(0, 0, z);
  const cone = (r, l, z, seg = 8) => new THREE.ConeGeometry(r, l, seg).rotateX(X).translate(0, 0, z);
  const box = (w, h, d, x, y, z) => new THREE.BoxGeometry(w, h, d).translate(x, y, z);
  const bell = () => new THREE.CylinderGeometry(0.05, 0.1, 0.12, 10, 1, true).rotateX(-X).translate(0, 0, -0.36);
  const corvette = mergeGeometries([
    cyl(0.06, 0.08, 0.55, 0), cone(0.06, 0.2, 0.37), box(0.3, 0.01, 0.16, 0, 0, -0.12), box(0.01, 0.22, 0.12, 0, 0, -0.12),
    cyl(0.09, 0.09, 0.08, -0.25), bell(),
  ].map((g) => g.toNonIndexed()));
  const frigate = mergeGeometries([
    cyl(0.08, 0.1, 0.6, 0), cone(0.08, 0.16, 0.38), new THREE.TorusGeometry(0.16, 0.025, 6, 20).translate(0, 0, 0.05),
    box(0.34, 0.012, 0.1, 0, 0, -0.18), cyl(0.11, 0.11, 0.1, -0.26), bell(),
  ].map((g) => g.toNonIndexed()));
  const gunship = mergeGeometries([
    box(0.12, 0.08, 0.6, 0, 0, 0), cone(0.07, 0.2, 0.38, 4), cyl(0.035, 0.035, 0.4, 0).translate(0.11, 0, 0),
    cyl(0.035, 0.035, 0.4, 0).translate(-0.11, 0, 0), box(0.02, 0.18, 0.14, 0, 0.08, -0.2), bell(),
  ].map((g) => g.toNonIndexed()));
  return [corvette, frigate, gunship];
}

function stationMesh(size) {
  const m = new THREE.MeshStandardMaterial({ color: '#c9ced8', metalness: 0.6, roughness: 0.4 });
  const g = new THREE.Group();
  g.add(new THREE.Mesh(new THREE.TorusGeometry(size, size * 0.12, 8, 32), m));
  // Lit windows around the ring, shown once someone runs the station.
  const pts = [];
  for (let i = 0; i < 40; i++) {
    const a = (i / 40) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a) * size * 1.13, Math.sin(a) * size * 1.13, (i % 3 - 1) * size * 0.05));
  }
  const windows = new THREE.Points(
    new THREE.BufferGeometry().setFromPoints(pts),
    new THREE.PointsMaterial({ color: '#ffd08a', size: 2, sizeAttenuation: false, transparent: true, opacity: 0.9 }),
  );
  windows.name = 'windows';
  windows.visible = false;
  g.add(windows);
  g.add(new THREE.Mesh(new THREE.CylinderGeometry(size * 0.15, size * 0.15, size * 1.4, 12).rotateX(Math.PI / 2), m));
  for (let i = 0; i < 4; i++) {
    const spoke = new THREE.Mesh(new THREE.CylinderGeometry(size * 0.04, size * 0.04, size * 2, 6), m);
    spoke.rotation.z = (i * Math.PI) / 4;
    g.add(spoke);
  }
  // Solar panels.
  const panel = new THREE.MeshStandardMaterial({ color: '#2a3f7a', metalness: 0.3, roughness: 0.6, side: THREE.DoubleSide });
  for (const s of [-1, 1]) {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(size * 0.5, size * 1.4), panel);
    p.position.z = s * size * 1.1;
    p.rotation.y = Math.PI / 2;
    g.add(p);
  }
  return g;
}

function asteroidMesh(b) {
  const r = rng(b.id * 97 + 1);
  const geo = new THREE.IcosahedronGeometry(b.size, 2);
  const p = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    // Lumpy: stretch along one axis and dent by a few low-frequency waves.
    const k = 1 + 0.25 * Math.sin(v.x * 3 + r() * 0.2) * Math.cos(v.y * 2.5) + (r() - 0.5) * 0.08;
    v.multiplyScalar(k);
    v.x *= 1.4;
    p.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: '#8d8173', roughness: 1, flatShading: true }));
}

function orbitLine(b) {
  const pts = [];
  for (let i = 0; i <= 128; i++) {
    const th = (i / 128) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(th) * b.r, Math.sin(th) * b.r * b.incl, Math.sin(th) * b.r));
  }
  return new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(pts),
    new THREE.LineBasicMaterial({ color: '#3a4460', transparent: true, opacity: b.parent === null ? 0.5 : 0.35 }),
  );
}

// ---- Structures -------------------------------------------------------------

const structMat = new THREE.MeshStandardMaterial({ color: '#b9c0cc', metalness: 0.6, roughness: 0.45 });
const ghostMat = new THREE.MeshBasicMaterial({ color: '#9fd4ff', transparent: true, opacity: 0.35, wireframe: true });

/** A structure's mesh, sized to the world: yards orbit, guns and mines sit on the surface. */
function structureMesh(type, b, k, done) {
  const mat = done ? structMat : ghostMat;
  const s = Math.max(0.25, b.size * 0.14);
  const g = new THREE.Group();
  if (type === 'shipyard') {
    // An open gantry ring in low orbit with a docking spine.
    g.add(new THREE.Mesh(new THREE.TorusGeometry(b.size * 1.35, s * 0.12, 6, 48), mat));
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2;
      const truss = new THREE.Mesh(new THREE.BoxGeometry(s * 0.25, s * 0.25, s * 1.2), mat);
      truss.position.set(Math.cos(a) * b.size * 1.35, 0, Math.sin(a) * b.size * 1.35);
      truss.lookAt(0, 0, 0);
      g.add(truss);
    }
    g.rotation.x = Math.PI / 2 + 0.35;
    return g;
  }
  // Surface structures at a fixed spot, standing out from the ground.
  const r = rng(b.id * 17 + k * 101 + (type === 'mine' ? 5 : 0));
  const dir = new THREE.Vector3(r() - 0.5, (r() - 0.5) * 0.9, r() - 0.5).normalize();
  if (type === 'defence') {
    const base = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.5, s * 0.6, s * 0.35, 8), mat);
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.08, s * 0.08, s * 0.9, 6), mat);
    barrel.position.set(0, s * 0.45, s * 0.25);
    barrel.rotation.x = 0.7;
    g.add(base, barrel);
  } else {
    // Mine: a rig with a tall derrick and a work light.
    g.add(new THREE.Mesh(new THREE.BoxGeometry(s * 0.9, s * 0.4, s * 0.7), mat));
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.08, s * 0.14, s * 1.4, 5), mat);
    tower.position.y = s * 0.7;
    g.add(tower);
    if (done) {
      const light = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#ffc070', blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      light.position.y = s * 1.5;
      light.scale.setScalar(s * 1.6);
      g.add(light);
    }
  }
  g.position.copy(dir).multiplyScalar(b.size * (b.kind === 'asteroid' ? 1.1 : 1));
  g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
  return g;
}

// ---- View ---------------------------------------------------------------------

export function createView(canvas, labelRoot) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, logarithmicDepthBuffer: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#03040a');
  const camera = new THREE.PerspectiveCamera(45, 1, 0.02, 20000);

  // Distant stars.
  {
    const n = 2500;
    const pos = new Float32Array(n * 3);
    const v = new THREE.Vector3();
    for (let i = 0; i < n; i++) {
      v.randomDirection().multiplyScalar(4000 + Math.random() * 2000);
      pos.set([v.x, v.y, v.z], i * 3);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    scene.add(new THREE.Points(geo, new THREE.PointsMaterial({ size: 1.3, sizeAttenuation: false, color: '#9aa6c8', transparent: true, opacity: 0.7 })));
  }

  // The sun: bright core, layered glow, and the only real light.
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(SUN_RADIUS, 32, 24), new THREE.MeshBasicMaterial({ color: '#fff4d6' })));
  for (const [s, c, o] of [[40, '#ffd27a', 0.9], [110, '#ff9a4a', 0.35]]) {
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: c, opacity: o, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    glow.scale.setScalar(s);
    scene.add(glow);
  }
  scene.add(new THREE.PointLight('#fff1dd', 3, 0, 0));
  scene.add(new THREE.AmbientLight('#26304a', 0.35));

  const shipGeos = shipGeometries();
  const world = new THREE.Group();
  scene.add(world);
  let views = [];

  const orbit = { az: 0.4, pol: 0.9, dist: 380, minDist: 1.2, maxDist: 900, target: new THREE.Vector3(), vaz: 0, vpol: 0, follow: null };

  function build(game) {
    world.clear();
    labelRoot.innerHTML = '';
    fleetLabels.length = 0;
    views = game.bodies.map((b) => {
      const g = new THREE.Group();
      let body;
      if (b.kind === 'station') body = stationMesh(b.size);
      else if (b.kind === 'asteroid') body = asteroidMesh(b);
      else {
        body = new THREE.Mesh(
          new THREE.SphereGeometry(b.size, 48, 32),
          nightOnly(new THREE.MeshStandardMaterial({
            map: surfaceTex(b), roughness: 1, metalness: 0,
            emissiveMap: lightsTex(b), emissive: '#ffd08a', emissiveIntensity: 0,
          })),
        );
        body.rotation.z = 0.2 + b.hue * 0.3;
        if (b.giant && b.hue > 0.4) {
          const ring = new THREE.Mesh(
            new THREE.RingGeometry(b.size * 1.4, b.size * 2.2, 64),
            new THREE.MeshStandardMaterial({ color: '#c8b89a', transparent: true, opacity: 0.55, side: THREE.DoubleSide }),
          );
          ring.rotation.x = Math.PI / 2 - 0.25;
          g.add(ring);
        }
      }
      g.add(body);
      const surface = new THREE.Group();
      body.add(surface);
      // Owner marker: a thin ring that always faces the camera.
      const mark = new THREE.Sprite(new THREE.SpriteMaterial({ map: ringTex, transparent: true, depthWrite: false, depthTest: false, opacity: 0.8 }));
      mark.scale.setScalar(b.size * 3.2);
      g.add(mark);
      world.add(g);
      // Orbit: moons' orbits ride with their planet.
      const line = orbitLine(b);
      const lineHolder = new THREE.Group();
      lineHolder.add(line);
      world.add(lineHolder);
      const label = document.createElement('div');
      label.className = 'lbl';
      labelRoot.appendChild(label);
      return { b, g, body, surface, mark, lineHolder, label, shown: '', owner: null, pulse: 0, sig: null, structs: null };
    });
  }

  // Ships: meshes with a drive plume and a far-away glint, pooled.
  const ships = [];
  function ship(i) {
    if (i >= MAX_SHIPS) return null;
    if (!ships[i]) {
      const mesh = new THREE.Mesh(shipGeos[0], new THREE.MeshStandardMaterial({ color: '#d7dce6', metalness: 0.6, roughness: 0.4, emissive: '#000' }));
      const plume = new THREE.Mesh(
        new THREE.ConeGeometry(0.07, 1, 10, 1, true).rotateX(-Math.PI / 2).translate(0, 0, -0.92),
        new THREE.MeshBasicMaterial({ color: '#9fd4ff', transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false }),
      );
      mesh.add(plume);
      const glint = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      scene.add(mesh, glint);
      ships[i] = { mesh, plume, glint };
    }
    return ships[i];
  }

  // Routes and intercept points.
  const routeGeo = new THREE.BufferGeometry();
  const SEGS = 16; // route curves are drawn as this many segments
  const routePos = new Float32Array(200 * SEGS * 6);
  const routeCol = new Float32Array(200 * SEGS * 6);
  routeGeo.setAttribute('position', new THREE.BufferAttribute(routePos, 3));
  routeGeo.setAttribute('color', new THREE.BufferAttribute(routeCol, 3));
  const routes = new THREE.LineSegments(routeGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.45 }));
  routes.frustumCulled = false;
  scene.add(routes);
  const ghosts = [];
  function ghost(i) {
    if (!ghosts[i]) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: ringTex, transparent: true, depthWrite: false, opacity: 0.5 }));
      scene.add(s);
      ghosts[i] = s;
    }
    return ghosts[i];
  }

  // Order preview: dashed path to where the target will be.
  const previewGeo = new THREE.BufferGeometry().setFromPoints(Array.from({ length: 33 }, () => new THREE.Vector3()));
  const preview = new THREE.Line(previewGeo, new THREE.LineDashedMaterial({ color: OWNER_COLORS[0], dashSize: 1.5, gapSize: 1 }));
  preview.frustumCulled = false;
  scene.add(preview);

  // Explosions and weapon tracers.
  const booms = [];
  let boomNext = 0;
  function boom(p, color, size, life) {
    let s = booms[boomNext];
    if (!s) {
      s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      s.userData = {};
      scene.add(s);
      booms[boomNext] = s;
    }
    boomNext = (boomNext + 1) % MAX_BOOMS;
    s.position.copy(p);
    s.material.color.set(color);
    Object.assign(s.userData, { age: 0, life, size });
    s.visible = true;
  }
  const MAX_SHOTS = 240;
  const shots = [];
  function shoot(a, b, color) {
    let sh = shots.find((x) => !x.live);
    if (!sh) {
      if (shots.length >= MAX_SHOTS) return;
      sh = { a: new THREE.Vector3(), b: new THREE.Vector3(), c: new THREE.Color() };
      shots.push(sh);
    }
    sh.live = true;
    sh.a.copy(a);
    sh.b.copy(b);
    sh.color = color;
    // Light the shooter's colour towards white so rounds read as hot.
    sh.c.set(color).lerp(new THREE.Color('#ffffff'), 0.45);
    sh.age = 0;
    sh.life = THREE.MathUtils.clamp(a.distanceTo(b) / 14, 0.12, 0.7);
  }
  const tracerGeo = new THREE.BufferGeometry();
  const tracerPos = new Float32Array(MAX_SHOTS * 6);
  const tracerCol = new Float32Array(MAX_SHOTS * 6);
  tracerGeo.setAttribute('position', new THREE.BufferAttribute(tracerPos, 3));
  tracerGeo.setAttribute('color', new THREE.BufferAttribute(tracerCol, 3));
  const tracers = new THREE.LineSegments(tracerGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  tracers.frustumCulled = false;
  scene.add(tracers);

  const tmp = new THREE.Vector3();
  const tmp2 = new THREE.Vector3();
  const dir = new THREE.Vector3();
  const perp = new THREE.Vector3();
  const UP = new THREE.Vector3(0, 1, 0);
  const ppuAt = (p) => window.innerHeight / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.distanceTo(p));
  const hash = (a, b) => {
    let x = Math.imul(a ^ 0x9e3779b9, 0x85ebca6b) ^ Math.imul(b + 0x632be5ab, 0xc2b2ae35);
    x ^= x >>> 15;
    x = Math.imul(x, 0x2c1b3c6d);
    return ((x ^ (x >>> 12)) >>> 0) / 4294967296;
  };

  function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }

  const bodyPos = [];
  const fleetLabels = [];
  function fleetLabel(i) {
    if (!fleetLabels[i]) {
      const el = document.createElement('div');
      el.className = 'flbl';
      labelRoot.appendChild(el);
      fleetLabels[i] = el;
    }
    return fleetLabels[i];
  }

  /**
   * Places a ship mesh (with glint and plume) at p, nose along n. `id` picks
   * its hull and small variations (length, paint), stable for that ship.
   */
  function placeShip(sh, p, n, color, burning, t, seed, id = seed) {
    sh.mesh.visible = true;
    const v = Math.floor(hash(id, 3) * shipGeos.length);
    if (sh.mesh.geometry !== shipGeos[v]) sh.mesh.geometry = shipGeos[v];
    const k = 0.9 + hash(id, 5) * 0.25;
    sh.mesh.scale.set(1, 1, k);
    sh.mesh.material.color.setHSL(0.58 + hash(id, 7) * 0.08, 0.05 + hash(id, 9) * 0.1, 0.62 + hash(id, 11) * 0.2);
    sh.mesh.position.copy(p);
    tmp2.copy(p).add(n);
    sh.mesh.lookAt(tmp2);
    sh.mesh.material.emissive.set(color).multiplyScalar(0.18);
    sh.plume.visible = burning;
    if (burning) sh.plume.scale.set(1, 1, 0.8 + Math.sin(t * 40 + seed) * 0.15);
    // Visible from afar as a point of light; brighter while the drive burns.
    const ppu = ppuAt(p);
    sh.glint.visible = true;
    sh.glint.position.copy(p);
    sh.glint.material.color.set(burning ? '#cfe8ff' : color);
    sh.glint.material.opacity = ppu > 60 ? 0 : burning ? 1 : 0.7;
    sh.glint.scale.setScalar((burning ? 9 : 5) / ppu);
  }

  function render(game, ui, dt, t) {
    const now = game.time;
    // Camera: follow the focused body, with inertia on rotation.
    for (const v of views) {
      const p = posAt(game, v.b, now);
      bodyPos[v.b.id] = p;
    }
    if (orbit.follow !== null) {
      const p = bodyPos[orbit.follow];
      orbit.target.lerp(tmp.set(p.x, p.y, p.z), Math.min(1, dt * 6));
    }
    if (!ui.dragging) {
      orbit.az += orbit.vaz;
      orbit.pol += orbit.vpol;
      orbit.vaz *= 0.92;
      orbit.vpol *= 0.92;
    }
    orbit.pol = THREE.MathUtils.clamp(orbit.pol, 0.15, Math.PI - 0.15);
    orbit.dist = THREE.MathUtils.clamp(orbit.dist, orbit.minDist, orbit.maxDist);
    camera.position.setFromSphericalCoords(orbit.dist, orbit.pol, orbit.az).add(orbit.target);
    camera.lookAt(orbit.target);
    camera.updateMatrixWorld();

    const w = window.innerWidth;
    const h = window.innerHeight;
    let used = 0;
    sunView.value.set(0, 0, 0).applyMatrix4(camera.matrixWorldInverse);

    // Moons and stations crowded against their planet on screen hide their
    // label; their ship counts ride on the planet's label instead.
    // Hostile fleets on their way to each world: count and soonest arrival.
    const incoming = new Map();
    for (const f of game.fleets) {
      const tb = game.bodies[f.to];
      if (f.owner === tb.owner) continue;
      const left = f.T - (now - f.t0);
      const k = `${f.to}:${f.owner}`;
      const cur = incoming.get(k) || { to: f.to, owner: f.owner, n: 0, eta: Infinity };
      cur.n += f.n;
      cur.eta = Math.min(cur.eta, left);
      incoming.set(k, cur);
    }
    const incomingTo = new Map();
    for (const x of incoming.values()) {
      if (!incomingTo.has(x.to)) incomingTo.set(x.to, []);
      incomingTo.get(x.to).push(x);
    }
    const crowded = new Set();
    const extras = new Map();
    for (const v of views) {
      const b = v.b;
      if (b.parent === null || ui.selected === b.id || ui.target === b.id || b.sieges.length || game.fleets.some((f) => f.to === b.id && f.owner !== b.owner)) continue;
      const q = bodyPos[b.parent];
      tmp.copy(v.g.position).project(camera);
      tmp2.set(q.x, q.y, q.z).project(camera);
      if (Math.hypot((tmp.x - tmp2.x) * w, (tmp.y - tmp2.y) * h) / 2 >= 46) continue;
      crowded.add(b.id);
      if (b.owner !== NEUTRAL && b.ships > 0) {
        if (!extras.has(b.parent)) extras.set(b.parent, []);
        extras.get(b.parent).push(`<span class="kid" style="color:${ownerColor(b.owner)}">+${b.ships}</span>`);
      }
    }

    for (const v of views) {
      const { b } = v;
      const p = bodyPos[b.id];
      v.g.position.set(p.x, p.y, p.z);
      if (b.parent !== null) {
        const q = bodyPos[b.parent];
        v.lineHolder.position.set(q.x, q.y, q.z);
      }
      // Slow spin; stations turn faster, asteroids tumble.
      if (b.kind === 'station') v.body.rotation.z += dt * 0.5;
      else if (b.kind === 'asteroid') { v.body.rotation.x += dt * 0.3; v.body.rotation.y += dt * 0.2; }
      else v.body.rotation.y += dt * 0.05;

      const col = ownerColor(b.owner);
      if (v.owner !== b.owner) {
        if (v.owner !== null) v.pulse = 1;
        v.owner = b.owner;
        // Signs of life: city lights on the night side of worlds someone holds.
        if (v.body.material && v.body.material.emissiveMap) {
          v.body.material.emissiveIntensity = b.owner === NEUTRAL ? 0 : 1.6;
        }
        const windows = v.body.getObjectByName && v.body.getObjectByName('windows');
        if (windows) windows.visible = b.owner !== NEUTRAL;
        v.mark.material.color.set(col);
        v.label.style.color = col;
      }
      v.pulse = Math.max(0, v.pulse - dt);

      // Structures: rebuilt when anything is added, finished or lost.
      const sig = b.structures.map((x) => x.type + (x.left > 0 ? '~' : '')).join();
      if (sig !== v.sig) {
        v.sig = sig;
        if (v.structs) v.structs.removeFromParent();
        v.surface.clear();
        v.structs = new THREE.Group();
        b.structures.forEach((x, k) => {
          if (b.kind === 'station' && x.type === 'shipyard') return; // the station is the yard
          const m = structureMesh(x.type, b, k, x.left <= 0);
          // Surface structures turn with the world; yards orbit on their own.
          (x.type === 'shipyard' ? v.structs : v.surface).add(m);
        });
        v.g.add(v.structs);
      }
      const selected = ui.selected === b.id;
      const targeted = ui.target === b.id;
      const ppu = ppuAt(v.g.position);
      // Markers stay a readable size on screen however far out we are.
      const markPx = Math.max(b.size * 3.2 * ppu, 22);
      v.mark.scale.setScalar((markPx / ppu) * (1 + v.pulse * 0.6 + (selected ? Math.sin(t * 5) * 0.06 : 0)));
      v.mark.material.opacity = selected ? 1 : targeted ? 0.9 : b.owner === NEUTRAL ? 0.25 : 0.7;
      // Up close the world itself is the marker: fade the ring out of the way.
      if (b.size * ppu > 70) v.mark.material.opacity *= 0.25;
      if (selected || targeted) v.mark.material.color.set(selected ? '#ffffff' : col);
      else v.mark.material.color.set(col);

      // Docked ships in a parking orbit; attackers circle wider.
      const fighting = b.sieges.length > 0;
      const defPts = [];
      const atkPts = [];
      const park = (n, owner, radius, speed, seed, out) => {
        for (let j = 0; j < n; j++) {
          const sh = ship(used++);
          if (!sh) return;
          const r1 = hash(seed, j);
          const a = r1 * Math.PI * 2 + t * speed * (0.8 + r1 * 0.4);
          const rr = radius * (1 + hash(j, seed) * 0.3);
          tmp.set(p.x + Math.cos(a) * rr, p.y + Math.sin(a * 0.7 + r1) * rr * 0.15, p.z + Math.sin(a) * rr);
          dir.set(-Math.sin(a), 0, Math.cos(a));
          placeShip(sh, tmp, dir, ownerColor(owner), false, t, j, seed * 131 + j);
          sh.glint.material.opacity *= 0.6;
          if (out) out.push({ p: tmp.clone(), owner });
        }
      };
      park(Math.min(b.ships, 20), b.owner, b.size * 1.8 + 0.4, 0.25, b.id * 13, fighting ? defPts : null);
      for (const g of b.sieges) park(Math.min(g.n, 20), g.owner, b.size * 2.6 + 0.8, -0.18, b.id * 29 + g.owner, atkPts);

      if (fighting) {
        // Gun emplacements: fixed points on the surface that turn with the body.
        for (let k = 0; k < Math.ceil(b.guns); k++) {
          const th = hash(b.id, k * 2) * Math.PI * 2 + t * 0.05;
          const ph = (hash(k * 2 + 1, b.id) - 0.5) * 1.6;
          const r = b.size * 1.02;
          defPts.push({ p: new THREE.Vector3(p.x + Math.cos(th) * Math.cos(ph) * r, p.y + Math.sin(ph) * r, p.z + Math.sin(th) * Math.cos(ph) * r), owner: b.owner });
        }
        // Rounds fly between real ships and guns, both ways, in the shooter's colour.
        const total = atkPts.length + defPts.length;
        let n = total * dt * 1.6;
        while (n > 0 && atkPts.length && defPts.length) {
          if (Math.random() < n) {
            const fromAtk = Math.random() < atkPts.length / total;
            const src = (fromAtk ? atkPts : defPts)[(Math.random() * (fromAtk ? atkPts : defPts).length) | 0];
            const dst = (fromAtk ? defPts : atkPts)[(Math.random() * (fromAtk ? defPts : atkPts).length) | 0];
            shoot(src.p, dst.p, ownerColor(src.owner));
          }
          n -= 1;
        }
        // Each ship lost goes up where it was.
        for (const [lost, pts] of [[b.lostDef, defPts], [b.lostAtk, atkPts]]) {
          for (let k = 0; k < Math.min(3, lost || 0); k++) {
            const at = pts.length ? pts[(Math.random() * pts.length) | 0].p : tmp.set(p.x, p.y, p.z);
            // A white flash, a fireball, and burning debris drifting apart.
            boom(at, '#ffffff', 3, 0.3);
            boom(at, '#ffc070', 5, 1.2);
            for (let d = 0; d < 4; d++) {
              tmp2.set(at.x + (Math.random() - 0.5) * 1.6, at.y + (Math.random() - 0.5) * 1.6, at.z + (Math.random() - 0.5) * 1.6);
              boom(tmp2, '#ff8a40', 1.4, 1 + Math.random() * 0.8);
            }
          }
        }
      }
      b.lostDef = b.lostAtk = 0;
      if (b.captured) { v.pulse = 1; b.captured = false; }

      // Label: ship count big, name small. Moons and stations hide their label
      // while they're crowded against their planet on screen (unless busy).
      tmp.copy(v.g.position).project(camera);
      const hide = tmp.z > 1 || crowded.has(b.id);
      if (hide) { v.label.style.visibility = 'hidden'; continue; }
      const attackers = b.sieges.map((g) => `<span class="atk" style="color:${ownerColor(g.owner)}">⚔ ${g.n}</span>`).join('');
      const count = b.owner === NEUTRAL ? `<i class="guns">◆${Math.ceil(b.guns)}</i>` : `<b>${b.ships}</b>`;
      const kids = (extras.get(b.id) || []).join('');
      const warn = (incomingTo.get(b.id) || []).map((x) => {
        const e = Math.max(0, x.eta);
        return `<span class="inc" style="color:${ownerColor(x.owner)}">▼${x.n} ${Math.floor(e / 60)}:${String(Math.floor(e % 60)).padStart(2, '0')}</span>`;
      }).join('');
      const text = `<span class="row1">${count}${kids}</span>${attackers}${warn}<small>${b.name}</small>`;
      if (text !== v.shown) { v.label.innerHTML = text; v.shown = text; }
      v.label.style.visibility = 'visible';
      const x = (tmp.x * 0.5 + 0.5) * w;
      const y = (-tmp.y * 0.5 + 0.5) * h;
      v.label.style.transform = `translate(${x}px, ${y + markPx / 2 + 2}px) translate(-50%, 0)`;
    }

    // Fleets in flight.
    let routeN = 0;
    let ghostN = 0;
    for (const f of game.fleets) {
      const s = fleetState(f, now);
      const color = ownerColor(f.owner);
      // Nose along the thrust; the formation spreads across the direction of travel.
      const nose = new THREE.Vector3(s.nx, s.ny, s.nz);
      dir.set(s.vx, s.vy, s.vz);
      if (dir.lengthSq() < 1e-9) dir.copy(nose);
      dir.normalize();
      perp.crossVectors(dir, UP);
      if (perp.lengthSq() < 1e-6) perp.set(1, 0, 0);
      perp.normalize();
      for (let j = 0; j < f.n; j++) {
        const sh = ship(used++);
        if (!sh) break;
        // A loose formation, a little staggered.
        tmp.set(s.x, s.y, s.z)
          .addScaledVector(perp, (hash(f.id, j) - 0.5) * 1.2)
          .addScaledVector(UP, (hash(j, f.id) - 0.5) * 0.6)
          .addScaledVector(dir, -hash(f.id + 7, j) * 0.8);
        placeShip(sh, tmp, nose, color, s.burning, t, j, f.id * 97 + j);
      }
      if (routeN < 200 * SEGS) {
        // The rest of the route, sampled along the (curved) path.
        const c = new THREE.Color(color);
        let prev = s;
        for (let k = 1; k <= SEGS; k++) {
          const u = s.progress + ((1 - s.progress) * k) / SEGS;
          const q = fleetState(f, f.t0 + u * f.T);
          const fade = 1 - (k / SEGS) * 0.7;
          routePos.set([prev.x, prev.y, prev.z, q.x, q.y, q.z], routeN * 6);
          routeCol.set([c.r * fade, c.g * fade, c.b * fade, c.r * fade, c.g * fade, c.b * fade], routeN * 6);
          routeN++;
          prev = q;
        }
        const gh = ghost(ghostN++);
        gh.visible = true;
        gh.position.set(f.p1.x, f.p1.y, f.p1.z);
        gh.material.color.set(color);
        // Enemy landing points pulse so they stand out.
        const hostile = f.owner !== 0;
        const pulse = hostile ? 1 + 0.35 * Math.sin(t * 6) : 1;
        gh.material.opacity = hostile ? 0.9 : 0.5;
        gh.scale.setScalar((hostile ? 22 : 14) * pulse / ppuAt(gh.position));
      }
    }
    for (let i = used; i < ships.length; i++) { ships[i].mesh.visible = false; ships[i].glint.visible = false; }

    // Ship counts on fleets in flight: a small tag beside each one.
    let fl = 0;
    for (const f of game.fleets) {
      const s = fleetState(f, now);
      tmp.set(s.x, s.y, s.z).project(camera);
      const el = fleetLabel(fl++);
      if (tmp.z > 1) { el.style.visibility = 'hidden'; continue; }
      const mine = f.owner === 0;
      const text = `▸ ${f.n}`;
      if (el._t !== text) { el._t = text; el.textContent = text; }
      el.style.color = ownerColor(f.owner);
      el.style.borderColor = ownerColor(f.owner);
      el.style.opacity = mine ? (ui.fleet === f.id ? 1 : 0.85) : 0.6;
      el.classList.toggle('sel', ui.fleet === f.id);
      el.style.visibility = 'visible';
      el.style.transform = `translate(${(tmp.x * 0.5 + 0.5) * w + 12}px, ${(-tmp.y * 0.5 + 0.5) * h - 9}px)`;
    }
    for (let i = fl; i < fleetLabels.length; i++) fleetLabels[i].style.visibility = 'hidden';
    for (let i = ghostN; i < ghosts.length; i++) ghosts[i].visible = false;
    routeGeo.setDrawRange(0, routeN * 2);
    routeGeo.attributes.position.needsUpdate = true;
    routeGeo.attributes.color.needsUpdate = true;

    // Rounds in flight: a short bright streak moving from gun to target, with
    // a spark where it lands.
    let tn = 0;
    for (const sh of shots) {
      if (!sh.live) continue;
      sh.age += dt;
      const k = sh.age / sh.life;
      if (k >= 1) {
        sh.live = false;
        boom(sh.b, sh.color, 0.5, 0.25);
        continue;
      }
      if (tn >= MAX_SHOTS) continue;
      tmp.lerpVectors(sh.a, sh.b, Math.max(0, k - 0.18));
      tmp2.lerpVectors(sh.a, sh.b, k);
      tracerPos.set([tmp.x, tmp.y, tmp.z, tmp2.x, tmp2.y, tmp2.z], tn * 6);
      const c = sh.c;
      tracerCol.set([c.r * 0.2, c.g * 0.2, c.b * 0.2, c.r, c.g, c.b], tn * 6);
      tn++;
    }
    tracerGeo.setDrawRange(0, tn * 2);
    tracerGeo.attributes.position.needsUpdate = true;
    tracerGeo.attributes.color.needsUpdate = true;

    for (const s of booms) {
      if (!s.visible) continue;
      s.userData.age += dt;
      const k = s.userData.age / s.userData.life;
      if (k >= 1) { s.visible = false; continue; }
      s.scale.setScalar(s.userData.size * (0.4 + Math.sqrt(k)));
      s.material.opacity = Math.min(1, (1 - k) * 1.6);
    }

    // Order preview.
    if (ui.preview) {
      const { p1 } = ui.preview;
      preview.visible = true;
      const pf = { ...ui.preview, t0: 0 };
      for (let k = 0; k <= 32; k++) {
        const q = fleetState(pf, (k / 32) * pf.T);
        previewGeo.attributes.position.setXYZ(k, q.x, q.y, q.z);
      }
      previewGeo.attributes.position.needsUpdate = true;
      preview.computeLineDistances();
      preview.material.dashSize = 6 / ppuAt(tmp.set(p1.x, p1.y, p1.z));
      preview.material.gapSize = preview.material.dashSize * 0.7;
      const gh = ghost(ghostN++);
      gh.visible = true;
      gh.position.set(p1.x, p1.y, p1.z);
      gh.material.color.set('#ffffff');
      gh.material.opacity = 0.6;
      gh.scale.setScalar(22 / ppuAt(gh.position));
    } else {
      preview.visible = false;
    }

    renderer.render(scene, camera);
  }

  /** Nearest body to a screen point, within a finger's reach. */
  function pick(x, y) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    let best = null;
    let bestD = Infinity;
    for (const v of views) {
      tmp.copy(v.g.position).project(camera);
      if (tmp.z > 1) continue;
      const d = Math.hypot((tmp.x * 0.5 + 0.5) * w - x, (-tmp.y * 0.5 + 0.5) * h - y);
      const r = Math.max(30, v.b.size * ppuAt(v.g.position) + 12);
      if (d < r && d < bestD) { bestD = d; best = v.b.id; }
    }
    return best;
  }

  /** Nearest fleet (of `owner`) to a screen point, within a finger's reach. */
  function pickFleet(game, x, y, owner) {
    let best = null;
    let bestD = 24;
    for (const f of game.fleets) {
      if (f.owner !== owner) continue;
      const s = fleetState(f, game.time);
      tmp.set(s.x, s.y, s.z).project(camera);
      if (tmp.z > 1) continue;
      const d = Math.hypot((tmp.x * 0.5 + 0.5) * window.innerWidth - x, (-tmp.y * 0.5 + 0.5) * window.innerHeight - y);
      if (d < bestD) { bestD = d; best = f.id; }
    }
    return best;
  }

  function groundAt(x, y) {
    const ndc = new THREE.Vector3((x / window.innerWidth) * 2 - 1, -(y / window.innerHeight) * 2 + 1, 0.5).unproject(camera);
    const ray = new THREE.Ray(camera.position, ndc.sub(camera.position).normalize());
    const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(camera.getWorldDirection(new THREE.Vector3()), orbit.target);
    return ray.intersectPlane(plane, new THREE.Vector3());
  }
  function zoomAt(x, y, factor) {
    // Zoom toward the fingers, wherever they are.
    orbit.follow = null;
    const before = groundAt(x, y);
    const next = THREE.MathUtils.clamp(orbit.dist * factor, orbit.minDist, orbit.maxDist);
    const k = next / orbit.dist;
    orbit.dist = next;
    if (before) orbit.target.lerp(before, 1 - k);
  }
  function pan(dx, dy) {
    orbit.follow = null;
    const perPx = (2 * orbit.dist * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) / window.innerHeight;
    const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
    const fwd = new THREE.Vector3().crossVectors(UP, right).normalize();
    orbit.target.addScaledVector(right, -dx * perPx).addScaledVector(fwd, dy * perPx);
  }
  function focus(game, id, zoom = true) {
    orbit.follow = id;
    if (id === null || !zoom) return;
    const b = game.bodies[id];
    orbit.dist = Math.max(orbit.minDist, b.size * 9 + 3);
  }

  /** Where a body is on screen, in CSS pixels (for tests and tooling). */
  function screenOf(id) {
    tmp.copy(views[id].g.position).project(camera);
    return { x: (tmp.x * 0.5 + 0.5) * window.innerWidth, y: (-tmp.y * 0.5 + 0.5) * window.innerHeight };
  }

  return { build, render, resize, pick, pickFleet, orbit, zoomAt, pan, focus, screenOf };
}
