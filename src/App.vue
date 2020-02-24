<template>
  <div class="font-serif  h-full min-h-screen flex flex-col items-center bg-gray-100">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import AppHeader from "./components/Header";

export default {
  name: "App",
  data: () => ({
    name: "Joris",
    post: {
      id: 1,
      title: "My Journey with Vue"
    }
  }),
  components: {
    AppHeader
    // HelloWorld,
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
  margin-top: 60px;
}
</style>
