import Vue from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";
axios.defaults.withCredentials = true;
import routes from "./routes";
import VueRouter from "vue-router";
// import { VueCookies } from "vue-cookies";
// Vue.use(VueCookies);
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

import Vuelidate from "vuelidate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  ModalPlugin,
  FormCheckboxPlugin,
  FormTextareaPlugin,
} from "bootstrap-vue";
[
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  ModalPlugin,
  FormCheckboxPlugin,
  FormTextareaPlugin,
].forEach((x) => Vue.use(x));
Vue.use(Vuelidate);

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const shared_data = {
<<<<<<< HEAD
  // server_domain: "http://localhost:3000",
  server_domain: "https://ronadav.cs.bgu.ac.il",
=======
  // server_domain: "https://yumtum.cs.bgu.ac.il",
  server_domain: "http://localhost:3000",
>>>>>>> c414e86115dd7218217d03aad816b5bdc44f6594
  lastSearch: localStorage.lastSearch,
  username: localStorage.username,
  async login(username) {
    localStorage.setItem("username", username);
    this.username = username;
    console.log("login", this.username);
    localStorage.setItem("lastSearch", "no last search");
    this.lastSearch = "no last search";
    try {
      await fetch(`${this.server_domain}/setUsername`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });
    } catch (error) {
      console.error("Error occurred while setting username:", error);
      // Handle the error appropriately, such as displaying an error message to the user
    }
    
  },
  logout() {
    console.log("logout");
    localStorage.removeItem("username");
    this.username = undefined;
    localStorage.removeItem("lastSearch");
    this.lastSearch = "no last search";
  },
};
console.log(shared_data);
// Vue.prototype.$root.store = shared_data;

new Vue({
  router,
  data() {
    return {
      store: shared_data,
    };
  },
  methods: {
    toast(title, content, variant = null, append = false) {
      this.$bvToast.toast(`${content}`, {
        title: `${title}`,
        toaster: "b-toaster-top-center",
        variant: variant,
        solid: true,
        appendToast: append,
        autoHideDelay: 3000,
      });
    },
  },
  render: (h) => h(App),
}).$mount("#app");