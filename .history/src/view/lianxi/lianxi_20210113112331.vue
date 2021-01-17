<template>
  <div>
    <mlianxiview v-show="ismorpc"></mlianxiview>
    <div v-show="!ismorpc">
      <plianxiview v-show="isEnlish === false"></plianxiview>
      <pcencontactview v-show="isEnlish === true"></pcencontactview>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ismorpc: false,
      isEnlish: false,
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