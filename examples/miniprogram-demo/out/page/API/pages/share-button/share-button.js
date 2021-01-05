const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/share-button/share-button"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "转发按钮",
            path: "page/API/pages/share-button/share-button"
        };
    },

    handleTapShareButton() {
        if (
            !(
                typeof _my.canIUse === "function" &&
                _my.canIUse("button.open-type.share")
            )
        ) {
            _my.showModal({
                title: "当前版本不支持转发按钮",
                content: "请升级至最新版本微信客户端",
                showCancel: false
            });
        }
    },

    hideShare() {
        _my.hideShareMenu({
            success(res) {
                console.log(res);
            }
        });
    }
});
