import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // modules: ["@formkit/nuxt"],
  modules: ['@formkit/nuxt'],
  components: {
    dirs: ['~/components'],
  },
  head: {
    script: [
      {
        src: '/js/index.js',
        body: true,
      },
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/index.scss";',
        },
      },
    },
  },
  css: [
    // SCSS file in the project
    '@formkit/themes/genesis',
  ],
  buildModules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `usePinia()`
          'defineStore',
          // automatically imports `usePinia()` as `usePiniaStore()`
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
  ],
})
