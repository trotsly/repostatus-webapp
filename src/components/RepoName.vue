<template>
  <div id="repo-name">
    <p class="repo-text">
      <span class="user">deepjyoti30</span>
      <span class="seperator">/</span>
      <span class="repo">simber</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "RepoName"
};
</script>

<style lang="scss" scoped>
#repo-name {
  padding: 0.5em 1em;
  .repo-text {
    font-size: 3.5em;
    text-align: left;
    color: $ming;
    font-weight: 300;

    .seperator {
      margin: 0 0.2em;
    }
  }
}
</style>
