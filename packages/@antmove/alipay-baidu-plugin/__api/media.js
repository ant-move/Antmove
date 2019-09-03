const descObj = require("./desc.js");
const apiObj = {
    chooseImage: {
        fn (obj) {
            const successFn = obj.success || function () {};
            delete  obj.success;
            swan.chooseImage({
                ...obj,
                success (res) {
                    res.apFilePaths = res.tempFilePaths.map(item => {
                        return item.path;
                    });
                    successFn(res);
                }
            });
        }
    }
};
module.exports = apiObj;