<template>
  <div id="support-container">
    <StaticContent :contentURL="getContentURL" />
  </div>
</template>

<script>
import StaticContent from "@/components/StaticContent";

export default {
  name: "Support",
  components: {
    StaticContent
  },
  data() {
    return {
      contentURL: "../assets/about.md"
    };
  },
  computed: {
    getContentURL() {
      return this.contentURL;
    }
  }
};
</script>
