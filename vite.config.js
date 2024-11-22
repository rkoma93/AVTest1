import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        // Add 'ol' here to treat it as an external dependency
        'ol',
      ],
    },
  },
  resolve: {
    alias: {
      // Optional: Resolve 'ol' to its ESM location in node_modules
      ol: '/node_modules/ol',
    },
  },
});
