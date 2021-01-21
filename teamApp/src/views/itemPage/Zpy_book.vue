<template>
  <div class="Zpy_warpper">
    <div class="Zpy_book">
      <img :src="Zpy_book.cover_img" alt="" />
      <div class="Zpy_content">
        <p class="Zpy_name">{{ Zpy_book.name }}</p>
        <p class="Zpy_author">作者：{{ Zpy_book.author }}</p>
        <p>库存：{{ Zpy_book.stock }}</p>
        <p class="Zpy_free">
          <span class="Zpy_red">免费</span>
          <span class="Zpy_money">运费：免运费</span>
        </p>
      </div>
    </div>
    <van-sticky>
      <p class="Zpy_bookTitle">
        <span>图书信息</span>
        <span>图书评价</span>
      </p>
    </van-sticky>
    <div class="Zpy_bookInfo">
      <p>图书详情</p>
      <p>
        {{ Zpy_info.instruction }}
      </p>
    </div>
    <div class="Zpy_comment">
      <p>图书评论</p>
      <div class="Zpy_bookComment"></div>
    </div>
  </div>
</template>
<script>
import { getList, getBook } from "@/utils/api";
export default {
  data() {
    return {
      Zpy_book: [],
      Zpy_detailList: [],
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      Zpy_info: [],
    };
  },
  mounted() {
    getList().then((res) => {
      // console.log(res);
      this.Zpy_detailList = res.list.forEach((item) => {
        if (item.id == this.$route.query.id) {
          this.Zpy_book = item;
        }
      });
    });
    let id = this.$route.query.id;
    getBook(id).then((res) => {
      this.Zpy_info = res;
      console.log(this.Zpy_info);
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.Zpy_warpper {
  height: 100vh;
  overflow: auto;
}
.Zpy_book {
  width: 100%;
  height: 3rem;
  display: inline-flex;
  padding: 0.3rem 0.2rem;
  //   background-color: royalblue;
  img {
    width: 30%;
  }
  .Zpy_content {
    width: 70%;
    padding: 0 0.3rem;
    font-size: 0.3rem;
    color: grey;
    .Zpy_name {
      font-size: 0.4rem;
      color: black;
    }
    .Zpy_author {
      margin: 0.25rem 0;
    }
    .Zpy_free {
      width: 100%;
      display: inline-flex;
      margin-top: 0.5rem;
      .Zpy_red {
        flex: 1;
        color: red;
        font-size: 0.35rem;
      }
      .Zpy_money {
        flex: 1;
        text-align: right;
      }
    }
  }
}
.Zpy_bookTitle {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  display: inline-flex;
  border-bottom: 1px solid #dddddd;
  span {
    flex: 1;
    text-align: center;
    background-color: blanchedalmond;
  }
}
.Zpy_box {
  height: 60rem;
}
.Zpy_bookInfo {
  width: 100%;
  font-size: 0.3rem;
  padding: 0.2rem 0.3rem;
  p {
    margin: 0.2rem 0;
  }
}
.Zpy_comment {
  width: 100%;
  height: 5.5rem;
  .Zpy_bookComment {
    width: 90%;
    height: 5rem;
    background: url(../../../public/icon/empty.png) no-repeat;
    background-size: 79% 100%;
  }
}
</style>