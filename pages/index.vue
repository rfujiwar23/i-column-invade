<template>
  <div class="container-fluid page p-0">
    <!-- font-awesome -->
    <!-- <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/fontawesome.css" integrity="sha384-eHoocPgXsiuZh+Yy6+7DsKAerLXyJmu2Hadh4QYyt+8v86geixVYwFqUvMU8X90l" crossorigin="anonymous"/> -->

    <!-- adding stylesheet -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <Top />
    <div class="main-contents">

    
      <Banner />

          <!-- main-area -->
          <div class="main-area block-2">
            <!-- new-information -->
            
            <div class="new-information box-2">
              
              <div class="column-list col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12">
                
                <Categorize @categorySelected="onCategorySelected" :categories="categories"/>
                
                
                <h3><span>新着一覧</span></h3>
                <h4>New Information</h4>

                  

                 
                  <div class="row">
                    <div class="section col-xl-4 col-lg-6 col-md-6 col-sm-6" v-for="content in filteredContent" :key="content.id">
                      <div class="for-mobile">
                        <div class="row">
                          <div class="col-3">
                            <img :src="`${content.image.url}`" alt="" class="img-fluid">
                          </div>
                          <div class="col-9">
                            <h2>{{content.title}}</h2>
                            <p class="mobile-body" v-html="content.body"></p>
                            <p class="link-to"><span>#{{content.category.name}}</span> <nuxt-link :to="`/${content.id}`">続きを読む →</nuxt-link></p>
                          </div>
                        </div>
                      </div>
                      <div class="hide-on-mobile">
                        <div class="card">
                        <div class="card-image">
                          <img :src="`${content.image.url}`" alt="" class="img-fluid">
                        </div>
                        <div class="card-body">
                          <h5 class="card-title"><nuxt-link :to="`/${content.id}`">{{ content.title }}</nuxt-link></h5>
                          <small class="text-muted">{{ content.publishedAt.substring(0,10) }}</small>
                          <h6 class="card-category"><span>#{{content.category.name}}</span></h6>
                          <p class="card-text" v-html="content.body"></p>
                        </div>
                        <div class="card-footer">
                          <p><nuxt-link :to="`/${content.id}`">続きを読む →</nuxt-link></p>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>

                  
              </div>
              <div class="pagination">
                  <ul>
                    <li v-if="previousPage != 0">
                      <nuxt-link :to="`/page/${previousPage}`">
                        &lt;
                      </nuxt-link>
                    </li>

                    <li v-for="page in pages" :key="page">
                      <nuxt-link :to="`/page/${page}`">
                        {{ page }}
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="`/page/${nextPage}`">
                      &gt;
                      </nuxt-link>
                    </li>
                  </ul>
              </div>
            </div>
            
          </div>

    </div>

    <div class="footer">
      <Footer />
    </div>
 
  </div>

</template>

<script>
import Top from '@/components/Top'
import Footer from '@/components/Footer'
import SocialMedia from '@/components/SocialMedia'
import Banner from '@/components/Banner'
import Categorize from '@/components/Categorize'

import axios from 'axios'
export default {
  async asyncData({ params }) {
    const page = Number(params.p || '1')
    const categoryId = params.categoryId
    const limit = 100
    const { data } = await axios.get(
      `https://i-column-site.microcms.io/api/v1/post?limit=${limit}&offset=${(page - 1) * limit}`,
      { headers: { 'X-API-KEY': '9719d5ef-40cc-48b3-9ac0-74292c4f5610' } }
    )
    const categories = await axios
        .get(`https://i-column-site.microcms.io/api/v1/categories?fields=id,name`, {
          headers: { 'X-API-KEY': '9719d5ef-40cc-48b3-9ac0-74292c4f5610' },
        })
          .then(({ data }) => {
            // console.log('data', data)
            return data.contents.map((content) => /[a-zA-Z0-9]/.test(content.name) ? content.id : content.name)
          });
    
    // Pagination getting the total number of pages from headless CMS site(microCMS)
    const pagelength = Math.ceil(data.totalCount / limit);
    const range = (start, end) => [...Array((end - start) + 1)].map((_, i) => start + i);
    const pages = range(1,pagelength);
    return {
      ...data,
      categories,
      pages,
      currentPage: page,
      previousPage: page - 1,
      nextPage: page - (-1),
    }
  },
  data() {
    return {
      filteredContent: [],

    }
  },
  methods: {
    onCategorySelected(category) {
      // console.log('category', category)
      const filtered = this.contents.filter((content) => content.category.id === category)
      if (filtered.length > 0) {
        this.filteredContent = filtered
      }
    }
  },
  mounted() {
    this.filteredContent = this.contents
  }
}

</script>

<style lang="scss">

* {
   margin: 0;
   padding: 0;
}



.container {
  display: flex;
  flex-direction: column;

  /* min-height: 100vh; */
}

.for-mobile {
  display:none;
}

.main-contents {
  flex: 1;
}

.main-area {
  display: grid;

  /* grid-template-columns: 3fr 1fr; */
  /* flex-grow: 1; */

  .new-information {
    // background: #fff;
    h3 {
      font-size:1.5em;
      color:#fff;
      span {
        background:#1f456E;
        padding:5px 10px;
        font-family: "ヒラギノ明朝 ProN W6", "HiraMinProN-W6", "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
      }
    }
    h4 {
      font-size:0.9em;
      margin-bottom:4vh;
      color:#1f456E;

    }

    .column-list {
      background: #fff;
      width: 100%;
      margin: 0 auto;
      padding: 20px 30px;

      ul {
        list-style: none;

        li {
          padding: 20px 0;
          border-bottom: 1px dotted #9a9a9a;

          span {
            border-radius: 5px;
            border: rgb(0, 115, 207);
          }

          a {
            text-decoration: none;
            font-size: 0.9em;
            
          }
        }
      }
    }

    .pagination {
      // background: antiquewhite;
      margin: 20px auto;

      ul {
        list-style: none;
        margin: 0 auto;

        li {
          display: inline-block;
          width: 50px;
        }
      }
    }
  }
}




.card {
  margin-bottom: 3vh;

  .card-image {
    aspect-ratio: 16/9;
    height: 40vh;
    max-height: 250px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-body {
    .card-title {
      
      text-decoration: none;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      
      a {
        color: #1f456E;
        border: #1f456E;
      }
    }
    .card-title:hover {
      // text-decoration: underline;
      background: #1f456E;
      > a {
        color:white;
        text-decoration: none;
        padding:0 5px;
      }
    }
    .card-category {
      margin: 20px auto;
    }

    .card-text {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      font-size: 12px;
    }

    .card-category span {
      color: #fff;
      background: #9a9a9a;
      padding: 5px 10px;
      border-radius: 20px;
      font-size: 0.8em;
    }  
  }
  .card-footer {
      p {
        padding-bottom:0;
        a {
          display: inline-block;
          line-height: 1.5em;
          border: 1px solid #1F456E;
          color: #1F456E;
          border-radius: 2px;
          cursor: pointer;
          padding: 5px 15px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .5px;
          &:hover {
            border: 1px solid #1F456E;
            background: #1F456E;
            color: #ffffff;
            text-decoration:none;
          }
        }  
      }
    }
}




@media screen and (max-width:576px) {
  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .footer {
    margin-top: auto;
  }

  .for-mobile {
    display:block;
    border:1px solid #1f456E;
    border-radius: 5px;
    padding:10px;
    // color:#ffffff;
    color: rgba(24,24,24,1);
    margin: 10px auto;
    background:oldlace;
    h2 {
      font-size:1.25em;
    }
    .mobile-body {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      font-size:0.8em;
    }
    p.link-to {
      font-size:0.7em;
      span {
        padding:3px 5px;
        background:#9a9a9a;
        color:#fff;
        border:1px solid #000;
      }
      a {
        color:#1F456E;
        border:1px solid #1F456E;
        background:#fff;
        padding: 3px 5px;
        &:hover {
          background:#1F456E;
          color:#fff;
          text-decoration: none;
        }
      }
    }
  }

  .hide-on-mobile {
    // visibility: hidden;
    display: none;
  }

  



  
}
</style>
