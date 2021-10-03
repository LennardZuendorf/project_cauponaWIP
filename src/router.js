import Vue from 'vue'
import Router from 'vue-router'
import {auth} from '/firebase'
import Home from '@/views/Home'
import Menu from '@/views/Menu';
import Map from '@/views/Map';
import Error from '@/views/Error'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/error',
      name: 'error',
      component: Error
    }
  ]
})
