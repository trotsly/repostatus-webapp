<template>
  <div id="header">
    <div class="container col-lg-8 col-md-9 col-sm-7 py-5">
      <h1>Happiness Status of your Repository</h1>
      <p class="mt-5 font-sm">
        Run a sentiment analysis engine on various parts of your repo.
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
}
p {
  color: $dark;
}
</style>
