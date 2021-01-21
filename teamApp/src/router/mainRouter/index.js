//主页面路由
<<<<<<< HEAD
import {Toast} from 'vant';
import store from '@/store';
const routes = [{
        path: '/main',
        name: 'main',
        component: () => import('@/views/mainPage/Chc_main')
    },
    {
        path: '/lesson',
        name: 'lesson',
        meta:{title:'课程'},
        component: () => import('@/views/mainPage/Zpy_lesson')
    },
=======
const routes =[
>>>>>>> d03aa5043faa8a8ad32cd4ae0da910c14a2ae753
    {
        path:'/main',
        name:'main',
        meta:{
            title:'首页'
        },
        component:()=>import('@/views/mainPage/Chc_main')
    },
    {
<<<<<<< HEAD
        path: '/practice',
        name: 'practice',
        component: () => import('@/views/mainPage/Zpy_practice')
=======
        path:'/lesson',
        name:'lesson',
        meta:{
            title:'特色课'
        },
        component:()=>import('@/views/mainPage/Zpy_lesson')
    },
    {
        path:'/history',
        name:'history',
        meta:{
            title:'约课记录'
        },
        component:()=>import('@/views/mainPage/Qyp_history')
    },
    {
        path:'/practice',
        name:'practice',
        meta:{
            title:'练习'
        },
        component:()=>import('@/views/mainPage/Zpy_practice')
>>>>>>> d03aa5043faa8a8ad32cd4ae0da910c14a2ae753
    },
    {
        path:'/user',
        name:'user',
        meta:{
            title:'个人中心'
        },
        component:()=>import('@/views/mainPage/Qyp_User')
    },

]

export default routes