<template>
  <div id="input-repo">
    <div class="d-flex justify-content-center py-3 mt-3 mb-5">
      <div class="repo-chooser">
        <div class="public-repo">
          <span>
            <PlusCircleIcon class="plus-icon" size="30" />
          </span>
          <span class="repo-text">
            <p>Choose Public Repo</p>
          </span>
        </div>
        <div class="dropdown-container">
          <ChevronDownIcon size="30" class="dropdown-icon" />
        </div>
      </div>
    </div>
    <div class="darker-background"></div>
  </div>
</template>

<script>
import { PlusCircleIcon, ChevronDownIcon } from "vue-feather-icons";

export default {
  name: "InputRepo",
  components: {
    PlusCircleIcon,
    ChevronDownIcon
  }
};
</script>

<style lang="scss" scoped>
.repo-chooser {
  @extend .rounded-cust-sm;
  @extend .shadow-lg-green;

  min-width: 350px;
  background: $green;
  cursor: pointer;
  color: $black;
  padding: 25px 15px;
  display: flex;
  justify-content: space-between;
  transition: 0.3s ease;
  z-index: 2;

  &:hover {
    background: darken($green, 10);
    transition: 0.3s ease;

    .plus-icon {
      stroke: darken($green, 10);
      transition: 0.3s ease;
    }
  }

  .public-repo {
    display: flex;

    .plus-icon {
      margin-right: 5px;
      fill: $black;
      stroke: $green;
      transition: 0.3s ease;
    }

    .repo-text {
      margin-left: 5px;
      font-size: 1.3em;
      font-weight: 500;

      p {
        margin: 0 auto;
      }
    }
  }

  .dropdown-container {
    .dropdown-icon {
      animation-duration: 0.3s;
      animation-fill-mode: both;
      animation-name: rotateBackward;

      &:hover {
        animation-name: rotateForward;
      }
    }

    @keyframes rotateForward {
      100% {
        transform: rotate(180deg);
      }
    }

    @keyframes rotateBackward {
      0% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
}

#input-repo {
  position: relative;
  width: 100%;
  background: darken($white, 1);

  .darker-background {
    position: absolute;
    bottom: -20px;
    left: 0;
    height: 65%;
    width: 98%;
    background: $white;
    transform: rotate(-3deg);
  }
}
</style>
