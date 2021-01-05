const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/upload-file/upload-file"
    }
});

const uploadFileUrl = require("../../../../config").uploadFileUrl;

_Page({
    onShareAppMessage() {
        return {
            title: "上传文件",
            path: "page/API/pages/upload-file/upload-file"
        };
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
                const imageSrc = res.tempFilePaths[0];

                const task = _my.uploadFile({
                    url: uploadFileUrl,
                    filePath: imageSrc,
                    name: "data",

                    success(res) {
                        console.log("uploadImage success, res is:", res);

                        _my.showToast({
                            title: "上传成功",
                            icon: "success",
                            duration: 1000
                        });

                        self.setData({
                            imageSrc
                        });
                    },

                    fail({ errMsg }) {
                        console.log("uploadImage fail, errMsg is", errMsg);
                    }
                });

                task.onProgressUpdate(function(res) {
                    console.log(res);
                });
            },

            fail({ errMsg }) {
                console.log("chooseImage fail, err is", errMsg);
            }
        });
    }
});
