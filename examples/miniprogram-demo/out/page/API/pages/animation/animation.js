const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/animation/animation"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "动画",
            path: "page/API/pages/animation/animation"
        };
    },

    onReady() {
        this.animation = _my.createAnimation({
            duration: 1000,
            timingFunction: "ease-in",
            delay: 1000,
            transformOrigin: "50% 50% 50%"
        });
    },

    rotate() {
        this.animation
            .rotate3d(
                Math.random() * 720 - 360,
                Math.random() * 720 - 360,
                Math.random() * 720 - 360,
                Math.random() * 720 - 360
            )
            .step();
        this.setData({
            animation: this.animation.export()
        });
    },

    scale() {
        this.animation.scale(Math.random() * 2).step();
        this.setData({
            animation: this.animation.export()
        });
    },

    translate() {
        this.animation
            .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
            .step();
        this.setData({
            animation: this.animation.export()
        });
    },

    tl() {
        this.animation
            .top(Math.random() * 100 - 50)
            .left(Math.random() * 100 - 50)
            .step();
        this.setData({
            animation: this.animation.export()
        });
    },

    br() {
        this.animation
            .right(Math.random() * 100 - 50)
            .bottom(Math.random() * 100 - 50)
            .step();
        this.setData({
            animation: this.animation.export()
        });
    },

    style() {
        this.animation
            .width(Math.random() * 100)
            .height(Math.random() * 100)
            .backgroundColor("#ff0000")
            .opacity(Math.random())
            .step();
        this.setData({
            animation: this.animation.export()
        });
    },

    skew() {
        this.animation.skew(Math.random() * 90, Math.random() * 90).step();
        this.setData({
            animation: this.animation.export()
        });
    },

    matrix() {
        this.animation.matrix(1, 2, -1, 1, 80, 80).step();
        this.setData({
            animation: this.animation.export()
        });
    },

    rotateAndScale() {
        this.animation
            .rotate(Math.random() * 720 - 360)
            .scale(Math.random() * 2)
            .step();
        this.setData({
            animation: this.animation.export()
        });
    },

    rotateThenScale() {
        this.animation
            .rotate(Math.random() * 720 - 360)
            .step()
            .scale(Math.random() * 2)
            .step();
        this.setData({
            animation: this.animation.export()
        });
    },

    all() {
        this.animation
            .rotate(Math.random() * 720 - 360)
            .scale(Math.random() * 2)
            .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
            .skew(Math.random() * 90, Math.random() * 90)
            .step();
        this.setData({
            animation: this.animation.export()
        });
    },

    allInQueue() {
        this.animation
            .rotate(Math.random() * 720 - 360)
            .step()
            .scale(Math.random() * 2)
            .step()
            .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
            .step()
            .skew(Math.random() * 90, Math.random() * 90)
            .step();
        this.setData({
            animation: this.animation.export()
        });
    },

    reset() {
        this.animation
            .rotate(0, 0)
            .scale(1)
            .translate(0, 0)
            .skew(0, 0)
            .step({
                duration: 0
            });
        this.setData({
            animation: this.animation.export()
        });
    }
});
