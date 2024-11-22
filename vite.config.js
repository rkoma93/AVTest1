import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Make sure this points to the correct directory
  build: {
    outDir: 'dist', // Vercel will serve from 'dist' folder after build
  },
});
