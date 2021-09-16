<template>
    <div class="banner-area">
        <div class="inner">
            <SocialMedia />
            <div class="logo col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-4 offset-4">
                <h1><img src="@/assets/i-column1.png" alt="i-Column" class="img-fluid"></h1>
            </div>
        </div>
        
            <img src="@/assets/main-bg.png" alt="i-column" class="img-fluid">
            <div class="title">
        
      </div>
        
    </div>
</template>

<script>
export default {
  head: {
    titleTemplate: null,
    title: 'i-COlumn'
  }
}
</script>

<style lang="scss" scoped>

.banner-area {
    // background:red;
    // background:('../assets/main-bg.png') no-repeat;
    aspect-ratio: 16/5;    
    background-size: cover;
    background-position: center;
    position:relative;
   .inner {
       position: absolute;
       top:0;
       right:0;
       left:0;
       .logo {
           display: flex;
           justify-content: center;
           align-content: center;
           background:rgba(50,50,50,0.3);
       }
   }
}





</style>