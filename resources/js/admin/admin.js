import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Element from 'element-ui'
import Api from './plugins/api'
import Http from './plugins/http'
import VueClipboard from 'vue-clipboard2'

import jQuery from 'jquery'
import VueFroala from 'vue-froala-wysiwyg'

// Require Froala Editor js file.
require('froala-editor/js/froala_editor.pkgd.min')
require('froala-editor/js/languages/zh_cn')

window.$ = jQuery

Vue.use(VueFroala)
Vue.config.productionTip = false

Vue.prototype.$api = Api
Vue.use(Http, {
  host: '/api',
  accept: 'application/vnd.laradmin.admin+json'
})
Vue.use(VueClipboard)

Vue.component('data-table', require('./components/Layouts/Table'))
Vue.component('preview', require('./components/Layouts/Preview'))

Vue.use(Element, {size: 'small'})

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
