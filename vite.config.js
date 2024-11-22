// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Set the root directory to 'src'
  build: {
    outDir: '../dist', // Output directory for the built files
    emptyOutDir: true
  }
});
