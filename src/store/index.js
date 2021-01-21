import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const apiKey = "apiKey=5e57de6efafe48fc84b0b79751d9a757";
const prefix = "https://api.spoonacular.com/";

export default new Vuex.Store({
  state: {
    recipes: [
      {
        id: 654959,
        title: "Pasta With Tuna",
        image: "https://spoonacular.com/recipeImages/654959-312x231.jpg",
        imageType: "jpg"
      },
      {
        id: 511728,
        title: "Pasta Margherita",
        image: "https://spoonacular.com/recipeImages/511728-312x231.jpg",
        imageType: "jpg"
      },
      {
        id: 654812,
        title: "Pasta and Seafood",
        image: "https://spoonacular.com/recipeImages/654812-312x231.jpg",
        imageType: "jpg"
      },
      {
        id: 654857,
        title: "Pasta On The Border",
        image: "https://spoonacular.com/recipeImages/654857-312x231.jpg",
        imageType: "jpg"
      },
      {
        id: 654883,
        title: "Pasta Vegetable Soup",
        image: "https://spoonacular.com/recipeImages/654883-312x231.jpg",
        imageType: "jpg"
      },
      {
        id: 654928,
        title: "Pasta With Italian Sausage",
        image: "https://spoonacular.com/recipeImages/654928-312x231.jpg",
        imageType: "jpg"
      },
      {
        id: 654926,
        title: "Pasta With Gorgonzola Sauce",
        image: "https://spoonacular.com/recipeImages/654926-312x231.jpg",
        imageType: "jpg"
      },
      {
        id: 654944,
        title: "Pasta With Salmon Cream Sauce",
        image: "https://spoonacular.com/recipeImages/654944-312x231.jpg",
        imageType: "jpg"
      },
      {
        id: 654905,
        title: "Pasta With Chickpeas and Kale",
        image: "https://spoonacular.com/recipeImages/654905-312x231.jpg",
        imageType: "jpg"
      },
      {
        id: 654901,
        title: "Pasta With Chicken and Broccoli",
        image: "https://spoonacular.com/recipeImages/654901-312x231.jpg",
        imageType: "jpg"
      }
    ]
  },
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    }
  },
  actions: {
    setRecipes(state) {
      axios.get(`${prefix}recipes/complexSearch?${apiKey}`).then(r => {
        state.commit("setRecipes", r.data.results);
      });
    },
    setRecipesByName(state, payload) {
      axios
        .get(`${prefix}recipes/complexSearch?query=${payload}&${apiKey}`)
        .then(r => {
          state.commit("setRecipes", r.data.results);
        });
    }
  },
  modules: {},
  getters: {
    getRecipes(state) {
      return state.recipes;
    }
  }
});
