<template>
  <div id="app">
    <router-view />
    <email-btn @tab='tabBtn'></email-btn>
    <popup :popShow='show' @hide='tabHide()'></popup>
    <loading></loading>
  </div>
</template>
<script>
  import EmailBtn from '@/components/Email_btn'
  import Popup from '@/components/Chc_popup'
  import Loading from '@/components/Loading'
  export default {
    data() {
      return {
        show: false
      }
    },
    components: {
      EmailBtn,
      Popup,
      Loading
    },
    methods: {
      tabBtn() {
        this.show = true
      },
      tabHide() {
        this.show = false
      }
    },
    
    
  }
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
  }
</style>