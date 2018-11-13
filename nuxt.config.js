const pkg = require('./package')
// let endpoint = process.env.HOST && process.env.HOST + `:${process.env.PORT}` + '/' + process.env.API
module.exports = {
  mode: 'universal',
  env: {
    URL: process.env.PROD_URL,
    PORTT: process.env.PORT,
    ENDPOINT: process.env.HTTP_ENDPOINT
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/apollo'
  ],
  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo.js'
      // default: {
      //   // required (graphql api endpoint)
      //   httpEndpoint: `${process.env.HOST}:${process.env.PORT}/${process.env.ENDPOINT}` || 'http://localhost:3000/graphql',
      //   // You can use `wss` for secure connection (recommended in production)
      //   // Use `null` to disable subscriptions
      //   // wsEndpoint: 'ws://localhost:4000', //! optional (later)
      //   // LocalStorage token
      // }
    }
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
