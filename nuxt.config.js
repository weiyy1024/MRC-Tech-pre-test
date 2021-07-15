import env from './configs'
import sitemap from './configs/sitemap'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  server: {
    host: '0.0.0.0',
  },

  env: {
    VERSION: process.env.VERSION || "development",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "pre-test",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/v-scroll-lock", mode: "client" },],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/style-resources",

    '@nuxtjs/axios',

    '@nuxtjs/proxy',

  ],

  axios: {
    proxy: true,
    credentials: true,
    debug: env.DEBUG,
    retry: {retries: 3},
  },

  proxy: {
    '/api': {
      target: env.API_URL,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
      secure: !env.DEBUG,
    },
  },



  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    styleResources: {
      scss: ["@/assets/scss/main.scss"]
    }
  }
};
