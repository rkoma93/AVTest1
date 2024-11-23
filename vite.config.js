import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['ol'], // Ensure OpenLayers is bundled during development
  },
  build: {
    rollupOptions: {
      external: [
        'ol', // Externalize OpenLayers if needed, e.g., for CDN usage
      ],
    },
  },
  resolve: {
    alias: {
      ol: '/node_modules/ol', // Ensure Vite resolves the OpenLayers module
    },
  },
});

import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['rbush'],
  },
});
