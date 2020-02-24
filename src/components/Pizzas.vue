<template>
  <div class="flex w-full h-full bg-gray-200 flex-wrap">
    <div class="flex w-2/3 border border-gray-600 flex-wrap">
      <pizza v-for="pizza in allPizzas" :pizza="pizza" :key="pizza.id"></pizza>
    </div>
    <div class="flex w-1/3 border border-gray-600">
      <div class="h64 w-full m-2 bg-white border rounded-lg shadow-xl font-display text-4xl">Menu</div>
    </div>
  </div>
</template>

<script>
import Pizza from "./Pizza.vue";
export default {
  name: "Pizzas",
  data() {
    return {
      allPizzas: [
        {
          id: 1,
          name: "Pizza Shoarma",
          imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
          price: 5.5,
          category: "Meatlovers",
          rating: 3,
          reviews: 22
        },
        {
          id: 2,
          name: "Pizza Veggie",
          imageUrl: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          price: 8.0,
          category: "Vegan",
          rating: 1,
          reviews: 22
        },
        {
          id: 3,
          name: "Pizza Margarita",
          imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
          price: 2.5,
          category: "Classic",
          rating: 4,
          reviews: 222
        },
        {
          id: 4,
          name: "Pizza Shoarma",
          imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
          price: 3.5,
          category: "Meatlovers",
          rating: 4,
          reviews: 222
        }
      ]
    };
  },
  components: {
    Pizza
    // HelloWorld,
  }
};
</script>

<style></style>
