import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueProgressBar from "vue-progressbar";
import VueResource from "vue-resource";

Vue.config.productionTip = false;

Vue.use(VueProgressBar, {
  color: "#83C5BE",
  failedColor: "#F44336",
  height: "2px"
});
Vue.use(VueResource);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
