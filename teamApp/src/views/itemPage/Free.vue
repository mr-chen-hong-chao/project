<template>
  <div class="Zpy_detail">
    <div class="Zpy_head">
      <van-icon name="arrow-left" @click="goUp" />
      <p>课程详情</p>
      <van-icon name="cluster-o" />
    </div>
    <div class="Zpy_body">
      <div class="Zpy_title">
        <p class="title">{{ Zpy_detailList.title }}</p>
        <p class="Zpy_free">免费</p>
        <p class="Zpy_grey">
          共{{ Zpy_detailList.total_periods }}课时&emsp;|&emsp;{{
            Zpy_detailList.sales_num
          }}人已报名
        </p>
        <p class="Zpy_grey">
          开课时间：{{ Zpy_detailList.start_play_date | filterTime }}&emsp;{{
            Zpy_detailList.end_play_date | filterTime
          }}&emsp;
        </p>
      </div>
      <div class="Zpy_teach">
        <p class="Zpy_team">教学团队</p>
        <img :src="detail.teacher_avatar" alt="" />
        <p class="ZPy_name" v-if="Zpy_detailList.teachers_list">
          <!-- {{ Zpy_detailList.teachers_list[0].teacher_name }} -->
          {{ detail.teacher_name }}
        </p>
      </div>
      <div class="Zpy_introduce">课程介绍</div>
      <div class="Zpy-outline">
        <p class="Zpy_big">课程大纲</p>
        <ul>
          <li v-for="(item, index) in Zpy_outline" :key="index">
            <p class="Zpy_one">
              <span class="Zpy_dit">·</span>
              <span class="Zpy_back">回放</span>
              {{ item.periods_title }}
            </p>
            <p class="Zpy_gray" v-if="item.teachers[0]">
              {{ item.teachers[0].teacher_name }}
              {{ item.start_play }}-{{ item.end_play }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="Zpy_button">立即学习</div>
  </div>
</template>
<script>
import { getTeacher, getHour } from "../../utils/api/index.js";
export default {
  data() {
    return {
      Zpy_detailList: [],
      detail: "",
      Zpy_outline: [],
      teacherName: "",
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
  mounted() {
    getTeacher().then((res) => {
      //   console.log(res);
      res.data.data.list.forEach((item) => {
        if (item.id == this.$route.query.id) {
          this.Zpy_detailList = item;
        }
      });
      //   console.log(this.Zpy_detailList.teachers_list[0]);
      this.detail = this.Zpy_detailList.teachers_list[0];
    });
    getHour({ id: 287 }).then((res) => {
    //   console.log(res);
      this.Zpy_outline = res.data.data;
    });
  },
  methods: {
    goUp() {
      //   this.$route.go(-1)
    },
  },
};
</script>
<style lang="scss" scoped>
.Zpy_detail {
  background-color: #f0f2f5;
}
.Zpy_head {
  width: 100%;
  height: 1rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.3rem;
  box-sizing: border-box;
  padding: 0 0.2rem;
  border-bottom: 1px solid #f0f2f5;
  background-color: white;
  p {
    font-size: 0.4rem;
  }
}
.Zpy_body::-webkit-scrollbar {
  display: none;
}
.Zpy_body {
  width: 100%;
  overflow: auto;
  height: 92.4vh;
  .Zpy_title {
    width: 100%;
    height: 2.8rem;
    // background-color: wheat;
    padding-left: 0.3rem;
    padding-top: 0.45rem;
    margin-bottom: 0.3rem;
    background-color: white;
    .title {
      font-size: 0.35rem;
    }
    .Zpy_free {
      color: #ec6100;
      font-size: 0.3rem;
      margin: 0.2rem 0;
    }
    .Zpy_grey {
      color: grey;
      font-size: 0.3rem;
      margin: 0.2rem;
    }
  }
  .Zpy_teach {
    height: 3rem;
    width: 100%;
    background-color: white;
    padding-left: 0.2rem;
    padding-top: 0.3rem;
    margin-bottom: 0.3rem;
    .Zpy_team {
      font-size: 0.3rem;
    }
    img {
      width: 1rem;
      height: 1rem;
      margin-left: 0.2rem;
      margin-top: 0.35rem;
      margin-bottom: 0.2rem;
    }
    .ZPy_name {
      margin-left: 0.3rem;
    }
  }
  .Zpy_introduce {
    height: 1.6rem;
    width: 100%;
    padding-left: 0.2rem;
    padding-top: 0.3rem;
    margin-bottom: 0.3rem;
    background-color: white;
    font-size: 0.3rem;
  }
  .Zpy-outline {
    width: 100%;
    background-color: white;
    .Zpy_big {
      height: 0.7rem;
      padding-left: 0.3rem;
      line-height: 0.7rem;
    }
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        width: 100%;
        height: 1.2rem;
        padding-left: 0.6rem;
        .Zpy_one {
          height: 0.6rem;
          line-height: 0.6rem;
        }
        .Zpy_dit {
          font-size: 0.7rem;
          color: orange;
        }
        .Zpy_back {
          display: inline-block;
          width: 0.7rem;
          height: 0.4rem;
          line-height: 0.4rem;
          text-align: center;
          color: white;
          background-color: #ea7a2f;
        }
        .Zpy_gray {
          padding-left: 0.3rem;
          margin-top: 0.25rem;
          font-size: 0.25rem;
          color: grey;
        }
      }
    }
  }
}
.Zpy_button {
  width: 100%;
  height: 7vh;
  background-color: #eb6100;
  color: white;
}
</style>
