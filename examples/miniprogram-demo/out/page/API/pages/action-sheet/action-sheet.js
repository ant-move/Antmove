const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/action-sheet/action-sheet"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "操作菜单",
            path: "page/API/pages/action-sheet/action-sheet"
        };
    },

    actionSheetTap() {
        _my.showActionSheet({
            itemList: ["item1", "item2", "item3", "item4"],
            itemColor: "#ff0000",

            success(e) {
                console.log(e.tapIndex);
            },

            fail(err) {
                console.log(err);
            },

            complete(result) {
                console.log(result);
            }
        });
    }
});
