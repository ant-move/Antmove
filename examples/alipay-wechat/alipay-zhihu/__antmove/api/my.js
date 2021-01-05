const utils = require("./utils");
const descObj = require("./desc.js");
const apiObj = {getStorageSync:{fn: function fn (key="") {
            const storeData = my.getStorageSync({
                key
            });

            return storeData.data || '';
        },},setStorageSync:{fn: function fn (key="",data="") {
            if (key&&data) {
                return my.setStorageSync ({
                    "key": key,
                    "data": data
                });
            }
        },},login:{fn: function fn (obj = {}) {
            my.getAuthCode({
                scopes: 'auth_user',
                success: res => {
                    const resObj = {
                        code: res.authCode
                    };
                    if (res.authCode) {
                        resObj.errMsg = "login:ok";
                        if (obj.success) {
                            obj.success(resObj);
                        }
                    } else {
                        resObj.errMsg = "login:fail";
                        if (obj.success) {
                            obj.success(resObj);
                        }
                    }
                },
                fail: err => {
                    if (obj.fail) {
                        obj.fail(err);
                    }
                },
                complete: res => {
                    if (res.authCode) {
                        const resObj = {
                            code: res.authCode,
                            errMsg: "login:ok"
                        };
                        if (obj.complete) {
                            obj.complete(resObj);
                        }
                    } else {
                        if (obj.complete) {
                            obj.complete(res);
                        }
                    }
                   
                }
            });
        },},getUserInfo:{fn: function fn (obj) {
            let getUserInfoSuccessRes = descObj.getUserInfo.body.successRes;
            if (obj.withCredentials || obj.lang) {
                utils.warn(
                    'GetAuthUserInfo不支持 withCredentials 或 lang 参数.',
                    {
                        apiName: 'getUserInfo/withCredentials 或 getUserInfo/lang',
                        errorType: 0,
                        type: 'api'
                    }
                );
            }

            my.getAuthCode({
                scopes: 'auth_user',
                success: () => {
                    my.getAuthUserInfo({
                        ...obj,
                        success (res) {
                            let _res = utils.defineGetter(res, getUserInfoSuccessRes, function (obj, prop) {
                                utils.warn(
                                    `getUserInfo的参数不支持 ${prop} 属性!`,
                                    {
                                        apiName: prop,
                                        errorType: getUserInfoSuccessRes[prop].type,
                                        type: 'api'
                                    }
                                );
                            });
                            res.userInfo = _res;
                            _res.userInfo.avatarUrl = _res.avatar;
                            obj.success && obj.success(_res);
                        }
                    });
                }
            });
        },},hideKeyboard:{fn: function fn (obj = {}) {
            my.hideKeyboard(obj);

            if (typeof obj.success === "function") {
                obj.success();
            }

            if (typeof obj.complete === "function") {
                obj.complete();
            }
        },},showNavigationBarLoading:{fn: function fn (obj) {
            my.showNavigationBarLoading();

            if (typeof obj.success === "function") {
                obj.success();
            }

            if (typeof obj.complete === "function") {
                obj.complete();
            }
        },},hideNavigationBarLoading:{fn: function fn (obj) {
            my.hideNavigationBarLoading();

            if (typeof obj.success === "function") {
                obj.success();
            }

            if (typeof obj.complete === "function") {
                obj.complete();
            }
        },},stopPullDownRefresh:{fn: function fn (obj) {
            my.stopPullDownRefresh();

            if (typeof obj.success === "function") {
                obj.success();
            }

            if (typeof obj.complete === "function") {
                obj.complete();
            }
        },},showToast:{fn: function fn (obj = {}) {
            let showToastProps = descObj.showToast.body.params.props;
            if (obj.title) {
                obj.content = obj.title;
                delete obj.title;
            }
            if (!obj.duration) {
                obj.duration = 2000;
            }
            if (obj.icon) {
                if (obj.icon === "success") {
                    obj.type = "success";
                } else if (obj.icon === "loading") {
                    obj.type = "none";
                    utils.warn(
                        "showToast暂不支持loading",
                        {
                            apiName: 'showToast/loading',
                            errorType: 0,
                            type: 'api'
                        }
                    );
                } else {
                    obj.type = "none";
                }
                delete obj.icon;
            } else {
                obj.type = "success";
            }

            let params = utils.defineGetter(
                obj,
                showToastProps,
                function (obj, prop) {
                    utils.warn(
                        `showToast的参数不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: showToastProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );

            my.showToast(params);
        },},request:{fn: function fn (obj = {}) {
            if (obj.header) {
                obj.headers = obj.header;
                delete obj.header;
            } else if (!obj.headers) {
                obj.headers = {};
            }

            if (!obj.headers['content-type']) {
                obj.headers['content-type'] = 'application/x-www-form-urlencoded';
            }

            if (obj.responseType ) {
                obj.dataType = obj.responseType;
                delete obj.responseType;
            }

            if (
                obj.method &&
                descObj.request.body.params.method[obj.method] !== undefined
            ) {
                utils.warn(
                    `request暂不支持${obj.method}请求方式`,
                    {
                        apiName: `request/${obj.method}`,
                        errorType: 0,
                        type: 'api'
                    }
                );
                obj.method = 'POST';
            }

            if (obj.responseType) {
                utils.warn(
                    "支付宝暂不支持responseType",
                    {
                        apiName: 'request/responseType',
                        errorType: 0,
                        type: 'api'
                    }
                );
            }
            let task = my.httpRequest({
                ...obj,
                success (res) {
                    res.header = res.headers;
                    res.statusCode = res.status;
                    delete res.headers;
                    delete res.status;
                    obj.success && obj.success(res);
                },
                fail (err) {
                    obj.fail && obj.fail(err);
                },
                complete (res) {
                    obj.complete && obj.complete(res);
                }
            });
            task = task || {};
            task.abort = function () {};
            task.onHeadersReceived = function () {};
            task.offHeadersReceived = function () {};
            return task;
        },},}
module.exports = apiObj;