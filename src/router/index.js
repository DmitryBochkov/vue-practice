import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import AuthGuard from './auth-guard'
import Ad from '@/components/Ads/Ad.vue'
import NewAd from '@/components/Ads/NewAd.vue'
import AdList from '@/components/Ads/AdList.vue'
import Login from '@/components/Auth/Login.vue'
import Registration from '@/components/Auth/Registration.vue'
import Orders from '@/components/User/Orders.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/ad/:id',
      props: true,
      name: 'ad',
      component: Ad
    },
    {
      path: '/list',
      name: 'list',
      component: AdList,
      beforeEnter: AuthGuard
    },
    {
      path: '/new',
      name: 'newAd',
      component: NewAd,
      beforeEnter: AuthGuard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      beforeEnter: AuthGuard
    }
  ],
  mode: 'history'
})
