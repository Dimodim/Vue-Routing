<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <h1>{{ joke }}</h1>
      <button class="but btn-primary" @click="addJoke()">add joke</button>
    </div>
    <div class="list">
      <ul>
        <li v-for="item in jokeList" :key="item.message">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
.list {
  border: 1rem;
  border-color: brown;
}
</style>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  components: {},
  computed: {
    ...mapGetters({
      joke: "getCurrentJoke",
      jokeList: "getAllJokes"
    })
  },
  methods: {
    ...mapActions(["setCurrentJoke"]),
    addJoke() {
      this.setCurrentJoke();
    }
  }
};
</script>
