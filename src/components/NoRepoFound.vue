<template>
  <div id="no-repo-found">
    <div
      class="modal micromodal-slide"
      id="modal-frame-notfound"
      aria-hidden="true"
    >
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div
          class="modal__container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-frame-notfound-title"
        >
          <header class="modal__header">
            <h3 id="modal-frame-notfound-title"></h3>
            <button
              id="close-btn-notfound"
              class="modal__close"
              aria-label="Close modal"
              data-micromodal-close
            >
              <XIcon></XIcon>
            </button>
          </header>
          <main class="modal__content" id="modal-frame-notfound-content">
            <div class="not-found-container">
              <AlertCircleIcon size="70" />
              <p class="desc">
                No public repo found for
                <span class="font-weight-bold">{{ getUsername }}</span>
                <br />
                Try giving access by using the GitHub option in the dropdown.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MicroModal from "micromodal";
import { XIcon, AlertCircleIcon } from "vue-feather-icons";

export default {
  name: "NoRepoFound",
  components: {
    XIcon,
    AlertCircleIcon
  },
  props: {
    username: {
      type: String,
      default: ""
    }
  },
  methods: {
    showModal() {
      /**
       * Show the modal
       */
      MicroModal.show("modal-frame-notfound", {
        disableFocus: true,
        awaitCloseAnimation: true,
        awaitOpenAnimation: true
      });
    },
    hideModal() {
      MicroModal.close("modal-frame-notfound");
    },
    listenClose() {
      /**
       * Listen to the close button
       *
       * This is required since I am overriding the default
       * style and replace the arrow with a custom icon.
       */
      document
        .getElementById("close-btn-notfound")
        .addEventListener("click", () => {
          MicroModal.close("modal-frame-notfound");
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
.not-found-container {
  .desc {
    font-size: 1.2em;
    margin-top: 2.5em;
    font-weight: 500;
  }
}
</style>
