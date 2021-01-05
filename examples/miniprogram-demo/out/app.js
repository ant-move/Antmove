const _App = require("./__antmove/component/componentClass.js")("App");
const _my = require("./__antmove/api/index.js")(my);
const config = require("./config");

_App({
    onLaunch(opts) {
        console.log("App Launch", opts, _my.cloud);

        if (!_my.cloud) {
            console.error("请使用 2.2.3 或以上的基础库以使用云能力");
        } else {
            _my.cloud.init({
                env: config.envId,
                traceUser: true
            });
        }
    },

    onShow(opts) {
        console.log("App Show", opts);
    },

    onHide() {
        console.log("App Hide");
    },

    globalData: {
        hasLogin: false,
        openid: null
    },

    // lazy loading openid
    getUserOpenId(callback) {
        const self = this;

        if (self.globalData.openid) {
            callback(null, self.globalData.openid);
        } else {
            _my.login({
                success(data) {
                    _my.request({
                        url: config.openIdUrl,
                        data: {
                            code: data.code
                        },

                        success(res) {
                            console.log("拉取openid成功", res);
                            self.globalData.openid = res.data.openid;
                            callback(null, self.globalData.openid);
                        },

                        fail(res) {
                            console.log(
                                "拉取用户openid失败，将无法正常使用开放接口等服务",
                                res
                            );
                            callback(res);
                        }
                    });
                },

                fail(err) {
                    console.log(
                        "wx.login 接口调用失败，将无法正常使用开放接口等服务",
                        err
                    );
                    callback(err);
                }
            });
        }
    },

    // 通过云函数获取用户 openid，支持回调或 Promise
    getUserOpenIdViaCloud() {
        return _my.cloud
            .callFunction({
                name: "wxContext",
                data: {}
            })
            .then(res => {
                this.globalData.openid = res.result.openid;
                return res.result.openid;
            });
    }
});
