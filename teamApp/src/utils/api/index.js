import server from '../serve'

//请求轮播图
const getBanner = async function(){
    let {data} = await server.get('/api/app/banner')
    return Promise.resolve(data.data)
}
//请求首页数据
const getHome = async function(){
    let {data} = await server.get('/api/app/recommend/appIndex')
    return Promise.resolve(data.data)
}
//请求老师详情
const getTeacherDetail = async function(val){
    let data =  await server({
        methods:'Get',
        url:'/api/app/teacher/info/id', 
        params:{
            id:val
        }
    })
    return Promise.resolve(data)
}
//测试公用接口
const getPublic = async function(){
    let data = await server.get('/api/app/recommend/appIndex')
    return Promise.resolve(data)
}
export {
    getPublic,
    getBanner,
    getHome,
    getTeacherDetail,
}