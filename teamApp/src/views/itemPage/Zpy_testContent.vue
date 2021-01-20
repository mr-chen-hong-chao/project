<template>
  <div>
    <div class="Zpy_head">
      <van-nav-bar
        title="题库选择"
        left-arrow
        @click-left="onClickLeft"
        fixed
      />
    </div>
    <div class="Zpy_title">
      <van-tabs v-model="active">
        <van-tab
          :title="item.name"
          v-for="(item, index) in Zpy_titleList"
          :key="index"
        ></van-tab>
      </van-tabs>
    </div>
    <p>
      <span @click="Zpy_time">按时间</span>&emsp;&emsp;
      <span @click="Zpy_hot">按热度</span>&emsp;&emsp;
      <span
        >按价格
        <van-icon name="arrow-up" @click="Zpy_price" />
        <van-icon name="arrow-down" @click="Zpy_price2" />
      </span>
    </p>

    <div class="Zpy_content">
      <van-card
        v-for="(item, index) in Zpy_List"
        :key="index"
        :num="item.sales_base"
        :price="item.price/100"
        :desc="item.author"
        :title="item.name"
        :thumb="item.cover_img"
        @click="Zpy_goDeatil(item.id)"
      />
    </div>
  </div>
</template>
<script>
import { getClassify, getList } from "@/utils/api";
export default {
  data() {
    return {
      value: "",
      activeKey: "",
      Zpy_titleList: [], // 专练分类
      Zpy_List: [],
      active: 0,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  mounted() {
    // 专练分类
    getClassify().then((res) => {
      console.log(res);
      this.Zpy_titleList = res;
    });
    //专练列表内容
    getList().then((res) => {
      console.log(res);
      this.Zpy_List = res.list;
    });
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    Zpy_price() {
      this.Zpy_List.sort((a, b) => {
        return b.price - a.price;
      });
    },
    Zpy_price2() {
      this.Zpy_List.sort((a, b) => {
        return a.price - b.price;
      });
    },
    Zpy_hot() {
      this.Zpy_List.sort((a, b) => {
        return b.sales_base - a.sales_base;
      });
    },
    Zpy_time() {},
    Zpy_goDeatil(id){
      this.$router.push()
    }
  },
};
</script>
<style lang="scss" scoped>
.van-search__content {
  margin-top: 1rem;
}
.Zpy_head {
  width: 100%;
  height: 8vh;
}
.Zpy_title {
  width: 100%;
  height: 8vh;
}
p {
  width: 100%;
  height: 6vh;
  line-height: 6vh;
  padding-left: 0.3rem;
  span {
    margin: 0 0.3rem;
  }
}
.Zpy_content {
  width: 100%;
  margin: 0 auto;
  overflow: auto;
  height: 78vh;
  margin-bottom: 1rem;
}
</style>