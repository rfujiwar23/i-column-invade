<template>
        
       <div>
           <Top />
            <div class="container-fluid">
            <div class="row">
                <div class="p-0 col-xl-3 col-lg-3 col-md-6 col-sm-6 image">
                    <div class="overlay"></div>
                    <div class="centered">
                        <!-- TOKIO INKARAMI
                         -->
                        <img src="@/assets/tokio-logo.svg" alt="TOKIO INKARAMI"> 
                    </div>
                    <img src="@/assets/003-tokio.jpg" alt="TOKIO INKARAMI" class="fit-in-div">
                    
                </div>
                <div class="p-0 col-xl-3 col-lg-3 col-md-6 col-sm-6 image">
                    <div class="overlay"></div>
                    <div class="centered">
                        <img src="@/assets/oway-logo.png" alt="TOKIO INKARAMI">
                        <!-- OWAY -->
                    </div>
                    <img src="@/assets/001-oway.jpg" alt="TOKIO INKARAMI" class="fit-in-div">
                </div>
                <div class="p-0 col-xl-3 col-lg-3 col-md-6 col-sm-6 image">
                    <div class="overlay"></div>
                    <div class="centered">
                        <img src="@/assets/kevinmurphy-logo.svg" alt="TOKIO INKARAMI">
                    </div>
                    <img src="@/assets/004-kevinmurphy.jpg" alt="TOKIO INKARAMI" class="fit-in-div">
                </div>
                <div class="p-0 col-xl-3 col-lg-3 col-md-6 col-sm-6 image">
                    <div class="overlay"></div>
                    <div class="centered">
                      <img src="@/assets/asia-logo.svg" alt="TOKIO INKARAMI"> 
                    </div>
                    <img src="@/assets/002-asia.jpg" alt="TOKIO INKARAMI" class="fit-in-div">
                </div>
                <div class="p-0 col-xl-3 col-lg-3 col-md-6 col-sm-6 image">
                    <div class="overlay"></div>
                    <div class="centered">
                        <!-- TOKIO INKARAMI
                         -->
                        <img src="@/assets/tokio-logo.svg" alt="TOKIO INKARAMI"> 
                    </div>
                    <img src="@/assets/003-tokio.jpg" alt="TOKIO INKARAMI" class="fit-in-div">
                    
                </div>
                <div class="p-0 col-xl-3 col-lg-3 col-md-6 col-sm-6 image">
                    <div class="overlay"></div>
                    <div class="centered">
                        <img src="@/assets/oway-logo.png" alt="TOKIO INKARAMI">
                        <!-- OWAY -->
                    </div>
                    <img src="@/assets/001-oway.jpg" alt="TOKIO INKARAMI" class="fit-in-div">
                </div>
                <div class="p-0 col-xl-3 col-lg-3 col-md-6 col-sm-6 image">
                    <div class="overlay"></div>
                    <div class="centered">
                        <img src="@/assets/kevinmurphy-logo.svg" alt="TOKIO INKARAMI">
                    </div>
                    <img src="@/assets/004-kevinmurphy.jpg" alt="TOKIO INKARAMI" class="fit-in-div">
                </div>
                <div class="p-0 col-xl-3 col-lg-3 col-md-6 col-sm-6 image">
                    <div class="overlay"></div>
                    <div class="centered">
                      <img src="@/assets/asia-logo.svg" alt="TOKIO INKARAMI"> 
                    </div>
                    <img src="@/assets/002-asia.jpg" alt="TOKIO INKARAMI" class="fit-in-div">
                </div><div class="p-0 col-xl-3 col-lg-3 col-md-6 col-sm-6 image">
                    <div class="overlay"></div>
                    <div class="centered">
                        <!-- TOKIO INKARAMI
                         -->
                        <img src="@/assets/tokio-logo.svg" alt="TOKIO INKARAMI"> 
                    </div>
                    <img src="@/assets/003-tokio.jpg" alt="TOKIO INKARAMI" class="fit-in-div">
                    
                </div>
                <div class="p-0 col-xl-3 col-lg-3 col-md-6 col-sm-6 image">
                    <div class="overlay"></div>
                    <div class="centered">
                        <img src="@/assets/oway-logo.png" alt="TOKIO INKARAMI">
                        <!-- OWAY -->
                    </div>
                    <img src="@/assets/001-oway.jpg" alt="TOKIO INKARAMI" class="fit-in-div">
                </div>
                <div class="p-0 col-xl-3 col-lg-3 col-md-6 col-sm-6 image">
                    <div class="overlay"></div>
                    <div class="centered">
                        <img src="@/assets/kevinmurphy-logo.svg" alt="TOKIO INKARAMI">
                    </div>
                    <img src="@/assets/004-kevinmurphy.jpg" alt="TOKIO INKARAMI" class="fit-in-div">
                </div>
                <div class="p-0 col-xl-3 col-lg-3 col-md-6 col-sm-6 image">
                    <div class="overlay"></div>
                    <div class="centered">
                      <img src="@/assets/asia-logo.svg" alt="TOKIO INKARAMI"> 
                    </div>
                    <img src="@/assets/002-asia.jpg" alt="TOKIO INKARAMI" class="fit-in-div">
                </div>
            </div>
        </div>
       </div>
</template>


<style lang="scss">


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
        top:50%;
        bottom:50%;
        left:25%;
        right:25%;
        // transform: (-50%,-50%);
        text-align: center;
        color:#fff;
        z-index:999;
        font-weight:bold;
        
    }
}
</style>