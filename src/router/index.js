import { createRouter, createWebHistory } from 'vue-router'
import Store from '../store'
import CompanyDetailView from '../views/CompanyDetailView.vue'
import CompanyView from '../views/CompanyView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RateUserView from '../views/RateUserView.vue'
import RateView from '../views/RateView.vue'
import UserRegisterCompanyView from '../views/UserRegisterCompanyView.vue'
import CompanyCandidateView from '../views/CompanyCandidateView.vue'

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
    },
    {
      path: '/user/register_companies',
      name: 'userRegisterCompanyView',
      component: UserRegisterCompanyView
    },
    {
      path: '/company/candidates',
      name: 'companyCandidateView',
      component: CompanyCandidateView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

router.beforeEach(async (to) => {
  if (
    // 检查用户是否已登录
    Store.getToken() === '' &&
    // 避免无限重定向
    to.name !== 'login'
  ) {
    // 将用户重定向到登录页面
    return { name: 'login' }
  }
})

export default router
