<template>
  <div id='home'>
    <div id="view">
      <router-view></router-view>
    </div>
    <bottom-nav></bottom-nav>

  </div>
</template>

<script>
  import BottomNav from '@/components/Chc_bottom_nav'

  export default {
    name: '',

    data() {
      return {

      }
    },
    components: {
      BottomNav,
    },
    props: [],

    computed: {

    },
    created() {

    },
    methods: {

    },

  }
</script>

<style lang='scss' scoped>
  #home {
    width: 100%;
    height: 100%;
    padding: 0.01rem;

    #view {
      width: 100%;
      height: calc(100% - 1rem);
      overflow: auto;
      background: rgb(241, 241, 241);
    }

  }
</style>
