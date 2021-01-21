import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    // setCurrentJoke(state, payload) {
    //   state.currentJoke = payload;
    //   state.allJokes.push(payload);
    // }
  },
  actions: {
    // async setCurrentJoke(state) {
    //   const joke = await fetch(url, { headers });
    //   const jokeJson = await joke.json();
    //   state.commit("setCurrentJoke", jokeJson.joke); // we use commit when we want to change a mutation and dispatch when we want to change an action
    // }
  },
  modules: {},
  getters: {
    // getCount(state){
    //   return state.count;
    // }
  }
});
