<template>
    <div>
        <Heads></Heads>
        <div class="s=set">
            <p>设置密码 
                <span>
                    <van-icon name="arrow" />
                </span>
            </p>
            <van-divider />
        </div>
        <button @click="loginout">退出登录</button>



    </div>
</template>
<script>
    import Heads from '../../../components/Qyp_header'
    export default {
        components: {
            Heads
        },
        
        methods: {
            //退出登录
            loginout(){
                this.$store.commit('del_token')
                this.$store.commit('del_user')
                this.$router.push('/login')
                Toast.success('退出成功')
            }
        },


    }
</script>
<style lang="scss" scoped>
</style>