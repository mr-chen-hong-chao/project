<template>
  <div id='sign'>
      <p>已报名</p>
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
#sign{
  font-size: 0.25rem;
    width: 0.7rem;
    height: 0.7rem;
    line-height: 0.7rem;
    text-align: center;
    background: rgba(255, 165, 0,0.3);
    border-radius: 50%;
    color: red;
    transform: rotate(-30deg);
    p{
        width: 120%;
        margin-left: -10%;
    }

}
</style>