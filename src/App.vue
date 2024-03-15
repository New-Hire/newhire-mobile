<script>
import { ref } from 'vue'
export default {
  setup() {
    const active = ref(0)
    const onClickLeft = () => history.back()
    return {
      active,
      onClickLeft
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
    </van-tabbar>
  </footer>
</template>

<style scoped></style>
