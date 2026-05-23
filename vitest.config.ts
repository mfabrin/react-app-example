import path from 'path';
import { defineConfig } from 'vitest/config';

const root = process.cwd();

export default defineConfig({
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(root, 'src/components') },
      { find: '@services', replacement: path.resolve(root, 'src/services') },
      { find: '@views', replacement: path.resolve(root, 'src/views') },
    ],
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    // setupFiles: './tests/setup.ts',
  }
});