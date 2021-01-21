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
    // setCurrentJoke(state, payload) {
    //   state.currentJoke = payload;
    //   state.allJokes.push(payload);
    // }
    setRecipes(state, payload) {
      state.recipes = payload;
    }
  },
  actions: {
    // async setCurrentJoke(state) {
    //   const joke = await fetch(url, { headers });
    //   const jokeJson = await joke.json();
    //   state.commit("setCurrentJoke", jokeJson.joke); // we use commit when we want to change a mutation and dispatch when we want to change an action
    // }
    setRecipes(state) {
      axios.get(`${prefix}recipes/complexSearch?${apiKey}`).then(r => {
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
