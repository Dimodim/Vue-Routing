<template>
  <div>
    <input v-model="searchField" type="text" placeholder="Search" />
    <button @click.prevent="getRecipesByName()"></button>
    <ul v-for="recipe in recipes" :key="recipe.id">
      <recipes :recipe="recipe"></recipes>
    </ul>
  </div>
</template>

<script>
import Recipes from "@/components/Recipes";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Search",
  components: {
    Recipes
  },
  data() {
    return {
      searchField: "",
      filters: ""
    };
  },
  computed: {
    ...mapGetters({
      recipes: "getRecipes"
    })
  },
  mounted() {
    this.setRecipes();
  },
  methods: {
    ...mapActions(["setRecipes", "setRecipesByName"]),
    getRecipes() {
      this.setRecipes();
    },
    getRecipesByName() {
      this.setRecipesByName(this.searchField);
    }
  }
};
</script>

<style scoped></style>
