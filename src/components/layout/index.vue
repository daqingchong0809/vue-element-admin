<template>
    <div class="layout">
        <el-container>
            <el-aside width="200px"><Aside></Aside></el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Aside from "./aside/index";
export default {
    components: {
        Aside,
    },
    data() {
        return {};
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.layout {
    height: 100vh;
    background-color: rgb(84, 92, 100);
    .el-aside {
        height: 100vh;
    }
    .el-main {
        background-color: #fff;
    }
}
</style>
