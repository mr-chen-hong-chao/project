<template>
  <div id="goodTeacher">
    <app-banner></app-banner>
    <div class="content">
      <div class="nav">
        <van-tabs @click="tabType" title-active-color="orange">
          <van-tab v-for="(item, i) in nav" :key="i" :title="item"> </van-tab>
        </van-tabs>
        <span @click="filter"><van-icon name="filter-o" />筛选</span>
      </div>
      <van-popup v-model="popShow" position="top">
        <van-dropdown-menu active-color="orange">
          <van-dropdown-item title="分类" ref="item">
            <van-cell center class="type">
              <template #right-icon>
                <ul>
                  <li v-for="(item, i) in type" :key="i">
                    <span
                      @click="choose(1, item)"
                      :style="typeData.type1 == item[0] ? 'color:orange' : ''"
                      >{{ item[0] }}</span
                    >
                    <span
                      @click="choose(2, item)"
                      :style="typeData.type2 == item[1] ? 'color:orange' : ''"
                      >{{ item[1] }}</span
                    >
                  </li>
                </ul>
              </template>
            </van-cell>
          </van-dropdown-item>
          <van-dropdown-item title="筛选" ref="item">
            <van-cell center title="团购">
              <template #right-icon> </template>
            </van-cell>
            <div style="padding: 5px 16px">
              <van-button type="danger" block round @click="onConfirm">
                确认
              </van-button>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </van-popup>
    </div>
  </div>
</template>

<script>
import AppBanner from "@/components/Chc_app_banner";
export default {
  name: "",
  data() {
    return {
      nav: ["全部", "英语", "语文", "数学", "政治", "地理", "历史", "物理"],
      popShow: false,    //模态框状态
      value1: 0,
      value2: "a",
      type: [
        ["全部", "全部"],
        ["高一", "物理"],
        ["高二", "化学"],
        ["高三", "生物"],
        ["初一", "历史"],
        ["初二", "数学"],
      ],
      typeData: {
        type1: "",
        type2: "",
      },
    };
  },
  components: {
    AppBanner,
  },
  props: [],
  computed: {},
  created() {},
  methods: {
    // 切换分类
    tabType(i) {
      console.log(i);
    },
    //筛选
    filter() {
        this.popShow = true
    },
    //确认条件
    onConfirm() {},
    //选择条件
    choose(i, item) {
      switch (i) {
        case 1:
          this.typeData.type1 = item[0];
          break;
        case 2:
          this.typeData.type2 = item[1];
          break;
      }
      if (this.typeData.type1 != "" && this.typeData.type2 != "") {
          this.popShow = false
          this.typeData.type1=''
          this.typeData.type2=''
      } else {
          this.popShow = true
      }
      
    },
  },
};
</script>

<style lang='scss' scoped>
@mixin between {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
@mixin between {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
#goodTeacher {
  width: 100%;
  height: 100%;
  .nav {
    width: 100%;
    @include between;
    span {
      width: 15%;
      text-align: center;
    }
    .van-tabs {
      width: 85%;
    }
  }
  .content {
    width: 100%;
    height: calc(100% - 1rem);
    position: relative;
    /deep/.van-overlay {
      position: absolute;
      background: rgba(129, 129, 129, 0.3);
    }
    .van-popup {
      position: absolute;
      .van-dropdown-menu {
        .type {
          ul {
            width: 100%;
            li {
              width: 100%;
              height: 0.6rem;
              @include between;
              font-size: 0.4rem;
              text-align: center;
              color: rgb(156, 156, 156);
              span {
                width: 50%;
                font-size: 0.3rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>