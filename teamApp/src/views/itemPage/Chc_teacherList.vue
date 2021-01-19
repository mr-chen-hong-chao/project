<template>
  <div id="teacher-list">
    <app-banner></app-banner>
    <div class="main">
      <div class="nav">
        <van-tabs @click="tabType" title-active-color="orange">
          <van-tab v-for="(item, i) in nav" :key="i" :title="item"> </van-tab>
        </van-tabs>
        <span @click="filter"><van-icon name="filter-o" />筛选</span>
      </div>
      <!-- 模态框 -->
      <van-popup v-model="popShow" position="top">
        <van-dropdown-menu active-color="orange">
          <van-dropdown-item title="分类" ref="item">
            <van-cell center class="type">
              <template #right-icon>
                <ul>
                  <li v-for="(item, i) in type" :key="i">
                    <span
                      @click="choose(1, item)"
                      :style="typeData.type1 == item[0] ? 'color:orange' : ''"
                      >{{ item[0] }}</span
                    >
                    <span
                      @click="choose(2, item)"
                      :style="typeData.type2 == item[1] ? 'color:orange' : ''"
                      >{{ item[1] }}</span
                    >
                  </li>
                </ul>
              </template>
            </van-cell>
          </van-dropdown-item>
          <van-dropdown-item title="筛选" ref="item">
            <van-cell center title="团购">
              <template #right-icon> </template>
            </van-cell>
            <div style="padding: 5px 16px">
              <van-button type="danger" block round @click="onConfirm">
                确认
              </van-button>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </van-popup>
      <div class="content" @scroll="contentScroll">
        <ul>
          <li
            v-for="(item, i) in list"
            :key="i"
            class="box-shadow-bottom"
            @click="getTeacherDetail(item.id)"
          >
            <img :src="item.avatar" alt="" />
            <div class="info">
              <h3>{{ item.real_name }}</h3>
              <p class="text-overflow-ell">{{ item.introduction }}</p>
            </div>
          </li>
        </ul>
        <p class="bottom-info" v-show="bottomInfo">没有更多信息了</p>
      </div>
    </div>
  </div>
</template>

<script>
import AppBanner from "@/components/Chc_app_banner";
import { getAllTeacher } from "@/utils/api";
export default {
  name: "",
  data() {
    return {
      nav: ["全部", "英语", "语文", "数学", "政治", "地理", "历史", "物理"],
      popShow: false, //模态框状态
      value1: 0,
      value2: "a",
      type: [
        ["全部", "全部"],
        ["高一", "物理"],
        ["高二", "化学"],
        ["高三", "生物"],
        ["初一", "历史"],
        ["初二", "数学"],
      ],
      typeData: {
        type1: "",
        type2: "",
      },
      page: 1,
      limit: 10,
      list: [],
      bottomInfo:false
    };
  },
  components: {
    AppBanner,
  },
  props: [],
  computed: {},
  created() {
    let val = {
      page: this.page,
      limit: this.limit,
    };
    this.getList(val);
  },
  methods: {
    // 切换分类
    tabType(i) {
      console.log(i);
    },
    //筛选
    filter() {
      this.popShow = true;
    },
    //确认条件
    onConfirm() {},
    //选择条件
    choose(i, item) {
      switch (i) {
        case 1:
          this.typeData.type1 = item[0];
          break;
        case 2:
          this.typeData.type2 = item[1];
          break;
      }
      if (this.typeData.type1 != "" && this.typeData.type2 != "") {
        this.popShow = false;
        this.typeData.type1 = "";
        this.typeData.type2 = "";
      } else {
        this.popShow = true;
      }
    },
    //跳转到详情
    getTeacherDetail(id) {
      this.$router.push({
        path:'/teacher-detail',
        query:{
          id:id
        }
      })
    },
    //内容滚动加载更多
    contentScroll(e) {
      // console.log(e.target.scrollTop)
      if (e.target.scrollTop > 400 &&this.page <= 2) {
        let val = {
          page: this.page+=1,
          limit: this.limit,
        };
        this.getList(val);
      }else if(e.target.scrollTop > 700){
        this.bottomInfo=true
      }else{
        this.bottomInfo=false
      }
      console.log(this.bottomInfo)
    },
    //获取列表信息
    getList(val) {
      getAllTeacher(val).then((res) => {
          if(this.list.length ==0){
            this.list = res
          }else{
           res.forEach((item,i)=>{
             this.list.push(item)
           })
          }
          
        console.log(this.list);
      });
    },
  },
};
</script>

<style lang='scss' scoped>
@mixin between {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
@mixin around {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}

#teacher-list {
  width: 100%;
  height: 100%;
  .nav {
    width: 100%;
    @include between;
    span {
      width: 15%;
      text-align: center;
    }
    .van-tabs {
      width: 85%;
    }
  }

  .main {
    width: 100%;
    border: 1px solid red;
    height: calc(100% - 1rem);
    position: relative;
    /deep/.van-overlay {
      position: absolute;
      background: rgba(129, 129, 129, 0.3);
    }
    .van-popup {
      position: absolute;
      .van-dropdown-menu {
        .type {
          ul {
            width: 100%;
            li {
              width: 100%;
              height: 0.6rem;
              @include between;
              font-size: 0.4rem;
              text-align: center;
              color: rgb(156, 156, 156);
              span {
                width: 50%;
                font-size: 0.3rem;
              }
            }
          }
        }
      }
    }
    .content {
      width: 100%;
      height: calc(100% - 1rem);
      overflow: auto;
      padding: 0.2rem;
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
      .bottom-info{
        line-height: 1rem;
        text-align: center;
        color: silver;
      }
    }
  }
}
</style>