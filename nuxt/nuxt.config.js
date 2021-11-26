import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - warga-web',
    title: 'tes',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // auth
//  auth: {
//   strategies: {
//     local: {
//       token: {
//         property: 'token',
//         global: true,
//         required: true,
//         type: 'Bearer'
//       },
//       endpoints: {
//         login: { url: '/login', method: 'post' },
//         logout: { url: '/logout', method: 'post' },
//         user: { url: '/get-user', method: 'get' }
//       }
//     }
//   }
// },


 auth: {
  strategies: {
    local: {
       user: {
            property: 'data',
            global: true,
            required: true,
        },
        redirect: {
        login: '/login',
        logout: '/',
        callback: '/login',
        home: '/'
      },
      token: {
        property: 'access_token',
        global: true,
        required: true,
        type: 'Bearer'
      },
      endpoints: {
        login: { url: '/oauth/token', method: 'post' },
        logout: { url: '/logout', method: 'post' },
        user: { url: '/user', method: 'post', property: 'data' }
      }
    }
  }
},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/notifier.js',
    '~/plugins/global-components.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv','@nuxtjs/axios', '@nuxtjs/auth-next'
  ],

  axios: {
    proxy: true // Can be also an object with default options
  },

  proxy: {
    '/api/': { target: 'http://localhost:8000/api', pathRewrite: {'^/api/': ''} },
    '/upload/': { target: 'http://localhost:8000/foto/', pathRewrite: {'^/upload/': ''} }
  },

  dotenv: {
        systemvars: true,
        filename: '.env.' + process.env.NODE_ENV
    },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#00ab6b',
          accent: colors.grey.darken3,
          secondary: '#006a4e',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
