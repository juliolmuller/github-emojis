export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GitHub Emojis Search App',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A straight forward search application for emojis supported by GitHub' },
      { hid: 'keywords', name: 'keywords', content: 'github, emojis, markdown, github emojis, search' },
      { hid: 'author', name: 'author', content: 'Julio L. Muller' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Chewy&family=Kufam:wght@700&family=Nanum+Gothic+Coding&display=swap' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Tells the root for source code: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-srcdir/
  srcDir: 'src/',

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://composition-api.nuxtjs.org/
    '@nuxtjs/composition-api/module',

    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
