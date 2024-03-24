import axios from 'axios'
import { showFailToast } from 'vant'

const AuthService = {
  getAuthToken: async function (account, password) {
    try {
      const res = await axios.post('/api/auth/token', { account, password })
      return res.data
    } catch (e) {
      showFailToast('登录失败')
    }
  }
}
export default AuthService
