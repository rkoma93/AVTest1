// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // This points to the project root, where index.html should be
  build: {
    outDir: 'dist', // Output the built files to the dist folder
  },
});
