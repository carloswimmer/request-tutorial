import Vue from "vue";
import VueRouter from "vue-router";
import Users from "../views/Users.vue";
import Posts from "../views/Posts.vue";
import Albums from "../views/Albums.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Users",
    component: Users,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/albums",
    name: "Albums",
    component: Albums,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
