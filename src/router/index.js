import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Сonfetti from '@/views/Сonfetti.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/confetti',
    name: 'Сonfetti',
    component: Сonfetti
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
