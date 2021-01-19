<template>
  <div id="app-banner">
      <van-nav-bar class="opacity" :title="$route.meta.title" left-text="" left-arrow @click-left='back'>
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
      show:false,
    };
  },
  components: {},
  props: [],
  computed: {},
  created() {
    if(this.$route.path =='/lesson'){
      this.show = true
    }else{
      this.show = false
    }
  },
  methods: {
    back(){
      this.$router.back()
    }
  },
};
</script>
<style lang='scss' scoped>
#app-banner{
  /deep/.van-icon{
    // color: black;
  }
    
}
</style>