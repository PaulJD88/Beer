import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/information',
    name: 'Information',
    component: () => import(/* webpackChunkName: "about" */ '../views/Information.vue'),
  },
  {
    path: '/selectbeer',
    name: 'BeerList',
    component: () => import(/* webpackChunkName: "about" */ '../views/SelectBeer.vue'),
  },
  {
    path: '/allbeer',
    name: 'AllBeer',
    component: () => import(/* webpackChunkName: "about" */ '../views/AllBeer.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
