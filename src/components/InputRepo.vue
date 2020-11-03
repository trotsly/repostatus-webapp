<template>
  <div id="input-repo">
    <PublicRepo ref="publicRepoModal" @username="parseUsernameEntered" />
    <ListRepo
      ref="listRepoModal"
      @repo="parseRepoSelected"
      :username="getUsernamePassed"
      :repoList="getRepoList"
    />
    <LinkHandler @repourl="parseRepoUrl" ref="linkHandlerModal" />
    <OAuthHandler ref="oauthHandlerModal" @state="parseStateExtracted" />
    <div class="d-flex justify-content-center py-3 mt-3 mb-5">
      <div class="repo-chooser">
        <div class="public-repo" @click="showPublicRepoChooser">
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
              <div class="extra-option" @click="handleGithubClick">
                <img src="@/assets/github_icon.png" alt="" />
                <div class="option-text">
                  GitHub
                </div>
              </div>
              <div class="extra-option" @click="showLinkHandler">
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
import PublicRepo from "@/components/PublicRepo";
import ListRepo from "@/components/ListRepo";
import LinkHandler from "@/components/LinkHandler";
import OAuthHandler from "@/components/OAuth";

var jwt = require("jsonwebtoken");

export default {
  name: "InputRepo",
  components: {
    PlusCircleIcon,
    ChevronDownIcon,
    LinkIcon,
    PublicRepo,
    ListRepo,
    LinkHandler,
    OAuthHandler
  },
  data() {
    return {
      usernamePassed: "",
      repoSelected: null,
      repoUrl: "",
      repoListFromState: null,
      stateUsed: false,
      stateUrl: "https://apis.deepjyoti30.dev/repostatus/state",
      jwtSecret: process.env.VUE_APP_JWT_SECRET
    };
  },
  methods: {
    showPublicRepoChooser: function() {
      /**
       * Show the public repo chooser modal using the reference.
       */
      this.$refs.publicRepoModal.showModal();
    },
    parseUsernameEntered: function(username) {
      /**
       * Parse the username entered by the user in the public repo
       * chooser part. We need to pass this username to the ListRepo
       * component
       */
      this.usernamePassed = username;
      this.$refs.listRepoModal.showModal();
    },
    parseRepoSelected: function(repo) {
      /**
       * Parse the repo selected by the user and store it so that
       * it can be used in the next step.
       */
      this.repoSelected = repo;
      this.repoUrl = repo["full_name"];
      this.emitAndContinue();
    },
    parseRepoUrl: function(url) {
      /**
       * Parse the repo URL without the object.
       *
       * This function is to be used when the link handler
       * returns the selected repo.
       */
      this.repoUrl = url;
      this.emitAndContinue();
    },
    emitAndContinue: function() {
      /**
       * Emit the repo and the state and accordingly let
       * the parent handle.
       *
       * We need to emit an object that will contain the repo
       */
      const emittableObj = {
        repo: this.repoUrl,
        stateUsed: this.stateUsed
      };
      this.$emit("repo", emittableObj);
    },
    showLinkHandler: function() {
      /**
       * Show the link handler modal using the ref
       */
      this.$refs.linkHandlerModal.showModal();
    },
    handleGithubClick: function() {
      /**
       * Handle the click on the GitHub button which
       * is one of the extra options.
       */
      this.$refs.oauthHandlerModal.handleGithubOauth();
    },
    getUsernameAndRepo: async function(passedState) {
      /**
       * Get the username and repo using the state
       * passed.
       */
      const response = await fetch(this.stateUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${jwt.sign(
            {
              state: passedState
            },
            this.jwtSecret
          )}`
        }
      });
      const jsonData = await response.json();
      this.usernamePassed = jsonData["username"];
      this.repoListFromState = jsonData["repos"];
      this.stateUsed = true;

      // Hide the OAuth modal
      this.$refs.oauthHandlerModal.hideModal();
    },
    parseStateExtracted: async function(state) {
      /**
       * Use the state emitted by the OAuth handler
       * and use it to fetch other necessary details
       */
      await this.getUsernameAndRepo(state);
      this.$refs.listRepoModal.showModal();
    }
  },
  computed: {
    getUsernamePassed() {
      return this.usernamePassed;
    },
    getRepoList() {
      return this.repoListFromState;
    }
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
    padding-left: 15px;

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
    @extend .rounded-cust-sm-r;

    padding-left: 15px;
    padding-right: 15px;
    transition: 0.2s ease;

    .dropdown-icon {
      @extend .animation-basic;
      animation-name: rotateBackward;
    }

    &:hover {
      background: darken($green, 15);
      transition: 0.2s ease;

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
      right: 0;
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
