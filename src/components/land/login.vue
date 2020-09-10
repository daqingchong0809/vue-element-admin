<template>
    <div class="login">
        <div class="login-container">
            <el-button type="primary" @click="login">登录</el-button>
        </div>

        <div class="login-footer">底部</div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        login() {
            this.$store.dispatch("user/login").then((res) => {
                if (res.code === "111111") {
                    this.$router.push("/admin");
                }
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.login {
    &-container {
        height: calc(100vh - 120px);
    }
    &-footer {
        height: 60px;
        background-color: gray;
    }
}
</style>
