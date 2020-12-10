import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Status from "../views/Status.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/privacy",
    name: "Privacy Policy",
    component: () => import("../views/Privacy.vue")
  },
  {
    path: "/support",
    name: "Support",
    component: () => import("../views/Support.vue")
  },
  {
    path: "/status",
    name: "Status",
    component: Status
  },
  {
    path: "/badge",
    name: "Badge",
    component: () => import("../views/Badge.vue")
  },
  {
    path: "/api",
    name: "API",
    component: () => import("../views/API.vue")
  },
  {
    path: "/optimum-status",
    name: "Optimum Status",
    component: () => import("../views/OptimumStatus.vue")
  },
  {
    path: "*",
    name: "Not Found",
    component: () => import("../views/PageNotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
