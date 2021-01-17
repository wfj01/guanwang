<template>
  <div>
    <!-- 头部 -->
    <mheaderview></mheaderview>
    <!-- 头部林区 -->
    <div class="item1">
      <div class="itembox_wai">
        <div
          class="news_itembox1"
          v-show="itembox1"
          v-for="(item, index) in list"
          :key="index"
          @click="godetailPage()"
        >
          
          <img :src="item.imgsrc" alt="" class="imagestyle" />
          <div class="itembox1_text1">
            {{ item.title }}
          </div>
          <div class="itembox1_text2">
            由 <a href="" class="a_1">rongan</a>
            10月 27,2020
            <a href="" class="a_2">中文新闻</a>
          </div>
          <div class="itembox1_text3">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
    <!-- 搜索框 -->
    <div class="inputbox">
      <input type="text" placeholder="" class="inputstyle" />
      <div class="inputbox_button">搜索</div>
    </div>
    <!-- 近期文章 -->
    <div>
      <div class="jinqi">
        <div class="jinqi_title">近期文章</div>
        <div class="jinqi_text">美地绿金集团参加潍坊市福建商会换届大会</div>
        <div class="jinqi_text">
          荣安公司携第15期援圭医疗队走进Kwakwani社区义诊
        </div>
        <div class="jinqi_text">美地绿金参加潍坊市福建商会大会</div>
      </div>
    </div>
    <!-- 近期评论 -->
    <div>
      <div class="jinqi">
        <div class="jinqi_title">近期评论</div>
      </div>
    </div>
   <!-- 底部footer -->
    <footerview></footerview>
  </div>
</template>

<script>
export default {
  name: "NewsPage",
  data() {
    return {
      itembox1: true,
      itembox2: false,
      itemtext1: false,
      list: [
        {
          imgsrc: require("@/public/images/u1.jpg"),
          title: "美地绿金集团参加潍坊市福建商会换届大会",
          text:
            "2018年12月22日下午16：30，潍坊市福建商会第三届换届大会暨理、监事就职典礼正式开始，会议理念为“2019 凝心聚力 再创辉煌”。 潍坊市福建商会名誉会长—美地绿金集团陈凌董事长与潍坊市福建商会理事—美地绿金集团刘影总经理，与潍坊市福建商会理事单位美地绿金集团一起，应邀参加了本次潍坊市福建商会第三届换届大会。 美地绿金在来访嘉宾手持邀请函门口签到过程中，给每个到访的来宾准备了使用南美洲圭亚那原木制作而成的伴手礼手串。 美地绿金工作人员为喜欢新中式红木的来访嘉宾进行讲解。 潍坊市福建商会第三届换届大会入场仪式。...	",
        },
        {
          imgsrc: require("@/public/images/新闻001-400x250.jpg"),
          title: "荣安公司携第15期援圭医疗队走进Kwakwani社区义诊",
          text: "...",
        },
        {
          imgsrc: require("@/public/images/新闻002.jpg"),
          title: "美地绿金参加潍坊市福建商会大会",
          text:
            "辞旧迎新，为进一步弘扬商会文化，提高会员凝聚力，潍坊市福建商会年会如期举行。 美地绿金集团作为社会企业，不仅参与了潍坊地区当地建设，旗下的圭亚那荣安公司也在当地建设完成了5000平方公里的原木供应基地，为圭亚那共和国的经济发展作出了突出贡献。 因此本年度的潍坊市福建商会大会邀请了美地绿金集团董事长陈凌先生与总经理刘影女士，与潍坊市福建商会会员们齐聚奥斯汀酒店，共叙未来。 会议时间：2019年12月27日 16：30 会议主题：潍坊市福建商会年会 会议理念：新起点 新征程 新超越...",
        },
      ],
    };
  },
  methods: {
    
    // 跳转到详情页面
    godetailPage:function(){
      this.$router.push({
        name:"NewsDetailPage"
      })
    },

    // 跳转到首页
    goIndexPage: function () {
      this.$router.push({
        name: "IndexPage",
      });
    },
    // 跳转到关于页面
    goGuanyuPage: function () {
      this.$router.push({
        name: "GuanyuPage",
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

    // 跳转到全球交易平台页面
    goJiaoyiPage:function(){
      this.$router.push({
        name:'JiaoyiPage'
      })
    },

    // 更多的
    getmoreList: function () {
      
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
.jinqi_title {
  font-size: 1.1rem;
  color: #333333;
  line-height: 2.5rem;
}
.jinqi_text {
  color: #666666;
  font-size: 1rem;
  line-height: 1.5rem;
}
.jinqi {
  width: 90%;
  margin: auto;
  margin-top: 1rem;
}
.inputbox_button {
  width: 22%;
  height: 2.4rem;
  line-height: 2.4rem;
  text-align: center;
  border: 1px solid #ddd;
  color: #666;
  background-color: #ddd;
}
.inputstyle {
  width: 70%;
  height: 2rem;
}
.inputbox {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: start;
}
.a_1 {
  text-decoration: none;
  padding-right: 1rem;
  border-right: 0.0001rem solid #333333;
}
.a_2 {
  text-decoration: none;
  padding-left: 1rem;
  border-left: 0.0001rem solid #333333;
}
.itembox1_text1 {
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: #333333;
}
.itembox1_text2 {
  font-size: 1rem;
  line-height: 2.5rem;
  color: #333333;
  text-decoration: none;
}
.itembox1_text3 {
  font-size: 1rem;
  color: #333333;
  line-height: 1.5rem;
}
</style>