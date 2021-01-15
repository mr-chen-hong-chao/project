<template>
  <div id='Qyp_my'>
    <div class="Qyp_top-box">
      <img src="../../../public/user_bg.ab306a5c.png" alt="">
      <div class="Qyp_tab">
        <div class="Qyp_tab_top">
          <div>
            <img src="../../../public/皇冠-2 拷贝@2x.ca9087bc.png" alt="">
          </div>
          <div>
            15660030263
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
          <van-icon name="arrow" size="0.5rem" color="white" class="right_icon" />
        </span>
      </div>

      <div class="Qyp_footer">
        <div class="lesson">
          <p style="font-size: 0.35rem">课程相关</p>
          <van-grid :border="false">
            <van-grid-item icon="/01.png" text="关注的老师" />
            <van-grid-item icon="/02.png" text="我的收藏" />
          </van-grid>
        </div>
        <div class="order">
          <p style="font-size: 0.35rem">订单相关</p>
          <van-grid :border="false">
            <van-grid-item icon="/03.png" text="课程订单" />
            <van-grid-item icon="/03.png" text="会员订单" />
            <van-grid-item icon="/03.png" text="约课订单" />
          </van-grid>
        </div>
        <div class="account">
          <p style="font-size: 0.35rem">我的账户</p>
          <van-grid :border="false">
            <van-grid-item icon="/04.png" text="优惠券" />
            <van-grid-item icon="/05.png" text="学习卡" />
            <van-grid-item icon="/06.png" text="会员" />
          </van-grid>
        </div>
        <div class="server">
          <p style="font-size: 0.35rem">自助服务</p>
          <van-grid :border="false">
            <van-grid-item icon="/07.png" text="我的消息" />
            <van-grid-item icon="/08.png" text="意见反馈" />
            <van-grid-item icon="/09.png" text="在线客服" />
            <van-grid-item icon="/10.png" text="设置" />
          </van-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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

    },
    created() {

    },
    methods: {

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


    .Qyp_top-box {
      width: 100%;
      position: relative;


      img {
        width: 100%;
        height: 100%;
      }

      .Qyp_tab {
        width: 90%;
        height: 46vw;
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
            // display: block;
            width: 1.18rem;
            height: 1.18rem;
            // background-color: rgb(145, 246, 250);
            margin: 4vw 4vw 4vw 4vw;
            border-radius: 50rem;
            position: relative;
            border: 0.02rem solid rgb(218, 218, 218);

            img {
              position: absolute;
              width: 0.5rem;
              height: 0.5rem;
              left: 0.6rem;
              top: -0.5rem;
              border: none;
            }
          }

          :nth-child(2) {
            display: block;
            width: 3.24rem;
            height: 40%;
            background-color: rgb(154, 250, 145);
            margin: 7vw 0 4vw;
            font-size: 0.35rem;
            line-height: 0.7rem;



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
            border-left: 0.03rem solid #ecebeb;

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
        top: 20rem;
        position: absolute;
        top: 4.8rem;
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
        margin-top: 3.7rem;

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







    }

  }
</style>