<template>
  <van-cell-group>
    <van-cell title="企业名" :value="company.name" />
    <van-cell title="行业" :value="company.type" />
    <van-cell title="描述" :value="company.desc" />
  </van-cell-group>

  <van-cell-group>
    <van-cell title="位置" :value="`${company.province}/${company.city}`" />
    <van-cell title="规模" :value="company.size" />
    <van-cell title="创办日期" :value="company.establishedDate" />
  </van-cell-group>

  <van-row justify="center">
    <van-col span="6"
      ><van-button color="#7232dd" plain @click="registerCompany">求职</van-button></van-col
    >
  </van-row>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import CompanyService from '../services/CompanyService'

export default {
  methods: {
    async registerCompany() {
      await CompanyService.registerCompany(this.companyId)
    }
  },
  setup() {
    const route = useRoute()
    const companyId = route.params.companyId

    const company = ref({})
    CompanyService.getCompany(companyId).then((res) => {
      company.value = res
    })
    return {
      companyId,
      company
    }
  }
}
</script>

<style scoped></style>
