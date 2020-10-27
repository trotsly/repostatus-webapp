<template>
  <div id="public">
    <div class="modal micromodal-slide" id="modal-frame" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div
          class="modal__container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-frame-title"
        >
          <header class="modal__header">
            <h3 id="modal-frame-title"></h3>
            <button
              id="close-btn"
              class="modal__close"
              aria-label="Close modal"
              data-micromodal-close
            >
              <XIcon></XIcon>
            </button>
          </header>
          <main class="modal__content" id="modal-frame-content">
            <div class="repo-chooser-content">
              <img src="@/assets/github_icon.png" alt="" />
              <p class="desc">
                Select public repos from your account
              </p>
              <p class="text-left username">
                Username
              </p>
              <input
                type="text"
                placeholder="Enter your GitHub username"
                spellcheck="false"
                v-model="usernameEntered"
                :input="verifyUsername()"
                @keyup.enter="selectUsername"
              />
              <button
                :disabled="!isUsernameValid"
                class="select-username"
                @click="selectUsername"
              >
                Select Username
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
import { XIcon } from "vue-feather-icons";

export default {
  name: "PublicRepo",
  components: {
    XIcon
  },
  data() {
    return {
      usernameEntered: "",
      isValidUsername: false
    };
  },
  methods: {
    showModal() {
      /**
       * Show the modal
       */
      MicroModal.show("modal-frame", {
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
      document.getElementById("close-btn").addEventListener("click", () => {
        MicroModal.close("modal-frame");
      });
    },
    verifyUsername() {
      /**
       * Verify the username when the user is typing it
       */
      this.isValidUsername = Boolean(this.usernameEntered.length);
    },
    selectUsername() {
      /**
       * Select the username that the user entered and pass it to
       * the parent component
       */
      this.$emit("username", this.usernameEntered);
      MicroModal.close("modal-frame");
    }
  },
  computed: {
    isUsernameValid() {
      return this.isValidUsername;
    }
  },
  mounted() {
    MicroModal.init();
    this.listenClose();
  }
};
</script>

<style lang="scss" scoped>
.repo-chooser-content {
  img {
    width: 70px;
    height: auto;
  }

  .desc {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 1.1em;
  }

  .username {
    font-size: 1em;
    font-weight: 500;
    margin-bottom: 5px;
  }

  input {
    @extend .rounded-cust-sm;
    @extend .input-base;

    width: 100%;
  }

  .select-username {
    @extend .button-base;
  }
}
</style>
