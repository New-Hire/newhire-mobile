import { createRouter, createWebHistory } from 'vue-router'
import CompanyDetailView from '../views/CompanyDetailView.vue'
import CompanyView from '../views/CompanyView.vue'
import HomeView from '../views/HomeView.vue'
import RateUserView from '../views/RateUserView.vue'
import RateView from '../views/RateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/company',
      name: 'company',
      component: CompanyView
    },
    {
      path: '/rate',
      name: 'rate',
      component: RateView
    },
    {
      path: '/companies/:companyId',
      name: 'companyDetail',
      component: CompanyDetailView
    },
    {
      path: '/users/:userId/rate',
      name: 'rateUserView',
      component: RateUserView
    }
  ]
})

export default router
