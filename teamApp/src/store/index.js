import Vue from 'vue'
import Vuex from 'vuex'
import persist from 'vuex-persist'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    user:'',
    token:''
  },
  mutations: {
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
