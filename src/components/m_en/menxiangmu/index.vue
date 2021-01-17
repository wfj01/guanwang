<template>
  <div>
    <!-- 头部 -->
    <menheaderview></menheaderview  >
    <!-- 头部林区 -->
    <div class="item1">
      <div class="itembox">
        <div class="itembox1">
          <h1 class="itembox_text1">RONG-AN INC PRODUCT AND SERVICE</h1>
          <p class="itembox_text2">to become the supplier of timber resources across the world</p>
        </div>
      </div>
    </div>
    <!-- 主营范围 -->
    <div>
      <div class="zhuying">圭亚那荣安公司主营范围</div>
    </div>
    <!-- 销售世界各地 -->
    <div>
      <div class="zhuying">PROMOTING THE FOREST PRODUCES OF GUYANA ACROSS THE WORD</div>
      <div class="xiaoshou_img">
        <div>
          <img src="@/public/images/地图.jpg" alt="" class="imgstyle1" />
        </div>
      </div>
    </div>
    <!-- 项目优势 -->
    <div>
      <div class="zhuying">PROJECT ADVANTAGE</div>
      <div class="youshi">
        Rong-an Inc has been in forestry operations since 2006 and is equipped with extensive forestry management experience
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
          title: "10YEAR",
          text: "Rong-an Inc has been operating in GUYANA for over the decade",
        },
        {
          title: "100KM",
          text: "the total maintained bridges and roads exceeded 100km",
        },
        {
          title: "1600万m³",
          text: "the total allowable cut of Rong-an Inc is",
        },
      ],
      list1: [
        {
          imgsrc: require("@/public/images/xiangmu005.jpg"),
          title: "Road leading production",
          text:
            "after entering the market in Guyana, Rong-an Inc took he initiative in the road construction The tota ges and roads exceeded 100KM. the efficient roadnetwork becomes the core foundation for the industrialization development",
        },
        {
          imgsrc: require("@/public/images/xiangmu006.jpg"),
          title: "Adecade of business exl perience",
          text:
            "Rong an inc, has been operating in Guyana for over a decade having realized the high professionalism and industrialization in various areas the long acting operation leads to the dual integration of localization and internationalization on the overall structure of the company",
        },
        {
          imgsrc: require("@/public/images/xiangmu007.jpg"),
          title: "machinery advantages",
          text:
            "Rong-an Inc has tens of heavy duty forestry machinery such as graders buildozers log loaders log trucks cranes excavators and loaders Together with the river transportation of “YuanHeng Fieighter”,the annual log production capacity reaches 100,000m³",
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