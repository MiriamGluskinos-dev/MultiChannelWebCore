import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      // 'lru-cache': '/src/polyfills/lru-cache.js',
      '@igds/react': '/local-libs/@igds/react',
      '@igds/core-web': '/local-libs/@igds/core-web',
      '@igds/tokens': '/local-libs/@igds/tokens',
      '@shared': path.resolve(__dirname, './src'),
    },
  },
})

