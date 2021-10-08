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
    path: '/homeLoggedIn',
    name: 'HomeLoggedIn',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeLoggedIn.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import(/* webpackChunkName: "map" */ '../views/MensaOverview/Map.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "menu" */ '../views/Menu/Menu.vue')
  },
  {
    path: '/menuWilhelminenhof',
    name: 'MenuWilhelminenhof',
    component: () => import(/* webpackChunkName: "menu" */ '../views/Menu/MenuWilhelminenhof.vue')
  },
  {
    path: '/menuTreskowallee',
    name: 'MenuTreskowallee',
    component: () => import(/* webpackChunkName: "menu" */ '../views/Menu/MenuTreskowallee.vue')
  },
  {
    path: '/MapLoggedIn',
    name: 'MapLoggedIn',
    component: () => import(/* webpackChunkName: "menu" */ '../views/MensaOverview/MapLoggedIn.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
