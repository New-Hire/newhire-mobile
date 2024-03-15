import axios from 'axios'
import { showNotify } from 'vant'
import Store from '../store'

const CompanyService = {
  getCompanies: async function (query) {
    const res = await axios.get('/api/companies', {
      params: {
        pageNumber: query.pageNumber,
        pageSize: query.pageSize
      },
      headers: {
        Authorization: Store.getToken()
      }
    })
    return res.data
  },
  getCompany: async function (id) {
    const res = await axios.get(`/api/companies/${id}`, {
      headers: {
        Authorization: Store.getToken()
      }
    })
    return res.data
  },
  registerCompany: async function (id) {
    try {
      await axios.post(`/api/companies/${id}/register`, undefined, {
        headers: {
          Authorization: Store.getToken()
        }
      })
      showNotify({ type: 'success', message: '已投递' })
    } catch (e) {
      showNotify({ type: 'danger', message: e.response.data.code })
    }
  }
}
export default CompanyService
