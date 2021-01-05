const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/web-socket/web-socket"
    }
});

function showModal(title, content) {
    _my.showModal({
        title,
        content,
        showCancel: false
    });
}

function showSuccess(title) {
    _my.showToast({
        title,
        icon: "success",
        duration: 1000
    });
}

_Page({
    onShareAppMessage() {
        return {
            title: "Web Socket",
            path: "page/API/pages/web-socket/web-socket"
        };
    },

    data: {
        socketStatus: "closed"
    },

    onLoad() {
        const self = this;
        self.setData({
            hasLogin: true
        }); // qcloud.setLoginUrl(loginUrl)
        // qcloud.login({
        //   success: function(result) {
        //     console.log('登录成功', result)
        //     self.setData({
        //       hasLogin: true
        //     })
        //   },
        //   fail: function(error) {
        //     console.log('登录失败', error)
        //   }
        // })
    },

    onUnload() {
        this.closeSocket();
    },

    toggleSocket(e) {
        const turnedOn = e.detail.value;

        if (turnedOn && this.data.socketStatus === "closed") {
            this.openSocket();
        } else if (!turnedOn && this.data.socketStatus === "connected") {
            const showSuccess = true;
            this.closeSocket(showSuccess);
        }
    },

    openSocket() {
        // var socket = this.socket = new qcloud.Tunnel(tunnelUrl)
        _my.onSocketOpen(res => {
            console.log("WebSocket 已连接" + JSON.stringify(res));
            showSuccess("Socket已连接");
            this.setData({
                socketStatus: "connected",
                waitingResponse: false
            });
        });

        _my.onSocketClose(() => {
            console.log("WebSocket 已断开");
            this.setData({
                socketStatus: "closed"
            });
        });

        _my.onSocketError(error => {
            showModal("发生错误", JSON.stringify(error));
            console.error("socket error:", error);
            this.setData({
                loading: false
            });
        }); // 监听服务器推送消息

        _my.onSocketMessage(message => {
            showSuccess("收到信道消息");
            console.log("socket message:", message);
            this.setData({
                loading: false
            });
        }); // 打开信道

        const task = _my.connectSocket({
            url: "wss://echo.websocket.org",
            tcpNoDelay: false,
            tcpNoDelay: []
        });

        task.send({
            data: "haha, Miniprogram!"
        });
        task.onMessage(function(res) {
            console.log(11, res);
        });
        task.onClose(function(res) {
            console.log("onclose", res);
        });
        task.onOpen(function(res) {
            console.log("onOpen", res);
        });
    },

    closeSocket() {
        if (this.data.socketStatus === "connected") {
            _my.closeSocket({
                reason: "11",
                code: 1000,
                success: () => {
                    showSuccess("Socket已断开");
                    this.setData({
                        socketStatus: "closed"
                    });
                }
            });
        }
    },

    sendMessage() {
        if (this.data.socketStatus === "connected") {
            _my.sendSocketMessage({
                data: "Hello, Miniprogram!"
            });
        }
    }
});
