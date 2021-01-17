<template>
  <div>
    <mindexview v-show="ismorpc"></mindexview>
    <div  v-show="!ismorpc">
      {{isEnlish}}
    <pindexview  v-show="isEnlish"></pindexview>
    <pcenindex v-show="!isEnlish"></pcenindex>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ismorpc: false,
      isEnlish:false,
    };
  },
  mounted() {
    this.isEnlish = localStorage.getItem('isEnlish');
    console.log("this.isEnlish",this.isEnlish)
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