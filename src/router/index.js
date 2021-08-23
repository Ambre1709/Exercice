import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/Consoles",
      name: "Consoles",
      component: () => import("../views/Consoles.vue"),
    },
    {
      path: "/Jeux",
      name: "Jeux",
      component: () => import("../views/Jeux.vue"),
    },
    {
      path: "/News",
      name: "News",
      component: () => import("../views/News.vue"),
    },
    // {
    //   path: "/404",
    //   name: "404",
    //   component: () => import("../views/404.vue"),
    // },
  ];

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
export default router;