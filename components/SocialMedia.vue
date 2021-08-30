<template>
    <div class="navigation-bar">
            <div class="element">
                <NuxtLink to="/">i-Column</NuxtLink>
            </div>
            <div class="element">
                <ul>
                    <li><a href="#"><img src="@/assets/facebook.png" alt="Facebook" height="30"></a></li>
                    <li><a href="#"><img src="@/assets/instagram.png" alt="Facebook" height="30"></a></li>
                </ul>
            </div>
      </div>
</template>

<style lang="scss" scoped>

.navigation-bar {
    background:azure;
    display: flex;
    > div {
        width: 50%;
    }
    ul {
    list-style: none;
    
    text-align:right;
    li {
        display:inline-block;
        
    }
}
}

</style>