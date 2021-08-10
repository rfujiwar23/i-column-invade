<template>
  <div class="">
    <ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/${content.id}`">
        {{ content.title }}
      </nuxt-link>
    </li>
  </ul>

  <ul>
    <li v-for="page in pages" :key="page">
      <nuxt-link :to="`/page/${page}`">
        {{ page }}
      </nuxt-link>
    </li>
  </ul>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ params }) {
    const page = params.p || '1'
    const limit = 10
    const { data } = await axios.get(
      `https://i-column-site.microcms.io/api/v1/post?limit=${limit}&offset=${(page - 1) * limit}`,
      { headers: { 'X-API-KEY': '9719d5ef-40cc-48b3-9ac0-74292c4f5610' } }
    )
    const pagelength = Math.ceil(data.totalCount / limit);
    const range = (start, end) => [...Array((end - start) + 1)].map((_, i) => start + i);
    const pages = range(1,pagelength);
    return {
      ...data,
      pages
    }
  }
}

</script>