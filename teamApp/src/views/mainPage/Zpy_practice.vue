<template>
  <div class="Zpy_practice">
    <app-banner></app-banner>
    <div class="Zpy_studyList">
      <ul>
        <li @click="Zpy_testContent">
          <img src="../../../public/icon/test1.png" />
          <p>考点专练</p>
        </li>
        <li>
          <img src="../../../public/icon/test2.png" />
          <p>套卷练习</p>
        </li>
        <li>
          <img src="../../../public/icon/test3.png" />
          <p>仿真练习</p>
        </li>
        <li>
          <img src="../../../public/icon/test4.png" />
          <p>错题练习</p>
        </li>
        <li>
          <img src="../../../public/icon/test5.png" />
          <p>测评记录</p>
        </li>
        <li>
          <img src="../../../public/icon/test6.png" />
          <p>习题收藏</p>
        </li>
      </ul>
    </div>
    <div class="Zpy_test">
      <div class="Zpy_testing">
        <p class="Zpy_late">近期考点</p>
        <p class="Zpy_sort">
          <span class="Zpy_default">默认排序</span>
          <span class="Zpy_time">时间</span>
        </p>
      </div>
      <div class="Zpy_content">
        <p class="Zpy_wait">暂无模考安排，敬请期待</p>
      </div>
    </div>
  </div>
</template>
<script>
import AppBanner from '@/components/Chc_app_banner'
import {getPublic} from '@/utils/api'

export default {
  data() {
    return {};
  },
  created(){
    //测试接口
    getPublic().then(res=>{
      // console.log(res)
    })
  },
  components:{
    AppBanner,
  },
  methods: {
      Zpy_testContent(){
          this.$router.push({path:'/testContent'})
      }
  },
};
</script>

<style lang="scss" scoped>
@mixin between{
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  align-items: center;
}
.Zpy_head {
  width: 100%;
  height: 7vh;
  text-align: center;
  line-height: 7vh;
  font-size: 0.4rem;
  color: grey;
  background-color: white;
}
.Zpy_studyList {
  height: 3.6rem;
  background-color: white;
  padding: 0.2rem;
  margin: 0.3rem;
  border-radius: 0.2rem;
  ul {
    width: 100%;
    height: 100%;
    @include between;
    li {
      width: 22%;
      height: 45%;
      margin:0rem 0.09rem;
      text-align: center;
      box-shadow: 0rem 0.07rem 0.1rem 0.01rem rgb(214, 214, 214) ;
      img {
        width: 0.5rem;
        height: 0.5rem;
        margin: 0.2rem;
        box-shadow: grey;
      }
      p {
        margin-top: 0.1rem;
      }
    }
  }
}
.Zpy_test {
  width: 100%;
  background-color: white;
  .Zpy_testing {
    width: 100%;
    height: 1.5rem;
    background-color: white;
    .Zpy_late {
      height: 0.8rem;
      line-height: 0.8rem;
      color: grey;
      font-size: 0.4rem;
      padding-left: 0.2rem;
    }
    .Zpy_sort {
      color: #eb6100;
      font-size: 0.3rem;
      display: inline-flex;
      width: 100%;
      height: 0.6rem;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      span {
        width: 50%;
      }
      .Zpy_default {
        text-align: left;
      }
      .Zpy_time {
        text-align: right;
      }
    }
  }
  .Zpy_content {
    width: 100%;
    min-height: 6rem;
    position: relative;
    background: url(../../../public/icon/no-message.png) no-repeat;
    background-size: 100% 90%;
    .Zpy_wait {
      width: 100%;
      line-height: 1rem;
      font-size: 0.3rem;
      text-align: center;
      color: orangered;
      background: white;
position: absolute;
bottom: -0.5rem;
    }
  }
}
</style>