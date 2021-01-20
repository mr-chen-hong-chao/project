<template>
  <div class="Zpy_detail">
    <div class="Zpy_head">
      <van-icon name="arrow-left" @click="goUp" />
      <p>课程详情</p>
      <van-icon name="cluster-o" @click="Zpy_share" />
    </div>
    <div class="Zpy_body">
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img :src="DetailList.cover_img" /></van-swipe-item>
        <van-swipe-item><img :src="DetailList.cover_img" /></van-swipe-item>
        <van-swipe-item><img :src="DetailList.cover_img" /></van-swipe-item>
        <van-swipe-item><img :src="DetailList.cover_img" /></van-swipe-item>
      </van-swipe>
      <div class="Zpy_title">
        <p class="title">{{ DetailList.title }}</p>
        <p class="Zpy_free">免费</p>
        <p class="Zpy_grey">
          共{{ DetailList.total_periods }}课时&emsp;|&emsp;{{
            DetailList.sales_num
          }}人已报名
        </p>
        <p class="Zpy_grey">
          开课时间：{{ DetailList.start_play_date | filterTime }}&emsp;{{
            DetailList.end_play_date | filterTime
          }}&emsp;
        </p>
      </div>
      <!-- 优惠券 -->
      <div class="Zpy_quan">
        <!-- 优惠券单元格 -->
        <van-coupon-cell
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          @click="showList = true"
        />
        <!-- 优惠券列表 -->
        <van-popup
          v-model="showList"
          round
          position="bottom"
          style="height: 90%; padding-top: 4px"
        >
          <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
            @exchange="onExchange"
          />
        </van-popup>
      </div>
      <div class="Zpy_teach">
        <p class="Zpy_team">教学团队</p>
        <img :src="DetailList.cover_img" alt="" />
        <p class="Zpy_name" v-if="DetailList.teachers_list">
          {{ DetailList.teachers_list[0].teacher_name }}
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

      <div class="Zpy_comment">
        <p>课程评论</p>
        <ul>
          <li v-for="(item, index) in Zpy_commentList" :key="index">
            <img :src="item.img" alt="" />
            <div>
              {{ item.name }}
              <span>{{ item.time }}</span>
              <p>{{ item.content }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="Zpy_button" @click="Zpy_study">{{BottomBtn}}</div>
    <!-- 分享弹框 -->
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
    />
  </div>
</template>
<script>
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元",
};
import { getLesson } from "@/utils/api";
export default {
  data() {
    return {
      Zpy_detailList: [],
      DetailList: [],
      detail: "",
      Zpy_outline: [],
      teacherName: "",
      Zpy_commentList: [], //评论
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
          { name: "小程序码", icon: "weapp-qrcode" },
        ],
      ],
      // 优惠券
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false,
      isBuy:false,
      BottomBtn:''

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
    getLesson().then((res) => {
      this.Zpy_detailList = res.list.forEach((item) => {
        if (item.id == this.$route.params.id) {
          this.DetailList = item;
        }
      })
    })
  this.isBuy = this.$route.params.buy
    this.$axios.get("/Zpy_outline.json").then((res) => {
      // console.log(res);
      this.Zpy_outline = res.data.data;
    })

    this.$axios.get("/Zpy_commentList.json").then((res) => {
      // console.log(res);
      this.Zpy_commentList = res.data.data;
    });
  },
  methods: {
    goUp() {
      this.$router.push("/lesson"); //返回上一页
    },
    Zpy_share() {
      this.showShare = true; //点击分享
    },
    Zpy_study() {
      
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
  },
  watch:{
isBuy(){
       switch(this.isBuy){
         case 0 : this.BottomBtn ='立即报名'
         break
         case 1 : this.BottomBtn ='立即学习'
         break
       }
    
  }
  }
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
  overflow-y: scroll;
  height: 92.4vh;
  .my-swipe {
    width: 100%;
    height: 4.5rem;
    text-align: center;
    background-color: white;
    img {
      width: 65%;
      height: 98%;
    }
  }
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
    margin-top: 0.3rem;
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
    .Zpy_name {
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
  .Zpy_comment {
    width: 100%;
    height: 11rem;
    padding-left: 0.3rem;
    padding-top: 0.3rem;
    background-color: white;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        width: 100%;
        height: 1.1rem;
        display: inline-flex;
        margin-top: 0.3rem;
        img {
          width: 15%;
          height: 100%;
        }
        div {
          width: 80%;
          height: 100%;
          padding-left: 0.4rem;
          p {
            margin-top: 0.2rem;
          }
        }
      }
    }
  }
}
.Zpy_button {
  width: 100%;
  height: 7vh;
  line-height: 7vh;
  background-color: #eb6100;
  color: white;
  text-align: center;
  z-index: 999;
  position: fixed;
  bottom: 0;
  left: 0;
}
.Zpy_friend {
  width: 100%;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 33.3%;
      text-align: center;
      margin-top: 0.4rem;
      color: grey;
      img {
        width: 0.7rem;
        height: 0.7rem;
      }
      p {
        margin-top: 0.2rem;
      }
    }
  }
}
.Zpy_cancel {
  width: 100%;
  height: 0.6rem;
  border: 1px solid grey;
  margin-top: 0.2rem;
  border: none;
}
</style>
