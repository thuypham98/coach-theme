<template>
  <div>
    <Banner />
    <Slider />
    <div class="py-5"></div>

    <div class="content">
        <ThemeCategory />
    </div>
    <div class="py-5"></div>

    <Slider />
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Slider from "@/components/Slider";
import ThemeCategory from "@/components/ThemeCategory";

export default {
  name: "Home",
  components: {
    Banner,
    Slider,
    ThemeCategory
  },
};
</script>

<style>
</style>