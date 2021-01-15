<template>
  <div id='back'>
      <button @click="$router.back()">
          <van-icon name="arrow-left" size="0.4rem"/>
      </button>
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
#back{
    width: 0.7rem;
    height: 0.7rem;
    button{
        width: 100%;
        height: 100%;
        outline: none;
        background-color: rgba(0,0,0,0);
        color: white;
        border: none;
    }
}
</style>