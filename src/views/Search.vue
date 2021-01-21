<template>
  <div>
    <input type="text" />
    <ul v-for="recipe in recipes" :key="recipe.id">
      <recipes :recipe="recipe"></recipes>
    </ul>
  </div>
</template>

<script>
import Recipes from "@/components/Recipes";
export default {
  name: "Search",
  components: {
    Recipes
  },
  computed:{
      
  }
};
</script>

<style scoped></style>
