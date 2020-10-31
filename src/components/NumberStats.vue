<template>
  <div class="number">
    <div class="number-child">
      <div class="number-text">
        <div v-if="getIsLoading" class="skeleton-child skeleton-number"></div>
        <div v-else class="actual-number">45678</div>
      </div>
      <div class="name-text">
        <div v-if="getIsLoading" class="skeleton-child skeleton-text"></div>
        <div v-else class="actual-text">Words</div>
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
    }
  },
  computed: {
    getIsLoading() {
      return this.isLoading;
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
      }
    }

    .name-text {
      font-size: 1.5em;
      padding-top: 10px;

      .actual-text {
        font-weight: 500;
        transform: translateY(-20px);
      }
    }
  }
}

.skeleton-child {
  @extend .skeleton;

  &.skeleton-number {
    min-width: 250px;
    height: 50px;
  }

  &.skeleton-text {
    width: 100px;
    height: 25px;
  }
}
</style>
