const utils = require("../../api/utils");
const processDataSet = require('../utils/processDataSet')

Component({
    data: {
        "scope": "",
        getAuthorize: ""
    },
    props: {
        'size': 'default',
        'type': 'default',
        'plain': false,
        'disabled': false,
        'loading': false,
        'form-type': '',
        'open-type': '',
        'app-parameter': '',
        'hover-class': 'button-hover',
        'hover-stop-propagation': false,
        'hover-start-time': false,
        className: "",
        onTap: ()=>{},
        'onGetuserInfo': ""
    },
    didMount () {
        for (let key in this.props) {
            typeof (this.props[key]) === "string" && (this.props[key] = this.props[key].replace(/(^\s*)|(\s*$)/g, ""));
        }
        let { size, type, plain, disabled, loading, formType, openType, hoverClass, hoverStopPropagation, hoverStartTime, appParameter,scope } = this.props;
        this.getSystem(() => {
            openType = this.testOpenType(openType, scope);
            this.setData({
                size, type, plain, disabled, loading, formType, opentype: openType, hoverClass, hoverStopPropagation, hoverStartTime, appParameter
            });
        });
    },
    methods: {
        getSystem (cb) {
            const that = this;
            my.getSystemInfo({
                success (res) {
                    let app = "";
                    if (res.app && res.app === "amap") {
                        app = "amap";
                    } else {
                        app = "alipay";
                    }
                    that.setData({
                        app
                    });
                    cb();
                },
            });
        },
        testOpenType (opentype, scope) {
            if (opentype) {
                const otherType = {
                    "getPhoneNumber": "getAuthorize",
                    "getUserInfo": "getAuthorize"
                };
                if (scope==='phoneNumber') {
                    this.setData({
                        scope: 'phoneNumber',
                        opentype: "getPhone"
                    });
                    return otherType.getPhoneNumber;
                }
                if (scope==='userInfo') {
                    this.setData({
                        scope: 'userInfo',
                        opentype: "getUserInfo"
                    });
                    return otherType.getUserInfo;
                }
                utils.warn(
                    `小程序open-type值不支持${opentype}`,
                    {
                        apiName: `button/pen-type/${opentype}`,
                        errorType: 0,
                        type: 'component'
                    }
                );
            }
            let typeArr = ["share", "launchApp", "getAuthorize", "openSetting"];
            if (this.data.app === "amap") {
                typeArr = ["share","getAuthorize", "openSetting"];
            }
            if (opentype && typeArr.indexOf(opentype) !== -1) {
                return opentype;
            }
            return "";
        },
        onError(err) {
            if (this.props.onError === "function") {
                this.props.onError(err);
            }
        },
        getAuthorize(){
            const that = this;
            let resObj = {};
            if (this.props.openType === "getAuthorize" && this.props.scope === 'phoneNumber') {
                my.getPhoneNumber({
                    success: (res) => {
                        if (typeof that.props.onGetAuthorize === 'function') {
                            resObj.detail = res;
                            resObj.type = "getphonenumber"
                            that.props.onGetAuthorize(resObj)
                        }
                    },
                    fail: (res) => {
                        if (typeof that.props.onGetAuthorize === 'function') {
                            resObj.detail = res;
                            resObj.type = "getphonenumber"
                            that.props.onGetAuthorize(resObj)
                        }
                    }

                })
            }
            if (this.props.openType === "getAuthorize" && this.props.scope === 'userInfo') {
                my.getOpenUserInfo({
                    success: (res) => {
                        if (typeof that.props.onGetAuthorize === 'function') {
                            resObj.detail = res;
                            resObj.type = "getuserinfo"
                            that.props.onGetAuthorize(resObj)
                        }
                    },
                    fail: (res) => {
                        if (typeof that.props.onGetAuthorize === 'function') {
                            resObj.detail = res;
                            resObj.type = "getuserinfo"
                            that.props.onGetAuthorize(resObj)
                        }
                    }
                })
            }
        },
        stopEvent(){},
        btnOnTap (e) {
            const that = this;
            const tapEvent = processDataSet(e, this.props);

            if (this.props.openType==="openSetting") {
                my.openSetting({
                    success (res) {
                        if (typeof that.props.onOpenSetting==="function") {
                            that.props.onOpenSetting({
                                ...tapEvent,
                                type: "opensetting",
                                detail: {
                                    authSetting: utils.mapAuthSetting(res.authSetting)
                                }
                            });
                        }
                    }
                });
            }

            this.props.onCatchTap &&this.props.onCatchTap(tapEvent);
            this.props.onTap && this.props.onTap(tapEvent);
        },
        getPhone (e) {
            const eve = {...e};
            my.getPhoneNumber({
                success: (res) => {
                    if (typeof res.response === "string") {
                        const response = JSON.parse(res.response);
                        if ( response.response.code==="40001") {
                            utils.warn("请去小程序开发管理后台的功能列表中添加获取电话功能",{
                                apiName: 'button/bindgetphonenumber',
                                errorType: 1,
                                type: 'component'
                            });
                        }
                        return false;
                    }
                    eve.detail = res.response;
                    if (typeof this.props.onGetPhoneNumber === "function") {
                        this.props.onGetPhoneNumber(eve);
                    }
                },
                fail (err) {
                    throw  err;
                }
            });
        },
        getUserInfo (e) {
            const that = this;
            // 获取用户信息
            const eve = {...e};
            my.getAuthCode({
                scopes: 'auth_user',
                success: () => {
                    my.getOpenUserInfo({
                        success: (userInfo) => {
                            eve.detail = {
                                userInfo: {},
                                rawData: ""
                            };
                            if (typeof userInfo.response === "string") {
                                const response = JSON.parse(userInfo.response);
                                if ( response.response.code==="40006") {
                                    utils.warn("请去小程序开发管理后台的功能列表中添加会员信息功能",{
                                        apiName: 'button/bindgetuserinfo',
                                        errorType: 1,
                                        type: 'component'
                                    });
                                }
                                return false;
                            }
                            eve.detail.userInfo = {...userInfo.response};
                            eve.detail.userInfo.avatarUrl =  eve.detail.userInfo.avatar;
                            delete eve.detail.userInfo.avatar;
                            eve.detail.rawData = JSON.stringify(eve.detail.userInfo);

                            if (typeof that.props.onGetuserInfo ==="function") {
                                that.props.onGetuserInfo(eve);
                            }
                        },
                        fail (err) {
                            throw  err;
                        }
                    });
                }
            });

        }
    },
    didUpdate () {
        let { size, type, plain, disabled, loading, formType, openType, hoverClass, hoverStopPropagation, hoverStartTime, appParameter } = this.props;

        this.setData({
            size, type, plain, disabled, loading, formType, openType, hoverClass, hoverStopPropagation, hoverStartTime, appParameter
        });
    }

});