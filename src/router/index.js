import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '@/middlewares/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    meta: {
      middleware: [Auth],
    },
    component: () => import(/* webpackChunkName: "dashboard" */ '@/modules/dashboard/views/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'auth',
    },
    component: () => import(/* webpackChunkName: "login" */ '@/modules/auth/views/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      layout: 'auth',
    },
    component: () => import(/* webpackChunkName: "register" */ '@/modules/auth/views/register.vue')
  },
  {
    path: '/product',
    name: 'product',
    meta: {
      middleware: [Auth],
    },
    component: () => import(/* webpackChunkName: "product" */ '@/modules/product/views/index.vue')
  },
  {
    path: '/store',
    name: 'store',
    meta: {
      middleware: [Auth],
    },
    component: () => import(/* webpackChunkName: "store" */ '@/modules/store/views/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(async (to, from, next) => {
  if (to.meta.middleware) {
    const middleware = to.meta.middleware;
    const payload = { to, from, next };
    let preventNext = false;
    for (let i = 0; i < middleware.length; i++) {
      const result = await middleware[i](payload);
      if (!result) {
        preventNext = true;
        break;
      }
    }
    if (preventNext) {
      return;
    }
  }
  next();
});

export default router
