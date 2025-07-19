import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    component: () => import('../views/VoterView.vue')
  }, {
    path: '/manage',
    component: () => import('../views/ManageView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router