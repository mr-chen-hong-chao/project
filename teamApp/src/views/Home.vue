<template>
  <div id='home'>
    <div id="view">
      <router-view></router-view>
    </div>
    <bottom-nav></bottom-nav>
    <div id="email-button" @click="service">
      <email></email>
    </div>
 </div>
</template>

<script>
import BottomNav from '@/components/Chc_bottom_nav'
import Email from '@/components/Email'
export default {
  name: '',
  
  data() { 
    return {

    }
  },
  components:{
    BottomNav,
    Email
  },
props:[],
  computed:{

  },
  created() {

  },
  methods:{
    service(){
      this.$router.push('/service')
    }
  },
 }
</script>

<style lang='scss' scoped>
#home{
   width: 100%;
   height: 100%;
  //  padding: 0.01rem;
   #view{
     width: 100%;
     height: calc(100% - 1rem);
     overflow: auto;
     background: rgb(241, 241, 241);
   }
   #email-button{
     position: fixed;
     right: 0.3rem;
     bottom: 1.5rem;
   }
}
</style>
