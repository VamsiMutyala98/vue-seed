import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Jobs from '../components/Jobs/Jobs.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
