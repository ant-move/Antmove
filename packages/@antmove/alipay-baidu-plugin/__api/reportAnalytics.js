const descObj = require("./desc.js");
const utils = require("./utils.js");
module.exports = {
    reportAnalytics: {
        fn (obj) {
            utils.testparams(descObj.connectSocket,obj);
            swan.reportAnalytics({...obj});
        }
    },
    getAuthCode: {
        fn (obj) {
            utils.testparams(descObj.connectSocket, obj);
            obj.success&& obj.success({authCode: "获取失败"});
            obj.complete&& obj.complete();

        }
    }
};
