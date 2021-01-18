<template>
  <div>
    <div class="search">
      <van-search
        class="left"
        v-model="value"
        placeholder="请输入搜索关键词"
        @search="search"
        @focus="focus"
      />
      <button class="right" @click="search">搜索</button>
    </div>
    <h5>历史记录 <van-icon @click="remove" name="cross" v-model="show" /></h5>
    <van-panel v-model="show">
      <div v-for="(item, index) in history" :key="index" v-show="index < 5">
        {{ item }}
      </div>
    </van-panel>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      value: "",
      history: JSON.parse(localStorage.getItem("history")) || [],
      show: true,
    };
  },
  methods: {
    search() {
      this.history.unshift(this.value);
      localStorage.setItem("history", JSON.stringify(this.history));
      console.log(this.value);
      this.$router.push({ path: "/searchList", query: { value: this.value } });
    },
    remove() {
      Dialog.confirm({
        title: "标题",
        message: "弹窗内容",
      })
        .then(() => {
          this.history = [];
          localStorage.removeItem("history");
        })
        .catch(() => {});
    },
    focus() {
      this.show = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  .left {
    flex: 5;
  }
  .right {
    flex: 1;
    height: 40px;
  }
}
</style>