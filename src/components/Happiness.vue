<template>
  <div id="stats-container">
    <div class="data-text">
      <h5 v-if="getIsLoading" class="text-animation text"></h5>
      <h5 v-else>We went through</h5>
    </div>
    <div class="numbers-container">
      <Number :number="getNumber('char')" name="Chars" />
      <Number :number="getNumber('word')" name="Words" />
      <Number :number="getNumber('sentence')" name="Lines" />
    </div>
    <div class="status-container">
      <HappinessStatus :status="getTotalStatus" />
    </div>
    <div class="status-each-container">
      <StatusEach
        name="Issues"
        :text="getStatus('issue')"
        class="status-each-el"
      />
      <StatusEach
        name="Pulls"
        :text="getStatus('pull')"
        class="status-each-el"
      />
      <StatusEach
        name="Commits"
        :text="getStatus('commit')"
        class="status-each-el"
      />
    </div>
  </div>
</template>

<script>
import Number from "@/components/NumberStats";
import HappinessStatus from "@/components/HappinessStatus";
import StatusEach from "@/components/StatusEach";

export default {
  name: "Happiness",
  components: {
    Number,
    HappinessStatus,
    StatusEach
  },
  data() {
    return {
      isLoading: true,
      dataUrl: "http://0.0.0.0:5000/status",
      isStateUsed: sessionStorage.getItem("stateUsed"),
      stateRepo: sessionStorage.getItem("stateRepo"),
      sessionState: localStorage.getItem("sessionState"),
      dataFetched: {}
    };
  },
  methods: {
    buildHeader: function() {
      // Build header based on if state was used
      var headers = {
        Accept: "application/json"
      };

      if (this.isStateUsed == "true") headers["X-State"] = this.sessionState;

      return headers;
    },
    fetchDataUpstream: async function() {
      /**
       * Fetch the data from upstream using the API
       */
      const HEADERS = this.buildHeader();
      const response = await fetch(
        this.dataUrl +
          "?" +
          new URLSearchParams({
            repo: this.stateRepo
          }),
        {
          headers: HEADERS
        }
      );

      // Check if response was invalid
      if (response.status != 200) {
        this.emitErrorMessage(response);
        return;
      }

      const jsonData = await response.json();

      // Disable the loading animation as well
      this.isLoading = false;
      this.dataFetched = jsonData;
    },
    getNumber: function(numberType) {
      /**
       * Return the number based on the type passed
       */
      try {
        return this.dataFetched["total"]["data"][numberType];
      } catch (err) {
        return null;
      }
    },
    getStatus: function(statusType) {
      /**
       * Return the status based on the type passed
       */
      try {
        return this.dataFetched[statusType]["emotion"]["text"];
      } catch (err) {
        return null;
      }
    },
    emitErrorMessage: function(responsePassed) {
      /**
       * Emit the passed code and json
       */
      this.$emit("error", responsePassed);
    }
  },
  computed: {
    getIsLoading() {
      return this.isLoading;
    },
    getTotalStatus() {
      try {
        return this.dataFetched["total"]["emotion"]["text"];
      } catch (err) {
        return null;
      }
    }
  },
  mounted() {
    this.fetchDataUpstream();
  }
};
</script>

<style lang="scss" scoped>
#stats-container {
  @extend .rounded-cust-sm;

  @media only screen and (max-width: $mobile-breakpoint) {
    border: none;
  }

  border: 1px solid darken($grey, 8);
  padding: 1em;

  .data-text {
    text-align: left;
    margin: 0;
    padding-left: 1em;
    color: $dark;
    font-weight: 400;

    .text-animation {
      @extend .skeleton;

      &.text {
        width: 300px;
        height: 20px;

        @media only screen and (max-width: $mobile-breakpoint) {
          width: 150px;
          height: 10px;
        }
      }
    }
  }

  .numbers-container {
    display: flex;
  }

  .status-each-container {
    display: flex;

    @media only screen and (max-width: $mobile-breakpoint) {
      flex-direction: column;

      .status-each-el {
        border-right: none !important;
        margin: none !important;
        margin-bottom: 0.5em;
      }
    }

    .status-each-el {
      margin-right: 1.5em;
      padding-right: 1.5em;

      border-right: 2px solid $green;
    }

    .status-each-el:last-child {
      border-right: none;
    }
  }
}
</style>
