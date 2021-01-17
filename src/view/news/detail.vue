<template>
  <div>
    <mdetailview v-show="ismorpc"></mdetailview>
    <pdetailview v-show="!ismorpc"></pdetailview>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ismorpc: false,
    };
  },
  mounted() {
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