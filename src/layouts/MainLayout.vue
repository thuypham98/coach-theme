<template>
  <div class="main">
    <Header />
    <div class="dynamic__view">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "MainLayout",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>