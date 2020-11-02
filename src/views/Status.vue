<template>
  <div class="status">
    <RepoName :reponame="getStateRepo" />
    <Happiness
      v-if="!getIsError"
      @error="handleError"
      :isStateUsed="getStateUsed"
      :stateRepo="getStateRepo"
    />
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
      errorMessage: "",
      isStateUsed: sessionStorage.getItem("stateUsed"),
      stateRepo: sessionStorage.getItem("stateRepo")
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
    },
    handleInvalidState: function() {
      /**
       * Handle the errors if invalid state is passed.
       *
       * This would mostly happen if someone opens the status
       * endpoint without going through the whole process.
       *
       * In this case, we need to redirect the user to the home page.
       */
      if (!this.stateRepo || !this.isStateUsed)
        this.$router.push({ path: "/" });
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
    },
    getStateUsed() {
      return this.isStateUsed;
    },
    getStateRepo() {
      return this.stateRepo;
    }
  },
  mounted() {
    this.handleInvalidState();
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
