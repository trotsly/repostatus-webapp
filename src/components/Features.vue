<template>
  <div id="features">
    <div
      class="container-fluid col-lg-10 col-md-12 col-sm-12 py-5 feature-container"
    >
      <div class="feature-block">
        <div class="icon-container">
          <GridIcon size="3x" />
        </div>
        <div class="explanation">
          <h4>Works with any repo</h4>
          <p class="my-3">
            Works with private and public repo's. If the repo is private, we get
            access using oauth and we'll take care of the rest.
          </p>
        </div>
      </div>
      <div class="feature-block">
        <div class="icon-container">
          <EyeOffIcon size="3x" />
        </div>
        <div class="explanation">
          <h4>Your data is safe</h4>
          <p class="my-3">
            We do not store data in any way. When you make a request it goes to
            our servers and you get the result. No questions asked!
          </p>
        </div>
      </div>
      <div class="feature-block">
        <div class="icon-container">
          <ZapIcon size="3x" />
        </div>
        <div class="explanation">
          <h4>Easy to Use</h4>
          <p class="my-3">
            Be it using the badge or the API, both are super user friendly and
            everyone can just start using it right away.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GridIcon, EyeOffIcon, ZapIcon } from "vue-feather-icons";

export default {
  name: "Features",
  components: {
    GridIcon,
    EyeOffIcon,
    ZapIcon
  }
};
</script>

<style lang="scss" scoped>
#features {
  .feature-container {
    margin-top: 7em;
    display: flex;
    justify-content: space-evenly;

    @media only screen and (max-width: 878px) {
      flex-direction: column;
      align-items: center;

      .feature-block {
        margin-top: 2em;
        margin-bottom: 2em;
      }
    }

    .feature-block {
      max-width: 250px;

      .icon-container {
        color: $ming;
      }

      .explanation {
        h4 {
          font-weight: 400;
          margin-top: 1.5em;
        }

        p {
          color: $dark;
        }
      }
    }
  }
}
</style>
