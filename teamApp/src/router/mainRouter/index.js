//主页面路由
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