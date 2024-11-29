import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SpacesView from '../views/SpacesView.vue'
import Adminview from '../views/Adminview.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/spaces',
      name: 'spaces',
      component: SpacesView
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Adminview
    }
  ]
})

export default router