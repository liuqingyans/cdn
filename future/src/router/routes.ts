const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/login",
  },
  {
    path: "/index",
    name: "index",
    meta: {
      title: "首页",
    },
    component: () => import("@/views/home/index.vue"), //.vue不能省略
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
    },
    component: () => import("@/views/login/index.vue"), //.vue不能省略
  },
];
export default routes;
