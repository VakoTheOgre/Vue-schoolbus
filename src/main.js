import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'

const base = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
})

Vue.prototype.$axios = base
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
