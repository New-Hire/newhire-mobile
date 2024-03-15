let TOKEN = ''
import { ref } from 'vue'
const AUTH_USER = ref({})

export default {
  getToken() {
    return TOKEN
  },
  getAuthUser() {
    return AUTH_USER
  },
  isHr() {
    return AUTH_USER.value.role === 'HR'
  },
  setToken(token) {
    TOKEN = `Bearer ${token}`
  },
  setAuthUser(user) {
    AUTH_USER.value = user
  }
}
