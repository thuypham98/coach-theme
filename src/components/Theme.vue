<template>
  <div class="col-12 col-md-6 col-lg-6">
    <div
      class="card shadow mb-5 hover--effect"
    >
      <!-- src="../assets/images/course-img-2.png"
             :src="require('@/assets/images/' + theme.Avatar)" -->
      <img :src="getImgUlr(themeProps.Avatar)" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5>{{ themeProps.Name }}</h5>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Theme",
  props: ["themeProps"],
  
  methods: {
    getImgUlr(image) {
      return require("@/assets/images/" + image);
    },
  },
  created(){
    console.log('prop theme',this.themeProps);
  }
};
</script>

<style>
</style>