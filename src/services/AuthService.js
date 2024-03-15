import axios from 'axios'

const AuthService = {
  getAuthToken: async function (account, password) {
    const res = await axios.post('/api/auth/token', { account, password })
    return res.data
  }
}
export default AuthService
