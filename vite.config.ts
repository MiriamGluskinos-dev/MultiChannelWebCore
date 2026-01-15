import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    cssInjectedByJsPlugin(),
  ],
  resolve: {
    alias: {
      // 'lru-cache': '/src/polyfills/lru-cache.js',
      '@shared': path.resolve(__dirname, './src'),
    },
  },
  css: {
    modules: {
      // שמות מחולקים עבור CSS/SCSS Modules
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {
        // אם יש משתנים גלובליים או mixins, אפשר לייבא אוטומטית כאן
        // additionalData: `@import "src/styles/variables.scss";`
      },
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MultiChannelCore',
      fileName: (format) => `multi-channel-core.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // לא לכלול את React bundle
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    }
  }
})

