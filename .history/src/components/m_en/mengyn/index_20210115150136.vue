<template>
  <div>
    <menheaderview></menheaderview>
    <!-- 头部林区 -->
    <div class="item1">
      <div class="itembox">
        <div class="itembox1">
          <h1 class="itembox_text1">INTRODCTION OF GUYANA</h1>
          <p class="itembox_text2">
            森林覆盖率87%with a forest coverage rate of 86.4% Guyana is
            classified as one of most forested countries in the world
          </p>
        </div>
      </div>
    </div>
    <!-- 中部文字 -->
    <div class="middle">
      <div class="et_pb_text_inner">
        <p style="text-align: center; color: #a8a8a8 !important">
          Guyana is one of the countries with the richest forest resources in
          the world. The na<br />tional territorial area is 215, 000 square
          kilometer while the total forest area is 185.700<br />square
          kilometer, taking up 87% of the national land area, which possess
          hundreds<br />of wood species in the forest. The most common
          commercial species include: Amara, Green Heart,
        </p>
        <p style="text-align: center; color: #a8a8a8 !important">
          Purple HeartLocust, Mora, Kabukalli, Redcedar, Darina, Tatabu, Washiba
          etc. These species are<br />mainly utilized in constructing walls,
          floorings, deckings, rosewood furniture, plywood<br />roofing, outdoor
          decoration, frame for doors and windows and wharfing piles
        </p>
      </div>
    </div>
    <!-- 图片加文字 -->
    <div class="middle">
      <div>
        <img src="@/public/images/timg.jpg" alt="" class="image" />
      </div>
      <div class="para" label-module="para">
        <p>
          The Cooperative Republic of Guyana, or Guyana for short, is located in
          the north of South America with a total land area of 215000 square
          kilometers. With a total population of 738000 (2017) [1], the
          population is mainly Indian and African Americans, and most of them
          believe in Protestantism and Hinduism. It is the only country in South
          America where English is the official language. It borders Venezuela
          in the northwest, Brazil in the south, Suriname in the East and the
          Atlantic Ocean in the northeast.
        </p>
        <p>
          From the 9th century, Indians settled here. The Spanish invaded in the
          15th century, occupied by Holland from 17th to 18th century, and
          became a British colony in 1814. Independence was declared on 26 may
          1966. The Cooperative Republic of Guyana was established on February
          23, 1970.
        </p>
        <p>
          Guyana and Suriname, Venezuela and other state-owned territorial
          disputes. In particular, Venezuela has repeatedly claimed the
          territorial sovereignty of Western Guyana (about two-thirds of the
          total area of Guyana) to the west of the river exequibo [2].
        </p>
        <p>
          Guyana is a member of the Commonwealth, the association of South
          American States and one of the founding members of the Caribbean
          community.
        </p>
      </div>
      <div>
        <img src="@/public/images/timg-1.jpg" alt="" class="image" />
      </div>
    </div>
    <!-- 气候 -->
    <div class="yewu">
      <div class="yewu_title1">
        <h2 class="yewu_title1_h2">圭亚那气候</h2>
        <h4 class="yewu_title1_h4">
          在旱季月份，平均降雨量超过150mm、长雨季从五月到八月、短雨季从十二月到二月比较干燥、十月最干燥
        </h4>
        <div>
          <img
            src="@/public/images/guiyana002.jpg"
            alt=""
            class="imagestyle marginTop"
          />
        </div>
        <div>
          <img
            src="@/public/images/guiyana001.jpg"
            alt=""
            class="imagestyle marginTop"
          />
        </div>
      </div>
    </div>
    <!-- 介绍 -->
    <div class="yewu">
      <div class="yewu_title1">
        <h2 class="yewu_title1_h2">圭亚那名贵硬木介绍</h2>
        <h4 class="yewu_title1_h4">
          荣安公司拥有丰富的名贵硬木资源及原材料加工工艺、可出口红木家具、建筑地板及墙面板等高端产品的板材。
        </h4>
        <div>
          <img
            src="@/public/images/guiyana003.jpg"
            alt=""
            class="imagestyle marginTop"
          />
        </div>
      </div>
    </div>
    <!-- 底部footer -->
    <footerview></footerview>
  </div>
</template>                          

<script>
export default {
  name: "GynPage",
  data() {
    return {
      itemtext1: false,
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
.news_gengduobuttton {
  width: 100%;
  text-align: center;
  color: #ffffff !important;
  background-color: #106b3f;
  border-radius: 1rem;
  line-height: 3rem;
}
.yewu_title1 {
  text-align: center;
  padding: 1.5rem;
  box-sizing: border-box;
}
.yewu_title1_h2 {
  font-weight: 100;
  margin: 0;
  margin-top: 2rem;
  line-height: 2rem;
  font-size: 2rem;
  color: #333333;
}
.yewu_title1_h4 {
  margin: 0;
  color: #666666;
  padding-top: 1rem;
  font-size: 0.9rem;
  margin: 0.5rem 0;
  line-height: 1.6rem;
}
.image {
  width: 100%;
  margin: 5% 0;
}
.middle {
  padding: 1.5rem;
  box-sizing: border-box;
  color: #666666;
  font-size: 0.9rem;
  line-height: 1.2rem;
}
a {
  text-decoration: none;
  color: #106b3f;
}
.middle_text {
  text-align: center;
  color: #a8a8a8;
  font-size: 0.875rem;
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
.tupian {
  padding: 1rem;
  box-sizing: border-box;
}
.wenzi {
  color: #666;
  background-color: #fff;
  line-height: 1.7rem;
  font-size: 0.7rem;
  padding: 1rem;
  box-sizing: border-box;
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
  background-image: url(http://rooan.cn/wp-content/uploads/2020/10/guinaya.jpg) !important;
  background-size: cover;
  box-sizing: border-box;
  height: auto;
  padding: 0 13% 13% 13%;
  box-sizing: border-box;
}
.itembox1 {
  width: 50%;
  padding-top: 10%;
  margin: auto;
}
.itembox2 {
  background-color: #ffffff;
  border-top: 0.15rem solid #2ea3f2;
  padding: 5%;
  box-sizing: border-box;
  margin: auto;
  height: 22rem;
}
.itembox_text1 {
  color: #fff !important;
  font-size: 1.4rem;
  margin: 0;
  padding-top: 2rem;
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
  padding-top: 3rem;
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
.para {
  line-height: 1.6rem;
}
</style>