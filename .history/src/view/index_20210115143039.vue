<template>
  <div>
    <div v-show="ismorpc">
      <mindexview v-show="isEnlish == 'false'"></mindexview>
      <menindexview v-show="isEnlish == 'true'"></menindexview>
    </div>
    <div v-show="!ismorpc">
      <pindexview v-show="isEnlish == 'false'"></pindexview>
      <pcenindex v-show="isEnlish === 'true'"></pcenindex>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ismorpc: false,
      isEnlish: "false",
    };
  },
  mounted() {
    var isEnlish = localStorage.getItem("isEnlish");
    if (isEnlish === null) {
      this.isEnlish = "false";
    } else {
      this.isEnlish = isEnlish;
    }
    console.log("this.isEnlish", this.isEnlish);
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