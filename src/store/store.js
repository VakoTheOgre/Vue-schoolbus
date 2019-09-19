import Vue from 'vue'
import Vuex from 'vuex'
import schools from './schools'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    schools,
    auth
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
