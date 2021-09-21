<template>
    
<div class="top">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <NuxtLink to="/"><img src="@/assets/i-column1.png" alt="i-Column" class="img"></NuxtLink>
      <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link to="/">HOME</nuxt-link>
          </li>
          <li class="nav-item">
            <a href="http://ifing-beauty.com/">IFING BEAUTY</a>
          </li> 
           <li class="nav-item">
            <a href="#">fofo</a>
          </li> 
        </ul>
      </div>
    </nav>

<!-- <NuxtLink to="/"><img src="@/assets/i-column1.png" alt="i-Column" class="img"></NuxtLink> -->

    

</div>
</template>


<style lang="scss" scoped>

.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,244,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.custom-toggler.navbar-toggler {
  border-color: rgb(255,255,255,0);
} 


.top {
  font-family: 'Noto Sans JP',sans-serif;
  // height:60px;
}
.img {
  width:120px;
  margin-left:-10px;
}

.navbar-toggler {
  border-color: rgba(0,0,0,0);
}

.navbar-nav {
  .nav-item {
    
    a {
      color:#fff;
      margin-right:20px;
    }
  }
}


@media screen and (max-width:992px) {
  .navbar-nav {
    .nav-item {
      margin: 0 auto;
      text-align: center;
    }
  }
  
}
</style>