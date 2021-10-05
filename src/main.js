import Vue from 'vue'
import vuex from 'vuex'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './views/Home';
import Map from './views/Map';
import Menu from './views/Menu';
import Error from './views/Error';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/map', component: Map },
    { path: '/menu', component: Menu },
    { path: '/error', component: Error}
  ]
});

new Vue({
  router,
  vuetify,
  vuex,
}).$mount('#app');