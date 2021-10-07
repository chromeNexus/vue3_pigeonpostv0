<template>
  <router-view />
</template>

<script>
import store from "./store";
import { provide } from "vue";
// import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  // components: { NavBar },
  setup() {
    provide("store", store);
    return {
      store,
      // NavBar,
    };
  },
};
</script>
