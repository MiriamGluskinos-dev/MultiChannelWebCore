import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

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
      '@shared': path.resolve(__dirname, './src'),
    },
  },
  css: {
    modules: {
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
    cssCodeSplit: true,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@igds/core-web',
        '@igds/react'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'multi-channel-core.css'; // 💡 שם הקובץ הרצוי
          }
          return assetInfo.name;
        },
      },
    },
  },
});
