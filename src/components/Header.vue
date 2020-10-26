<template>
  <div id="header">
    <div class="container col-lg-8 col-md-9 col-sm-7 py-5">
      <h1>Happiness Status of your Repository</h1>
      <p class="mt-5 font-sm">
        Run a sentiment analysis engine on your GitHub repository.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
h1 {
  color: $black;
  font-weight: 600;
  font-size: 3.2em;

  @media only screen and (max-width: $mobile-breakpoint) {
    font-size: 2.8em;
  }
}
p {
  color: $dark;
}
</style>
