import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
      },
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    WindiCSS(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
})
