import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

import JobsRoute from "./jobsRoute";

export const ROUTES = {
  HOME: "/",
  JOBS: JobsRoute.ROUTES,
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.HOME,
      component: Home,
    },
    JobsRoute.router,
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],
});

export default router;
