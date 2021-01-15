<template>
  <div id='main'>
    <!-- 头部 -->
      <header>
        <!-- 轮播 -->
        <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
          <van-swipe-item v-for="(item,i) in swiper" :key="i">
            <img :src="item" alt="">
          </van-swipe-item>
        </van-swipe>
        <!-- 导航 -->
        <div class="main-nav">
          <ul>
            <li v-for="(item,i) in nav" :key="i" @click="getPath(item.path)">
                <img :src="item.icon" alt="">
              <span>{{item.title}}</span>
            </li>
          </ul>
        </div>
      </header>
      <!-- 内容区块 -->
      <section>
        <banner :banner="'名师阵容'"></banner>
        <div class="teacher list">
          <ul>
            <li v-for="(item,i) in teacher" :key="i" @click="$router.push('/detail')">
              <img :src="item.img" alt="">
              <div class="info">
                <h3>{{item.name}}</h3>
              <p class="text-overflow-ell">{{item.detail}}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
 </div>
</template>

<script>
import Banner from '@/components/Item_banner'
export default {
  name: '',
  data() { 
    return {
      swiper:[
        './img/swiper1.jpg',
        './img/swiper2.jpg',
        './img/swiper3.jpg',
        './img/swiper4.jpg',
      ],
      nav:[
        {
          title:'特色课',
          icon:'/icon/kind1.png',
          path:'/lesson'
        },
        {
          title:'一对一辅导',
          icon:'/icon/kind2.png',
          path:'/tutoring'
        },
        {
          title:'学习日历',
          icon:'/icon/kind3.png',
          path:'/calendar'
        }
      ],
      teacher:[
        {
          img:'./img/swiper1.jpg',
          name:'杨德胜',
          detail:'asdsadsadasdasasddosfjhasdlkfhowehjfioeasdasdsadsads',
        },
        {
          img:'./img/swiper1.jpg',
          name:'杨德胜',
          detail:'asdsadsadasdasasddosfjhasdlkfhowehjfioeasdasdsadsads',
        },
        {
          img:'./img/swiper1.jpg',
          name:'杨德胜',
          detail:'asdsadsadasdasasddosfjhasdlkfhowehjfioeasdasdsadsads',
        },
        {
          img:'./img/swiper1.jpg',
          name:'杨德胜',
          detail:'asdsadsadasdasasddosfjhasdlkfhowehjfioeasdasdsadsads',
        },
        {
          img:'./img/swiper1.jpg',
          name:'杨德胜',
          detail:'asdsadsadasdasasddosfjhasdlkfhowehjfioeasdasdsadsads',
        },
        {
          img:'./img/swiper1.jpg',
          name:'杨德胜',
          detail:'asdsadsadasdasasddosfjhasdlkfhowehjfioeasdasdsadsads',
        },
      ]
    }
  },
  components:{
    Banner,

  },
props:[],
  computed:{

  },
  created() {

  },
  methods:{
    getPath(path){
      this.$router.push(path)
    }
  },
 }
</script>

<style lang='scss' scoped>
@mixin around{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}
#main{
  width: 100%;
  height: 100%;
  // 头部
  header{
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
    .main-nav{
      width: 100%;
      height: 2rem;
      position: absolute;
      bottom: 0rem;
      padding: 0rem 0.2rem;
      ul{
        @include around;
        li{
          width: 2rem;
          height: 2rem;
          background: white;
          padding: 0.2rem;
          @include around;
          flex-direction: column;
          border-radius: 0.2rem;
          img{
            width: 0.5rem;
            height: 0.5rem;
          }
        }
      }
    }
  }
  //内容区块
  section{
    padding: 0.2rem;
    .list{
      width: 100%;
      ul{
        @include around;
        li{
          width: 100%;
          margin: 0.15rem 0rem;
          padding:0.4rem 0.2rem;
          border-radius: 0.2rem;
          background: white;
          display: flex;
          justify-content: space-between;
          img{
            width: 0.9rem;
            height: 0.9rem;
            border-radius: 50%;
            overflow: hidden;
          }
          .info{
            width: calc(100% - 1.2rem);
            h3{
              line-height: 0.7rem;
            }
          }
        }
      }
    }

  }
}
</style>