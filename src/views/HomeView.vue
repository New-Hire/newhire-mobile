<template>
  <div>
    <van-cell-group>
      <van-cell title="ID" value="1" />
      <van-cell title="账号" value="zhouyu" />
      <van-cell title="类型" value="人员" />
    </van-cell-group>

    <van-cell-group>
      <van-cell title="已申请企业" is-link to="index" />
      <van-cell title="请求他人协助推荐" @click="recommendUserShow = true" is-link />
      <van-cell title="登记已入职企业" @click="joinCompanyShow = true" is-link />
    </van-cell-group>

    <van-action-sheet
      v-model:show="recommendUserShow"
      title="保存图片给中正官扫码"
      safe-area-inset-bottom
    >
      <van-row>
        <van-col span="2"></van-col>
        <van-col span="20"
          ><van-image
            src="https://img1.baidu.com/it/u=1939332239,2459106929&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        /></van-col>
        <van-col span="2"></van-col>
      </van-row>
    </van-action-sheet>

    <van-action-sheet
      v-model:show="joinCompanyShow"
      title="保存图片给HR扫码"
      safe-area-inset-bottom
    >
      <van-row>
        <van-col span="2"></van-col>
        <van-col span="20"
          ><van-image
            src="https://img1.baidu.com/it/u=1939332239,2459106929&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        /></van-col>
        <van-col span="2"></van-col>
      </van-row>
    </van-action-sheet>
  </div>
</template>

<script>
import { showToast } from 'vant'
import { ref } from 'vue'

export default {
  setup() {
    const recommendUserShow = ref(false)
    const actions = [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }]
    const onSelect = (item) => {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      recommendUserShow.value = false
      showToast(item.name)
    }

    return {
      recommendUserShow,
      joinCompanyShow: ref(false),
      actions,
      onSelect
    }
  }
}
</script>

<style scoped></style>
