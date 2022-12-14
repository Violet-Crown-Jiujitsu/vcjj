import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@formkit/nuxt', '@vueuse/nuxt', 'nuxt-schema-org'],
  // buildModules: [
  //   [
  //     '@pinia/nuxt',
  //     {
  //       autoImports: ['defineStore', 'acceptHMRUpdate'],
  //     },
  //   ],
  // ],
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
  schemaOrg: {
    // set to your production domain
    canonicalHost: 'https://violetcrownjiujitsu.com',
  },
})
// SCSS file in the project
// '@formkit/themes/genesis',
