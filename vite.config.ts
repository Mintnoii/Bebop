import { fileURLToPath, URL } from 'url'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'
import { dirname, join, relative, resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  	plugins: [vue(), crx({manifest}),  UnoCSS(),],
  	resolve: {
    	alias: {
      		'@': fileURLToPath(new URL('./src', import.meta.url)),
           '~': resolve(join(__dirname, 'src')),
      src: resolve(join(__dirname, 'src'))
    	}
  	},
      optimizeDeps: {
    include: ['vue', '@vueuse/core'],
    exclude: ['vue-demi'],
  },
});