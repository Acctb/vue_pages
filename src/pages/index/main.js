import Vue from 'vue'

// request
import ElementUI from 'element-ui'

// style
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '@/assets/styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css'

// components
import App from './index'
import router from '../../router'
import store from '@/store'

import i18n from '@/lang'
import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// config
import cctb from '../../utils/index.js'
import { config } from '../../config'
window.ccConfig = config;
window.cctb = cctb;

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
