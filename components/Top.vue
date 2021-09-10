<template>
    
<div class="top">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- <a class="navbar-brand" href="#">i-Column</a> -->
      <NuxtLink to="/"><img src="@/assets/i-column.png" alt="i-Column" class="img"></NuxtLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link to="/">HOME</nuxt-link>
            <nuxt-link to="/about">ABOUT</nuxt-link>
            <a href="http://ifing-beauty.com/">IFING BEAUTY</a>
            <a href="http://ifing-beauty.com/">fofo</a>
          </li>
        </ul>
      </div>
    </nav>
</div>
</template>


<style lang="scss" scoped>


.top {
  font-family: 'Noto Sans JP',sans-serif;
}
.img {
  width:120px;
  margin-left:-10px;
}

.navbar-nav {
  .nav-item {
    
    a {
      color:#9a9a9a;
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