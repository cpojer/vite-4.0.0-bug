import { defineConfig } from 'vite';
// Using relative imports because vitest crashes when these are required by id.
import react from '../vite-plugin-react';

export default defineConfig({
  build: {
    target: 'modules',
  },
  plugins: [react()],
  server: {
    host: true,
  },
});
