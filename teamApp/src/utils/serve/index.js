import axios from 'axios'
import store from '@/store'
import {Guid} from './guid'
const server = axios.create({
    baseURL:'http://120.53.31.103:84',
    timeout:10000
})
//请求拦截
server.interceptors.request.use(config=>{ 
    if(localStorage.getItem('token')){
        config.headers.token = localStorage.getItem('token')
    }
    let token = localStorage.getItem('token')
    if(!localStorage.getItem('DeviceID')){
        let id = Guid.NewGuid().ToString('D')
        localStorage.setItem('DeviceID',id)
    }
    config.headers = {
        Authorization:`Bearer ${token}`,
        DeviceType: 'H5',
        DeviceID: localStorage.getItem('DeviceID'),
        }
        if(config.baseURL=='http://120.53.31.103:84'){
            store.commit('tabLoadingShow',true)
        }
    return config    
},err=>{
    Promise.reject(err)
    store.commit('tabLoadingShow',false)
})
//响应拦截
server.interceptors.response.use(res=>{
    if(res){
        setTimeout(()=>{
            store.commit('tabLoadingShow',false)
        },300)
    }
    return res
},err=>{
    setTimeout(()=>{
        store.commit('tabLoadingShow',false)
    },5000)
    Promise.reject(err)
})

export default server