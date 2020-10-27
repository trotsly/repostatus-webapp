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
              <div class="repo-container">
                <div class="repo-container-item">
                  <BookIcon class="repo-icon" size="25" />
                  <p>FancyRepoName</p>
                </div>
                <div class="repo-container-item">
                  <BookIcon class="repo-icon" size="25" />
                  <p>FancyRepoName</p>
                </div>
              </div>
              <button class="select-repo">
                Select repo
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MicroModal from "micromodal";
import { XIcon, BookIcon } from "vue-feather-icons";

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
    BookIcon
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
    }
  },
  computed: {
    getUsername() {
      return this.username;
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

    .repo-container-item {
      display: flex;
      padding: 10px 10px;
      margin: 5px;
      border-bottom: 1px solid $green;

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

    .repo-container-item:last-child {
      border-bottom: none;
    }
  }

  .select-repo {
    @extend .button-base;
    margin-bottom: 0;
  }
}
</style>
