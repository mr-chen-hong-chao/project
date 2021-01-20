<template>
  <div>
    <app-banner></app-banner>
    <van-tabs v-model="active" @click="cut">
      <van-tab v-for="item in tab" :key="item.type" :title="item.title" :name="item.type">
        <van-empty v-if="list.length == 0" image="./icon/no-message.png" image-size="5rem" :description="alt">
          <van-button v-if="item.type !== 3" type="danger" class="bottom-button" color="#EB6100" 
            >立即约课</van-button
          >
        </van-empty>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import AppBanner from '@/components/Chc_app_banner'
import {getPublic} from '@/utils/api'
export default {
  data() {
    return {
      pagenum: 1,
      pagesize: 10,
      type: 1,
      list: [],
      active: 0,
      tab: [
        { title: '待上课', type: 1 },
        { title: '已上课', type: 2 },
        { title: '已取消', type: 3 }
      ],
      alt: '还没有待上课记录哦'
    }
  },
  components:{
    AppBanner
  },
  mounted() {
    // this.$http.record({ limit: this.pagesize, page: this.pagenum, type: this.type }).then(res => {
    //   // console.log(res)
    //   this.list = res.data.data.list
    // })
    //测试接口
    getPublic().then(res=>{
      console.log(res)
    })
  },
  methods: {
    cut(name) {
      this.type = name
      // this.$http.record({ limit: this.pagesize, page: this.pagenum, type: this.type }).then(res => {
      //   console.log(res)
      //   this.list = res.data.data.list
      // })
      if (name == 1) {
        this.alt = '还没有待上课记录哦'
      } else if (name == 2) {
        this.alt = '还没有上课记录哦'
      } else if (name == 3) {
        this.alt = '还没有取消上课记录哦'
      }
    },

  }
}
</script>
<style lang="scss">
</style>