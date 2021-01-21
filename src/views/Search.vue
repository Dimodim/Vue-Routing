<template>
  <div>
    <input v-model="searchField" type="text" placeholder="Search" />
    <button class="btn btn-primary" @click.prevent="getRecipesByName()">
      Search
    </button>
    <ul class="container">
      <recipes
        v-for="recipe in recipes"
        :key="recipe.id"
        class="card"
        :recipe="recipe"
      ></recipes>
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

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  margin: 3px;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  padding: 20px 0 0 20px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
