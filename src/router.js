//TODO: Fix Routes and add authentication "Borders"

import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home'
import Menu from '@/views/Menu';
import Map from '@/views/Map';
import Error from '@/views/Error'

const routes = [
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router