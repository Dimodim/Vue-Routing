<template>
  <div>
    <div class="recipe-name">{{ recipe.title }}</div>
    <img class="recipe-img" :src="recipe.image" />
  </div>
</template>

<script>
export default {
  name: "Recipes",
  props: {
    recipe: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped></style>
