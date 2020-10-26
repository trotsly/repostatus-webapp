<template>
  <div id="input-repo">
    <div class="d-flex justify-content-center py-5 mt-3">
      <div class="py-5 repo-chooser"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputRepo"
};
</script>

<style lang="scss" scoped>
.repo-chooser {
  @extend .rounded-cust-sm;
  @extend .shadow-lg-green;

  width: 350px;
  background: $green;
  cursor: pointer;
  color: $black;
}
</style>
