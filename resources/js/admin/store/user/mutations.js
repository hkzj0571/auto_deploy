import axios from 'axios'

export function LOGIND (state, token) {
  state.token = token
  state.is_logined = true
  localStorage.token = token
  axios.defaults.headers.Authorization = token
  this.dispatch('getCurrentUserData')
}

export function LOGOUT (state) {
  state.token = null
  state.is_logined = false
  localStorage.removeItem('token')
  axios.defaults.headers.Authorization = null
}

export function LOAD_PROFILE (state, data) {
  state.data = data
}
