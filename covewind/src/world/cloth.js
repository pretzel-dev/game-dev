/**
 * Flags and laundry.
 *
 * Small enough to animate on the CPU (a flag is thirty-odd vertices), which
 * keeps them driven by the same wind the aeroplane feels — when a gust comes
 * through, the whole village notices at once.
 */
import { DoubleSide, Mesh, PlaneGeometry } from 'three';
import { MAT } from '../core/materials.js';
import { rand } from '../core/utils.js';

const patches = [];

// Cloth is visible from both sides; keep one double-sided clone per colour
// rather than flipping the shared material out from under everything else.
const doubleSided = new Map();
function clothMaterial(base) {
  let m = doubleSided.get(base);
  if (!m) {
    m = base.clone();
    m.side = DoubleSide;
    doubleSided.set(base, m);
  }
  return m;
}

/**
 * @param {object} opts
 * @param {'flag'|'hang'} opts.mode  Attached along its left edge, or its top.
 * @param {number} [opts.amplitude]  Scales how far it moves — a newspaper on
 *   the sand should stir, not fly.
 */
export function createCloth(
  parent,
  { width = 6, height = 4, mode = 'flag', material = MAT.linen, phase = rand(0, 10), amplitude = 1 } = {}
) {
  const segX = mode === 'flag' ? 7 : 4;
  const segY = mode === 'flag' ? 3 : 5;
  const geometry = new PlaneGeometry(width, height, segX, segY);
  const mesh = new Mesh(geometry, clothMaterial(material));
  mesh.castShadow = true;
  parent.add(mesh);

  const rest = geometry.attributes.position.array.slice();
  patches.push({
    mesh,
    geometry,
    rest,
    mode,
    width,
    height,
    phase,
    amplitude,
    speed: rand(3.2, 4.6),
  });
  return mesh;
}

/**
 * @param {number} t        Elapsed time.
 * @param {number} strength Wind strength, 0..1-ish.
 */
export function updateCloth(t, strength) {
  const base = 0.35 + strength * 1.5;
  for (const p of patches) {
    const amp = base * p.amplitude;
    const pos = p.geometry.attributes.position;
    const array = pos.array;
    for (let i = 0; i < array.length; i += 3) {
      const x = p.rest[i];
      const y = p.rest[i + 1];
      // How far from the attached edge this vertex is, 0..1.
      const u = p.mode === 'flag' ? (x + p.width / 2) / p.width : 0.5 - y / p.height;
      const wave = Math.sin(u * 5.4 - t * p.speed + p.phase);
      const ripple = Math.sin(u * 9.1 - t * p.speed * 1.6 + p.phase * 1.7) * 0.35;

      if (p.mode === 'flag') {
        array[i] = x - u * u * (0.6 - Math.min(strength, 0.6)) * p.width * 0.22;
        array[i + 1] = y + (wave + ripple) * u * amp * 0.32 - u * u * (1.1 - strength) * 0.9;
        array[i + 2] = (wave + ripple) * u * amp;
      } else {
        const sway = (wave + ripple) * u * amp * 0.55;
        array[i] = x + sway * 0.7;
        array[i + 1] = y + u * (1 - Math.cos(sway * 0.25)) * 1.2;
        array[i + 2] = sway;
      }
    }
    pos.needsUpdate = true;
    p.geometry.computeVertexNormals();
  }
}

export function clothCount() {
  return patches.length;
}
