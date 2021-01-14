<template>
  <!-- 辅导页面 -->
  <div id="tutoring">
    <header>
      <app-banner :banner="'一对一辅导'"></app-banner>
    </header>
    <!-- 内容区块 -->
    <section>
      <div class="choose">
        <div v-for="(item,i) in select" :key="i"
        :style='defaultIndex==i?"color:red":"color"'
        @click="changeSelect(i)">
          {{item.title}}
          <van-icon :name="item.icon" />
        </div>
      </div>
      <div class="teacher-list">
          <ul>
            <li v-for="(item,i) in teacher" :key="i">
              <img :src="item.img" alt="">
              <div class="info">
                <h3>{{item.name}}</h3>
              <p class="text-overflow-ell">
                <span>{{item.sex}}</span>
                <span>{{item.age}}</span>
              </p>
              </div>
            </li>
          </ul>
        </div>
    </section>
  </div>
</template>

<script>
import AppBanner from "@/components/Chc_app_banner.vue";
export default {
  name: "",
  data() {
    return {
      select: [
        {
          title:'选择上课时间',
          icon:'arrow-down',
        },
        {
          title:'选择老师条件',
          icon:'arrow-down'
        }
      ],
      defaultIndex:null,
      teacher:[
        {
          img:'./img/swiper1.jpg',
          name:'杨德胜',
          sex:'男',
          age:'30年教龄'
        },
        {
          img:'./img/swiper1.jpg',
          name:'杨德胜',
          info:'asdsadsadasdasasddosfjhasdlkfhowehjfioeasdasdsadsads',
        },
        {
          img:'./img/swiper1.jpg',
          name:'杨德胜',
          info:'asdsadsadasdasasddosfjhasdlkfhowehjfioeasdasdsadsads',
        },
        {
          img:'./img/swiper1.jpg',
          name:'杨德胜',
          info:'asdsadsadasdasasddosfjhasdlkfhowehjfioeasdasdsadsads',
        },
        {
          img:'./img/swiper1.jpg',
          name:'杨德胜',
          info:'asdsadsadasdasasddosfjhasdlkfhowehjfioeasdasdsadsads',
        },
        {
          img:'./img/swiper1.jpg',
          name:'杨德胜',
          info:'asdsadsadasdasasddosfjhasdlkfhowehjfioeasdasdsadsads',
        },
      ]
    };
  },
  components: {
    AppBanner,
  },
  props: [],
  computed: {},
  created() {},
  methods: {
    changeSelect(i){
      if(this.defaultIndex===i){
        this.defaultIndex=null
      }else{
        this.defaultIndex=i
      }
    }
  },
};
</script>

<style lang='scss' scoped>
@mixin around{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}
#tutoring {
  width: 100%;
  height: 100%;
  
  background: rgb(236, 236, 236);
  header {
    background: white;
    
  }
  section{
    width: 100%;
    // height: calc(100% - 1rem);
    height: 100%;
    overflow: auto;
    .choose {
      width: 100%;
      height: 0.8rem;
      display: flex;
      text-align: center;
      align-items: center;
      background: white;
      div {
        width: 50%;
      }
    }
    .teacher-list{
      width: 100%;
      height: 100%;
      padding: 0.2rem;
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
            span{
              margin:0.02rem 0.1rem;
            }
          }
        }
      }
    }
  }
}
</style>