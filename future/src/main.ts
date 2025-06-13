import { createApp } from "vue";
import router from "./router/index";
import "amfe-flexible";
import "animate.css";
import "./style.css";
import App from "./App.vue";
import Particles from "particles.vue3";

createApp(App).use(Particles).use(router).mount("#app");
