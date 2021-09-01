<template>
    <div class="navigation-bar">
            <div class="element">
                <!-- <NuxtLink to="/">i-Column</NuxtLink> -->
                <p><span>IFING Beauty・fofoで販売中の商品についてのコラムサイト</span></p>
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
    // background:azure;
    background:rgba(255,255,255,0.16);
    border-bottom:1px dotted rgba(187,187,187, 0.6);
    display: flex;
    justify-content: space-between;
    > div {
        // width: 50%;
    }
    .element {
        margin:10px 20px;
        p {
            span {
                font-size:0.8em;
                color:#363636;
                padding:3px 5px;
                border:1px solid #363636;
                box-shadow: 1px 2px 2px rgba(0,0,0,0.4);
                background:rgb(255,255,255);
            }
        }
        ul {
        list-style: none;
            li {
                display:inline-block;
            }
        }
    }

    
}

@media screen and (max-width:768px) {
    .navigation-bar {
        // display: block;
        > div {
            
            // background:red;
            margin:0;
            padding-left:0;
        }
        .element {
            margin:10px 0;
        }
    }
}

@media screen and (max-width:575px) {
    .navigation-bar {
        // display: block;
        > div {
            // width:100%;
            // background:red;
            // margin:0;
            // padding-left:0;
        }
        .element {
            p {
                text-align: center;
                margin:0px auto;
            }
        }
    }
}

@media screen and (max-width:459px) {
    .navigation-bar {
        // display: block;
        > div {
            // width:100%;
            // background:red;
            // margin:0;
            // padding-left:0;
        }
        .element {
            p {
                font-size: 0.7em;
            }
        }
    }
}

@media screen and (max-width:414px) {
    .navigation-bar {
        .element {
            p {
                text-align: center;
                margin:10px auto;
                font-size:0.8em;
            }
        }
    }
}


</style>