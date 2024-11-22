import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['mobility-toolbox-js', 'ol'], // Ensure both libraries are bundled
  },
  build: {
    rollupOptions: {
      external: [
        // Uncomment if you want to externalize the library (optional)
        // 'mobility-toolbox-js',
        // 'ol',
      ],
    },
  },
});
