<template>
  <div class="container">
    <div class="navigation-bar block-1">
      A
    </div>
    <!-- main-area -->
    <div class="main-area block-2">
      <!-- new-information -->
      <div class="new-information box-2">
        <div class="banner">
          B
        </div>
        <div class="column-list">
          <h3>新着一覧</h3>
            <ul>
              <li v-for="content in contents" :key="content.id">
                <nuxt-link :to="`/${content.id}`">
                  <strong>{{ content.publishedAt.substring(0,10) }}:</strong> {{ content.title }}
                </nuxt-link>
              </li>
            </ul>
        </div>
        <div class="pagination">
            <ul>
              <li v-for="page in pages" :key="page">
                <nuxt-link :to="`/page/${page}`">
                  {{ page }}
                </nuxt-link>
              </li>
            </ul>
        </div>
      </div>

      <div class="sidebar box-3">
        C
      </div>

    </div>

    <div class="bottom box-4">
      footer
    </div>

 
  </div>

</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ params }) {
    const page = params.p || '1'
    const limit = 5
    const { data } = await axios.get(
      `https://i-column-site.microcms.io/api/v1/post?limit=${limit}&offset=${(page - 1) * limit}`,
      { headers: { 'X-API-KEY': '9719d5ef-40cc-48b3-9ac0-74292c4f5610' } }
    )
    const pagelength = Math.ceil(data.totalCount / limit);
    const range = (start, end) => [...Array((end - start) + 1)].map((_, i) => start + i);
    const pages = range(1,pagelength);
    return {
      ...data,
      pages,
      currentPage: page
    }
  }
}

</script>

<style lang="css" scoped>

html {
  height: 100%;
}

.container {
  display:flex;
  flex-direction:column;
  /* padding:10px; */
  /* gap:10px; */
  width:100%;
  height: 100%;
  background:blue;
}

.main-area {
  display: grid;
  grid-template-columns: 3fr 1fr;
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
  padding:10px 0;
  border-bottom:1px solid #9a9a9a;
}

.main-area .new-information .column-list ul li a{
  text-decoration: none;
  font-size:0.9em;
}





.main-area .sidebar {
  background:pink;
}

.bottom {
  background:aliceblue;
}


</style>