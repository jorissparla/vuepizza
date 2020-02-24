<template>
  <header
    class="lg:px-16 px-6 bg-purp text-white flex flex-wrap items-center lg:py-0 py-2 static w-full shadow-lg border flex-col justify-end items-end"
  >
    <div class="flex  w-full flex-col justify-end items-end align-bottom" id="menu">
      <ul class="lg:flex w-full flex items-center font-pop w-full justify-between justify-between text-white pt-4 lg:pt-0">
        <li v-on:click="goHome" class="cursor-pointer text-white text-4xl">Home</li>
        <li>
          <a href="" class="lg:p-4 py-3 block border-b-2 border-transparent text-white hover:border-indigo-500">
            About
          </a>
        </li>
        <li>
          <a href="" class="lg:p-4 py-3 block border-b-2 border-transparent text-white  hover:border-indigo-500">
            {{ user }}
          </a>
        </li>
        <li :class="{ hidden: !user }" class="cursor-pointer">
          <img
            v-on:click="handleLogout"
            class="h-16 border w-16 object-cover rounded-full shadow-lg"
            src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
            alt="loginpic"
          />
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    handleLogout() {
      console.log("hanldeLo");
      this.$store.commit("logoutUser");
    },
    goHome() {
      console.log("Going Home");
      this.$router.push({ path: "/" });
    }
  },
  data() {
    return {
      username: this.$store.getters.user
    };
  }
};
</script>

<style></style>
