/**
 * One place to decide how much island a device should have to draw.
 *
 * Phones get the same world, just fewer of the expensive bits — the flight and
 * the silhouette are identical, which matters more than the extra gulls.
 */

function detectTier() {
  // Node has a `navigator` too, so test for the thing actually being used.
  if (typeof matchMedia !== 'function' || typeof window === 'undefined') return 'high';
  const coarse = matchMedia('(pointer: coarse)').matches;
  const small = Math.min(innerWidth, innerHeight) < 520;
  const cores = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 4;

  if ((coarse && (cores <= 4 || memory <= 3)) || small) return 'low';
  if (coarse) return 'medium';
  return 'high';
}

const TIERS = {
  low: {
    msaa: 0,
    halation: false,
    pixelRatio: 1.25,
    shadows: true,
    shadowMap: 1024,
    shadowDistance: 380,
    islandRings: 34,
    islandSegments: 112,
    waterSegments: 64,
    clouds: 9,
    birds: 14,
    boats: 8,
    trees: 44,
    villagers: 12,
    coveRocks: 12,
    contrails: true,
    contrailLength: 48,
    spray: 48,
    spatialAudio: true,
    anisotropy: 1,
  },
  medium: {
    msaa: 2,
    halation: true,
    pixelRatio: 1.5,
    shadows: true,
    shadowMap: 1536,
    shadowDistance: 460,
    islandRings: 40,
    islandSegments: 140,
    waterSegments: 90,
    clouds: 13,
    birds: 22,
    boats: 11,
    trees: 72,
    villagers: 18,
    coveRocks: 18,
    contrails: true,
    contrailLength: 64,
    spray: 80,
    spatialAudio: true,
    anisotropy: 2,
  },
  high: {
    msaa: 4,
    halation: true,
    pixelRatio: 2,
    shadows: true,
    shadowMap: 2048,
    shadowDistance: 520,
    islandRings: 48,
    islandSegments: 168,
    waterSegments: 120,
    clouds: 18,
    birds: 30,
    boats: 14,
    trees: 110,
    villagers: 26,
    coveRocks: 24,
    contrails: true,
    contrailLength: 90,
    spray: 120,
    spatialAudio: true,
    anisotropy: 4,
  },
};

export const tier = detectTier();
export const QUALITY = { tier, ...TIERS[tier] };

/**
 * If a device turns out to be slower than it looked, shed the costly things
 * once rather than stuttering forever. Called by the frame loop.
 */
export function degrade(renderer, scene) {
  if (QUALITY.degraded) return false;
  QUALITY.degraded = true;
  QUALITY.pixelRatio = Math.min(QUALITY.pixelRatio, 1);
  renderer.setPixelRatio(QUALITY.pixelRatio);
  if (renderer.shadowMap.enabled) {
    renderer.shadowMap.enabled = false;
    scene.traverse((o) => {
      if (o.isLight && o.shadow) o.castShadow = false;
    });
  }
  return true;
}
