<template>
  <div id="not-found">
    <div class="content">
      <p class="whoops-text">
        Whoops!
      </p>
      <p class="desc-text">
        We tried, but were unable to find the page you're looking for!
      </p>
      <div class="status">
        404
        <div class="line"></div>
        Not Found
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style lang="scss" scoped>
#not-found {
  width: 50%;
  display: flex;
  align-items: center;
  height: 90vh;
  margin: 0 auto;

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
