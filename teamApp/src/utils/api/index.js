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
//课程数据
const getLesson = async function(){
    let {data} = await server.get('/api/app/courseBasis?page=1&limit=10&')
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
//登录
const getLogin = async function(params = ''){
    let {data} = await server.post('/api/app/login',params)
    return Promise.resolve(data)
}
//验证码登录（）

const getSmsCode = async function(params =''){
    let {data} = await server.post('/api/app/smsCode',params)
    return Promise.resolve(data.data) 
}
//设置密码（修改）
const password = async function(){
    let {data} = await server.post('/api/app/smsCode')
    return Promise.resolve(data.data)
}
//登录组件哪个
export {
    getPublic,
    getBanner,
    getHome,
    getTeacherDetail,
    getChange,//筛选
    getLesson,//课程
    getLogin, //登录
    getSmsCode,//验证码登录
    password,//设置密码
}