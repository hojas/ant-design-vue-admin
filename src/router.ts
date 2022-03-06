import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('./pages/home/index.vue'),
  },
  {
    path: '/user',
    component: () => import('./pages/user/index.vue'),
  },
  {
    path: '/role',
    component: () => import('./pages/role/index.vue'),
  },
  {
    path: '/category',
    component: () => import('./pages/category/index.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
