import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: ['src/**/*.jsx', 'node_modules/**/*.jsx', 'src/**/*.js', 'node_modules/**/*.js'],
  },
}));
