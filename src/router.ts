import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '~/store/auth'

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
  {
    path: '/comment',
    component: () => import('./pages/comment/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

router.beforeEach(async (to, _from, next) => {
  const { getUser, user, fetched } = useAuth()

  if (!fetched) {
    await getUser()
  }

  if (to.path.includes('/login')) {
    // 登录页面
    if (user) {
      // 已登录
      next({ path: '/' })
    } else {
      // 未登录
      next()
    }
  } else {
    // 非登录页面
    if (user) {
      // 已登录
      next()
    } else {
      // 未登录
      next({ path: '/login' })
    }
  }
})

export { router }
