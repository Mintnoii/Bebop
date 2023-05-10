import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      // Redirects route from index.html to '/' when initially load Extension
      path: '/index.html',
      redirect: '/'
    },
    {
      // Redirects route from index.html to '/' when initially load Extension
      path: '/popup.html',
      redirect: '/'
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
  ]
});

export default router;