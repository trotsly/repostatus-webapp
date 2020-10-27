<template>
  <div class="modal micromodal-slide" id="modal-frame" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
      <div
        class="modal__container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-frame-title"
      >
        <header class="modal__header">
          <h3 id="modal-frame-title">
            {{ getHeading }}
          </h3>
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
          <div id="message">
            <h4 class="mb-2">{{ getSubHead }}</h4>
            <h6 class="mt-4 text-muted">{{ getText }}</h6>
          </div>
          <div class="btn-container mt-4">
            <a target="_blank" :href="getBtnHref" class="button-filled">{{
              getBtnText
            }}</a>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import MicroModal from "micromodal";
import { XIcon } from "vue-feather-icons";

export default {
  name: "Modal",
  components: {
    XIcon
  },
  props: {
    heading: {
      type: String,
      default: ""
    },
    subhead: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    btnText: {
      type: String,
      default: ""
    },
    btnHref: {
      type: String,
      default: ""
    }
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
    }
  },
  computed: {
    getHeading() {
      /**
       * Get the heading of the modal as passed by
       * a prop
       */
      return this.heading;
    },
    getSubHead() {
      /**
       * Get the subheading of the modal
       */
      return this.subhead;
    },
    getText() {
      /**
       * Get the text of the modal
       */
      return this.text;
    },
    getBtnText() {
      /**
       * Get the text to be inside the button
       */
      return this.btnText;
    },
    getBtnHref() {
      /**
       * Get the URL for the button
       */
      return this.btnHref;
    }
  },
  mounted() {
    MicroModal.init();
    this.listenClose();
    console.log(this.heading);
  }
};
</script>

<style lang="scss" scoped>
.modal__close {
  &:hover,
  &:focus {
    outline: 0 !important;
    border: none !important;
  }
}

h3 {
  color: $ming;
}

.btn-container {
  a {
    background: $green;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
  }
}
</style>
