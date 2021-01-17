<template>
  <div>
    <mxiangmuview v-show="ismorpc"></mxiangmuview>
    <div v-show="!ismorpc">
      <pxiangmuview v-show="isEnlish"></pxiangmuview>
      <pcenprojectview v-show="!isEnlish"></pcenprojectview>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ismorpc: false,
    };
  },
  // beforeCreate() {
  //   console.log(this.isMobile());
  //   if (this.isMobile()) {
  //     this.ismorpc = true;
  //   } else {
  //     this.ismorpc = false;
  //   }
  // },
  // created() {
  //   console.log(this.isMobile());
  //   if (this.isMobile()) {
  //     this.ismorpc = true;
  //   } else {
  //     this.ismorpc = false;
  //   }
  // },
  mounted() {
    this.isEnlish = localStorage.getItem("isEnlish");
    console.log(this.isMobile());
    if (this.isMobile()) {
      this.ismorpc = true;
    } else {
      this.ismorpc = false;
    }
  },
  methods: {
    //判断
    isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
  },
};
</script>

<style>
</style>