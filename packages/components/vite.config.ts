import { resolve } from 'path';
import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `pixels-components.${format}.js`,
    },
    outDir: './dist',
    rollupOptions: {
      external: ['react'],
    },
  },
  plugins: [vanillaExtractPlugin()],
});
