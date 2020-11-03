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
  },
  head: {
    title: {
      inner:
        "Repostatus | Get Happiness status of your repos using a sentiment analysis engine"
    },
    meta: [
      { name: "application-name", content: "Repostatus" },
      {
        name: "description",
        content:
          "Get Happiness status of your repos using a sentiment analysis engine",
        id: "desc"
      },
      { name: "robots", content: "index,follow" },
      {
        name: "keywords",
        content:
          "repostatus,happiness,status,repo,github,public,private,sentiment,analysist,repository,ytmdl,deepjyoti30,trotsly,free,ad-free,no-ads"
      },
      // Itemprop
      {
        itemprop: "name",
        content:
          "Repostatus | Get Happiness status of your repos using a sentiment analysis engine"
      },
      {
        itemprop: "description",
        content:
          "Get Happiness status of your repos using a sentiment analysis engine"
      },
      // Twitter stuff
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Repostatus | Get Happiness status of your repos"
      },
      {
        name: "twitter:description",
        content:
          "Get Happiness status of your repos using a sentiment analysis engine"
      },
      { name: "twitter:url", content: "https://repostatus.deepjyoti30.dev/" },
      { name: "twitter:creator", content: "@DeepBarman30" },
      {
        name: "twitter:image",
        content: "https://repostatus.deepjyoti30.dev/img/logo_large.png"
      },
      // Facebook
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Repostatus | Get Happiness status of your repos"
      },
      { property: "og:url", content: "https://repostatus.deepjyoti30.dev/" },
      {
        p: "og:description",
        c:
          "Get Happiness status of your repos using a sentiment analysis engine"
      },
      {
        p: "og:image",
        c: "https://repostatus.deepjyoti30.dev/img/logo_large.png"
      },
      { p: "og:image:type", c: "image/png" },
      { p: "og:image:width", c: "512" },
      { p: "og:image:height", c: "512" }
    ]
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
