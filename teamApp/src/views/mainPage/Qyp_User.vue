<template>
  <div id="Qyp_my">
    <div class="Qyp_top-box">
      <img src="/icon/user_bg.ab306a5c.png" alt="" />
      <div class="Qyp_tab">
        <div class="Qyp_tab_top">
          <div >
            <span v-if="user.token"><img :src="user.userImg" alt="" /></span>
            <span v-else><img src="../../../public/icon/to.jpg" alt="" /></span>
            <img src="../../../public/icon/huangguan.png" class="img" alt="" />
          </div>
          <div v-if="!user" @click="gotoLogin">立即登录</div>
          <div v-else>
            <span>{{ user.userName }}</span>
            <span>
              <van-icon name="edit" size="0.5rem" @click="Qyp_msg_edit" />
            </span>
          </div>
        </div>
        <div class="Qyp_tab_bottom">
          <div>
            <p>0</p>
            <p>我的特色课</p>
            <p>已购特色课程学习</p>
          </div>
          <div>
            <p>0</p>
            <p>一对一辅导</p>
            <p>我的一对一辅导</p>
          </div>
          <div>
            <p>0.00</p>
            <p>剩余学习币</p>
            <p>查看剩余学习币</p>
          </div>
        </div>
      </div>
      <div class="Qyp_contten">
        <span>
          <van-icon name="gem" color="white" class="left_icon" size="0.5rem" />
        </span>
        <p>
          <span>邀请好友注册App,享多重好礼</span>
          <span>限时特惠，多要多得</span>
        </p>
        <span>
          <van-icon
            name="arrow"
            size="0.5rem"
            color="white"
            class="right_icon"
          />
        </span>
      </div>

      <div class="Qyp_footer">
        <div class="lesson">
          <p style="font-size: 0.35rem">课程相关</p>
          <van-grid :border="false">
            <van-grid-item
              icon="./icon/01.png"
              text="关注的老师"
              @click="Qyp_teacher"
            />
            <van-grid-item
              icon="./icon/02.png"
              text="我的收藏"
              @click="Qyp_collect"
            />
          </van-grid>
        </div>
        <div class="order">
          <p style="font-size: 0.35rem">订单相关</p>
          <van-grid :border="false">
            <van-grid-item
              icon="./icon/03.png"
              text="课程订单"
              @click="Qyp_order_lesson"
            />
            <van-grid-item
              icon="./icon/03.png"
              text="会员订单"
              @click="Qyp_order_vip"
            />
            <van-grid-item
              icon="./icon/03.png"
              text="约课订单"
              @click="Qyp_order_Appointment"
            />
          </van-grid>
        </div>
        <div class="account">
          <p style="font-size: 0.35rem">我的账户</p>
          <van-grid :border="false">
            <van-grid-item
              icon="./icon/04.png"
              text="优惠券"
              @click="Qyp_youhui"
            />
            <van-grid-item
              icon="./icon/05.png"
              text="学习卡"
              @click="Qyp_style"
            />
            <van-grid-item icon="./icon/06.png" text="会员" @click="Qyp_vip" />
          </van-grid>
        </div>
        <div class="server">
          <p style="font-size: 0.35rem">自助服务</p>
          <van-grid :border="false">
            <van-grid-item
              icon="./icon/07.png"
              text="我的消息"
              @click="Qyp_msg"
            />
            <van-grid-item
              icon="./icon/08.png"
              text="意见反馈"
              @click="Qyp_opinion"
            />
            <van-grid-item
              icon="./icon/09.png"
              text="在线客服"
              @click="Qyp_server"
            />
            <van-grid-item icon="./icon/10.png" text="设置" @click="Qyp_set" />
          </van-grid>
        </div>
      </div>
      <footer v-show="user">
        <van-button round type="danger" @click="out">退出登录</van-button>
      </footer>
      
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import {getPublic} from '@/utils/api'
import { Toast } from "vant";

  export default {
    name: '',
    data() {
      return {

      }
    },
    components: {

    },
    props: [],
    computed: {
      ...mapState(['user'])
    },
    created(){
    
  },
    methods: {
      ...mapMutations(['getLoginInfo']),
      //点击头像登录
      gotoLogin() {
        if(this.user.token){
          Toast({
          message: "已登录，无需重复登录",
          icon: "fail",
          duration: 600,
          })
        }else{
          this.$router.push({
          path: '/login'
        })
        }
      },
      out(){
        this.getLoginInfo('')
        Toast.success('退出成功')
        localStorage.removeItem('token')
      },
      //点击关注的老师
      Qyp_teacher() {
        this.$router.push({
          path: '/Qyp_teacher'
        })
      },
      ////我的收藏
      Qyp_collect() {
        this.$router.push({
          path: '/Qyp_collect'
        })
      },
      //课程订单
      Qyp_order_lesson() {
        this.$router.push({
          path: '/Qyp_order_lesson'
        })
      },
      // 会员订单
      Qyp_order_vip() {
        this.$router.push({
          path: '/Qyp_order_vip'
        })
      },
      //约课订单
      Qyp_order_Appointment() {
        this.$router.push({
          path: '/Qyp_order_Appointment'
        })
      },
      //优惠卷
      Qyp_youhui() {
        this.$router.push({
          path: '/Qyp_youhui'
        })
      },
      //qyp学习卡
      Qyp_style() {
        this.$router.push({
          path: '/Qyp_style'
        })
      },
      //qyp会员
      Qyp_vip() {
        this.$router.push({
          path: '/Qyp_vip'
        })
      },

      //qyp我的消息
      Qyp_msg() {
        this.$router.push({
          path: '/Qyp_msg'
        })
      },
      //qyp意见反馈
      Qyp_opinion() {
        this.$router.push({
          path: '/Qyp_opinion'
        })
      },
      //qyp在线客服
      Qyp_server() {
        this.$router.push({
          path: '/Qyp_server'
        })
      },
      //qyp设置
      Qyp_set() {
        this.$router.push({
          path: '/Qyp_set'
        })
      },

      //信息编写
      Qyp_msg_edit(){
        this.$router.push({
          path:"/Qyp_msg_edit"
        })
      }




    },
  }
</script>

<style lang='scss' scoped>
#Qyp_my {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: scroll-y;
  // background-color: #fff;

  .Qyp_top-box {
    width: 100%;
    position: relative;
    background-color: #fff;

    img {
      width: 100%;
      height: 100%;
    }

    .Qyp_tab {
      width: 90%;
      height: 50vw;
      background-color: rgb(255, 255, 255);
      margin: 0 5%;
      position: absolute;
      top: 1rem;
      border-radius: 0.1rem;
      box-shadow: 0px 0px 5px #c8c8c8;
      display: flex;
      flex-flow: column; //横向排列

      .Qyp_tab_top {
        // background-color: rgb(235, 188, 188);
        flex: 1;
        display: flex;

        :nth-child(1) {
          span {
            // display: block;
            width: 1.18rem;
            height: 1.18rem;
            background-color: rgb(145, 246, 250);
            margin: 4vw 4vw 4vw 4vw;
            border-radius: 50rem;
            border: 0.02rem solid rgb(218, 218, 218);
            img {
              border-radius: 5rem;
              width: 100%;
              height: 100%;
            }
          }

          .img {
            position: absolute;
            width: 0.5rem;
            height: 0.5rem;
            left: 1.1rem;
            top: -0.45rem;
            border: none;
            // background-color: #fff;
          }
        }

        :nth-child(2) {
          display: flex;
          width: 3.24rem;
          height: 40%;
          // background-color: rgb(154, 250, 145);
          margin: 7vw 0 4vw;
          font-size: 0.35rem;
          line-height: 0.7rem;

          :nth-child(1) {
            display: block;
            flex: 0.7;
            margin-top: 0.1rem;
          }

          :nth-child(2) {
            display: block;
            flex: 0.3;
            margin-top: 0.1rem;
            text-align: center;
            color: salmon;
          }
        }
      }

      .Qyp_tab_bottom {
        // background-color: rgb(245, 245, 157);
        flex: 1;
        display: flex;
        text-align: center;

        :nth-child(1) {
          flex: 1;
          display: block;
          // background-color: rgb(145, 246, 250);
          margin: 2vw 2vw 2vw 2vw;
          // border-right: 0.03rem solid #dfdede;

          :nth-child(1) {
            color: red;
            font-size: 0.5rem;
          }

          :nth-child(2) {
            color: black;
            font-size: 0.25rem;
          }

          :nth-child(3) {
            color: #b7b7b7;
            font-size: 0.2rem;
          }
        }

        :nth-child(2) {
          flex: 1;
          // background-color: rgb(145, 246, 250);
          margin: 2vw 0vw 2vw 0vw;

          :nth-child(1) {
            color: red;
            font-size: 0.5rem;
          }

          :nth-child(2) {
            color: black;
            font-size: 0.25rem;
          }

          :nth-child(3) {
            color: #b7b7b7;
            font-size: 0.2rem;
          }
        }

        :nth-child(3) {
          flex: 1;
          // background-color: rgb(145, 246, 250);
          margin: 2vw 2vw 2vw 2vw;
          // border-left: 0.03rem solid #ecebeb;

          :nth-child(1) {
            color: red;
            font-size: 0.5rem;
          }

          :nth-child(2) {
            color: black;
            font-size: 0.25rem;
          }

          :nth-child(3) {
            color: #b7b7b7;
            font-size: 0.2rem;
          }
        }
      }
    }

    .Qyp_contten {
      // z-index: 999;
      width: 90%;
      margin: 0 5%;
      height: 1rem;
      background: linear-gradient(-90deg, #f2995a, #eb6100);
      top: 22rem;
      position: absolute;
      top: 5rem;
      border-radius: 2rem;
      // background-color: #fff;
      display: flex;
      flex-wrap: nowrap;

      :nth-child(1) {
        flex: 0.2;
        display: block;
        // font-size: 0.5rem;
        // background-color: rgb(246, 169, 192);

        .left_icon {
          width: 0.6rem;
          height: 0.6rem;
          margin-left: 0.3rem;
          margin-top: 0.2rem;
          line-height: 0.6rem;
          text-align: center;
        }
      }

      :nth-child(2) {
        flex: 0.6;
        display: flex;
        flex-flow: column;
        font-size: 0.2rem;
        // background-color: rgb(165, 248, 169);
        color: white;
        font-size: 0.25rem;

        :nth-child(1) {
          flex: 1;
          padding-top: 0.2rem;
        }

        :nth-child(2) {
          flex: 1;
        }
      }

      :nth-child(3) {
        // background-color: rgb(231, 248, 132);
        flex: 0.2;

        .right_icon {
          line-height: 1rem;
          text-align: center;
        }
      }
    }

    .Qyp_footer {
      width: 90%;
      margin: 0 5%;
      margin-top: 4rem;

      .lesson {
        margin-top: 0.3rem;
        border-bottom: 0.02rem solid #ccc;
      }

      .order {
        margin-top: 0.3rem;
        border-bottom: 0.02rem solid #ccc;
      }

      .account {
        margin-top: 0.3rem;
        border-bottom: 0.02rem solid #ccc;
      }

      .server {
        margin-top: 0.3rem;
        border-bottom: 0.02rem solid #ccc;
      }
    }
    footer{
      display: flex;
      justify-content: space-around;
      padding: 0.2rem 0rem;
      .van-button{
      width: 65%;
      height: 0.7rem;
    box-shadow: 0rem 0.05rem 0.1rem 0.01rem silver ;

    }
    }
  }
}
</style>