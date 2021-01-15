<template>
  <div id="app-banner">
      <van-nav-bar class="opacity" :title="banner" left-text="返回" left-arrow @click-left='back'>
        <template #right >
          <van-icon v-show="show" name="search" size="18" />
        </template>
      </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      show:false
    };
  },
  components: {},
  props: ["banner"],
  computed: {},
  created() {},
  methods: {
    back(){
      this.$router.back()
    }
  },
  //监听路由,显示隐藏右侧搜索图标
};
</script>
<style lang='scss' scoped>
#app-banner{
  
    
}
</style>