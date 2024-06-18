// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app:{
    head:{
      title:'test_project',
      link:[
        { href: '/market.ico' , type:'application/icon-x' , rel:'icon' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }

  },
  css: ['primevue/resources/themes/aura-light-blue/theme.css','~/assets/css/main.css','primeicons/primeicons.css'],
  modules: ['nuxt-primevue', '@pinia/nuxt','nuxt-icon'],
  primevue: {
    
  }
})