import { defineConfig } from 'vite'; // Import once

// Use defineConfig for proper typing and configuration export
export default defineConfig({
  optimizeDeps: {
    include: ['rbush'], // Example for including dependencies like rbush
  },
  build: {
    rollupOptions: {
      external: ['ol', 'mobility-toolbox-js'], // Add necessary external modules here
    },
  },
});
