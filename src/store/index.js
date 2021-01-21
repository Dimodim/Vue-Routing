import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const apiKey = "apiKey=5e57de6efafe48fc84b0b79751d9a757";
const prefix = "https://api.spoonacular.com/";

export default new Vuex.Store({
  state: {
    recipes: []
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
