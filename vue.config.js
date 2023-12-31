const {defineConfig} = require("@vue/cli-service");
module.exports = defineConfig({
    lintOnSave: false,
    transpileDependencies: true,
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/css/app.scss";`,
            },
        },
    },
});
