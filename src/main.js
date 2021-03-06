// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import 'swiper/dist/css/swiper.css'

import axios from 'axios'

var $axios = axios.create({
  baseURL: "/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
})


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

//fastClick处理移动端300ms延时问题
fastClick.attach(document.body)

Vue.prototype.$axios = $axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
