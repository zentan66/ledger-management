import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const pathResolve = (dir) => resolve(__dirname, '.', dir)

export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass'
      })]
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass'
      })]
    }),
    vue()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/index.scss" as *;`
      }
    },
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  server: {}
})
