import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/home/index.vue')
    },
    {
      path: '/kata',
      name: 'kata',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/kata/index.vue')
    },
    {
      path: '/songs',
      name: 'songs',
      component: () => import('../pages/songs/index.vue')
    }
  ]
})

export default router
