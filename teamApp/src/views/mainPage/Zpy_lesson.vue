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
          <li>分类&emsp;<van-icon name="arrow-down" /></li>
          <li>排序&emsp;<van-icon name="arrow-down" /></li>
          <li>筛选&emsp;<van-icon name="arrow-down" /></li>
        </ul>
      </div>
    </div>
    <div class="Zpy_body">
      <div class="Zpy_teacher_content">
        <ul>
          <li v-for="(item, index) in teacherList" :key="index">
            <p class="Zpy_title">{{ item.title }}</p>
            <p>{{item.start_play_date | filterTime}}&emsp;{{item.end_play_date | filterTime}}|&emsp;共{{ item.total_periods }}课时</p>
            <p class="Zpy_img">
              <img :src="item.teachers_list[0].teacher_avatar" alt="" />
              &emsp;&emsp;
              <span class="Zpy_name">{{
                item.teachers_list[0].teacher_name
              }}</span>
            </p>
            <p class="Zpy_num">
              {{ item.sales_num }}人已报名
              <span class="Zpy_free" @click="Zpy_free(item.id)">免费</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getTeacher } from "../../utils/api/index.js";
export default {
  data() {
    return {
      teacherList: [
        {
          title:'',
          start_play_date:'',
          end_play_date:'',
          sales_num:'',
          id:'',
          teachers_list:[
            {
              teacher_avatar:'',
              teacher_name:'',

            }
          ]

        }
      ],
      teacherContent: {},
    };
  },
  filters: {
    filterTime(val) {
      if (!val) {
        return "";
      }
      var nd = new Date(val*1000);
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
      return mm + "月" + d + "日"+' ' + h + ":" + m;
    },
  },
  methods: {
    Zpy_search() {
      this.$router.push({ path: "/Search" });
    },
    Zpy_free(id) {
        console.log(id);
      this.$router.push({ path: "/Free",query:{id}});
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