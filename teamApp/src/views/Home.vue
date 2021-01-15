<template>
  <div id='home'>
<<<<<<< HEAD
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
  components:{
    BottomNav,
  },
props:[],
 
  computed:{
=======
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: '',

    data() {
      return {

      }
    },
    components: {
>>>>>>> 6a4824d (全艳平 我的页面)

    },
    props: [],
    computed: {

<<<<<<< HEAD
  },
  methods:{
    
  },
  
 }
</script>

<style lang='scss' scoped>
#home{
   width: 100%;
   height: 100%;
   padding: 0.01rem;
   #view{
     width: 100%;
     height: calc(100% - 1rem);
     overflow: auto;
     background: rgb(241, 241, 241);
   }
   
}
</style>
=======
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
  }
</style>
>>>>>>> 6a4824d (全艳平 我的页面)
