import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import JobListings from "../views/JobListings.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/joblistings",
      component: JobListings,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],
});

export default router;
