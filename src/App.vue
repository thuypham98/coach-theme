<template>
  <div id="app">
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
  </div>
</template>

<script>


export default {
  name: "App",
  components: {
    
  },
};

window.onscroll = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementsByClassName("header")[0].style.backgroundColor =
      "#261f44";
  } else {
    document.getElementsByClassName("header")[0].style.backgroundColor =
      "transparent";
  }
};
// $('.carousel').carousel({ interval: 500 });
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
