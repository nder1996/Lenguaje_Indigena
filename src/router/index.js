import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crud',
    name: 'crud',
    component: () => import(/* webpackChunkName: "about" */ '../views/Crud.vue')
  },
    {
    path: '/estadistica',
    name: 'estadistica',
    component: () => import(/* webpackChunkName: "about" */ '../views/Estadistica.vue')
  },
   {
    path: '/comentarios',
    name: 'comentarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Comentarios.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
