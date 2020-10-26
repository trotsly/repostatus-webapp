<template>
  <div class="home">
    <Header />
    <InputRepo />
    <Features />
  </div>
</template>

<script>
import Header from "@/components/Header";
import InputRepo from "@/components/InputRepo";
import Features from "@/components/Features";

export default {
  name: "Home",
  components: {
    Header,
    InputRepo,
    Features
  }
};
</script>
