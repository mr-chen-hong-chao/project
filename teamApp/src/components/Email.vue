<template>
  <div id='email'>
      <van-icon name="envelop-o" color="white" size="0.7rem"/>
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
props:[],
  computed:{

  },
  created() {

  },
  methods:{

  },
 }
</script>

<style lang='scss' scoped>
@mixin around{
display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
}
#email{
    width: 1.2rem;
    height: 1.2rem;
    background: rgb(67, 140, 236);
    border-radius: 50%;
    @include around;
}
</style>