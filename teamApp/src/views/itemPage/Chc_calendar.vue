<template>
<!-- 学习日历页面 -->
  <div id='calendar'>
      <app-banner ></app-banner>
      <van-calendar
  title="日历"
  :poppable="false"
  :show-confirm="false"
  :show-mark='false'
  :style="{ height: '500px' }"
/>
 </div>
</template>

<script>
import AppBanner from '@/components/Chc_app_banner'
export default {
  name: '',
  data() { 
    return {

    }
  },
  components:{
    AppBanner
  },
props:[],
  computed:{

  },
  created() {

  },
  methods:{

  },
 }
</script>

<style lang='scss' scoped>
</style>