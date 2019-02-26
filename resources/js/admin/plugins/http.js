import axios from 'axios'
import vuex from '../store'
import router from '../router'
import { Message } from 'element-ui'

export default {
  install (Vue, { host, accept }) {
    axios.defaults.baseURL = host
    axios.defaults.headers.common['Accept'] = accept
    axios.interceptors.response.use(function (response) {
      return response
    }, function (e) {
      if (e.response.status === 401) {
        vuex.commit('LOGOUT')
        router.push({ name: 'auth.login' })
      }

      if (e.response.status === 400) {
        Message({
          showClose: true,
          type: 'error',
          message: e.response.data.message
        })
      }

      return Promise.reject(e.response)
    })
    Vue.prototype.$http = axios
  }
}
