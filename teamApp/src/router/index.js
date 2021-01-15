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
<<<<<<< HEAD
    redirect:'/main',
=======
>>>>>>> 6a4824d (全艳平 我的页面)
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
