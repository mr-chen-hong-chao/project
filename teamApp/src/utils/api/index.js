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
//筛选
const getChange = async function(){
    let {data} = await server.get('/api/app/courseClassify?')
    return Promise.resolve(data.data)
}
//请求所有老师数据接口
const getAllTeacher = async function(val){
    console.log(val)
    let {data} = await server.get('/api/app/teacher/search/attrs?'+`page=${val.page}`+`&limit=${val.limit}`)
    return Promise.resolve(data.data.list)

}
//请求老师信息
const getTeacherInfo = async function(id){
    let {data} =  await server.get(`/api/app/teacher/info/${id}`)
    return Promise.resolve(data)
}
<<<<<<< HEAD
//练习 考点专练分类
const getClassify = async function(){
    let {data} = await server.get('/api/app/book/classify?')
    return Promise.resolve(data.data)
}
//练习 考点专练内容
const getList = async function(){
    let {data} = await server.get('/api/app/book/list/0?page=1&limit=10&order=id&')
    return Promise.resolve(data.data)
}
//图书详情
const getBook = async function(id){
    let {data} = await server.get(`/api/app/book/detail/${id}?`)
    return Promise.resolve(data.data)
}
=======
>>>>>>> d03aa5043faa8a8ad32cd4ae0da910c14a2ae753
//请求老师详情
const getTeacherDetail = async function(val){
    let {data} =  await server.get(`/api/app/teacher/${val}`)
    return Promise.resolve(data.data)
}
//获取讲师评论
const getSay = async function(val){
    let {data} = await server.post(`/api/app/teacher/comment/${val}`)
    return Promise.resolve(data)
}
//关注老师
const tabFocus = async function(id){
    let {data} = await server.get(`/api/app/teacher/collect/${id}`)
    return Promise.resolve(data.data.flag)
}
//主讲课程
const getLesson = async function(val){
    let {data} = await server.post('/api/app/teacher/mainCourse',val)
    return Promise.resolve(data.data.list)
}
<<<<<<< HEAD
//测试公用接口
const getPublic = async function(){
    let data = await server.get('/api/app/recommend/appIndex')
=======
//登录接口
const getLogin = async function(val){
    let {data} = await server.post('/api/app/login',{
        mobile:val.mobile,
        password:val.password,
        type:val.type
    })
>>>>>>> d03aa5043faa8a8ad32cd4ae0da910c14a2ae753
    return Promise.resolve(data)
}
//课程详情
const lessonDetail = async function(val){
    console.log(val)
    let {data} = await server.get(`/api/app/courseInfo/basis_id=${val}`)
    return Promise.resolve(data.data)
}
//课程评价
const lessonSay = async function(val){
    console.log(val)
    let {data} = await server.post(`/api/app/courseComment`,val)
    return Promise.resolve(data.data)
}
//课程大纲
const lessonDaGang = async function(val){
    console.log(val)
    let {data} = await server.post(`/api/app/courseChapter`,val)
    return Promise.resolve(data.data)
}
//课程介绍
const lessonAlt = async function(val){
    console.log(val)
    let {data} = await server.get(`/api/app/courseInfo/basis_id=${val}`)
    return Promise.resolve(data.data)
}
//手机号登录
const mobileLogin = async function(val){
    let {data} = await server.post('/api/app/smsCode',val)
    return Promise.resolve(data)
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
    getAllTeacher,
    getTeacherInfo,
    getTeacherDetail,
    tabFocus,
    getChange,//筛选
    getLesson,//课程
<<<<<<< HEAD
    getClassify,//练习
    getList,//练习 考点专练内容
    getBook,//图书
    getLogin, //登录
    getSmsCode,//验证码登录
    password,//设置密码
=======
    getSay,
    getLogin,
    mobileLogin,
    lessonDetail,
    lessonSay,
    lessonDaGang,
    lessonAlt,
>>>>>>> d03aa5043faa8a8ad32cd4ae0da910c14a2ae753
}