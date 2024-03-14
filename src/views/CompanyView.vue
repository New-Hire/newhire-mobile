<template>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item" :to="`/companies/${item}`">
      <template #title> 公司{{ item }} </template>
    </van-cell>
  </van-list>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const list = ref([])
    const loading = ref(false)
    const finished = ref(false)

    const onLoad = () => {
      // 异步更新数据
      for (let i = 0; i < 10; i++) {
        list.value.push(list.value.length + 1)
      }
      loading.value = false
      finished.value = true
    }

    return {
      list,
      onLoad,
      loading,
      finished
    }
  }
}
</script>

<style scoped></style>
