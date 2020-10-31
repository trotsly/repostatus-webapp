<template>
  <div class="home">
    <Header />
    <InputRepo @repo="parseRepo" />
    <Features />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import InputRepo from "@/components/InputRepo";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    InputRepo,
    Features,
    Footer
  },
  methods: {
    parseRepo: function(repoObject) {
      /**
       * Parse the repo emitted by the InputRepo component.
       *
       * We need to store the repo in session storage and
       * change the route to the status view.
       */
      sessionStorage.setItem("stateRepo", repoObject);
      this.$router.push({ path: "/status" });
    }
  }
};
</script>
