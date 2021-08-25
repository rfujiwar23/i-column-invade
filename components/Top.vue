<template>
    
<div class="top">
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
              <span class="dropdown-item" v-for="category in categories" :key="category" @click="handleMenuClick(category)">
                {{category}}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
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

<style scoped>

</style>