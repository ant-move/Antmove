const _Page = require("../../../__antmove/component/componentClass.js")("Page");
const _my = require("../../../__antmove/api/index.js")(my);
_Page({
    data: {
        items: [
            {
                name: "angular",
                value: "AngularJS"
            },
            {
                name: "react",
                value: "React",
                checked: true
            },
            {
                name: "polymer",
                value: "Polymer"
            },
            {
                name: "vue",
                value: "Vue.js"
            },
            {
                name: "ember",
                value: "Ember.js"
            },
            {
                name: "backbone",
                value: "Backbone.js",
                disabled: true
            }
        ]
    },

    onSubmit(e) {
        console.log("onSubmit", e);
        console.log(e.detail.value.libs.join(","));

        _my.showToast({
            title: `你选择的框架是${e.detail.value.libs.join(",")}`
        });
    },

    onReset(e) {
        console.log("onReset", e);
    },

    onChange(e) {
        console.log(e);
    }
});
