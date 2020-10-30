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
            <div class="desc my-5">
              <h2>Preparing for GitHub OAuth</h2>
            </div>
            <div class="not-found-container">
              <p class="loading-spinner">
                <HalfCircleSpinner
                  :size="60"
                  color="#83C5BE"
                  :animation-duration="750"
                />
              </p>
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
import { HalfCircleSpinner } from "epic-spinners";

export default {
  name: "OAuthHandler",
  components: {
    XIcon,
    HalfCircleSpinner
  },
  data() {
    return {
      stateStorageName: "sessionState",
      stateUrl: "http://0.0.0.0:5000/state",
      clientId: process.env.VUE_APP_CLIENT_ID,
      authUrl: "https://github.com/login/oauth/authorize",
      stateExtracted: ""
    };
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
    showWindow: async function(state) {
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
        `${this.authUrl}?state=${state}&client_id=${this.clientId}&scope=repo`,
        "GitHub OAuth",
        windowFeatures
      );

      const timer = await setInterval(() => {
        if (win.closed) {
          clearInterval(timer);
          this.$emit("state", this.stateExtracted);
          return;
        }
      }, 3000);
    },
    getState: async function() {
      /**
       * Get a new state and return it
       */
      const stateResponse = await fetch(this.stateUrl);
      const jsonData = await stateResponse.json();
      return jsonData["state"];
    },
    handleUserState: async function() {
      /**
       * Handle the state of the user
       *
       * Check to see if the user already has a
       * state. If not, then create one, store it
       * and use it.
       *
       * If it is already there, use that.
       */
      const stateStored = localStorage.getItem(this.stateStorageName);

      if (stateStored != null) return stateStored;

      // We need to create a new state.
      // Before going forward, open the modal and show a loading animation
      this.showModal();
      const stateFetched = await this.getState();

      // Store the state
      localStorage.setItem(this.stateStorageName, stateFetched);

      // show the new window
      await this.showWindow(stateFetched);
      this.hideModal();
      return stateFetched;
    },
    handleGithubOauth: async function() {
      /**
       * Handle the OAuth.
       *
       * Before opening a new window, check to see if the user is already
       * verified. We will do that by checking the state of the current
       * browser. If the user is verified, we'll not open the window and
       * accordingly make the request using that state
       *
       * If the user is not verified
       */
      const stateExtracted = await this.handleUserState();
      this.stateExtracted = stateExtracted;
    }
  },
  mounted() {
    MicroModal.init();
    this.listenClose();
  }
};
</script>

<style lang="scss" scoped>
.loading-spinner {
  margin: 3em auto;
  display: flex;
  justify-content: center;
}
</style>
