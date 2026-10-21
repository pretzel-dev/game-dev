/**
 * One place to decide how much town a device should draw. Phones get the
 * same ocean and the same driving, just fewer of the expensive bits.
 */
function detectTier() {
  // Node has a `navigator` too, so test for the thing actually being used.
  if (typeof matchMedia !== 'function' || typeof window === 'undefined') return 'high';
  const forced = new URLSearchParams(location.search).get('gfx');
  if (forced === 'low' || forced === 'medium' || forced === 'high') return forced;
  const coarse = matchMedia('(pointer: coarse)').matches;
  const small = Math.min(innerWidth, innerHeight) < 520;
  const cores = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 4;
  if ((coarse && (cores <= 4 || memory <= 3)) || small) return 'low';
  if (coarse) return 'medium';
  return 'high';
}

const TIERS = {
  low: { msaa: 0, halation: false, pixelRatio: 1.25, shadowMap: 1024, fish: 160, kelp: 160, particles: 1200, seabed: 120 },
  medium: { msaa: 2, halation: true, pixelRatio: 1.5, shadowMap: 1536, fish: 260, kelp: 260, particles: 1800, seabed: 150 },
  high: { msaa: 4, halation: true, pixelRatio: 2, shadowMap: 2048, fish: 360, kelp: 360, particles: 2400, seabed: 180 },
};

export const tier = detectTier();
export const QUALITY = { tier, ...TIERS[tier] };

/** If a device turns out slower than it looked, shed load once. */
export function degrade(renderer, sun) {
  if (QUALITY.degraded) return false;
  QUALITY.degraded = true;
  QUALITY.pixelRatio = Math.min(QUALITY.pixelRatio, 1);
  renderer.setPixelRatio(QUALITY.pixelRatio);
  if (renderer.shadowMap.enabled) {
    renderer.shadowMap.enabled = false;
    sun.castShadow = false;
  }
  return true;
}
