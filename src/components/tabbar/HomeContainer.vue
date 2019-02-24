<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to='/home/newslist'>
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.add();
  },
  methods: {
    add() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(res => {
          if (res.body.status === 0) {
            this.list = res.body.message;
          } else {
            alert("请求失败");
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
  // .mint-swipe-item:nth-child(1){
  //     background-color: red;
  // }
  // .mint-swipe-item:nth-child(2){
  //     background-color: green;
  // }
  // .mint-swipe-item:nth-child(3){
  //     background-color: blue;
  // }
}
body {
    background-color: #fff;
}
.mui-table-view {
    img{
        width: 60px;
        height: 60px;
    }
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 13px;
}
.mui-grid-view.mui-grid-9 {
    border:none;
    background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
}
</style>

