import { getToken, setToken, removeToken } from "@src/utils/auth";
import { login } from "@src/request/api/land";

const state = {
    token: getToken(),
};

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
};

const actions = {
    //登录
    login({ commit }, userInfo) {
        // const { username, password } = userInfo;
        return new Promise((resolve, reject) => {
            login({ account: "19934481105", password: "123456" })
                .then((response) => {
                    const { data } = response;
                    commit("SET_TOKEN", data);
                    setToken(data);
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    // 获取用户信息
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getInfo(state.token)
                .then((response) => {
                    const { data } = response;
                    console.log(777, data);
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    // 退出登录
    logout({ commit, state, dispatch }) {
        return new Promise((resolve, reject) => {
            logout(state.token)
                .then(() => {
                    commit("SET_TOKEN", "");
                    removeToken();

                    resolve();
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    // 移除token
    resetToken({ commit }) {
        return new Promise((resolve) => {
            commit("SET_TOKEN", "");
            commit("SET_ROLES", []);
            removeToken();
            resolve();
        });
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
