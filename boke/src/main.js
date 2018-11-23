// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookies from 'vue-cookies'
import Vuex from 'vuex'
import VueLazyLoad from 'vue-lazyload'
import { stat } from 'fs';
Vue.use(VueCookies)
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueLazyLoad,{
  preLoad: 1.3,
  error:require('../static/error.png'),
  loading:require('../static/loading.png')
})

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    
    page:''

  },
  mutations: {
    
    setpage(state,playload){
      state.page=playload.page
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
