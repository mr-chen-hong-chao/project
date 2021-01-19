<template>
  <div id="email" v-drag>
    <van-icon name="envelop-o" color="white" size="0.5rem" @click="tab" />
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  props: [],
  computed: {},
  created() {},
  methods: {
    tab() {
      this.$emit("tab");
    },
  },
  directives: {
    drag: {
      bind: function (el, binding, val) {
        var maxW = document.documentElement.clientWidth;
        var maxH = document.documentElement.clientHeight;
        var startX = 0;
        var startY = 0;
        el.addEventListener("touchstart", function (e) {
          startX = e.targetTouches[0].pageX - this.offsetLeft;
          startY = e.targetTouches[0].pageY - this.offsetTop;
        });
        el.addEventListener("touchmove", function (e) {
          var leftX = e.targetTouches[0].pageX - startX;
          var topY = e.targetTouches[0].pageY - startY;
          var thisW = e.targetTouches[0].target.clientWidth;
          var thisH = e.targetTouches[0].target.clientHeight;
          if (leftX <= 0) {
            leftX = 0;
          }
          if (leftX >= maxW - thisW) {
            leftX = maxW - thisW;
          }
          if (topY <= 0) {
            topY = 0;
          }
          if (topY >= maxH - thisH) {
            topY = maxH - thisH;
          }
          this.style.left = leftX + "px";
          this.style.top = topY + "px";
        });
        el.addEventListener("touchend", function (e) {});
      },
    },
  },
};
</script>

<style lang='scss' scoped>
@mixin around {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}
#email {
  width: 1rem;
  height: 1rem;
  background: rgb(67, 140, 236);
  border-radius: 50%;
  @include around;
  z-index: 999;
  box-shadow: 0rem 0rem 0.1rem 0.05rem rgb(148, 148, 148);
  position: fixed;
  right: 0.3rem;
  bottom: 1.5rem;
}
</style>