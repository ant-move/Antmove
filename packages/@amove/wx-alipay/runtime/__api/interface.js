const utils = require("./utils");
const descObj = require("./desc.js");

const apiObj = {
    hideHomeButton: {
        fn (obj = {}) {
            let hideHomeButtonProps = descObj.hideHomeButton.body.params.props;
            let param = utils.defineGetter(obj, hideHomeButtonProps, function (obj, prop) {
                utils.warn(
                    `hideHomeButton的返回值不支持 ${prop} 属性!`,
                    {
                        apiName: `hideHomeButton/${prop}`,
                        errorType: hideHomeButtonProps[prop].type,
                        type: 'api'
                    }
                );
            });
            return my.hideBackHome(param);
        }
    },
    cloud: {
        init () {
            utils.warn(
                `支付宝暂不支持init`,
                {
                    apiName: "cloud/init",
                    errorType: 0,
                    type: 'api'
                }
            );
        }
    }
};

module.exports = apiObj;