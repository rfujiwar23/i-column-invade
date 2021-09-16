import axios from 'axios'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'i-Column || 美容・シャンプーについてのコラムページ IFING BEAUTY & fofo',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '美容、サロン業界のシャンプーなどについてのコラムサイト。IFING Beauty及びfofoで販売中の商品についてのコラムサイトです。' },
      { hid: 'keywords', name: 'keywords', content: 'TOKIO インカラミ, 美容室, サロン, シャンプー, OWAY, KEVIN.MURPHY, トリートメント, コラムサイト' },
      { name: 'format-detection', content: 'telephone=no'},
      { hid: 'og:site_name', property: 'og:site_name', content: 'i-Column' },
      { hid: 'og:type', property: 'og:type', content: 'コラムサイト' },
      { hid: 'og:url', property: 'og:url', content: 'https://i-column.com' },
      { hid: 'og:title', property: 'og:title', content: 'i-column' },
      { hid: 'og:description', property: 'og:description', content: '美容、サロン業界のシャンプーなどのコラムページです。' },
      { hid: 'og:image', property: 'og:image', content: 'https://i-column.com' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' },
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'},
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'}
    ]  
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faClock', 'faFolder']
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }

}
