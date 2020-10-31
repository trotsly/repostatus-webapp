<template>
  <div class="status">
    <RepoName />
    <Happiness />
    <Footer />
  </div>
</template>

<script>
import RepoName from "@/components/RepoName";
import Happiness from "@/components/Happiness";
import Footer from "@/components/Footer";

export default {
  name: "Status",
  components: {
    RepoName,
    Happiness,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.status {
  @media only screen and (min-width: $mobile-breakpoint) {
    max-width: 65%;
    margin: 0 auto;
    padding-top: 2em;
  }
}
</style>
