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
    let {data} =  await server.get('/api/app/teacher/info/'+val)
    return Promise.resolve(data)
}
//关注老师
const getFocus = async function(val){
    console.log(val)
    let {data} = await server.get(`/api/app/teacher/collect/${val}`)
    return Promise.resolve(data)
}
//主讲课程
const getLesson = async function(){
    let {data} = await server.post({
        url:'/api/app/teacher/mainCourse',
        params:{
            limit:1,
            page:1,
            teacher_id:249
        }
    })
}
//测试公用接口
const getPublic = async function(){
    let {data} = await server.get('/api/app/recommend/appIndex')
    return Promise.resolve(data)
}
export {
    getPublic,
    getBanner,
    getHome,
    getTeacherDetail,
    getLesson,
    getFocus

}