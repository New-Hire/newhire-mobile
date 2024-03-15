import axios from 'axios'
import { showNotify } from 'vant'
import Store from '../store'

const CompanyUserService = {
  getCompanyUsers: async function (query) {
    const res = await axios.get('/api/company/users', {
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
  rate: async function (userId, score1, score2, score3) {
    try {
      await axios.post(
        `/api/company/users/${userId}/rate`,
        {
          score1,
          score2,
          score3
        },
        {
          headers: {
            Authorization: Store.getToken()
          }
        }
      )
      showNotify({ type: 'success', message: '已评分' })
    } catch (e) {
      showNotify({ type: 'danger', message: e.response.data.code })
    }
  }
}
export default CompanyUserService
