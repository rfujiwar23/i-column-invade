import axios from 'axios'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '美容室のシャンプー、トリートメント・スタイリング剤選びならi-Column (アイコラム) | 髪を綺麗にするための美容メディア',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'プロならではの目線で美容室のシャンプー、トリートメントだけでなく、さらにカラー剤やパーマ剤など厳選した情報をお届けします！数多くある美容室のシャンプー、トリートメントの選び方に悩んでいるあなたへ、豊富な種類のヘアケアからあなたに合うヘアケアを探せます！' },
      { hid: 'keywords', name: 'keywords', content: 'アイコラム, i-column, 美容, 美容コラムサイト, IFING BEAUTY, TOKIO インカラミ, TOKIO INKARAMI, ASIA インピタリ, ASIA INPITARI, OWAY, KEVIN.MURPHY, 口コミ, 美容室専売品, サロン, シャンプー, トリートメント' },
      { name: 'format-detection', content: 'telephone=no'},
      { hid: 'og:site_name', property: 'og:site_name', content: 'i-Column' },
      { hid: 'og:type', property: 'og:type', content: 'コラムサイト' },
      { hid: 'og:url', property: 'og:url', content: 'https://i-column.com' },
      { hid: 'og:title', property: 'og:title', content: 'i-column' },
      { hid: 'og:description', property: 'og:description', content: 'プロならではの目線で美容室のシャンプー、トリートメントだけでなく、さらにカラー剤やパーマ剤など厳選した情報をお届けします！数多くある美容室のシャンプー、トリートメントの選び方に悩んでいるあなたへ、豊富な種類のヘアケアからあなたに合うヘアケアを探せます！' },
      { hid: 'og:image', property: 'og:image', content: 'https://i-column-online.netlify.app/_nuxt/img/main-bg.b53cd3c.png' },
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
    '@nuxtjs/axios',
    '@nuxtjs/gtm'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }


}
