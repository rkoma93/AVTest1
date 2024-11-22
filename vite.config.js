import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Ensures the root directory contains the index.html
  build: {
    outDir: 'dist', // The output directory for the built files
    emptyOutDir: true, // Clears the dist folder before each build
  },
  publicDir: 'public', // Optional: if you have static assets in a public folder
});
