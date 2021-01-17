<template>
  <div>
    <!-- 头部 -->
    <div class="toptitle">
      <div class="toptitle_box">
        <div class="toptitle_left">
          <img src="@/public/images/top1.jpg" alt="" class="imagestyle" />
        </div>
        <div class="toptitle_right">
          <img
            src="@/public/images/fangdajing.png"
            alt=""
            class="imgstyle"
            @click="getsearchview()"
          />
          <img
            src="@/public/images/gengduo.png"
            alt=""
            class="imgstyle marginleft"
            @click="getmoreList()"
          />
        </div>
      </div>
    </div>
    <div class="news_itembox2_box" v-show="itembox1">
      <div class="itembox2_box">
        <input
          type="text"
          placeholder="请输入你要搜索的内容"
          class="itembox2_box_input"
          v-model="inputvalue"
          v-on:input="haveInputtext"
        />
        <button class="itembox2_box_button">搜索</button>
      </div>
    </div>
    <transition name="mybox">
      <div class="news_itembox2" v-show="itembox2">
        <div class="listitem" @click="goIndexPage()">首页</div>
        <div class="listitem" @click="goGuanyuPage()">关于我们</div>
        <div class="listitem" @click="goGynPage()">圭亚那概括</div>
        <div class="listitem" @click="goXiangmuPage()">项目介绍</div>
        <div class="listitem" @click="goNewsPage()">新闻中心</div>
        <div class="listitem" @click="goJiaoyiPage()">全球森林交易平台</div>
        <div class="listitem" @click="goLianxiPage()">联系我们</div>
        <div class="listitem">
          <img src="/public/images/下载.png" alt="">
        </div>
         <div class="listitem">
          <img src="/public/images/下载 (1).png" alt="">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      itembox1: false,
      itembox2: false,
      itemtext1: false,
      inputvalue: "",
    };
  },
  methods: {
    // 获取input输入值
    haveInputtext: function (e) {
      console.log(e.target.value);
      this.inputvalue = e.target.value;
    },

    // 跳转到关于我们页面
    goGuanyuPage: function () {
      var aa = Math.round(Math.random() * 100);
      var bb = Math.round(Math.random() * 50);
      this.$router.push({ name: "GuanyuPage" });
    },

    // 跳转到首页页面
    goIndexPage: function () {
      this.$router.push({
        name: "IndexPage",
      });
    },

    // 跳转到新闻页面
    goNewsPage: function () {
      this.$router.push({
        name: "NewsPage",
      });
    },

    // 跳转到联系我们页面
    goLianxiPage: function () {
      this.$router.push({
        name: "LianxiPage",
      });
    },
    // 跳转到圭亚那页面
    goGynPage: function () {
      this.$router.push({
        name: "GynPage",
      });
    },

    // 跳转到项目页面
    goXiangmuPage: function () {
      this.$router.push({
        name: "XiangmuPage",
      });
    },

    // 跳转到新闻列表页面
    goNewsPage: function () {
      this.$router.push({
        name: "NewsPage",
      });
    },
    // 跳转到交易平台页面
    goJiaoyiPage: function () {
      this.$router.push({
        name: "JiaoyiPage",
      });
    },

    // 更多的
    getmoreList: function () {
      this.itembox1 = false;
      if (this.itembox2 === true) {
        this.itembox2 = false;
      } else {
        this.itembox2 = true;
      }
    },

    // 搜索
    getsearchview: function () {
      this.itembox2 = false;
      if (this.itembox1 === true) {
        this.itembox1 = false;
      } else {
        this.itembox1 = true;
      }
    },
  },
};
</script>

<style scoped>
/* 给过渡的name加样式 */

.mybox-leave-active,
.mybox-enter-active {
  transition: all 1.1s ease;
}

.mybox-leave-active,
.mybox-enter {
  height: 0rem !important;
}

.mybox-leave,
.mybox-enter-active {
  height: 22.5rem;
}
.itembox2_box_input {
  width: 70%;
  height: 2.5rem;
  border-radius: 0.2rem;
  padding: 0 0.5rem;
  box-sizing: border-box;
}
.itembox2_box_button {
  width: 25%;
  height: 2.5rem;
  border-radius: 0.2rem;
  border: none;
}
.news_itembox2_box {
  background-color: #ffffff;
  border-top: 0.15rem solid #2ea3f2;
  padding: 5% 10%;
  box-sizing: border-box;
  position: absolute;
  z-index: 1;
  width: 100%;
  opacity: 0.96;
  display: flex;
  justify-content: space-between;
}
.listitem {
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.03);
  color: #666;
  padding: 5%;
  box-sizing: border-box;
  display: block;
  font-size: 1rem;
  font-weight: 600;
}
.itembox_wai {
  box-sizing: border-box;
  background-position: center top;
  background-size: cover;
}
.news_itembox1 {
  width: 90%;
  margin: auto;
  margin-bottom: 2rem;
  position: relative;
}
.news_itembox2 {
  background-color: #ffffff;
  border: 0.1rem solid #ccc;
  border-top: 0.15rem solid #2ea3f2;
  padding: 0 5%;
  box-sizing: border-box;
  position: absolute;
  z-index: 1;
  width: 80%;
  margin: 0 10%;
  height: 22.5rem;
  overflow: hidden;
}
.itembox2_box {
  width: 100%;
}
.itembox_text1 {
  color: #fff !important;
  font-size: 2.5rem;
  margin: 0;
  font-weight: bold;
}
.toptitle {
  width: 80%;
  margin: auto;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
}
.toptitle_box {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.itembox_text2 {
  text-align: left;
  color: #ffffff;
  font-size: 1.4rem;
  margin: 0;
  padding-top: 1rem;
}
.toptitle_left {
  max-width: 50%;
  height: 100%;
}
.imagestyle {
  width: 100%;
  height: 54%;
}
.imgstyle {
  width: 1.6rem;
  height: 1.6rem;
}
.toptitle_right {
  display: flex;
  justify-content: flex-start;
}
.marginleft {
  margin-left: 1.5rem;
}
</style>