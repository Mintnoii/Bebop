import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'
import { dirname, join, relative, resolve } from 'path'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [vue(), crx({ manifest }), WindiCSS(),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': resolve(__dirname, './src'),
    }
  },
  optimizeDeps: {
    include: ['vue', '@vueuse/core'],
    exclude: ['vue-demi'],
  },
});