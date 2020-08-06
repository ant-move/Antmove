/**
 * type:0 missing
 * type:1 diff
 *
 */
const utils = require("./utils");
const descObj = require("./desc.js");

const apiObj = {
    canIUse: {
        fn (params) {
            let paramsList = params.split(".");
            if (paramsList[1] && paramsList[1] === "success") {
                paramsList[1] = "return";
            }
            let str = paramsList.join(".");
            return my.canIUse(str);
        }
    },
    getSystemInfoSync: {
        fn () {
            let ret = my.getSystemInfoSync();
            let getSystemInfoSyncProps = descObj.getSystemInfoSync.body.returnValue.props;
            ret = utils.defineGetter(
                ret,
                getSystemInfoSyncProps,
                function (obj, prop) {
                    utils.warn(
                        `getSystemInfoSync的返回值不支持 ${prop} 属性!`, {
                            apiName: `getSystemInfoSync/${prop}`,
                            errorType: getSystemInfoSyncProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            /**
             * 处理Androi屏幕宽度返回值
             */
            if (ret.platform === "Android") {
                ret.screenWidth = ret.screenWidth / ret.pixelRatio;
                ret.screenHeight = ret.screenHeight / ret.pixelRatio
            }
            // mock的版本，确保微信小程序源码里读取后和目标版本匹配都能通过
            ret.SDKVersion = '10.0.0'

            return ret
        },
    },
    getSystemInfo: {
        fn (obj = {}) {
            let getSystemInfoProps = descObj.getSystemInfo.body.returnValue.props;
            my.getSystemInfo({
                ...obj,
                success: res => {
                    res = utils.defineGetter(
                        res,
                        getSystemInfoProps,
                        function (obj, prop) {
                            utils.warn(
                                `getSystemInfo的返回值不支持 ${prop} 属性!`, {
                                    apiName: `getSystemInfo/${prop}`,
                                    errorType: getSystemInfoProps[prop].type,
                                    type: 'api'
                                }
                            );
                        }
                    );
                    /**
                     * 处理Androi屏幕宽度返回值
                     */
                    if (res.platform === "Android") {
                        res.screenWidth = res.screenWidth / res.pixelRatio;
                        res.screenHeight = res.screenHeight / res.pixelRatio
                    }

                    // mock的版本，确保微信小程序源码里读取后和目标版本匹配都能通过
                    res.SDKVersion = '10.0.0'
                    obj.success && obj.success(res);
                }
            });
        },
    },
    showToast: {
        fn (obj = {}) {
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
                        "showToast暂不支持loading", {
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
                        `showToast的参数不支持 ${prop} 属性!`, {
                            apiName: `showToast/${prop}`,
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
        fn (obj = {}) {
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
                        `showModal的参数不支持 ${prop} 属性!`, {
                            apiName: `showModal/${prop}`,
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
        fn (obj = {}) {
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
                        `showLoading的参数不支持 ${prop} 属性!`, {
                            apiName: `showLoading/${prop}`,
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
        fn (obj = {}) {
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
                        `showActionSheet的参数不支持 ${prop} 属性!`, {
                            apiName: `showActionSheet/${prop}`,
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
        fn (obj) {
            try {
                my.hideToast();
                obj.success && obj.success({
                    errMsg: "hideToast: ok"
                });
            } catch (err) {
                obj.fail && obj.fail(err);
            } finally {
                obj.complete && obj.complete({
                    errMsg: "hideToast: ok"
                });
            }
        }
    },
    hideLoading: {
        fn (obj) {
            try {
                my.hideLoading();
                obj.success && obj.success({
                    errMsg: "hideLoading: ok"
                });
            } catch (err) {
                obj.fail && obj.fail(err);
            } finally {
                obj.complete && obj.complete({
                    errMsg: "hideLoading: ok"
                });
            }
        }
    },
    showNavigationBarLoading: {
        fn (obj = {}) {
            try {
                my.showNavigationBarLoading();
                obj.success && obj.success({
                    errMsg: "showNavigationBarLoading: ok"
                });
            } catch (err) {
                obj.fail && obj.fail(err);
            } finally {
                obj.complete && obj.complete({
                    errMsg: "showNavigationBarLoading: ok"
                });
            }
        }
    },
    setNavigationBarTitle: {
        fn (obj = {}) {
            return my.setNavigationBar(obj);
        }
    },
    setNavigationBarColor: {
        fn (obj = {}) {
            return my.setNavigationBar(obj);
        }
    },
    hideNavigationBarLoading: {
        fn (obj = {}) {
            try {
                my.hideNavigationBarLoading();
                obj.success && obj.success({
                    errMsg: "hideNavigationBarLoading: ok"
                });
            } catch (err) {
                obj.fail && obj.fail(err);
            } finally {
                obj.complete && obj.complete({
                    errMsg: "hideNavigationBarLoading: ok"
                });
            }
        }
    },
    setTabBarStyle: {
        fn (obj = {}) {
            if (obj.color && obj.color.length === 4) {
                const color = obj.color.slice(1);
                obj.color = `#${color}${color}`;
            }
            my.setTabBarStyle(obj);
        }
    },
    setTabBarItem: {
        fn (obj = {}) {
            if (!obj.iconPath || !obj.selectedIconPath) {
                utils.warn(
                    `setTabBarItem的iconPath和selectedIconPath是必传的!`, {
                        apiName: 'setTabBarItem/iconPath和selectedIconPath',
                        errorType: 0,
                        type: 'api'
                    }
                );
            }
            my.setTabBarItem(obj);
        }
    },
    stopPullDownRefresh: {
        fn (obj = {}) {
            try {
                my.stopPullDownRefresh();
                obj.success && obj.success({
                    errMsg: "stopPullDownRefresh: ok"
                });
            } catch (err) {
                obj.fail && obj.fail(err);
            } finally {
                obj.complete && obj.complete({
                    errMsg: "stopPullDownRefresh: ok"
                });
            }

        }
    },
    pageScrollTo: {
        fn (obj = {}) {
            let pageScrollToParams = descObj.pageScrollTo.body.params.props;
            let params = utils.defineGetter(
                obj,
                pageScrollToParams,
                function (obj, prop) {
                    utils.warn(
                        `pageScrollTo的参数不支持 ${prop} 属性!`, {
                            apiName: `pageScrollTo/${prop}`,
                            errorType: pageScrollToParams[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            my.pageScrollTo(params);
            try {
                my.pageScrollTo();
                obj.success && obj.success({
                    errMsg: "pageScrollTo: ok"
                });
            } catch (err) {
                obj.fail && obj.fail(err);
            } finally {
                obj.complete && obj.complete({
                    errMsg: "pageScrollTo: ok"
                });
            }
        },
    },
    request: {
        fn (obj = {}) {
            if (obj.header) {
                obj.headers = obj.header;
                delete obj.header;
            }

            obj.method = obj.method || '';

            obj.method = obj.method.toUpperCase();

            if (
                obj.method !== 'GET' &&
                obj.method !== 'POST'
            ) {
                utils.warn(
                    `request暂不支持${obj.method}请求方式`, {
                        apiName: `request/${obj.method}`,
                        errorType: 0,
                        type: 'api'
                    }
                );
                obj.method = 'GET';
            }

            if (obj.responseType) {
                utils.warn(
                    "支付宝暂不支持responseType", {
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
            task.abort = function () {};
            task.onHeadersReceived = function () {};
            task.offHeadersReceived = function () {};
            return task;
        },
    },
    createMapContext: {
        fn (obj = {}) {
            let createMapContextProps = descObj.createMapContext.body.returnValue.props;
            let data = my.createMapContext(obj);
            for (let key in createMapContextProps) {
                if (createMapContextProps[key].type === 0) {
                    data[key] = () => {};
                }
            }
            return utils.defineGetter(
                data,
                createMapContextProps,
                function (obj, prop) {
                    utils.warn(
                        `createMapContext的返回值不支持 ${prop} 属性!`, {
                            apiName: `createMapContext/${prop}`,
                            errorType: createMapContextProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
        },
    },
    createCameraContext: {
        fn (obj) {
            const res = my.createCameraContext({
                ...obj
            });
            res.takePhoto = () => {
                utils.warn(
                    "支付宝暂不支持takePhoto", {
                        apiName: `createCameraContext/takePhoto`,
                        errorType: 0,
                        type: 'api'
                    }
                );
            };
            res.startRecord = () => {
                utils.warn(
                    "支付宝暂不支持startRecord", {
                        apiName: `createCameraContext/startRecord`,
                        errorType: 0,
                        type: 'api'
                    }
                );
            };
            res.stopRecord = () => {
                utils.warn(
                    "支付宝暂不支持stopRecord", {
                        apiName: `createCameraContext/stopRecord`,
                        errorType: 0,
                        type: 'api'
                    }
                );
            };
            return res;
        }
    },
    previewImage: {
        fn (obj = {}) {
            let imgList = obj.urls || [];
            let index = imgList.indexOf(obj.current);
            obj.current = index;
            return my.previewImage(obj);
        },
    },
    compressImage: {
        fn (obj = {}) {
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
        fn (obj = {}) {
            if (!obj.count) {
                obj.count = 9;
            }
            my.chooseImage({
                ...obj,
                success(res) {
                    res.tempFilePaths = res.apFilePaths;
                    delete res.apFilePath;
                    utils.warn(
                        "暂不支持tempFiles", {
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
        fn (obj = {}) {
            if (obj.filePath) {
                obj.url = obj.filePath;
            }
            return my.saveImage(obj);
        }
    },
    openLocation: {
        fn (obj = {}) {
            if (obj.scale) {
                utils.warn(
                    "支付宝scale的取值为3-19，默认15", {
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
        fn (obj = {}) {
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
                                `getLocation的返回值不支持 ${prop} 属性!`, {
                                    apiName: `getLocation/${prop}`,
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
        fn () {},
    },
    login: {
        fn (obj = {}) {
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
        fn (obj = {}) {
            my.hideKeyboard(obj);

            if (typeof obj.success === "function") {
                obj.success();
            }

            if (typeof obj.complete === "function") {
                obj.complete();
            }
        }
    },
    getNetworkType: {
        fn (obj = {}) {
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
        fn (obj = {}) {
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
        fn (obj = {}) {
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
        fn (obj = {}) {
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
        fn (obj = {}) {
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
        fn (obj = {}) {
            if (obj.filePath) {
                obj.apFilePath = obj.filePath;
                delete obj.filePath;
            }
            return my.removeSavedFile(obj);
        }
    },
    getSavedFileList: {
        fn (obj = {}) {
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
        fn (obj = {}) {
            if (obj.filePath) {
                obj.apFilePath = obj.filePath;
                delete obj.filePath;
            }
            return my.getSavedFileInfo(obj);
        }
    },
    getFileInfo: {
        fn (obj = {}) {
            if (obj.filePath) {
                obj.apFilePath = obj.filePath;
                delete obj.filePath;
            }
            return my.getFileInfo(obj);
        }
    },
    downloadFile: {
        fn (obj = {}) {
            let downloadFileReturnValue = descObj.downloadFile.body.returnValue;
            if (obj.filePath !== undefined) {
                utils.warn(
                    "支付宝暂不支持 filePath", {
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
                            "支付宝暂不支持statusCode", {
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
                abort() {},
                offHeadersReceived() {},
                offProgressUpdate() {},
                onHeadersReceived() {},
                onProgressUpdate() {},
            };
            return utils.defineGetter(
                task,
                downloadFileReturnValue,
                function (obj, prop) {
                    utils.warn(
                        `downloadFile的返回值不支持 ${prop} 属性!`, {
                            apiName: `downloadFile/${prop}`,
                            errorType: downloadFileReturnValue[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
        },
    },
    uploadFile: {
        fn (obj = {}) {
            let uploadFileValue = descObj.uploadFile.body.returnValue;
            if (obj.name) {
                obj.fileName = obj.name;
                delete obj.name;
            }
            const pathArr = obj.filePath.split('.');
            obj.fileType = 'image';
            const fileType = {
                'video': ['ogg', 'avi', 'wma', 'rmvb', 'rm', 'flash', 'mp4', '3gp'],
                'audio': ['wav', 'mp3'],
            };
            let typeName = pathArr[pathArr.length - 1];
            Object.keys(fileType).forEach(key => {
                fileType[key].forEach(item => {
                    if (typeName.toLowerCase() === item) {
                        obj.fileType = key;
                    }
                });
            });
            my.uploadFile(obj);
            const task = {
                abort() {},
                offHeadersReceived() {},
                offProgressUpdate() {},
                onHeadersReceived() {},
                onProgressUpdate() {},
            };
            return utils.defineGetter(
                task,
                uploadFileValue,
                function (obj, prop) {
                    utils.warn(
                        `uploadFile的返回值不支持 ${prop} 属性!`, {
                            apiName: `uploadFile/${prop}`,
                            errorType: uploadFileValue[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
        },
    },
    connectSocket: {
        fn (obj = {}) {
            let connectSocketParams = descObj.connectSocket.body.params;
            let params = utils.defineGetter(
                obj,
                connectSocketParams,
                function (obj, prop) {
                    utils.warn(
                        `connectSocket的参数不支持 ${prop} 属性!`, {
                            apiName: `connectSocket/${prop}`,
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
                        fn (res);
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
        fn (obj) {
            my.onSocketOpen((res) => {
                utils.warn(
                    'onSocketOpen 成功回调缺少header', {
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
        fn (obj = {}) {
            let closeSocketParams = descObj.closeSocket.body.params;
            let params = utils.defineGetter(
                obj,
                closeSocketParams,
                function (obj, prop) {
                    utils.warn(
                        `closeSocket的参数不支持 ${prop} 属性!`, {
                            apiName: `closeSocket/${prop}`,
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
        fn () {
            let getRecorderManagerProps = descObj.getRecorderManager.body.returnValue.props;
            const RecorderManager = my.getRecorderManager();
            for (let key in getRecorderManagerProps) {
                if (getRecorderManagerProps[key]["type"] === 0) {
                    RecorderManager[key] = () => {};
                }
            }
            return utils.defineGetter(
                RecorderManager,
                getRecorderManagerProps,
                function (obj, prop) {
                    utils.warn(
                        `getRecorderManager的返回值不支持 ${prop} 属性!`, {
                            apiName: `getRecorderManager/${prop}`,
                            errorType: getRecorderManagerProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
        },
    },
    setStorageSync: {
        fn (key = "", data = "") {
            if (key && data) {
                return my.setStorageSync({
                    "key": key,
                    "data": data
                });
            }
        }
    },
    getStorageSync: {
        fn (key = "") {
            const storeData = my.getStorageSync({
                key
            });

            return storeData.data || '';
        }
    },
    removeStorageSync: {
        fn (key = "") {
            return my.removeStorageSync({
                key
            });
        }
    },
    createSelectorQuery: {
        fn () {
            let SQ = my.createSelectorQuery();

            function Query() {
                this.query = SQ;
                this._selectType = 0; // 0: array, 1: object
                this.in = function (p) {
                    if (typeof this.query.in === 'function') {
                        this.query.in(p)
                        return this;
                    } else {
                        return this;
                    }
                }
                this.select = function (p) {
                    this.query.select(p);
                    this._selectType = 1;
                    return this;
                };

                this.selectAll = function (p) {
                    this.query.selectAll(p);
                    return this;
                };

                this.selectViewport = function (p) {
                    this.query.selectViewport(p);
                    return this;
                };

                this.boundingClientRect = function (p) {
                    let self = this;
                    this.query.boundingClientRect().exec(function (ret) {
                        if (self._selectType) {
                            self._selectType = 0;
                            if (Array.isArray(ret) && ret.length === 1) {
                                ret = ret[0];
                            }
                        }

                        p && p(ret);
                    });
                    return this;
                };

                this.scrollOffset = function (p) {
                    let self = this;
                    this.query.scrollOffset().exec(function (ret) {
                        if (self._selectType) {
                            self._selectType = 0;
                            if (Array.isArray(ret) && ret.length === 1) {
                                ret = ret[0];
                            }
                        }

                        p && p(ret);
                    });
                    return this;
                };
            }

            Query.prototype = SQ;

            let res = new Query();

            return res;
        }
    },
    createAnimation: {
        fn (obj = {}) {
            let animation = my.createAnimation(obj);
            animation.config.delay = animation.config.delay || 0;
            animation.option = {
                transition: animation.config,
                transformOrigin: animation.config.transformOrigin,
            };
            return animation;
        }
    },
    showShareMenu: {
        fn (obj = {}) {
            return my.showSharePanel()
        }
    },
    saveVideoToPhotosAlbum: {
        fn (obj = {}) {
            const params = {
                ...obj,
                src: obj.filePath
            }
            return my.saveVideoToPhotosAlbum(params)
        }
    },
    chooseAddress: {
        fn (obj = {}) {
            my.getAddress({
                success(res) {
                  const result = {}
                  result.address = `${res.provinceName || ''}${res.cityName || ''}${res.countyName || ''}${res.detailInfo || ''}`
                  result.prov = res.provinceName
                  result.city = res.cityName
                  result.area = res.countyName
                  result.street = res.detailInfo
                  result.fullname = res.userName
                  result.mobilePhone = res.telNumber
                  result.resultStatus = res.errMsg

                  obj.success && obj.success(result);
                }
            });
        }
    },
    chooseVideo: {
      fn (obj = {}) {
        my.chooseVideo({
            success(result) {
              result.tempFilePath = result.apFilePath
              delete result.apFilePath
              obj.success && obj.success(result);
            }
        });
    }
    }
};

module.exports = apiObj;
