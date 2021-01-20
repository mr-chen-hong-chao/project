import server from '../serve'


//请求轮播图
const getBanner = async function () {
    let {
        data
    } = await server.get('/api/app/banner')
    return Promise.resolve(data.data)
}
//请求首页数据
const getHome = async function () {
    let {
        data
    } = await server.get('/api/app/recommend/appIndex')
    return Promise.resolve(data.data)
}
//筛选
const getChange = async function () {
    let {
        data
    } = await server.get('/api/app/courseClassify?')
    return Promise.resolve(data.data)
}
//请求所有老师数据接口
const getAllTeacher = async function (val) {
    console.log(val)
    let {
        data
    } = await server.get('/api/app/teacher/search/attrs?' + `page=${val.page}` + `&limit=${val.limit}`)
    return Promise.resolve(data.data.list)

}
//请求老师信息
const getTeacherInfo = async function (val) {
    console.log(val)
    let {
        data
    } = await server.get('/api/app/teacher/info/' + val)
    return Promise.resolve(data)
}
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
//请求老师详情
const getTeacherDetail = async function (val) {
    let {
        data
    } = await server.get('/api/app/teacher/' + val)
    return Promise.resolve(data.data.teacher)
}
//获取讲师评论
const getSay = async function (val) {
    let data = await server.post('/api/app/teacher/comment', val)
    return Promise.resolve(data)
}
//关注老师
const getFocus = async function (val) {
    let {
        data
    } = await server.get('/api/app/teacher/collect' + val)
    return Promise.resolve(data.data)
}
//主讲课程
const getLesson = async function (val) {
    let {
        data
    } = await server.post('/api/app/teacher/mainCourse', val)
    return Promise.resolve(data.data.list)
}
//测试公用接口
const getPublic = async function () {
    // let data = await server.get('/api/app/recommend/appIndex')
    let {
        data
    } = await server.get('/api/app/recommend/appIndex')
    return Promise.resolve(data)
}
//登录
const getLogin = async function (params = '') {
    let {
        data
    } = await server.post('/api/app/login', params)
    return Promise.resolve(data)
}
//验证码登录（）

const getSmsCode = async function (params = '') {
    let {
        data
    } = await server.post('/api/app/smsCode', params)
    return Promise.resolve(data.data)
}
//设置密码（修改）
const password = async function () {
    let {
        data
    } = await server.post('/api/app/smsCode')
    return Promise.resolve(data.data)
}
//登录组件哪个
export {
    getPublic,
    getBanner,
    getHome,
    getAllTeacher,
    getTeacherInfo,
    getTeacherDetail,
    getFocus,
    getChange, //筛选
    getLesson, //课程
    getLogin, //登录
    getSmsCode, //验证码登录
    password, //设置密码
    getSay,
}