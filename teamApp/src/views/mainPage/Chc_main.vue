<template>
  <div id="main">
    <home-Top></home-Top>
    <!-- 头部 -->
    <header>
      <!-- 轮播 -->
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
        <van-swipe-item v-for="(item, i) in swiper" :key="i">
          <img :src="item.banner_img" alt="" />
        </van-swipe-item>
      </van-swipe>
      <!-- 导航 -->
      <div class="main-nav">
        <ul>
          <li class="box-shadow-bottom" 
          v-for="(item, i) in nav" :key="i" @click="getNav(item.path)">
            <img :src="item.icon" alt="" />
            <span>{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </header>
    <!-- 讲师列表 -->
    <div class="list" v-for="(item, i) in data" :key="i">
      <banner :title="item.channel_info.name"></banner>
      <div class="item">
        <ul>
          <li
            v-for="(items, i) in item.list"
            :key="i"
            class="box-shadow-bottom"
            @click="getTeacherDetail(items.teacher_id)"
          >
            <img :src="items.teacher_avatar" alt="" />
            <div class="info">
              <h3>{{ items.teacher_name }}</h3>
              <p class="text-overflow-ell">{{ items.introduction }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 热门资讯 -->
    <!-- <div class="hot" v-if="hot">
      <banner :banner="hot[0].channel_info.name"></banner>
      <div class="hot-list">
        <van-swipe
          :autoplay="2000"
          indicator-color="white"
          @change="swiperOver"
        >
          <van-swipe-item v-for="(item, i) in hot[0].list" :key="i">
            <img :src="item.thumb_img" alt="" />
          </van-swipe-item>
          <template #indicator>
            <div class="custom-indicator">
              {{ current }}/{{ hot[0].list.length }}
            </div>
          </template>
        </van-swipe>
      </div>
    </div> -->
  </div>
</template>

<script>
import HomeTop from '@/components/Home-top'
import Banner from "@/components/Item_banner";
import { getBanner, getHome,} from "@/utils/api";
export default {
  name: "",
  data() {
    return {
      swiper: [], //轮播图数据
      nav: [
        {
          title: "特色课",
          icon: "/icon/kind1.png",
          path: "/lesson",
        },
        {
          title: "一对一辅导",
          icon: "/icon/kind2.png",
          path: "/tutoring",
        },
        {
          title: "学习日历",
          icon: "/icon/kind3.png",
          path: "/calendar",
        },
      ],
      data: [],
      hot: [],
      current: 1, //热门轮播下表
    };
  },
  components: {
    Banner,
    HomeTop
  },
  props: [],
  computed: {},
  created() {
    
  },
  mounted(){
    //请求轮播图数据
    getBanner().then((res) => {
      this.swiper = res;
    });
    getHome().then((res) => {
      this.hot = res.splice(1, 1);
      this.data = res;
    });
  },
  methods: {
    //跳转导航
    getNav(path) {
      this.$router.push(path);
    },
    //跳转到老师详情
    getTeacherDetail(teacherId) {
      this.$router.push({
        path:'teacher-detail',
        query:{
          id:teacherId
        }
      })
    },
    //改变热门轮播下标
    swiperOver(i) {
      this.current = i + 1;
    },
  },
};
</script>

<style lang='scss' scoped>
@mixin around {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}
#main {
  width: 100%;
  height: 100%;
  // 头部
  header {
    width: 100%;
    height: 5.5rem;
    position: relative;
    //轮播图
    .my-swipe .van-swipe-item {
      height: 4rem;
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
    }
    //主页导航
    .main-nav {
      width: 100%;
      height: 2rem;
      position: absolute;
      bottom: 0rem;
      padding: 0rem 0.2rem;
      ul {
        @include around;
        li {
          width: 2rem;
          height: 2rem;
          background: white;
          padding: 0.2rem;
          @include around;
          flex-direction: column;
          border-radius: 0.2rem;
          img {
            width: 0.5rem;
            height: 0.5rem;
          }
        }
      }
    }
  }
  //讲师列表
  .list {
    padding: 0.2rem;
    .item {
      width: 100%;
      ul {
        @include around;
        li {
          width: 100%;
          margin: 0.15rem 0rem;
          padding: 0.4rem 0.2rem;
          border-radius: 0.2rem;
          background: white;
          display: flex;
          justify-content: space-between;
          img {
            width: 0.9rem;
            height: 0.9rem;
            border-radius: 50%;
            border: 1px solid orange;
            overflow: hidden;
          }
          .info {
            width: calc(100% - 1.2rem);
            h3 {
              line-height: 0.7rem;
            }
          }
        }
      }
    }
  }
  //热门资讯
  .hot {
    width: 100%;
    padding: 0.2rem;
    .hot-list {
      width: 100%;
      height: 3.5rem;
      margin-bottom: 0.2rem;
      .van-swipe {
        width: 100%;
        height: 100%;
        .custom-indicator {
          position: absolute;
          right: 5px;
          bottom: 5px;
          padding: 2px 5px;
          font-size: 12px;
          color: white;
          background: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
}
</style>