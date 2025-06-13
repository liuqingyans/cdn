<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
// 获取几个box
const homeBox = ref();
const router = useRouter();

const openAndroid = (): void => {
  window.open(
    "https://image.youliao.love/app/download/youliao-love.apk",
    "_self"
  );
};
const openUrl = (path: string): void => {
  router.push(path);
};

const onHomeScroll = (): void => {};

const openBeiAn = (url: string) => {
  window.open(url, "_self");
};
</script>
<template></template>
<style scoped lang="less"></style>
