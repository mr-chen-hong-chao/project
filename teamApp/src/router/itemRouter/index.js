//项目路由
const routes =[
    // 详情路由
    {
        path:'/detail',
        name:'detail',
        component:()=>import('@/views/itemPage/Chc_Detail')
    },
    // 辅导路由
    {
        path:'/tutoring',
        name:'tutoring',
        component:()=>import('@/views/itemPage/Chc_tutoring')
    },
    // 学习日历路由
    {
        path:'/calendar',
        name:'calendar',
        component:()=>import('@/views/itemPage/Chc_calendar')
    },
    
]

export default routes