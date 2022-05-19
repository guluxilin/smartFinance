import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import OneOne from '@/components/OneOne/OneOne'
import OneTwo from '@/components/OneTwo/OneTwo'
import OneThree from '@/components/OneThree/OneThree'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/1-1',
      name: 'OneOne',
      component: OneOne
    }, {
      path: '/1-2',
      name: 'OneTwo',
      component: OneTwo
    }, {
      path: '/1-3',
      name: 'OneThree',
      component: OneThree
    }
  ]
})
