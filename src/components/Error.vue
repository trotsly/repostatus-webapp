<template>
  <div class="error">
    <div class="content">
      <p class="whoops-text">
        Whoops!
      </p>
      <p class="desc-text">
        We tried, but were unable to find the page you're looking for!
      </p>
      <div class="status">
        {{ getStatusCode }}
        <div class="line"></div>
        {{ getStatusMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    code: {
      type: Number,
      default: 404
    },
    message: {
      type: String,
      default: "Not Found"
    }
  },
  computed: {
    getStatusCode() {
      return this.code;
    },
    getStatusMessage() {
      return this.message;
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  width: 50%;
  display: flex;
  align-items: center;
  height: 90vh;
  margin: 0 auto;

  @media only screen and (max-width: $mobile-breakpoint) {
    width: 100%;
    padding: 0 25px;
    height: 80vh;
  }

  .content {
    text-align: left;

    .whoops-text {
      font-size: 5em;
      color: $ming;
    }

    .desc-text {
      font-size: 1.5em;
      margin-top: 0.5em;
    }

    $lightming: lighten($ming, 10);

    .status {
      font-weight: bold;
      color: $lightming;
      display: flex;

      .line {
        width: 3px;
        height: 25px;
        margin: 0 10px;
        background: $lightming;
      }
    }
  }
}
</style>
