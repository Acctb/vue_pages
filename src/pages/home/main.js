import Vue from 'vue'

// request
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

// style
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '@/assets/styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css'

// components
import App from './index'
import router from '../../router'
import store from '@/store'

import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
