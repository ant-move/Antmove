const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/cloud/pages/delete-file/delete-file"
    }
}); // 参考文档：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-client-api/storage/deleteFile.html

const app = getApp();

_Page({
    onShareAppMessage() {
        return {
            title: "删除文件",
            path: "page/cloud/pages/delete-file/delete-file"
        };
    },

    data: {
        fileId: "",
        loading: false
    },

    onLoad() {
        this.setData({
            fileId: app.globalData.fileId || ""
        });
    },

    onShow() {
        this.setData({
            fileId: app.globalData.fileId || ""
        });
    },

    deleteFile() {
        const fileId = this.data.fileId;

        if (!fileId) {
            return;
        }

        const self = this;
        this.setData({
            loading: true
        });

        _my.cloud.deleteFile({
            fileList: [fileId],
            success: res => {
                console.log("[删除文件] 成功：", res);

                if (res.fileList && res.fileList.length) {
                    self.setData({
                        fileId: ""
                    });
                }

                app.globalData.fileId = "";

                _my.showToast({
                    title: "删除成功"
                });
            },
            fail: err => {
                console.error("[删除文件] 失败：", err);
            },
            complete: () => {
                self.setData({
                    loading: false
                });
            }
        });
    }
});
