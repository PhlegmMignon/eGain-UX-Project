import { createRouter, createWebHistory } from "vue-router";
import Description from "../views/Description.vue";
import Questions from "../views/Questions.vue";
import Verify from "../views/Verify.vue";
import SolutionFeedback from "../views/SolutionFeedback.vue";

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
    {
      path: "/verify",
      name: "Verify",
      component: Verify,
    },
    {
      path: "/solution-feedback",
      name: "SolutionFeedback",
      component: SolutionFeedback,
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
