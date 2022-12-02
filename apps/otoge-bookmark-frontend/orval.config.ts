import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: {
      target: '../otoge-bookmark-api/swagger.yaml',
    },
    output: {
      target: './src/lib/api-orval/index.ts',
      mode: 'single',
      mock: true,
      prettier: true,
      clean: true,
    },
  },
});
