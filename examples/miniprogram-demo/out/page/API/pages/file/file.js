const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/file/file"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "文件",
            path: "page/API/pages/file/file"
        };
    },

    onLoad() {
        this.setData({
            savedFilePath: ""
        });
    },

    data: {
        tempFilePath: "",
        savedFilePath: "",
        dialog: {
            hidden: true
        }
    },

    chooseImage() {
        const that = this;

        _my.chooseImage({
            count: 1,

            success(res) {
                that.setData({
                    tempFilePath: res.tempFilePaths[0]
                });
            }
        });
    },

    saveFile() {
        if (this.data.tempFilePath.length > 0) {
            const that = this;

            _my.saveFile({
                tempFilePath: this.data.tempFilePath,

                success(res) {
                    console.log(res);
                    console.log(res.savedFilePath);
                    that.setData({
                        savedFilePath: res.savedFilePath
                    });

                    _my.setStorageSync("savedFilePath", res.savedFilePath);

                    that.setData({
                        dialog: {
                            title: "保存成功",
                            content: "保存成功",
                            hidden: false
                        }
                    });
                },

                fail() {
                    that.setData({
                        dialog: {
                            title: "保存失败",
                            content: "应该是有 bug 吧",
                            hidden: false
                        }
                    });
                }
            });
        }
    },

    clear() {
        _my.setStorageSync("savedFilePath", "");

        this.setData({
            tempFilePath: "",
            savedFilePath: ""
        });
    },

    removeSavedFile() {
        _my.removeSavedFile({
            filePath: this.data.savedFilePath,

            success(res) {
                console.log(res);
            },

            fail(err) {
                console.log(err);
            }
        });
    },

    getSavedFileList() {
        _my.getSavedFileList({
            success(res) {
                console.log(res.fileList);
            },

            fail(err) {
                console.log(err);
            }
        });
    },

    getSavedFileInfo: function() {
        console.log(this.data.savedFilePath);

        _my.getSavedFileInfo({
            filePath: this.data.savedFilePath,

            success(res) {
                console.log(res);
            },

            fail(err) {
                console.log(err);
            }
        });
    },

    getFileInfo() {
        _my.getFileInfo({
            filePath: this.data.savedFilePath,

            success(res) {
                console.log(res);
            },

            fail(err) {
                console.log(err);
            }
        });
    },

    confirm() {
        this.setData({
            "dialog.hidden": true
        });
    }
});
