<template>
  <div id="list-repo"></div>
</template>

<script>
export default {
  name: "ListRepo",
  props: {
    username: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.$Progress.start();
  }
};
</script>
