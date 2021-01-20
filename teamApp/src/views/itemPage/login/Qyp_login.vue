<template>
  <div class="wrapper">
    <div class="logo">
      <img src="../../../../public/icon/logo.png" alt="" />
    </div>
    <div class="from">
      <van-form>
        <van-field
          v-model="mobile"
          name="用户名"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="others">
          <p>找回密码</p>
          <p @click="toRegister">注册/验证码登录</p>
        </div>
        <div style="margin: 16px">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            color="linear-gradient(to right, #FF944B, #FC5500)"
            @click="login"
            >登录</van-button
          >
        </div>
      </van-form>
    </div>
    <thirds class="thirds"></thirds>
  </div>
</template>
<script>
import thirds from "@/components/Qyp_login_third party";
import { getLogin } from "@/utils/api";
import { Toast } from "vant";
export default {
  components: {
    thirds,
  },
  data() {
    return {
      mobile: "",
      password: "",
    };
  },
  mounted() {},
  methods: {
    // 登录
    login() {
      // let val = {
      //   mobile: this.mobile,
      //   password: this.password,
      //   type: 1
      // }
      getLogin({
        mobile: this.mobile,
        password: this.password,
        type:1
        }).then((res) => {
          console.log(res);
        Toast('登陆成功');
        // if (res.data.code == 200) {
          localStorage.setItem("token", res.data.remember_token);
          this.$router.push("/");
        // } else {
          // Toast.fail(res.data.msg);
        // }
      });
    },
    toRegister() {
      this.$router.push("/Qyp_register");
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: relative;
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