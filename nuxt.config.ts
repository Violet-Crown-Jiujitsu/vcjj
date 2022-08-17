import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@formkit/nuxt', '@vueuse/nuxt'],
  buildModules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  css: ['@/assets/scss/index.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/vars.scss";',
        },
      },
    },
  },
  vue: {
    compilerOptions: {
      directiveTransforms: {
        motion: () => ({
          props: [],
          needRuntime: true,
        }),
      },
    },
  },
})
// SCSS file in the project
// '@formkit/themes/genesis',
