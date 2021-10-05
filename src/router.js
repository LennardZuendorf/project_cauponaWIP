//TODO: Fix Routes and add authentication "Borders"

import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Menu from '@/views/Menu';
import Map from '@/views/Map';
import Error from '@/views/Error'

const router = new VueRouter({
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

export default router