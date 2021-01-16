<template>
  <div class="Zpy_practice">
    <div class="Zpy_head">练习</div>
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
export default {
  data() {
    return {};
  },
  methods: {
      Zpy_testContent(){
          this.$router.push({path:'/testContent'})
      }
  },
};
</script>
<style lang="scss" scoped>
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
  width: 95%;
  height: 4.5rem;
  // background-color: hotpink;
  background-color: white;
  padding: 0.4rem 0.3rem;
  margin: 0.3rem 0.2rem;
  border-radius: 0.2rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    li {
      width: 25%;
      height: 1.8rem;
      border: 1px solid #f1f1f1;
      text-align: center;
      img {
        border-radius: 50%;
        width: 48.9%;
        height: 0.8rem;
        margin-top: 0.3rem;
        box-shadow: grey;
        border: 1px solid #f1f1f1;
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
    height: 32vh;
    position: relative;
    background: url(../../../public/icon/no-message.png) no-repeat;
    background-size: 100% 90%;
    .Zpy_wait {
      font-size: 0.3rem;
      text-align: center;
      color: orangered;
position: absolute;
bottom: 0;
left: 25%;
    }
  }
}
</style>