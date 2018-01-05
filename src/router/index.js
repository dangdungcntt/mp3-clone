import Vue from 'vue'
import Router from 'vue-router'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'

import Home from 'Components/home/index'

Vue.use(Router);
Vue.use(VueLodash, lodash);

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
