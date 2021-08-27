<template>
  <div class="container-fluid p-0 article-page">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">   

    <SocialMedia />

    <div class="title-area mb-0">
        <div class="container">
            <h1>INTENSE/IFING コラムサイト</h1>
            <h5>{{ title }}</h5>
        </div>
    </div>

  

    <div class="container-main">
        <div class="row main mx-0">
            <div class="col-lg-12">
                
                    <h2 class="title">{{ title }}</h2>
                    
                    <p class="category"><span>#{{ category && category.name}}</span></p>
                    <p class="publishedAt"><span>投稿：</span>{{ publishedAt.substring(0,10) }}</p>
                    <div class="post" v-html="body"></div>
                    <div class="image col-lg-6 offset-lg-3 my-5 p-0">
                      <img :src="`${image.url}`" alt="" class="img-fluid">
                    </div>
                    
              <hr>        

            <GoBack />
            </div>
            
        </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import GoBack from "@/components/GoBack"

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://i-column-site.microcms.io/api/v1/post/${params.slug}`,
      {
        headers: { 'X-API-KEY': '9719d5ef-40cc-48b3-9ac0-74292c4f5610' }
      }
    )
    return data
  },
  components: {
    GoBack
  }
}
</script>

<style lang="css">

.article-page {
    background: rgb(47,115,235);
    background: linear-gradient(320deg, rgba(47,115,235,1) 0%, rgba(154,211,217,1) 100%);
    height:100%;
}



.jumbotron .text-area {
    background:rgba(255, 255, 255, 0.5);
}

.container-main {
  /* background:#fff; */
  max-width:992px;
  width:100%;
  margin:0 auto;
  /* height:70vh; */

}
.main {
  width: 100%;
  margin: 0 auto;
  background: white;
  border-right:1px dotted #ddd;
  box-shadow: 1px 3px 6px #9a9a9a;
  padding:2vh 3vw;
}

.main h2 {
  font-family: 'Sawarabi Gothic', sans-serif;
  font-size:1.25em;
}




.title {
  margin: 20px 0;
  text-decoration: underline;
}



.category span {
  padding:7px 10px;
  color:white;
  background: #9a9a9a;
  border-radius:20px;
}

.category span:hover {
  background:rgba(0,0,0, 0.25);
  cursor: pointer;
}

.publishedAt {
  margin-bottom: 10px;
  font-size:0.9em;
}

.publishedAt span {
    font-weight: bold;
}

.post {
    background:pink;
    box-shadow: 1px 3px 6px rgba(0,0,0,0.5);
    padding:10px 20px;
    margin:20px auto;
}

/* .post > h1 {
	 font-size: 30px;
	 font-weight: bold;
	 margin: 40px 0 20px;
	 background-color: #eee;
	 padding: 10px 20px;
	 border-radius: 5px;
} */
 .post > h2 {
	 font-size: 24px;
	 font-weight: bold;
	 margin: 40px 0 16px;
	 border-bottom: 1px solid #ddd;
}
 .post > p {
	 line-height: 1.8;
	 letter-spacing: 0.2px;
}
 .post > ol {
	 list-style-type: decimal;
	 list-style-position: inside;
}

footer {
  background:rgba(154,211,217,1);
}
 
</style>
