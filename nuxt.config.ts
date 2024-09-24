// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 8000
  },
  compatibilityDate: "2024-09-22",

  modules: ['@nuxtjs/tailwindcss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

