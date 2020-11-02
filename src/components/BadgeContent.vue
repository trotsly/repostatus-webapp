<template>
  <div class="badge-details-container">
    <h3 class="content-subtext">We also support badges</h3>
    <h1 class="content-text">So that you can flex!</h1>
    <div class="badge-btn-container">
      <router-link to="/badge" class="badge-btn" tag="button">
        <div class="left-half">Get the</div>
        <div class="right-half">Badge</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Badge"
};
</script>

<style lang="scss" scoped>
.badge-details-container {
  padding: 3em 0;

  .content-subtext {
    font-weight: 300;
    text-transform: uppercase;
  }

  .content-text {
    margin-top: 0.5em;
    font-weight: 500;
    text-transform: uppercase;
    color: $ming;
  }

  @media only screen and (max-width: $mobile-breakpoint) {
    .content-subtext {
      font-size: 1.5em;
    }

    .content-text {
      font-size: 2em;
    }

    padding: 3em 0.5em;
  }

  .badge-btn-container {
    margin-top: 2.5em;

    .badge-btn {
      @extend .button-base;

      width: auto;
      display: flex;
      justify-content: space-evenly;
      margin: 0 auto;
      padding: 0;

      .left-half,
      .right-half {
        font-size: 1.5em;
        padding: 5px 25px;
        font-weight: 500;
        text-transform: uppercase;
      }

      .left-half {
        background: $green;
        color: $ming;
      }

      .right-half {
        background: $ming;
        color: $white;
      }
    }
  }
}
</style>
