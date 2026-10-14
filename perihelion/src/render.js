import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { icon } from './icons.js';
import { NEUTRAL, bureauReach, posAt, fleetState, rng, vetLevel, starPos, PERKS, EVENTS, PROJECTS, present, cantProject } from './sim.js';
import { createPost } from './gfx/post.js';
import { LD_VERT_PARS, LD_VERT, LD_FRAG_PARS, LD_FRAG } from './gfx/glsl.js';
import { createSky } from './gfx/sky.js';
import { createSun } from './gfx/sun.js';
import { createShipRenderer, platingTex, hullPx } from './gfx/ships.js';
import { stationMesh, stationPorts, setStationModules, STATION_CORES } from './gfx/stations.js';
import { structureMesh } from './gfx/structures.js';
import { asteroidMesh, createBelt } from './gfx/rocks.js';
import { createFx } from './gfx/fx.js';
import { BIOMES, createBaker, lookOf, surfaceMaterial, cloudMaterial, atmosphereMesh, ringMesh, starLights } from './gfx/planets.js';

export const OWNER_COLORS = ['#58b8ff', '#ff6a5a', '#ffb347'];
export const NEUTRAL_COLOR = '#8a90a6';
export const ownerColor = (o) => (o === NEUTRAL ? NEUTRAL_COLOR : OWNER_COLORS[o]);

const SUN_RADIUS = 6;
// Ships are small against worlds, for a sense of scale; formations close up to match.
const SHIP_SCALE = 0.45;
const FORMATION = 0.55;
// Parking orbits turn slowly (radians per second of game time), as big orbits do.
const DOCK_SPEED = 0.03;
const STATION_SCALE = 0.8;
const yAxis = new THREE.Vector3(0, 1, 0);
const SIEGE_SPEED = -0.045;
const MAX_SHIPS = 400;

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

// Owner ring: a thin circle drawn by a shader, so it stays crisp at any size
// (a fixed line width in pixels). Veterans get one short gap per level cut
// into its upper right.
const markPx = { value: 1 }; // screen pixels per CSS pixel
const ringGeo = new THREE.PlaneGeometry(2, 2);
function ringMarker(depthTest = false) {
  const m = new THREE.Mesh(ringGeo, new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color('#ffffff') }, uOpacity: { value: 0.8 }, uLvl: { value: 0 }, uWidth: { value: 1.6 }, uPR: markPx },
    vertexShader: `varying vec2 vQ;
      void main() {
        vQ = position.xy;
        vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        mv.xy += position.xy * length(modelMatrix[0].xyz);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `uniform vec3 uColor; uniform float uOpacity, uLvl, uWidth, uPR; varying vec2 vQ;
      void main() {
        float r = length(vQ);
        float px = max(fwidth(r), 1e-5);
        float d = abs(r - 0.9) / px;
        float a = clamp(uWidth * uPR * 0.5 + 0.5 - d, 0.0, 1.0);
        // Veterancy gaps, centred on the upper right.
        float th = -atan(vQ.y, vQ.x);
        float start = -0.7854 - (uLvl - 1.0) * 0.15;
        for (int k = 0; k < 3; k++) {
          if (float(k) >= uLvl) break;
          float c = start + float(k) * 0.3;
          float dd = abs(mod(th - c + 3.14159, 6.28318) - 3.14159);
          a *= smoothstep(0.075, 0.075 + px * 1.5, dd);
        }
        if (a < 0.003) discard;
        gl_FragColor = vec4(uColor, a * uOpacity);
      }`,
    transparent: true,
    depthWrite: false,
    depthTest,
  }));
  m.frustumCulled = false;
  m.renderOrder = 10;
  return m;
}

// ---- Meshes -------------------------------------------------------------------

// Screen size in pixels, for anything drawn at a fixed on-screen width.
const screenRes = { value: new THREE.Vector2(1, 1) };
/**
 * An orbit as a trail: a ribbon of fixed on-screen width that is thickest
 * just behind the world and tapers (and fades) to nothing a full turn later.
 * `uTh` is the world's current angle, set every frame.
 */
function orbitLine(b) {
  const N = b.parent !== null ? 192 : 512;
  const pos = [], next = [], ang = [], side = [], idx = [];
  const at = (a) => [Math.cos(a) * b.r, Math.sin(a) * b.r * b.incl, Math.sin(a) * b.r];
  for (let i = 0; i <= N; i++) {
    const a = (i / N) * Math.PI * 2;
    for (const sd of [-1, 1]) { pos.push(...at(a)); next.push(...at(a + 0.01)); ang.push(a); side.push(sd); }
    if (i < N) { const k = i * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('nextPos', new THREE.Float32BufferAttribute(next, 3));
  geo.setAttribute('ang', new THREE.Float32BufferAttribute(ang, 1));
  geo.setAttribute('side', new THREE.Float32BufferAttribute(side, 1));
  geo.setIndex(idx);
  const moon = b.parent !== null;
  const mesh = new THREE.Mesh(geo, new THREE.ShaderMaterial({
    uniforms: { uTh: { value: 0 }, uRes: screenRes, uWidth: { value: moon ? 1.4 : 2.2 }, uColor: { value: new THREE.Color(moon ? '#5d6a8c' : '#7383ad') }, uOpacity: { value: moon ? 0.55 : 0.75 } },
    vertexShader: `attribute vec3 nextPos; attribute float ang; attribute float side;
      uniform float uTh; uniform vec2 uRes; uniform float uWidth;
      varying float vF; varying float vSide;
      void main() {
        vec4 c = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vec4 n = projectionMatrix * modelViewMatrix * vec4(nextPos, 1.0);
        vec2 dir = normalize((n.xy / n.w - c.xy / c.w) * uRes + 1e-6);
        vF = fract((uTh - ang) / 6.2831853); // 0 just behind the world, 1 a full turn later
        float w = uWidth * pow(max(1.0 - vF, 0.0), 0.9);
        c.xy += vec2(-dir.y, dir.x) * side * w / uRes * c.w;
        vSide = side;
        gl_Position = c;
      }`,
    fragmentShader: `uniform vec3 uColor; uniform float uOpacity; varying float vF; varying float vSide;
      void main() {
        // max(): rounding on phone GPUs can push 1 - vF a hair below zero, and
        // pow() of a negative is not-a-number: a broken pixel the bloom blew up into a flash.
        float a = uOpacity * pow(max(1.0 - vF, 0.0), 1.3) * smoothstep(1.0, 0.35, abs(vSide));
        gl_FragColor = vec4(uColor, a);
      }`,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
  }));
  mesh.frustumCulled = false;
  return mesh;
}

// ---- Structures -------------------------------------------------------------

// Under construction: a flickering blueprint hologram with scan lines.
const holoT = { value: 0 };
const ghostMat = new THREE.ShaderMaterial({
  uniforms: { uT: holoT },
  vertexShader: `${LD_VERT_PARS}
    varying vec3 vN; varying vec3 vV; varying vec3 vW;
    void main() {
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vW = wp.xyz;
      vec4 mv = viewMatrix * wp;
      vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
      gl_Position = projectionMatrix * mv;
      ${LD_VERT}
    }`,
  fragmentShader: `${LD_FRAG_PARS}
    uniform float uT; varying vec3 vN; varying vec3 vV; varying vec3 vW;
    void main() {
      ${LD_FRAG}
      float rim = pow(max(1.0 - abs(dot(normalize(vN), normalize(vV))), 0.0), 2.0);
      float scan = 0.55 + 0.45 * sin(vW.y * 60.0 - uT * 6.0);
      float flick = 0.85 + 0.15 * sin(uT * 23.0) * sin(uT * 7.0);
      gl_FragColor = vec4(vec3(0.45, 0.8, 1.3) * (0.12 + rim * 0.9) * scan * flick, 1.0);
    }`,
  blending: THREE.AdditiveBlending,
  transparent: true,
  depthWrite: false,
});

// ---- View ---------------------------------------------------------------------

export function createView(canvas, labelRoot, opts = {}) {
  // No logarithmic depth buffer: it makes every pixel write its own depth,
  // which stops phone GPUs (Apple's especially) skipping hidden pixels. The
  // near plane follows the zoom instead (see render), which keeps depth
  // precise at every scale.
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
  let quality = opts.quality || 'high';
  const maxPR = () => Math.min(window.devicePixelRatio || 1, quality === 'high' ? 2 : 1.25);
  let pixelRatio = maxPR();
  renderer.setPixelRatio(1);
  renderer.autoClear = true;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.02, 20000);
  const post = createPost(renderer);
  post.setSamples(quality === 'high' ? 4 : 2);

  // The sky: a painted nebula backdrop (baked per system) and live bright
  // stars. Its blurred copy lights the metal of ships and stations.
  const sky = createSky(renderer, quality);
  scene.add(sky.stars);
  scene.environmentIntensity = 0.9;
  scene.backgroundIntensity = 0.7; // space reads as black; the backdrop is a whisper

  // Dust: faint motes drifting in a box that travels with the camera, so
  // moving the view shows parallax against them, a sense of passing
  // through a vast space. The box scales with the zoom.
  const DUST = quality === 'high' ? 700 : 350;
  const dustGeo = new THREE.BufferGeometry();
  {
    const a = new Float32Array(DUST * 3);
    for (let i = 0; i < a.length; i++) a[i] = Math.random();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(a, 3));
  }
  const dustMat = new THREE.ShaderMaterial({
    uniforms: { uBox: { value: 50 }, uPR: { value: 1 } },
    vertexShader: `uniform float uBox, uPR; varying float vA;
      void main() {
        vec3 rel = (fract(position - cameraPosition / uBox) - 0.5) * uBox;
        vec4 mv = viewMatrix * vec4(cameraPosition + rel, 1.0);
        float d = -mv.z;
        // Fade at the edges of the box and right in front of the lens.
        vA = smoothstep(uBox * 0.5, uBox * 0.3, length(rel)) * smoothstep(uBox * 0.02, uBox * 0.08, d);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(uBox * 0.06 / max(d, 0.001), 1.0, 3.0) * uPR;
      }`,
    fragmentShader: `varying float vA;
      void main() {
        float r = length(gl_PointCoord - 0.5) * 2.0;
        float a = (1.0 - r * r) * vA * 0.22;
        if (a <= 0.002) discard;
        gl_FragColor = vec4(vec3(0.75, 0.72, 0.66) * a, 1.0);
      }`,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
  });
  const dust = new THREE.Points(dustGeo, dustMat);
  dust.frustumCulled = false;
  scene.add(dust);

  // The sun: the only real light (a second, smaller and oranger one in
  // binary systems), with a little cold fill so night sides aren't pure black.
  const sun = createSun(SUN_RADIUS, quality);
  const sunGroup = sun.group;
  scene.add(sunGroup);
  const sunB = createSun(SUN_RADIUS, quality);
  sunB.tint.set(1.0, 0.78, 0.6);
  const sun2 = sunB.group;
  sun2.visible = false;
  sun2.add(new THREE.PointLight('#ffd9b0', 1.4, 0, 0)); // lights its own worlds
  scene.add(sun2);
  scene.add(new THREE.PointLight('#fff1dd', 3, 0, 0));
  scene.add(new THREE.AmbientLight('#2a3550', 0.7));

  const world = new THREE.Group();
  scene.add(world);
  let views = [];

  let farClip = 6000;
  const orbit = { az: 0.4, pol: 0.9, dist: 380, minDist: 1.2, maxDist: 2200, target: new THREE.Vector3(), vaz: 0, vpol: 0, follow: null };

  let companionPath = null;
  let belt = null;
  const bake = createBaker(renderer, () => quality);
  const baked = [];
  const sphereGeos = new Map();
  /** Shared sphere geometry per size (fine for big worlds, lighter for moons). */
  function sphereGeo(r, fine) {
    const k = `${r}:${fine}`;
    if (!sphereGeos.has(k)) sphereGeos.set(k, new THREE.SphereGeometry(r, fine ? 128 : 96, fine ? 80 : 56));
    return sphereGeos.get(k);
  }
  function build(game) {
    // A bigger map: let the camera pull back (and see) further.
    const mapScale = game.scale || 1;
    orbit.maxDist = 2200 * mapScale;
    farClip = 6000 * mapScale;
    // Each homeworld gets its own character (no two alike in a game).
    {
      const r = rng((game.nameSeed || 1) + 77);
      const pool = [...BIOMES];
      for (const h of game.bodies.filter((b) => b.home)) h.biome = pool.splice(Math.floor(r() * pool.length), 1)[0] || 'temperate';
    }
    // A sky of its own for each system.
    sky.bake((game.nameSeed || 1) + 1);
    scene.background = sky.background;
    scene.environment = sky.env;
    for (const rt of baked) rt.dispose();
    baked.length = 0;
    world.clear();
    labelRoot.innerHTML = '';
    fleetLabels.length = 0;
    views = game.bodies.map((b) => {
      const g = new THREE.Group();
      let body;
      let hulk = null;
      let tail = null;
      let ring = null;
      let atmo = null;
      // Stations: a little smaller than their size (a real one is tiny beside a world).
      if (b.kind === 'station') body = stationMesh(b.size * STATION_SCALE, b.id % STATION_CORES, shipR.uT);
      else if (b.kind === 'asteroid') body = asteroidMesh(b);
      else if (b.visitor) {
        // Comet: an icy nucleus with a tail streaming away from the sun.
        // Derelict: a dark hulk. The same body plays either part.
        body = asteroidMesh(b);
        // Two soft tails of glowing puffs: a straight blue ion tail pointing
        // straight away from the sun, and a paler dust tail that curves back
        // along the path; plus a bright coma round the nucleus.
        tail = new THREE.Group();
        const puff = (color) => new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 }));
        tail.userData.ion = Array.from({ length: 26 }, () => puff('#9fd0ff'));
        tail.userData.dust = Array.from({ length: 22 }, () => puff('#fff0cf'));
        tail.userData.coma = puff('#e8f6ff');
        for (const sp of [...tail.userData.ion, ...tail.userData.dust, tail.userData.coma]) tail.add(sp);
        g.add(tail);
        hulk = stationMesh(0.7, 0, shipR.uT);
        setStationModules(hulk, [{ type: 'shipyard', level: 1, done: true }, { type: 'habitat', level: 1, done: true }], null);
        hulk.userData.set('#3a3d44', 0.8, false); // a dead hulk: no lights
        g.add(hulk);
      }
      else {
        // A world painted on the GPU (see gfx/planets.js) and lit by its own shader.
        const look = lookOf(b);
        const maps = bake(b, look);
        baked.push(...maps.rts);
        const tilt = 0.2 + b.hue * 0.3;
        if (b.giant && b.hue > 0.4) {
          // Rings in the equatorial plane, tilted with the planet.
          ring = ringMesh(b);
          ring.rotation.x = Math.PI / 2;
          const holder = new THREE.Group();
          holder.rotation.z = tilt;
          holder.add(ring);
          g.add(holder);
        }
        body = new THREE.Mesh(sphereGeo(b.size, look.kind === 0 || look.kind === 3 ? 1 : 0), surfaceMaterial(b, look, maps, ring && ring.userData.ring));
        // Spin about the tilted axis.
        body.rotation.order = 'ZYX';
        body.rotation.z = tilt;
        if (look.atmo) { atmo = atmosphereMesh(b, look, quality); g.add(atmo); }
        if (look.clouds) {
          const clouds = new THREE.Mesh(sphereGeo(b.size * 1.008, 1), cloudMaterial(maps));
          clouds.name = 'clouds';
          body.add(clouds);
        }
      }
      g.add(body);
      const surface = new THREE.Group();
      body.add(surface);
      // Owner marker: a thin ring that always faces the camera.
      const mark = ringMarker(false);
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
      if (b.visitor) lineHolder.visible = false;
      // Perks with a reach (fuel depot, fortress): a ring on the plane of the
      // orbits showing it, shown while the world is selected or looked at.
      let reach = null;
      if (b.perk && PERKS[b.perk].range) {
        const rr = PERKS[b.perk].range * mapScale;
        const pts = [];
        for (let i = 0; i <= 96; i++) { const a = (i / 96) * Math.PI * 2; pts.push(new THREE.Vector3(Math.cos(a) * rr, 0, Math.sin(a) * rr)); }
        reach = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),
          new THREE.LineDashedMaterial({ color: '#c7a6ff', transparent: true, opacity: 0.55, dashSize: 2.5, gapSize: 2 }));
        reach.computeLineDistances();
        reach.visible = false;
        world.add(reach);
      }
      return { b, g, body, surface, mark, lineHolder, line, label, shown: '', owner: null, pulse: 0, sig: null, structs: null, hulk, tail, reach, ring, atmo, ringN: new THREE.Vector3(), occ: [], ports: b.kind === 'station' ? stationPorts(b.id % STATION_CORES) : null };
    });
    // The asteroid belt: a lane of small rocks round the named asteroids.
    if (belt) { belt.group.removeFromParent(); belt.dispose(); belt = null; }
    const rocks = game.bodies.filter((x) => x.kind === 'asteroid');
    if (rocks.length) {
      const ref = rocks[0];
      const r0 = Math.min(...rocks.map((x) => x.r)) - 2, r1 = Math.max(...rocks.map((x) => x.r)) + 2;
      belt = createBelt(r0, r1, (r) => ref.period * Math.pow(r / ref.r, 1.5), quality, shipR.uT);
      world.add(belt.group);
    }
    // Who can eclipse whom: a planet and its moons shadow each other.
    for (const v of views) {
      const b = v.b;
      if (b.kind !== 'planet' && b.kind !== 'moon') continue;
      const fam = b.kind === 'planet' ? game.bodies.filter((x) => x.parent === b.id && x.kind === 'moon')
        : game.bodies.filter((x) => x.id === b.parent || (x.parent === b.parent && x.kind === 'moon' && x.id !== b.id));
      v.occ = fam.slice(0, 4).map((x) => x.id);
    }
    // Binary: the companion sun's (eccentric) path, so you can see where it's headed.
    if (companionPath) { companionPath.removeFromParent(); companionPath = null; }
    if (game.stars && game.stars[1]) {
      const pts = [];
      for (let i = 0; i <= 256; i++) { const q = starPos(game, 1, (i / 256) * game.stars[1].period); pts.push(new THREE.Vector3(q.x, q.y, q.z)); }
      companionPath = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineDashedMaterial({ color: '#ffb070', transparent: true, opacity: 0.35, dashSize: 4, gapSize: 4 }));
      companionPath.computeLineDistances();
      world.add(companionPath);
    }
  }

  // Ships: instanced hulls, drive plumes and far-away glints (gfx/ships.js).
  const shipR = createShipRenderer(scene, MAX_SHIPS);
  const shipGeos = shipR.geometries;
  let used = 0; // ships drawn so far this frame

  // Routes and intercept points.
  const routeGeo = new THREE.BufferGeometry();
  const SEGS = 64; // route curves are drawn as this many segments (enough to stay smooth)
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
      const s = ringMarker(true);
      scene.add(s);
      ghosts[i] = s;
    }
    return ghosts[i];
  }

  // Order preview: dashed path to where the target will be.
  const previewGeo = new THREE.BufferGeometry().setFromPoints(Array.from({ length: 129 }, () => new THREE.Vector3()));
  const preview = new THREE.Line(previewGeo, new THREE.LineDashedMaterial({ color: OWNER_COLORS[0], dashSize: 1.5, gapSize: 1 }));
  preview.frustumCulled = false;
  scene.add(preview);

  // Explosions and weapon fire: one GPU particle system (gfx/fx.js).
  const fx = createFx(scene, quality === 'high' ? 4096 : 2048);
  // Rounds in flight, kept here only to know when and where they land.
  const MAX_SHOTS = 240;
  const shots = [];
  const WHITE = new THREE.Color('#ffffff');
  function shoot(a, b, color, lvl = 0, pd = false) {
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
    // Guns by research: PDC tracer streams, then coilgun slugs, then railguns.
    sh.c.set(color).lerp(WHITE, [0.45, 0.6, 0.85][lvl]);
    sh.rail = lvl === 2;
    sh.age = 0;
    // Rounds fired at a world move with it (see fx.drift).
    (sh.drift ??= new THREE.Vector3()).copy(fx.drift);
    sh.t0 = tNow;
    sh.life = lvl === 2 ? 0.05 : THREE.MathUtils.clamp(a.distanceTo(b) / (lvl ? 24 : 14), 0.1, 0.7);
    // Point-defence drones swat some rounds short of the target.
    sh.pd = pd && Math.random() < 0.3;
    if (sh.pd) sh.b.lerpVectors(a, b, 0.7 + Math.random() * 0.2);
    if (lvl === 2) fx.beam(sh.a, sh.b, sh.c, 0.35);
    else if (lvl === 1) fx.bolt(sh.a, sh.b, sh.c, sh.life, 0.5, 0.035);
    else {
      // A short burst of tracers, slightly spread.
      for (let k = 0; k < 4; k++) {
        tmp2.copy(sh.b).add(tmp3.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(0.25));
        fx.bolt(sh.a, tmp2, sh.c, sh.life, 0.22, 0.018, k * 0.045);
      }
    }
  }

  const tmp = new THREE.Vector3();
  const tmp2 = new THREE.Vector3();
  const tmp3 = new THREE.Vector3();
  const tmp4 = new THREE.Vector3(), tmp5 = new THREE.Vector3();
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
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(Math.round(w * pixelRatio), Math.round(h * pixelRatio), false);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    post.setSize(w, h, pixelRatio);
    markPx.value = pixelRatio;
    screenRes.value.set(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  // Lens flare: follows the sun while it's on screen and not behind a world.
  const sunNdc = new THREE.Vector3();
  function updateFlare(dt) {
    sunNdc.copy(sunGroup.position).project(camera);
    let vis = sunNdc.z < 1 && Math.abs(sunNdc.x) < 1.1 && Math.abs(sunNdc.y) < 1.1 ? 1 : 0;
    if (vis) {
      // Hidden behind a world? (A ray from the camera to the sun's centre.)
      const o = camera.position;
      tmp3.copy(sunGroup.position).sub(o);
      const len = tmp3.length();
      tmp3.divideScalar(len);
      for (const v of views) {
        if (!v.g.visible) continue;
        tmp2.copy(v.g.position).sub(o);
        const along = tmp2.dot(tmp3);
        if (along < 0 || along > len) continue;
        const miss = Math.sqrt(Math.max(0, tmp2.lengthSq() - along * along));
        if (miss < v.b.size) { vis = 0; break; }
      }
      // Fade at the screen edges, and when the sun is tiny far away.
      vis *= THREE.MathUtils.clamp((1.1 - Math.max(Math.abs(sunNdc.x), Math.abs(sunNdc.y))) * 4, 0, 1);
    }
    const f = post.flare;
    f.vis += (vis * 0.9 - f.vis) * Math.min(1, dt * 8 + 0.05);
    f.pos.set(sunNdc.x * 0.5 + 0.5, sunNdc.y * 0.5 + 0.5);
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
  /** Keep ships outside worlds (launching from a planet, a moon passing a fleet). */
  function unclip(p) {
    for (const v of views) {
      if (v.b.kind === 'station') continue; // ships dock there
      const q = bodyPos[v.b.id];
      if (!q) continue;
      // Ease ships out round the world over a zone twice its clearance, so
      // they curve past smoothly instead of snapping to its surface.
      const min = v.b.size * 1.25 + 0.25;
      const zone = min * 2;
      const dx = p.x - q.x, dy = p.y - q.y, dz = p.z - q.z;
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 >= zone * zone) continue;
      const d = Math.sqrt(d2);
      if (d < 1e-6) { p.x = q.x + min; continue; }
      // d' = d + (zone - d)² · min / zone²: min at the centre, d at the edge,
      // with a matching slope there (no kink).
      const k = (d + ((zone - d) ** 2) * min / (zone * zone)) / d;
      p.set(q.x + dx * k, q.y + dy * k, q.z + dz * k);
    }
  }
  /** Where docked ship j sits in a world's parking orbit (matches park()); its heading in `tan`. */
  function parkPos(b, j, radius, speed, seed, t, out, tan) {
    const p = bodyPos[b.id];
    const r1 = hash(seed, j);
    const a = r1 * Math.PI * 2 + t * speed * (0.8 + r1 * 0.4);
    const rr = radius * (1 + hash(j, seed) * 0.15);
    if (tan) tan.set(-Math.sin(a), 0, Math.cos(a)).multiplyScalar(Math.sign(speed) || 1);
    out.set(p.x + Math.cos(a) * rr, p.y + Math.sin(a * 0.7 + r1) * rr * 0.15, p.z + Math.sin(a) * rr);
    if (b.kind === 'station' && speed > 0) dock(b, j, t, out, tan);
    return out;
  }
  const dP = new THREE.Vector3(), dN = new THREE.Vector3();
  /**
   * Ships at a station take turns docking: about half of them, now and then,
   * drift in from the parking orbit to a port, sit there turning with the
   * station for a while, then back out. Moves `out` (and `tan`) from the
   * parking slot toward the port.
   */
  function dock(b, j, t, out, tan) {
    const h = hash(j, b.id * 7 + 3);
    if (h < 0.45) return; // this one never docks
    const period = 120 + h * 80;
    const ph = (t / period + hash(b.id, j * 5)) % 1;
    const w = THREE.MathUtils.smootherstep(ph, 0.5, 0.57) * (1 - THREE.MathUtils.smootherstep(ph, 0.75, 0.82));
    if (w <= 0) return;
    const v = views[b.id]?.b === b ? views[b.id] : views.find((x) => x.b === b);
    if (!v || !v.ports) return;
    const port = v.ports[j % v.ports.length];
    v.body.updateMatrixWorld();
    const S = b.size * STATION_SCALE;
    dP.set(port.p[0] * S, port.p[1] * S, port.p[2] * S).applyMatrix4(v.body.matrixWorld);
    dN.set(port.n[0], port.n[1], port.n[2]).transformDirection(v.body.matrixWorld);
    // Sit out from the port (a second ship at the same port waits further
    // out), and come in along the port's line.
    const off = SHIP_SCALE * 0.7 + Math.floor(j / v.ports.length) * SHIP_SCALE * 1.6;
    dP.addScaledVector(dN, off + (1 - w) * (1 - w) * 1.2);
    out.lerp(dP, w);
    if (tan) tan.lerp(dN.negate(), w).normalize();
  }
  const bA = new THREE.Vector3(), bB = new THREE.Vector3(), bTan = new THREE.Vector3(), bSide = new THREE.Vector3(), bH = new THREE.Vector3(), bN = new THREE.Vector3();
  /**
   * Leaving and joining a parking orbit. A departing ship starts from its own
   * parking slot and from there follows the fleet's motion exactly (the same
   * steady burn, so it never moves faster than its fleet), while its offset
   * from the fleet eases from "where it was parked" to "its place in the
   * formation" until the fleet is well clear of the world. Arriving is the
   * same in reverse, starting while the fleet is still well out (a fleet's
   * path ends at the world's centre, so its formation would otherwise sink
   * into it). Ships are kept clear of the world itself. `tmp` holds the ship's
   * formation place and `s` the fleet's centre; moves tmp; returns how far into
   * formation the ship is (1 = fully), with its slot heading in bTan.
   */
  const reach = (b) => b.size * 3 + 4; // the blend ends (or starts) this far out
  function blendTime(f, leaving) {
    // How long the fleet takes to get `reach` from the world. Cached per
    // fleet and per plan: a fleet re-planned in flight (new drives, running
    // dark, turned for home) restarts its clock mid-space, nowhere near its
    // origin, so then there's no departure to ease out of (0).
    const key = `${leaving ? 'd' : 'a'}${f.t0}:${f.T}`;
    if (f._blend && f._blend.key === key) return f._blend.w;
    const b = game_.bodies[leaving ? f.from : f.to];
    let w = 0;
    const gap = (u) => {
      const tt = leaving ? f.t0 + u : f.t0 + f.T - u;
      const q = fleetState(f, tt), c = posAt(game_, b, tt);
      return Math.hypot(q.x - c.x, q.y - c.y, q.z - c.z);
    };
    if (b && gap(0) < b.size * 2 + 1) {
      let lo = 0, hi = f.T * 0.45;
      if (gap(hi) >= reach(b)) {
        for (let i = 0; i < 14; i++) { const m = (lo + hi) / 2; if (gap(m) >= reach(b)) hi = m; else lo = m; }
      }
      w = Math.min(25, Math.max(4, hi));
    }
    Object.defineProperty(f, '_blend', { value: { key, w }, enumerable: false, configurable: true, writable: true });
    return w;
  }
  function slotOf(f, b, j, leaving, t, out, tan) {
    if (leaving || b.owner === f.owner) return parkPos(b, (leaving ? j : b.ships + j) % 20, b.size * 1.8 + 0.4, DOCK_SPEED, b.id * 13, t, out, tan);
    return parkPos(b, j % 20, b.size * 2.4 + 0.8, SIEGE_SPEED, b.id * 29 + f.owner, t, out, tan);
  }
  function blendPark(f, j, since, s, now) {
    if (f.probe) return 1;
    const leaving = since < f.T - since;
    const W = blendTime(f, leaving);
    const u = leaving ? since : f.T - since;
    if (u >= W) return 1;
    const b = game_.bodies[leaving ? f.from : f.to];
    const c = b && bodyPos[b.id];
    if (!c) return 1;
    const e = THREE.MathUtils.smootherstep(u, 0, W);
    slotOf(f, b, j, leaving, now, bA, bTan);
    // Both ends relative to the world: parked (bA) and in formation (bB,
    // which includes the fleet's own climb out).
    bA.sub(c);
    bB.set(tmp.x - c.x, tmp.y - c.y, tmp.z - c.z);
    // Blend in polar terms round the world, so a ship never passes through
    // it: its distance out eases between two safe values, and its angle swings
    // round the side it was already on. The plane of the swing: the line from
    // the world toward the fleet (steadied near the world by the route's
    // heading) and the ship's own side of it (fixed per ship, from its slot as
    // the fleet leaves or lands, so it never flips).
    bH.set(s.x - c.x, s.y - c.y, s.z - c.z).addScaledVector(dir, leaving ? reach(b) : -reach(b));
    if (bH.lengthSq() < 1e-8) bH.copy(dir);
    bH.normalize();
    slotOf(f, b, j, leaving, leaving ? f.t0 : f.t0 + f.T, bSide);
    bSide.sub(c).addScaledVector(bH, -bSide.dot(bH));
    if (bSide.lengthSq() < 1e-8) bSide.crossVectors(bH, UP);
    if (bSide.lengthSq() < 1e-8) bSide.set(1, 0, 0);
    bSide.normalize();
    bN.crossVectors(bH, bSide);
    // The slot's angle runs from just in front round the ship's side to just
    // past behind (so it never wraps), and swings to the fleet's line (angle
    // 0); the formation's own spread across that line is added on top.
    let a0 = Math.atan2(bA.dot(bSide), bA.dot(bH));
    if (a0 < -Math.PI / 2) a0 += Math.PI * 2;
    const r0 = Math.hypot(bA.dot(bH), bA.dot(bSide)), z0 = bA.dot(bN);
    const fAlong = bB.dot(bH);
    bB.addScaledVector(bH, -fAlong); // now just the spread across the line
    const ang = a0 * (1 - e);
    // Distance out: never closer than a safe height (a smooth limit, so no
    // kink), exact at both ends.
    const min = b.size * 1.3 + 0.4, k = min * 0.3;
    let r = r0 + (fAlong - r0) * e;
    const safe = (r + min + Math.sqrt((r - min) ** 2 + k * k)) / 2;
    r += (safe - r) * (1 - e) * THREE.MathUtils.smoothstep(e, 0, 0.05);
    bB.multiplyScalar(e)
      .addScaledVector(bH, Math.cos(ang) * r)
      .addScaledVector(bSide, Math.sin(ang) * r)
      .addScaledVector(bN, z0 * (1 - e));
    tmp.set(c.x + bB.x, c.y + bB.y, c.z + bB.z);
    return e;
  }

  let game_ = null;
  /** Is a point in sunlight (1), or in the shadow of a world (0)? Soft-edged. */
  function sunlit(p) {
    let vis = 1;
    const sx = sunGroup.position.x, sy = sunGroup.position.y, sz = sunGroup.position.z;
    let lx = sx - p.x, ly = sy - p.y, lz = sz - p.z;
    const ld = Math.hypot(lx, ly, lz) || 1;
    lx /= ld; ly /= ld; lz /= ld;
    for (const v of views) {
      if (v.b.kind !== 'planet' && v.b.kind !== 'moon') continue;
      const q = bodyPos[v.b.id];
      const ox = q.x - p.x, oy = q.y - p.y, oz = q.z - p.z;
      const t = ox * lx + oy * ly + oz * lz;
      if (t <= 0 || t > ld) continue;
      const mx = ox - lx * t, my = oy - ly * t, mz = oz - lz * t;
      const m = Math.sqrt(mx * mx + my * my + mz * mz);
      const r = v.b.size, pen = r * 0.08 + t * 0.012;
      if (m < r + pen) vis *= THREE.MathUtils.smoothstep(m, r - pen, r + pen);
    }
    return vis;
  }
  /**
   * Draws a ship at p, nose along n. `id` picks its hull and small variations
   * (length, hull tone), stable for that ship. glintMul dims the far-away glint.
   */
  /**
   * Attitude jets. A ship turns the way a real one does: paired jets at nose
   * and tail fire on opposite sides to start the turn, and the opposite pair
   * fires to stop it. From each ship's heading over time we track its turn
   * rate and how that rate is changing (the torque the jets must supply);
   * when that's large enough, the pair that gives it fires.
   */
  const spin = new Map(); // ship id -> { n, w (turn rate), a (its change), t }
  const jA = new THREE.Vector3(), jN = new THREE.Vector3(), jP = new THREE.Vector3(), jD = new THREE.Vector3();
  function attitudeJets(id, p, n, s, gt, t, px) {
    let st = spin.get(id);
    if (!st) { spin.set(id, { n: n.clone(), w: new THREE.Vector3(), a: new THREE.Vector3(), t: gt, seen: t }); return; }
    st.seen = t;
    const dt = gt - st.t;
    if (dt <= 1e-4) { if (dt < -1) st.t = gt; return; } // paused, or the clock jumped back
    if (dt > 2) { st.n.copy(n); st.w.set(0, 0, 0); st.a.set(0, 0, 0); st.t = gt; return; }
    // Turn rate: axis and speed from the change in heading (small-angle).
    jA.crossVectors(st.n, n).divideScalar(dt);
    const k = 1 - Math.exp(-dt * 6);
    jN.copy(jA).sub(st.w).divideScalar(dt); // how the rate is changing
    st.w.lerp(jA, k);
    st.a.lerp(jN, k);
    st.n.copy(n);
    st.t = gt;
    if (px < 2) return; // too small to see
    const alpha = st.a.length();
    // A pilot's hand, not a metronome: time is cut into uneven slots (each
    // ship its own rhythm), and each slot is a burst or a pause by the dice.
    const rate = 5 + hash(id, 17) * 5;
    const u = t * rate + hash(id, 23) * 9;
    const slot = Math.floor(u);
    const r1 = hash(id * 7 + slot, 31), r2 = hash(slot, id * 3 + 1);
    const frac = u - slot;
    let pow;
    if (alpha >= 0.04) {
      // Turning: mostly bursts, some longer, some cut short.
      pow = Math.min(1, (alpha - 0.04) * 3);
      const duty = 0.45 + 0.35 * pow;
      if (r1 > duty || frac > 0.35 + r2 * 0.6) return;
    } else {
      // Holding course: now and then a small trim to settle the heading.
      if (r1 > 0.05 || frac > 0.3) return;
      pow = 0.15 + r2 * 0.2;
      jN.set(r2 - 0.5, hash(slot, id) - 0.5, hash(id, slot * 5) - 0.5); // a small nudge, any way
    }
    const L = s * 0.32;
    // The nose must be pushed along a x n: its jet's exhaust points the other way; the tail's mirrors it.
    jD.crossVectors(alpha >= 0.04 ? st.a : jN, n);
    if (jD.lengthSq() < 1e-10) return;
    jD.normalize();
    const len = s * (0.06 + 0.1 * pow) * (0.75 + r2 * 0.5), wid = s * 0.05;
    const p0 = (0.35 + 0.5 * pow) * (0.8 + r1 * 0.4);
    // Sometimes only one of the pair fires (a nudge rather than a clean couple).
    const which = r2 < 0.18 ? 1 : r2 > 0.86 ? 2 : 3;
    if (which & 1) {
      jP.copy(p).addScaledVector(n, L).addScaledVector(jD, -s * 0.06);
      shipR.jet(jP, tmp5.copy(jD).negate(), len, wid, p0, id);
    }
    if (which & 2) {
      jP.copy(p).addScaledVector(n, -L * 0.85).addScaledVector(jD, s * 0.06);
      shipR.jet(jP, jD, len * (0.85 + r1 * 0.3), wid, p0, id + 0.5);
    }
  }
  function placeShip(p, n, color, burning, t, seed, id = seed, plume = 1, probe = false, glintMul = 1, gt = null) {
    if (used >= MAX_SHIPS) return;
    used++;
    const type = probe ? shipR.probeType + Math.floor(hash(id, 29) * shipR.probes) : Math.floor(hash(id, 3) * shipR.hulls);
    const k = 0.9 + hash(id, 5) * 0.25;
    const s = probe ? [0.3, 0.3, 0.3] : [SHIP_SCALE, SHIP_SCALE, SHIP_SCALE * k];
    unclip(p);
    const ppu = ppuAt(p);
    // Visible from afar as a point of light; brighter while the drive burns.
    // Visible from afar as a point of light that fades out smoothly as the
    // hull itself grows on screen (a hard cut-off made every docked fleet
    // blink at once as the view crossed it).
    const hullPx = 0.6 * SHIP_SCALE / 0.8 * ppu;
    const fade = 1 - THREE.MathUtils.smoothstep(hullPx, 3, 14);
    const glint = fade <= 0 ? null : [(burning ? 9 : 5) * (probe ? 0.8 : 1), (burning ? 1 : 0.7) * glintMul * fade];
    shipR.add(type, p, n, s, color, 0.82 + hash(id, 11) * 0.28, id, burning, plume * (0.8 + Math.sin(t * 40 + seed) * 0.05) * (probe ? 0.35 : 1), glint, 0.6 * ppu, sunlit(p));
    if (gt !== null && !probe) attitudeJets(id, p, n, s[2], gt, t, hullPx);
  }

  // Events at a world get something you can see there: a probe beacon, a
  // tumbling wreck, an incoming convoy, a cluster of supply crates. Each has a
  // gold glint so it shows from afar.
  const eventObjs = new Map();
  const evHull = new THREE.MeshStandardMaterial({ color: '#b9bec8', metalness: 0.5, roughness: 0.5 });
  const evDark = new THREE.MeshStandardMaterial({ color: '#4a505c', metalness: 0.4, roughness: 0.7 });
  function eventObj(kind) {
    const g = new THREE.Group();
    const box = (w, h, d, m = evHull) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
    if (kind === 'signal') {
      g.add(box(0.12, 0.12, 0.18));
      const dish = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 6, 0, Math.PI * 2, 0, Math.PI / 3), evHull);
      dish.position.z = 0.12; dish.rotation.x = -Math.PI / 2;
      g.add(dish, box(0.5, 0.004, 0.08, evDark));
    } else if (kind === 'wreck') {
      // Torn hull sections drifting apart, and glittering ice.
      for (let i = 0; i < 4; i++) {
        const m = box(0.12 + i * 0.03, 0.1, 0.22 - i * 0.03, i % 2 ? evDark : evHull);
        m.position.set((i - 1.5) * 0.18, Math.sin(i * 2) * 0.08, Math.cos(i * 3) * 0.1);
        m.rotation.set(i, i * 2, i * 0.5);
        g.add(m);
      }
      for (let i = 0; i < 6; i++) {
        const ice = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#cfe8ff', blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.7 }));
        ice.position.set(Math.sin(i * 5) * 0.35, Math.cos(i * 3) * 0.2, Math.sin(i * 7) * 0.3);
        ice.scale.setScalar(0.12);
        g.add(ice);
      }
    } else if (kind === 'convoy') {
      // Three haulers in line astern.
      for (let i = 0; i < 3; i++) {
        const m = new THREE.Mesh(shipGeos[2], evHull);
        m.position.set((i - 1) * 0.25, 0, -i * 0.5);
        m.scale.setScalar(0.8);
        g.add(m);
      }
    } else {
      // Supply cache: a cluster of crates on a frame.
      for (let i = 0; i < 6; i++) {
        const m = box(0.12, 0.1, 0.12, i % 3 ? evHull : evDark);
        m.position.set((i % 3 - 1) * 0.14, Math.floor(i / 3) * 0.11, 0);
        g.add(m);
      }
      g.add(box(0.46, 0.02, 0.16, evDark));
    }
    const glint = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#c7a6ff', blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    scene.add(g, glint);
    return { g, glint, kind };
  }
  function renderEvents(game, now, t) {
    const live = new Set();
    for (const h of game.happenings || []) {
      const b = game.bodies[h.at];
      if (b.visitor || !bodyPos[b.id]) continue;
      live.add(h.id);
      if (!eventObjs.has(h.id)) eventObjs.set(h.id, eventObj(h.kind));
      const o = eventObjs.get(h.id);
      const p = bodyPos[b.id];
      // A slow orbit round the world, just outside its parked ships.
      const rad = b.size * 2.9 + 1.2;
      const a = t * 0.15 + h.id;
      tmp.set(p.x + Math.cos(a) * rad, p.y + 0.4, p.z + Math.sin(a) * rad);
      if (o.kind === 'convoy') {
        // Flying in from deep space until it arrives.
        const k = THREE.MathUtils.clamp((h.starts - now) / 60, 0, 1);
        const dirA = h.id * 2.399;
        tmp.x += Math.cos(dirA) * k * 70;
        tmp.z += Math.sin(dirA) * k * 70;
        tmp2.set(-Math.cos(dirA), 0, -Math.sin(dirA));
        if (k <= 0) tmp2.set(-Math.sin(a), 0, Math.cos(a));
        o.g.lookAt(tmp.clone().add(tmp2));
      } else {
        o.g.rotation.x += 0.004;
        o.g.rotation.y += o.kind === 'wreck' ? 0.01 : 0.003;
      }
      o.g.position.copy(tmp);
      o.g.visible = true;
      const ppu = ppuAt(o.g.position);
      o.glint.position.copy(tmp);
      o.glint.scale.setScalar(((o.kind === 'signal' ? 0.6 + 0.4 * Math.sin(t * 5) : 1) * 9) / ppu);
      o.glint.material.opacity = ppu > 80 ? 0.3 : 0.9;
    }
    for (const [id, o] of eventObjs) {
      if (live.has(id)) continue;
      o.g.removeFromParent(); o.glint.removeFromParent();
      eventObjs.delete(id);
    }
  }

  let tNow = 0, warpK = 1;
  function render(game, ui, dt, t) {
    game_ = game;
    // Game seconds per real second (time warp, pause), smoothed: effects run
    // on the real clock but must keep up with worlds moving in game time.
    const realDt = t - tNow;
    if (realDt > 0 && realDt < 0.5) warpK += (THREE.MathUtils.clamp(dt / realDt, 0, 20) - warpK) * Math.min(1, realDt * 4);
    tNow = t;
    const now = game.time;
    const stars = game.stars || [{ r: 0, period: 1, phase: 0, size: 1 }];
    stars.slice(0, 2).forEach((st, i) => {
      const g = i ? sun2 : sunGroup;
      const q = starPos(game, i, now);
      g.visible = true;
      g.position.set(q.x, q.y, q.z);
      g.scale.setScalar(st.size);
    });
    if (stars.length < 2) sun2.visible = false;
    starLights.pos.value[0].copy(sunGroup.position);
    starLights.pos.value[1].copy(sun2.position);
    if (sun2.visible) starLights.col.value[1].set(1.25, 0.95, 0.72);
    else starLights.col.value[1].set(0, 0, 0);
    sun.update(t);
    holoT.value = t;
    fx.update(t);
    if (belt) belt.update(now);
    if (sun2.visible) sunB.update(t + 50);
    sky.update(t, pixelRatio);
    const techOf = (o, k) => (o >= 0 && game.tech ? game.tech[o][k] : 0);
    // Camera: follow the focused body, with inertia on rotation.
    for (const v of views) {
      const p = posAt(game, v.b, now);
      bodyPos[v.b.id] = p;
    }
    // Keep the view centre inside the system so it can't drift off into space.
    let extent = 0;
    for (const v of views) if (present(game, v.b, now)) extent = Math.max(extent, Math.hypot(bodyPos[v.b.id].x, bodyPos[v.b.id].z));
    extent = extent * 1.2 + 20;
    const flat = Math.hypot(orbit.target.x, orbit.target.z);
    if (flat > extent) { orbit.target.x *= extent / flat; orbit.target.z *= extent / flat; }
    orbit.target.y = THREE.MathUtils.clamp(orbit.target.y, -extent * 0.3, extent * 0.3);
    if (orbit.fleet != null) {
      // Riding along with a selected fleet.
      const f = game.fleets.find((x) => x.id === orbit.fleet);
      if (!f) orbit.fleet = null;
      else { const s = fleetState(f, now); orbit.target.lerp(tmp.set(s.x, s.y, s.z), Math.min(1, dt * 6)); }
    }
    if (orbit.follow === null && orbit.fleet == null) orbit.target.y *= 1 - Math.min(1, dt * 2); // drift back to the plane of the orbits
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
    if (orbit.goalDist) {
      orbit.dist += (orbit.goalDist - orbit.dist) * Math.min(1, dt * 4);
      if (Math.abs(orbit.goalDist - orbit.dist) < 0.01 * orbit.dist) orbit.goalDist = null;
    }
    orbit.pol = THREE.MathUtils.clamp(orbit.pol, 0.15, Math.PI - 0.15);
    orbit.dist = THREE.MathUtils.clamp(orbit.dist, orbit.minDist, orbit.maxDist);
    camera.position.setFromSphericalCoords(orbit.dist, orbit.pol, orbit.az).add(orbit.target);
    camera.lookAt(orbit.target);
    // Near plane scaled to the zoom: close enough for a ship in your face,
    // far enough out that distant worlds keep their depth precision.
    const near = THREE.MathUtils.clamp(orbit.dist * 0.02, 0.01, 12);
    if (Math.abs(near - camera.near) > camera.near * 0.05) { camera.near = near; camera.far = farClip; camera.updateProjectionMatrix(); }
    camera.updateMatrixWorld();

    const w = window.innerWidth;
    const h = window.innerHeight;
    used = 0;
    shipR.begin(t, pixelRatio);

    // Moons and stations crowded against their planet on screen hide their
    // label; their ship counts ride on the planet's label instead.
    // Hostile fleets on their way to each world: count and soonest arrival.
    // Fog of war: what the player's sensors and intel reveal.
    const vis = ui.vis;
    const knowsWorld = (b) => !vis || vis.bodies.has(b.id);
    const seesFleet = (f) => !vis || f.owner === vis.owner || vis.seesFleet(f, fleetState(f, now));
    // Intel II: routes and landing points; Intel III: arrival times and warnings.
    const knowsDest = (f) => !vis || f.owner === vis.owner || (vis.intel >= 2 && seesFleet(f));
    // A listening post warns of anything heading for your worlds.
    const knowsEta = (f) => !vis || f.owner === vis.owner || (vis.intel >= 3 && seesFleet(f)) || (vis.warn && game.bodies[f.to].owner === vis.owner);
    const knowsSize = (f) => !vis || f.owner === vis.owner || vis.intel >= 1;
    const incoming = new Map();
    for (const f of game.fleets) {
      if (f.probe) continue;
      const tb = game.bodies[f.to];
      // Enemy arrivals (with intel), and your own reinforcements, always.
      if (f.owner === tb.owner ? f.owner !== (vis ? vis.owner : 0) : !knowsEta(f)) continue;
      const left = f.T - (now - f.t0);
      const k = `${f.to}:${f.owner}`;
      const cur = incoming.get(k) || { to: f.to, owner: f.owner, n: 0, eta: Infinity, sized: knowsSize(f) };
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
      if (b.owner !== NEUTRAL && b.ships > 0 && knowsWorld(b)) {
        if (!extras.has(b.parent)) extras.set(b.parent, []);
        extras.get(b.parent).push(`<span class="kid" style="color:${ownerColor(b.owner)}">+${b.ships}</span>`);
      }
    }

    for (const v of views) {
      const { b } = v;
      const p = bodyPos[b.id];
      v.g.position.set(p.x, p.y, p.z);
      // The trail starts at the world's current angle.
      if (v.line.material.uniforms) v.line.material.uniforms.uTh.value = b.phase + (2 * Math.PI * now) / b.period;
      if (b.parent !== null) {
        const q = bodyPos[b.parent];
        v.lineHolder.position.set(q.x, q.y, q.z);
      } else if (b.star) {
        const q = starPos(game, b.star, now);
        v.lineHolder.position.set(q.x, q.y, q.z);
      }
      if (v.reach) {
        v.reach.position.set(p.x, 0, p.z);
        v.reach.visible = ui.selected === b.id || ui.peek === b.id || ui.target === b.id;
      }
      // A security bureau's reach: agents on worlds inside it are hunted (a
      // bigger ring on a listening post). Shown while the world is looked at.
      {
        const looked = ui.selected === b.id || ui.peek === b.id || ui.target === b.id;
        const hasBureau = looked && knowsWorld(b) && b.structures.some((x) => x.type === 'bureau' && (x.left <= 0 || x.next) && !x.scrap);
        if (hasBureau && !v.bureau) {
          const pts = [];
          for (let i = 0; i <= 96; i++) { const a = (i / 96) * Math.PI * 2; pts.push(new THREE.Vector3(Math.cos(a), 0, Math.sin(a))); }
          v.bureau = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),
            new THREE.LineDashedMaterial({ color: '#7fd1c8', transparent: true, opacity: 0.6, dashSize: 0.03, gapSize: 0.025 }));
          v.bureau.computeLineDistances();
          world.add(v.bureau);
        }
        if (v.bureau) {
          v.bureau.visible = hasBureau;
          if (hasBureau) { v.bureau.position.set(p.x, 0, p.z); v.bureau.scale.setScalar(bureauReach(game, b)); }
        }
      }
      if (b.visitor) {
        const here = present(game, b, now);
        v.g.visible = here;
        if (!here) { v.label.style.visibility = 'hidden'; continue; }
        const comet = game.visit && game.visit.kind === 'comet';
        v.body.visible = v.tail.visible = comet;
        v.hulk.visible = !comet;
        if (comet) {
          // Tails grow and brighten as the comet nears the sun.
          const r = Math.max(1, Math.hypot(p.x, p.y, p.z));
          const len = THREE.MathUtils.clamp(2600 / r, 8, 60);
          const bright = THREE.MathUtils.clamp(120 / r, 0.55, 1);
          const away = tmp2.set(p.x, p.y, p.z).normalize();
          // Direction of travel, for the dust tail's backward curve.
          const ahead = posAt(game, b, now + 2);
          const back = new THREE.Vector3(p.x - ahead.x, p.y - ahead.y, p.z - ahead.z).normalize();
          const { ion, dust, coma } = v.tail.userData;
          ion.forEach((sp, i) => {
            const u = (i + 1) / ion.length;
            sp.position.copy(away).multiplyScalar(u * len);
            sp.scale.setScalar(0.8 + u * len * 0.12);
            sp.material.opacity = 0.5 * bright * (1 - u) ** 1.3;
          });
          dust.forEach((sp, i) => {
            const u = (i + 1) / dust.length;
            sp.position.copy(away).multiplyScalar(u * len * 0.75).addScaledVector(back, u * u * len * 0.35);
            sp.scale.setScalar(1 + u * len * 0.18);
            sp.material.opacity = 0.38 * bright * (1 - u) ** 1.1;
          });
          coma.position.set(0, 0, 0);
          coma.scale.setScalar(2.2 + bright * 3);
          coma.material.opacity = 0.35 + bright * 0.4;
        } else v.hulk.rotation.y += dt * 0.08;
      }
      // Slow spin; stations turn faster, asteroids tumble.
      if (b.kind === 'station') {
        v.body.rotation.z += dt * (v.body.userData.spin ?? 0.5);
        const rotor = v.body.userData.rotor; // the crew ring turns on its own bearing
        if (rotor) rotor.rotation.z += dt * rotor.userData.spin;
        // Owner's paint, lit windows once held, and dark in a world's shadow.
        v.body.userData.set(b.owner === NEUTRAL ? '#6a7080' : ownerColor(b.owner), sunlit(p), b.owner !== NEUTRAL);
      }
      else if (b.kind === 'asteroid') { v.body.rotation.x += dt * 0.3; v.body.rotation.y += dt * 0.2; }
      else {
        v.body.rotation.y += dt * 0.05;
        const cl = v.body.getObjectByName('clouds');
        if (cl) {
          cl.rotation.y += dt * 0.012;
          const H = cl.material.uniforms.uHoles.value;
          for (let i = 0; i < H.length; i++) {
            const hole = v.holes?.[i];
            if (!hole || !(v.surface.visible)) { H[i].w = 2; continue; }
            // The building's direction, in the cloud shell's own (turning) frame.
            tmp.copy(hole.dir).applyAxisAngle(yAxis, -cl.rotation.y);
            H[i].set(tmp.x, tmp.y, tmp.z, hole.cos);
          }
        }
        const u = v.body.material.uniforms;
        if (u) {
          u.uT.value = t;
          if (cl) u.uCloudShift.value = -cl.rotation.y / (Math.PI * 2);
          u.uCenter.value.set(p.x, p.y, p.z);
          v.occ.forEach((id, k) => { const q = bodyPos[id]; u.uOcc.value[k].set(q.x, q.y, q.z, game.bodies[id].size); });
          if (cl) cl.material.uniforms.uOcc.value = u.uOcc.value;
          if (v.atmo) {
            v.atmo.material.uniforms.uCenter.value.set(p.x, p.y, p.z);
            v.atmo.material.uniforms.uOcc.value = u.uOcc.value;
          }
          if (v.ring) {
            v.ring.updateMatrixWorld(true);
            u.uRingN.value.set(0, 0, 1).transformDirection(v.ring.matrixWorld);
            u.uRingIn.value = v.ring.userData.ring.inner;
            u.uRingOut.value = v.ring.userData.ring.outer;
            v.ring.material.uniforms.uCenter.value.set(p.x, p.y, p.z);
          }
        }
      }

      const col = ownerColor(b.owner);
      if (v.owner !== b.owner) {
        if (v.owner !== null) v.pulse = 1;
        v.owner = b.owner;
        // Signs of life: city lights on the night side of worlds someone holds.
        if (v.body.material && v.body.material.uniforms && v.body.material.uniforms.uCity) {
          v.body.material.uniforms.uCity.value = b.owner === NEUTRAL ? 0 : 1;
        }
        v.mark.material.uniforms.uColor.value.set(col);
        v.label.style.color = col;
      }
      v.pulse = Math.max(0, v.pulse - dt);

      // Structures: rebuilt when anything is added, finished or lost.
      const sig = b.owner + ':' + b.structures.map((x) => x.type + x.level + ((x.left > 0 && !x.next) || x.scrap ? '~' : '')).join();
      if (sig !== v.sig) {
        v.sig = sig;
        if (v.structs) v.structs.removeFromParent();
        v.surface.clear();
        v.structs = new THREE.Group();
        v.wips = []; // per yard, the hull's build stages: shown as that yard's ship comes together
        v.holes = [];
        v.spins = []; // parts that turn on their own (a habitat drum)
        // A station shows what's built on it as modules on its hub.
        if (b.kind === 'station') {
          setStationModules(v.body, b.structures.map((x) => ({ type: x.type, level: x.level, done: !x.scrap && (x.left <= 0 || !!x.next) })), ghostMat);
          v.wips.push(...v.body.userData.station.wip);
        } else b.structures.forEach((x, k) => {
          const m = structureMesh(x.type, b, k, !x.scrap && (x.left <= 0 || !!x.next), x.level, shipR.uT, ghostMat, b.owner === NEUTRAL ? '#6a7080' : ownerColor(b.owner));
          if (m.userData.wip) v.wips.push(m.userData.wip);
          // A clearing in the clouds over each surface building.
          if (x.type !== 'shipyard' && x.type !== 'skimmer') v.holes.push({ dir: m.position.clone().normalize(), cos: Math.cos(Math.min(0.6, (Math.max(0.25, b.size * 0.14) * (x.type === 'lab' || x.type === 'mine' ? 1.5 : 1.15)) / b.size)) });
          if (m.userData.spin) v.spins.push(...m.userData.spin);
          // Surface structures turn with the world; yards and skimmers orbit on their own.
          (x.type === 'shipyard' || x.type === 'skimmer' ? v.structs : v.surface).add(m);
        });
        v.g.add(v.structs);
      }
      if (v.wips) {
        // Each working yard shows its hull: the frame as soon as work starts,
        // plating from a third of the way, the drive from two thirds.
        const slips = b.slips || [];
        v.wips.forEach((stages, i) => stages.forEach((m, j) => { m.visible = i < slips.length && slips[i] >= j / 3; }));
        for (const sp of v.spins) sp.mesh.rotation[sp.axis] += dt * sp.rate;
      }
      const selected = ui.selected === b.id;
      const targeted = ui.target === b.id;
      const ppu = ppuAt(v.g.position);
      // Markers stay a readable size on screen however far out we are.
      // Moons and stations get smaller rings than planets.
      const sat = b.parent !== null;
      // Zoomed out, the ring hugs the world (a small floor so it still
      // shows its owner), not a big circle round a dot; and a finer line.
      const markPx = Math.max(b.size * (sat ? 2.0 : 2.4) * ppu, selected || targeted ? 8 : sat ? 4 : 5.5);
      v.mark.scale.setScalar((markPx / ppu) * (1 + v.pulse * 0.6 + (selected ? Math.sin(t * 5) * 0.06 : 0)));
      v.mark.material.uniforms.uWidth.value = THREE.MathUtils.clamp(markPx / 12, 1, 1.6);
      v.mark.material.uniforms.uOpacity.value = selected ? 1 : targeted ? 0.9 : b.owner === NEUTRAL ? 0.25 : 0.7;
      // Up close the world itself is the marker: fade the ring out of the way.
      if (b.size * ppu > 70) v.mark.material.uniforms.uOpacity.value *= 0.25;
      // Crowded against its planet when zoomed out: no ring (its ships show on the planet's label).
      if (b.parent !== null && !selected && !targeted) {
        // Fade (never snap) as it closes on its planet on screen.
        const q = bodyPos[b.parent];
        tmp.copy(v.g.position).project(camera);
        tmp2.set(q.x, q.y, q.z).project(camera);
        const sep = Math.hypot((tmp.x - tmp2.x) * w, (tmp.y - tmp2.y) * h) / 2;
        v.mark.material.uniforms.uOpacity.value *= THREE.MathUtils.smoothstep(sep, 30, 60);
      }
      // Garrison veterancy shows as gaps in the ring (only if we can see it).
      const lvl = knowsWorld(b) && b.ships > 0 ? vetLevel(b.vet) : 0;
      v.mark.material.uniforms.uLvl.value = lvl;
      if (selected || targeted) v.mark.material.uniforms.uColor.value.set(selected ? '#ffffff' : col);
      else v.mark.material.uniforms.uColor.value.set(col);

      // Docked ships in a parking orbit; attackers circle wider.
      const known = knowsWorld(b);
      if (v.structs) v.structs.visible = known;
      v.surface.visible = known;
      if (b.kind === 'station') for (const m of v.body.userData.station.parts) m.visible = known;
      const fighting = known && b.sieges.length > 0;
      const defPts = [];
      const atkPts = [];
      const park = (n, owner, radius, speed, seed, out) => {
        for (let j = 0; j < n; j++) {
          if (used >= MAX_SHIPS) return;
          parkPos(b, j, radius, speed, seed, now, tmp, dir);
          placeShip(tmp, dir, ownerColor(owner), false, t, j, seed * 131 + j, 1, false, 0.6);
          if (out) out.push({ p: tmp.clone(), owner });
        }
      };
      if (known) park(Math.min(b.ships, 20), b.owner, b.size * 1.8 + 0.4, DOCK_SPEED, b.id * 13, fighting ? defPts : null);
      for (const g of known ? b.sieges : []) park(Math.min(g.n, 20), g.owner, b.size * 2.4 + 0.8, SIEGE_SPEED, b.id * 29 + g.owner, atkPts);

      if (fighting) {
        // Battle effects drift with the world (in real seconds), so explosions
        // stay with the ships fighting there even with time sped up.
        const qa = posAt(game, b, now + 0.5), qb = posAt(game, b, now - 0.5);
        fx.drift.set(qa.x - qb.x, qa.y - qb.y, qa.z - qb.z).multiplyScalar(warpK);
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
            shoot(src.p, dst.p, ownerColor(src.owner), Math.min(2, techOf(src.owner, 'weapons')), techOf(dst.owner, 'armour') >= 2);
          }
          n -= 1;
        }
        // Each ship lost goes up exactly where it was: the parking slots just
        // past the ones still drawn (the last ships in line are the ones
        // that vanish), so the flash is where a ship just disappeared.
        // (Ships go first; with none left, the losses are guns on the surface.)
        for (let k = 0; k < Math.min(3, b.lostDef || 0); k++) {
          if (b.ships > 0 || !defPts.length) parkPos(b, b.ships + k, b.size * 1.8 + 0.4, DOCK_SPEED, b.id * 13, now, tmp2);
          else tmp2.copy(defPts[(Math.random() * defPts.length) | 0].p);
          fx.explosion(tmp2, 0.9 + Math.random() * 0.3);
        }
        const g = b.sieges[0];
        for (let k = 0; k < Math.min(3, b.lostAtk || 0); k++) {
          if (g) parkPos(b, g.n + k, b.size * 2.4 + 0.8, SIEGE_SPEED, b.id * 29 + g.owner, now, tmp2);
          else if (atkPts.length) tmp2.copy(atkPts[(Math.random() * atkPts.length) | 0].p);
          else break;
          fx.explosion(tmp2, 0.9 + Math.random() * 0.3);
        }
      }
      fx.drift.set(0, 0, 0);
      b.lostDef = b.lostAtk = 0;
      if (b.captured) { v.pulse = 1; b.captured = false; fx.ring(tmp.set(p.x, p.y, p.z), ownerColor(b.owner), b.size * 3.5, 1.4); }

      // A megaproject: a gold ring round the world, drawn as far round as the
      // work has got; a full, brighter ring once it's finished.
      const prog = b.wonder ? 1 : b.project ? Math.max(0.02, Math.min(1, 1 - b.project.left / PROJECTS[b.project.key].time)) : 0;
      const step = Math.round(prog * 60);
      if (v.megaStep !== step) {
        v.megaStep = step;
        if (v.mega) { v.g.remove(v.mega); v.mega.geometry.dispose(); v.mega = null; }
        if (step) {
          const R = b.size * 2.1 + 0.6;
          v.mega = new THREE.Mesh(new THREE.TorusGeometry(R, Math.max(0.05, b.size * 0.04), 6, 96, (step / 60) * Math.PI * 2),
            new THREE.MeshBasicMaterial({ color: '#c7a6ff', transparent: true, opacity: b.wonder ? 0.9 : 0.55, depthWrite: false }));
          v.mega.rotation.x = Math.PI / 2;
          v.g.add(v.mega);
        }
      }
      if (v.mega) v.mega.rotation.z = t * 0.05;

      // Label: ship count big, name small. Moons and stations hide their label
      // while they're crowded against their planet on screen (unless busy).
      tmp.copy(v.g.position).project(camera);
      const hide = tmp.z > 1 || crowded.has(b.id);
      if (hide) { v.label.style.visibility = 'hidden'; continue; }
      const attackers = (known ? b.sieges : []).map((g) => `<span class="atk" style="color:${ownerColor(g.owner)}">${icon('attack')}${g.n}</span>`).join('');
      const count = !known ? '<b class="unk">?</b>' : b.owner === NEUTRAL ? `<i class="guns">${icon('guns')}${Math.ceil(b.guns)}</i>` : b.ships ? `<b>${b.ships}</b>` : '';
      const kids = (extras.get(b.id) || []).join('');
      const warn = (incomingTo.get(b.id) || []).map((x) => {
        const e = Math.max(0, x.eta);
        const own = x.owner === b.owner;
        return `<span class="${own ? 'rein' : 'inc'}" style="color:${ownerColor(x.owner)}">${icon(own ? 'reinforce' : 'incoming')}${x.sized ? x.n : '?'} ${Math.floor(e / 60)}:${String(Math.floor(e % 60)).padStart(2, '0')}</span>`;
      }).join('');
      // Events at this world: an icon, then the countdown to start or the hold left.
      const evs = (game.happenings || []).filter((h) => h.at === b.id).map((h) => {
        const E = EVENTS[h.kind];
        const soon = now < h.starts;
        // Before it starts: time until it does. Held: hold time left (in the
        // holder's colour). Unheld: time until it's gone.
        const holding = !soon && h.holder !== NEUTRAL;
        const left = Math.max(0, soon ? h.starts - now : holding ? E.hold - h.held : h.ends - now);
        const c = holding ? ownerColor(h.holder) : '#c7a6ff';
        const t = `${Math.floor(left / 60)}:${String(Math.floor(left % 60)).padStart(2, '0')}`;
        return `<span class="ev" style="color:${c}">${icon(h.kind)} ${soon ? `in ${t}` : holding ? `hold ${t}` : `gone ${t}`}</span>`;
      }).join('');
      const perk = (b.perk ? `<i class="perk" title="${PERKS[b.perk].name}">${icon(b.perk)}</i> ` : '')
        + (b.wonder ? `<i class="perk">${icon(b.wonder)}</i> ` : b.project ? `<i class="perk proj">${icon(b.project.key)}</i> ` : '');
      const text = `<span class="row1">${count}${kids}</span>${attackers}${warn}${evs}<small>${perk}${b.name}</small>`;
      if (text !== v.shown) { v.label.innerHTML = text; v.shown = text; }
      v.label.classList.toggle('can', ui.mode === 'project' && b.owner === (ui.me ?? 0) && !cantProject(game, b, ui.projKey));
      v.label.style.visibility = 'visible';
      const x = (tmp.x * 0.5 + 0.5) * w;
      const y = (-tmp.y * 0.5 + 0.5) * h;
      v.label.style.transform = `translate(${x}px, ${y + markPx / 2 + 2}px) translate(-50%, 0)`;
    }

    renderEvents(game, now, t);

    // Fleets in flight.
    let routeN = 0;
    let ghostN = 0;
    for (const f of game.fleets) {
      if (!seesFleet(f)) continue;
      const s = fleetState(f, now);
      const color = ownerColor(f.owner);
      // The formation faces along the whole route (start to landing point), not
      // the momentary velocity, so it never swings round; and it's a compact
      // block (columns grow with the square root of the size), never a long line.
      dir.set(f.p1.x - f.p0.x, f.p1.y - f.p0.y, f.p1.z - f.p0.z);
      if (dir.lengthSq() < 1e-9) dir.set(s.nx, s.ny, s.nz);
      dir.normalize();
      perp.crossVectors(dir, UP);
      if (perp.lengthSq() < 1e-6) perp.set(1, 0, 0);
      perp.normalize();
      // Without Intel I you can't count an enemy fleet: draw it as a token few.
      const drawn = f.probe ? 1 : knowsSize(f) ? f.n : Math.min(f.n, 3);
      const cols = Math.max(3, Math.ceil(Math.sqrt(drawn)));
      const since = now - f.t0;
      // Where ship j sits in the formation (into tmp) with the fleet at state
      // `fs`, `el` seconds after launch; then eased to or from its parking slot.
      const formation = (j, fs, el, when) => {
        // A probe flies alone: it's drawn right on its track, where its tag and route are.
        if (f.probe) { tmp.set(fs.x, fs.y, fs.z); return 1; }
        const row = Math.floor(j / cols);
        const col = (j % cols) - (cols - 1) / 2;
        const open = (THREE.MathUtils.smoothstep(Math.min(el, f.T - el), 0, 12) * 0.5 + 0.5) * FORMATION;
        const h1 = hash(f.id, j), h2 = hash(j, f.id), h3 = hash(f.id + 7, j * 3);
        const drift = t * (0.3 + h1 * 0.4) + h2 * 6;
        tmp.set(fs.x, fs.y, fs.z)
          .addScaledVector(perp, (col * (0.8 + h3 * 0.4) + (row % 2) * 0.4 + (h1 - 0.5) * 0.6 + Math.sin(drift) * 0.08) * open)
          .addScaledVector(UP, ((h2 - 0.5) * 0.9 + Math.cos(drift * 0.8) * 0.06) * open)
          .addScaledVector(dir, (-row * (0.9 + h3 * 0.4) - (h2 - 0.5) * 0.7) * open);
        return blendPark(f, j, el, fs, when);
      };
      // Near the world (leaving or joining a parking orbit) ships move on
      // manoeuvring thrusters, nose along the way they're actually going
      // relative to the world; the main drive lights only once they're clear
      // (and is cut as they come in), so a torch never fires against the motion.
      const NEAR = 0.8; // formation blend below which only thrusters fire
      const ahead = f.probe ? null : fleetState(f, now + 0.5);
      const home = !f.probe && game_.bodies[since < f.T - since ? f.from : f.to];
      for (let j = 0; j < drawn; j++) {
        if (used >= MAX_SHIPS) break;
        // Formation: a loose, uneven block. Each ship keeps its own offset
        // and drifts a little, so it reads as crewed ships, not a grid. It
        // opens out after launch and closes up (only partly) before arrival.
        // Leaving and arriving: ease between the parking orbit and the
        // formation along an arc round the world (never a dash through or
        // round it at the last moment).
        const kf = formation(j, s, since, now);
        const h3 = hash(f.id + 7, j * 3);
        // Each ship turns over for braking at its own moment (a few seconds
        // either side), so a task force doesn't flip as one.
        const sj = f.probe ? s : fleetState(f, now + (h3 - 0.5) * 2.5);
        tmp3.set(sj.nx, sj.ny, sj.nz);
        let burning = sj.burning;
        let plume = 1 + 0.35 * techOf(f.owner, 'drives');
        if (kf < 1 && home) {
          // Its own motion relative to the world, half a second on.
          const here = tmp4.copy(tmp);
          formation(j, ahead, since + 0.5, now + 0.5);
          const c0 = posAt(game_, home, now), c1 = posAt(game_, home, now + 0.5);
          tmp5.set(tmp.x - here.x - (c1.x - c0.x), tmp.y - here.y - (c1.y - c0.y), tmp.z - here.z - (c1.z - c0.z));
          tmp.copy(here);
          bTan.lerp(tmp5.lengthSq() > 1e-8 ? tmp5.normalize() : bTan, THREE.MathUtils.smoothstep(kf, 0, 0.25));
          // Turn from that heading to the burn as the drive comes up (via a
          // sideways axis if they're nearly opposite, never through zero).
          const w = THREE.MathUtils.smoothstep(kf, NEAR, 1);
          tmp3.lerp(bTan, 1 - w);
          if (tmp3.lengthSq() < 0.05) tmp3.addScaledVector(perp, 0.4);
          tmp3.normalize();
          if (kf < NEAR) {
            // Thrusters only: short, flickering puffs.
            burning = Math.sin(t * (5 + h3 * 4) + j * 1.7) > 0.35;
            plume = 0.12;
          } else plume *= THREE.MathUtils.smoothstep(kf, NEAR, 1) * 0.9 + 0.1;
        }
        placeShip(tmp, tmp3, color, burning, t, j, f.id * 97 + j, plume, f.probe, 1, now);
      }
      if (routeN < 200 * SEGS && knowsDest(f)) {
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
        gh.material.uniforms.uColor.value.set(color);
        // Enemy landing points pulse so they stand out.
        const hostile = f.owner !== (ui.me ?? 0);
        const pulse = hostile ? 1 + 0.35 * Math.sin(t * 6) : 1;
        gh.material.uniforms.uOpacity.value = hostile ? 0.9 : 0.5;
        gh.scale.setScalar((hostile ? 22 : 14) * pulse / ppuAt(gh.position));
      }
    }
    shipR.end();
    // Forget ships not drawn for a while (landed, destroyed, off screen).
    if (spin.size > 400 || Math.floor(t) % 5 === 0) for (const [k, v] of spin) if (t - v.seen > 3) spin.delete(k);

    // Ship counts on fleets in flight: a small tag beside each one.
    let fl = 0;
    for (const f of game.fleets) {
      const s = fleetState(f, now);
      tmp.set(s.x, s.y, s.z).project(camera);
      const el = fleetLabel(fl++);
      if (tmp.z > 1 || !seesFleet(f)) { el.style.visibility = 'hidden'; continue; }
      const mine = f.owner === (ui.me ?? 0);
      // Probes: just an icon from afar, named when the camera is close.
      const text = f.probe ? `${icon('probe')}${camera.position.distanceTo(tmp2.set(s.x, s.y, s.z)) < 60 ? ' probe' : ''}` : `${icon('fleet')}${knowsSize(f) ? f.n : '?'}${f.dark ? ` ${icon('dark')}` : ''}`;
      const lv = knowsSize(f) ? vetLevel(f.vet) : 0;
      if (el._v !== lv) { el._v = lv; el.dataset.v = lv; }
      if (el._t !== text) { el._t = text; el.innerHTML = text; }
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

    // Rounds landing: sparks where they hit (or a puff where point defence got them).
    for (const sh of shots) {
      if (!sh.live) continue;
      sh.age += dt;
      if (sh.age < sh.life) continue;
      sh.live = false;
      fx.drift.copy(sh.drift);
      tmp.copy(sh.b).addScaledVector(sh.drift, tNow - sh.t0);
      if (sh.pd) fx.intercept(tmp);
      else fx.impact(tmp, sh.c, sh.rail);
    }
    fx.drift.set(0, 0, 0);
    fx.update(t, (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) / window.innerHeight);

    // Order preview.
    if (ui.preview) {
      const { p1 } = ui.preview;
      preview.visible = true;
      const pf = { ...ui.preview, t0: 0 };
      for (let k = 0; k <= 128; k++) {
        const q = fleetState(pf, (k / 128) * pf.T);
        previewGeo.attributes.position.setXYZ(k, q.x, q.y, q.z);
      }
      previewGeo.attributes.position.needsUpdate = true;
      preview.computeLineDistances();
      preview.material.dashSize = 6 / ppuAt(tmp.set(p1.x, p1.y, p1.z));
      preview.material.gapSize = preview.material.dashSize * 0.7;
      const gh = ghost(ghostN++);
      gh.visible = true;
      gh.position.set(p1.x, p1.y, p1.z);
      gh.material.uniforms.uColor.value.set('#ffffff');
      gh.material.uniforms.uOpacity.value = 0.6;
      gh.scale.setScalar(22 / ppuAt(gh.position));
    } else {
      preview.visible = false;
    }

    updateFlare(dt);
    hullPx.value = (window.innerHeight * pixelRatio) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
    dustMat.uniforms.uBox.value = orbit.dist * 0.9;
    dustMat.uniforms.uPR.value = pixelRatio;
    // Depth of field only when zoomed in close (and on High).
    post.uniforms.uFocus.value = orbit.dist;
    post.uniforms.uDof.value = quality === 'high' ? 1 - THREE.MathUtils.smoothstep(orbit.dist, 10, 40) : 0;
    adapt(t);
    post.render(scene, camera, t);
  }

  /** Nearest body to a screen point, within a finger's reach. */
  function pick(x, y) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    let best = null;
    let bestD = Infinity;
    for (const v of views) {
      if (!v.g.visible) continue; // a visitor that isn't here
      tmp.copy(v.g.position).project(camera);
      if (tmp.z > 1) continue;
      const d = Math.hypot((tmp.x * 0.5 + 0.5) * w - x, (-tmp.y * 0.5 + 0.5) * h - y);
      const r = Math.max(30, v.b.size * ppuAt(v.g.position) + 12);
      if (d < r && d < bestD) { bestD = d; best = v.b.id; }
    }
    return best;
  }

  /** Lock the camera onto a fleet and glide in a little. */
  function followFleet(game, id) {
    orbit.follow = null;
    orbit.fleet = id;
    orbit.goalDist = Math.min(orbit.dist, 10);
  }
  /** Nearest fleet (of `owner`) to a screen point, within a finger's reach. */
  function pickFleet(game, x, y, owner) {
    let best = null;
    let bestD = 30;
    for (const f of game.fleets) {
      if (f.owner !== owner) continue;
      const s = fleetState(f, game.time);
      tmp.set(s.x, s.y, s.z).project(camera);
      if (tmp.z > 1) continue;
      const sx = (tmp.x * 0.5 + 0.5) * window.innerWidth, sy = (-tmp.y * 0.5 + 0.5) * window.innerHeight;
      // The ships themselves, or their tag (drawn just right of them).
      const d = Math.min(Math.hypot(sx - x, sy - y), Math.hypot(sx + 32 - x, sy - y) - 6);
      if (d < bestD) { bestD = d; best = f.id; }
    }
    return best;
  }

  function groundAt(x, y) {
    const ndc = new THREE.Vector3((x / window.innerWidth) * 2 - 1, -(y / window.innerHeight) * 2 + 1, 0.5).unproject(camera);
    const ray = new THREE.Ray(camera.position, ndc.sub(camera.position).normalize());
    // Prefer the plane of the orbits, so zooming toward the cursor never lifts
    // the view centre off into empty space above or below the system.
    const ecliptic = new THREE.Plane(UP.clone(), -orbit.target.y);
    const hit = ray.intersectPlane(ecliptic, new THREE.Vector3());
    if (hit && hit.distanceTo(camera.position) < orbit.dist * 4) return hit;
    const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(camera.getWorldDirection(new THREE.Vector3()), orbit.target);
    return ray.intersectPlane(plane, new THREE.Vector3());
  }
  function zoomAt(x, y, factor) {
    orbit.fleet = null;
    // Zoom toward the fingers, wherever they are.
    orbit.follow = null;
    orbit.goalDist = null;
    const before = groundAt(x, y);
    const next = THREE.MathUtils.clamp(orbit.dist * factor, orbit.minDist, orbit.maxDist);
    const k = next / orbit.dist;
    orbit.dist = next;
    if (before) orbit.target.lerp(before, 1 - k);
  }
  function pan(dx, dy) {
    orbit.fleet = null;
    orbit.follow = null;
    const perPx = (2 * orbit.dist * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) / window.innerHeight;
    const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
    const fwd = new THREE.Vector3().crossVectors(UP, right).normalize();
    orbit.target.addScaledVector(right, -dx * perPx).addScaledVector(fwd, dy * perPx);
  }
  function focus(game, id, zoom = true) {
    orbit.fleet = null;
    orbit.follow = id;
    if (id === null || !zoom) return;
    const b = game.bodies[id];
    // Glide in rather than jump.
    orbit.goalDist = Math.max(orbit.minDist, b.size * 9 + 3);
  }
  /** The point a drag should turn around: the world under the cursor, else
   * where the cursor meets the plane through the current view centre. */
  function pivotAt(game, x, y) {
    const id = pick(x, y);
    if (id !== null) return views[id].g.position.clone();
    return groundAt(x, y) || orbit.target.clone();
  }
  /** Turn the view around a pivot (camera and look-at point both swing). */
  function rotateAround(pivot, daz, dpol) {
    orbit.fleet = null;
    orbit.follow = null;
    orbit.goalDist = null;
    const off = new THREE.Vector3().subVectors(camera.position, orbit.target);
    const sph = new THREE.Spherical().setFromVector3(off);
    const pol = THREE.MathUtils.clamp(sph.phi + dpol, 0.15, Math.PI - 0.15);
    dpol = pol - sph.phi;
    const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0).normalize();
    const q = new THREE.Quaternion().setFromAxisAngle(UP, daz).multiply(new THREE.Quaternion().setFromAxisAngle(right, dpol));
    const cam = camera.position.clone().sub(pivot).applyQuaternion(q).add(pivot);
    orbit.target.sub(pivot).applyQuaternion(q).add(pivot);
    sph.setFromVector3(cam.clone().sub(orbit.target));
    orbit.az = sph.theta;
    orbit.pol = sph.phi;
    orbit.dist = sph.radius;
  }
  /** Is the camera locked onto a world or a fleet? */
  const following = () => orbit.follow !== null || orbit.fleet != null;
  /** Zoom in or out about the view centre (keeps any lock). */
  function zoomBy(factor) {
    orbit.goalDist = null;
    orbit.dist = THREE.MathUtils.clamp(orbit.dist * factor, orbit.minDist, orbit.maxDist);
  }
  /** Zoom toward a world if the cursor is on one, else toward the cursor.
   * While locked onto something, zoom about it instead. */
  function zoomToward(x, y, factor) {
    if (following()) { zoomBy(factor); return; }
    const id = pick(x, y);
    orbit.goalDist = null;
    if (id === null) { zoomAt(x, y, factor); return; }
    orbit.follow = null;
    const p = views[id].g.position;
    const next = THREE.MathUtils.clamp(orbit.dist * factor, orbit.minDist, orbit.maxDist);
    orbit.target.lerp(p, 1 - next / orbit.dist);
    orbit.dist = next;
  }

  /** Where a body is on screen, in CSS pixels (for tests and tooling). */
  function screenOf(id) {
    tmp.copy(views[id].g.position).project(camera);
    return { x: (tmp.x * 0.5 + 0.5) * window.innerWidth, y: (-tmp.y * 0.5 + 0.5) * window.innerHeight };
  }

  /** Switch graphics level: resolution, anti-aliasing and bloom now; world detail from the next game. */
  function setQuality(q) {
    quality = q;
    pixelRatio = maxPR();
    post.setSamples(q === 'high' ? 4 : 2);
    post.setLevel(q);
    resize();
  }
  post.setLevel(quality);

  // Dynamic resolution: if frames run slow, render fewer pixels (and creep
  // back up when there's headroom), so phones stay smooth. If a drop doesn't
  // speed things up, the frame rate is capped by the screen or power saving,
  // not the graphics: go back up and stop trying.
  let perfN = 0, perfAcc = 0, lastT = null, holdUntil = 0, trial = null, capped = false;
  function adapt(t) {
    if (lastT !== null) {
      const ft = t - lastT;
      if (ft > 0 && ft < 0.5) { perfAcc += ft; perfN++; }
    }
    lastT = t;
    if (perfN < 90) return;
    const avg = perfAcc / perfN;
    perfAcc = 0;
    perfN = 0;
    const max = maxPR();
    // Never below about two-thirds of full sharpness on high-density screens.
    const min = max >= 1.5 ? Math.max(1, max * 0.65) : max * 0.85;
    if (trial) {
      if (avg > trial.avg * 0.9) { pixelRatio = trial.pr; capped = true; resize(); }
      trial = null;
      return;
    }
    if (!capped && avg > 1 / 45 && pixelRatio > min) {
      trial = { pr: pixelRatio, avg };
      pixelRatio = Math.max(min, pixelRatio - 0.25);
      holdUntil = t + 20;
      resize();
    } else if (avg < 1 / 57 && pixelRatio < max && t > holdUntil) {
      pixelRatio = Math.min(max, pixelRatio + 0.25);
      resize();
    }
  }

  return { _debug: { scene, renderer, post, camera, fx, get pixelRatio() { return pixelRatio; } }, build, render, resize, setQuality, pick, pickFleet, followFleet, orbit, zoomAt, pan, focus, screenOf, pivotAt, rotateAround, zoomToward, zoomBy, following };
}
