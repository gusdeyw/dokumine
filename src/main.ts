import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";

import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  // Example routes
  {
    path: '/',
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
    component: AboutView,
    meta: {
      breadcrumbs: [
        { title: "Dashboard", url: "/" },
        { title: "About", active: true },
      ],
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'bg-gradient-to-tr from-green-900 to-green-600',
  linkExactActiveClass: ''
});

const app = createApp(App)

// app.use(createPinia())
app.use(router)
app.mount('#app')
