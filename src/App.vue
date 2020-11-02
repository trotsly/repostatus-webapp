<template>
  <div id="app">
    <Navbar />
    <router-view />
    <vue-progress-bar />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
  watch: {
    $route(to) {
      document.title = `${to.name} | repostatus` || "repostatus";
    }
  }
};
</script>

<style lang="scss">
#app {
  @extend .rubik;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
