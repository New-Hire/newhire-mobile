<template>
  <van-cell-group>
    <van-cell title="员工名" :value="user.name" />
  </van-cell-group>
  <van-cell-group inset>
    <van-cell title="才能">
      <template #value>
        {{ getRateText(value1) }}
        <van-rate v-model="value1" color="#ffd21e" void-icon="star" void-color="#eee" :count="3" />
      </template>
    </van-cell>
    <van-cell title="品性">
      <template #value>
        {{ getRateText(value2) }}
        <van-rate v-model="value2" color="#ffd21e" void-icon="star" void-color="#eee" :count="3" />
      </template>
    </van-cell>
    <van-cell title="学历">
      <template #value>
        {{ getRateText(value3) }}
        <van-rate v-model="value3" color="#ffd21e" void-icon="star" void-color="#eee" :count="3" />
      </template>
    </van-cell>
  </van-cell-group>
  <van-button type="primary" plain block @click="rate">评</van-button>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import CompanyUserService from '../services/CompanyUserService'
import UserService from '../services/UserService'

export default {
  methods: {
    getRateText(level) {
      switch (level) {
        case 1:
          return '尚可'
        case 2:
          return '肯定'
        case 3:
          return '推崇'
        default:
          return '未知'
      }
    },
    async rate() {
      await CompanyUserService.rate(this.user.id, this.value1, this.value2, this.value3)
    }
  },
  setup() {
    const route = useRoute()
    const userId = route.params.userId

    const value1 = ref(1)
    const value2 = ref(1)
    const value3 = ref(1)
    const user = ref({})

    UserService.getUser(userId).then((res) => {
      user.value = res
    })

    return { value1, value2, value3, user }
  }
}
</script>

<style scoped></style>
