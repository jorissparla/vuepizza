import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userName: ""
  },
  mutations: {
    loginUser(state, name) {
      console.log(name);
      state.userName = name;
      localStorage.setItem("s_20", name);
    },
    logoutUser(state) {
      state.userName = "";
      router.push("login");
      localStorage.setItem("s_20", "");
    }
  },
  getters: {
    user(state) {
      return localStorage.getItem("s_20") || state.userName;
    }
  }
});
export default store;
