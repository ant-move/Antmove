const apiObj = {
    getFileInfo: {
        fn (obj) {
            console.log(obj)
            obj.filePath = obj.apFilePath;
            delete obj.apFilePath;
            console.log(obj);
            swan.getFileInfo({...obj});
        }
    },
    getSavedFileInfo: {
        fn (obj) {
            obj.filePath = obj.apFilePath;
            delete obj.apFilePath;
            swan.getSavedFileInfo({
                ...obj
            });
            
        }
    },
    getSavedFileList: {
        fn (obj) {
            const successFn = obj.success|| function () {};
            delete obj.success;
            swan.getSavedFileList({
                ...obj,
                success (res) {
                    if (res.fileList instanceof Array) {
                        res.fileList.forEach(data => {
                            data.apFilePath = data.filePath;
                            delete data.filePath;
                        });
                        successFn(res);
                    }

                   
                }

            });
        }
    },

    removeSavedFile: {
        fn (obj) {
            obj.filePath = obj.apFilePath;
            delete obj.apFilePath;
            swan.removeSavedFile({
                ...obj
            });
        }
    },

    saveFile: {
        fn (obj) {
            obj.tempFilePath = obj.apFilePath;
            delete obj.apFilePath;
            delete obj.apFilePath;
            const successFn = obj.success|| function () {};
            delete obj.success;
            const completeFn = obj.complete|| function () {};
            delete obj.complete;
            swan.saveFile({
                ...obj,
                success (res) {
                    res.apFilePath = res.savedFilePath;
                    successFn(res);
                },

                complete (res) {
                    if (res.savedFilePath) {
                        res.apFilePath = res.savedFilePath;
                    }
                    completeFn(res);
                }

            });
        }
    }
};
module.exports = apiObj;