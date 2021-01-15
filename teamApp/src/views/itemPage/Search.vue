<template>
  <div>
    <div class="Zpy_search">
      <p @click="Zpy_goLesson" class="Zpy_left">&lt;</p>
      <input type="text" placeholder="请输入内容" />
      <button>取消</button>
    </div>
    <div class="Zpy_searchContent">
      <p class="Zpy_history">历史记录 <span><van-icon name="delete-o" /></span></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    Zpy_goLesson() {
      this.$route.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.Zpy_search {
  width: 100%;
  height: 1rem;
//   background-color: yellowgreen;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .Zpy_left,
  button {
    flex: 1;
  }
  .Zpy_left {
    width: 1rem;
    line-height: 1rem;
    font-size: 0.5rem;
    color: grey;
    text-align: center;
  }
  input {
    height: 0.6rem;
    padding-left: 0.6rem;
    flex: 4;
    border-radius: 0.4rem;
    border: none;
    border: 1px solid grey;
  }
  button {
    border: none;
    color: grey;
    height: 1rem;
  }
}
.Zpy_searchContent {
  width: 100%;
  .Zpy_history{
      margin-top: 0.3rem;
      span{
        margin-left: 6rem;
        font-size: 0.3rem;
      }
  }
}
</style>