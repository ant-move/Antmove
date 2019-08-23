const descObj = require("./desc.js");
const utils = require("./utils.js");
const apiObj = {
    connectSocket: {
        fn (obj) {
            swan.connectSocket(obj);
            utils.testparams(descObj.connectSocket,obj);
        }
    },
    httpRequest: {
        fn (obj) {
            const successFn = obj.success;
            delete obj.success;
            return swan.request({
                ...obj,
                success (res) {
                    res.status = res.statusCode;
                    successFn && successFn(res);
                }
            });
        }
        
    }

};

module.exports = apiObj;