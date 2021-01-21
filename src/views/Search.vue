<template>
  <div>
    <input type="text" :placeholder="searchField" />
    <ul v-for="recipe in recipes" :key="recipe.id">
      <recipes :recipe="recipe"></recipes>
      <button @click.prevent=""></button>
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
    ...mapActions(["setRecipes"]),
    getRecipes() {
      this.setRecipes();
    }
  }
};
</script>

<style scoped></style>
