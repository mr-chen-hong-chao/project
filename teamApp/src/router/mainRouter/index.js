//主页面路由
import {
    Toast
} from 'vant';
import store from '@/store';
const routes = [
    //首页
    {
        path: '/main',
        name: 'main',
        meta: {
            title: '首页'
        },
        component: () => import('@/views/mainPage/Chc_main')
    },
    //课程
    {
        path: '/lesson',
        name: 'lesson',
        meta: {
            title: '课程'
        },
        component: () => import('@/views/mainPage/Zpy_lesson')
    },
    //约课记录
    {
        path: '/history',
        name: 'history',
        meta: {
            title: '约课记录'
        },
        component: () => import('@/views/mainPage/Qyp_history')
    },
    //练习
    {
        path: '/practice',
        name: 'practice',
        meta: {
            title: '练习'
        },
        component: () => import('@/views/mainPage/Zpy_practice'),

    },

    //我的
    {
        path: '/user',
        name: 'user',
        component: () => import('@/views/mainPage/Qyp_User'),
        meta: {
            title: '我的'
        },
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