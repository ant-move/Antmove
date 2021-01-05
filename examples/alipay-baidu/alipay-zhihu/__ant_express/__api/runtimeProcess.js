const myApi = require('./my');
/**
 * runtime error catch
 */

module.exports = function (obj = {}) {
    return new Proxy(obj, {
        get (target, attr) {
            let ret;
            if (typeof attr === 'string' && myApi[attr]) {
               ret = function (obj = {},args="") {
                    if (args) {
                        return myApi[attr].fn(obj,args);
                    } 
                    return myApi[attr].fn(obj);
               };
            } else {
                ret = target[attr];
            }

            return ret;
        }
    });
};
