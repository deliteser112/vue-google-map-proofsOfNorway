// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'maps',
          name: 'Map',
          component: () => import('@/views/maps/Index.vue'),
          meta: { src: require('@/assets/images/pro.jpg') },
        },
        {
          path: '/auth/login',
          name: 'Login',
          component: () => import('@/views/auth/Login.vue'),
        },
        {
          path: '/auth/register',
          name: 'Register',
          component: () => import('@/views/auth/Register.vue'),
        },
        {
          path: '/auth/forgot-password',
          name: 'ForgotPassword',
          component: () => import('@/views/auth/ForgotPassword.vue'),
        },
      ],
    },

  ],
})

export default router
