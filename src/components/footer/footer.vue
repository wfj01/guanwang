<template>
  <div>
    <!-- 底部footer -->
    <div class="footer_box">
      <div class="bottom_image">
        <img src="@/public/images/tu6.png" alt="" />
        <div class="footer_text1">生态森林交易 ecological forest trade</div>
        <!-- 搜索框 -->
        <div class="footer_inputbox">
          <input type="text" placeholder="" class="footer_inputstyle" />
          <div class="footer_inputbox_button">搜索</div>
        </div>
        <div v-for="(item, index) in list" :key="index">
          <div class="footer_text1">{{ item.title }}</div>
          <div class="footer_text2">
            <div
              class="footer_text2_item"
              v-for="(iitem, iindex) in item.item1"
              :key="iindex"
            >
              <div>{{ iitem.text1 }}</div>
              <div>{{ iitem.text2 }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_bottom">
        <div class="footer_bottom_box">
          copyright 版权所有 © 2020 www.rooan.cn All Rights Reserved
          圭亚那荣安公司 RONG-AN INC 鲁ICP备14012776号-2
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "关于荣安公司   about rong-an",
          item1: [
            {
              text1: "关于荣安公司",
              text2: "about rong-an",
            },
            {
              text1: "新闻中心",
              text2: "news center",
            },
            {
              text1: "项目介绍",
              text2: "project introduction",
            },
          ],
        },
        {
          title: "全球森林交易平台",
          item1: [
            {
              text1: "全球生态森林",
              text2: "ecological forest",
            },
            {
              text1: "森林链矿机",
              text2: "forest chaina miner",
            },
            {
              text1: "最新动态",
              text2: "recent news",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer_text2 {
  margin: 0.5rem 0;
}
.footer_bottom {
  background-color: rgba(0, 0, 0, 0.32);
}
.footer_bottom_box {
  padding: 0.9rem;
  box-sizing: border-box;
  text-align: center;
  float: none;
  color: #666;
  font-size: 0.9rem;
}
.footer_text2_item {
  width: 70%;
  color: #ffffff;
  font-size: 0.875rem;
  display: flex;
  justify-content: space-between;
}
.footer_inputbox_button {
  width: 30%;
  height: 2rem;
  line-height: 2rem;
  text-align: center; 
  border: 1px solid #ddd;
  color: #666;
  background-color: #ddd;
}
.footer_inputstyle {
  width: 70%;
  height: 2rem;
}
.footer_inputbox {
  display: flex;
  justify-content: start;
  padding: 1rem 0;
}
.footer_text1 {
  color: #7f7f7f;
  font-size: 1.2rem;
}
.footer_box {
  width: 100%;
  background-color: #3a3a3a;
}
.bottom_image {
  width: 80%;
  margin: auto;
  margin-top: 1rem;
}
</style>