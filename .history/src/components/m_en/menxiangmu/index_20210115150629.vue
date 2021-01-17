<template>
  <div>
    <!-- 头部 -->
    <menheaderview></menheaderview>
    <!-- 头部林区 -->
    <div class="item1">
      <div class="itembox">
        <div class="itembox1">
          <h1 class="itembox_text1">荣安公司产品及优势</h1>
          <p class="itembox_text2">将成为全世界原木资源供应商</p>
        </div>
      </div>
    </div>
    <!-- 主营范围 -->
    <div>
      <div class="zhuying">圭亚那荣安公司主营范围</div>
    </div>
    <!-- 销售世界各地 -->
    <div>
      <div class="zhuying">荣安公司将圭亚那木材产品销售世界各地</div>
      <div class="xiaoshou_img">
        <div>
          <img src="@/public/images/地图.jpg" alt="" class="imgstyle1" />
        </div>
      </div>
    </div>
    <!-- 项目优势 -->
    <div>
      <div class="zhuying">荣安项目优势</div>
      <div class="youshi">
        荣安公司从2006年开始在圭亚那运营木材产业、拥有丰富的林业管理经验
      </div>
    </div>
    <!-- 数字 -->
    <div>
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="item_text1">{{ item.title }}</div>
        <div class="item_text2">{{ item.text }}</div>
      </div>
    </div>
    <!-- 图文 -->
    <div>
      <div class="tuwen_item" v-for="(item, index) in list1" :key="index">
        <div class="item_image">
          <img :src="item.imgsrc" alt="" class="imgstyle1" />
          <div class="twitem_text1">{{ item.title }}</div>
          <div class="twitem_text2">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
    <!-- 底部footer -->
    <footerview></footerview>
  </div>
</template>

<script>
export default {
  name: "XiangmuPage",
  data() {
    return {
      itemtext1: false,
      list: [
        {
          title: "10年",
          text: "荣安公司扎根圭那亚林区运营",
        },
        {
          title: "100公里",
          text: "建设维护桥梁道路总长",
        },
        {
          title: "1600万m³",
          text: "荣安公司总出木量",
        },
      ],
      list1: [
        {
          imgsrc: require("@/public/images/xiangmu005.jpg"),
          title: "以路带产",
          text:
            "荣安公司进入圭亚那市场后率先投入林区道路建设，前后建设维护桥梁道路总长超过100公里，高效的路网成为林区产业化发展的核心基础。",
        },
        {
          imgsrc: require("@/public/images/xiangmu006.jpg"),
          title: "十年历练",
          text:
            "荣安公司扎根圭亚那林区运营10年光阴，从林区各个方面实现高度专业化、产业化运作、长效的运营让荣安公司整体架构实现了本土化与国际化的双轨融合。",
        },
        {
          imgsrc: require("@/public/images/xiangmu007.jpg"),
          title: "设备优势",
          text:
            "荣安公司拥有平路机、夹木机、木桐车、覆带吊车、装载机等大型木业工程机械设备几十台，配合“元亨号”的水路运输原木年产量10万m³",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.footer_box {
  width: 100%;
  background-color: #3a3a3a;
}
.bottom_image {
  width: 80%;
  margin: auto;
  margin-top: 1rem;
}
.item_image {
  margin: 1rem 0;
}
.twitem_text1 {
  font-size: 1.2rem;
  padding: 0.5rem 0;
  color: #333333;
}
.twitem_text2 {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5rem;
}
.tuwen_item {
  width: 80%;
  margin: auto;
}
.item_text1 {
  color: #106b3f !important;
  font-size: 3.5rem;
}
.item_text2 {
  color: #999999;
  font-size: 1rem;
  margin-top: 1rem;
}
.item {
  width: 80%;
  margin: auto;
  text-align: center;
  margin: 10% auto;
}
.youshi {
  width: 80%;
  margin: auto;
  text-align: center;
  font-size: 0.875rem;
  color: #666;
}
.xiaoshou_img {
  padding: 1rem;
  box-sizing: border-box;
}
.imgstyle1 {
  width: 100%;
  height: auto;
}
.zhuying {
  padding: 1rem;
  box-sizing: border-box;
  text-align: center;
  font-size: 1.5rem;
}
/* 给过渡的name加样式 */

.mybox-leave-active,
.mybox-enter-active {
  transition: all 1.1s ease;
}

.mybox-leave-active,
.mybox-enter {
  height: 0px !important;
}

.mybox-leave,
.mybox-enter-active {
  height: 4rem;
}
.itembox_button {
  margin-top: 1rem;
  color: #ffffff !important;
  border-width: 7px !important;
  border-color: #106b3f;
  border-radius: 5px;
  letter-spacing: 2px;
  font-size: 16px;
  font-family: "Lato", Helvetica, Arial, Lucida, sans-serif !important;
  font-weight: 900 !important;
  text-transform: uppercase !important;
  background-color: #106b3f;
  height: 3rem;
  line-height: 3rem;
  width: 8rem;
  text-align: center;
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
.itembox {
  padding-bottom: 14%;
  box-sizing: border-box;
  background-image: url(http://rooan.cn/wp-content/uploads/2020/10/xiangmu015.jpg) !important;
  background-position: center top;
  background-size: cover;
}
.itembox1 {
  padding-top: 10%;
  width: 60%;
  margin: auto;
  font-size: 0.9rem;
}
.itembox2 {
  background-color: #ffffff;
  border-top: 0.15rem solid #2ea3f2;
  padding: 5%;
  box-sizing: border-box;
  width: 80%;
  margin: auto;
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