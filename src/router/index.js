import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import(/* webpackChunkName: "map" */ '../views/Map.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "menu" */ '../views/Menu.vue')
  },
  {
    path: '/menuWilhelminenhof',
    name: 'MenuWilhelminenhof',
    component: () => import(/* webpackChunkName: "menu" */ '../views/MenuWilhelminenhof.vue')
  },
  {
    path: '/menuTreskowallee',
    name: 'MenuTreskowallee',
    component: () => import(/* webpackChunkName: "menu" */ '../views/MenuTreskowallee.vue')
  },
  {
    path: '/MapLoggedIn',
    name: 'MapLoggedIn',
    component: () => import(/* webpackChunkName: "menu" */ '../views/MapLoggedIn.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
