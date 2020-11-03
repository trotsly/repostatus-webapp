<template>
  <div id="api-container">
    <StaticContent :contentURL="getContentURL" />
  </div>
</template>

<script>
import StaticContent from "@/components/StaticContent";

export default {
  name: "API",
  components: {
    StaticContent
  },
  data() {
    return {
      contentURL: "../assets/api.md"
    };
  },
  computed: {
    getContentURL() {
      return this.contentURL;
    }
  }
};
</script>
