const _Page = require("../../../__antmove/component/componentClass.js")("Page");
const _my = require("../../../__antmove/api/index.js")(my);
// page/API/navigator/navigator.js
_Page({
    /**
     * 页面的初始数据
     */
    data: {},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        if (_my.canIUse("navigateTo")) {
            this.setData({
                navigateTo: true
            });
        }

        if (_my.canIUse("navigateBack")) {
            this.setData({
                navigateBack: true
            });
        }

        if (_my.canIUse("redirectTo")) {
            this.setData({
                redirectTo: true
            });
        }

        if (_my.canIUse("reLaunch")) {
            this.setData({
                reLaunch: true
            });
        }

        if (_my.canIUse("switchTab")) {
            this.setData({
                switchTab: true
            });
        }
    },

    navigateTo() {
        _my.navigateTo({
            url: "../get-user-info/get-user-info"
        });
    },

    navigateBack() {
        _my.navigateBack();
    },

    redirectTo() {
        _my.redirectTo({
            url: "../get-user-info/get-user-info"
        });
    },

    reLaunch() {
        _my.reLaunch({
            url: "../get-user-info/get-user-info"
        });
    },

    switchTab() {
        _my.switchTab({
            url: "/page/tabBar/API/index",
            success: () => {
                _my.showToast({
                    title: "成功",
                    icon: "success",
                    duration: 4000
                });
            }
        });
    }
});
