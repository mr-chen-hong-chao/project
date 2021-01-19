import Vue from 'vue'
import Vuex from 'vuex'
import persist from 'vuex-persist'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    user:'',
    token:'',
    // focusTeacher:[],
    // isFocus:false,
    bottomNavIndex:0,//底部导航显下标,
    loadingShow:true,  //loading显示状态
    emailState:false
  },
  mutations: {
    // //关注，传入老师id如果focusTeacher数组为空首先添加，如果不为空，进行循环查找，
    // //如果有该id代表已关注,移除关注数组，否则添加进关注数组,并改变关注状态
    // changeFocus(state,val){
    //   if(state.focusTeacher.length ===0){
    //     state.focusTeacher.push(val)
    //     state.isFocus = true
    //   }else{
    //     state.focusTeacher.forEach((item,index)=>{
    //       let n = null
    //       if(item ===val){
    //         n = index
    //         state.isFocus = false
    //       }else{
    //         state.isFocus = true
    //       }
    //       if(!state.isFocus){
    //         state.focusTeacher.splice(n,1)
    //       }else{
    //         state.focusTeacher.push(val)
    //       }
    //     })
    //   }
    // },
    //改变底部导航下标
    tabBottomNav(state,val){
      state.bottomNavIndex =val
    },
    //切换loading状态
    tabLoadingShow(state,val){
      state.loadingShow = val
    },
    tabEmailState(state,val){
      state.emailState = !state.emailState
    }
      
    
  },
  actions: {
  },
  modules: {
  },
  plugins:[
    new persist({
      storage:window.localStorage
    }).plugin
  ]
})
