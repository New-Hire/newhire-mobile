<template>
  <van-swipe-cell inset v-for="candidate in candidates" :key="candidate.userId">
    <van-cell
      :border="false"
      :title="candidate.user.name"
      :value="enumData.getValue(candidate.status)"
    />
    <template #right>
      <van-button square type="primary" text="邀请" @click="invite(candidate.userId)" />
      <van-button square type="success" text="通过" @click="approve(candidate.userId)" />
      <van-button square type="danger" text="拒绝" @click="refuse(candidate.userId)" />
    </template>
  </van-swipe-cell>
</template>

<script>
import { ref } from 'vue'
import CompanyCandidateService from '../services/CompanyCandidateService'
import Enum from '../util/enum'

export default {
  methods: {
    async invite(userId) {
      await CompanyCandidateService.invite(userId)
    },
    async approve(userId) {
      await CompanyCandidateService.approve(userId)
    },
    async refuse(userId) {
      await CompanyCandidateService.refuse(userId)
    }
  },
  setup() {
    const enumData = new Enum(['已投递', '已被邀请', '已通过', '被拒'])
    const candidates = ref([])

    CompanyCandidateService.getCompanyCandidates().then((res) => {
      candidates.value = res
    })

    return {
      candidates,
      enumData
    }
  }
}
</script>

<style scoped></style>
