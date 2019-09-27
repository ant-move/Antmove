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
        return function () { return false; };
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
                        if (myApi[attr] && attr !== 'SDKVersion') {
                            ret = function (o = {}, args = "") {
                                if (args) {
                                    return myApi[attr].fn(o, args);
                                }
                                return myApi[attr].fn(o);
                            };
                        } else if (attr !== 'SDKVersion' ) {
                          
                            let helpFn = warnApi(attr);
                            ret = obj[attr] || helpFn;
                        } else {
                            ret = myApi[attr].fn();
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
            if (typeof attr === 'string' && myApi[attr] && attr!=='SDKVersion') {
                ret = function (obj = {}, args = "") {
                    if (args ) {
                        return myApi[attr].fn(obj, args);
                    } 
                    return myApi[attr].fn(obj);
                };
            } else if (attr !== 'SDKVersion') {
                let helpFn = warnApi(attr);
                ret = target[attr] || helpFn;
            } else {
                ret = myApi[attr].fn();
            }
            return ret;
        }
    });

};
