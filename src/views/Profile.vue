<template>
  <div>
    <h3>Profile{{ $route.params.id }}</h3>
    <router-link :to="{ name: 'ProfileWithId', params: { id: '4321' } }">
      Profile with ID</router-link
    >
    <br />
    <router-link :to="{ name: 'Info', params: { id: '4321' } }">
      Profile Info</router-link
    >
    <br />
    <router-link
      :to="{
        name: 'ProfileWithId',
        params: { id: '4321' },
        query: { profile: 'private' }
      }"
    >
      Profile with query params</router-link
    >
    <br />
    <h1>{{ fullname }}</h1>
    <input type="text" v-model.lazy="user.firstName" />
    <h1>{{ user.firstName }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      user: {
        firstName: "Peter",
        fathersName: "Angleov",
        surname: "Damqnov"
      }
    };
  },
  mounted() {
    console.log(this.$route.params.id);
  },
  computed: {
    //the computed property automatically updates when the propertyes it deppends on are changed
    fullname: function() {
      return [
        this.user.firstName,
        this.user.fathersName,
        this.user.surname
      ].join(" ");
    }
  },

  watch: {
    //watchers are called observables
    $route(to, from) {
      console.log("to:", to);
      console.log("from:", from);
    },
    fullname() {
      alert("user details have been changed");
    },
    "user.firstName": function(newVal, oldVal) {
      //to work with changes in prop
      console.log(`the new value is ${newVal} and the old one is ${oldVal}`);
    }
  }
};
</script>

<style lang="scss" scoped></style>
