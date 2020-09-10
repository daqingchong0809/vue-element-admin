import Vue from "vue";
import VueRouter from "vue-router";
import Land from "../views/land.vue";
import Layout from "../components/layout/index.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "Land",
        component: Land,
    },

    {
        path: "/admin",
        name: "Admin",
        component: Layout,
    },
    {
        path: "*",
        redirect: "/login",
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
