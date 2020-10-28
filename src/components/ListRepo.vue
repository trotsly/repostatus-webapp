<template>
  <div id="list-repo">
    <div
      class="modal micromodal-slide"
      id="modal-frame-repo"
      aria-hidden="true"
    >
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div
          class="modal__container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-frame-repo-title"
        >
          <header class="modal__header">
            <h3 id="modal-frame-repo-title"></h3>
            <button
              id="close-btn-repo"
              class="modal__close"
              aria-label="Close modal"
              data-micromodal-close
            >
              <XIcon></XIcon>
            </button>
          </header>
          <main class="modal__content" id="modal-frame-repo-content">
            <div class="select-repo-container">
              <BookIcon size="50" class="book-icon" />
              <p class="text-head">
                Select repo for
                <span class="font-weight-bold">{{ getUsername }}</span>
              </p>
              <p class="repo">Repository</p>
              <div v-if="getIsLoading" class="loading-spinner">
                <HalfCircleSpinner
                  :size="60"
                  color="#83C5BE"
                  :animation-duration="750"
                />
              </div>
              <div v-else class="repo-container">
                <div
                  class="repo-container-item"
                  v-for="(repo, index) in getReposFetched"
                  :key="index"
                  @click="highlightRepo(index)"
                >
                  <div class="repo-content">
                    <BookIcon class="repo-icon" size="25" />
                    <p>{{ repo.name }}</p>
                  </div>
                  <CheckCircleIcon
                    v-if="getHighlighted == index"
                    class="check-icon"
                    size="25"
                  />
                </div>
              </div>
              <button
                :disabled="getBtnDisabled"
                @click="selectRepo"
                class="select-repo"
              >
                Select repo
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
    <NoRepoFound ref="noRepoFoundModal" :username="getUsername" />
  </div>
</template>

<script>
import MicroModal from "micromodal";
import { XIcon, BookIcon, CheckCircleIcon } from "vue-feather-icons";
import { HalfCircleSpinner } from "epic-spinners";
import NoRepoFound from "@/components/NoRepoFound";

export default {
  name: "ListRepo",
  props: {
    username: {
      type: String,
      default: ""
    }
  },
  components: {
    XIcon,
    BookIcon,
    HalfCircleSpinner,
    CheckCircleIcon,
    NoRepoFound
  },
  data() {
    return {
      repoUrl: "",
      isLoading: true,
      reposFetched: ["nana", "fancyhaha"],
      repoSelectedIndex: -1,
      repoEndpoint: "http://0.0.0.0:5000/repos/"
    };
  },
  methods: {
    showModal() {
      /**
       * Show the modal
       */
      MicroModal.show("modal-frame-repo", {
        disableFocus: true,
        awaitCloseAnimation: true,
        awaitOpenAnimation: true
      });
    },
    hideModal() {
      MicroModal.close("modal-frame-repo");
    },
    listenClose() {
      /**
       * Listen to the close button
       *
       * This is required since I am overriding the default
       * style and replace the arrow with a custom icon.
       */
      document
        .getElementById("close-btn-repo")
        .addEventListener("click", () => {
          MicroModal.close("modal-frame-repo");
        });
    },
    loadRepo() {
      /**
       * Load the repo's for the given username by making a
       * request to the API.
       */
      if (this.username == "") return;
      fetch(this.repoEndpoint + this.username)
        .then(response => {
          if (response.status != 200) this.handleNotFound();
          return response.json();
        })
        .then(jsonData => {
          this.reposFetched = jsonData;
          this.isLoading = false;
        });
    },
    highlightRepo(index) {
      /**
       * Highlight the passed repo and store the index as the selected
       * repo's index
       */
      this.repoSelectedIndex = index;
    },
    handleNotFound() {
      /**
       * Handle if the repo endpoint returns a not found error.
       *
       * We will basically call this method if we get a response of anything
       * other than 200
       */
      this.hideModal();
      this.$refs.noRepoFoundModal.showModal();
    },
    selectRepo() {
      /**
       * Select the repo selected by the user and send it to the
       * parent.
       */
      this.$emit("repo", this.reposFetched[this.repoSelectedIndex]);
      this.hideModal();
    }
  },
  computed: {
    getUsername() {
      return this.username;
    },
    getReposFetched() {
      return this.reposFetched;
    },
    getIsLoading() {
      return this.isLoading;
    },
    getHighlighted() {
      return this.repoSelectedIndex;
    },
    getBtnDisabled() {
      // Button will be disabled if the user has not selected
      // any option or it is still loading
      return this.isLoading || this.repoSelectedIndex == -1;
    }
  },
  watch: {
    username: {
      handler() {
        this.loadRepo();
      }
    }
  },
  mounted() {
    MicroModal.init();
    this.listenClose();
  }
};
</script>

<style lang="scss" scoped>
.select-repo-container {
  .text-head {
    margin-top: 1em;
    font-size: 1.2em;
  }
  .repo {
    font-size: 1.1em;
    font-weight: 500;
    margin-bottom: 5px;
    text-align: left;
  }
  .repo-container {
    @extend .rounded-cust-sm;

    width: 100%;
    border: 1px solid $green;
    margin-top: 10px;
    max-height: 50vh;
    overflow: scroll;
    overflow-x: hidden;

    .repo-container-item {
      display: flex;
      justify-content: space-between;
      padding: 10px 10px;
      margin: 5px;
      border-bottom: 1px solid $green;

      .repo-content {
        display: flex;
        .repo-icon {
          stroke: $ming;
        }

        p {
          margin: 0;
          margin-left: 10px;
          font-weight: 500;
          font-size: 1em;
        }
      }

      .check-icon {
        fill: $green;
        stroke: $ming;
      }

      &:hover {
        background: darken($white, 5);
      }
    }

    .repo-container-item:last-child {
      border-bottom: none;
    }
  }

  .select-repo {
    @extend .button-base;
    margin-bottom: 0;
  }

  .loading-spinner {
    margin: 3em auto;
    display: flex;
    justify-content: center;
  }
}
</style>
