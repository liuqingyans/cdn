<script lang="ts" setup>
import { ref } from "vue";
const account = ref("");
</script>
<template>
  <div class="login-box box-nopx">
    <div cass="input-box">
      <el-input v-model="account" placeholder="请输入帐号" clearable />
      <el-input v-model="password" placeholder="请输入密码" clearable />
    </div>
  </div>
</template>
<style lang="less" scoped></style>

<style scoped lang="less">
.login-box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.box-nopx {
  width: 500px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 30px;
}
</style>
