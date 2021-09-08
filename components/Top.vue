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
          <!-- <li class="nav-item active">
            <a class="nav-link" href="#">IFING BEAUTY <span class="sr-only">(current)</span></a>
          </li> -->
          
          <li class="nav-item">
            <a class="nav-link" href="http://ifing-beauty.com/" target="_blank">IFING BEAUTY</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" target="_blank">FOFO</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="https://www.ifing.com" target="_blank">IFING</a>
          </li> -->
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              カテゴリ
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <span class="dropdown-item" v-for="category in categories" :key="category" @click="handleMenuClick(category)">
                {{category}}
              </span>
            </div>
          </li> -->
        </ul>
      </div>
    </nav>
</div>
</template>


<style lang="scss" scoped>

.img {
  width:120px;
  margin-left:-10px;
}
</style>