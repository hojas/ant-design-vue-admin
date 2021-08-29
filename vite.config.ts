import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'

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
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
  ],
})
