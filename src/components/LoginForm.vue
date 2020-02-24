<template>
  <div class="max-w-sm  h-full flex flex-col items-start p-4 ">
    <div class="rounded-sm shadow-lg h-full border bg-white p-4 items-center flex flex-col ">
      <img
        class="bg-cover "
        src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        alt="nocdf"
      />
      <h2 class="text-blue-700 font-pop text-4xl uppercase leading-5 tracking-wide mt-4">Login {{ name }}</h2>
      <div class="mt-6 flex font-display flex-col items-center w-full">
        <input v-model="email" placeholder="email address" type="email" name="emailadres" class="w-full border text-gray-600 p-2" />
        <input v-model="password" placeholder="password" type="password" class="w-full border text-gray-600 p-2" />
      </div>
      <button class="w-full bg-gray-700 text-gray-100 mt-4 p-2 rounded-md font-pop hover:bg-gray-600" v-on:click="handleLogin">Login</button>
      <div class="w-full text-gray-700 mt-2 flex flex-col items-center">
        <a class="text-center font-pop underline" href="">Forgot password</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  props: ["name"],
  data: function() {
    return {
      email: "joris.sparla@gmail.com",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      console.log(this.email);
      //   console.log(this.$store);
      this.$store.commit("loginUser", this.email);
      console.log(this.$store.getters.user);
    }
  }
};
</script>
