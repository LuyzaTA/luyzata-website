import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        analytics: './js/analytics.js',
      },
      output: {
        entryFileNames: (chunkInfo) => {
          // Keep analytics.js as a separate file
          if (chunkInfo.name === 'analytics') {
            return 'assets/[name]-[hash].js';
          }
          return 'assets/[name]-[hash].js';
        },
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
