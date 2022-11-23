import Vue from 'vue'
import { Plugins } from "@capacitor/core";
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
    component: () => import('../views/admin/Crud.vue')
  },
    {
    path: '/estadistica',
    name: 'estadistica',
    component: () => import('../views/admin/Estadistica.vue')
  },
   {
    path: '/comentarios',
    name: 'comentarios',
    component: () => import( '../views/admin/Comentarios.vue')
  },
     {
    path: '/login',
    name: 'login',
    component: () => import( '../views/admin/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
