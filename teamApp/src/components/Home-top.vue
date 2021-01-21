<template>
  <div id='home-top'>
    <van-sticky>
        <van-icon size="0.4rem" color="orange" name="manager" @click="clickLogin" />
        <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" @click="clickSearch" />
        <van-icon size="0.4rem" color="#438CEC" name="envelop-o" @click="clickEmail" />
    </van-sticky>
 </div>
</template>

<script>
import { Toast } from "vant";
import {mapMutations} from 'vuex'
export default {
  name: '',
  data() { 
    return {
        value:''
    }
  },
  components:{

  },
props:[],
  computed:{

  },
  created() {

  },
  methods:{
      ...mapMutations(['tabEmailState']),
      clickSearch(){
          this.$router.push('/seacher')
      },
      clickLogin(){
          if(localStorage.getItem('token')){
              Toast({
          message: "已登录，无需重复登录",
          icon: "fail",
          duration: 600,
        })
          }else{
            this.$router.push('/login')  
          }
          
      },
      clickEmail(){
          this.tabEmailState()
      }
  },
 }
</script>

<style lang='scss' scoped>
@mixin between{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
}
#home-top{
    width: 100%;
    /deep/.van-sticky{
        padding: 0.1rem 0.3rem;
        background: rgba(255, 255, 255,0.8);
        @include between;
        .van-search{
            padding: 0rem 0.1rem;
            background: rgba(255, 255, 255,0.8);
            width: 100%;
        }
        .van-icon{
            padding: 0rem 0.1rem;
        }
    }
}
</style>