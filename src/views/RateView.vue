<template>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell v-for="user in users" :key="user.id" :to="`/users/${user.id}/rate`">
      <template #title> {{ user.name }} </template>
    </van-cell>
  </van-list>
</template>

<script>
import { ref } from 'vue'
import CompanyUserService from '../services/CompanyUserService'

export default {
  setup() {
    const users = ref([])
    const loading = ref(false)
    const finished = ref(false)
    let pageNumber = 1
    const pageSize = 10

    const onLoad = () => {
      // 异步更新数据
      loading.value = true
      CompanyUserService.getCompanyUsers({ pageNumber, pageSize }).then((res) => {
        if (res.totalCount <= 10) {
          finished.value = true
        }
        if (res.content.length === 0) {
          finished.value = true
        } else {
          users.value.push(...res.content)
          pageNumber++
        }
        loading.value = false
      })
    }

    return {
      users,
      onLoad,
      loading,
      finished
    }
  }
}
</script>

<style scoped></style>
