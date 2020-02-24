import Vue from "vue";
import VueRouter from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import LoginForm from "./components/LoginForm.vue";
import About from "./components/About.vue";
import Pizzas from "./components/Pizzas.vue";
Vue.use(VueRouter);

const routes = [
  { name: "home", path: "/", component: Pizzas },
  { name: "login", path: "/login", component: LoginForm },
  { name: "about", path: "/about", component: About }
];

export default new VueRouter({ mode: "history", routes });
