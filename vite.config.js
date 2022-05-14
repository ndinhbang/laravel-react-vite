import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [react()],
  base: command === "serve" ? "" : "/dist/",
  publicDir: false,
  build: {
    manifest: true,
    // target: 'es2018',
    outDir: "public/dist",
    rollupOptions: {
      input: "resources/js/app.js",
    },
  },
  // server: {
  //   strictPort: true,
  //   port: 3000
  // },
  resolve: {
    alias: {
      '@': './resources/js',
    }
  },
}))
