import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//主页面路由
import MainRouter from './mainRouter'
// 项目页面路由
import ItemRouter from './itemRouter'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      ...MainRouter
    ]
  },
  ...ItemRouter
  
]

const router = new VueRouter({
  routes
})

export default router
