const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/add-contact/add-contact"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "新增联系人",
            path: "page/API/pages/add-contact/add-contact"
        };
    },

    submit(e) {
        const formData = e.detail.value;
        console.log("add-contact", e, formData);

        _my.addPhoneContact({
            ...formData,
            weChatNumber: "123456",
            remark: "a",
            addressCountry: "China",
            addressState: "BeiJing",
            addressCity: "BeiJing",
            addressStreet: "大屯路",
            addressPostalCode: "000000",
            organization: "公司",
            title: "职位",
            workFaxNumber: "123456",
            workPhoneNumber: "152257",
            hostNumber: "666666",
            email: "12345678@qq.com",
            url: "http://www.baidu.com",
            workAddressCountry: "China",
            workAddressState: "BeiJing",
            workAddressCity: "BeiJing",
            workAddressStreet: "大望路",
            workAddressPostalCode: "000000",
            homeFaxNumber: "123456",
            homePhoneNumber: "123456",
            homeAddressCountry: "China",
            homeAddressState: "BeiJing",
            homeAddressCity: "BeiJing",
            homeAddressStreet: "立水桥",
            homeAddressPostalCode: "000000",

            success() {
                _my.showToast({
                    title: "联系人创建成功"
                });
            },

            fail() {
                _my.showToast({
                    title: "联系人创建失败"
                });
            }
        });
    }
});
