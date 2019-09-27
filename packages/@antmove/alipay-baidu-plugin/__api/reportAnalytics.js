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
            swan.login({
                success (res) {
                    obj.success&&  obj.success({
                        authCode: res.code
                    });
                }, 
                fail (err) {
                    obj.fail&&  obj.fail(err);
                },
                complete (...res) {
                    obj.complete&&obj.complete(...res);
                }

            });

        }
    }
};
