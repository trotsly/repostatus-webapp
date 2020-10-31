<template>
  <div class="happiness-status__container">
    <div v-if="getIsLoading" class="animation-container">
      <h5 class="text">
        Going through repo's data in order to get the status
      </h5>
      <div class="spinner-container">
        <HalfCircleSpinner
          :size="30"
          color="#83C5BE"
          :animation-duration="1000"
          class="spinner"
        />
      </div>
    </div>
    <div v-else class="content">
      <h5 class="sub-text">Your repo's happiness status is</h5>
      <h1 class="content-status">{{ getStatus }}</h1>
    </div>
  </div>
</template>

<script>
import { HalfCircleSpinner } from "epic-spinners";

export default {
  name: "HappinessStatus",
  components: {
    HalfCircleSpinner
  },
  props: {
    status: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isLoading: true
    };
  },
  methods: {
    handleAnimtion: function() {
      if (this.status == null) return;
      this.isLoading = false;
    }
  },
  computed: {
    getStatus() {
      return this.status;
    },
    getIsLoading() {
      return this.isLoading;
    }
  },
  watch: {
    status: {
      handler() {
        this.handleAnimtion();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.happiness-status__container {
  padding: 3em 1em 2em 1em;

  @media only screen and (max-width: $mobile-breakpoint) {
    padding-top: 1em;
  }

  .animation-container {
    .text {
      color: $dark;
    }

    .spinner-container {
      margin-top: 2em;
      margin-bottom: 1em;

      .spinner {
        margin: 0 auto;
      }
    }
  }

  .content {
    text-align: left;

    .sub-text {
      color: $dark;
    }

    .content-status {
      font-weight: 500;
      color: $ming;
      text-transform: uppercase;
      margin-top: 0.5em;
    }
  }
}
</style>
