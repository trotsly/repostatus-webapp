<template>
  <div class="home">
    <Header />
    <InputRepo />
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
  }
};
</script>
