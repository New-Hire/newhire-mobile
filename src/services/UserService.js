import axios from 'axios'
import Store from '../store'

const UserService = {
  getUser: async function () {
    const res = await axios.get('/api/user', {
      headers: {
        Authorization: Store.getToken()
      }
    })
    return res.data
  },
  getRegisterCompanies: async function () {
    const res = await axios.get('/api/user/register_companies', {
      headers: {
        Authorization: Store.getToken()
      }
    })
    return res.data
  }
}
export default UserService
