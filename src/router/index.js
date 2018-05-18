import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

import Layout from '@/module/layout/index'

export const constantRouterMap = [
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   name: 'Dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     component: _import('dashboard/index'),
  //     name: 'dashboard',
  //     meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
  //   }]
  // },
  {
    path: '',
    component: Layout,
    redirect: 'notice',
    children: [{
      path: 'notice',
      component: _import('notice/index'),
      name: 'Notice',
      meta: { title: 'notice', icon: 'documentation', noCache: true }
    }]
  },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/documentation/index',
    children: [{
      path: 'index',
      component: _import('notice/index'),
      name: 'documentation',
      meta: { title: 'documentation', icon: 'documentation', noCache: true }
    }]
  },
  {
    path: '/login',
    component: () => import('@/module/login/index'),
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
]

export const asyncRouterMap = []

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

