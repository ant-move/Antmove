const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/storage/storage"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "数据存储",
            path: "page/API/pages/storage/storage"
        };
    },

    data: {
        key: "",
        data: "",
        dialog: {
            title: "",
            content: "",
            hidden: true
        }
    },

    keyChange(e) {
        this.data.key = e.detail.value;
    },

    dataChange(e) {
        this.data.data = e.detail.value;
    },

    getStorage() {
        const { key, data } = this.data;
        let storageData;

        if (key.length === 0) {
            this.setData({
                key,
                data,
                "dialog.hidden": false,
                "dialog.title": "读取数据失败",
                "dialog.content": "key 不能为空"
            });
        } else {
            storageData = _my.getStorageSync(key);

            if (storageData === "") {
                this.setData({
                    key,
                    data,
                    "dialog.hidden": false,
                    "dialog.title": "读取数据失败",
                    "dialog.content": "找不到 key 对应的数据"
                });
            } else {
                this.setData({
                    key,
                    data,
                    "dialog.hidden": false,
                    "dialog.title": "读取数据成功",
                    // eslint-disable-next-line
                    "dialog.content": "data: '" + storageData + "'"
                });
            }
        }
    },

    setStorage() {
        const { key, data } = this.data;

        if (key.length === 0) {
            this.setData({
                key,
                data,
                "dialog.hidden": false,
                "dialog.title": "保存数据失败",
                "dialog.content": "key 不能为空"
            });
        } else {
            _my.setStorageSync(key, data);

            this.setData({
                key,
                data,
                "dialog.hidden": false,
                "dialog.title": "存储数据成功"
            });
        }
    },

    clearStorage() {
        _my.clearStorageSync();

        this.setData({
            key: "",
            data: "",
            "dialog.hidden": false,
            "dialog.title": "清除数据成功",
            "dialog.content": ""
        });
    },

    confirm() {
        this.setData({
            "dialog.hidden": true,
            "dialog.title": "",
            "dialog.content": ""
        });
    }
});
