import axios from 'axios'
const server = axios.create({
    baseURL:'',
    timeout:5000
})
//请求拦截
server.interceptors.request.use(config=>{
    if(localStorage.getItem('token')){
        config.headers.token = localStorage.getItem('token')
    }
    return config
},err=>{
    Promise.reject(err)
})

//响应拦截
server.interceptors.response.use(res=>{
    return res
},err=>{
    Promise.reject(err)
})

export default server