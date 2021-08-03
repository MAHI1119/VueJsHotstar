import Vue from "vue";
import VueRouter from "vue-router";
import Subscribe from "../views/Subscribe.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: '/Subscribe',
    name: 'Subscribe',
    component: Subscribe,
    component:() =>
    import( /* webpackChunkName:"About" */"../views/Subscribe.vue"),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:About,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    // component: () =>
    //     import ( /* webpackChunkName: "about" */ "../views/Subscribe.vue"),
},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;





