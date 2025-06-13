<script setup lang="ts">
import { useRoute } from "vue-router";
import { loadSlim } from "tsparticles-slim";
import particlesOptions from "./configs/particlesOptions";

const route = useRoute();
const particlesInit = async (engine: any) => {
  //await loadFull(engine);
  console.log("loadSlim");
  await loadSlim(engine); // 重点
};
</script>

<template>
  <div class="app max-box">
    <RouterView :key="route.path" />
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :options="particlesOptions"
    />
  </div>
</template>

<style scoped lang="less">
.app {
  padding: 19px;
  // background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);
  font-family: "Yuanti SC";
}
.max-box {
  display: flex;
  flex: 1;
}
#tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000000;
  z-index: -10;
}
</style>
