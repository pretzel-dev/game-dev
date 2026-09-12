import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

/**
 * Emits a service worker that precaches the whole built app — including the
 * bundled copy of Three.js — so Covewind installs and flies offline. Doing it
 * with twenty lines here beats taking on a PWA plugin dependency for a toy
 * whose only runtime dependency is Three.js.
 */
function serviceWorker() {
  const templatePath = fileURLToPath(new URL('./src/pwa/sw-template.js', import.meta.url));
  let isBuild = false;
  return {
    name: 'covewind-service-worker',
    configResolved(config) {
      isBuild = config.command === 'build';
    },
    generateBundle(_options, bundle) {
      if (!isBuild) return;
      const assets = Object.keys(bundle).map((name) => `./${name}`);
      const precache = [
        './',
        './index.html',
        './manifest.webmanifest',
        './icons/icon-192.png',
        './icons/icon-512.png',
        './icons/icon-maskable-512.png',
        ...assets,
      ];
      const source = readFileSync(templatePath, 'utf8')
        .replace('__PRECACHE__', JSON.stringify([...new Set(precache)], null, 2))
        .replace('__VERSION__', JSON.stringify(`covewind-${Date.now().toString(36)}`));
      this.emitFile({ type: 'asset', fileName: 'sw.js', source });
    },
  };
}

export default defineConfig({
  // Relative base so the build can be dropped into any static host, including
  // a subdirectory on GitHub Pages.
  base: './',
  build: {
    target: 'es2020',
    assetsInlineLimit: 0,
  },
  plugins: [serviceWorker()],
});
