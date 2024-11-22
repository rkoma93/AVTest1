import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['mobility-toolbox-js', 'ol'], // Ensure both libraries are pre-bundled
  },
  build: {
    rollupOptions: {
      external: [
        'mobility-toolbox-js', // Ensure it is treated as an external dependency if needed
        'ol',
      ],
    },
  },
});
