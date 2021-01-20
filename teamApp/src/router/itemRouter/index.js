//项目路由
const routes = [
    //老师详情
    {
        path: '/teacher-detail',
        name: 'teacher-detail',
        meta: {
            isRequireLogin: true
        },
        component: () => import('@/views/itemPage/Chc_teacher-detail')
    },
    {
        path: '/tutoring',
        name: 'tutoring',
        meta: {
            title: '一对一辅导'
        },
        component: () => import('@/views/itemPage/Chc_tutoring')
    },
    // 学习日历路由
    {
        path: '/calendar',
        name: 'calendar',
        meta: {
            title: '学习日历'
        },
        component: () => import('@/views/itemPage/Chc_calendar')
    },
    {
        path: '/free', //免费和详情
        name: 'free',
        meta: {
            title: '详情',

        },
        component: () => import('@/views/itemPage/Free'),
        path: '/teacherList',
        name: 'teacherList',
        meta: {
            title: '名师阵容'
        },
        component: () => import('@/views/itemPage/Chc_teacherList')
    },

    {
        path: '/free', //免费和详情
        name: 'free',
        meta: {
            title: '详情'
        },
        component: () => import('@/views/itemPage/Free')
    },
    {
        path: '/search', //搜索
        name: 'search',
        meta: {
            title: '搜索'
        },
        component: () => import('@/views/itemPage/Search')
    },
    {
        path: '/searchList', //搜索结果列表
        name: 'searchList',
        meta: {
            title: '搜索结果列表'
        },
        component: () => import('@/views/itemPage/Zpy_searchList')
    },
    {
        path: '/testContent', //题库选择
        name: 'testContent',
        meta: {
            title: '题库选择'
        },
        component: () => import('@/views/itemPage/Zpy_testContent')
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
        meta: {
            title: '我的关注'
        },
        component: () => import('@/views/itemPage/login/Qyp_teacher.vue')

    },
    //qyp我的收藏
    {
        path: '/Qyp_collect',
        name: 'Qyp_collect',
        meta: {
            title: '我的收藏'
        },
        component: () => import('@/views/itemPage/login/Qyp_collect.vue')
    },
    //qyp课程订单
    {
        path: '/Qyp_order_lesson',
        name: 'Qyp_order_lesson',
        meta: {
            title: '课程订单'
        },
        component: () => import('@/views/itemPage/login/Qyp_order_lesson.vue')
    },
    //会员订单
    {
        path: '/Qyp_order_vip',
        name: 'Qyp_order_vip',
        meta: {
            title: '会员订单'
        },
        component: () => import('@/views/itemPage/login/Qyp_order_vip.vue')
    },
    //qyp约课订单
    {
        path: '/Qyp_order_Appointment',
        name: 'Qyp_order_Appointment',
        meta: {
            title: '约课订单'
        },
        component: () => import('@/views/itemPage/login/Qyp_order_Appointment.vue')
    },
    //qyp优惠卷
    {
        path: '/Qyp_youhui',
        name: 'Qyp_youhui',
        meta: {
            title: '优惠卷'
        },
        component: () => import('@/views/itemPage/login/Qyp_youhui.vue')
    },
    //qyp学习卡
    {
        path: '/Qyp_style',
        name: 'Qyp_style',
        meta: {
            title: '学习卡'
        },
        component: () => import('@/views/itemPage/login/Qyp_style.vue')
    },
    //qyp会员
    {
        path: '/Qyp_vip',
        name: 'Qyp_vip',
        meta: {
            title: '会员'
        },
        component: () => import('@/views/itemPage/login/Qyp_vip.vue')
    },
    //qyp我的消息
    {
        path: '/Qyp_msg',
        name: 'Qyp_msg',
        meta: {
            title: '我的消息'
        },
        component: () => import('@/views/itemPage/login/Qyp_msg.vue')
    },
    //qyp意见反馈
    {
        path: '/Qyp_opinion',
        name: 'Qyp_opinion',
        meta: {
            title: '意见反馈'
        },
        component: () => import('@/views/itemPage/login/Qyp_opinion.vue')
    },
    //qyp在线客服
    {
        path: '/Qyp_server',
        name: 'Qyp_server',
        meta: {
            title: '在线客服'
        },
        component: () => import('@/views/itemPage/login/Qyp_server.vue')
    },
    //qyp设置
    {
        path: '/Qyp_set',
        name: 'Qyp_set',
        meta: {
            title: '设置'
        },
        component: () => import('@/views/itemPage/login/Qyp_set.vue')
    },
    //qyp信息编写
    {
        path: '/Qyp_msg_edit',
        name: 'Qyp_msg_edit',
        meta: {
            title: '信息编写'
        },
        component: () => import('@/views/itemPage/login/Qyp_msg_edit.vue')
    },
    {
        path: '/Qyp_yaoqing',
        name: 'Qyp_yaoqing',
        meta: {
            title: '好友邀请'
        },
        component: () => import('@/views/itemPage/login/Qyp_yaoqing.vue')
    }
]

export default routes

// 你改了啥？