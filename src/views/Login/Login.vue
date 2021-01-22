<template>
  <div>
    <h1>Login</h1>
    <div>
      <input type="text" />
      <input type="password" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped>
.error {
  color: red;
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
