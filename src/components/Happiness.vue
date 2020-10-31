<template>
  <div id="stats-container">
    <div class="data-text">
      <h5 v-if="getIsLoading" class="text-animation text"></h5>
      <h5 v-else>We went through</h5>
    </div>
    <div class="numbers-container">
      <Number />
      <Number />
      <Number />
    </div>
    <div class="status-container">
      <HappinessStatus />
    </div>
    <div class="status-each-container">
      <StatusEach class="status-each-el" />
      <StatusEach class="status-each-el" />
      <StatusEach class="status-each-el" />
    </div>
  </div>
</template>

<script>
import Number from "@/components/NumberStats";
import HappinessStatus from "@/components/HappinessStatus";
import StatusEach from "@/components/StatusEach";

export default {
  name: "Happiness",
  components: {
    Number,
    HappinessStatus,
    StatusEach
  },
  data() {
    return {
      isLoading: true
    };
  },
  computed: {
    getIsLoading() {
      return this.isLoading;
    }
  }
};
</script>

<style lang="scss" scoped>
#stats-container {
  @extend .rounded-cust-sm;

  border: 1px solid darken($grey, 8);
  padding: 1em;

  .data-text {
    text-align: left;
    margin: 0;
    padding-left: 1em;
    color: $dark;
    font-weight: 400;

    .text-animation {
      @extend .skeleton;

      &.text {
        width: 100px;
        height: 20px;
      }
    }
  }

  .numbers-container {
    display: flex;
  }

  .status-each-container {
    display: flex;

    .status-each-el {
      margin-right: 1.5em;
      padding-right: 1.5em;

      border-right: 2px solid $green;
    }

    .status-each-el:last-child {
      border-right: none;
    }
  }
}
</style>
