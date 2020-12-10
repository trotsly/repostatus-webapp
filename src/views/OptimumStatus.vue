<template>
  <div id="support-container">
    <StaticContent :contentURL="getContentURL" />
  </div>
</template>

<script>
import StaticContent from "@/components/StaticContent";

export default {
  name: "OptimumStatus",
  components: {
    StaticContent
  },
  data() {
    return {
      contentURL: "../assets/optimum-status.md"
    };
  },
  computed: {
    getContentURL() {
      return this.contentURL;
    }
  }
};
</script>
