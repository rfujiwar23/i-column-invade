<template>
  <div class="container-fluid p-0">
    <!-- adding stylesheet -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">i-Column</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">IFING BEAUTY <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">INTENSE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">IFING</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              カテゴリー
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
      </nav>
    <div class="navigation-bar block-1">
      

      
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

.navigation-bar {
  background:url("https://res.cloudinary.com/rfujiwar23/image/upload/v1628067950/ifing/dummy-bg.jpg") no-repeat;
  aspect-ratio: 16/4;
  background-position: center;
  background:cover;
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
  border-bottom:1px dotted #9a9a9a;
}

.main-area .new-information .column-list ul li a{
  text-decoration: none;
  font-size:0.9em;
}

.main-area .new-information .pagination {
  background:antiquewhite;
  margin:20px auto;

}

/* .main-area .new-information .pagination ul {
  list-style: none;
  margin: 0 auto;
}

.main-area .new-information .pagination ul li {
  display: inline-block;
  width:50px;
} */




.main-area .sidebar {
  background:pink;
}

.bottom {
  background:aliceblue;
}


</style>