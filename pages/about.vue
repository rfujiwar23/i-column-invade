<template>
        
       <div>
           <Top />
            <div class="container-fluid p-0">
                <div class="top-main">
                    <div class="about">
                        <h2>製品一覧</h2>
                        <p>このコラムサイトでは<a href="https://ifing-beauty.com/">IFING BEAUTY ONLINE</a>及び<a href="#">fofo</a>で販売している製品について紹介しています。<br>
                        クリックすると商品の説明ページへ飛びます。
                        </p>
                    </div>
                </div>
            
                

                <div class="row mx-0">
                    <div v-for="product in products" :key="product.product_id" class="p-0 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 image">
                        <a v-bind:href="product.url">
                        <div class="overlay"></div>
                        <div class="top-title">
                            {{product.name}}
                        </div>
                        <div class="centered">
                            <img :src="product.logo" alt="TOKIO INKARAMI" class="img-fluid"> 
                        </div>
                            <img :src="product.image"  alt="TOKIO INKARAMI" class="fit-in-div">   
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
       </div>
</template>


<script>
    export default {
        data: () => {
            return {
                products: [
                    {name: 'トキオインカラミ', logo: require('@/assets/tokio-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/003-tokio.jpg')},
                    {name: 'オーウェイ', logo: require('@/assets/oway-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=12', image: require('@/assets/001-oway.jpg')},
                    {name: 'ケビンマーフィー', logo: require('@/assets/km-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=13', image: require('@/assets/004-kevinmurphy.jpg')},
                    {name: 'アジア', logo: require('@/assets/asia-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/002-asia.jpg')},
                    {name: 'トキオインカラミ', logo: require('@/assets/tokio-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/003-tokio.jpg')},
                    {name: 'オーウェイ', logo: require('@/assets/oway-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/001-oway.jpg')},
                    {name: 'ケビンマーフィー', logo: require('@/assets/km-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/004-kevinmurphy.jpg')},
                    {name: 'アジア', logo: require('@/assets/asia-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/002-asia.jpg')},
                    {name: 'トキオインカラミ', logo: require('@/assets/tokio-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/003-tokio.jpg')},
                    {name: 'オーウェイ', logo: require('@/assets/oway-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/001-oway.jpg')},
                    {name: 'ケビンマーフィー', logo: require('@/assets/km-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/004-kevinmurphy.jpg')},
                    {name: 'アジア', logo: require('@/assets/asia-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/002-asia.jpg')},
                    {name: 'トキオインカラミ', logo: require('@/assets/tokio-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/003-tokio.jpg')},
                    {name: 'オーウェイ', logo: require('@/assets/oway-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/001-oway.jpg')},
                    {name: 'ケビンマーフィー', logo: require('@/assets/km-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/004-kevinmurphy.jpg')},
                    {name: 'アジア', logo: require('@/assets/asia-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/002-asia.jpg')},
                    {name: 'トキオインカラミ', logo: require('@/assets/tokio-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/003-tokio.jpg')},
                    {name: 'オーウェイ', logo: require('@/assets/oway-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/001-oway.jpg')},
                    {name: 'ケビンマーフィー', logo: require('@/assets/km-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/004-kevinmurphy.jpg')},
                    {name: 'アジア', logo: require('@/assets/asia-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/002-asia.jpg')},
                    {name: 'トキオインカラミ', logo: require('@/assets/tokio-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/003-tokio.jpg')},
                    {name: 'オーウェイ', logo: require('@/assets/oway-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/001-oway.jpg')},
                    {name: 'ケビンマーフィー', logo: require('@/assets/km-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/004-kevinmurphy.jpg')},
                    {name: 'アジア', logo: require('@/assets/asia-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/002-asia.jpg')},
                    {name: 'トキオインカラミ', logo: require('@/assets/tokio-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/003-tokio.jpg')},
                    {name: 'オーウェイ', logo: require('@/assets/oway-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/001-oway.jpg')},
                    {name: 'ケビンマーフィー', logo: require('@/assets/km-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/004-kevinmurphy.jpg')},
                    {name: 'アジア', logo: require('@/assets/asia-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/002-asia.jpg')},
                    {name: 'トキオインカラミ', logo: require('@/assets/tokio-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/003-tokio.jpg')},
                    {name: 'オーウェイ', logo: require('@/assets/oway-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/001-oway.jpg')},
                    {name: 'ケビンマーフィー', logo: require('@/assets/km-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/004-kevinmurphy.jpg')},
                    {name: 'アジア', logo: require('@/assets/asia-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/002-asia.jpg')},
                    {name: 'トキオインカラミ', logo: require('@/assets/tokio-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/003-tokio.jpg')},
                    {name: 'オーウェイ', logo: require('@/assets/oway-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/001-oway.jpg')},
                    {name: 'ケビンマーフィー', logo: require('@/assets/km-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/004-kevinmurphy.jpg')},
                    {name: 'アジア', logo: require('@/assets/asia-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/002-asia.jpg')},
                    {name: 'トキオインカラミ', logo: require('@/assets/tokio-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/003-tokio.jpg')},
                    {name: 'オーウェイ', logo: require('@/assets/oway-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/001-oway.jpg')},
                    {name: 'ケビンマーフィー', logo: require('@/assets/km-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/004-kevinmurphy.jpg')},
                    {name: 'アジア', logo: require('@/assets/asia-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/002-asia.jpg')},
                    {name: 'トキオインカラミ', logo: require('@/assets/tokio-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/003-tokio.jpg')},
                    {name: 'オーウェイ', logo: require('@/assets/oway-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/001-oway.jpg')},
                    {name: 'ケビンマーフィー', logo: require('@/assets/km-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/004-kevinmurphy.jpg')},
                    {name: 'アジア', logo: require('@/assets/asia-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/002-asia.jpg')},
                    {name: 'トキオインカラミ', logo: require('@/assets/tokio-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/003-tokio.jpg')},
                    {name: 'オーウェイ', logo: require('@/assets/oway-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/001-oway.jpg')},
                    {name: 'ケビンマーフィー', logo: require('@/assets/km-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/004-kevinmurphy.jpg')},
                    {name: 'アジア', logo: require('@/assets/asia-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/002-asia.jpg')},
                    {name: 'トキオインカラミ', logo: require('@/assets/tokio-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/003-tokio.jpg')},
                    {name: 'オーウェイ', logo: require('@/assets/oway-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/001-oway.jpg')},
                    {name: 'ケビンマーフィー', logo: require('@/assets/km-logo.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/004-kevinmurphy.jpg')},
                    {name: 'アジア', logo: require('@/assets/asia-logo1.svg'), url: 'https://ifing-beauty.com/products/list?category_id=7', image: require('@/assets/002-asia.jpg')},
                ]
            }
            
        }

    }
    
    
</script>



<style lang="scss">

.top-main {
    background: rgb(174,158,146);
    background: linear-gradient(320deg, rgba(174,158,146,1) 0%, rgba(252,237,225,1) 100%);
    .about {
        padding:4vh 0;
        h2 {
            margin-bottom:3vh;
            margin-left:2vw;
        }

        p {
            margin-left:3vw;
            line-height:2em;
            a {
                padding:0 3px;
                // text-decoration: underline;
                color:rgba(30, 139, 195, 1);
                &:hover {
                    padding-bottom:2px;
                    border-bottom:1px solid rgba(30, 139, 195, 1);
                    text-decoration: none;
                }
            }
        }
    }
}

.image {
    position:relative;
    // background:blue;
    // z-index:99;
    &:hover {
        cursor: pointer;
    }
    
    .fit-in-div {
        width:100%;
        height:100%;
        z-index: -1;
    }
    .top-title {
        position:absolute;
        top:0;
        right:0;
        left:0;
        z-index:1000;
        background-color: rgba(20,20,20,0.4);
        // background:rgba(255,255,255,0.6);
        text-align: center;
        // color:rgb(255,255,255);
        color: white;
        font-size:1.15em;
        padding:5px 0;
        text-shadow:1px 1px 3px rgba(20,20,20,0.4);
    }
    .overlay {
        height:100%;
        background:rgba(20,20,20,0.2);
        z-index:998;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        &:hover {
            background:rgba(20,20,20,0.5);
        }
    }
    .centered { 
        position:absolute;
        top:25%;
        bottom:25%;
        left:25%;
        right:25%;
        // transform: (-50%,-50%);
        text-align: center;
        color:#fff;
        z-index:999;
        font-weight:bold;
        display: flex;
        justify-content: center;
        width:50%;
        margin:0 auto;
        // background:red;
        
    }
}

@media screen and (max-width:1200px){

    .image {
        .top-title {
            font-size:1.0em;
            padding:5px 0;
        }
        
    }
    
}

@media screen and (max-width:768px) {
    .top-main {
        .about {
            h2 {
                font-size:1.5em;
            }
            p {
                font-size:0.9em;
                padding:0 20px;
            }
        }
    }
}

@media screen and (max-width:500px) {
    .top-main {
        .about {
            h2 {
                font-size:1.25em;
            }
            p {
                font-size:0.8em;
                padding:0 30px;
                margin:0;
            }
        }
    }
}
</style>