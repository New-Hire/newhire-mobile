import axios from 'axios'
import { showNotify } from 'vant'
import Store from '../store'

const CompanyCandidateService = {
  getCompanyCandidates: async function () {
    const res = await axios.get('/api/company/candidates', {
      headers: {
        Authorization: Store.getToken()
      }
    })
    return res.data
  },
  invite: async function (userId) {
    try {
      await axios.post(`/api/company/candidates/${userId}/invite`, undefined, {
        headers: {
          Authorization: Store.getToken()
        }
      })
      showNotify({ type: 'success', message: '已邀请' })
    } catch (e) {
      showNotify({ type: 'danger', message: e.response.data.code })
    }
  },
  approve: async function (userId) {
    try {
      await axios.post(`/api/company/candidates/${userId}/approve`, undefined, {
        headers: {
          Authorization: Store.getToken()
        }
      })
      showNotify({ type: 'success', message: '已通过' })
    } catch (e) {
      showNotify({ type: 'danger', message: e.response.data.code })
    }
  },
  refuse: async function (userId) {
    try {
      await axios.post(`/api/company/candidates/${userId}/refuse`, undefined, {
        headers: {
          Authorization: Store.getToken()
        }
      })
      showNotify({ type: 'success', message: '已拒绝' })
    } catch (e) {
      showNotify({ type: 'danger', message: e.response.data.code })
    }
  }
}
export default CompanyCandidateService
