<template>
  <div id="app">
    <router-view />
    <email-btn></email-btn>
    <popup :popShow='emailState' @hide='tabHide()'></popup>
    <loading></loading>
  </div>
</template>
<script>
  import EmailBtn from '@/components/Email_btn'
  import Popup from '@/components/Chc_popup'
  import Loading from '@/components/Loading'
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    computed:{
      ...mapState(['emailState'])
    },
    components: {
      EmailBtn,
      Popup,
      Loading
    },
    methods: {
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