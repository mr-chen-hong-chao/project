<template>
  <div class="wrapper">
    <div class="logo">
      <img src="../../../../public/icon/logo.png" alt="" />
    </div>
    <div class="from">
      <van-form>
        <van-field v-model="mobile" type="text" name="用户名" placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写手机号' }]">
          <template #button>
            <van-button size="small" type="primary" @click="getcode">获取验证码</van-button>
          </template>
        </van-field>
        <van-field v-model="code" type="text" name="验证码" placeholder="请输入短信验证码"
          :rules="[{ required: true, message: '请填写密码' }]" />
        <div class="others">
          <p>*未经注册的手机号将自动注册</p>
          <p @click="toLogin">使用密码登录</p>
        </div>
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit" color="linear-gradient(to right, #FF944B, #FC5500)">
            登录</van-button>
        </div>
      </van-form>
    </div>
    <thirds class="thirds"></thirds>

  </div>
</template>
<script>
  import thirds from '@/components/Qyp_login_third party'
  import {
    getSmsCode
  } from '@/utils/api/index.js';
  import {
    Toast
  } from 'vant'
  export default {
    components: {
      thirds
    },
    data() {
      return {
        mobile: '',
        code: '',
      }
    },
    mounted() {},
    methods: {
      toLogin() {
        this.$router.push('/login')
      },
      //获取验证码

      getcode() {
        if (this.mobile != '') {
          let params = {
            mobile: this.mobile,
            sms_type: 'login'
          }

          getSmsCode(params).then((res) => {
            console.log(res);
            if (res.code == 200) {
              Toast.success(res.msg);
            } else {
              Toast.fail(res.msg);
            }
          }).catch((err) => {
            Toast.fail(err.msg);
          });

        } else {
          Toast('手机号不能为空');
        }

      




      }

    }
  }
</script>
<style lang="scss" scoped>
  .wrapper {
    width: 100vw;
    height: 100vh;
    background-color: white;
  }

  .logo {
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 70%;
      height: 35%;
    }
  }

  .from {
    width: 90vw;
    margin: 0 auto;

    .others {
      width: 100%;
      height: 5vh;
      padding: 0 3vw;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        color: gray;
      }

      margin-bottom: 5vh;
    }
  }

  .thirds {
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    // background-color: #fff;
  }
</style>