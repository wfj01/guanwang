<template>
  <div style="position: fixed; top: 0px; z-index: 9999; width: 100%">
    <header
      id="main-header"
      data-height-onload="80"
      data-height-loaded="true"
      data-fixed-height-onload="80"
      style="top: 0px; height: 60px"
    >
      <div
        class="container clearfix et_menu_container et_pb_no_animation"
        :class="isShow ? 'et_pb_menu_hidden' : 'et_pb_menu_visible '"
        style="display: flex; justify-content: space-between"
      >
        <div class="logo_container">
          <span class="logo_helper"></span>
          <img
            src="../../../public/images/logo.jpg"
            alt="圭亚那荣安公司"
            id="logo"
            data-height-percentage="54"
            data-actual-width="0"
            data-actual-height="0"
            class="imagestyle1"
          />
        </div>
        <div id="et-top-navigation" data-height="66" data-fixed-height="40">
          <nav id="top-menu-nav">
            <ul id="top-menu" class="nav">
              <li
                id="menu-item-370"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-365 current_page_item menu-item-370"
              >
                <a
                  :class="isHome ? 'select' : 'noselect'"
                  aria-current="page"
                  @click="goIndexPage()"
                  >首页</a
                >
              </li>
              <li
                id="menu-item-97"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-97"
              >
                <a
                  :class="isAbout ? 'select' : 'noselect'"
                  @click="goGuanyuPage()"
                  >关于我们</a
                >
              </li>
              <li
                id="menu-item-96"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-96"
              >
                <a
                  :class="isGuiyana ? 'select' : 'noselect'"
                  @click="goGynPage()"
                  >圭亚那概况</a
                >
              </li>
              <li
                id="menu-item-95"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95"
              >
                <a
                  :class="isProject ? 'select' : 'noselect'"
                  @click="goXiangmuPage()"
                  >项目介绍</a
                >
              </li>
              <li
                id="menu-item-553"
                class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-553"
              >
                <a :class="isNews ? 'select' : 'noselect'" @click="goNewsPage()"
                  >新闻中心</a
                >
              </li>
              <li
                id="menu-item-94"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-94"
              >
                <a
                  :class="isPlatform ? 'select' : 'noselect'"
                  @click="goJiaoyiPage()"
                  >全球森林交易平台</a
                >
              </li>
              <li
                id="menu-item-93"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-93"
              >
                <a
                  :class="isContact ? 'select' : 'noselect'"
                  @click="goLianxiPage()"
                  >联系我们</a
                >
              </li>
              <li
                id="menu-item-92-zh"
                class="lang-item lang-item-2 lang-item-zh current-lang lang-item-first menu-item menu-item-type-custom menu-item-object-custom current_page_item menu-item-home menu-item-92-zh"
              >
                <a
                  href=""
                  hreflang="zh-CN"
                  lang="zh-CN"
                  @click="goisEnlishPage(1)"
                  ><img
                    src="@/public/images/zhongwen.png"
                    title="中文 (中国)"
                    alt="中文 (中国)"
                    width="16"
                    height="11"
                    style="width: 16px; height: 11px"
                /></a>
              </li>
              <li
                id="menu-item-92-en"
                class="lang-item lang-item-20 lang-item-en menu-item menu-item-type-custom menu-item-object-custom menu-item-92-en"
              >
                <a
                  href=""
                  @click="goisEnlishPage(2)"
                  hreflang="en-US"
                  lang="en-US"
                  ><img
                    src="@/public/images/yingyu.png"
                    title="English"
                    alt="English"
                    width="16"
                    height="11"
                    style="width: 16px; height: 11px"
                /></a>
              </li>
            </ul>
          </nav>

          <div id="et_top_search">
            <span id="et_search_icon" @click="searchClick()"></span>
          </div>
        </div>
      </div>
      <div class="et_search_outer">
        <div
          class="container et_search_form_container et_pb_no_animation"
          :class="isShow ? 'et_pb_search_visible' : 'et_pb_search_form_hidden'"
          style="height: 60px"
        >
          <form
            role="search"
            method="get"
            class="et-search-form"
            action="https://rooan.cn/"
            style="max-width: 735px; height: 60px"
          >
            <input
              type="search"
              class="et-search-field"
              placeholder="搜索 …"
              value=""
              name="s"
              title="搜索："
              style="font-size: 14px"
            />
          </form>
          <span class="et_close_search_field" @click="CloseClick()"></span>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      isHome: true,
      isAbout: false,
      isGuiyana: false,
      isProject: false,
      isNews: false,
      isPlatform: false,
      isContact: false,
    };
  },
  mounted() {
    var data2 = localStorage.getItem("shuju");
    if (data2) {
      switch (data2) {
        case "this.isHome":
          this.Clearn();
          this.isHome = true;
          break;
        case "this.isAbout":
          this.Clearn();
          this.isAbout = true;
          break;
        case "this.isGuiyana":
          this.Clearn();
          this.isGuiyana = true;
          break;
        case "this.isProject":
          this.Clearn();
          this.isProject = true;
          break;
        case "this.isNews":
          this.Clearn();
          this.isNews = true;
          break;
        case "this.isPlatform":
          this.Clearn();
          this.isPlatform = true;
          break;
        case "this.isContact":
          this.Clearn();
          this.isContact = true;
          break;
        default:
          break;
      }
    }
  },
  methods: {
    // 初始化
    Clearn: function () {
      this.isHome = false;
      this.isAbout = false;
      this.isGuiyana = false;
      this.isProject = false;
      this.isNews = false;
      this.isPlatform = false;
      this.isContact = false;
    },
    // 打开搜索框
    searchClick: function () {
      this.isShow = true;
    },

    // 关闭搜索框
    CloseClick: function () {
      this.isShow = false;
    },
    // 跳转到关于我们页面
    goGuanyuPage: function () {
      this.Clearn();
      this.isAbout = true;
      console.log("isAbout", "this.isAbout");
      localStorage.setItem("shuju", "this.isAbout");
      var aa = Math.round(Math.random() * 100);
      var bb = Math.round(Math.random() * 50);
      this.$router.push({ name: "GuanyuPage" });
    },

    // 跳转到首页页面
    goIndexPage: function () {
      this.Clearn();
      this.isHome = true;
      localStorage.setItem("shuju", "this.isHome");
      this.$router.push({
        name: "IndexPage",
      });
    },

    // 跳转到新闻页面
    goNewsPage: function () {
      this.Clearn();
      this.isNews = true;
      localStorage.setItem("shuju", "this.isNews");
      this.$router.push({
        name: "NewsPage",
      });
    },

    // 跳转到联系我们页面
    goLianxiPage: function () {
      this.Clearn();
      this.isContact = true;
      localStorage.setItem("shuju", "this.isContact");
      this.$router.push({
        name: "LianxiPage",
      });
    },
    // 跳转到圭亚那页面
    goGynPage: function () {
      this.Clearn();
      this.isGuiyana = true;
      localStorage.setItem("shuju", "this.isGuiyana");
      this.$router.push({
        name: "GynPage",
      });
    },

    // 跳转到项目页面
    goXiangmuPage: function () {
      this.Clearn();
      this.isProject = true;
      localStorage.setItem("shuju", "this.isProject");
      this.$router.push({
        name: "XiangmuPage",
      });
    },

    // 跳转到交易平台页面
    goJiaoyiPage: function () {
      this.Clearn();
      this.isPlatform = true;
      localStorage.setItem("shuju", "this.isPlatform");
      this.$router.push({
        name: "JiaoyiPage",
      });
    },
    goisEnlishPage: function (text) {
      switch (text) {
        case 1:
          localStorage.setItem("isEnlish", "false");
          this.$router.go(0);
          break;
        case 2:
          localStorage.setItem("isEnlish", "true");
          this.$router.go(0);
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style>
.imagestyle1 {
  width: 60%;
  height: 100%;
}

.container1 {
  width: 95% !important;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 10px !important;
}
.logo_container {
  width: 40% !important;
  height: 100% !important;
}
#et-top-navigation {
  padding-top: 20px !important;
}
</style>  