const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/download-file/download-file"
    }
});

const downloadExampleUrl = require("../../../../config").downloadExampleUrl;

_Page({
    onShareAppMessage() {
        return {
            title: "下载文件",
            path: "page/API/pages/download-file/download-file"
        };
    },

    downloadImage() {
        const self = this;

        const task = _my.downloadFile({
            url: downloadExampleUrl,
            filePath: "",

            success(res) {
                console.log("downloadFile success, res is", res);
                self.setData({
                    imageSrc: res.tempFilePath
                });
            },

            fail({ errMsg }) {
                console.log("downloadFile fail, err is:", errMsg);
            }
        });

        task.onProgressUpdate(function(res) {
            console.log(res);
        });
    }
});
