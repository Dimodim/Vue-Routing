import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import firebase from "firebase/app";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA1cEdBc3TL4fFb27b3R7gJXPsdwDXV7p0",
  authDomain: "vue-firebase-auth-124e7.firebaseapp.com",
  projectId: "vue-firebase-auth-124e7",
  storageBucket: "vue-firebase-auth-124e7.appspot.com",
  messagingSenderId: "714271383309",
  appId: "1:714271383309:web:804cb9bd87cc5551e6da44"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
