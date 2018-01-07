import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Home from 'Components/home/index'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        auth: true // A protected route
      },
      component: Home
    }
  ]
})
