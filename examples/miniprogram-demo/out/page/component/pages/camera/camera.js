const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/camera/camera"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "camera",
            path: "page/component/pages/camera/camera"
        };
    },

    data: {
        src: "",
        videoSrc: "",
        position: "back",
        mode: "scanCode",
        result: {}
    },

    onLoad() {
        this.ctx = _my.createCameraContext();
    },

    takePhoto() {
        this.ctx.takePhoto({
            quality: "high",
            success: res => {
                console.log(res);
                this.setData({
                    src: res.tempImagePath
                });
            }
        });
    },

    startRecord() {
        this.ctx.startRecord({
            success: () => {
                console.log("startRecord");
            }
        });
    },

    stopRecord() {
        this.ctx.stopRecord({
            success: res => {
                console.log(res);
                this.setData({
                    src: res.tempThumbPath,
                    videoSrc: res.tempVideoPath
                });
            }
        });
    },

    togglePosition() {
        this.setData({
            position: this.data.position === "front" ? "back" : "front"
        });
    },

    error(e) {
        console.log(e.detail);
    }
});
