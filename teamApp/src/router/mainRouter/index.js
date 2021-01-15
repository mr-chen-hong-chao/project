//主页面路由
const routes =[
    {
        path:'main',
        name:'main',
        component:()=>import('@/views/mainPage/Chc_main')
    },
    {
        path:'user',
        name:'user',
        component:()=>import('@/views/mainPage/Qyp_User')
    },
    {
        path:'lesson', //课程
        name:'lesson',
        component:()=>import('@/views/mainPage/Zpy_lesson')
    },
    {
        path:'practice', //练习
        name:'practice',
        component:()=>import('@/views/mainPage/Zpy_practice')
    }

]

export default routes