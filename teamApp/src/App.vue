<template>
  <div id="app" @touchstart='start' @touchmove='move' @touchend='end'>
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
        startX:null,
        endX:null
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
      start(e){
        this.startX = e.touches[0].pageX
      },
      move(e){
        this.endX = e.touches[0].pageX
      },
      end(e){
        let val =this.endX - this.startX 
        if(val >=50){
          this.$router.go(-1)
        }else if(val <=50 && val >=30){
          this.$router.go(1)
        }
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
    padding: 0.1rem;
  }
</style>