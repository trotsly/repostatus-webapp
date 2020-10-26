<template>
  <div class="home">
    <Header />
    <InputRepo />
  </div>
</template>

<script>
import Header from "@/components/Header";
import InputRepo from "@/components/InputRepo";

export default {
  name: "Home",
  components: {
    Header,
    InputRepo
  }
};
</script>
