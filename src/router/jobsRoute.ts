import Home from "../views/Home.vue";
import JobListings from "../views/JobListings.vue";

const BASE = "/jobs";

const ROUTES = {
  BASE: BASE,
  ADD: `${BASE}/add`,
};

const router = {
  path: ROUTES.BASE,
  children: [
    { path: ROUTES.BASE, component: JobListings },
    {
      path: ROUTES.ADD,
      component: Home,
    },
  ],
};

export default {
  ROUTES,
  router,
};
