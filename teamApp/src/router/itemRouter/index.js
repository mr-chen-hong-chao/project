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
]

export default routes