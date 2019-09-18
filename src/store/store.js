import Vue from 'vue'
import Vuex from 'vuex'
import schools from './schools'
import paths from './paths'
import students from './students'
import stops from './stops'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    schools,
    stops,
    paths,
    students
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
