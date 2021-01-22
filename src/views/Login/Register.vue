<template>
  <div>
    <h1>Register</h1>
    <div>
      <form @submit.prevent="onClick()">
        <div class="email">
          <input v-model="email" type="text" placeholder="email" />
        </div>
        <div class="pasword">
          <input v-model="password" type="password" placeholder="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
</template>

<script>
import firebase from "firebase/app";
require("firebase/auth");
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {
    async onClick() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user);
        this.$router.replace({ name: "Secret" });
      } catch (error) {
        this.errorMessage = error;
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 17px;
}

input {
  width: 400x;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}

button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
</style>
