<template>
  <div>
    <!-- 头部 -->
    <menheaderview></menheaderview>
    <!-- 头部林区 -->
    <div class="item1">
      <div class="itembox">
        <div class="itembox1" >
          <h1 class="itembox_text1">110-acre land at the forest landing </h1>
          <p class="itembox_text2">about475736hectares of woodland、the total allowable cut  approx 1600million m³</p>
          <div class="itembox_button">green eclolgy</div>
        </div>
      </div>
    </div>
    <!-- 业务范围 -->
    <div class="yewu">
      <div class="yewu_title1">
        <h2 class="yewu_title1_h2">RONG-AN INC SCOPE OF BUSINESS</h2>
        <h4 class="yewu_title1_h4">harvesting and sales of logs 、sawmill downstream processing、import and export trade</h4>
      </div>
    </div>
    <!-- 下拉弹出 -->
    <div>
      <div class="downbox">
        <div class="downbox_item" v-for="(item, index) in mylist" :key="index">
          <div>
            <img :src="item.imgsrc" alt="" class="imagestyle" />
          </div>
          <div class="downbox_item2">
            <div class="fenlei">
              <div class="lefttext">{{ item.imgtext }}</div>
              <div class="righticon">
                <img
                  :src="item.isjiahao ? jiahao : jianhao"
                  alt=""
                  class="rightImage"
                  @click="zhanshi(index)"
                />
              </div>
            </div>
            <transition name="mybox">
              <div v-show="item.itemtext1" class="kuozhan">
                <p class="kuozhan_p">
                  {{ item.detail }}
                </p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <!-- 产量概述 -->
    <div class="yewu">
      <div class="yewu_title1">
        <h2 class="yewu_title1_h2">BRIEF INTRODUCTION OF PRODUCTION CAPACITY OF RONG-AN INC IS FORESTRY CONCESSIONS</h2>
        <h4 class="yewu_title1_h4">Rong-an INC has two forestry concessions</h4>
      </div>
    </div>
    <!-- 第一林区 -->
    <div class="one_box">
      <div class="one_neibox">
        <h3>projest forest area</h3>
        <p>
          fprest area 57927hectare、total timber output about 77.2million cubic meters、according to 
          the regulation of Guyana Forestry Commission、the annual allowable cut of a square kilometer is 1,333m³。
          1hectare=0.01 square kilometer
        </p>
        <p>荣安林区允许出木总量为475736X1666=1600万m³</p>
        <div class="itembox_button">FOREST ZONE</div>
      </div>
      <div class="one_neibox">
        <img src="@/public/images/tu1.png" alt="" class="imagestyle" />
        <img src="@/public/images/tu2.png" alt="" class="imagestyle" />
      </div>
    </div>
    <!-- 第二林区 -->
    <div class="one_box">
      <div class="one_neibox">
        <h3>PROJECT FOREST AREA</h3>
        <p>
          forest area 417809 hectare、total timber output about 557Million cubic meters、
          if 60% of the logs produce are processed through sawmill and kiln 
          dries to different grades of lumber products,two to five times of extra value will be added
        </p>
        <p>荣安林区允许出木总量为475736X1666=1600万m³</p>
        <div class="itembox_button">FOREST ZONE</div>
      </div>
    </div>
    <!-- 产量概述 -->
    <div class="yewu">
      <div class="yewu_title1">
        <h1 class="yewu_title1_h2">TO CREATE GLOBAL ECOLOGICAL FOREST TRADING PLATFORM</h1>
        <h5 class="yewu_title1_h5">
          Multilateral win-win and independently circulated forest platform system, 
          starting from Guyana,radiating to South America and even the whole world
        </h5>
      </div>
    </div>
    <!-- 搜索 -->
    <div class="sousuo">
      <div class="sousuo_box">
        <input type="text" placeholder="forest ecological trade" class="sousuo_input" />
        <button class="sousuo_button">Search</button>
      </div>
    </div>
    <!-- 新闻中心 -->
    <div class="news">
      <h1 style="color: #333; textalign: center">NEWS CENTER</h1>
    </div>
    <div class="news">
      <div class="newsbox" v-for="(item, index) in mylist1" :key="index" @click="goNewsDetailPage()">
        <img :src="item.imgsrc" alt="" class="imagestyle" />
        <div class="newsbox_bottom">
          <h3 class="newsbox_box">{{ item.text }}</h3>
          <div class="newsbox_box1">
            由
            <div class="newsbox_box1text1">rongan</div>
            <div class="newsbox_box1text2">英文新闻</div>
          </div>
          <p class="newsbox_box2">
            {{ item.title }}
          </p>
          <div class="newsbox_box3">read more</div>
        </div>
      </div>
    </div>
    <div class="news_gengduo">
      <div class="news_gengduobuttton">more+</div>
    </div>
    <!-- 底部footer -->
    <footerview></footerview>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      itemtext1: false,
      jiahao: require("@/public/images/加号.png"),
      jianhao: require("@/public/images/减号.png"),
      mylist1: [
        {
          imgsrc: require("@/public/images/tu5.jpg"),
          text: "Chairman Chen Ming of Rongan Company of Guyana participated in the New Year reunion of Fujian Home Association of Guyana",
          title:
            "2018At 6:30 p.m. on February 4, 2008, the Fujian Association of Guyana hosted the New Year reunion",
        },
        {
          imgsrc: require("@/public/images/tu4.jpg"),
          text: "2012Annual Group has acquired exploration rights in eight large mining areas: PATARO, C95, C96, G80, G123, G88, etc.",
          title:
            "Since 2012, the Group has acquired exploration rights in eight large mining areas",
        },
        {
          imgsrc: require("@/public/images/tu3.jpg"),
          text: "Mr. Chen Ming of Medi Green Gold Group was invited to attend the 10th National Congress of Returned Overseas Chinese and Relatives",
          title:
            "Theme: Learning the Spirit of the 10th Congress of Returned Overseas Chinese and Relatives",
        },
      ],
      mylist: [
        {
          imgsrc: require("@/public/images/ren.jpg"),
          isjiahao: true,
          imgtext: "harvesting and sales of logs",
          itemtext1: false,
          detail:
            "RONG-an Inc. integrates harvesting, sales and down-stream processing as a whole throughout the entire forest industrial chain",
        },
        {
          imgsrc: require("@/public/images/fangzi.jpg"),
          isjiahao: true,
          imgtext: "sawmill downstream processing",
          itemtext1: false,
          detail:
            "With the confidence in Guyana forest produce, Rong-an Inc. also established a sawmill to process various wood species",
        },
        {
          imgsrc: require("@/public/images/jizhuangxiang.jpg"),
          isjiahao: true,
          itemtext1: false,
          imgtext: "import and export trade",
          detail:
            "Rong-an Inc. manages the sales network and O2O platform in South America and Asia,promoting the forest produces across the world",
        },
      ],
    };
  },
  methods: {
    // 展示
    zhanshi: function (index) {
      this.mylist.forEach((item, iindex) => {
        if (index === iindex) {
          item.isjiahao = !item.isjiahao;
          item.itemtext1 = !item.itemtext1;
          console.log("123", index, iindex, item.isjiahao, item.itemtext1);
        }
      });
    },
  },
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
.news_gengduo {
  width: 80%;
  margin: auto;
  padding: 0 28%;
  box-sizing: border-box;
  margin-top: 2rem;
}
.newsbox_box3 {
  color: #106b3f;
  font-size: 1.1rem;
}
.newsbox_box2 {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #333;
}
.newsbox_box1text2 {
  color: #106b3f;
  padding: 0 0.5rem;
}
.newsbox_box1text1 {
  border-right: 0.1rem solid #333333;
  color: #106b3f;
  padding: 0 0.5rem;
}
.newsbox_box1 {
  font-size: 1.2rem;
  line-height: 2.5rem;
  display: flex;
  justify-content: flex-start;
}
.newsbox_bottom {
  border-left: 0.0001rem solid #cccccc;
  border-right: 0.0001rem solid #cccccc;
  border-bottom: 0.0001rem solid #cccccc;
  padding: 1.5rem 1rem;
  box-sizing: border-box;
}
.newsbox_box {
  text-align: left;
  color: #333333;
  font-size: 1.6rem;
  margin: 0;
}
.newsbox {
  width: 100%;
  margin-top: 1.5rem;
  box-shadow: 0px 2px 22px -3px rgba(0, 0, 0, 0.3);
}
.news {
  width: 84%;
  margin: auto;
}
.sousuo_button {
  color: #ffffff !important;
  letter-spacing: 1px;
  background-color: #106b3f !important;
  border: none;
  outline: none;
  width: 5rem;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
}
.sousuo_input {
  background-color: rgba(0, 0, 0, 0.04);
  color: #b6b6b6;
  border: none;
  outline: none;
  padding: 1rem;
  box-sizing: border-box;
  font-size: 1.1rem;
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}
.sousuo {
  width: 80%;
  margin: 1rem  auto;
}
.sousuo_box {
  width: 100%;
  display: flex;
  justify-self: start;
}
.yewu_title1_h5 {
  font-size: 1.2rem;
  color: #898f99;
}
.imagestyle {
  width: 100%;
  height: 100%;
}
.one_neibox {
  width: 80%;
  margin: auto;
}
.one_neibox h3 {
  font-family: "Lato", Helvetica, Arial, Lucida, sans-serif;
  font-weight: 700;
  font-size: 2.4rem;
  margin: 0;
  padding-top: 1.4rem;
}

.one_neibox p {
  color: #898f99 !important;
  font-size: 1.2rem;
}
.downbox_item {
  margin-top: 2.5rem;
}
.kuozhan_p {
  margin: 0;
  font-size: 0.875rem;
  letter-spacing: 0.111rem;
}
.fenlei {
  display: flex;
  justify-content: space-between;
}
.kuozhan {
  overflow: hidden;
  height: 4rem;
}
.lefttext {
  line-height: 2rem;
}
.rightImage {
  width: 100%;
  height: 100%;
}
.righticon {
  width: 2rem;
  height: 2rem;
}
.downbox {
  padding-top: 3rem;
  width: 80%;
  margin: auto;
}
.downbox_item2 {
  width: 100%;
  box-shadow: 0px 0.2rem 2rem 0px rgba(0, 0, 0, 0.3) !important;
  padding: 1rem;
  box-sizing: border-box;
}
.yewu_title1 {
  text-align: center;
  width: 80%;
  margin: auto;
}
.yewu_title1_h2 {
  margin: 0;
  margin-top: 2rem;
  line-height: 2rem;
}
.yewu_title1_h4 {
  margin: 0;
  color: #808080;
  width: 80%;
  padding-top: 1rem;
  margin: auto;
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
  background-image: url(http://rooan.cn/wp-content/uploads/2020/10/轮播001.jpg) !important;
  background-position: center top;
  height: 100%;
}
.itembox1 {
  width: 50%;
  padding-top: 10%;
  margin: auto;
}
.index_itembox2 {
  width: 80%;
  background-color: #ffffff;
  border-top: 0.15rem solid #2ea3f2;
  padding: 5%;
  box-sizing: border-box;
  margin: auto;
}
.itembox2_box {
  width: 100%;
}
.itembox_text1 {
  color: #fff !important;
  font-size: 3.4rem;
  margin: 0;
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