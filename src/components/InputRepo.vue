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
          <div class="dropdown-content">
            <div class="dropdown-content-child shadow-lg">
              <div class="extra-option">
                <img src="@/assets/github_icon.png" alt="" />
                <div class="option-text">
                  GitHub
                </div>
              </div>
              <div class="extra-option">
                <LinkIcon />
                <div class="option-text">
                  Enter Link
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="darker-background"></div>
  </div>
</template>

<script>
import { PlusCircleIcon, ChevronDownIcon, LinkIcon } from "vue-feather-icons";

export default {
  name: "InputRepo",
  components: {
    PlusCircleIcon,
    ChevronDownIcon,
    LinkIcon
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
  padding: 0px 15px;
  display: flex;
  justify-content: space-between;
  transition: 0.3s ease;
  z-index: 2;

  &:hover {
    background: darken($green, 10);
    transition: 0.3s ease;

    .public-repo {
      .plus-icon {
        stroke: darken($green, 10);
        transition: 0.3s ease;
      }
    }
  }

  .public-repo,
  .dropdown-container {
    padding-top: 25px;
    padding-bottom: 25px;
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
      @extend .animation-basic;
      animation-name: rotateBackward;
    }

    &:hover {
      .dropdown-icon {
        animation-name: rotateForward;
      }

      .dropdown-content {
        animation-name: fadeIn;
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

  // Add dropdown container content
  .dropdown-container {
    position: relative;

    .dropdown-content {
      @extend .animation-basic;

      position: absolute;
      top: 100%;
      right: -15px;
      z-index: 6;
      min-width: 350px;
      visibility: hidden;
      animation-duration: 0.1s;

      .dropdown-content-child {
        @extend .rounded-cust-sm;

        margin-top: 10px;
        width: 100%;

        .extra-option {
          padding: 10px 20px;
          display: flex;
          align-items: center;
          transition: 0.2s ease;

          img {
            width: 30px;
            height: auto;
          }

          .option-text {
            font-size: 1.3em;
            margin-left: 20px;
          }

          &:hover {
            background: darken($white, 3);
            transition: 0.2s ease;
          }
        }

        .extra-option:nth-child(1) {
          @extend .rounded-cust-sm-t;
        }
        .extra-option:last-child {
          @extend .rounded-cust-sm-b;
        }
      }
    }
  }

  @keyframes fadeIn {
    100% {
      visibility: visible;
    }
  }
}
</style>
