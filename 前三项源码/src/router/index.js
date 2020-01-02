import Vue from 'vue'
import '@/assets/css/mui.min.css'
import '@/assets/css/app.css'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import card from '@/components/card'
import nav from '@/components/nav'
import date from '@/components/date'
import imageviewer from '@/components/imageviewer'
import home from '@/components/home'
import home1 from '@/components/home1'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
  {
      path: '/card',
      name: 'card',
      component: card
    },
  {
      path: '/nav',
      name: 'nav',
      component: nav
    },
  {
      path: '/date',
      name: 'date',
      component: date
    },
  {
      path: '/imageviewer',
      name: 'imageviewer',
      component: imageviewer
    },
  {
      path: '/home',
      name: 'home',
      component: home
    },
  {
      path: '/home1',
      name: 'home1',
      component: home1
    },
  {
      path: '/index',
      name: 'index',
      component: index
    },
  ]
})
