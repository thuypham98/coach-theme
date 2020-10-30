<template>
  <div>
    <div
      class="container px-5"
      v-for="category in categoryList"
      :key="category.CategoryId"
    >
      <div class="row mb-5">
        <div class="col">
          <h2>
            <b>{{ category.Name }}</b>
          </h2>
          <p>{{ category.Description }}</p>
        </div>
      </div>
      <div class="row">
        <Theme v-for="theme in category.Themes" :key="theme.ThemeId" :themeProps="theme" />
      </div>
    </div>
  </div>
</template>

<script>
import themeData from "@/data/db.json";
import Theme from "@/components/Theme";

export default {
  name: "ThemeCategory",
  components: {
    Theme,
  },
  data() {
    return {
      categoryList: themeData.Category
    };
  },
};
</script>

<style>
</style>