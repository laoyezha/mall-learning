import {
  createRouter,
  createWebHistory,
  defineAsyncComponent,
} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: defineAsyncComponent(() => import('@/views/home.vue')),
  },
  {
    path: '/aaa',
    name: 'aaa',
    component: defineAsyncComponent(() => import('@/views/hhh.vue')),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
