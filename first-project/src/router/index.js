import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import AddPaymentForm from '../components/AddPaymentForm.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard/:page/',
    name: 'Dashboard',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  }, 
  {
    path: '/notfound',
    name: 'NotFound',
    component: NotFoundView
  },
  {
    path: '/add/:section/:category',
    name: 'AddPaymentForm',
    component: AddPaymentForm
  },
  {
    path: '*',
    redirect: { name: 'NotFound'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
