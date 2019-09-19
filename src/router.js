import Vue from 'vue'
import store from './store/store'
import Router from 'vue-router'
import HomeLayout from './views/HomeLayout.vue'
import Login from './views/Login.vue'

import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeLayout,
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          name: 'home',
          component: Dashboard
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // {
    //   path: "/error",
    //   name: "500",
    //   component: Internal500
    // },
    // {
    //   path: "*",
    //   name: "404",
    //   component: Error404
    // },

  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !store.getters.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router