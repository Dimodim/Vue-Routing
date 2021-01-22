<template>
  <div id="app">
    <logged-in-header></logged-in-header>
    <div id="nav">
      <router-link :to="{ name: 'Profile' }">Profile</router-link> |
      <router-link :to="{ name: 'Search' }">Search</router-link> |
      <router-link :to="{ name: 'Register' }">Register</router-link> |
      <router-link :to="{ name: 'Secret' }">Secret</router-link> |
    </div>
    <router-view />
  </div>
</template>
<script>
import LoggedInHeader from "@/components/LoggedInHeader";
window.axios = require("axios");
export default {
  components: {
    LoggedInHeader
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
