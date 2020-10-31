<template>
  <div class="number">
    <div class="number-child">
      <div class="number-text">
        <div v-if="getIsLoading" class="skeleton-child skeleton-number"></div>
        <div v-else class="actual-number">{{ getNumber }}</div>
      </div>
      <div class="name-text">
        <div v-if="getIsLoading" class="skeleton-child skeleton-text"></div>
        <div v-else class="actual-text">{{ getName }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Number",
  props: {
    number: {
      type: Number,
      default: null
    },
    name: {
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
    handleLoading() {
      if (this.number == null) return;
      this.isLoading = false;
    },
    parseToCommaSeperated: function(numberPassed) {
      /**
       * Parse the passed number to comma
       * seperated string
       */
      return Number(numberPassed).toLocaleString("en");
    }
  },
  computed: {
    getIsLoading() {
      return this.isLoading;
    },
    getNumber() {
      return this.parseToCommaSeperated(this.number);
    },
    getName() {
      return this.name;
    }
  },
  watch: {
    number: {
      handler() {
        this.handleLoading();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.number {
  margin-right: 2.5em;
  padding-left: 1em;

  .number-child {
    text-align: left;

    .number-text,
    .name-text {
      margin: 0;
    }

    .number-text {
      font-size: 3.5em;

      .actual-number {
        font-weight: 300;
        color: $salmon;
      }

      @media only screen and (max-width: $mobile-breakpoint) {
        font-size: 2em;
      }
    }

    .name-text {
      font-size: 1.5em;
      padding-top: 10px;

      .actual-text {
        font-weight: 500;
        transform: translateY(-20px);
        color: darken($green, 25);

        @media only screen and (max-width: $mobile-breakpoint) {
          font-size: 0.8em;
          font-weight: 400;
        }
      }
    }
  }
}

.skeleton-child {
  @extend .skeleton;

  &.skeleton-number {
    width: 250px;
    height: 50px;

    @media only screen and (max-width: $mobile-breakpoint) {
      width: 70px;
      height: 35px;
    }
  }

  &.skeleton-text {
    width: 100px;
    height: 25px;

    @media only screen and (max-width: $mobile-breakpoint) {
      width: 50px;
      height: 20px;
    }
  }
}
</style>
