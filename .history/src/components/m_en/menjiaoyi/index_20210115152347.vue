<template>
  <div>
    <!-- 头部 -->
    <menheaderview></menheaderview>
    <!-- 头部林区 -->
    <div class="item1">
      <div class="itembox">
        <div class="itembox1">
          <h1 class="itembox_text1">TO CREATE GLOBAL ECOLOGICAL FOREST TRADING PLATFORM</h1>
          <p class="itembox_text2">
            marke demand oriented is the core for the transtormation of production mode
          </p>
        </div>
      </div>
    </div>
    <!-- 产量概述 -->
    <div class="yewu">
      <div class="yewu_title1">
        <h2 class="yewu_title1_h2">TO BECOME THE SUPPLIER OF TIMBER RESOURCES ACROSS THE WOLD </h2>
        <h4 class="yewu_title1_h4">Rong-an Inc production innovation</h4>
        <img src="@/public/images/xiangmu030.jpg" alt="" class="imgstyle1" />
      </div>
    </div>
    <!-- 精准档案 -->
    <div>
      <div class="dangan">
        <div class="dangan_title">ESTABLISH PRECISE FOREST DATABASE</div>
        <p style="text-align: center;">
          title: " data taking the lead market demand oriented is the core for the transtormation of production mode",
        </p>
        <div class="dangan_item" v-for="(item, index) in list" :key="index">
          <div class="item_img">
            <img :src="item.imgsrc" alt="" />
          </div>
          <!-- <div class="dangan_title">{{ item.title }}</div> -->
          <div class="dangan_text">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
    <!-- 图文 -->
    <div>
      <div class="tuwen_item" v-for="(item, index) in mylist" :key="index">
        <div
          class="item_waibox"
          :style="{ backgroundImage: 'url(' + item.imagesrc + ')' }"
        >
          <!-- <div class="waibox_text1">{{ item.title }}</div> -->
          <p class="waibox_text2">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
    <!-- 核心 -->
    <div class="yewu">
      <div class="yewu_title1">
        <h2 class="yewu_title1_h2">全球生态森林交易平台核心</h2>
        <h4 class="yewu_title1_h4">创造资源价值最大化</h4>
        <img src="@/public/images/xiangmu024.jpg" alt="" class="imgstyle1" />
      </div>
    </div>
    <!-- 四步走 -->
    <div class="yewu">
      <div class="yewu_title1">
        <h2 class="yewu_title1_h2">绿色生产、生态发展、可持续利用</h2>
        <h4 class="yewu_title1_h4">四部走的节奏“FOUR STEPS”</h4>
      </div>
    </div>
    <!-- 图文 -->
    <div>
      <div class="tuwen_item" v-for="(item, index) in mylist2" :key="index">
        <div class="item_waibox border">
          <div class="waibox1_text1">{{ item.title }}</div>
          <div class="waibox1_text2">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
    <div class="tuwen_item">
        <img src="@/public/images/tubiao017.jpg" alt="" class="imagestyle">
    </div>
   <!-- 底部footer -->
    <footerview></footerview>
  </div>
</template>

<script>
export default {
  name: "JiaoyiPage",
  data() {
    return {
      itemtext1: false,
      list: [
        {
          imgsrc: require("@/public/images/tubiao001.jpg"),
          title: " 环境治理与保护大数据服务",
          text: "BIG DATA SERVICE FOR ENVIRONMENTAL GOVERNANCE AND PROTECTION",
        },
        {
          imgsrc: require("@/public/images/tubiao002.jpg"),
          title: "合理性保障信息即时服务",
          text: "INSTANT INFORMATION SERVICE  WITH LEGALITY ASSURANCE",
        },
        {
          imgsrc: require("@/public/images/tubiao003.jpg"),
          title: "面向全球交易融合多企业协调",
          text:
            "FACE GLOBALLY INTEGRATE BUSINESSES AND COLLABORATE AMONG ENTERPRISES",
        },
        {
          imgsrc: require("@/public/images/tubiao004.jpg"),
          title: "森林信息共享",
          text: "FOREST INFORMATION SHARING",
        },
        {
          imgsrc: require("@/public/images/tubiao005.jpg"),
          title: "监督数据说",
          text: "DATA MONITORING",
        },
        {
          imgsrc: require("@/public/images/tubiao006.jpg"),
          title: "政企高效协作",
          text: "EFFICIENT COLLABORATION BETWEEN GOVERNMENT AND ENTERPRISES",
        },
      ],
      mylist: [
        {
          title: "行业数据的充分集成",
          text: "FOULLY INTEGRATION OF THE INDUSTRY DATA",
          imagesrc: "http://rooan.cn/wp-content/uploads/2020/10/tubiao012.jpg",
        },
        {
          title: "环境保护的巨大数据价值",
          text: "HIGH DATA VALUE FOR ENVIRONMENTAL PROTECTION",
          imagesrc: "http://rooan.cn/wp-content/uploads/2020/10/tubiao013.jpg",
        },
        {
          title: "生态环保价值无限",
          text: "UNLIMTED ECOLOGICAL CONSERVATION VALUE",
          imagesrc: "http://rooan.cn/wp-content/uploads/2020/10/tubiao014.jpg",
        },
        {
          title: "行业服务的标准化",
          text: "STANDARDIZATION OF INDUSTRIAL SERVICE",
          imagesrc: "http://rooan.cn/wp-content/uploads/2020/10/tubiao015.jpg",
        },
      ],
      mylist2: [
        {
          title: "精细化管控",
          text: "Streamlined Control",
        },
        {
          title: "绿色木业生态圈",
          text: "Green Forest Industrial Ecosphere",
        },
        {
          title: "供需聚合",
          text: "Integration of Supply and Demand",
        },
        {
          title: "全渠道交易",
          text: "Full Channel Transactions",
        },
      ],
    };
  },
  methods:{
  }
};
</script>

<style lang="scss" scoped>
.footer_box {
  width: 100%;
  background-color: #3a3a3a;
}
.bottom_image {
  width: 80%;
  margin: auto;
  margin-top: 1rem;
}
.border {
  border: 0.00001rem solid #666666;
  height: 10rem !important;
}
.waibox1_text1 {
  font-size: 1.8rem;
  color: #666666;
}
.waibox1_text2 {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #666666;
}
.waibox_text1 {
  font-size: 1.8rem;
  color: #ffffff;
}
.waibox_text2 {
  margin-top: 1rem;
  font-size:0.875rem;
  color: #ffffff;
}
.item_waibox {
  padding: 10%;
  box-sizing: border-box;
  text-align: center;
  background-size: cover;
  font-size: 0.875rem;
}
.tuwen_item {
  padding: 5% 10%;
  box-sizing: border-box;
}
.dangan_text {
  font-size: 0.85rem;
  color: #333333;
  margin-top: 0.5rem;
}
.dangan_title {
  color: #666666;
  font-size: 1.1rem;
  margin-top: 0.5rem;
}
.dangan_item {
  text-align: center;
  margin: 2rem 0;
}
.dangan {
  width: 80%;
  margin: auto;
}
.dangan_title {
  font-size: 1.4rem;
  text-align: center;
}
.imgstyle1 {
  width: 100%;
  margin-top: 1rem;
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
  background-image: url(http://rooan.cn/wp-content/uploads/2020/10/pt001.jpg) !important;

  background-position: center top;
  height: 100%;
}
.itembox1 {
  width: 60%;
  padding-top: 10%;
  margin: auto;
}
.itembox2 {
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
  font-size: 2rem;
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