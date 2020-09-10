const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    lintOnSave: true,

    // alias别名
    chainWebpack: (config) => {
        config.resolve.alias
            .set("@src", resolve("src"))
            .set("@assets", resolve("src/assets"))
            .set("@components", resolve("src/components"))
            .set("@request", resolve("src/request"));
    },
};
