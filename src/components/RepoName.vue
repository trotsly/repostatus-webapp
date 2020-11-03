<template>
  <div id="repo-name">
    <div class="icon">
      <img
        src="@/assets/github_icon.png"
        alt="Github Icon"
        class="github-icon"
      />
    </div>
    <div class="repo-text">
      <span class="user">{{ getUsername }}</span>
      <span class="seperator">/</span>
      <span class="repo">{{ getReponame }}</span>
    </div>
    <div class="badge-container">
      <div v-if="getBadgeLoading" class="animated-load animated-badge"></div>
      <div v-else>
        <router-link to="/badge">
          <img :src="getBadgeUrl" alt="Repostatus badge" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RepoName",
  props: {
    reponame: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isBadgeLoading: true,
      badgeUrl: "https://apis.deepjyoti30.dev/repostatus/badge"
    };
  },
  methods: {
    fetchBadge: function() {
      /**
       * Fetch the badge for the passed repo name
       */
      this.badgeUrl +=
        "?" +
        new URLSearchParams({
          repo: this.reponame,
          style: "for-the-badge"
        });

      this.isBadgeLoading = false;
    }
  },
  computed: {
    getUsername() {
      return this.reponame ? this.reponame.split("/")[0] : "";
    },
    getReponame() {
      return this.reponame ? this.reponame.split("/")[1] : "";
    },
    getBadgeLoading() {
      return this.isBadgeLoading;
    },
    getBadgeUrl() {
      return this.badgeUrl;
    }
  }
};
</script>

<style lang="scss" scoped>
#repo-name {
  padding: 0.5em;
  display: flex;

  @media only screen and (max-width: $mobile-breakpoint) {
    padding: 1em 1.5em;
    margin-top: 2em;
  }

  .icon {
    margin-right: 1em;

    .github-icon {
      width: 40px;
      margin-top: 10px;

      @media only screen and (max-width: $mobile-breakpoint) {
        width: 30px;
        margin-top: 5px;
      }
    }
  }

  .repo-text {
    font-size: 2.5em;
    text-align: left;
    color: $ming;
    font-weight: 300;

    @media only screen and (max-width: $mobile-breakpoint) {
      font-size: 1.5em;
    }

    .seperator {
      margin: 0 0.2em;
    }
  }

  .badge-container {
    margin: auto 0;
    margin-left: 2.5em;

    @media only screen and (max-width: $mobile-breakpoint) {
      margin-left: 1.2em;
    }

    .animated-load {
      @extend .skeleton;

      &.animated-badge {
        height: 35px;
        width: 125px;

        @media only screen and (max-width: $mobile-breakpoint) {
          width: 75px;
        }
      }
    }
  }
}
</style>
