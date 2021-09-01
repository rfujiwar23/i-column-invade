<template>
    <div class="banner-area">
        <div class="inner">
            <SocialMedia />
        </div>
            <img src="@/assets/main-bg.png" alt="" class="img-fluid">
        
    </div>
</template>

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
   }
}


</style>