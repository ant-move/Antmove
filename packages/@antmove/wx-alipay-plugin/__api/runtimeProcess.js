const myApi = require('./my');
let hasProxy = typeof Proxy !== 'undefined';
let _Proxy = function () { };
if (hasProxy) _Proxy = Proxy;
/**
 * runtime error catch
 */
function warnApi(api) {
    const iscanIuse = my.canIUse(api);
    if (!iscanIuse) {
        warn(
            `支付宝暂不支持${api}`,
            {
                apiName: api,
                errorType: 0,
                type: 'api'
            }
        );
    }
}

module.exports = function (obj = {}) {
    let _obj = Object.assign({}, obj, myApi);
    if (!hasProxy) {
        Object.keys(myApi)
            .forEach(function (attr) {
                Object.defineProperty(_obj, attr, {
                    get() {
                        let ret;
                        if (myApi[attr]) {
                            ret = function (o = {}, args = "") {
                                if (args) {
                                    return myApi[attr].fn(o, args);
                                }
                                return myApi[attr].fn(o);
                            };
                        } else {
                            warnApi(attr)
                            ret = obj[attr];
                        }

                        return ret;
                    }
                });
            });
        return _obj;
    }
    return new _Proxy(obj, {
        get(target, attr) {
            let ret;
            if (typeof attr === 'string' && myApi[attr]) {
                ret = function (obj = {}, args = "") {
                    if (args) {
                        return myApi[attr].fn(obj, args);
                    }
                    return myApi[attr].fn(obj);
                };
            } else {
                warnApi(attr)
                ret = target[attr];
            }

            return ret;
        }
    });

};
