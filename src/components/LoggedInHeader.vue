<template>
  <div>
    <div>Loged in</div>
    <span>{{ loggedIn }}</span>
    <button v-if="loggedIn" @click="signOut()">SignOut</button>
  </div>
</template>

<script>
import firebase from "firebase/app";
require("firebase/auth");
export default {
  data() {
    return {
      loggedIn: false
    };
  },
  created() {
    //   firebase.auth().onAuthStateChanged(user => {
    //       loggedIn = user;
    //   })
  },
  methods: {
    async signOut() {
      try {
        const data = firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "Login" });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped></style>
