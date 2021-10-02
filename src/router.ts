import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('./modules/index.vue'),
  },
  {
    path: '/user',
    component: () => import('./modules/user/pages/index.vue'),
  },
  {
    path: '/role',
    component: () => import('./modules/role/pages/index.vue'),
  },
  {
    path: '/category',
    component: () => import('./modules/category/pages/index.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
