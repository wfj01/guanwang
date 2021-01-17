<template>
  <div>
    <menheaderview></menheaderview>
    <!-- 头部林区 -->
    <div class="item1">
      <div class="itembox">
        <div class="itembox1">
          <h1 class="itembox_text1">RONG-AN INC SUMMARY</h1>
          <p class="itembox_text2">
            developing low-carbon economy and constructing a green and
            harmonious enterise and sectorpr
          </p>
        </div>
      </div>
    </div>
    <!-- 中部文字1 -->
    <div>
      <div class="wenzi">
        <div class="et_pb_text_inner">
          <p style="text-align: center">
            Rong-an Inc. was registered in Guyana on September 1, 2006,
            <br />specializing in environmentally friendly development.
            <br />With the core of resources, the Company works<br />towards
            internationalization with diversified developmental strategies, as
            well as
          </p>
          <p style="text-align: center">
            continuous efforts in energy conservation and emission reduction,
            developing<br />low-carbon economy and constructing a green and
            harmonious enterprise andsector
          </p>
        </div>
      </div>
    </div>
    <!-- 中部图片 -->
    <div class="tupian">
      <img src="@/public/images/guanyu001.jpg" alt="" class="imagestyle" />
      <img src="@/public/images/guanyu002.jpg" alt="" class="imagestyle" />
      <img src="@/public/images/guanyu003.jpg" alt="" class="imagestyle" />
    </div>
    <!-- 证书 -->
    <div class="yewu">
      <div class="yewu_title1">
        <h2 class="yewu_title1_h2">Ministry of Commerce, PRC</h2>
        <h4 class="yewu_title1_h4">Enterprise overseas investment certificate </h4>
        <div>
          <img
            src="@/public/images/008.jpg"
            alt=""
            class="imagestyle marginTop"
          />
        </div>
      </div>
    </div>
    <!-- 挖机 -->
    <div>
      <div class="wajibox">
        <div class="imgbox">
          <img class="imagestyle" src="@/public/images/guanyu004.jpg" alt="" />
        </div>
        <div class="textbox">
          <div class="textbox_title">
            Rong-an INC has the access to 110-acre land at the forest landing which is utilized to establish the wood processing factory and supporting facilities
          </div>
          <div class="textbox_text">
            The first planned phase of the factory area is 30,000 square meters,covering the log pond, sawmill plant, kiln dry plant, lumber yard, saw adjustment workshop and loading and discharging areas etc. Harvesting, transportation and processing are well connected,&nbsp;
             which substantially reduces the production cost of the Company.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </div>
        </div>
      </div>
    </div>
    <!-- 轮船                                                                                                                                                                                                                                                                                   -->
    <div>
      <div class="wajibox">
        <div class="imgbox">
          <img class="imagestyle" src="@/public/images/guanyu005.jpg" alt="" />
        </div>
        <div class="textbox">
          <div class="textbox_title">
            On Feb.28 2014,the first barge "Yuan Heng Freighter" which was entrusted by
          </div>
          <div class="textbox_text">
            On Feb. 28, 2014, the first barge “Yuan Heng freighter which was entrusted by Rong-an Inc to construct sailed successfully. The 2000-ton barge was built in Guyana to transport the logs from the Company’s forest landing to container termi nal in Georgetown, Guyana, which significantly reduces the cost and increases effi-ciency in transporting logs.Yuan Heng freighter is recorded as the first constructed self-propelled barge in Guyana s history
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
  name: "GuanyuPage",
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
.textbox_title {
  font-size: 0.98rem;
  color: #333;
  margin-bottom: 1rem;
}
.textbox_text {
  color: #adadad;
  font-size: 0.7rem;
}
.textbox {
  padding: 1.5rem;
  box-sizing: border-box;
  border: 0.0001rem solid #cccccc;
}
.imgbox {
  width: 100%;
}
.wajibox {
  width: 80%;
  margin: auto;
  margin-top: 10%;
}
.marginTop {
  margin-top: 10%;
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
  font-size: 2rem;
  color: #808080;
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
  background-image: url(http://rooan.cn/wp-content/uploads/2020/10/gy001.jpg) !important;
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
.guanyu_itembox2 {
  background-color: #ffffff;
  border-top: 0.15rem solid #2ea3f2;
  padding: 5%;
  box-sizing: border-box;
}
.itembox2_box {
  width: 100%;
}
.itembox_text1 {
  color: #fff !important;
  font-size: 1.4rem;
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