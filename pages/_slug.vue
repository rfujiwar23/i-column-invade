<template>
  <div class="container-fluid p-0 article-page">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">   
    
    <Top />
    
    <div class="index-top">
      <img src="@/assets/bg001.png" alt="TOKIO" class="contain-img">
      
      <!-- <Banner /> -->
      <div class="title-area mb-0">  
            <SocialMedia />
            <h1>IFING BEAUTY/fofoのブログページ</h1>
      </div>
      
    </div>
    <div class="container-main">
        <div class="row main mx-0">
            <div class="col-lg-12">
                    <p class="previous"><NuxtLink to="/">&lt; トップへ</NuxtLink></p>
                    <h2 class="title">【{{ title }}】</h2>
                    <!-- <fa icon="folder" /> -->
                    <!-- <p class="category" v-if="category"><span>#{{category.name}}</span></p> -->
                    <div class="post-information">
                      <p class="publishedAt"><span><fa icon="clock" class="icon"/> 投稿：</span>{{ publishedAt.substring(0,10) }}</p>
                      <p><fa icon="folder" class="icon" /> <span class="category" v-if="category">#{{category.name}}</span></p>
                    </div>
                    <!-- {{category}} -->
                    <div class="post" v-html="body"></div>
                    <div class="image col-lg-6 offset-lg-3 my-5 p-0">
                      <img :src="`${image.url}`" alt="" class="img-fluid">
                    </div>
                    
                    <div class="" v-if="site.includes('FOFO')">
                      <a href="http://www.intense-z.com/product-proposal/fofo/" class="btn btn-outline-secondary">fofoの購入ページへ</a>
                    </div>
                    <div class="" v-else-if="site.includes('IB')">
                      <a href="https://ifing-beauty.com/" class="btn btn-outline-primary">IFING BEAUTYの購入ページへ</a>
                    </div>

                    
                   <div class="row" v-else>
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <a href="https://ifing-beauty.com/" class="btn btn-outline-primary">IFING BEAUTYの購入ページへ</a>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <a href="http://www.intense-z.com/product-proposal/fofo/" class="btn btn-outline-secondary">fofoの購入ページへ</a>
                    </div>
                   </div>
              <hr>        
            <GoBack />
            </div>
        </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import GoBack from "@/components/GoBack"
import Top from "@/components/Top"
import Footer from "@/components/Footer"

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://i-column.microcms.io/api/v1/post/${params.slug}`,
      {
        headers: { 'X-API-KEY': 'b5ed7888-2fb9-4bae-b660-ff9cfe324de4' }
      }
    )
    return data;
    console.log(data)
  },
  components: {
    GoBack
  }
}
</script>

<style lang="scss">

* {
   margin: 0;
   padding: 0;
}

.index-top {
  // background-image: linear-gradient(to bottom, #2d68c0, #4365b2, #4f62a3, #576095, #5b5e88);
  // background-image: url('assets/bg001.jpg') no-repeat;
  aspect-ratio: 16/4;
  position:relative;
  .contain-img {
    object-fit: cover;
    width:100%;
    height: 100%;
    display: block;

  }
  .title-area {
    position:absolute;
    top:0;
    left:0;
    right:0;
    h1 {
      margin: 20px 10px;
      font-family: "ヒラギノ明朝 ProN W6", "HiraMinProN-W6", "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
      font-size:2em;
      z-index: 1;
      color: #fff;
      text-shadow: 1px 3px 3px rgba(0, 0, 0, 0.5);
    }
    
  }
}

.article-page {
  height: 100%;
  background:#f5f5f5;
}

.jumbotron .text-area {
  background: rgba(255, 255, 255, 0.5);
}

.container-main {
  max-width: 992px;
  width: 100%;
  margin: 10px auto;
  .main {
    width: 100%;
    margin: 0 auto;
    background: white;
    border-right: 1px dotted #ddd;
    box-shadow: 1px 3px 6px #9a9a9a;
    padding: 2vh 3vw;
    h2 {
      margin:20px 0;
      font-size: 1.25em;
    }
    .previous {
      a {
        background: #1f456E;
        font-size:0.8em;
        // border:1px solid #1f456E;
        padding: 5px 6px;
        color: #fff;
        box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
        &:hover {
          border:1px solid #1f456e;
          text-decoration: none;
          background:#fff;
          color:#1f456E;
        }
      }

    }
    .post-information {
      // background:rgba(154, 211, 217, 1);
      padding-left:20px;
      p {
        line-height:0.9em;
      }
      .publishedAt {
        margin-bottom: 10px;
        font-size: 0.8em;
        span {
          font-weight: bold;
        }
      }
      .category {
        font-size:0.8em;
        padding: 3px 5px;
        border-radius:3px;
        border: 1px solid #1f456E;
        color:#1f456E;
        &:hover {
          color:#fff;
          background:#1f456E;
          cursor: pointer;
        }
      }
      
      .icon {
        color:#343A40;
      }
    }
    .post {
        // background: pink;
        box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.5);
        padding: 10px 20px;
        margin: 4vh auto;
      > {
        h2 {
          font-size: 24px;
          font-weight: bold;
          margin: 40px 0 16px;
          border-bottom: 1px solid #ddd;
        }
        p {
          line-height: 1.8;
          letter-spacing: 0.2px;
        }
      }
    }
    .btn {
      width:100%;
    }
  }
}

@media screen and (max-width:1200px) {
  .index-top {
    aspect-ratio:16/5;
  }
}

@media screen and (max-width:1024px) {
  .index-top {
    aspect-ratio:8/3;
  }
}

@media screen and (max-width:768px) {
  .index-top {
    aspect-ratio:2/1;
    .title-area {
      h1 {
        font-size:1.5em;
        text-align:center;
      }
    }
  }
}

@media screen and (max-width:520px) {
  .index-top {
    // background: white;
    aspect-ratio: 5/3;
    .title-area {
      h1 {
        margin: 20px 10px;
        font-size:1.25em;
        text-align: center;
      }
    }
  }
  
  .container-main {
    .main {
      h2 {
        font-size:1em;
      }
    }
  }
}


@media screen and (max-width:430px) {

  .container-main {
    .main {
      .post {
        > {
          p {
            font-size:0.8em;
          }
        }
      }
    }
  }

}

@media screen and (max-width:350px) {
  .index-top {
    // background: white;
    aspect-ratio: 5/3;
    .title-area {
      h1 {
        margin: 20px 10px;
        font-size:1em;
        text-align: center;
      }
    }
  } 

  .container-main {
    .main {
      .post {
        > {
          p {
            font-size:0.8em;
          }
        }
      }
    }
  }
}


</style>
