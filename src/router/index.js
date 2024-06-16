import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/running-utils',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/',
    name: 'base',
    redirect: '/running-utils/home',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
