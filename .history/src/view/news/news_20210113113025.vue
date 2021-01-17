<template>
  <div>
    <mnewsview v-show="ismorpc === false"></mnewsview>
    <pnewsview v-show="ismorpc === true"></pnewsview>
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
    var isEnlish = localStorage.getItem("isEnlish");
    if (isEnlish === null) {
      this.isEnlish = false
    }
    else{
      this.isEnlish = isEnlish
    }
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