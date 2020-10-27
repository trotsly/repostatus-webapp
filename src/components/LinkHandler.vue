<template>
  <div id="link-handler">
    <div
      class="modal micromodal-slide"
      id="modal-frame-link"
      aria-hidden="true"
    >
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div
          class="modal__container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-frame-link-title"
        >
          <header class="modal__header">
            <h3 id="modal-frame-link-title"></h3>
            <button
              id="close-btn-link"
              class="modal__close"
              aria-label="Close modal"
              data-micromodal-close
            >
              <XIcon></XIcon>
            </button>
          </header>
          <main class="modal__content" id="modal-frame-link-content">
            <div class="link-handler-container">
              <LinkIcon size="50" />
              <p class="desc">Enter the link of the GitHub repository</p>
              <div class="link-input">
                <input
                  type="text"
                  placeholder="https://github.com/octocat/hello-world"
                  spellcheck="false"
                  v-model="linkEntered"
                  @focus="showLink"
                  :input="verifyLink()"
                />
                <CheckCircleIcon v-if="isLinkValid" class="check-icon" />
              </div>
              <button :disabled="!isLinkValid" class="select-link">
                Get Status
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
import { XIcon, LinkIcon, CheckCircleIcon } from "vue-feather-icons";

export default {
  name: "LinkHandler",
  components: {
    XIcon,
    LinkIcon,
    CheckCircleIcon
  },
  data() {
    return {
      linkProto: "https://github.com/",
      linkEntered: "",
      linkValid: false
    };
  },
  methods: {
    showModal() {
      /**
       * Show the modal
       */
      MicroModal.show("modal-frame-link", {
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
        .getElementById("close-btn-link")
        .addEventListener("click", () => {
          MicroModal.close("modal-frame-link");
        });
    },
    showLink() {
      /**
       * Update the link when the input is clicked
       */
      if (this.linkEntered != "") return;
      this.linkEntered = this.linkProto;
    },
    verifyLink() {
      /**
       * Verify the link as the user keeps typing it
       *
       * The link should be of type https://github.com/username/reponame/
       *
       * We will use some regex to validate it.
       */
      this.linkValid = Boolean(
        this.linkEntered.match(
          /^https?:\/\/github.com\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+$/g
        )
      );
    }
  },
  computed: {
    isLinkValid() {
      return this.linkValid;
    }
  },
  mounted() {
    MicroModal.init();
    this.listenClose();
  }
};
</script>

<style lang="scss" scoped>
.link-handler-container {
  .desc {
    margin-top: 2em;
    font-size: 1.2em;
  }

  .link-input {
    input {
      @extend .input-base;
      @extend .rounded-cust-sm;

      width: 100%;
    }

    position: relative;

    .check-icon {
      position: absolute;
      right: 10px;
      top: 10px;

      fill: $green;
      stroke: $ming;
    }
  }

  .select-link {
    @extend .button-base;
    margin-bottom: 0;
  }
}
</style>
