<template>
  <div class="status">
    <RepoName />
    <Happiness />
  </div>
</template>

<script>
import RepoName from "@/components/RepoName";
import Happiness from "@/components/Happiness";

export default {
  name: "Status",
  components: {
    RepoName,
    Happiness
  }
};
</script>

<style lang="scss" scoped>
.status {
  @media only screen and (min-width: $mobile-breakpoint) {
    max-width: 65%;
    margin: 0 auto;
    padding-top: 3em;
  }
}
</style>
