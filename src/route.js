import * as VueRouter from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {},
    component: () =>
      import(/* webpackChunkName: "introduce" */ '@/views/Login.vue'),
  },
  {
    path: '/',
    name: 'main',
    meta: { requireAuth: true },
    component: () =>
      import(/* webpackChunkName: "introduce" */ '@/views/Main.vue'),
  },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('accessToken')
  if (!accessToken && to.meta?.requireAuth) {
    // 如果没有登录，且当前路由需要登录
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
