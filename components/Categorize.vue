<template>
    <div class="categorize">
        <div class="btn-group">
        <button type="button" class="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            カテゴリ別で見る
        </button>
        <div class="dropdown-menu">
            <span class="dropdown-item" v-for="category in categories" :key="category" @click="handleMenuClick(category)">
                {{category}}
            </span>
        </div>
        </div>
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

.categorize {
    padding:2vh 0;
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

