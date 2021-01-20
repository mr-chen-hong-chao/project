<template>
  <div id="popup">
    <van-popup v-model="popShow" :style="{ width: '100%', height: '100%' }">
      <header>
        <span>给我们留言</span>
        <span @click="hide"><van-icon name="arrow-down" /></span>
      </header>
      <section>
        <div class="alt">
          <span
            >您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问题</span
          >
        </div>
        <form id="leaving" action="">
          <p class="label"><label for="tel">电话</label></p>
          <input id="tel" type="tel" placeholder="请输入" />
          <p class="label"><label for="tel">留言内容</label></p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <div class="submit">
              <van-button type="info" size="large">提交</van-button>
          </div>
        </form>
      </section>
    </van-popup>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  props: ["popShow"],
  computed: {},
  created() {},
  methods: {
    ...mapMutations(['tabEmailState']),
      hide(){
      this.tabEmailState()
          
      }
  },
};
</script>

<style lang='scss' scoped>
@mixin between {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}
#popup {
  width: 100%;
  height: 100%;

  .van-popup {
    background: rgb(236, 236, 236);
    header {
      height: 1.3rem;
      padding: 0.3rem;
      background: #007aff;
      @include between;
      color: white;
      span:nth-child(2){
          width: 0.5rem;
          text-align: center;
      }
    }
    section {
      .alt {
        padding: 0.3rem;
      }
      span {
        line-height: 0.3rem;
      }
      #leaving {
        .label {
          text-indent: 0.3rem;
          padding: 0.2rem 0rem;
        }
        input{
            width: 100%;
            font-size: 0.3rem;
            text-indent: 0.3rem;
            line-height: 0.8rem;
            border: none;
            outline: none;
        }
        textarea{
            width: 100%;
            height: 2rem;
        }
        .submit{
            box-sizing: border-box;
            padding: 0.3rem;
            .van-button{
                height: 0.8rem;
            }
        }
      }
    }
  }
}
</style>