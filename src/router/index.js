import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '@/auth'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path:'/homeauth',
    name: 'HomeAuth',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeAuth.vue')
  },
  {
    path:'/home',
    name:'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "map" */ '../views/MensaOverview/List.vue')
  },
  {
    path: '/listauth',
    name: 'ListAuth',
    component: () => import(/* webpackChunkName: "map" */ '../views/MensaOverview/ListAuth.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "menu" */ '../views/Menu/Menu.vue')
  },
  {
    path: '/menuauth',
    name: 'MenuAuth',
    component: () => import(/* webpackChunkName: "menu" */ '../views/Menu/Menu.vue')
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import(/* webpackChunkName: "menu" */ '../views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
