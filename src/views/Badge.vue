<template>
  <div id="badge-container">
    <StaticContent :contentURL="getContentURL" />
  </div>
</template>

<script>
import StaticContent from "@/components/StaticContent";

export default {
  name: "Badge",
  components: {
    StaticContent
  },
  data() {
    return {
      contentURL: "../assets/badge.md"
    };
  },
  computed: {
    getContentURL() {
      return this.contentURL;
    }
  }
};
</script>
