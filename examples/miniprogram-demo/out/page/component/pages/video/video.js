const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/video/video"
    }
});

function getRandomColor() {
    const rgb = [];

    for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16);
        color = color.length === 1 ? "0" + color : color;
        rgb.push(color);
    }

    return "#" + rgb.join("");
}

_Page({
    onShareAppMessage() {
        return {
            title: "video",
            path: "page/component/pages/video/video"
        };
    },

    onReady() {
        this.videoContext = _my.createVideoContext("myVideo");
    },

    inputValue: "",
    data: {
        src: "",
        danmuList: [
            {
                text: "第 1s 出现的弹幕",
                color: "#ff0000",
                time: 1
            },
            {
                text: "第 3s 出现的弹幕",
                color: "#ff00ff",
                time: 3
            }
        ]
    },

    bindInputBlur(e) {
        this.inputValue = e.detail.value;
    },

    bindButtonTap() {
        const that = this;

        _my.chooseVideo({
            sourceType: ["album", "camera"],
            maxDuration: 60,
            camera: ["front", "back"],

            success(res) {
                that.setData({
                    src: res.tempFilePath
                });
            }
        });
    },

    bindSendDanmu() {
        this.videoContext.sendDanmu({
            text: this.inputValue,
            color: getRandomColor()
        });
    },

    videoErrorCallback(e) {
        console.log("视频错误信息:");
        console.log(e.detail.errMsg);
    },

    bindwaiting(e) {
        console.log("bindwaiting", e);
    },

    binderror(e) {
        console.log("binderror", e);
    },

    bindplay(e) {
        console.log("bindplay", e);
    },

    bindpause(e) {
        console.log("bindpause", e);
    },

    bindtimeupdate(e) {
        console.log("bindtimeupdate", e);
    },

    bindended() {
        console.log("bindended");
    },

    bindfullscreenchange(e) {
        console.log("bindfullscreenchange", e);
    },

    bindprogress(e) {
        console.log("bindprogress", e);
    }
});
