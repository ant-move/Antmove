const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/canvas/canvas"
    }
});

const example = require("./example.js");

_Page({
    onShareAppMessage() {
        return {
            title: "创建画布",
            path: "page/API/pages/canvas/canvas"
        };
    },

    onLoad() {
        this.context = _my.createCanvasContext("canvas");
        const methods = Object.keys(example);
        this.setData({
            methods
        });
        const that = this;
        methods.forEach(function(method) {
            that[method] = function() {
                example[method](that.context); // const actions = that.context.getActions()

                that.context.draw(); // wx.drawCanvas({
                //   canvasId: 'canvas',
                //   actions
                // })
            };
        });
    },

    toTempFilePath() {
        _my.canvasToTempFilePath({
            canvasId: "canvas",

            success(res) {
                console.log(res);
            },

            fail(res) {
                console.log(res);
            }
        });
    },

    canvasPutImageData() {
        const data = new Uint8ClampedArray([255, 0, 0, 1]);

        _my.canvasPutImageData({
            canvasId: "canvas",
            x: 0,
            y: 0,
            width: 1,
            data,

            success(res) {
                console.log(res);
            },

            fail(res) {
                console.log(res);
            }
        });
    },

    canvasGetImageData() {
        _my.canvasGetImageData({
            canvasId: "canvas",
            x: 0,
            y: 0,
            width: 100,
            height: 100,

            success(res) {
                console.log(res.width); // 100

                console.log(res.height); // 100

                console.log(res.data instanceof Uint8ClampedArray); // true

                console.log(res.data.length); // 100 * 100 * 4
            }
        });
    }
});
