let TOKEN = ''

export default {
  getToken() {
    return TOKEN
  },
  setToken(token) {
    TOKEN = `Bearer ${token}`
  }
}
