import { createRouter, createWebHistory } from "vue-router";
import Description from "../views/Description.vue";
import Questions from "../views/Questions.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Description",
      component: Description,
    },
    {
      path: "/questions",
      name: "Questions",
      component: Questions,
    },
  ],
});

// routes = [
//   {
//     path: "/",
//     name: "Description",
//     component: Description,
//   },
//   {
//     path: "/questions",
//     name: "Questions",
//     component: Questions,
//   },
// ];

export default router;
