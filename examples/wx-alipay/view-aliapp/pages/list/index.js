const _Page = require("../../__antmove/component/componentClass.js")("Page");
_Page({
    data: {
        switch1: true
    },

    onChange(event) {
        const detail = event.detail;
        this.setData({
            switch1: detail.value
        });
    }
});
