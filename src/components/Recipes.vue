<template>
  <div>
    <h3 class="recipe-name">{{ recipe.title }}</h3>
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

<style scoped>
.recipe-img {
  max-width: 210px;
  min-height: 150px;
}
</style>
