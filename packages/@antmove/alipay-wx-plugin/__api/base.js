/**
 * type:0 missing
 * type:1 diff
 * type:3 - diffType - 类型不同
 * 
 */
const utils = require("./utils");
const descObj = require("./desc.js");
const apiObj = {
    setNavigationBar: {
        fn (obj = {}) {
            if (obj.backgroundColor) {
                if (!obj.frontColor) {
                    utils.warn(
                        `setNavigationBarColor的frontColor是必传的!`,
                        {
                            apiName: 'setTabBarItem/frontColor',
                            errorType: 0,
                            type: 'api'
                        }
                    );
                }
                wx.setNavigationBarColor({ backgroundColor: obj.backgroundColor });
            }
            let setNavigationBarParams = descObj.setNavigationBar.body.params.props;
            let params = utils.defineGetter(
                obj,
                setNavigationBarParams,
                function (obj, prop) {
                    utils.warn(
                        `setNavigationBarTitle的参数不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: setNavigationBarParams[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            wx.setNavigationBarTitle(params);
        }
    },
    alert: {
        fn (obj = {}) {
            if (obj.buttonText) {
                obj.confirmText = obj.buttonText;
                delete obj.confirmText;
            }
            wx.showModal({
                ...obj,
                showCancel: false
            });
        }
    },
    confirm: {
        fn (obj = {}) {
            if (obj.confirmButtonText) {
                obj.confirmText = obj.confirmButtonText;
                delete obj.confirmButtonText;
            }
            if (obj.cancelButtonText) {
                obj.cancelText = obj.cancelButtonText;
                delete obj.cancelButtonText;
            }
            wx.showModal(obj);
        }
    },
    call: {
        fn () {
            utils.warn(
                `微信小程序不支持call方法`, 
                {
                    apiName: 'call',
                    errorType: 0,
                    type: 'api'
                }
            );
        }
    },
    hideLoading: {
        fn (obj = {}) {
            let hideLoadingParams = descObj.hideLoading.body.params.props;
            let params = utils.defineGetter(
                obj,
                hideLoadingParams,
                function (obj, prop) {
                    utils.warn(
                        `hideLoading的参数不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: hideLoadingParams[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            wx.hideLoading(params);
        }
    },
    showActionSheet: {
        fn (obj = {}) {
            let showActionSheetProps = descObj.showActionSheet.body.params.props;
            if (obj.items) {
                obj.itemList = obj.items.slice(0, 6);
                delete obj.items;
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
            wx.showActionSheet({
                ...params,
                success: res => {
                    res.index = res.tapIndex;
                    delete res.tapIndex;
                    obj.success && obj.success(res);
                }
            });
        }
    },
    showLoading: {
        fn (obj = {}) {
            let showLoadingProps = descObj.showLoading.body.params.props;
            if (obj.content) {
                obj.title = obj.content;
                delete obj.content;
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
            wx.showLoading(params);
        }
    },
    showToast: {
        fn (obj = {}) {
            let showToastProps = descObj.showToast.body.params.props;
            obj.type = obj.type ? obj.type : 'none';
            if (obj.content) {
                obj.title = obj.content;
                delete obj.content;
            }
            if (!obj.duration) {
                obj.duration = 1500;
            }
            if (obj.type) {
                switch (obj.type) {
                case "success":
                    obj.icon = "success";
                    break;
                case "fail":
                    obj.icon = "none";
                    utils.warn(
                        "showToast暂不支持fail",
                        {
                            apiName: 'showToast/fail',
                            errorType: 0,
                            type: 'api'
                        }
                    );
                    break;
                case "exception":
                    obj.icon = "none";
                    utils.warn(
                        "showToast暂不支持exception ",
                        {
                            apiName: 'showToast/exception ',
                            errorType: 0,
                            type: 'api'
                        }
                    );
                    break;
                case "none":
                    obj.icon = "none";
                    break;
                default:
                    break;
                }
                delete obj.type;
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
            wx.showToast({
                ...params,
                success: function () {
                    setTimeout(function () {
                        params.success && params.success();
                    }, obj.duration);
                },
                fail: function () {
                    setTimeout(function () {
                        params.fail && params.fail();
                    }, obj.duration);
                }
            });
        }
    },
    createCanvasContext: {
        fn (params) {
            const canvasContext = wx.createCanvasContext(params);
            return canvasContext;
        }
    },
    createMapContext: {
        fn (params) {
            const mapContext = wx.createMapContext(params);
            Object.keys(descObj.createMapContext.body.returnValue.props).map(key => {
                if (descObj.createMapContext.body.returnValue.props[key].type === 0) {
                    mapContext[key] = () => {
                        console.warn(`参数${key}不支持`);
                    };
                    console.warn(`参数${key}不支持`);
                }
            });
            return mapContext;
        }
    },
    createIntersectionObserver: {
        fn (obj = {}) {
            if (obj.selectAll) {
                obj.observeAll = obj.selectAll;
                delete obj.selectAll;
            }
            wx.createIntersectionObserver(obj);
        }
    },
    createSelectorQuery: {
        fn (obj = {}) {
            let createSelectorQueryProps = descObj.createSelectorQuery.body.params.props;
            let params = utils.defineGetter(
                obj,
                createSelectorQueryProps,
                function (obj, prop) {
                    utils.warn(
                        `createSelectorQuery的参数不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: createSelectorQueryProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            return wx.createSelectorQuery(params);
        }
    },
    chooseImage: {
        fn (obj = {}) {
            if (!obj.count) {
                obj.count = 9;
            }
            wx.chooseImage({
                ...obj,
                success (res) {
                    res.apFilePaths = res.tempFilePaths;
                    delete res.tempFilePaths;
                    obj.success && obj.success(res);
                }
            });
        }
    },
    compressImage: {
        fn (obj = {}) {
            if (obj.apFilePaths) {
                obj.src = obj.apFilePaths.toString();
                delete obj.apFilePaths;
            }
            if (obj.compressLevel) {
                obj.compressLevel = obj.compressLevel / 5 * 100;
                obj.quality = obj.compressLevel;
                delete obj.compressLevel;
            } else {
                obj.quality = 80;
            }
            wx.compressImage({
                ...obj,
                success (res) {
                    res.apFilePaths = [res.tempFilePath];
                    delete res.tempFilePath;
                    obj.success && obj.success(res);
                }
            });
        }
    },
    previewImage: {
        fn (obj = {}) {
            const index = obj.current || 0;
            obj.current = obj.urls[index];
            return wx.previewImage(obj);
        }
    },
    saveImage: {
        fn (obj = {}) {
            if (obj.url) {
                obj.filePath = obj.url;
                delete obj.url;
            }
            wx.getSetting({
                success (res) {
                    let writePhotos = res.authSetting['scope.writePhotosAlbum'];
                    if (!writePhotos) {
                        wx.authorize({
                            scope: 'scope.writePhotosAlbum',
                            success () {}
                        });
                    }
                    if (obj.filePath.includes('https') || obj.filePath.includes('http')) {
                        utils.warn(
                            "微信小程序保存照片API不支持网络图片路径", {
                                apiName: 'saveImageToPhotosAlbum',
                                errorType: 0,
                                type: 'api'
                            }
                        );
                    }
                    wx.saveImageToPhotosAlbum({
                        ...obj,
                        success: () => {
                            obj.success && obj.success();
                        },
                        fail: () => {
                            obj.fail && obj.fail();
                        },
                        complete: () => {
                            obj.complete && obj.complete();
                        }
                    });
                }
            });
        }
    },
    getFileInfo: {
        fn (obj = {}) {
            if (obj.apFilePath) {
                obj.filePath = obj.apFilePath;
                delete obj.apFilePath;
            }
            return wx.getFileInfo(obj);
        }
    },
    getSavedFileInfo: {
        fn (obj = {}) {
            if (obj.apFilePath) {
                obj.filePath = obj.apFilePath;
                delete obj.apFilePath;
            }
            return wx.getSavedFileInfo(obj);
        }
    },
    getSavedFileList: {
        fn (obj = {}) {
            wx.getSavedFileList({
                success (res) {
                    if (res.fileList.length) {
                        let ret = res.fileList.map(item => {
                            item.apFilePath = item.filePath;
                            delete item.filePath;
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
    removeSavedFile: {
        fn (obj = {}) {
            if (obj.apFilePath) {
                obj.filePath = obj.apFilePath;
                delete obj.apFilePath;
            }
            return wx.removeSavedFile(obj);
        }
    },
    saveFile: {
        fn (obj = {}) {
            if (obj.apFilePath) {
                obj.tempFilePath = obj.apFilePath;
                delete obj.apFilePath;
            }
            wx.saveFile({
                ...obj,
                success (res) {
                    res.apFilePath = res.savedFilePath;
                    delete res.savedFilePath;
                    obj.success && obj.success(res);
                }
            });
        }
    },
    getStorageSync: {
        fn (obj = {}) {
            let res = wx.getStorageSync(obj.key);
            res = { error: undefined, success: true, key: obj.key, data: res };
            return res;
        }
    },
    setStorageSync: {
        fn (obj = {}) {
            wx.setStorageSync(obj.key, obj.data);
            return {error: undefined, success: true};
        }
    },
    removeStorageSync: {
        fn (obj = {}) {
            wx.removeStorageSync(obj.key);
            return { error: undefined, success: true };
        }
    },
    clearStorageSync: {
        fn () {
            wx.clearStorageSync();
            return { error: undefined, success: true };
        }
    },
    getLocation: {
        fn (obj = {}) {
            if (obj.cacheTimeout !== undefined) {
                utils.warn(
                    "微信暂不支持 cacheTimeout", {
                        apiName: 'getLocation/cacheTimeout',
                        errorType: 0,
                        type: 'api'
                    }
                );
            }
            utils.warn(
                `微信小程序获取用户地理位置时需要在app.json中配置permission字段`,
                {
                    apiName: 'getLocation',
                    errorType: 0,
                    type: 'api'
                }
            );
            obj.type = obj.type || 0;
            wx.getSetting({
                success (res) {
                    const userLocation = res.authSetting['scope.userLocation'];
                    if (userLocation === false) {
                        wx.authorize({scope: 'scope.userLocation'});
                    }
                    wx.getLocation({
                        ...obj,
                        type: 'wgs84',
                        success: function (res) {
                            let data = res;
                            let lnglat = utils.wgs84togcj02(
                                res.longitude,
                                res.latitude
                            );
                            data = Object.assign(res, {
                                longitude: lnglat[0],
                                latitude: lnglat[1]
                            });
                            obj.success && obj.success(data);
                        },
                        fail: function () {
                            obj.fail() && obj.fail();
                        }
                    });
                }
            });
        }
    },
    openLocation: {
        fn (obj = {}) {
            if (obj.scale) {
                utils.warn(
                    "微信scale的取值为5-18，默认18",
                    {
                        apiName: 'openLocation/scale',
                        errorType: 4,
                        type: 'api'
                    }
                );

                if (obj.scale > 18) {
                    obj.scale = 18;
                } else if (obj.scale < 5) {
                    obj.scale = 5;
                }
            } else {
                obj.scale = 18;
            }
            obj.longitude = parseFloat(obj.longitude);
            obj.latitude = parseFloat(obj.latitude);
            return wx.openLocation(obj);
        }
    },
    connectSocket: {
        fn (obj = {}) {
            let connectSocketParams = descObj.connectSocket.body.params.props;
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
            wx.connectSocket(params);
        }
    },
    downloadFile: {
        fn (obj = {}) {
            wx.downloadFile({
                ...obj,
                success (res) {
                    res.apFilePath = res.tempFilePath;
                    delete res.tempFilePath;
                    obj.success && obj.success(res);
                },
                fail (res) {
                    res.errorMessage = res.errMsg;
                    delete res.errMsg;
                    obj.fail && obj.fail(res);
                }
            });
        }
    },
    onSocketMessage: {
        fn (obj = {}) {
            let onSocketMessageReturnValue = descObj.onSocketMessage.body.returnValue.props;
            wx.onSocketMessage(obj);
            return utils.defineGetter(
                obj,
                onSocketMessageReturnValue,
                function (obj, prop) {
                    utils.warn(
                        `onSocketMessage的返回值不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: onSocketMessageReturnValue[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
        }
    },
    request: {
        fn (obj = {}) {
            if (obj.headers) {
                obj.header = obj.headers;
                delete obj.headers;
            }
            if (obj.timeout) {
                utils.warn(
                    "微信request的不支持timeout属性",
                    {
                        apiName: 'request/timeout',
                        errorType: 0,
                        type: 'api'
                    }
                );
            }
            wx.request({
                ...obj,
                success (res) {
                    res.headers = res.header;
                    res.status = res.statusCode;
                    delete res.header;
                    delete res.statusCode;
                    obj.success && obj.success(res);
                },
                fail (err) {
                    obj.fail && obj.fail(err);
                },
                complete (res) {
                    obj.complete && obj.complete(res);
                }
            });
        }
    },
    sendSocketMessage: {
        fn (obj = {}) {
            let sendSocketMessageProps = descObj.sendSocketMessage.body.params.props;
            wx.sendSocketMessage(obj);
            return utils.defineGetter(
                obj,
                sendSocketMessageProps,
                function (obj, prop) {
                    utils.warn(
                        `sendSocketMessage的返回值不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: sendSocketMessageProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
        }
    },
    uploadFile: {
        fn (obj = {}) {
            if (obj.fileName) {
                obj.name = obj.fileName;
                delete obj.fileName;
            }
            if (obj.fileType) {
                utils.warn(
                    "微信暂不支持 fileType",
                    {
                        apiName: 'uploadFile/fileType',
                        errorType: 0,
                        type: 'api'
                    }
                );
            }
            wx.uploadFile({
                ...obj,
                success: res => {
                    if (res.header) {
                        utils.warn(
                            "微信暂不支持 header",
                            {
                                apiName: 'uploadFile/header',
                                errorType: 0,
                                type: 'api'
                            }
                        );
                    }
                    obj.success && obj.success(res);
                },
                fail (res) {
                    res.errorMessage = res.errMsg;
                    delete res.errMsg;
                    obj.fail && obj.fail(res);
                }
            });
        }
    },
    showSharePanel: {
        fn () {
            wx.showShareMenu();
        }
    },
    SDKVersion: {
        fn () {
            let SDKVersion = '';
            wx.getSystemInfo({
                success (res) {
                    SDKVersion = res.SDKVersion;
                }
            });
            return SDKVersion;
        }
    }
};

module.exports = apiObj;