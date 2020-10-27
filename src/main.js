import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueProgressBar from "vue-progressbar";

Vue.config.productionTip = false;

Vue.use(VueProgressBar, {
  color: "#83C5BE",
  failedColor: "#F44336",
  height: "2px"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
