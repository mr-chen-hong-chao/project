import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//主页面路由
import MainRouter from './mainRouter'
// 项目页面路由
import ItemRouter from './itemRouter'
import store from '@/store'
import { Toast } from "vant";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/main',
    children:[
      ...MainRouter
    ]
  },
  ...ItemRouter
  
]

const router = new VueRouter({
  routes
})
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  if(typeof(location)=="string"){
    var Separator = "&";
    if(location.indexOf('?')==-1) { Separator='?'; }
    location = location + Separator + "random=" + Math.random();
  }
  return routerPush.call(this, location).catch(error=> error)
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.isRequireLogin)) {
      if (localStorage.getItem('token')) {
        next()
      } else {
        Toast('您还没有登录，请登录！')
        next('/login')
      }
    } else {
      next()
    }
  
    //导航头部的文字显示
    if (to.meta.title) {
      document.title = to.meta.title
    }
  
  })

 



export default router
