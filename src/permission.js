import router from "./router";
import store from "./store";

// 进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.inc(0.2);
NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });
import { getToken } from "@src/utils/auth";

const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
    NProgress.start();
    const hasToken = getToken();
    console.log("hasToken", hasToken);
    if (hasToken) {
        console.log("hashtoken");
        if (to.path === "/login") {
            // 如果有token
            next({ path: "/admin" });
        } else {
            next();
            // const hasRoles = store.getters.roles && store.getters.roles.length > 0;
            // if (hasRoles) {
            //     next();
            // } else {
            //     try {
            //         const { roles } = await store.dispatch("user/getInfo");
            //         next({ ...to, replace: true });
            //     } catch (error) {
            //         // 如果获取用户信息失败就重新登陆
            //         await store.dispatch("user/resetToken");
            //     }
            // }
        }
    } else {
        console.log("notoken");
        // 如果没有token
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next({ path: "/login" });
        }
    }
});

router.afterEach(() => {
    console.log(11111111);
    NProgress.done();
});
