<template>
  <div id="privacy-content">
    <StaticContent :contentURL="getContentURL" />
  </div>
</template>

<script>
import StaticContent from "@/components/StaticContent";

export default {
  name: "Privacy",
  components: {
    StaticContent
  },
  data() {
    return {
      contentURL: "../assets/privacy.md"
    };
  },
  computed: {
    getContentURL() {
      return this.contentURL;
    }
  }
};
</script>
