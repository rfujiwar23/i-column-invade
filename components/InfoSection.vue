<template>
    <div class="text-info bg-light">
        <div class="container">
            <p>今回はTOKIOインカラミの【インカラミ】について解説していきたいと思います！ まずTOKIOインカラミって…？<br>
            TOKIOインカラミは美容室で使用されるシステムトリートメントです。<br>カラーやパーマのケミカル施術や日々のアイロンや
            コテの使用による熱によってダメージを受けてしまった髪をダメージ前のような健康な髪に導くトリートメントです。</p>
        </div>
    </div>
</template>

<style lang="scss">

.text-info {
    padding:2vh 0 1vh;
    .container {
        border-bottom:1px dotted #9a9a9a;
        p {
            padding:1vh 3vw;
            line-height:1.5em;
        }
    }
}

@media screen and (max-width:768px) {
    .text-info {
        .container {
            width:100%;
            max-width:768px;
        }
    }
}


@media screen and (max-width:520px) {
    .text-info {
        p {
            padding:10px 3vw;
            font-size:0.9em;
            line-height: 2em;
        }
    }
}


</style>