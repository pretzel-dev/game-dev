/**
 * One place to decide how much canyon a device should draw. Phones get the
 * same world and the same driving, just fewer of the expensive bits.
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
  low: { msaa: 0, halation: false, pixelRatio: 1.25, shadowMap: 1024, terrainStep: 2, dust: 380, bushes: 0.45, far: 2600 },
  medium: { msaa: 2, halation: true, pixelRatio: 1.5, shadowMap: 1536, terrainStep: 2, dust: 700, bushes: 0.75, far: 3000 },
  high: { msaa: 4, halation: true, pixelRatio: 2, shadowMap: 2048, terrainStep: 2, dust: 1100, bushes: 1, far: 3400 },
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
