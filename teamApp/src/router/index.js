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
 



export default router
