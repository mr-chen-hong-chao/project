import Vue from 'vue'
import Vuex from 'vuex'
import persist from 'vuex-persist'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    user:{
      userName:'',
      userImg:'',
      token:'',
    },
    loadingShow:true,  //loading显示状态
    emailState:false
  },
  mutations: {
    //切换loading状态
    tabLoadingShow(state,val){
      state.loadingShow = val
    },
    tabEmailState(state,val){
      state.emailState = !state.emailState
    },
    getLoginInfo(state,val){
      state.user = val
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
