//主页面路由
const routes =[
    {
        path:'/main',
        name:'main',
        component:()=>import('@/views/mainPage/Chc_main')
    },
    {
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
    },
    {
        path:'/user',
        name:'user',
        component:()=>import('@/views/mainPage/Qyp_User')
    },

]

export default routes