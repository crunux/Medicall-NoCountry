import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        PrimeVueResolver()
      ],
      deep: true,
      dirs: ['src/components', 'node_modules/primevue/src/components', 'src/modules', 'node_modules/primeicons', 'src/layouts'],
      dts: true,
      types: [{
        from: 'vue-router',
        names: ['RouterLink', 'RouterView'],
      }],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        // presets
        'vue',
        'vue-router',
        '@vueuse/core',
        {
          from: 'vue-router',
          imports: ['RouteLocationRaw'],
          type: true,
        },
      ],
      vueTemplate: true,
      eslintrc: {
        enabled: true,
      },
    }),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
