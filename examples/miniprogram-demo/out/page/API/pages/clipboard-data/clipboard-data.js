const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/clipboard-data/clipboard-data"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "剪切板",
            path: "page/API/pages/clipboard-data/clipboard-data"
        };
    },

    data: {
        value: "edit and copy me",
        pasted: ""
    },

    valueChanged(e) {
        this.setData({
            value: e.detail.value
        });
    },

    copy() {
        _my.setClipboardData({
            data: this.data.value,

            success() {
                _my.showToast({
                    title: "复制成功",
                    icon: "success",
                    duration: 1000
                });
            },

            fail(res) {
                console.log(res);
            }
        });
    },

    paste() {
        const self = this;

        _my.getClipboardData({
            success(res) {
                self.setData({
                    pasted: res.data
                });

                _my.showToast({
                    title: "粘贴成功",
                    icon: "success",
                    duration: 1000
                });
            },

            fail(res) {
                console.log(res);
            }
        });
    }
});
