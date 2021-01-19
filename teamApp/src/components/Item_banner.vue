<template>
  <div id='item-banner'>
      {{title}}
      <span v-if='title =="名师阵容"' class="more" @click="getMore">更多&gt;</span>
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
      this.$router.push('/goodTeacher')
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