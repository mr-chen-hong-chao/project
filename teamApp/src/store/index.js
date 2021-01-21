import Vue from 'vue'
import Vuex from 'vuex'
import persist from 'vuex-persist'
Vue.use(Vuex)

export default new Vuex.Store({
<<<<<<< HEAD
  state,
  mutations,
  actions,

=======
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
>>>>>>> d03aa5043faa8a8ad32cd4ae0da910c14a2ae753
  plugins:[
    new persist({
      storage:window.localStorage
    }).plugin
  ]
})
