//主页面路由
import {Toast} from 'vant';
import store from '@/store';
const routes = [{
        path: '/main',
        name: 'main',
        component: () => import('@/views/mainPage/Chc_main')
    },
    {
<<<<<<< HEAD
        path: '/lesson',
        name: 'lesson',
        component: () => import('@/views/mainPage/Zpy_lesson')
    },
    {
        path: '/history',
        name: 'history',
        component: () => import('@/views/mainPage/Qyp_history')
    },
    {
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
>>>>>>> 48607d7d3398f3b5432f3b9da2a592de9871712b
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('@/views/mainPage/Qyp_User'),
        beforeEnter(to, from, next) {
            if (store.state.token) {
                next()
            } else {
                Toast('您还没有登录，请登录！')
                next('/login')
            }
        },
    },

]

export default routes