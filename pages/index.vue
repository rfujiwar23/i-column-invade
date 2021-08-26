<template>
  <div class="container-fluid p-0">
    <!-- adding stylesheet -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <Top @categorySelected="onCategorySelected" :categories="categories" />
    <div class="main-contents">
      <!-- <div class="navigation-bar">
           <ul>
             <li><a href="#"><img src="@/assets/facebook.png" alt="Facebook" height="30"></a></li>
             <li><a href="#"><img src="@/assets/instagram.png" alt="Facebook" height="30"></a></li>
           </ul>
      </div> -->
      <SocialMedia />
          <!-- main-area -->
          <div class="main-area block-2">
            <!-- new-information -->
            <div class="new-information box-2">
              <div class="column-list">
                <h3>新着一覧</h3>
                  <ul>
                    <li v-for="content in contents" :key="content.id">
                      <nuxt-link :to="`/${content.id}`">
                        <span>#{{content.category.name}} </span><br>
                        <strong>{{ content.publishedAt.substring(0,10) }}:</strong> {{ content.title }}<br>
                        {{content.category}}
                      </nuxt-link>
                    </li>
                  </ul>
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
            <div class="sidebar box-3">
              C
            </div>
          </div>

    </div>

    <div class="bottom">
      <Bottom />
    </div>
 
  </div>

</template>

<script>
import Top from '@/components/Top'
import Bottom from '@/components/Bottom'
import SocialMedia from '@/components/SocialMedia'
import axios from 'axios'
export default {
  async asyncData({ params }) {
    const page = params.p || '1'
    const categoryId = params.categoryId
    const limit = 5
    const { data } = await axios.get(
      `https://i-column-site.microcms.io/api/v1/post?limit=${limit}&offset=${(page - 1) * limit}`,
      { headers: { 'X-API-KEY': '9719d5ef-40cc-48b3-9ac0-74292c4f5610' } }
    )
    const categories = await axios
        .get(`https://i-column-site.microcms.io/api/v1/categories?fields=id`, {
          headers: { 'X-API-KEY': '9719d5ef-40cc-48b3-9ac0-74292c4f5610' },
        })
          .then(({ data }) => {
            return data.contents.map((content) => content.id)
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
      originalContent: [],
    }
  },
  methods: {
    onCategorySelected(category) {
      console.log('category', category)
      const filtered = this.originalContent.filter((content) => content.category.id === category)
      if (filtered.length > 0) {
        this.contents = filtered
      }
    }
  },
  mounted() {
    this.originalContent = this.contents
  }
}

</script>

<style lang="css">



.container {
  display:flex;
  flex-direction:column;
  /* min-height: 100vh; */
}

.main-contents { 
  flex: 1;
}
.navigation-bar {
  /* background:url("https://res.cloudinary.com/rfujiwar23/image/upload/v1628067950/ifing/dummy-bg.jpg") no-repeat; */
  background:url('@/assets/nile-river.png') no-repeat;
  aspect-ratio: 16/4;
  background-position: center;
  background:cover;
}



.main-area {
  display: grid;
  /* grid-template-columns: 3fr 1fr; */
  /* flex-grow: 1; */
}


.main-area .new-information {
  background: #9a9a9a;
}

.main-area .new-information .column-list {
  background: #fff;
  width:90%;
  margin: 0 auto;
  padding:20px 30px;
}

.main-area .new-information .column-list ul {
  list-style: none;
}

.main-area .new-information .column-list ul li{
  padding:20px 0;
  border-bottom:1px dotted #9a9a9a;
}

.main-area .new-information .column-list ul li span {
  border-radius:5px;
  border:rgb(0, 115, 207);
}

.main-area .new-information .column-list ul li a{
  text-decoration: none;
  font-size:0.9em;
  color:#404040;
}

.main-area .new-information .pagination {
  background:antiquewhite;
  margin:20px auto;

}

.main-area .new-information .pagination ul {
  list-style: none;
  margin: 0 auto;
}

.main-area .new-information .pagination ul li {
  display: inline-block;
  width:50px;
}




.main-area .sidebar {
  background:pink;
}

.bottom {
  background:aliceblue;
  /* position: absolute; */
  bottom:0;
  left:0;
  right:0;
}




</style>
