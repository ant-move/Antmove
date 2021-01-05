const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/on-accelerometer-change/on-accelerometer-change"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "监听重力感应数据",
            path:
                "page/API/pages/on-accelerometer-change/on-accelerometer-change"
        };
    },

    data: {
        x: 0,
        y: 0,
        z: 0,
        enabled: true
    },

    onReady() {
        this.drawBigBall();
        const that = this;
        this.position = {
            x: 151,
            y: 151,
            vx: 0,
            vy: 0,
            ax: 0,
            ay: 0
        };

        _my.onAccelerometerChange(function(res) {
            that.setData({
                x: res.x.toFixed(2),
                y: res.y.toFixed(2),
                z: res.z.toFixed(2)
            });
            that.position.ax = Math.sin((res.x * Math.PI) / 2);
            that.position.ay = -Math.sin((res.y * Math.PI) / 2);
        });

        this.interval = setInterval(function() {
            that.drawSmallBall();
        }, 17);
    },

    drawBigBall() {
        const context = _my.createCanvasContext("big-ball");

        context.beginPath(0);
        context.arc(151, 151, 140, 0, Math.PI * 2);
        context.setFillStyle("#ffffff");
        context.setStrokeStyle("#aaaaaa");
        context.fill();
        context.draw();
    },

    drawSmallBall() {
        const p = this.position;
        let strokeStyle = "rgba(1,1,1,0)";
        p.x += p.vx;
        p.y += p.vy;
        p.vx += p.ax;
        p.vy += p.ay; // eslint-disable-next-line

        if (
            Math.sqrt(
                Math.pow(Math.abs(p.x) - 151, 2) +
                    Math.pow(Math.abs(p.y) - 151, 2)
            ) >= 115
        ) {
            if (p.x > 151 && p.vx > 0) {
                p.vx = 0;
            }

            if (p.x < 151 && p.vx < 0) {
                p.vx = 0;
            }

            if (p.y > 151 && p.vy > 0) {
                p.vy = 0;
            }

            if (p.y < 151 && p.vy < 0) {
                p.vy = 0;
            }

            strokeStyle = "#ff0000";
        }

        const context = _my.createCanvasContext("small-ball");

        context.beginPath(0);
        context.arc(p.x, p.y, 15, 0, Math.PI * 2);
        context.setFillStyle("#1aad19");
        context.setStrokeStyle(strokeStyle);
        context.fill();
        context.draw();
    },

    startAccelerometer() {
        if (this.data.enabled) {
            return;
        }

        const that = this;

        _my.startAccelerometer({
            success() {
                that.setData({
                    enabled: true
                });
            }
        });
    },

    stopAccelerometer() {
        if (!this.data.enabled) {
            return;
        }

        const that = this;

        _my.stopAccelerometer({
            success() {
                that.setData({
                    enabled: false
                });
            }
        });
    },

    onUnload() {
        clearInterval(this.interval);
    }
});
