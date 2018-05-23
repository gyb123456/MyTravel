import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import City from '@/pages/city/City'

Vue.use(Router)

// const List = { template: '<div><h2>我是list页面</h2></div>' }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
