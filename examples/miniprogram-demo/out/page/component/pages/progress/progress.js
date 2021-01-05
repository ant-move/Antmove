const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/progress/progress"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "progress",
            path: "page/component/pages/progress/progress"
        };
    },

    activeend: () => {
        console.log("动画完成");
    }
});
