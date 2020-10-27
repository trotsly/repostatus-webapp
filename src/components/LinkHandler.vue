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
                  v-model="getLink"
                  @focus="showLink"
                />
              </div>
              <button class="select-link">Select</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MicroModal from "micromodal";
import { XIcon, LinkIcon } from "vue-feather-icons";

export default {
  name: "LinkHandler",
  components: {
    XIcon,
    LinkIcon
  },
  data() {
    return {
      linkProto: "https://github.com/",
      linkEntered: ""
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
      this.linkEntered = this.linkProto;
    }
  },
  computed: {
    getLink() {
      return this.linkEntered;
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
  }

  .select-link {
    @extend .button-base;
    margin-bottom: 0;
  }
}
</style>
