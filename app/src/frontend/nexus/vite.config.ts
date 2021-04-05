import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9000,
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    }
  },
  plugins: [vue()],
})
