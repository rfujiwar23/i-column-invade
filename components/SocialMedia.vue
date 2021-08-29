<template>
    <div class="navigation-bar">
        <NuxtLink to="/">i-Column</NuxtLink>
           <ul>
             <li><a href="#"><img src="@/assets/facebook.png" alt="Facebook" height="30"></a></li>
             <li><a href="#"><img src="@/assets/instagram.png" alt="Facebook" height="30"></a></li>
           </ul>
      </div>
</template>

<style lang="scss" scoped>

.navigation-bar {
    background:azure;
    ul {
    list-style: none;
    padding:0 10px;
    text-align:right;
    li {
        display:inline-block;
        margin-top:2vh;
    }
}
}

</style>