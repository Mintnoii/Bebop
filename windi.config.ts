import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'class',
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex-center flex-col',
    'box-full': 'w-full h-full',
  },
  extract: {
    include: ['**/*.{vue,html,jsx,tsx,ts}'],
    exclude: ['node_modules', '.git', 'excluded', 'dist', 'windi.config.{ts,js}'],
  },
})
