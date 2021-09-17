<template>
    <span class="go-back">
        <button @click="backOnePage" class="btn btn-dark">前のページへ戻る</button>
    </span>
</template>

<script>
export default {
    methods: {
        backOnePage() {
            return this.$router.go(-1);
        }
    }
};
</script>

<style scoped>
.go-back {
    display: flex;
    cursor: pointer;
}

</style>