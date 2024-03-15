<template>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell v-for="company in companies" :key="company.id" :to="`/companies/${company.id}`">
      <template #title> {{ company.name }} </template>
      <template #value> {{ `${company.province}/${company.city}` }} </template>
      <template #label> {{ company.desc }} </template>
    </van-cell>
  </van-list>
</template>

<script>
import { ref } from 'vue'
import CompanyService from '../services/CompanyService'

export default {
  setup() {
    const companies = ref([])
    const loading = ref(false)
    const finished = ref(false)
    let pageNumber = 1
    const pageSize = 10

    const onLoad = () => {
      // 异步更新数据
      loading.value = true
      CompanyService.getCompanies({ pageNumber, pageSize }).then((res) => {
        if (res.totalCount <= 10) {
          finished.value = true
        }
        if (res.content.length === 0) {
          finished.value = true
        } else {
          companies.value.push(...res.content)
          pageNumber++
        }
        loading.value = false
      })
    }

    return {
      companies,
      onLoad,
      loading,
      finished
    }
  }
}
</script>

<style scoped></style>
