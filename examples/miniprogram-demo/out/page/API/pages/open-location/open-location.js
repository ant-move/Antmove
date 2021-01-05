const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/open-location/open-location"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "查看位置",
            path: "page/API/pages/open-location/open-location"
        };
    },

    openLocation(e) {
        console.log(e);
        const value = e.detail.value;
        console.log(value);

        _my.openLocation({
            longitude: Number(value.longitude),
            latitude: Number(value.latitude),
            name: value.name,
            address: value.address,
            scale: 14
        });
    }
});
