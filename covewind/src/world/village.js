/**
 * The fishing village: houses on the shelf, lanes between them, laundry strung
 * across the gaps, and a harbour at the bottom of the hill.
 */
import {
  BoxGeometry,
  BufferGeometry,
  ConeGeometry,
  CylinderGeometry,
  Float32BufferAttribute,
  Group,
  Mesh,
  SphereGeometry,
  TorusGeometry,
} from 'three';
import { PLACES, terrainHeightAt } from './terrain.js';
import { HOUSE_SITES, LANES, lanePoint, laundryLines } from './village-plan.js';
import { createBoat, createHouse, createPier, createTree, createVillager } from './props.js';
import { createCloth } from './cloth.js';
import { MAT, CLOTH, mat } from '../core/materials.js';
import { archedDoor, campanile, gableRoofGeometry } from './architecture.js';
import { bakeStatic } from '../core/merge.js';
import { QUALITY } from '../core/quality.js';
import { chance, pick, rand, TAU } from '../core/utils.js';

// Pale stone paving, a shade lighter than the hillside it runs across.
const ROAD_MATERIAL = mat(0xe8d8b6);
ROAD_MATERIAL.polygonOffset = true;
ROAD_MATERIAL.polygonOffsetFactor = -2;
ROAD_MATERIAL.polygonOffsetUnits = -2;
const PAVING = mat(0xe2cfa9);

/** A ribbon that follows the ground — used for the lanes and the quayside. */
function ribbon(parent, points, width) {
  const positions = [];
  const indices = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    const prev = points[Math.max(0, i - 1)];
    const next = points[Math.min(points.length - 1, i + 1)];
    const tx = next.x - prev.x;
    const tz = next.z - prev.z;
    const len = Math.hypot(tx, tz) || 1;
    const nx = -tz / len;
    const nz = tx / len;
    const half = (p.width ?? width) / 2;
    for (const side of [-1, 1]) {
      const x = p.x + nx * half * side;
      const z = p.z + nz * half * side;
      positions.push(x, terrainHeightAt(x, z) + 0.3, z);
    }
    if (i > 0) {
      const a = (i - 1) * 2;
      indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const mesh = new Mesh(geometry, ROAD_MATERIAL);
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

/**
 * The church: a Venetian campanile over a little piazza, with the nave
 * beside it and a fountain in the square.
 */
function churchTower(parent) {
  const { x, z } = PLACES.church;
  const ground = terrainHeightAt(x, z);
  const group = new Group();
  group.position.set(x, ground - 0.5, z);
  group.rotation.y = 0.3;
  parent.add(group);

  const tower = campanile(group, { height: 44, width: 9 });
  tower.group.position.set(0, 0, 0);

  // The nave: pale stone, a gable facing the square, a rose window.
  const nave = new Group();
  nave.position.set(-17, 0, -2);
  group.add(nave);
  const body = new Mesh(new BoxGeometry(14, 13, 26), MAT.stone);
  body.position.y = 6.5;
  nave.add(body);
  const roof = new Mesh(gableRoofGeometry(26, 14, 5.5, 0.8), MAT.roof);
  roof.rotation.y = Math.PI / 2;
  roof.position.y = 13;
  nave.add(roof);
  const rose = new Mesh(new CylinderGeometry(1.9, 1.9, 0.4, 16), MAT.dark);
  rose.rotation.x = Math.PI / 2;
  rose.position.set(0, 9.5, 13.1);
  nave.add(rose);
  const roseRing = new Mesh(new TorusGeometry(2.1, 0.35, 6, 18), MAT.stoneDark);
  roseRing.position.set(0, 9.5, 13.2);
  nave.add(roseRing);
  archedDoor(nave, 0, 13, { w: 3.2, h: 5.4, material: MAT.woodDark });
  const apse = new Mesh(new CylinderGeometry(6, 6, 10, 14, 1, false, Math.PI / 2, Math.PI), MAT.stone);
  apse.position.set(0, 5, -13);
  nave.add(apse);
  const apseRoof = new Mesh(new ConeGeometry(6.6, 4, 14, 1, false, Math.PI / 2, Math.PI), MAT.roof);
  apseRoof.position.set(0, 12, -13);
  nave.add(apseRoof);

  // The piazza in front, and a fountain.
  const square = new Mesh(new CylinderGeometry(20, 20, 0.6, 24), PAVING);
  square.position.set(-8, 0.2, 22);
  group.add(square);
  const basin = new Mesh(new CylinderGeometry(3.4, 3.8, 1.2, 12), MAT.stone);
  basin.position.set(-8, 0.9, 22);
  group.add(basin);
  const water = new Mesh(new CylinderGeometry(3, 3, 0.2, 12), mat(0x62c4d6, { emissive: 0x10333a }));
  water.position.set(-8, 1.45, 22);
  group.add(water);
  const spout = new Mesh(new CylinderGeometry(0.4, 0.6, 3, 8), MAT.stone);
  spout.position.set(-8, 2.4, 22);
  group.add(spout);

  // Café tables with parasols round the edge of the square.
  for (let i = 0; i < 5; i++) {
    const a = 0.6 + i * 0.42;
    const tx = -8 + Math.cos(a) * 14;
    const tz = 22 + Math.sin(a) * 14;
    const table = new Mesh(new CylinderGeometry(0.8, 0.8, 0.15, 8), MAT.white);
    table.position.set(tx, 1.4, tz);
    group.add(table);
    const pole = new Mesh(new CylinderGeometry(0.08, 0.08, 3.4, 4), MAT.woodDark);
    pole.position.set(tx, 2.2, tz);
    group.add(pole);
    const shade = new Mesh(new ConeGeometry(2, 0.9, 8), i % 2 ? MAT.cream : MAT.red);
    shade.position.set(tx, 4, tz);
    group.add(shade);
  }

  group.traverse((o) => {
    if (o.isMesh) o.castShadow = o.receiveShadow = true;
  });
  return { group, bellPosition: { x, y: ground + tower.bellHeight, z } };
}

function harbour(parent, moorings) {
  const { x, z } = PLACES.harbour;

  // Quayside, then three piers reaching into the bay.
  const quay = [];
  for (let i = 0; i <= 12; i++) {
    const t = i / 12;
    quay.push({ x: x - 62 + t * 124, z: z - 10 + Math.sin(t * Math.PI) * 6, width: 11 });
  }
  ribbon(parent, quay, 11);

  for (let i = 0; i < 3; i++) {
    const px = x - 42 + i * 42;
    const pz = z + 20 + rand(-4, 4);
    createPier(parent, { x: px, z: pz, length: 52 + rand(-6, 10), rot: rand(-0.12, 0.12) });
    // Boats tied up alongside.
    for (let b = 0; b < 2; b++) {
      moorings.push(
        createBoat(parent, px + (b ? 9 : -9), pz + rand(-14, 14), rand(0.7, 0.95), {
          moored: true,
          heading: rand(-0.2, 0.2),
        })
      );
    }
  }

  // A crane-ish derrick and stacked crates give the quay some silhouette.
  const derrick = new Group();
  derrick.position.set(x + 52, terrainHeightAt(x + 52, z - 8), z - 8);
  parent.add(derrick);
  const mast = new Mesh(new CylinderGeometry(0.6, 0.8, 14, 6), MAT.woodDark);
  mast.position.y = 7;
  mast.castShadow = true;
  derrick.add(mast);
  const arm = new Mesh(new BoxGeometry(11, 0.7, 0.7), MAT.woodDark);
  arm.position.set(4, 13.4, 0);
  arm.rotation.z = -0.16;
  derrick.add(arm);

  for (let i = 0; i < 7; i++) {
    const crate = new Mesh(new BoxGeometry(rand(2, 3.4), 2, rand(2, 3)), pick([MAT.wood, MAT.woodDark, MAT.plaster2]));
    const cx = x - 50 + rand(0, 96);
    const cz = z - 16 + rand(-6, 6);
    crate.position.set(cx, terrainHeightAt(cx, cz) + 1, cz);
    crate.rotation.y = rand(0, TAU);
    crate.castShadow = true;
    parent.add(crate);
  }

  // Mooring buoys bobbing in the bay.
  for (let i = 0; i < 6; i++) {
    const buoy = new Mesh(new SphereGeometry(0.9, 8, 6), pick([MAT.red, MAT.yellow, MAT.white]));
    buoy.position.set(x + rand(-70, 70), 1.2, z + rand(28, 86));
    parent.add(buoy);
  }
}

function laundry(parent) {
  for (const { a, b } of laundryLines()) {
    const ay = terrainHeightAt(a.x, a.z) + 9.5;
    const by = terrainHeightAt(b.x, b.z) + 9.5;
    const mid = { x: (a.x + b.x) / 2, z: (a.z + b.z) / 2 };
    const length = Math.hypot(b.x - a.x, b.z - a.z);

    const line = new Mesh(new CylinderGeometry(0.08, 0.08, length, 4), MAT.woodDark);
    line.position.set(mid.x, (ay + by) / 2 - 0.6, mid.z);
    line.rotation.z = Math.PI / 2;
    line.rotation.y = -Math.atan2(b.z - a.z, b.x - a.x);
    parent.add(line);

    const items = 2 + Math.floor(rand(0, 3));
    for (let i = 0; i < items; i++) {
      const t = (i + 1) / (items + 1);
      const cloth = createCloth(parent, {
        width: rand(1.8, 3),
        height: rand(2.2, 3.4),
        mode: 'hang',
        material: pick(CLOTH),
      });
      cloth.position.set(
        a.x + (b.x - a.x) * t,
        ay + (by - ay) * t - 2.2,
        a.z + (b.z - a.z) * t
      );
      cloth.rotation.y = Math.atan2(b.z - a.z, b.x - a.x) + Math.PI / 2;
    }
  }
}

export function createVillage(scene) {
  const group = new Group();
  group.name = 'village';
  scene.add(group);

  for (const site of HOUSE_SITES) {
    createHouse(group, { ...site, tall: chance(0.12) });
  }

  // Lanes.
  for (const lane of LANES) {
    const points = [];
    for (let i = 0; i <= 18; i++) points.push(lanePoint(lane, i / 18));
    ribbon(group, points, lane.radius > 100 ? 7 : 6);
  }
  // A road down to the water.
  const down = [];
  for (let i = 0; i <= 12; i++) {
    const t = i / 12;
    down.push({
      x: PLACES.villageCentre.x + (PLACES.harbour.x - PLACES.villageCentre.x) * t + Math.sin(t * 4) * 9,
      z: PLACES.villageCentre.z + (PLACES.harbour.z - PLACES.villageCentre.z) * t,
    });
  }
  ribbon(group, down, 7);

  const { bellPosition } = churchTower(group);
  const moorings = [];
  harbour(group, moorings);
  laundry(group);

  // Trees around the edges of town, cypresses up by the church.
  const trees = Math.round(QUALITY.trees * 0.45);
  for (let i = 0; i < trees; i++) {
    const a = rand(0, TAU);
    const r = rand(60, 190);
    createTree(group, PLACES.villageCentre.x + Math.cos(a) * r, PLACES.villageCentre.z + Math.sin(a) * r, rand(0.7, 1.2));
  }
  for (let i = 0; i < 7; i++) {
    createTree(group, PLACES.church.x + rand(-34, 34), PLACES.church.z + rand(-30, 30), rand(0.75, 1.05), 'cypress');
  }

  const villagers = [];
  for (let i = 0; i < QUALITY.villagers; i++) {
    const a = rand(0, TAU);
    const r = rand(20, 150);
    const v = createVillager(group, PLACES.villageCentre.x + Math.cos(a) * r, PLACES.villageCentre.z + Math.sin(a) * r);
    if (v) villagers.push(v);
  }

  // Everything that stays put becomes a handful of meshes.
  bakeStatic(group);

  return { group, villagers, moorings, bellPosition };
}
