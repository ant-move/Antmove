const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/cloud/pages/scf-database/scf-database"
    }
}); // 参考文档：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-server-api/database/

_Page({
    onShareAppMessage() {
        return {
            title: "云函数操作数据库",
            path: "page/cloud/pages/scf-database/scf-database"
        };
    },

    data: {
        serverDataClient: "",
        serverDataClientError: false,
        serverDataCloud: "",
        serverDataCloudError: false,
        clientLoading: false,
        cloudLoading: false
    },

    queryServerDataViaClient() {
        const db = _my.cloud.database();

        this.setData({
            clientLoading: true,
            serverDataClient: "",
            serverDataClientError: false
        });
        db.collection("perm4")
            .where({
                _openid: "server"
            })
            .get({
                success: res => {
                    const resFirstData = (res.data && res.data[0]) || {};
                    this.setData({
                        serverDataClient: resFirstData.data
                    });
                    console.log("[数据库] [查询记录] 成功: ", res);
                },
                fail: err => {
                    this.setData({
                        serverDataClientError: true
                    });
                    console.error("[数据库] [查询记录] 失败：", err);
                },
                complete: () => {
                    this.setData({
                        clientLoading: false
                    });
                }
            });
    },

    queryServerDataViaCloudFunction() {
        this.setData({
            cloudLoading: true,
            serverDataCloud: "",
            serverDataCloudError: false
        });

        _my.cloud.callFunction({
            name: "getServerDataDemo",
            data: {},
            success: res => {
                console.log("[云函数] [getServerDataDemo] res: ", res.result);
                const resFirstData =
                    (res.result.data && res.result.data[0]) || {};
                this.setData({
                    serverDataCloud: resFirstData.data
                });
            },
            fail: err => {
                this.setData({
                    serverDataCloudError: true
                });
                console.error("[云函数] [getServerDataDemo] 调用失败", err);
            },
            complete: () => {
                this.setData({
                    cloudLoading: false
                });
            }
        });
    }
});
