import axios from 'axios'
import api from '../../plugins/api'

export const getCurrentUserData = async ({ commit }) => {
  let res = await axios.get(api.users.profile)
  commit('LOAD_PROFILE', res.data)
}
