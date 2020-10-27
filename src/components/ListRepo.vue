<template>
  <div id="list-repo">
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
          <main class="modal__content" id="modal-frame-content"></main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MicroModal from "micromodal";
import { XIcon } from "vue-feather-icons";

export default {
  name: "ListRepo",
  components: {
    XIcon
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
  mounted() {
    MicroModal.init();
    this.listenClose();
  }
};
</script>
