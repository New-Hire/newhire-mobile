import axios from 'axios'
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
  }
}
export default CompanyUserService
