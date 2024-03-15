<script>
import { ref, watch } from 'vue'
import Store from './store'
export default {
  setup() {
    const isHr = ref(false)
    const active = ref(0)
    const onClickLeft = () => history.back()

    watch(Store.getAuthUser(), () => {
      isHr.value = Store.isHr()
    })

    return {
      active,
      onClickLeft,
      isHr
    }
  }
}
</script>

<template>
  <header>
    <van-nav-bar title="九品中正" left-text="返回" left-arrow @click-left="onClickLeft" />
  </header>
  <RouterView />
  <footer>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/" icon="home-o">人员</van-tabbar-item>
      <van-tabbar-item to="/company" icon="search">企业</van-tabbar-item>
      <van-tabbar-item to="/rate" icon="setting-o">评分</van-tabbar-item>
      <van-tabbar-item v-show="isHr" to="/company/candidates" icon="setting-o"
        >审批</van-tabbar-item
      >
    </van-tabbar>
  </footer>
</template>

<style scoped></style>
