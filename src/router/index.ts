import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import main from "./routes";
import store from '../store'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [...main];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(store.getters['account/isLoggedIn'])
  {
    if(to.name === 'signin' || to.name === 'signup')
    {      
      next('/home')
    }
  }
  next()
})

export default router;
