import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base so the build works from a subdirectory on GitHub Pages.
  base: './',
  build: { target: 'es2020' },
});
