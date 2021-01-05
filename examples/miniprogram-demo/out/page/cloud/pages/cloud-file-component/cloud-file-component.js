const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/cloud/pages/cloud-file-component/cloud-file-component"
    }
});

const { demoImageFileId, demoVideoFileId } = require("../../../../config");

_Page({
    onShareAppMessage() {
        return {
            title: "组件支持",
            path: "page/cloud/pages/cloud-file-component/cloud-file-component"
        };
    },

    data: {
        imageFileId: demoImageFileId,
        videoFileId: demoVideoFileId
    }
});
