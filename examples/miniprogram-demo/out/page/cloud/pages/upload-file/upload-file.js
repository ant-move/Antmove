const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/cloud/pages/upload-file/upload-file"
    }
}); // 参考文档：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-client-api/storage/uploadFile.html

const app = getApp();

_Page({
    onShareAppMessage() {
        return {
            title: "上传文件",
            path: "page/cloud/pages/upload-file/upload-file"
        };
    },

    data: {
        fileUploaded: false,
        fileId: "",
        filePath: "",
        fromOtherPage: false
    },

    onLoad(options) {
        if (options.from) {
            this.setData({
                fromOtherPage: true
            });
        }
    },

    chooseImage() {
        const self = this;

        _my.chooseImage({
            count: 1,
            sizeType: ["compressed"],
            sourceType: ["album"],

            success(res) {
                console.log(
                    "chooseImage success, temp path is",
                    res.tempFilePaths[0]
                );
                const filePath = res.tempFilePaths[0];

                _my.showLoading({
                    title: "上传中"
                });

                app.getUserOpenIdViaCloud()
                    .then(openid => {
                        const cloudPath =
                            "upload/" + openid + filePath.match(/\.[^.]+?$/)[0];
                        console.log("cloudPath", cloudPath);

                        _my.cloud.uploadFile({
                            cloudPath,
                            filePath,
                            success: res => {
                                console.log("[上传文件] 成功：", res);
                                app.globalData.fileId = res.fileID;
                                self.setData({
                                    fileUploaded: true,
                                    fileId: res.fileID,
                                    filePath
                                });

                                _my.hideLoading();
                            },
                            fail: err => {
                                console.error("[上传文件] 失败：", err);

                                _my.hideLoading();

                                _my.showToast({
                                    icon: "none",
                                    title: "上传失败"
                                });
                            }
                        });

                        return openid;
                    })
                    .catch(err => {
                        console.error(err);

                        _my.hideLoading();
                    });
            },

            fail({ errMsg }) {
                console.log("chooseImage fail, err is", errMsg);
            }
        });
    }
});
