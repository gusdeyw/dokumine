import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      breadcrumbs: [
      { title: "Dashboard", url: "/" },
      { title: "Home", active: true },
    ],
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
    meta: {
      breadcrumbs: [
      { title: "Dashboard", url: "/" },
      { title: "About", active: true },
    ],
    }
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'bg-gradient-to-tr from-green-900 to-green-600',
  linkExactActiveClass: ''
})


export default router
