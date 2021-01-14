<template>
  <div id='item-banner'>
      {{banner}}
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
props:['banner'],
  computed:{

  },
  created() {

  },
  methods:{

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
}
</style>