import Vue from 'vue'
import App from './index'

import router from '../../router'
import cctb from '../../utils/index.js'
import { config } from '../../config'
import '../../assets/css/index.scss'

window.ccConfig = config;
window.cctb = cctb;

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
