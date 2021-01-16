<template>
  <div id="Zpy_lesson">
    <div class="Zpy_head">
      <div class="Zpy_title">
        <span>特色课</span>
        <span><van-icon name="search" @click="Zpy_search" /></span>
        <!-- 点击跳转搜索页面 -->
      </div>
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
          :style="{ height: '50%' }"
          :overlay-style="{ background: 'transparent' }"
        >
        </van-popup>
        <!-- 排序弹框 -->
        <van-popup
          v-model="isShow"
          position="top"
          :style="{ height: '37.5%' }"
          :overlay-style="{ background: 'transparent' }"
        >
          <div class="Zpy_sort">
            <p>综合排序</p>
            <p>最新</p>
            <p @click="Zpy_hot">最热</p>
            <p @click="Zpy_up">价格从高到低</p>
            <p @click="Zpy_down">价格从低到高</p>
          </div>
        </van-popup>
        <!-- 筛选弹框 -->
        <van-popup
          v-model="isShow2"
          position="top"
          :style="{ height: '30%' }"
          :overlay-style="{ background: 'transparent' }"
        >
          <div class="Zpy_change">
            <button>全部</button>
            <button>大班课</button>
            <button>公开课</button>
            <div class="Zpy_button">
              <button class="Zpy_reset">重置</button
              ><button class="Zpy_true">确定</button>
            </div>
          </div>
        </van-popup>
      </div>
    </div>
    <div class="Zpy_body">
      <div class="Zpy_teacher_content">
        <ul>
          <li
            v-for="(item, index) in teacherList"
            :key="index"
            @click="Zpy_content_detail(item.id)"
          >
            <p class="Zpy_title">{{ item.title }}</p>
            <!-- <p>{{item.start_play_date | filterTime}}&emsp;{{item.end_play_date | filterTime}}|&emsp;共{{ item.total_periods }}课时</p> -->
            <p>1970年01月19日 21:11|&emsp;共5课时</p>
            <p class="Zpy_img">
              <img src="/icon/user_bg.ab306a5c.png" alt="" />
              &emsp;&emsp;
              <span class="Zpy_name">{{
                item.teachers_list[0].teacher_name
              }}</span>
            </p>
            <p class="Zpy_num">
              {{ item.sales_num }}人已报名
              <span class="Zpy_free" @click.stop="Zpy_free(item.id)">免费</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      teacherList: [
        {
          title: "qqq",
          total_periods: 2,
          id: 1,
          end_play_date: "",
          sales_num: 12,
          teachers_list: [
            {
              teacher_avatar: "../../../public/user_bg.ab306a5c.png",
              teacher_name: "李青",
            },
          ],
        },
        {
          title: "xx2x",
          total_periods: 4,
          id: 2,
          end_play_date: "",
          sales_num: 65,
          teachers_list: [
            {
              teacher_avatar: "../../../public/user_bg.ab306a5c.png",
              teacher_name: "1111",
            },
          ],
        },
        {
          title: "xx44x",
          total_periods: 7,
          id: 3,
          end_play_date: "",
          sales_num: 56,
          teachers_list: [
            {
              teacher_avatar: "../../../public/user_bg.ab306a5c.png",
              teacher_name: "2222",
            },
          ],
        },
        {
          title: "xxx",
          total_periods: 6,
          id: 4,
          end_play_date: "",
          sales_num: 67,
          teachers_list: [
            {
              teacher_avatar: "../../../public/user_bg.ab306a5c.png",
              teacher_name: "3333",
            },
          ],
        },
      ],
      teacherContent: {},
      show: false,
      isShow: false,
      isShow2: false,
      overlay: false,
    };
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
      return mm + "月" + d + "日" + " " + h + ":" + m;
    },
  },
  methods: {
    Zpy_search() {
      this.$router.push({ path: "/search" });
    },
    Zpy_free(id) {
      console.log(id);
      this.$router.push({ path: "/free", query: { id: id } });
    },
    Zpy_content_detail(id) {
      this.$router.push({ path: "/free", query: { id: id } });
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
    Zpy_up() {},
    //价格从低到高
    Zpy_down() {},
    Zpy_hot() {
      this.teacherList = this.teacherList.sort((a, b) => {
        return b.sales_num - a.sales_num;
      });
    },
  },
  mounted() {
    // getTeacher().then((res) => {
    //   console.log(res);
    //   this.teacherList = res.data.data.list;
    // });
  },
};
</script>
<style lang="scss" scoped>
#Zpy_lesson {
  width: 100%;
  position: relative;
  background-color: #f0f2f5;
  .Zpy_head {
    width: 100%;
    background-color: white;
    height: 2rem;
    // position: fixed;
    // top: 0;
    // left: 0;
    .Zpy_title {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      font-size: 0.4rem;
      text-align: center;
      display: inline-flex;
      color: grey;
      span {
        width: 50%;
        text-align: right;
      }
    }
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
            margin-top: 0.3rem;
            border-bottom: 1px solid #f5f5f5;
            img {
              width: 0.5rem;
              height: 0.5rem;
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
            .Zpy_free {
              color: #44a426;
              font-size: 0.33rem;
              margin-left: 3.5rem;
            }
          }
        }
      }
    }
  }
}
</style>