import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

import Layout from '@/module/layout/index'

export const constantRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: 'apply/index',
  },
  {
    path: '/apply',
    component: Layout,
    redirect: 'noredirect',
    name: 'apply',
    meta: {
      title: 'apply',
      icon: 'documentation'
    },
    children: [{
      path: 'index',
      component: _import('apply/index'),
      name: 'documentation',
      meta: { title: 'applyList', noCache: true }
    },{
      path: 'notice',
      component: _import('apply/notice'),
      name: 'Notice',
      meta: { title: 'notice', noCache: true }
    },{
      path: 'item',
      component: _import('apply/item'),
      name: 'Item',
      meta: { title: 'applyItem', noCache: true }
    }]
  },
  {
    path: '/adress',
    component: Layout,
    redirect: 'noredirect',
    name: 'adress',
    meta: {
      title: 'adress',
      icon: 'documentation'
    },
    children: [{
      path: 'add',
      component: _import('address/add'),
      name: 'AddressAdd',
      meta: { title: 'addressAdd', noCache: true }
    },{
      path: 'list',
      component: _import('address/list'),
      name: 'AddressList',
      meta: { title: 'addressList', noCache: true }
    }]
  },
  {
    path: '/user',
    component: Layout,
    redirect: 'noredirect',
    name: 'user',
    meta: {
      title: 'user',
      icon: 'documentation'
    },
    children: [{
      path: 'list',
      component: _import('user/list'),
      name: 'UserList',
      meta: { title: 'userList', noCache: true }
    },{
      path: 'score',
      component: _import('user/score'),
      name: 'UserScore',
      meta: { title: 'userScore', noCache: true }
    }]
  },
  {
    path: '/question',
    component: Layout,
    redirect: 'noredirect',
    name: 'question',
    meta: {
      title: 'question',
      icon: 'documentation'
    },
    children: [{
      path: 'list',
      component: _import('question/list'),
      name: 'QuestionList',
      meta: { title: 'questionList', noCache: true }
    },{
      path: 'edit',
      component: _import('question/edit'),
      name: 'QuestionEdit',
      meta: { title: 'questionEdit', noCache: true }
    }]
  },
  {
    path: '/login',
    component: () => import('@/module/login/index'),
    hidden: true
  },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  { path: '*', redirect: '/404', hidden: true }
]

export const asyncRouterMap = []

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

