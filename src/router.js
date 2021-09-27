import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Cafeteria from './views/Cafeteria';
import Profile from './views/Profile';


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
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/cafeteria',
      name: 'cafeteria',
      component: Cafeteria
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
