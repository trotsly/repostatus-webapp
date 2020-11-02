<template>
  <div id="content-parent" align="center">
    <div id="content-container" v-html="getContent"></div>
    <Footer />
  </div>
</template>

<script>
import marked from "marked";
import Footer from "@/components/Footer.vue";

export default {
  name: "StaticContent",
  components: {
    Footer
  },
  props: {
    contentURL: {
      type: String,
      default: ""
    }
  },
  data: () => {
    return {
      content: ""
    };
  },
  methods: {
    renderMd() {
      /**
       * For the about page the text will be present in the
       * passed file.
       */
      this.$Progress.start();
      this.$http
        .get(this.contentURL)
        .then(response => {
          this.content = marked(response.body);
        })
        .then(() => {
          this.$Progress.finish();
        });
    }
  },
  computed: {
    getContent() {
      return this.content;
    }
  },
  mounted() {
    this.renderMd();
  }
};
</script>

<style lang="scss">
#app {
  #content-container {
    width: 40%;
    text-align: left;
    @media only screen and (max-width: 950px) {
      width: 65%;
    }
    @media only screen and (max-width: 468px) {
      width: 90%;
    }
    h1,
    h2,
    h3 {
      margin: 1em 0;
      color: $black;
    }
    ul {
      margin: 4rem 0;
    }
    p,
    li {
      font-size: 18px;
      color: $ming;
      b {
        font-weight: 600;
      }
    }
    ul {
      margin: 0 0 1em 0;
    }
    a {
      color: $salmon;
      &:hover {
        color: darken($salmon, 5);
        text-decoration: underline;
      }
    }

    table {
      margin-bottom: 2em;

      td {
        min-width: 100px;
        padding: 10px 0;
      }

      thead {
        tr {
          border-bottom: 3px solid $ming;
        }
      }
      tbody {
        tr {
          border-bottom: 1px solid $green;
        }

        tr:last-child {
          border-bottom: none;
        }
      }
    }

    code,
    pre {
      background: $grey;
      padding: 10px 5px;
      @extend .rounded-cust-sm;
      color: $salmon;
      margin: 1.5em 0;
    }

    img {
      margin: 0.5em 0 1.5em 0;
    }
  }
}
</style>
