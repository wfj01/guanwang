<template>
  <div>
    <menheaderview></menheaderview>
    <!-- 头部林区 -->
    <div class="item1">
      <div class="itembox">
        <div class="itembox1" >
          <h1 class="itembox_text1">CONTACT US</h1>
          <p class="itembox_text2">Rong-an Inc you are welcome</p>
        </div>
      </div>
    </div>
    <!-- 中部内容 -->
    <div>
      <div class="middlebox">
        <img src="@/public/images/tubiao019.jpg" class="imagestyle" alt="" />
      </div>
    </div>
    <div>
      <div class="middlebox">
        <div class="middlebox_text">WEIFANG ZHONGHAO INVESTMENT CO,LTD.</div>
        <div class="middlebox_text">HTTPS://WWW.MALJGROUP.COM</div>
        <div class="middlebox_text">TEL:0536-8986966</div>
      </div>
      <div class="middlebox">
        <div class="middlebox_text">RONG-AN INC.</div>
        <div class="middlebox_text">HTTPS://WWW.ROOAN.CN</div>
        <div class="middlebox_text">TEL:592-6777265</div>
      </div>
    </div>
    <!-- 联系我们 -->
    <div>
      <div class="lianxi_box">
        <div class="title">DROP A MESSACE!</div>
        <div>
          <input type="text" placeholder="your name" class="input" />
          <input type="text" placeholder="email" class="input" />
          <input type="text" placeholder="phone" class="input" />
          <input type="text" placeholder="message" class="input input_bg" />
        </div>
        <div class="yunsuan">
          <div>{{shuzi1}}+{{shuzi2}}=</div>
          <input type="text" class="input_bg inputbox" v-model="shuzi3" />
          <button class="tijiao" @click="tijiao()">SUBRMIT INFORMATION</button>
        </div>
      </div>
    </div>
    <footerview></footerview>
  </div>
</template>

<script>
export default {
  name: "LianxiPage",
  data() {
    return {
      shuzi1: "",
      shuzi2: "",
      shuzi3: "",
    };
  },
  created() {
    this.shuzi1 = Math.round(Math.random() * 10);
    this.shuzi2 = Math.round(Math.random() * 5);
  },
  methods: {
    //   提交信息
    tijiao: function () {
        console.log('aa',this.shuzi1 ,this.shuzi2 ,this.shuzi3,this.shuzi1 + this.shuzi2)
      if (this.shuzi1 + this.shuzi2 == this.shuzi3) {
        alert("正确");
      } else {
        this.shuzi1 = Math.round(Math.random() * 100);
        this.shuzi2 = Math.round(Math.random() * 50);
      }
    },
  },
};
</script>

<style scoped> 
.yunsuan {
  display: flex;
  justify-content: flex-end;
  line-height: 3rem;
  font-size: 1rem;
  letter-spacing: 0.5rem;
  margin-top: 1rem;
}
.tijiao {
  outline: none;
  color: #106331 !important;
  border: 0.1rem solid #106331 !important;
  height: 2.5rem;
  width: 6rem;
  margin-left: 1rem;
  background-color: #fff;
}
.inputbox {
  width: 2rem;
  height: 2rem;
}
.input {
  width: 100%;
  height: 3rem;
  margin: 5% 0 0 0;
  border: 0.001rem solid #aaaaaa;
  border-radius: 0.2rem;
  font-size: 0.92rem;
}
.input_bg {
  background-color: #eeeeee;
}
.lianxi_box {
  padding: 5% 10%;
  box-sizing: border-box;
}
.middlebox_text {
  font-size: 1.2rem;
  line-height: 2rem;
  word-break: break-all;
}
.middlebox {
  width: 80%;
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
  background-image: url(http://rooan.cn/wp-content/uploads/2020/10/xiangmu011.jpg) !important;
  background-position: center top;
  height: 100%;
  background-size: cover;
}
.itembox1 {
  width: 50%;
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
  font-size: 2.4rem;
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