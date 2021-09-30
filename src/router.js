import Vue from 'vue'
import Router from 'vue-router'
import {auth} from '/firebase'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Cafeteria from './views/Menu';
import Profile from './views/Map';


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/cafeteria',
      name: 'cafeteria',
      component: Cafeteria,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
