<template>
  <div class="container-fluid page p-0">
    <!-- font-awesome -->
    <!-- <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/fontawesome.css" integrity="sha384-eHoocPgXsiuZh+Yy6+7DsKAerLXyJmu2Hadh4QYyt+8v86geixVYwFqUvMU8X90l" crossorigin="anonymous"/> -->

    <!-- adding stylesheet -->

    <Top />
    <!-- <Categorize @categorySelected="onCategorySelected" :categories="categories"/> -->
    <div class="main-contents">
      <!-- <Banner /> -->
      <div class="banner-area">
        <div class="top">
          <div class="logo">
            <h1>
              <img
                src="@/assets/i-column-text-logo.png"
                alt="美容・コラムサイト i-Column"
                class="img-fluid"
              />
            </h1>
          </div>
          <p class="mt-2">
            美容室のシャンプー、トリートメント選びならi-Column<br />髪を綺麗にするための美容メディア
          </p>
        </div>
        <div class="inner">
          <SocialMedia />
        </div>
        <img
          src="@/assets/main-bg.png"
          alt="美容・コラムサイト i-Column background"
          class="img-fluid"
        />
      </div>

      <!-- <Categorize @categorySelected="onCategorySelected" :categories="categories"/>  -->
      <!-- main-area -->
      <div class="main-area block-2">
        <!-- new-information -->

        <div class="new-information box-2">
          <!-- <InfoSection /> -->
          <div class="bg-light">
            <div
              class="col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 mb-3 py-4"
            >
              <Categorize
                @categorySelected="onCategorySelected"
                :categories="categories"
              />
            </div>
          </div>
          <div
            class="column-list col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12"
          >
            <div class="text-center" id="myId" ref="myId"></div>
            <h3><span>新着一覧</span></h3>
            <h4>New Information</h4>
            <div class="row">
              <div
                class="section col-xl-4 col-lg-6 col-md-6 col-sm-6"
                v-for="content in filteredContent"
                :key="content.id"
              >
                <div class="for-mobile">
                  <div class="new" v-if="filteredContent[0].id === content.id">
                    <p>新着</p>
                  </div>
                  <div class="row">
                    <div class="col-3">
                      <img :src="`${content.image.url}`" alt="" class="img" />
                    </div>
                    <div class="col-9">
                      <h2>{{ content.title }}</h2>
                      <p class="mobile-body">{{ content.preview }}</p>

                      <p class="link-to">
                        <span>#{{ content.category.name }}</span>
                        <nuxt-link :to="`/${content.id}`"
                          >続きを読む →</nuxt-link
                        >
                      </p>
                    </div>
                  </div>
                </div>

                <div class="hide-on-mobile">
                  <!-- {{ content }} -->
                  <div class="card">
                    <div
                      class="new"
                      v-if="filteredContent[0].id === content.id"
                    >
                      <p>新着</p>
                    </div>
                    <div class="card-image">
                      <nuxt-link :to="`/${content.id}`">
                        <img
                          :src="`${content.image.url}`"
                          alt=""
                          class="img-fluid"
                        />
                      </nuxt-link>
                    </div>
                    <div class="card-body">
                      <!-- {{content}} -->

                      <h5 class="card-title">
                        <nuxt-link :to="`/${content.id}`">{{
                          content.title
                        }}</nuxt-link>
                      </h5>
                      <small class="text-muted">{{
                        content.publishedAt.substring(0, 10)
                        
                      }}</small>
                      <h6 class="card-category">
                        <span>#{{ content.category.name }}</span>
                      </h6>
                      <p class="card-text">{{ content.preview }}</p>
                      <!-- <p v-html="content.body" class="text-me"></p> -->
                    </div>
                    <div class="card-footer">
                      <p>
                        <nuxt-link :to="`/${content.id}`"
                          >続きを読む →</nuxt-link
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="pagination">
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
              </div> -->
        </div>
      </div>
    </div>

    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top";
import Footer from "@/components/Footer";
import SocialMedia from "@/components/SocialMedia";
import Banner from "@/components/Banner";
import Categorize from "@/components/Categorize";

import axios from "axios";
export default {
  async asyncData({ params }) {
    const page = Number(params.p || "1");
    const categoryId = params.categoryId;
    const limit = 100;
    const max = 70;
    const {
      data
    } = await axios.get(
      `https://i-column.microcms.io/api/v1/post?limit=${limit}&offset=${(page -
        1) *
        limit}`,
      { headers: { "X-API-KEY": "b5ed7888-2fb9-4bae-b660-ff9cfe324de4" } }
    );
    const categories = await axios
      .get(
        `https://i-column.microcms.io/api/v1/categories?limit=${max}&fields=id,name`,
        {
          headers: { "X-API-KEY": "b5ed7888-2fb9-4bae-b660-ff9cfe324de4" }
        }
      )
      .then(({ data }) => {
        console.log("data", data);
        // return data.contents.map((content) => /[a-zA-Z0-9]/.test(content.name) ? content.id : content.name)
        return data.contents.map(content => content.name);
      });

    // Pagination getting the total number of pages from headless CMS site(microCMS)
    const pagelength = Math.ceil(data.totalCount / limit);
    const range = (start, end) =>
      [...Array(end - start + 1)].map((_, i) => start + i);
    const pages = range(1, pagelength);
    return {
      ...data,
      categories,
      pages,
      currentPage: page,
      previousPage: page - 1,
      nextPage: page - -1
    };
  },
  data() {
    return {
      filteredContent: []
    };
  },
  methods: {
    onCategorySelected(category) {
      console.log("category", category);
      // const filtered = this.contents.filter((content) => content.category.id === category)
      const filtered = this.contents.filter(
        content => content.category.name === category
      );
      if (filtered.length > 0) {
        this.filteredContent = filtered;
      } else {
        // Erase this part if not needed (also delete/comment out line 42 (myId))
        alert(category + "のコラムは未だに投稿されていません。");
        // this.$refs.myId.style.display = 'block';
        // this.$refs.myId.innerText = category + "のコラムは未だに投稿されていません。";
      }
    }
  },
  mounted() {
    this.filteredContent = this.contents;
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;
}

.for-mobile {
  display: none;
}

.main-contents {
  flex: 1;
  .banner-area {
    aspect-ratio: 16/5;
    background-size: cover;
    background-position: center;
    position: relative;
    .top {
      position: absolute;
      z-index: 990;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 255, 255, 0.8);
      padding: 10px;
      text-align: center;
      p {
        color: rgb(112, 130, 115);
        font-weight: bold;
      }
    }
    .inner {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
    }
  }
}

.main-area {
  display: grid;
  .new-information {
    h3 {
      font-size: 1.5em;
      color: #fff;
      span {
        background: rgb(112, 130, 115);
        padding: 5px 10px;
        font-family: "ヒラギノ明朝 ProN W6", "HiraMinProN-W6", "HG明朝E",
          "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
      }
    }
    h4 {
      font-size: 0.9em;
      margin-bottom: 4vh;
      color: rgb(112, 130, 115);
    }

    .column-list {
      background: #fff;
      width: 100%;
      margin: 0 auto;
      padding: 0px 30px 20px;

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
  position: relative;
  .new {
    position: absolute;
    top: 0;
    left: -3%;
    background: #cf1225;
    box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.6);
    padding: 3px 10px;
    transform: rotate(-20deg);
    z-index: 999;
    p {
      font-weight: bold;
      color: #fff;
      margin-bottom: 0;
    }
  }
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
      -webkit-line-clamp: 1;

      a {
        color: #1f456e;
        border: #1f456e;
      }
    }
    .card-title:hover {
      // text-decoration: underline;
      background: #1f456e;
      > a {
        color: white;
        text-decoration: none;
        padding: 0 5px;
      }
    }
    .card-category {
      margin: 5px auto 10px;
    }

    .card-text {
      overflow: hidden;
      // text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      font-size: 12px;
      img {
        object-fit: contain;
        max-width: 100%;
      }
    }

    .card-category span {
      color: #fff;
      background: #9a9a9a;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 0.8em;
    }
  }
  .card-footer {
    p {
      padding-bottom: 0;
      a {
        display: inline-block;
        line-height: 1.5em;
        border: 1px solid #1f456e;
        color: #1f456e;
        border-radius: 2px;
        cursor: pointer;
        padding: 5px 15px;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        &:hover {
          border: 1px solid #1f456e;
          background: #1f456e;
          color: #ffffff;
          text-decoration: none;
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .main-contents {
    .banner-area {
      .top {
        // display: flex;
        // justify-content: center;
        // align-content: center;
        position: absolute;
        // z-index: 999;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        padding: 10px;
        .logo {
          width: 50%;
          margin: 0 auto;
        }
        p {
          font-size: 0.8em;
          margin: 0;
        }
      }
      .inner {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }
    }
  }

  .footer {
    margin-top: auto;
  }

  .for-mobile {
    display: block;
    border: 1px solid #1f456e;
    border-radius: 5px;
    padding: 10px;
    // color:#ffffff;
    color: rgba(24, 24, 24, 1);
    margin: 10px auto;
    background: oldlace;
    position: relative;
    img {
      object-fit: contain;
      max-width: 100%;
      max-height: 100%;
    }
    h2 {
      font-size: 1.1em;
      text-decoration: none;
      overflow: hidden;
      // text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
    .new {
      position: absolute;
      top: 0;
      left: -3%;
      background: #cf1225;
      box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.6);
      padding: 3px 10px;
      transform: rotate(-20deg);
      z-index: 999;
      p {
        font-weight: bold;
        color: #fff;
        margin-bottom: 0;
      }
    }
    .mobile-body {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      font-size: 0.8em;
      line-height: 1.5em;
    }
    p.link-to {
      font-size: 0.7em;
      line-height: 0.8em;
      margin-top: 10px;
      span {
        padding: 3px 5px;
        background: #9a9a9a;
        color: #fff;
        border: 1px solid #000;
      }
      a {
        color: #1f456e;
        border: 1px solid #1f456e;
        background: #fff;
        padding: 3px 5px;
        &:hover {
          background: #1f456e;
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }

  .hide-on-mobile {
    display: none;
  }
}

@media screen and (max-width: 428px) {
  .main-contents {
    .banner-area {
      .top {
        .logo {
          width: 50%;
          margin: 0 auto;
        }
        p {
          font-size: 0.7em;
          margin: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 379px) {
  .main-contents {
    .banner-area {
      .top {
        .logo {
          width: 50%;
          margin: 0 auto;
        }
        p {
          font-size: 0.65em;
          margin: 0;
        }
      }
    }
  }
  .for-mobile {
    h2 {
      font-size: 0.9em;
    }
    .mobile-body {
      font-size: 0.7em;
    }
    p.link-to {
      font-size: 0.6em;
    }
  }
}

@media screen and (max-width: 350px) {
  .for-mobile {
    h2 {
      font-size: 0.9em;
    }
    .mobile-body {
      font-size: 0.7em;
    }
    p.link-to {
      font-size: 0.5em;
    }
  }
}
</style>
