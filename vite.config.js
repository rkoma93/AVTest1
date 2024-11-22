import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['ol'], // Ensure Vite optimizes OpenLayers
  },
  build: {
    rollupOptions: {
      external: [
        'ol', // Externalize OpenLayers if needed
      ],
    },
  },
  resolve: {
    alias: {
      ol: '/node_modules/ol', // Add an alias to help resolve OpenLayers
    },
  },
});
