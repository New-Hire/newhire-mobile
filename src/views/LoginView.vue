<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit"> 提交 </van-button>
    </div>
  </van-form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthService from '../services/AuthService'
import Store from '../store.js'

export default {
  setup() {
    const router = useRouter()

    const username = ref('')
    const password = ref('')
    const onSubmit = async (values) => {
      const token = await AuthService.getAuthToken(values.username, values.password)
      Store.setToken(token)
      router.push('/')
    }

    return {
      username,
      password,
      onSubmit
    }
  }
}
</script>

<style scoped></style>
