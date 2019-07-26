/**
 * type:0 missing
 * type:1 diff
 *
 */
const utils = require("./utils");
const descObj = require("./desc.js");

const apiObj = {
    canIUse: {
        fn(params) {
            let paramsList = params.split(".");
            if (paramsList[1] && paramsList[1] === "success") {
                paramsList[1] = "return";
            }
            let str = paramsList.join(".");
            return my.canIUse(str);
        }
    },
    getSystemInfoSync: {
        fn() {
            let ret = my.getSystemInfoSync();
            let getSystemInfoSyncProps = descObj.getSystemInfoSync.body.returnValue.props;
            return utils.defineGetter(
                ret,
                getSystemInfoSyncProps,
                function (obj, prop) {
                    utils.warn(
                        `getSystemInfoSync的返回值不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: getSystemInfoSyncProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
        },
    },
    getSystemInfo: {
        fn(obj = {}) {
            let getSystemInfoProps = descObj.getSystemInfo.body.returnValue.props;
            my.getSystemInfo({
                ...obj,
                success: res => {
                    res = utils.defineGetter(
                        res,
                        getSystemInfoProps,
                        function (obj, prop) {
                            utils.warn(
                                `getSystemInfo的返回值不支持 ${prop} 属性!`,
                                {
                                    apiName: prop,
                                    errorType: getSystemInfoProps[prop].type,
                                    type: 'api'
                                }
                            );
                        }
                    );
                    obj.success && obj.success(res);
                }
            });
        },
    },
    showToast: {
        fn(obj = {}) {
            let showToastProps = descObj.showToast.body.params.props;
            if (obj.title) {
                obj.content = obj.title;
                delete obj.title;
            }
            if (!obj.duration) {
                obj.duration = 2000;
            }
            if (obj.icon) {
                if (obj.icon === "success") {
                    obj.type = "success";
                } else if (obj.icon === "loading") {
                    obj.type = "none";
                    utils.warn(
                        "showToast暂不支持loading",
                        {
                            apiName: 'showToast/loading',
                            errorType: 0,
                            type: 'api'
                        }
                    );
                } else {
                    obj.type = "none";
                }
                delete obj.icon;
            } else {
                obj.type = "success";
            }

            let params = utils.defineGetter(
                obj,
                showToastProps,
                function (obj, prop) {
                    utils.warn(
                        `showToast的参数不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: showToastProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );

            my.showToast(params);
        },
    },
    showModal: {
        fn(obj = {}) {
            let showModalProps = descObj.showModal.body.params.props;
            if (obj.cancelText !== undefined) {
                obj.cancelButtonText = obj.cancelText;
                delete obj.cancelText;
            }

            if (obj.confirmText !== undefined) {
                obj.confirmButtonText = obj.confirmText;
                delete obj.confirmText;
            }

            let params = utils.defineGetter(
                obj,
                showModalProps,
                function (obj, prop) {
                    utils.warn(
                        `showModal的参数不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: showModalProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );

            my.confirm({
                ...params,
                success(res) {
                    if (res.confirm) {
                        res.cancel = false;
                    } else {
                        res.cancel = true;
                    }
                    obj.success && obj.success(res);
                }
            });
        },
    },
    showLoading: {
        fn(obj = {}) {
            let showLoadingProps = descObj.showLoading.body.params.props;
            if (obj.title) {
                obj.content = obj.title;
                delete obj.title;
            }
            let params = utils.defineGetter(
                obj,
                showLoadingProps,
                function (obj, prop) {
                    utils.warn(
                        `showLoading的参数不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: showLoadingProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            my.showLoading(params);
        },
    },
    showActionSheet: {
        fn(obj = {}) {
            let showActionSheetProps = descObj.showActionSheet.body.params.props;
            if (obj.itemList) {
                obj.items = obj.itemList;
                delete obj.itemList;
            }
            let params = utils.defineGetter(
                obj,
                showActionSheetProps,
                function (obj, prop) {
                    utils.warn(
                        `showActionSheet的参数不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: showActionSheetProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            my.showActionSheet({
                ...params,
                success: res => {
                    res.tapIndex = res.index;
                    delete res.index;
                    obj.success && obj.success(res);
                }
            });
        },
    },
    hideToast: {
        fn(obj) {
            my.hideToast();
            if (typeof obj.success === "function") {
                obj.success();
            }
            if (typeof obj.complete === "function") {
                obj.complete();
            }
        }
    },
    hideLoading: {
        fn(obj) {
            my.hideLoading();

            if (typeof obj.success === "function") {
                obj.success();
            }

            if (typeof obj.complete === "function") {
                obj.complete();
            }
        }
    },
    showNavigationBarLoading: {
        fn(obj) {
            try {
                my.showNavigationBarLoading();
                obj.success && obj.success({ errMsg: "showNavigationBarLoading: ok" });
            } catch (err) {
                obj.fail && obj.fail(err);
            } finally {
                obj.complete && obj.complete();
            }
        }
    },
    setNavigationBarTitle: {
        fn(obj = {}) {
            return my.setNavigationBar(obj);
        }
    },
    hideNavigationBarLoading: {
        fn(obj) {
            try {
                my.hideNavigationBarLoading();
                obj.success && obj.success({ errMsg: "hideNavigationBarLoading: ok" });
            } catch (err) {
                obj.fail && obj.fail(err);
            } finally {
                obj.complete && obj.complete();
            }
        }
    },
    setTabBarStyle: {
        fn(obj={}){
            if(obj.color && obj.color.length === 4){
                const color = obj.color.slice(1)
                obj.color = `#${color}${color}`
            }
            my.setTabBarStyle(obj)
        }
    },
    stopPullDownRefresh: {
        fn(obj) {
            my.stopPullDownRefresh();

            if (typeof obj.success === "function") {
                obj.success();
            }

            if (typeof obj.complete === "function") {
                obj.complete();
            }
        }
    },
    pageScrollTo: {
        fn(obj = {}) {
            let pageScrollToParams = descObj.pageScrollTo.body.params;
            let params = utils.defineGetter(
                obj,
                pageScrollToParams,
                function (obj, prop) {
                    utils.warn(
                        `pageScrollTo的参数不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: pageScrollToParams[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            my.pageScrollTo(params);
            if (typeof obj.success === "function") {
                obj.success();
            }

            if (typeof obj.complete === "function") {
                obj.complete();
            }
        },
    },
    request: {
        fn(obj = {}) {
            if (obj.header) {
                obj.headers = obj.header;
                delete obj.header;
            }

            if (obj.responseType) {
                obj.dataType = obj.responseType;
                delete obj.responseType;
            }

            if (
                obj.method &&
                descObj.request.body.params.props[obj.method] !== undefined
            ) {
                utils.warn(
                    `request暂不支持${obj.method}请求方式`,
                    {
                        apiName: `request/${obj.method}`,
                        errorType: 0,
                        type: 'api'
                    }
                );
                obj.method = 'GET';
            }

            if (obj.responseType) {
                utils.warn(
                    "支付宝暂不支持responseType",
                    {
                        apiName: 'request/responseType',
                        errorType: 0,
                        type: 'api'
                    }
                );
            }
            let task = my.request({
                ...obj,
                success(res) {
                    res.header = res.headers;
                    res.statusCode = res.status;
                    delete res.headers;
                    delete res.status;
                    obj.success && obj.success(res);
                },
                fail(err) {
                    obj.fail && obj.fail(err);
                },
                complete(res) {
                    obj.complete && obj.complete(res);
                }
            });
            task = task || {};
            task.abort = function () { };
            task.onHeadersReceived = function () { };
            task.offHeadersReceived = function () { };
            JSON.stringify
            return task;
        },
    },
    createMapContext: {
        fn(obj = {}) {
            let createMapContextProps = descObj.createMapContext.body.returnValue.props;
            let data = my.createMapContext(obj);
            for (let key in createMapContextProps) {
                if (createMapContextProps[key].type === 0) {
                    data[key] = () => { };
                }
            }
            return utils.defineGetter(
                data,
                createMapContextProps,
                function (obj, prop) {
                    utils.warn(
                        `createMapContext的返回值不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: createMapContextProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
        },
    },
    previewImage: {
        fn(obj = {}) {
            let imgList = obj.urls || [];
            let index = imgList.indexOf(obj.current);
            obj.current = index;
            return my.previewImage(obj);
        },
    },
    compressImage: {
        fn(obj = {}) {
            if (obj.src) {
                obj.apFilePaths = [obj.src];
                delete obj.src;
            }
            my.compressImage({
                ...obj,
                success(res) {
                    res.tempFilePath = res.apFilePaths[0];
                    delete res.apFilePath;
                    obj.success && obj.success(res);
                }
            });
        },
    },
    chooseImage: {
        fn(obj = {}) {
            if (!obj.count) {
                obj.count = 9;
            }
            my.chooseImage({
                ...obj,
                success(res) {
                    res.tempFilePaths = res.apFilePaths;
                    delete res.apFilePath;
                    utils.warn(
                        "暂不支持tempFiles",
                        {
                            apiName: 'chooseImage/tempFiles',
                            errorType: 0,
                            type: 'api'
                        }
                    );
                    obj.success && obj.success(res);
                }
            });
        },
    },
    saveImageToPhotosAlbum: {
        fn(obj = {}) {
            if (obj.filePath) {
                obj.url = obj.filePath;
            }
            return my.saveImage(obj);
        }
    },
    openLocation: {
        fn(obj = {}) {
            if (obj.scale) {
                utils.warn(
                    "支付宝scale的取值为3-19，默认15",
                    {
                        apiName: 'openLocation/scale',
                        errorType: 4,
                        type: 'api'
                    }
                );

                if (obj.scale > 19) {
                    obj.scale = 19;
                } else if (obj.scale < 3) {
                    obj.scale = 3;
                }
            }
            return my.openLocation(obj);
        },
    },
    getLocation: {
        fn(obj = {}) {
            let type = obj.type || "wgs84";
            let getLocationProps = descObj.getLocation.body.returnValue;
            my.getLocation({
                ...obj,
                type: 0,
                success: function (res) {
                    let data = res;
                    if (type === "wgs84") {
                        let lnglat = utils.wgs84togcj02(
                            res.longitude,
                            res.latitude
                        );

                        data = Object.assign(res, {
                            longitude: lnglat[0],
                            latitude: lnglat[1]
                        });
                    }
                    data = utils.defineGetter(
                        data,
                        getLocationProps,
                        function (obj, prop) {
                            utils.warn(
                                `getLocation'的返回值不支持 ${prop} 属性!`,
                                {
                                    apiName: prop,
                                    errorType: getLocationProps[prop].type,
                                    type: 'api'
                                }
                            );
                        }
                    );
                    obj.success && obj.success(data);
                }
            });
        },
    },
    openCard: {
        fn() { },
    },
    login: {
        fn(obj = {}) {
            my.getAuthCode({
                scopes: 'auth_user',
                success: res => {
                    const resObj = {
                        code: res.authCode
                    };
                    if (res.authCode) {
                        resObj.errMsg = "login:ok";
                        if (obj.success) {
                            obj.success(resObj);
                        }
                    } else {
                        resObj.errMsg = "login:fail";
                        if (obj.success) {
                            obj.success(resObj);
                        }
                    }
                },
                fail: err => {
                    if (obj.fail) {
                        obj.fail(err);
                    }
                },
                complete: res => {
                    if (res.authCode) {
                        const resObj = {
                            code: res.authCode,
                            errMsg: "login:ok"
                        };
                        if (obj.complete) {
                            obj.complete(resObj);
                        }
                    } else {
                        if (obj.complete) {
                            obj.complete(res);
                        }
                    }

                }
            });
        },
    },
    hideKeyboard: {
        fn(obj = {}) {
            my.hideKeyboard(obj);

            if (typeof obj.success === "function") {
                obj.success();
            }

            if (typeof obj.complete === "function") {
                obj.complete();
            }
        }
    },
    requestPayment: {
        fn() { },
    },
    getNetworkType: {
        fn(obj = {}) {
            my.getNetworkType({
                ...obj,
                success(res) {
                    res.networkType = res.networkType.toLowerCase();
                    let typeObjMap = {
                        unknown: "unknown",
                        wifi: "wifi",
                        "2g": "2g",
                        "3g": "3g",
                        "4g": "4g"
                    };

                    if (res && !res.networkAvailable) {
                        res.networkType = "none";
                    } else {
                        res.networkType =
                            typeObjMap[res.networkType] || res.networkType;
                    }
                    obj.success && obj.success(res);
                }
            });
        },
    },
    canvasToTempFilePath: {
        fn(obj = {}) {
            const ctx = my.createCanvasContext(obj.canvasId);
            ctx.toTempFilePath({
                ...obj,
                success(res) {
                    res.tempFilePath = res.apFilePath;
                    delete res.apFilePath;
                    obj.success && obj.success(res);
                }
            });
        }
    },
    canvasPutImageData: {
        fn(obj = {}) {
            const ctx = my.createCanvasContext(obj.canvasId);
            ctx.putImageData({
                ...obj,
                success(res) {
                    obj.success && obj.success(res);
                }
            });
        }
    },
    canvasGetImageData: {
        fn(obj = {}) {
            const ctx = my.createCanvasContext(obj.canvasId);
            ctx.getImageData({
                ...obj,
                success(res) {
                    obj.success && obj.success(res);
                }
            });
        }
    },
    saveFile: {
        fn(obj = {}) {
            if (obj.tempFilePath) {
                obj.apFilePath = obj.tempFilePath;
                delete obj.tempFilePath;
            }
            my.saveFile({
                ...obj,
                success(res) {
                    res.savedFilePath = res.apFilePath;
                    delete res.apFilePath;
                    obj.success && obj.success(res);
                }
            });
        }
    },
    removeSavedFile: {
        fn(obj = {}) {
            if (obj.filePath) {
                obj.apFilePath = obj.filePath;
                delete obj.filePath;
            }
            return my.removeSavedFile(obj);
        }
    },
    getSavedFileList: {
        fn(obj = {}) {
            my.getSavedFileList({
                success(res) {
                    if (res.fileList.length) {
                        let ret = res.fileList.map(item => {
                            item.filePath = item.apFilePath;
                            delete item.apFilePath;
                            return item;
                        });
                        res.fileList = ret;
                        obj.success && obj.success(res);
                    } else {
                        obj.success && obj.success(res);
                    }
                }
            });
        }
    },
    getSavedFileInfo: {
        fn(obj = {}) {
            if (obj.filePath) {
                obj.apFilePath = obj.filePath;
                delete obj.filePath;
            }
            return my.getSavedFileInfo(obj);
        }
    },
    getFileInfo: {
        fn(obj = {}) {
            if (obj.filePath) {
                obj.apFilePath = obj.filePath;
                delete obj.filePath;
            }
            return my.getFileInfo(obj);
        }
    },
    downloadFile: {
        fn(obj = {}) {
            let downloadFileReturnValue = descObj.downloadFile.body.returnValue;
            if (obj.filePath !== undefined) {
                utils.warn(
                    "支付宝暂不支持 filePath",
                    {
                        apiName: 'downloadFile/filePath',
                        errorType: 0,
                        type: 'api'
                    }
                );
            }
            my.downloadFile({
                ...obj,
                success(res) {
                    res.tempFilePath = res.apFilePath;
                    if (res.apFilePath) {
                        res.statusCode = 200;
                    }
                    delete res.apFilePath;
                    if (!res.statusCode) {
                        utils.warn(
                            "支付宝暂不支持statusCode",
                            {
                                apiName: 'downloadFile/statusCode',
                                errorType: 0,
                                type: 'api'
                            }
                        );
                    }
                    obj.success && obj.success(res);
                }
            });
            const task = {
                abort() { },
                offHeadersReceived() { },
                offProgressUpdate() { },
                onHeadersReceived() { },
                onProgressUpdate() { },
            };
            return utils.defineGetter(
                task,
                downloadFileReturnValue,
                function (obj, prop) {
                    utils.warn(
                        `downloadFile的返回值不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: downloadFileReturnValue[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
        },
    },
    uploadFile: {
        fn(obj = {}) {
            let uploadFileValue = descObj.uploadFile.body.returnValue;
            if (obj.name) {
                obj.fileName = obj.name;
                delete obj.name;
            }
            obj.fileType = 'image';
            my.uploadFile(obj);
            const task = {
                abort() { },
                offHeadersReceived() { },
                offProgressUpdate() { },
                onHeadersReceived() { },
                onProgressUpdate() { },
            };
            return utils.defineGetter(
                task,
                uploadFileValue,
                function (obj, prop) {
                    utils.warn(
                        `uploadFile的返回值不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: uploadFileValue[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
        },
    },
    connectSocket: {
        fn(obj = {}) {
            let connectSocketParams = descObj.connectSocket.body.params;
            let params = utils.defineGetter(
                obj,
                connectSocketParams,
                function (obj, prop) {
                    utils.warn(
                        `connectSocket的参数不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: connectSocketParams[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            my.connectSocket(params);
            const task = {
                close(obj = {}) {
                    my.closeSocket(obj);
                },
                onClose(fn) {
                    my.onSocketClose(fn);
                },
                onError(fn) {
                    my.offSocketOpen(fn);
                },
                onMessage(fn) {
                    my.onSocketMessage(fn);
                },
                onOpen(fn) {
                    my.onSocketOpen(function (res) {
                        fn(res);
                    });
                },
                send(obj = {}) {
                    my.sendSocketMessage(obj);
                },
            };
            return task;
        },
    },
    onSocketOpen: {
        fn(obj) {
            my.onSocketOpen((res) => {
                utils.warn(
                    'onSocketOpen 成功回调缺少header',
                    {
                        apiName: 'onSocketOpen/header',
                        errorType: 0,
                        type: 'api'
                    }
                );
                obj(res);
            });
        },
    },
    closeSocket: {
        fn(obj = {}) {
            let closeSocketParams = descObj.closeSocket.body.params;
            let params = utils.defineGetter(
                obj,
                closeSocketParams,
                function (obj, prop) {
                    utils.warn(
                        `closeSocket的参数不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: closeSocketParams[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            my.closeSocket(params);
        },
    },
    getRecorderManager: {
        fn() {
            let getRecorderManagerProps = descObj.getRecorderManager.body.returnValue.props;
            const RecorderManager = my.getRecorderManager();
            for (let key in getRecorderManagerProps) {
                if (getRecorderManagerProps[key]["type"] === 0) {
                    RecorderManager[key] = () => { };
                }
            }
            return utils.defineGetter(
                RecorderManager,
                getRecorderManagerProps,
                function (obj, prop) {
                    utils.warn(
                        `getRecorderManager的返回值不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: getRecorderManagerProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
        },
    },
    setStorageSync: {
        fn(key = "", data = "") {
            if (key && data) {
                return my.setStorageSync({
                    "key": key,
                    "data": data
                });
            }
        }
    },
    getStorageSync: {
        fn(key = "") {
            const storeData = my.getStorageSync({
                key
            });

            return storeData.data || '';
        }
    },
    removeStorageSync: {
        fn(key = "") {
            return my.removeStorageSync({ key });
        }
    },
};

module.exports = apiObj;
