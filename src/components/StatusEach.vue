<template>
  <div class="status-each__container">
    <div v-if="getIsLoading" class="status-animation">
      <h1 class="status-animated name"></h1>
      <h5 class="status-animated text"></h5>
    </div>
    <div v-else class="status-each">
      <h1 class="status-name">{{ getName }}</h1>
      <h5 class="status-text">{{ getText }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatusEach",
  data() {
    return {
      isLoading: true
    };
  },
  props: {
    name: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    }
  },
  methods: {
    handleAnimation: function() {
      if (this.text == null) return;
      this.isLoading = false;
    }
  },
  computed: {
    getIsLoading() {
      return this.isLoading;
    },
    getName() {
      return this.name;
    },
    getText() {
      return this.text;
    }
  },
  watch: {
    text: {
      handler() {
        this.handleAnimation();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.status-each__container {
  .status-each {
    padding-right: 1em;
    padding-left: 1em;
    text-align: left;

    .status-name {
      font-size: 3.2em;
      font-weight: 400;
      padding: 0;
      margin: 0;
      color: $salmon;
    }

    .status-text {
      text-transform: uppercase;
      font-weight: 500;
      color: $ming;
    }
  }

  .status-animation {
    .status-animated {
      @extend .skeleton;

      &.name {
        width: 200px;
        height: 40px;
      }

      &.text {
        width: 150px;
        height: 20px;
      }
    }
  }
}
</style>
