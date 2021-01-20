<template>
  <div id='item-banner'>
      {{title}}
      <span  class="more" @click="getMore">更多&gt;</span>
 </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  },
  components:{

  },
props:['title'],
  computed:{

  },
  created() {

  },
  methods:{
    getMore(){
      this.$router.push('/teacherList')
    }
  },
 }
</script>

<style lang='scss' scoped>
#item-banner{
    width: 100%;
    border-left: 0.07rem solid red;
    padding-left: 0.2rem;
    font-size: 0.3rem;
    margin: 0.2rem 0rem;
    .more{
      float: right;
    }
}
</style>