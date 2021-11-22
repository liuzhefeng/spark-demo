import {
  createRouter,
  createWebHashHistory
} from "vue-router";

const routes = [{
    path: "/",
    component: () => import("@/view/home.vue"),
    meta: {
      title: '首页'
    }
  },
  {
    path: "/vue3",
    name: "vue3",
    component: () => import("@/view/vue3.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(), //
  routes,
});

export default router;