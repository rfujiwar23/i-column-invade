import axios from 'axios'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'i-Column IFING BEAUTY',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
  },

  // generate: {
  //   fallback: true
  // },
  //   async routes() {
  //     const limit = 10
  //     const range = (start, end) =>
  //       [...Array(end - start + 1)].map((_, i) => start + i)

  //     // 一覧のページング
  //     const pages = await axios
  //       .get(`https://i-column-site.microcms.io/api/v1/post?limit=${limit}`, {
  //         headers: { 'X-API-KEY': '9719d5ef-40cc-48b3-9ac0-74292c4f5610' },
  //       })
  //       .then((res) =>
  //         range(1, Math.ceil(res.data.totalCount / limit)).map((p) => ({
  //           route: `/page/${p}`,
  //         }))
  //       )
      
  //     const categories = await axios
  //       .get(`https://i-column-site.microcms.io/api/v1/categories?fields=id`, {
  //         headers: { 'X-API-KEY': '9719d5ef-40cc-48b3-9ac0-74292c4f5610' },
  //       })
  //         .then(({ data }) => {
  //           console.log
  //           return data.contents.map((content) => content.id)
  //         });  

      
  //     const categoryPages = await Promise.all(
  //       categories.map((category) =>
  //         axios.get(
  //           `https://i-column-site.microcms.io/api/v1/post?limit=0&filters=category[equals]${category}`,
  //           { headers: { 'X-API-KEY': '9719d5ef-40cc-48b3-9ac0-74292c4f5610' } }
  //         )
  //           .then((res) =>
  //             range(1, Math.ceil(res.data.totalCount / 10)).map((p) => ({
  //               route: `/category/${category}/page/${p}`,
  //             })))    
  //       )
  //     )
  //     const flattenCategoryPages = [].concat.apply([], categoryPages)
  //     return pages
  //   },
  // },

  // router: {
  //   extendRoutes(routes, resolve) {
      // routes.push({
      //   path: '/page/:p',
      //   component: resolve(__dirname, 'pages/_slug.vue'),
      //   name: 'page',
      // });
      // routes.push({
      //   path: '/category/:categoryId/page/:p',
      //   component: resolve(__dirname, 'pages/index.vue'),
      //   name: 'category',
      // })
  //   },
  // },

}
