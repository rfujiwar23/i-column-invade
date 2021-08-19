<template>
    <div class="category">
        <p>カテゴリ一覧</p>
        <ul>
            <li v-for="content in contents" :key="content.id">
                <nuxt-link>
                    {{content.name}}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>


<script>
import axios from 'axios'

export default{
    async asyncData() {
        const {data} = await axios.get(
            // 
            'https://i-column-site.microcms.io/api/v1/post',
            {
                headers: {'X-API-KEY': '9719d5ef-40cc-48b3-9ac0-74292c4f5610'}
            }
        )
        return data
    }
}
</script>



<style scoped>
.category {
    background:bisque;
    text-align: center;
}
 
.category p {
    font-size:1.2em;
    padding:10px 0;
    text-decoration: underline;
}
</style>