<template>
  <div id="Zpy_lesson">
    <div class="Zpy_head">
      <app-banner></app-banner>
      <div class="Zpy_type">
        <ul>
          <li @click="Zpy_type">分类&emsp;<van-icon name="arrow-down" /></li>
          <li @click="Zpy_sort">排序&emsp;<van-icon name="arrow-down" /></li>
          <li @click="Zpy_change">筛选&emsp;<van-icon name="arrow-down" /></li>
        </ul>
        <!-- 分类弹框 -->
        <van-popup
          v-model="show"
          position="top"
          :style="{ height: '20%' }"
          :overlay-style="{ background: 'transparent' }"
        >
          <div class="Zpy_button">
            <button class="Zpy_reset">重置</button
            ><button class="Zpy_true">确定</button>
          </div>
        </van-popup>
        <!-- 排序弹框 -->
        <van-popup
          v-model="isShow"
          position="top"
          :style="{ height: '37.5%' }"
          :overlay-style="{ background: 'transparent' }"
        >
          <div class="Zpy_sort">
            <p @click="Zpy_all">综合排序</p>
            <p @click="Zpy_newtime">最新</p>
            <p @click="Zpy_hot">最热</p>
            <p @click="Zpy_up">价格从高到低</p>
            <p @click="Zpy_down">价格从低到高</p>
          </div>
        </van-popup>
        <!-- 筛选弹框 -->
        <van-popup
          v-model="isShow2"
          position="top"
          :style="{ height: '25%' }"
          :overlay-style="{ background: 'transparent' }"
        >
          <div class="Zpy_change">
            <button
              v-for="(item, index) in Zpy_changeList"
              :key="index"
              @click="Zpy_changeType(index)"
            >
              {{ item.name }}
            </button>
          </div>
        </van-popup>
      </div>
    </div>
    <div class="Zpy_body">
      <div class="Zpy_teacher_content">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          :immediate-check="false"
          @load="onLoad"
        >
          <ul>
            <li
              v-for="(item, index) in teacherList"
              :key="index"
              @click="Zpy_content_detail(item.id, item.has_buy)"
            >
              <p class="Zpy_title">{{ item.title }}</p>
              <p>
                {{ item.start_play_date | filterTime }}&emsp;{{
                  item.end_play_date | filterTime
                }}
              </p>
              <p>共{{ item.total_periods }}课时</p>
              <div class="Zpy_img">
                <img :src="item.cover_img" alt="" class="Zpy_teacherImg" />
                &emsp;&emsp;
                <span class="Zpy_name">{{
                  item.teachers_list[0].teacher_name
                }}</span>
              </div>
              <p class="Zpy_num">
                {{ item.sales_num }}人已报名
                <span class="Zpy_price">价格{{ item.price }}</span>
                <span class="Zpy_free" @click.stop="Zpy_free(item.id)"
                  >免费</span
                >
                <sign class="sign" v-if="item.has_buy"></sign>
              </p>
            </li>
          </ul>
        </van-list>
      </div>
    </div>
  </div>
</template>
<script>
import Sign from "@/components/Sign";
import AppBanner from "@/components/Chc_app_banner";
import { getPublic, getChange, getLesson } from "@/utils/api";
export default {
  data() {
    return {
      teacherList: [],
      teacherListAll: [],
      teacherContent: {},
      show: false,
      isShow: false,
      isShow2: false,
      Zpy_changeList: [], //筛选
      Zpy_Type: [], //筛选类型
      loading: false,
      finished: false,
      page: 1,
      limit: 10,
    };
  },
  components: {
    Sign,
    AppBanner,
  },
  filters: {
    filterTime(val) {
      if (!val) {
        return "";
      }
      var nd = new Date(val * 1000);
      var y = nd.getFullYear();
      var mm = nd.getMonth() + 1;
      var d = nd.getDate();
      var h = nd.getHours();
      var m = nd.getMinutes();
      if (mm < 10) {
        mm = "0" + mm;
      }
      if (d < 10) {
        d = "0" + d;
      }
      if (h < 10) {
        h = "0" + h;
      }
      if (m < 10) {
        m = "0" + m;
      }
      return y + "年" + mm + "月" + d + "日" + " " + h + ":" + m;
    },
  },
  created() {},
  methods: {
    onLoad() {
      this.Zpy_getMoreClass();
      
    },
    //获取更多课程数据
    Zpy_getMoreClass() {
      this.page++;
      getLesson({ page: this.page, limit: this.limit }).then((res) => {
        console.log(res);
        if (res.length == 0) {
          this.finished = true; //不在加载
        }
        this.teacherList=this.teacherList.concat(res);
        this.loading = false; //关闭loading
        console.log(this.teacherList);
      });
    },
    Zpy_search() {
      this.$router.push({ path: "/search" });
    },
    Zpy_free(id) {
      console.log(id);
      this.$router.push({ path: "/free", query: { id: id } });
    },
    Zpy_content_detail(id, buy) {
      this.$router.push({ name: "free", query: { id: id, buy: buy } });
    },
    //分类弹框
    Zpy_type() {
      this.show = true;
    },
    //排序弹框
    Zpy_sort() {
      this.isShow = true;
    },
    Zpy_change() {
      this.isShow2 = true;
    },
    //价格从高到低
    Zpy_up() {
      // this.teacherList =
      this.teacherList.sort((a, b) => {
        return b.price - a.price;
      });
    },
    //价格从低到高
    Zpy_down() {
      // this.teacherList =
      this.teacherList.sort((a, b) => {
        return a.price - b.price;
      });
    },
    //最热
    Zpy_hot() {
      // this.teacherList =
      this.teacherList.sort((a, b) => {
        return b.sales_num - a.sales_num;
      });
    },
    //最新
    Zpy_newtime() {
      // this.teacherList =
      this.teacherList.sort((a, b) => {
        return b.start_play_date - a.start_play_date;
      });
      // this.isShow = false;
    },
    //综合
    Zpy_all() {
      this.teacherList = JSON.parse(JSON.stringify(this.teacherListAll));
    },
    //筛选
    Zpy_change() {
      this.isShow2 = true;
    },
    //筛选类型
    Zpy_changeType(index) {
      if (!index) {
        this.teacherList = this.teacherListAll;
      } else {
        this.teacherList = [];
        this.teacherListAll.forEach((item) => {
          if (item.course_type == index) {
            // console.log(index);
            this.teacherList.push(item);
          }
        });
      }

      console.log(this.teacherList);
    },
  },
  mounted() {
    //筛选
    getChange().then((res) => {
      // console.log(res);
      this.Zpy_changeList = res.appCourseType;
      this.Zpy_Type = res.courseTypes;
      // console.log(res.courseTypes);
    });
    getLesson({ page: 1, limit: 5 }).then((res) => {
      console.log(res);
      this.teacherList = res;
      this.teacherListAll = res;
    });
  },
};
</script>
<style lang="scss" scoped>
// [v-cloak]{
//   display: none;
// }
#Zpy_lesson {
  width: 100%;
  position: relative;
  background-color: #f0f2f5;
  .Zpy_head {
    width: 100%;
    background-color: white;
    height: 2rem;
    .Zpy_type {
      height: 1rem;
      line-height: 1rem;
      width: 100%;
      font-size: 0.33rem;
      border-top: 1px solid #f5f5f5;
      ul {
        width: 100%;
        display: inline-flex;
        height: 100%;
        li {
          text-align: center;
          width: 33.1%;
        }
      }
      .van-popup--top {
        margin-top: 2rem;
      }
    }
    .Zpy_button {
      width: 100%;
      display: inline-flex;
      padding: 0 0.3rem;
      button {
        width: 48%;
        height: 1rem;
        border: none;
        border-radius: 0.2rem;
      }
      .Zpy_reset {
        color: grey;
        margin-right: 0.2rem;
      }
      .Zpy_true {
        color: white;
        background-color: orangered;
      }
    }
  }
  .Zpy_sort {
    width: 100%;
    text-align: center;
    color: grey;
    p {
      height: 1rem;
      line-height: 1rem;
      border-bottom: 1px solid #f0f2f5;
    }
  }
  .Zpy_change {
    width: 100%;
    height: 3rem;
    button {
      background-color: gainsboro;
      color: grey;
      border: none;
      border-radius: 0.1rem;
      width: 1.5rem;
      height: 0.7rem;
      line-height: 0.7rem;
      margin-left: 0.3rem;
      text-align: center;
    }
  }
  .Zpy_body {
    width: 100%;
    height: 100%;
    background-color: #f0f2f5;
    .Zpy_teacher_content::-webkit-scrollbar {
      display: none;
    }
    .Zpy_teacher_content {
      width: 90%;
      margin: 0 auto;
      overflow: auto;
      height: 85vh;
      ul {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        li {
          width: 100%;
          height: 4rem;
          margin-top: 0.3rem;
          border-radius: 0.3rem;
          background-color: white;
          padding-left: 0.2rem;
          padding-right: 0.2rem;
          //   margin-bottom: 0.5rem;
          .Zpy_title {
            margin-top: 0.7rem;
            font-size: 0.35rem;
            margin-bottom: 0.3rem;
          }
          .Zpy_img {
            height: 1.2rem;
            line-height: 1.2rem;
            margin-top: 0.1rem;
            border-bottom: 1px solid #f5f5f5;
            .Zpy_teacherImg {
              width: 0.7rem;
              height: 0.7rem;
            }
            .Zpy_name {
              color: grey;
            }
          }
          .Zpy_num {
            color: grey;
            font-size: 0.3rem;
            height: 0.9rem;
            line-height: 0.9rem;
            .Zpy_price {
              color: red;
              font-size: 0.3rem;
            }
            .Zpy_free {
              color: #44a426;
              font-size: 0.33rem;
              margin-left: 1.5rem;
            }
            .sign {
              float: right;
              margin-right: 0.5rem;
            }
          }
        }
      }
    }
  }
}
</style>