const myApi = require('./my');
const { warn } = require('./utils');
let hasProxy = typeof Proxy !== 'undefined';
let _Proxy = function () { };
if (hasProxy) _Proxy = Proxy;
/**
 * runtime error catch
 */
function warnApi (api) {
    const iscanIuse = wx.canIUse(api);
    if (!iscanIuse) {
        warn(
            `微信暂不支持${api}`,
            {
                apiName: api,
                errorType: 0,
                type: 'api'
            }
        );
        return function () {
            console.error('微信暂不支持' + api);
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
                            ret = function (...o) {
                                if (o.length === 1) {
                                    return myApi[attr].fn(o[0]);
                                } 
                                return myApi[attr].fn(o);
                            };
                        } else {
                            warnApi(attr);
                            ret = obj[attr];
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
                warnApi(attr);
                if (target[attr] === undefined) {
                    ret = function () {
                        return false;
                    };
                } else {
                    ret = target[attr];
                }
            }

            return ret;
        }
    });

};
