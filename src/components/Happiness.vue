<template>
  <div id="stats-container">
    <div class="numbers-container">
      <Number />
      <Number />
      <Number />
    </div>
    <div class="status-container">
      <HappinessStatus />
    </div>
  </div>
</template>

<script>
import Number from "@/components/NumberStats";
import HappinessStatus from "@/components/HappinessStatus";

export default {
  name: "Happiness",
  components: {
    Number,
    HappinessStatus
  }
};
</script>

<style lang="scss" scoped>
#stats-container {
  @extend .rounded-cust-sm;

  border: 1px solid $grey;
  padding: 1em;

  .numbers-container {
    display: flex;
  }
}
</style>
