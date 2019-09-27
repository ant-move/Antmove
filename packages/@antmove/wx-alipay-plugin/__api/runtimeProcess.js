const myApi = require('./my');
const utils = require('./utils.js');
const globalVar = require('./config').global;
let hasProxy = typeof Proxy !== 'undefined';
let _Proxy = function () { };
if (hasProxy) _Proxy = Proxy;
/**
 * runtime error catch
 */
function warnApi (api) {
    const iscanIuse = globalVar.canIUse(api);
    if (!iscanIuse) {
        utils.warn(
            `支付宝暂不支持${api}`,
            {
                apiName: api,
                errorType: 0,
                type: 'api'
            }
        );

        return function () {
            console.error(`支付宝暂不支持${api}`);
        };
    }
}

module.exports = function (obj = {}) {
    let _obj = Object.assign({}, obj, myApi);
    if (!hasProxy) {
        Object.keys(myApi)
            .forEach(function (attr) {
                Object.defineProperty(_obj, attr, {
                    get () {
                        let ret;
                        if (myApi[attr]) {
                            ret = function (o = {}, args = "") {
                                if (args) {
                                    return myApi[attr].fn(o, args);
                                }
                                return myApi[attr].fn(o);
                            };
                        } else {
                            let helpFn = warnApi(attr);
                            ret = obj[attr] || helpFn;
                        }

                        return ret;
                    }
                });
            });
        return _obj;
    }
    return new _Proxy(obj, {
        get (target, attr) {
            let ret;
            if (typeof attr === 'string' && myApi[attr]) {
                ret = function (obj = {}, args = "") {
                    if (args) {
                        return myApi[attr].fn(obj, args);
                    }
                    return myApi[attr].fn(obj);
                };
            } else {
                let helpFn = warnApi(attr);
                ret = target[attr] || helpFn;
            }

            return ret;
        }
    });

};

/**
 * for bindgetuserinfo open-type of button
 */
myApi.getUserInfoWrap = {
    fn: function (e = {}, fn) {
  
        globalVar.getAuthCode({
            scopes: 'auth_user',
            success: () => {
                globalVar.getAuthUserInfo({
                    success: function (userInfo) {
                        fn && fn({
                            ...e,
                            detail: {
                                userInfo
                            }
                        });
                    }
                });
            },
            fail (res) {
                fn && fn({
                    ...e,
                    detail: res
                });
            }
        });
    }
};

/**
 * for bindgetphonenumber open-type of button
 */
myApi.getPhoneNumberWrap = {
    fn: function (e = {}, fn) {
        globalVar.getPhoneNumber({
            success: (res) => {
                let encryptedData = res.response;
                e = {
                    ...e,
                    detail: encryptedData,
                    res: res
                };
                fn && fn(e);
            },
            fail: (res) => {
                e = {
                    ...e,
                    detail: {},
                    res: res
                };
                fn && fn(e);
            },
        });
    }
};