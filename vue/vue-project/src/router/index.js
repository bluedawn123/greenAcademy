import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('../views/TempView.vue'),
    },
    {
      path: '/ref',
      name: 'ref',
      component: () => import('../views/RefView.vue'),
    },

    {
      path: '/reactivity',
      name: 'reactivity',
      component: () => import('../views/ReactivityView.vue'),
    }
  ],
})

export default router
