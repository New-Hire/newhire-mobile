<template>
  <van-cell v-for="registerCompany in registerCompanies" :key="registerCompany.companyId">
    <template #title> {{ registerCompany.company.name }} </template>
    <template #value> {{ enumData.getValue(registerCompany.status) }} </template>
  </van-cell>
</template>

<script>
import { ref } from 'vue'
import UserService from '../services/UserService'
import Enum from '../util/enum'

export default {
  setup() {
    const enumData = new Enum(['已投递', '已被邀请', '已通过', '被拒'])
    const registerCompanies = ref([])

    UserService.getRegisterCompanies().then((res) => {
      registerCompanies.value = res
    })

    return {
      registerCompanies,
      enumData
    }
  }
}
</script>

<style scoped></style>
