const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/slider/slider"
    }
});
const pageData = {
    onShareAppMessage() {
        return {
            title: "slider",
            path: "page/component/pages/slider/slider"
        };
    }
};

for (let i = 1; i < 5; ++i) {
    (function(index) {
        pageData["slider" + index + "change"] = function(e) {
            console.log(
                "slider" + index + "发生change事件，携带值为",
                e.detail.value
            );
        };
    })(i);
}

_Page(pageData);
