<template>
  <div class="status">
    <RepoName />
    <Happiness v-if="!getIsError" @error="handleError" />
    <Error v-else :code="getErrorCode" :message="getErrorMessage" />
    <Footer />
  </div>
</template>

<script>
import RepoName from "@/components/RepoName";
import Happiness from "@/components/Happiness";
import Footer from "@/components/Footer";
import Error from "@/components/Error";

export default {
  name: "Status",
  components: {
    RepoName,
    Happiness,
    Footer,
    Error
  },
  data() {
    return {
      isError: false,
      errorCode: null,
      errorMessage: ""
    };
  },
  methods: {
    handleError: async function(responsePassed) {
      /**
       * Handle the error nicely with teh response passed by the
       * Happiness component
       */
      this.errorCode = responsePassed.status;

      const responseJson = await responsePassed.json();
      this.errorMessage = responseJson.detail;

      this.isError = true;
    }
  },
  computed: {
    getErrorCode() {
      return this.errorCode;
    },
    getErrorMessage() {
      return this.errorMessage;
    },
    getIsError() {
      return this.isError;
    }
  }
};
</script>

<style lang="scss" scoped>
.status {
  @media only screen and (min-width: $mobile-breakpoint) {
    max-width: 65%;
    margin: 0 auto;
    padding-top: 2em;
  }
}
</style>
