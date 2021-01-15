//主页面路由
const routes =[
    {
        path:'main',
        name:'main',
        component:()=>import('@/views/mainPage/Chc_main')
    },
    {
        path:'lesson',
        name:'lesson',
        component:()=>import('@/views/mainPage/Zpy_lesson')
    },
    {
        path:'history',
        name:'history',
        component:()=>import('@/views/mainPage/Qyp_history')
    },
    {
        path:'practice',
        name:'practice',
        component:()=>import('@/views/mainPage/Zpy_practice')
    },
    {
        path:'user',
        name:'user',
        component:()=>import('@/views/mainPage/Qyp_User')
    },
<<<<<<< HEAD
    {
        path:'lesson', //课程
        name:'lesson',
        component:()=>import('@/views/mainPage/Zpy_lesson')
    },
    {
        path:'practice', //练习
        name:'practice',
        component:()=>import('@/views/mainPage/Zpy_practice')
=======
    //约课记录
    {
        path:'history',
        name:'history',
        component:()=>import('@/views/mainPage/Qyp_history')
>>>>>>> d6c2134c4f7e3dbed940bb724d3796e6253dd702
    }

]

export default routes