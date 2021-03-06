import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 内部引入
import "./assets/css/reset.css";
import "./permission";

// 外部引入
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
