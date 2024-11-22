// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '/', // Root folder containing index.html
  build: {
    outDir: '../dist', // Output folder
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html' // Specify the entry HTML file
    }
  }
});
