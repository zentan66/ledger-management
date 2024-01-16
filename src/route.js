import * as VueRouter from 'vue-router'

const mainPage = [
  {
    path: 'dashboard',
    name: 'dashboard',
    meta: { requireAuth: true },
    component: () => import('@/views/dashboard/index.vue'),
  },
  {
    path: 'tag-management',
    name: 'tag',
    meta: { requireAuth: true },
    component: () => import('@/views/tag/index.vue'),
  },
  {
    path: 'add-record',
    name: 'add',
    meta: { requireAuth: true },
    component: () => import('@/views/add/index.vue'),
  },
  {
    path: 'record-list',
    name: 'recordList',
    meta: { requireAuth: true },
    component: () => import('@/views/list/RecordList.vue'),
  },
]

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
    redirect: (to) => {
      return {
        path: 'dashboard',
        query: { ...to.params },
      }
    },
    children: mainPage,
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
