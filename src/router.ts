import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('./pages/home/index.vue'),
  },
  {
    path: '/login',
    component: () => import('./pages/login/index.vue'),
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
  {
    path: '/article',
    component: () => import('./pages/article/index.vue'),
  },
  {
    path: '/article/:id/content',
    component: () => import('./pages/article/content.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory('/admin'),
  routes,
})
