<template>
    <div class="">
        <div class="head">
            <van-icon name="arrow-left" class="lefts" @click="onClickLeft" />
            <span>{{$route.meta.title}}</span>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .head {
        width: 100%;
        height: 8vh;
        text-align: center;
        line-height: 8vh;
        font-size: 0.3rem;
        box-shadow: 0px 0px 2px #c8c8c8;
        position: relative;

        .lefts {
            line-height: 8vh;
            position: absolute;
            left: 0.2rem;
        }
    }
</style>