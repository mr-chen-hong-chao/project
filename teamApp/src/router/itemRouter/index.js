//项目路由
const routes = [
    // 详情路由
    {
        path: '/teacher-detail',
        name: 'teacher-detail',
        component: () => import('@/views/itemPage/Chc_teacher-detail')
    },
    // 辅导路由
    {
        path: '/tutoring',
        name: 'tutoring',
        component: () => import('@/views/itemPage/Chc_tutoring')
    },
    // 学习日历路由
    {
        path: '/calendar',
        name: 'calendar',
        component: () => import('@/views/itemPage/Chc_calendar')
    },
    {
        path:'/free', //免费和详情
        name:'free',
        component:()=>import('@/views/itemPage/Free')
    },
    {
        path:'/search', //搜索
        name:'search',
        component:()=>import('@/views/itemPage/Search')
    },
    {
        path:'/testContent', //题库选择
        name:'testContent',
        component:()=>import('@/views/itemPage/Zpy_testContent')
    },

    

    //qyp登录
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/itemPage/login/Qyp_login.vue')
    },
    //qyp注册
    {
        path: '/Qyp_register',
        name: 'Qyp_register',
        component: () => import('@/views/itemPage/login/Qyp_register.vue')
    },
    //qyp关注的老师
    {
        path: '/Qyp_teacher',
        name: 'Qyp_teacher',
        component: () => import('@/views/itemPage/login/Qyp_teacher.vue')
    },
    //qyp我的收藏
    {
        path: '/Qyp_collect',
        name: 'Qyp_collect',
        component: () => import('@/views/itemPage/login/Qyp_collect.vue')
    },
    //qyp课程订单
    {
        path: '/Qyp_order_lesson',
        name: 'Qyp_order_lesson',
        component: () => import('@/views/itemPage/login/Qyp_order_lesson.vue')
    },
    //会员订单
    {
        path: '/Qyp_order_vip',
        name: 'Qyp_order_vip',
        component: () => import('@/views/itemPage/login/Qyp_order_vip.vue')
    },
    //qyp约课订单
    {
        path: '/Qyp_order_Appointment',
        name: 'Qyp_order_Appointment',
        component: () => import('@/views/itemPage/login/Qyp_order_Appointment.vue')
    },
    //qyp优惠卷
    {
        path: '/Qyp_youhui',
        name: 'Qyp_youhui',
        component: () => import('@/views/itemPage/login/Qyp_youhui.vue')
    },
    //qyp学习卡
    {
        path: '/Qyp_style',
        name: 'Qyp_style',
        component: () => import('@/views/itemPage/login/Qyp_style.vue')
    },
    //qyp会员
    {
        path: '/Qyp_vip',
        name: 'Qyp_vip',
        component: () => import('@/views/itemPage/login/Qyp_vip.vue')
    },
    //qyp我的消息
    {
        path: '/Qyp_msg',
        name: 'Qyp_msg',
        component: () => import('@/views/itemPage/login/Qyp_msg.vue')
    },
    //qyp意见反馈
    {
        path: '/Qyp_opinion',
        name: 'Qyp_opinion',
        component: () => import('@/views/itemPage/login/Qyp_opinion.vue')
    },
    //qyp在线客服
    {
        path: '/Qyp_server',
        name: 'Qyp_server',
        component: () => import('@/views/itemPage/login/Qyp_server.vue')
    },
    //qyp设置
    {
        path: '/Qyp_set',
        name: 'Qyp_set',
        component: () => import('@/views/itemPage/login/Qyp_set.vue')
    },
    //qyp信息编写
    {
        path: '/Qyp_msg_edit',
        name: 'Qyp_msg_edit',
        component: () => import('@/views/itemPage/login/Qyp_msg_edit.vue')
    }
]

export default routes