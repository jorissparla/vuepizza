<template>
  <div class="bg-white flex w-64  flex-col m-2 justify-start border shadow-xl hover:shadow-2xl">
    <!-- <div class="w-full mr-2 h-48 object-fit max-h bg-blue-100" :style="imageBg"> -->
    <div
      class="w-full mr-2 h-48 object-fit max-h bg-blue-100"
      style="background-image: url(https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)"
    >
      <div class="mt-4 ml-2 flex justify-between">
        <span class="mt-2 py-2 px-1 leading-3 tracking-wider bg-gray-900 rounded-md text-white font-pop">{{ pizza.category }}</span>
        <svg class=" mr-2 h-6 w-6 text-transparent fill-current border-black text-red-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
        </svg>
      </div>
      <!-- <img
        class="w-full mr-2 h-48 object-cover max-h"
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt=""
      /> -->
    </div>
    <div class="px-2  w-full flex justify-between items-center font-pop font-semibold">
      <span>{{ pizza.name }}</span>
      <span class="font-bold text-2xl">€ {{ pizza.price.toFixed(2) }}</span>
    </div>
    <div class="w-full h-3 bg-blue-800 border"></div>
    <div class="mt-2 flex items-center mb-2">
      <svg v-for="i in 5" :key="i" viewBox="0 0 24 24" :class="i <= pizza.rating ? 'text-teal-500' : 'text-gray-400'" class="h-4 w-4 fill-current">
        <path
          d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
        />
      </svg>
      <span class="ml-2 text-gray-600 text-sm">{{ pizza.reviews }} reviews </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pizza"],
  computed: {
    imageBg() {
      return { backgroundImage: `url(" + ${this.pizza.imageUrl} + ") ` };
    }
  }
};
</script>

<style></style>
