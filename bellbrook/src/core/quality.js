/**
 * One place to decide how much town a device should draw. Phones get the
 * same town and the same driving, just fewer of the expensive bits.
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
  low: { msaa: 0, halation: false, pixelRatio: 1.25, shadowMap: 1024, people: 70, particles: 1400 },
  medium: { msaa: 2, halation: true, pixelRatio: 1.5, shadowMap: 1536, people: 100, particles: 2000 },
  high: { msaa: 4, halation: true, pixelRatio: 2, shadowMap: 2048, people: 130, particles: 2600 },
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
