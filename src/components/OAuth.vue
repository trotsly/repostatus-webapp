<template>
  <div id="oauth-handler">
    <div
      class="modal micromodal-slide"
      id="modal-frame-oauth"
      aria-hidden="true"
    >
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div
          class="modal__container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-frame-oauth-title"
        >
          <header class="modal__header">
            <h3 id="modal-frame-oauth-title"></h3>
            <button
              id="close-btn-oauth"
              class="modal__close"
              aria-label="Close modal"
              data-micromodal-close
            >
              <XIcon></XIcon>
            </button>
          </header>
          <main class="modal__content" id="modal-frame-oauth-content">
            <div class="not-found-container">
              <p class="desc"></p>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from "vue-feather-icons";
import MicroModal from "micromodal";

export default {
  name: "OAuthHandler",
  components: {
    XIcon
  },
  methods: {
    showModal() {
      /**
       * Show the modal
       */
      MicroModal.show("modal-frame-oauth", {
        disableFocus: true,
        awaitCloseAnimation: true,
        awaitOpenAnimation: true
      });
    },
    hideModal() {
      MicroModal.close("modal-frame-oauth");
    },
    listenClose() {
      /**
       * Listen to the close button
       *
       * This is required since I am overriding the default
       * style and replace the arrow with a custom icon.
       */
      document
        .getElementById("close-btn-oauth")
        .addEventListener("click", () => {
          MicroModal.close("modal-frame-oauth");
        });
    },
    handleGithubOauth: async function() {
      /**
       * Handle the OAuth of GitHub.
       *
       * The OAuth process will require the user to have a state
       * that will be fetched from backend. Once that's ready, a
       * new window will be opened and the user will be asked to
       * authenticate access.
       *
       * We will then wait till the new window closes and after that
       * continue
       */
      const windowFeatures =
        "location=yes,height=570,width=520,scrollbars=yes,status=yes";
      const win = window.open(
        "https://google.com",
        "Google Window",
        windowFeatures
      );

      const timer = setInterval(() => {
        if (win.closed) {
          clearInterval(timer);
          console.log("Window closed");
        }
      }, 3000);
    }
  },
  mounted() {
    MicroModal.init();
    this.listenClose();
  }
};
</script>
