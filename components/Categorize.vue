<template>
    <div class="categorize">

<nav class="navbar navbar-light bg-light">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown1" aria-controls="navbarNavDropdown1" aria-expanded="" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">メーカー一覧</a>
  <div class="collapse navbar-collapse" id="navbarNavDropdown1">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          メーカー別でフィルターする
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
           <span class="dropdown-item" v-for="category in categories" :key="category" @click="handleMenuClick(category)">
                {{category}}
            </span>
        </div>
      </li>
    </ul>
  </div>
</nav>



        <!-- <div class="btn-group">
        <button type="button" class="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            カテゴリ別で見る
        </button>
        <div class="dropdown-menu">
            <span class="dropdown-item" v-for="category in categories" :key="category" @click="handleMenuClick(category)">
                {{category}}
            </span>
        </div>
        </div> -->
    </div>
    
</template>

<script>
import axios from 'axios'

export default {
  props: {
    categories: { type: Array, required: true }
  },
  methods: {
    handleMenuClick(category) {
      this.$emit('categorySelected', category)
    }
  },
}
</script>

<style lang="scss">



.navbar {
  .navbar-brand {
    font-size:0.9em;
  }
  .navbar-toggler {
    border-color: rgba(0,0,0,0);
  }
  .navbar-nav {
    .nav-item {
      .nav-link {
        font-size:0.8em;
      }
    }
  }
}

.categorize {
    // padding:0 0 2vh;
    font-family: 'Noto Sans JP',sans-serif;
}

.dropdown-menu {
  span.dropdown-item {
    text-align:center;
    border-bottom:1px dotted rgba(212,212,212,0.6);
    // padding:3px 0;
  }
  span.dropdown-item:nth-last-child(0) {
    border-bottom:none;
  }
}

@media screen and (max-width:500px){
  .btn-group {
    width:100%;
    .dropdown-menu {
      width:100%;
    }
  }
}

</style>

