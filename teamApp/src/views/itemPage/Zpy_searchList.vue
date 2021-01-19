<template>
  <div>
    <h5>搜索结果页 搜索关键字是{{ $route.query.value }}</h5>
    <div class="Zpy_teacher_content">
      <ul>
        <li
          v-for="(item, index) in reslist"
          :key="index"
          @click="Zpy_content_detail(item.id)"
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
            <span class="Zpy_name">{{ item.teacher_name }}</span>
          </div>
          <p class="Zpy_num">
            {{ item.sales_num }}人已报名
            <span class="Zpy_price">价格{{ item.price }}</span>
            <span class="Zpy_free" @click.stop="Zpy_free(item.id)">免费</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getLesson } from "@/utils/api";
export default {
  data() {
    return {
      list: [],
      //保存全部的数据
      reslist: [],
      //保存搜索结果
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
      return y + "年" + mm + "月" + d + "日" + " " + h + ":" + m;
    },
  },
  mounted() {
    //   console.log($route.query.value);
    getLesson().then((res) => {
      this.list = res.list;
      console.log(res);
      this.list.forEach((item) => {
        if (item.title.includes(this.$route.query.value)) {
          this.reslist.push(item);
        }
      });
    });
  },
  methods: {
    Zpy_free(id) {
      this.$router.push({ path: "/free", query: { id: id } });
    },
    Zpy_content_detail(id) {
      this.$router.push({ path: "/free", query: { id: id } });
    },
  },
};
</script>
<style lang="scss" scoped>
h5 {
  height: 0.6rem;
  line-height: 0.6rem;
  width: 100%;
  text-align: center;
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
      border: 1px solid #dddddd;
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
        .Zpy_price {
          color: red;
          font-size: 0.3rem;
        }
        .Zpy_free {
          color: #44a426;
          font-size: 0.33rem;
          margin-left: 1.5rem;
        }
      }
    }
  }
}
</style>
