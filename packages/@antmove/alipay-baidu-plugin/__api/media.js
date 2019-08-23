const descObj = require("./desc.js");
const apiObj = {
    chooseImage: {
        fn (obj) {
            const successFn = obj.success || function () {};
            delete  obj.success;
            swan.chooseImage({
                ...obj,
                success (res) {
                    res.apFilePaths = res.tempFilePaths;
                    delete res.tempFilePaths;
                    delete res.tempFiles;

                    successFn(res);
                }
            });
        }
    }
};
module.exports = apiObj;