import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import {resolve} from 'path';

import manifest from './public/manifest.json';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [
    react(),
    // VitePWA({
    //   manifest,
    //   includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    //   // switch to "true" to enable sw on development
    //   devOptions: {
    //     enabled: false,
    //   },
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}'],
    //   },
    // }),
  ],
  base: command === 'serve' ? '' : '/build/',
  publicDir: false,
  build: {
    manifest: true,
    // target: 'es2018',
    outDir: 'public/build',
    emptyOutDir: true,
    rollupOptions: {
      input: 'resources/assets/js/main.jsx',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './resources'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    preserveSymlinks: false
  },
  server: {
    origin: 'http://localhost:3000', // https://vitejs.dev/config/#server-origin
    // host: '0.0.0.0',
    // strictPort: true,
    // port: 3000,
    // https: false
  },
  // esbuild: {
  //   jsxInject: `import React from 'react'`
  // }
}))
