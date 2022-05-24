import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    target: 'static',
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
    ],

    buildModules: [
        '@nuxtjs/strapi',
        '@nuxtjs/moment',
    ],

    build: {
        transpile: ['moment'],
    },

    publicRuntimeConfig: {
        strapiBaseUri: process.env.API_URL || "http://localhost:1337",
        baseUrl: process.env.BASE_URL || "http://localhost:3000",
      },

    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: true,
    },
    
    colorMode: {
        classSuffix: ''
    }
    
  
})
