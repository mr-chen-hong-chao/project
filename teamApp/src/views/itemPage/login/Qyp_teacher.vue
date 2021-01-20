<template>
    <div class="teacher">
        <Heads></Heads>
        <div class="img">
            <img src="../../../../public/icon/empty.png" alt="">
            <p>暂无数据</p>
        </div>
    </div>
</template>
<script>
    import Heads from '../../../components/Qyp_header'
    export default {
        components: {
            Heads
        }

    }
</script>
<style lang="scss" scoped>
    .teacher {
        height: 100%;
        width: 100%;

        .img {
            width: 100%;
            height: 100%;
            text-align: center;
            background-color: rgb(243, 243, 243);

            img {
                width: 50%;
                height: 30%;
                // margin: 0 auto;
            }
            p{
                margin-top: 0.3rem;
                color: rgb(184, 184, 184);
            }
        }
    }
</style>