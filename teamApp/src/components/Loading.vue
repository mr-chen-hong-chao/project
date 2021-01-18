<template>
  <div id='loading'>
      <van-overlay :show="loadingShow" 
      class-name='loadingBg'
       :duration='0.1'>
          <van-loading type="spinner" color="#1989fa" 
          size="0.4rem"
          text-color='orange'
          >
              正在加载中
          </van-loading>
      </van-overlay>
 </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
  name: '',
  data() { 
    return {

    }
  },
  components:{

  },
props:[],
  computed:{
      ...mapState(['loadingShow'])
  },
  created() {

  },
  methods:{
    
  },
 }
</script>

<style lang='scss' scoped>
#loading{
    width: 100%;
    height: 100%;
    .van-loading{
        width: 100%;
        text-align: center;
        position: absolute;
        top: 50%;
    }
    .loadingBg{
      background: rgba(100, 100, 100,0.5);
    }
}
</style>