<template>
  <div>
    <mheaderview></mheaderview>
    <!-- 头部林区 -->
    <div class="item1">
      <div class="itembox">
        <div class="itembox1" >
          <h1 class="itembox_text1">圭亚那荣安公司概括</h1>
          <p class="itembox_text2">发展低碳经济、建设绿色环保和谐企业</p>
        </div>
      </div>
    </div>
    <!-- 中部文字1 -->
    <div>
      <div class="wenzi">
        2006年9月1日荣安公司在圭亚那注册成立、致力于环保开发、以资源为核心、
        实施国际化、多元化发展策略、且不断加大节能减排力度、发展低碳经济、建设绿色环保和谐企业
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
        <h2 class="yewu_title1_h2">中华人民共和国商务颁发</h2>
        <h4 class="yewu_title1_h4">企业境外投资证书</h4>
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
            圭亚那荣安公司拥有110英亩林区码头用地、建设木材加工及配套设施
          </div>
          <div class="textbox_text">
            一期规划厂区面积3万平方米、涵盖原木堆场、大锯厂房、烘干房、板材堆场、调锯房以及装卸厂区等区域、采伐、运输、加工各环节衔接紧凑、大幅度降低公司成本。&nbsp;
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
            荣安公司首艏 “元亨号” 下水、自主建造2000吨原木运输船
          </div>
          <div class="textbox_text">
            2014年2月28日、由荣安公司委托建造的首艏船只“元亨号”顺利下水、该船为公司在圭亚那当地自主建造的2000吨原木运输船，负责原木从林区码头到圭亚那乔治敦集装箱港口的运输任务、有效的降低原木的运输成本、“元亨号”也以圭亚那共和国第一艘船舶的身份载入圭亚那国家历史。
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
  methods:{
    
  }
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
.textbox_text{
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
  padding:0 13% 13% 13%;
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