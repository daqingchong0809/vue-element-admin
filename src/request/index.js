import axios from "axios";
import baseUrl from "./baseUrl";

axios.defaults.baseURL = baseUrl;

// 请求拦截器
axios.interceptors.request.use(
    (config) => {
        config.headers = {
            "Content-Type": "application/json; charset=utf-8;text/plain",
        };
        // if (store.getters.token) {
        //     config.headers["X-Token"] = getToken();
        // }
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    },
);

// 响应拦截器
axios.interceptors.response.use(
    (response) => {
        const res = response.data;

        return res;
    },
    (error) => {
        console.log("err" + error);
        return Promise.reject(error);
    },
);

// 封装get方法
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params,
            })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

// 封装post方法
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
